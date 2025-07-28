type __VLS_Props = {
    /**
     * 是否使用小型分页样式
     *
     * @default false
     */
    small?: boolean;
    /**
     * 是否为分页按钮添加背景色
     *
     * @default false
     */
    background?: boolean;
    /**
     * 每页显示条目个数，支持 .sync 修饰符
     *
     * @default 10
     */
    pageSize?: number;
    /**
     * 总条目数
     */
    total?: number;
    /**
     * 总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性
     */
    pageCount?: number;
    /**
     * 页码按钮的数量，当总页数超过该值时会折叠
     */
    pagerCount?: number;
    /**
     * 当前页数，支持 .sync 修饰符
     *
     * @default 1
     */
    currentPage?: number;
    /**
     * 组件布局，子组件名用逗号分隔
     *
     * sizes, prev, pager, next, jumper, ->, total, slot
     */
    layout?: string;
    /**
     * 每页显示个数选择器的选项设置
     */
    pageSizes?: number[];
    /**
     * 每页显示个数选择器的下拉框类名
     */
    popperClass?: string;
    /**
     * 替代图标显示的下一页文字
     */
    nextText?: string;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 只有一页时是否隐藏
     */
    hideOnSinglePage?: boolean;
};
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {}, __VLS_7: {}, __VLS_9: {}, __VLS_11: {}, __VLS_13: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    prev?: (props: typeof __VLS_3) => any;
} & {
    pager?: (props: typeof __VLS_5) => any;
} & {
    next?: (props: typeof __VLS_7) => any;
} & {
    jumper?: (props: typeof __VLS_9) => any;
} & {
    '->'?: (props: typeof __VLS_11) => any;
} & {
    total?: (props: typeof __VLS_13) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "size-change": (pageSize: number) => void;
    "current-change": (currentPage: number) => void;
    "prev-click": (currentPage: number) => void;
    "next-click": (currentPage: number) => void;
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
