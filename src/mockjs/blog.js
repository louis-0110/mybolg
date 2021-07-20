/*
 * @Description:
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-16 17:30:51
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-19 19:33:20
 * @FilePath: /myblog/src/mockjs/blog.js
 */

import qs from 'querystring'
import Mock from "mockjs";

Mock.mock("blogListNav", "get",
  {
    code: 200,
    msg: '',
    "data|10-20": [{
      "id|+1":1,
      name: "分类@id",
      "articleCount|0-300":0,
      "totalNum|10-30": 10
    }],
  }
);

Mock.mock(/^blog(\?.+)?$/, 'get',function (options) {
  const query = qs.parse(options.url.split('?')[1])
  return Mock.mock({
    code: 200,
    msg: '',
    data: {
      "total|2000-3000": 0,
      [`rows|${query.limit || 10}`]: [{
        id: "@guid",
        title: "@ctitle",
        description: "@cparagraph(1,10)",
        category: {
          "id|1-10": 0,
          name: "分类@id"
        },
        "scanNumber|0-3000": 0,
        "commentNumber|0-300": 30,
        "thumb|1": [Mock.Random.image("300x250", "#000", "#fff", "Random Image"),null],
        createDate: '@date'
      }]
    }
  })
})