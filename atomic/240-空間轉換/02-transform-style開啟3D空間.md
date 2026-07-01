---
source:
  - 'origin/240-空間轉換/02-空間轉換的前置知識.md / # 開啟3D空間'
---

# transform-style 開啟 3D 空間

> 💡 重要原則：元素進行 3D 變換的首要操作 → 父元素必須開啟 3D 空間 !!!

`transform-style` 用來控制子元素是否開啟三維立體環境。

<aside>
💡

**使用 `transform-style` 開啟 3D 空間，可選值如下：**

- `flat`（默認）：讓子元素位於此元素的二維平面內（2D 平面）。
- `preserve-3d`：讓子元素位於此元素的三維空間內（3D 空間）。

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
