<script setup lang="ts">
import { Props } from "../time-picker/index.vue";

/*
 start	开始时间	string	—	09:00
end	结束时间	string	—	18:00
step	间隔时间	string	—	00:30
minTime	最小时间，小于该时间的时间段将被禁用	string	—	00:00
maxTime	最大时间，大于该时间的时间段将被禁用	string	—	— 
 */
type SelectOption = {
  /**
   * 开始时间
   * @default '09:00'
   */
  start?: string;
  /**
   * 结束时间
   * @default '18:00'
   */
  end?: string;
  /**
   * 间隔时间
   * @default '00:30'
   */
  step?: string;
  /**
   * 最小时间，小于该时间的时间段将被禁用
   * @default '00:00'
   */
  minTime?: string;
  /**
   * 最大时间，大于该时间的时间段将被禁用
   */
  maxTime?: string;
};

type Value = string;

defineProps<Props<SelectOption, Value>>();

defineEmits<{
  (e: "input", value: Value): void;
  (e: "change", value: Value): void;
  (e: "blur", instance: any): void;
  (e: "focus", instance: any): void;
}>();

/**
 * 	使 input 获取焦点
 */
function focus() {}

defineExpose({
  focus,
});
</script>
