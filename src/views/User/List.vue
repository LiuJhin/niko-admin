<template>
  <div class="user-list-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>用户列表管理</span>
        </div>
      </template>
      <div class="card-content">
        <el-form :inline="true" class="search-form">
          <el-form-item label="用户ID">
            <el-input placeholder="请输入用户ID" />
          </el-form-item>
          <el-form-item label="昵称">
            <el-input placeholder="请输入昵称" />
          </el-form-item>
          <el-form-item label="手机号">
            <el-input placeholder="请输入手机号" />
          </el-form-item>
          <el-form-item label="状态">
            <el-select placeholder="请选择状态">
              <el-option label="正常" value="normal" />
              <el-option label="已封禁" value="banned" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="[]" style="width: 100%">
          <el-table-column prop="userId" label="用户ID" />
          <el-table-column prop="avatar" label="头像">
            <template #default="scope">
              <el-image
                style="width: 40px; height: 40px; border-radius: 50%"
                :src="scope.row.avatar"
                fit="cover"
              />
            </template>
          </el-table-column>
          <el-table-column prop="nickname" label="昵称" />
          <el-table-column prop="phone" label="手机号" />
          <el-table-column prop="gender" label="性别">
            <template #default="scope">
              {{ scope.row.gender === 1 ? '男' : scope.row.gender === 2 ? '女' : '未知' }}
            </template>
          </el-table-column>
          <el-table-column prop="level" label="等级">
            <template #default="scope">
              <el-tag>Lv.{{ scope.row.level }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="diamonds" label="钻石余额" />
          <el-table-column prop="status" label="状态">
            <template #default="scope">
              <el-tag :type="scope.row.status === 'normal' ? 'success' : 'danger'">
                {{ scope.row.status === 'normal' ? '正常' : '已封禁' }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="registerTime" label="注册时间" />
          <el-table-column label="操作">
            <template #default="scope">
              <el-button type="primary" link>查看</el-button>
              <el-button :type="scope.row.status === 'normal' ? 'danger' : 'success'" link>
                {{ scope.row.status === 'normal' ? '封禁' : '解封' }}
              </el-button>
              <el-button type="warning" link>充值</el-button>
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
  name: 'UserList'
})
</script>

<style lang="scss" scoped>
.user-list-container {
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
