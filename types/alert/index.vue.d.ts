type __VLS_Props = {
    /** 标题 */
    title?: string;
    /**
     * 主题
     * @default info
     */
    type?: "success" | "warning" | "info" | "error";
    /** 辅助性文字。也可通过默认 slot 传入 */
    description?: string;
    /**
     * 是否可关闭
     * @default true
     */
    closable?: boolean;
    /**
     * 文字是否居中
     * @default true
     */
    center?: boolean;
    /** 关闭按钮自定义文本 */
    closeText?: string;
    /**
     * 是否显示图标
     * @default false
     */
    showIcon?: boolean;
    /**
     * 选择提供的主题
     * @default light
     */
    effect?: string;
};
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    title?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: () => void;
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
