import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { AuthGuard, IAuthModuleOptions } from '@nestjs/passport'

@Injectable()
export class NotionAuthGuard
  extends AuthGuard('notion')
  implements CanActivate
{
  constructor() {
    super()
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    return super.canActivate(context)
  }
}
