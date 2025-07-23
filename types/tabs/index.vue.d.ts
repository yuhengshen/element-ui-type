declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<{
    type: StringConstructor;
    activeName: StringConstructor;
    closable: BooleanConstructor;
    addable: BooleanConstructor;
    value: {};
    editable: BooleanConstructor;
    tabPosition: {
        type: StringConstructor;
        default: string;
    };
    beforeLeave: FunctionConstructor;
    stretch: BooleanConstructor;
}, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "tab-click": (vm: any) => void;
    "tab-remove": (targetName: string) => void;
    "tab-add": () => void;
    edit: (targetName: string, action: string) => void;
}, string, Readonly<import("vue").ExtractPropTypes<{
    type: StringConstructor;
    activeName: StringConstructor;
    closable: BooleanConstructor;
    addable: BooleanConstructor;
    value: {};
    editable: BooleanConstructor;
    tabPosition: {
        type: StringConstructor;
        default: string;
    };
    beforeLeave: FunctionConstructor;
    stretch: BooleanConstructor;
}>>, {
    closable: boolean;
    editable: boolean;
    addable: boolean;
    tabPosition: string;
    stretch: boolean;
}>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $scopedSlots: S;
    };
};
