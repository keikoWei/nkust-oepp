import { get, del } from './index'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

/**
 * 創建課程
 * @param {FormData} formData - 課程資料（包含 title, centerRole, contentHtml, mainImage, images, files, sortOrder, isEnabled, publishTime）
 * @returns {Promise<Object>} 創建的課程資料
 */
export async function createCourse(formData) {
  const response = await fetch(`${API_BASE_URL}/courses`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: formData
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || '創建課程失敗')
  }

  return await response.json()
}

/**
 * 更新課程
 * @param {number} id - 課程 ID
 * @param {FormData} formData - 更新的課程資料
 * @returns {Promise<Object>} 更新後的課程資料
 */
export async function updateCourse(id, formData) {
  const response = await fetch(`${API_BASE_URL}/courses/${id}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: formData
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || '更新課程失敗')
  }

  return await response.json()
}

/**
 * 刪除課程
 * @param {number} id - 課程 ID
 * @returns {Promise<Object>} 刪除結果
 */
export async function deleteCourse(id) {
  return await del(`/courses/${id}`)
}

/**
 * 根據 ID 獲取課程
 * @param {number} id - 課程 ID
 * @returns {Promise<Object>} 課程資料
 */
export async function getCourseById(id) {
  return await get(`/courses/${id}`)
}

/**
 * 獲取所有課程（後台管理用）
 * @returns {Promise<Array>} 課程列表
 */
export async function getAllCourses() {
  return await get('/courses')
}

/**
 * 獲取公開課程（前端顯示用，不需要認證）
 * @param {string} centerRole - 中心角色代碼
 * @param {boolean} onlyEnabled - 是否只返回已啟用的課程
 * @returns {Promise<Array>} 課程列表
 */
export async function getPublicCourses(centerRole, onlyEnabled = true) {
  const url = new URL(`${API_BASE_URL}/courses/public/${centerRole}`)
  url.searchParams.append('onlyEnabled', onlyEnabled.toString())

  const response = await fetch(url.toString(), {
    method: 'GET'
  })

  if (!response.ok) {
    throw new Error('獲取公開課程失敗')
  }

  return await response.json()
}

/**
 * 下載課程檔案
 * @param {string} filePath - 檔案相對路徑
 * @returns {Promise<Blob>} 檔案內容
 */
export async function downloadCourseFile(filePath) {
  const response = await fetch(`${API_BASE_URL}/courses/file/${filePath}`, {
    method: 'GET'
  })

  if (!response.ok) {
    throw new Error('下載檔案失敗')
  }

  return await response.blob()
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

