type __VLS_Props = {
    /**
     * 栅格间隔
     * @default 0
     */
    gutter?: number;
    /**
     * 布局模式，可选 flex，现代浏览器下有效
     */
    type?: "flex";
    /**
     * flex 布局下的水平排列方式
     * @default start
     */
    justify?: "start" | "end" | "center" | "space-around" | "space-between";
    /**
     * flex 布局下的垂直排列方式
     */
    align?: "top" | "middle" | "bottom";
    /**
     * 自定义元素标签
     * @default div
     */
    tag?: string;
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
