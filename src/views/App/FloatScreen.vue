<template>
  <div class="float-screen-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>飘屏管理</span>
          <el-button type="primary">添加飘屏</el-button>
        </div>
      </template>
      <div class="card-content">
        <el-table :data="[]" style="width: 100%">
          <el-table-column prop="content" label="内容" show-overflow-tooltip />
          <el-table-column prop="type" label="类型" />
          <el-table-column prop="position" label="位置" />
          <el-table-column prop="duration" label="持续时间(秒)" />
          <el-table-column prop="status" label="状态" />
          <el-table-column label="操作">
            <template #default>
              <el-button type="primary" link>编辑</el-button>
              <el-button type="success" link>启用</el-button>
              <el-button type="danger" link>禁用</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'FloatScreen'
})
</script>

<style lang="scss" scoped>
.float-screen-container {
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
