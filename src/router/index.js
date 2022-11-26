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
	// Set current network
	if (to.query.network) {
		const store = useGlobalStore()

		if (store.currentNetwork != to.query.network) {
			store.currentNetwork = to.query.network
		}
	}

	next()
})


export default router
