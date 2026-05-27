# Flex 佈局常見父項屬性

## 學習目標

讀完本章後，你應該能夠：

- 判斷 Flex 佈局中哪些屬性要寫在父元素，也就是 flex container 上。
- 說明 `flex-direction` 如何改變主軸與側軸，並影響子元素排列方向。
- 使用 `justify-content` 控制子元素在主軸上的對齊與剩餘空間分配。
- 使用 `align-items` 控制單行子元素在側軸上的對齊方式。
- 使用 `flex-wrap` 決定子元素是否允許換行。
- 使用 `align-content` 控制多行子元素在側軸上的整體排列。
- 判斷什麼時候應該用 `align-items`，什麼時候應該用 `align-content`。
- 用 `flex-flow` 簡寫 `flex-direction` 與 `flex-wrap`。

## 前置知識

學習本章前，建議先知道：

- HTML 的父子元素結構，例如一個 `div` 裡面放多個子元素。
- CSS selector 如何選到父元素與子元素。
- `width`、`height`、`margin`、`border` 會影響盒子的大小與可用空間。
- `display: flex` 會讓一個元素成為 Flex 容器，容器的直接子元素會成為 flex items。

## 本章範圍

本章聚焦在 Flex 佈局中「寫在父元素上的常見屬性」：

- `flex-direction`
- `justify-content`
- `align-items`
- `align-content`
- `flex-wrap`
- `flex-flow`

本章會簡短提到主軸、側軸、單行、多行與父子元素角色，但不深入展開 flex item 的個別控制，例如 `flex-grow`、`flex-shrink`、`flex-basis`、`order`、`align-self`。這些適合另開章節處理。

## 先看問題：為什麼盒子沒有照你想的方向排列？

假設畫面中有三個小盒子：

