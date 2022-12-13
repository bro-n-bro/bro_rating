<template>
    <div class="validator" :class="{ 'pinned': props.validator.pinned }" :id="getValidatorInfo('opeartor_address')">
        <div class="col_score" @mouseover="emitter.emit('setNotification', $t('message.notice_col_score'))" :data-column="$t('message.title_col_score')" @click.prevent="toggleToCompare($event, getValidatorInfo('opeartor_address'))">
            <div class="checkbox">
                <svg><use xlink:href="/sprite.svg#ic_check"></use></svg>
            </div>

            <span>
                {{ getValidatorInfo('rank') }}
                <sup :class="{ 'green': getValidatorInfo('diff') > 0, 'red': getValidatorInfo('diff') < 0 }">
                    <template v-if="getValidatorInfo('diff') > 0">+{{ getValidatorInfo('diff') }}</template>
                    <template v-else>{{ getValidatorInfo('diff') }}</template>
                </sup>
            </span>
        </div>

        <a target="_blank" rel="noopener nofollow" class="col_moniker" v-if="store.currentNetwork != 'bostrom'"
            :href="`https://www.mintscan.io/${store.networks[store.currentNetwork].mintscanAlias}/validators/${getValidatorInfo('opeartor_address')}`"
            @mouseover="emitter.emit('setNotification', $t('message.notice_col_moniker'))"
            :data-column="$t('message.title_col_moniker')"
        >
            <div class="power">
                {{ Math.floor(getValidatorInfo('validator_rank')) }}
                <svg :class="{ green: getValidatorInfo('is_active_set') }"><use xlink:href="/sprite.svg#bg_rank"></use></svg>
            </div>

            <div class="logo">
                <img :src="getValidatorInfo('logo_path')" alt="" @error="imageLoadError">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_user"></use></svg>
            </div>

            <div>{{ getValidatorInfo('moniker') }}</div>
        </a>

        <a target="_blank" rel="noopener nofollow" class="col_moniker" v-else
            :href="`https://cyb.ai/network/bostrom/hero/${getValidatorInfo('opeartor_address')}`"
            :data-column="$t('message.title_col_moniker')"
        >
            <div class="power">
                {{ Math.floor(getValidatorInfo('validator_rank')) }}
                <svg :class="{ green: getValidatorInfo('is_active_set') }"><use xlink:href="/sprite.svg#bg_rank"></use></svg>
            </div>

            <div class="logo">
                <img :src="getValidatorInfo('logo_path')" alt="" @error="imageLoadError">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_user"></use></svg>
            </div>

            <div>{{ getValidatorInfo('moniker') }}</div>
        </a>

        <div class="col_cost" @mouseover="emitter.emit('setNotification', $t('message.notice_col_cost', { greed: $filters.toFixed(getValidatorInfo('greed') * 100, 2) }))" :data-column="$t('message.title_col_cost')">
            <span>{{ $filters.toFixed(getValidatorInfo('cost_endorsement'), 2) }}</span>
        </div>

        <div class="col_decentralization" @mouseover="emitter.emit('setNotification', $t('message.notice_col_decentralization', { validator_rank: $filters.toFixed(getValidatorInfo('validator_rank'), 2) }))" :data-column="$t('message.title_col_decentralization')">
            <span>{{ $filters.toFixed(getValidatorInfo('decentralization_endorsement'), 2) }}</span>
        </div>

        <div class="col_confidence" @mouseover="emitter.emit('setNotification', $t('message.notice_col_confidence', { ownership: $filters.toFixed(getValidatorInfo('ownership'), 2) }))" :data-column="$t('message.title_col_confidence')">
            <span>{{ $filters.toFixed(getValidatorInfo('confidence_endorsement'), 2) }}</span>
        </div>

        <div class="col_participation" @mouseover="emitter.emit('setNotification', $t('message.notice_col_participation', { voted: $filters.toFixed(getValidatorInfo('voted'), 2) }))" :data-column="$t('message.title_col_participation')">
            <span>{{ $filters.toFixed(getValidatorInfo('participation_endorsement'), 2) }}</span>
        </div>

        <div class="col_reliability" @mouseover="emitter.emit('setNotification', $t('message.notice_col_reliability', {
            staked: $filters.toFixed(getValidatorInfo('staked') / store.networks[store.currentNetwork].exponent, 0),
            delegator_shares: $filters.toFixed(getValidatorInfo('delegator_shares') / store.networks[store.currentNetwork].exponent, 0),
            token: store.networks[store.currentNetwork].token_name
        }))" :data-column="$t('message.title_col_reliability')">
            <span>{{ $filters.toFixed(getValidatorInfo('reliability_endorsement'), 4) }}</span>
        </div>

        <div class="col_total" @mouseover="emitter.emit('setNotification', $t('message.notice_col_total'))" :data-column="$t('message.title_col_total')">
            <span>{{ $filters.toFixed(getValidatorInfo('total'), 4) }}</span>
        </div>
    </div>
