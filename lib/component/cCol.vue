<template>
    <el-col
        v-bind="attrs"
        :style="style"
        :class="classed"
    >
        <!--modifier后续完成-->
        <renderChildItem
            v-if="children"
            :key="filId"
            v-for="(c,filId) of children"
            :config="c"
            :filId="filId"
        >
        </renderChildItem>
    </el-col>
</template>

<script setup>
    import {defineProps} from "vue";
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
            type: Object,
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
