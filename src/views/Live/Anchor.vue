<template>
  <div class="anchor-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>主播管理</span>
        </div>
      </template>
      <div class="card-content">
        <el-form :inline="true" class="search-form">
          <el-form-item label="主播ID">
            <el-input placeholder="请输入主播ID" />
          </el-form-item>
          <el-form-item label="昵称">
            <el-input placeholder="请输入昵称" />
          </el-form-item>
          <el-form-item label="认证状态">
            <el-select placeholder="请选择认证状态">
              <el-option label="未认证" value="unverified" />
              <el-option label="已认证" value="verified" />
              <el-option label="认证失败" value="failed" />
            </el-select>
          </el-form-item>
          <el-form-item label="直播状态">
            <el-select placeholder="请选择直播状态">
              <el-option label="未开播" value="offline" />
              <el-option label="直播中" value="online" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="[]" style="width: 100%">
          <el-table-column prop="anchorId" label="主播ID" />
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
          <el-table-column prop="level" label="等级">
            <template #default="scope">
              <el-tag>Lv.{{ scope.row.level }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="fans" label="粉丝数" />
          <el-table-column prop="totalIncome" label="总收入(钻石)" />
          <el-table-column prop="authStatus" label="认证状态">
            <template #default="scope">
              <el-tag :type="scope.row.authStatus === 'verified' ? 'success' : 'warning'">
                {{
                  scope.row.authStatus === 'verified'
                    ? '已认证'
                    : scope.row.authStatus === 'unverified'
                      ? '未认证'
                      : '认证失败'
                }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="liveStatus" label="直播状态">
            <template #default="scope">
              <el-tag :type="scope.row.liveStatus === 'online' ? 'success' : 'info'">
                {{ scope.row.liveStatus === 'online' ? '直播中' : '未开播' }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <el-button type="primary" link>查看</el-button>
              <el-button type="warning" link>禁播</el-button>
              <el-button type="danger" link>封禁</el-button>
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
  name: 'Anchor'
})

const handleEdit = () => {
  // ... existing code ...
}
</script>

<style lang="scss" scoped>
.anchor-container {
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
