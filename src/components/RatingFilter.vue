<template>
    <div class="filter" v-click-out="clickOut">
        <button class="btn" @click.prevent="showDropdown = !showDropdown" :class="{ active: showDropdown }">
            <svg class="icon"><use xlink:href="/sprite.svg#ic_filter"></use></svg>
        </button>

        <div class="dropdown" v-show="showDropdown">
            <div class="title">
                {{ $t('message.filter_title') }}
            </div>

            <button class="btn" @click.prevent="toggleColumn($event, '.col_cost',)" :class="{ identical: store.compareIdenticalOptions['cost_optimization'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_cost') }}</span>
            </button>

            <button class="btn hidden" @click.prevent="toggleColumn($event, '.col_cost2',)" :class="{ identical: store.compareIdenticalOptions['cost_endorsement'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_cost2') }}</span>
            </button>

            <button class="btn" @click.prevent="toggleColumn($event, '.col_decentralization')" :class="{ identical: store.compareIdenticalOptions['decentralization'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_decentralization') }}</span>
            </button>

            <button class="btn hidden" @click.prevent="toggleColumn($event, '.col_decentralization2')" :class="{ identical: store.compareIdenticalOptions['decentralization_endorsement'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_decentralization2') }}</span>
            </button>

            <button class="btn" @click.prevent="toggleColumn($event, '.col_confidence')" :class="{ identical: store.compareIdenticalOptions['confidence'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_confidence') }}</span>
            </button>

            <button class="btn hidden" @click.prevent="toggleColumn($event, '.col_confidence2')" :class="{ identical: store.compareIdenticalOptions['confidence_endorsement'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_confidence2') }}</span>
            </button>

            <button class="btn" @click.prevent="toggleColumn($event, '.col_participation')" :class="{ identical: store.compareIdenticalOptions['participation'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_participation') }}</span>
            </button>

            <button class="btn hidden" @click.prevent="toggleColumn($event, '.col_participation2')" :class="{ identical: store.compareIdenticalOptions['participation_endorsement'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_participation2') }}</span>
            </button>

            <button class="btn" @click.prevent="toggleColumn($event, '.col_reliability')" :class="{ identical: store.compareIdenticalOptions['reliability'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_reliability') }}</span>
            </button>

            <button class="btn hidden" @click.prevent="toggleColumn($event, '.col_reliability2')" :class="{ identical: store.compareIdenticalOptions['reliability_endorsement'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_reliability2') }}</span>
            </button>

            <button class="btn hidden" @click.prevent="toggleColumn($event, '.col_staked')" :class="{ identical: store.compareIdenticalOptions['staked'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_staked') }}</span>
            </button>

            <button class="btn hidden" @click.prevent="toggleColumn($event, '.col_delegator_shares')" :class="{ identical: store.compareIdenticalOptions['delegator_shares'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_delegator_shares') }}</span>
            </button>

            <button class="btn hidden" @click.prevent="toggleColumn($event, '.col_greed')" :class="{ identical: store.compareIdenticalOptions['greed'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_greed') }}</span>
            </button>

            <button class="btn hidden" @click.prevent="toggleColumn($event, '.col_ownership')" :class="{ identical: store.compareIdenticalOptions['ownership'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_ownership') }}</span>
            </button>

            <button class="btn hidden" @click.prevent="toggleColumn($event, '.col_voted')" :class="{ identical: store.compareIdenticalOptions['voted'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_voted') }}</span>
            </button>

            <button class="btn hidden" @click.prevent="toggleColumn($event, '.col_isjailed')" :class="{ identical: store.compareIdenticalOptions['isjailed'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_isjailed') }}</span>
            </button>

            <button class="btn" @click.prevent="toggleColumn($event, '.col_total')" :class="{ identical: store.compareIdenticalOptions['total'] }">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_total') }}</span>
            </button>
        </div>
    </div>
</template>


