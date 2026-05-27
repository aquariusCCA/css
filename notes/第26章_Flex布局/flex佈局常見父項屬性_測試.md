# Flex 佈局常見父項屬性

## 學習目標

讀完本章後，你應該能夠：

- 判斷哪些 Flex 屬性應該寫在父元素，也就是 flex container 上。
- 說明 `flex-direction` 如何改變主軸與側軸，並影響子元素排列方向。
- 使用 `justify-content` 控制主軸上的對齊與剩餘空間分配。
- 使用 `align-items` 控制單行子元素在側軸上的對齊方式。
- 使用 `flex-wrap` 決定子元素是否允許換行。
- 使用 `align-content` 控制多行在側軸上的整體排列。
- 判斷單行應使用 `align-items`，多行應使用 `align-content`。
- 使用 `flex-flow` 同時設定主軸方向與是否換行。

## 前置知識

學習本章前，建議先知道 HTML 的父子元素結構。例如一個 `div` 裡放多個子元素時，外層 `div` 是父元素，裡面的元素是子元素。

也需要知道基本 CSS selector 如何選到元素，以及 `width`、`height`、`margin`、`border` 會影響元素大小與容器中的可用空間。

補充說明：本章所有父項屬性都以 `display: flex` 為前提。父元素沒有成為 flex container 時，`flex-direction`、`justify-content`、`align-items`、`align-content`、`flex-wrap` 與 `flex-flow` 不會以 Flex 佈局模型安排子元素。

## 本章範圍

本章聚焦在 Flex 佈局中常見的父項屬性：

- `flex-direction`
- `justify-content`
- `align-items`
- `align-content`
- `flex-wrap`
- `flex-flow`

這些屬性共同處理一件事：父容器如何安排它的直接子元素。

本章會簡短提到 flex container、flex item、主軸、側軸、單行與多行，但不深入展開 flex item 自己的控制屬性，例如 `flex-grow`、`flex-shrink`、`flex-basis`、`order`、`align-self`。這些適合另開章節處理。

## 先看問題：為什麼子元素沒有照你想的方式排列？

假設頁面有三個小盒子：

```html
<div class="layout">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

如果只設定每個 `.item` 的尺寸與背景色，元素會先按照原本的 normal flow 排列。當你希望這些盒子在同一個容器裡橫向排列、置中、平均分散，或在空間不足時換到下一行，就需要讓父元素負責排版。

```css
.layout {
  display: flex;
  width: 500px;
  min-height: 160px;
  border: 1px solid #999;
}

.item {
  width: 100px;
  height: 80px;
  background: skyblue;
}
```

在這個範例中，`.layout` 是 flex container，三個 `.item` 是 flex items。本章要學的屬性大多寫在 `.layout` 上，因為它們控制的是父容器如何安排直接子元素，而不是單一子元素自己的外觀。

## 第一課：先決定主軸方向，才知道排列往哪裡走

### 問題情境

你想讓三個盒子從原本橫向排列改成直向排列。初學者常會直接找「垂直排列」的屬性，但在 Flex 裡，真正要先判斷的是主軸方向。

### 畫面觀察

在預設情況下，Flex 的主軸是水平方向，子元素會沿著主軸由左往右排列。側軸則與主軸垂直，通常是由上往下。

當 `flex-direction` 改變時，主軸會改變；主軸一變，側軸也會跟著改變。後面所有對齊屬性都要依照新的主軸與側軸判斷。

### 最小修改

把主軸改成直向：

```css
.layout {
  display: flex;
  flex-direction: column;
  width: 500px;
  min-height: 300px;
  border: 1px solid #999;
}

