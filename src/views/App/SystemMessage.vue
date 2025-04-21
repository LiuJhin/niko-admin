<template>
  <div class="system-message-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>系统消息管理</span>
          <el-button type="primary">发送消息</el-button>
        </div>
      </template>
      <div class="card-content">
        <el-table :data="[]" style="width: 100%">
          <el-table-column prop="title" label="标题" />
          <el-table-column prop="content" label="内容" show-overflow-tooltip />
          <el-table-column prop="type" label="消息类型" />
          <el-table-column prop="sendTime" label="发送时间" />
          <el-table-column prop="status" label="状态" />
          <el-table-column label="操作">
            <template #default>
              <el-button type="primary" link>查看</el-button>
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
  name: 'SystemMessage'
})
</script>

<style lang="scss" scoped>
.system-message-container {
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
