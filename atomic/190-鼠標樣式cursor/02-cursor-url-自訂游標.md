---
source:
  - 'origin/190-鼠標樣式cursor/01-鼠標樣式cursor.md / 自定義鼠標樣式範例'
---

# cursor url 自訂游標

`cursor` 可以使用 `url(...)` 指定自訂圖片作為游標。使用自訂游標圖片時，最後必須提供一個系統預定義游標值作為 fallback；若圖片無法載入或瀏覽器不支援，瀏覽器會使用這個 keyword 游標。

```html
<body>
  <ul>
    <li style="cursor: url(../../origin/190-鼠標樣式cursor/assets/images/cursor-style-img-002-81baa8.png) , default;">自定義鼠標樣式</li>
  </ul>
</body>
```

上例中 `url(...)` 指向自訂游標圖片，後面的 `default` 是備援值。這種寫法能讓自訂游標與預設游標行為保持可預期。
