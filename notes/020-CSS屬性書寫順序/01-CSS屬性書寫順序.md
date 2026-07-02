---
source_atomic:
  - atomic/020-CSS屬性書寫順序/01-css屬性書寫順序.md
---

# CSS 屬性書寫順序：讓樣式更容易閱讀與維護

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解 CSS 屬性書寫順序的目的。
- 依照用途把同一個規則中的屬性分組排列。
- 分辨「書寫順序」與「CSS 生效規則」不是同一件事。
- 看懂並整理一段較混亂的 CSS 宣告。

## 問題情境

當一個 selector 裡面只有兩三個屬性時，書寫順序看起來影響不大：

```css
.title {
  color: #333;
  font-size: 24px;
}
```

但在實際開發中，一個元件常常同時包含顯示模式、定位、寬高、間距、背景、文字、陰影與互動樣式。如果這些屬性隨手插入，日後要找 `display`、`width`、`color` 或 `box-shadow` 時，就必須一行一行掃過。

CSS 屬性書寫順序的目的，就是讓樣式像整理好的工具箱：同類型的屬性放在一起，讀者可以更快找到自己要看的部分。

## 一句話理解

CSS 屬性可以依照「先版面結構、再盒子自身、再文字內容、最後裝飾與其他效果」的順序排列。

這個順序不是瀏覽器規定的語法，也不會直接改變屬性是否生效；它是一種讓 CSS 更好閱讀、更好維護的撰寫習慣。

## 屬性可以怎麼分組

同一個 CSS 規則內，常見的屬性可以先分成幾個大類：

1. 布局定位屬性
2. 自身屬性
3. 文本屬性
4. 其他屬性

這些分類不一定是唯一標準，但它提供一個清楚的閱讀方向：先看元素怎麼參與版面，再看它本身的尺寸與盒模型，接著看文字，最後看裝飾和互動效果。

## 布局定位屬性

布局定位屬性會影響元素如何出現在版面中，通常建議放在最前面。

常見屬性包含：

- `display`
- `position`
- `float`
- `clear`
- `visibility`
- `overflow`

其中 `display` 常被放在第一個，因為它決定元素的顯示模式，例如 block、inline、flex、grid。讀 CSS 時先看到 `display`，就能先理解這個元素大致如何參與排版。

例如：

```css
.card {
  display: block;
  position: relative;
  overflow: hidden;
}
```

這段先告訴讀者：`.card` 是一個區塊元素，可能作為內部絕對定位元素的參考點，而且超出範圍的內容會被裁切。

## 自身屬性

自身屬性描述元素自己的尺寸、間距、邊框與背景。

常見屬性包含：

- `width`
- `height`
- `margin`
- `padding`
- `border`
- `background`

這一組通常接在布局定位屬性後面，因為讀者先知道元素如何排版，再看它自己占多大、內外距是多少、外觀底色或邊框是什麼。

例如：

```css
.card {
  width: 320px;
  margin: 24px auto;
  padding: 16px;
  border: 1px solid #ddd;
  background: #fff;
}
```

這段可以快速讀出：卡片寬度固定、水平置中、有內距、有邊框，背景是白色。

## 文本屬性

文本屬性控制文字的顏色、字體、對齊與換行等行為。

常見屬性包含：

- `color`
- `font`
- `text-decoration`
- `text-align`
- `vertical-align`
- `white-space`
- `word-break`

如果一個元素主要承載文字，這組屬性會決定文字是否容易閱讀。例如：

```css
.card-title {
  color: #222;
  font: 700 20px/1.4 Arial, sans-serif;
  text-align: left;
  word-break: break-word;
}
```

把文本屬性集中在一起，可以讓讀者不用在整段規則中來回尋找文字相關設定。

## 其他屬性

其他屬性通常包含內容生成、互動狀態、圓角、陰影或特殊視覺效果。

常見屬性包含：

- `content`
- `cursor`
- `border-radius`
- `box-shadow`
- `text-shadow`
- `background: linear-gradient(...);`

有些屬性可能會依團隊習慣被歸入不同分類。例如 `border-radius` 與 `box-shadow` 常被放在裝飾效果區；`background` 如果只是背景色，可能放在自身屬性；如果是漸層或複雜視覺效果，也可以放在靠後的位置，讓主要結構先被讀到。

## 範例：排序前與排序後

下面是一段未整理的 CSS：

```css
.card {
  color: #333;
  padding: 16px;
  display: block;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  width: 320px;
  overflow: hidden;
  font: 16px/1.6 Arial, sans-serif;
  margin: 24px auto;
  border-radius: 8px;
  background: #fff;
}
```

