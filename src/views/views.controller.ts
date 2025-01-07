import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ViewsService } from './views.service';

@Controller('views')
export class ViewsController {
  constructor(private readonly viewsService: ViewsService) {}


  @Get()
  findAll() {
    return this.viewsService.findAll();
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.viewsService.remove(id);
  }
}
