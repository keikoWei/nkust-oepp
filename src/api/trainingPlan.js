import { get, post, put, del } from './index'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

/**
 * 創建委訓計畫
 * @param {Object} data - 委訓計畫資料（包含 title, centerRole, link, sortOrder）
 * @returns {Promise<Object>} 創建的委訓計畫資料
 */
export async function createTrainingPlan(data) {
  return await post('/training-plans', data)
}

/**
 * 更新委訓計畫
 * @param {number} id - 委訓計畫 ID
 * @param {Object} data - 更新的委訓計畫資料
 * @returns {Promise<Object>} 更新後的委訓計畫資料
 */
export async function updateTrainingPlan(id, data) {
  return await put(`/training-plans/${id}`, data)
}

/**
 * 刪除委訓計畫
 * @param {number} id - 委訓計畫 ID
 * @returns {Promise<Object>} 刪除結果
 */
export async function deleteTrainingPlan(id) {
  return await del(`/training-plans/${id}`)
}

/**
 * 根據 ID 獲取委訓計畫
 * @param {number} id - 委訓計畫 ID
 * @returns {Promise<Object>} 委訓計畫資料
 */
export async function getTrainingPlanById(id) {
  return await get(`/training-plans/${id}`)
}

/**
 * 獲取所有委訓計畫（後台管理用）
 * @returns {Promise<Array>} 委訓計畫列表
 */
export async function getAllTrainingPlans() {
  return await get('/training-plans')
}

/**
 * 獲取公開委訓計畫（前端顯示用，不需要認證）
 * @param {string} centerRole - 中心角色代碼
 * @returns {Promise<Array>} 委訓計畫列表
 */
export async function getPublicTrainingPlans(centerRole) {
  const response = await fetch(`${API_BASE_URL}/training-plans/public/${centerRole}`, {
    method: 'GET'
  })

  if (!response.ok) {
    throw new Error('獲取公開委訓計畫失敗')
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

