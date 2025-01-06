import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { CurrencyService } from './currency.service';

@Controller('coins')
export class CoinsController {
  constructor(
    private readonly coinsService: CoinsService,
    private readonly curr: CurrencyService,
  ) { }

  @Get()
  findAll() {
    return this.coinsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.coinsService.findOne(id);
  // }

  @Get("po")
  test() {
    console.log("testing")
    return this.curr.pointsSignup("92308dc4-c899-49f6-9709-44f467c228a3")
  }

}
