<template>
    <component :is="layout" />
</template>


<script setup>
    import { computed, onMounted, inject } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute(),
        layout = computed(() => route.meta.layout || 'home-layout'),
        i18n = inject('i18n')


    onMounted(() => {
        // Set title
        document.title = i18n.global.t('message.page_title')
    })
</script>
