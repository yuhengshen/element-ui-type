declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<{
    separator: {
        type: StringConstructor;
        default: string;
    };
    separatorClass: {
        type: StringConstructor;
        default: string;
    };
}, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    separator: {
        type: StringConstructor;
        default: string;
    };
    separatorClass: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    separator: string;
    separatorClass: string;
}>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $scopedSlots: S;
    };
};
