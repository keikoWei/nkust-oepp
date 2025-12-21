# NKUST OEPP Backend API 文檔

## 基礎資訊

- **Base URL**: `http://localhost:8080`
- **API 前綴**: `/api`
- **認證方式**: JWT Bearer Token
- **Content-Type**: `application/json` (除文件上傳使用 `multipart/form-data`)

## 認證

所有需要認證的 API 都需要在請求頭中包含 JWT Token：

```
Authorization: Bearer <your-jwt-token>
```

---

## 系統設定 API

### 1. 取得維護模式狀態

取得系統維護模式的當前狀態。

**端點**: `GET /api/system-config/maintenance-mode`

**認證**: 不需要

**請求範例**:
```http
GET http://localhost:8080/api/system-config/maintenance-mode
```

**回應範例** (200 OK):
```json
{
  "maintenanceMode": false,
  "message": "維護模式已關閉"
}
```

**回應欄位說明**:
- `maintenanceMode` (boolean): 維護模式是否開啟
- `message` (string): 狀態訊息

---

### 2. 設定維護模式

設定系統維護模式的開關狀態。

**端點**: `PUT /api/system-config/maintenance-mode`

**認證**: 需要（JWT Token）

**請求參數**:
- `enabled` (boolean, query parameter): 是否開啟維護模式

**請求範例**:
```http
PUT http://localhost:8080/api/system-config/maintenance-mode?enabled=true
Authorization: Bearer <your-jwt-token>
```

**回應範例** (200 OK):
```json
{
  "maintenanceMode": true,
  "message": "維護模式已開啟"
}
```

**錯誤回應**:
- `401 Unauthorized`: 未提供有效的 JWT Token
- `403 Forbidden`: 沒有權限訪問此端點

---

### 3. 切換維護模式

切換系統維護模式的狀態（開啟 ↔ 關閉）。

**端點**: `POST /api/system-config/maintenance-mode/toggle`

**認證**: 需要（JWT Token）

**請求範例**:
```http
POST http://localhost:8080/api/system-config/maintenance-mode/toggle
Authorization: Bearer <your-jwt-token>
```

**回應範例** (200 OK):
```json
{
  "maintenanceMode": true,
  "message": "維護模式已開啟"
}
```

**錯誤回應**:
- `401 Unauthorized`: 未提供有效的 JWT Token
- `403 Forbidden`: 沒有權限訪問此端點

---

## 維護模式行為說明

### 當維護模式開啟時：

1. **允許的端點**（不受維護模式影響）:
   - `POST /api/auth/login` - 登入
   - `POST /api/auth/logout` - 登出
   - `GET /api/system-config/maintenance-mode` - 取得維護模式狀態
   - `PUT /api/system-config/maintenance-mode` - 設定維護模式（需認證）
   - `POST /api/system-config/maintenance-mode/toggle` - 切換維護模式（需認證）
   - 所有 `/api/*/public/**` 公開端點

2. **被攔截的端點**:
   - 所有其他需要認證的 API 端點
   - 返回 `503 Service Unavailable` 狀態碼

3. **維護模式回應格式**:
```json
{
  "status": 503,
  "error": "Service Unavailable",
  "message": "系統目前處於維護模式，請稍後再試",
  "maintenanceMode": true
}
```

---

## 認證 API

### 登入

**端點**: `POST /api/auth/login`

**認證**: 不需要

**請求 Body**:
```json
{
  "username": "superadmin",
  "password": "superadmin"
}
```

**回應範例** (200 OK):
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "type": "Bearer",
  "username": "superadmin",
  "role": "SUPER_ADMIN",
  "roleName": "大帳號",
  "id": 1
}
```

---

### 登出

**端點**: `POST /api/auth/logout`

**認證**: 需要（JWT Token）

**請求範例**:
```http
POST http://localhost:8080/api/auth/logout
Authorization: Bearer <your-jwt-token>
```

**回應範例** (200 OK):
```json
{
  "message": "登出成功"
}
```

---

## 前端實作建議

### 1. 維護模式檢查

建議在應用程式啟動時檢查維護模式狀態：

```javascript
// 檢查維護模式
async function checkMaintenanceMode() {
  try {
    const response = await fetch('http://localhost:8080/api/system-config/maintenance-mode');
    const data = await response.json();
    
    if (data.maintenanceMode) {
      // 顯示維護模式頁面
      showMaintenancePage();
    }
  } catch (error) {
    console.error('檢查維護模式失敗:', error);
  }
}
```

### 2. API 攔截器處理維護模式

在 API 攔截器中處理 503 錯誤：

```javascript
// Axios 攔截器範例
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 503 && error.response?.data?.maintenanceMode) {
      // 顯示維護模式頁面
      showMaintenancePage();
    }
    return Promise.reject(error);
  }
);
```

### 3. 維護模式切換按鈕

在後台管理頁面添加維護模式切換按鈕：

```javascript
// 切換維護模式
async function toggleMaintenanceMode() {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(
      'http://localhost:8080/api/system-config/maintenance-mode/toggle',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    
    if (response.ok) {
      const data = await response.json();
      alert(data.message);
      // 更新 UI 狀態
      updateMaintenanceModeUI(data.maintenanceMode);
    }
  } catch (error) {
    console.error('切換維護模式失敗:', error);
  }
}
```

---

## 錯誤碼說明

| 狀態碼 | 說明 |
|--------|------|
| 200 | 請求成功 |
| 201 | 資源創建成功 |
| 400 | 請求參數錯誤 |
| 401 | 未認證或 Token 無效 |
| 403 | 沒有權限訪問 |
| 404 | 資源不存在 |
| 500 | 伺服器內部錯誤 |
| 503 | 服務不可用（維護模式） |

---

## 注意事項

1. **JWT Token 過期時間**: 預設為 24 小時（86400000 毫秒）
2. **維護模式權限**: 只有已登入的管理員可以設定維護模式
3. **維護模式下的登入**: 即使在維護模式下，用戶仍可以登入系統
4. **公開端點**: 維護模式下，所有 `/api/*/public/**` 端點仍可正常訪問
