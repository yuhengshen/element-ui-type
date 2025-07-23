declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
    icon: {
        type: StringConstructor;
        default: string;
    };
    nativeType: {
        type: StringConstructor;
        default: string;
    };
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    plain: BooleanConstructor;
    autofocus: BooleanConstructor;
    round: BooleanConstructor;
    circle: BooleanConstructor;
}, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => void;
}, string, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    size: StringConstructor;
    icon: {
        type: StringConstructor;
        default: string;
    };
    nativeType: {
        type: StringConstructor;
        default: string;
    };
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    plain: BooleanConstructor;
    autofocus: BooleanConstructor;
    round: BooleanConstructor;
    circle: BooleanConstructor;
}>>, {
    type: string;
    disabled: boolean;
    autofocus: boolean;
    circle: boolean;
    icon: string;
    nativeType: string;
    loading: boolean;
    plain: boolean;
    round: boolean;
}>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $scopedSlots: S;
    };
};
