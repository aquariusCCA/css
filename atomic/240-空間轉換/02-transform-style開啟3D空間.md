---
source:
  - 'origin/240-空間轉換/02-空間轉換的前置知識.md / # 開啟3D空間'
---

# transform-style 開啟 3D 空間

> 💡 重要原則：若要讓子元素在父元素內保留立體層次，父元素需要開啟 3D 空間。

`transform-style` 用來控制子元素是否保留在三維空間中；單一元素本身仍可直接使用 3D transform。

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
