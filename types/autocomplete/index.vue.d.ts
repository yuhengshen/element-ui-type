import { Placement } from "packages/popover/index.vue";
type __VLS_Props = {
    /**
     * 输入建议对象中用于显示的键名
     *
     * @default 'value'
     */
    valueKey?: string;
    /**
     * Autocomplete 下拉列表的类名
     */
    popperClass?: string;
    /**
     * Popper.js 的参数
     */
    popperOptions?: any;
    /**
     * 输入框占位文本
     */
    placeholder?: string;
    /**
     * 显示清空按钮
     *
     * @default false
     */
    clearable?: boolean;
    /**
     * 禁用
     */
    disabled?: boolean;
    /**
     * 原生属性
     */
    name?: string;
    /**
     * 输入框尺寸
     */
    size?: "medium" | "small" | "mini";
    /**
     * 必填值，输入绑定值
     */
    value?: string;
    /**
     * 最大输入长度
     */
    maxlength?: number;
    /**
     * 最小输入长度
     */
    minlength?: number;
    /**
     * 原生属性，自动获取焦点
     */
    autofocus?: boolean;
    /**
     * 	返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 cb(data:[]) 来返回它
     * @param queryString
     * @param cb
     */
    fetchSuggestions?: (queryString: string, cb: (data: any[]) => void) => void;
    /**
     * 是否在输入框 focus 时显示建议列表
     */
    triggerOnFocus?: boolean;
    /**
     * 在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件
     */
    selectWhenUnmatched?: boolean;
    /**
     * 输入框头部图标
     */
    prefixIcon?: string;
    /**
     * 输入框尾部图标
     */
    suffixIcon?: string;
    /**
     * 输入框关联的label文字
     */
    label?: string;
    /**
     * 获取输入建议的去抖延时
     *
     * @default 300
     */
    debounce?: number;
    /**
     * 菜单弹出位置
     *
     * @default 'bottom-start'
     */
    placement?: Placement;
    /**
     * 是否隐藏远程加载时的加载图标
     */
    hideLoading?: boolean;
    /**
     * 是否将弹出框插入至 body 元素下
     */
    popperAppendToBody?: boolean;
    /**
     * 是否默认突出显示远程搜索建议中的第一项
     */
    highlightFirstItem?: boolean;
};
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {}, __VLS_7: {}, __VLS_9: {
    item: {
        [key: string]: any;
        value: string;
    };
};
type __VLS_Slots = {} & {
    prepend?: (props: typeof __VLS_1) => any;
} & {
    append?: (props: typeof __VLS_3) => any;
} & {
    prefix?: (props: typeof __VLS_5) => any;
} & {
    suffix?: (props: typeof __VLS_7) => any;
} & {
    default?: (props: typeof __VLS_9) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: string) => void;
    change: (value: string) => void;
    focus: (event: FocusEvent) => void;
    blur: (event: FocusEvent) => void;
    clear: () => void;
    select: (item: {
        [key: string]: any;
        value: string;
    }) => void;
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
