<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <cky-page></cky-page>
    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        data: () => {
            return {
                a: `1454153`,
                message: '56465'
            }
        },
        components: {
            HelloWorld
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
