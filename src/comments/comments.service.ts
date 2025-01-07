import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class CommentsService {


  constructor(private readonly db: DbService) { }

  
  async create(comment: CreateCommentDto) {
    await this.db.coinMileStone.create({
      data: {
        objId: comment.reelId,
        mileStone: 0,
        objType: "comment"
      }
    })
    await this.db.reel.update({ where: { id: comment.reelId }, data: { commentsCount: { increment: 1 } } })
    return await this.db.comments.create({ data: comment })

  }

  async findAll() {
    return await this.db.comments.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
