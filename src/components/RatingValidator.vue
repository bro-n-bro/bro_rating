<template>
    <!-- <pre>{{ props.validator }}</pre> -->
    <!-- <pre>{{ props.schema }}</pre> -->

    <div class="validator">
        <div class="col_numb">
            <label class="checkbox" @click="addCheck($event, getValidatorInfo('opeartor_address'))">
                <input type="checkbox" name="">

                <div class="check">
                    <svg><use xlink:href="/sprite.svg#ic_check"></use></svg>
                </div>
            </label>

            <span>
                {{ getValidatorInfo('rank') }}
                <sup :class="{ 'green': getValidatorInfo('diff') > 0, 'red': getValidatorInfo('diff') < 0 }">{{ getValidatorInfo('diff') }}</sup>
            </span>
        </div>

        <div class="col_rank">
            <div>{{ getValidatorInfo('rank') }}</div>
        </div>

        <div class="col_moniker">
            <div class="logo">
                <img src="images/tmp/.jpg" alt="">
            </div>
            <div>{{ getValidatorInfo('moniker') }}</div>
        </div>

        <div class="col_proposals">
            <span>{{ getValidatorInfo('proposals') }}</span>
        </div>

        <div class="col_identity">
            <span>{{ getValidatorInfo('identity') }}</span>
        </div>

        <div class="col_website">
            <span>{{ getValidatorInfo('website') }}</span>
        </div>

        <div class="col_security">
            <span>{{ getValidatorInfo('security') }}</span>
        </div>

        <div class="col_tokens">
            <span>{{ getValidatorInfo('tokens') }}</span>
        </div>

        <div class="col_self_delegation">
            <span>{{ getValidatorInfo('self_delegation') }}</span>
        </div>

        <div class="col_min_self_del">
            <span>{{ getValidatorInfo('min_self_del') }}</span>
        </div>

        <div class="col_commission_rate">
            <span>{{ getValidatorInfo('commission_rate') }}</span>
        </div>

        <div class="col_pre_commits">
            <span>{{ getValidatorInfo('pre_commits') }}</span>
        </div>

        <div class="col_tokens_bluring">
            <span>{{ getValidatorInfo('tokens_bluring') }}</span>
        </div>

        <div class="col_result">
            <span>{{ getValidatorInfo('result') }}</span>
        </div>
    </div>
</template>


<script setup>
    import { inject } from 'vue'
    import { useGlobalStore } from '@/stores'


    const props = defineProps(['validator', 'schema']),
        store = useGlobalStore(),
        emitter = inject('emitter')


    function getValidatorInfo(columnName) {
        let index = props.schema.indexOf(columnName)

        return props.validator[index]
    }


    function addCheck(e, valoper) {
        if (e.target.classList.contains('checkbox')) {
            let validator = e.target.closest('.validator')

            if (store.compareValidators.length < store.compareLimit || validator.classList.contains('pinned')) {
                if (!validator.classList.contains('pinned')) {
                    // Add class
                    validator.classList.add('pinned')

                    // Add to compare
                    store.addToCompare(valoper)
                } else {
                    // Remove class
                    validator.classList.remove('pinned')

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



<style>
    .rating .list
    {
        overflow: auto;

        max-height: calc(100vh - 317px);
        padding-right: 4px;

        flex: 1 0 auto;
        overscroll-behavior-y: contain;
    }

    .rating .with_pinned + .list
    {
        max-height: calc(100vh - 356px);
    }


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

        justify-content: flex-end;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .rating .validator > * + *
    {
        border-left: 1px solid rgba(255, 255, 255, .05);
    }


    .rating .validator .col_numb
    {
        justify-content: flex-start;
        align-items: center;
        align-content: center;
    }


    .rating .validator .col_rank
    {
        justify-content: center;
    }

    .rating .validator .col_rank div
    {
        font-size: 12px;
        font-weight: 500;
        line-height: 32px;

        display: block;

        width: 32px;
        height: 32px;
        margin: auto;

        text-align: center;

        background: url(../assets/images/bg_rank.svg) 50%/100% 100% no-repeat;
    }


    .rating .validator .col_moniker
    {
        font-size: 12px;
        line-height: 15px;

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
        margin-right: 4px;

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
        width: 14px;
        height: 14px;
        margin-right: 10px;

        cursor: pointer;
    }

    .rating .validator .checkbox input
    {
        display: none;
    }

    .rating .validator .checkbox .check
    {
        display: flex;

        width: 14px;
        height: 14px;

        transition: .2s linear;
        pointer-events: none;

        border: 1px solid rgba(255, 255, 255, .1);
        border-radius: 2px;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .rating .validator .checkbox .check svg
    {
        display: block;

        width: 20px;
        height: 19px;

        transition: opacity .2s linear;

        opacity: 0;
    }

    .rating .validator .checkbox input:checked + .check
    {
        border-color: transparent;
        background: rgba(255, 255, 255, .1);
    }

    .rating .validator .checkbox input:checked + .check svg
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

</style>