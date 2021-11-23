import {h} from 'vue'
// 用于处理插槽
export default {
    name: 'ExtendSlot',
    functional: true,
    props: {
        render: Function,
        data: Object,
        innerHTML: Array || String || Function
    },
    render: (context) => {
        console.log(context)
        return context.$props.render(h)
    }
}
