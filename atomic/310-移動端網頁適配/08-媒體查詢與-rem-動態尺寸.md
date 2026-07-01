---
source:
  - 'origin/310-移動端網頁適配/05-rem適配布局.md / # 媒體查詢+rem實現元素動態大小變化'
---

# 媒體查詢與 rem 動態尺寸

- `rem` 單位是跟著 `html` 來走的，有了 `rem` 頁面元素可以設置不同大小尺寸。
- 媒體查詢可以根據不同設備寬度來修改樣式。
- `媒體查詢 + rem` 就可以實現不同設備寬度，實現頁面元素大小的動態變化。
- 上述代碼的意思是：屏幕尺寸小於 320px，div 大小為 0.5 * 50 = 25px，屏幕尺寸大於 320px 小於 640px，div 大小為 0.5 * 100 = 50px。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    /* 从小到大的顺序 */
    @media screen and (min-width: 320px) {
      html {
        font-size: 50px;
      }
    }

    @media screen and (min-width: 640px) {
      html {
        font-size: 100px;
      }
    }

    .top {
      height: 1rem;
      font-size: .5rem;
      background-color: green;
      color: #fff;
      text-align: center;
      line-height: 1rem;
    }
  </style>
</head>

<body>
  <div class="top">购物车</div>
</body>

</html>
```
