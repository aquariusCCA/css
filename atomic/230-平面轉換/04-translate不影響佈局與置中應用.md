---
source:
  - 'origin/230-平面轉換/02-移動translate.md / # 不會影響到其他元素的位置'
  - 'origin/230-平面轉換/02-移動translate.md / # 讓盒子實現水平和垂直居中'
---

# translate 不影響佈局與置中應用

`translate` 的位移不會影響其他元素的位置，因此可以用來做視覺位移，也可以搭配定位完成水平與垂直置中。

## 不會影響其他元素的位置

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

## 讓盒子實現水平和垂直居中

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
