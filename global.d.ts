declare module "vue" {
  export interface GlobalComponents {
    ElAlert: typeof import("./types/alert/index.vue")['default']
    ElAside: typeof import("./types/aside/index.vue")['default']
    ElAutocomplete: typeof import("./types/autocomplete/index.vue")['default']
    ElAvatar: typeof import("./types/avatar/index.vue")['default']
    ElBacktop: typeof import("./types/backtop/index.vue")['default']
    ElBadge: typeof import("./types/badge/index.vue")['default']
    ElBreadcrumb: typeof import("./types/breadcrumb/index.vue")['default']
    ElBreadcrumbItem: typeof import("./types/breadcrumb-item/index.vue")['default']
    ElButton: typeof import("./types/button/index.vue")['default']
    ElButtonGroup: typeof import("./types/button-group/index.vue")['default']
    ElCalendar: typeof import("./types/calendar/index.vue")['default']
    ElCard: typeof import("./types/card/index.vue")['default']
    ElCarousel: typeof import("./types/carousel/index.vue")['default']
    ElCarouselItem: typeof import("./types/carousel-item/index.vue")['default']
    ElCascader: typeof import("./types/cascader/index.vue")['default']


    // 先处理一些常用的
    ElCheckbox: typeof import("./types/checkbox/index.vue")['default']
    ElCheckboxButton: typeof import("./types/checkbox-button/index.vue")['default']
    ElCheckboxGroup: typeof import("./types/checkbox-group/index.vue")['default']
    ElDatePicker: typeof import("./types/date-picker/index.vue")['default']
    ElInput: typeof import("./types/input/index.vue")['default']
    ElTabs: typeof import("./types/tabs/index.vue")['default']
    ElTabPane: typeof import("./types/tab-pane/index.vue")['default']
  }
}

export { }