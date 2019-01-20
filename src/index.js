import Vue from 'vue';
import Vuex from 'vuex'
import WcmMain from './vue/wcm-main.vue';

Vue.prototype.$EventBus = new Vue();

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		openModal: false,
		openMenu: false
	},
	mutations: {
		openModal(state) {
			state.openModal = true;
		},
		closeModal(state) {
			state.openModal = false;
		},
		openMenu(state) {
			state.openMenu = true;
		},
		closeMenu(state) {
			state.openMenu = false;
		},
	}
});

new Vue({
	el: '#app',
	store,
	components: {
		WcmMain
	}
});
export default {};