---
source:
  - 'origin/320-BFC/01-BFC.md / # 前言'
  - 'origin/320-BFC/01-BFC.md / # 什麼是 Block Formatting Context'
---

# BFC 概念與佈局規則

> **參考文章**
>
> - [CSS中的BFC是什么？_css中bfc是什么意思_范德萨_的博客-CSDN博客](https://blog.csdn.net/weixin_61102579/article/details/128557885)
> - [CSS 原理 - Block Formatting Context](https://yachen168.github.io/article/Block-formatting-context.html)

我們在頁面佈局的時候，經常出現以下情況：

- 這個元素高度怎麼沒了？
- 這兩欄佈局怎麼沒法自適應？
- 這兩個元素的間距怎麼有點奇怪的樣子？
- … 等等。

<aside>
💡

**原因是元素之間相互的影響，導致了意料之外的情況，這裡就涉及到 BFC 概念。**

</aside>

如同上一篇 [CSS 原理 - Formatting Context](https://yachen168.github.io/article/Formatting-context.html#more) 所說，Formatting Context 指的是佈局環境，而佈局環境有許多種，不同的佈局環境會有不同的佈局規則，Block Formatting Context (BFC)是其中一種。

下方為一段 [W3C](https://www.w3.org/TR/CSS21/visuren.html#block-formatting) 對於 BFC 的敘述：

> In a block formatting context, boxes are laid out one after the other, vertically, beginning at the top of a containing block. The vertical distance between two sibling boxes is determined by the ‘margin’ properties. Vertical margins between adjacent block-level boxes in a block formatting context collapse.
>
> In a block formatting context, each box’s left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch).

簡單來說，處在 `同一個 BFC` 中的元素(盒子)，會有以下現象：

- 元素(盒子)從其 `containing block(包含塊)` 的頂部開始，一個接一個呈現 `垂直` 排列。
- 若書寫方向為預設的由左至右，則元素(盒子)會貼齊其 containing block(包含塊)左側。
- 相鄰元素(盒子)之間的垂直距離，由元素的 margin 屬性決定。
- 相鄰的 block-level box(塊級盒子)垂直方向會發生 `margin collapsing(邊距重疊)`。

將上述現象用圖形表示：

```html
<html>
      <body>
            <div></div>
            <div></div>
            <div></div>
      </body>
</html>
```

首先，<html> 會建立一個 BFC (先破梗了)，而 <body> 與三個 <div> 參與的是 <html> 建立的 BFC，也就是說，<body> 與三個 <div> 處於同一個 BFC 中，因此元素會：

- 呈現垂直排列。
- 可以用 margin 來推開彼此。
- 垂直方向會發生 margin collapsing(邊距重疊)，其中 margin collapsing 又分為兩種(同層元素間以及元素與其容器間)，可參考先前文章 [CSS 原理 - Collapsing margins](https://yachen168.github.io/article/Collapsing-margins.html)。

![同一 BFC 中塊級盒子垂直排列示意圖](../../origin/320-BFC/assets/images/bfc-img-001-0bb5fa.png)

<aside>
⚠️

**注意，以上現象強調的是處於同一個 BFC 裡的元素(盒子)，若元素自立門戶創建新的 BFC，則不完全適用，所以 `了解什麼情況會建立新的 BFC 很重要`。**

</aside>
