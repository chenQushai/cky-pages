<template>
    <div>
        {{message}}
    </div>
</template>

<script setup>
    import {defineProps} from 'vue'
    const props = defineProps({
        message: {
            type: String,
            default: '纠结啊'
        }
    });
</script>

<style scoped>

</style>
