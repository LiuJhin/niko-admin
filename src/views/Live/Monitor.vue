<template>
  <div class="monitor-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>直播监控</span>
        </div>
      </template>
      <div class="card-content">
        <el-form :inline="true" class="search-form">
          <el-form-item label="房间ID">
            <el-input placeholder="请输入房间ID" />
          </el-form-item>
          <el-form-item label="主播ID">
            <el-input placeholder="请输入主播ID" />
          </el-form-item>
          <el-form-item label="直播类型">
            <el-select placeholder="请选择直播类型">
              <el-option label="普通直播" value="normal" />
              <el-option label="游戏直播" value="game" />
              <el-option label="才艺直播" value="talent" />
              <el-option label="聊天直播" value="chat" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="[]" style="width: 100%">
          <el-table-column prop="roomId" label="房间ID" />
          <el-table-column prop="anchorId" label="主播ID" />
          <el-table-column prop="nickname" label="主播昵称" />
          <el-table-column prop="title" label="直播标题" show-overflow-tooltip />
          <el-table-column prop="type" label="直播类型">
            <template #default="scope">
              <el-tag>{{ scope.row.type }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="onlineUsers" label="在线人数" />
          <el-table-column prop="totalIncome" label="本场收入(钻石)" />
          <el-table-column prop="startTime" label="开播时间" />
          <el-table-column prop="duration" label="直播时长" />
          <el-table-column label="操作">
            <template #default>
              <el-button type="primary" link>查看</el-button>
              <el-button type="success" link>进入房间</el-button>
              <el-button type="warning" link>警告</el-button>
              <el-button type="danger" link>关闭直播</el-button>
            </template>
          </el-table-column>
        </el-table>

        <div class="pagination-container">
          <el-pagination background layout="total, sizes, prev, pager, next" :total="0" />
        </div>
      </div>
    </el-card>

    <!-- 实时监控面板 -->
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>实时监控面板</span>
          <el-button-group>
            <el-button type="primary">实时数据</el-button>
            <el-button>违规记录</el-button>
            <el-button>举报处理</el-button>
          </el-button-group>
        </div>
      </template>
      <div class="monitor-panel">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <span>当前直播间数</span>
                </div>
              </template>
              <div class="card-item">
                <h2>0</h2>
                <span>间</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <span>总在线人数</span>
                </div>
              </template>
              <div class="card-item">
                <h2>0</h2>
                <span>人</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <span>今日礼物流水</span>
                </div>
              </template>
              <div class="card-item">
                <h2>0</h2>
                <span>钻石</span>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover">
              <template #header>
                <div class="card-header">
                  <span>今日举报次数</span>
                </div>
              </template>
              <div class="card-item">
                <h2>0</h2>
                <span>次</span>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Monitor'
})
</script>

<style lang="scss" scoped>
.monitor-container {
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

  .monitor-panel {
    margin-top: 20px;

    .card-item {
      text-align: center;

      h2 {
        margin: 0;
        font-size: 24px;
        color: #409eff;
      }

      span {
        font-size: 14px;
        color: #909399;
      }
    }
  }
}
</style>
