<template>
	<div class="rm-right">
		<div class="rm-front"></div>
		<div class="rm-back">
			<span class="rm-close" @click="_closeMenu">Close</span>
			<menu-submenu v-for="item in datas"
					:key="item.index"
					:title="item.subTitle"
					:menus="item.menus"></menu-submenu>
		</div>
	</div>
</template>

<script>
import MenuCommon from '../common/menu-common.js';
import MenuSubmenu from './menu-submenu.vue';
export default {
	name: 'menu-right',
	components: {
		MenuSubmenu
	},
	mixins: [
		MenuCommon
	],
	data() {
		return {
			position: 'right'
		}
	},
	mounted() {
	},
	methods: {
		_closeMenu() {
			this.$store.commit('closeMenu');
		}
	}
};
</script>