interface Data {
    label: string;
    value: string;
    children: Data[];
    [key: string]: any;
}
interface Node {
    isDisabled: boolean;
    text: string;
    value: string | number;
    label: string;
    pathNodes: Node[];
    path: (string | number)[];
    pathLabels: string[];
    loading: boolean;
    loaded: boolean;
    checked: boolean;
    hasChildren: boolean;
    data: Data;
    config: {
        value?: string;
        label?: string;
        children?: string;
        disabled?: string;
        checkStrictly?: boolean;
        lazy?: boolean;
        leaf?: string;
    };
    parent: Node;
    level: string;
    uid: number;
    [key: string]: any;
}
/**
 * @param leafOnly 是否只获取叶子节点
 *
 * @default false
 */
declare function getCheckedNodes(leafOnly: boolean): Node[];
declare var __VLS_1: {
    node: Node;
    data: Data;
}, __VLS_3: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    empty?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<{
    value: {};
    options: ArrayConstructor;
    props: ObjectConstructor;
    size: StringConstructor;
    placeholder: {
        type: StringConstructor;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    filterMethod: FunctionConstructor;
    separator: {
        type: StringConstructor;
        default: string;
    };
    showAllLevels: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapseTags: BooleanConstructor;
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    beforeFilter: {
        type: FunctionConstructor;
        default: () => () => void;
    };
    popperClass: StringConstructor;
}, {
    getCheckedNodes: typeof getCheckedNodes;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (value: any) => void;
    "expand-change": (value: any[]) => void;
    blur: (event: FocusEvent) => void;
    focus: (event: FocusEvent) => void;
    "visible-change": (visible: boolean) => void;
    "remove-tag": (value: any) => void;
}, string, Readonly<import("vue").ExtractPropTypes<{
    value: {};
    options: ArrayConstructor;
    props: ObjectConstructor;
    size: StringConstructor;
    placeholder: {
        type: StringConstructor;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    filterMethod: FunctionConstructor;
    separator: {
        type: StringConstructor;
        default: string;
    };
    showAllLevels: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapseTags: BooleanConstructor;
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    beforeFilter: {
        type: FunctionConstructor;
        default: () => () => void;
    };
    popperClass: StringConstructor;
}>>, {
    clearable: boolean;
    disabled: boolean;
    debounce: number;
    separator: string;
    filterable: boolean;
    showAllLevels: boolean;
    collapseTags: boolean;
    beforeFilter: Function;
}>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $scopedSlots: S;
    };
};
