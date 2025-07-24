import { Props, Option, Value, Node, Data } from "../cascader/index.vue";
type __VLS_Props = {
    /**
     * 选中项绑定值
     */
    value?: Value | Value[] | Value[][];
    options?: Option[];
    props?: Props;
};
/**
 * @param leafOnly 是否只获取叶子节点
 *
 * @default false
 */
declare function getCheckedNodes(leafOnly: boolean): Node[];
/**
 * 清空选中的节点
 */
declare function clearCheckedNodes(): void;
declare var __VLS_1: {
    node: Node;
    data: Data;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, {
    getCheckedNodes: typeof getCheckedNodes;
    clearCheckedNodes: typeof clearCheckedNodes;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: Value | Value[] | Value[][]) => void;
    change: (value: Value | Value[] | Value[][]) => void;
    "expand-change": (value: Value[]) => void;
}, string, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>>, {}>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<Required<T>[K]>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $scopedSlots: S;
    };
};
