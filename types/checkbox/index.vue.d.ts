declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<{
    value: {};
    label: {};
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: StringConstructor;
    trueLabel: (StringConstructor | NumberConstructor)[];
    falseLabel: (StringConstructor | NumberConstructor)[];
    id: StringConstructor;
    controls: StringConstructor;
    border: BooleanConstructor;
    size: StringConstructor;
}, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: any) => void;
    input: (value: any, ev: any) => void;
}, string, Readonly<import("vue").ExtractPropTypes<{
    value: {};
    label: {};
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: StringConstructor;
    trueLabel: (StringConstructor | NumberConstructor)[];
    falseLabel: (StringConstructor | NumberConstructor)[];
    id: StringConstructor;
    controls: StringConstructor;
    border: BooleanConstructor;
    size: StringConstructor;
}>>, {
    disabled: boolean;
    checked: boolean;
    indeterminate: boolean;
    border: boolean;
}>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $scopedSlots: S;
    };
};
