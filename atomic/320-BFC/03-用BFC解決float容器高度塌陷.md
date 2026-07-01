---
source:
  - 'origin/320-BFC/01-BFC.md / # BFC 功用'
  - 'origin/320-BFC/01-BFC.md / ### 解決 float 元素造成外容器塌陷問題'
---

# 用 BFC 解決 float 容器高度塌陷

BFC 可以解決：

- `float` 元素的 `外層容器塌陷` 問題。
- 元素間的 `margin collapsing(外邊距重疊)` 問題
- float 元素與其他元素的重疊問題 (float 元素遮住其他元素)。

float 元素會導致外層容器的高度塌陷(若外層容器高度為 auto 且無其它比 float 元素高的子元素)。

```html
<div class="container">
    <span>我是裝著 float 元素的容器</span>
    <div class="float">我是 float 元素</div>
</div>
```

```css
.container {
    width: 600px;
    background-color: grey;
    border: 5px solid #333;
}

.float {
    float: left;
    width: 200px;
    height: 150px;
    background-color: yellow;
    border:1px solid black;
    padding: 10px;
}
```

![float 元素造成外層容器高度塌陷](../../origin/320-BFC/assets/images/bfc-img-002-d47b0a.png)

此時可以 `使外層容器建立 BFC 來恢復高度`，例如在外層容器加上 overflow: hidden 或 display: flow-root。

```css
.container{
      display: flow-root;
}
```

登愣～外層容器撐開了。

![外層容器建立 BFC 後包住 float 元素](../../origin/320-BFC/assets/images/bfc-img-003-0dfddf.png)
