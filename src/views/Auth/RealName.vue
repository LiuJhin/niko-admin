<template>
  <div class="real-name-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>实名认证管理</span>
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
          <el-form-item label="用户ID">
            <el-input placeholder="请输入用户ID" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="[]" style="width: 100%">
          <el-table-column prop="userId" label="用户ID" />
          <el-table-column prop="nickname" label="昵称" />
          <el-table-column prop="realName" label="真实姓名" />
          <el-table-column prop="idCard" label="身份证号" show-overflow-tooltip />
          <el-table-column prop="phone" label="手机号" />
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

        <div class="pagination-container">
          <el-pagination background layout="total, sizes, prev, pager, next" :total="0" />
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'RealName'
})
</script>

<style lang="scss" scoped>
.real-name-container {
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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
