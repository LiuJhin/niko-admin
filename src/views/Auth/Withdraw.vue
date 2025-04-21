<template>
  <div class="withdraw-auth-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>提现认证管理</span>
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
          <el-form-item label="账户类型">
            <el-select placeholder="请选择账户类型">
              <el-option label="支付宝" value="alipay" />
              <el-option label="银行卡" value="bank" />
              <el-option label="微信" value="wechat" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="[]" style="width: 100%">
          <el-table-column prop="userId" label="用户ID" />
          <el-table-column prop="nickname" label="昵称" />
          <el-table-column prop="accountType" label="账户类型" />
          <el-table-column prop="accountName" label="账户名" />
          <el-table-column prop="accountNo" label="账号" show-overflow-tooltip />
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
  name: 'WithdrawAuth'
})
</script>

<style lang="scss" scoped>
.withdraw-auth-container {
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
