import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './locale'

import timeago from 'vue-timeago3'


// Events
import mitt from 'mitt'
const emitter = mitt()


// Create App
const app = createApp(App)


// Vue use
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(timeago)


// Vue provide
app.provide('i18n', i18n)
app.provide('emitter', emitter)


// Add rounding
app.config.globalProperties.$filters = {
    toFixed(value, limit) {
        return value.toFixed(limit)
    }
}


// Сlick element outside
const clickOutside = {
    beforeMount: (el, binding) => {
        el.clickOutsideEvent = event => {
            if (!(el == event.target || el.contains(event.target))) {
                binding.value()
            }
        }

        document.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted: el => document.removeEventListener('click', el.clickOutsideEvent),
}


// Animation
const animate = {
    beforeMount: (el, binding) => {
        function scrollTracking(entries) {
            for (const entry of entries) {
                if (entry.intersectionRatio >= 0.2 && entry.target.classList.contains('animate')) {
                    entry.target.classList.add('animated')
                }
            }
        }

        const observer = new IntersectionObserver(scrollTracking, {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
        })

        observer.observe(el)
    }
}


// Directives
app.directive('clickOut', clickOutside)
app.directive('animate', animate)

// Mount
app.mount('#app')
