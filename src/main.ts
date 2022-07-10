import 'dotenv/config'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import * as passport from 'passport'
import * as session from 'express-session'
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.use(
    session({
      secret: process.env.EXPRESS_SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  )
  // app.use(cookieParser())

  passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
      cb(null, user)
    })
  })

  passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
      return cb(null, user)
    })
  })

  await app.listen(3000)
}
bootstrap()
