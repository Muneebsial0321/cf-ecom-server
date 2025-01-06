import { Injectable } from "@nestjs/common";
import { DbService } from "src/db/db.service";


enum Points {

    signup = ""
}

@Injectable()
export class CurrencyService {
    constructor(private readonly db: DbService) { }


    async pointsSignup(id: string) {
        const { value } = await this.db.points.findFirst({ where: { name: "signup" } })
        return await this.db.coins.create({ data: { userId: id, value } })
    }
    async pointsViews(id: string) { }
    async pointsLikes(id: string) { }
    async pointsShares(id: string) { }
    async pointsComments(id: string) { }
    async pointsFollowers(id: string) { }


}