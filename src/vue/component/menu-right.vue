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

<style scoped>
.rm-wrapper .rm-right {
	z-index: 60;
	-webkit-transform-origin: 100% 50%;
	-webkit-transition-delay: 0s;
	transform-origin: 100% 50%;
	transition-delay: 0s;
}

.rm-container.rm-open .rm-right {
	box-shadow: 0 4px 5px -3px rgba(0,0,0,0.6);
}

.rm-container.rm-open .rm-right {
	pointer-events: auto;
}


.rm-container.rm-open .rm-right {
	-webkit-transform: rotateY(180deg);
	-webkit-transition-delay: 0.2s;
	transform: rotateY(180deg);
	transition-delay: 0.2s;
}


.main.rm-in .rm-right {
	-webkit-transform: rotateY(150deg);
	transform: rotateY(150deg);
}


.main.rm-in .rm-right,
.rm-container.rm-nodelay .rm-right {
	-webkit-transition-delay: 0s;
	transition-delay: 0s;
}

@media screen and (max-width: 960px) {
	.rm-container.rm-open .rm-right {
		-webkit-transform: rotateY(0deg);
		transform: rotateY(0deg);
	}

	.rm-right .rm-front {
		display: none;
	}

	.main.rm-in .rm-right {
		-webkit-transform: rotateY(0deg);
		-webkit-transition-delay: 0s;
		transform: rotateY(0deg);
		transition-delay: 0s;
	}
}



.rm-close {
	background: #e6b741;
	text-transform: uppercase;
	display: block;
	position: absolute;
	color: #fff;
	font-size: 11px;
	font-weight: 500;
	line-height: 15px;
	padding: 2px 5px;
	top: -19px;
	opacity: 0;
	right: 30px;
	cursor: pointer;
}

.rm-close {
	-webkit-transition: all 0.1s ease-in-out 0s;
	transition: all 0.1s ease-in-out 0s;
}

.rm-container.rm-open .rm-close {
	-webkit-transition: all 0.3s ease-in-out 0.8s;
	transition: all 0.3s ease-in-out 0.8s;
	opacity: 1;
}

@media screen and (max-width: 960px) {
	.rm-close {
		display: none;
	}
}
</style>
