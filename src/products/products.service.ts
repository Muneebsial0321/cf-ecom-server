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
      .findMany({
        include: {
          brand: { select: { name: true, picUrl: true } },
          catagory: { select: { name: true, picUrl: true } }
        }
      })
  }

  async findAllOnSale() {
    const products = await this.db.product.findMany({
      where: { isOnSale: true },
      select: {
        id: true,
        name: true,
        desc: true,
        salePrice: true,
        colour: true,
        size: true,
        picUrl: true,
        tags: true,
        isOnSale: true,
        discountPercent:true,
        brand: { select: { name: true, picUrl: true } },
        catagory: { select: { name: true, picUrl: true } }
      }
    });

    const transformedProducts: any[] = [];
    products.forEach(({ salePrice, ...product }) => {
      transformedProducts.push({
        ...product,
        price: salePrice,
      });
    });

    return transformedProducts;
  }


  async categoryFindAll(catName: string) {
    return await this.db.product
      .findMany({
        where: { catagory: { name: catName } },
        include: {
          brand: { select: { name: true, picUrl: true } },
          catagory: { select: { name: true, picUrl: true } }
        }
      })
  }
  async findAllOnName(prodName: string) {
    return await this.db.product
      .findMany({
        where: { name: { contains: prodName, mode: "insensitive" } },
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
