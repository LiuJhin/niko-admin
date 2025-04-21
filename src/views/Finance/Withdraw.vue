<template>
  <div class="withdraw-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>提现管理</span>
        </div>
      </template>

      <el-form :inline="true" class="search-form">
        <el-form-item label="提现ID">
          <el-input placeholder="请输入提现ID" />
        </el-form-item>
        <el-form-item label="用户ID">
          <el-input placeholder="请输入用户ID" />
        </el-form-item>
        <el-form-item label="提现状态">
          <el-select placeholder="请选择提现状态">
            <el-option label="待审核" value="pending" />
            <el-option label="已通过" value="approved" />
            <el-option label="已拒绝" value="rejected" />
            <el-option label="已打款" value="paid" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="[]" style="width: 100%">
        <el-table-column prop="withdrawId" label="提现ID" />
        <el-table-column prop="userId" label="用户ID" />
        <el-table-column prop="amount" label="提现金额">
          <template #default="scope"> ¥{{ scope.row.amount }} </template>
        </el-table-column>
        <el-table-column prop="diamonds" label="钻石数量" />
        <el-table-column prop="bankInfo" label="银行卡信息" show-overflow-tooltip />
        <el-table-column prop="status" label="提现状态">
          <template #default="scope">
            <el-tag :type="getStatusType(scope.row.status)">
              {{ getStatusText(scope.row.status) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="申请时间" />
        <el-table-column prop="updateTime" label="更新时间" />
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button v-if="scope.row.status === 'pending'" type="success" link>通过</el-button>
            <el-button v-if="scope.row.status === 'pending'" type="danger" link>拒绝</el-button>
            <el-button v-if="scope.row.status === 'approved'" type="primary" link
              >确认打款</el-button
            >
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
  name: 'Withdraw'
})

const getStatusType = (status: string): 'success' | 'warning' | 'info' | 'danger' => {
  const statusMap: Record<string, 'success' | 'warning' | 'info' | 'danger'> = {
    pending: 'warning',
    approved: 'success',
    rejected: 'danger',
    paid: 'info'
  }
  return statusMap[status] || 'info'
}

const getStatusText = (status: string) => {
  const statusMap: Record<string, string> = {
    pending: '待审核',
    approved: '已通过',
    rejected: '已拒绝',
    paid: '已打款'
  }
  return statusMap[status] || status
}
</script>

<style lang="scss" scoped>
.withdraw-container {
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
