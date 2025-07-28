type __VLS_Props = {
    type?: string;
    /**
     * 半径
     *
     * @default 100
     */
    radius?: number;
    /**
     * 线宽
     *
     * @default 5
     */
    strokeWidth?: number;
    /**
     * 颜色
     *
     * @default "#efefef"
     */
    strokeColor?: string;
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
