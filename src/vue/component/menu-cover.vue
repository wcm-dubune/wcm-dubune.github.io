<template>
	<div class="rm-cover" @click="_openMenu">
		<div class="rm-front">
			<div class="rm-content">
				<div class="rm-logo"></div>
				<h2>백운산 두부네</h2>
				<h3>국산콩 100%로 만드는<br>두부요리 전문점</h3>

				<a href="#" class="rm-button-open">메뉴 리스트</a>
				<div class="rm-info">
					<p>
					경기도 의왕시 왕곡로 243<br>(백운산 입구)<br>
					<strong>Phone</strong> 031.457.8588<br>
					</p>
				</div>
			</div>
		</div>

		<div class="rm-back">
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
	name: 'menu-cover',
	mixins: [
		MenuCommon,
	],
	components: {
		MenuSubmenu
	},
	data() {
		return {
			position: 'left'
		}
	},
	mounted() {

	},
	methods: {
		_openMenu() {
			this.$store.commit('openMenu');
		}
	}
};
</script>