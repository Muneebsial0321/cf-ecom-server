import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { UploadModule } from 'src/upload/upload.module';

@Module({
  controllers: [BrandController],
  providers: [BrandService],
  imports: [UploadModule]
})
export class BrandModule { }
