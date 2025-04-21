<template>
  <div class="special-number-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>靓号管理</span>
          <el-button type="primary">添加靓号</el-button>
        </div>
      </template>
      <div class="card-content">
        <el-form :inline="true" class="search-form">
          <el-form-item label="靓号">
            <el-input placeholder="请输入靓号" />
          </el-form-item>
          <el-form-item label="状态">
            <el-select placeholder="请选择状态">
              <el-option label="未售出" value="unsold" />
              <el-option label="已售出" value="sold" />
              <el-option label="已下架" value="offline" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="[]" style="width: 100%">
          <el-table-column prop="number" label="靓号" />
          <el-table-column prop="price" label="价格(钻石)" />
          <el-table-column prop="level" label="等级">
            <template #default="scope">
              <el-tag>{{ scope.row.level }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="owner" label="拥有者" />
          <el-table-column prop="status" label="状态">
            <template #default="scope">
              <el-tag :type="scope.row.status === 'unsold' ? 'success' : 'info'">
                {{ scope.row.status === 'unsold' ? '未售出' : '已售出' }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" />
          <el-table-column label="操作">
            <template #default="scope">
              <el-button type="primary" link>编辑</el-button>
              <el-button type="danger" link v-if="scope.row.status === 'unsold'">下架</el-button>
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
  name: 'SpecialNumber'
})
</script>

<style lang="scss" scoped>
.special-number-container {
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
