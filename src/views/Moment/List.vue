<template>
  <div class="moment-list-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>动态列表管理</span>
        </div>
      </template>
      <div class="card-content">
        <el-form :inline="true" class="search-form">
          <el-form-item label="用户ID">
            <el-input placeholder="请输入用户ID" />
          </el-form-item>
          <el-form-item label="内容类型">
            <el-select placeholder="请选择内容类型">
              <el-option label="图文" value="image" />
              <el-option label="视频" value="video" />
            </el-select>
          </el-form-item>
          <el-form-item label="状态">
            <el-select placeholder="请选择状态">
              <el-option label="正常" value="normal" />
              <el-option label="已删除" value="deleted" />
              <el-option label="已屏蔽" value="blocked" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="[]" style="width: 100%">
          <el-table-column prop="userId" label="用户ID" />
          <el-table-column prop="nickname" label="用户昵称" />
          <el-table-column prop="content" label="动态内容" show-overflow-tooltip />
          <el-table-column prop="type" label="内容类型">
            <template #default="scope">
              <el-tag>{{ scope.row.type === 'image' ? '图文' : '视频' }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="likes" label="点赞数" />
          <el-table-column prop="comments" label="评论数" />
          <el-table-column prop="createTime" label="发布时间" />
          <el-table-column prop="status" label="状态">
            <template #default="scope">
              <el-tag
                :type="
                  scope.row.status === 'normal'
                    ? 'success'
                    : scope.row.status === 'deleted'
                      ? 'danger'
                      : 'warning'
                "
              >
                {{
                  scope.row.status === 'normal'
                    ? '正常'
                    : scope.row.status === 'deleted'
                      ? '已删除'
                      : '已屏蔽'
                }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="scope">
              <el-button type="primary" link>查看</el-button>
              <el-button type="danger" link v-if="scope.row.status === 'normal'">删除</el-button>
              <el-button type="warning" link v-if="scope.row.status === 'normal'">屏蔽</el-button>
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
  name: 'MomentList'
})
</script>

<style lang="scss" scoped>
.moment-list-container {
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
