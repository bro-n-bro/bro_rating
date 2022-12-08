<template>
    <!-- Header -->
    <Header />

    <!-- Router view -->
    <RouterView />

    <!-- Footer -->
    <Footer />
</template>


<script setup>
    import { inject, onMounted } from 'vue'
    import { useGlobalStore } from '@/stores'

    // Components
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'


    const store = useGlobalStore(),
        i18n = inject('i18n')


    onMounted(() => {
        // Set default notification
        store.tooltip = i18n.global.t('message.notice_default')
    })
</script>