- 媒體類型（Media Type）在 CSS2 中是一個常見的屬性，也是一個非常有用的屬性，可以通過媒體類型對不同的設備指定不同的樣式。
    - 將不同的終端設備劃分成不同的類型，稱為媒體類型。
- **如下是最常見的三種媒體類型 :**
    
    ![最常見的三種媒體類型.png](%25E6%259C%2580%25E5%25B8%25B8%25E8%25A6%258B%25E7%259A%2584%25E4%25B8%2589%25E7%25A8%25AE%25E5%25AA%2592%25E9%25AB%2594%25E9%25A1%259E%25E5%259E%258B.png)
    
- **所有媒體類型，詳情請看 MDN :**
    
    ![所有媒體類型.png](%25E6%2589%2580%25E6%259C%2589%25E5%25AA%2592%25E9%25AB%2594%25E9%25A1%259E%25E5%259E%258B.png)
    

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