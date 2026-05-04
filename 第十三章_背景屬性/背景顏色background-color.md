# 背景顏色 background-color

所屬章節：第 13 章 背景屬性  
建議搭配 demo：[`demo/background-color/index.html`](./demo/background-color/index.html)

---

## 本節導讀

`background-color` 用來設定**元素背景繪製區域的顏色**。

它處理的是「盒子背後要不要鋪上一層顏色」，不負責文字顏色、不負責盒子尺寸，也不負責背景圖片的載入。

簡單說：

> `background-color` 是元素背景的底色。它可以單獨存在，也可以作為 `background-image` 載入失敗或透明區域時的底層顏色。

---

## 學習目標

學完本節後，你應該能夠回答：

1. `background-color` 是什麼？影響哪個範圍？
2. 背景色的預設值為什麼是 `transparent`？
3. 背景色會不會被子元素繼承？
4. 背景色會不會包含 `margin` 區域？
5. `rgba()` / `rgb(... / alpha)` 和 `opacity` 差在哪？
6. `background-color`、`background`、`background-image` 之間有什麼關係？
7. 實務上什麼時候該用背景色？什麼時候不該用？

---

## 關鍵字

- 中文：背景顏色、背景色、半透明背景、底色
- 英文：`background-color`
- 常見值：`transparent`、`pink`、`#fff`、`rgb()`、`rgba()`、`hsl()`、`currentColor`、CSS 變數
- 相關屬性：`background`、`background-image`、`background-clip`、`color`、`opacity`
- 易混淆概念：
  - 背景半透明 ≠ 整個元素透明
  - 背景色透明 ≠ 沒有元素
  - 子元素看到父層背景 ≠ `background-color` 被繼承
  - `background: 顏色` ≠ 只改 `background-color`

---

## 建議回查情境

當你遇到以下情況，可以回來查這一節：

- 想替 `div`、卡片、按鈕、表單區塊設定背景色
- 想做半透明背景，但不希望文字也變透明
- 想確認背景色是否會包含 `padding`、`border`、`margin`
- 想分辨 `background-color` 和 `background` 簡寫的差別
- 想在組件中用 CSS 變數管理背景色
- 想判斷為什麼元素看起來有父層背景，但實際上自己的背景色是 `transparent`

---

## Demo 範例

本節 demo 放在：

```text
demo/background-color/index.html
```

這樣未來新增其他背景屬性 demo 時，可以繼續放在：

```text
demo/background-image/index.html
demo/background-repeat/index.html
demo/background-position/index.html
```

每一節都保留自己的 `index.html`、`style.css`、`README.md`，但透過外層資料夾名稱區分主題。

## 30 秒複習入口

- `background-color` 設定元素的背景顏色。
- 預設值是 `transparent`，代表透明。
- 它**不會繼承**，但子元素預設透明，所以會「看起來」露出父層背景。
- 背景色預設會繪製到 `border-box`，也就是內容區、內距區、邊框區背後；**不包含 margin**。
- 只想讓背景半透明，使用 `rgba()` 或 `rgb(... / alpha)`。
- 使用 `opacity` 會讓整個元素一起透明，包含文字和子元素。
- `background-color` 是背景底層；如果同時有 `background-image`，背景色會在圖片下面。
- `background: pink;` 是簡寫，可能會重設其他背景相關屬性；只改顏色時，優先用 `background-color`。

---

## 速查區

### 1. 基本語法

```css
selector {
  background-color: 顏色值;
}
```

常見寫法：

```css
.card {
  background-color: white;
}

.alert {
  background-color: #fff3cd;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.4);
}

.modern-overlay {
  background-color: rgb(0 0 0 / 40%);
}

.theme-card {
  background-color: var(--card-bg);
}
```

---

### 2. 形式定義速查

| 項目 | 說明 |
|---|---|
| 屬性名稱 | `background-color` |
| 作用 | 設定元素背景顏色 |
| 初始值 | `transparent` |
| 是否繼承 | 否 |
| 可用值 | CSS `<color>` |
| 是否影響盒子尺寸 | 否 |
| 是否影響文字顏色 | 否 |
| 預設繪製範圍 | 通常繪製到 `border-box`，不包含 `margin` |
| 與背景圖片關係 | 背景色在背景圖片下方 |

