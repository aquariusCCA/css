# flex 佈局常見父項屬性

## 學習目標

讀完本章後，你應該能用 Flexbox 的父項屬性解決常見的一維排版問題，而不是只背屬性名稱。

你應該能做到：

- 先找出哪個元素應該成為 flex container。
- 判斷 `flex-direction` 改變後，主軸與側軸分別在哪裡。
- 使用 `justify-content` 控制主軸上的排列。
- 使用 `align-items` 控制單行在側軸上的對齊。
- 使用 `flex-wrap` 讓項目在空間不足時換行。
- 判斷多行情境下為什麼要用 `align-content`。
- 使用 `flex-flow` 簡寫主軸方向與換行設定。

## 前置知識

本章需要先知道 HTML 的父子結構。Flexbox 的父項屬性不是寫在任何元素上都有效，而是寫在「包住一組子元素的父元素」上，用父元素去安排它的直接子元素。

你也需要知道基本盒模型。子元素的 `width`、`height`、`margin`、`padding` 和父元素的可用空間，都會影響 Flexbox 排列後的畫面。

## 本章範圍

本章只處理 flex 佈局中常見的父項屬性，也就是寫在 flex container 上、用來控制直接子元素排列的屬性：

- `flex-direction`
- `justify-content`
- `align-items`
- `align-content`
- `flex-wrap`
- `flex-flow`

`display: flex` 會作為本章前提一起說明，因為父元素必須先成為 flex container，這些父項屬性才有 Flexbox 佈局意義。

來源範例中出現的 `align-self` 是子項屬性，本章只在必要時提醒，不深入展開。`flex-grow`、`flex-shrink`、`flex-basis`、`order` 等子項屬性也適合另開章節。

## 先看問題：盒子為什麼都擠在一起？

假設畫面上有三個盒子。你想把它們排成一列、置中、平均分散，甚至在空間不足時換行。初學者常直接問：「要用哪個置中屬性？」但 Flexbox 的第一步不是背屬性，而是先看結構。

```html
<div class="box-list">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

先觀察這段 HTML：

- `.box-list` 是父元素。
- 三個 `.box` 是 `.box-list` 的直接子元素。
- 如果要控制三個盒子的排列，應該先控制 `.box-list`。

最小修改是讓父元素成為 flex container：

```css
.box-list {
  display: flex;
}

.box {
  width: 80px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  background: skyblue;
}
```

修改後，三個 `.box` 會成為 flex item，並依照 Flexbox 的預設規則排在同一列。這個結果先不用急著背完整規則，只要抓住一件事：父元素一旦設定 `display: flex`，它就開始負責安排直接子元素。

常見誤判是把 `display: flex` 寫在 `.box` 上，期待每個 `.box` 自己被排好。那樣會讓每個 `.box` 變成自己的 flex container，但不會讓三個 `.box` 彼此被 `.box-list` 排列。要排列一組子元素，屬性要先回到它們共同的父元素上。

補充說明：只有直接子元素會成為同一層 flex item。更深層的孫元素不會因為祖先設定 `display: flex` 就自動加入這一組排列。

## 第一課：先決定主軸，再談置中

### 問題情境

你看到三個盒子排成一列，但需求改成「由上往下排列，並放在容器中央」。這時如果只記得 `justify-content: center` 是「水平置中」，很容易寫錯。

Flexbox 不先問水平或垂直，而是先問：主軸在哪裡？

### 畫面觀察

預設情況下，Flexbox 的主軸是水平方向，由左到右；側軸是垂直方向，由上到下。

```text
flex-direction: row

主軸：左 → 右
側軸：上 ↓ 下
```

如果把主軸改成垂直方向，盒子的主要排列方向也會跟著改變。

```text
flex-direction: column

主軸：上 ↓ 下
側軸：左 → 右
```

### 最小修改

```html
<div class="panel">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 220px;
  border: 1px solid #666;
}

