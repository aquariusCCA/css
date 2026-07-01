---
source:
  - 'origin/280-多列布局/03-容器屬性.md / # justify-items屬性、align-items屬性、place-items屬性'
---

# justify-items、align-items 與 place-items

`justify-items` 屬性設置單元格內容的水平位置（左中右），`align-items` 屬性設置單元格內容的垂直位置（上中下）。

```css
.container {
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
}
```

<aside>
💡

**這兩個屬性的寫法完全相同，都可以取下面這些值：**

- `start`：對齊單元格的起始邊緣。
- `end`：對齊單元格的結束邊緣。
- `center`：單元格內部居中。
- `stretch`：拉伸，佔滿單元格的整個寬度（默認值）。

</aside>

```css
.container {
  justify-items: start;
}
```

![justify-items: start 讓項目靠單元格左側](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-014-c43018.png)

```css
.container {
  align-items: start;
}
```

![align-items: start 讓項目靠單元格上方](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-015-37545b.png)

`place-items` 屬性是 `align-items` 屬性和 `justify-items` 屬性的合併簡寫形式。

```css
place-items: <align-items> <justify-items>;
```

如果省略第二個值，則瀏覽器認為與第一個值相等。