---

### 3. 常見顏色值

| 寫法 | 範例 | 適合情境 |
|---|---|---|
| 顏色關鍵字 | `pink`、`transparent` | 教學、快速測試 |
| 十六進位 | `#fff`、`#ffffff`、`#00000080` | 常見專案色票 |
| `rgb()` | `rgb(255, 255, 255)` | 明確 RGB 值 |
| `rgba()` | `rgba(0, 0, 0, 0.4)` | 傳統半透明寫法 |
| 現代 `rgb()` | `rgb(0 0 0 / 40%)` | 現代 CSS 推薦寫法之一 |
| `hsl()` | `hsl(210 80% 96%)` | 想用色相、飽和度、亮度管理顏色 |
| `currentColor` | `background-color: currentColor;` | 背景色跟著文字色走 |
| CSS 變數 | `var(--card-bg)` | 主題色、組件庫、可維護樣式 |

---

## 正文

## 1. `background-color` 是什麼？

`background-color` 是 CSS 背景屬性的一員，用來設定元素的背景底色。

```html
<div class="box">背景顏色</div>
```

```css
.box {
  width: 200px;
  height: 120px;
  background-color: pink;
}
```

這段程式會產生一個 `200px × 120px` 的盒子，並將背景設為粉紅色。

重點是：

```css
background-color: pink;
```

只負責「鋪顏色」，真正決定盒子尺寸的是：

```css
width: 200px;
height: 120px;
```

所以背景色**不會撐開盒子**。

---

## 2. 背景色的預設值：`transparent`

如果你沒有設定背景色，元素的背景色預設是：

```css
background-color: transparent;
```

`transparent` 表示透明。

因此，下面兩段在背景色上可以視為等效：

```css
.box {
  /* 沒寫 background-color */
}
```

```css
.box {
  background-color: transparent;
}
```

### 容易誤會的地方

如果父層有背景色，子元素沒有背景色，你會看到父層背景透出來：

```html
<div class="parent">
  <div class="child">我是透明背景</div>
</div>
```

```css
.parent {
  background-color: lightblue;
}

.child {
  background-color: transparent;
}
```

這不代表 `background-color` 被繼承，而是因為 `.child` 自己是透明背景，所以視覺上看得到 `.parent` 的背景。

> 結論：`background-color` 不繼承；只是透明背景會露出後面的背景。

---

## 3. 背景色會畫在哪裡？

很多初學者以為背景色只會畫在內容區，其實不是。

在一般情況下，背景會畫到元素的 `border-box`，也就是包含：

1. `content` 內容區
2. `padding` 內距區
3. `border` 邊框區背後

但不包含：

4. `margin` 外距區

範例：

```css
.box {
  width: 200px;
  padding: 24px;
  border: 8px dashed rgba(0, 0, 0, 0.4);
  margin: 24px;
  background-color: #fde68a;
}
```

你會看到背景色出現在內容、內距、邊框下方，但不會填滿 margin。

如果想控制背景繪製範圍，要搭配：

```css
background-clip: border-box;  /* 預設行為 */
background-clip: padding-box;
background-clip: content-box;
```

### 背景繪製範圍對照

| `background-clip` | 背景會畫到哪裡 |
|---|---|
| `border-box` | 內容 + padding + border 背後 |
| `padding-box` | 內容 + padding，不畫到 border 背後 |
| `content-box` | 只畫內容區 |

---

## 4. `background-color` 和 `color` 不一樣

這兩個屬性很常一起出現，但作用完全不同。

```css
.button {
  color: white;
  background-color: #2563eb;
}
```

| 屬性 | 控制對象 |
|---|---|
| `color` | 文字顏色、部分 SVG / border 的 `currentColor` 來源 |
| `background-color` | 背景顏色 |

所以這段：

```css
.box {
  background-color: black;
}
```

