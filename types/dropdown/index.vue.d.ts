type __VLS_Props = {
    /**
     * 菜单按钮类型，同 Button 组件(只在split-button为 true 的情况下有效)
     */
    type?: "primary" | "success" | "warning" | "danger" | "info" | "text";
    /**
     * 菜单尺寸，在split-button为 true 的情况下也对触发按钮生效
     */
    size?: "medium" | "small" | "mini";
    /**
     * 下拉触发元素呈现为按钮组
     *
     * @default false
     */
    splitButton?: boolean;
    /**
     * 菜单弹出位置
     *
     * @default 'bottom-end'
     */
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
    /**
     * 触发下拉的行为
     *
     * @default 'hover'
     */
    trigger?: "hover" | "click";
    /**
     * 是否在点击菜单项后隐藏菜单
     *
     * @default true
     */
    hideOnClick?: boolean;
    /**
     * 展开下拉菜单的延时（仅在 trigger 为 hover 时有效）
     *
     * @default 250
     */
    showTimeout?: number;
    /**
     * 收起下拉菜单的延时（仅在 trigger 为 hover 时有效）
     *
     * @default 150
     */
    hideTimeout?: number;
    /**
     * Dropdown 组件的 tabindex
     *
     * @default 0
     */
    tabindex?: number;
    /**
     * 是否禁用
     *
     * @default false
     */
    disabled?: boolean;
};
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    dropdown?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: () => void;
    command: (command: string | number | object) => void;
    "visible-change": (visible: boolean) => void;
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
