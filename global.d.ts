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
  }
}

export {};
