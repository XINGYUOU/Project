// 导入express
const express = require('express');
// 导入cors
const cors = require('cors');
// 导入body-parser
const bodyParser = require('body-parser');

const app = express();
// 挂载cors
app.use(cors());
// 挂载bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(3007,() => {
  console.log("服务器启动成功~：http://127.0.0.1:"+3007);
})