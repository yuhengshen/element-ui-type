import { VNode } from "vue";
type __VLS_Props = {
    /**
     * 数值内容
     */
    value?: string | number;
    /**
     * 设置小数点
     */
    decimalSeparator?: string;
    /**
     * 自定义数值展示
     */
    formatter?: (value: string | number) => VNode;
    /**
     * 设置千分位标识符
     */
    groupSeparator?: string;
    /**
     * 数值精度
     */
    precision?: number;
    /**
     * 设置数值的前缀
     */
    prefix?: string;
    /**
     * 设置数值的后缀
     */
    suffix?: string;
    /**
     * 数值的标题
     */
    title?: string;
    /**
     * 设置数值的样式
     */
    valueStyle?: Record<string, string>;
    /**
     * 设置倍率
     *
     * @default 1000
     */
    rate?: number;
    /**
     * 是否开启倒计时功能
     *
     * @default false
     */
    timeIndices?: boolean;
    /**
     * 格式化倒计时展示
     *
     * @default 'HH:mm:ss'
     */
    format?: string;
};
/**
 * 暂停倒计时
 *
 * @param value 是否暂停
 */
declare function suspend(value: boolean): void;
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {}, __VLS_7: {};
type __VLS_Slots = {} & {
    prefix?: (props: typeof __VLS_1) => any;
} & {
    suffix?: (props: typeof __VLS_3) => any;
} & {
    formatter?: (props: typeof __VLS_5) => any;
} & {
    title?: (props: typeof __VLS_7) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, {
    suspend: typeof suspend;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: Date) => void;
    finish: (value: boolean) => void;
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
