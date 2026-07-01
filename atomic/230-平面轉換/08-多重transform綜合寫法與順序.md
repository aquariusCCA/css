---
source:
  - 'origin/230-平面轉換/05-2D轉換綜合寫法.md / 全文'
  - 'origin/230-平面轉換/06-總結.md / 多重 transform 摘要'
---

# 多重 transform 綜合寫法與順序

多個 transform function 的順序會影響結果；若希望位移依照未旋轉前的頁面座標移動，通常會把 `translate()` 放在前面。

```css
/* 同時使用多個轉換，其順序會影響轉換的效果 */
transform: translate() scale() rotate();
```

```css
.wrap {
  width: 600px;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #666;
}

.box {
  position: relative;
  height: 200px;
  width: 200px;
  overflow: hidden;
  border-radius: 50%;
  background-color: skyblue;
  transition: all 3s;
}

.box::before {
  position: absolute;
  width: 200px;
  height: 100px;
  content: '';
  background-color: yellow;
}

.wrap:hover .box {
	/* 旋轉會改變坐標軸向 */
	transform: translate(400px) rotate(360deg);
}
```

```html
<body>
  <div class="wrap">
    <div class="box"></div>
  </div>
</body>
```
