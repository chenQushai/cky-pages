import {h} from 'vue'
// 用于处理插槽
export default {
    name: 'ExtendSlot',
    functional: true,
    props: {
        render: Function,
        data: Object,
    },
    render: (props) => {
        console.log(props)
        return props.$props.render(props.data)
    }
}
