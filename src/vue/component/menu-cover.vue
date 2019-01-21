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

<style scoped>
.rm-wrapper .rm-cover {
	z-index: 100;
	-webkit-transform-origin: 0% 50%;
	-webkit-transition-delay: 0.2s;
	transform-origin: 0% 50%;
	transition-delay: 0.2s;
}

.rm-container.rm-open .rm-cover {
	-webkit-transform: rotateY(-180deg);
	-webkit-transition-delay: 0s;
	transform: rotateY(-180deg);
	transition-delay: 0s;
}

.main.rm-in .rm-cover {
	-webkit-transform: rotateY(-150deg);
	transform: rotateY(-150deg);
}

.main.rm-in .rm-cover {
	-webkit-transition-delay: 0s;
	transition-delay: 0s;
}

.rm-content {
	padding: 20px;
}

.rm-logo, 
.rm-content h2,
a.rm-button-open {
	font-weight: 700;
	text-transform: uppercase;
	font-family: 'Arvo', Arial, sans-serif;
}


a.rm-button-open {
	color: #323b4c;	
	font-size: 16px;
	line-height: 45px;
	margin: 10px auto;
	display: block;
	text-shadow: 0 1px 0 rgba(255,255,255,0.8);
}

a.rm-button-open:hover {
	color: #e6b741;
}

.rm-button-open:after {
	content: '\2192';
	display: inline-block;
	margin-left: 3px;
	font-family: Arial, sans-serif;
}

.rm-content h2 {
	letter-spacing: 2px;
	font-size: 26px;
	text-shadow: 1px 1px 0 #fff, 3px 3px 0 #e6b741;
}

.rm-content h3 {
	font-size: 14px;
	margin: 40px 0;
	padding: 20px 40px;
	color: #323b4c;
	font-weight: 500;
	border-top: 4px double #323b4c;
	text-transform: uppercase;
	line-height: 20px;
	text-shadow: 1px 1px 0 rgba(255,255,255,0.8);
}

.rm-content h4 {
	margin: 0 0 20px 0;
	font-size: 16px;
	padding-bottom: 10px;
	color: #323b4c;
	border-bottom: 4px double #323b4c;
	text-shadow: 1px 1px 0 #fff, 2px 2px 0 #E6B741;
	letter-spacing: 2px;
}

.rm-content h4:not(:first-child) {
	margin-top: 35px;
}

.rm-logo {
	width: 100px;
	height: 100px;
	background: #323b4c url(../../../resources/images/restaurant.jpg) no-repeat center center;
	border-radius: 50%;
	margin: 20px auto;
	box-shadow: 
		0 0 0 3px #fff, 
		0 0 0 4px #e6b741, 
		0 0 0 5px #fff, 
		0 0 0 6px #e6b741, 
		0 0 0 7px #fff, 
		0 0 0 8px #e6b741;
}

.rm-info p {
	font-size: 14px;
	line-height: 20px;
}

@media screen and (max-width: 960px) {
	.rm-button-open {
		pointer-events: none;
	}

	.rm-button-open:after {
		content: '\2193';
	}
}

@media screen and (max-width: 960px) {
	.rm-container.rm-open .rm-cover {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
	}

	.main.rm-in .rm-cover {
		-webkit-transform: rotateY(0deg);
		-webkit-transition-delay: 0s;
		transform: rotateY(0deg);
		transition-delay: 0s;
	}
}
</style>
