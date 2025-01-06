import { Module } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { CoinsController } from './coins.controller';
import { CurrencyService } from './currency.service';

@Module({
  controllers: [CoinsController],
  providers: [CoinsService,CurrencyService],
})
export class CoinsModule {}
