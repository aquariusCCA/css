---
source_atomic:
  - atomic/130-盒子模型/10-margin-基本語法.md
  - atomic/130-盒子模型/11-相鄰塊元素垂直外邊距合併.md
  - atomic/130-盒子模型/12-嵌套塊元素垂直外邊距塌陷.md
topics: [margin, 外邊距, 外邊距合併, 外邊距塌陷, 間距控制]
summary: "說明 margin 的用途、簡寫語法與垂直外距合併問題。"
---

# margin：盒子與盒子之間的距離

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `margin` 控制的是盒子外部距離。
- 使用一到四值簡寫設定不同方向的外邊距。
- 理解相鄰塊元素垂直外邊距合併。
- 理解嵌套塊元素垂直外邊距塌陷。
- 判斷外距合併或塌陷時可以採用哪些解法。

## 使用情境

當你希望兩個盒子之間有距離時，就會想到 `margin`。

例如：

- 兩張卡片之間要有間隔。
- 標題和段落之間要留空白。
- 一個區塊和上方內容不要貼在一起。

這些都屬於盒子外部距離問題。

## 一句話理解

`margin` 是盒子邊框外部的透明距離，用來控制盒子與其他盒子之間的間隔。

![margin-left margin-right margin-top margin-bottom 屬性作用表](../../origin/130-盒子模型/assets/images/box-margin-img-001-406f8e.png)

和 padding 不同，margin 位於 border 外側，不會被盒子的背景色填滿。

## 基本語法

可以單獨設定某個方向：

```css
.box {
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
}
```

也可以使用簡寫：

```css
margin: 上 右 下 左;
margin: 上 左右 下;
margin: 上下 左右;
margin: 上下左右;
```

`margin` 的方向規則和 `padding` 完全一致，都是從上開始順時針設定。

## margin 和 padding 的差異

| 比較項目 | `padding` | `margin` |
| --- | --- | --- |
| 位置 | border 內側 | border 外側 |
| 用途 | 內容和邊框之間的距離 | 盒子和盒子之間的距離 |
| 背景色是否涵蓋 | 通常涵蓋 | 不涵蓋 |
| 是否可能影響盒子尺寸 | 會，是盒子內部尺寸的一部分 | 不增加盒子本身尺寸，但會影響盒子外部佔位 |

簡單判斷：

- 內容太貼邊框：用 `padding`。
- 兩個盒子太靠近：用 `margin`。

## 相鄰塊元素垂直外邊距合併

使用 `margin` 設定塊級元素的垂直距離時，可能會遇到外邊距合併。

當上下相鄰的兩個塊元素是兄弟關係時，如果上方元素有 `margin-bottom`，下方元素有 `margin-top`，它們之間的距離不是相加，而是取較大的值。

![相鄰塊元素垂直外邊距合併前後對比圖](../../origin/130-盒子模型/assets/images/box-margin-img-002-ce44ee.png)

例如：

```css
.damao,
.ermao {
  width: 200px;
  height: 200px;
  background-color: pink;
}

.damao {
  margin-bottom: 100px;
}

.ermao {
  margin-top: 200px;
}
```

```html
<div class="damao">大毛</div>
<div class="ermao">二毛</div>
```

這兩個盒子之間的垂直距離不是 `300px`，而是 `200px`。

比較穩定的寫法是：同一方向的間距盡量只由一側負責。例如只給上方元素 `margin-bottom`，或只給下方元素 `margin-top`。

## 嵌套塊元素垂直外邊距塌陷

另一種常見問題發生在父子元素之間。

如果父元素裡的第一個子元素設定了 `margin-top`，這個 margin 可能沒有把子元素往父元素內部推開，而是作用到父元素外側，讓父元素整體往下移。

例如：

```css
.box-father {
  width: 200px;
  height: 200px;
  background-color: #b2b6b6;
}

.box-child {
  width: 100px;
  height: 100px;
  background-color: #7f9faf;
  margin-top: 100px;
}
```

```html
<div class="box-father">
  <div class="box-child"></div>
</div>
```

你可能以為子元素會在父元素內部往下移 `100px`，但實際上可能是父元素跟著被推開。

## 解決嵌套塌陷的方法

常見解法有幾種：

### 給父元素加 padding-top 或 border-top

```css
.box-father {
  padding-top: 1px;
}
```

或：

```css
.box-father {
  border-top: 1px solid transparent;
}
```

這樣可以隔開父子元素的垂直 margin。

### 給父元素加 overflow hidden

```css
.box-father {
  overflow: hidden;
}
```

這是常見的解法之一，但要注意它也會裁切超出父元素的內容。

### 改變元素顯示或布局方式

例如把元素改成 `inline-block`，或使用浮動、現代布局方式，會改變它們的格式化上下文，進而避免某些 margin 塌陷情況。

## 常見錯誤

### 誤解：上下 margin 一定會相加

相鄰塊元素的垂直 margin 可能會合併，最後距離取較大值，而不是兩者相加。

### 誤解：父子元素中子元素的 margin-top 一定作用在父元素內部

在特定情況下，子元素的 `margin-top` 可能塌陷到父元素外側，讓父元素一起移動。

### 誤解：所有 margin 問題都用 `overflow: hidden` 解

`overflow: hidden` 很方便，但它會裁切溢出內容。若父元素中有陰影、下拉選單或超出範圍的內容，可能造成副作用。

## 實務判斷

寫垂直間距時，可以養成幾個習慣：

- 兄弟元素的垂直距離盡量只由一側 margin 控制。
- 父子之間要留內部距離時，優先考慮父元素的 padding。
- 遇到塌陷時，先判斷是相鄰兄弟合併，還是父子嵌套塌陷。
- 使用 `overflow: hidden` 前，確認不需要顯示超出父元素的內容。

## 重點整理

- `margin` 是盒子外部距離，用來控制盒子之間的間隔。
- margin 簡寫方向和 padding 一樣。
- 相鄰塊元素上下 margin 可能合併，距離取較大值。
- 父子嵌套時，子元素的 `margin-top` 可能塌陷到父元素外側。
- 解決塌陷可用父元素 padding/border、`overflow: hidden` 或改變布局方式。

## 自我檢查

1. `margin: 10px 20px 30px;` 分別代表哪些方向？
2. 上方元素 `margin-bottom: 100px`，下方元素 `margin-top: 200px`，相鄰塊元素之間的垂直距離通常是多少？
3. 子元素 `margin-top` 為什麼可能讓父元素一起往下移？
4. 使用 `overflow: hidden` 解決 margin 塌陷時，可能帶來什麼副作用？
