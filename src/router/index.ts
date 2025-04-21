import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { Layout } from '@/utils/routerHelper'
import { useI18n } from '@/hooks/web/useI18n'
import { NO_RESET_WHITE_LIST } from '@/constants'
import { defineStore } from 'pinia'

const { t } = useI18n()

export const constantRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard/analysis',
    name: 'Root',
    meta: {
      hidden: true
    }
  },
  {
    path: '/redirect',
    component: Layout,
    name: 'RedirectWrap',
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/views/Redirect/Redirect.vue'),
        meta: {}
      }
    ],
    meta: {
      hidden: true,
      noTagsView: true
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/personal',
    component: Layout,
    redirect: '/personal/personal-center',
    name: 'Personal',
    meta: {
      title: t('router.personal'),
      hidden: true,
      canTo: true
    },
    children: [
      {
        path: 'personal-center',
        component: () => import('@/views/Personal/PersonalCenter/PersonalCenter.vue'),
        name: 'PersonalCenter',
        meta: {
          title: t('router.personalCenter'),
          hidden: true,
          canTo: true
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFind',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  }
]

export const asyncRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/analysis',
    name: 'Dashboard',
    meta: {
      title: '首页',
      icon: 'vi-ant-design:home-filled'
    },
    children: [
      {
        path: 'analysis',
        component: () => import('@/views/Dashboard/index.vue'),
        name: 'Analysis',
        meta: {
          title: '首页',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/app',
    component: Layout,
    name: 'App',
    meta: {
      title: 'App管理',
      icon: 'vi-ant-design:mobile-filled',
      alwaysShow: true
    },
    children: [
      {
        path: 'teenager',
        component: () => import('@/views/App/Teenager.vue'),
        name: 'Teenager',
        meta: {
          title: '青少年'
        }
      },
      {
        path: 'banner',
        component: () => import('@/views/App/Banner.vue'),
        name: 'Banner',
        meta: {
          title: 'Banner管理'
        }
      },
      {
        path: 'activity',
        component: () => import('@/views/App/Activity.vue'),
        name: 'Activity',
        meta: {
          title: '活动'
        }
      },
      {
        path: 'splash',
        component: () => import('@/views/App/Splash.vue'),
        name: 'Splash',
        meta: {
          title: '启屏'
        }
      },
      {
        path: 'version',
        component: () => import('@/views/App/Version.vue'),
        name: 'Version',
        meta: {
          title: 'App版本'
        }
      },
      {
        path: 'system-message',
        component: () => import('@/views/App/SystemMessage.vue'),
        name: 'SystemMessage',
        meta: {
          title: '系统消息'
        }
      },
      {
        path: 'float-screen',
        component: () => import('@/views/App/FloatScreen.vue'),
        name: 'FloatScreen',
        meta: {
          title: '飘屏'
        }
      }
    ]
  },
  {
    path: '/auth',
    component: Layout,
    name: 'Auth',
    meta: {
      title: '认证',
      icon: 'vi-ant-design:safety-certificate-filled',
      alwaysShow: true
    },
    children: [
      {
        path: 'anchor',
        component: () => import('@/views/Auth/AnchorAuth.vue'),
        name: 'AnchorAuth',
        meta: {
          title: '主播认证'
        }
      },
      {
        path: 'real-name',
        component: () => import('@/views/Auth/RealName.vue'),
        name: 'RealName',
        meta: {
          title: '实名认证'
        }
      },
      {
        path: 'withdraw',
        component: () => import('@/views/Auth/Withdraw.vue'),
        name: 'Withdraw',
        meta: {
          title: '提现认证'
        }
      }
    ]
  },
  {
    path: '/level',
    component: Layout,
    name: 'Level',
    meta: {
      title: '等级',
      icon: 'vi-ant-design:star-filled',
      alwaysShow: true
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/Level/UserLevel.vue'),
        name: 'UserLevel',
        meta: {
          title: '用户等级'
        }
      },
      {
        path: 'anchor',
        component: () => import('@/views/Level/AnchorLevel.vue'),
        name: 'AnchorLevel',
        meta: {
          title: '主播等级'
        }
      }
    ]
  },
  {
    path: '/mall',
    component: Layout,
    name: 'Mall',
    meta: {
      title: '商城',
      icon: 'vi-ant-design:shop-filled',
      alwaysShow: true
    },
    children: [
      {
        path: 'title',
        component: () => import('@/views/Mall/Title.vue'),
        name: 'Title',
        meta: {
          title: '称号'
        }
      },
      {
        path: 'avatar-frame',
        component: () => import('@/views/Mall/AvatarFrame.vue'),
        name: 'AvatarFrame',
        meta: {
          title: '头像框'
        }
      },
      {
        path: 'bubble',
        component: () => import('@/views/Mall/Bubble.vue'),
        name: 'Bubble',
        meta: {
          title: '气泡框'
        }
      },
      {
        path: 'car',
        component: () => import('@/views/Mall/Car.vue'),
        name: 'Car',
        meta: {
          title: '座驾'
        }
      },
      {
        path: 'entrance-effect',
        component: () => import('@/views/Mall/EntranceEffect.vue'),
        name: 'EntranceEffect',
        meta: {
          title: '进场特效'
        }
      },
      {
        path: 'live-tag',
        component: () => import('@/views/Mall/LiveTag.vue'),
        name: 'LiveTag',
        meta: {
          title: '直播标签'
        }
      },
      {
        path: 'special-number',
        component: () => import('@/views/Mall/SpecialNumber.vue'),
        name: 'SpecialNumber',
        meta: {
          title: '靓号'
        }
      },
      {
        path: 'mystery',
        component: () => import('@/views/Mall/Mystery.vue'),
        name: 'Mystery',
        meta: {
          title: '神秘人'
        }
      }
    ]
  },
  {
    path: '/gift',
    component: Layout,
    name: 'Gift',
    meta: {
      title: '礼物',
      icon: 'vi-ant-design:gift-filled',
      alwaysShow: true
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/Live/Gift.vue'),
        name: 'GiftList',
        meta: {
          title: '礼物列表'
        }
      }
    ]
  },
  {
    path: '/game',
    component: Layout,
    name: 'Game',
    meta: {
      title: '游戏',
      icon: 'vi-ant-design:trophy-filled'
    }
  },
  {
    path: '/moment',
    component: Layout,
    name: 'Moment',
    meta: {
      title: '动态',
      icon: 'vi-ant-design:camera-filled',
      alwaysShow: true
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/Moment/List.vue'),
        name: 'MomentList',
        meta: {
          title: '动态列表'
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    name: 'User',
    meta: {
      title: '用户',
      icon: 'vi-ant-design:user-filled',
      alwaysShow: true
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/User/List.vue'),
        name: 'UserList',
        meta: {
          title: '用户列表'
        }
      }
    ]
  },
  {
    path: '/live',
    component: Layout,
    name: 'Live',
    meta: {
      title: '直播管理',
      icon: 'vi-ant-design:video-camera-filled',
      alwaysShow: true
    },
    children: [
      {
        path: 'anchor',
        component: () => import('@/views/Live/Anchor.vue'),
        name: 'Anchor',
        meta: {
          title: '主播'
        }
      },
      {
        path: 'monitor',
        component: () => import('@/views/Live/Monitor.vue'),
        name: 'Monitor',
        meta: {
          title: '直播监控'
        }
      }
    ]
  },
  {
    path: '/guild',
    component: Layout,
    name: 'Guild',
    meta: {
      title: '公会',
      icon: 'vi-ant-design:team-filled'
    }
  },
  {
    path: '/finance',
    component: Layout,
    name: 'Finance',
    meta: {
      title: '财务',
      icon: 'vi-ant-design:dollar-filled',
      alwaysShow: true
    },
    children: [
      {
        path: 'recharge',
        component: () => import('@/views/Finance/Recharge.vue'),
        name: 'Recharge',
        meta: {
          title: '充值'
        }
      }
    ]
  }
]

// 重置路由
export const resetRouter = (): void => {
  const resetWhiteNameList = NO_RESET_WHITE_LIST
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !resetWhiteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: constantRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
