import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth';
import { JwtService } from '@nestjs/jwt';
import { DbService } from 'src/db/db.service';
import { LoginAuthDto } from './dto/login-auth';
import { Mail, MailService } from 'src/mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly mail: MailService,
    private readonly jwt: JwtService,
    private readonly db: DbService,
  ) { }

  async register(registerDto: RegisterAuthDto) {

    let user = await this.db.user.findFirst({
      where: { email: registerDto.email }
    })

    if (user) throw new ConflictException("User already exists")

    const newUser = await this.db.user.create({ data: registerDto })
    await this.mail.Send({
      to: registerDto.email,
      subject: "Welcome to Bazzar",
      mail: Mail.WELCOME
    })
    const authToken = this.jwt.sign({ id: newUser.id })
    return { authToken }
  }


  async login(loginDto: LoginAuthDto) {

    let user = await this.db.user.findFirst({
      where: { email: loginDto.email }
    })

    if (!user) throw new NotFoundException("User does not exist")
    if (user.password !== loginDto.password) throw new UnauthorizedException('Invalid credentials');

    const authToken = this.jwt.sign({ id: user.id })
    return { authToken }
  }


  async googleAuth(user: { name: string, id: string, email: string }) {
    const authToken = this.jwt.sign({ id: user.id })
    return `${process.env.FRONTEND_URL}/auth/bording?authtoken=${authToken}`
  }


}
