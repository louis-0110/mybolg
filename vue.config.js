/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-06-02 23:43:08
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-06-04 10:19:19
 * @FilePath: /myblog/vue.config.js
 */

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