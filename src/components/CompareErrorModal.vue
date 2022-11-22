<template>
    <section class="compare_error animate fadeInUp" v-animate>
        <button class="close_btn" @click.prevent="emitter.emit('closeCompareErrorModal')">
            <svg><use xlink:href="/sprite.svg#ic_close"></use></svg>
        </button>

        <svg class="icon"><use xlink:href="/sprite.svg#ic_error"></use></svg>

        <div>
            <div class="title">
                {{ $t('message.compare_error_modal_title') }}
            </div>

            <div class="desc">
                {{ $t('message.compare_error_modal_desc') }}
            </div>
        </div>
    </section>
</template>


<script setup>
    import { inject } from 'vue'

    const emitter = inject('emitter')
</script>


<style>
    .compare_error
    {
        position: fixed;
        z-index: 9;
        right: 0;
        bottom: 30px;
        left: 0;

        display: flex;

        width: 378px;
        max-width: calc(100% - 48px);
        margin: auto;
        padding: 22px 64px 16px 16px;

        border-radius: 16px;
        background: #eb5757;

        justify-content: space-between;
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
    }


    .compare_error .icon
    {
        display: block;

        width: 16px;
        height: 16px;
    }

    .compare_error .icon + *
    {
        width: calc(100% - 26px);
    }


    .compare_error .title
    {
        font-size: 16px;
        font-weight: 500;
        line-height: 100%;
    }


    .compare_error .desc
    {
        font-size: 12px;
        line-height: 130%;

        margin-top: 8px;

        opacity: .7;
    }

    .compare_error .close_btn
    {
        position: absolute;
        top: 22px;
        right: 16px;

        display: flex;

        width: 16px;
        height: 16px;

        transition: opacity .2s linear;

        opacity: .5;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .compare_error .close_btn svg
    {
        display: block;

        width: 16px;
        height: 16px;

        pointer-events: none;
    }

    .compare_error .close_btn:hover
    {
        opacity: 1;
    }

</style>