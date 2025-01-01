import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ReelsService } from './reels.service';
import { CreateReelDto } from './dto/create-reel.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { plainToInstance } from 'class-transformer';
import { UploadService } from 'src/upload/upload.service';

@Controller('reels')
export class ReelsController {
  constructor(
    private readonly reelsService: ReelsService,
    private readonly upload: UploadService

  ) { }


  @UseInterceptors(FileInterceptor('video'))
  @Post()
  async create(
    @UploadedFile() video: Express.Multer.File,
    @Body() req: any) {
    const videoUrl = await this.upload.singleUpload(video)
    const reel = plainToInstance(CreateReelDto, { ...req,videoUrl })
    return this.reelsService.create(reel);
  }

  @Get()
  findAll() {
    return this.reelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reelsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reelsService.remove(+id);
  }
}
