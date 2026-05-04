# 內容 content

> 所屬章節：[第十四章 盒子模型](./README.md)  
> 關鍵字：content、width、height、內容區域、盒子尺寸  
> 建議回查情境：忘記 `width` 和 `height` 默認控制哪個區域時；盒子尺寸和預期不一致時；學 `padding`、`border`、`box-sizing` 前

## 本節導讀

這一節說明盒子模型中最裡層的 `content`。`content` 是放文字、圖片或子元素的內容區域，也是 `width` 和 `height` 在預設盒模型下控制的區域。

第一次閱讀時，先記住 `content` 是盒子最內層，再看 `width`、`height` 如何設定內容區域大小。後續學 `padding`、`border` 和 `box-sizing` 時，要回來確認「寬高到底算到哪一層」。

## 你會在這篇學到什麼

- `content` 在盒子模型中的位置。
- `width` 和 `height` 的基本作用。
- 常見取值寫法。
- 為什麼設定了 `padding` 或 `border` 後，盒子實際佔用空間可能變大。

## 先講結論

在 CSS 預設盒模型中，`width` 和 `height` 設定的是盒子的內容區域大小，也就是 `content` 的寬度與高度。

![內容.png](./images/1777900174739_FdzwpW7k4n.png)

常用屬性：

- `width`：設定內容區域寬度。
- `height`：設定內容區域高度。

常見取值：

- `200px`
- `50%`
- `auto`

初學階段最常見的是「數字 + `px`」，例如 `200px`。

## `content` 是什麼

`content` 是盒子模型最裡面的區域，用來放元素的實際內容。

例如：

- 文字會顯示在內容區域中。
- 圖片元素本身會佔據內容區域。
- 子元素通常也會放在父元素的內容區域內。

如果把整個盒子想成一個容器，`content` 就是容器最裡面真正裝內容的地方。

## `width` 和 `height` 的作用

`width` 用來設定內容區域的寬度，`height` 用來設定內容區域的高度。

```css
div {
  width: 200px;
  height: 200px;
  background-color: pink;
}
```

```html
<div>文字</div>
```

這段程式碼表示：

- `div` 的內容區域寬度是 `200px`。
- `div` 的內容區域高度是 `200px`。
- `background-color: pink;` 讓盒子的背景變成粉色，方便看出盒子範圍。

在沒有另外設定 `padding`、`border` 的情況下，畫面上看到的粉色區塊通常會和 `200px × 200px` 很接近。

## 為什麼說是「預設」控制內容區域

CSS 的預設盒模型是 `content-box`。在這種模式下：

```css
div {
  box-sizing: content-box;
}
```

`width` 和 `height` 只計算 `content`，不包含 `padding` 和 `border`。

例如：

```css
.box {
  width: 200px;
  height: 200px;
  padding: 20px;
  border: 2px solid #333;
}
```

在預設盒模型中，這個盒子實際佔用的寬度不是只有 `200px`，而是：

```text
內容寬度 200px
+ 左右 padding 40px
+ 左右 border 4px
= 實際佔用寬度 244px
```

所以當你發現盒子比設定的 `width` 更大時，要檢查是否加了 `padding` 或 `border`。

## 常見混淆點

### `width` 不一定等於整個盒子佔用寬度

在預設盒模型中，`width` 只代表內容區域寬度。整個盒子還可能包含 `padding`、`border` 和 `margin`。

### `height` 不一定需要手動設定

很多元素的高度可以由內容自然撐開。只有在需要固定高度、限制顯示區域或做特定布局時，才需要明確設定 `height`。

### 背景色不只畫在 `content`

預設情況下，背景會繪製到 `padding` 區域，不是只出現在 `content`。因此用背景色觀察盒子時，要注意它看到的不一定只有內容區域。

### `box-sizing` 會改變寬高計算方式

如果設定 `box-sizing: border-box;`，`width` 和 `height` 就會把 `content`、`padding`、`border` 一起算進去。這部分可以在 [box-sizing](./box-sizing.md) 中繼續學。

## 延伸閱讀

- [盒子模型的組成](./盒子模型的組成.md)
- [內邊距 padding](./內邊距padding.md)
- [邊框 border](./邊框border.md)
- [外邊距 margin](./外邊距margin.md)
- [box-sizing](./box-sizing.md)

## 一句話抓核心

`content` 是盒子最裡面的內容區域；在預設盒模型中，`width` 和 `height` 設定的就是這個內容區域的大小。
