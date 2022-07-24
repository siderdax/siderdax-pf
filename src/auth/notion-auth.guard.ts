import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard, IAuthModuleOptions } from '@nestjs/passport';
import * as session from 'express-session';

@Injectable()
export class NotionAuthGuard
  extends AuthGuard('notion')
  implements CanActivate
{
  constructor() {
    super();
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    if (context.switchToHttp().getRequest().session?.passport) {
      return true;
    }

    return super.canActivate(context);
  }
}
