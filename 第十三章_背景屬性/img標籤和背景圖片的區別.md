# img 標籤和背景圖片的區別

所屬章節：第 13 章 背景屬性  
建議搭配 demo：[`demo/img-vs-background-image/index.html`](./demo/img-vs-background-image/index.html)

---

## 本節導讀

在網頁中顯示圖片，常見有兩種做法：

```html
<img src="./images/product.jpg" alt="黑色無線滑鼠">
```

或：

```css
.hero {
  background-image: url("./images/hero-bg.jpg");
}
```

兩者都能讓畫面出現圖片，但它們的本質完全不同：

```text
<img>              是 HTML 內容。
background-image  是 CSS 視覺樣式。
```

所以判斷時不要只問：

```text
哪一個比較好排版？
哪一個比較好控制大小？
哪一個看起來比較方便？
```

而是先問：

```text
這張圖片是不是內容本身？
圖片拿掉後，使用者是否會失去重要資訊？
圖片是否需要替代文字？
圖片是否有互動功能？
```

如果圖片有資訊、語意、功能或需要被理解，通常應該使用 `<img>`。  
如果圖片只是裝飾、氛圍、底紋、視覺效果，通常應該使用 `background-image`。

---

## 學習目標

學完本節後，你應該能夠回答：

1. `<img>` 和 `background-image` 的本質差異是什麼？
2. 為什麼有語意的圖片應該優先使用 `<img>`？
3. 為什麼裝飾性圖片通常適合使用 `background-image`？
4. `alt` 的目的不是什麼？
5. 裝飾圖片如果使用 `<img>`，`alt` 應該怎麼寫？
6. 功能圖片，例如按鈕 icon，`alt` 應該描述圖片長相還是功能？
7. 複雜圖表應該如何處理替代資訊？
8. 為什麼 `background-image` 不會撐開盒子？
9. `<img>` 和 `background-image` 在版面佔位上差在哪？
10. `object-fit` 和 `background-size` 的角色如何對應？
11. 商品圖片、文章插圖、使用者頭像、Hero 背景、卡片底紋分別該用哪個？
12. 什麼情況下用 `background-image` 承載重要資訊會造成可及性問題？

---

## 關鍵字

- 中文：`img` 標籤、背景圖片、內容圖片、裝飾圖片、替代文字、語意、可及性
- 英文：`img`、`background-image`、content image、decorative image、alt text、accessibility
- HTML 相關：
  - `<img>`
  - `src`
  - `alt`
  - `width`
  - `height`
  - `loading="lazy"`
  - `srcset`
  - `sizes`
- CSS 相關：
  - `background-image`
  - `background-size`
  - `background-position`
  - `background-repeat`
  - `object-fit`
  - `object-position`
  - `aspect-ratio`
- 易混淆概念：
  - `<img>` 是內容，不只是視覺
  - `background-image` 是樣式，不是語意內容
  - `alt` 不是圖片說明欄，也不是檔名
  - 裝飾性 `<img>` 應使用空的 `alt=""`
  - 背景圖片通常不會被輔助工具當作內容讀取
  - `background-image` 不會撐開元素
  - `object-fit: cover` 常常可以取代「為了裁切方便而濫用背景圖」的情境

---

## 建議回查情境

當你遇到以下情況，可以回來查這一節：

- 不知道某張圖片該用 `<img>` 還是 `background-image`
- 圖片需要被搜尋引擎、輔助工具或使用者理解
- 圖片只是裝飾，但目前用 `<img>` 寫，不知道 `alt` 怎麼處理
- 想做商品卡片、文章圖片、頭像、Logo、Hero 背景、Banner 圖
- 想確認背景圖為什麼沒有顯示
- 想知道 `object-fit` 和 `background-size` 的差異
- 想避免把重要資訊藏在 CSS 背景裡
- 想重構舊專案中大量使用背景圖的圖片寫法
- 想寫面試筆記，說清楚「內容圖片」與「裝飾圖片」

---

## Demo 範例

本節 demo 放在：

```text
demo/img-vs-background-image/index.html
```

本節 demo 使用本地 SVG 圖檔：

