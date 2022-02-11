import {resolveDynamicComponent, inject, ref, provide} from 'vue'
// JSX语法：https://github.com/vuejs/jsx-next#installation
export default (props, context) => {
    // console.log(props)
    // console.log(context)
    //解析动态组件：https://vue-docs-next-zh-cn.netlify.app/guide/render-function.html#component-%E5%92%8C-is
    const Component = resolveDynamicComponent(`c-${props.config.type}`);
    //获取到主页面拿来的页面数据
    let pageData = inject('pageData');
    let pageConfig = inject('pageConfig');
    const filId = ref(null); //当前组件实例

    //添加当前组件实例,将自动暴漏给外层，以便外层使用组件实例
    Reflect.set(pageConfig.childrenInstance, props['filId'], filId);
    return (
        <Component
            ref={filId}
            style={props.config.style}
            classed={props.config.class}
            v-model={[pageData[props['filId']], 'value']}
            slot={props.config.slots}
            attrs={props.config.attrs}
            children={props.config.children}
            on={props.config.on ? props.config.on : {}}
        >
        </Component>
    )
}