.item {
  width: 56px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: skyblue;
}
```

### 結果解釋

修改前，如果只設定 `display: flex`，三個 `.item` 會預設沿著水平方向排列。

修改後，`flex-direction: column` 先把主軸改成垂直方向，所以三個 `.item` 由上往下排列。接著 `justify-content: center` 控制主軸，於是整組盒子在垂直方向置中；`align-items: center` 控制側軸，於是每個盒子在水平方向置中。

為什麼這裡的 `justify-content` 不是水平置中？因為它控制的是主軸，不是固定控制水平方向。主軸被 `flex-direction` 改成垂直後，`justify-content` 的視覺結果也跟著變成垂直方向的對齊。

### 小整理：`flex-direction`

`flex-direction` 用來設定主軸方向，也就是 flex item 的主要排列方向。

| 值 | 主軸方向 | 視覺結果 |
|---|---|---|
| `row` | 水平方向，由左到右 | 預設值，子元素排成一列 |
| `row-reverse` | 水平方向，由右到左 | 視覺順序反向 |
| `column` | 垂直方向，由上到下 | 子元素上下排列 |
| `column-reverse` | 垂直方向，由下到上 | 視覺順序反向 |

常見誤判：不要把 `row` 直接記成「水平」、把 `column` 直接記成「垂直」就結束。更重要的是：它們會決定主軸，而後面的主軸與側軸對齊都會受它影響。

## 第二課：主軸上的空間怎麼分？

### 問題情境

現在三個按鈕已經排成一列，但全部靠在左邊。需求是讓它們在工具列中平均分散，第一個靠左、最後一個靠右，中間的空間自動分配。

這種問題不是改每個按鈕的 `margin` 最穩定，而是讓父元素分配主軸上的剩餘空間。

### 畫面觀察

```html
<nav class="toolbar">
  <a href="#">首頁</a>
  <a href="#">課程</a>
  <a href="#">聯絡</a>
</nav>
```

`.toolbar` 是父元素，三個 `<a>` 是直接子元素。因為沒有設定 `flex-direction`，主軸預設是水平方向。

### 最小修改

```css
.toolbar {
  display: flex;
  justify-content: space-between;
  width: 360px;
  border: 1px solid #666;
  padding: 12px;
}

.toolbar a {
  padding: 8px 12px;
  background: #e8f4ff;
  color: #222;
  text-decoration: none;
}
```

### 結果解釋

修改前，三個連結會依照 Flexbox 預設從主軸起點排列，也就是靠左排列。

修改後，`justify-content: space-between` 會把主軸上的剩餘空間放到項目之間。第一個項目靠近主軸起點，最後一個項目靠近主軸終點，中間的項目分布在兩者之間。

為什麼不是每個 `<a>` 變寬？因為 `justify-content` 主要處理的是「項目之間和兩端的剩餘空間」，不是直接改變每個項目的內容寬度。

### 小整理：`justify-content`

`justify-content` 控制 flex item 在主軸上的對齊與剩餘空間分配。

| 值 | 適合觀察的結果 |
|---|---|
| `flex-start` | 靠主軸起點，預設值 |
| `flex-end` | 靠主軸終點 |
| `center` | 整組項目在主軸上置中 |
| `space-between` | 兩端貼齊，中間平均分配 |
| `space-around` | 每個項目兩側分配空間，兩端看起來是中間的一半 |
| `space-evenly` | 兩端與項目之間的間距都相等 |

常見誤判：`justify-content` 不是永遠代表水平排列。先看 `flex-direction`，確認主軸後，才能判斷它影響的是左右還是上下。

## 第三課：單行時，側軸要怎麼對齊？

### 問題情境

你做了一個高 `180px` 的容器，裡面有三個高度 `50px` 的盒子。盒子已經排成一列，但全部貼在上方。需求是讓它們在容器高度中垂直置中。

這時要控制的不是主軸，而是側軸。

### 畫面觀察

在預設 `flex-direction: row` 下：

- 主軸是水平方向。
- 側軸是垂直方向。
- 三個盒子只有一行。

所以，單行在側軸上的對齊，應該使用 `align-items`。

### 最小修改

```html
<div class="single-line">
  <div class="card">A</div>
  <div class="card">B</div>
  <div class="card">C</div>
</div>
```

```css
.single-line {
  display: flex;
  align-items: center;
  width: 320px;
  height: 180px;
  border: 1px solid #666;
}

