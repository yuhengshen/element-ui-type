type __VLS_Props = {
    /**
     * 栅格占据的列数
     * @default 24
     */
    span?: number;
    /**
     * 栅格左侧的间隔格数
     * @default 0
     */
    offset?: number;
    /**
     * 栅格向右移动格数
     * @default 0
     */
    push?: number;
    /**
     * 栅格向左移动格数
     * @default 0
     */
    pull?: number;
    /**
     * 自定义元素标签
     * @default div
     */
    tag?: string;
    /**
     * <768px 响应式栅格数或者栅格属性对象
     */
    xs?: number | {
        span?: number;
        offset?: number;
        push?: number;
        pull?: number;
    };
    /**
     * ≥768px 响应式栅格数或者栅格属性对象
     */
    sm?: number | {
        span?: number;
        offset?: number;
        push?: number;
        pull?: number;
    };
    /**
     * ≥992px 响应式栅格数或者栅格属性对象
     */
    md?: number | {
        span?: number;
        offset?: number;
        push?: number;
        pull?: number;
    };
    /**
     * ≥1200px 响应式栅格数或者栅格属性对象
     */
    lg?: number | {
        span?: number;
        offset?: number;
        push?: number;
        pull?: number;
    };
    /**
     * ≥1920px 响应式栅格数或者栅格属性对象
     */
    xl?: number | {
        span?: number;
        offset?: number;
        push?: number;
        pull?: number;
    };
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
