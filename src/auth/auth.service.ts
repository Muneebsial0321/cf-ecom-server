import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth';
import { Auth } from './auth.interface';
import { JwtService } from '@nestjs/jwt';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AuthService implements Auth {
  constructor(
    private readonly jwt: JwtService,
    private readonly db: DbService,
  ) { }
  register() {

  }
  login() {

  }




}
