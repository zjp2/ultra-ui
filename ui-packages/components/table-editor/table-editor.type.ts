/** 表格编辑组件表头属性 */
export interface TableEditorColumn {
  key: string
  name: string
  rule?: ValidatorRule
}

/** 表格编辑器校验的属性 */
export interface ValidatorRule {
  /** 是否必填 */
  require?: Boolean,
  /** 预设校验 可以跟require一起使用，但不能跟match一起用 */
  default?: 'id' | 'phone',
  /** 正则 */
  match?: String
}

/** 表格编辑组件组件属性 */
export interface TableEditorProps<T> {
  /** 是否禁止编辑 */
  disabled?: boolean
  /** 双向绑定的值 */
  modelValue?: T[]
  /** columns */
  columns: TableEditorColumn[]
  /** 是否是tree */
  tree?: boolean
  /** childrenKey='children' */
  childrenKey?: string
}

/** 表格编辑组件组件定义的事件 */
export interface TableEditorEmits {
  (e: 'update:modelValue', value: string): void
}

/** 表格编辑组件组件暴露的属性和方法(组件内部使用) */
export interface _TableEditorExposed {}

/** 表格编辑组件组件暴露的属性和方法(组件外部使用, 引用的值会被自动解构) */
export interface TableEditorExposed {
  delete(index: number): void
  delete(indexes: number[]): void

  insert(index: number): void

  validate(): Promise<boolean>
}

/** 新增条目的属性 */
export interface TableEditorCreate {
  /** 是否可编辑 */
  edit: Boolean
}

/** table-editor-button按钮  */
export interface tableEditorType {
  /** 点击事件 */
  (name: 'click'): void
}
