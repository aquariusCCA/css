---
source:
  - 'origin/300-響應式/01-響應式.md / # 引入資源'
---

# 依媒體條件引入 CSS 資源

> 💡 引入資源就是: 針對不同的屏幕尺寸，調用不同的 css 文件。

- 當樣式比較繁多的時候，我們可以針對不同的媒體使用不同 `stylesheets`（樣式表）。
- 原理，就是直接在 `link` 中判斷設備的尺寸，然後引用不同的 `css` 文件。

## 語法

```html
<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">
```

## 範例程式碼

```html
<body>
    <div></div>
    <div></div>
</body>
```

```html
<!-- 引入資源就是: 針對不同的屏幕尺寸，調用不同的 css 文件 -->
<!-- 當我們屏幕尺寸大於等於 640px 以上時，我們讓 div 一行顯示 2 個 -->
<!-- 當我們屏幕尺寸小於 640px 時，我們讓 div 一行顯示一個 -->
<link rel="stylesheet" href="style320.css" media="screen and (min-width: 320px)">
<link rel="stylesheet" href="style640.css" media="screen and (min-width: 640px)">
```

```css
/* style320.css */
div {
  width: 100%;
  height: 100px;
}

div:nth-child(1){
  background-color: purple;
}

div:nth-child(2){
  background-color: pink;
}
```

```css
/* style640.css */
div {
  float: left;
  width: 50%;
  height: 100px;
}

div:nth-child(1){
  background-color: purple;
}

div:nth-child(2){
  background-color: pink;
}
```
