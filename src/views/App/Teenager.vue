<template>
  <div class="teenager-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>青少年管理</span>
        </div>
      </template>
      <div class="card-content">
        <!-- 在这里添加具体的内容 -->
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Teenager'
})
</script>

<style lang="scss" scoped>
.teenager-container {
  padding: 20px;

  .box-card {
    width: 100%;
    margin-bottom: 20px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
