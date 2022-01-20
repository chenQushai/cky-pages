<template>
    <!--级联面板-->
    <el-cascader-panel
        ref="panel"
        v-if="attrs.type === 'panel'"
        v-model="value"
        v-bind="attrs"
        :class="classed"
        :style="style"
        v-on="on"
        @change="emitData">
        <template v-for="(render, key) of slots" #[key]="{node,data}">
            <extend-slot :key="key" :render="render" :data="data"/>
        </template>
    </el-cascader-panel>

    <el-cascader
        ref="dom"
        v-else
        v-model="value"
        v-bind="attrs"
        :class="classed"
        :style="style"
        v-on="on"
        @change="emitData"
    >
        <template v-for="(render, key) of slots" #[key]="{node,data}">
            <extend-slot :key="key" :render="render" :data="data"/>
        </template>
    </el-cascader>
</template>

<script setup>
    import {defineEmits, defineExpose, defineProps, onMounted, ref} from "vue";
    import ExtendSlot from '../ExtendSlot'

    const emit = defineEmits(['update:value'])
    const emitData = () => {
        emit('update:value', props.value)
    };
    const props = defineProps({
        value: {
            type: Array,
        },
        attrs: {
            type: [Object, Array],
            default: () => {
            }
        },
        style: {
            type: [Object, Array],
            default: () => {
            }
        },
        classed: {
            type: [Object, Array],
            default: () => {
            }
        },
        on: {
            type: Object,
            default: () => {
            }
        },
        slots: {
            type: Object,
            default: () => {
            }
        }
    });
    //级联实例
    const dom = ref(null);
    //块级联动实例
    const panel = ref(null);
    // 获取级联选中的节点
    const getCheckedNodes = () => {
        return dom.value.getCheckedNodes();
    };
    //获取块级选中节点数据
    const getPanelCheckedNodes = () => {
        return panel.value.getCheckedNodes()
    };
    //清空块级选中节点
    const clearPanelCheckedNodes = () => {
        return panel.value.clearCheckedNodes();
    };
    //将属性暴漏出去，以供外部使用
    defineExpose({
        getCheckedNodes,
        getPanelCheckedNodes,
        clearPanelCheckedNodes
    })
</script>

<style scoped>

</style>
