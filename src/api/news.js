import { get, del } from './index'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

/**
 * 創建消息
 * @param {FormData} formData - 包含 title, centerRole, contentHtml, images, files, sortOrder, isEnabled, publishTime
 * @returns {Promise<Object>} 創建的消息資料
 */
export async function createNews(formData) {
  const token = localStorage.getItem('token')
  
  const response = await fetch(`${API_BASE_URL}/news`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || '創建失敗')
  }

  return await response.json()
}

/**
 * 更新消息
 * @param {number} id - 消息 ID
 * @param {FormData} formData - 包含要更新的欄位
 * @returns {Promise<Object>} 更新後的消息資料
 */
export async function updateNews(id, formData) {
  const token = localStorage.getItem('token')
  
  const response = await fetch(`${API_BASE_URL}/news/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    body: formData,
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || '更新失敗')
  }

  return await response.json()
}

/**
 * 刪除消息
 * @param {number} id - 消息 ID
 * @returns {Promise<Object>} 刪除回應
 */
export async function deleteNews(id) {
  const response = await del(`/news/${id}`)
  return response
}

/**
 * 根據 ID 獲取消息
 * @param {number} id - 消息 ID
 * @returns {Promise<Object>} 消息資料
 */
export async function getNewsById(id) {
  const response = await get(`/news/${id}`)
  return response
}

/**
 * 獲取所有消息（根據用戶權限過濾）
 * @returns {Promise<Array>} 消息列表
 */
export async function getAllNews() {
  const response = await get('/news')
  return response
}

/**
 * 根據中心角色獲取公開消息（不需要認證）
 * @param {string} centerRole - 中心角色代碼
 * @param {boolean} onlyEnabled - 是否只返回已發布且啟用的消息（預設為 true）
 * @returns {Promise<Array>} 消息列表
 */
export async function getPublicNews(centerRole, onlyEnabled = true) {
  const url = new URL(`${API_BASE_URL}/news/public/${centerRole}`)
  url.searchParams.append('onlyEnabled', onlyEnabled.toString())

  const response = await fetch(url.toString(), {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error('獲取失敗')
  }

  return await response.json()
}

/**
 * 下載檔案
 * @param {string} filePath - 檔案相對路徑（例如：news/file1.pdf）
 * @returns {Promise<Blob>} 檔案內容
 */
export async function downloadNewsFile(filePath) {
  const response = await fetch(`${API_BASE_URL}/news/file/${filePath}`, {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error('下載失敗')
  }

  return await response.blob()
}

