<template>
  <table :class="cls.b">
    <!-- 表头 -->
    <thead :class="cls.e('thead')">
      <th :class="cls.e('th')" v-for="item in columns">
        {{ item.name }}
      </th>

      <th :class="cls.e('th-action-columns')">操作</th>
    </thead>
    <!-- 表体 -->
    <tbody :class="cls.e('tbody')">
      <tr v-for="dataItem in modelValue">
        <td v-for="columnsItem in columns">
          <!-- {{ columnsItem.key }} -->
          <slot
            v-if="dataItem.edit"
            :name="columnsItem.key"
            :row="dataItem"
          ></slot>
          <span v-else>
            {{ dataItem[columnsItem.key] }}
          </span>
        </td>
        <td :class="cls.e('td-action-data')">
          <slot name="action">
            {{ dataItem.edit }}
            <span @click="dataItem.edit = !dataItem.edit">
              {{ dataItem.edit ? '保存' : '编辑' }}
            </span>
            <span>插入</span>
            <span>删除</span>
          </slot>
        </td>
      </tr>
      <tr>
        <td :colspan="columns.length + 1">
          <tableEditorButton @click="onCreateData">新建</tableEditorButton>
        </td>
      </tr>
    </tbody>

    <t-foot>
      <!-- style="border-top: 1px solid #dcdfe6;" -->
      <tr>
        <td colspan="5">表尾合计</td>
      </tr>
    </t-foot>
  </table>
</template>

<script lang="ts" setup>
import { bem } from '@ui/utils'
import type { TableEditorProps } from './table-editor.type'
import tableEditorButton from './table-editor-button.vue'

defineOptions({
  name: 'UTableEditor'
})

const props = defineProps<TableEditorProps>()
  // /** 是否禁止编辑 */
  // disabled: false,
  // /** modelValue */
  // modelValue: ,
  // /** columns */
  // columns: {},
  // /** 树 */
  // tree: { type: Boolean },
  // /** childrenKey='children' */
  // childrenKey: { type: String }

/** 点击新增 */
const onCreateData = async () => {
  let obj = {
    /** 是否可编辑 */
    edit: true
  }
  console.log(props, 'props')
  props.modelValue.push(obj)
}

const cls = bem('table-editor')
</script>
<style lang="scss" scoped>
td {
  text-align: center;
  padding: 10px 0;
  min-width: 150px;
}
// m.css-var(color, vars.$color-types)

th {
  text-align: center;
  padding: 15px;
}

table thead tr {
  background-color: #008c8c;
  color: #fff;
}

table tbody tr:nth-child(odd) {
  // background-color: #eee;
}

table tbody tr:hover {
  background-color: #ccc;
}

table tbody tr:last-child:hover {
  background-color: initial;
}

// table tbody tr td:first-child {
//   color: #f40;
// }

table tfoot tr td {
  text-align: right;
  padding-right: 20px;
}
</style>
