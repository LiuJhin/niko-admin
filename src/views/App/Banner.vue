<template>
  <div class="banner-container">
    <!-- 搜索表单 -->
    <el-form ref="searchFormRef" :model="searchForm" inline class="search-form" label-width="auto">
      <el-form-item label="信息id">
        <el-input v-model="searchForm.id" placeholder="请输入信息id" clearable />
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="searchForm.title" placeholder="请输入标题" clearable />
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="searchForm.type" placeholder="请选择类型" clearable>
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="searchForm.status" placeholder="请选择状态" clearable>
          <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch">查询/刷新</el-button>
        <el-button @click="handleReset">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 操作按钮 -->
    <div class="operation-bar">
      <el-button type="primary" @click="handleAdd">+ 新增</el-button>
      <el-button>链接协议</el-button>
    </div>

    <!-- 数据表格 -->
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column prop="id" label="信息Id" width="100" />
      <el-table-column prop="title" label="标题" width="150" />
      <el-table-column label="文件地址" width="100">
        <template #default="scope">
          <el-image
            :src="scope.row.imageUrl"
            style="width: 50px; height: 50px"
            fit="cover"
            :preview-src-list="[scope.row.imageUrl]"
          />
        </template>
      </el-table-column>
      <el-table-column prop="jumpUrl" label="跳转地址" width="200" show-overflow-tooltip />
      <el-table-column prop="type" label="类型" width="150" />
      <el-table-column prop="position" label="位置" width="120" />
      <el-table-column prop="useScene" label="使用场景" width="100" />
      <el-table-column prop="sort" label="排序" width="80" />
      <el-table-column prop="status" label="状态" width="80">
        <template #default="scope">
          <el-tag :type="scope.row.status === '上线' ? 'success' : 'info'">
            {{ scope.row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="deviceType" label="设备类型" width="100" />
      <el-table-column prop="channelType" label="渠道类型" width="100" />
      <el-table-column prop="startTime" label="开始时间" width="160" />
      <el-table-column prop="endTime" label="结束时间" width="160" />
      <el-table-column label="操作" fixed="right" width="120">
        <template #default="scope">
          <el-button type="primary" link @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="danger" link @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="pagination-container">
      <el-pagination
        v-model:current-page="pagination.currentPage"
        v-model:page-size="pagination.pageSize"
        :total="pagination.total"
        :page-sizes="[10, 20, 30, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSearch"
        @current-change="handleSearch"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage, ElMessageBox } from 'element-plus'

defineOptions({
  name: 'Banner'
})

interface BannerItem {
  id: string
  title: string
  imageUrl: string
  jumpUrl: string
  type: string
  position: string
  useScene: string
  sort: number
  status: string
  deviceType: string
  channelType: string
  startTime: string
  endTime: string
}

// 搜索表单数据
const searchForm = ref({
  id: '',
  title: '',
  type: '',
  status: ''
})

// 表格数据
const tableData = ref<BannerItem[]>([
  {
    id: '208',
    title: '灵蛇献瑞',
    imageUrl: 'banner1.jpg',
    jumpUrl: 'https://h5-test.xingyao.com',
    type: 'APP首页banner-左',
    position: '全屏WebView',
    useScene: '0',
    sort: 0,
    status: '上线',
    deviceType: '通用',
    channelType: '通用',
    startTime: '2025-01-14 13:45:08',
    endTime: '2025-01-14'
  },
  {
    id: '207',
    title: '灵蛇献瑞2',
    imageUrl: 'banner2.jpg',
    jumpUrl: 'https://h5-test.xingyao.com',
    type: 'APP首页banner-左',
    position: '全屏WebView',
    useScene: '0',
    sort: 0,
    status: '下线',
    deviceType: '通用',
    channelType: '通用',
    startTime: '2025-01-14 11:13:32',
    endTime: '2025-01-14'
  }
])

// 类型选项
const typeOptions = ref([
  { label: 'APP首页banner-左', value: 'APP首页banner-左' },
  { label: '个人中心', value: '个人中心' },
  { label: '直播间-更多弹窗', value: '直播间-更多弹窗' }
])

// 状态选项
const statusOptions = ref([
  { label: '上线', value: '上线' },
  { label: '下线', value: '下线' }
])

// 分页配置
const pagination = ref({
  currentPage: 1,
  pageSize: 20,
  total: 15
})

// 搜索方法
const handleSearch = () => {
  // TODO: 实现搜索逻辑
  console.log('搜索条件：', searchForm.value)
}

// 重置搜索
const searchFormRef = ref<FormInstance>()
const handleReset = () => {
  if (!searchFormRef.value) return
  searchFormRef.value.resetFields()
  handleSearch()
}

// 新增 Banner
const handleAdd = () => {
  // TODO: 实现新增逻辑
  console.log('新增 Banner')
}

// 编辑 Banner
const handleEdit = (row: BannerItem) => {
  // TODO: 实现编辑逻辑
  console.log('编辑：', row)
}

// 删除 Banner
const handleDelete = async (row: BannerItem) => {
  try {
    await ElMessageBox.confirm('确定要删除该 Banner 吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    // TODO: 实现删除逻辑
    console.log('删除：', row)
    ElMessage.success('删除成功')
  } catch (error) {
    // 用户取消删除
  }
}
</script>

<style lang="scss" scoped>
.banner-container {
  padding: 20px;

  .search-form {
    background-color: var(--el-bg-color);
    padding: 20px;
    border-radius: 4px;
    margin-bottom: 20px;
  }

  .operation-bar {
    margin-bottom: 20px;
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
