type Props = {
    label?: string | ((Value: any, node: Node) => string);
    children?: string;
    disabled?: boolean | ((Value: any, node: Node) => boolean);
    isLeaf?: boolean | ((Value: any, node: Node) => boolean);
};
type Data = {
    id: number | string;
    label: string;
    children?: Data[];
};
type Node = {
    checked: boolean;
    childNodes: Node[];
    data: Data;
    expanded: boolean;
    id: number;
    indeterminate: boolean;
    isCurrent: boolean;
    isLeaf: boolean;
    level: number;
    loaded: boolean;
    loading: boolean;
    parent: Node | null;
    store: any;
    text: string;
    visible: boolean;
    disabled?: boolean;
    label: string;
};
type Value = any;
type __VLS_Props = {
    /**
     * 展示数据
     */
    data?: any[];
    /**
     * 内容为空的时候展示的文本
     */
    emptyText?: string;
    /**
     * 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
     */
    nodeKey?: string;
    /**
     * 配置选项，具体看下表
     */
    props?: Props;
    /**
     * 是否在第一次展开某个树节点后才渲染其子节点
     *
     * @default true
     */
    renderAfterExpand?: boolean;
    /**
     * 加载子树数据的方法，仅当 lazy 属性为true 时生效
     */
    load?: (node: Node, resolve: any) => void;
    /**
     * 树节点的内容区的渲染
     */
    renderContent?: (h: any, { node, data, store }: {
        node: Node;
        data: Data;
        store: any;
    }) => any;
    /**
     * 是否高亮当前选中节点，默认值是 false。
     */
    highlightCurrent?: boolean;
    /**
     * 是否默认展开所有节点
     *
     * @default false
     */
    defaultExpandAll?: boolean;
    /**
     * 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。
     *
     * @default true
     */
    expandOnClickNode?: boolean;
    /**
     * 是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。
     *
     * @default false
     */
    checkOnClickNode?: boolean;
    /**
     * 展开子节点的时候是否自动展开父节点
     *
     * @default true
     */
    autoExpandParent?: boolean;
    /**
     * 默认展开的节点的 key 的数组
     */
    defaultExpandedKeys?: string[];
    /**
     * 节点是否可被选择
     */
    showCheckbox?: boolean;
    /**
     * 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false
     */
    checkStrictly?: boolean;
    defaultCheckedKeys?: string[];
    /**
     * 当前选中的节点
     */
    currentNodeKey?: string;
    /**
     * 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏
     */
    filterNodeMethod?: (value: any, data: Data, node: Node) => boolean;
    /**
     * 是否每次只打开一个同级树节点展开
     *
     * @default false
     */
    accordion?: boolean;
    /**
     * 相邻级节点间的水平缩进，单位为像素
     *
     * @default 16
     */
    indent?: number;
    /**
     * 自定义树节点的图标
     */
    iconClass?: string;
    /**
     * 是否懒加载子节点，需与 load 方法结合使用
     */
    lazy?: boolean;
    /**
     * 是否开启拖拽节点功能
     */
    draggable?: boolean;
    /**
     * 判断节点能否被拖拽
     */
    allowDrag?: (node: Node) => boolean;
    /**
     * 拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后
     */
    allowDrop?: (draggingNode: Node, dropNode: Node, type: string) => boolean;
};
/**
 * 对树节点进行筛选操作 接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数
 */
declare function filter(value: Value): void;
/**
 * 通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性
 */
declare function updateKeyChildren(key: string, data: any[]): void;
/**
 * 若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点所组成的数组
 */
declare function getCheckedNodes(leafOnly: boolean, includeHalfChecked: boolean): void;
/**
 * 设置目前勾选的节点，使用此方法必须设置 node-key 属性
 */
declare function setCheckedNodes(nodes: Node[]): void;
/**
 * 若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组
 */
declare function getCheckedKeys(leafOnly: boolean): void;
/**
 * 通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性
 *
 * @param keys 勾选节点的 key 的数组
 * @param leafOnly 是否仅设置叶子节点的选中状态，默认为 false
 */
