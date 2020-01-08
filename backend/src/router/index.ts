import Router from 'koa-router'
import userRouter from './user-router'
import dishRouter from './dish-router'

const router = new Router({ prefix: '/api/1.0' })
router.use(userRouter)
router.use(dishRouter)

export default router