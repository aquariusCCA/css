---
source:
  - 'origin/230-平面轉換/02-移動translate.md / # 雙開門'
---

# translate 雙開門效果

雙開門效果可以透過偽元素建立左右兩扇門，並在滑鼠移入時分別使用 `translateX()` 往左右移動。

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
