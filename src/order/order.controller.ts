import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order_Status } from '@prisma/client';


@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }


  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get('s/:id')
  findOne(@Param('id') id: string) {
    console.log("hting")
    return this.orderService.findOne(id);
  }


  @Get('/t/:token')
  jwtOrderCreate(@Param('token') token: string) {
    return this.orderService.jwtCreateOrder(token)
  }

  @Get('/user/:id')
  getUserOrders(@Param('id') id: string) {
    return this.orderService.getUserOrders(id)
  }


  @Get('q')
  findStatus(@Query('status') status: Order_Status) {
    console.log(status)
    return this.orderService.findOrderOnStatus(status)
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }


}
