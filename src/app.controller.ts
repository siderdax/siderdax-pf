import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: any, @Res() res: any) {
    if (req?.session?.passport?.user) {
      res.send(
        `<html><head><title>Notion Auth Sample</title></head><body><pre>` +
          `${JSON.stringify(
            req.session.passport.user,
            null,
            '\t'
          )}</pre><br/><a href="/auth/logout">Logout</a></body></html>`
      );
    } else {
      res.send(
        '<html><head><title>Notion Auth Sample</title></head><a href="/auth/login">Login</a></html>'
      );
    }
  }
}
