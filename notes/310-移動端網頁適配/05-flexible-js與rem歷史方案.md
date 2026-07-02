---
source_atomic:
  - atomic/310-移動端網頁適配/11-flexible-js-與-rem-開發方案.md
topics: [flexible.js, amfe-flexible, rem 適配, 根字級, 舊方案維護]
summary: "說明 flexible.js 以 JavaScript 動態設定根字級的歷史 rem 方案與現代取捨。"
---

# flexible.js 與 rem 歷史方案

## 學習目標

讀完這篇筆記後，你應該能夠：

- 說明 `flexible.js` / `amfe-flexible` 在 rem 適配中的角色。
- 理解它如何根據視口寬度設定 `html` 根字級。
- 看懂核心程式碼中 `setRemUnit()`、`resize`、`pageshow` 的作用。
- 判斷新專案與舊專案中是否適合使用這類方案。

## 方案定位

`flexible.js` / `amfe-flexible` 是早期常見的移動端 `rem` 適配方案。它更適合作為舊專案維護或歷史方案理解。

新專案通常會優先考慮：

- 正確的 `meta viewport`。
- `vw` / `vh`。
- 媒體查詢。
- `rem` 搭配現代響應式 CSS。
- CSS 中的 `calc()` 等現代能力。

因此，學這篇不是為了所有新頁面都套用 flexible.js，而是理解它曾經如何解決移動端等比適配問題。

## 一句話理解

flexible.js 的核心是用 JavaScript 根據視口寬度動態設定 `html` 的 `font-size`，再讓頁面中的 rem 尺寸跟著縮放。

## 它解決什麼問題

在 rem 適配中，所有使用 `rem` 的元素都會依 `html` 根字級變化。問題是：根字級要怎麼隨不同設備寬度變化？

`flexible.js` 的做法是讓 JavaScript 自動計算：

```text
1rem = 視口寬度 / 等分數
```

常見原理是把視口寬度分成 10 等份：

```js
var rem = docEl.clientWidth / 10
docEl.style.fontSize = rem + 'px'
```

當設備寬度改變時，根字級重新計算，使用 `rem` 的元素也跟著縮放。

## 安裝與導入

常見方式有兩種：

- 從 GitHub 下載相關檔案。
- 使用 npm 安裝：`npm i -S amfe-flexible`。

![amfe-flexible GitHub 專案檔案列表](../../origin/310-移動端網頁適配/assets/images/rem-adaptive-layout-img-003-05dd14.png)

教學示例中可能會看到這種引入方式：

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
<script src="./index.js"></script>
```

這裡的 `./index.js` 是示例路徑，代表將 flexible 相關腳本引入頁面。實務專案中要依實際檔案位置或打包工具調整。

同時要注意：範例中的 `user-scalable=no` 屬於舊式做法，不建議在正式新頁面中直接禁止使用者縮放。

## cssrem 工具輔助

使用 rem 方案時，開發者常需要把設計稿中的 px 換算成 rem。VS Code 的 cssrem 類型外掛可以協助提示換算。

例如想要 `1rem = 80px`，就需要讓工具設定中的 root font size 與實際方案一致。

![flexible.js 設定 html 根字級公式](../../origin/310-移動端網頁適配/assets/images/rem-adaptive-layout-img-004-fce94c.png)

![VS Code 安裝 cssrem 外掛頁面](../../origin/310-移動端網頁適配/assets/images/rem-adaptive-layout-img-005-8c094a.png)

![cssrem 外掛 root font size 設為 80](../../origin/310-移動端網頁適配/assets/images/rem-adaptive-layout-img-006-d9bc9c.png)

![VS Code 顯示 px 轉 rem 換算提示](../../origin/310-移動端網頁適配/assets/images/rem-adaptive-layout-img-007-08244e.png)

重點是：工具設定的 root font size 要和你的適配方案一致，否則換算結果會錯。

## 核心程式碼拆解

下面是 flexible.js 類似方案的核心結構：

```js
(function flexible(window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize()

  function setRemUnit() {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      setRemUnit()
    }
  })
}(window, document))
```

### docEl

```js
var docEl = document.documentElement
```

`document.documentElement` 取得的是 `html` 元素。rem 的基準就是 `html` 的 `font-size`，所以腳本要修改它。

### dpr

```js
var dpr = window.devicePixelRatio || 1
```

`devicePixelRatio` 是設備像素比。早期方案常會根據 dpr 設定 body 字級或處理細線效果。

### setRemUnit()

```js
function setRemUnit() {
  var rem = docEl.clientWidth / 10
  docEl.style.fontSize = rem + 'px'
}
```

這是最核心的部分：取得根元素寬度，分成 10 等份，然後把結果設定成 `html` 的字級。

例如視口寬度是 `375px`：

```text
1rem = 375 / 10 = 37.5px
```

### resize 與 pageshow

```js
window.addEventListener('resize', setRemUnit)
```

當頁面尺寸改變時，重新計算 rem。

```js
window.addEventListener('pageshow', function(e) {
  if (e.persisted) {
    setRemUnit()
  }
})
```

當頁面從瀏覽器快取中恢復時，也重新計算，避免根字級停留在舊狀態。

## 什麼時候適合使用

適合：

- 維護已經使用 flexible.js / amfe-flexible 的舊移動端專案。
- 閱讀舊教學或舊專案程式碼。
- 理解 rem 適配歷史方案的原理。

不一定適合：

- 全新專案直接無腦套用。
- 已經有現代響應式系統、CSS 變數、vw/rem 混合方案的專案。
- 對無障礙縮放需求較高，但方案會限制縮放的頁面。

## 常見錯誤

### 新專案盲目引入舊方案

flexible.js 曾經很常見，但不代表它是所有新專案的最佳選擇。新專案應先評估是否能用 viewport、媒體查詢、vw/vh、rem 與現代 CSS 解決。

### 修改等分數後忘記同步工具

如果將原本的 `clientWidth / 10` 改成其他等分數，cssrem 這類工具的 root font size 也要同步調整。

### 把示例路徑當成固定資產路徑

`<script src="./index.js"></script>` 只是教學示例。實務中要依專案檔案位置、模組引入方式或打包流程決定實際路徑。

## 重點整理

- flexible.js 是早期常見的 rem 移動端適配方案。
- 核心原理是用 JS 根據視口寬度設定 `html font-size`。
- 使用 rem 的元素會隨根字級變化而等比例縮放。
- `resize` 和 `pageshow` 用來在尺寸變化或快取恢復時重新計算。
- 新專案應先評估現代響應式 CSS 方案，不要無腦引入舊方案。

## 自我檢查

1. flexible.js 為什麼要修改 `html` 的 `font-size`？
2. `docEl.clientWidth / 10` 代表什麼意思？
3. 為什麼頁面 resize 時需要重新執行 `setRemUnit()`？
4. 為什麼新專案不一定要使用 flexible.js？
