declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<{
    value: {};
    disabled: BooleanConstructor;
    min: NumberConstructor;
    max: NumberConstructor;
    size: StringConstructor;
    fill: StringConstructor;
    textColor: StringConstructor;
}, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: any) => void;
}, string, Readonly<import("vue").ExtractPropTypes<{
    value: {};
    disabled: BooleanConstructor;
    min: NumberConstructor;
    max: NumberConstructor;
    size: StringConstructor;
    fill: StringConstructor;
    textColor: StringConstructor;
}>>, {
    disabled: boolean;
}>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $scopedSlots: S;
    };
};
