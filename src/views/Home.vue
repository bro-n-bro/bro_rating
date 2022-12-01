<template>
    <section class="home_block">
        <div class="cont">
            <div class="data">
                <div class="title animate fadeInUp" v-animate>
                    {{ $t('message.home_title') }}
                </div>

                <div class="desc animate fadeInUp delay" v-html="$t('message.home_desc')" v-animate></div>

                <!-- Choose network -->
                <ChooseNetwork class="animate fadeInUp delay3" v-animate />

                <div class="link animate fadeInUp delay4" v-animate>
                    <router-link :to="{ name: 'Network', query: { network: store.currentNetwork } }" :class="{ active: store.currentNetwork.length }">
                        {{ $t('message.see_results_btn') }}
                    </router-link>
                </div>
            </div>
        </div>

        <img src="../assets/images/bg_first_section_left.svg" alt="" class="bg_left">
        <img src="../assets/images/bg_first_section_right.svg" alt="" class="bg_right">

        <img src="../assets/images/mob_bg_first_section.svg" alt="" class="mob_bg">
    </section>
</template>


<script setup>
    import { inject } from 'vue'
    import { useGlobalStore } from '@/stores'

    // Components
    import ChooseNetwork  from '../components/ChooseNetwork.vue'

    const store = useGlobalStore(),
        i18n = inject('i18n')
</script>


<style>
.home_block
{
    position: relative;
    z-index: 3;

    display: flex;

    padding: 162px 0 60px;

    flex: 1 0 auto;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
}


.home_block .title
{
    font-size: 100px;
    font-weight: 700;
    line-height: 121px;

    text-align: center;
}


.home_block .desc
{
    color: #464646;
    font-size: 20px;
    line-height: 140%;

    width: 817px;
    max-width: 100%;
    margin: 20px auto 0;

    text-align: center;
}


.home_block .choose_network
{
    margin: 30px auto 0;
}


.home_block .link
{
    margin-top: 40px;
}


.home_block .link a
{
    color: currentColor;
    line-height: 60px;

    display: block;

    width: 235px;
    max-width: 100%;
    height: 60px;
    margin: 0 auto;

    transition: background .2s linear;
    text-align: center;
    text-decoration: none;
    pointer-events: none;

    border-radius: 12px;
    background: #141414;
}

.home_block .link a.active
{
    pointer-events: auto;

    background: #950fff;
}


.home_block .bg_left
{
    position: absolute;
    z-index: -2;
    top: 0;
    bottom: 60px;
    left: 50%;

    display: block;

    width: 421px;
    margin: auto;
    margin-left: -706px;

    pointer-events: none;
}


.home_block .bg_right
{
    position: absolute;
    z-index: -2;
    top: 0;
    right: 50%;
    bottom: 140px;

    display: block;

    width: 523px;
    margin: auto;
    margin-right: -831px;

    pointer-events: none;
}


.home_block .mob_bg
{
    position: absolute;
    z-index: -2;
    top: 0;
    bottom: 176px;
    left: 50%;

    display: none;

    width: 473px;
    height: 262px;
    margin: auto;
    margin-left: -240px;

    pointer-events: none;
}



@media print, (max-width: 1899px)
{
    .home_block .desc
    {
        margin-top: 28px;
    }

    .home_block .choose_network
    {
        margin-top: 40px;
    }


    .home_block .choose_network .mini_modal
    {
        top: auto;
        bottom: calc(100% + 10px);
    }


    .home_block .choose_network .mini_modal .scroll
    {
        max-height: 310px;
    }
}



@media print, (max-width: 1439px)
{
    .home_block .title
    {
        font-size: 90px;
        line-height: 100px;
    }


    .home_block .desc
    {
        font-size: 18px;

        width: 672px;
    }


    .home_block .bg_left,
    .home_block .bg_right
    {
        transform: scale(.8);
    }

    .home_block .bg_left
    {
        margin-left: -652px;
    }

    .home_block .bg_right
    {
        margin-right: -732px;
    }
}


@media print, (max-width: 1279px)
{
    .home_block .bg_left,
    .home_block .bg_right
    {
        transform: scale(.7);
    }

    .home_block .bg_left
    {
        margin-left: -602px;
    }

    .home_block .bg_right
    {
        margin-right: -682px;
    }
}


@media print, (max-width: 1023px)
{
    .home_block .bg_left,
    .home_block .bg_right
    {
        display: none;
    }

    .home_block .mob_bg
    {
        display: block;
    }


    .home_block .choose_network
    {
        margin-top: 30px;
    }


    .home_block .choose_network .mini_modal
    {
        top: calc(100% + 4px);
        bottom: auto;
    }

    .home_block .choose_network .mini_modal .scroll
    {
        max-height: 257px;
    }


    .home_block .link
    {
        margin-top: 30px;
    }

    .home_block .link a
    {
        width: 264px;
    }
}


@media print, (max-width: 767px)
{
    .home_block
    {
        padding-top: 134px;
    }


    .home_block .title
    {
        font-size: 72px;
        line-height: 80px;
    }


    .home_block .desc
    {
        font-size: 16px;

        width: 100%;
        margin-top: 24px;
    }


    .home_block .choose_network .mini_modal
    {
        top: auto;
        bottom: calc(100% + 10px);
    }


    .home_block .link a
    {
        width: 224px;
    }
}


@media print, (max-width: 479px)
{
    .home_block .title
    {
        font-size: 60px;
        line-height: 68px;
    }

    .home_block .desc
    {
        font-size: 15px;

        margin-top: 20px;
    }


    .home_block .mob_bg
    {
        bottom: 164px;
    }


    .home_block .link
    {
        margin-top: 24px;
    }

    .home_block .link a
    {
        width: 100%;
    }
}



















</style>