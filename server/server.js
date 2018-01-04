const path = require('path');
const Express = require('express');
const bodyParser = require ('body-parser')
const cookieParser = require ('cookie-parser')
const session = require ('express-session')
const mongoose = require ('mongoose')

const app = new Express();
const port = 3001;

// bodyParser的处理
// 请求是通过 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// cookieParser的处理
app.use(cookieParser('react_toutiao'));

// session的处理
app.use(session({
  secret:'react_toutiao',
  resave: true,
  saveUninitialized: true,
  cookie: {maxAge: 60 * 1000 * 30}//过期时间
}))

app.use('/', require('./main'));

mongoose.Promise = require('bluebird');

mongoose.connect(`mongodb://localhost:27017/toutiao`, function(err) {
  if(err) {
    console.log(err, "数据库连接失败");
    return;
  }
  console.info('数据库连接成功');

  app.listen(port, function(err) {
    if(err) {
      console.error('err:', err);
    } else {
      console.info('API服务器已启动')
    }
  })
})
