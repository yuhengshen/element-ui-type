type __VLS_Props = {
    /**
     * 绑定值
     */
    value?: boolean | string | number;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * switch 的宽度（像素）
     * @default 40
     */
    width?: number;
    /**
     * switch 打开时所显示图标的类名，设置此项会忽略 active-text
     */
    activeIconClass?: string;
    /**
     * switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text
     */
    inactiveIconClass?: string;
    /**
     * switch 打开时的文字描述
     */
    activeText?: string;
    /**
     * switch 关闭时的文字描述
     */
    inactiveText?: string;
    /**
     * switch 打开时的值
     * @default true
     */
    activeValue?: boolean | string | number;
    /**
     * switch 关闭时的值
     * @default false
     */
    inactiveValue?: boolean | string | number;
    /**
     * switch 打开时的背景色
     * @default #409EFF
     */
    activeColor?: string;
    /**
     * switch 关闭时的背景色
     * @default #C0CCDA
     */
    inactiveColor?: string;
    /**
     * switch 对应的 name 属性
     */
    name?: string;
    /**
     * 改变 switch 状态时是否触发表单的校验
     * @default true
     */
    validateEvent?: boolean;
};
/**
 * 	使 Switch 获取焦点
 */
declare function focus(): void;
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, {
    focus: typeof focus;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: string | number | boolean) => void;
    change: (value: string | number | boolean) => void;
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
