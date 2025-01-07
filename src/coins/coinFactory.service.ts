import { Injectable, NotFoundException } from "@nestjs/common";
import { DbService } from "src/db/db.service";


export enum PointsEnum {
    signup = "signup",
    reelUpload = "reelUpload",
    views_1000 = "views_1000",
    likes_100 = "likes_100",
    comments_100 = "comments_100",
    followers_1000 = "followers_1000",
    shares_100 = "shares_100",
}
export enum TransactionTypeEnum {
    earn = "earn",
    spend = "spend",
}

@Injectable()
export class CoinFactory {
    constructor(private readonly db: DbService) { }


    async Transaction(id: string, pointsEnum: PointsEnum, typeEnum: TransactionTypeEnum, desc?: string) {
        const { value } = await this.db.points.findFirst({ where: { name: pointsEnum } })
        if (value) {
            return await this.db.coins.create({ data: { userId: id, value, desc, type: typeEnum } })
        }
        throw new NotFoundException("No Points found")
    }

    async Views_1000(reelId: string, reelCount: number, reelUserId: string) {

        const th = 100;
        const mileStone: number = Math.floor(reelCount / th)

        const dbMileStone = await this.db.coinMileStone.findFirst({ where: { objId: reelId, objType: "reel" }, select: { mileStone: true } });

        if (dbMileStone?.mileStone < mileStone) {
            console.log("MileStone Achived for reel for 100 views for id :", reelId)

            await this.db.coinMileStone.updateMany({ where: { objId: reelId, objType: "reel" }, data: { mileStone } })

            await this.Transaction(reelUserId, PointsEnum.views_1000, TransactionTypeEnum.earn, `earned on 1000 views on reel of id:${reelId}`)

            return null
        }
        console.log("MileStone was Not Achived")
        return null
    }


    Followers_1000() { }

    // 100s
    async Likes_100(reelId: string, likesCount: number, reelUserId: string) {

        const th = 100;
        const mileStone: number = Math.floor(likesCount / th)

        const dbMileStone = await this.db.coinMileStone.findFirst({ where: { objId: reelId, objType: "like" }, select: { mileStone: true } });

        if (dbMileStone?.mileStone < mileStone) {
            console.log("MileStone Achived for reel for 100 views for id :", reelId)

            await this.db.coinMileStone.updateMany({ where: { objId: reelId, objType: "like" }, data: { mileStone } })

            await this.Transaction(reelUserId, PointsEnum.likes_100, TransactionTypeEnum.earn, `earned on 100 likes on reel of id:${reelId}`)

            return null
        }
        console.log("MileStone was Not Achived")
        return null
    }


    async Comments_100(reelId: string, commentsCount: number, reelUserId: string) {

        const th = 100;
        const mileStone: number = Math.floor(commentsCount / th)

        const dbMileStone = await this.db.coinMileStone.findFirst({ where: { objId: reelId, objType: "comment" }, select: { mileStone: true } });

        if (dbMileStone?.mileStone < mileStone) {
            console.log("MileStone Achived for reel for 100 views for id :", reelId)
            await this.db.coinMileStone.updateMany({ where: { objId: reelId, objType: "comment" }, data: { mileStone } })
            await this.Transaction(reelUserId, PointsEnum.comments_100, TransactionTypeEnum.earn, `earned on 100 comments on reel of id:${reelId}`)
            return null
        }
        console.log("MileStone was Not Achived")
        return null
    }


    Shares_100() { }
}