/** 表格编辑组件表头属性 */
export interface TableEditorColumn {
  key: string
  name: string
  // rule?: ValidatorRule
}

/** 表格编辑组件组件属性 */
export interface TableEditorProps<T> {
  /** 是否禁止编辑 */
  disabled?: boolean
  /** modelValue */
  modelValue?: T[]
  /** columns */
  columns: TableEditorColumn[]
  /** 树 */
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

/** table-editor-button按钮  */
export interface tableEditorType {
  /** 点击事件 */
  (name: 'click'): void
}
