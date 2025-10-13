declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<{
    value: {};
    label: {};
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: StringConstructor;
    trueLabel: (NumberConstructor | StringConstructor)[];
    falseLabel: (NumberConstructor | StringConstructor)[];
}, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: any) => void;
    input: (value: any, ev: any) => void;
}, string, Readonly<import("vue").ExtractPropTypes<{
    value: {};
    label: {};
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: StringConstructor;
    trueLabel: (NumberConstructor | StringConstructor)[];
    falseLabel: (NumberConstructor | StringConstructor)[];
}>>, {
    disabled: boolean;
    checked: boolean;
}>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $scopedSlots: S;
    };
};
