<template>
  <slot name="trigger"></slot>
  <slot name="tip"></slot>
</template>

<script lang="ts" setup>
defineProps<{
  /**
   * 上传的地址
   */
  action: string;
  /**
   * 设置上传的请求头部
   */
  headers?: Record<string, string>;
  /**
   * 是否支持多选文件
   */
  multiple?: boolean;
  /**
   * 上传时附带的额外参数
   */
  data?: Record<string, string>;
  /**
   * 上传的文件字段名
   * 
   * @default 'file'
   */
  name?: string;
  /**
   * 支持发送 cookie 凭证信息
   * 
   * @default false
   */
  withCredentials?: boolean;
  /**
   * 是否显示已上传文件列表
   * 
   * @default true
   */
  showFileList?: boolean;
  /**
   * 是否启用拖拽上传
   */
  drag?: boolean;
  /**
   * 接受上传的文件类型（thumbnail-mode 模式下此参数无效）
   */
  accept?: string;
  /**
   * 点击文件列表中已上传的文件时的钩子
   */
  onPreview?: (file: File) => void;
  /**
   * 文件列表移除文件时的钩子
   */
  onRemove?: (file: File, fileList: File[]) => void;
  /**
   * 文件上传成功时的钩子
   */
  onSuccess?: (response: any, file: File, fileList: File[]) => void;
  /**
   * 文件上传失败时的钩子
   */
  onError?: (err: any, file: File, fileList: File[]) => void;
  /**
   * 文件上传时的钩子
   */
  onProgress?: (event: any, file: File, fileList: File[]) => void;
  /**
   * 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
   */
  onChange?: (file: File, fileList: File[]) => void;
  /**
   * 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
   */
  beforeUpload?: (file: File) => boolean | Promise<boolean>;
  /**
   * 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。
   */
  beforeRemove?: (file: File, fileList: File[]) => boolean | Promise<boolean>;
  /**
   * 文件列表的类型
   * 
   * @default 'text'
   */
  listType?: 'text' | 'picture' | 'picture-card';
  /**
   * 是否在选取文件后立即进行上传
   * 
   * @default true
   */
  autoUpload?: boolean;
  /**
   * 上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]
   * 
   * @default []
   */
  fileList?: File[];
  /**
   * 覆盖默认的上传行为，可以自定义上传的实现
   */
  httpRequest?: (options: any) => void;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 最大允许上传个数
   */
  limit?: number;
  /**
   * 文件超出个数限制时的钩子
   */
  onExceed?: (files: File[], fileList: File[]) => void;
}>();


/**
 * 清空已上传的文件列表（该方法不支持在 before-upload 中调用）
 */
function clearFiles() {}

/**
 * 取消上传请求
 * @param file 
 */
function abort(file: File) {}

/**
 * 手动上传文件列表
 */
function submit() {}

defineExpose({
  clearFiles,
  abort,
  submit
})
</script>