</template>


<script setup>
    import { inject } from 'vue'
    import { useGlobalStore } from '@/stores'

    const props = defineProps(['validator', 'schema']),
        store = useGlobalStore(),
        emitter = inject('emitter')


    // Get validator data from shema
    function getValidatorInfo(columnName) {
        let index = props.schema.indexOf(columnName)

        return props.validator[index]
    }


    // Replacement of the logo if it is not present
    function imageLoadError(event) {
        event.target.classList.add('hide')

        event.target.closest('.logo').style.backgroundColor = store.colors[Math.floor((Math.random()*store.colors.length))]
    }


    // Add/remove to/from compare
    function toggleToCompare(e, valoper) {
        if (e.target.classList.contains('col_score')) {
            let validator = e.target.closest('.rating .validator')

            if (store.compareValidators.length < store.compareLimit || validator.classList.contains('pinned')) {
                if (!validator.classList.contains('pinned')) {
                    // Add to compare
                    store.addToCompare(valoper)
                } else {
                    // Remove from compare
                    store.removeFromCompare(valoper)
                }

                // Hide compare error modal
                emitter.emit('closeCompareErrorModal')

                // Set identical options
                store.setIdenticalOptions()

                // Set Min/Max value
                store.setMinMaxValue()
            } else {
                // Limit is exceeded
                e.preventDefault()

                // Show compare error modal
                emitter.emit('showCompareErrorModal')
            }
        }
    }
</script>



