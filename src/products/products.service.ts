import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ProductsService {
  constructor(private readonly db: DbService) { }


  create(createProductDto: CreateProductDto) {
    return this.db.product
      .create({
        data: createProductDto
      })
  }

  findAll() {
    return this.db.product
      .findMany()
  }

  findOne(id: string) {
    return this.db.product
      .findUnique({
        where: { id }
      })
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }
  
  remove(id: string) {
    return this.db.product
      .delete({ where: { id } })
  }
}
