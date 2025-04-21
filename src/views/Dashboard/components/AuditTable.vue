<script setup lang="ts">
import { ElCard, ElTable, ElTableColumn, ElButton } from 'element-plus'

defineProps<{
  title: string
  data: any[]
  type: 'anchor' | 'moment'
  total: number
}>()
</script>

<template>
  <ElCard class="audit-table" shadow="never">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
        <span class="total">{{ total }}人</span>
        <ElButton type="primary" size="small">去审核</ElButton>
      </div>
    </template>
    <ElTable :data="data" style="width: 100%" size="small">
      <ElTableColumn prop="id" label="账号" width="180" />
      <ElTableColumn
        :prop="type === 'anchor' ? 'anchorName' : 'username'"
        :label="type === 'anchor' ? '主播昵称' : '用户昵称'"
      />
      <ElTableColumn
        :prop="type === 'anchor' ? 'familyName' : 'content'"
        :label="type === 'anchor' ? '家族名称' : '动态内容'"
      />
    </ElTable>
  </ElCard>
</template>

<style lang="scss" scoped>
.audit-table {
  :deep(.el-card__header) {
    padding: 12px 20px;
    border-bottom: 1px solid var(--el-border-color-light);
  }

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .total {
      color: var(--el-color-primary);
      margin-right: auto;
      margin-left: 12px;
    }
  }
}
</style>