```html
<div class="layout">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

如果你只設定每個 `.item` 的尺寸與背景色，這些元素會依照原本的 normal flow 排列。當你希望它們在同一個父容器中水平排列、置中、平均分散，或在空間不夠時換行，就需要先讓父元素成為 Flex 容器。

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

這裡最重要的觀念不是「哪個值可以背起來」，而是先分清楚角色：

- `.layout` 是父元素，也是 flex container。
- `.item` 是直接子元素，也是 flex item。
- 本章的屬性大多寫在 `.layout` 上，因為它們控制的是「父容器如何安排直接子元素」。

補充說明：`display: flex` 是使用本章父項屬性的前提。若父元素沒有成為 flex container，像 `justify-content`、`align-items`、`flex-wrap` 這些 Flex 佈局效果就不會照 Flex 模型運作。

## 第一課：先決定主軸方向，才知道什麼叫置中

### 問題情境

你想讓三個盒子改成直向排列，於是直覺上可能會先找「垂直排列」或「水平置中」的屬性。但在 Flex 佈局中，排列方向不是先從「水平」或「垂直」背起，而是先看主軸。

### 畫面觀察

在預設情況下，Flex 的主軸是由左往右，側軸是由上往下。子元素會沿著主軸排列，所以三個 `.item` 會先排成一列。

當 `flex-direction` 改變時，主軸方向會改變；主軸一變，側軸也會跟著變成另一個方向。這會影響後面所有對齊屬性的判斷。

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

`flex-direction: column` 會把主軸改成由上往下，所以三個子元素不再水平排成一列，而是直向堆疊。

這時候要特別注意：

- 主軸已經變成垂直方向。
- 側軸變成水平方向。
- 後面使用 `justify-content` 時，控制的是垂直方向。
- 後面使用 `align-items` 時，控制的是水平方向。

### 誤判修正

初學者常把 `justify-content` 永遠理解成「水平對齊」，把 `align-items` 永遠理解成「垂直對齊」。這只在預設 `flex-direction: row` 時大致符合畫面感受。

比較穩定的記法是：

- `justify-content` 看主軸。
- `align-items` 看側軸。
- 主軸由 `flex-direction` 決定。

### 小整理

`flex-direction` 常見值如下：

| 值 | 主軸方向 | 子元素排列結果 |
|---|---|---|
| `row` | 水平方向，預設由左往右 | 橫向排列，這是預設值 |
| `row-reverse` | 水平方向反向 | 橫向反序排列 |
| `column` | 垂直方向，預設由上往下 | 直向排列 |
| `column-reverse` | 垂直方向反向 | 直向反序排列 |

補充說明：在不同書寫模式或方向設定下，起點與終點的視覺位置可能不同。本章為了符合來源範例，主要以一般水平書寫情境說明。

## 第二課：主軸上多出來的空間要放哪裡？

### 問題情境

父容器寬度是 `500px`，三個子元素各 `100px`，合計只佔 `300px`。剩下的 `200px` 空間會留在哪裡？要讓子元素靠左、靠右、置中，或平均分散，就需要控制主軸上的剩餘空間。

### 畫面觀察

在預設 `flex-direction: row` 下，主軸是水平方向。三個子元素會沿著水平方向排列，剩餘空間也存在於水平方向。

### 最小修改

讓子元素在主軸上置中：

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

`justify-content: center` 會把所有 flex items 視為一組，將這組項目放在主軸中央。因為主軸目前是水平方向，所以畫面看起來是水平置中。

如果把 `flex-direction` 改成 `column`，主軸變成垂直方向，`justify-content: center` 就會改成控制垂直方向上的置中。

### 再看一組間距問題

如果你希望第一個盒子貼近起點、最後一個盒子貼近終點，中間空間平均分配，可以改用：

```css
.layout {
  display: flex;
  justify-content: space-between;
  width: 500px;
  border: 1px solid #999;
}
```

`space-between` 會把剩餘空間放在項目之間，所以兩端不會額外保留同樣的外側間距。

### 誤判修正

`justify-content` 分配的是「主軸上的剩餘空間」。如果父容器沒有多餘空間，或子元素已經佔滿主軸，效果就不明顯。

另外，`space-around` 和 `space-evenly` 很容易混淆：

- `space-around` 讓每個項目左右兩側都有空間，因此兩個項目中間的距離會由相鄰兩側空間相加，通常看起來是兩端距離的兩倍。
- `space-evenly` 讓所有間隔相等，包含兩端與項目之間的間隔。

### 小整理

`justify-content` 常見值如下：

| 值 | 主軸上的效果 |
|---|---|
| `flex-start` | 靠主軸起點排列，預設值 |
| `flex-end` | 靠主軸終點排列 |
| `center` | 整組項目置中 |
| `space-between` | 第一個在起點，最後一個在終點，中間平均分配 |
| `space-around` | 每個項目兩側分配空間，項目之間距離通常比兩端大 |
| `space-evenly` | 所有間隔都相等 |

## 第三課：單行時，側軸要怎麼對齊？

### 問題情境

三個盒子已經水平排成一列，但父容器高度比盒子高。你想讓盒子靠上、靠下、垂直置中，或在沒有設定高度時撐滿父容器高度。

這時候要控制的不是主軸，而是側軸。

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

因為主軸仍是 `row`，側軸是垂直方向，所以 `align-items: center` 會讓三個盒子在父容器高度中垂直置中。

如果 `.item` 沒有設定高度，預設的 `align-items: stretch` 會讓子元素在側軸上拉伸，填滿父容器的高度。來源範例中特別展示了這個現象：子元素沒有設定高度時，會看起來和父容器一樣高。

### 對照範例：為什麼 `stretch` 有時看不出來？

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

這個範例中 `.item` 沒有設定高度，所以 `stretch` 可以把它們沿著側軸拉高。

如果你又寫了：

```css
.item {
  width: 100px;
  height: 80px;
  background: skyblue;
}
```

子元素已經有自己的高度，拉伸效果就不會像沒有高度時那麼明顯。

### 誤判修正

`align-items` 適合處理單行 flex items 在側軸上的對齊。若子元素已經換成多行，並且你想控制「多行整體」在側軸上的分布，就應該改看 `align-content`。

### 小整理

`align-items` 常見值如下：

| 值 | 單行側軸上的效果 |
|---|---|
| `stretch` | 預設值，項目沒有固定側軸尺寸時會拉伸填滿 |
| `flex-start` | 靠側軸起點 |
| `flex-end` | 靠側軸終點 |
| `center` | 側軸置中 |
| `baseline` | 依第一行文字基線對齊 |

## 第四課：盒子太多時，要擠在同一行還是換行？

### 問題情境

父容器寬度是 `600px`，每個子元素希望寬 `150px`，又有五個子元素。照數字看起來一行放不下，但畫面可能沒有換行，而是把子元素硬塞在同一行。

這是 Flex 的預設行為：項目預設不換行。

### 畫面觀察

Flex 容器預設是：

```css
flex-wrap: nowrap;
```

也就是所有 flex items 盡量排在同一條 flex line 上。來源資料說明，當空間不足時，子元素可能會被縮小以塞進父容器。

### 最小修改

允許子元素超出一行時換行：

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

`flex-wrap: wrap` 允許 flex items 在主軸空間不足時換到下一行。這裡的「下一行」是相對於目前主軸方向來說的：

- 若 `flex-direction: row`，主軸是水平，換行通常看起來是往下一排。
- 若 `flex-direction: column`，主軸是垂直，換行的視覺結果會改成產生新的欄。

### 誤判修正

`flex-wrap` 只決定能不能換行，不負責決定換行後每一行之間怎麼分配側軸空間。當畫面已經變成多行後，要控制多行在側軸上的排列，才會使用 `align-content`。

補充說明：來源提到「不換行時會自動縮小盒子大小」。這個現象和 flex item 的縮放能力有關，尤其是 `flex-shrink`。本章只保留這個現象作為理解 `flex-wrap` 的背景，不深入展開子項目縮放規則。

### 小整理

`flex-wrap` 常見值如下：

| 值 | 效果 |
|---|---|
| `nowrap` | 不換行，預設值 |
| `wrap` | 空間不足時換行 |
| `wrap-reverse` | 換行，但側軸堆疊方向反轉 |

## 第五課：多行之後，行與行之間要怎麼排？

### 問題情境

你已經使用 `flex-wrap: wrap` 讓盒子分成多行。現在父容器高度很高，多行內容只佔其中一部分。你想讓多行靠上、靠下、置中，或把行與行之間的空間平均分配。

這時候要使用 `align-content`。

### 畫面觀察

`align-content` 控制的是多條 flex lines 在側軸上的排列方式。它不是控制單一子元素，也不是控制單行中的項目對齊。

要讓 `align-content` 明顯生效，通常需要同時具備：

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

因為 `flex-wrap: wrap` 讓項目形成多行，`align-content: flex-start` 會把這些行作為一組，靠側軸起點排列。若改成 `center`，多行整體會在側軸置中；若改成 `space-between`，第一行與最後一行會貼近側軸兩端，中間行平均分配。

### 誤判修正

`align-content` 在單行時通常看不出效果。若你只有一行 flex items，卻一直調整 `align-content`，畫面不變是正常的。此時應回頭檢查你真正要控制的是不是單行側軸對齊，也就是 `align-items`。

### 小整理

`align-content` 常見值如下：

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

這樣完全正確，但如果只是同時設定方向與換行，可以用 `flex-flow` 簡寫。

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

`flex-flow` 不包含 `justify-content`、`align-items` 或 `align-content`。它只處理「主軸方向」與「是否換行」。

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
- 主軸結果：`justify-content: flex-start` 讓每一行內的項目從主軸起點排列。
- 側軸結果：`align-content: flex-start` 讓多行整體靠側軸起點。
- 單行內項目結果：`align-items: stretch` 控制每一行中項目在側軸上的拉伸或對齊。
- 常見誤解：如果只有一行，`align-content` 不會是主要控制點；如果沒有 `flex-wrap: wrap`，也不會形成多行可供 `align-content` 分配。

## `align-items` 與 `align-content` 怎麼選？

來源資料最後給出一個很重要的判斷：「單行找 `align-items`，多行找 `align-content`。」

可以把它整理成下面的判斷流程：

| 你要控制的畫面 | 優先使用 |
|---|---|
| 一行子元素在側軸上的位置 | `align-items` |
| 多行整體在側軸上的位置或行距分配 | `align-content` |
| 主軸上的對齊與間距 | `justify-content` |
| 子元素是否允許換行 | `flex-wrap` |
| 主軸方向 | `flex-direction` |

如果畫面沒有變化，可以依序檢查：

1. 父元素是否有 `display: flex`。
2. 你設定的是父元素，還是誤寫到子元素。
3. 現在主軸方向是 `row` 還是 `column`。
4. 目前是單行還是多行。
5. 父容器在該軸向上是否真的有剩餘空間。

## 常見誤解與修正方式

### 誤解一：`justify-content` 就是水平置中

錯誤原因：只記住預設 `row` 的畫面結果，沒有回到主軸概念。

修正方式：先看 `flex-direction`。`justify-content` 永遠控制主軸；主軸若是垂直，`justify-content` 就會影響垂直方向。

### 誤解二：`align-items` 就是垂直置中

錯誤原因：同樣把預設 `row` 的結果當成固定規則。

修正方式：`align-items` 控制側軸。當 `flex-direction: column` 時，側軸通常變成水平方向。

### 誤解三：單行時調整 `align-content`

錯誤原因：沒有分清楚單行 item 對齊與多行 line 分配。

修正方式：單行先用 `align-items`。只有發生換行，並且要控制多行在側軸上的排列時，才看 `align-content`。

### 誤解四：忘記設定 `flex-wrap`

錯誤原因：以為子元素寬度加總超過父容器就一定會換行。

修正方式：Flex 預設是 `nowrap`。要允許換行，必須設定 `flex-wrap: wrap` 或使用包含 `wrap` 的 `flex-flow`。

### 誤解五：把父項屬性寫在子元素上

錯誤原因：看到「控制子元素排列」就誤以為屬性要寫在子元素本身。

修正方式：本章這些屬性控制的是父容器如何安排直接子元素，因此應寫在 flex container 上。

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

遇到 Flex 對齊問題時，先問自己三件事：現在誰是 flex container？主軸是哪個方向？目前是單行還是多行？這三個答案通常能快速定位應該使用哪個父項屬性。

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
