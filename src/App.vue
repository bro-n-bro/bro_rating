<template>
    <component :is="layout" />
</template>


<script setup>
    import { computed } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute(),
        layout = computed(() => route.meta.layout || 'home-layout')
</script>
