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
			console.log('click detail');
			console.log(e);
			let ds = e.target.dataset;

			this.$emit('onClickDetail', {
				pageY: e.pageY,
				img: ds.thumb,
				title: ds.name,
				price: ds.price,
				description: ds.desc
			});
		}
	}
};

// _renderMenu(targetNode, menuJson) {
//             let els = menuJson.map((m) => {
//                 return `
// 				<h4>${m.subTitle}</h4>
// 				<dl>
// 				${this._renderSubmenu(m.menus).join('')}
// 				</dl>
// 				`;
//             });

//             let contentWapp = document.createElement('div');
//             contentWapp.classList.add('rm-content');
//             contentWapp.innerHTML = els.join('');

//             targetNode.appendChild(contentWapp);
//         },

//         _renderSubmenu(submenuJson) {
//             return submenuJson.map((s) => {
//                 return s.thumb ? `
// 					<dt><a href="#" class="rm-viewdetails" data-thumb="${s.thumb}">${s.name}</a><span>${s.price}</span></dt>
// 					<dd>${s.desc}</dd>
// 				` : `
// 					<dt>${s.name}<span>${s.price}</span></dt>
// 					<dd>${s.desc}</dd>
// 				`;
//             });
//         }
</script>