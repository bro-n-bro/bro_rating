<template>
    <!-- Header -->
    <Header />

    <!-- Router view -->
    <RouterView />

    <!-- Footer -->
    <Footer />

    <!-- Validator modal -->
    <ValidatorModal v-if="store.showValidatorModal" />

    <!-- Compare error modal -->
    <CompareErrorModal v-if="store.showCompareErrorModal" />
</template>


<script setup>
    import { inject, onMounted } from 'vue'
    import { RouterView } from 'vue-router'
    import { useGlobalStore } from '@/stores'

    // Components
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import ValidatorModal from '../components/ValidatorModal.vue'
    import CompareErrorModal from '../components/CompareErrorModal.vue'


    const store = useGlobalStore(),
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


    // Event "show validator modal"
    emitter.on('showValidatorModal', validator => {
        store.validatorInfo = validator
        store.showValidatorModal = true

        document.body.classList.add('lock')
    })


    // Event "close validator modal"
    emitter.on('closeValidatorModal', () => {
        store.validatorInfo = {}
        store.showValidatorModal = false

        document.body.classList.remove('lock')
    })


    // Event "set notification"
    emitter.on('setNotification', function(notice) {
        store.$patch({ tooltip: notice })
    })
</script>