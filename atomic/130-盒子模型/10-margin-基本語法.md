---
source:
  - 'origin/130-盒子模型/07-外邊距margin.md / # 外邊距margin介紹'
---

# margin 基本語法

`margin` 外邊距屬性用於設定盒子和盒子之間的距離。

![margin-left margin-right margin-top margin-bottom 屬性作用表](../../origin/130-盒子模型/assets/images/box-margin-img-001-406f8e.png)

```css
/* 可取 4 個值、3 個值、2 個值、1 個值 */
margin: 上 右 下 左;
margin: 上 左右 下;
margin: 上下 左右;
margin: 上下左右;

/* 單個方向 */
margin-top: 10px;
margin-bottom: 10px;
margin-left: 10px;
margin-right: 10px;
```

`margin` 簡寫方式代表的方向意義，和 `padding` 完全一致。
