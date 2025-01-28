import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Prisma } from '@prisma/client';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/upload/upload.service';
import { plainToInstance } from 'class-transformer';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly upload: UploadService,
  ) { }



  // extract images and then pass them....
  @Post()
  @UseInterceptors(FilesInterceptor('images', 10))
  async create(@UploadedFiles() images: Express.Multer.File[], @Body() body: any) {
    console.log({c:body.catagoryId,b:body.brandId})
    const catagoryId = body.catagoryId ? JSON.parse(body.catagoryId) : null;
    const brandId = body.brandId ? JSON.parse(body.brandId) : null;
    console.log({ catagoryId, brandId })
    body.picUrl = await this.upload.manyUpload(images)
    const product = plainToInstance(CreateProductDto, { ...body, catagoryId, brandId });
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
