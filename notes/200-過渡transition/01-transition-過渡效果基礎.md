---
source_atomic:
  - atomic/200-過渡transition/01-transition-基本概念與語法.md
  - atomic/200-過渡transition/02-transition-hover-過渡範例.md
topics: [transition, 過渡效果, hover 互動, 運動曲線, 可過渡屬性]
summary: "說明 transition 如何讓狀態變化平滑化，並整理語法欄位、hover 搭配與常見錯誤。"
---

# transition 過渡效果基礎

## 學習目標

讀完這篇筆記後，你應該能夠：

- 說明 `transition` 的用途，以及它和「直接改變樣式」的差異。
- 看懂 `transition: 屬性 時間 運動曲線 延遲;` 的四個欄位。
- 使用 `:hover` 搭配 `transition` 製作平滑的互動效果。
- 判斷 `transition` 應該加在哪個選擇器上。
- 避免時間漏寫單位、濫用 `all`、把過渡規則寫錯位置等常見錯誤。

## 使用情境

當元素從一種樣式變成另一種樣式時，瀏覽器預設會立刻切換。例如滑鼠移到卡片上，寬度、背景色或位置突然改變，畫面會顯得生硬。

`transition` 可以讓這種「狀態切換」變成一段平滑變化。它常用在 hover 效果、按鈕互動、卡片展開、顏色變化、尺寸變化等簡單動態效果中。

## 一句話理解

`transition` 負責描述元素從舊樣式變成新樣式時，要用多長時間、用什麼速度節奏完成變化。

它不負責指定「最後要變成什麼樣子」。最後的樣式通常寫在另一個狀態裡，例如 `:hover`。

## 基本語法

```css
selector {
  transition: 要過渡的屬性 花費時間 運動曲線 何時開始;
}
```

四個欄位可以這樣理解：

| 欄位 | 作用 | 範例 |
| --- | --- | --- |
| 要過渡的屬性 | 指定哪些 CSS 屬性要平滑變化 | `width`、`height`、`background-color`、`all` |
| 花費時間 | 指定過渡需要多久完成，必須帶單位 | `0.5s`、`300ms` |
| 運動曲線 | 控制速度變化的節奏，預設是 `ease` | `ease`、`linear`、`ease-in` |
| 何時開始 | 指定延遲多久後才開始，預設是 `0s` | `0s`、`0.2s` |

最常見的寫法會至少指定屬性與時間：

```css
.box {
  transition: width 0.5s;
}
```

這代表 `.box` 的 `width` 如果發生變化，會花 `0.5s` 平滑完成。

## 運動曲線

運動曲線控制的是變化過程中的快慢節奏，不是變化的終點。

![transition 常見運動曲線示意圖](../../origin/200-過渡transition/assets/images/transition-transition-img-001-7a856b.jpg)

例如：

- `ease`：預設值，速度通常先慢、加速，再逐漸放慢，常用於一般互動。
- `linear`：全程等速，適合需要穩定速度的效果。
- `ease-in`：一開始較慢，後面加速。
- `ease-out`：一開始較快，後面放慢。

初學時可以先使用預設的 `ease`，等需要特定節奏時再調整。

## hover 過渡範例

下面的例子讓一個 `div` 在滑鼠移入時放大並改變背景色：

```css
div {
  width: 200px;
  height: 100px;
  background-color: pink;
  transition: all 0.5s;
}

div:hover {
  width: 400px;
  height: 200px;
  background-color: red;
}
```

HTML 結構很簡單：

```html
<body>
  <div></div>
</body>
```

## 範例拆解

一般狀態的 `div` 決定元素一開始長什麼樣子：

```css
div {
  width: 200px;
  height: 100px;
  background-color: pink;
  transition: all 0.5s;
}
```

- `width: 200px;`：初始寬度是 `200px`。
- `height: 100px;`：初始高度是 `100px`。
- `background-color: pink;`：初始背景色是粉紅色。
- `transition: all 0.5s;`：所有可過渡的屬性變化都花 `0.5s` 完成。

