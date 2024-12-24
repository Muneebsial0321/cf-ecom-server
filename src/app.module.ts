import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { AdminModule } from './admin/admin.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { UsersModule } from './users/users.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from "@nestjs/config"
// import { ShopModule } from './shop/shop.module';
// import { MessagesModule } from './messages/messages.module';
import { DbModule } from './db/db.module';
import { ReviewsModule } from './reviews/reviews.module';
// import { RoomsModule } from './rooms/rooms.module';
import { WishlistModule } from './wishlist/wishlist.module';

@Module({

  imports: [AuthModule,
    ProductsModule,
    AdminModule,
    OrderModule,
    PaymentModule,
    UsersModule,
    MailModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DbModule,
    ReviewsModule,
    WishlistModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
