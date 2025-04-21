<template>
  <div class="anchor-auth-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>主播认证管理</span>
        </div>
      </template>
      <div class="card-content">
        <el-form :inline="true" class="search-form">
          <el-form-item label="认证状态">
            <el-select placeholder="请选择认证状态">
              <el-option label="待审核" value="pending" />
              <el-option label="已通过" value="approved" />
              <el-option label="已拒绝" value="rejected" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="[]" style="width: 100%">
          <el-table-column prop="userId" label="用户ID" />
          <el-table-column prop="nickname" label="昵称" />
          <el-table-column prop="realName" label="真实姓名" />
          <el-table-column prop="idCard" label="身份证号" />
          <el-table-column prop="status" label="认证状态" />
          <el-table-column prop="submitTime" label="提交时间" />
          <el-table-column label="操作">
            <template #default>
              <el-button type="primary" link>查看</el-button>
              <el-button type="success" link>通过</el-button>
              <el-button type="danger" link>拒绝</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AnchorAuth'
})
</script>

<style lang="scss" scoped>
.anchor-auth-container {
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

  .search-form {
    margin-bottom: 20px;
  }
}
</style>
