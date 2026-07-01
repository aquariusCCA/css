---
source:
  - 'origin/150-CSS定位/10-定位疊放次序z-index.md / 全文'
---

# z-index 定位疊放次序

使用定位布局時，可能會出現盒子重疊的情況。此時可以使用 `z-index` 控制盒子的前後次序，也就是 z 軸。

只有定位的盒子才有 `z-index` 屬性。

z 軸用來控制元素離觀察者有多近。

```css
選擇器 {
  z-index: 1;
}
```

`z-index` 的規則：

- 數值可以是正整數、負整數或 `0`。
- 預設值是 `auto`。
- 數值越大，盒子越靠上。
- 如果屬性值相同，則按照書寫順序，後來居上。
- 數字後面不能加單位。

```css
.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
}

.xiongda {
  background-color: red;
  z-index: 1;
}

.xionger {
  background-color: green;
  left: 50px;
  top: 50px;
  z-index: 2;
}

.qiangge {
  background-color: blue;
  left: 100px;
  top: 100px;
}
```

```html
<body>
  <div class="box xiongda">熊大</div>
  <div class="box xionger">熊二</div>
  <div class="box qiangge">光头强</div>
</body>
```

> 待後續內容審查確認：原始筆記開頭有 Notion 外部補充「層疊上下文」連結，正式 notes 若要納入需確認來源與範圍。
