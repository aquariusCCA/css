---
source:
  - 'origin/130-盒子模型/06-內邊距padding.md / # 內邊距介紹'
---

# padding 基本語法

`padding` 屬性用於設定內邊距，也就是盒子邊框與內容之間的距離。

![padding-left padding-right padding-top padding-bottom 屬性作用表](../../origin/130-盒子模型/assets/images/box-padding-img-001-c208a5.png)

`padding` 是簡寫屬性，可以有一到四個值。

![padding 簡寫中一到四個值的對應方向表](../../origin/130-盒子模型/assets/images/box-padding-img-002-1510d3.png)

```css
/* 可取 4 個值、3 個值、2 個值、1 個值 */
padding: 上 右 下 左;
padding: 上 左右 下;
padding: 上下 左右;
padding: 上下左右;

/* 單個方向 */
padding-top: 10px;
padding-bottom: 10px;
padding-left: 10px;
padding-right: 10px;
```
