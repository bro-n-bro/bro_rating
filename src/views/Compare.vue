<template>
    <section class="compare">
        <div class="cont">
            <div class="data">
                <div class="head animate fadeInUp" v-animate>
                    <div class="block_title">
                        {{ $t('message.compare_title') }}
                    </div>
                </div>

                <div class="info">
                    <div class="col_left animate fadeInLeft" v-animate>
                        <div class="filter_wrap">
                            <!-- Filter -->
                            <RatingFilter />

                            <div class="identical_options">
                                <label>
                                    <input type="checkbox" value="1" v-model="hideOptions">

                                    <div class="check">
                                        <svg><use xlink:href="sprite.svg#ic_check"></use></svg>
                                    </div>

                                    <div>{{ $t('message.compare_hide_options') }}</div>
                                </label>
                            </div>
                        </div>

                        <div class="features">
                            <div class="col_cost" :class="{ identical: store.compareIdenticalOptions['cost_endorsement'] }">{{ $t('message.title_col_cost') }}</div>

                            <div class="col_decentralization" :class="{ identical: store.compareIdenticalOptions['decentralization_endorsement'] }">{{ $t('message.title_col_decentralization') }}</div>

                            <div class="col_confidence" :class="{ identical: store.compareIdenticalOptions['confidence_endorsement'] }">{{ $t('message.title_col_confidence') }}</div>

                            <div class="col_participation" :class="{ identical: store.compareIdenticalOptions['participation_endorsement'] }">{{ $t('message.title_col_participation') }}</div>

                            <div class="col_reliability" :class="{ identical: store.compareIdenticalOptions['reliability_endorsement'] }">{{ $t('message.title_col_reliability') }}</div>

                            <div class="col_total" :class="{ identical: store.compareIdenticalOptions['total'] }">{{ $t('message.title_col_total') }}</div>
                        </div>
                    </div>

                    <div class="col_main">
                        <div class="row">
                            <div v-for="(validator, index) in store.compareValidators" :key="index" class="validator animate fadeInRight" :class="'delay' + (index + 1)" v-animate>
                                <div class="top">
                                    <div class="logo">
                                        <img :data-src="`https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/${store.currentNetwork}/${validator[getValidatorInfo('opeartor_address')]}.png`" alt="" @error="imageLoadError" v-lazyload>
                                    </div>

                                    <div class="name">{{ validator[getValidatorInfo('moniker')] }}</div>
                                </div>

                                <div class="vals">
                                    <div class="col_cost" :class="{
                                        identical: store.compareIdenticalOptions['cost_endorsement'],
                                        green: store.compareMinMaxValue['cost_endorsement'].max == index,
                                        red: store.compareMinMaxValue['cost_endorsement'].min == index
                                    }">
                                        {{ $filters.toFixed(validator[getValidatorInfo('cost_endorsement')], 2) }}
                                    </div>

                                    <div class="col_decentralization" :class="{
                                        identical: store.compareIdenticalOptions['decentralization_endorsement'],
                                        green: store.compareMinMaxValue['decentralization_endorsement'].max == index,
                                        red: store.compareMinMaxValue['decentralization_endorsement'].min == index
                                    }">
                                        {{ $filters.toFixed(validator[getValidatorInfo('decentralization_endorsement')], 2) }}
                                    </div>

                                    <div class="col_confidence" :class="{
                                        identical: store.compareIdenticalOptions['confidence_endorsement'],
                                        green: store.compareMinMaxValue['confidence_endorsement'].max == index,
                                        red: store.compareMinMaxValue['confidence_endorsement'].min == index
                                    }">
                                        {{ $filters.toFixed(validator[getValidatorInfo('confidence_endorsement')], 2) }}
                                    </div>

                                    <div class="col_participation" :class="{
                                        identical: store.compareIdenticalOptions['participation_endorsement'],
                                        green: store.compareMinMaxValue['participation_endorsement'].max == index,
                                        red: store.compareMinMaxValue['participation_endorsement'].min == index
                                    }">
                                        {{ $filters.toFixed(validator[getValidatorInfo('participation_endorsement')], 2) }}
                                    </div>

                                    <div class="col_reliability" :class="{
                                        identical: store.compareIdenticalOptions['reliability_endorsement'],
                                        green: store.compareMinMaxValue['reliability_endorsement'].max == index,
                                        red: store.compareMinMaxValue['reliability_endorsement'].min == index
                                    }">
                                        {{ $filters.toFixed(validator[getValidatorInfo('reliability_endorsement')], 4) }}
                                    </div>

                                    <div class="col_total" :class="{
                                        identical: store.compareIdenticalOptions['total'],
                                        green: store.compareMinMaxValue['total'].max == index,
                                        red: store.compareMinMaxValue['total'].min == index
                                    }">
                                        {{ $filters.toFixed(validator[getValidatorInfo('total')], 4) }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, watch } from 'vue'
    import { useGlobalStore } from '@/stores'

    // Components
    import RatingFilter from '../components/RatingFilter.vue'


    const store = useGlobalStore(),
        hideOptions = ref(0)


    watch(hideOptions, value => {
        let columns = document.querySelectorAll('.identical')

        value
            ? columns.forEach(col => col.style.display = 'none')
            : columns.forEach(col => col.style.display = 'flex')
    })


    // Get validator data from shema
    function getValidatorInfo(columnName) {
        return store.ratingData.schema.indexOf(columnName)
    }


    // Replacement of the logo if it is not present
    function imageLoadError(event) {
        // event.target.src = 'alt-image.jpg'
    }
