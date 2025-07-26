type __VLS_Props = {
    /**
     * 消息提示类型
     */
    type: "success" | "info" | "warning" | "danger";
    /**
     * 是否可关闭
     * @default false
     */
    closable: boolean;
    /**
     * 是否禁用渐变动画
     * @default false
     */
    disableTransitions: boolean;
    /**
     * 是否有边框描边
     * @default false
     */
    hit: boolean;
    /**
     * 背景色
     */
    color: string;
    /**
     * 尺寸
     */
    size: "medium" | "small" | "mini";
    /**
     * 主题
     * @default light
     */
    effect: "dark" | "light" | "plain";
};
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: () => void;
    close: () => void;
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
