/*
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-07-16 11:50:48
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-16 14:26:48
 * @FilePath: /myblog/src/mixins/fetchData.js
 */

export default function (defaultDataValue = null) {
  return {
    data() {
      return {
        data: defaultDataValue,
        isLoading: true
      }
    },
    // 生命周期函数
    async created() {
      this.data = await this.fetchData();
      this.isLoading = false;
    }
  }
}