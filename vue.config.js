/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-06-02 23:43:08
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-09 23:52:15
 * @FilePath: /myblog/vue.config.js
 */

// vue-cli 配置文件
module.exports={
  devServer:{
    proxy:{
      'wpmapp':{
        target:"https://www.ship1024.com"
      }
    }
    
  },
  publicPath : './'
}