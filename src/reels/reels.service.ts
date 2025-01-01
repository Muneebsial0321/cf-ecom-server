import { Injectable } from '@nestjs/common';
import { CreateReelDto } from './dto/create-reel.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ReelsService {

  constructor(private readonly db: DbService) { }
  create(createReelDto: CreateReelDto) {
    return this.db.reels.create({
      data: {
        User: { connect: { id: createReelDto.userId } },
        Product: { connect: { id: createReelDto.productId } },
        desc: createReelDto.desc,
        videoUrl: createReelDto.videoUrl
      }
    })
  }

  findAll() {
    return this.db.reels.findMany()
  }

  findOne(id: string) {
    return this.db.reels.findUnique({ where: { id }, include: { User: true, Product: true } })
  }

  remove(id: number) {
    return `This action removes a #${id} reel`;
  }
}
