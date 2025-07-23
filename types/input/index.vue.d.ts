declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {}, __VLS_7: {};
type __VLS_Slots = {} & {
    prefix?: (props: typeof __VLS_1) => any;
} & {
    suffix?: (props: typeof __VLS_3) => any;
} & {
    prepend?: (props: typeof __VLS_5) => any;
} & {
    append?: (props: typeof __VLS_7) => any;
};
declare const __VLS_component: import("vue").DefineComponent<{
    /**
     * 输入框类型
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 绑定值
     */
    value: (StringConstructor | NumberConstructor)[];
    /**
     * 最大输入长度
     */
    maxlength: NumberConstructor;
    /**
     * 最小输入长度
     */
    minlength: NumberConstructor;
    /**
     * 是否显示输入字数统计，只在 type="text" 或 type="textarea" 时有效
     */
    showWordLimit: BooleanConstructor;
    /**
     * 输入框占位文本
     */
    placeholder: StringConstructor;
    /**
     * 是否可清空
     */
    clearable: BooleanConstructor;
    /**
     * 是否显示切换密码图标
     */
    showPassword: BooleanConstructor;
    /**
     * 是否禁用
     */
    disabled: BooleanConstructor;
    /**
     * 输入框尺寸，只在 type!="textarea" 时有效
     */
    size: StringConstructor;
    /**
     * 输入框头部图标
     */
    prefixIcon: StringConstructor;
    /**
     * 输入框尾部图标
     */
    suffixIcon: StringConstructor;
    /**
     * 输入框行数，只对 type="textarea" 有效
     */
    rows: NumberConstructor;
    /**
     * 自适应内容高度，只对 type="textarea" 有效，可传对象 { minRows, maxRows }
     */
    autosize: (BooleanConstructor | ObjectConstructor)[];
    /**
     * 原生属性，自动补全
     */
    autocomplete: StringConstructor;
    /**
     * 下个主版本弃用
     */
    autoComplete: StringConstructor;
    /**
     * 原生属性
     */
    name: StringConstructor;
    /**
     * 原生属性，是否只读
     */
    readonly: BooleanConstructor;
    /**
     * 原生属性，设置最大值
     */
    max: (StringConstructor | NumberConstructor)[];
    /**
     * 原生属性，设置最小值
     */
    min: (StringConstructor | NumberConstructor)[];
    /**
     * 原生属性，设置输入字段的合法数字间隔
     */
    step: (StringConstructor | NumberConstructor)[];
    /**
     * 控制是否能被用户缩放
     */
    resize: StringConstructor;
    /**
     * 原生属性，自动获取焦点
     */
    autofocus: BooleanConstructor;
    /**
     * 原生属性
     */
    form: StringConstructor;
    /**
     * 输入框关联的label文字
     */
    label: StringConstructor;
    /**
     * 输入框的tabindex
     */
    tabindex: StringConstructor;
    /**
     * 输入时是否触发表单的校验
     */
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
}, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    /**
     * 输入框类型
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 绑定值
     */
    value: (StringConstructor | NumberConstructor)[];
    /**
     * 最大输入长度
     */
    maxlength: NumberConstructor;
    /**
     * 最小输入长度
     */
    minlength: NumberConstructor;
    /**
     * 是否显示输入字数统计，只在 type="text" 或 type="textarea" 时有效
     */
    showWordLimit: BooleanConstructor;
    /**
     * 输入框占位文本
     */
    placeholder: StringConstructor;
    /**
     * 是否可清空
     */
    clearable: BooleanConstructor;
    /**
     * 是否显示切换密码图标
     */
    showPassword: BooleanConstructor;
    /**
     * 是否禁用
     */
    disabled: BooleanConstructor;
    /**
     * 输入框尺寸，只在 type!="textarea" 时有效
     */
    size: StringConstructor;
    /**
     * 输入框头部图标
     */
    prefixIcon: StringConstructor;
    /**
     * 输入框尾部图标
     */
    suffixIcon: StringConstructor;
    /**
     * 输入框行数，只对 type="textarea" 有效
     */
    rows: NumberConstructor;
    /**
     * 自适应内容高度，只对 type="textarea" 有效，可传对象 { minRows, maxRows }
     */
    autosize: (BooleanConstructor | ObjectConstructor)[];
    /**
     * 原生属性，自动补全
     */
    autocomplete: StringConstructor;
    /**
     * 下个主版本弃用
     */
    autoComplete: StringConstructor;
    /**
     * 原生属性
     */
    name: StringConstructor;
    /**
     * 原生属性，是否只读
     */
    readonly: BooleanConstructor;
    /**
     * 原生属性，设置最大值
     */
    max: (StringConstructor | NumberConstructor)[];
    /**
     * 原生属性，设置最小值
     */
    min: (StringConstructor | NumberConstructor)[];
    /**
     * 原生属性，设置输入字段的合法数字间隔
     */
    step: (StringConstructor | NumberConstructor)[];
    /**
     * 控制是否能被用户缩放
     */
    resize: StringConstructor;
    /**
     * 原生属性，自动获取焦点
     */
    autofocus: BooleanConstructor;
    /**
     * 原生属性
     */
    form: StringConstructor;
    /**
     * 输入框关联的label文字
     */
    label: StringConstructor;
    /**
     * 输入框的tabindex
     */
    tabindex: StringConstructor;
    /**
     * 输入时是否触发表单的校验
     */
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    type: string;
    clearable: boolean;
    disabled: boolean;
    autofocus: boolean;
    readonly: boolean;
    validateEvent: boolean;
    showWordLimit: boolean;
    showPassword: boolean;
}>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $scopedSlots: S;
    };
};
