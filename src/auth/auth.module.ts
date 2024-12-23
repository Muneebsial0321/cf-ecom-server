import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategy/google.strategy';
import { OAuth } from './strategy/validate';

@Module({
  controllers: [AuthController],
  providers: [AuthService,GoogleStrategy,OAuth],
})
export class AuthModule {}
