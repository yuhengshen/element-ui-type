type PickerDate = string | number | Date;
type __VLS_Props = {
    /** 绑定值，支持 Date/String/Number 或 [Date/String/Number, Date/String/Number]（范围选择） */
    value: PickerDate | [PickerDate, PickerDate];
    /** 完全只读 */
    readonly?: boolean;
    /** 禁用 */
    disabled?: boolean;
    /** 文本框是否可输入，默认为 true */
    editable?: boolean;
    /** 是否显示清除按钮，默认为 true */
    clearable?: boolean;
    /** 输入框尺寸，medium / small / mini */
    size?: "medium" | "small" | "mini";
    /** 非范围选择时的占位内容 */
    placeholder?: string;
    /** 范围选择时开始日期的占位内容 */
    startPlaceholder?: string;
    /** 范围选择时结束日期的占位内容 */
    endPlaceholder?: string;
    /** 显示类型 year/month/date/dates/months/years week/datetime/datetimerange/ daterange/monthrange*/
    type?: "year" | "month" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange";
    /** 显示在输入框中的格式 */
    format?: string;
    /** 对齐方式，left/center/right（已废弃） */
    align?: string;
    /** DatePicker 下拉框的类名 */
    popperClass?: string;
    /** 当前时间日期选择器特有的选项 */
    pickerOptions?: {
        shortcuts?: Array<{
            text: string;
            onClick: (vm: any) => void;
        }>;
        disabledDate?: (date: Date) => boolean;
        cellClassName?: (date: Date) => string;
        firstDayOfWeek?: number;
        onPick?: (range: {
            maxDate: Date;
            minDate: Date;
        }) => void;
    };
    /** 选择范围时的分隔符 */
    rangeSeparator?: string;
    /** 选中日期的默认初始值 */
    defaultValue?: PickerDate | [PickerDate, PickerDate];
    /** 范围选择时选中日期所使用的当日内具体时刻 */
    defaultTime?: [string, string];
    /** 可选，绑定值的格式。不指定则绑定值为 Date 对象 */
    valueFormat?: string;
    /** 原生属性 name */
    name?: string;
    /** 在范围选择时取消两个日期面板之间的联动 */
    unlinkPanels?: boolean;
    /** 自定义头部图标的类名 */
    prefixIcon?: string;
    /** 自定义清除图标的类名 */
    clearIcon?: string;
    /** 输入时是否触发表单的校验 */
    validateEvent?: boolean;
    /** DatePicker 自身是否插入至 body 元素上 */
    appendToBody?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, {
    /** 使 input 获取焦点 */
    focus: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>>, {}>;
export default _default;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<Required<T>[K]>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
