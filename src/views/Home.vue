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
            </div>
        </div>

        <img src="../assets/images/bg_first_section_left.svg" alt="" class="bg_left">
        <img src="../assets/images/bg_first_section_right.svg" alt="" class="bg_right">

        <img src="../assets/images/mob_bg_first_section.svg" alt="" class="mob_bg">
    </section>
</template>


<script setup>
    import { inject } from 'vue'

    // Components
    import ChooseNetwork  from '../components/ChooseNetwork.vue'

    const i18n = inject('i18n')
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
    bottom: 108px;
    left: 50%;

    display: none;

    width: 473px;
    height: 262px;
    margin: auto;
    margin-left: -240px;

    pointer-events: none;
}











</style>