<template>
	<div class="container">
		<header>
			<div class="support-note">
				<span class="no-cssanimations">CSS animations are not supported in your browser</span>
				<span class="no-csstransforms">CSS transforms are not supported in your browser</span>
				<span class="no-csstransforms3d">CSS 3D transforms are not supported in your browser</span>
				<span class="no-csstransitions">CSS transitions are not supported in your browser</span>
				<span class="note-ie">Sorry, only modern browsers.</span>
			</div>
		</header>
		<menu-main></menu-main>
	</div>
</template>

<script>
import MenuMain from './menu-main.vue';

export default {
	name: 'menu-container',
	components: {
		MenuMain
	}
};
</script>