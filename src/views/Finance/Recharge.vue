<template>
  <div class="recharge-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>充值管理</span>
        </div>
      </template>

      <el-form :inline="true" class="search-form">
        <el-form-item label="订单ID">
          <el-input placeholder="请输入订单ID" />
        </el-form-item>
        <el-form-item label="用户ID">
          <el-input placeholder="请输入用户ID" />
        </el-form-item>
        <el-form-item label="支付状态">
          <el-select placeholder="请选择支付状态">
            <el-option label="待支付" value="pending" />
            <el-option label="支付成功" value="success" />
            <el-option label="支付失败" value="failed" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="[]" style="width: 100%">
        <el-table-column prop="orderId" label="订单ID" />
        <el-table-column prop="userId" label="用户ID" />
        <el-table-column prop="amount" label="充值金额">
          <template #default="scope"> ¥{{ scope.row.amount }} </template>
        </el-table-column>
        <el-table-column prop="diamonds" label="钻石数量" />
        <el-table-column prop="paymentMethod" label="支付方式" />
        <el-table-column prop="status" label="支付状态">
          <template #default="scope">
            <el-tag
              :type="
                scope.row.status === 'success'
                  ? 'success'
                  : scope.row.status === 'pending'
                    ? 'warning'
                    : 'danger'
              "
            >
              {{
                scope.row.status === 'success'
                  ? '支付成功'
                  : scope.row.status === 'pending'
                    ? '待支付'
                    : '支付失败'
              }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" />
        <el-table-column label="操作">
          <template #default>
            <el-button type="primary" link>查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination background layout="total, sizes, prev, pager, next" :total="0" />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Recharge'
})
</script>

<style lang="scss" scoped>
.recharge-container {
  padding: 20px;

  .box-card {
    width: 100%;
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
