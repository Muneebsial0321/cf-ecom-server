import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { StripeService } from './services/stripe.service';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService,StripeService],
})
export class PaymentModule {}
