<template>
	<view>
		<!-- 轮播图组件 -->
		<swiper indicator-dots autoplay :interval="3000" :duration="1000" circular>
			<block v-for="(item, index) in resdata" :key="index">
				<swiper-item>
					<view class="swiper-item" @tap="event(item)">
						<image :src="item.src" style="height: 350upx;width: 750upx;" lazy-load></image>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			resdata: Array
		},
		methods: {
			event(item) {
				console.log("点击了轮播图");
			}
		}
	}
</script>

<style>

</style>
