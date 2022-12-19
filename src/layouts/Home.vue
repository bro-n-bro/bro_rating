<template>
    <!-- Header -->
    <HeaderHome />

    <!-- Router view -->
    <RouterView />

    <!-- Feedback -->
    <Feedback />
</template>


<script setup>
    import { RouterView } from 'vue-router'

    // Components
    import HeaderHome  from '../components/HeaderHome.vue'
    import Feedback from '../components/Feedback.vue'
</script>