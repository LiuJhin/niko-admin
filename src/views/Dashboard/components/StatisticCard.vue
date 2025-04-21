<script setup lang="ts">
import { ElCard } from 'element-plus'

defineProps<{
  title: string
  value: string
  description: string
  hasGrowth?: boolean
}>()
</script>

<template>
  <ElCard class="statistic-card" shadow="never">
    <div class="card-header">
      <span class="title">{{ title }}</span>
      <span class="value">{{ value }}</span>
      <span v-if="hasGrowth" class="growth">(0)</span>
    </div>
    <div class="description">{{ description }}</div>
  </ElCard>
</template>

<style lang="scss" scoped>
.statistic-card {
  :deep(.el-card__body) {
    padding: 20px;
  }

  .card-header {
    margin-bottom: 8px;

    .title {
      font-size: 14px;
      color: var(--el-text-color-regular);
      display: block;
      margin-bottom: 8px;
    }

    .value {
      font-size: 24px;
      font-weight: bold;
      color: var(--el-text-color-primary);
    }

    .growth {
      font-size: 12px;
      color: var(--el-color-success);
      margin-left: 8px;
    }
  }

  .description {
    font-size: 12px;
    color: var(--el-text-color-secondary);
  }
}
</style>
