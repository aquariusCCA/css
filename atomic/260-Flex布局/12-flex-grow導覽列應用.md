---
source:
  - 'origin/260-Flex布局/04-flex布局子項常見屬性.md / ### flow-grow 應用'
---

# flex-grow 導覽列應用

`flex-grow` 屬性在項目中運用很多，比如頁面佈局、導航條、分頁等。

![使用 flex-grow 讓導覽列項目平均分配寬度](../../origin/260-Flex布局/assets/images/flex-item-properties-img-006-5b9d3d.png)

這個其實就是騰訊首頁的導航條了，我們模擬實現一下，步驟分為 4 步。

## Step 1：寫 HTML 標籤

```html
<nav class="container">
  <a class="item" href="#">新闻</a>
  <a class="item" href="#">视频</a>
  <a class="item" href="#">图片</a>
  <a class="item" href="#">军事</a>
  <a class="item" href="#">体育</a>
  <a class="item" href="#">NBA</a>
  <a class="item" href="#">娱乐</a>
  <a class="item" href="#">财经</a>
  <a class="item" href="#">科技</a>
</nav>
```

## Step 2：設置基本樣式

```css
.container {
  height: 44px;
  background-color: #1479d7;
  border-radius: 3px;
}

.item {
  color: white;
  text-align: center;
  text-decoration: none;
}
```

## Step 3：設置容器為 flex 佈局，項目 flex-grow 為 1

```css
.container {
  /* 设置子元素的布局为flex布局 */
  display: flex;
}

.item {
  /* 设置项目放大系数 */
  flex-grow: 1;
}
```

## Step 4：設置交叉軸居中

```css
.container {
  /* 设置交叉轴上项目居中排列 */
  align-items: center;
}
```
