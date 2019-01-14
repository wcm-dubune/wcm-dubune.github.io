<template>
	<div class="rm-modal" :style="computedStyle">
		<div class="rm-thumb" :style="computedImg"></div>
		<h5>{{dataTitle}}</h5>
		<p>{{dataDescription}}</p>
		<span class="rm-close-modal" @click="clickClose">x</span>
	</div>
</template>

<script>

export default {
	name: 'menu-modal',
	props: {
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