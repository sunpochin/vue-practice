import Vue from 'vue';
import VueRouter from 'vue-router';
import KuroLifeCycle from '../components/KuroLifeCycle.vue';
import VueGreat from '../components/VueGreat.vue';
import LifeCycleHooks from '../components/LifeCycleHooks.vue';
import HelloVuejs from '../components/HelloVuejs.vue';
import HelloWorld from '../components/HelloWorld.vue';

Vue.use(VueRouter);
const routes = [
	{
		path: '/',
		component: LifeCycleHooks,
		props: true,
	},
	{
		path: '/lifecycle',
		component: LifeCycleHooks,
		props: true,
	},
	{
		path: '/great',
		component: VueGreat,
		props: true,
	},
	{
		path: '/kuro',
		component: KuroLifeCycle,
		props: true,
	},
	{
		path: '/hellovuejs',
		component: HelloVuejs,
		props: true,
	},
	{
		path: '/world',
		component: HelloWorld,
		props: true,
	},
	{
		// pathMatch
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		redirect: '/',
	},
	// {
	// 	// path: "*",
	// 	path: '/:catchAll(.*)',
	// 	name: 'NotFound',
	// 	redirect: '/',
	// 	meta: {
	// 		requiresAuth: false,
	// 	},
	// },
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
