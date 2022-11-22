<template>
    <div class="notifications">
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

        padding: 20px;

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

</style>