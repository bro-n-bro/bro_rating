<template>
    <div class="search" v-click-out="clickOut">
        <button class="btn" @click.prevent="showDropdown = !showDropdown" :class="{ hide: showDropdown }">
            <svg class="icon"><use xlink:href="/sprite.svg#ic_search"></use></svg>
        </button>

        <div class="mini_modal" v-show="showDropdown">
            <form @submit.prevent>
                <input type="text" class="input" :placeholder="$t('message.search_placeholder')" v-model="query">

                <button type="reset" class="reset_btn" v-if="query.length" @click="query = ''">
                    <svg><use xlink:href="/sprite.svg#ic_close2"></use></svg>
                </button>

                <svg class="icon"><use xlink:href="/sprite.svg#ic_search"></use></svg>
            </form>

            <div class="tips" v-if="query.length">
                <template v-if="store.searchValidators.length">
                <div class="tip" v-for="(validator, index) in store.searchValidators" :key="index" @click.prevent="scrollToValidator(validator[getValidatorInfo('opeartor_address')])">
                    <div class="logo">
                        <img :data-src="validator[getValidatorInfo('logo_path')]" alt="" @error="imageLoadError" v-lazyload>
                        <svg class="icon"><use xlink:href="/sprite.svg#ic_user"></use></svg>
                    </div>

                    <div>{{ validator[getValidatorInfo('moniker')] }}</div>
                </div>
                </template>

                <div class="empty" v-else>{{ $t('message.search_not_found') }}</div>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { ref, watch } from 'vue'
    import { useGlobalStore } from '@/stores'

    const store = useGlobalStore(),
        query = ref('')

    var showDropdown = ref(false)


    watch(query, value => {
        store.searchValidators = []

        setTimeout(() => {
            store.ratingData.result.forEach(el => {
                if(el[getValidatorInfo('moniker')].toLowerCase().includes(value.toLowerCase())) {
                    store.searchValidators.push(el)
                }
            })
        })
    })

    watch(showDropdown, value => {
        if(value) {
            setTimeout(() => document.querySelector('.search .input').focus())
        }
    })


    // Сlick element outside
    function clickOut() {
        showDropdown.value = false
    }


    // Get validator data from shema
    function getValidatorInfo(columnName) {
        return store.ratingData.schema.indexOf(columnName)
    }


    // Replacement of the logo if it is not present
    function imageLoadError(event) {
        event.target.classList.add('hide')

        event.target.closest('.logo').style.backgroundColor = store.colors[Math.floor((Math.random()*store.colors.length))]
    }


    // Scroll to validator
    function scrollToValidator(id) {
        let el = document.getElementById(id)

        // Selection
        el.classList.add('flashing')

        // Scroll
        el.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth'
        })

        // Hide tips
        showDropdown.value = false
    }
</script>


<style scoped>
    .search
    {
        position: relative;
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

    .search .btn.hide
    {
        opacity: 0;
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
        color: #8c8c8c;
    }

    .search form :-moz-placeholder
    {
        color: #8c8c8c;
    }

    .search form ::-moz-placeholder
    {
        color: #8c8c8c;

        opacity: 1;
    }

    .search form :-ms-input-placeholder
    {
        color: #8c8c8c;
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


    .search form .reset_btn
    {
        color: #fff;

        position: absolute;
        top: 0;
        right: 42px;
        bottom: 0;

        display: flex;

        margin: auto;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;;
    }

    .search form .reset_btn svg
    {
        display: block;

        width: 24px;
        height: 24px;
    }


    .search form .icon
    {
        color: #fff;

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

        overflow: auto;

        width: 100%;
        max-height: 280px;
        margin-top: 10px;
        padding: 6px 4px;

        border-radius: 12px;
        background: #1c1c1c;
    }

    .search .tips::-webkit-scrollbar
    {
        border-radius: 5px;
    }

    .search .tips.show
    {
        display: block;
    }

    .search .tips > * + *
    {
        margin-top: 6px;
    }


    .search .tips .empty
    {
        font-size: 12px;
        line-height: 15px;

        padding: 6px;

        text-align: center;
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

        display: flex;
        overflow: hidden;

        width: 16px;
        height: 16px;
        margin-right: 6px;

        border-radius: 50%;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
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

    .search .tip .logo img.hide
    {
        display: none;
    }

    .search .tip .logo .icon
    {
        display: none;

        width: 14px;
        height: 14px;
    }

    .search .tip .logo img.hide + .icon
    {
        display: block;
    }


    .search .tip .logo + *
    {
        display: block;

        width: calc(100% - 22px);
    }


    .search .tip:hover
    {
        background: #232323;
    }



    @media print, (max-width: 767px)
    {
        .search .btn
        {
            width: 48px;
        }


        .search .mini_modal
        {
            width: calc(100vw - 130px);
        }
    }

</style>