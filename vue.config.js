/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-06-02 23:43:08
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-16 23:35:53
 * @FilePath: /myblog/vue.config.js
 */

// const path = require('path') // 引入path模块
// function resolve (dir) {
//   return path.join(__dirname, dir) // path.join(_dirname)设置绝对路径
// }

// vue-cli 配置文件
module.exports={
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     // 第一个参数：别名 第二个参数：路径
  //     .set('components', resolve('src/components'))
  //     .set('assets', resolve('src/assets'))
  //     .set('commonjs', resolve('src/commonjs'))
  //     .set('views', resolve('src/views'))
  //     // .set('network', resolve('src/network'))
  // },
  devServer:{    
  },
  publicPath : '/'
}