type __VLS_Props = {
    /**
     * 唯一标志
     *
     * @default null
     */
    index?: string;
    /**
     * 弹出菜单的自定义类名
     */
    popperClass?: string;
    /**
     * 展开 sub-menu 的延时
     *
     * @default 300
     */
    showTimeout?: number;
    /**
     * 收起 sub-menu 的延时
     *
     * @default 300
     */
    hideTimeout?: number;
    /**
     * 是否禁用
     *
     * @default false
     */
    disabled?: boolean;
    /**
     * 是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性
     *
     * @default '一级子菜单：true / 非一级子菜单：false'
     */
    popperAppendToBody?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToOption<__VLS_Props>, void, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToOption<__VLS_Props>>>, {}>;
export default _default;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<Required<T>[K]>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
