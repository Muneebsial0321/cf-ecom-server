import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth';
import { Auth } from './auth.interface';
import { JwtService } from '@nestjs/jwt';
import { DbService } from 'src/db/db.service';
import { LoginAuthDto } from './dto/login-auth';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly db: DbService,
  ) { }

  async register(registerDto: RegisterAuthDto) {

    let user = await this.db.user.findFirst({
      where: { email: registerDto.email }
    })

    if (user) return { "message": "User already exist" }

    const newUser = await this.db.user.create({ data: registerDto })
    const authToken = this.jwt.sign({ id: newUser.id })
    return { authToken }
  }


  async login(loginDto: LoginAuthDto) {

    let user = await this.db.user.findFirst({
      where: { email: loginDto.email }
    })

    if (!user) return { "message": "User does not exist" }
    if (user.password !== loginDto.password) return { message: "invalid credentials" }

    const authToken = this.jwt.sign({ id: user.id })
    return { authToken }
  }


  async googleAuth(user: { name: string, id: string, email: string }) {
    const payload = { id: user.id }
    const authToken = this.jwt.sign(payload)
    return { authToken }
  }


}
