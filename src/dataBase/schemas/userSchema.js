import mongoose from 'mongoose';

const schema = mongoose.Schema;

const userSchema = new schema(
  {
    name: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['H', 'M']
    },
    posts: [{
      type: schema.Types.ObjectId,
      ref: 'posts',
    }]
  },
  { timestamps: true }
);

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
}

export default userSchema;
