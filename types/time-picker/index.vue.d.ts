type PickerOption = {
    /**
     * 可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']
     */
    selectableRange?: string | string[];
    /**
     * 时间格式化(TimePicker) 小时：HH，分：mm，秒：ss，AM/PM A
     *
     * @default 'HH:mm:ss'
     */
    format?: string;
};
type Value = string | Date;
export type Props<T, V> = {
    /**
     * 绑定值
     */
    value?: V;
    /**
     * 是否只读
     */
    readonly?: boolean;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 是否可输入
     */
    editable?: boolean;
    /**
     * 是否显示清除按钮
     */
    clearable?: boolean;
    /**
     * 输入框尺寸
     */
    size?: "medium" | "small" | "mini";
    /**
     * 非范围选择时的占位内容
     */
    placeholder?: string;
    /**
     * 范围选择时开始日期的占位内容
     */
    startPlaceholder?: string;
    /**
     * 范围选择时开始日期的占位内容
     */
    endPlaceholder?: string;
    /**
     * 是否为时间范围选择，仅对<el-time-picker>有效
     */
    isRange?: boolean;
    /**
     * 是否使用箭头进行时间选择，仅对<el-time-picker>有效
     */
    arrowControl?: boolean;
    /**
     * 对齐方式
     */
    align?: "left" | "center" | "right";
    /**
     * TimePicker 下拉框的类名
     */
    popperClass?: string;
    /**
     * 当前时间日期选择器特有的选项参考下表
     */
    pickerOptions?: T;
    /**
     * 选择范围时的分隔符
     */
    rangeSeparator?: string;
    /**
     * 绑定值的格式
     */
    valueFormat?: string;
    /**
     * 选择器打开时默认显示的时间
     */
    defaultValue?: Date | string;
    /**
     * 原生属性
     */
    name?: string;
    /**
     * 自定义头部图标的类名
     * @default el-icon-time
     */
    prefixIcon?: string;
    /**
     * 自定义清空图标的类名
     * @default el-icon-circle-close
     */
    clearIcon?: string;
};
type __VLS_Props = Props<PickerOption, Value>;
/**
 * 	使 input 获取焦点
 */
declare function focus(): void;
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, {
    focus: typeof focus;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: Value) => void;
    change: (value: Value) => void;
    blur: (instance: any) => void;
    focus: (instance: any) => void;
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
