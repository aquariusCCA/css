---
source:
  - 'origin/180-漸變linear-gradient/01-漸變linear-gradient.md / ### 實戰應用'
---

# linear-gradient 圖片遮罩實戰

`linear-gradient()` 可以用在圖片卡片的遮罩層上，讓文字區域從透明逐漸過渡到半透明黑色。這種做法常用來提升圖片上文字的可讀性。

範例中 `.mask` 是覆蓋在圖片上的絕對定位元素，背景使用 `linear-gradient(transparent, rgba(0, 0, 0, .6))`。預設透明度為 `0`，滑鼠移入 `.box` 時改為 `1`，同時讓圖片放大，形成 hover 視覺效果。

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

    /* 漸層背景 */
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
    <img class="cover" src="../../origin/180-漸變linear-gradient/assets/images/linear-gradient-img-001-354aea.jpg" alt="穿黑色西裝揮手的男士照片">

    <div class="title">
      <p>百日依山尽</p>
    </div>

    <div class="mask"></div>
  </a>
</body>

</html>
```
