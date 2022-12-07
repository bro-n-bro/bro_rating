<template>
    <section class="compare">
        <div class="cont">
            <div class="back_btn">
                <button @click.prevent="router.go(-1)" class="btn">
                    <svg class="icon"><use xlink:href="/sprite.svg#ic_arrow_hor"></use></svg>
                    <span>{{ $t('message.back_btn') }}</span>
                </button>
            </div>

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
                            <div class="col_greed" :class="{ identical: store.compareIdenticalOptions['greed'] }">
                                {{ $t('message.compare_title_col_greed') }}
                            </div>

                            <div class="col_cost" :class="{ identical: store.compareIdenticalOptions['cost_endorsement'] }">
                                {{ $t('message.compare_title_col_cost') }}
                            </div>

                            <div class="col_power" :class="{ identical: store.compareIdenticalOptions['validator_rank'] }">
                                {{ $t('message.compare_title_col_power') }}
                            </div>

                            <div class="col_decentralization" :class="{ identical: store.compareIdenticalOptions['decentralization_endorsement'] }">
                                {{ $t('message.compare_title_col_decentralization') }}
                            </div>

                            <div class="col_ownership" :class="{ identical: store.compareIdenticalOptions['ownership'] }">
                                {{ $t('message.compare_title_col_ownership') }}
                            </div>

                            <div class="col_confidence" :class="{ identical: store.compareIdenticalOptions['confidence_endorsement'] }">
                                {{ $t('message.compare_title_col_confidence') }}
                            </div>

                            <div class="col_voted" :class="{ identical: store.compareIdenticalOptions['voted'] }">
                                {{ $t('message.compare_title_col_voted') }}
                            </div>

                            <div class="col_participation" :class="{ identical: store.compareIdenticalOptions['participation_endorsement'] }">
                                {{ $t('message.compare_title_col_participation') }}
                            </div>

                            <div class="col_blurring" :class="{ identical: store.compareIdenticalOptions['blurring'] }">
                                {{ $t('message.compare_title_col_blurring') }}
                            </div>

                            <div class="col_reliability" :class="{ identical: store.compareIdenticalOptions['reliability'] }">
                                {{ $t('message.compare_title_col_reliability') }}
                            </div>

                            <div class="col_active_set" :class="{ identical: store.compareIdenticalOptions['is_active_set'] }">
                                {{ $t('message.compare_title_col_active_set') }}
                            </div>

                            <div class="col_total" :class="{ identical: store.compareIdenticalOptions['total'] }">
                                {{ $t('message.compare_title_col_total') }}
                            </div>

                            <div class="col_rank" :class="{ identical: store.compareIdenticalOptions['rank'] }">
                                {{ $t('message.compare_title_col_score') }}
                            </div>
                        </div>
                    </div>

                    <div class="col_main">
                        <div class="row">
                            <div v-for="(validator, index) in store.compareValidators" :key="index" class="validator animate fadeInRight" :class="'delay' + (index + 1)" v-animate>
                                <div class="top">
                                    <div class="logo">
                                        <img :data-src="validator[getValidatorInfo('logo_path')]" alt="" @error="imageLoadError" v-lazyload>
                                        <svg class="icon"><use xlink:href="/sprite.svg#ic_user"></use></svg>
                                    </div>

                                    <div class="name">{{ validator[getValidatorInfo('moniker')] }}</div>
                                </div>

                                <div class="vals">
                                    <div class="col_greed" :data-column="$t('message.compare_title_col_greed')"
                                        :class="{
                                            identical: store.compareIdenticalOptions['greed'],
                                            green: store.compareMinMaxValue['greed'].max == index,
                                            red: store.compareMinMaxValue['greed'].min == index
                                        }"
                                        @mouseover="emitter.emit('setNotification', $t('message.notice_col_greed'))"
                                    >
                                        {{ $filters.toFixed(validator[getValidatorInfo('greed')] * 100, 2) }}%
                                    </div>

                                    <div class="col_cost" :data-column="$t('message.compare_title_col_cost')"
                                        :class="{
                                            identical: store.compareIdenticalOptions['cost_endorsement'],
                                            red: store.compareMinMaxValue['cost_endorsement'].max == index,
                                            green: store.compareMinMaxValue['cost_endorsement'].min == index
                                        }"
                                        @mouseover="emitter.emit('setNotification', $t('message.notice_col_greed'))"
                                    >
                                        {{ $filters.toFixed(validator[getValidatorInfo('cost_endorsement')], 2) }}
                                    </div>

                                    <div class="col_power" :data-column="$t('message.compare_title_col_power')"
                                        :class="{
                                            identical: store.compareIdenticalOptions['validator_rank'],
                                            green: store.compareMinMaxValue['validator_rank'].max == index,
                                            red: store.compareMinMaxValue['validator_rank'].min == index
                                        }"
                                        @mouseover="emitter.emit('setNotification', $t('message.notice_col_greed'))"
                                    >
                                        {{ $filters.toFixed(validator[getValidatorInfo('validator_rank')], 0) }}
                                    </div>

                                    <div class="col_decentralization" :data-column="$t('message.compare_title_col_decentralization')"
                                        :class="{
                                            identical: store.compareIdenticalOptions['decentralization_endorsement'],
                                            red: store.compareMinMaxValue['decentralization_endorsement'].max == index,
                                            green: store.compareMinMaxValue['decentralization_endorsement'].min == index
                                        }"
                                        @mouseover="emitter.emit('setNotification', $t('message.notice_col_greed'))"
                                    >
                                        {{ $filters.toFixed(validator[getValidatorInfo('decentralization_endorsement')], 2) }}
                                    </div>

                                    <div class="col_ownership" :data-column="$t('message.compare_title_col_ownership')"
                                        :class="{
                                            identical: store.compareIdenticalOptions['ownership'],
                                            red: store.compareMinMaxValue['ownership'].max == index,
                                            green: store.compareMinMaxValue['ownership'].min == index
                                        }"
                                        @mouseover="emitter.emit('setNotification', $t('message.notice_col_greed'))"
                                    >
                                        {{ $filters.toFixed(validator[getValidatorInfo('ownership')] * 100, 2) }}%
                                    </div>

                                    <div class="col_confidence" :data-column="$t('message.compare_title_col_confidence')"
                                        :class="{
                                            identical: store.compareIdenticalOptions['confidence_endorsement'],
                                            red: store.compareMinMaxValue['confidence_endorsement'].max == index,
                                            green: store.compareMinMaxValue['confidence_endorsement'].min == index
                                        }"
                                        @mouseover="emitter.emit('setNotification', $t('message.notice_col_greed'))"
                                    >
                                        {{ $filters.toFixed(validator[getValidatorInfo('confidence_endorsement')], 2) }}
                                    </div>

                                    <div class="col_voted" :data-column="$t('message.compare_title_col_voted')"
                                        :class="{
                                            identical: store.compareIdenticalOptions['voted'],
                                            red: store.compareMinMaxValue['voted'].max == index,
                                            green: store.compareMinMaxValue['voted'].min == index
                                        }"
                                        @mouseover="emitter.emit('setNotification', $t('message.notice_col_greed'))"
                                    >
                                        {{ $filters.toFixed(validator[getValidatorInfo('voted')], 2) }}
                                    </div>

                                    <div class="col_participation" :data-column="$t('message.compare_title_col_participation')"
                                        :class="{
                                            identical: store.compareIdenticalOptions['participation_endorsement'],
                                            red: store.compareMinMaxValue['participation_endorsement'].max == index,
                                            green: store.compareMinMaxValue['participation_endorsement'].min == index
                                        }"
                                        @mouseover="emitter.emit('setNotification', $t('message.notice_col_greed'))"
                                    >
                                        {{ $filters.toFixed(validator[getValidatorInfo('participation_endorsement')], 2) }}
                                    </div>

                                    <div class="col_blurring" :data-column="$t('message.compare_title_col_blurring')"
                                        :class="{
                                            identical: store.compareIdenticalOptions['blurring'],
                                            red: store.compareMinMaxValue['blurring'].max == index,
                                            green: store.compareMinMaxValue['blurring'].min == index
                                        }"
                                        @mouseover="emitter.emit('setNotification', $t('message.notice_col_greed'))"
                                    >
                                        {{ $filters.toFixed(validator[getValidatorInfo('blurring')] * 100, 2) }}%
                                    </div>

                                    <div class="col_reliability" :data-column="$t('message.compare_title_col_reliability')"
                                        :class="{
                                            identical: store.compareIdenticalOptions['reliability'],
                                            red: store.compareMinMaxValue['reliability'].max == index,
                                            green: store.compareMinMaxValue['reliability'].min == index
                                        }"
                                        @mouseover="emitter.emit('setNotification', $t('message.notice_col_greed'))"
                                    >
                                        {{ $filters.toFixed(validator[getValidatorInfo('reliability')], 2) }}
                                    </div>

                                    <div class="col_active_set" :data-column="$t('message.compare_title_col_active_set')"
                                        :class="{
                                            identical: store.compareIdenticalOptions['is_active_set'],
                                            red: store.compareMinMaxValue['is_active_set'].max == index,
                                            green: store.compareMinMaxValue['is_active_set'].min == index
                                        }"
                                        @mouseover="emitter.emit('setNotification', $t('message.notice_col_greed'))"
                                    >
                                        <span v-if="validator[getValidatorInfo('is_active_set')]">{{ $t('message.compare_yes') }}</span>
                                        <span v-else>{{ $t('message.compare_no') }}</span>
                                    </div>

                                    <div class="col_total" :data-column="$t('message.compare_title_col_total')"
                                        :class="{
                                            identical: store.compareIdenticalOptions['total'],
                                            red: store.compareMinMaxValue['total'].max == index,
                                            green: store.compareMinMaxValue['total'].min == index
                                        }"
                                        @mouseover="emitter.emit('setNotification', $t('message.notice_col_greed'))"
                                    >
                                        {{ $filters.toFixed(validator[getValidatorInfo('total')], 4) }}
                                    </div>

                                    <div class="col_score" :data-column="$t('message.compare_title_col_score')"
                                        :class="{
                                            identical: store.compareIdenticalOptions['rank'],
                                            red: store.compareMinMaxValue['rank'].max == index,
                                            green: store.compareMinMaxValue['rank'].min == index
                                        }"
                                        @mouseover="emitter.emit('setNotification', $t('message.notice_col_greed'))"
                                    >
                                        {{ $filters.toFixed(validator[getValidatorInfo('rank')], 0) }}
                                    </div>
                                </div>

                                <a :href="`https://wallet.keplr.app/chains/${store.currentNetwork}?modal=validator&chain=${store.networks[store.currentNetwork].chainId}&validator_address=${validator[getValidatorInfo('opeartor_address')]}`" target="_blank" rel="noopener nofollow" class="delegate_btn">
                                    {{ $t('message.delegate_btn') }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, watch, inject } from 'vue'
    import { useGlobalStore } from '@/stores'
    import router from '@/router'

    // Components
    import RatingFilter from '../components/RatingFilter.vue'

    const store = useGlobalStore(),
        emitter = inject('emitter'),
        hideOptions = ref(0)

    var onceHideOptions = false


    // Hide/Show Options
    watch(hideOptions, value => {
        if(!onceHideOptions) {
            let columns = document.querySelectorAll('.identical')

            value
                ? columns.forEach(col => col.classList.add('hide'))
                : columns.forEach(col => col.classList.remove('hide'))
        } else {
            onceHideOptions = false
        }
    })


    // Get validator data from shema
    function getValidatorInfo(columnName) {
        return store.ratingData.schema.indexOf(columnName)
    }


    // Replacement of the logo if it is not present
    function imageLoadError(event) {
        event.target.classList.add('hide')

        event.target.closest('.logo').style.backgroundColor = store.colors[Math.floor((Math.random()*store.colors.length))]
    }


    // Event "Cancel "Hide identical options""
    emitter.on('cancelHideIdenticalOptions', () => {
        onceHideOptions = true
        hideOptions.value = 0
    })
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


    .compare .back_btn
    {
        display: flex;

        margin-top: -20px;
        margin-bottom: 10px;
    }


    .compare .back_btn .btn
    {
        font-size: 14px;
        line-height: 17px;

        display: flex;

        padding: 10px;

        text-align: left;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .compare .back_btn .btn .icon
    {
        display: block;

        width: 14px;
        height: 14px;
        margin-right: 10px;
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
        position: relative;
        z-index: 3;

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

        display: flex;
        overflow: hidden;

        width: 70px;
        height: 70px;
        margin: 0 auto 10px;

        border-radius: 50%;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
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

    .compare .validator .logo img.hide
    {
        display: none;
    }

    .compare .validator .logo .icon
    {
        display: none;

        width: 40px;
        height: 40px;
    }

    .compare .validator .logo img.hide + .icon
    {
        display: block;
    }


    .compare .validator .name
    {
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;

        overflow: hidden;

        width: 100%;

        white-space: nowrap;
        text-overflow: ellipsis;
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


    .compare .validator .delegate_btn
    {
        color: currentColor;
        font-size: 12px;
        line-height: 15px;

        display: block;

        width: 100%;
        margin-top: 20px;
        padding: 14px;

        text-align: center;
        text-decoration: none;

        border-radius: 10px;
        background: #950fff;
    }



    @media print, (max-width: 1439px)
    {
        .compare .block_title
        {
            font-size: 32px;
        }
    }



    @media print, (max-width: 1279px)
    {
        .compare .block_title
        {
            font-size: 30px;
        }


        .compare .col_main
        {
            width: calc(100% - 255px);
            margin-right: 0;
            margin-left: auto;
        }
    }



    @media print, (max-width: 1023px)
    {
        .compare .block_title
        {
            font-size: 28px;
            line-height: 34px;
        }


        .compare .col_left
        {
            width: 100%;
            margin-bottom: 20px;
        }


        .compare .filter_wrap
        {
            height: auto;
        }


        .compare .identical_options
        {
            margin-top: 12px;
            padding: 4px 0;
        }


        .compare .features
        {
            display: none;
        }


        .compare .col_main
        {
            width: 100%;
            margin: 0;
        }


        .compare .validator .vals > *:before
        {
            font-size: 13px;
            font-weight: normal;
            line-height: 17px;

            display: block;

            width: 100%;
            margin-bottom: 8px;

            content: attr(data-column);
            letter-spacing: 0;
            text-transform: none;

            opacity: .5;
        }
    }



    @media print, (max-width: 767px)
    {
        .compare .block_title
        {
            font-size: 26px;
            line-height: 32px;
        }


        .compare .col_main .row
        {
            display: block;
            overflow: auto;

            width: calc(100% + 40px);
            margin: 0 -20px;
            padding: 0 20px;

            white-space: nowrap;

            scrollbar-color: transparent transparent !important;
            scrollbar-width: thin !important;
        }

        .compare .col_main .row::-webkit-scrollbar
        {
            width: 0 !important;
            height: 0 !important;

            background-color: transparent !important;
        }

        .compare .col_main .row::-webkit-scrollbar-thumb
        {
            background-color: transparent !important;
        }


        .compare .col_main .row > *
        {
            display: inline-block;

            width: 240px;
            max-width: none;
            margin: 0;

            vertical-align: top;
            white-space: normal;
        }

        .compare .col_main .row > *.animate
        {
            visibility: visible;

            transform: none;

            opacity: 1;
        }

        .compare .col_main .row > * + *
        {
            margin-left: 16px;
        }
    }



    @media print, (max-width: 479px)
    {
        .compare .data
        {
            padding: 20px 10px 10px;
        }


        .compare .block_title
        {
            font-size: 24px;
            line-height: 30px;
        }
    }

</style>