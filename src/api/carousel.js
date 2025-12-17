import { get, post, put, del } from './index'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

/**
 * 創建輪播圖
 * @param {FormData} formData - 包含 title, centerRole, image, clickUrl, sortOrder, isEnabled
 * @returns {Promise<Object>} 創建的輪播圖資料
 */
export async function createCarousel(formData) {
  const token = localStorage.getItem('token')
  
  const response = await fetch(`${API_BASE_URL}/carousel`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      // 不要手動設置 Content-Type，讓瀏覽器自動設置（包含 boundary）
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
 * 更新輪播圖
 * @param {number} id - 輪播圖 ID
 * @param {FormData} formData - 包含要更新的欄位（title, image, clickUrl, sortOrder, isEnabled）
 * @returns {Promise<Object>} 更新後的輪播圖資料
 */
export async function updateCarousel(id, formData) {
  const token = localStorage.getItem('token')
  
  const response = await fetch(`${API_BASE_URL}/carousel/${id}`, {
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
 * 刪除輪播圖
 * @param {number} id - 輪播圖 ID
 * @returns {Promise<Object>} 刪除回應
 */
export async function deleteCarousel(id) {
  const response = await del(`/carousel/${id}`)
  return response
}

/**
 * 根據 ID 獲取輪播圖
 * @param {number} id - 輪播圖 ID
 * @returns {Promise<Object>} 輪播圖資料
 */
export async function getCarouselById(id) {
  const response = await get(`/carousel/${id}`)
  return response
}

/**
 * 獲取所有輪播圖（根據用戶權限過濾）
 * @returns {Promise<Array>} 輪播圖列表
 */
export async function getAllCarousels() {
  const response = await get('/carousel')
  return response
}

/**
 * 根據中心角色獲取公開輪播圖（不需要認證）
 * @param {string} centerRole - 中心角色代碼
 * @param {boolean} onlyEnabled - 是否只返回啟用的輪播圖（預設為 true）
 * @returns {Promise<Array>} 輪播圖列表
 */
export async function getPublicCarousels(centerRole, onlyEnabled = true) {
  const url = new URL(`${API_BASE_URL}/carousel/public/${centerRole}`)
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
 * 根據當前用戶角色取得對應的中心角色代碼
 * @returns {string} 中心角色代碼
 */
export function getCurrentUserCenterRole() {
  const userStr = localStorage.getItem('user')
  if (!userStr) return null
  
  try {
    const user = JSON.parse(userStr)
    return user.role
  } catch {
    return null
  }
}

