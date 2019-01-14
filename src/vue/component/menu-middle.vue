<template>
	<div class="rm-middle">
		<div class="rm-inner">
			<menu-submenu v-for="item in datas"
					:key="item.index"
					:title="item.subTitle"
					:menus="item.menus"
					@onClickDetail="onClickDetail"></menu-submenu>
			<!-- <div class="rm-content"></div> -->
			<div class="rm-overlay"></div>
		</div>
	</div>
</template>

<script>
import MenuCommon from '../common/menu-common.js';
import MenuSubmenu from './menu-submenu.vue';
export default {
	name: 'menu-middle',
	components: {
		MenuSubmenu
	},
	mixins: [
		MenuCommon
	],
	data() {
		return {
			position: 'center'
		}
	},
	mounted() {

	},
	methods: {
		onClickDetail(e) {
			this.$emit('onClickDetail', e);
		}
	}
};
</script>