hover 狀態則決定滑鼠移入後的樣式：

```css
div:hover {
  width: 400px;
  height: 200px;
  background-color: red;
}
```

當滑鼠移入時，`width`、`height` 和 `background-color` 都發生變化。因為一般狀態的 `div` 已經設定了 `transition: all 0.5s;`，瀏覽器會把這些變化做成平滑過渡。

這裡可以記住一個口訣：

> 誰做過渡，給誰加。

也就是說，哪個元素要發生過渡，就把 `transition` 寫在那個元素本身上。通常會寫在一般狀態，而不是只寫在 `:hover` 狀態。

## 多個屬性的寫法

如果只想讓指定屬性過渡，可以不要使用 `all`：

```css
div {
  transition: width 0.5s, height 0.5s, background-color 0.5s;
}
```

這種寫法比較明確，適合正式專案中使用。因為 `all` 會讓所有可過渡的屬性都參與變化，有時可能讓不想動畫的屬性也被套用過渡效果。

## 常見錯誤

### 把 transition 只寫在 :hover 上

```css
div:hover {
  width: 400px;
  transition: width 0.5s;
}
```

這樣滑鼠移入時可能有過渡，但滑鼠移出、元素回到原本狀態時，過渡規則不一定能完整套用，效果容易變得不一致。

建議把 `transition` 寫在一般狀態：

```css
div {
  width: 200px;
  transition: width 0.5s;
}

div:hover {
  width: 400px;
}
```

### 時間漏寫單位

```css
div {
  transition: width 0.5;
}
```

`0.5` 沒有說明是秒還是毫秒，因此不是有效時間值。應改成：

```css
div {
  transition: width 0.5s;
}
```

或：

```css
div {
  transition: width 500ms;
}
```

### 過度依賴 all

```css
div {
  transition: all 0.5s;
}
```

`all` 很方便，適合入門示範；但在實務上，它可能讓不需要動畫的屬性也加入過渡，增加除錯成本。

若你已經知道只會改變寬度與背景色，可以寫得更明確：

```css
div {
  transition: width 0.5s, background-color 0.5s;
}
```

### 期待所有 CSS 屬性都能過渡

`transition` 只能作用在可以被插值計算的屬性上，例如尺寸、顏色、透明度、位置等。某些離散狀態，例如 `display: none` 到 `display: block`，不會像寬度或顏色一樣平滑過渡。

如果效果沒有出現，除了檢查語法，也要確認該屬性本身是否適合做過渡。

## 實務判斷準則

- 簡單的狀態變化，例如 hover、focus、active，優先考慮 `transition`。
- 需要多段關鍵影格、循環播放或複雜動作時，再考慮 `animation`。
- 入門示範可用 `transition: all 0.5s;`，正式開發中建議指定明確屬性。
- `transition` 通常寫在元素的一般狀態，讓進入與離開狀態都能平滑。
- 時間值一定要帶單位，例如 `0.5s` 或 `500ms`。

## 重點整理

- `transition` 讓元素從一個樣式狀態平滑變成另一個樣式狀態。
- 基本語法是 `transition: 屬性 時間 運動曲線 延遲;`。
- `transition` 常和 `:hover` 搭配：一般狀態寫過渡規則，`:hover` 寫變化後的樣式。
- 「誰做過渡，給誰加」：要變化的元素本身應設定 `transition`。
- `all` 可以讓所有可過渡屬性套用效果，但實務上更建議列出明確屬性。

## 自我檢查

1. `transition: width 0.5s ease 0s;` 裡的四個值分別代表什麼？
2. 為什麼通常建議把 `transition` 寫在一般狀態，而不是只寫在 `:hover`？
3. 如果只想讓寬度和背景色產生過渡，應該如何改寫 `transition: all 0.5s;`？
4. `transition: width 0.5;` 為什麼是錯誤寫法？
5. 為什麼 `display: none` 到 `display: block` 不適合期待成平滑過渡？
