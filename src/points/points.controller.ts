import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PointsService } from './points.service';
import { Prisma } from '@prisma/client';


@Controller('points')
export class PointsController {
  constructor(private readonly pointsService: PointsService) { }

  @Post()
  create(@Body() createPointDto: Prisma.PointsCreateInput) {
    return this.pointsService.create(createPointDto);
  }

  @Get()
  findAll() {
    return this.pointsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pointsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePointDto: Prisma.PointsUpdateInput) {
    return this.pointsService.update(+id, updatePointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pointsService.remove(+id);
  }
}
