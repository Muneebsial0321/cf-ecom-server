import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LikesService } from './likes.service';
import { Prisma } from '@prisma/client';
import { CreateLikeDto } from './dto/create-like-dto';
CreateLikeDto

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  create(@Body() createLikeDto:CreateLikeDto ) {
    return this.likesService.create(createLikeDto);
  }

  @Get()
  findAll() {
    return this.likesService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likesService.remove(id);
  }
}
