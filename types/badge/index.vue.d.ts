declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<{
    value: (NumberConstructor | StringConstructor)[];
    max: NumberConstructor;
    isDot: BooleanConstructor;
    hidden: BooleanConstructor;
    type: {
        type: StringConstructor;
    };
}, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    value: (NumberConstructor | StringConstructor)[];
    max: NumberConstructor;
    isDot: BooleanConstructor;
    hidden: BooleanConstructor;
    type: {
        type: StringConstructor;
    };
}>>, {
    isDot: boolean;
    hidden: boolean;
}>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $scopedSlots: S;
    };
};
