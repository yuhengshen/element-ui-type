<script lang="ts" setup>
type PickerDate = string | number | Date;

defineProps<{
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
  size?: 'medium' | 'small' | 'mini';
  /** 非范围选择时的占位内容 */
  placeholder?: string;
  /** 范围选择时开始日期的占位内容 */
  startPlaceholder?: string;
  /** 范围选择时结束日期的占位内容 */
  endPlaceholder?: string;
  /** 显示类型，如 date/daterange/datetime/datetimerange/year/month/week 等 */
  type?: string;
  /** 显示在输入框中的格式 */
  format?: string;
  /** 对齐方式，left/center/right（已废弃） */
  align?: string;
  /** DatePicker 下拉框的类名 */
  popperClass?: string;
  /** 当前时间日期选择器特有的选项 */
  pickerOptions?: {
    shortcuts?: Array<{ text: string; onClick: (vm: any) => void }>;
    disabledDate?: (date: Date) => boolean;
    cellClassName?: (date: Date) => string;
    firstDayOfWeek?: number;
    onPick?: (range: { maxDate: Date; minDate: Date }) => void;
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
}>();

defineEmits<{
  /** 用户确认选择时触发 */
  change: (value: PickerDate | [PickerDate, PickerDate]) => void;
  /** input 失去焦点时触发 */
  blur: (instance: any) => void;
  /** input 获得焦点时触发 */
  focus: (instance: any) => void;
}>();

defineExpose<{
  /** 使 input 获取焦点 */
  focus: () => void;
}>();
</script>
