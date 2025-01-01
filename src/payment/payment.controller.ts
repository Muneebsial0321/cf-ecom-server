import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { StripeService } from './services/stripe.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly stripe: StripeService) {}


  @Get()
  findAll() {
    return "hello"
  }

  @Get('/stripe')
  StripePayment() {
  return  this.stripe.createCheckoutSession()
  }
  
}
