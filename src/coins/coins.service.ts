import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';


@Injectable()
export class CoinsService {
  constructor(private readonly db: DbService) { }

  findAll() {
    return this.db.coins.findMany({ include: { User: { select: { name: true, email: true } } } })
  }

  findOne(id: string) {
    return this.db.coins.findUnique({where:{id},include:{User:true}})
  }


}