不會自動讓文字變白。你需要另外設定：

```css
.box {
  color: white;
  background-color: black;
}
```

---

## 5. 半透明背景：`rgba()` 與現代 `rgb(... / alpha)`

如果只想讓背景半透明，可以用支援 alpha 的顏色寫法。

傳統寫法：

```css
.overlay {
  background-color: rgba(0, 0, 0, 0.4);
}
```

現代寫法：

```css
.overlay {
  background-color: rgb(0 0 0 / 40%);
}
```

兩者都表示黑色背景，透明度為 40% 不透明。

### alpha 怎麼看？

| alpha | 意義 |
|---|---|
| `0` | 完全透明 |
| `0.3` | 30% 不透明 |
| `0.5` | 50% 不透明 |
| `1` | 完全不透明 |
| `40%` | 40% 不透明 |

---

## 6. `background-color` vs `opacity`

這是本節最重要的差異之一。

### 只讓背景半透明

```css
.card {
  background-color: rgba(255, 255, 255, 0.7);
}
```

效果：

- 背景半透明
- 文字保持清楚
- 子元素不會一起透明

### 讓整個元素半透明

```css
.card {
  opacity: 0.7;
}
```

效果：

- 背景變透明
- 文字也變透明
- 圖片也變透明
- 所有子元素一起透明

### 實務判斷

| 需求 | 建議寫法 |
|---|---|
| 只讓背景有玻璃感、遮罩感 | `background-color: rgba(...)` 或 `rgb(... / alpha)` |
| 整個元素都要淡出，例如 disabled、fade animation | `opacity` |
| 想讓 hover 背景淡淡出現，但文字不變淡 | `background-color` 搭配 alpha |
| 想讓整張卡片包含文字都淡化 | `opacity` |

---

## 7. `background-color` 和 `background-image` 的關係

當一個元素同時有背景色和背景圖片時：

```css
.hero {
  background-color: #0f172a;
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
}
```

背景層次可以理解為：

```text
文字內容
背景圖片 background-image
背景顏色 background-color
父層背景或頁面背景
```

所以 `background-color` 通常可以當作：

1. 背景圖片尚未載入時的底色
2. 背景圖片透明區域底下的顏色
3. 背景圖片載入失敗時的 fallback
4. 漸層背景底下的基礎色

---

## 8. `background-color` 和 `background` 簡寫的差異

如果你只是要改背景色，建議寫：

```css
.card {
  background-color: #fff;
}
```

不要隨手寫成：

```css
.card {
  background: #fff;
}
```

因為 `background` 是簡寫屬性，會一次設定多個背景相關屬性。當你只寫顏色時，其他沒有寫出的背景設定可能會被重設。

例如：

```css
.banner {
  background-image: url("banner.png");
  background-size: cover;
  background-position: center;
}

.banner.is-plain {
  background: #f8fafc;
}
```

`.banner.is-plain` 會把原本的 `background-image`、`background-size`、`background-position` 等背景設定一起重設。

如果你的目的只是改底色，應該寫：

```css
.banner.is-plain {
  background-color: #f8fafc;
}
```

### 判斷原則

| 需求 | 建議 |
|---|---|
| 只改背景色 | 用 `background-color` |
| 同時設定顏色、圖片、位置、大小、平鋪 | 可以用 `background` |
| 維護既有背景圖片，只換底色 | 用 `background-color` |
| 想清掉所有背景設定 | 可以用 `background` |

---

## 9. CSS 變數與主題化背景色

在實務專案中，尤其是 Vue、React、元件庫、後台系統，很少到處硬寫背景色。

比較常見的做法是先定義語意化變數：

```css
:root {
  --page-bg: #f8fafc;
  --card-bg: #ffffff;
  --panel-bg: #f1f5f9;
  --warning-bg: #fff7ed;
  --danger-bg: #fef2f2;
}
```

再使用：

```css
body {
  background-color: var(--page-bg);
}

.card {
  background-color: var(--card-bg);
}

.warning-panel {
  background-color: var(--warning-bg);
}
```

這樣的好處是：

