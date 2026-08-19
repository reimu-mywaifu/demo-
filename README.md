# 馬克租屋有限公司 — 租屋網站 Demo

> 🏠 專為學生與小資族打造的溫馨租屋平台  
> **Live Demo**: 直接用瀏覽器開啟 `index.html` 即可瀏覽

---

## 📋 目錄

- [專案架構](#-專案架構)
- [使用技術與套件](#-使用技術與套件)
- [UI 元件清單](#-ui-元件清單)
- [頁面結構](#-頁面結構)
- [GitHub Pages 部署指南](#-github-pages-部署指南)
- [如何新增/修改房源與文章](#-如何新增修改房源與文章)
- [技術挑戰與解決方案](#-技術挑戰與解決方案)
- [開發歷程 (Changelog)](#-開發歷程-changelog)

---

## 📁 專案架構

```
demo/
├── index.html          # 首頁 (Home)
├── listings.html       # 租屋資訊 (Listings)
├── about.html          # 關於我們 (About Us)
├── blog.html           # 租屋指南 (Blog)
├── blog-post.html      # 文章內頁 (Blog Post Detail)
├── contact.html        # 聯絡我們 (Contact Us)
├── css/
│   └── style.css       # 莫蘭迪色系自訂樣式表
├── js/
│   ├── data.js         # 房源 & 文章假資料 (Mock Data)
│   ├── components.js   # 共用元件 (Navbar/Footer/卡片/Modal)
├── public/
│   └── favicon.svg     # 網站圖示
└── README.md           # 本文件
```

---

## 🛠 使用技術與套件

| 技術 | 版本 | 用途 |
|------|------|------|
| **HTML5** | — | 頁面結構與語義化標籤 |
| **CSS3** | — | 自訂莫蘭迪色系樣式、動畫 |
| **JavaScript (ES6+)** | — | 互動邏輯、資料篩選 |
| **jQuery** | 3.7.1 | DOM 操作、事件處理 |
| **Bootstrap** | 5.3.3 | 響應式格線、元件（Modal/Carousel/Offcanvas） |
| **Bootstrap Icons** | 1.11.3 | 圖示系統 |
| **AOS** | 2.3.4 | 滾動動畫（Animate on Scroll） |
| **Google Fonts** | — | Inter + Noto Sans TC 字體 |

> 所有第三方資源均使用 **CDN** 載入，無需安裝任何套件。

---

## 🧩 UI 元件清單

### 共用元件 (`components.js`)
| 元件 | 函式名稱 | 說明 |
|------|----------|------|
| 導覽列 | `renderNavbar()` | 響應式頂部導覽，含 Offcanvas 手機選單 |
| 頁尾 | `renderFooter()` | 4 欄式頁尾，含社群連結與公司資訊 |
| 房源卡片 | `renderPropertyCard(p)` | Airbnb 風格卡片，含價格標籤與特色 Tags |
| 部落格卡片 | `renderBlogCard(post)` | 文章卡片，含封面圖、分類、閱讀更多 |
| 房源詳細 Modal | `openPropertyModal(id)` | 完整房源資訊，含圖片輪播、設備、看房表單 |

### 頁面特有元件
| 元件 | 頁面 | 說明 |
|------|------|------|
| Hero 輪播 | 首頁 | Bootstrap Carousel，自動播放 3 張大圖 |
| 快速搜尋列 | 首頁 | 區域/價格/關鍵字即時篩選 |
| 特色服務卡 | 首頁 | 安心保障/即時服務/貼心管理 |
| 租客好評卡 | 首頁 | 3 則附星等評價 |
| 完整篩選列 | 租屋資訊 | 含特色標籤 Toggle（可養寵物/有陽台等） |
| 分類篩選 | 租屋指南 | 按文章分類切換 |
| 品牌時間軸 | 關於我們 | 公司里程碑 Timeline |
| 團隊介紹卡 | 關於我們 | 4 位團隊成員 |
| 預約表單 | 聯絡我們 | 完整表單含成功動畫 |
| Google Map | 聯絡我們 | 嵌入式地圖 |

---

## 📄 頁面結構

### 首頁 (index.html)
- Hero 大圖輪播（3 張，自動播放）
- 快速搜尋與篩選列
- 熱門房源推薦（4 張卡片）
- 特色服務 & 租客好評
- 最新租屋文章（2 篇）
- CTA 行動呼籲區塊

### 租屋資訊 (listings.html)
- 完整篩選列（區域/價格/關鍵字/特色標籤）
- 房源卡片格線（Airbnb 風格）
- 點擊卡片開啟詳細 Modal

### 關於我們 (about.html)
- Hero 大圖 + 品牌故事
- 核心價值（4 張特色卡）
- 公司大事紀（Timeline）
- 團隊介紹（4 位成員）
- 誠信保證區塊

### 租屋指南 (blog.html)
- 分類篩選按鈕
- 文章卡片格線

### 文章內頁 (blog-post.html)
- Hero 封面圖
- 文章內容
- 推薦房源（跨組件連動）
- 相關文章推薦

### 聯絡我們 (contact.html)
- 線上預約表單
- 聯絡方式卡片（電話/信箱/Line@）
- Google Map 嵌入
- 營業時間

---

## 🚀 GitHub Pages 部署指南

由於本專案使用純 HTML/CSS/JS，部署到 GitHub Pages **非常簡單**，完全不需要建置工具。

### 步驟

1. **建立 GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 馬克租屋網站"
   ```

2. **推送到 GitHub**
   ```bash
   git remote add origin https://github.com/你的帳號/mark-rental.git
   git branch -M main
   git push -u origin main
   ```

3. **啟用 GitHub Pages**
   - 前往 Repository → **Settings** → **Pages**
   - Source 選擇 **Deploy from a branch**
   - Branch 選擇 `main`，路徑選 `/ (root)`
   - 點擊 **Save**

4. **等待部署完成**
   - 約 1-2 分鐘後即可在 `https://你的帳號.github.io/mark-rental/` 看到網站

> ✅ 無需 `npm run build`、無需 `gh-pages` 套件  
> ✅ 每次 push 到 `main` 分支就會自動重新部署

---

## 📝 如何新增/修改房源與文章

### 新增房源

編輯 `js/data.js`，在 `PROPERTIES` 陣列中新增一個物件：

```javascript
{
  id: 7,                    // 唯一 ID（遞增）
  title: "你的房源標題",
  price: 8500,              // 月租金（數字）
  address: "完整地址",
  area: "大安區",            // 區域（需與篩選選項一致）
  city: "台北市",
  size: 8,                  // 坪數
  floor: "3F/5F",
  type: "獨立套房",          // 或 "雅房"
  images: [                 // 建議 2-3 張 Unsplash 圖片
    "https://images.unsplash.com/photo-XXXXX?w=800&q=80"
  ],
  tags: ["近台大 🎓", "含水網路 📶"],  // 特色標籤
  equipment: ["冷氣", "熱水器", "冰箱"],  // 設備清單
  description: "房源描述文字...",
  available: true,
  publishDate: "2026-09-01"  // 刊登日期
}
```

### 新增文章

在 `POSTS` 陣列中新增一個物件：

```javascript
{
  id: 7,
  title: "文章標題",
  summary: "文章摘要（1-2 句）",
  content: `<p class="lead">引言段落</p>
<h4>第一段標題</h4><p>段落內容...</p>`,  // HTML 格式
  coverImage: "https://images.unsplash.com/photo-XXXXX?w=800&q=80",
  publishDate: "2026-09-01",
  category: "看房攻略",      // 分類（可新增）
  relatedPropertyIds: [1, 3] // 關聯房源 ID
}
```

### 注意事項

- 圖片建議使用 [Unsplash](https://unsplash.com/) 免費圖片，URL 格式為 `?w=800&q=80`
- 新增區域時，記得同步更新 `listings.html` 和 `index.html` 中 `<select>` 的 `<option>`
- 文章內容使用 HTML 格式，支援 `<h4>`、`<p>`、`<ul>`、`<li>` 等標籤

---

## 🔧 技術挑戰與解決方案

### 1. 純靜態託管下的多頁路由

**挑戰**：GitHub Pages 為純靜態託管，不支援 SPA 路由 fallback。

**解決方案**：採用傳統多頁面架構（MPA），每個頁面為獨立 HTML 檔案。文章內頁使用 URL 參數（`?id=1`）傳遞文章 ID，由 JavaScript 在 client 端讀取並渲染內容。

### 2. 共用元件（Navbar/Footer）維護

**挑戰**：多頁面架構下，導覽列和頁尾需要在每個頁面重複。

**解決方案**：將共用 HTML 抽離到 `components.js`，使用 `renderNavbar()` 和 `renderFooter()` 函式動態注入。修改一處即可更新所有頁面。

### 3. 模組化 JSON 資料維護

**挑戰**：需要讓非技術人員能輕鬆更新房源與文章。

**解決方案**：所有資料集中在 `js/data.js` 單一檔案中，使用清晰的 JavaScript 物件陣列格式。每個欄位都有明確的命名與註解，只需要基本的文字編輯器即可修改。

### 4. 跨頁面資料關聯（文章 ↔ 房源）

**挑戰**：部落格文章需要推薦相關房源。

**解決方案**：在文章資料中加入 `relatedPropertyIds` 欄位，引用房源 ID。blog-post.html 載入時會自動查找對應房源並渲染推薦卡片。

### 5. 響應式設計與無障礙

**挑戰**：需要同時支援桌面和行動裝置。

**解決方案**：使用 Bootstrap 5 的格線系統與 Offcanvas 行動選單。所有互動元素都有 `aria-label`，圖片都有 `alt` 屬性。

---

## 📅 開發歷程 (Changelog)

### v1.0.0 (2026-08-19)
- ✅ 專案初始化（純 HTML/CSS/JS + Bootstrap 5 + jQuery）
- ✅ 建立莫蘭迪色系自訂 CSS 主題
- ✅ 完成 6 個頁面：首頁、租屋資訊、關於我們、租屋指南、文章內頁、聯絡我們
- ✅ 建立 6 組台灣在地風格房源假資料
- ✅ 建立 6 篇租屋指南文章
- ✅ 共用元件：響應式導覽列（含漢堡選單）、4 欄頁尾
- ✅ Airbnb 風格房源卡片（含價格標籤、特色 Tags）
- ✅ 完整篩選功能（區域/價格/關鍵字/特色標籤）
- ✅ 房源詳細 Modal（含圖片輪播、設備清單、看房預約表單）
- ✅ 部落格分類篩選與文章內頁
- ✅ 文章 ↔ 房源跨組件連動推薦
- ✅ Hero 大圖輪播（自動播放）
- ✅ 租客好評與特色服務區塊
- ✅ 線上預約看房表單（含成功動畫）
- ✅ Google Map 嵌入
- ✅ AOS 滾動動畫
- ✅ 完整 SEO meta tags
- ✅ GitHub Pages 部署就緒
- ✅ README.md 完成

---

## 📄 授權

本專案為 Demo 展示用途。圖片來源為 [Unsplash](https://unsplash.com/)（免費授權）。

---

<p align="center">
  Made with ❤️ by 馬克租屋有限公司<br>
  <small>© 2026 Mark Rental Co., Ltd.</small>
</p>
