type __VLS_Props = {
    /**
     * 绑定值
     */
    value?: boolean | string | number;
    /**
     * 是否多选
     */
    multiple?: boolean;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 作为 value 唯一标识的键名，绑定值为对象类型时必填
     */
    valueKey?: string;
    /**
     * 输入框尺寸
     */
    size?: "medium" | "small" | "mini";
    /**
     * 是否可以清空选项
     */
    clearable?: boolean;
    /**
     * 是否可搜索
     */
    filterable?: boolean;
    /**
     * 多选时是否将选中值按文字的形式展示
     */
    collapseTags?: boolean;
    /**
     * 多选时用户最多可以选择的项目数，为 0 则不限制
     */
    multipleLimit?: number;
    /**
     * select input 的 name 属性
     */
    name?: string;
    /**
     * select input 的 autocomplete 属性
     */
    filterMethod?: (query: string) => void;
    /**
     * 是否为远程搜索
     */
    remote?: boolean;
    /**
     * 远程搜索方法
     */
    remoteMethod?: (query: string) => void;
    /**
     * 是否正在从远程获取数据
     */
    loading?: boolean;
    /**
     * 远程加载时显示的文字
     */
    loadingText?: string;
    /**
     * 搜索条件无匹配时显示的文字，也可以使用slot="empty"设置
     */
    noMatchText?: string;
    /**
     * 选项为空时显示的文字，也可以使用slot="empty"设置
     */
    noDataText?: string;
    /**
     * 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false
     */
    popperAppendToBody?: boolean;
    /**
     * 对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单
     */
    automaticDropdown?: boolean;
};
/**
 * 使 input 获取焦点
 */
declare function focus(): void;
/**
 * 使 input 失去焦点，并隐藏下拉框
 */
declare function blur(): void;
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    prefix?: (props: typeof __VLS_3) => any;
} & {
    empty?: (props: typeof __VLS_5) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, {
    focus: typeof focus;
    blur: typeof blur;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: string | number | boolean) => void;
    change: (value: string | number | boolean) => void;
    "visible-change": (visible: boolean) => void;
    "remove-tag": (value: string | number | boolean) => void;
    clear: () => void;
    blur: (event: FocusEvent) => void;
    focus: (event: FocusEvent) => void;
}, string, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>>, {}>;
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
