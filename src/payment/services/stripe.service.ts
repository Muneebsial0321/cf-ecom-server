import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
    private stripe: Stripe;
    private readonly line_items: [
        {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: 'Dummy Product',
                },
                unit_amount: 1000, // $10.00 in cents
            },
            quantity: 1,
        },
    ]

    constructor() {
        this.stripe = new Stripe(process.env.STRIPE_SECRET_LOCAL, {
            apiVersion: '2024-12-18.acacia',
        });
    }

    async createCheckoutSession(): Promise<{ url: string }> {
        const session = await this.stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items:this.line_items,
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        });
        return { url: session.url };
    }
}
