---
source:
  - 'origin/060-選擇器/03-複合選擇器.md / nth-child 選擇器'
---

# nth-child 選擇器

`:nth-child(n)` 可以根據子元素的序號或公式選中元素。

![CSS nth-child 參數用法表，列出數字、even、odd 與 n 公式](../../origin/060-選擇器/assets/images/compound-selectors-img-003-4bf38c.png)

選中第 2 個子元素：

```css
ul li:nth-child(2) {
    background-color: pink;
}
```

選中偶數項：

```css
ul li:nth-child(even),
ul li:nth-child(2n) {
    background-color: pink;
}
```

選中奇數項：

```css
ul li:nth-child(odd),
ul li:nth-child(2n + 1) {
    background-color: pink;
}
```

常見公式：

```css
/* 從第 3 個開始往後全部選中 */
ul li:nth-child(n + 3) {
    background-color: pink;
}

/* 選中前 3 個 */
ul li:nth-child(-n + 3) {
    background-color: pink;
}
```

`:nth-child(n)` 中的序號從 1 開始計算。若公式算出的結果是 0 或超出元素範圍，該次結果會被忽略。