```text
demo/img-vs-background-image/assets/product-camera.svg
demo/img-vs-background-image/assets/hero-scene.svg
demo/img-vs-background-image/assets/decorative-pattern.svg
demo/img-vs-background-image/assets/sales-chart.svg
demo/img-vs-background-image/assets/avatar.svg
demo/img-vs-background-image/assets/search-icon.svg
```

這樣 demo 不依賴外部圖片網址，離線開啟也能正常觀看。

未來新增其他背景屬性 demo 時，可以繼續放在：

```text
demo/background-color/index.html
demo/background-image/index.html
demo/background-repeat/index.html
demo/background-position/index.html
```

每一節都保留自己的 `index.html`、`style.css`、`README.md`，但透過外層資料夾名稱區分主題。

---

## 30 秒複習入口

- `<img>` 是 HTML 內容圖片。
- `background-image` 是 CSS 背景樣式。
- 有語意、有資訊、有功能、需要替代文字的圖片，通常用 `<img>`。
- 裝飾性、不影響理解、只是氛圍或底紋的圖片，通常用 `background-image`。
- `<img>` 可以提供 `alt`，輔助工具、搜尋引擎和圖片載入失敗情境都能受益。
- `alt` 要傳達圖片的內容或功能，不是寫「圖片」、「照片」、「image」或檔名。
- 裝飾圖片如果不得不用 `<img>`，應使用 `alt=""`，讓輔助工具忽略它。
- 功能圖片，例如按鈕 icon，替代文字要描述功能，不是描述圖案長相。
- 複雜圖表不能只靠短短 `alt`，應在頁面中提供資料表、文字說明或完整描述。
- `<img>` 會參與文件流，預設會依圖片尺寸佔空間。
- `background-image` 不會撐開元素，元素本身需要內容、寬高、padding 或 min-height。
- 需要裁切圖片時，不一定要改成背景圖；可以考慮 `<img>` 搭配 `object-fit: cover`。
- 不要因為 CSS 好排版，就把重要內容圖片全部改成背景圖。

---

## 一句話判斷

> 圖片拿掉後，內容會不完整，用 `<img>`；圖片拿掉後，只是少了裝飾或氛圍，用 `background-image`。

---

## 速查區

### 1. 決策流程

```text
這張圖片是否傳達資訊？
├─ 是 → 用 <img>，並提供合適 alt。
└─ 否 → 繼續判斷。

這張圖片是否有互動功能，例如連結、按鈕？
├─ 是 → 用可被理解的 HTML 結構，替代文字描述功能。
└─ 否 → 繼續判斷。

這張圖片是否只是裝飾、氛圍、底紋？
├─ 是 → 優先用 background-image。
└─ 不確定 → 先用 <img>，並根據上下文撰寫 alt。
```

---

### 2. 對比表

| 比較項目 | `<img>` | `background-image` |
|---|---|---|
| 本質 | HTML 內容 | CSS 樣式 |
| 適合用途 | 商品圖、文章圖、頭像、圖表、重要 Logo、截圖 | 裝飾圖、底紋、氛圍背景、Hero 背景、卡片裝飾 |
| 是否有語意 | 有，可以透過 `alt` 表達 | 通常沒有內容語意 |
| 可及性 | 可被輔助工具理解 | 通常不會作為內容被讀取 |
| SEO | 較適合作為內容圖片被理解 | 不適合承載重要內容 |
| 是否會佔版面 | 會參與文件流 | 不會撐開元素 |
| 載入失敗 | 可顯示替代文字 | 通常只是背景消失 |
| 響應式圖片 | 支援 `srcset`、`sizes` | 通常靠 CSS、media query、image-set 等處理 |
| 裁切控制 | `object-fit`、`object-position` | `background-size`、`background-position` |
| 互動圖片 | 可以在 link/button 中承載內容或功能 | 不適合作為唯一可理解的互動內容 |

---

### 3. 常見情境速查

