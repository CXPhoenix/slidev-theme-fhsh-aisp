# 📝 使用說明

本文件將引導您如何有效使用此 Slidev 佈景主題所提供的各種功能與版面配置。

## 🎨 佈景主題設定

您可以在您的 `slides.md` 檔案的 frontmatter 中自訂部分預設設定。

```yaml
---
theme: '@cxphoenix/slidev-theme-fhsh-aisp'
# 預設字體
fonts:
  sans: 'Noto Sans TC'
  mono: 'Fira Code'
# 預設投影片比例
aspectRatio: '16/9'
# 預設版面
layout: 'default'
# 簡報標題範本
titleTemplate: '%s - FHSH AiSP'
---
```

## 🖼️ 版面配置

### 封面 (`cover`)

作為簡報的開頭。此版面會自動置中您的內容。

```markdown
---
layout: cover
---

# 復興高中 AI 資安學程
## FHSH AiSP

復興高中
```

### 預設 (`default`)

標準的內容投影片，包含一個標題和內容。您可以使用 Markdown 的所有標準語法。

```markdown
---
layout: default
---

# 這是一個標題

這裡是您的內容...

- 點一
- 點二
  - 子點一
  - 子點二
- 點三

```

### 章節 (`section`)

用於分隔不同章節的標題投影片，文字會比較大且置中。

```markdown
---
layout: section
---

# 章節標題
```

### 圖片 (`image`)

這個版面配置讓您能輕鬆地展示圖片。您可以在 frontmatter 中使用 `image` 欄位來指定圖片的 URL，該圖片將會作為背景。

```markdown
---
layout: image
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# 您也可以在這裡加上標題

這個頁面的背景是一張來自 Unsplash 的隨機圖片。
```

## 💻 程式碼高亮

此佈景主題使用 [Shiki](https://shiki.matsu.io/) 來進行語法高亮，並內建了 `vitesse-light`（亮色）和 `vitesse-dark`（暗色）兩種主題。

````markdown
```ts
// setup/shiki.ts
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async ({ loadTheme }) => {
  return {
    themes: {
      dark: await loadTheme(require.resolve('vitesse-dark')),
      light: await loadTheme(require.resolve('vitesse-light')),
    },
  }
})
```
````

## 🧩 組件

此佈景主題目前尚未提供任何自訂組件。
