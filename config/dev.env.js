'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
    API_ROOT:'https://testpc.30sche.com' //todo 本地请求地址
})