| 情境 | 建議 | 原因 |
|---|---|---|
| 商品圖片 | `<img>` | 商品圖是內容，通常需要可被理解與索引 |
| 使用者頭像 | `<img>` | 頭像通常代表人物或帳號資訊 |
| 文章插圖 | `<img>` | 插圖通常是文章內容的一部分 |
| 圖表 / 流程圖 | `<img>` + 額外文字或資料 | 資訊量通常超過單一句 `alt` |
| Hero 氛圍大圖 | `background-image` | 通常是視覺氛圍，不是正文資訊 |
| 卡片右下角裝飾圖 | `background-image` | 拿掉不影響理解 |
| 背景紋理 | `background-image` | 純視覺樣式 |
| 搜尋按鈕 icon | 視情況 | 有文字可用背景；只有 icon 時需 aria-label 或替代文字 |
| Logo | 視情況 | 若是網站識別內容，常用 `<img alt="品牌名稱">` |
| CSS sprite icon | 背景圖 + 可及性文字 | icon 不應是唯一語意來源 |

---

## 正文

## 1. 本質差異：HTML 內容 vs CSS 樣式

`<img>` 是 HTML 元素，圖片本身是文件內容的一部分。

```html
<img src="./assets/product-camera.svg" alt="復古銀色相機">
```

這代表這張相機圖片是頁面內容。瀏覽器、搜尋引擎、輔助工具都能從 HTML 結構中知道這裡有一張圖片，並透過 `alt` 理解它的替代資訊。

`background-image` 則是 CSS 樣式。

```css
.card {
  background-image: url("./assets/decorative-pattern.svg");
}
```

這代表圖片是視覺背景。它不是 HTML 內容，也沒有 `alt`，通常不應承載頁面必要資訊。

---

## 2. 什麼時候用 `<img>`？

當圖片是內容的一部分時，用 `<img>`。

常見情境：

- 商品圖片
- 使用者頭像
- 文章主圖
- 文章插圖
- 圖表
- 流程圖
- 截圖
- 地圖
- 重要 Logo
- 需要被使用者理解的照片或示意圖

例如商品卡片：

```html
<article class="product-card">
  <img src="./assets/product-camera.svg" alt="復古銀色相機">
  <h2>復古銀色相機</h2>
  <p>適合街拍與旅行記錄。</p>
</article>
```

這張圖片如果拿掉，使用者會失去商品外觀資訊，所以它是內容，不是裝飾。

---

## 3. 什麼時候用 `background-image`？

當圖片只是視覺樣式，不影響內容理解時，用 `background-image`。

常見情境：

- 區塊背景圖
- Hero 氛圍圖
- 卡片底紋
- 裝飾性圖案
- 漸層遮罩
- 背景紋理
- 右下角裝飾 icon
- 不需要被讀者單獨理解的視覺效果

例如：

```css
.hero {
  min-height: 360px;
  color: white;
  background-image:
    linear-gradient(rgb(15 23 42 / 70%), rgb(15 23 42 / 70%)),
    url("./assets/hero-scene.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

這張背景圖負責氛圍。即使拿掉，標題與段落仍然完整，所以適合做成背景。

---

## 4. `alt` 的核心觀念

`alt` 是替代文字，用來在圖片無法顯示或無法被看見時，提供等價資訊。

好的 `alt` 不是描述「這是一張圖片」，而是根據上下文傳達圖片的意義。

### 不好的寫法

```html
<img src="./assets/product-camera.svg" alt="圖片">
```

```html
<img src="./assets/product-camera.svg" alt="product-camera.svg">
```

這些文字沒有幫助使用者理解圖片。

### 較好的寫法

```html
<img src="./assets/product-camera.svg" alt="復古銀色相機">
```

如果圖片在商品頁中，這樣的替代文字能傳達商品外觀資訊。

---

## 5. 裝飾圖片如果用 `<img>`，要用空 `alt`

理想上，純裝飾圖片應該用 CSS 背景。

但如果因為某些原因必須用 `<img>` 放裝飾圖，應使用空的 `alt`：

```html
<img src="./assets/decorative-pattern.svg" alt="">
```

意思是：

```text
這張圖片只是裝飾，輔助工具可以忽略。
```

不要寫：

```html
<img src="./assets/decorative-pattern.svg" alt="裝飾圖片">
```

因為這會讓輔助工具讀出無意義資訊，反而干擾使用者。

---

## 6. 功能圖片：描述功能，不是描述長相

如果圖片在按鈕或連結中代表一個動作，替代文字應該描述功能。

### 只有 icon 的搜尋按鈕

```html
<button type="submit">
  <img src="./assets/search-icon.svg" alt="搜尋">
