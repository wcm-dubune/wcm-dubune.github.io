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
			this.dataImg = `resources/images/${e.img}`;
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

.rm-modal h5 {
	font-weight: 700;
	text-transform: uppercase;
	font-family: 'Arvo', Arial, sans-serif;
}

.rm-modal {
	position: absolute;
	z-index: 10000;
	width: 600px;
	top: 30%;
	left: calc(50% - 300px);
	padding: 40px;
	background: #fff url(../../../resources/images/white_paperboard.jpg);
	box-shadow: 
		inset 0 0 0 16px #fff, 
		inset 0 0 0 17px #e6b741, 
		inset 0 0 0 18px #fff, 
		inset 0 0 0 19px #e6b741, 
		inset 0 0 0 20px #fff, 
		inset 0 0 0 21px #e6b741,
		0 4px 20px rgba(0,0,0,0.4);
	opacity: 0;
	pointer-events: none;
	-webkit-transform: translateZ(1000px);
	transform: translateZ(1000px);
	text-align: center;
}

.rm-modal h5 {
	margin: 0;
	font-size: 20px;
	text-shadow: 1px 1px 0 #fff, 2px 2px 0 #E6B741;
}

.rm-modal .rm-thumb {
	display: inline-block;
	width: 200px;
	height: 200px;
	background-repeat: no-repeat;
	background-position: center center;
	margin: 0 0 20px 0;
	box-shadow: 
		inset 1px 1px 3px rgba(0,0,0,0.2), 
		1px 1px 1px rgba(255,255,255,0.9);
}

.rm-modal a:after {
	content: '\2192';
	display: inline-block;
	margin-left: 3px;
	font-family: Arial, sans-serif;
}

.rm-modal a {
	color: #e6b741;
	font-weight: 500;
}

.rm-modal a {
	float: right;
	clear: both;
}

.rm-modal a:hover {
	color: #000;
}

.rm-modal {
	-webkit-transition: 
		-webkit-transform 0.6s ease-in-out,
		opacity 0.6s ease-in-out;
	transition: 
		transform 0.6s ease-in-out,
		opacity 0.6s ease-in-out;
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

.rm-close-modal {
	cursor: pointer;
	right: 21px;
	top: 21px;
	display: block;
	position: absolute;
	width: 16px;
	height: 16px;
	background: #2a323f;
	color: white;
	text-align: center;
	line-height: 14px;
	font-size: 15px;
	font-family: Arial, sans-serif;
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
	.rm-modal {
		position: fixed;
		width: 368px;
		top: 30%;
		left: calc(50% - 184px);
		-webkit-transform: translateZ(0px);
		transform: translateZ(0px);
		-webkit-transition: opacity 0.6s ease-in-out 0s;
		transition: opacity 0.6s ease-in-out 0s;
	}

	.rm-close {
		display: none;
	}
}

@media screen and (max-width: 460px) {
	.rm-modal {
		position: fixed;
		width: 80%;
		top: 30%;
		left: 50%;
		margin: 0 0 0 -40%;
		-webkit-transform: translateZ(0px);
		transform: translateZ(0px);
		-webkit-transition: opacity 0.6s ease-in-out 0s;
		transition: opacity 0.6s ease-in-out 0s;
	}
}

</style>
