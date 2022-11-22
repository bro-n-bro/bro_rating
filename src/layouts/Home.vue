<template>
    <!-- Header -->
    <HeaderHome />

    <!-- Router view -->
    <RouterView />
</template>


<script setup>
    import { RouterView } from 'vue-router'

    // Components
    import HeaderHome  from '../components/HeaderHome.vue'
</script>