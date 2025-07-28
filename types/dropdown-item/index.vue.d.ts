type __VLS_Props = {
    /**
     * 指令
     */
    command?: string | number | object;
    /**
     * 禁用
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * 显示分割线
     *
     * @default false
     */
    divided?: boolean;
    /**
     * 图标类名
     */
    icon?: string;
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
