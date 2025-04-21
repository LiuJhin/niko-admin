<template>
  <div class="user-level-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>用户等级管理</span>
          <el-button type="primary">添加等级</el-button>
        </div>
      </template>
      <div class="card-content">
        <el-table :data="[]" style="width: 100%">
          <el-table-column prop="level" label="等级" />
          <el-table-column prop="name" label="等级名称" />
          <el-table-column prop="icon" label="等级图标">
            <template #default="scope">
              <el-image style="width: 40px; height: 40px" :src="scope.row.icon" fit="contain" />
            </template>
          </el-table-column>
          <el-table-column prop="experience" label="所需经验值" />
          <el-table-column prop="benefits" label="等级权益" show-overflow-tooltip />
          <el-table-column prop="status" label="状态" />
          <el-table-column label="操作">
            <template #default>
              <el-button type="primary" link>编辑</el-button>
              <el-button type="danger" link>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>

    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>经验值规则配置</span>
        </div>
      </template>
      <div class="card-content">
        <el-form label-width="120px">
          <el-form-item label="每日签到">
            <el-input-number :min="0" placeholder="请输入经验值" />
            <span class="ml-2">经验值</span>
          </el-form-item>
          <el-form-item label="观看直播">
            <el-input-number :min="0" placeholder="请输入经验值" />
            <span class="ml-2">经验值/分钟</span>
          </el-form-item>
          <el-form-item label="送礼物">
            <el-input-number :min="0" placeholder="请输入经验值" />
            <span class="ml-2">经验值/钻石</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">保存配置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'UserLevel'
})
</script>

<style lang="scss" scoped>
.user-level-container {
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

  .ml-2 {
    margin-left: 8px;
  }
}
</style>
