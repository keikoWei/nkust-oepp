import { get } from './index'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

/**
 * 獲取維護模式狀態
 * @returns {Promise<Object>} 維護狀態 { maintenanceMode: boolean, message: string }
 */
export async function getMaintenanceStatus() {
  return await get('/system-config/maintenance-mode')
}

/**
 * 設定維護模式
 * @param {boolean} enabled - 是否開啟維護模式
 * @returns {Promise<Object>} 更新後的維護狀態 { maintenanceMode: boolean, message: string }
 */
export async function setMaintenanceMode(enabled) {
  const token = localStorage.getItem('token')
  const response = await fetch(`${API_BASE_URL}/system-config/maintenance-mode?enabled=${enabled}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || '設定維護模式失敗')
  }

  return await response.json()
}

/**
 * 切換維護模式（開啟 ↔ 關閉）
 * @returns {Promise<Object>} 更新後的維護狀態 { maintenanceMode: boolean, message: string }
 */
export async function toggleMaintenanceMode() {
  const token = localStorage.getItem('token')
  const response = await fetch(`${API_BASE_URL}/system-config/maintenance-mode/toggle`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || '切換維護模式失敗')
  }

  return await response.json()
}


