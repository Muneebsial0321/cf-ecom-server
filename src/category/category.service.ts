import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class CategoryService {
  constructor(private readonly db:DbService){}
  create(cate: CreateCategoryDto) {
    return this.db.catagory.create({data:cate})
  }

  findAll() {
    return this.db.catagory.findMany();
  }

  findOne(id: string) {
    return this.db.catagory.findUnique({where:{id}});
  }


  remove(id: string) {
    return this.db.catagory.deleteMany();
    // return this.db.catagory.delete({where:{id}});
  }
}
