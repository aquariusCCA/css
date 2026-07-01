---
source:
  - 'origin/280-多列布局/03-容器屬性.md / # grid-auto-flow屬性'
---

# grid-auto-flow 自動放置順序

劃分網格以後，容器的子元素會按照順序，自動放置在每一個網格。默認的放置順序是「先行後列」，即先填滿第一行，再開始放入第二行。

![grid-auto-flow: row 的先行後列排列](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-009-303796.png)

這個順序由 `grid-auto-flow` 屬性決定，默認值是 `row`，即「先行後列」。也可以將它設成 `column`，變成「先列後行」。

```css
grid-auto-flow: column;
```

![grid-auto-flow: column 的先列後行排列](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-010-28d148.png)

`grid-auto-flow` 屬性除了設置成 `row` 和 `column`，還可以設成 `row dense` 和 `column dense`。這兩個值主要用於某些項目指定位置以後，剩下的項目怎麼自動放置。

在默認的 `grid-auto-flow: row` 情況下，可能會留下空白格。

![預設 auto flow 留下空白格的排列](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-011-5bd94c.png)

設為 `row dense`，表示「先行後列」，並且盡可能緊密填滿，盡量不出現空格。

```css
grid-auto-flow: row dense;
```

![row dense 緊密填滿空白格的排列](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-012-14ae8b.png)

如果將設置改為 `column dense`，表示「先列後行」，並且盡量填滿空格。

```css
grid-auto-flow: column dense;
```

![column dense 先列後行並填滿空白格](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-013-c7b7a0.png)
