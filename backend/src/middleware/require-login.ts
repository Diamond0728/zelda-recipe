import { Context } from 'koa'
import { AES, enc } from 'crypto-js'
import dayjs from 'dayjs'

const TOKEN_KEY = "aud93rh9ghr9g2013hf0io"

export default async function(ctx: Context, next: Function) {
  const accessToken = ctx.request.header['access-token']
  const accessInfo = JSON.parse(AES.decrypt(accessToken, TOKEN_KEY).toString(enc.Utf8))
  if(!accessInfo || dayjs() > dayjs(accessInfo.deadline)) {
    ctx.throw(401, 'please login')
    return
  }
  // const user = userService.getUser()
  // ctx.state.user = user
  await next()
}