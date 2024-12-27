import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReplysService } from './replys.service';
import { CreateReplyDto } from './dto/create-reply.dto';
import { UpdateReplyDto } from './dto/update-reply.dto';

@Controller('replys')
export class ReplysController {
  constructor(private readonly replysService: ReplysService) {}

  @Post()
  create(@Body() createReplyDto: CreateReplyDto) {
    return this.replysService.create(createReplyDto);
  }

  @Get()
  findAll() {
    return this.replysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.replysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReplyDto: UpdateReplyDto) {
    return this.replysService.update(+id, updateReplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.replysService.remove(+id);
  }
}
