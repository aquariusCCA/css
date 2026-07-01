---
source:
  - 'origin/260-Flex布局/03-flex佈局常見父項屬性.md / # 設置主軸方向 flex-direction'
---

# flex-direction 主軸方向

主軸和側軸：在 `flex` 佈局中，是分為主軸和側軸兩個方向，同樣的叫法有：行和列、`x軸` 和 `y軸`。

![Flex 主軸水平向右與側軸垂直向下示意圖](../../origin/260-Flex布局/assets/images/flex-container-properties-img-001-d5d8b2.png)

- 默認主軸方向就是 x 軸方向，水平向右。
- 默認側軸方向就是 y 軸方向，水平向下。

`flex-direction` 屬性決定主軸的方向（即項目的排列方向）。

![flex-direction 屬性值 row、row-reverse、column、column-reverse 說明表](../../origin/260-Flex布局/assets/images/flex-container-properties-img-002-777956.png)

注意主軸和側軸是會變化的，就看 `flex-direction` 設置誰為主軸，剩下的就是側軸。而我們的子元素是跟著主軸來排列的。

![flex-direction 四種方向的項目排列示意圖](../../origin/260-Flex布局/assets/images/flex-container-properties-img-003-7dbe68.png)

```css
.box-wrap {
  margin: 0 auto;
  display: flex;

  /* 修改主轴方向为垂直方向 */
  /* 先确定主轴方向，再设置主轴或侧轴对齐 */
  flex-direction: column;

  /* 视觉效果：垂直居中 */
  justify-content: center;

  /* 视觉效果：水平居中 */
  align-items: center;

  width: 500px;
  height: 200px;
  border: 1px solid #666;
}

.box {
  width: 100px;
  height: 100px;
  background-color: skyblue;
}
```

```html
<body>
  <div class="box-wrap">
    <div class="box"></div>
  </div>
</body>
```
