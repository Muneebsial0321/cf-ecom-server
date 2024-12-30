import { Controller, Get} from '@nestjs/common';
import { Mail, MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get()
  sendMail(){
  //  return this.mailService.Email({
  //   to:"muneeburrehmansial0321@gmail.com",
  //   subject:"some subject",
  //   mail:Mail.ORDER_PLACED
  //  })
  }
}
