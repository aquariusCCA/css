---
source:
  - 'origin/290-媒體查詢/02-media type 媒體類型.md / 全文'
---

# media type 媒體類型

媒體類型（Media Type）在 CSS2 中是一個常見的屬性，也是一個非常有用的屬性，可以通過媒體類型對不同的設備指定不同的樣式。

將不同的終端設備劃分成不同的類型，稱為媒體類型。

## 常見媒體類型

![all、print、screen 三種常見媒體類型](../../origin/290-媒體查詢/assets/images/media-types-img-001-6b3796.png)

## 所有媒體類型

![CSS 媒體類型與用途對照表](../../origin/290-媒體查詢/assets/images/media-types-img-002-3c8c60.png)

## 範例

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    div {
      width: 450px;
      height: 300px;
    }

    /* 只有在打印機或打印預覽才應用的樣式 */
    @media print {
      div {
        background-color: orange;
      }
    }

    /* 只有在螢幕上才應用的樣式 */
    @media screen {
      div {
        background-color: green;
      }
    }

    /* @media all {
      div {
        background-color: blue;
      }
    } */
  </style>
</head>

<body>
  <div>媒體類型</div>
</body>

</html>
```
