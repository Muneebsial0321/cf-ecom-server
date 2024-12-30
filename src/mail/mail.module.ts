import {  Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailController } from './mail.controller';

@Module({
  imports: [MailerModule.forRoot({
    transport: {
      host: 'smtp.gmail.com',
      secure: false,
      port: 587,
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false // Bypass SSL verification if necessary (for testing)
      },
    },
  })],
  providers: [MailService],
  exports: [MailService],
  controllers:[MailController]
})
export class MailModule { }
