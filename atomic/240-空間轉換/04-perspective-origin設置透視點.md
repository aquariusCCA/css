---
source:
  - 'origin/240-空間轉換/02-空間轉換的前置知識.md / # 設置透視點'
---

# perspective-origin 設置透視點

所謂透視點位置，就是觀察者的位置，默認的透視點在元素的中心。

使用 `perspective-origin` 設置觀察者位置（透視點的位置），例如：

```css
/* 設置透視點的位置 */
perspective-origin: 102px 102px;
```

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
  /* 設置透視點的位置 */
  perspective-origin: 102px 102px;
}

.inner {
  width: 200px;
  height: 200px;
  background-color: skyblue;
  transform: rotateX(30deg);
}
```

```html
<body>
  <div class="outer">
    <div class="inner">inner</div>
  </div>
</body>
```

<aside>
⚠️

**注意 !!! 通常情況下，我們不需要調整透視點的位置。**

</aside>
