import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { RegisterAuthDto } from './dto/register-auth';
import { LoginAuthDto } from './dto/login-auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }



  // local auth

  @Post('register')
  register(@Body() registerDto:RegisterAuthDto){
   return this.authService.register(registerDto)

  }


  @Post('login')
  login(@Body() loginDto:LoginAuthDto){
    return this.authService.login(loginDto)
  }


  // google auth 
  @UseGuards(AuthGuard('google'))
  @Get('google')
  googleGuard(@Req() req) {}

  @UseGuards(AuthGuard('google'))
  @Get('google/callback')
  googleCallback(@Req() req) {
    return this.authService.googleAuth(req.user)
  }
  

}
