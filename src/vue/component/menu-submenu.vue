<template>
	<div class="rm-content">
		<h4>{{title}}</h4>
		<dl>
			<div v-for="item in menus" :key="item.index">
				<dt>
					<template v-if="item.thumb">	
						<a href="#" class="rm-viewdetails"
							:data-thumb=item.thumb
							:data-name=item.name
							:data-price=item.price
							:data-desc=item.desc
							@click.prevent="clickDetail">{{item.name}}</a>
					</template>
					<template v-else>
						{{item.name}}
					</template>
					<span>{{item.price}}</span>
				</dt>
				<dd>{{item.desc}}</dd>
			</div>
		</dl>
	</div>
</template>

<script>

export default {
	name: 'menu-submenu',
	props: {
		title: String,
		menus: Array
	},
	methods: {
		clickDetail(e) {
			let ds = e.target;

			this.$EventBus.$emit('onClickDetail', {
				img: ds.getAttribute('data-thumb'),
				title: ds.getAttribute('data-name'),
				price: ds.getAttribute('data-price'),
				description: ds.getAttribute('data-desc')
			});
		}
	}
};
</script>

<style scoped>
.rm-content {
	padding: 20px;
}

.rm-content h2,
.rm-content h4 {
	font-weight: 700;
	text-transform: uppercase;
	font-family: 'Arvo', Arial, sans-serif;
}


.rm-content h2 {
	letter-spacing: 2px;
	font-size: 26px;
	text-shadow: 1px 1px 0 #fff, 3px 3px 0 #e6b741;
}

.rm-content h3 {
	font-size: 14px;
	margin: 40px 0;
	padding: 20px 40px;
	color: #323b4c;
	font-weight: 500;
	border-top: 4px double #323b4c;
	text-transform: uppercase;
	line-height: 20px;
	text-shadow: 1px 1px 0 rgba(255,255,255,0.8);
}

.rm-content h4 {
	margin: 0 0 20px 0;
	font-size: 16px;
	padding-bottom: 10px;
	color: #323b4c;
	border-bottom: 4px double #323b4c;
	text-shadow: 1px 1px 0 #fff, 2px 2px 0 #E6B741;
	letter-spacing: 2px;
}

.rm-content h4:not(:first-child) {
	margin-top: 35px;
}


.rm-content dl{
	text-align: left;
	margin: 0;
}

.rm-content dl dt,
.rm-content dl dd{
	display: block;
	margin: 0;
}

.rm-content dl dt {
	font-weight: 500;
	text-transform: uppercase;
	padding: 10px 0;
}

.rm-content dl dt span {
	float: right;
}

.rm-content dl dd {
	font-size: 13px;
	padding: 4px 5px 15px;
	line-height: 15px;
	color: #333;
}


a.rm-viewdetails:before{
	font-family: 'entypo-selected';
	content: '\56';
	font-style: normal;
	font-weight: normal;
	speak: none;
	display: inline-block;
	text-decoration: inherit;
	margin-right: 4px;
	text-align: center;
	opacity: 0.7;
	line-height: 16px;
	text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3);
}

a.rm-viewdetails {
	color: #e6b741;
	font-weight: 500;
}

a.rm-viewdetails:hover {
	color: #000;
}
</style>
