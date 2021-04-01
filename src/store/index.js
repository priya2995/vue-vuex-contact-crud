import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
Vue.use(Vuex)
Vue.use(axios)
axios.defaults.baseURL = "https://reqres.in/api/users/"
export default new Vuex.Store({
	plugins: [createPersistedState()],
	state: {
		users: [],
		user: {},
		favourites: [],
	},
	getters: {
		users: state => {
			return state.users;
		},
		user: state => {
			return state.user;
		},
		favourites: state => {
			return state.favourites
		}
	},
	mutations: {
	save_users(state, users) {
		state.users = users;
	},
	set_user(state,user) {
		state.user = user;
	},
	set_favourite(state, user) {
		state.favourites.push(user)
	},
	remove_favourite(state, favourite) {
		let index = state.favourites.findIndex(fav => fav.id === favourite.id)
		state.favourites.splice(index,favourite.id)
		}
	},
	actions: {
		fetchUsers({commit}) {
			axios.get(axios.defaults.baseURL).then( response => {
			commit('save_users', response.data);
			}).catch(error => {
			throw new Error(`API ${error}`);
			});
		},
		fetchUser({commit}, id) {
			axios.get(axios.defaults.baseURL+id).then( response => {
			commit('set_user', response.data);
			}).catch(error => {
			throw new Error(`API ${error}`);
			});
		},
		setFavourites({commit}, user) {
			commit('set_favourite',user)
		},
		removeFavourites({commit}, favourite) {
			commit('remove_favourite', favourite)
		}
	},
	modules: {
	}
})
