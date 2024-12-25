import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { DbService } from 'src/db/db.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class OrderService {

  constructor(private readonly db: DbService) { }

  create(createOrderDto: CreateOrderDto) {

    return this.db.order.create({
      data: {
        paymentMethod: createOrderDto.paymentMethod,
        totalPrice: createOrderDto.totalPrice,
        // for jun-table data
        User: { connect: { id: createOrderDto.userId } }, //connects to user in the table
        products: { create: createOrderDto.products } // adds products and also make a jun record

      }
    })
  }

  findAll() {
    return this.db.order.findMany();
  }

  findOne(id: string) {
    return this.db.order.findUnique({
       where: { id } ,
       include:{
        User:true,
        products:true
       }
      })
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: string) {
    return this.db.order.delete({ where: { id } });
  }
}
