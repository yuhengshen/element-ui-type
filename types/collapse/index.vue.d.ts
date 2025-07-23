type __VLS_Props = {
    /**
     * 当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)
     */
    value?: string | string[];
    /**
     * 是否手风琴模式
     *
     * @default false
     */
    accordion?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: string | string[]) => void;
    change: (activeNames: string | string[]) => void;
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
