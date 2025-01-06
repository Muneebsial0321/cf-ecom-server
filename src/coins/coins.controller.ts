import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { } from './coinFactory.service';

@Controller('coins')
export class CoinsController {
  constructor(private readonly coinsService: CoinsService) { }

  @Get()
  findAll() {
    return this.coinsService.findAll();
  }

}
