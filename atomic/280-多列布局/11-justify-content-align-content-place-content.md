---
source:
  - 'origin/280-多列布局/03-容器屬性.md / # justify-content属性，align-content属性，place-content属性'
---

# justify-content、align-content 與 place-content

`justify-content` 屬性是整個內容區域在容器裡面的水平位置（左中右），`align-content` 屬性是整個內容區域的垂直位置（上中下）。

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
}
```

這兩個屬性的寫法完全相同，都可以取下面這些值。下面的圖都以 `justify-content` 屬性為例，`align-content` 屬性的圖完全一樣，只是將水平方向改成垂直方向。

- `start`：對齊容器的起始邊框。

  ![justify-content: start 讓整個網格靠容器起點](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-016-d451cf.png)

- `end`：對齊容器的結束邊框。

  ![justify-content: end 讓整個網格靠容器終點](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-017-afc65a.png)

- `center`：容器內部居中。

  ![justify-content: center 讓整個網格水平置中](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-018-7fe672.png)

- `stretch`：項目大小沒有指定時，拉伸佔據整個網格容器。

  ![justify-content: stretch 拉伸網格填滿容器](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-019-9a92b7.png)

- `space-around`：每個項目兩側的間隔相等。所以，項目之間的間隔比項目與容器邊框的間隔大一倍。

  ![justify-content: space-around 分配兩側間距](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-020-fa85e0.png)

- `space-between`：項目與項目的間隔相等，項目與容器邊框之間沒有間隔。

  ![justify-content: space-between 兩端貼齊分配間距](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-021-ecc927.png)

- `space-evenly`：項目與項目的間隔相等，項目與容器邊框之間也是同樣長度的間隔。

  ![justify-content: space-evenly 等距分配容器空間](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-022-6abe11.png)

`place-content` 屬性是 `align-content` 屬性和 `justify-content` 屬性的合併簡寫形式：

```css
place-content: <align-content> <justify-content>
```

```css
place-content: space-around space-evenly;
```

如果省略第二個值，瀏覽器就會假定第二個值等於第一個值。
