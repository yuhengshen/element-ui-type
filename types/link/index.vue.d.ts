type __VLS_Props = {
    /**
    * 类型
    * @default "primary"
    */
    type?: "primary" | "success" | "warning" | "danger" | "info";
    /**
     * 是否下划线
     * @default true
     */
    underline?: boolean;
    /**
     * 是否禁用状态
     * @default false
     */
    disabled?: boolean;
    /**
     * 原生 href 属性
     */
    href?: string;
    /**
     * 图标类名
     */
    icon?: string;
};
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>>, {}>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<Required<T>[K]>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $scopedSlots: S;
    };
};
