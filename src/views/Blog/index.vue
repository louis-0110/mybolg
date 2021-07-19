<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: gaoluo
 * @Date: 2021-03-18 20:42:14
 * @LastEditors: gaoluo
 * @LastEditTime: 2021-07-19 09:16:44
 * @FilePath: /myblog/src/views/Blog/index.vue
-->
<template>
  <div class="blog-cantainer">
		<Layout v-loading>
			<BlogList/>
			<template #right>
				<BlogCategory v-loading></BlogCategory>
			</template>
		</Layout>
	</div>
</template>

<script>
import Layout from '@/components/Layout';
import BlogList from '@/views/Blog/components/BlogList.vue'
import BlogCategory from '@/views/Blog/components/BlogCategory.vue';
export default {
	components:{
		Layout,
		BlogCategory,
		BlogList
	},
  data() {
    return {
		};
  },
  async created() {
    
    
  },
  methods: {
	
	},
};
</script>

<style lang="less" scoped>
.blog-cantainer{
	width: 100%;
	height: 100%;
}
</style>
