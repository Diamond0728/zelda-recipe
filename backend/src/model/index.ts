import dish from './dish'
import config from 'config'
import mongoose from 'mongoose'

const db = mongoose.createConnection(config.get('mongo.url'), {
  useNewUrlParser: true
})
const Dish = db.model('dish', dish)
export {
  Dish
}