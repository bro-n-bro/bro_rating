<template>
    <div class="filter" v-click-out="clickOut">
        <button class="btn" @click.prevent="showDropdown = !showDropdown" :class="{ active: showDropdown }">
            <svg class="icon"><use xlink:href="/sprite.svg#ic_filter"></use></svg>
        </button>

        <div class="dropdown" v-show="showDropdown">
            <div class="title">
                {{ $t('message.filter_title') }}
            </div>

            <button class="btn" @click.prevent="toggleColumn($event, '.col_cost',)">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_cost') }}</span>
            </button>

            <button class="btn" @click.prevent="toggleColumn($event, '.col_decentralization')">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_decentralization') }}</span>
            </button>

            <button class="btn" @click.prevent="toggleColumn($event, '.col_confidence')">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_confidence') }}</span>
            </button>

            <button class="btn" @click.prevent="toggleColumn($event, '.col_participation')">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_participation') }}</span>
            </button>

            <button class="btn" @click.prevent="toggleColumn($event, '.col_reliability')">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_reliability') }}</span>
            </button>

            <button class="btn" @click.prevent="toggleColumn($event, '.col_total')">
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye"></use></svg>
                <svg class="icon"><use xlink:href="/sprite.svg#ic_eye2"></use></svg>
                <span>{{ $t('message.title_col_total') }}</span>
            </button>
        </div>
    </div>
</template>


<script setup>
    import { ref, watchEffect } from 'vue'
    import { useGlobalStore } from '@/stores'

    const store = useGlobalStore()

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
            columns.forEach(col => col.style.display = 'none')
        } else {
            // Toggle class
            event.target.classList.remove('hide')

            // Show column
            columns.forEach(col => col.style.display = 'flex')
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

</style>