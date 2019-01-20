<template>
	<div :class="{
		'rm-in': this.$store.state.openModal
	}">
		<div class="overlay"
			@mousedown.self="clickClose"
        	@touchstart.self="clickClose"
			@touchmove.self="clickClose"></div>
		<div class="rm-modal">
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
		img: String,
		title: String,
		description: String
	},
	data() {
		return {
			dataImg: this.img,
			dataTitle: this.title,
			dataPrice: this.price,
			dataDescription: this.description
		}
	},
	mounted() {
		this.$EventBus.$on('onClickDetail', (e) => {
			this.dataImg = e.img;
			this.dataTitle = e.title;
			this.dataPrice = e.price;
			this.dataDescription = e.description;

			this.$store.commit('openModal');
		});
	},
	computed: {
		computedImg(v) {
			return `background-image: url(${this.dataImg})`;
		}
	},
	methods: {
		clickClose() {
			this.$store.commit('closeModal');
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
