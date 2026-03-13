import { get, del } from './index'

// API 基礎配置
// 如果 VITE_API_BASE_URL 為空字串或未設定，使用相對路徑（正式環境）
// 否則使用設定的 URL（本地開發環境）
const getApiBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_BASE_URL
  // 如果是空字串、undefined 或 null，使用相對路徑
  if (!envUrl || envUrl.trim() === '') {
    return '/api'
  }
  return envUrl
}

const API_BASE_URL = getApiBaseUrl()

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
 * 根據 ID 獲取消息（不需認證，後端 2.1 已改為公開）
 * @param {number} id - 消息 ID
 * @returns {Promise<Object>} 消息資料
 */
export async function getNewsById(id) {
  const response = await get(`/news/${id}`)
  return response
}

/**
 * 依 ID 取得單筆消息（同 2.1，以 fetch 直接呼叫）
 * 供 announcement-detail 內頁使用，失敗回傳 null 不觸發登入跳轉
 * @param {number} id - 消息 ID
 * @returns {Promise<Object|null>} 消息資料，失敗時回傳 null
 */
export async function getPublicNewsById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/news/${id}`, { method: 'GET' })
    if (!response.ok) return null
    return await response.json()
  } catch {
    return null
  }
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
 * 取得消息檔案下載 URL（依 API 文件 2.4：建議用 query 參數，避免 404）
 * GET ${baseUrl}/api/news/file?path=${encodeURIComponent(filePath)}
 * @param {string} filePath - 從單筆消息 filePaths 取，例如 "news/abc.pdf"
 * @returns {string} 完整下載 URL
 */
export function getNewsFileDownloadUrl(filePath) {
  if (!filePath) return ''
  const base = API_BASE_URL.replace(/\/$/, '')
  return `${base}/news/file?path=${encodeURIComponent(filePath)}`
}

/**
 * 下載檔案
 * @param {string} filePath - 檔案相對路徑（例如：news/檔案名.pdf）
 * @returns {Promise<Blob>} 檔案內容
 */
export async function downloadNewsFile(filePath) {
  const url = getNewsFileDownloadUrl(filePath)
  const response = await fetch(url, { method: 'GET' })

  if (!response.ok) {
    throw new Error('下載失敗')
  }

  return await response.blob()
}