</script>


<style scoped>
    .compare
    {
        display: flex;
        flex-direction: column;

        margin-bottom: 20px;

        flex: 1 0 auto;
    }


    .compare .cont
    {
        display: flex;
        flex-direction: column;

        flex: 1 0 auto;
    }


    .compare .data
    {
        display: flex;
        overflow: hidden;
        flex-direction: column;

        padding: 14px 20px;

        border-radius: 20px;
        background: #0d0d0d;

        flex: 1 0 auto;
    }


    .compare .head
    {
        position: relative;
        z-index: 10;

        display: flex;

        margin-bottom: 20px;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }



    .compare .block_title
    {
        font-size: 30px;
        font-weight: 600;
        line-height: 36px;
    }



    .compare .info
    {
        display: flex;

        justify-content: space-between;
        align-items: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
    }


    .compare .col_left
    {
        width: 235px;
        max-width: 100%;
    }



    .compare .filter_wrap
    {
        display: flex;
        flex-direction: column;

        height: 124px;
        padding: 10px;

        border-radius: 20px;
        background: #141414;
    }


    .compare .identical_options
    {
        margin-top: auto;
        padding: 14px 0;
    }


    .compare .identical_options label
    {
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;

        position: relative;

        display: flex;

        min-height: 17px;
        padding-left: 24px;

        cursor: pointer;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .compare .identical_options input
    {
        display: none;
    }


    .compare .identical_options .check
    {
        color: #000;

        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        display: flex;

        width: 14px;
        height: 14px;
        margin: auto;

        transition: .2s linear;

        border: 1px solid rgba(255, 255, 255, .1);
        border-radius: 2px;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .compare .identical_options .check svg
    {
        display: block;

        width: 14px;
        height: 14px;

        transition: opacity .2s linear;

        opacity: 0;
    }


    .compare .identical_options input:checked + .check
    {
        border-color: transparent;
        background: #fff;
    }

    .compare .identical_options input:checked + .check svg
    {
        opacity: 1;
    }



    .compare .features
    {
        margin-top: 20px;
    }


    .compare .features > *
    {
        font-size: 12px;
        line-height: 15px;

        padding: 13px 10px;

        border-radius: 10px;
        background: #141414;
    }

    .compare .features > * + *
    {
        margin-top: 6px;
    }

    .compare .features > *.hide
    {
        display: none !important;
    }



    .compare .col_main
    {
        width: 735px;
        max-width: 100%;
        margin-right: auto;
        margin-left: auto;
    }


    .compare .col_main .row
    {
        margin-bottom: -20px;
        margin-left: -20px;

        align-items: stretch;
        align-content: stretch;
    }

    .compare .col_main .row > *
    {
        width: calc(33.333% - 20px);
        margin-bottom: 20px;
        margin-left: 20px;
    }


    .compare .validator .top
    {
        display: flex;

        height: 124px;
        padding: 12px 10px;

        text-align: center;

        border-radius: 20px;
        background: #141414;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .compare .validator .logo
    {
        position: relative;

        overflow: hidden;

        width: 70px;
        height: 70px;
        margin: 0 auto 10px;

        border-radius: 50%;
    }

    .compare .validator .logo img
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


    .compare .validator .name
    {
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;

        width: 100%;
    }


    .compare .validator .vals
    {
        margin-top: 20px;
    }


    .compare .validator .vals > *
    {
        font-size: 12px;
        line-height: 15px;

        display: flex;

        padding: 13px 10px;

        transition: background .2s linear;
        text-align: center;

        border-radius: 10px;
        background: #141414;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .compare .validator .vals > *.hide
    {
        display: none !important;
    }

    .compare .validator .vals > *.red
    {
        background: rgba(235, 87, 87, .1);
    }

    .compare .validator .vals > *.green
    {
        background: rgba(27, 197, 98, .1);
    }

    .compare .validator .vals > * + *
    {
        margin-top: 6px;
    }

</style>