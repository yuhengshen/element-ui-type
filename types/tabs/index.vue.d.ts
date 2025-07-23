type __VLS_Props = {
    type?: "card" | "border-card";
    activeName?: string;
    closable?: boolean;
    addable?: boolean;
    /**
     * 绑定值，选中选项卡的 name
     */
    value?: string;
    editable?: boolean;
    tabPosition?: "top" | "right" | "bottom" | "left";
    /**
     * 切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。
     */
    beforeLeave?: (activeName: string, oldActiveName: string) => boolean | Promise<any>;
    /**
     * 标签的宽度是否自撑开
     */
    stretch?: boolean;
};
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "tab-click": (vm: any) => void;
    "tab-remove": (targetName: string) => void;
    "tab-add": () => void;
    edit: (targetName: string, action: string) => void;
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
