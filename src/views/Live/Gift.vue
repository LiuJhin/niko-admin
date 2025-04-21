<template>
  <div class="gift-container">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>礼物管理</span>
          <el-button type="primary" @click="dialogVisible = true">新增礼物</el-button>
        </div>
      </template>

      <el-form :inline="true" class="search-form">
        <el-form-item label="礼物ID">
          <el-input placeholder="请输入礼物ID" />
        </el-form-item>
        <el-form-item label="礼物名称">
          <el-input placeholder="请输入礼物名称" v-model="formData.name" />
        </el-form-item>
        <el-form-item label="礼物类型">
          <el-select v-model="formData.type" placeholder="请选择礼物类型" style="width: 100%">
            <el-option label="普通礼物" value="normal" />
            <el-option label="特效礼物" value="special" />
            <el-option label="限时礼物" value="limited" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select placeholder="请选择状态">
            <el-option label="上架中" value="online" />
            <el-option label="已下架" value="offline" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="[]" style="width: 100%">
        <el-table-column prop="id" label="礼物ID" width="100" />
        <el-table-column label="礼物图标" width="100">
          <template #default>
            <el-image style="width: 50px; height: 50px" src="" fit="cover" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="礼物名称" />
        <el-table-column prop="type" label="礼物类型">
          <template #default="scope">
            <el-tag>{{ scope.row.type }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="价格(钻石)" />
        <el-table-column prop="animation" label="动效">
          <template #default="scope">
            <el-tag type="success" v-if="scope.row.animation">有</el-tag>
            <el-tag type="info" v-else>无</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态">
          <template #default="scope">
            <el-tag :type="scope.row.status === 'online' ? 'success' : 'info'">
              {{ scope.row.status === 'online' ? '上架中' : '已下架' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" />
        <el-table-column label="操作" width="250">
          <template #default="scope">
            <el-button type="primary" link>编辑</el-button>
            <el-button type="success" link v-if="scope.row.status === 'offline'">上架</el-button>
            <el-button type="warning" link v-else>下架</el-button>
            <el-button type="danger" link>删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination-container">
        <el-pagination background layout="total, sizes, prev, pager, next" :total="0" />
      </div>
    </el-card>

    <!-- 新增/编辑礼物对话框 -->
    <el-dialog v-model="dialogVisible" :title="dialogTitle" width="500px">
      <el-form label-width="100px">
        <el-form-item label="礼物名称">
          <el-input placeholder="请输入礼物名称" v-model="formData.name" />
        </el-form-item>
        <el-form-item label="礼物类型">
          <el-select v-model="formData.type" placeholder="请选择礼物类型" style="width: 100%">
            <el-option label="普通礼物" value="normal" />
            <el-option label="特效礼物" value="special" />
            <el-option label="限时礼物" value="limited" />
          </el-select>
        </el-form-item>
        <el-form-item label="礼物图标">
          <el-upload class="avatar-uploader" :action="''" :show-file-list="false">
            <el-icon class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item label="礼物价格">
          <el-input-number
            v-model="formData.price"
            :min="1"
            placeholder="请输入礼物价格"
            style="width: 100%"
            @change="handlePriceChange"
          />
        </el-form-item>
        <el-form-item label="动效文件">
          <el-upload
            class="upload-demo"
            :action="''"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
          >
            <el-button type="primary">选择文件</el-button>
            <template #tip>
              <div class="el-upload__tip"> 支持svga/gif/webp格式，大小不超过2MB </div>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item label="礼物描述">
          <el-input
            type="textarea"
            rows="3"
            placeholder="请输入礼物描述"
            v-model="formData.description"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'
import type { UploadFile } from 'element-plus'

defineOptions({
  name: 'Gift'
})

const dialogVisible = ref(false)
const dialogTitle = ref('新增礼物')

const handleRemove = (file: UploadFile) => {
  console.log(file)
}

const handlePreview = async (file: UploadFile) => {
  const result = await ElMessageBox.confirm('是否预览该文件？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
  return result === 'confirm'
}

const beforeRemove = async (file: UploadFile) => {
  const result = await ElMessageBox.confirm(`确定移除 ${file.name}？`)
  return result === 'confirm'
}

interface GiftFormData {
  name: string
  price: number
  image: string
  description: string
  type: 'normal' | 'special' | 'limited'
}

const formData = reactive<GiftFormData>({
  name: '',
  price: 0,
  image: '',
  description: '',
  type: 'normal'
})

const handlePriceChange = (value: number | undefined) => {
  formData.price = value ?? 0
}
</script>

<style lang="scss" scoped>
.gift-container {
  padding: 20px;

  .box-card {
    width: 100%;
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

  .avatar-uploader {
    :deep(.el-upload) {
      border: 1px dashed var(--el-border-color);
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);

      &:hover {
        border-color: var(--el-color-primary);
      }
    }
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    text-align: center;
    border: 1px dashed var(--el-border-color);
  }
}
</style>