</button>
```

這裡 `alt="搜尋"` 描述的是按鈕功能，而不是圖片長相。

不要寫：

```html
<img src="./assets/search-icon.svg" alt="放大鏡">
```

因為使用者真正需要知道的是：按下去會搜尋。

### 使用背景圖做 icon

如果 icon 是背景圖，按鈕本身需要可及性名稱：

```html
<button class="search-button" type="submit" aria-label="搜尋"></button>
```

```css
.search-button {
  background-image: url("./assets/search-icon.svg");
  background-repeat: no-repeat;
  background-position: center;
}
```

背景圖本身沒有 `alt`，所以語意要由按鈕的文字、`aria-label` 或其他可及性名稱提供。

---

## 7. 複雜圖片：不要只靠 `alt`

圖表、流程圖、複雜截圖、地圖通常資訊量很大。  
這些圖片即使使用 `<img>`，也不應該只靠一小段 `alt`。

例如：

```html
<figure>
  <img src="./assets/sales-chart.svg" alt="2026 年第一季銷售呈現上升趨勢">
  <figcaption>2026 年第一季銷售從 1 月到 3 月逐月上升。</figcaption>
</figure>
```

如果資料很重要，應在頁面中提供更完整資訊，例如：

```html
<table>
  <caption>2026 年第一季銷售資料</caption>
  <thead>
    <tr><th>月份</th><th>銷售額</th></tr>
  </thead>
  <tbody>
    <tr><td>1 月</td><td>120 萬</td></tr>
    <tr><td>2 月</td><td>160 萬</td></tr>
    <tr><td>3 月</td><td>210 萬</td></tr>
  </tbody>
