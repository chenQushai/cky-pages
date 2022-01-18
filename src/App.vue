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
                        key5: '66',
                        key7: '999',
                        key9: '子集'
                    },
                    pageDesc: {
                        key: {
                            type: 'input',
                            width: 6,
                            attrs: {
                                size: "mini",
                            },
                            slots: {
                                append(h) {
                                    return (<el-select></el-select>)
                                }
                            }
                        },
                        key1: {
                            type: 'input',
                            width: 6,
                        },
                        key2: {
                            type: 'row',
                            width: 24,
                            attrs: {},
                            style: {
                                minHeight: '80px',
                                border: '1px solid red'
                            },
                            children: {
                                key5: {
                                    type: 'row',
                                    width: 12,
                                    attrs: {

                                        style: {
                                            width: '300px',
                                            minHeight: '20px',
                                            backgroundColor: 'blue'
                                        }
                                    },
                                    children: {
                                        key6: {
                                            type: 'col',
                                            attrs: {
                                                span: 6,
                                            },
                                            style: {
                                                minHeight: '20px',
                                                backgroundColor: 'green'
                                            },
                                        },
                                        key9: {
                                            type: 'input',
                                            attrs: {
                                                size: "mini",
                                            },
                                            on: {
                                                change: (val) => {
                                                    console.log(val)
                                                }
                                            }

                                        }
                                    }
                                }
                            }


                        },
                        key7: {
                            type: 'input',
                            width: 6,
                            attrs: {
                                size: "mini",
                            },

                        }
                    },
                    order: ['key', 'key1', 'key2', 'key7']
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
