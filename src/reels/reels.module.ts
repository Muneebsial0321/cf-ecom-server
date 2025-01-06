import { Module } from '@nestjs/common';
import { ReelsService } from './reels.service';
import { ReelsController } from './reels.controller';
import { UploadModule } from 'src/upload/upload.module';
import { CoinsModule } from 'src/coins/coins.module';

@Module({
  controllers: [ReelsController],
  providers: [ReelsService],
  imports:[UploadModule,CoinsModule]
})
export class ReelsModule {}
