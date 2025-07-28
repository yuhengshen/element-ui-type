export type Placement = "top" | "top-start" | "top-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | "right" | "right-start" | "right-end";
type __VLS_Props = {
    /**
     * 触发方式
     *
     * @default "click"
     */
    trigger?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 显示的内容，也可以通过 slot 传入 DOM
     */
    content?: string;
    /**
     * 宽度
     */
    width?: string | number;
    /**
     * 出现位置
     *
     * @default "bottom"
     */
    placement?: Placement;
    /**
     * Popover 是否可用
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * 状态是否可见
     *
     * @default false
     */
    value?: boolean;
    /**
     * 出现位置的偏移量
     *
     * @default 0
     */
    offset?: number;
    /**
     * 定义渐变动画
     *
     * @default "fade-in-linear"
     */
    transition?: string;
    /**
     * 是否显示 Tooltip 箭头
     *
     * @default true
     */
    visibleArrow?: boolean;
    /**
     * popper.js 的参数
     */
    popperOptions?: object;
    /**
     * 为 popper 添加类名
     */
    popperClass?: string;
    /**
     * 触发方式为 hover 时的显示延迟，单位为毫秒
     */
    openDelay?: number;
    /**
     * 触发方式为 hover 时的隐藏延迟，单位为毫秒
     *
     * @default 200
     */
    closeDelay?: number;
    /**
     * Popover 组件的 tabindex
     *
     * @default 0
     */
    tabindex?: number;
};
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    reference?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    show: () => void;
    "after-enter": () => void;
    hide: () => void;
    "after-leave": () => void;
}, string, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>>, {}>;
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
