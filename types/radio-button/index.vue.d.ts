type __VLS_Props = {
    /**
     * 绑定值
     */
    value?: string | number | boolean;
    /**
     * Radio 的 value
     */
    label?: string | number | boolean;
    /**
     * 是否禁用
     *
     * @default: false
     */
    disabled?: boolean;
    /**
     * 原生 name 属性
     */
    name?: string;
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
