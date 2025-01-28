import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class ProductsService {
  constructor(private readonly db: DbService) { }


  create(createProductDto: CreateProductDto) {
    console.log({ createProductDto })
    return this.db.product
      .create({
        data: createProductDto
      })
  }

  findAll() {
    return this.db.product
      .findMany({
        include: {
          brand: { select: { name: true, picUrl: true } },
          catagory: { select: { name: true, picUrl: true } }
        }
      })
  }

  findOne(id: string) {
    return this.db.product
      .findUnique({
        where: { id },
        include: {
          brand: { select: { name: true, picUrl: true } },
          catagory: { select: { name: true, picUrl: true } }
        }
      })
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: string) {
    return await this.db.product
      .delete({ where: { id } })
  }
}
