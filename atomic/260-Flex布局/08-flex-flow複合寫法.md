---
source:
  - 'origin/260-Flex布局/03-flex佈局常見父項屬性.md / # flex-flow'
---

# flex-flow 複合寫法

`flex-flow` 屬性是 `flex-direction` 和 `flex-wrap` 屬性的複合屬性，值沒有順序要求。

```css
flex-flow: row wrap;
```

```css
div {
  display: flex;
  width: 600px;
  height: 300px;
  background-color: pink;

  /* 把设置主轴方向和是否换行（换列）简写 */
  flex-flow: row wrap;
}

div span {
  width: 150px;
  height: 100px;
  background-color: purple;
}
```
