<template>
    <div class="search">
        <button class="btn" @click.prevent="showDropdown = !showDropdown">
            <svg class="icon"><use xlink:href="/sprite.svg#ic_search"></use></svg>
        </button>

        <div class="mini_modal" v-show="showDropdown">
            <form @submit.prevent>
                <input type="text" name="" value="" class="input" :placeholder="$t('message.search_placeholder')">

                <svg class="icon"><use xlink:href="/sprite.svg#ic_search"></use></svg>
            </form>

            <div class="tips">
                <div class="tip">
                    <div class="logo">
                        <img src="images/tmp/.jpg" alt="">
                    </div>
                    <span>Staking</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { ref } from 'vue'

    var showDropdown = ref(false)
</script>


<style scoped>
    .search
    {
        position: relative;

        margin-left: auto;
    }


    .search .btn
    {
        display: flex;

        width: 52px;
        height: 45px;

        transition: .2s linear;

        border-radius: 12px;
        background: #141414;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .search .btn .icon
    {
        display: block;

        width: 24px;
        height: 24px;
    }

    .search .btn:hover
    {
        background: #950fff;
    }

    .search .btn.active
    {
        opacity: 0;
        background: #7700e1;
    }


    .search .mini_modal
    {
        position: absolute;
        top: 0;
        right: 0;

        width: 272px;
    }


    .search form
    {
        position: relative;
    }


    .search form ::-webkit-input-placeholder
    {
        color: #353535;
    }

    .search form :-moz-placeholder
    {
        color: #353535;
    }

    .search form ::-moz-placeholder
    {
        color: #353535;

        opacity: 1;
    }

    .search form :-ms-input-placeholder
    {
        color: #353535;
    }


    .search .input
    {
        color: var(--text_color);
        font-family: var(--font_family);
        font-size: 12px;

        display: block;

        width: 100%;
        height: 45px;
        padding: 0 52px 0 14px;

        border: none;
        border-radius: 12px;
        background: #141414;
    }


    .search form .icon
    {
        color: #353535;

        position: absolute;
        z-index: 3;
        top: 0;
        right: 12px;
        bottom: 0;

        display: block;

        width: 24px;
        height: 24px;
        margin: auto;
    }


    .search .tips
    {
        position: absolute;
        z-index: 9;
        top: 100%;
        left: 0;

        display: none;

        width: 100%;
        margin-top: 10px;
        padding: 6px 4px;

        border-radius: 12px;
        background: #141414;
    }

    .search .tips.show
    {
        display: block;
    }

    .search .tips > * + *
    {
        margin-top: 6px;
    }


    .search .tip
    {
        font-size: 12px;
        line-height: 15px;

        display: flex;

        width: 100%;
        padding: 6px 4px;

        cursor: pointer;
        transition: background .2s linear;

        border-radius: 6px;

        font-feature-settings: 'pnum' on, 'lnum' on;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .search .tip .logo
    {
        position: relative;

        overflow: hidden;

        width: 16px;
        height: 16px;
        margin-right: 6px;

        border-radius: 50%;
    }

    .search .tip .logo img
    {
        position: absolute;
        top: 0;
        left: 0;

        display: block;

        width: 100%;
        height: 100%;

        border-radius: 50%;

        object-fit: cover;
    }

    .search .tip span
    {
        display: block;

        width: calc(100% - 22px);
    }

    .search .tip:hover
    {
        background: #191919;
    }

</style>