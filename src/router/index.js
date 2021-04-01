import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)
const routes = [
{
path: '/',
name: 'Home',
component: Home
},
{
path: '/list',
name: 'List',
component: () => import(/* webpackChunkName: "list" */ '../components/ContactList.vue')
},
{
path: '/detail/:id',
name: 'Detail',
component: () => import(/* webpackChunkName: "list" */ '../components/ContactDetail.vue')
},
{
path: '/favourite',
name: 'FavouritesList',
component: () => import(/* webpackChunkName: "list" */ '../components/FavouritesList.vue')
}
]
const router = new VueRouter({
mode: 'history',
base: process.env.BASE_URL,
routes
})
export default router
