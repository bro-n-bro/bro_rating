<template>
    <div class="choose_network" v-click-out="clickOut">
        <button class="btn" @click.prevent="showDropdown = !showDropdown">
            <div class="logo">
                <img :src="`/${store.networks[store.currentNetwork].alias}_logo.png`" alt="">
            </div>

            <div>
                <div class="name">{{ store.networks[store.currentNetwork].name }}</div>
                <div class="token">{{ store.networks[store.currentNetwork].token }}</div>
            </div>

            <svg class="arr"><use xlink:href="/sprite.svg#ic_arr_ver"></use></svg>
        </button>

        <div class="mini_modal" v-show="showDropdown">
            <div class="scroll">
                <div v-for="network in store.networks">
                    <router-link class="network" :class="{ active: store.currentNetwork == network.alias }"
                        :to="{ name: 'Network', query: { network: network.alias } }"
                        @click="showDropdown = !showDropdown"
                    >
                        <div class="logo">
                            <img :src="`/${network.alias}_logo.png`" alt="">
                        </div>

                        <div>
                            <div class="name">{{ network.name }}</div>
                            <div class="token">{{ network.token }}</div>
                        </div>

                        <svg class="icon"><use xlink:href="/sprite.svg#ic_check"></use></svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { ref, watchEffect } from 'vue'
    import { useGlobalStore } from '@/stores'

    const store = useGlobalStore()

    var showDropdown = ref(false)

    watchEffect(
        () => showDropdown.value = false
    )

    // Сlick element outside
    function clickOut() {
        showDropdown.value = false
    }
</script>


<style>
    .choose_network
    {
        position: relative;

        width: 264px;
        max-width: 100%;
    }


    .choose_network .btn
    {
        display: flex;

        width: 100%;
        padding: 9px;

        transition: background .2s linear;
        text-align: left;

        border: 1px solid transparent;
        border-radius: 14px;
        background: #141414;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .choose_network .btn .logo
    {
        position: relative;

        overflow: hidden;

        width: 40px;
        height: 40px;
        margin-right: 14px;

        border-radius: 50%;
    }

    .choose_network .btn .logo img
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

    .choose_network .btn .logo + *
    {
        width: calc(100% - 92px);
    }


    .choose_network .btn .name
    {
        font-size: 18px;
        font-weight: 500;
        line-height: 100%;
    }


    .choose_network .btn .token
    {
        color: #555;
        font-size: 12px;
        line-height: 15px;

        margin-top: 6px;

        text-transform: uppercase;
    }


    .choose_network .btn .arr
    {
        display: block;

        width: 24px;
        height: 24px;
        margin-left: 14px;

        transition: transform .2s linear;
    }


    .choose_network .btn:hover
    {
        background: #353535;
    }

    .choose_network .btn.active
    {
        border-color: #950fff;
        background: #141414;
    }

    .choose_network .btn.active .arr
    {
        transform: rotate(180deg);
    }



    .choose_network .mini_modal
    {
        position: absolute;
        top: 100%;
        left: 0;

        width: 100%;
        margin-top: 4px;
        padding: 4px;

        border-radius: 10px;
        background: #101010;
    }


    .choose_network .mini_modal .scroll
    {
        overflow: auto;

        max-height: 257px;
        padding-right: 4px;

        overscroll-behavior-y: contain;
    }

    header .choose_network .mini_modal .scroll
    {
        max-height: calc(100vh - 134px);
    }

    .choose_network .mini_modal .scroll > * + *
    {
        margin-top: 8px;
    }


    .choose_network .network
    {
        color: currentColor;

        display: flex;

        padding: 4px 10px 4px 4px;

        transition: background .2s linear;
        text-decoration: none;

        border-radius: 8px;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .choose_network .network .logo
    {
        position: relative;

        overflow: hidden;

        width: 30px;
        height: 30px;
        margin-right: 6px;

        border-radius: 50%;
    }

    .choose_network .network .logo + *
    {
        width: calc(100% - 66px);
    }


    .choose_network .network .logo img
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


    .choose_network .network .name
    {
        line-height: 100%;
    }


    .choose_network .network .token
    {
        color: #555;
        font-size: 12px;
        line-height: 15px;

        margin-top: 6px;

        text-transform: uppercase;
    }


    .choose_network .network .icon
    {
        display: block;

        width: 24px;
        height: 24px;
        margin-left: 6px;

        transition: opacity .2s linear;

        opacity: 0;
    }


    .choose_network .network:hover,
    .choose_network .network.active
    {
        background: #191919;
    }

    .choose_network .network.active .icon
    {
        opacity: 1;
    }

</style>