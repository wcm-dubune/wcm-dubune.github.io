<template>
	<div class="container">
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
.no-supports .rm-container {
	width: 100%;
	height: auto;
	max-width: 460px;
}
.no-supports .rm-wrapper, 
.no-supports .rm-wrapper > div,
.no-supports .rm-wrapper > div > div {
	position: relative;
	width: 100%;
	height: auto;
}

.no-supports .rm-wrapper > div > div{
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

.no-supports .rm-container .rm-back {
	-webkit-transform: rotateY(0deg);
	transform: rotateY(0deg);
}

.no-supports .rm-overlay, 
.no-supports .rm-middle .rm-overlay {
	display: none;
}

.no-supports .rm-right .rm-front {
	display: none;
}

.no-supports .rm-button-open {
	pointer-events: none;
}

.no-supports .rm-button-open:after {
	content: '\2193';
}

.no-supports .rm-modal {
	position: fixed;
}

.no-supports .main.rm-in .rm-cover,
.no-supports .main.rm-in .rm-right,
.no-supports .main.rm-in .rm-wrapper {
	-webkit-transform: rotateY(0deg);
	-webkit-transition-delay: 0s;
	transform: rotateY(0deg);
	transition-delay: 0s;
}
</style>