這段 CSS 可以正常運作，但閱讀時需要在不同位置尋找同類屬性。整理後可以改成：

```css
.card {
  display: block;
  overflow: hidden;

  width: 320px;
  margin: 24px auto;
  padding: 16px;
  background: #fff;

  color: #333;
  font: 16px/1.6 Arial, sans-serif;

  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}
```

整理後的閱讀路徑更清楚：

1. 先看 `display`、`overflow`，知道它如何參與版面與處理溢出。
2. 再看 `width`、`margin`、`padding`、`background`，知道卡片本身的尺寸、間距與背景。
3. 接著看 `color`、`font`，理解文字呈現。
4. 最後看 `border-radius`、`box-shadow`，理解圓角與陰影等裝飾效果。

## 實務判斷準則

實務上不需要把每個屬性的位置背成唯一答案，重點是維持一致且容易掃讀。

可以用這幾個問題判斷屬性該放在哪裡：

- 這個屬性會影響元素怎麼排版嗎？例如 `display`、`position`、`overflow`，放前面。
- 這個屬性描述元素自己的尺寸、間距或背景嗎？例如 `width`、`margin`、`padding`、`background`，放在自身屬性區。
- 這個屬性控制文字嗎？例如 `color`、`font`、`text-align`，放在文本屬性區。
- 這個屬性主要是裝飾或互動效果嗎？例如 `cursor`、`border-radius`、`box-shadow`，放在後面。

如果團隊已有 CSS 屬性排序規範，優先遵守團隊規範；如果沒有，使用固定的分組方式就已經能明顯改善可讀性。

## 常見錯誤

### 誤以為屬性排序會改變 CSS 優先級

屬性書寫順序主要是維護習慣，不是選擇器優先級規則。

下面兩段在沒有重複屬性的情況下，視覺結果通常相同：

```css
.box {
  width: 100px;
  color: red;
}
```

```css
.box {
  color: red;
  width: 100px;
}
```

真正需要注意的是「同一個規則中重複宣告同一個屬性」時，後面的同名屬性會覆蓋前面的同名屬性：

```css
.box {
  color: red;
  color: blue;
}
```

這裡最後生效的是 `color: blue;`。這是同名屬性覆蓋，不是因為文本屬性被放在比較後面。

### 把排序規範背成死規則

屬性分類是為了讓人更容易讀懂 CSS，不是為了讓每段程式碼看起來完全一樣。有些屬性本來就可能跨分類，例如 `background` 可以是基本背景色，也可以是複雜漸層效果。

比較好的做法是保持同一份專案內的習慣一致，而不是為了追求絕對分類，讓修改 CSS 變得卡手。

### 只排序，不分段

當屬性很多時，只調整順序仍然可能不好讀。可以在不同分類之間加入空行，把視覺結構拉開：

```css
.button {
  display: inline-block;

  padding: 8px 16px;
  border: 0;
  background: #2563eb;

  color: #fff;
  font: 600 14px/1.4 Arial, sans-serif;

  cursor: pointer;
  border-radius: 4px;
}
```

空行不是必要語法，但能幫助讀者快速辨識屬性群組。

## 重點整理

- CSS 屬性書寫順序是為了提高可讀性與維護性。
- 常見順序可以是：布局定位屬性 -> 自身屬性 -> 文本屬性 -> 其他屬性。
- `display` 常放在前面，因為它影響元素的顯示模式與版面角色。
- 屬性排序不等於 CSS 優先級，不會直接改變不同選擇器之間的勝負。
- 團隊規範比個人偏好更重要；沒有團隊規範時，至少保持同一專案內一致。

## 自我檢查

1. 為什麼通常會把 `display` 放在同一個 CSS 規則的前面？
2. `width`、`margin`、`padding`、`border` 比較適合放在哪一類屬性中？
3. `color`、`font`、`text-align` 這類屬性共同控制什麼？
4. 如果同一段 CSS 中先寫 `color: red;`，後面又寫 `color: blue;`，最後會是哪個顏色生效？這和屬性排序規範有什麼不同？
5. 請把下面這段 CSS 依照「布局定位 -> 自身 -> 文本 -> 其他」重新排序：

```css
.badge {
  color: #fff;
  border-radius: 999px;
  display: inline-block;
  padding: 4px 10px;
  background: #16a34a;
  font: 600 12px/1 Arial, sans-serif;
}
```
