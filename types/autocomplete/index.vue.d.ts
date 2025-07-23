declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {}, __VLS_7: {}, __VLS_9: {
    item: {
        [key: string]: any;
        value: string;
    };
};
type __VLS_Slots = {} & {
    prepend?: (props: typeof __VLS_1) => any;
} & {
    append?: (props: typeof __VLS_3) => any;
} & {
    prefix?: (props: typeof __VLS_5) => any;
} & {
    suffix?: (props: typeof __VLS_7) => any;
} & {
    default?: (props: typeof __VLS_9) => any;
};
declare const __VLS_component: import("vue").DefineComponent<{
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    popperClass: StringConstructor;
    popperOptions: ObjectConstructor;
    placeholder: StringConstructor;
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    name: StringConstructor;
    size: StringConstructor;
    value: StringConstructor;
    maxlength: NumberConstructor;
    minlength: NumberConstructor;
    autofocus: BooleanConstructor;
    fetchSuggestions: FunctionConstructor;
    triggerOnFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    customItem: StringConstructor;
    selectWhenUnmatched: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixIcon: StringConstructor;
    suffixIcon: StringConstructor;
    label: StringConstructor;
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    hideLoading: BooleanConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightFirstItem: {
        type: BooleanConstructor;
        default: boolean;
    };
}, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: string) => void;
    change: (value: string) => void;
    focus: (event: FocusEvent) => void;
    blur: (event: FocusEvent) => void;
    clear: () => void;
    select: (item: {
        [key: string]: any;
        value: string;
    }) => void;
}, string, Readonly<import("vue").ExtractPropTypes<{
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    popperClass: StringConstructor;
    popperOptions: ObjectConstructor;
    placeholder: StringConstructor;
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: BooleanConstructor;
    name: StringConstructor;
    size: StringConstructor;
    value: StringConstructor;
    maxlength: NumberConstructor;
    minlength: NumberConstructor;
    autofocus: BooleanConstructor;
    fetchSuggestions: FunctionConstructor;
    triggerOnFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    customItem: StringConstructor;
    selectWhenUnmatched: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixIcon: StringConstructor;
    suffixIcon: StringConstructor;
    label: StringConstructor;
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    hideLoading: BooleanConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightFirstItem: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    valueKey: string;
    clearable: boolean;
    disabled: boolean;
    autofocus: boolean;
    triggerOnFocus: boolean;
    selectWhenUnmatched: boolean;
    debounce: number;
    placement: string;
    hideLoading: boolean;
    popperAppendToBody: boolean;
    highlightFirstItem: boolean;
}>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $scopedSlots: S;
    };
};
