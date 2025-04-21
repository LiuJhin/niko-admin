<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import type { EChartsOption } from 'echarts'
import { useECharts } from '@/hooks/web/useECharts'

const props = defineProps<{
  chartData: {
    dates: string[]
    series: {
      name: string
      data: number[]
    }[]
  }
}>()

const chartRef = ref<HTMLDivElement>()

const { setOptions } = useECharts(chartRef)

const getOptions = (): EChartsOption => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['在线人数趋势', '日登录人数', '充值']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.chartData.dates,
        axisLabel: {
          rotate: 45
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '人数',
        position: 'left',
        axisLabel: {
          formatter: '{value} 人'
        }
      },
      {
        type: 'value',
        name: '金额',
        position: 'right',
        axisLabel: {
          formatter: '{value} 元'
        }
      }
    ],
    series: [
      {
        name: '在线人数趋势',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: 'rgb(128, 255, 165)'
        },
        emphasis: {
          focus: 'series'
        },
        data: props.chartData.series[0].data
      },
      {
        name: '日登录人数',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: 'rgb(0, 221, 255)'
        },
        emphasis: {
          focus: 'series'
        },
        data: props.chartData.series[1].data
      },
      {
        name: '充值',
        type: 'line',
        yAxisIndex: 1,
        smooth: true,
        lineStyle: {
          width: 2,
          color: '#ff7070'
        },
        showSymbol: false,
        emphasis: {
          focus: 'series'
        },
        data: props.chartData.series[2].data
      }
    ]
  }
}

watch(
  () => props.chartData,
  () => {
    setOptions(getOptions())
  },
  {
    deep: true
  }
)

onMounted(() => {
  setOptions(getOptions())
})
</script>

<template>
  <div ref="chartRef" class="trend-chart-container"></div>
</template>

<style lang="scss" scoped>
.trend-chart-container {
  width: 100%;
  height: 400px;
}
</style>
