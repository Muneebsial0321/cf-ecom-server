import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StripeService } from './services/stripe.service';
import { CreateOrderDto } from 'src/order/dto/create-order.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly stripe: StripeService) { }


  @Get()
  findAll() {
    return "hello"
  }

  @Post('stripe')
  StripePayment(@Body() data: CreateOrderDto) {
    return this.stripe.createCheckoutSession(data)
  }

}
