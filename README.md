### Express + MongonDB 实现RESTFUL风格基本增删查改接口

.env文件里`MONGODB_URL`为mongodb数据库地址，`testmongo`为数据库名， 以user的增删查改位例

### setUp

```bash
git clone 

npm install

npm run dev

```

### Example API

- query all data

```
methods: GET
URL: http://localhost:3000/api/v1/user/
Return results: []
```

- query by id

```
methods: GET
URL: http://localhost:3000/api/v1/user/<id>
Return results: []
```

- create one

```
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
methods: DELETE
URL: http://localhost:3000/api/v1/user/<id>
params: id
Return results: {}

```

### mongodb插件mongoose
[https://www.npmjs.com/package/mongoose](https://www.npmjs.com/package/mongoose)
