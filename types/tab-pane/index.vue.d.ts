type __VLS_Props = {
    /**
     * 选项卡标题
     */
    label?: string;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 与选项卡绑定值 value 对应的标识符，表示选项卡别名
     */
    name?: string;
    /**
     * 标签是否延迟渲染
     */
    lazy?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>>, {}>;
export default _default;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<Required<T>[K]>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
