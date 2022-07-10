import { Controller, Get, Next, Req, Res, UseGuards } from '@nestjs/common'
import { NotionAuthGuard } from './notion-auth.guard'
import * as passport from 'passport'
import { NotionStrategy } from './notion.strategy'

@Controller('auth')
export class AuthController {
  passport: any

  constructor(private readonly notionStrategy: NotionStrategy) {
    this.passport = notionStrategy.getPassportInstance()
  }

  @UseGuards(NotionAuthGuard)
  @Get('login')
  async login(@Req() req) {
    return req.user
  }

  @Get('callback')
  async hello(@Req() req, @Res() res, @Next() next) {
    return this.passport.authenticate('notion', {
      successRedirect: '/',
      failureRedirect: '/fail',
    })(req, res, next)
  }

  @Get('fail')
  @UseGuards(NotionAuthGuard)
  async profile() {
    return 'fail'
  }
}
