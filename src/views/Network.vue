<template>
    <section class="rating">
        <div class="cont">
            <div class="data">
                <div class="head animate fadeInUp" v-animate>
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

                    <!-- Compare link -->
                    <router-link to="/compare" class="compare_btn" v-if="store.compareValidators.length > 1">{{ $t('message.compare_btn') }}</router-link>
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

        margin-bottom: 20px;

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



    .rating .compare_btn
    {
        color: currentColor;
        font-size: 14px;
        font-weight: 500;
        line-height: 45px;

        width: 100px;
        height: 45px;
        margin-left: 10px;

        transition: background .2s linear;
        text-align: center;
        text-decoration: none;

        border-radius: 12px;
        background: #141414;
    }

    .rating .compare_btn:hover
    {
        background: #950fff;
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
        max-height: calc(100vh - 357px);
    }

</style>