.card {
  width: 80px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: plum;
  color: #fff;
}
```

### 結果解釋

修改前，Flexbox 預設的側軸對齊是 `stretch`。如果子元素沒有設定高度，可能會被拉伸填滿容器高度；如果子元素已設定高度，畫面上常會看到它們靠側軸起點排列。

修改後，`align-items: center` 讓這一行的 flex item 在側軸方向置中。因為此例的主軸是水平，側軸是垂直，所以你會看到三個盒子在容器高度中置中。

為什麼這裡不用 `justify-content`？因為 `justify-content` 管主軸，也就是此例的左右方向；需求是上下置中，所以要用側軸屬性。

### 小整理：`align-items`

`align-items` 控制單行 flex item 在側軸上的對齊方式。

| 值 | 適合觀察的結果 |
|---|---|
| `stretch` | 預設值；未設定側軸尺寸時，項目會被拉伸 |
| `flex-start` | 靠側軸起點 |
| `flex-end` | 靠側軸終點 |
| `center` | 在側軸置中 |
| `baseline` | 依第一行文字基線對齊 |

常見誤判：看到 `align-items: stretch` 造成盒子變高時，不要以為是內容自己長高。更準確地說，是 flex container 在側軸方向分配可用空間，而沒有固定側軸尺寸的 flex item 被拉伸。

## 第四課：盒子太多時，為什麼沒有自動換行？

### 問題情境

你有五個寬 `150px` 的項目，父容器只有 `600px`。照直覺，一行放不下就應該換到下一行；但 Flexbox 預設會盡量把項目排在同一條軸線上。

如果你希望項目超出時換行，需要明確告訴父元素：允許換行。

### 畫面觀察

```html
<div class="wrap-demo">
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
  <span>5</span>
</div>
```

若只寫 `display: flex`，這些 `<span>` 會先嘗試留在同一行。實際是否縮小、溢出或看起來擠在一起，還會受到項目尺寸與 flex item 相關屬性影響。

### 最小修改

```css
.wrap-demo {
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  height: 260px;
  border: 1px solid #666;
}

.wrap-demo span {
  width: 150px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  background: purple;
  color: #fff;
  margin: 10px;
}
```

### 結果解釋

修改前，Flexbox 預設是 `flex-wrap: nowrap`，意思是不主動換行，項目會盡量留在同一條 flex line。

修改後，`flex-wrap: wrap` 允許項目在主軸空間不足時換到下一行。因為每個項目有寬度與外距，父容器一行放不下全部項目時，就會形成多行。

為什麼來源範例會說預設不換行時盒子可能被縮小？補充說明：更細的壓縮行為和 `flex-shrink` 有關，這是 flex item 屬性，不是本章主線。

### 小整理：`flex-wrap`

`flex-wrap` 控制 flex item 是否允許換行。

| 值 | 效果 |
|---|---|
| `nowrap` | 不換行，預設值 |
| `wrap` | 空間不足時換到下一行或下一列 |
| `wrap-reverse` | 允許換行，但換行方向反向 |

常見誤判：`flex-wrap: wrap` 只負責允許換行，不代表會自動產生你想要的間距。每個項目的尺寸、`margin`、容器寬度與主軸方向都會影響最後換行位置。

## 第五課：多行出現後，整組行要怎麼對齊？

### 問題情境

現在項目已經會換行了，但多行都擠在容器上方。需求是讓這幾行作為一整組，在容器高度中置中，或平均分配在容器裡。

這時很多人會繼續改 `align-items`，卻看不出想要的效果。原因是：你現在要控制的不是「同一行內每個項目」，而是「多條 flex line 整體」。

### 畫面觀察

`align-items` 看的是單行內的項目如何在側軸上對齊。`align-content` 看的是多條 flex line 如何在側軸上分配空間。

換句話說：

- 單行項目側軸對齊：優先看 `align-items`。
- 多行整體側軸分配：才看 `align-content`。

### 最小修改

```html
<div class="multi-line">
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
  <span>5</span>
  <span>6</span>
</div>
```

```css
.multi-line {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: 360px;
  height: 260px;
  border: 1px solid #666;
}

