import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { DbService } from 'src/db/db.service';
import { Order_Status, Prisma } from '@prisma/client';
import { Mail, MailService } from 'src/mail/mail.service';

@Injectable()
export class OrderService {

  constructor(
    private readonly db: DbService,
    private readonly mail: MailService,

  ) { }

  async create(createOrderDto: CreateOrderDto) {
    const { id } = await this.db.user.findUnique({ where: { email: createOrderDto.email }, select: { id: true } })
    const userId = id
    const { address, city, country, extraInfo, postalCode, paymentMethod, phoneNumber } = createOrderDto
    const order = await this.db.order.create({
      data: {
        paymentMethod,
        userId,
        address,
        city,
        country,
        postalCode,
        extraInfo,
        phoneNumber,
        totalPrice: await this.__Total_Price__(createOrderDto.products),
        products: {
          create: createOrderDto.products.map(p => ({
            Product: { connect: { id: p.productId } },
            quantity: p.quantity,
            ...(p.colour ? { colour: p.colour } : {}),
            ...(p.size ? { size: p.size } : {}),
          })),
        }

      }
    })
    const { email } = await this.db.user.findUnique({ where: { id: userId }, select: { email: true } })
    this.mail.Send({
      to: email,
      subject: "Your order has been placed",
      mail: Mail.ORDER_PLACED
    })
    console.log("Order was placed")
    return order
  }

  async findOrderOnStatus(status: Order_Status) {
    return await this.db.order.findMany({ where: { status } });
  }

  findAll() {
    return this.db.order.findMany({ include: { products: true } })
  }

  findOne(id: string) {
    return this.db.order.findUnique({
      where: { id },
      include: {
        User: true,
        products: { include: { Product: true } },
      }
    })
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: string) {
    return this.db.order.delete({ where: { id } });
  }

  async getUserOrders(userId: string) {
    return await this.db.order.findMany({
      where: { userId }
    })
  }




  // _____________________________||
  // Utility functions
  //------------------------------||


  async __Total_Price__(prodArray: Array<{ productId: string, size?: string, colour?: string, quantity: number }>): Promise<number> {
    const priceArray = await Promise.all(prodArray.map(async (e) => {
      const { price } = await this.db.product.findUnique({ where: { id: e.productId }, select: { price: true } })
      return price * e.quantity
    }))

    return priceArray.reduce((sum, num) => sum + num, 0);


  }
}
