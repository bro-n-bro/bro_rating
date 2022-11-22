<template>
    <header class="absolute">
        <div class="cont row">
            <a href="https://bronbro.io" class="logo">
                <img src="/logo.svg" alt="">
            </a>
        </div>
    </header>
</template>


<style scoped>
    header
    {
        position: absolute;
        z-index: 20;
        top: 0;
        left: 0;

        width: 100%;
        margin: 0;
        padding: 20px 0;
    }


    header .cont
    {
        padding-top: 11px;
        padding-bottom: 11px;

        justify-content: space-between;
        align-items: center;
        align-content: center;
    }



    header .logo
    {
        color: currentColor;

        display: block;

        text-decoration: none;
    }

    header .logo img
    {
        display: block;
    }



    header .notifications
    {
        width: calc(100% - 519px);
        margin-right: auto;
        margin-left: auto;
    }

</style>