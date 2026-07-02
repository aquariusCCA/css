---
source_atomic:
  - atomic/300-響應式/03-依媒體條件引入CSS資源.md
topics: [link media, CSS 拆檔, 媒體條件, min-width, 樣式覆蓋]
summary: "說明如何用 link 的 media 屬性依條件載入 CSS，並處理多個樣式表同時成立時的覆蓋順序。"
---

# 依媒體條件引入 CSS 資源

## 學習目標

讀完這篇筆記後，你應該能夠：

- 說明為什麼有時會依螢幕條件拆分 CSS 檔案。
- 使用 `link` 的 `media` 屬性依條件載入樣式表。
- 看懂 `screen and (min-width: 640px)` 這類媒體條件。
- 分辨同檔 media query 與多檔 stylesheet 的使用時機。
- 避免混淆 `min-width` 條件與多個樣式表的覆蓋順序。

## 使用情境

響應式樣式可以寫在同一支 CSS 檔案裡，也可以依不同螢幕條件拆成多支 CSS 檔案。

當樣式比較繁多時，針對不同媒體條件引入不同 stylesheet，可以讓小螢幕、大螢幕的樣式更容易拆分與維護。

## 一句話理解

依媒體條件引入 CSS，就是在 `<link>` 上加 `media` 條件，讓瀏覽器只在符合條件時套用那支樣式表。

## 基本語法

```html
<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">
```

常見寫法會像這樣：

```html
<link rel="stylesheet" href="style320.css" media="screen and (min-width: 320px)">
<link rel="stylesheet" href="style640.css" media="screen and (min-width: 640px)">
```

這裡的意思是：

- 螢幕寬度大於等於 `320px` 時，套用 `style320.css`。
- 螢幕寬度大於等於 `640px` 時，套用 `style640.css`。

如果螢幕寬度是 `700px`，兩個條件都成立。此時兩支樣式表都可能套用，後引入的樣式在同等選擇器權重下會覆蓋前面的樣式。

## 範例需求

假設頁面有兩個 `div`：

```html
<body>
  <div></div>
  <div></div>
</body>
```

需求是：

- 螢幕寬度大於等於 `320px` 時，兩個 `div` 一行顯示一個。
- 螢幕寬度大於等於 `640px` 時，兩個 `div` 一行顯示兩個。

可以透過兩支 CSS 檔案處理。

## style320.css

```css
div {
  width: 100%;
  height: 100px;
}

div:nth-child(1) {
  background-color: purple;
}

div:nth-child(2) {
  background-color: pink;
}
```

這支樣式讓每個 `div` 都占滿一整行，因此一行只會顯示一個。

## style640.css

```css
div {
  float: left;
  width: 50%;
  height: 100px;
}

div:nth-child(1) {
  background-color: purple;
}

div:nth-child(2) {
  background-color: pink;
}
```

這支樣式讓 `div` 浮動排列，並且每個寬度是 `50%`，因此兩個 `div` 可以在同一行顯示。

## link 引入方式

```html
<link rel="stylesheet" href="style320.css" media="screen and (min-width: 320px)">
<link rel="stylesheet" href="style640.css" media="screen and (min-width: 640px)">
```

當螢幕寬度大於等於 `640px` 時，`style320.css` 和 `style640.css` 的條件都成立。因為 `style640.css` 寫在後面，所以它對相同元素與相同屬性的設定會覆蓋前面的結果。

## 範例拆解

### 小螢幕條件

```html
<link rel="stylesheet" href="style320.css" media="screen and (min-width: 320px)">
```

這表示只要是螢幕設備，且寬度至少 `320px`，就套用 `style320.css`。

### 大一點的螢幕條件

```html
<link rel="stylesheet" href="style640.css" media="screen and (min-width: 640px)">
```

這表示螢幕寬度至少 `640px` 時套用 `style640.css`。它通常放在後面，用來覆蓋較小螢幕的基礎樣式。

### 樣式如何改變布局

小螢幕：

```css
div {
  width: 100%;
}
```

每個 `div` 都占一整行。

較大螢幕：

```css
div {
  float: left;
  width: 50%;
}
```

每個 `div` 占一半寬度，兩個可以排在同一行。

## 常見錯誤

### 以為 media 會載入 HTML

`media` 控制的是這支 CSS 是否套用，不是切換 HTML 結構。HTML 內容仍是同一份，只是樣式在不同條件下不同。

### 忽略多個條件可能同時成立

在這個例子中，`640px` 以上同時符合 `min-width: 320px` 和 `min-width: 640px`。因此要注意引入順序，讓大螢幕樣式放在後面覆蓋前面的基礎樣式。

### 混淆 min-width 和 max-width

`min-width: 640px` 代表「大於等於 640px」才成立。若想針對小於某個寬度的螢幕，應使用 `max-width`。

### 拆檔過細導致維護困難

不是每個響應式頁面都需要拆成多個 CSS 檔案。如果只是少量斷點樣式，直接在同一支 CSS 中使用 `@media` 可能更清楚。

## 實務判斷準則

- 樣式較少時，可優先使用同一支 CSS 裡的 `@media`。
- 不同斷點樣式很多時，可以考慮用 `link media` 拆成多支 CSS。
- 使用多個 `min-width` stylesheet 時，通常由小到大引入。
- 要記得較大的 `min-width` 條件成立時，較小的 `min-width` 條件通常也成立。
- 程式碼中示例的 `style320.css`、`style640.css` 是外部 CSS 檔案路徑，實作時需要真的建立對應檔案。

## 重點整理

- `link` 的 `media` 屬性可以讓 CSS 只在符合媒體條件時套用。
- `screen and (min-width: 640px)` 表示螢幕寬度至少 `640px`。
- 多個符合條件的樣式表可能同時套用，後引入者在同權重下會覆蓋前者。
- 小螢幕一欄、大螢幕兩欄，可以透過不同 CSS 檔案切換 `width` 與排列方式。
- 是否拆 CSS 檔案，取決於樣式規模與維護需求。

## 自我檢查

1. `<link>` 的 `media` 屬性控制的是 HTML 還是 CSS？
2. `media="screen and (min-width: 640px)"` 代表什麼條件？
3. 當螢幕是 `700px` 時，`min-width: 320px` 和 `min-width: 640px` 會不會同時成立？
4. 為什麼大斷點的 stylesheet 通常放在小斷點 stylesheet 後面？
5. 什麼情況下用同一支 CSS 的 `@media` 可能比拆檔更合適？
