---
source_atomic:
  - atomic/310-移動端網頁適配/07-rem-單位基礎與-em-對比.md
  - atomic/310-移動端網頁適配/08-媒體查詢與-rem-動態尺寸.md
  - atomic/310-移動端網頁適配/09-rem-適配原理與換算.md
---

# rem 單位與動態適配原理

## 學習目標

讀完這篇筆記後，你應該能夠：

- 說明 `rem` 與 `em` 的基準差異。
- 理解為什麼改變 `html` 的 `font-size` 可以影響整個頁面尺寸。
- 使用媒體查詢搭配 `rem` 做不同螢幕下的尺寸變化。
- 依設計稿寬度與根字級公式換算 rem 值。

## 問題情境

流式布局和 Flex 布局常能解決寬度伸縮問題，但移動端頁面還會遇到另一類需求：元素的高度、寬度、文字、間距都希望跟著螢幕等比例縮放。

例如，一個卡片在寬螢幕上應該大一些，在窄螢幕上應該小一些，而且比例保持一致。這時只靠固定 `px` 不夠彈性，只靠百分比又不一定能控制高度與細節尺寸。

`rem` 適配方案的核心，就是把很多尺寸都交給同一個根字級控制。

## 一句話理解

`rem` 是相對於 `html` 根元素字級的單位；只要動態改變根字級，使用 `rem` 的元素尺寸就會一起按比例變化。

## rem 與 em 的差異

`em` 在多數長度屬性中，會以目前元素的 `font-size` 為基準；如果用在 `font-size` 屬性上，則會相對於父元素或繼承字級計算。

`rem` 則固定以 `html` 元素的 `font-size` 為基準。

![rem 根字級控制元素尺寸示意圖](../../origin/310-移動端網頁適配/assets/images/rem-adaptive-layout-img-001-0528d3.png)

例如：

```css
html {
  font-size: 12px;
}

.box {
  width: 10rem;
  height: 10rem;
}
```

因為 `1rem = 12px`，所以 `.box` 的寬高都是：

```text
10rem = 10 * 12px = 120px
```

`rem` 的好處是整個頁面只有一個 `html` 根元素。只要控制根字級，就能讓大量使用 `rem` 的元素跟著變化。

## 媒體查詢搭配 rem

媒體查詢可以根據不同設備寬度修改樣式。當媒體查詢修改 `html` 的 `font-size`，頁面中使用 `rem` 的元素尺寸也會跟著變。

```css
@media screen and (min-width: 320px) {
  html {
    font-size: 50px;
  }
}

@media screen and (min-width: 640px) {
  html {
    font-size: 100px;
  }
}

.top {
  height: 1rem;
  font-size: .5rem;
  line-height: 1rem;
}
```

這段程式碼的結果是：

- 螢幕寬度 `320px` 到 `639px` 時，`1rem = 50px`。
- 螢幕寬度 `640px` 以上時，`1rem = 100px`。
- `.top` 的高度是 `1rem`，所以會從 `50px` 變成 `100px`。
- `.top` 的文字大小是 `.5rem`，所以會從 `25px` 變成 `50px`。

這就是「媒體查詢 + rem」能讓元素尺寸動態變化的原因。

## rem 適配的換算原理

rem 適配通常會先決定一個設計稿基準，再決定根字級如何由視口寬度換算。

一個常見做法是把視口寬度分成 10 等份：

```text
基準根字級 = 設備寬度 / 10
rem 單位尺寸 = px 單位數值 / 基準根字級
```

例如：

```text
設計稿設備寬度：375px
設計稿元素寬度：75px
基準根字級：375px / 10 = 37.5px
rem 寬度：75px / 37.5px = 2rem
```

因此設計稿上的 `75px` 可以寫成：

```css
.box {
  width: 2rem;
}
```

等分數不一定只能是 10，也可能是 15、20 或其他值。重點是整個方案要一致：根字級怎麼算，元素就要用同一個基準換算。

## 範例拆解

```css
@media screen and (min-width: 320px) {
  html {
    font-size: 32px;
  }
}

@media screen and (min-width: 640px) {
  html {
    font-size: 64px;
  }
}

.box {
  width: 5rem;
  height: 3rem;
  background-color: pink;
}
```

當視口寬度是 `320px` 時：

```text
1rem = 32px
width = 5rem = 160px
height = 3rem = 96px
```

當視口寬度是 `640px` 時：

```text
1rem = 64px
width = 5rem = 320px
height = 3rem = 192px
```

可以看到 `.box` 的寬高都跟著根字級等比例放大。

## 常見錯誤

### 忘記 rem 的基準是 html

`rem` 不是相對父元素，也不是相對自身字級，而是相對 `html` 的 `font-size`。如果尺寸不如預期，應先檢查根字級。

### em 與 rem 混淆

`em` 容易受到目前元素或父層字級影響，層級一多就可能難以追蹤。`rem` 的基準較集中，適合用於整體尺寸控制。

### 只背公式，不確認設計稿基準

`rem = px / 根字級` 這個公式本身不難，真正容易錯的是根字級基準不一致。例如設計稿用 `750px`，但換算工具設定成另一個 root font size，就會得到錯誤尺寸。

## 重點整理

- `rem` 相對於 `html` 的 `font-size`。
- `em` 在多數長度屬性中相對於目前元素字級。
- 媒體查詢可以改變 `html` 根字級，進而讓 rem 元素尺寸變化。
- 常見換算公式是 `rem 值 = px 值 / 根字級`。
- rem 適配的核心是讓根字級依設備寬度變化，元素用 rem 保持比例。

## 自我檢查

1. `html { font-size: 20px; }` 時，`width: 3rem` 等於多少 px？
2. `em` 和 `rem` 的基準差異是什麼？
3. 為什麼媒體查詢修改 `html` 字級後，使用 `rem` 的元素會一起改變？
4. 設計稿寬度 `375px`，根字級採 `375 / 10`，元素寬 `150px` 應換算成多少 rem？
