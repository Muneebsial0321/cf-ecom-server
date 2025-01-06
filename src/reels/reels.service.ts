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


  create(reel: CreateReelDto) {

    this.coin.Transaction(reel.userId, PointsEnum.reelUpload, TransactionTypeEnum.earn, "reel upload")
    return this.db.reel.create({
      data: reel
    })
  }

  findAll() {
    return this.db.reel.findMany()
  }

  async findOne(id: string) {
    const th = 100;
    // register view
    await this.db.views.create({ data: { reelId: id, userId: "" } })
    const views = await this.db.views.count({ where: { reelId: id } })
    const mileStone = Math.floor(views / th) // 0
    const dbMileStone = await this.db.coinMileStone.findFirst({ where: { objId: id } })


    if (dbMileStone.mileStone <= mileStone) {
      this.db.coinMileStone.updateMany({ where: { objId: id }, data: { mileStone } })
    }
    // update return
    return this.db.reel.findUnique({ where: { id }, include: { User: true, Product: true, comments: true } })
  }

  remove(id: number) {
    return `This action removes a #${id} reel`;
  }
}
