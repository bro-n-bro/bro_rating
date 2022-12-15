<template>
    <header class="absolute">
        <div class="cont row">
            <div class="logo" v-click-out="clickOut">
                <div class="btn" @click.prevent="showDropdown = !showDropdown">
                    <img src="/logo.svg" alt="">

                    <svg class="arr"><use xlink:href="/sprite.svg#ic_arr_ver"></use></svg>
                </div>

                <div class="mini_modal" v-show="showDropdown">
                    <div><a href="https://bronbro.io/" target="_blank" rel="noopener">
                        <img src="/bro_logo.svg" alt="">
                    </a></div>

                    <div><a href="https://app.bronbro.io/" target="_blank" rel="noopener">
                        <img src="/bro_app_logo.svg" alt="">
                    </a></div>

                    <div><a href="https://monitor.bronbro.io/" target="_blank" rel="noopener">
                        <img src="/bro_stats_logo.svg" alt="">
                    </a></div>
                </div>
            </div>
        </div>
    </header>
</template>


<script setup>
    import { ref, watchEffect } from 'vue'

    var showDropdown = ref(false)


    watchEffect(() => showDropdown.value = false)


    // Сlick element outside
    function clickOut() {
        showDropdown.value = false
    }
</script>


<style scoped>
    header
    {
        position: absolute;
        z-index: 101;
        top: 0;
        left: 0;

        width: 100%;
        margin: 0;
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
        position: relative;
    }


    header .logo .btn
    {
        display: flex;

        cursor: pointer;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    header .logo .btn img
    {
        display: block;
    }


    header .logo .arr
    {
        display: block;

        width: 24px;
        height: 24px;
        margin-left: 14px;
    }


    header .logo .mini_modal
    {
        position: absolute;
        top: 100%;
        left: 0;

        width: 238px;
        margin-top: 10px;
        padding: 6px 4px;

        border-radius: 10px;
        background: #101010;
    }

    header .logo .mini_modal > * + *
    {
        margin-top: 8px;
    }


    header .logo .mini_modal a
    {
        color: currentColor;

        display: block;

        padding: 6px 10px 6px 4px;

        transition: background .2s linear;
        text-decoration: none;

        border-radius: 8px;
    }


    header .logo .mini_modal img
    {
        display: block;

        max-width: 100%;
    }


    header .logo .mini_modal a:hover
    {
        background: #191919;
    }



    @media print, (max-width: 1439px)
    {
        header .logo .btn img
        {
            height: 60px;
        }
    }



    @media print, (max-width: 1023px)
    {
        header
        {
            z-index: 20;
        }
    }



    @media print, (max-width: 767px)
    {
        header
        {
            padding: 10px 0;
        }


        header .logo .btn img
        {
            height: 52px;
        }
    }

</style>