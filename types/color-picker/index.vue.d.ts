type __VLS_Props = {
    /**
     * 绑定值
     */
    value?: string;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 尺寸
     */
    size?: string;
    /**
     * 是否支持透明度选择
     */
    showAlpha?: boolean;
    /**
     * 写入 v-model 的颜色的格式
     *
     * rgb	hex（show-alpha 为 false）/ rgb（show-alpha 为 true）
     */
    colorFormat?: "hsl" | "hsv" | "hex" | "rgb";
    /**
     * ColorPicker 下拉框的类名
     */
    popperClass?: string;
    /**
     * 预定义颜色
     */
    predefine?: string[];
};
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: string) => void;
    change: (value: string) => void;
    "active-change": (value: string) => void;
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
