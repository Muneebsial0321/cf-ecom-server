import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ReviewsService {
  constructor(private readonly db: DbService) { }

  create(review: CreateReviewDto) {
    return this.db.reviews.create({ data: review })
  }

  findAll() {
    return this.db.reviews.findMany()
  }

  findOne(id: string) {
    return this.db.reviews.findUnique({ where: { id }, include: { user: true } })
  }

  remove(id: string) {
    return this.db.reviews.delete({where:{id}})
  }
}
