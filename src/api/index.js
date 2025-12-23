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

// 建立 fetch 請求的封裝函數
async function request(url, options = {}) {
  const token = localStorage.getItem('token')
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  }

  // 如果有 token，加入 Authorization header
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, config)
    
    // 處理 401 未授權（Token 過期或無效）
    if (response.status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      // 如果不在登入頁，則跳轉到登入頁
      if (window.location.pathname !== '/login') {
        window.location.href = '/login'
      }
      throw new Error('登入已過期，請重新登入')
    }

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || `請求失敗: ${response.status}`)
    }

    return data
  } catch (error) {
    // 如果是網路錯誤或其他錯誤
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('網路連線錯誤，請檢查後端服務是否正常運行')
    }
    throw error
  }
}

// GET 請求
export function get(url, options = {}) {
  return request(url, { ...options, method: 'GET' })
}

// POST 請求
export function post(url, data, options = {}) {
  return request(url, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
  })
}

// PUT 請求
export function put(url, data, options = {}) {
  return request(url, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

// DELETE 請求
export function del(url, options = {}) {
  return request(url, { ...options, method: 'DELETE' })
}

export default {
  get,
  post,
  put,
  delete: del,
}

