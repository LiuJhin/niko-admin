import type { EChartsOption } from 'echarts'
import type { Ref } from 'vue'
import { unref, ref } from 'vue'
import { tryOnUnmounted } from '@vueuse/core'
import { useDebounceFn } from '@vueuse/core'
import * as echarts from 'echarts'

export function useECharts(
  elRef: Ref<HTMLDivElement | undefined>,
  theme: 'light' | 'dark' | 'default' = 'default'
) {
  let chartInstance: echarts.ECharts | null = null

  function initCharts() {
    const el = unref(elRef)
    if (!el) return

    chartInstance = echarts.init(el, theme)
  }

  function setOptions(options: EChartsOption, clear = true) {
    if (!chartInstance) {
      initCharts()
    }

    if (!chartInstance) return

    clear && chartInstance.clear()
    chartInstance.setOption(options)
  }

  const resize = useDebounceFn(() => {
    chartInstance?.resize()
  }, 200)

  window.addEventListener('resize', resize)

  tryOnUnmounted(() => {
    if (!chartInstance) return
    window.removeEventListener('resize', resize)
    chartInstance.dispose()
    chartInstance = null
  })

  function getInstance(): echarts.ECharts | null {
    if (!chartInstance) {
      initCharts()
    }
    return chartInstance
  }

  return {
    setOptions,
    resize,
    echarts,
    getInstance
  }
}
