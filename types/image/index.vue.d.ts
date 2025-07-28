type __VLS_Props = {
    /**
     * 图片源，同原生
     */
    src?: string;
    /**
     * 确定图片如何适应容器框，同原生
     */
    fit?: "fill" | "contain" | "cover" | "none" | "scale-down";
    /**
     * 原生 alt
     */
    alt?: string;
    /**
     * 原生 referrerPolicy
     */
    referrerPolicy?: string;
    /**
     * 是否开启懒加载
     */
    lazy?: boolean;
    /**
     * 开启懒加载后，监听 scroll 事件的容器
     */
    scrollContainer?: string | HTMLElement;
    /**
     * 开启图片预览功能
     */
    previewSrcList?: string[];
    /**
     * 设置图片预览的 z-index
     */
    zIndex?: number;
    /**
     * 图片预览初始图片index
     */
    initialIndex?: number;
};
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    placeholder?: (props: typeof __VLS_3) => any;
} & {
    error?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    load: (event: Event) => void;
    error: (event: Error) => void;
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
