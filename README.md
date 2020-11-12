### Express + MongonDB 实现RESTFUL风格基本增删查改接口

.env文件里`MONGODB_URL`为mongodb数据库地址，`testmongo`为数据库名， `PORT`为服务端端口默认为3000
- 实现用户的增删改查
- 实现用户的登陆注册带`token`

### setUp

```bash
git clone 

npm install

npm run dev

```

### Example API

- query all data

```
header: 带token
methods: GET
URL: http://localhost:3000/api/v1/user/
Return results: []
```

- query by id

```
header: 带token
methods: GET
URL: http://localhost:3000/api/v1/user/<id>
Return results: []
```

- create one

```
header: 带token
methods: POST
URL: http://localhost:3000/api/v1/user/
bodyParam: 
{
    userName: 'admin',
    passWord: 'admin'
    email: 'admin@qq.com'
}
Return results: {}
```

- update one

```
header: 带token
methods: POST
URL: http://localhost:3000/api/v1/user/<id>
params: id
bodyParam: 
{
    userName: 'admin',
    passWord: 'admin'
    email: 'admin@qq.com'
}
Return results: {}

```

- delete one

```
header: 带token
methods: DELETE
URL: http://localhost:3000/api/v1/user/<id>
params: id
Return results: {}

```

- signup

```
methods: POST
URL: http://localhost:3000/api/v1/auth/signup
body: {
userName,
email,
passWord
}
Return results: {
token
}
```

- login

```
methods: POST
URL: http://localhost:3000/api/v1/auth/login
body: {
email,
passWord
}
Return results: {
token
}
```

### mongodb插件mongoose
[https://www.npmjs.com/package/mongoose](https://www.npmjs.com/package/mongoose)

