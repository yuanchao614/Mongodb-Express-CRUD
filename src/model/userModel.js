const mongoose = require('mongoose');

// 规定user集合有哪些属性（相当于表的列数）_id自动生成
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    passWord: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now()
      }
  });

  const User = mongoose.model('user', userSchema) // 这里的user相当于mongodb数据库集合（表）

  module.exports = User