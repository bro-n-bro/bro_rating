<template>
    <section class="rating">
        <div class="cont">
            <div class="data">
                <div class="head">
                    <!-- Block title -->
                    <div class="block_title">
                        {{ $t('message.rating_block_title') }}
                    </div>

                    <!-- Last update -->
                    <div class="last_update">
                        {{ $t('message.last_updated') }}
                        <timeago :datetime="store.ratingData.last_update || new Date()" autoUpdate />
                    </div>

                    <!-- Search -->
                    <Search />

                    <!-- Filter -->
                    <RatingFilter />
                </div>

                <!-- Table head -->
                <TableHead />

                <div class="list" :class="{ 'mini': store.compareValidators.length }">
                    <!-- Validator -->
                    <Validator v-for="(validator, index) in store.ratingData.result" :key="index" :validator="validator" :schema="store.ratingData.schema" />

                    <!-- Loader -->
                    <Loader v-if="showLoader" />
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { ref, watchEffect } from 'vue'
    import { useRoute } from 'vue-router'
    import { useGlobalStore } from '@/stores'

    // Components
    import Search from '../components/Search.vue'
    import RatingFilter from '../components/RatingFilter.vue'
    import Validator from '../components/RatingValidator.vue'
    import TableHead from '../components/RatingTableHead.vue'


    const route = useRoute(),
        store = useGlobalStore()

    var showLoader = ref(true)


    watchEffect(async () => {
        // Clear compare
        store.compareValidators = []

        // Get data
        await store.getRatingData(store.currentNetwork).then(() => showLoader.value = false)
    })
</script>


<style>
    .rating
    {
        display: flex;
        flex-direction: column;

        width: 1516px;
        max-width: 100%;
        margin: 0 auto 20px;

        flex: 1 0 auto;
    }


    .rating .cont
    {
        display: flex;
        flex-direction: column;

        flex: 1 0 auto;
    }


    .rating .data
    {
        display: flex;
        overflow: hidden;
        flex-direction: column;

        padding: 10px;

        border-radius: 16px;
        background: #0d0d0d;

        flex: 1 0 auto;
    }


    .rating .head
    {
        position: relative;
        z-index: 10;

        display: flex;

        margin-bottom: 7px;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }



    .rating .block_title
    {
        font-size: 30px;
        font-weight: 600;
        line-height: 36px;
    }



    .rating .last_update
    {
        color: #464646;
        line-height: 100%;

        margin-right: auto;
        margin-left: 24px;
    }



    .rating .col_score
    {
        width: 110px;
        min-width: 110px;
    }

    .rating .col_power
    {
        width: 130px;
        min-width: 130px;
    }

    .rating .col_cost,
    .rating .col_decentralization,
    .rating .col_confidence,
    .rating .col_participation,
    .rating .col_reliability,
    .rating .col_total
    {
        width: 162px;
        min-width: 162px;
    }

    .rating .col_moniker
    {
        width: 100%;
    }


    .rating .list
    {
        position: relative;
        z-index: 1;

        overflow: auto;

        max-height: calc(100vh - 296px);
        padding-right: 4px;

        flex: 1 0 auto;
        overscroll-behavior-y: contain;
    }

    .rating .list.mini
    {
        max-height: calc(100vh - 341px);
    }



    @media print, (max-width: 1899px)
    {
        .rating .col_score
        {
            width: 104px;
            min-width: 104px;
        }

        .rating .col_power
        {
            width: 127px;
            min-width: 127px;
        }

        .rating .col_cost
        {
            width: 152px;
            min-width: 152px;
        }

        .rating .col_decentralization
        {
            width: 148px;
            min-width: 148px;
        }

        .rating .col_confidence,
        .rating .col_participation,
        .rating .col_reliability
        {
            width: 124px;
            min-width: 124px;
        }

        .rating .col_total
        {
            width: 100px;
            min-width: 100px;
        }
    }



    @media print, (max-width: 1359px)
    {
        .rating .list,
        .rating .list.mini
        {
            display: flex;
            overflow: visible;

            max-height: none;
            margin-bottom: -10px;
            margin-left: -10px;
            padding-right: 0;

            justify-content: flex-start;
            align-items: flex-start;
            align-content: flex-start;
            flex-wrap: wrap;
        }

        .rating .list.mini
        {
            margin-top: 10px;
        }

        .rating .list > *
        {
            width: calc(33.333% - 10px);
            margin-bottom: 10px;
            margin-left: 10px;
        }

        .rating .list > *.loader_wrap
        {
            width: calc(100% - 10px);
        }
    }


    @media print, (max-width: 1279px)
    {
        .rating .list > *
        {
            width: calc(50% - 10px);
        }
    }


    @media print, (max-width: 1023px)
    {
        .rating .block_title
        {
            font-size: 28px;
            line-height: 34px;
        }


        .rating .last_update
        {
            font-size: 12px;

            position: relative;
            top: 4px;

            margin-left: 20px;
        }


        .rating .validator .col_score,
        .rating .validator .col_power,
        .rating .validator .col_cost,
        .rating .validator .col_decentralization,
        .rating .validator .col_confidence,
        .rating .validator .col_participation,
        .rating .validator .col_reliability,
        .rating .validator .col_total
        {
            width: 50%;
        }
    }



    @media print, (max-width: 767px)
    {
        .rating .block_title
        {
            font-size: 26px;
            line-height: 32px;
        }


        .rating .last_update
        {
            font-size: 13px;

            width: 100%;
            margin-top: 0;
            margin-bottom: 10px;
            margin-left: 0;

            order: 3;
        }


        .rating .list
        {
            margin-left: 0;
        }

        .rating .list > *
        {
            width: 100%;
            margin-left: 0;
        }

        .rating .list > *.loader_wrap
        {
            width: 100%;
        }
    }



    @media print, (max-width: 479px)
    {
        .rating .block_title
        {
            font-size: 24px;
            line-height: 30px;
        }
    }

</style>

