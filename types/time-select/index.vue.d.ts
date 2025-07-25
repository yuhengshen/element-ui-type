import { Props } from "../time-picker/index.vue";
type SelectOption = {
    /**
     * 开始时间
     * @default '09:00'
     */
    start?: string;
    /**
     * 结束时间
     * @default '18:00'
     */
    end?: string;
    /**
     * 间隔时间
     * @default '00:30'
     */
    step?: string;
    /**
     * 最小时间，小于该时间的时间段将被禁用
     * @default '00:00'
     */
    minTime?: string;
    /**
     * 最大时间，大于该时间的时间段将被禁用
     */
    maxTime?: string;
};
type Value = string;
type __VLS_Props = Props<SelectOption, Value>;
/**
 * 	使 input 获取焦点
 */
declare function focus(): void;
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, {
    focus: typeof focus;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: string) => void;
    change: (value: string) => void;
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
