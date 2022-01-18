<template>
    <el-input
        :class="classed"
        :style="style"
        v-model="value"
        @input="emitData"
        v-bind="attrs"
        v-on="on"
    >
        <template v-for="(render, key) of slots" #[key]>
            <extend-slot :key="key" :render="render" />
        </template>
    </el-input>
</template>

<script setup>
    import {defineEmits, defineProps} from 'vue'
    import ExtendSlot from '../ExtendSlot'
    const props = defineProps({
        value: {
            type: String,
        },
        attrs: {
            type: Object,
            default: () => {}
        },
        classed: {
            type: [Object, Array],
            default: () => {}
        },
        style: {
            type: [Object, Array],
            default: () => {}
        },
        slots: {
            type: Object,
            default: () => {}
        },
        on: {
            type: Object,
            default: () => {}
        }
    });
    const emit = defineEmits(['update:value']);
    //往父级推送数据
    const emitData = () => {
        if (props.attrs?.type === 'number') {
            props.value = Number(props.value)
        }
        emit('update:value', props.value)
    }
</script>

<style scoped>

</style>
