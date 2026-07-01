---
source:
  - 'origin/290-媒體查詢/03-媒體特性.md / # 媒體特性'
---

# 媒體特性與 min/max 前綴

> 參考文章
>
> - [CSS 媒体查询 @media【详解】_51CTO博客_css媒体查询 @media](https://blog.51cto.com/u_15715491/5529588)
> - [CSS Media媒体查询使用大全，完整媒体查询总结 - 奔跑的太阳花 - 博客园](https://www.cnblogs.com/lguow/p/9316598.html)

每種媒體類型都具有各自不同的特性，可以根據不同媒體類型的媒體特性設置不同的展示風格。

一般來說，我們可以使用 `min-width`、`max-width` 和 `width` 媒體特徵。通過設置這些特徵，實現響應式佈局，能夠響應不同屏幕大小，給用戶一個良好的使用體驗。

![width、min-width、max-width 媒體特性表](../../origin/290-媒體查詢/assets/images/media-features-img-001-c2d912.png)

媒體屬性是 CSS3 新增的內容，多數媒體屬性帶有 `min-` 和 `max-` 前綴，用於表達**小於等於**和**大於等於**。

- `min-`：大於等於。
- `max-`：小於等於。

## 常見媒體屬性

- `width | min-width | max-width`
- `height | min-height | max-height`
- `device-width | min-device-width | max-device-width`
- `device-height | min-device-height | max-device-height`
- `aspect-ratio | min-aspect-ratio | max-aspect-ratio`
- `device-aspect-ratio | min-device-aspect-ratio | max-device-aspect-ratio`
- `color | min-color | max-color`
- `color-index | min-color-index | max-color-index`
- `monochrome | min-monochrome | max-monochrome`
- `resolution | min-resolution | max-resolution`
- `scan | grid`
