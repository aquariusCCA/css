---
source:
  - 'origin/240-空間轉換/05-3D縮放scale3d.md / 全文'
---

# 3D 縮放與 scale3d

3D 縮放是在 2D 縮放的基礎上可讓元素沿著 Z 軸縮放，具體使用方式如下：

- Step 1 → 先給元素添加轉換屬性 `transform`。
- Step 2 → 編寫 `transform` 的具體值，3D 相關可選值如下：
  - `scaleZ`：設置 z 軸方向的縮放比例，值為一個數字，`1` 表示不縮放，大於 `1` 放大、小於 `1` 縮小。
  - `scale3d`：第一個參數對應 x 軸，第二個參數對應 y 軸，第三個參數對應 z 軸，參數不允許省略。

```css
.outer {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  margin: 0 auto;
  margin-top: 100px;

  /* 開啟 3D 空間 */
  transform-style: preserve-3d;

  /* 設置景深 (有了透視效果，近大遠小) */
  perspective: 500px;
}

.inner {
  width: 200px;
  height: 200px;
  background-color: skyblue;
  /* 加上 rotateY() 是為了讓我們更好的看到 scaleZ() 的效果 */
  /* transform: scaleZ(3) rotateY(30deg); */
  transform: scale3d(1.5, 1.5, 3) rotateY(30deg);
}
```

```html
<body>
  <div class="outer">
    <div class="inner">inner</div>
  </div>
</body>
```
