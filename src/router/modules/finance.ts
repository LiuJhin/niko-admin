import { Layout } from '@/utils/routerHelper'
import type { AppRouteRecordRaw } from '@/types/router'

const finance: AppRouteRecordRaw = {
  path: '/finance',
  component: Layout,
  name: 'Finance',
  meta: {
    title: '财务管理',
    icon: 'vi-ant-design:dollar-filled',
    alwaysShow: true
  },
  children: [
    {
      path: 'recharge',
      component: () => import('@/views/Finance/Recharge.vue'),
      name: 'Recharge',
      meta: {
        title: '充值管理'
      }
    },
    {
      path: 'withdraw',
      component: () => import('@/views/Finance/Withdraw.vue'),
      name: 'Withdraw',
      meta: {
        title: '提现管理'
      }
    }
  ]
}

export default finance
