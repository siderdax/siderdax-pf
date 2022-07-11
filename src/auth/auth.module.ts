import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PassportModule, PassportSerializer } from '@nestjs/passport';
import { NotionStrategy } from './notion.strategy'

@Module({
  imports: [PassportModule.register({ session: true })],
  providers: [AuthService, NotionStrategy],
  controllers: [AuthController],
})
export class AuthModule extends PassportSerializer {
  serializeUser(user: any, done: Function) {
    process.nextTick(function() {
      done(null, user);
    });
  }
  deserializeUser(user: any, done: Function) {
    process.nextTick(function() {
      return done(null, user);
    });
  }
}
