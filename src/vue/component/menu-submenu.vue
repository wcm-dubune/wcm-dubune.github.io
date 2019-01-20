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
			let ds = e.target.dataset;

			this.$EventBus.$emit('onClickDetail', {
				img: ds.thumb,
				title: ds.name,
				price: ds.price,
				description: ds.desc
			});
		}
	}
};
</script>