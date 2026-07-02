---
source_atomic:
  - atomic/110-文本屬性/13-vertical-align-概念與基線.md
  - atomic/110-文本屬性/14-圖片表單與文字垂直對齊.md
  - atomic/110-文本屬性/15-圖片底側空白縫隙解決.md
---

# vertical-align 垂直對齊與圖片縫隙

## 學習目標

讀完這篇筆記後，你應該能夠：

- 說明 `vertical-align` 的適用對象。
- 理解基線對齊為什麼會影響圖片、表單與文字。
- 使用 `vertical-align: middle` 讓圖片或表單與文字垂直居中。
- 解釋圖片底側空白縫隙的原因。
- 使用 `vertical-align` 或 `display: block` 解決圖片底側縫隙。

## 使用情境

圖片、表單控制項和文字排在同一行時，經常會出現看起來不對齊的情況。例如圖片旁邊有一行文字，圖片底部卻像是留了一點空白；或 textarea 和提示文字放在一起時，垂直位置不協調。

這些問題通常和行內元素、行內塊元素的基線對齊有關，可以用 `vertical-align` 理解與處理。

## vertical-align 是什麼

`vertical-align` 用於設定一個元素的垂直對齊方式，但它只針對行內元素、行內塊元素或表格儲存格相關場景有效，不能用來控制普通塊級元素在父容器中垂直居中。

![vertical-align 屬性值與垂直對齊方式表](../../origin/110-文本屬性/assets/images/vertical-align-img-001-a83367.png)

常見語法：

```css
vertical-align: baseline | top | middle | bottom;
```

常見使用場景是設定圖片或表單這類行內塊元素和文字的垂直對齊。

## 認識基線

基線是瀏覽器文字排版中用於對齊的一條參考線。預設情況下，很多行內或行內塊元素會和文字基線對齊。

![中文與英文字元的頂線中線基線底線示意圖](../../origin/110-文本屬性/assets/images/vertical-align-img-002-159fe1.png)

因為圖片、表單控制項等元素預設也可能參與基線對齊，所以它們和文字放在同一行時，底部可能不會貼齊容器底部，而是留下與文字下沉空間相關的縫隙。

## 圖片、表單和文字垂直對齊

圖片、表單都屬於行內塊元素，預設的 `vertical-align` 是基線對齊。

![圖片與文字預設基線對齊的示意圖](../../origin/110-文本屬性/assets/images/vertical-align-img-003-2907f2.png)

可以給圖片或表單這些行內塊元素設定 `vertical-align: middle`，讓文字和圖片看起來垂直居中對齊。

```css
img {
  vertical-align: middle;
}

textarea {
  vertical-align: middle;
}
```

```html
<img src="./images/img.jpg" alt="">  pink老師是劉德華

<br>
<textarea name="" id="" cols="30" rows="10"></textarea> 請您留言
```

這裡的 `./images/img.jpg` 是教學範例路徑，用來示範 HTML 寫法。

## 圖片底側空白縫隙

圖片底側常會出現一個空白縫隙，原因是圖片作為行內塊元素時，預設會和文字基線對齊，而基線下方仍有一段保留空間。

![圖片底部因基線對齊留下空白縫隙的示意圖](../../origin/110-文本屬性/assets/images/vertical-align-img-004-7e24cb.png)

主要解決辦法有兩種。

### 方法一：設定 vertical-align

```css
img {
  vertical-align: middle;
}
```

也可以依需求使用：

```css
img {
  vertical-align: top;
}
```

或：

```css
img {
  vertical-align: bottom;
}
```

這些值會改變圖片參與該行排版時的對齊方式，避開預設基線對齊造成的縫隙。

### 方法二：把圖片轉成塊級元素

```css
div {
  border: 2px solid red;
}

img {
  display: block;
}
```

```html
<div>
  <img src="images/img.jpg" alt="">
</div>
```

當圖片變成塊級元素後，就不再以行內或行內塊方式參與基線對齊，因此底側縫隙也會消失。

## 生效條件與限制

`vertical-align` 不是一般 block 元素的垂直置中工具。

例如，如果你想讓一個區塊在父容器中垂直居中，對普通 `div` 寫 `vertical-align: middle` 通常不會達到目的。這時應考慮 Flexbox、Grid、定位或其他布局方式。

`vertical-align` 更適合處理同一行中的行內、行內塊元素對齊，例如圖片、表單控制項、文字之間的對齊。

## 常見錯誤

- **拿 `vertical-align` 控制 block 元素垂直居中**：它主要作用於行內、行內塊或表格儲存格相關場景，不能當作一般布局置中工具。
- **看不懂圖片底部縫隙原因**：圖片預設參與基線對齊，基線下方的保留空間會形成縫隙。
- **只改父元素卻沒改圖片本身**：解決圖片對齊問題時，通常要對 `img` 設定 `vertical-align` 或 `display`。
- **把有語意的圖片一律改成背景或偽元素**：圖片若是內容的一部分，仍應保留在 HTML 中，再用 CSS 處理對齊。

## 實務判斷準則

- 圖片或表單和文字同一行對不齊：優先檢查 `vertical-align`。
- 圖片底部出現縫隙：可設 `vertical-align: middle | top | bottom`，或 `display: block`。
- 普通區塊需要垂直置中：不要使用 `vertical-align`，改用布局方案。
- 如果圖片需要和文字同排，通常保留行內塊特性並調整 `vertical-align`；如果圖片獨立成塊，常可直接設 `display: block`。

## 重點整理

- `vertical-align` 常用於行內或行內塊元素的垂直對齊。
- 圖片、表單控制項和文字同排時，常會受到基線對齊影響。
- `vertical-align: middle` 可讓圖片或表單與文字看起來垂直居中。
- 圖片底側空白縫隙通常來自基線對齊。
- 解決圖片底側縫隙可用 `vertical-align` 或 `display: block`。
- `vertical-align` 不能當作普通 block 元素的垂直置中工具。

## 自我檢查

1. `vertical-align` 對普通 block 元素垂直置中是否有效？
2. 圖片底側空白縫隙和哪一種預設對齊方式有關？
3. 如果圖片要和文字同一行垂直居中，可以對圖片設定什麼？
4. 如果圖片獨立放在容器中，要消除底側縫隙，除了 `vertical-align` 還可以使用哪個屬性和值？
