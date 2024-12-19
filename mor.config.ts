import { defineConfig } from '@morjs/cli'

export default defineConfig([
  {
    name: 'alipay-miniprogram',
    sourceType: 'alipay',
    target: 'alipay',
    compileType: 'miniprogram',
    compileMode: 'bundle'
  },
  {
    name: 'wechat-miniprogram',
    sourceType: 'alipay',
    target: 'wechat',
    compileType: 'miniprogram',
    compileMode: 'bundle'
  },
  
])
