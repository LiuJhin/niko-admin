<template>
  <div class="bubble-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>气泡框管理</span>
          <el-button type="primary">添加气泡框</el-button>
        </div>
      </template>
      <div class="card-content">
        <el-table :data="[]" style="width: 100%">
          <el-table-column prop="name" label="名称" />
          <el-table-column prop="preview" label="预览">
            <template #default="scope">
              <el-image style="width: 120px; height: 60px" :src="scope.row.preview" fit="contain" />
            </template>
          </el-table-column>
          <el-table-column prop="price" label="价格(钻石)" />
          <el-table-column prop="validityPeriod" label="有效期(天)" />
          <el-table-column prop="animation" label="是否动态">
            <template #default="scope">
              {{ scope.row.animation ? '是' : '否' }}
            </template>
          </el-table-column>
          <el-table-column prop="description" label="描述" show-overflow-tooltip />
          <el-table-column prop="status" label="状态" />
          <el-table-column prop="sort" label="排序" />
          <el-table-column label="操作">
            <template #default>
              <el-button type="primary" link>编辑</el-button>
              <el-button type="success" link>上架</el-button>
              <el-button type="danger" link>下架</el-button>
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
  name: 'Bubble'
})
</script>

<style lang="scss" scoped>
.bubble-container {
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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
