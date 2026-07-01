---
source:
  - 'origin/260-Flex布局/03-flex佈局常見父項屬性.md / # 設置子元素是否換行 flex-wrap'
---

# flex-wrap 換行控制

默認情況下，項目都排在一條線（又稱「軸線」）上。`flex-wrap` 屬性定義 flex 佈局中項目是否換行；如果按照設置的盒子大小，一行只能裝 3 個盒子，但是有 5 個盒子，flex 佈局默認會塞上去，自動縮小盒子大小。

`flex-wrap` 屬性用於設置容器內項目是否自動換行。語法格式如下：

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse
}
```

- `nowrap`：項目不換行（這個是默認值）。

  ![flex-wrap: nowrap 讓 flex 項目維持單行排列](../../origin/260-Flex布局/assets/images/flex-container-properties-img-022-f90a0e.png)

- `wrap`：項目在超出容器時進行換行。

  ![flex-wrap: wrap 讓 flex 項目超出容器時換行排列](../../origin/260-Flex布局/assets/images/flex-container-properties-img-023-1d9f2c.png)

- `wrap-reverse`：同 `wrap` 值，只是換成反序方向。

  ![flex-wrap: wrap-reverse 讓 flex 項目反向換行排列](../../origin/260-Flex布局/assets/images/flex-container-properties-img-024-621644.png)

```css
div {
  display: flex;
  width: 600px;
  height: 400px;
  background-color: pink;

  /* flex布局中，默认的子元素是不换行的，如果装不开，会缩小子元素的宽度，放到父元素里面 */
  /* flex-wrap: nowrap; */
  flex-wrap: wrap;
}

div span {
  width: 150px;
  height: 100px;
  background-color: purple;
  color: #fff;
  margin: 10px;
}
```
