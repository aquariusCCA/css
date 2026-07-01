---
source:
  - 'origin/240-空間轉換/04-3D旋轉rotate3d.md / rotate3d 語法說明'
  - 'origin/240-空間轉換/04-3D旋轉rotate3d.md / # rotate3d範例程式碼'
---

# rotate3d 自訂軸旋轉

`rotate3d(x, y, z, deg)` 可以沿著自定義軸旋轉，`deg` 為角度。

`x`、`y`、`z` 是表示旋轉軸的矢量，是標示你是否希望沿著該軸旋轉，最後一個標示旋轉的角度。

```css
/*沿着 X 轴旋转 45deg*/
transform: rotate3d(1, 0, 0, 45deg)

/*沿着对角线旋转45deg*/
transform: rotate3d(1, 1, 0, 45deg)
```

## rotate3d 範例程式碼

```css
body{
  transform-style: preserve-3d;
  perspective: 500px;
}

img {
  display: block;
  margin: 100px auto;
  transition: all 1s;
}

img:hover {
  /* 沿著x軸旋轉 */
  /* transform: rotate3d(1, 0, 0, 45deg) */

  /* 沿著y軸旋轉 */
  /* transform: rotate3d(0, 1, 0, 45deg) */

  /* 沿著z軸旋轉 */
  /* transform: rotate3d(0, 0, 1, 45deg) */

  /* 沿著對角線旋轉 */
  transform: rotate3d(1, 1, 0, 45deg)
}
```

```html
<body>
    <img src="./assets/images/3d-rotate-rotate3d-img-004-354aea.jpg" alt="穿黑色西裝揮手的男士照片">
</body>
```
