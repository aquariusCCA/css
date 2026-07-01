---
source:
  - 'origin/200-過渡transition/01-過渡transition.md / CSS 與 HTML 範例、aside 口訣'
---

# transition hover 過渡範例

`transition` 常和 `:hover` 搭配使用：一般狀態先設定元素原本的樣式與過渡規則，`:hover` 狀態再設定變化後的樣式。當滑鼠移入時，瀏覽器會依照 `transition` 的設定產生平滑變化。

```css
div {
  width: 200px;
  height: 100px;
  background-color: pink;

  /* transition: 变化的属性 花费时间 运动曲线 何时开始; */
  /* 如果想要寫多個屬性，利用逗號進行分割 */
  /* transition: width 0.5s, height 0.5s; */

  /* 如果想要多個屬性都變化，屬性寫 all 就可以了 */
  transition: all 0.5s;
}

div:hover {
  width: 400px;
  height: 200px;
  background-color: red;
}
```

```html
<body>
  <div></div>
</body>
```

這個例子把 `transition: all 0.5s;` 加在一般狀態的 `div` 上，因此 `div:hover` 中的寬度、高度與背景顏色變化都會套用 0.5 秒的過渡效果。

> 過渡的口訣：誰做過渡給誰加。