<style scope>
    .rating .validator
    {
        display: flex;

        transition: background .2s linear;
        white-space: nowrap;

        justify-content: flex-start;
        align-items: stretch;
        align-content: stretch;
        flex-wrap: nowrap;
    }

    .rating .validator + .validator
    {
        border-top: 1px solid rgba(255, 255, 255, .05);
    }

    .rating .validator:hover
    {
        background: #141414;
    }

    .rating .validator.pinned
    {
        background: rgba(149, 15, 255, .2);
    }


    .rating .validator > *
    {
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;

        display: flex;

        padding: 5px 14px;

        text-align: center;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .rating .validator > * + *
    {
        border-left: 1px solid rgba(255, 255, 255, .05);
    }

    .rating .validator > *.hide
    {
        display: none !important;
    }


    .rating .validator .col_score
    {
        cursor: pointer;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
    }

    .rating .validator .col_score > *
    {
        pointer-events: none;
    }


    .rating .validator .col_moniker
    {
        color: currentColor;
        font-size: 12px;
        line-height: 15px;

        text-align: left;
        text-decoration: none;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: nowrap;
    }


    .rating .validator .col_moniker .power
    {
        font-size: 12px;
        font-weight: 500;
        line-height: 34px;

        position: relative;
        z-index: 3;

        display: block;

        width: 34px;
        height: 34px;
        margin-right: 12px;

        text-align: center;
    }

    .rating .validator .col_moniker .power svg
    {
        color: #464646;

        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;

        display: block;

        width: 100%;
        height: 100%;
    }

    .rating .validator .col_moniker .power svg.green
    {
        color: #1bc562;
    }


    .rating .validator .col_moniker .logo
    {
        position: relative;

        display: flex;
        overflow: hidden;

        width: 24px;
        min-width: 24px;
        height: 24px;
        margin-right: 8px;

        border-radius: 50%;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .rating .validator .col_moniker .logo img
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

    .rating .validator .col_moniker .logo img.hide
    {
        display: none;
    }

    .rating .validator .col_moniker .logo .icon
    {
        display: none;

        width: 16px;
        height: 16px;
    }

    .rating .validator .col_moniker .logo img.hide + .icon
    {
        display: block;
    }

    .rating .validator .col_moniker .logo + *
    {
        display: block;
        overflow: hidden;

        width: calc(100% - 78px);
        max-width: 215px;

        white-space: nowrap;
        text-overflow: ellipsis;
    }


    .rating .validator .checkbox
    {
        display: flex;

        width: 14px;
        height: 14px;
        margin-right: 10px;

        transition: .2s linear;

        border: 1px solid rgba(255, 255, 255, .1);
        border-radius: 2px;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .rating .validator .checkbox svg
    {
        display: block;

        width: 20px;
        height: 19px;

        transition: opacity .2s linear;
        pointer-events: none;

        opacity: 0;
    }


    .rating .validator.pinned .checkbox
    {
        border-color: transparent;
        background: rgba(255, 255, 255, .1);
    }

    .rating .validator.pinned .checkbox svg
    {
        opacity: 1;
    }


    .rating .validator sup
    {
        color: #464646;
        font-size: 10px;
        line-height: 12px;

        display: inline-block;

        vertical-align: top;
    }

    .rating .validator sup.green
    {
        color: #1bc562;
    }

    .rating .validator sup.red
    {
        color: #eb5757;
    }



    .rating .validator.flashing
    {
        animation: flashing .75s cubic-bezier(.075, .820, .165, 1.000) 5;
        animation-delay: .75s;
    }


    @keyframes flashing
    {
        0%
        {
            background: transparent;
        }

        50%
        {
            background: rgba(149, 15, 255, .2);
        }

        100%
        {
            background: transparent;
        }
    }



    @media print, (max-width: 1899px)
    {
        .rating .validator .col_moniker .logo + *
        {
            max-width: none;
        }
    }



    @media print, (max-width: 1359px)
    {
        .rating .validator .col_moniker .logo + *
        {
            max-width: 216px;
        }
    }



    @media print, (max-width: 1279px)
    {
        .rating .validator
        {
            padding: 20px;

            border-radius: 16px;
            background: rgba(255, 255, 255, .05);

            flex-wrap: wrap;
            align-items: flex-start;
            align-content: flex-start;
        }

        .rating .validator + .validator,
        .rating .validator > * + *
        {
            border: none;
        }

        .rating .validator > *
        {
            padding: 0;
        }


        .rating .validator .checkbox
        {
            position: relative;
            top: 1px;
        }


        .rating .validator .col_score
        {
            width: 37.5%;
            min-width: 0;

            justify-content: flex-start;
            order: 1;
        }


        .rating .validator .col_moniker
        {
            width: 62.5%;
            min-width: 0;
            margin-top: 4px;

            justify-content: flex-start;
            order: 3;
            flex-wrap: wrap;
        }

        .rating .validator .col_moniker .logo + *
        {
            max-width: calc(100% - 78px);
        }



        .rating .validator .col_cost,
        .rating .validator .col_decentralization,
        .rating .validator .col_confidence,
        .rating .validator .col_participation,
        .rating .validator .col_reliability,
        .rating .validator .col_total
        {
            width: 37.5%;
            min-width: 0;
            margin-top: 20px;

            text-align: left;

            justify-content: flex-start;
            order: 5;
        }

        .rating .validator .col_confidence,
        .rating .validator .col_total
        {
            width: 25%;
        }


        .rating .validator > *:before
        {
            font-size: 13px;
            font-weight: normal;
            line-height: 17px;

            display: block;

            width: 100%;
            margin-bottom: 8px;

            content: attr(data-column);
            text-align: left;
            letter-spacing: 0;
            text-transform: none;

            opacity: .5;
        }
    }



    @media print, (max-width: 1023px)
    {
        .rating .validator .col_score,
        .rating .validator .col_cost,
        .rating .validator .col_decentralization,
        .rating .validator .col_confidence,
        .rating .validator .col_participation,
        .rating .validator .col_reliability,
        .rating .validator .col_total
        {
            width: 50%;
        }

        .rating .validator .col_moniker
        {
            width: 100%;
            margin-top: 20px;
        }
    }

</style>