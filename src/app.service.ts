/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

 // @Cron('0 41 17 * * *', { name: 'daily-greeting', timeZone: 'Asia/Kolkata' })

  @Cron(CronExpression.EVERY_MINUTE, {
    name: 'daily-greeting',
    timeZone: 'Asia/Kolkata',
  })
  async sendDailyGreeting() {
    console.log('Cron job triggered: Sending daily greeting email');
   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const target = this.configService.get<string>('TARGET_EMAIL');
    if (!target) {
      this.logger.error('Target email not found in configuration!');
      return;
    }

    //testing purpose
    const user = this.configService.get<string>('EMAIL_USER');
    const pass = this.configService.get<string>('EMAIL_PASS');
    console.log('Testing Config:', {
      user: user,
      pass: pass ? 'EXISTS' : 'MISSING',
    });
    //testing purpose

    try {
      await this.mailerService.sendMail({
        to: target,
        subject: 'Daily Greeting - MNV',
        text: 'Good morning mnv employee',
        html: `
          <div style="font-family: Arial; padding: 20px; border: 1px solid #eee;">
            <h2 style="color: #2c3e50;">Good Morning!</h2>
            <p>Hope you have a productive day at <b>MNV</b>.</p>
            <hr />
            <small>Automated System Notification</small>
          </div>
        `,
      });
      this.logger.log(`Success: Mail sent to ${target}`);
      console.log(`Success: Mail sent to ${target}`);
    } catch (error) {
      this.logger.error('Failed to send mail:', error);
    }
  }
}
