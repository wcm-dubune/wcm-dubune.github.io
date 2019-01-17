<template>
	<div :class="{
		'rm-in': rmIn
	}">
		<div class="overlay"
			@mousedown.self="clickClose"
        	@touchstart.self="clickClose"
			@touchmove.self="clickClose"></div>
		<div class="rm-modal" :style="computedStyle">
			<div class="rm-thumb" :style="computedImg"></div>
			<h5>{{dataTitle}}</h5>
			<p>{{dataDescription}}</p>
			<span class="rm-close-modal"
				@mousedown.self="clickClose"
				@touchstart.self="clickClose">x</span>
		</div>
	</div>
</template>

<script>

export default {
	name: 'menu-modal',
	props: {
		rmIn: Boolean,
		show: Boolean,
		pageY: Number,
		img: String,
		title: String,
		description: String
	},
	data() {
		return {
			dataShow: this.show,
			dataPageY: this.pageY,
			dataImg: this.img,
			dataTitle: this.title,
			dataPrice: this.price,
			dataDescription: this.description
		}
	},
	mounted() {
		// this.dataShow = false;
	},
	computed: {
		computedStyle() {
			if (window.outerWidth < 960) {
				return `top: ${this.dataPageY}px`;
			}
			return '';
		},
		computedImg(v) {
			return `background-image: url(${this.dataImg})`;
		}
	},
	watch: {
		dataShow: (v) => {
			if (v) {
				this.$emit('onOpenModal');
			}
		}
	},
	methods: {
		clickClose() {
			console.info('clickClose');
			this.$emit('onCloseModal');
		}
	}
};
</script>

<style>
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 999;
	display: none;
	background-color: rgba(0, 0, 0, 0.3);

	-webkit-transition: 
	-webkit-transform 0.6s ease-in-out,
	display 0.6s ease-in-out;
	transition: 
	transform 0.6s ease-in-out,
	display 0.6s ease-in-out;
}

.rm-in .rm-modal {
	-webkit-transform: translateZ(0px);
	transform: translateZ(0px);
	opacity: 1;
	pointer-events: auto;
}

.rm-in .overlay {
	display: block;
}
</style>
