import { Module } from '@nestjs/common';
import { ReelsService } from './reels.service';
import { ReelsController } from './reels.controller';
import { UploadModule } from 'src/upload/upload.module';

@Module({
  controllers: [ReelsController],
  providers: [ReelsService],
  imports:[UploadModule]
})
export class ReelsModule {}
