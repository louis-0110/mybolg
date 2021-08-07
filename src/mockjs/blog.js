/*
 * @Description:
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-16 17:30:51
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-08-06 16:25:59
 * @FilePath: /myblog/src/mockjs/blog.js
 */

import qs from 'querystring'
import Mock from "mockjs";

Mock.mock("blogListNav", "get",
  {
    code: 200,
    msg: '',
    "data|10-20": [{
      "id|+1": 1,
      name: "分类@id",
      "articleCount|0-300": 0,
      "totalNum|10-30": 10
    }],
  }
);

Mock.mock(/^blog(\?.+)?$/, 'get', function (options) {
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
        "thumb|1": [Mock.Random.image(), Mock.Random.image(), Mock.Random.image(), Mock.Random.image()],
        createDate: '@date'
      }]
    }
  })
})

Mock.mock(/^getArticle(\/?.+)?$/, 'get', function (options) {
  console.log(options)
  return Mock.mock({
    code: 200,
    msg: "",
    data: {
      id: "@guid",
      title: "CORS跨域方案详解",
      category: {
        "id|1-10": 1,
        name: "@分类@id"
      },
      description: "@cparagraph(10,20)",
      "scanNumber|0-10000": 0,
      "commentNumber|0-100": 0,
      createDate: "@date",
      toc: [
        { name: "概述", anthor: "article-md-title-1" },
        {
          name: "简单请求0", anthor: "article-md-title-2",
          children: [{
            name: "简单请求0-1",
            anthor: "article-md-title-3",
          },
          {
            name: "简单请求0-2",
            anthor: "article-md-title-4",
          }]
        },
        { name: "需要检查的点", anthor: "article-md-title-5" },
        { name: "需要检查的点", anthor: "article-md-title-6" },
        { name: "需要检查的点", anthor: "article-md-title-7" },
        { name: "需要检查的点", anthor: "article-md-title-8" },
      ],
      "thumb|1": [Mock.Random.image("300x250", "#000", "#fff", "Random Image"), null],
      htmlContent: "<div>文章内容。。。。</div><h1 id='article-md-title-1'>article-md-title-1</h1><p>别由用由离质号置业个列而太时质外然。回决他意象斗存真被过规规么且系。油和化等全信研构规水团心又价算业。代看命任重机却教单提包打易保办。装们小类里一管如做了去革。构之式消组层完是应性段政。十便数万现就问府经国管界面证着存共江。性不质别记标京权图变该响么打。消接电何青织下象非但水先种革率院门论。队节确商定主去矿完教阶月。文石建社器包张海应报广持准。其明上非改这按特都华没约准委感此不。习件信理整权且根向江方影历把。但按律于科况进民育程改土水建。般代不方治要复铁次界形表证切产。化局产历响属术多较民因思比外更。样进具信流流内较新干据适前教值。</p><p>别由用由离质号置业个列而太时质外然。回决他意象斗存真被过规规么且系。油和化等全信研构规水团心又价算业。代看命任重机却教单提包打易保办。装们小类里一管如做了去革。构之式消组层完是应性段政。十便数万现就问府经国管界面证着存共江。性不质别记标京权图变该响么打。消接电何青织下象非但水先种革率院门论。队节确商定主去矿完教阶月。文石建社器包张海应报广持准。其明上非改这按特都华没约准委感此不。习件信理整权且根向江方影历把。但按律于科况进民育程改土水建。般代不方治要复铁次界形表证切产。化局产历响属术多较民因思比外更。样进具信流流内较新干据适前教值。</p><p>别由用由离质号置业个列而太时质外然。回决他意象斗存真被过规规么且系。油和化等全信研构规水团心又价算业。代看命任重机却教单提包打易保办。装们小类里一管如做了去革。构之式消组层完是应性段政。十便数万现就问府经国管界面证着存共江。性不质别记标京权图变该响么打。消接电何青织下象非但水先种革率院门论。队节确商定主去矿完教阶月。文石建社器包张海应报广持准。其明上非改这按特都华没约准委感此不。习件信理整权且根向江方影历把。但按律于科况进民育程改土水建。般代不方治要复铁次界形表证切产。化局产历响属术多较民因思比外更。样进具信流流内较新干据适前教值。</p><p>别由用由离质号置业个列而太时质外然。回决他意象斗存真被过规规么且系。油和化等全信研构规水团心又价算业。代看命任重机却教单提包打易保办。装们小类里一管如做了去革。构之式消组层完是应性段政。十便数万现就问府经国管界面证着存共江。性不质别记标京权图变该响么打。消接电何青织下象非但水先种革率院门论。队节确商定主去矿完教阶月。文石建社器包张海应报广持准。其明上非改这按特都华没约准委感此不。习件信理整权且根向江方影历把。但按律于科况进民育程改土水建。般代不方治要复铁次界形表证切产。化局产历响属术多较民因思比外更。样进具信流流内较新干据适前教值。</p><p>别由用由离质号置业个列而太时质外然。回决他意象斗存真被过规规么且系。油和化等全信研构规水团心又价算业。代看命任重机却教单提包打易保办。装们小类里一管如做了去革。构之式消组层完是应性段政。十便数万现就问府经国管界面证着存共江。性不质别记标京权图变该响么打。消接电何青织下象非但水先种革率院门论。队节确商定主去矿完教阶月。文石建社器包张海应报广持准。其明上非改这按特都华没约准委感此不。习件信理整权且根向江方影历把。但按律于科况进民育程改土水建。般代不方治要复铁次界形表证切产。化局产历响属术多较民因思比外更。样进具信流流内较新干据适前教值。</p><p>别由用由离质号置业个列而太时质外然。回决他意象斗存真被过规规么且系。油和化等全信研构规水团心又价算业。代看命任重机却教单提包打易保办。装们小类里一管如做了去革。构之式消组层完是应性段政。十便数万现就问府经国管界面证着存共江。性不质别记标京权图变该响么打。消接电何青织下象非但水先种革率院门论。队节确商定主去矿完教阶月。文石建社器包张海应报广持准。其明上非改这按特都华没约准委感此不。习件信理整权且根向江方影历把。但按律于科况进民育程改土水建。般代不方治要复铁次界形表证切产。化局产历响属术多较民因思比外更。样进具信流流内较新干据适前教值。</p><p>别由用由离质号置业个列而太时质外然。回决他意象斗存真被过规规么且系。油和化等全信研构规水团心又价算业。代看命任重机却教单提包打易保办。装们小类里一管如做了去革。构之式消组层完是应性段政。十便数万现就问府经国管界面证着存共江。性不质别记标京权图变该响么打。消接电何青织下象非但水先种革率院门论。队节确商定主去矿完教阶月。文石建社器包张海应报广持准。其明上非改这按特都华没约准委感此不。习件信理整权且根向江方影历把。但按律于科况进民育程改土水建。般代不方治要复铁次界形表证切产。化局产历响属术多较民因思比外更。样进具信流流内较新干据适前教值。</p><p>别由用由离质号置业个列而太时质外然。回决他意象斗存真被过规规么且系。油和化等全信研构规水团心又价算业。代看命任重机却教单提包打易保办。装们小类里一管如做了去革。构之式消组层完是应性段政。十便数万现就问府经国管界面证着存共江。性不质别记标京权图变该响么打。消接电何青织下象非但水先种革率院门论。队节确商定主去矿完教阶月。文石建社器包张海应报广持准。其明上非改这按特都华没约准委感此不。习件信理整权且根向江方影历把。但按律于科况进民育程改土水建。般代不方治要复铁次界形表证切产。化局产历响属术多较民因思比外更。样进具信流流内较新干据适前教值。</p><p>别由用由离质号置业个列而太时质外然。回决他意象斗存真被过规规么且系。油和化等全信研构规水团心又价算业。代看命任重机却教单提包打易保办。装们小类里一管如做了去革。构之式消组层完是应性段政。十便数万现就问府经国管界面证着存共江。性不质别记标京权图变该响么打。消接电何青织下象非但水先种革率院门论。队节确商定主去矿完教阶月。文石建社器包张海应报广持准。其明上非改这按特都华没约准委感此不。习件信理整权且根向江方影历把。但按律于科况进民育程改土水建。般代不方治要复铁次界形表证切产。化局产历响属术多较民因思比外更。样进具信流流内较新干据适前教值。</p><h1 id='article-md-title-2'>article-md-title-2</h1><div>article-md-title-2article-md-title-2article-md-title-2article-md-title-2article-md-title-2article-md-title-2article-md-title-2article-md-title-2article-md-title-2article-md-title-2article-md-title-2article-md-title-2article-md-title-2article-md-title-2article-md-title-2article-md-title-2</div><h1 id='article-md-title-3'>article-md-title-3</h1><div> article-md-title-3article-md-title-3article-md-title-3article-md-title-3article-md-title-3article-md-title-3article-md-title-3article-md-title-3article-md-title-3article-md-title-3article-md-title-3article-md-title-3article-md-title-3article-md-title-3article-md-title-3article-md-title-3article-md-title-3article-md-title-3article-md-title-3article-md-title-3 </div><h1 id='article-md-title-4'>article-md-title-4</h1><h1 id='article-md-title-5'>article-md-title-5</h1>"
    },
  })
})

Mock.mock(/^comment\/?(\?.+)?$/, 'get', function (opotions) {
  const query = qs.parse(opotions.url.split('?')[1]);

  return Mock.mock({
    code: 200,
    msg: '',
    data: {
      total: 32,
      [`rows|${query.limit || 10}`]: [{
        id: "@guid",
        nickname: '@cname',
        content: '@cparagraph(2,10)',
        createDate: '@date',
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_360_360%2F69%2F60%2F02%2F696002a16999b0729ffaf6ea4e730f99.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618653042&t=5d236d199749ca50f26a87aeb3b6851b'
      }]
    }
  })
})
Mock.mock('postComment', 'post', {
  code: 200,
  msg: '',
  data: {
    id: '@guid',
    nickname: '@cname',
    content: '@cparagraph(1,10)',
    createDate: Date.now(),
    'avator|1': ["https://i.loli.net/2021/07/22/Itf2elEZ9wnWj6b.jpg", "https://i.loli.net/2021/07/22/7KlSQqPkXzJ2ghY.jpg"]
  }
})