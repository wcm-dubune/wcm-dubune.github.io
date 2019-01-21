<template>
	<div class="rm-middle">
		<div class="rm-inner">
			<div class="rm-notice">
				<p v-if="notice" v-html="notice"></p>
			</div>
			<menu-submenu v-for="item in datas"
					:key="item.index"
					:title="item.subTitle"
					:menus="item.menus"></menu-submenu>
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
	}
};
</script>

<style scoped>
.rm-wrapper .rm-middle {
	z-index: 50;
	box-shadow: 0 4px 10px rgba(0,0,0,0.7);
}

.rm-middle .rm-overlay {
	background: -moz-linear-gradient(left, rgba(0,0,0,0) 64%, rgba(0,0,0,0.05) 100%);
	background: -webkit-gradient(linear, left top, right top, color-stop(64%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.05)));
	background: -webkit-linear-gradient(left, rgba(0,0,0,0) 64%,rgba(0,0,0,0.05) 100%);
	background: -o-linear-gradient(left, rgba(0,0,0,0) 64%,rgba(0,0,0,0.05) 100%);
	background: -ms-linear-gradient(left, rgba(0,0,0,0) 64%,rgba(0,0,0,0.05) 100%);
	background: linear-gradient(to right, rgba(0,0,0,0) 64%,rgba(0,0,0,0.05) 100%);
}

.rm-container.rm-open .rm-middle {
	pointer-events: auto;
}

@media screen and (max-width: 960px) {
	.rm-overlay, .rm-middle .rm-overlay {
		background: transparent;
	}
}
</style>
