declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<{
    visibilityHeight: {
        type: NumberConstructor;
        default: number;
    };
    target: StringConstructor[];
    right: {
        type: NumberConstructor;
        default: number;
    };
    bottom: {
        type: NumberConstructor;
        default: number;
    };
}, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => void;
}, string, Readonly<import("vue").ExtractPropTypes<{
    visibilityHeight: {
        type: NumberConstructor;
        default: number;
    };
    target: StringConstructor[];
    right: {
        type: NumberConstructor;
        default: number;
    };
    bottom: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    visibilityHeight: number;
    right: number;
    bottom: number;
}>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $scopedSlots: S;
    };
};
