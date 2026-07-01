---
source:
  - 'origin/260-Flex布局/03-flex佈局常見父項屬性.md / # 設置側軸上的子元素的排列方式 align-content(多行)'
---

# align-content 多行側軸對齊

`align-content` 設置子項在側軸上的排列方式，並且只能用於子項出現換行的情況（多行），在單行下是沒有效果的。

常用值如下（取值和 `justify-content` 基本相同）：

- `flex-start`：與側軸的起點對齊。

  ![align-content: flex-start 讓多行項目靠側軸起點排列](../../origin/260-Flex布局/assets/images/flex-container-properties-img-015-3fef32.png)

- `flex-end`：與側軸的終點對齊。

  ![align-content: flex-end 讓多行項目靠側軸終點排列](../../origin/260-Flex布局/assets/images/flex-container-properties-img-016-a7f569.png)

- `center`：與側軸的中點對齊。

  ![align-content: center 讓多行項目沿側軸置中排列](../../origin/260-Flex布局/assets/images/flex-container-properties-img-017-a63cc8.png)

- `space-between`：與側軸兩端對齊，中間平均分布。

  ![align-content: space-between 讓多行項目貼齊兩端並分配行距](../../origin/260-Flex布局/assets/images/flex-container-properties-img-018-017929.png)

- `space-around`：項目間的距離相等，比軸線與邊框的間隔大一倍。

  ![align-content: space-around 讓多行項目周圍保留行距](../../origin/260-Flex布局/assets/images/flex-container-properties-img-019-db41be.png)

- `space-evenly`：在側軸上完全平分。

  ![align-content: space-evenly 讓多行項目與容器邊界行距相等](../../origin/260-Flex布局/assets/images/flex-container-properties-img-020-07f5ea.png)

- `stretch`：占滿整個側軸（默認值）。

  ![align-content: stretch 讓多行項目沿側軸方向撐滿容器](../../origin/260-Flex布局/assets/images/flex-container-properties-img-021-a04495.png)

```css
div {
  /* 默认主轴是 x 轴 */
  display: flex;
  width: 800px;
  height: 400px;
  background-color: pink;

  /* 换行 */
  flex-wrap: wrap;

  /* 因为有了换行，此时我们侧轴上控制子元素的对齐方式我们用 align-content */
  align-content: flex-start;
  /* align-content: flex-end; */
  /* align-content: center; */
  /* align-content: space-between; */
  /* align-content: space-around; */
}

div span {
  width: 150px;
  height: 100px;
  background-color: purple;
  color: #fff;
  margin: 10px;
}
```
