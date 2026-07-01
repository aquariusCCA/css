---
source:
  - 'origin/280-多列布局/04-項目屬性.md / # grid-area屬性'
---

# grid-area 項目區域定位

`grid-area` 屬性指定項目放在哪一個區域。

```css
.item-1 {
  grid-area: e;
}
```

上面代碼中，1 號項目位於 `e` 區域。

![grid-area 指定 1 號項目所在網格區域](../../origin/280-多列布局/assets/images/multi-column-layout-item-properties-img-005-f0a34b.png)

`grid-area` 屬性還可用作 `grid-row-start`、`grid-column-start`、`grid-row-end`、`grid-column-end` 的合併簡寫形式，直接指定項目的位置。

```css
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
```

下面是一個例子：

```css
.item-1 {
  grid-area: 1 / 1 / 3 / 3;
}
```

這個寫法用四個值分別指定項目的起始行線、起始列線、結束行線與結束列線。
