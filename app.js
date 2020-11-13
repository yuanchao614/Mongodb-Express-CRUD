const express = require('express');
const api = require('./src')
const app = express()
const morgan = require('morgan') // 请求日志
const bodyParser = require('body-parser') // 解析post请求参数

const InitiateMongoServer = require('./src/mongodb/index')

const PORT = process.env.PORT || 3000
require('dotenv').config();

app.use(morgan('dev'))
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())
app.use('/api/v1', api)

InitiateMongoServer()

// 监听3000端口
app.listen(PORT, () => {
    console.log(`serve start at prot ${PORT}`);
})