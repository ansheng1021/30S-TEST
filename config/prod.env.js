'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = {
  NODE_ENV: '"production"',
  API_ROOT:'https://testpc.30sche.com' //todo 请求线上地址
}
