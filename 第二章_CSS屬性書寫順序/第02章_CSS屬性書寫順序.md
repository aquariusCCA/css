# 第02章 CSS屬性書寫順序

- 所屬章節：第二章 CSS屬性書寫順序
- 關鍵字：CSS、屬性順序、布局定位、盒模型、文本屬性、背景屬性、display、position
- 建議回查情境：寫 CSS 時不知道先寫哪一類屬性、想統一團隊排版順序、想快速整理樣式區塊時

## 本章在講什麼

這一章在整理 CSS 屬性的建議書寫順序。

重點不是語法限制，而是讓樣式更容易閱讀、維護與查找。

## 建議的書寫順序

一般可以依照下面的順序來排：

1. 布局定位屬性
2. 自身屬性
3. 文本屬性
4. 其他屬性

### 1. 布局定位屬性

這一類屬性先寫，因為它們通常先決定元素怎麼顯示、怎麼排版。

- `display`
- `position`
- `float`
- `clear`
- `visibility`
- `overflow`

其中 `display` 常被放在最前面，因為它會影響元素的顯示模式。

### 2. 自身屬性

這一類屬性主要控制元素本身的盒模型與外觀尺寸。

- `width`
- `height`
- `margin`
- `padding`
- `border`
- `background`

### 3. 文本屬性

這一類屬性主要處理文字呈現方式。

- `color`
- `font`
- `text-decoration`
- `text-align`
- `vertical-align`
- `white-space`
- `word-break`

### 4. 其他屬性

這一類屬性通常放在最後，作為補充樣式或特殊效果。

- `content`
- `cursor`
- `border-radius`
- `box-shadow`
- `text-shadow`
- `background: linear-gradient(...)`

## 為什麼要這樣排

這種排序不是 CSS 的強制規則，而是一種常見的維護習慣。

它的好處是：

- 先看布局，再看尺寸，再看文字，最後看特效
- 同類屬性集中在一起，比較容易檢查
- 之後修改樣式時比較不容易漏掉

## 小提醒

- 這份順序是「建議順序」，不是語法規定
- 團隊如果有自己的規範，應該優先遵守團隊規範
- `background: linear-gradient(...)` 原文中的 `liner-gradient` 應為拼寫錯誤

## 30 秒複習

如果只記一個排列原則：

> 先布局，再盒模型，再文字，最後其他效果。

如果只記一個實作習慣：

> `display` 通常優先寫。
