declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<{
    initialIndex: {
        type: NumberConstructor;
        default: number;
    };
    height: StringConstructor;
    trigger: {
        type: StringConstructor;
        default: string;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
    indicatorPosition: StringConstructor;
    indicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrow: {
        type: StringConstructor;
        default: string;
    };
    type: StringConstructor;
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: StringConstructor;
        default: string;
    };
}, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (index: number, oldIndex: number) => void;
}, string, Readonly<import("vue").ExtractPropTypes<{
    initialIndex: {
        type: NumberConstructor;
        default: number;
    };
    height: StringConstructor;
    trigger: {
        type: StringConstructor;
        default: string;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
    indicatorPosition: StringConstructor;
    indicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrow: {
        type: StringConstructor;
        default: string;
    };
    type: StringConstructor;
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    trigger: string;
    initialIndex: number;
    autoplay: boolean;
    interval: number;
    indicator: boolean;
    arrow: string;
    loop: boolean;
    direction: string;
}>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $scopedSlots: S;
    };
};
