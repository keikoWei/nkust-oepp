# Quasar UI 框架整合說明

## 已完成的設定

✅ **安裝完成的套件**：
- `quasar` - Quasar UI 框架核心
- `@quasar/extras` - 圖示庫和字體
- `@quasar/vite-plugin` - Vite 整合插件
- `sass` - Sass 預處理器

✅ **設定檔案**：
- `vite.config.js` - 已加入 Quasar 插件設定
- `src/main.js` - 已初始化 Quasar 和圖示庫
- `src/quasar-variables.sass` - 自定義主題色彩變數

✅ **主題配色**：
- 主色調 ($primary): #004098 (配合學校識別色彩)
- 次要色調 ($secondary): #26A69A
- 強調色 ($accent): #9C27B0

## 已更新的組件

### App.vue
- 使用 `q-layout` 替代原本的 div 結構
- 使用 `q-header` 和 `q-toolbar` 改善導航欄
- 使用 `q-btn` 和 `q-btn-dropdown` 建立響應式選單
- 保持原有的 70% 寬度設定和樣式

### HomeView.vue
- 使用 `q-card` 組件改善版面結構
- 使用 `q-item` 建立新聞列表
- 使用 `q-img` 和響應式網格系統
- 加入 Material Design 圖示

## Quasar 組件特色

### 1. **響應式設計**
```vue
<div class="row q-gutter-md">
  <div class="col-md-6 col-sm-12">
    <!-- 內容 -->
  </div>
</div>
```

### 2. **豐富的 UI 組件**
- 按鈕: `q-btn`
- 卡片: `q-card`
- 清單: `q-list`, `q-item`
- 圖片: `q-img`
- 圖示: `q-icon`
- 分隔線: `q-separator`

### 3. **內建實用類別**
- 文字樣式: `text-h3`, `text-primary`
- 間距: `q-mb-md`, `q-gutter-md`
- 對齊: `text-center`

## 使用 Quasar 的優點

1. **Material Design** - 現代化的 UI 設計語言
2. **響應式** - 自動適應不同螢幕尺寸
3. **完整生態系** - 豐富的組件庫
4. **高效能** - 基於 Vue 3 Composition API
5. **易於維護** - 一致的設計規範

## 後續開發建議

### 1. **繼續使用 Quasar 組件**
在新增頁面時，建議使用 Quasar 組件來保持一致性：

```vue
<template>
  <q-page class="q-pa-lg">
    <q-card>
      <q-card-section>
        <div class="text-h4">頁面標題</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
```

### 2. **善用 Quasar 插件**
可根據需要加入更多 Quasar 插件：

```javascript
// 在 main.js 中加入需要的插件
app.use(Quasar, {
  plugins: {
    Notify, // 通知
    Dialog, // 對話框
    Loading // 載入動畫
  }
})
```

### 3. **自定義主題**
在 `src/quasar-variables.sass` 中調整色彩變數：

```sass
$primary: #004098
$secondary: #26A69A
// 可加入更多自定義變數
```

## 參考資源

- [Quasar 官方文件](https://quasar.dev/)
- [Vue 3 組件範例](https://quasar.dev/vue-components)
- [Quasar CLI 工具](https://quasar.dev/quasar-cli-vite)

## 字體整合

Quasar 已與先前設定的「源樣黑體月」完美整合，所有 Quasar 組件都會使用設定的字體族：
`"GenYoGothic TW", "源樣黑體月", "Microsoft JhengHei", sans-serif` 