---
source:
  - 'origin/280-多列布局/04-項目屬性.md / # justify-self屬性、align-self屬性、place-self屬性'
---

# justify-self、align-self 與 place-self

`justify-self` 屬性設置單元格內容的水平位置（左中右），跟 `justify-items` 屬性的用法完全一致，但只作用於單個項目。

`align-self` 屬性設置單元格內容的垂直位置（上中下），跟 `align-items` 屬性的用法完全一致，也是只作用於單個項目。

```css
.item {
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}
```

這兩個屬性都可以取下面四個值：

- `start`：對齊單元格的起始邊緣。
- `end`：對齊單元格的結束邊緣。
- `center`：單元格內部居中。
- `stretch`：拉伸，佔滿單元格的整個寬度（默認值）。

下面是 `justify-self: start` 的例子。

```css
.item-1  {
  justify-self: start;
}
```

![justify-self: start 讓單一項目靠左對齊](../../origin/280-多列布局/assets/images/multi-column-layout-item-properties-img-006-528350.png)

`place-self` 屬性是 `align-self` 屬性和 `justify-self` 屬性的合併簡寫形式。

```css
place-self: <align-self> <justify-self>;
/* 舉例: */
place-self: center center;
```

<aside>
👉

**如果省略第二個值，`place-self` 屬性會認為這兩個值相等。**

</aside>
