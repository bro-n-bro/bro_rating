<template>
    <div class="filter_active_set">
        <button class="active_set_btn btn" :class="{ active: store.filterActiveSet == 'active' }" @click.prevent="store.filterActiveSet = 'active'">
            {{ $t('message.filter_active_set') }}
        </button>

        <div class="toggle" :class="{ active: store.filterActiveSet != 'default' }">
            <div class="area active_set" :class="{ active: store.filterActiveSet == 'active' }" @click.prevent="store.filterActiveSet = 'active'"></div>

            <div class="area default" :class="{ active: store.filterActiveSet == 'default' }" @click.prevent="store.filterActiveSet = 'default'"></div>

            <div class="area inactive_set" :class="{ active: store.filterActiveSet == 'inactive' }" @click.prevent="store.filterActiveSet = 'inactive'"></div>

            <div class="circle"></div>
        </div>

        <button class="inactive_set_btn btn" :class="{ active: store.filterActiveSet == 'inactive' }" @click.prevent="store.filterActiveSet = 'inactive'">
            {{ $t('message.filter_inactive_set') }}
        </button>
    </div>
</template>


<script setup>
    import { useGlobalStore } from '@/stores'

    const store = useGlobalStore()
</script>


<style scoped>
    .filter_active_set
    {
        line-height: 100%;

        display: flex;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .filter_active_set .btn
    {
        transition: opacity .2s linear;

        opacity: .3;
    }

    .filter_active_set .btn.active
    {
        opacity: 1;
    }


    .filter_active_set .toggle
    {
        position: relative;

        display: flex;

        width: 64px;
        margin: 0 12px;

        transition: background .2s linear;

        border-radius: 20px;
        background: #353535;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .filter_active_set .toggle.active
    {
        background: #950fff;
    }


    .filter_active_set .toggle .area
    {
        width: 33.333%;
        height: 28px;

        cursor: pointer;
    }


    .filter_active_set .toggle .circle
    {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: 20px;
        height: 20px;
        margin: auto 0;

        transition: transform .2s linear;

        border-radius: 50%;
        background: #fff;
    }

    .filter_active_set .toggle .default.active ~ .circle
    {
        transform: translateX(22px);
    }

    .filter_active_set .toggle .active_set.active ~ .circle
    {
        transform: translateX(4px);
    }

    .filter_active_set .toggle .inactive_set.active ~ .circle
    {
        transform: translateX(40px);
    }

</style>