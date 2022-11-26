<template>
    <!-- <pre>{{ props.validator }}</pre> -->
    <!-- <pre>{{ props.schema }}</pre> -->

    <div class="validator" :class="{ 'pinned': props.validator.pinned }" :id="getValidatorInfo('opeartor_address')">
        <div class="col_score">
            <div class="checkbox" @click.prevent="toggleToCompare($event, getValidatorInfo('opeartor_address'))">
                <svg><use xlink:href="/sprite.svg#ic_check"></use></svg>
            </div>

            <span>
                {{ getValidatorInfo('rank') }}
                <sup :class="{ 'green': getValidatorInfo('diff') > 0, 'red': getValidatorInfo('diff') < 0 }">{{ getValidatorInfo('diff') }}</sup>
            </span>
        </div>

        <div class="col_power">
            <div>{{ Math.floor(getValidatorInfo('validator_rank')) }}</div>
        </div>

        <a :href="`https://www.mintscan.io/cosmos/validators/${getValidatorInfo('opeartor_address')}`" target="_blank" rel="noopener nofollow" class="col_moniker" v-if="store.currentNetwork != 'bostrom'">
            <div class="logo">
                <img :data-src="`https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/${store.currentNetwork}/${getValidatorInfo('opeartor_address')}.png`" alt="" @error="imageLoadError" v-lazyload>
            </div>
            <div>{{ getValidatorInfo('moniker') }}</div>
        </a>

        <a :href="`https://cyb.ai/network/bostrom/hero/${getValidatorInfo('opeartor_address')}`" target="_blank" rel="noopener nofollow" class="col_moniker" v-else>
            <div class="logo">
                <img :data-src="`https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/moniker/${store.currentNetwork}/${getValidatorInfo('opeartor_address')}.png`" alt="" v-lazyload>
            </div>
            <div>{{ getValidatorInfo('moniker') }}</div>
        </a>

        <div class="col_cost">
            <span>{{ $filters.toFixed(getValidatorInfo('cost_endorsement'), 2) }}</span>
        </div>

        <div class="col_decentralization">
            <span>{{ $filters.toFixed(getValidatorInfo('decentralization_endorsement'), 2) }}</span>
        </div>

        <div class="col_confidence">
            <span>{{ $filters.toFixed(getValidatorInfo('confidence_endorsement'), 2) }}</span>
        </div>

        <div class="col_participation">
            <span>{{ $filters.toFixed(getValidatorInfo('participation_endorsement'), 2) }}</span>
        </div>

        <div class="col_reliability">
            <span>{{ $filters.toFixed(getValidatorInfo('reliability_endorsement'), 4) }}</span>
        </div>

        <div class="col_total">
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
        // event.target.src = 'alt-image.jpg'
    }


    // Add/remove to/from compare
    function toggleToCompare(e, valoper) {
        if (e.target.classList.contains('checkbox')) {
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


    .rating .validator .col_score
    {
        justify-content: flex-start;
        align-items: center;
        align-content: center;
    }


    .rating .validator .col_power
    {
        justify-content: center;
    }

    .rating .validator .col_power div
    {
        font-size: 12px;
        font-weight: 500;
        line-height: 34px;

        display: block;

        width: 34px;
        height: 34px;
        margin: auto;

        text-align: center;

        background: url(../assets/images/bg_power.svg) 50%/100% 100% no-repeat;
    }


    .rating .validator .col_moniker
    {
        color: currentColor;
        font-size: 12px;
        line-height: 15px;

        text-decoration: none;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: nowrap;
    }


    .rating .validator .col_moniker .logo
    {
        position: relative;

        overflow: hidden;

        width: 24px;
        min-width: 24px;
        height: 24px;
        margin-right: 8px;

        border-radius: 50%;
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


    .rating .validator .checkbox
    {
        display: flex;

        width: 14px;
        height: 14px;
        margin-right: 10px;

        cursor: pointer;
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

</style>