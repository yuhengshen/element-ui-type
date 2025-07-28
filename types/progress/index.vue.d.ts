type __VLS_Props = {
    /**
     * 百分比 0-100
     *
     * @default 0
     */
    percentage?: number;
    /**
     * 进度条类型
     *
     * @default "line"
     */
    type?: "line" | "circle" | "dashboard";
    /**
     * 进度条的宽度，单位 px
     *
     * @default 6
     */
    strokeWidth?: number;
    /**
     * 进度条显示文字内置在进度条内（只在 type=line 时可用）
     *
     * @default false
     */
    textInside?: boolean;
    /**
     * 进度条当前状态
     */
    status?: "success" | "exception" | "warning";
    /**
     * 进度条背景色（会覆盖 status 状态颜色）
     */
    color?: string;
    /**
     * 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）
     *
     * @default 126
     */
    width?: number;
    /**
     * 是否显示进度条文字内容
     *
     * @default true
     */
    showText?: boolean;
    /**
     * circle/dashboard 类型路径两端的形状
     *
     * @default "round"
     */
    strokeLinecap?: "butt" | "round" | "square";
    /**
     * 指定进度条文字内容
     */
    format?: (percentage: number) => string;
    /**
     * 指定进度条字体颜色（支持 hex 格式）
     */
    textColor?: string;
};
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>>, {}>;
export default _default;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<Required<T>[K]>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
