# box-sizing

> 所屬章節：[第十四章 盒子模型](./README.md)  
> 關鍵字：box-sizing、content-box、border-box、盒子尺寸、padding、border  
> 建議回查情境：設定寬高後盒子實際尺寸變大時；想讓 `padding` 和 `border` 不額外撐大盒子時；需要確認 `width` 到底包含哪些區域時

## 本節導讀

這一節說明 `box-sizing` 如何改變盒子尺寸的計算方式。學完 `content`、`padding` 和 `border` 之後，最常遇到的問題是：明明設定了 `width: 200px;`，為什麼盒子實際看起來不只 `200px`？

第一次閱讀時，先理解 `content-box` 和 `border-box` 的差異，再看同一組 `width`、`padding`、`border` 在兩種盒模型下的計算結果。後續切版時，如果盒子尺寸和設計稿不一致，這一篇很適合回來查。

## 你會在這篇學到什麼

- `box-sizing` 是什麼。
- `content-box` 如何計算盒子尺寸。
- `border-box` 如何計算盒子尺寸。
- 為什麼實務上常把全部元素設定為 `border-box`。
- 使用 `border-box` 時要注意什麼。

## 先講結論

`box-sizing` 用來決定 CSS 的 `width` 和 `height` 要算到盒子模型的哪一層。

它最常用的兩個值是：

- `content-box`：預設值，`width` / `height` 只設定內容區域。
- `border-box`：`width` / `height` 包含內容、內邊距與邊框。

差異可以先記成：

```text
content-box：
實際寬度 = width + 左右 padding + 左右 border

border-box：
實際寬度 = width
width = 內容寬度 + 左右 padding + 左右 border
```

`margin` 不會被算進 `box-sizing`。不管使用哪一種盒模型，`margin` 都是盒子外部和其他盒子之間的距離。

## `content-box`：預設盒模型

`content-box` 是 CSS 的預設計算方式：

```css
box-sizing: content-box;
```

在這種模式下，`width` 和 `height` 設定的是 `content` 區域，不包含 `padding` 和 `border`。

例如：

```css
div {
  width: 200px;
  height: 200px;
  padding: 15px;
  border: 20px solid red;
  box-sizing: content-box;
}
```

這個盒子的實際寬度會是：

```text
內容寬度 200px
+ 左右 padding 30px
+ 左右 border 40px
= 實際寬度 270px
```

實際高度也會是：

```text
內容高度 200px
+ 上下 padding 30px
+ 上下 border 40px
= 實際高度 270px
```

所以在 `content-box` 中，加入 `padding` 或 `border` 會讓盒子的外部尺寸變大。

## `border-box`：把 padding 和 border 算進寬高

`border-box` 會改變 `width` 和 `height` 的計算範圍：

```css
box-sizing: border-box;
```

在這種模式下，`width` 和 `height` 表示盒子到邊框為止的尺寸，也就是：

```text
width = 內容寬度 + 左右 padding + 左右 border
height = 內容高度 + 上下 padding + 上下 border
```

例如：

```css
p {
  width: 200px;
  height: 200px;
  padding: 15px;
  border: 20px solid red;
  box-sizing: border-box;
}
```

這個盒子的實際寬度仍然是 `200px`。其中：

```text
實際寬度 200px
- 左右 padding 30px
- 左右 border 40px
= 內容寬度 130px
```

實際高度同樣是 `200px`：

```text
實際高度 200px
- 上下 padding 30px
- 上下 border 40px
= 內容高度 130px
```

也就是說，`border-box` 不是讓 `padding` 和 `border` 消失，而是把它們包含在指定的 `width` / `height` 裡。當 `padding` 或 `border` 增加時，內容區域會被壓縮。

## 對照範例

下面兩個元素都設定 `width: 200px;`、`height: 200px;`、`padding: 15px;` 和 `border: 20px solid red;`，差別只在 `box-sizing`。

```css
div {
  width: 200px;
  height: 200px;
  background-color: pink;
  border: 20px solid red;
  padding: 15px;
  box-sizing: content-box;
}

p {
  width: 200px;
  height: 200px;
  background-color: pink;
  border: 20px solid red;
  padding: 15px;
  box-sizing: border-box;
}
```

```html
<div>content-box</div>
<p>border-box</p>
```

計算結果：

| 元素 | `box-sizing` | 設定的 `width` | 實際外部寬度 | 內容寬度 |
| --- | --- | --- | --- | --- |
| `div` | `content-box` | `200px` | `270px` | `200px` |
| `p` | `border-box` | `200px` | `200px` | `130px` |

這就是為什麼同樣設定 `width: 200px;`，兩個元素的實際尺寸可能不同。

## 實務常見寫法

切版時常會希望「設定多少寬度，盒子外部就維持多少寬度」。這樣比較容易對齊設計稿，也比較不容易因為補 `padding` 或 `border` 而把版面撐開。

因此可以在全域重置中加入：

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

這樣所有元素預設都會使用 `border-box`。之後設定盒子寬高時，`padding` 和 `border` 會被包含在寬高裡，不會額外增加盒子的外部尺寸。

也可以補上偽元素，讓 `::before` 和 `::after` 一起套用：

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

## 使用 `border-box` 時的注意事項

### `padding` 和 `border` 仍然會佔空間

`border-box` 只是改變寬高計算方式，不是取消 `padding` 和 `border`。如果 `padding` 或 `border` 變大，內容區域就會變小。

### `padding` 和 `border` 不應超過盒子寬高

如果左右 `padding` 加左右 `border` 已經超過 `width`，內容區域就沒有足夠空間。此時即使使用 `border-box`，盒子的內容也可能被擠壓，版面仍然會出問題。

### `margin` 仍然在盒子外面

`box-sizing: border-box;` 不會把 `margin` 算進 `width`。例如 `width: 200px; margin: 20px;` 時，盒子本身到邊框為止是 `200px`，但它和其他元素之間還會保留 `20px` 外邊距。

## 常見混淆點

### `border-box` 不是 CSS3 才有的另一套盒子

比較精確的說法是：`box-sizing` 屬性可以切換盒子尺寸的計算方式。`content-box` 是預設值，`border-box` 是另一種常用計算方式。

### `width` 在兩種模式下代表不同範圍

- `content-box`：`width` 代表內容寬度。
- `border-box`：`width` 代表內容、左右 `padding`、左右 `border` 加總後的寬度。

### 盒子最終佔位還要考慮 `margin`

如果在布局中討論「元素和其他元素之間總共佔多少空間」，還要把左右 `margin` 一起考慮。`box-sizing` 只處理 `content`、`padding` 和 `border` 的計算範圍。

## 延伸閱讀

- [盒子模型的組成](./盒子模型的組成.md)
- [內容 content](./內容content.md)
- [內邊距 padding](./內邊距padding.md)
- [邊框 border](./邊框border.md)
- [外邊距 margin](./外邊距margin.md)

## 一句話抓核心

`box-sizing` 決定 `width` 和 `height` 算到哪一層；`content-box` 只算內容，`border-box` 則把 `padding` 和 `border` 一起算進指定寬高。
