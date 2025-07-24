type __VLS_Props = {
    /**
     * 绑定值
     */
    value?: string | number | boolean;
    /**
     * 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效
     */
    size?: "medium" | "small" | "mini";
    /**
     * 是否禁用
     *
     * @default: false
     */
    disabled?: boolean;
    /**
     * 按钮形式的 Radio 激活时的文本颜色
     *
     * @default: #ffffff
     */
    textColor?: string;
    /**
     * 按钮形式的 Radio 激活时的填充色和边框色
     *
     * @default: #409EFF
     */
    fill?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: string | number | boolean) => void;
}, string, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>>, {}>;
export default _default;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<Required<T>[K]>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
