---
source:
  - 'origin/130-盒子模型/08-box-sizing.md / 全文'
---

# box-sizing 盒模型計算方式

CSS3 中可以透過 `box-sizing` 指定盒模型，改變計算盒子大小的方式。

`box-sizing` 有兩個常見值：

- `content-box`
- `border-box`

`content-box` 是預設值。

```css
box-sizing: content-box;
/* 盒子最終寬度 = width(content) + padding + border */
```

在 `content-box` 中，盒子大小為 `width + padding + border`。這是前面書寫盒子時的預設計算方式。

`border-box` 會讓盒子的最終寬度等於 `width`。

```css
box-sizing: border-box;
/* 盒子最終寬度 = width = padding + border + content */
```

在 `border-box` 中，盒子大小就是寬度本身，`padding` 和 `border` 不會再把盒子撐大。前提是 `padding` 和 `border` 不會超過 `width` 寬度。

之後可以在 CSS 通配符中加入 CSS3 盒子模型：

```css
* {
  margin: 0;
  padding: 0;

  /* 這樣 padding 和 border 就不會撐大盒子 */
  box-sizing: border-box;
}
```

完整比較示例：

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div {
  width: 200px;
  height: 200px;
  background-color: pink;
  border: 20px solid red;
  padding: 15px;
  box-sizing: content-box;
}

/* CSS3 盒子模型：盒子最終大小就是 width 200 的大小 */
p {
  width: 200px;
  height: 200px;
  background-color: pink;
  border: 20px solid red;
  padding: 15px;
  box-sizing: border-box;
}
```

```html
<div>
  小猪乔治
</div>
<p>
  小猪佩奇
</p>
```
