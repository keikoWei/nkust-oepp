<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-box">
        <h1 class="login-title">教推處管理後台</h1>
        <form @submit.prevent="handleLogin" class="login-form">
          <div v-if="errorMessage" class="error-message">
            {{ errorMessage }}
          </div>
          <div class="form-group">
            <label for="username">帳號</label>
            <input
              id="username"
              v-model="form.username"
              type="text"
              placeholder="請輸入帳號"
              required
              :disabled="loading"
            />
          </div>
          <div class="form-group">
            <label for="password">密碼</label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="請輸入密碼"
              required
              :disabled="loading"
            />
          </div>
          <button type="submit" class="login-btn" :disabled="loading">
            {{ loading ? '登入中...' : '登入' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login, getDashboardPathByRole } from '@/api/auth'

const router = useRouter()
const form = ref({
  username: '',
  password: ''
})

const loading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  // 重置錯誤訊息
  errorMessage.value = ''
  loading.value = true

  try {
    // 呼叫登入 API
    const response = await login(form.value.username, form.value.password)
    
    // 登入成功，根據角色跳轉到對應的後台頁面
    const dashboardPath = getDashboardPathByRole(response.role)
    router.push(dashboardPath)
  } catch (error) {
    // 顯示錯誤訊息
    errorMessage.value = error.message || '登入失敗，請檢查帳號密碼'
    console.error('登入錯誤:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-page {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
}

.login-container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

.login-box {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.login-title {
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  color: #534741;
  margin-bottom: 30px;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  color: #534741;
  font-weight: 500;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.form-group input {
  padding: 12px 16px;
  border: 2px solid #e3d9cd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.form-group input:focus {
  outline: none;
  border-color: #534741;
}

.login-btn {
  padding: 12px;
  background-color: #534741;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
  margin-top: 10px;
}

.login-btn:hover:not(:disabled) {
  background-color: #3d3329;
}

.login-btn:disabled {
  background-color: #999;
  cursor: not-allowed;
}

.error-message {
  padding: 12px;
  background-color: #fee;
  border: 1px solid #fcc;
  border-radius: 6px;
  color: #c33;
  font-size: 14px;
  margin-bottom: 15px;
  font-family: "GenYoGothic TW", "Microsoft JhengHei", sans-serif;
}

.form-group input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}
</style>

