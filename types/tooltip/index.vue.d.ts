import { Placement } from "../popover/index.vue";
type __VLS_Props = {
    /**
     * 默认提供的主题
     *
     * @default "dark"
     */
    effect?: "dark" | "light";
    /**
     * 显示的内容，也可以通过 slot#content 传入 DOM
     */
    content?: string;
    /**
     * Tooltip 的出现位置
     *
     * @default "bottom"
     */
    placement?: Placement;
    /**
     * 状态是否可见
     *
     * @default false
     */
    value?: boolean;
    /**
     * Tooltip 是否可用
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * 出现位置的偏移量
     *
     * @default 0
     */
    offset?: number;
    /**
     * 定义渐变动画
     *
     * @default "el-fade-in-linear"
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
     *
     * @default { boundariesElement: 'body', gpuAcceleration: false }
     */
    popperOptions?: object;
    /**
     * 延迟出现，单位毫秒
     *
     * @default 0
     */
    openDelay?: number;
    /**
     * 手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效
     *
     * @default false
     */
    manual?: boolean;
    /**
     * 为 Tooltip 的 popper 添加类名
     */
    popperClass?: string;
    /**
     * 鼠标是否可进入到 tooltip 中
     *
     * @default true
     */
    enterable?: boolean;
    /**
     * Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏
     *
     * @default 0
     */
    hideAfter?: number;
    /**
     * Tooltip 组件的 tabindex
     *
     * @default 0
     */
    tabindex?: number;
};
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    content?: (props: typeof __VLS_3) => any;
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
