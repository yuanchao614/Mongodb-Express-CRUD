### Express + MongonDB 实现RESTFUL风格基本增删查改接口

.env文件里`MONGODB_URL`为mongodb数据库地址，`testmongo`为数据库名， `PORT`为服务端端口默认为3000
- 实现对数据的基本增删改查
- 实现用户的登陆注册获取`token`

### setUp

```bash
git clone 

cd Mongodb-Express-CRUD

npm install

npm run dev

```

### Example API

- query all data

不带分页参数默认查询所有数据

```
header: token
methods: GET
URL: http://localhost:3000/api/v1/user/?pageSize=10&pageIndex=0
Return results: 
{
  data: [],
  total: number,
  msg: ''
}
```

![查询数据](/statics/images/queryUserDataBypagenation.png)

- query by id

```
header: token
methods: GET
URL: http://localhost:3000/api/v1/user/<id>
Return results: []
```

![根据ID查询数据](/statics/images/queryUserDataByUserId.png)

- create one

```
header: token
methods: POST
URL: http://localhost:3000/api/v1/user/
bodyParam: 
{
    userName: 'admin',
    passWord: 'admin'
    email: 'admin@qq.com'
}
Return results:
{
  data: {},
  msg: ''
}
```

![新增数据](/statics/images/createUser.png)

- update one

```
header: token
methods: POST
URL: http://localhost:3000/api/v1/user/<id>
params: id
bodyParam: 
{
    userName: 'admin',
    passWord: 'admin'
    email: 'admin@qq.com'
}
Return results: 
{
  data: '',
  msg: ''
}

```

![更新数据](/statics/images/updateUser.png)


- delete one

```
header: token
methods: DELETE
URL: http://localhost:3000/api/v1/user/<id>
params: id
Return results: {}

```

![删除数据](/statics/images/deleteUser.png)


- signup

```
methods: POST
URL: http://localhost:3000/api/v1/auth/signup
body: {
userName,
email,
passWord
}
Return results: 
{
  token,
  data: {},
  msg: ''
}
```

![用户注册](/statics/images/signup.png)


- login

```
methods: POST
URL: http://localhost:3000/api/v1/auth/login
body: {
email,
passWord
}
Return results: {
token,
data: {},
msg: ''
}
```

![用户登录](/statics/images/login.png)

- query by userData count by createDate

```
header: token
methods: GET
URL: http://localhost:3000/api/v1/user/query/querybyDate
Return results: {
  data: [],
  msg: ''
}
```

![查询用户统计信息](/statics/images/userYearMontDayCount.png)

### 插件

* mongodb插件`mongoose`

[https://www.npmjs.com/package/mongoose](https://www.npmjs.com/package/mongoose)

* `bcryptjs`加密插件 

[bcryptjs](https://www.npmjs.com/package/bcrypt)

* `jsonwebtoken`生成token插件

[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

* `nodemon`自动更新插件

[nodemon](https://www.npmjs.com/package/nodemon)

* `morgan`api日志插件

[morgan](https://www.npmjs.com/package/morgan)


