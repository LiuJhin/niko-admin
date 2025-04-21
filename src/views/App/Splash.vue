<template>
  <div class="splash-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>启屏页管理</span>
          <el-button type="primary">添加启屏页</el-button>
        </div>
      </template>
      <div class="card-content">
        <el-table :data="[]" style="width: 100%">
          <el-table-column prop="title" label="标题" />
          <el-table-column prop="image" label="图片">
            <template #default="scope">
              <el-image style="width: 100px; height: 50px" :src="scope.row.image" fit="cover" />
            </template>
          </el-table-column>
          <el-table-column prop="duration" label="展示时长(秒)" />
          <el-table-column prop="status" label="状态" />
          <el-table-column label="操作">
            <template #default>
              <el-button type="primary" link>编辑</el-button>
              <el-button type="danger" link>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Splash'
})
</script>

<style lang="scss" scoped>
.splash-container {
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
