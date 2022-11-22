<template>
    <header>
        <div class="cont row">
            <a href="https://bronbro.io" class="logo" target="_blank" rel="noopener">
                <img src="/logo.svg" alt="">
            </a>

            <!-- Notifications -->
            <Notifications class="animate fadeInUp" v-animate />

            <!-- Choose network -->
            <ChooseNetwork class="animate fadeInRight" v-animate />
        </div>
    </header>
</template>


<script setup>
    // Components
    import ChooseNetwork  from '../components/ChooseNetwork.vue'
    import Notifications  from '../components/Notifications.vue'
</script>


<style scoped>
    header
    {
        position: relative;
        z-index: 20;
        top: 0;
        left: 0;

        width: 100%;
        margin-bottom: 20px;
        padding: 20px 0;
    }


    header .cont
    {
        padding-top: 11px;
        padding-bottom: 11px;

        justify-content: space-between;
        align-items: center;
        align-content: center;
    }



    header .logo
    {
        color: currentColor;

        display: block;

        text-decoration: none;
    }

    header .logo img
    {
        display: block;
    }



    header .notifications
    {
        width: calc(100% - 548px);
        margin-right: auto;
        margin-left: auto;
    }

</style>