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

    this.coin.Transaction(reel.userId,PointsEnum.reelUpload,TransactionTypeEnum.earn,"reel upload")
    return this.db.reel.create({
      data: reel
    })
  }

  findAll() {
    return this.db.reel.findMany()
  }

  findOne(id: string) {
    return this.db.reel.findUnique({ where: { id }, include: { User: true, Product: true, comments: true } })
  }

  remove(id: number) {
    return `This action removes a #${id} reel`;
  }
}
