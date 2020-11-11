const express = require('express');
const mongoose = require('mongoose');
const api = require('./src')
const app = express()
const bodyParser = require('body-parser') // 解析post请求参数
require('dotenv').config();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())
app.use('/api/v1', api)

// 连接mongodb
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection mongodb error:'));
db.once('open', () => {
  // we're connected!
  console.log('connection mongodb success');
});

// 监听3000端口
app.listen(3000, () => {
    console.log('serve start at prot 3000');
})