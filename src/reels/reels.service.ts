import { Injectable } from '@nestjs/common';
import { CreateReelDto } from './dto/create-reel.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ReelsService {

  constructor(private readonly db: DbService) { }
  create(reel: CreateReelDto) {
    // return this.db.reel.create({
    //   data: {
    //     User: { connect: { id: createReelDto.userId } },
    //     Product: { connect: { id: createReelDto.productId } },
    //     desc: createReelDto.desc,
    //     videoUrl: createReelDto.videoUrl
    //   }
    // })
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