- 色彩集中管理
- 主題切換比較容易
- 元件語意更清楚
- 避免整個專案到處散落 `#ffffff`、`#f5f5f5`

### Vue 組件中的常見寫法

```vue
<template>
  <section class="info-card" :style="{ '--card-bg': cardBg }">
    <h3>帳戶資訊</h3>
    <p>這張卡片的背景色由外部傳入。</p>
  </section>
</template>

<script setup lang="ts">
const cardBg = '#f8fafc'
</script>

<style scoped>
.info-card {
  background-color: var(--card-bg);
}
</style>
```

這種寫法比直接在 template 中塞一堆樣式更容易維護。

---

## 10. 常見實務用途

### 10.1 版面除錯

在切版時，背景色常用來確認區塊範圍：

```css
.layout-debug header {
  background-color: rgba(59, 130, 246, 0.2);
}

.layout-debug main {
  background-color: rgba(16, 185, 129, 0.2);
}

.layout-debug aside {
  background-color: rgba(245, 158, 11, 0.2);
}
```

這種背景色通常只是暫時用來觀察布局，正式上線前要移除或改成設計稿指定顏色。

---

### 10.2 卡片與面板

```css
.card {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background-color: #ffffff;
}
```

白色卡片搭配淺灰背景，是後台系統、管理系統、儀表板中很常見的視覺層次。

---

### 10.3 狀態提示

```css
.alert-success {
  color: #166534;
  background-color: #dcfce7;
}

.alert-warning {
  color: #92400e;
  background-color: #fef3c7;
}

.alert-danger {
  color: #991b1b;
  background-color: #fee2e2;
}
```

狀態色最好同時調整文字顏色，避免只有背景變化，導致可讀性不足。

---

### 10.4 遮罩與浮層

```css
.modal-mask {
  position: fixed;
  inset: 0;
  background-color: rgb(15 23 42 / 60%);
}
```

這種寫法常用在：

- modal 背景遮罩
- drawer 背景遮罩
- loading overlay
- 圖片上方的文字遮罩

---

## 11. 可讀性與無障礙提醒

背景色不是只要好看就好，還要考慮文字是否看得清楚。

不建議：

```css
.bad {
  color: #e5e7eb;
  background-color: #f8fafc;
}
```

文字與背景太接近，閱讀困難。

較好的做法：

```css
.good {
  color: #0f172a;
  background-color: #f8fafc;
}
```

實務上，請注意：

- 按鈕文字與背景要有足夠對比
- 提示訊息不能只靠背景色表達狀態，最好搭配文字或 icon
- disabled 狀態若使用低對比背景，要確保使用者仍能辨識內容
- 深色模式與淺色模式要分別檢查背景與文字對比

---

## 12. 常見錯誤整理

### 錯誤 1：把 `rgba()` 寫成屬性

錯誤：

```css
.box {
  background(0, 0, 0, 0.3);
}
```

正確：

```css
.box {
  background-color: rgba(0, 0, 0, 0.3);
}
```

---

### 錯誤 2：想讓背景透明，卻用了 `opacity`

錯誤：

```css
.card {
  opacity: 0.5;
}
```

這會讓文字和子元素也透明。

正確：

```css
.card {
  background-color: rgb(255 255 255 / 50%);
}
```

---

### 錯誤 3：以為背景色會包含 margin

錯誤理解：

> 我設定了 `background-color`，為什麼外距那一圈沒有顏色？

原因：

```text
background-color 不會畫到 margin 區域。
```

要讓外側也有顏色，通常要設定父層背景，或調整結構。

---

### 錯誤 4：以為子元素繼承父層背景色

錯誤理解：

> 子元素看起來也是藍色，所以它應該繼承了父層背景色。

實際上：

```css
.child {
  background-color: transparent;
}
```

子元素是透明的，所以你看到的是父層背景。

---

### 錯誤 5：用 `background` 簡寫不小心清掉背景圖片

錯誤：

```css
.hero {
  background-image: url("hero.png");
  background-size: cover;
}

.hero.highlight {
  background: #fef3c7;
}
```

