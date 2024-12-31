// import { Injectable } from '@nestjs/common';
// import Stripe from 'stripe';

// @Injectable()
// export class StripeService {
//     private stripe: Stripe;

//     constructor() {
//         this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//             apiVersion: '2022-11-15', // Use the latest Stripe API version
//         });
//     }

//     async createCustomer(email: string, name: string): Promise<Stripe.Customer> {
//         return await this.stripe.customers.create({
//             email,
//             name,
//         });
//     }

//     async createPaymentIntent(amount: number, currency: string): Promise<Stripe.PaymentIntent> {
//         return await this.stripe.paymentIntents.create({
//             amount,
//             currency,
//             automatic_payment_methods: { enabled: true },
//         });
//     }

//     async retrievePaymentIntent(paymentIntentId: string): Promise<Stripe.PaymentIntent> {
//         return await this.stripe.paymentIntents.retrieve(paymentIntentId);
//     }
// }
