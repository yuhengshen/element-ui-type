type __VLS_Props = {
    /**
     * 标签文本
     */
    label?: string;
    /**
     * 列的数量
     *
     * @default 1
     */
    span?: number;
    /**
     * 自定义标签类名
     */
    labelClassName?: string;
    /**
     * 自定义内容类名
     */
    contentClassName?: string;
    /**
     * 自定义标签样式
     */
    labelStyle?: Record<string, any>;
    /**
     * 自定义内容样式
     */
    contentStyle?: Record<string, any>;
};
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    label?: (props: typeof __VLS_3) => any;
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
