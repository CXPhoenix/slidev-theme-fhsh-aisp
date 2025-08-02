# 🎨 Slidev Theme FHSH AiSP

[![NPM version](https://img.shields.io/npm/v/@cxphoenix/slidev-theme-fhsh-aisp?color=3AB9D4&label=pnpm)](https://www.npmjs.com/package/@cxphoenix/slidev-theme-fhsh-aisp/v/latest)
[![License](https://img.shields.io/github/license/CXPhoenix/slidev-theme-fhsh-aisp?color=green)](https://github.com/CXPhoenix/slidev-theme-fhsh-aisp/blob/main/LICENSE)
[![Node.js](https://img.shields.io/node/v/@cxphoenix/slidev-theme-fhsh-aisp)](https://nodejs.org/)

## 📖 專案介紹

✨ **Slidev Theme FHSH AiSP** 是專為復興高中 AI 資安學程（FHSH AiSP）設計的專業 [Slidev](https://github.com/slidevjs/slidev) 主題佈景。這個主題結合了現代化的設計美學與教育簡報的實用性，為學術演講和技術分享提供了完美的視覺體驗。

### 🌟 主題特色

- 🎯 **專業設計**：專為 AI 資安學程量身打造的視覺風格
- 🚀 **現代化介面**：簡潔優雅的設計語言，突出內容重點
- 🎨 **多元版面**：提供封面、內容、章節、圖片等多種版面配置
- 📱 **響應式設計**：支援不同螢幕尺寸的最佳顯示效果
- 🔤 **中文最佳化**：針對繁體中文內容進行字體與排版優化
- ⚡ **高效能**：基於 Slidev 的輕量化架構，快速載入與流暢操作
- 🎪 **豐富動效**：內建精美的過場動畫與互動效果

## 🚀 安裝與設定

### 📋 環境需求

在開始使用之前，請確保您的開發環境滿足以下需求：

- 📦 **Node.js** >= 18.0.0
- 📦 **pnpm** >= 7.0.0（推薦）或 npm/yarn
- 🎬 **Slidev** >= 0.48.0

### ⚡ 快速開始

#### 方法一：自動安裝（推薦）

在您的 `slides.md` 檔案的 frontmatter 中加入以下內容：

```yaml
---
theme: '@cxphoenix/slidev-theme-fhsh-aisp'
---

# 您的簡報標題

開始製作您的第一份簡報！
```

當您執行 `slidev slides.md` 時，Slidev 會自動提示您安裝此主題。

#### 方法二：手動安裝

```bash
# 使用 pnpm（推薦）
pnpm add @cxphoenix/slidev-theme-fhsh-aisp

# 使用 npm
npm install @cxphoenix/slidev-theme-fhsh-aisp

# 使用 yarn
yarn add @cxphoenix/slidev-theme-fhsh-aisp
```

### 🔧 基本設定

安裝完成後，您可以在簡報檔案中進行基本設定：

```yaml
---
theme: '@cxphoenix/slidev-theme-fhsh-aisp'
title: '我的簡報'
info: |
  ## FHSH AiSP 簡報
  使用 Slidev Theme FHSH AiSP 製作
fonts:
  sans: 'Noto Sans TC'
  mono: 'Fira Code'
aspectRatio: '16/9'
layout: 'default'
---
```

更多進階設定選項，請參考 [使用說明](./Usage.md) 或 [Slidev 官方文件](https://sli.dev/guide/theme-addon#use-theme)。

## 🖼️ 版面配置

此主題提供了四種精心設計的版面配置，滿足不同簡報需求：

### 📄 可用版面

| 版面名稱 | 用途說明 | 特色功能 |
|---------|---------|---------|
| 🏠 `cover` | 封面頁面 | 專業的標題展示，包含 FHSH AiSP 專屬標誌 |
| 📝 `default` | 標準內容 | 適合一般內容展示，支援標題、段落、清單等 |
| 🏷️ `section` | 章節分隔 | 大標題置中顯示，用於章節切換 |
| 🖼️ `image` | 圖片展示 | 全背景圖片顯示，適合視覺化內容 |

### 💡 版面使用範例

```markdown
---
layout: cover
---

# 復興高中 AI 資安學程
## 主題簡報
復興高中

---
layout: section
---

# 第一章：基礎概念

---
layout: default
---

# 標準內容頁面

- 項目一
- 項目二
- 項目三

---
layout: image
image: 'https://source.unsplash.com/1920x1080/?technology'
---

# 圖片背景頁面
```

詳細的版面配置使用方法，請參考 [使用說明](./Usage.md)。

## 🛠️ 開發與貢獻

我們歡迎所有形式的貢獻！無論是回報問題、提出建議，或是直接參與程式碼開發。

### 🚀 開發環境設定

1. **複製專案** 📥
   ```bash
   git clone https://github.com/CXPhoenix/slidev-theme-fhsh-aisp.git
   cd slidev-theme-fhsh-aisp
   ```

2. **安裝依賴** 📦
   ```bash
   pnpm install
   ```

3. **啟動開發伺服器** 🛠️
   ```bash
   pnpm run dev
   ```
   此指令會以 `example.md` 作為範例啟動 Slidev，您可以即時預覽主題變更。

4. **編輯與測試** ✍️
   - 編輯 `layouts/` 資料夾中的版面檔案
   - 修改 `styles/layout.css` 調整樣式
   - 在 `example.md` 中測試不同的版面效果

### 📦 開發指令

```bash
# 啟動開發伺服器
pnpm run dev

# 建置靜態檔案
pnpm run build

# 匯出 PDF
pnpm run export

# 產生預覽圖片
pnpm run screenshot
```

### 🤝 貢獻流程

1. 🍴 Fork 此專案
2. 🌿 建立您的功能分支 (`git checkout -b feature/amazing-feature`)
3. 💾 提交您的變更 (`git commit -m '✨ feat: 增加了某個酷功能'`)
4. 📤 推送到分支 (`git push origin feature/amazing-feature`)
5. 🔀 開啟 Pull Request

### 🐛 回報問題

如果您發現任何問題或有改進建議，請在 [GitHub Issues](https://github.com/CXPhoenix/slidev-theme-fhsh-aisp/issues) 中回報。

## 📚 相關連結

- 📖 [詳細使用說明](./Usage.md)
- 🎬 [Slidev 官方文件](https://sli.dev/)
- 🎨 [Slidev 主題開發指南](https://sli.dev/guide/write-theme.html)
- 🏫 [復興高中 AI 資安學程](https://www.fhsh.tp.edu.tw/)

## 📄 授權條款

本專案採用 MIT 授權條款。詳細內容請參考 [LICENSE](./LICENSE) 檔案。

## 💬 聯絡我們

如果您有任何問題或建議，歡迎透過以下方式聯絡：

- 📧 GitHub Issues: [回報問題](https://github.com/CXPhoenix/slidev-theme-fhsh-aisp/issues)
- 🌐 GitHub: [@CXPhoenix](https://github.com/CXPhoenix)

---

⭐ 如果這個主題對您有幫助，請不要忘記給我們一個星星！