</table>
```

重點：

```text
複雜圖片的資訊，要在頁面中有文字或資料等價內容。
```

不要把重要圖表做成背景圖，因為背景圖無法提供替代文字。

---

## 8. 版面差異：`<img>` 會佔位，背景圖不會撐開盒子

`<img>` 是內容元素，會參與文件流。

```html
<img src="./assets/avatar.svg" alt="使用者頭像">
```

即使你沒有設定 `width`、`height`，圖片通常也會依自身尺寸顯示。

但背景圖片不會撐開元素：

```html
<div class="empty-bg"></div>
```

```css
.empty-bg {
  background-image: url("./assets/avatar.svg");
}
```

這個元素可能看不到，因為它沒有內容、寬度、高度、padding 或 min-height。

要讓背景圖可見，需要給元素可見空間：

```css
.empty-bg {
  width: 160px;
  height: 160px;
  background-image: url("./assets/avatar.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
```

---

## 9. 裁切與縮放：`object-fit` vs `background-size`

很多人為了方便裁切圖片，就把內容圖片改成背景圖。  
但現在更建議先考慮 `<img>` 搭配 `object-fit`。

### 使用 `<img>` 裁切

```html
<img class="cover-img" src="./assets/product-camera.svg" alt="復古銀色相機">
```

```css
.cover-img {
  width: 320px;
  height: 220px;
  object-fit: cover;
  object-position: center;
}
```

這樣圖片仍然是 HTML 內容，同時又能像背景圖一樣裁切。

### 使用背景圖裁切

```css
.cover-bg {
  width: 320px;
  height: 220px;
  background-image: url("./assets/product-camera.svg");
  background-position: center;
  background-size: cover;
}
```

這適合裝飾背景，不適合承載重要商品圖。

### 對應關係

| 需求 | `<img>` 寫法 | 背景圖寫法 |
|---|---|---|
| 圖片填滿並裁切 | `object-fit: cover` | `background-size: cover` |
| 圖片完整顯示 | `object-fit: contain` | `background-size: contain` |
| 控制焦點位置 | `object-position` | `background-position` |
| 讓圖片保持內容語意 | 適合 | 不適合 |

---

## 10. 載入與效能觀念

### `<img>` 的優勢

`<img>` 是 HTML 內容，瀏覽器可以更早知道這張圖片存在。  
它也有一些專門的圖片載入能力：

```html
<img
  src="./assets/product-camera.svg"
  alt="復古銀色相機"
  width="320"
  height="220"
  loading="lazy"
>
```

常見好處：

- 可以設定 `alt`
- 可以設定 `width` / `height`，降低版面跳動
- 可以使用 `loading="lazy"`
- 可以使用 `srcset` / `sizes` 做響應式圖片
- 圖片是文件內容的一部分

### `background-image` 的特性

`background-image` 由 CSS 控制。它適合樣式背景，但不適合承載關鍵內容。

適合：

- 裝飾背景
- 漸層背景
- 紋理
- 不重要的氛圍圖

不適合：

- 商品主圖
- 重要文章圖
- 圖表
- 只有圖片能傳達的資訊

---

## 11. SEO 與內容理解

搜尋引擎和輔助工具更容易理解 HTML 中的內容圖片。

```html
<img src="./assets/product-camera.svg" alt="復古銀色相機">
```

這種寫法提供了圖片與替代文字。

背景圖片則像樣式：

```css
.product {
  background-image: url("./assets/product-camera.svg");
}
```

它不應被視為頁面的主要內容。  
如果你的產品展示、文章插圖、圖表都使用背景圖片，會讓內容語意變弱，也不利於無障礙理解。

---

## 12. Logo 應該用 `<img>` 還是背景圖？

Logo 要看它在頁面中的角色。

### 作為網站識別內容

通常用 `<img>`：

```html
<a href="/" class="site-logo">
  <img src="./assets/logo.svg" alt="Acme 首頁">
</a>
```

這裡 Logo 在連結裡，替代文字應描述連結目的或品牌識別。

### 只是背景裝飾

如果 Logo 水印只是背景裝飾：

```css
.card {
  background-image: url("./assets/logo-watermark.svg");
}
```

這時可以用背景圖，因為拿掉後不影響內容理解。

---

## 13. 常見錯誤與修正

### 錯誤 1：把商品圖做成背景圖

不建議：

```css
.product-photo {
  background-image: url("./assets/product-camera.svg");
}
```

建議：

```html
<img src="./assets/product-camera.svg" alt="復古銀色相機">
```

商品圖是內容，不是裝飾。

---

### 錯誤 2：背景圖沒有顯示

```css
.banner {
  background-image: url("./assets/hero-scene.svg");
}
```

如果 `.banner` 沒有尺寸或內容，背景圖可能看不到。

修正：

```css
.banner {
  min-height: 360px;
  background-image: url("./assets/hero-scene.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

---

### 錯誤 3：`alt` 寫成檔名或「圖片」

不建議：

```html
<img src="./assets/avatar.svg" alt="avatar.svg">
<img src="./assets/avatar.svg" alt="圖片">
```

建議根據上下文寫：

```html
<img src="./assets/avatar.svg" alt="王小明的使用者頭像">
```

如果只是裝飾圖：

```html
<img src="./assets/decorative-pattern.svg" alt="">
```

---

### 錯誤 4：只有 icon，卻沒有可及性名稱

不建議：

```html
<button class="search-button"></button>
```

```css
.search-button {
  background-image: url("./assets/search-icon.svg");
}
```

這個按鈕對輔助工具來說可能沒有名稱。

修正：

```html
<button class="search-button" aria-label="搜尋"></button>
```

或使用可見文字：

```html
<button class="search-button">
  <span>搜尋</span>
</button>
```

---

### 錯誤 5：為了 cover 效果，把內容圖片改成背景

不建議：

```css
.article-cover {
  background-image: url("./assets/article-photo.jpg");
  background-size: cover;
}
```

如果圖片是文章主圖，建議：

```html
<img class="article-cover" src="./assets/article-photo.jpg" alt="文章主圖描述">
```

```css
.article-cover {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
```

---

## 14. 面試與讀碼常見問法

### 問題 1：`<img>` 和 `background-image` 最大差異是什麼？

`<img>` 是 HTML 內容，適合有語意、需要替代文字、需要被理解的圖片。  
`background-image` 是 CSS 樣式，適合裝飾性、氛圍性、不影響內容理解的圖片。

---

### 問題 2：為什麼有內容意義的圖片不建議用背景圖？

因為背景圖沒有 `alt`，通常不會被輔助工具當作內容讀取，也不適合作為搜尋引擎理解的主要圖片資訊。  
如果圖片傳達重要資訊，應放在 HTML 中，並提供適當替代文字。

---

### 問題 3：裝飾圖片如果使用 `<img>`，`alt` 要怎麼寫？

使用空字串：

```html
<img src="./decorative.svg" alt="">
```

這表示它是裝飾圖，輔助工具可以忽略。

---

### 問題 4：`background-image` 為什麼看不到？

常見原因：

- 元素沒有寬高或內容
- 圖片路徑錯誤
- 被其他背景設定覆蓋
- 背景圖太小或位置不明顯
- 沒有設定 `background-repeat`、`background-position`、`background-size`

---

### 問題 5：需要圖片裁切時，是不是一定要用背景圖？

不是。  
如果圖片是內容，建議用 `<img>` 搭配：

```css
object-fit: cover;
object-position: center;
```

這樣可以保留語意，又能達到裁切效果。

---

## 15. 實務判斷口訣

```text
內容圖，用 img。
裝飾圖，用 background。
功能圖，描述功能。
複雜圖，補完整文字或資料。
只為裁切，先想 object-fit。
```

---

## 16. 一句話抓核心

> `<img>` 承載內容與語意，`background-image` 承載視覺樣式；選擇時先判斷圖片是否會影響內容理解，而不是先看哪個比較好排版。

---

## 自測問題

1. `<img>` 和 `background-image` 的本質差異是什麼？
2. 為什麼商品圖片通常應該使用 `<img>`？
3. 為什麼背景圖片不適合承載重要資訊？
4. 裝飾性圖片如果使用 `<img>`，`alt` 應該怎麼寫？
5. 功能性 icon 的替代文字應該描述圖案長相還是功能？
6. 複雜圖表為什麼不能只靠短短的 `alt`？
7. `background-image` 為什麼不會撐開元素？
8. 想讓 `<img>` 有類似 `background-size: cover` 的效果，應使用哪個 CSS 屬性？
9. 文章主圖應該用 `<img>` 還是 `background-image`？為什麼？
10. Hero 氛圍背景通常適合用哪種方式？
11. 只有背景圖 icon 的按鈕，為什麼需要 `aria-label` 或可見文字？
12. 什麼情況下 Logo 建議使用 `<img>`？

---

## 練習題

### 練習 1：分類圖片

判斷以下圖片應該用 `<img>` 還是 `background-image`：

1. 商品列表中的商品照片
2. 卡片右下角的裝飾圖案
3. 文章中的流程圖
4. Hero 區塊的氛圍背景
5. 使用者留言旁的頭像
6. 搜尋按鈕中的放大鏡 icon
7. 表格上方的淡色格紋背景
8. 公司官網首頁 Logo

---

### 練習 2：修正錯誤寫法

將下面背景圖商品照改成更合適的 HTML：

```html
<div class="product-photo"></div>
```

```css
.product-photo {
  background-image: url("./assets/product-camera.svg");
  background-size: cover;
}
```

參考方向：

```html
<img class="product-photo" src="./assets/product-camera.svg" alt="復古銀色相機">
```

```css
.product-photo {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
```

---

### 練習 3：背景圖按鈕可及性

修正下面按鈕：

```html
<button class="search-button"></button>
```

```css
.search-button {
  background-image: url("./assets/search-icon.svg");
}
```

參考答案：

```html
<button class="search-button" aria-label="搜尋"></button>
```

或：

```html
<button class="search-button">
  <span>搜尋</span>
</button>
```

---

## 延伸閱讀

- 相關主題：背景圖片 `background-image`
- 相關主題：背景尺寸 `background-size`
- 相關主題：背景位置 `background-position`
- 相關主題：背景複合寫法 `background`
- 相關主題：HTML `<img>`、替代文字、可及性

---

## 參考資料

- MDN Web Docs：`<img>` element
- MDN Web Docs：`background-image`
- MDN Web Docs：HTML images
- W3C WAI：Images Tutorial
- W3C WAI：Alt Decision Tree
