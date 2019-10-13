/**
 * app.js 入口模块
 * 职责：
 *     启动服务
 *     服务相关配置
 *        模板引擎
 *        body-parser 解析表单 POST 请求体
 *        提供静态资源服务
 *     挂载路由
 *     监听端口，启动服务
 * 备注:
 *      划分模块
 *        - 每个模块职责 单一
 *        - 增强项目代码的可维护性，提升开发效率
 */
var express = require('express')
var router = require('./router')
var app = express()

app.engine('html', require('express-art-template'))

app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))

// 把路由容器挂载到 app 服务中
app.use(router)

app.listen(3000, function() {
  console.log('node express is running')
})
