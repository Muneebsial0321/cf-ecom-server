import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { welcome, orderPlaced, orderUpdate, otpSend } from './templates';


export enum Mail {
  WELCOME = 'welcome',
  ORDER_PLACED = 'orderPlaced',
  ORDER_UPDATE = 'orderUpdate',
  OTP_SEND = 'otpSend',
}

@Injectable()
export class MailService {

  private readonly logger = new Logger(MailService.name);
  private readonly Mails = {
    [Mail.WELCOME]: () => welcome(),
    [Mail.ORDER_PLACED]: () => orderPlaced(),
    [Mail.ORDER_UPDATE]: () => orderUpdate(),
    [Mail.OTP_SEND]: () => otpSend(),
  }

  constructor(private readonly mail: MailerService) { }


  async Send(payload: { mail: Mail, to: string, subject: string }) {
    try {
      console.log("Sending mail ----->")
      const { mail, to, subject } = payload
      await this.mail.sendMail({ to, subject, html: this.Mails[mail]() })
      this.logger.log("Mail was Sent")
    } catch (error) {
      this.logger.error("Error sending in mail", error)
    }
  }
}
