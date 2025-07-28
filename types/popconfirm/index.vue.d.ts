import { ButtonType } from "../button/index.vue";
type __VLS_Props = {
    /**
     * 标题
     */
    title?: string;
    /**
     * 确认按钮文字
     */
    confirmButtonText?: string;
    /**
     * 取消按钮文字
     */
    cancelButtonText?: string;
    /**
     * 确认按钮类型
     *
     * @default "primary"
     */
    confirmButtonType?: ButtonType;
    /**
     * 取消按钮类型
     *
     * @default "text"
     */
    cancelButtonType?: ButtonType;
    /**
     * Icon
     *
     * @default "el-icon-question"
     */
    icon?: string;
    /**
     * Icon 颜色
     *
     * @default "#f90"
     */
    iconColor?: string;
    /**
     * 是否隐藏 Icon
     *
     * @default false
     */
    hideIcon?: boolean;
};
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    reference?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    confirm: () => void;
    cancel: () => void;
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