.multi-line span {
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #6b4fd8;
  color: #fff;
  margin: 8px;
}
```

### 結果解釋

修改前，如果只有 `flex-wrap: wrap`，項目可以形成多行，但多行在側軸上的位置仍依預設規則排列。

修改後，`align-content: center` 會把多條 flex line 作為一整組，在側軸方向置中。這和 `align-items: center` 不同，後者是在每一行內對齊單個項目。

為什麼 `align-content` 有時看起來沒有效果？通常有兩個原因：第一，容器沒有形成多行；第二，容器側軸方向沒有明顯剩餘空間。沒有多行或沒有可分配空間時，就很難觀察到 `align-content` 的作用。

### 小整理：`align-content`

`align-content` 控制多條 flex line 在側軸上的排列方式，通常需要搭配 `flex-wrap: wrap` 才容易觀察。

| 值 | 適合觀察的結果 |
|---|---|
| `stretch` | 預設值；多行在側軸方向拉伸填滿容器 |
| `flex-start` | 多行靠側軸起點 |
| `flex-end` | 多行靠側軸終點 |
| `center` | 多行整體在側軸置中 |
| `space-between` | 第一行靠起點，最後一行靠終點，中間平均分配 |
| `space-around` | 每行周圍分配空間 |
| `space-evenly` | 每行之間與兩端間距相等 |

常見誤判：不要把 `align-content` 當成 `align-items` 的加強版。它不是用來管單個項目的側軸對齊，而是用來管多行整體。

## 第六課：方向和換行能不能寫在一起？

### 問題情境

當你已經確定主軸方向與是否換行時，CSS 可能會出現兩行固定搭配：

```css
flex-direction: row;
flex-wrap: wrap;
```

這時可以用 `flex-flow` 簡寫。

### 畫面觀察

這個範例的目標不是新增另一種排列能力，而是把已經學過的兩件事合併書寫：

- `flex-direction` 決定主軸方向。
- `flex-wrap` 決定是否允許換行。

所以在使用 `flex-flow` 前，仍然要先確認方向與換行需求，而不是看到簡寫就直接套用。

### 最小修改

```html
<div class="tags">
  <span>HTML</span>
  <span>CSS</span>
  <span>Flexbox</span>
  <span>Layout</span>
</div>
```

```css
.tags {
  display: flex;
  flex-flow: row wrap;
  width: 260px;
  border: 1px solid #666;
  padding: 8px;
}

.tags span {
  width: 96px;
  margin: 4px;
  padding: 6px 8px;
  background: #f1f1f1;
}
```

### 結果解釋

`flex-flow: row wrap` 同時表示主軸是水平方向，並允許項目在空間不足時換行。

它等同於：

```css
.tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
```

來源指出 `flex-flow` 的值沒有順序要求。實務上仍建議初學階段先用 `flex-direction` 和 `flex-wrap` 分開寫，等判斷熟悉後再使用簡寫，因為分開寫比較容易看出每一條規則的作用。

### 小整理：`flex-flow`

`flex-flow` 是 `flex-direction` 與 `flex-wrap` 的複合屬性。常見寫法是先寫方向，再寫換行方式，例如 `flex-flow: row wrap;`。

常見誤判：`flex-flow` 不會提供新的對齊能力。它只是把方向與換行兩個設定寫在同一行；主軸對齊仍要看 `justify-content`，側軸對齊仍要看 `align-items` 或 `align-content`。

## 常見誤解與修正方式

### 把父項屬性寫在子元素上

錯誤寫法常像這樣：

```css
.box {
  justify-content: center;
  align-items: center;
}
```

如果目標是讓多個 `.box` 在父容器中置中，這樣通常不會得到預期結果。`justify-content` 和 `align-items` 要寫在 flex container 上，才能控制它的直接子元素。

修正方式是回到共同父元素：

```css
.box-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 忘記先設定 `display: flex`

如果父元素不是 flex container，Flexbox 父項屬性就沒有本章說的排列效果。除錯時先檢查父元素是否真的有 `display: flex`。

### 沒有先判斷主軸

`justify-content` 控制主軸，`align-items` 和 `align-content` 控制側軸。主軸方向一改，視覺結果就會改。遇到置中問題時，先問：「現在 `flex-direction` 是什麼？」

### 用 `align-content` 處理單行

`align-content` 需要多條 flex line 才容易觀察效果。單行時，通常應該先看 `align-items`。

### 忽略尺寸與外距

來源範例中的子元素常有 `margin`。觀察 `space-between`、`space-around`、`space-evenly` 或換行時，畫面上的距離不只來自 Flexbox，也可能包含項目自己的外距。練習時可以先把 `margin` 設小，避免誤判。

## 實務使用情境

Flexbox 父項屬性適合處理一維排列，也就是主要沿著一個方向安排內容。常見情境包含導覽列、按鈕群組、工具列、標籤列表、卡片列、表單欄位對齊與簡單置中。

