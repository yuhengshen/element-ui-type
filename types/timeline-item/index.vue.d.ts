type __VLS_Props = {
    /**
     * 时间戳
     */
    timestamp?: string;
    /**
     * 是否隐藏时间戳
     *
     * @default false
     */
    hideTimestamp?: boolean;
    /**
     * 时间戳位置
     *
     * @default 'bottom'
     */
    placement?: 'top' | 'bottom';
    /**
     * 节点类型
     */
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
    /**
     * 节点颜色
     */
    color?: string;
    /**
     * 节点尺寸
     *
     * @default 'normal'
     */
    size?: 'normal' | 'large';
    /**
     * 节点图标
     */
    icon?: string;
};
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    dot?: (props: typeof __VLS_3) => any;
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
