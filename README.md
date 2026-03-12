# 📧 MNV Mailer Automation (NestJS Cron Job)

Welcome to the **MNV Mailer App**! This is a robust backend automation tool built with **NestJS** to handle scheduled tasks, specifically sending daily greeting emails to employees using Cron jobs.

## 📝 What is a Cron Job?

A **Cron Job** is a time-based job scheduler. In simple words, it’s a way to tell your computer: *"Hey, do this specific task automatically at this exact time every day/hour/minute."*

In this project, we use the `@nestjs/schedule` package to trigger email events without any manual intervention.


![cron practice](https://i.ibb.co/h3pvkry/cron-Basic.png) 


---

## ⚙️ How it Works

The heart of this application is the **Cron Expression**. Here is how the timing is defined:

```typescript
@Cron('0 30 10 * * *') // Triggers exactly at 10:30:00 AM
//      |  |  |  |  |  |
//      |  |  |  |  |  └── Day of Week (0-7)
//      |  |  |  |  └───── Month (1-12)
//      |  |  |  └──────── Day of Month (1-31)
//      |  |  └─────────── Hour (0-23)
//      |  └────────────── Minute (0-59)
//      └───────────────── Second (0-59)

```

---

## 🌟 Benefits of Using Cron Jobs

* **Automation:** No need to remember to send daily reports or greetings manually.
* **Consistency:** Emails are sent at the exact same time every day.
* **Efficiency:** Reduces manual workload and minimizes human error.
* **Scalability:** You can easily add more tasks like database backups or cleanup logs.

---

## 🚀 Application Execution Logs

When the server is running, the Cron job monitors the system time and executes the `sendDailyGreeting` method.

**Screenshot of successful execution:**

**Live Terminal Output:**

```bash
[Nest] LOG [AppService] Success: Mail sent to gauri@mediannv.com
Success: Mail sent to gauri@mediannv.com

```

---

## 🛠️ Extra Information

* **Security:** This app uses `ConfigService` to keep sensitive credentials (Email & App Passwords) hidden in a `.env` file.
* **Timezone:** Specifically configured for `Asia/Kolkata` to ensure the timing matches the Indian Standard Time (IST).
* **Error Handling:** Includes a `try-catch` block with a `Logger` to track failed attempts if the SMTP server is down.

---

## 👤 Author

**Gauri Bidwai**
*AI-assisted Automation Developer*


<!-- ```
@Cron('0 30 10 * * *') // Current: 10:30:00 AM
//      |  |  |  |  |  |
//      |  |  |  |  |  └── Day of Week
//      |  |  |  |  └───── Month
//      |  |  |  └──────── Day of Month
//      |  |  └─────────── Hour (0-23)
//      |  └────────────── Minute (0-59)
//      └───────────────── Second (0-59)

```
https://share.google/aimode/kKB8NMVQnXoRP60xm

https://i.ibb.co/h3pvkry/cron-Basic.png

Application is running on: http://localhost:4000
npm run start
> mnv-mailer-app@0.0.1 start
> nest start
[Application is running on: http://localhost:4000
Cron job triggered: Sending daily greeting email
Testing Config: { user: 'testgauri06@gmail.com', pass: 'EXISTS' }
[Nest] 101372  - 03/12/2026, 5:42:02 PM     LOG [AppService] Success: Mail sent to gauri@mediannv.com
Success: Mail sent to gauri@mediannv.com
Cron job triggered: Sending daily greeting email
Testing Config: { user: 'testgauri06@gmail.com', pass: 'EXISTS' }
[Nest] 101372  - 03/12/2026, 5:43:02 PM     LOG [AppService] Success: Mail sent to gauri@mediannv.com
Success: Mail sent to gauri@mediannv.com
Cron job triggered: Sending daily greeting email
Testing Config: { user: 'testgauri06@gmail.com', pass: 'EXISTS' }
[Nest] 101372  - 03/12/2026, 5:44:02 PM     LOG [AppService] Success: Mail sent to gauri@mediannv.com
Success: Mail sent to gauri@mediannv.com
Cron job triggered: Sending daily greeting email
Testing Config: { user: 'testgauri06@gmail.com', pass: 'EXISTS' }
Cron job triggered: Sending daily greeting email
Testing Config: { user: 'testgauri06@gmail.com', pass: 'EXISTS' }
Cron job triggered: Sending daily greeting email
Testing Config: { user: 'testgauri06@gmail.com', pass: 'EXISTS' }
[Nest] 101372  - 03/12/2026, 5:47:02 PM     LOG [AppService] Success: Mail sent to gauri@mediannv.com
Success: Mail sent to gauri@mediannv.com
Cron job triggered: Sending daily greeting email
Testing Config: { user: 'testgauri06@gmail.com', pass: 'EXISTS' }
[Nest] 101372  - 03/12/2026, 5:48:02 PM     LOG [AppService] Success: Mail sent to gauri@mediannv.com
Success: Mail sent to gauri@mediannv.com
Cron job triggered: Sending daily greeting email
Testing Config: { user: 'testgauri06@gmail.com', pass: 'EXISTS' }
[Nest] 101372  - 03/12/2026, 5:49:02 PM     LOG [AppService] Success: Mail sent to gauri@mediannv.com
Success: Mail sent to gauri@mediannv.com
[Nest] 101372  - 03/12/2026, 5:49:03 PM     LOG [AppService] Success: Mail sent to gauri@mediannv.com
Success: Mail sent to gauri@mediannv.com
Cron job triggered: Sending daily greeting email
Testing Config: { user: 'testgauri06@gmail.com', pass: 'EXISTS' }
[Nest] 101372  - 03/12/2026, 5:50:02 PM     LOG [AppService] Success: Mail sent to gauri@mediannv.com
Success: Mail sent to gauri@mediannv.com
[Nest] 101372  - 03/12/2026, 5:50:02 PM     LOG [AppService] Success: Mail sent to gauri@mediannv.com
Success: Mail sent to gauri@mediannv.com
 -->

<!-- <p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
<!--
## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).-->
