<template>
  <div class="version-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>App版本管理</span>
          <el-button type="primary">添加版本</el-button>
        </div>
      </template>
      <div class="card-content">
        <el-table :data="[]" style="width: 100%">
          <el-table-column prop="version" label="版本号" />
          <el-table-column prop="platform" label="平台" />
          <el-table-column prop="downloadUrl" label="下载地址" />
          <el-table-column prop="isForce" label="是否强制更新" />
          <el-table-column prop="status" label="状态" />
          <el-table-column prop="releaseTime" label="发布时间" />
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
  name: 'Version'
})
</script>

<style lang="scss" scoped>
.version-container {
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
