<template>
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <cky-page ref="page" :pageConfig="pageConfig"></cky-page>
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import {getCurrentInstance,inject} from 'vue'
    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        data() {
            return {
                pageConfig: {
                    mode: '',//排列方式
                    justify: 'center',//默认采用flex对齐方式
                    align: 'middle',
                    gutter: 10,//块间距
                    pageData: {
                        key: '哈哈哈',
                        key1: "66",
                        key5: '66',
                        key6: '',
                        key7: [],
                        key9: '子集'
                    },
                    childrenInstance: {

                    },
                    pageDesc: {
                        key: {
                            type: 'input',
                            attrs: {
                                size: "mini",
                            },
                            style: {
                                width: '176px'
                            },

                        },
                        key1: {
                            type: 'input',
                        },
                        key6: {
                            type: 'row',
                            style: {
                                minHeight: '80px'
                            },
                            children: {
                                key7: {
                                    type: 'cascader',
                                    ref: 'yy',
                                    attrs: {
                                        size: "mini",
                                        filterable: true,
                                        options: [
                                            {
                                                value: 'guide',
                                                label: 'Guide',
                                                disabled: true,
                                            },
                                            {
                                                value: 'navigation',
                                                label: 'Navigation',
                                                children: [
                                                    {
                                                        value: 'side nav',
                                                        label: 'Side Navigation',
                                                    },
                                                    {
                                                        value: 'top nav',
                                                        label: 'Top Navigation',
                                                    },
                                                ],
                                            }
                                        ],
                                    },
                                    style: {
                                        marginTop: '8px'
                                    },
                                }
                            }
                        },
                    },
                    order: ['key', 'key1', 'key6'],//排序只针对与最外层同级元素
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
        },
        mounted() {
            //拿到了实例方法
            console.log(this.pageConfig.childrenInstance)
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
