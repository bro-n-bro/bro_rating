<template>
    <div class="feedback">
        <button class="btn" @click.prevent="isActive = !isActive" :class="{ active: isActive }">
            <svg class="icon"><use xlink:href="/sprite.svg#ic_bug"></use></svg>
        </button>

        <div class="info">
            <button class="close_btn" @click.prevent="isActive = !isActive">
                <svg><use xlink:href="/sprite.svg#ic_close"></use></svg>
            </button>

            <div class="head">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_feedback"></use></svg>

                <div>
                    <div class="title">{{ $t('message.feedback_title') }}</div>

                    <div class="desc">{{ $t('message.feedback_desc') }}</div>
                </div>
            </div>

            <div class="links">
                <div><a href="https://t.me/bro_n_bro_community" target="_blank" rel="noopener nofollow">
                    <svg class="icon"><use xlink:href="/sprite.svg#ic_telegram"></use></svg>
                    <span>{{ $t('message.feedback_telegram_link') }}</span>
                    <svg class="arrow"><use xlink:href="/sprite.svg#ic_link_arrow"></use></svg>
                </a></div>

                <div><a href="https://github.com/bro-n-bro/bro.app/issues/new" target="_blank" rel="noopener nofollow">
                    <svg class="icon"><use xlink:href="/sprite.svg#ic_github"></use></svg>
                    <span>{{ $t('message.feedback_github_link') }}</span>
                    <svg class="arrow"><use xlink:href="/sprite.svg#ic_link_arrow"></use></svg>
                </a></div>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { inject, ref } from 'vue'

    const i18n = inject('i18n'),
        isActive = ref(false)
</script>


<style scoped>
    .feedback
    {
        position: fixed;
        z-index: 90;
        right: 24px;
        bottom: 24px;
    }


    .feedback .btn
    {
        display: flex;

        width: 76px;
        height: 76px;

        border-radius: 32px;
        background: #950fff;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .feedback .btn .icon
    {
        display: block;

        width: 36px;
        height: 36px;
    }

    .feedback .btn.active
    {
        display: none;
    }


    .feedback .info
    {
        color: #fff;

        position: relative;

        display: none;

        width: 252px;
        max-width: calc(100vw - 48px);
        padding: 22px 16px 16px;

        border-radius: 16px;
        background: #191919;
    }

    .feedback .btn.active + .info
    {
        display: block;
    }


    .feedback .close_btn
    {
        position: absolute;
        top: 22px;
        right: 16px;

        display: flex;

        width: 24px;
        height: 24px;

        transition: opacity .2s linear;

        opacity: .5;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .feedback .close_btn .icon
    {
        display: block;

        width: 24px;
        height: 24px;
    }

    .feedback .close_btn:hover
    {
        opacity: 1;
    }


    .feedback .head
    {
        display: flex;

        justify-content: space-between;
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
    }


    .feedback .head .icon
    {
        display: block;

        width: 24px;
        height: 24px;
    }

    .feedback .head .icon + *
    {
        width: calc(100% - 34px);
        padding-right: 32px;
    }


    .feedback .head .title
    {
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
    }


    .feedback .head .desc
    {
        font-size: 12px;
        line-height: 130%;

        margin-top: 8px;

        opacity: .7;
    }


    .feedback .links
    {
        font-size: 14px;
        line-height: 17px;

        margin-top: 16px;
    }

    .feedback .links > * + *
    {
        margin-top: 10px;
    }


    .feedback .links a
    {
        color: currentColor;

        display: flex;

        padding: 10px;

        transition: background .2s linear;
        text-decoration: none;

        border-radius: 10px;
        background: #212121;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .feedback .links .icon
    {
        display: block;

        width: 16px;
        height: 16px;
        margin-right: 6px;
    }

    .feedback .links span
    {
        width: calc(100% - 44px);
    }

    .feedback .links .arrow
    {
        display: block;

        width: 16px;
        height: 16px;
        margin-left: auto;
    }

    .feedback .links a:hover
    {
        background: #950fff;
    }

</style>