declare function setCheckedKeys(keys: string[], leafOnly: boolean): void;
/**
 * 通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性
 *
 * @param key  勾选节点的 key 或者 data
 * @param checked 节点是否选中
 * @param deep 是否设置子节点 ，默认为 false
 */
declare function setChecked(key: string, checked: boolean, deep: boolean): void;
/**
 * 若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点所组成的数组
 */
declare function getHalfCheckedNodes(): void;
/**
 * 若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点的 key 所组成的数组
 */
declare function getHalfCheckedKeys(): void;
/**
 * 获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null
 */
declare function getCurrentKey(): void;
/**
 * 获取当前被选中节点的 data，若没有节点被选中则返回 null
 */
declare function getCurrentNode(): void;
/**
 * 通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性
 *
 * @param key 待被选节点的 key，若为 null 则取消当前高亮的节点
 */
declare function setCurrentKey(key: string | null): void;
/**
 * 通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性
 *
 * @param node  待被选节点的 node
 */
declare function setCurrentNode(node: Node): void;
/**
 * 根据 data 或者 key 拿到 Tree 组件中的 node
 */
declare function getNode(dataOrKey: Value): void;
/**
 * 删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性
 *
 * @param data 要删除的节点的 data 或者 node
 */
declare function remove(data: Value): void;
/**
 * 为 Tree 中的一个节点追加一个子节点
 *
 * @param data 要追加的子节点的 data
 * @param parentNode 子节点的 parent 的 data、key 或者 node
 */
declare function append(data: Value, parentNode: Node): void;
/**
 * 为 Tree 的一个节点的前面增加一个节点
 *
 * @param data 要增加的节点的 data
 * @param refNode 要增加的节点的后一个节点的 data、key 或者 node
 */
declare function insertBefore(data: Value, refNode: Node): void;
/**
 * 为 Tree 的一个节点的后面增加一个节点
 *
 * @param data 要增加的节点的 data
 * @param refNode 要增加的节点的前一个节点的 data、key 或者 node
 */
declare function insertAfter(data: Value, refNode: Node): void;
type Position = "before" | "after" | "inner";
declare var __VLS_1: {
    node: Node;
    data: any[] & Data;
};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, {
    filter: typeof filter;
    updateKeyChildren: typeof updateKeyChildren;
    getCheckedNodes: typeof getCheckedNodes;
    setCheckedNodes: typeof setCheckedNodes;
    getCheckedKeys: typeof getCheckedKeys;
    setCheckedKeys: typeof setCheckedKeys;
    setChecked: typeof setChecked;
    getHalfCheckedNodes: typeof getHalfCheckedNodes;
    getHalfCheckedKeys: typeof getHalfCheckedKeys;
    getCurrentKey: typeof getCurrentKey;
    getCurrentNode: typeof getCurrentNode;
    setCurrentKey: typeof setCurrentKey;
    setCurrentNode: typeof setCurrentNode;
    getNode: typeof getNode;
    remove: typeof remove;
    append: typeof append;
    insertBefore: typeof insertBefore;
    insertAfter: typeof insertAfter;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "node-click": (data: any, node: Node, nodeComponent: any) => void;
    "node-contextmenu": (event: MouseEvent, data: any, node: Node, nodeComponent: any) => void;
    "check-change": (data: any, node: Node, checked: boolean, checkedNodes: Node[], halfCheckedNodes: Node[]) => void;
    check: (data: any, checked: boolean, checkedNodes: Node[], halfCheckedNodes: Node[]) => void;
    "current-change": (data: any, node: Node) => void;
    "node-expand": (data: any, node: Node, nodeComponent: any) => void;
    "node-collapse": (data: any, node: Node, nodeComponent: any) => void;
    "node-drag-start": (node: Node, event: MouseEvent) => void;
    "node-drag-enter": (node: Node, targetNode: Node, event: MouseEvent) => void;
    "node-drag-leave": (node: Node, targetNode: Node, event: MouseEvent) => void;
    "node-drag-over": (node: Node, targetNode: Node, event: MouseEvent) => void;
    "node-drag-end": (node: Node, targetNode: Node, position: Position, event: MouseEvent) => void;
    "node-drop": (node: Node, targetNode: Node, position: Position, event: MouseEvent) => void;
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
