import { Directive } from "vue";

declare module "vue" {
  export interface GlobalComponents {
    ElAlert: typeof import("./types/alert/index.vue")["default"];
    ElAside: typeof import("./types/aside/index.vue")["default"];
    ElAutocomplete: typeof import("./types/autocomplete/index.vue")["default"];
    ElAvatar: typeof import("./types/avatar/index.vue")["default"];
    ElBacktop: typeof import("./types/backtop/index.vue")["default"];
    ElBadge: typeof import("./types/badge/index.vue")["default"];
    ElBreadcrumb: typeof import("./types/breadcrumb/index.vue")["default"];
    ElBreadcrumbItem: typeof import("./types/breadcrumb-item/index.vue")["default"];
    ElButton: typeof import("./types/button/index.vue")["default"];
    ElButtonGroup: typeof import("./types/button-group/index.vue")["default"];
    ElCalendar: typeof import("./types/calendar/index.vue")["default"];
    ElCard: typeof import("./types/card/index.vue")["default"];
    ElCarousel: typeof import("./types/carousel/index.vue")["default"];
    ElCarouselItem: typeof import("./types/carousel-item/index.vue")["default"];
    ElCascader: typeof import("./types/cascader/index.vue")["default"];
    ElCascaderPanel: typeof import("./types/cascader-panel/index.vue")["default"];
    ElCheckbox: typeof import("./types/checkbox/index.vue")["default"];
    ElCheckboxButton: typeof import("./types/checkbox-button/index.vue")["default"];
    ElCheckboxGroup: typeof import("./types/checkbox-group/index.vue")["default"];
    ElDatePicker: typeof import("./types/date-picker/index.vue")["default"];
    ElDivider: typeof import("./types/divider/index.vue")["default"];
    ElDrawer: typeof import("./types/drawer/index.vue")["default"];
    ElInput: typeof import("./types/input/index.vue")["default"];
    ElTabs: typeof import("./types/tabs/index.vue")["default"];
    ElTabPane: typeof import("./types/tab-pane/index.vue")["default"];
    ElForm: typeof import("./types/form/index.vue")["default"];
    ElFormItem: typeof import("./types/form-item/index.vue")["default"];
    ElCollapse: typeof import("./types/collapse/index.vue")["default"];
    ElCollapseItem: typeof import("./types/collapse-item/index.vue")["default"];
    ElCol: typeof import("./types/col/index.vue")["default"];
    ElRow: typeof import("./types/row/index.vue")["default"];
    ElSelect: typeof import("./types/select/index.vue")["default"];
    ElOption: typeof import("./types/option/index.vue")["default"];
    ElOptionGroup: typeof import("./types/option-group/index.vue")["default"];
    ElSwitch: typeof import("./types/switch/index.vue")["default"];
    ElDialog: typeof import("./types/dialog/index.vue")["default"];
    ElInputNumber: typeof import("./types/input-number/index.vue")["default"];
    ElRadio: typeof import("./types/radio/index.vue")["default"];
    ElRadioButton: typeof import("./types/radio-button/index.vue")["default"];
    ElRadioGroup: typeof import("./types/radio-group/index.vue")["default"];
    ElTimePicker: typeof import("./types/time-picker/index.vue")["default"];
    ElTimeSelect: typeof import("./types/time-select/index.vue")["default"];
    ElEmpty: typeof import("./types/empty/index.vue")["default"];
    ElColorPicker: typeof import("./types/color-picker/index.vue")["default"];
    ElContainer: typeof import("./types/container/index.vue")["default"];
    ElFooter: typeof import("./types/footer/index.vue")["default"];
    ElHeader: typeof import("./types/header/index.vue")["default"];
    ElDescriptions: typeof import("./types/descriptions/index.vue")["default"];
    ElDescriptionsItem: typeof import("./types/descriptions-item/index.vue")["default"];
    ElTag: typeof import("./types/tag/index.vue")["default"];
    ElDropdown: typeof import("./types/dropdown/index.vue")["default"];
    ElDropdownItem: typeof import("./types/dropdown-item/index.vue")["default"];
    ElDropdownMenu: typeof import("./types/dropdown-menu/index.vue")["default"];
    ElImage: typeof import("./types/image/index.vue")["default"];
    ElIcon: typeof import("./types/icon/index.vue")["default"];
    ElLink: typeof import("./types/link/index.vue")["default"];
    ElMenu: typeof import("./types/menu/index.vue")["default"];
    ElMenuItem: typeof import("./types/menu-item/index.vue")["default"];
    ElMenuItemGroup: typeof import("./types/menu-item-group/index.vue")["default"];
    ElSubmenu: typeof import("./types/submenu/index.vue")["default"];
    ElMain: typeof import("./types/main/index.vue")["default"];
    ElPageHeader: typeof import("./types/page-header/index.vue")["default"];
    ElPagination: typeof import("./types/pagination/index.vue")["default"];
    ElPopconfirm: typeof import("./types/popconfirm/index.vue")["default"];
    ElPopover: typeof import("./types/popover/index.vue")["default"];
    ElProgress: typeof import("./types/progress/index.vue")["default"];
    ElRate: typeof import("./types/rate/index.vue")["default"];
    ElResult: typeof import("./types/result/index.vue")["default"];
    ElScrollbar: typeof import("./types/scrollbar/index.vue")["default"];
    ElSkeleton: typeof import("./types/skeleton/index.vue")["default"];
    ElSkeletonItem: typeof import("./types/skeleton-item/index.vue")["default"];
    ElSlider: typeof import("./types/slider/index.vue")["default"];
    ElSteps: typeof import("./types/steps/index.vue")["default"];
    ElStep: typeof import("./types/step/index.vue")["default"];
    ElStatistic: typeof import("./types/statistic/index.vue")["default"];
    ElSpinner: typeof import("./types/spinner/index.vue")["default"];
    ElTable: typeof import("./types/table/index.vue")["default"];
    ElTableColumn: typeof import("./types/table-column/index.vue")["default"];
    ElTimeline: typeof import("./types/timeline/index.vue")["default"];
    ElTimelineItem: typeof import("./types/timeline-item/index.vue")["default"];
    ElTooltip: typeof import("./types/tooltip/index.vue")["default"];
    ElTransfer: typeof import("./types/transfer/index.vue")["default"];
    ElUpload: typeof import("./types/upload/index.vue")["default"];
    ElTree: typeof import("./types/tree/index.vue")["default"];
  }
  export interface GlobalDirectives {
    /**
     * 滚动至底部时，加载更多数据
     * 
     * | 元素属性 | 类型 | 默认值 | 说明 |
     * | --- | --- | --- | --- |
     * | `infinite-scroll-disabled` | boolean | false | 是否禁用 |
     * | `infinite-scroll-delay` | number | 200 | 节流时延，单位为ms |
     * | `infinite-scroll-distance` | number | 0 | 触发加载的距离阈值，单位为px |
     * | `infinite-scroll-immediate` | boolean | true | 是否立即执行加载方法，以防初始状态下内容无法撑满容器。 |
     */
    vInfiniteScroll: Directive<any, () => void>;

    /**
     * 加载数据时显示动效
     * 
     * | 元素属性 | 类型 | 默认值 | 说明 |
     * | --- | --- | --- | --- |
     * | `element-loading-target` | object/string | document.body | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点 |
     * | `element-loading-body` | boolean | false | 同 v-loading 指令中的 body 修饰符 |
     * | `element-loading-fullscreen` | boolean | true | 同 v-loading 指令中的 fullscreen 修饰符 |
     * | `element-loading-lock` | boolean | false | 同 v-loading 指令中的 lock 修饰符 |
     * | `element-loading-text` | string | — | 显示在加载图标下方的加载文案 |
     * | `element-loading-spinner` | string | — | 自定义加载图标类名 |
     * | `element-loading-background` | string | — | 遮罩背景色 |
     * | `element-loading-custom-class` | string | — | Loading 的自定义类名 |
     */
    vLoading: Directive<any, boolean>;
  }
}

export { };