這會重設背景圖片。

正確：

```css
.hero.highlight {
  background-color: #fef3c7;
}
```

---

## 13. 除錯檢查清單

當你發現背景色沒有如預期出現，可以照順序檢查：

1. 元素是否真的有尺寸？
   - 沒有內容、沒有寬高、沒有 padding 時，可能看不到背景。
2. CSS 選擇器是否有命中元素？
3. 是否被更高權重的樣式覆蓋？
4. 是否有其他元素蓋在上方？
5. 是否使用了 `background` 簡寫重設掉原本設定？
6. 是否其實背景色是透明或 alpha 太低？
7. 是否期待背景出現在 `margin` 區域？
8. 是否被 `background-clip` 限制了繪製範圍？
9. 是否父層或子層的背景造成視覺誤判？
10. DevTools 的 Computed 面板中，`background-color` 最終值是什麼？

---

## 14. 小練習

### 練習 1：基本背景色

請建立一個 `.card`，要求：

- 寬度 `320px`
- padding `24px`
- 背景色白色
- 邊框淺灰
- 圓角 `12px`

參考：

```css
.card {
  width: 320px;
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background-color: #fff;
}
```

---

### 練習 2：半透明遮罩

請建立一個全畫面的 `.mask`：

- 固定定位
- 填滿畫面
- 背景黑色 50% 不透明

參考：

```css
.mask {
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 50%);
}
```

---

### 練習 3：修正錯誤

請修正下面程式碼，讓「背景半透明，但文字不透明」。

錯誤版本：

```css
.notice {
  opacity: 0.4;
}
```

建議版本：

```css
.notice {
  background-color: rgb(255 255 255 / 40%);
}
```

---

## 15. 自測問題

1. `background-color` 的預設值是什麼？
2. `background-color` 會繼承嗎？
3. 為什麼子元素沒設定背景色時，會看到父層背景？
4. `background-color` 會畫到 `margin` 嗎？
5. 預設情況下，背景色會畫到 `border` 背後嗎？
6. `background-color: rgba(0, 0, 0, .3)` 中 `.3` 是什麼意思？
7. `background-color: rgba(...)` 和 `opacity` 最大差異是什麼？
8. 同時設定 `background-image` 和 `background-color` 時，哪個在上層？
9. 為什麼只想改背景色時，不建議隨手使用 `background` 簡寫？
10. 實務上為什麼常用 CSS 變數管理背景色？

---

## 16. 自測答案

1. `transparent`。
2. 不會繼承。
3. 因為子元素背景預設透明，視覺上會露出父層背景。
4. 不會。
5. 會，預設通常畫到 `border-box`。
6. alpha 透明度，代表 30% 不透明。
7. `rgba()` / `rgb(... / alpha)` 只影響背景色；`opacity` 影響整個元素，包含文字與子元素。
8. `background-image` 在上層，`background-color` 在下層。
9. 因為 `background` 是簡寫，會重設其他背景相關屬性。
10. 因為可以集中管理色彩、支援主題化、提升組件可維護性。

---

## 17. 本節一句話總結

> `background-color` 是元素背景的底色；它預設透明、不繼承、不影響盒子尺寸，預設不包含 margin，常用於卡片、區塊、遮罩、狀態提示與主題化設計。

---

## 18. 延伸閱讀

- MDN：`background-color`  
  https://developer.mozilla.org/zh-TW/docs/Web/CSS/Reference/Properties/background-color
- MDN：`background` 簡寫  
  https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background
- MDN：`background-clip`  
  https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-clip
- MDN：Box model introduction  
  https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Box_model/Introduction

---

## 19. Demo 說明

附上 demo：

```text
demo/background-color/index.html
```

你可以直接用瀏覽器開啟，裡面包含：

1. 預設透明背景 vs 指定背景色
2. 背景色與盒模型範圍
3. `rgba()` / `rgb(... / alpha)` vs `opacity`
4. 不同色彩語法
5. `background-color` 作為 `background-image` 底色
6. `background` 簡寫重設背景設定的差異
7. CSS 變數管理背景色
