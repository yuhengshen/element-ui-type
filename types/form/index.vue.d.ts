import type { Rule } from "../form-item/index.vue";
type __VLS_Props = {
    /**
     * 表单数据对象
     */
    model?: Record<string, any>;
    /**
     * 表单验证规则
     */
    rules?: Record<string, Rule[] | Rule>;
    /**
     * 行内表单模式
     */
    inline: boolean;
    /**
     * 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width
     */
    labelPosition: "right" | "left" | "top";
    /**
     * 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。
     */
    labelWidth: string;
    /**
     * 表单域标签的后缀
     */
    labelSuffix: string;
    /**
     * 是否隐藏必填字段的标签旁边的红色星号
     */
    hideRequiredAsterisk: boolean;
    /**
     * 是否显示校验错误信息
     */
    showMessage: boolean;
    /**
     * 是否以行内形式展示校验信息
     */
    inlineMessage: boolean;
    /**
     * 是否在输入框中显示校验结果反馈图标
     */
    statusIcon: boolean;
    /**
     * 是否在 rules 属性改变后立即触发一次验证
     */
    validateOnRuleChange: boolean;
    /**
     * 用于控制该表单内组件的尺寸
     */
    size: "medium" | "small" | "mini";
    /**
     * 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效
     */
    disabled: boolean;
};
/**
 * 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。
 */
declare function validate(callback: (valid: boolean, error?: {
    message: string;
    field: string;
}[]) => void): void;
/**
 * 不传入回调函数，则会返回一个 promise
 */
declare function validate(): Promise<void>;
/**
 * 对部分表单字段进行校验的方法
 */
declare function validateField(props: string | string[], callback: (errorMsg: string) => void): void;
/**
 * 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
 */
declare function resetFields(): void;
/**
 * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
 */
declare function clearValidate(prop?: string | string[]): void;
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, {
    validate: typeof validate;
    validateField: typeof validateField;
    resetFields: typeof resetFields;
    clearValidate: typeof clearValidate;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    validate: (propValue: any, error: any) => void;
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
