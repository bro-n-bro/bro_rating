<template>
    <div class="notifications" v-if="store.tooltip.length">
        <div class="data">
            <div class="icon">
                <svg><use xlink:href="/sprite.svg#ic_notification"></use></svg>
            </div>

            <div>{{ store.tooltip }}</div>
        </div>
    </div>
</template>


<script setup>
    import { useGlobalStore } from '@/stores'

    const store = useGlobalStore()
</script>


<style>
    .notifications .data
    {
        font-size: 14px;
        line-height: 150%;

        display: flex;

        padding: 9px 20px;

        border-radius: 20px;
        background: #141414;

        justify-content: space-between;
        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        font-feature-settings: 'pnum' on, 'lnum' on;
    }


    .notifications .icon
    {
        display: flex;

        width: 52px;
        height: 52px;

        border: 1px solid hsla(0, 0%, 85%, .1);
        border-radius: 50%;

        align-content: center;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
    }

    .notifications .icon svg
    {
        display: block;

        width: 30px;
        height: 30px;
    }


    .notifications .icon + *
    {
        display: -webkit-box;
        overflow: hidden;

        width: calc(100% - 67px);
        margin-left: auto;

        text-overflow: ellipsis;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }



    @media print, (max-width: 1439px)
    {
        .notifications .data
        {
            margin: -5px 0;
            padding-right: 16px;
            padding-left: 16px;
        }


        .notifications .icon
        {
            width: 48px;
            height: 48px;
        }

        .notifications .icon svg
        {
            width: 26px;
            height: 26px;
        }

        .notifications .icon + *
        {
            width: calc(100% - 64px);
        }
    }



    @media print, (max-width: 1023px)
    {
        .notifications .data
        {
            margin: 0;
            padding: 12px 20px;
        }


        .notifications .icon + *
        {
            -webkit-line-clamp: unset;
        }
    }



    @media print, (max-width: 767px)
    {
        .notifications .data
        {
            font-size: 13px;
        }
    }



    @media print, (max-width: 479px)
    {
        .notifications .data
        {
            padding: 10px;
        }


        .notifications .icon
        {
            margin-bottom: 10px;
        }

        .notifications .icon + *
        {
            width: 100%;
        }
    }

</style>