import { Controller, Get, Next, Req, Res, UseGuards } from '@nestjs/common';
import { NotionAuthGuard } from './notion-auth.guard';
import { NotionStrategy } from './notion.strategy';

@Controller('auth')
export class AuthController {
  passport: any;

  constructor(notionStrategy: NotionStrategy) {
    this.passport = notionStrategy.getPassportInstance();
  }

  @UseGuards(NotionAuthGuard)
  @Get('login')
  async login(@Req() req: any) {
    return req.user;
  }

  @UseGuards(NotionAuthGuard)
  @Get('logout')
  async logout(@Req() req: any, @Res() res: any, @Next() next: any) {
    req.logout(function (err: any) {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    });
  }

  @Get('callback')
  async hello(
    @Req() req: any,
    @Res() res: any,
    @Next() next: any
  ): Promise<any> {
    return this.passport.authenticate('notion', {
      successRedirect: '/',
      failureRedirect: '/fail',
    })(req, res, next);
  }

  @Get('fail')
  @UseGuards(NotionAuthGuard)
  async profile() {
    return 'fail';
  }
}
