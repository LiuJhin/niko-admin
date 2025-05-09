<script setup lang="ts">
import { reactive, ref, watch, onMounted } from 'vue'
import { Form, FormSchema } from '@/components/Form'
import { useI18n } from '@/hooks/web/useI18n'
import { ElCheckbox, ElLink } from 'element-plus'
import { useForm } from '@/hooks/web/useForm'
import { getTestRoleApi, getAdminRoleApi } from '@/api/login'
import { useAppStore } from '@/store/modules/app'
import { usePermissionStore } from '@/store/modules/permission'
import { useRouter } from 'vue-router'
import type { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'
import type { UserLoginType } from '@/api/login/types'
import { useValidator } from '@/hooks/web/useValidator'
import { Icon } from '@/components/Icon'
import { useUserStore } from '@/store/modules/user'
import { BaseButton } from '@/components/Button'

const { required } = useValidator()

const emit = defineEmits(['to-register'])

const appStore = useAppStore()

const userStore = useUserStore()

const permissionStore = usePermissionStore()

const { currentRoute, addRoute, push } = useRouter()

const { t } = useI18n()

const rules = {
  username: [required()],
  password: [required()]
}

const schema = reactive<FormSchema[]>([
  {
    field: 'title',
    colProps: {
      span: 24
    },
    formItemProps: {
      style: {
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        width: '100%'
      }
    },
    component: 'Divider',
    label: t('login.login')
  },
  {
    field: 'username',
    label: t('login.username'),
    component: 'Input',
    colProps: {
      span: 24
    },
    componentProps: {
      placeholder: 'admin or test'
    }
  },
  {
    field: 'password',
    label: t('login.password'),
    component: 'InputPassword',
    colProps: {
      span: 24
    },
    componentProps: {
      style: {
        width: '100%'
      },
      placeholder: 'admin or test',
      onKeydown: (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
          e.stopPropagation()
          signIn()
        }
      }
    }
  },
  {
    field: 'tool',
    colProps: {
      span: 24
    },
    formItemProps: {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }
    },
    component: 'Divider',
    label: '',
    componentProps: {
      contentPosition: 'center'
    }
  },
  {
    field: 'login',
    colProps: {
      span: 24
    },
    formItemProps: {
      style: {
        width: '100%'
      }
    },
    component: 'Divider',
    label: '',
    componentProps: {
      contentPosition: 'center'
    }
  },
  {
    field: 'other',
    component: 'Divider',
    label: t('login.otherLogin'),
    componentProps: {
      contentPosition: 'center'
    }
  }
])

const remember = ref(userStore.getRememberMe)

const initLoginInfo = () => {
  const loginInfo = userStore.getLoginInfo
  if (loginInfo) {
    const { username, password } = loginInfo
    setValues({ username, password })
  }
}

onMounted(() => {
  initLoginInfo()
})

const { formRegister, formMethods } = useForm()
const { getFormData, getElFormExpose, setValues } = formMethods

const loading = ref(false)

const iconColor = '#999'

const hoverColor = 'var(--el-color-primary)'

const redirect = ref<string>('')

watch(
  () => currentRoute.value,
  (route: RouteLocationNormalizedLoaded) => {
    redirect.value = route?.query?.redirect as string
  },
  {
    immediate: true
  }
)

// 登录
const signIn = async () => {
  loading.value = true
  const formRef = await getElFormExpose()
  if (!formRef) return
  const valid = await formRef.validate().catch(() => {})
  if (valid) {
    try {
      const formData = await getFormData<UserLoginType>()
      // @ts-ignore
      const res = await userStore.login(formData)
      if (res) {
        // 记住我
        userStore.setRememberMe(remember.value)
        if (remember.value) {
          userStore.setLoginInfo({
            username: formData.username,
            password: formData.password
          })
        } else {
          userStore.setLoginInfo(undefined)
        }
        // 生成路由
        await permissionStore.generateRoutes('static')
        // 添加路由
        permissionStore.getAddRouters.forEach((route) => {
          addRoute(route as unknown as RouteRecordRaw)
        })
        permissionStore.setIsAddRouters(true)
        await push({ path: '/dashboard/analysis' })
      }
    } finally {
      loading.value = false
    }
  }
}

// 获取角色信息
const getRole = async () => {
  const formData = await getFormData<UserLoginType>()
  const params = {
    roleName: formData.username
  }
  const res =
    appStore.getDynamicRouter && appStore.getServerDynamicRouter
      ? await getAdminRoleApi(params)
      : await getTestRoleApi(params)
  if (res) {
    const routers = res.data || []
    userStore.setRoleRouters(routers)
    appStore.getDynamicRouter && appStore.getServerDynamicRouter
      ? await permissionStore.generateRoutes('server', routers).catch(() => {})
      : await permissionStore.generateRoutes('frontEnd', routers).catch(() => {})

    permissionStore.getAddRouters.forEach((route) => {
      addRoute(route as RouteRecordRaw) // 动态添加可访问路由表
    })
    permissionStore.setIsAddRouters(true)
    push({ path: redirect.value || permissionStore.addRouters[0].path })
  }
}

// 去注册页面
const toRegister = () => {
  emit('to-register')
}
</script>

<template>
  <Form
    :schema="schema"
    :rules="rules"
    label-position="top"
    hide-required-asterisk
    size="large"
    class="dark:(border-1 border-[var(--el-border-color)] border-solid)"
    @register="formRegister"
  >
    <template #tool>
      <div class="flex justify-between items-center w-full">
        <el-checkbox v-model="remember" :label="t('login.remember')" size="small" />
        <el-link type="primary" :underline="false">
          {{ t('login.forgetPassword') }}
        </el-link>
      </div>
    </template>

    <template #login>
      <div class="w-full">
        <base-button :loading="loading" type="primary" class="w-full" @click="signIn">
          {{ t('login.login') }}
        </base-button>
      </div>
      <div class="w-full mt-15px">
        <base-button class="w-full" @click="toRegister">
          {{ t('login.register') }}
        </base-button>
      </div>
    </template>

    <template #otherIcon>
      <div class="flex justify-between w-full">
        <Icon
          icon="vi-ant-design:github-filled"
          :size="30"
          class="cursor-pointer ant-icon"
          :color="iconColor"
          :hover-color="hoverColor"
        />
        <Icon
          icon="vi-ant-design:wechat-filled"
          :size="30"
          class="cursor-pointer ant-icon"
          :color="iconColor"
          :hover-color="hoverColor"
        />
        <Icon
          icon="vi-ant-design:alipay-circle-filled"
          :size="30"
          :color="iconColor"
          :hover-color="hoverColor"
          class="cursor-pointer ant-icon"
        />
        <Icon
          icon="vi-ant-design:weibo-circle-filled"
          :size="30"
          :color="iconColor"
          :hover-color="hoverColor"
          class="cursor-pointer ant-icon"
        />
      </div>
    </template>
  </Form>
</template>

<style lang="scss" scoped>
.ant-icon {
  transition: color 0.3s;
  &:hover {
    color: var(--el-color-primary);
  }
}
</style>
