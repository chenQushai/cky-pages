<template>
    <el-row
        v-bind="attrs"
        :style="style"
        :class="classed"
    >
        <!--modifier修饰符后续完成-->
        <renderChildItem
            v-if="children"
            :key="filId"
            v-for="(c,filId) of children"
            :config="c"
            :filId="filId"
        >
        </renderChildItem>
    </el-row>
</template>

<script setup>
    import {defineProps} from 'vue'
    //函数式组件
    import ExtendSlot from '../ExtendSlot'
    import renderChildItem from '../renderChildItem'
    const props = defineProps({
        attrs: {
            type: Object
        },
        slots: {
            type: Object,
            default: () => {
            }
        },
        style: {
            type: [Object, Array],
            default: () => {}
        },
        classed: {
            type: [Object, Array],
            default: () => {}
        },
        children: {
            type: Object,
            default: () => {}
        }
    })
</script>

<style scoped>

</style>