.item {
  width: 100px;
  height: 80px;
  background: skyblue;
}
```

### 結果解釋

`flex-direction: column` 會讓主軸改成由上往下，所以三個子元素不再水平排成一列，而是直向堆疊。

這個變化會連帶影響後續判斷：

- `justify-content` 控制主軸，所以此時主要影響垂直方向。
- `align-items` 控制側軸，所以此時主要影響水平方向。

### 誤判修正

不要把 `justify-content` 背成「水平對齊」，也不要把 `align-items` 背成「垂直對齊」。這只是在預設 `flex-direction: row` 下看起來像這樣。

比較穩定的判斷是：

1. 先看 `flex-direction` 決定主軸。
2. `justify-content` 看主軸。
3. `align-items` 看側軸。

### 小整理

| 值 | 主軸方向 | 子元素排列結果 |
|---|---|---|
| `row` | 水平方向，通常由左往右 | 橫向排列，預設值 |
| `row-reverse` | 水平方向反向 | 橫向反序排列 |
| `column` | 垂直方向，通常由上往下 | 直向排列 |
| `column-reverse` | 垂直方向反向 | 直向反序排列 |

補充說明：本章依來源範例，以一般水平書寫情境說明方向。若頁面使用其他書寫模式或方向設定，起點與終點的視覺位置可能不同。

## 第二課：主軸上多出來的空間要怎麼分配？

### 問題情境

父容器寬度是 `500px`，三個子元素各 `100px`，合計只佔 `300px`。剩下的 `200px` 要放在右邊、左右平均、項目中間，還是每個間隔都平均？這就是 `justify-content` 要解決的問題。

### 畫面觀察

在預設 `flex-direction: row` 下，主軸是水平方向。三個子元素沿著水平方向排列，剩餘空間也存在於水平方向。

預設情況通常等同於靠主軸起點排列，所以多出的空間會留在後方。

### 最小修改

讓整組子元素在主軸上置中：

```css
.layout {
  display: flex;
  justify-content: center;
  width: 500px;
  border: 1px solid #999;
}

.item {
  width: 100px;
  height: 80px;
  background: skyblue;
}
```

### 結果解釋

`justify-content: center` 會把所有 flex items 視為一組，將這組項目放在主軸中央。因為目前主軸是水平方向，所以畫面看起來是水平置中。

如果把主軸改成 `column`，同一條 `justify-content: center` 就會改成處理垂直方向上的置中。

### 再看一個間距問題

如果希望第一個盒子貼近起點、最後一個盒子貼近終點，中間空間平均分配，可以改用：

```css
.layout {
  display: flex;
  justify-content: space-between;
  width: 500px;
  border: 1px solid #999;
}
```

`space-between` 會把剩餘空間放在項目之間，兩端不會額外保留同樣的外側間距。

### 誤判修正

`justify-content` 分配的是主軸上的剩餘空間。如果父容器沒有多餘空間，或子元素已經佔滿主軸，畫面變化就不明顯。

`space-around` 與 `space-evenly` 也容易混淆。`space-around` 是每個項目兩側都有空間，兩個項目中間會由相鄰兩側空間相加；`space-evenly` 則讓兩端與項目之間的所有間隔都相等。

### 小整理

| 值 | 主軸上的效果 |
|---|---|
| `flex-start` | 靠主軸起點排列，預設值 |
| `flex-end` | 靠主軸終點排列 |
| `center` | 整組項目置中 |
| `space-between` | 第一個在起點，最後一個在終點，中間平均分配 |
| `space-around` | 每個項目兩側分配空間，項目之間通常比兩端更寬 |
| `space-evenly` | 所有間隔都相等 |

## 第三課：單行時，側軸上的位置要怎麼控制？

### 問題情境

三個盒子已經水平排成一列，但父容器高度比盒子高。你想讓它們靠上、靠下、垂直置中，或在沒有設定高度時撐滿父容器高度。這時候要控制的是側軸。

### 畫面觀察

在預設 `flex-direction: row` 下：

- 主軸是水平方向。
- 側軸是垂直方向。
- `align-items` 控制每一個 flex item 在側軸上的對齊方式。

### 最小修改

讓單行子元素在側軸置中：

```css
.layout {
  display: flex;
  align-items: center;
  width: 500px;
  height: 200px;
  border: 1px solid #999;
}

.item {
  width: 100px;
  height: 80px;
  background: skyblue;
}
```

### 結果解釋

目前主軸是 `row`，所以側軸是垂直方向。`align-items: center` 會讓三個盒子在父容器高度中垂直置中。

來源範例也展示了 `stretch` 的情況：如果子元素沒有設定高度，預設 `align-items: stretch` 會讓子元素沿著側軸拉伸，看起來和父容器一樣高。

### 對照範例：為什麼 `stretch` 有時看不出效果？

```css
.layout {
  display: flex;
  align-items: stretch;
  width: 500px;
  height: 200px;
  border: 1px solid #999;
}

