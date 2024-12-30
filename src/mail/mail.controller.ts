import { Controller, Get} from '@nestjs/common';
import { Mail, MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mail: MailService) {}

  @Get()
  sendMail(){
   return this.mail.Send({
    to:"muneeburrehmansial0321@gmail.com",
    subject:"some subject",
    mail:Mail.WELCOME
   })
  }
}
