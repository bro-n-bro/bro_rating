<template>
    <div class="table_head" :class="{ 'with_pinned': store.compareValidators.length }">
        <div class="titles">
            <div class="col_score ASC active" @click="sortData('rank', $event)">
                <span>{{ $t('message.title_col_score') }}</span>

                <svg class="icon"><use xlink:href="/sprite.svg#ic_sort"></use></svg>

                <div class="more_info">
                    <a href="https://github.com/bro-n-bro/bro_rating#bro-score-by-bro_n_bro" target="_blank" rel="noopener nofollow">Get more info</a>
                </div>
            </div>

            <div class="col_moniker" @click="sortData('validator_rank', $event)">
                <span>{{ $t('message.title_col_moniker') }}</span>

                <svg class="icon"><use xlink:href="/sprite.svg#ic_sort"></use></svg>
            </div>

            <div class="col_cost" @click="sortData('cost_optimization', $event)">
                <span>{{ $t('message.title_col_cost') }}</span>

                <svg class="icon"><use xlink:href="/sprite.svg#ic_sort"></use></svg>

                <div class="more_info">
                    <a href="https://github.com/bro-n-bro/bro_rating#cost-optimization" target="_blank" rel="noopener nofollow">Get more info</a>
                </div>
            </div>

            <div class="col_decentralization" @click="sortData('decentralization', $event)">
                <span>{{ $t('message.title_col_decentralization') }}</span>

                <svg class="icon"><use xlink:href="/sprite.svg#ic_sort"></use></svg>

                <div class="more_info">
                    <a href="https://github.com/bro-n-bro/bro_rating#decentralization" target="_blank" rel="noopener nofollow">Get more info</a>
                </div>
            </div>

            <div class="col_confidence" @click="sortData('confidence', $event)">
                <span>{{ $t('message.title_col_confidence') }}</span>

                <svg class="icon"><use xlink:href="/sprite.svg#ic_sort"></use></svg>

                <div class="more_info">
                    <a href="https://github.com/bro-n-bro/bro_rating#confidence" target="_blank" rel="noopener nofollow">Get more info</a>
                </div>
            </div>

            <div class="col_participation" @click="sortData('participation', $event)">
                <span>{{ $t('message.title_col_participation') }}</span>

                <svg class="icon"><use xlink:href="/sprite.svg#ic_sort"></use></svg>

                <div class="more_info">
                    <a href="https://github.com/bro-n-bro/bro_rating#participation" target="_blank" rel="noopener nofollow">Get more info</a>
                </div>
            </div>

            <div class="col_reliability" @click="sortData('reliability', $event)">
                <span>{{ $t('message.title_col_reliability') }}</span>

                <svg class="icon"><use xlink:href="/sprite.svg#ic_sort"></use></svg>

                <div class="more_info">
                    <a href="https://github.com/bro-n-bro/bro_rating#reliability" target="_blank" rel="noopener nofollow">Get more info</a>
                </div>
            </div>

            <div class="col_total" @click="sortData('total', $event)">
                <span>{{ $t('message.title_col_total') }}</span>

                <svg class="icon"><use xlink:href="/sprite.svg#ic_sort"></use></svg>

                <div class="more_info">
                    <a href="https://github.com/bro-n-bro/bro_rating#bro-score-by-bro_n_bro" target="_blank" rel="noopener nofollow">Get more info</a>
                </div>
            </div>
        </div>

        <div class="pinned_items" v-show="store.compareValidators.length">
            <svg class="icon" @click.prevent="clearCompare"><use xlink:href="/sprite.svg#ic_pin"></use></svg>

            <div class="val">
                <button class="btn pinned_btn" v-for="(validator, index) in store.compareValidators" :key="index"
                    @click.prevent="store.removeFromCompare(validator[getParamIndex('opeartor_address')])">
                    <span>{{ validator[getParamIndex('moniker')] }}</span>
                    <svg><use xlink:href="/sprite.svg#ic_close"></use></svg>
                </button>

                <!-- Compare link -->
                <router-link to="/compare" class="compare_btn" v-if="store.compareValidators.length > 1">{{ $t('message.compare_btn') }}</router-link>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { useGlobalStore } from '@/stores'

    const store = useGlobalStore()


    // Get param index from schema
    function getParamIndex(columnName) {
        let index = store.ratingData.schema.indexOf(columnName)

        return index
    }


    // Clear compare
    function clearCompare() {
        let validators = document.querySelectorAll('.rating .validator')

        // Clear array
        store.compareValidators = []

        // Remove classes
        validators.forEach(el => el.classList.remove('pinned'))
    }


    function sortData(column, event) {
        // Set direction
        let direction = event.target.classList.contains('ASC') ? 'DESC' : 'ASC'

        // Change class
        document.querySelectorAll('.titles > *').forEach(el => el.classList.remove('active'))

        event.target.classList.remove('ASC', 'DESC')
        event.target.classList.add(direction, 'active')

        // Updates logos
        document.querySelectorAll('.rating .validator .col_moniker .logo img').forEach(el => {
            el.classList.remove('hide', 'loaded')
            el.removeAttribute('src')
        })

        // Sorting
        store.sortData(getParamIndex(column), direction)
    }
