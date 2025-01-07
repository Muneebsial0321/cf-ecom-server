import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';


@Injectable()
export class ViewsService {

  constructor(private readonly db:DbService){}

  findAll() {
    return this.db.views.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} view`;
  }


  remove(id: string) {
    return this.db.views.delete({where:{id}})
  }
}
