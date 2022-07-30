<template>
	<view class="d-flex">
		<image :src="resdata.big.src" mode="" style="width: 373upx;height: 530upx;border-right: 2upx solid #f5f5f5;"></image>
		<view class="d-flex flex-column">
			<image :src="resdata.smalltop.src" mode="" style="height: 263upx;width: 375upx;border-bottom: 2upx solid #f5f5f5;"></image>
			<image :src="resdata.smallbottom.src" mode="" style="height: 265upx;width: 375upx;"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			resdata: Object
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
