---
source:
  - 'origin/060-選擇器/03-複合選擇器.md / focus 偽類選擇器'
---

# focus 偽類選擇器

`:focus` 偽類選擇器用來選中取得焦點的元素，常見於表單控制項。

例如，當使用者點擊輸入框或透過鍵盤切換到輸入框時，可以改變它的背景色：

```css
input:focus {
    background-color: pink;
}
```

```html
<input type="text">
<input type="text">
<input type="text">
```

`:focus` 適合用來提示目前正在操作的表單欄位，有助於使用者理解目前輸入位置。

