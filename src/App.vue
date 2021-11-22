<template>
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <cky-page :pageConfig="pageConfig"></cky-page>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        data() {
            return {
                pageConfig: {
                    mode: 'justify',//排列方式
                    justify: 'center',//默认采用flex对齐方式
                    align: 'middle',
                    gutter: 10,//块间距
                    pageData: {
                        key: '哈哈哈',
                        key1: "66",
                    },
                    pageDesc:{
                        key: {
                            type: 'el-input',
                            width: 6,
                        },
                        key1: {
                            type: 'el-input',
                            width: 6,
                        }
                    },
                    order: ['key1','key']
                }
            }
        },
        watch: {
            'pageConfig.pageData': {
                handler(value) {
                    console.log(value)
                },
                deep: true
            }
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
