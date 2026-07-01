---
source:
  - 'origin/060-選擇器/03-複合選擇器.md / 偽元素選擇器 - before 和 after'
---

# before 與 after 偽元素

`::before` 與 `::after` 可以透過 CSS 在元素內容前後建立新的行內偽元素，常用來補充裝飾性內容或簡化 HTML 結構。

![CSS before 與 after 偽元素示意圖，顯示偽元素會作為父元素中的前後子內容](../../origin/060-選擇器/assets/images/compound-selectors-img-004-f4321d.png)

基本特點：

- `::before` 會插入在父元素內容之前。
- `::after` 會插入在父元素內容之後。
- 兩者預設都是行內元素。
- 兩者都必須設定 `content` 屬性，否則通常不會顯示。
- 它們是透過 CSS 建立的偽元素，不是 HTML 中實際寫出的標籤。

```css
div::before {
    content: "我";
}

div::after {
    content: "小豬佩奇";
}
```

```html
<div>是</div>
```

畫面上會形成類似「我是小豬佩奇」的文字效果，但 HTML 仍然只有一個 `<div>`。

`::before` 與 `::after` 常見於清除浮動、加入小圖示、裝飾線、提示符號等場景。

