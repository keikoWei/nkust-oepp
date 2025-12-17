import { post } from './index'

/**
 * 登入 API
 * @param {string} username - 使用者名稱
 * @param {string} password - 密碼
 * @returns {Promise<Object>} 登入回應資料
 */
export async function login(username, password) {
  try {
    const response = await post('/auth/login', {
      username,
      password,
    })

    // 儲存 Token 和用戶資訊到 localStorage
    localStorage.setItem('token', response.token)
    localStorage.setItem('user', JSON.stringify({
      id: response.id,
      username: response.username,
      role: response.role,
      roleName: response.roleName,
    }))

    return response
  } catch (error) {
    // 重新拋出錯誤，讓調用者處理
    throw error
  }
}

/**
 * 登出 API
 * @returns {Promise<void>}
 */
export async function logout() {
  try {
    // 呼叫後端登出 API
    await post('/auth/logout')
  } catch (error) {
    // 即使 API 失敗，也清除本地儲存
    console.error('登出 API 錯誤:', error)
  } finally {
    // 清除本地儲存
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }
}

/**
 * 取得當前登入用戶資訊
 * @returns {Object|null} 用戶資訊或 null
 */
export function getCurrentUser() {
  const userStr = localStorage.getItem('user')
  if (!userStr) return null
  
  try {
    return JSON.parse(userStr)
  } catch {
    return null
  }
}

/**
 * 取得 Token
 * @returns {string|null} Token 或 null
 */
export function getToken() {
  return localStorage.getItem('token')
}

/**
 * 檢查是否已登入
 * @returns {boolean}
 */
export function isAuthenticated() {
  return !!getToken()
}

/**
 * 根據角色取得對應的後台路徑（直接導向輪播圖頁面）
 * @param {string} role - 角色代碼
 * @returns {string} 後台路徑
 */
export function getDashboardPathByRole(role) {
  const rolePathMap = {
    'SUPER_ADMIN': '/dashboard/oceom/carousel',
    'HEADQUARTERS': '/dashboard/oceom/carousel',
    'EDUCATION_CENTER': '/dashboard/eec/carousel',
    'PRODUCT_CENTER': '/dashboard/ppc/carousel',
    'EXHIBITION_CENTER': '/dashboard/epc/carousel',
    'MANAGEMENT_CENTER': '/dashboard/com/carousel',
  }
  
  return rolePathMap[role] || '/dashboard/oceom/carousel'
}

