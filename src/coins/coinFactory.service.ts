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

}