<template>
	<section class="main" :class="{
			'rm-in': this.$store.state.openModal
		}">
		<menu-modal
			ref="menu-modal"></menu-modal>
		<div id="rm-container" class="rm-container" :class="{
			'rm-open': this.$store.state.openMenu,
			'rm-nodelay': this.$store.state.openModal
		}">
			<div class="rm-wrapper">
				<menu-cover></menu-cover>
				<menu-middle></menu-middle>
				<menu-right></menu-right>
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
	mounted() {
	},
	methods: {
	}
};
</script>