.item {
  width: 100px;
  background: skyblue;
}
```

這裡 `.item` 沒有固定高度，因此 `stretch` 可以把它們沿著側軸拉高。

如果又替 `.item` 加上固定高度：

```css
.item {
  width: 100px;
  height: 80px;
  background: skyblue;
}
```

子元素已經有自己的高度，`stretch` 的拉伸效果就不會像沒有高度時那麼明顯。

### 誤判修正

`align-items` 處理的是單行 flex items 在側軸上的對齊。若子元素已經換成多行，而且你要控制多行整體在側軸上的分布，應該改看 `align-content`。

### 小整理

| 值 | 單行側軸上的效果 |
|---|---|
| `stretch` | 預設值，項目沒有固定側軸尺寸時會拉伸填滿 |
| `flex-start` | 靠側軸起點 |
| `flex-end` | 靠側軸終點 |
| `center` | 側軸置中 |
| `baseline` | 依第一行文字基線對齊 |

## 第四課：盒子太多時，要擠在同一行還是換行？

### 問題情境

父容器寬度是 `600px`，每個子元素寬 `150px`，再加上間距後，一行可能放不下五個子元素。你可能以為它們會自然換行，但 Flex 預設會盡量把項目排在同一條線上。

### 畫面觀察

Flex 容器預設是：

```css
flex-wrap: nowrap;
```

也就是所有 flex items 預設都排在同一條 flex line 上。來源資料說明，當空間不足時，子元素可能會被壓縮以塞進父容器。

### 最小修改

允許子元素在主軸空間不足時換行：

```css
.layout {
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  min-height: 260px;
  border: 1px solid #999;
}

.item {
  width: 150px;
  height: 80px;
  margin: 10px;
  background: purple;
  color: white;
}
```

### 結果解釋

`flex-wrap: wrap` 允許 flex items 在主軸空間不足時換到下一行。這裡的「下一行」會依目前主軸方向而變：

- `flex-direction: row` 時，通常看起來是往下增加新的一排。
- `flex-direction: column` 時，視覺上可能變成產生新的欄。

### 誤判修正

`flex-wrap` 只決定能不能換行，不負責決定多行之間如何分配側軸空間。當畫面已經形成多行後，要控制多行在側軸上的排列，才會使用 `align-content`。

補充說明：來源提到不換行時子元素可能被壓縮，這和 flex item 的縮放能力有關，尤其是 `flex-shrink`。本章只把它當成理解 `flex-wrap` 的背景，不深入展開子項目縮放規則。

### 小整理

| 值 | 效果 |
|---|---|
| `nowrap` | 不換行，預設值 |
| `wrap` | 空間不足時換行 |
| `wrap-reverse` | 換行，但側軸堆疊方向反轉 |

## 第五課：已經換成多行後，行與行之間要怎麼排？

### 問題情境

你已經用 `flex-wrap: wrap` 讓子元素分成多行。現在父容器高度很高，多行內容只佔其中一部分。你想讓多行靠上、靠下、置中，或把行與行之間的空間平均分配。

這時候要使用 `align-content`。

### 畫面觀察

`align-content` 控制的是多條 flex lines 在側軸上的排列方式。它不是控制單一子元素，也不是控制單行中的項目對齊。

要讓 `align-content` 明顯生效，通常需要同時具備三個條件：

- 父元素是 flex container。
- 子元素有換行，也就是 `flex-wrap` 不是 `nowrap`。
- 父容器在側軸方向上有可分配的剩餘空間。

### 最小修改

讓多行內容靠側軸起點排列：

```css
.layout {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 600px;
  height: 360px;
  border: 1px solid #999;
}

