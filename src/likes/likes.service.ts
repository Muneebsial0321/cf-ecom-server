import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { CreateLikeDto } from './dto/create-like-dto';


@Injectable()
export class LikesService {


  constructor(private readonly db: DbService) { }
  async create(like: CreateLikeDto) {
    await this.db.coinMileStone.create({
      data: {
        objId: like.reelId,
        mileStone: 0,
        objType: "like"
      }
    })
    await this.db.reel.update({ where: { id: like.reelId }, data: { likeCount: { increment: 1 } } })
    // exucte coin like fun()
    return await this.db.likes.create({ data: like })
  }

  async findAll() {
    return await this.db.likes.findMany()
  }


  async remove(id: string) {
    return await this.db.likes.delete({ where: { id } })
  }
}
