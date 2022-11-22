import { createRouter, createWebHistory } from 'vue-router'
import { useGlobalStore } from '@/stores'

import homeLayout from '../layouts/Home.vue'
import networkLayout from '../layouts/Network.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue'),
		meta: {
			layout: homeLayout
		}
	},
	{
		path: '/network',
		name: 'Network',
		component: () => import('../views/Network.vue'),
		meta: {
			layout: networkLayout
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

		store.currentNetwork = to.query.network
	}

	next()
})


export default router
