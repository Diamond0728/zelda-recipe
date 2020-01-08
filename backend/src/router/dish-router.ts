import Router from 'koa-router'
import { Context } from 'koa'
import { Dish } from '../model'

const router = new Router({ prefix: '/dish' })

router.post("/add", async (ctx: Context) => {
  const { foods, dish } = ctx.request.body 
  if(!foods.length || foods.length > 5) {
    ctx.throw(422, "error input")
  }
  if(await Dish.findOne({
    name: dish.name,
    foods
  })) {
    ctx.body = {
      success: "false",
      msg: "当前菜谱已经有啦，不要重复添加哦~"
    }
    return
  }
  await Dish.create({
    name: dish.name,
    foods,
    detail: dish.detail,
    isUnderReview: true
  })
  ctx.body = {
    success: true
  }
})

export default router.routes()