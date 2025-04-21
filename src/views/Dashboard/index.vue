<script setup lang="ts">
import { ref } from 'vue'
import StatisticCard from './components/StatisticCard.vue'
import TrendChart from './components/TrendChart.vue'
import AuditTable from './components/AuditTable.vue'

const statisticData = ref([
  {
    title: '在线人数 / 正在直播',
    value: '1 / 0',
    description: '当前在线人数/正在直播房间'
  },
  {
    title: '注册人数 / 主播注册人数',
    value: '0 / 0',
    description: '当日新增会员人数/当日新增主播人数',
    hasGrowth: true
  },
  {
    title: '登陆人数 / 开播人数',
    value: '0 / 0',
    description: '今日活跃账号/今日开播的主播人数',
    hasGrowth: true
  },
  {
    title: '封面审核数',
    value: '0',
    description: '主播封面待审核数'
  }
])

const chartData = ref({
  dates: [
    '03-22',
    '03-23',
    '03-24',
    '03-25',
    '03-26',
    '03-27',
    '03-28',
    '03-29',
    '03-30',
    '03-31',
    '04-01',
    '04-02',
    '04-03',
    '04-04',
    '04-05',
    '04-06',
    '04-07',
    '04-08',
    '04-09',
    '04-10',
    '04-11',
    '04-12',
    '04-13',
    '04-14',
    '04-15',
    '04-16',
    '04-17',
    '04-18',
    '04-19',
    '04-20',
    '04-21'
  ],
  series: [
    {
      name: '在线人数趋势',
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ]
    },
    {
      name: '日登录人数',
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ]
    },
    {
      name: '充值',
      data: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ]
    }
  ]
})

const anchorAuditData = ref([])
const momentAuditData = ref([
  {
    id: '0',
    username: '暂无数据',
    content: '农民工没'
  },
  {
    id: '0',
    username: '暂无数据',
    content: '很爱要喝去'
  }
])
</script>

<template>
  <div class="dashboard">
    <!-- 统计卡片区域 -->
    <div class="statistic-cards">
      <StatisticCard
        v-for="(item, index) in statisticData"
        :key="index"
        :title="item.title"
        :value="item.value"
        :description="item.description"
        :has-growth="item.hasGrowth"
      />
    </div>

    <!-- 趋势图表区域 -->
    <div class="trend-chart">
      <TrendChart :chart-data="chartData" />
    </div>

    <!-- 审核表格区域 -->
    <div class="audit-tables">
      <AuditTable title="主播认证-待审核" :data="anchorAuditData" type="anchor" :total="0" />
      <AuditTable title="动态管理-待审核" :data="momentAuditData" type="moment" :total="2" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  padding: 20px;

  .statistic-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 20px;
  }

  .trend-chart {
    background: var(--el-bg-color);
    border-radius: 4px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .audit-tables {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
</style>
