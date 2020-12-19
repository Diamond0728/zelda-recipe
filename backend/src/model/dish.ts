import mongoose from 'mongoose'

const { Schema } = mongoose
const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  detail: String,
  img: String,
  foods: Array,
  isUnderReview: Boolean
})

export default schema
// export default mongoose.model('dish', schema)