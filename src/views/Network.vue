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

                    <!-- Add to compare -->
                    <button class="compare_btn">{{ $t('message.compare_btn') }}</button>
                </div>

                <!-- Table head -->
                <TableHead />

                <div class="list">
                    <!-- Validator -->
                    <Validator v-for="(validator, index) in store.ratingData.result" :key="index" :validator="validator" :schema="store.ratingData.schema" />
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    import { onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import { useGlobalStore } from '@/stores'


    // Components
    import Search from '../components/Search.vue'
    import Validator from '../components/RatingValidator.vue'
    import TableHead from '../components/RatingTableHead.vue'


    const route = useRoute(),
        store = useGlobalStore()


    onMounted(async () => {
        // Get rating data
        if(typeof store.ratingData.last_update == 'undefined') {
            await store.getRatingData()
        }
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
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;

        width: 100px;
        height: 45px;
        margin-left: 10px;

        transition: background .2s linear;

        border-radius: 12px;
        background: #141414;
    }

    .rating .compare_btn:hover
    {
        background: #950fff;
    }



    .rating .col_numb
    {
        width: 88px;
        min-width: 88px;
    }

    .rating .col_rank,
    .rating .col_identity,
    .rating .col_website,
    .rating .col_security,
    .rating .col_proposals,
    .rating .col_result
    {
        width: 80px;
        min-width: 80px;
    }

    .rating .col_moniker
    {
        width: 100%;
    }

    .rating .col_tokens,
    .rating .col_self_delegation,
    .rating .col_min_self_del,
    .rating .col_tokens_bluring,
    .rating .col_commission_rate,
    .rating .col_pre_commits
    {
        width: 120px;
        min-width: 120px;
    }

</style>

