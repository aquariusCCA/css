---
source:
  - 'origin/280-多列布局/03-容器屬性.md / # grid-template-columns屬性、grid-template-rows屬性 / ### 網格線的名稱'
  - 'origin/280-多列布局/03-容器屬性.md / # grid-template-columns屬性、grid-template-rows屬性 / ### 布局实例'
---

# 命名網格線與 Grid 布局實例

## 網格線的名稱

`grid-template-columns` 和 `grid-template-rows` 裡面，可以使用方括號指定每一根網格線的名字，方便後續使用名稱定位。

```css
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] 100px [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] 100px [r4];
}
```

一根網格線可以有多個名字，比如：

```css
grid-template-columns: [first c1] 100px [c2] 100px [c3] 100px [last c4];
```

## 布局實例

Grid 也可以用於組合不同寬度的整體頁面結構。原文提供的布局實例使用 `grid-template-columns` 和 `grid-template-rows` 定義版面，讓不同區塊依指定行列尺寸排列。

```css
.container {
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100px 300px 100px;
}
```

這類寫法能用明確的列寬與行高描述版面骨架，後續再用項目定位屬性或區域命名控制每個項目的位置。
