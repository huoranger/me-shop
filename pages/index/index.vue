<template>
	<view>
		<!-- 轮播图组件 -->
		<swipoerImage :resdata="swipers"></swipoerImage>
		
		<!-- 首页分类组件 -->
		<indexNav :resdata="indexNavs"></indexNav>、
		
		<!-- 全局分割线 -->
		<divider></divider>
		
		<!-- 广告组件 -->
		<threeAdv :resdata="threeAdv"></threeAdv>
	</view>
</template>

<script>
	import swipoerImage from "@/components/index/swiper-image.vue";
	import indexNav from "@/components/index/index-nav.vue";
	import threeAdv from "@/components/index/three-adv.vue";
	export default {
		components: {
			swipoerImage, indexNav, threeAdv
		},
		data() {
			return {
				swipers: [
					{
						src: "../../static/images/demo/demo4.jpg"
					},
					{
						src: "../../static/images/demo/demo4.jpg"
					},
					{
						src: "../../static/images/demo/demo4.jpg"
					},
				],
				indexNavs: [
					{
						src: "/static/images/indexnav/1.png",
						text: "最新发布"
						
					},
					{
						src: "/static/images/indexnav/2.gif",
						text: "小米众筹"
						
					},
					{
						src: "/static/images/indexnav/3.gif",
						text: "以旧换新"
						
					},
					{
						src: "/static/images/indexnav/4.gif",
						text: "一分换团"
						
					},
					{
						src: "/static/images/indexnav/5.gif",
						text: "超值特卖"
						
					},
					{
						src: "/static/images/indexnav/6.gif",
						text: "小米秒杀"
						
					},
					{
						src: "/static/images/indexnav/7.gif",
						text: "真心想要"
						
					},
					{
						src: "/static/images/indexnav/8.gif",
						text: "电视热卖"
						
					},
					{
						src: "/static/images/indexnav/9.gif",
						text: "家电热卖"
						
					},
					{
						src: "/static/images/indexnav/10.gif",
						text: "米粉卡"
						
					}
				],
				threeAdv: {
					big: {
						src: "/static/images/demo/demo1.jpg"
					},
					smalltop: {
						src: "/static/images/demo/demo2.jpg"
					}, 
					smallbottom: {
						src: "/static/images/demo/demo2.jpg"
					}
					
				}
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
