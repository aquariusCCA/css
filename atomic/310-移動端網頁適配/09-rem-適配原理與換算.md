---
source:
  - 'origin/310-移動端網頁適配/05-rem適配布局.md / # rem 適配方案'
---

# rem 適配原理與換算

- 讓一些不能等比自適應的元素，達到當設備尺寸發生改變的時候，等比例適配當前設備。
- 使用媒體查詢根據不同設備按比例設置 `html` 的字體大小，然後頁面元素使用 `rem` 做尺寸單位，當 `html` 字體大小變化元素尺寸也會發生變化，從而達到等比縮放的適配。

<aside>
💡

**`rem` 單位尺寸**

- 確定設計稿對應的設備 HTML 標籤字號。

```text
基准根字号 = 设备宽度（视口宽度）/ 10

rem 单位的尺寸 = px单位数值 / 基准根字号

eg:
设计稿设备宽度  375px
设计稿元素宽度  75px
rem宽度 = 75px / (375px / 10) = 2rem
```

- ✍️ 目前 rem 布局方案中，將網頁等分分成 10 份，HTML 標籤的字號為視口寬度的 1/10。
</aside>

## 範例程式碼

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

    /* 視口寬度 320px，根字號為 32px */
    @media screen and (min-width: 320px) {
      html {
        font-size: 32px;
      }
    }

    /* 視口寬度 640px，根字號為 64px */
    @media screen and (min-width: 640px) {
      html {
        font-size: 64px;
      }
    }

    .box {
      width: 5rem;
      height: 3rem;
      background-color: pink;
    }
  </style>
</head>

<body>
  <div class="box"></div>
</body>

</html>
```

## rem 適配方案技術使用

- 按照設計稿與設備寬度的比例，動態計算並設置 `html` 根標籤的 `font-size` 大小（媒體查詢）。
- `CSS` 中，設計稿元素的寬、高、相對位置等取值，按照同等比例換算為 `rem` 為單位的值。

## rem 實際開發中適配方案

- **方案一 ⇒ css、媒體查詢、rem**
- **方案二 ⇒ flexible.js、rem**
- 兩種方案都存在，方案 2 更為簡單。