<script setup>
    import { ref, watchEffect, inject } from 'vue'
    import { useGlobalStore } from '@/stores'

    const store = useGlobalStore(),
        emitter = inject('emitter')

    var showDropdown = ref(false)


    watchEffect(
        () => showDropdown.value = false
    )


    // Сlick element outside
    function clickOut() {
        showDropdown.value = false
    }


    // Toggle visibility of a column
    function toggleColumn(event, columnClass) {
        let columns = document.querySelectorAll(columnClass)

        if (!event.target.classList.contains('hide')) {
            // Toggle class
            event.target.classList.add('hide')

            // Hide column
            columns.forEach(col => col.classList.add('hide'))
        } else {
            // Toggle class
            event.target.classList.remove('hide')

            // Show column
            columns.forEach(col => col.classList.remove('hide'))

            // Cancel "Hide identical options"
            emitter.emit('cancelHideIdenticalOptions')
        }
    }
</script>



<style scoped>
    .filter
    {
        margin-left: 10px;
    }


    .filter > .btn
    {
        display: flex;

        width: 52px;
        height: 45px;

        transition: background .2s linear;

        border-radius: 12px;
        background: #141414;

        justify-content: center;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .filter > .btn .icon
    {
        display: block;

        width: 24px;
        height: 24px;
    }

    .filter > .btn:hover
    {
        background: #950fff;
    }

    .filter > .btn.active
    {
        background: #7700e1;
    }


    .filter .dropdown
    {
        position: absolute;
        z-index: 5;
        top: 100%;
        right: 0;

        overflow: auto;

        width: 360px;
        max-height: calc(100vh - 237px);
        padding: 20px 4px 20px 20px;

        border-radius: 24px;
        background: #0d0d0d;

        overscroll-behavior-y: contain;
    }

    .filter .dropdown::-webkit-scrollbar
    {
        width: 5px;
        height: 5px;
    }


    .filter .dropdown .title
    {
        font-size: 22px;
        font-weight: 500;
        line-height: 28px;

        margin-bottom: 20px;
    }


    .filter .dropdown .btn
    {
        line-height: 19px;

        display: flex;

        width: 100%;
        padding: 10px 6px;

        text-align: left;

        border-radius: 8px;
        background: #141414;

        justify-content: space-between;
        align-items: center;
        align-content: center;
        flex-wrap: wrap;
    }

    .filter .dropdown .btn.hidden
    {
        display: none;
    }

    .filter .dropdown .btn + .btn
    {
        margin-top: 10px;
    }

    .filter .dropdown .btn > *
    {
        pointer-events: none;
    }


    .filter .dropdown .icon
    {
        display: block;

        width: 24px;
        height: 24px;
    }

    .filter .dropdown .icon + .icon
    {
        display: none;
    }

    .filter .dropdown .icon ~ span
    {
        width: calc(100% - 32px);
    }


    .filter .dropdown .hide .icon
    {
        display: none;
    }

    .filter .dropdown .hide .icon + .icon
    {
        display: block;
    }


    .compare .filter
    {
        position: relative;

        margin-left: 0;
    }


    .compare .filter > .btn
    {
        border: 1px solid rgba(255, 255, 255, .1);
    }


    .compare .filter .dropdown
    {
        right: auto;
        left: -10px;

        max-height: 436px;
        margin-top: 10px;

        border-radius: 8px 2px 2px 8px;
    }

    .compare .filter .dropdown .btn.hidden
    {
        display: flex;
    }



    @media print, (max-width: 1439px)
    {
        .filter .dropdown
        {
            width: 320px;
        }


        .filter .dropdown .title
        {
            font-size: 20px;
            line-height: 26px;
        }


        .filter .dropdown .btn + .btn
        {
            margin-top: 6px;
        }


        .compare .filter .dropdown
        {
            max-height: 365px;
        }
    }



    @media print, (max-width: 1279px)
    {
        .filter .dropdown .title
        {
            font-size: 19px;
            line-height: 25px;
        }
    }



    @media print, (max-width: 1023px)
    {
        .filter .dropdown .title
        {
            font-size: 18px;
            line-height: 24px;
        }
    }



    @media print, (max-width: 767px)
    {
        .filter .dropdown .title
        {
            font-size: 17px;
            line-height: 23px;

            margin-bottom: 16px;
        }
    }



    @media print, (max-width: 479px)
    {
        .filter .dropdown
        {
            width: 287px;
            padding-left: 10px;
        }

        .compare .filter .dropdown
        {
            max-height: 309px;
        }
    }

</style>