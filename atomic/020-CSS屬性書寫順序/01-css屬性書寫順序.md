---
source:
  - 'origin/020-CSS屬性書寫順序/01-CSS屬性書寫順序.md / 全文'
---

# CSS 屬性書寫順序

CSS 屬性書寫時，可以依照屬性的用途分組排列，讓樣式更容易閱讀與維護。

## 布局定位屬性

布局定位屬性包含：

- `display`
- `position`
- `float`
- `clear`
- `visibility`
- `overflow`

建議將 `display` 放在第一個書寫，因為它關係到元素的顯示模式。

## 自身屬性

自身屬性包含：

- `width`
- `height`
- `margin`
- `padding`
- `border`
- `background`

## 文本屬性

文本屬性包含：

- `color`
- `font`
- `text-decoration`
- `text-align`
- `vertical-align`
- `white-space`
- `break-word`

## 其他屬性

其他屬性包含：

- `content`
- `cursor`
- `border-radius`
- `box-shadow`
- `text-shadow`
- `background:liner-gradient...`
