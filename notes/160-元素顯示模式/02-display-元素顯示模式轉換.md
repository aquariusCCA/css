---
source_atomic:
  - atomic/160-元素顯示模式/05-display-元素顯示模式轉換.md
---

# display：元素顯示模式轉換

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `display` 用來控制元素的顯示模式。
- 分辨 `block`、`inline`、`inline-block` 的常見差異。
- 用 `display` 讓元素取得另一種顯示模式的排版特性。
- 避免把 CSS 顯示模式轉換誤解成 HTML 語意改變。

## 使用情境

有時候 HTML 標籤的預設顯示模式不符合版面需求。

例如 `<a>` 預設是行內元素，文字可以點擊，但點擊範圍通常只包住文字本身。如果你想把它做成導覽列按鈕，希望它有寬度、高度和完整背景，就需要讓它表現得像塊元素。

這時可以使用 `display`。

## 一句話理解

`display` 可以改變元素在版面中的顯示模式，讓它使用另一種模式的排版行為。

## 基本語法

常見的顯示模式轉換有三種：

```css
/* 轉換為塊元素 */
display: block;

/* 轉換為行內元素 */
display: inline;

/* 轉換為行內塊元素 */
display: inline-block;
```

它們控制的是元素在 CSS 視覺格式化中的表現，不是 HTML 標籤本身的語意。

## 常用值對照

| 值 | 顯示行為 | 常見用途 |
| --- | --- | --- |
| `block` | 獨占一行，可設定寬高 | 讓 `<a>` 變成可設定尺寸的按鈕或區塊 |
| `inline` | 不獨占一行，寬高通常由內容撐開 | 讓塊元素像文字一樣排在同一行 |
| `inline-block` | 可同排，也可設定寬高 | 按鈕、標籤、橫向排列的小盒子 |

`inline-block` 很常用，因為它同時保留了「可以並排」與「可以設定寬高」兩種能力。

## 範例拆解

### 讓連結變成塊級按鈕

```css
a {
  width: 150px;
  height: 50px;
  background-color: pink;
  display: block;
}
```

```html
<a href="#">導覽項目</a>
<a href="#">導覽項目</a>
```

原本 `<a>` 是行內元素，設定寬高不一定能得到想要的盒子效果。改成 `display: block` 後，它可以設定寬高，點擊範圍也能跟著盒子大小變大。

### 讓 div 像行內內容一樣排列

```css
div {
  width: 300px;
  height: 100px;
  background-color: purple;
  display: inline;
}
```

```html
<div>我是塊級元素</div>
<div>我是塊級元素</div>
```

`div` 改成 `inline` 後不再獨占一行。但要注意，一般行內元素不適合再依賴 `width`、`height` 控制尺寸，所以這種寫法多半只是示範顯示模式差異，實務上要謹慎使用。

### 讓 span 兼具並排與寬高

```css
span {
  width: 300px;
  height: 30px;
  background-color: skyblue;
  display: inline-block;
}
```

```html
<span>行內元素轉換為行內塊元素</span>
<span>行內元素轉換為行內塊元素</span>
```

`inline-block` 讓 `span` 可以和其他行內內容排在同一行，同時又能設定寬度與高度。

## 生效條件與限制

`display` 只改變元素的 CSS 顯示模式，不會改變以下事情：

- 不會把 `<a>` 變成 `<div>`。
- 不會改變元素的 HTML 語意。
- 不會讓不合法的 HTML 嵌套變合法。
- 不會自動解決所有對齊、間距或換行問題。

例如把 `<a>` 設成 `display: block`，可以讓它像塊級盒子一樣顯示，但 `<a>` 仍然不能嵌套另一個 `<a>`。

## 常見錯誤

### 以為 display 會改變標籤語意

```css
a {
  display: block;
}
```

這只表示連結在版面上以塊級盒子方式顯示。它仍然是連結，仍有連結的語意和互動規則。

### 把 block 改成 inline 後仍期待寬高有效

```css
div {
  display: inline;
  width: 200px;
  height: 80px;
}
```

如果元素變成一般行內顯示模式，寬高控制就不再像塊元素那樣直接。若目標是「並排且有寬高」，通常應選 `inline-block`。

### 用 display 解決所有布局問題

`display` 很重要，但它只是布局的一部分。當需求變成複雜的橫向排列、垂直置中、等距分布時，通常還會搭配 Flexbox、Grid 或定位等其他布局方式。

## 實務判斷

- 需要整個連結都有點擊區域：常用 `display: block`。
- 需要小盒子並排且可設定寬高：常用 `display: inline-block`。
- 只是文字流中的局部內容：維持 `inline` 即可。
- 需要完整的一維或二維布局：之後優先考慮 Flexbox 或 Grid。

## 重點整理

- `display` 控制元素如何在版面中顯示。
- `block` 獨占一行，寬高較容易控制。
- `inline` 可同排，但一般不適合直接控制寬高。
- `inline-block` 可同排，也可設定寬高。
- 改變 `display` 不等於改變 HTML 語意或嵌套規則。

## 自我檢查

1. 為什麼導覽列中的 `<a>` 常被設定為 `display: block`？
2. 如果想讓多個小盒子同排又能設定寬高，應該優先考慮哪個 `display` 值？
3. 把 `<a>` 設為 `display: block` 後，可以在裡面再放另一個 `<a>` 嗎？為什麼？
