declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $scopedSlots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    width: string;
    $props: {
        readonly width?: string;
    };
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
type __VLS_Slots = {
    default?: (props: {}) => any;
};
