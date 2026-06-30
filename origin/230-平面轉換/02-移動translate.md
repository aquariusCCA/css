> 2D移動是2D轉換裡面的一種功能，可以改變元素在頁面中的位置，類似定位。
> 

```css
transform: translate(水平移动距离，垂直移动距离);

transform: translate(100px, 100px);

/* 或者分开写 */
transform: translateX(n);
transform: translateY(n);

/* 如果只移动 X 轴  */
transform: translate(100px, 0);
transform: translateX(100px);
```

<aside>
💡

**重點**

- 定義`2D`轉換中的移動，沿著 X 和 Y 軸移動元素。
- `translate` 最大的優點：不會影響到其他元素的位置。
- `translate` 中的百分比單位是相對於自身元素的。
    - `translate:(50%, 50%);`
</aside>

# **雙開門**

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .box {
      position: relative;
      overflow: hidden;
      width: 600px;
      height: 200px;
      border: 1px solid #333;
    }

    .box::before,
    .box::after {
      /* 必須有 contetn 屬性 */
      content: '';
      position: absolute;
      width: 50%;
      height: 100%;
      /* 過渡 */
      transition: all 0.5s;
    }

    .box::before {
      left: 0;
      top: 0;
      background-color: skyblue;
    }

    .box::after {
      right: 0;
      top: 0;
      background-color: yellow;
    }

    /* 鼠標移入 */
    .box:hover::before {
      transform: translateX(-100%);
    }

    .box:hover::after {
      transform: translateX(100%);
    }
  </style>
</head>

<body>
  <div class="box"></div>
</body>

</html>
```

# **不會影響到其他元素的位置**

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .w {
      width: 200px;
      height: 200px;
    }

    .one {
      background-color: pink;
    }

    .one:hover {
      transform: translate(30px, 30px);
    }

    .two {
      background-color: purple;
    }
  </style>
</head>

<body>
  <div class="w one"></div>
  <div class="w two"></div>
</body>

</html>
```

# **讓盒子實現水平和垂直居中**

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .wrap {
      position: relative;
      width: 500px;
      height: 200px;
      border: 1px solid #333;
    }

    .box {
      position: absolute;
      left: 0;
      top: 0;
      width: 100px;
      height: 100px;
      background-color: skyblue;
      /* 過渡 */
      transition: all 0.5s;
    }

    /* 鼠標移入後居中 */
    .wrap:hover .box {
      top: 50%;
      left: 50%;

      /* 替換：margin-left: -1/2x; margin-top: -1/2y */
      transform: translate(-50%, -50%);
    }
  </style>
</head>

<body>
  <div class="wrap">
    <div class="box"></div>
  </div>
</body>

</html>
```