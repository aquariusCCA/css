---
source:
  - 'origin/230-平面轉換/04-縮放scale.md / 全文'
  - 'origin/230-平面轉換/06-總結.md / scale 摘要'
---

# scale 縮放語法與放大效果

> 縮放 scale：只要給元素添加上了這個屬性就能控制它放大還是縮小。

```css
transform: scale(x轴缩放倍数, y轴缩放倍数);

/* x、y等比例缩放 */
transform: scale(缩放倍数);
```

## 重點

- 注意其中的 x 和 y 用逗號分割。
- `transform: scale(1, 1)`：寬和高維持原尺寸，相當於沒有縮放。
- `transform: scale(2, 2)`：寬和高都放大了 2 倍。
- `transform: scale(2)`：只寫一個參數，第二個參數則和第一個參數一樣，相當於 `scale(2, 2)`。
- `transform: scale(0.5, 0.5)`：縮小。
- `scale` 縮放最大的優勢：可以設置轉換中心點縮放，默認以中心點縮放，而且不影響其他盒子。

```css
.box {
  height: 250px;
  width: 200px;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid #666;
  text-align: center;
}

.cover {
  position: relative;
  width: 200px;
  height: 150px;
  background-color: skyblue;
}

.cover::after {
  /* 居中布局 */
  position: absolute;
  content: '';
  left: 50%;
  top: 50%;

  background-image: url(../../origin/230-平面轉換/assets/images/scale-img-001-e2d385.jpg);
  background-size: contain;
  width: 40px;
  height: 40px;

  transition: all .5s;

  /* 居中可以使用 margin 也可以使用 translate */
  /* 放大 */
  /* margin-left: -20px;
  margin-top: -20px;
  transform: scale(5); */
  /* transform: translate(-50%, -50%) scale(5); */

  /* 透明 */
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
}

.box:hover .cover::after {
  /* transform: scale(1); */
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
```

```html
<body>
  <div class="box">
    <div class="cover"></div>
    <p>欲把西湖比西子</p>
    <p>淡妆浓抹总相宜</p>
  </div>
</body>
```
