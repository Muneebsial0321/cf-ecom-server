import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategy/google.strategy';
import { OAuth } from './strategy/validate';
import { JwtModule } from '@nestjs/jwt';

import { MailModule } from 'src/mail/mail.module';
import { CoinsModule } from 'src/coins/coins.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_AUTH_SECRET,
      signOptions: { expiresIn: "7d" }
    }),
    MailModule,
    CoinsModule
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy, OAuth],
})
export class AuthModule { }
