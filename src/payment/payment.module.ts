import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { StripeService } from './services/stripe.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PaymentController],
  providers: [StripeService],
  imports:[AuthModule,]
})
export class PaymentModule {}
