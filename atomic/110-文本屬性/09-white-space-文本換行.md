---
source:
  - 'origin/110-文本屬性/08-文本換行white-space.md / 全文'
---

# white-space 文本換行

參考文章：

- [white-space属性](https://blog.csdn.net/weixin_45545395/article/details/119085796)

可以使用 `white-space` 屬性設置文本中的空白處理與換行方式。

常用值如下：

## normal

`normal` 表示文本超出邊界自動換行，文本中的換行被瀏覽器識別為一個空格。這是默認值。

![white-space normal 合併空白並自動換行的效果](../../origin/110-文本屬性/assets/images/white-space-img-001-cf5002.png)

## pre

`pre` 表示原樣輸出，與 `pre` 標籤的效果相同。

![white-space pre 保留空白與換行的效果](../../origin/110-文本屬性/assets/images/white-space-img-002-1a8619.png)

## pre-wrap

`pre-wrap` 表示在 `pre` 效果的基礎上，超出元素邊界自動換行。

![white-space pre-wrap 保留空白並自動換行的效果](../../origin/110-文本屬性/assets/images/white-space-img-003-fc130b.png)

## pre-line

`pre-line` 表示在 `pre` 效果的基礎上，超出元素邊界自動換行，且識別文字中的換行，空格會忽略。

![white-space pre-line 保留換行並合併空白的效果](../../origin/110-文本屬性/assets/images/white-space-img-004-00bee8.png)

## nowrap

`nowrap` 表示強制不換行。

![white-space nowrap 讓文字不自動換行的效果](../../origin/110-文本屬性/assets/images/white-space-img-005-291824.png)
