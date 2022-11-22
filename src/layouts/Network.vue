<template>
    <!-- Header -->
    <Header />

    <!-- Router view -->
    <RouterView />

    <!-- Compare error modal -->
    <CompareErrorModal v-if="store.showCompareErrorModal" />
</template>


<script setup>
    import { inject, onMounted } from 'vue'
    import { RouterView, useRoute } from 'vue-router'
    import { useGlobalStore } from '@/stores'


    // Components
    import Header from '../components/Header.vue'
    import CompareErrorModal from '../components/CompareErrorModal.vue'


    const route = useRoute(),
        store = useGlobalStore(),
        i18n = inject('i18n'),
        emitter = inject('emitter')


    onMounted(() => {
        // Set default notification
        store.tooltip = i18n.global.t('message.notice_default')
    })


    // Event "show compare error modal"
    emitter.on('showCompareErrorModal', () => {
        store.showCompareErrorModal = true
    })


    // Event "close compare error modal"
    emitter.on('closeCompareErrorModal', () => {
        store.showCompareErrorModal = false
    })
</script>