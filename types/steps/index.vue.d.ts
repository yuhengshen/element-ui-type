type __VLS_Props = {
    space?: number | string;
    /**
     * 显示方向
     *
     * @default "horizontal"
     */
    direction?: "vertical" | "horizontal";
    /**
     * 设置当前激活步骤
     *
     * @default 0
     */
    active?: number;
    /**
     * 设置当前步骤的状态
     *
     * @default "process"
     */
    processStatus?: "wait" | "process" | "finish" | "error" | "success";
    /**
     * 设置结束步骤的状态
     *
     * @default "finish"
     */
    finishStatus?: "wait" | "process" | "finish" | "error" | "success";
    /**
     * 进行居中对齐
     */
    alignCenter?: boolean;
    /**
     * 是否应用简洁风格
     *
     * @default false
     */
    simple?: boolean;
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
