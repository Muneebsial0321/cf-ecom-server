import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DbService } from 'src/db/db.service';
import { CreateOrderDto } from 'src/order/dto/create-order.dto';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
    private stripe: Stripe;

    constructor(
        private readonly jwt: JwtService,
        private readonly db: DbService
    ) {
        this.stripe = new Stripe(process.env.STRIPE_SECRET_LOCAL, {
            apiVersion: '2024-12-18.acacia',
        });
    }

    async createCheckoutSession(data: CreateOrderDto): Promise<{ url: string }> {

        console.log("creating stripe payment session===============>")

        const item = await Promise.all(data.products.map(async (e, i) => {
            const { name, price } = await this.db.product.findUnique({ where: { id: e.productId }, select: { price: true, name: true } })
            return this.createStripeItem(name, price, e.quantity)
        }))

        const session = await this.stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: item,
            mode: 'payment',
            success_url: `${process.env.BACKEND_URL}/orders/t/${this.jwt.sign(data)}`,
            cancel_url: `${process.env.BACKEND_URL}/orders`,
        });

        return { url: session.url };
    }


    createStripeItem(productName: string, price: number, quantity: number) {
        return {
            price_data: {
                currency: 'pkr',
                product_data: {
                    name: productName,
                },
                unit_amount: price * 100, // multpiy with 100 as stripe takes mone in sents
            },
            quantity: quantity,
        }
    }
}
