<template>
	<view class="row j-center m-2">
		<block v-for="(item, index) in resdata" :key="index">
			<view class="span-4 d-flex flex-column a-center j-center py-1" @tap="event(item)">
				<image :src="item.src" style="width: 60upx;height: 60upx;"></image>
				<text class="font-sm">{{item.text}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			resdata: Array
		},
		data() {
			return {
				
			}
		},
		methods: {
			event(item) {
				console.log("点击了分类图标")
			}
		}
	}
</script>

<style>

</style>
