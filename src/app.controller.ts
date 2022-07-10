import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: any, @Res() res: any) {
    if (req.session && req.session.passport && req.session.passport.user) {
      res.send(req.session.passport.user)
    } else {
      res.send(
        '<html><head><title>Notion Auth Sample</title></head><a href="/auth/login">Login</a></html>'
      )
    }
  }
}
