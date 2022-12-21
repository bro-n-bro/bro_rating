<template>
    <section class="modal" id="validator_modal">
        <transition name="fadeUp" mode="out-in" appear type="animation">
        <div class="modal_content" @click.self="emitter.emit('closeValidatorModal')">
            <div class="data">
                <button class="close_btn" @click.prevent="emitter.emit('closeValidatorModal')">
                    <svg class="icon"><use xlink:href="/sprite.svg#ic_close2"></use></svg>
                </button>

                <div class="modal_title">{{ $t('message.validator_modal_title') }}</div>

                <div class="row">
                    <div class="logo">
                        <div class="power">
                            {{ Math.floor(store.validatorInfo[getValidatorInfo('validator_rank')]) }}
                            <svg><use xlink:href="/sprite.svg#bg_rank2"></use></svg>
                        </div>

                        <img :src="store.validatorInfo[getValidatorInfo('logo_path')]" alt="" @error="imageLoadError">
                        <svg class="icon"><use xlink:href="/sprite.svg#ic_user"></use></svg>
                    </div>

                    <div class="info">
                        <div class="name">
                            <a :href="`https://www.mintscan.io/${store.networks[store.currentNetwork].mintscanAlias}/validators/${store.validatorInfo[getValidatorInfo('opeartor_address')]}`" target="_blank" rel="noopener nofollow">
                                <span>{{ store.validatorInfo[getValidatorInfo('moniker')] }}</span>
                                <svg class="icon"><use xlink:href="/sprite.svg#ic_link_arrow"></use></svg>
                            </a>
                        </div>

                        <div class="operator_address">
                            <div class="label">{{ $t('message.validator_modal_operator_address_label') }}</div>

                            <div class="val">{{ store.validatorInfo[getValidatorInfo('opeartor_address')] }}</div>
                        </div>
                    </div>

                    <div class="bro_score">
                        <span>{{ $t('message.validator_modal_bro_score_label') }}</span>
                        <b>{{ store.validatorInfo[getValidatorInfo('rank')] }}</b>
                    </div>

                    <div class="active_set" :class="{ green: store.validatorInfo[getValidatorInfo('is_active_set')] }">
                        <template v-if="store.validatorInfo[getValidatorInfo('is_active_set')]">
                        <svg class="icon"><use xlink:href="/sprite.svg#ic_check"></use></svg>
                        <span>{{ $t('message.validator_modal_active_set') }}</span>
                        </template>

                        <template v-else>
                        <svg class="icon"><use xlink:href="/sprite.svg#ic_notice"></use></svg>
                        <span>{{ $t('message.validator_modal_inactive_set') }}</span>
                        </template>
                    </div>
                </div>

                <div class="features">
                    <div class="row">
                        <div class="item">
                            <div class="feature">
                                <div class="label">{{ $t('message.validator_modal_commission_label') }}</div>

                                <div class="val" @mouseover="emitter.emit('setNotification', $t('message.notice_col_greed'))">
                                    {{ $filters.toFixed(store.validatorInfo[getValidatorInfo('greed')] * 100, 2) }}%
                                </div>
                            </div>

                            <div class="feature">
                                <div class="label">{{ $t('message.validator_modal_cost_label') }}</div>

                                <div class="val" @mouseover="emitter.emit('setNotification', $t('message.notice_col_cost', { greed: $filters.toFixed(store.validatorInfo[getValidatorInfo('greed')] * 100, 2) }))">
                                    {{ $filters.toFixed(store.validatorInfo[getValidatorInfo('cost_endorsement')], 2) }}
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="feature">
                                <div class="label" v-html="$t('message.validator_modal_ownership_label')"></div>

                                <div class="val">
                                    <span @mouseover="emitter.emit('setNotification', $t('message.notice_col_self_bonded'))">
                                        {{ new Number($filters.toFixed(store.validatorInfo[getValidatorInfo('ownership')] * store.validatorInfo[getValidatorInfo('staked')] / store.networks[store.currentNetwork].exponent, 0)).toLocaleString() }}
                                    </span>
                                    /
                                    <span @mouseover="emitter.emit('setNotification', $t('message.notice_col_ownership'))">
                                        {{ $filters.toFixed(store.validatorInfo[getValidatorInfo('ownership')] * 100, 2) }}%
                                    </span>
                                </div>
                            </div>

                            <div class="feature">
                                <div class="label">{{ $t('message.validator_modal_confidence_label') }}</div>

                                <div class="val" @mouseover="emitter.emit('setNotification', $t('message.notice_col_confidence', { ownership: $filters.toFixed(store.validatorInfo[getValidatorInfo('ownership')], 2) }))">
                                    {{ $filters.toFixed(store.validatorInfo[getValidatorInfo('confidence_endorsement')], 2) }}
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="feature">
                                <div class="label">{{ $t('message.validator_modal_total_delegated_label') }}</div>

                                <div class="val" @mouseover="emitter.emit('setNotification', $t('message.notice_col_total_delegated'))">
                                    {{ new Number($filters.toFixed(store.validatorInfo[getValidatorInfo('staked')] / store.networks[store.currentNetwork].exponent, 0)).toLocaleString() }}
                                </div>
                            </div>

                            <div class="feature">
                                <div class="label">{{ $t('message.validator_modal_decentralization_label') }}</div>

                                <div class="val" @mouseover="emitter.emit('setNotification', $t('message.notice_col_decentralization', { validator_rank: $filters.toFixed(store.validatorInfo[getValidatorInfo('validator_rank')], 2) }))">
                                    {{ $filters.toFixed(store.validatorInfo[getValidatorInfo('decentralization_endorsement')], 2) }}
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="feature">
                                <div class="label">{{ $t('message.validator_modal_voted_label') }}</div>

                                <div class="val" @mouseover="emitter.emit('setNotification', $t('message.notice_col_voted', { voted: $filters.toFixed(store.validatorInfo[getValidatorInfo('voted')], 2) }))">
                                    {{ $filters.toFixed(store.validatorInfo[getValidatorInfo('voted')], 0) }}
                                </div>
                            </div>

                            <div class="feature">
                                <div class="label">{{ $t('message.validator_modal_participation_label') }}</div>

                                <div class="val" @mouseover="emitter.emit('setNotification', $t('message.notice_col_participation'))">
                                    {{ $filters.toFixed(store.validatorInfo[getValidatorInfo('participation_endorsement')], 2) }}
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="feature">
                                <div class="label">{{ $t('message.validator_modal_blurring_label') }}</div>

                                <div class="val" @mouseover="emitter.emit('setNotification', $t('message.notice_col_blurring'))">
                                    {{ $filters.toFixed(store.validatorInfo[getValidatorInfo('blurring')] * 100, 2) }}%
                                </div>
                            </div>

                            <div class="feature">
                                <div class="label">{{ $t('message.validator_modal_reliability_label') }}</div>

                                <div class="val" @mouseover="emitter.emit('setNotification', $t('message.notice_col_reliability', {
                                    staked: $filters.toFixed(store.validatorInfo[getValidatorInfo('staked')] / store.networks[store.currentNetwork].exponent, 0),
                                    delegator_shares: $filters.toFixed(store.validatorInfo[getValidatorInfo('delegator_shares')] / store.networks[store.currentNetwork].exponent, 0),
                                    token: store.networks[store.currentNetwork].token_name
                                }))">
                                    {{ $filters.toFixed(store.validatorInfo[getValidatorInfo('reliability_endorsement')], 2) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a :href="`https://wallet.keplr.app/chains/${store.currentNetwork}?modal=validator&chain=${store.networks[store.currentNetwork].chainId}&validator_address=${store.validatorInfo[getValidatorInfo('opeartor_address')]}`" target="_blank" rel="noopener nofollow" class="delegate_btn">
                    {{ $t('message.delegate_btn') }}
                </a>
            </div>
        </div>
        </transition>

        <transition name="fade" mode="out-in" appear type="animation">
        <div class="overlay"></div>
        </transition>
    </section>
</template>


<script setup>
    import { inject } from 'vue'
    import { useGlobalStore } from '@/stores'

    const store = useGlobalStore(),
        emitter = inject('emitter')


    // Replacement of the logo if it is not present
    function imageLoadError(event) {
        event.target.classList.add('hide')

        event.target.closest('.logo').style.backgroundColor = store.colors[Math.floor((Math.random()*store.colors.length))]
    }


    // Get validator data from shema
    function getValidatorInfo(columnName) {
        return store.ratingData.schema.indexOf(columnName)
    }
</script>


<style scoped>
    .data > .row
    {
        flex-wrap: nowrap;
    }


    .logo
    {
        position: relative;

        display: flex;

        width: 100px;
        min-width: 100px;
        height: 100px;
        padding: 17px;

        border-radius: 50%;
        background: #fff;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .logo img
    {
        display: block;

        max-width: 100%;
        max-height: 100%;

        border-radius: 50%;
    }

    .logo img.hide
    {
        display: none;
    }


    .logo .icon
    {
        display: none;

        width: 48px;
        height: 48px;
    }

    .logo img.hide + .icon
    {
        display: block;
    }



    .power
    {
        color: #fff;
        font-size: 12px;
        font-weight: 500;
        line-height: 34px;

        position: absolute;
        z-index: 3;
        top: -10px;
        right: 0;

        display: block;

        width: 34px;
        height: 34px;

        text-align: center;
    }

    .power svg
    {
        color: #950fff;

        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;

        display: block;

        width: 100%;
        height: 100%;
    }



    .info
    {
        width: 100%;
        margin: 0 40px 0 20px;
    }


    .info .name
    {
        font-size: 28px;
        font-weight: 500;
        line-height: 115%;

        display: flex;

        min-height: 44px;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .info .name a
    {
        color: currentColor;

        position: relative;

        display: inline-block;

        padding-right: 32px;

        vertical-align: top;
        text-decoration: none;
    }

    .info .name .icon
    {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;

        display: block;

        width: 22px;
        height: 22px;
        margin: auto;

        transition: color .2s linear;
    }

    .info .name:hover .icon
    {
        color: #7700e1;
    }


    .info .operator_address
    {
        margin-top: 14px;
    }


    .info .operator_address .label
    {
        line-height: 110%;

        margin-bottom: 10px;

        opacity: .4;
    }

    .info .operator_address .val
    {
        font-weight: 500;
        line-height: 120%;

        overflow: hidden;

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .bro_score
    {
        line-height: 100%;

        padding: 12px 13px;

        white-space: nowrap;

        border: 1px solid #950fff;
        border-radius: 24px;
        background: #141414;
    }

    .bro_score span
    {
        position: relative;
        top: -1px;
    }

    .bro_score b
    {
        font-size: 18px;
        font-weight: 600;
        line-height: 100%;

        margin-left: 6px;
    }


    .active_set
    {
        line-height: 100%;

        display: flex;

        margin-left: 10px;
        padding: 8px 13px 10px;
        padding: 10px 14px;

        white-space: nowrap;

        border-radius: 24px;
        background: #353535;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: nowrap;
    }

    .active_set.green
    {
        padding: 9px 14px 11px;

        opacity: 1;
        background: #1bc562;
    }

    .active_set .icon
    {
        display: block;

        width: 24px;
        height: 24px;
        margin-right: 4px;
    }



    .features
    {
        margin-top: 30px;
    }


    .features .row
    {
        margin-bottom: -20px;
        margin-left: -20px;

        align-items: stretch;
        align-content: stretch;
    }

    .features .row > *
    {
        width: calc(20% - 20px);
        margin-bottom: 20px;
        margin-left: 20px;
    }


    .features .item
    {
        border-radius: 12px;
        background: #141414;;
    }


    .features .feature
    {
        padding: 10px;

        border-radius: 12px;
    }


    .features .item .label
    {
        line-height: 110%;

        min-height: 40px;
        margin-bottom: 10px;

        opacity: .4;
    }


    .features .item .val
    {
        font-weight: 500;
        line-height: 120%;

        white-space: nowrap;
    }


    .features .feature + .feature
    {
        background: #1e1e1e;
    }

    .features .feature + .feature .label
    {
        min-height: 0;
    }



    .delegate_btn
    {
        color: currentColor;
        font-size: 14px;
        line-height: 17px;

        display: block;

        width: 162px;
        max-width: 100%;
        margin-top: 20px;
        margin-left: auto;
        padding: 12px;

        transition: background .2s linear;
        text-align: center;
        text-decoration: none;

        border-radius: 10px;
        background: #950fff;
    }

    .delegate_btn:hover
    {
        background: #7700e1;
    }



    @media print, (max-width: 1023px)
    {
        .modal_content .modal_title
        {
            font-size: 26px;
        }


        .data > .row
        {
            position: relative;

            flex-wrap: wrap;
        }


        .info
        {
            width: calc(100% - 120px);
            margin-right: 0;
            margin-left: auto;
            padding-top: 60px;
        }


        .info .name
        {
            font-size: 24px;

            display: block;

            min-height: 0;
        }


        .info .operator_address
        {
            margin-top: 12px;
        }

        .info .operator_address .label
        {
            margin-bottom: 8px;
        }


        .bro_score
        {
            position: absolute;
            top: 0;
            left: 126px;

            margin: 0;
        }


        .active_set
        {
            position: absolute;
            top: 0;
            right: 0;

            margin: 0;
        }


        .features .row
        {
            margin-bottom: -20px;
            margin-left: -20px;
        }

        .features .row > *
        {
            width: calc(33.333% - 20px);
            margin-bottom: 20px;
            margin-left: 20px;
        }


        .features .item .label
        {
            min-height: 0;
        }

        .features .row > *:nth-child(1) .label,
        .features .row > *:nth-child(2) .label,
        .features .row > *:nth-child(3) .label
        {
            min-height: 33px;
        }


        .delegate_btn
        {
            width: 213px;
        }
    }



    @media print, (max-width: 767px)
    {
        .modal_content .modal_title
        {
            font-size: 24px;
        }


        .info
        {
            width: 100%;
            margin-top: 20px;
            padding-top: 0;
        }


        .info .name
        {
            font-size: 22px;
        }


        .features .row > *
        {
            width: calc(50% - 20px);
        }

        .features .row > *:nth-child(4) .label
        {
            min-height: 33px;
        }



        .delegate_btn
        {
            width: 100%;
        }
    }



    @media print, (max-width: 479px)
    {
        .logo
        {
            width: 80px;
            min-width: 80px;
            height: 80px;
            padding: 10px;
        }


        .info .name
        {
            font-size: 20px;
        }


        .bro_score
        {
            font-size: 13px;

            left: 100px;

            padding: 9px 11px 10px;
        }

        .bro_score b
        {
            font-size: 14px;
        }


        .active_set
        {
            font-size: 13px;

            top: 44px;
            right: auto;
            left: 100px;

            padding: 4px 11px;
        }


        .features .row
        {
            margin-bottom: -10px;
            margin-left: -10px;
        }

        .features .row > *
        {
            width: calc(50% - 10px);
            margin-bottom: 10px;
            margin-left: 10px;
        }
    }

</style>