.item {
  width: 150px;
  height: 80px;
  margin: 10px;
  background: purple;
  color: white;
}
```

### 結果解釋

`flex-wrap: wrap` 先讓項目形成多行。接著 `align-content: flex-start` 把這些行視為一組，讓多行靠側軸起點排列。

如果改成 `center`，多行整體會在側軸置中；如果改成 `space-between`，第一行與最後一行會貼近側軸兩端，中間行平均分配剩餘空間。

### 誤判修正

`align-content` 在單行時通常看不出效果。若畫面只有一行 flex items，卻一直調整 `align-content`，畫面不變是合理結果。此時應回頭判斷要控制的是不是單行側軸對齊，也就是 `align-items`。

### 小整理

| 值 | 多行側軸上的效果 |
|---|---|
| `stretch` | 預設值，多行拉伸佔滿側軸空間 |
| `flex-start` | 多行靠側軸起點 |
| `flex-end` | 多行靠側軸終點 |
| `center` | 多行整體置中 |
| `space-between` | 第一行與最後一行貼近兩端，中間平均分配 |
| `space-around` | 每一行兩側分配空間 |
| `space-evenly` | 所有行間距與兩端間距相等 |

## 第六課：同時設定方向與換行時，用 `flex-flow` 簡化

### 問題情境

當你已經知道容器要橫向排列，並且允許換行時，可能會寫：

```css
.layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
```

這樣是正確的。不過如果只是同時設定主軸方向與是否換行，可以用 `flex-flow` 簡寫。

### 畫面觀察

這個畫面的關鍵條件有兩個：子元素要沿著哪個方向排列，以及空間不足時是否允許換行。`flex-direction` 處理第一個條件，`flex-wrap` 處理第二個條件。

當這兩個設定經常一起出現時，分開寫可以清楚表達意圖；使用 `flex-flow` 則可以把同一組排版意圖合併在一條宣告中。

### 最小修改

```css
.layout {
  display: flex;
  flex-flow: row wrap;
  width: 600px;
  min-height: 260px;
  border: 1px solid #999;
}
```

### 結果解釋

`flex-flow` 是 `flex-direction` 與 `flex-wrap` 的複合屬性。來源資料指出，這兩個值沒有順序要求；實務上常見寫法是先寫方向，再寫換行，例如：

```css
flex-flow: row wrap;
```

### 誤判修正

`flex-flow` 不包含 `justify-content`、`align-items` 或 `align-content`。它只處理兩件事：主軸方向與是否換行。

### 小整理

| 寫法 | 等同於 |
|---|---|
| `flex-flow: row wrap;` | `flex-direction: row; flex-wrap: wrap;` |
| `flex-flow: column nowrap;` | `flex-direction: column; flex-wrap: nowrap;` |

## 整合範例：先判斷主軸，再決定對齊

這個範例要解決的畫面問題是：父容器中有多個卡片，希望它們橫向排列，空間不足時換行，多行靠上排列，每一行中的項目從左側開始。

```html
<section class="cards">
  <article class="card">A</article>
  <article class="card">B</article>
  <article class="card">C</article>
  <article class="card">D</article>
  <article class="card">E</article>
</section>
```

```css
.cards {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: stretch;
  width: 520px;
  height: 320px;
  border: 1px solid #999;
}

