import { createRouter, createWebHistory } from 'vue-router'
import { useGlobalStore } from '@/stores'

import HomeLayout from '../layouts/Home.vue'
import NetworkLayout from '../layouts/Network.vue'
import CompareLayout from '../layouts/Compare.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue'),
		meta: {
			layout: HomeLayout
		}
	},
	{
		path: '/network',
		name: 'Network',
		component: () => import('../views/Network.vue'),
		meta: {
			layout: NetworkLayout
		}
	},
	{
		path: '/compare',
		name: 'Compare',
		component: () => import('../views/Compare.vue'),
		meta: {
			layout: CompareLayout
		}
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes
})



router.beforeEach((to, from, next) => {
	const store = useGlobalStore()

	// Set current network
	if (to.query.network) {
		if (store.currentNetwork != to.query.network) {
			store.currentNetwork = to.query.network
		}
	}

	// Compare redirect
	if (store.compareValidators.length < 2 && to.name == 'Compare') {
		router.push({ name: 'Home' })
	}

	next()
})


export default router
