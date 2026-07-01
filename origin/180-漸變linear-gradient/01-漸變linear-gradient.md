- 參考文章
    - [CSS 径向渐变](https://www.w3school.com.cn/css/css3_gradients_radial.asp)
    - [CSS 渐变](https://www.w3school.com.cn/css/css3_gradients.asp)


### 範例程式碼

```css
.box {
  width: 200px;
  height: 200px;
	/* 逗號隔開多個值，從透明到半透明。 */
	background-image: linear-gradient(transparent, rgba(0, 0, 0, .5));
}
```

```html
<body>
  <div class="box"></div>
</body>
```

### 實戰應用

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    p {
      margin: 0;
      padding: 0;
    }

    .box {
      display: block;
      width: 200px;
      height: 150px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
    }

    .box .cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.5s;
    }

    .box .title {
      position: absolute;
      width: 100%;
      height: 50px;
      padding: 10px;
      bottom: 0;
      left: 0;
      color: white;
      box-sizing: border-box;
      z-index: 2;
    }

    /* 渐变背景 */
    .box .mask {
      position: absolute;
      opacity: 0;
      transition: all 0.5s;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: linear-gradient(transparent,
          rgba(0, 0, 0, .6));
    }

    .box:hover .mask {
      opacity: 1;
    }

    .box:hover .cover {
      transform: scale(1.2);
    }
  </style>
</head>

<body>
  <a class="box" href="#">
    <img class="cover" src="./assets/images/linear-gradient-img-001-354aea.jpg" alt="穿黑色西裝揮手的男士照片">

    <div class="title">
      <p>百日依山尽</p>
    </div>

    <div class="mask"></div>
  </a>
</body>

</html>
```
