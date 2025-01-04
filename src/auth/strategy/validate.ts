import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { Mail, MailService } from 'src/mail/mail.service';

@Injectable()
export class OAuth {
  constructor(
    private readonly mail: MailService,
    private readonly db: DbService,
  ) { }
  async validate(pId: string, name: string, provider: string, email?: string): Promise<any> {
    const data = { pId, name, provider, email }

    let user = await this.db.user.findFirst({ where: { email }, select: { id: true, name: true, email: true } })


    if (user) {
      console.log('Google--------> login')
      return user
    }

    console.log("Google--------> signup")
    user = await this.db.user.create({ data:{...data,coins:{create:{value:10.0}}}, select: { id: true, name: true, email: true } })
    await this.mail.Send({
      to: email,
      subject: "Welcome to Bazzar",
      mail: Mail.WELCOME
    })
    return user

  }
}
