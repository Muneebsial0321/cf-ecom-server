import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { RegisterAuthDto } from './dto/register-auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }



  // local auth

  @Post()
  regeister(registerDto:RegisterAuthDto){
    // this.authService.

  }



  // google auth 
  @UseGuards(AuthGuard('google'))
  @Get('google')
  googleGuard(@Req() req) {}

  @UseGuards(AuthGuard('google'))
  @Get('google/callback')
  googleCallback(@Req() req) {
    console.log({form2:req.user})
  }
  

}