.card {
  width: 140px;
  min-height: 80px;
  margin: 10px;
  background: skyblue;
}
```

範例拆解：

- 作用對象：`.cards` 是 flex container，五個 `.card` 是直接子元素。
- 主要規則：`flex-flow: row wrap` 決定主軸是橫向，並允許換行。
- 修改前狀態：若沒有 `flex-wrap: wrap`，項目會盡量留在同一條 flex line 上。
- 修改後結果：空間不足時會形成多行，`align-content: flex-start` 讓多行整體靠側軸起點。
- 主軸結果：`justify-content: flex-start` 讓每一行內的項目從主軸起點排列。
- 單行內項目結果：`align-items: stretch` 控制每一行中的項目在側軸上的拉伸或對齊。
- 常見誤解：如果只有一行，`align-content` 不是主要控制點；如果沒有換行，也不會形成多條 flex lines 讓 `align-content` 分配。

## `align-items` 與 `align-content` 怎麼選？

來源資料最後給出一個重要判斷：單行找 `align-items`，多行找 `align-content`。

可以整理成下面的判斷流程：

| 你要控制的畫面 | 優先使用 |
|---|---|
| 一行子元素在側軸上的位置 | `align-items` |
| 多行整體在側軸上的位置或行距分配 | `align-content` |
| 主軸上的對齊與間距 | `justify-content` |
| 子元素是否允許換行 | `flex-wrap` |
| 主軸方向 | `flex-direction` |

如果畫面沒有變化，可以依序檢查：

1. 父元素是否有 `display: flex`。
2. 屬性是否寫在父元素，而不是誤寫到子元素。
3. 目前主軸方向是 `row` 還是 `column`。
4. 目前是單行還是多行。
5. 父容器在該軸向上是否真的有剩餘空間。

## 常見誤解與修正方式

### 誤解一：`justify-content` 就是水平置中

錯誤原因是只記住預設 `row` 的畫面結果，沒有回到主軸概念。

正確修正方式是先看 `flex-direction`。`justify-content` 永遠控制主軸；主軸若是垂直，`justify-content` 就會影響垂直方向。

### 誤解二：`align-items` 就是垂直置中

錯誤原因同樣是把預設 `row` 的結果當成固定規則。

正確修正方式是記住 `align-items` 控制側軸。當 `flex-direction: column` 時，側軸通常變成水平方向。

### 誤解三：單行時調整 `align-content`

錯誤原因是沒有分清楚「單行 item 對齊」與「多行 line 分配」。

正確修正方式是單行先看 `align-items`。只有發生換行，並且要控制多行在側軸上的排列時，才看 `align-content`。

### 誤解四：忘記設定 `flex-wrap`

錯誤原因是以為子元素寬度加總超過父容器就一定會換行。

正確修正方式是記住 Flex 預設是 `nowrap`。要允許換行，必須設定 `flex-wrap: wrap`，或使用包含 `wrap` 的 `flex-flow`。

### 誤解五：把父項屬性寫在子元素上

錯誤原因是看到「控制子元素排列」就誤以為屬性要寫在子元素本身。

正確修正方式是回到角色判斷。本章這些屬性控制的是父容器如何安排直接子元素，因此應寫在 flex container 上。

## 實務使用情境

Flex 父項屬性常用在下列任務：

- 導覽列：讓選單項目水平排列，並使用 `justify-content` 控制靠左、靠右或分散。
- 卡片列表：使用 `flex-wrap: wrap` 讓卡片在空間不足時換行。
- 工具列：使用 `align-items: center` 讓按鈕、文字與圖示在同一列中對齊。
- 表單列：讓 label、input 與按鈕在同一個容器內對齊。
- 簡單置中：在已知父容器高度時，搭配 `justify-content` 與 `align-items` 做主軸與側軸置中。

實務上常見的判斷順序是：

1. 先確認父元素要不要成為 flex container。
2. 再決定主軸方向。
3. 接著決定是否允許換行。
4. 最後才處理主軸與側軸對齊。

## 自我檢查

1. 如果 `.container` 設定 `display: flex`，但沒有設定 `flex-direction`，子元素預設會沿著哪個方向排列？
2. 當 `flex-direction: column` 時，`justify-content: center` 主要會讓項目在水平還是垂直方向置中？
3. 有五個子元素，一行放不下，但你希望它們換到下一行，應該在父元素設定哪個屬性？
4. 畫面只有一行 flex items，想讓它們在側軸置中，應該用 `align-items` 還是 `align-content`？
5. 畫面已經換成多行，想讓多行整體貼近側軸起點，應該設定哪個屬性與值？
6. `flex-flow: row wrap;` 等同於哪兩個屬性設定？
7. 找錯題：下面這段 CSS 想讓多行靠上排列，但畫面沒有多行，哪個設定可能缺少？

```css
.list {
  display: flex;
  align-content: flex-start;
}
```

## 小結

Flex 父項屬性的核心不是背單一屬性，而是先看父子關係與軸線。父元素設定 `display: flex` 後，直接子元素才會進入 Flex 佈局；`flex-direction` 決定主軸，`justify-content` 控制主軸空間，`align-items` 控制單行側軸對齊，`flex-wrap` 決定是否換行，`align-content` 控制多行側軸分配，`flex-flow` 則把方向與換行合併成簡寫。

遇到 Flex 對齊問題時，先問自己三件事：誰是 flex container？主軸是哪個方向？目前是單行還是多行？這三個答案通常能快速定位應該使用哪個父項屬性。

## 來源與補充說明

本章主要根據 `origin\第26章_Flex布局\flex佈局常見父項屬性.md` 整理。

來源直接支持的內容包括：

- Flex 佈局中常見的六個父項屬性：`flex-direction`、`justify-content`、`align-items`、`align-content`、`flex-wrap`、`flex-flow`。
- 主軸與側軸會隨 `flex-direction` 改變。
- `justify-content` 控制主軸上的子元素排列方式。
- `align-items` 控制單行情況下側軸上的子元素排列方式。
- `align-content` 用於換行後的多行情況，單行下效果不明顯。
- `flex-wrap` 控制子元素是否換行。
- `flex-flow` 是 `flex-direction` 與 `flex-wrap` 的複合屬性。
- `align-items` 與 `align-content` 的判斷重點：單行看 `align-items`，多行看 `align-content`。

補充說明：

- 本章補充了 `display: flex` 是父項屬性生效的前提，這是理解來源範例所需的背景。
- 本章補充了「主軸、側軸、單行、多行、剩餘空間」的判斷流程，用來幫助初學者從畫面問題回推應使用的屬性。
- 來源提到不換行時子元素可能被壓縮，本章只作為 `flex-wrap` 的背景說明；`flex-shrink` 等子項目縮放規則適合另開章節。
- 來源範例中出現 `align-self`，它是子項目個別對齊屬性，不屬於本章父項屬性主線，因此本章未深入展開。

待確認：來源圖片可作為視覺輔助，但本次筆記未重新嵌入圖片；若後續要製作圖文版，需要確認圖片相對路徑與輸出目錄中的資源位置。
