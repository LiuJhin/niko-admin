<template>
  <div class="live-tag-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>直播标签管理</span>
          <el-button type="primary">添加标签</el-button>
        </div>
      </template>
      <div class="card-content">
        <el-table :data="[]" style="width: 100%">
          <el-table-column prop="name" label="标签名称" />
          <el-table-column prop="icon" label="标签图标">
            <template #default="scope">
              <el-image style="width: 40px; height: 40px" :src="scope.row.icon" fit="contain" />
            </template>
          </el-table-column>
          <el-table-column prop="price" label="价格(钻石)" />
          <el-table-column prop="validityPeriod" label="有效期(天)" />
          <el-table-column prop="color" label="标签颜色">
            <template #default="scope">
              <div class="color-block" :style="{ backgroundColor: scope.row.color }" />
            </template>
          </el-table-column>
          <el-table-column prop="description" label="描述" show-overflow-tooltip />
          <el-table-column prop="status" label="状态">
            <template #default="scope">
              <el-tag :type="scope.row.status === 1 ? 'success' : 'danger'">
                {{ scope.row.status === 1 ? '上架' : '下架' }}
              </el-tag>
            </template>
          </el-table-column>
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
  name: 'LiveTag'
})
</script>

<style lang="scss" scoped>
.live-tag-container {
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

  .color-block {
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
