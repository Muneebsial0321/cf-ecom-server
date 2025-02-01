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
    const catagoryId = this.JsonParser(body.catagoryId)
    const brandId = this.JsonParser(body.brandId)
    const isOnSale = this.JsonParser(body.isOnSale)
    const discountPercent = +this.JsonParser(body.discountPercent)
    const salePrice = +this.JsonParser(body.salePrice)

    console.log({ catagoryId, brandId, isOnSale, discountPercent, salePrice })
    body.picUrl = await this.upload.manyUpload(images)
    const product = plainToInstance(CreateProductDto, { ...body, catagoryId, brandId, isOnSale, discountPercent, salePrice });
    return this.productsService.create(product);
  }


  @Post("dev")
  async devCreate(@Body() body: any) {
    const product = plainToInstance(CreateProductDto, { ...body });
    return this.productsService.create(product);
  }


  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get("sale")
  findAllOnSale() {
    return this.productsService.findAllOnSale();
  }

  @Get("name/:prodname")
  findSearchResultsName(@Param('prodname') prodName:string ) {
    return this.productsService.findSearchResultsName(prodName);
  }

  @Get("search/name/:name")
  findAllOnName(@Param('name') name: string) {
    return this.productsService.findAllOnName(name)
  }


  @Get('s/:id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Get("c/:name")
  categoryProducts(@Param("name") catName: string) {
    return this.productsService.categoryFindAll(catName)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }



  JsonParser(data: any) {
    try {
      return typeof data === "string" ? JSON.parse(data) : data;
    } catch (error) {
      return null;
    }
  }
}
