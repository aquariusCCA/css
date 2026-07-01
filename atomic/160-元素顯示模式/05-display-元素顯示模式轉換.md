---
source:
  - 'origin/160-元素顯示模式/04-元素顯示模式轉換.md / 全文'
---

# display 元素顯示模式轉換

特殊情況下，需要做元素顯示模式轉換。

可以簡單理解為：某一種顯示模式的元素，需要另一種顯示模式的特性。例如想要增加連結 `<a>` 的觸發範圍，就可以把它轉換成塊元素。

常見轉換：

- 轉換為塊元素：`display: block;`
- 轉換為行內元素：`display: inline;`
- 轉換為行內塊元素：`display: inline-block;`

```css
a {
  width: 150px;
  height: 50px;
  background-color: pink;
  /* 把行內元素 a 轉換為塊級元素 */
  display: block;
}

div {
  width: 300px;
  height: 100px;
  background-color: purple;
  /* 把 div 塊級元素轉換為行內元素 */
  display: inline;
}

span {
  width: 300px;
  height: 30px;
  background-color: skyblue;
  /* 把 span 行內元素轉換為行內塊元素 */
  display: inline-block;
}
```

```html
<a href="#">金星阿姨</a>
<a href="#">金星阿姨</a>

<div>我是块级元素</div>
<div>我是块级元素</div>

<span>行内元素转换为行内块元素</span>
<span>行内元素转换为行内块元素</span>
```
