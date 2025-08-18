type __VLS_Props = {
    /**
     * 绑定值
     *
     * @default: 0
     */
    value?: number;
    /**
     * 设置计数器允许的最小值
     *
     * @default: -Infinity
     */
    min?: number;
    /**
     * 设置计数器允许的最大值
     *
     * @default: Infinity
     */
    max?: number;
    /**
     * 计数器步长
     *
     * @default: 1
     */
    step?: number;
    /**
     * 是否只能输入 step 的倍数
     *
     * @default: false
     */
    stepStrictly?: boolean;
    /**
     * 数值精度
     */
    precision?: number;
    /**
     * 计数器尺寸
     */
    size?: "large" | "small";
    /**
     * 是否禁用计数器
     *
     * @default: false
     */
    disabled?: boolean;
    /**
     * 是否使用控制按钮
     *
     * @default: true
     */
    controls?: boolean;
    /**
     * 控制按钮位置
     */
    controlsPosition?: "right";
    /**
     * 原生属性
     */
    name?: string;
    /**
     * 输入框关联的label文字
     */
    label?: string;
    /**
     * 输入框默认 placeholder
     */
    placeholder?: string;
};
/**
 * 	使 input 获取焦点
 */
declare function focus(): void;
/**
 * 选中 input 中的文字
 */
declare function select(): void;
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, {
    focus: typeof focus;
    select: typeof select;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (currentValue: number, oldValue: number) => void;
    blur: (event: FocusEvent) => void;
    focus: (event: FocusEvent) => void;
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
