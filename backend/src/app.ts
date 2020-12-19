import koa from 'koa'
import koaBody from 'koa-body'
import routers from  './router'
import cors from 'koa2-cors'
import mongoose from 'mongoose'

const app = new koa()

app.use(koaBody())
app.use(cors({
  origin: "*",
  exposeHeaders: ['X-Token-Header'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'PUT'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
app.use(routers.routes())
app.use(routers.allowedMethods())
app.listen(3000, () => {
  console.log("listening", 3000)
});