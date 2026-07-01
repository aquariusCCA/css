---
source:
  - 'origin/280-多列布局/04-項目屬性.md / # grid-column屬性、grid-row屬性'
---

# grid-column 與 grid-row 簡寫

`grid-column` 屬性是 `grid-column-start` 和 `grid-column-end` 的合併簡寫形式，`grid-row` 屬性是 `grid-row-start` 屬性和 `grid-row-end` 的合併簡寫形式。

```css
.item {
  grid-column: <start-line> / <end-line>;
  grid-row: <start-line> / <end-line>;
}
```

下面是一個例子。

```css
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
/* 等同于 */
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
```

上面代碼中，項目 `item-1` 佔據第一行，從第一根列線到第三根列線。

這兩個屬性之中，也可以使用 `span` 關鍵字，表示跨越多少個網格。

```css
.item-1 {
  background: #b03532;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
/* 等同于 */
.item-1 {
  background: #b03532;
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
```

上面代碼中，項目 `item-1` 佔據的區域，包括第一行 + 第二行、第一列 + 第二列。

![grid-column 與 grid-row 簡寫放置 1 號項目](../../origin/280-多列布局/assets/images/multi-column-layout-item-properties-img-004-04dc5d.png)

斜杠以及後面的部分可以省略，默認跨越一個網格。

```css
.item-1 {
  grid-column: 1;
  grid-row: 1;
}
```

上面代碼中，項目 `item-1` 佔據左上角第一個網格。
