const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const validateEmail = require('../utils/validateEmail');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts'
      }
    ],
    friends: [ this ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

userSchema.virtual('friendCount').get(function() {
  return this.users.reduce((total, friend) => total + friend.length + 1, 0);
});

// create the User model using the UserSchema
const User = model('User', userSchema);

// export the Pizza model
module.exports = User;