import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Prisma } from '@prisma/client';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/upload/upload.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly upload: UploadService,
 ) { }



  // extract images and then pass them....
  @Post()
  @UseInterceptors(FilesInterceptor('images', 10))
  async create(@UploadedFiles() images: Express.Multer.File[],@Body() product: CreateProductDto) {
    
    // data santization
    const {colour,size,tags,price} = product

    // if(typeof price == 'string') product.price = +product.price
    // if(typeof colour == 'string') product.colour = JSON.parse(colour)
    // if(typeof size == 'string') product.size = JSON.parse(size)
    // if(typeof tags == 'string') product.tags = JSON.parse(tags)


    product.picUrl = await this.upload.manyUpload(images)
    console.log({after:product})
    // return product
    return this.productsService.create(product);
  }






  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
