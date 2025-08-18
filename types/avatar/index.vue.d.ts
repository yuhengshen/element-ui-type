type __VLS_Props = {
    /**
     * 设置头像的图标类型，参考 Icon 组件
     */
    icon?: string;
    /**
     * 设置头像的大小
     * @default large
     */
    size?: number | "large" | "medium" | "small";
    /**
     * 设置头像的形状
     * @default circle
     */
    shape?: "circle" | "square";
    /**
     * 图片头像的资源地址
     */
    src?: string;
    /**
     * 以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像
     */
    srcSet?: string;
    /**
     * 描述图像的替换文本
     */
    alt?: string;
    /**
     * 当展示类型为图片的时候，设置图片如何适应容器框
     * @default cover
     */
    fit?: "fill" | "contain" | "cover" | "none" | "scale-down";
};
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: (event: ErrorEvent) => void;
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
