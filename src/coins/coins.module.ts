import { Module } from '@nestjs/common';
import { CoinsService } from './coins.service';
import { CoinsController } from './coins.controller';
import { CoinFactory } from './coinFactory.service';

@Module({
  controllers: [CoinsController],
  providers: [CoinsService,CoinFactory],
  exports:[CoinFactory]
})
export class CoinsModule {}