</script>



<style scoped>
    .table_head
    {
        position: relative;
        z-index: 3;

        padding-right: 12px;

        border-radius: 10px;
        background: #141414;
    }

    .table_head.with_pinned
    {
        border-radius: 10px 10px 0 0;
    }


    .titles
    {
        font-size: 12px;
        line-height: 15px;

        display: flex;

        padding: 10px 0;

        justify-content: flex-start;
        align-items: stretch;
        align-content: stretch;
        flex-wrap: nowrap;
    }


    .titles > *
    {
        position: relative;
        z-index: 3;

        display: flex;

        padding: 8px 14px;

        cursor: pointer;
        text-align: center;
        white-space: nowrap;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: nowrap;
    }

    .titles > * + *
    {
        border-left: 1px solid transparent;
    }

    .titles > * > *
    {
        pointer-events: none;
    }

    .titles > *.hide
    {
        display: none !important;
    }


    .titles > * .icon
    {
        display: block;

        width: 16px;
        height: 16px;
        margin-left: 6px;

        transition: color .2s linear;
    }

    .titles > *.active .icon
    {
        color: #950fff;
    }


    .titles .col_numb,
    .titles .col_moniker
    {
        justify-content: flex-start;
    }

    .titles .col_rank
    {
        justify-content: center;
    }


    .titles .more_info
    {
        font-size: 10px;
        line-height: 12px;

        position: absolute;
        top: 100%;
        right: 0;
        left: 0;

        width: 100px;
        margin: auto;

        transition: .2s linear;
        transform: translateY(32px);
        text-align: center;
        pointer-events: none;

        opacity: 0;
        border-radius: 10px;
        background: #282828;
    }

    .titles .more_info:before
    {
        position: absolute;
        bottom: 100%;
        left: 0;

        display: block;

        width: 100%;
        height: 12px;

        content: '';
    }

    .titles > *:hover .more_info
    {
        transform: translateY(12px);
        pointer-events: auto;

        opacity: 1;
    }

    .titles > * .more_info a
    {
        color: currentColor;

        display: block;

        padding: 8px 12px;

        transition: color .2s linear;
    }

    .titles > * .more_info a:hover
    {
        color: #950fff;
    }



    .pinned_items
    {
        display: flex;

        padding: 3px 10px 4px;

        border-top: 1px solid rgba(255, 255, 255, .05);

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .with_pinned .pinned_items
    {
        display: flex;
    }


    .pinned_items .icon
    {
        color: #464646;

        display: block;

        width: 24px;
        height: 24px;
        margin-right: 10px;

        cursor: pointer;
    }


    .pinned_items .val
    {
        display: flex;

        width: calc(100% - 24px);
        margin-bottom: -10px;
        margin-left: -10px;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .pinned_items .btn
    {
        font-size: 14px;

        display: flex;

        max-width: 100%;
        margin-bottom: 10px;
        margin-left: 10px;
        padding: 7px 9px;

        white-space: nowrap;

        border: 1px solid #950fff;
        border-radius: 10px;
        background: #1a1420;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: nowrap;
    }

    .pinned_items .btn > *
    {
        pointer-events: none;
    }


    .pinned_items .btn span
    {
        position: relative;
        top: -1px;

        display: block;
        overflow: hidden;

        text-overflow: ellipsis;
    }


    .pinned_items .btn svg
    {
        display: block;

        width: 20px;
        min-width: 20px;
        height: 20px;
        margin-left: 6px;
    }


    .rating .compare_btn
    {
        color: currentColor;
        font-size: 14px;
        font-weight: 500;
        line-height: 36px;

        width: 100px;
        height: 36px;
        margin-bottom: 10px;
        margin-left: 10px;

        transition: background .2s linear;
        text-align: center;
        text-decoration: none;

        border-radius: 12px;
        background: #950fff;
    }

    .rating .compare_btn:hover
    {
        background: #7700e1;
    }



    @media print, (max-width: 1279px)
    {
        .titles
        {
            display: none;
        }


        .table_head
        {
            padding-right: 0;
        }

        .table_head.with_pinned
        {
            padding: 6px 0 6px 10px;

            border-radius: 10px;
        }


        .pinned_items
        {
            border: none;
            border-radius: 8px;
        }


        .pinned_items .btn span
        {
            max-width: 200px;
        }
    }



    @media print, (max-width: 767px)
    {
        .pinned_items .btn span
        {
            max-width: 140px;
        }
    }



    @media print, (max-width: 479px)
    {
        .pinned_items .btn
        {
            font-size: 12px;

            padding: 7px;
        }

        .pinned_items .btn span
        {
            top: 0;

            max-width: none;
        }
    }

</style>