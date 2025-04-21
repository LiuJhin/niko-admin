<template>
  <div class="activity-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>活动管理</span>
          <el-button type="primary">新建活动</el-button>
        </div>
      </template>
      <div class="card-content">
        <el-table :data="[]" style="width: 100%">
          <el-table-column prop="title" label="活动名称" />
          <el-table-column prop="startTime" label="开始时间" />
          <el-table-column prop="endTime" label="结束时间" />
          <el-table-column prop="status" label="状态" />
          <el-table-column label="操作">
            <template #default>
              <el-button type="primary" link>编辑</el-button>
              <el-button type="success" link>上线</el-button>
              <el-button type="danger" link>下线</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Activity'
})
</script>

<style lang="scss" scoped>
.activity-container {
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
