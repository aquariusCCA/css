---
source:
  - 'origin/280-多列布局/02-基本概念.md / # 容器和項目'
  - 'origin/280-多列布局/02-基本概念.md / # 行和列'
  - 'origin/280-多列布局/02-基本概念.md / # 單元格'
  - 'origin/280-多列布局/02-基本概念.md / # 網格線'
---

# Grid 容器、項目與基本術語

## 容器和項目

採用網格佈局的區域，稱為「容器」（container）。容器內部採用網格定位的子元素，稱為「項目」（item）。

```html
<div>
  <div><p>1</p></div>
  <div><p>2</p></div>
  <div><p>3</p></div>
</div>
```

上面代碼中，最外層的 `<div>` 元素就是容器，內層的三個 `<div>` 元素就是項目。

<aside>
⚠️

**注意：項目只能是容器的頂層子元素，不包含項目的子元素，比如上面代碼的 `<p>` 元素就不是項目。Grid 佈局只對項目生效。**

</aside>

## 行和列

容器裡面的水平區域稱為「行」（row），垂直區域稱為「列」（column）。

![Grid 容器中的行與列示意圖](../../origin/280-多列布局/assets/images/multi-column-layout-basic-concepts-img-001-8f84f7.png)

上圖中，水平的深色區域就是「行」，垂直的深色區域就是「列」。

## 單元格

行和列的交叉區域，稱為「單元格」（cell）。

正常情況下，n 行和 m 列會產生 n x m 個單元格。比如，3 行 3 列會產生 9 個單元格。

![Grid 行列交會形成單元格示意圖](../../origin/280-多列布局/assets/images/multi-column-layout-basic-concepts-img-002-ad15de.png)

## 網格線

劃分網格的線，稱為「網格線」（grid line）。水平網格線劃分出行，垂直網格線劃分出列。

正常情況下，`n` 行有 `n + 1` 根水平網格線，`m` 列有 `m + 1` 根垂直網格線，比如三行就有四根水平網格線。

![4 x 4 Grid 的水平與垂直網格線](../../origin/280-多列布局/assets/images/multi-column-layout-basic-concepts-img-003-34eb06.png)

上圖是一個 4 x 4 的網格，共有 5 根水平網格線和 5 根垂直網格線。
