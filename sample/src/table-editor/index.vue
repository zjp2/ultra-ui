<template>
  <u-table-editor :columns="columns" v-model="modelValue">
    <template #dd="{ row }">
      {{ row }}
      <input v-model="row.dd" />
    </template>
  </u-table-editor>
</template>
<script lang="ts" setup>
import { reactive, shallowRef } from 'vue'

const columns = shallowRef([{ key: 'dd', name: '哈哈哈1' }])

const modelValue = reactive([])
</script>
