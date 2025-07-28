type __VLS_Props = {
    /**
     * 是否使用动画
     *
     * @default false
     */
    animated?: boolean;
    /**
     * 渲染多少个 template, 建议使用尽可能小的数字
     *
     * @default 1
     */
    count?: number;
    /**
     * 是否显示 skeleton 骨架屏
     *
     * @default true
     */
    loading?: boolean;
    /**
     * 骨架屏段落数量
     *
     * @default 4
     */
    rows?: number;
    /**
     * 延迟占位 DOM 渲染的时间, 单位是毫秒
     *
     * @default 0
     */
    throttle?: number;
};
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    template?: (props: typeof __VLS_3) => any;
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
