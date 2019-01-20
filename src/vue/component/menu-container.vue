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

<style>
/* Fallback (similar to last media query) */
.no-csstransforms3d .rm-container {
	width: 100%;
	height: auto;
	max-width: 460px;
}
.no-csstransforms3d .rm-wrapper, 
.no-csstransforms3d .rm-wrapper > div,
.no-csstransforms3d .rm-wrapper > div > div {
	position: relative;
	width: 100%;
	height: auto;
}

.no-csstransforms3d .rm-wrapper > div > div{
	margin-bottom: 10px;
	box-shadow: 
		inset 0 0 0 16px #fff, 
		inset 0 0 0 17px #e6b741, 
		inset 0 0 0 18px #fff, 
		inset 0 0 0 19px #e6b741, 
		inset 0 0 0 20px #fff, 
		inset 0 0 0 21px #e6b741,
		0 3px 5px rgba(0,0,0,0.2);
}

.no-csstransforms3d .rm-container .rm-back {
	-webkit-transform: rotateY(0deg);
	transform: rotateY(0deg);
}

.no-csstransforms3d .rm-overlay, 
.no-csstransforms3d .rm-middle .rm-overlay {
	display: none;
}

.no-csstransforms3d .rm-right .rm-front {
	display: none;
}

.no-csstransforms3d .rm-button-open {
	pointer-events: none;
}

.no-csstransforms3d .rm-button-open:after {
	content: '\2193';
}

.no-csstransforms3d .rm-modal {
	position: fixed;
	width: 80%;
	top: 30%;
	left: 50%;
	margin: 0 0 0 -40%;
	-webkit-transition: opacity 0.6s ease-in-out 0s;
	transition: opacity 0.6s ease-in-out 0s;
}

.no-csstransforms3d .main.rm-in .rm-cover,
.no-csstransforms3d .main.rm-in .rm-right,
.no-csstransforms3d .main.rm-in .rm-wrapper {
	-webkit-transform: rotateY(0deg);
	-webkit-transition-delay: 0s;
	transform: rotateY(0deg);
	transition-delay: 0s;
}
</style>
