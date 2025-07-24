export type Rule = {
    required?: boolean;
    trigger?: "blur" | "change";
    validator?: (rule: Rule, value: any, callback: (error?: string) => void) => void;
    message?: string;
    type?: "string" | "number" | "boolean" | "method" | "regexp" | "integer" | "float" | "object" | "enum" | "date" | "url" | "hex" | "email" | "any";
    pattern?: RegExp;
    min?: number;
    max?: number;
    range?: [number, number];
};
type __VLS_Props = {
    /**
     * 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的
     */
    prop?: string;
    /**
     * 标签文本
     */
    label?: string;
    /**
     * 表单域标签的的宽度，例如 '50px'。支持 auto。
     */
    labelWidth?: string;
    /**
     * 是否必填，如不设置，则会根据校验规则自动生成
     */
    required?: boolean;
    /**
     * 表单验证规则
     */
    rules?: Rule[];
    /**
     * 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息
     */
    error?: string;
    /**
     * 是否显示校验错误信息
     */
    showMessage?: boolean;
    /**
     * 以行内形式展示校验信息
     */
    inlineMessage?: boolean;
    /**
     * 用于控制该表单域下组件的尺寸
     */
    size?: "medium" | "small" | "mini";
};
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {
    error: any;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    label?: (props: typeof __VLS_3) => any;
} & {
    error?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>>, {}>;
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
