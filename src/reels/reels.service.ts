import { Injectable } from '@nestjs/common';
import { CreateReelDto } from './dto/create-reel.dto';
import { DbService } from 'src/db/db.service';
import { CoinFactory, PointsEnum, TransactionTypeEnum } from 'src/coins/coinFactory.service';

@Injectable()
export class ReelsService {

  constructor(
    private readonly db: DbService,
    private readonly coin: CoinFactory,
  ) { }


  async create(reel: CreateReelDto) {

    const newReel = await this.db.reel.create({
      data: reel
    })
    return newReel
    // await this.db.coinMileStone.create({
    //   data: {
    //     objId: newReel.id,
    //     objType: "reel",
    //     mileStone: 0
    //   }
    // })
    // await this.coin.Transaction(reel.userId, PointsEnum.reelUpload, TransactionTypeEnum.earn, "reel upload")
   
  }

  findAll() {
    return this.db.reel.findMany({ orderBy: { likeCount: "desc" } })
  }

  async findOne(id: string) {
    const reel = await this.db.reel.findUnique({ where: { id }, include: { User: { select: { id: true, name: true, picUrl: true } } } })
    try {
      await this.db.views.create({ data: { reelId: reel.id, userId: "adad9eff-5e9a-4f56-bf40-6d5a77c5f2c9" } })
      await this.db.reel.update({ where: { id }, data: { viewCount: { increment: 1 } } })
      console.log("view added")
    } catch (error) { }

    await this.coin.Views_1000(id, reel.viewCount, reel.userId)
    return reel
  }

  remove(id: string) {
    return this.db.reel.delete({ where: { id } })
  }
}
