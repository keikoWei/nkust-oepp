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
 * 創建出版品
 * @param {FormData} formData - 出版品資料（包含 title, centerRole, mainImage, iframeLink, sortOrder）
 * @returns {Promise<Object>} 創建的出版品資料
 */
export async function createPublication(formData) {
  const response = await fetch(`${API_BASE_URL}/publications`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: formData
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || '創建出版品失敗')
  }

  return await response.json()
}

/**
 * 更新出版品
 * @param {number} id - 出版品 ID
 * @param {FormData} formData - 更新的出版品資料
 * @returns {Promise<Object>} 更新後的出版品資料
 */
export async function updatePublication(id, formData) {
  const response = await fetch(`${API_BASE_URL}/publications/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: formData
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || '更新出版品失敗')
  }

  return await response.json()
}

/**
 * 刪除出版品
 * @param {number} id - 出版品 ID
 * @returns {Promise<Object>} 刪除結果
 */
export async function deletePublication(id) {
  return await del(`/publications/${id}`)
}

/**
 * 根據 ID 獲取出版品
 * @param {number} id - 出版品 ID
 * @returns {Promise<Object>} 出版品資料
 */
export async function getPublicationById(id) {
  return await get(`/publications/${id}`)
}

/**
 * 獲取所有出版品（後台管理用）
 * @returns {Promise<Array>} 出版品列表
 */
export async function getAllPublications() {
  return await get('/publications')
}

/**
 * 獲取公開出版品（前端顯示用，不需要認證）
 * @param {string} centerRole - 中心角色代碼
 * @returns {Promise<Array>} 出版品列表
 */
export async function getPublicPublications(centerRole) {
  const response = await fetch(`${API_BASE_URL}/publications/public/${centerRole}`, {
    method: 'GET'
  })

  if (!response.ok) {
    throw new Error('獲取公開出版品失敗')
  }

  return await response.json()
}

/**
 * 獲取當前用戶的中心角色
 * @returns {string} 中心角色代碼
 */
export function getCurrentUserCenterRole() {
  const userStr = localStorage.getItem('user')
  if (!userStr) return 'HEADQUARTERS'
  
  const user = JSON.parse(userStr)
  return user.role === 'SUPER_ADMIN' ? 'HEADQUARTERS' : user.role
}

