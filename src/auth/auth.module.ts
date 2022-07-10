import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PassportModule } from '@nestjs/passport'
import { NotionStrategy } from './notion.strategy'

@Module({
  imports: [PassportModule.register({ session: true })],
  providers: [AuthService, NotionStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
