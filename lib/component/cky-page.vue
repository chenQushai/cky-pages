<template>
    <div>
        <el-row :[pageConfig.mode]="pageConfig[pageConfig.mode]" :gutter="pageConfig.gutter">
            <!--<el-col :span="pageItem.width" :key="filId" v-for="(pageItem,filId) in computedPageDesc">-->
            <component
                ref="instance"
                :key="filId"
                v-for="(pageItem,filId) in computedPageDesc"
                :is="`c-${pageItem.type}`"
                :classed="pageItem.class"
                :style="pageItem.style"
                v-model:value="pageConfig.pageData[filId]"
                :slots="pageItem.slots"
                :attrs="pageItem.attrs"
                :on="pageItem.on ? pageItem.on : {}"
                :children="pageItem.children">
            </component>
            <!--</el-col>-->
        </el-row>
    </div>
</template>

<script setup>
    import {defineProps, computed, provide, ref, reactive, onMounted} from 'vue'
    import pageConfigDefault from '../config/pageConfig'

    const props = defineProps({
        pageConfig: {
            type: Object,
            default: () => pageConfigDefault
        }
    });
    //向所有子组件提供页面数据，并且是响应式
    provide('pageData', reactive(props.pageConfig.pageData));
    provide('pageConfig', reactive(props.pageConfig));
    //定义组件实例
    const instance = ref(null);
    // 计算排序后的pageDesc
    const computedPageDesc = computed(() => {
        let orderPageDesc = {};//排序后的页面描述
        if (props.pageConfig.order && props.pageConfig.order.length) { //如果有order
            props.pageConfig.order.forEach((filId) => {
                if (props.pageConfig.pageDesc[filId]) {
                    Reflect.set(orderPageDesc, filId, props.pageConfig.pageDesc[filId]);
                    //添加当前组件实例将自动暴漏给外层，以便外层使用组件实例
                    Reflect.set(props.pageConfig.childrenInstance, filId, instance)
                }
                else {
                    throw new Error('order中定义的key在pageDesc中不存在')
                }
            });

            return orderPageDesc
        }
        else { //无order按照原来序列排列

            //添加当前组件实例,将自动暴漏给外层，以便外层使用组件实例
            orderPageDesc = props.pageConfig.pageDesc;
            for (let key in orderPageDesc) {
                Reflect.set(props.pageConfig.childrenInstance, key, instance)
            }
                return orderPageDesc
        }
    });
</script>

<style lang="scss" scoped>
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
