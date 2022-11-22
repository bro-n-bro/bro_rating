<template>
    <div class="table_head animate fadeInUp delay" v-animate>
        <div class="titles">
            <div class="col_numb">
                <span>{{ $t('message.title_col_numb') }}</span>
            </div>

            <div class="col_rank">
                <span>{{ $t('message.title_col_rank') }}</span>
            </div>

            <div class="col_moniker">
                <span>{{ $t('message.title_col_moniker') }}</span>
            </div>

            <div class="col_proposals">
                <span>{{ $t('message.title_col_proposals') }}</span>
            </div>

            <div class="col_identity">
                <span>{{ $t('message.title_col_identity') }}</span>
            </div>

            <div class="col_website">
                <span>{{ $t('message.title_col_website') }}</span>
            </div>

            <div class="col_security">
                <span>{{ $t('message.title_col_security') }}</span>
            </div>

            <div class="col_tokens">
                <span>{{ $t('message.title_col_tokens') }}</span>
            </div>

            <div class="col_self_delegation">
                <span>{{ $t('message.title_col_self_delegation') }}</span>
            </div>

            <div class="col_min_self_del">
                <span>{{ $t('message.title_col_min_self_del') }}</span>
            </div>

            <div class="col_commission_rate">
                <span>{{ $t('message.title_col_commission_rate') }}</span>
            </div>

            <div class="col_pre_commits">
                <span>{{ $t('message.title_col_pre_commits') }}</span>
            </div>

            <div class="col_tokens_bluring">
                <span>{{ $t('message.title_col_tokens_bluring') }}</span>
            </div>

            <div class="col_result">
                <span>{{ $t('message.title_col_result') }}</span>
            </div>
        </div>

        <div class="pinned_items" :class="{ 'with_pinned': store.compareValidators.length }" v-show="store.compareValidators.length">
            <svg class="icon"><use xlink:href="/sprite.svg#ic_pin"></use></svg>

            <div class="val"></div>
        </div>
    </div>
</template>


<script setup>
    import { useGlobalStore } from '@/stores'

    const store = useGlobalStore()
</script>



<style scoped>
    .table_head
    {
        padding-right: 12px;

        border-radius: 10px;
        background: #141414;
    }


    .titles
    {
        font-size: 12px;
        line-height: 15px;

        display: flex;
        overflow: hidden;

        padding: 10px 0;

        justify-content: flex-start;
        align-items: stretch;
        align-content: stretch;
        flex-wrap: nowrap;
    }


    .titles > *
    {
        display: flex;

        padding: 8px 14px;

        white-space: nowrap;

        justify-content: flex-end;
        align-items: center;
        align-content: center;
        flex-wrap: nowrap;
    }

    .titles > * + *
    {
        border-left: 1px solid transparent;
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



    .pinned_items
    {
        display: flex;

        padding: 10px;

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
    }


    .pinned_items .val
    {
        display: flex;

        margin-bottom: -10px;
        margin-left: -10px;

        justify-content: flex-start;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }


    .pinned_items .btn
    {
        display: flex;

        margin-bottom: 10px;
        margin-left: 10px;
        padding: 9px;

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

    .pinned_items .btn svg
    {
        display: block;

        width: 20px;
        min-width: 20px;
        height: 20px;
        margin-left: 6px;
    }

</style>