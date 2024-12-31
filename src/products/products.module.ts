import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { UploadService } from 'src/upload/upload.service';
import { UploadModule } from 'src/upload/upload.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports:[UploadModule]
})
export class ProductsModule {}
