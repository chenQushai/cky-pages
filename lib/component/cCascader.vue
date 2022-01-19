<template>
    <!--级联面板-->
    <el-cascader-panel
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
    import {defineEmits, defineProps, onMounted, ref} from "vue";
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
    const dom = ref(null);
    // 获取选中的节点
    const getCheckedNodes = () => {
        return dom.value.getCheckedNodes();
    }


</script>

<style scoped>

</style>
