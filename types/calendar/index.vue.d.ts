type Data = {
    type: "prev-month" | "current-month" | "next-month";
    isSelected: boolean;
    day: string;
};
declare var __VLS_1: {
    date: Date;
    data: Data;
};
type __VLS_Slots = {} & {
    dateCell?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<{
    value: (StringConstructor | DateConstructor | NumberConstructor)[];
    range: {
        type: ArrayConstructor;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
    };
}, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (date: Date) => void;
}, string, Readonly<import("vue").ExtractPropTypes<{
    value: (StringConstructor | DateConstructor | NumberConstructor)[];
    range: {
        type: ArrayConstructor;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    firstDayOfWeek: number;
}>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $scopedSlots: S;
    };
};
