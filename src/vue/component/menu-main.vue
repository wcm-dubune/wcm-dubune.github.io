<template>
	<section class="main">
		<div id="rm-container" class="rm-container" :class="{
			'rm-open': dataOpenMenu,
			'rm-in': dataOpenModal,
			'rm-nodelay': dataOpenModal
		}">
			<menu-modal
				ref="menu-modal"
				@onCloseModal="_closeModal"></menu-modal>
			<div class="rm-wrapper">
				<menu-cover 
					@onOpenMenu="_openMenu"
					@onClickDetail="_openModal"></menu-cover>
				<menu-middle
					@onClickDetail="_openModal"></menu-middle>
				<menu-right
					@onCloseMenu="_closeMenu"
					@onClickDetail="_openModal"></menu-right>
			</div>
		</div>
	</section>
</template>

<style src="./menu-main.css"></style>

<script>
import MenuCover from './menu-cover.vue';
import MenuMiddle from './menu-middle.vue';
import MenuRight from './menu-right.vue';
import MenuModal from './menu-modal.vue';
import MenuData from '../../data/menu-data.js';

export default {
	name: 'menu-main',
	components: {
		MenuCover,
		MenuMiddle,
		MenuRight,
		MenuModal
	},
	props: {
		openModal: Boolean,
		openMenu: Boolean
	},
	data () {
		return {
			dataOpenModal: this.openModal,
			dataOpenMenu: this.openMenu
		}
	},
	mounted() {
	},
	methods: {
		_openModal(e) {
			this.$refs['menu-modal'].dataPageY = e.pageY;
			this.$refs['menu-modal'].dataImg = e.img;
			this.$refs['menu-modal'].dataTitle = e.title;
			this.$refs['menu-modal'].dataPrice = e.price;
			this.$refs['menu-modal'].dataDescription = e.description;

			this.dataOpenModal = true;
		},
		_closeModal() {
			this.dataOpenModal = false;
		},
		_openMenu() {
			this.dataOpenMenu = true;
		},
		_closeMenu() {
			this.dataOpenMenu = false;
		}
	}
};
</script>