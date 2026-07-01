---
source:
  - 'origin/240-空間轉換/02-空間轉換的前置知識.md / # 設置景深'
---

# perspective 設置景深

景深指指定觀察者與 `z=0` 平面的距離，能讓 3D 變換的元素產生透視效果，看來更加立體。

<aside>
💡

**使用 `perspective` 設置景深，可選值如下：**

- `none`（默認值）：不指定透視。
- 長度值：指定觀察者與 `z=0` 平面的距離，不允許負值。

</aside>

<aside>
💡

**透視寫在被觀察元素的父盒子上面的。**

![perspective 視距與 Z 軸透視關係示意圖](../../origin/240-空間轉換/assets/images/spatial-transformation-prerequisites-img-001-7539c3.png)

- 距離視覺點越近的在電腦平面成像越大，越遠成像越小。
- `d`：就是視距，視距就是一個距離人的眼睛到屏幕的距離。
  - 透視我們也稱為 `視距`；視距就是人的眼睛到屏幕的距離。
- `z`：就是 `z軸`，物體距離屏幕的距離，z 軸越大（正值）我們看到的物體就越大。

</aside>

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

**注意 !!! `perspective` 設置給發生 3D 變換元素的父元素。**

</aside>
