const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  user_score: {
    type: String,
    required: false,
  },

 user_best_score: {
    type: String,
    required: false,
    },
  user_gameTime:{
    type:Date,
    required:false,
  }
});

const UserInfo = mongoose.model("UserInfo", userInfoSchema);

module.exports = UserInfo;