如果需求是「這一排元素如何分散」、「一組按鈕如何在容器內置中」、「標籤太多時如何換行」，通常可以先考慮 Flexbox。做法是先找共同父元素，讓它成為 flex container，再用本章屬性安排直接子元素。

如果需求變成同時精細控制列與欄，例如大型二維版面、複雜卡片矩陣或區域命名，則適合另學 CSS Grid。

## 自我檢查

1. 你有一個 `.list` 包住五個 `.item`。如果要讓五個 `.item` 排成一列，`display: flex` 應該寫在 `.list` 還是 `.item`？
2. 預測畫面：在 `flex-direction: column` 時，`justify-content: center` 會讓項目往哪個方向置中？為什麼？
3. 如果三個按鈕已排成一列，但全部靠左，你想讓它們整組水平置中，應該先嘗試哪個屬性和值？
4. 如果三個盒子排成一列，但貼在容器上方，你想讓它們在容器高度中置中，應該使用 `justify-content` 還是 `align-items`？前提是 `flex-direction` 預設為 `row`。
5. 找錯題：為什麼下面這段 CSS 不一定能讓 `.item` 之間換行？

```css
.item {
  flex-wrap: wrap;
}
```

6. 觀察題：如果容器沒有形成多行，`align-content: center` 為什麼可能看起來沒有效果？
7. 改寫題：把以下兩行改成 `flex-flow` 簡寫。

```css
flex-direction: row;
flex-wrap: wrap;
```

8. 練習題：建立一個寬 `360px`、高 `240px` 的容器，放入 6 個寬 `100px`、高 `50px` 的項目。先只設定 `display: flex`，觀察修改前畫面；再依序加入 `flex-wrap: wrap`、`align-content: center`，觀察修改後多行的位置變化。

延伸閱讀提示：學完本章後，可以另開章節學習 flex item 屬性，例如 `flex-grow`、`flex-shrink`、`flex-basis`、`align-self` 與 `order`。這些屬性用來控制單個子元素如何分配尺寸或調整自身排列。

## 小結

Flexbox 父項屬性的學習順序應該是：先找父元素，再建立 flex container，接著判斷主軸與側軸，最後才選擇對齊或換行屬性。

`flex-direction` 決定主軸方向，`justify-content` 控制主軸空間，`align-items` 控制單行側軸對齊，`flex-wrap` 決定是否允許換行，`align-content` 控制多行在側軸上的分配，`flex-flow` 則是方向與換行的簡寫。

不要把 Flexbox 學成固定口訣，例如「justify 是水平、align 是垂直」。更穩定的判斷方式是：先看 `flex-direction`，再看你要控制的是主軸、側軸、單行還是多行。

## 來源與補充說明

本章主要根據 `origin/第26章_Flex布局/flex佈局常見父項屬性.md` 整理。

來源直接支持的內容包括：

- Flexbox 常見父項屬性包含 `flex-direction`、`justify-content`、`align-items`、`align-content`、`flex-wrap`、`flex-flow`。
- `flex-direction` 用來設定主軸方向，且子元素會跟著主軸排列。
- `justify-content` 用來設定主軸上的子元素排列方式。
- `align-items` 用於單行情境下側軸上的子元素排列。
- `align-content` 用於多行情境下側軸上的排列，單行情況下沒有明顯效果。
- `flex-wrap` 用來設定子元素是否換行。
- `flex-flow` 是 `flex-direction` 與 `flex-wrap` 的複合屬性。
- 單行情境主要使用 `align-items`，多行情境主要使用 `align-content`。

本章補充說明的內容包括：

- flex container 與 flex item 的角色定義。
- `display: flex` 作為父項屬性生效的必要前提。
- 直接子元素才會成為同一層 flex item。
- `flex-direction` 的完整常見值與軸線判斷方式。
- `flex-wrap: nowrap` 下的壓縮行為與 `flex-shrink` 有關，但此細節屬於子項屬性範圍。
- `margin` 會影響觀察 Flexbox 空間分配與換行位置。

適合另開章節的內容包括：

- flex item 屬性：`flex-grow`、`flex-shrink`、`flex-basis`、`align-self`、`order`。
- CSS Grid 與 Flexbox 的使用情境比較。
- 更完整的置中技巧與響應式排版策略。

待確認：此處原始資料不足，無法判斷來源圖片中每一個視覺細節是否與相鄰文字完全一致。本章依來源文字、程式碼與標題整理，未重新校對圖片像素細節。
