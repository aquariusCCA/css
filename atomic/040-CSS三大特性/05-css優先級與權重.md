---
source:
  - 'origin/040-CSS三大特性/03-優先級.md / 開頭至 # 權重'
---

# CSS 優先級與權重

當同一個元素指定多個選擇器時，就會產生優先級。

```css
div {
  color: pink;
}

.text {
    /* 最終頁面上顯示的是紅色，因為類選擇器的權重是 10，而標籤選擇器的權重是 1。 */
    color: red;
}
```

```html
<div class="text">你笑起来真好看</div>
```

在 CSS 中，權重是用來判斷不同選擇器之間優先級的方式。權重（Specificity）分成四個部分。

![CSS 選擇器權重對照表，列出繼承、元素、類、ID、行內樣式與 important](../../origin/040-CSS三大特性/assets/images/css-specificity-img-001-a45272.png)

1. 行內樣式（style attribute）：每個行內樣式的權重為 1000。
2. ID 選擇器：每個 ID 選擇器的權重為 100。
3. 類別選擇器（class）、屬性選擇器（attribute selector）、偽類選擇器（pseudo-class）：每個的權重為 10。
4. 元素選擇器（tag selector）和偽元素選擇器：每個的權重為 1。

權重疊加不會有進位，意思是不同級別的權重彼此之間不會進位。例如，三個類別選擇器的權重是 30，也不會進位到 100 來和 ID 選擇器相比。

舉例：

- `#id` 的權重是 100。
- `.class1 .class2 .class3` 的權重是 30。

即使類別選擇器加起來超過 10，也不會和 ID 的權重相比，因為它們分屬不同的權重級別。

```css
.test {
    color: red;
}

div {
    color: pink;
}

#demo {
    /* 最終頁面顯示的是綠色，因為 ID 選擇器的權重是 100。 */
    color: green;
}
```

```html
<div class="test" id="demo">你笑起来真好看</div>
```
