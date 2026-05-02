# 複合選擇器

## 章節入口

- 返回章節入口：[第六章 選擇器](./README.md)
- 上一篇筆記：[基礎選擇器](./基礎選擇器.md)

## 本節導讀

複合選擇器是在基礎選擇器之上，加入更多條件來選取元素。

基礎選擇器通常只靠單一條件選元素，例如：

```css
p {
  color: red;
}

.box {
  color: blue;
}
```

複合選擇器則會進一步考慮：

- 元素之間的層級關係
- 元素之間的兄弟關係
- 元素是否具有某個屬性
- 元素目前的狀態
- 元素在父元素中的位置
- 元素的局部內容或裝飾效果

例如：

```css
.nav li a {
  color: orange;
}

.card > .title {
  font-size: 20px;
}

input[type="text"] {
  border: 1px solid #ccc;
}

button:hover {
  background-color: skyblue;
}
```

複合選擇器比基礎選擇器更精準，也更接近實務開發中的使用方式。

## 學習目標

讀完本節後，你應該能理解：

- 什麼是複合選擇器
- 後代選擇器和子選擇器的差別
- 相鄰兄弟選擇器和通用兄弟選擇器的差別
- 群組選擇器的用途
- 屬性選擇器的常見寫法
- 偽類選擇器如何表示元素狀態或結構位置
- 偽元素選擇器如何產生局部樣式或裝飾內容
- `nth-child` 和 `nth-of-type` 的差異
- 實務上如何避免選擇器寫得太深、太脆弱

## 關鍵字

- 複合選擇器
- 後代選擇器
- 子選擇器
- 相鄰兄弟選擇器
- 通用兄弟選擇器
- 群組選擇器
- 屬性選擇器
- 偽類選擇器
- 偽元素選擇器
- selector
- combinator
- pseudo-class
- pseudo-element
- specificity

## 什麼是複合選擇器？

這份筆記中的「複合選擇器」，泛指把基礎選擇器進一步組合起來使用的常見 CSS 選擇器。

它不是單靠一個最基礎的條件選元素，而是透過：

```text
基礎選擇器 + 關係
基礎選擇器 + 屬性
基礎選擇器 + 狀態
基礎選擇器 + 結構位置
基礎選擇器 + 偽元素
```

來更精準地找到目標元素。

## 常見複合選擇器總覽

| 類型 | 寫法 | 核心意思 |
|---|---|---|
| 後代選擇器 | `.parent .child` | 選中某元素裡面的所有後代元素 |
| 子選擇器 | `.parent > .child` | 只選中直接子元素 |
| 相鄰兄弟選擇器 | `h2 + p` | 選中緊接在後面的第一個兄弟元素 |
| 通用兄弟選擇器 | `h2 ~ p` | 選中後面所有符合條件的兄弟元素 |
| 群組選擇器 | `h1, h2, p` | 多個選擇器共用同一組樣式 |
| 屬性選擇器 | `input[type="text"]` | 根據屬性或屬性值選元素 |
| 偽類選擇器 | `a:hover` | 根據狀態或結構位置選元素 |
| 偽元素選擇器 | `p::first-line` | 選中元素的局部內容或建立裝飾效果 |

## 後代選擇器

後代選擇器使用空格表示。

它會選中某個元素裡面的所有後代元素，不論中間隔了幾層。

## 一句話理解

> 後代選擇器會選中某個元素裡面所有符合條件的後代元素。

## 語法

```css
祖先元素 後代元素 {
  屬性: 值;
}
```

中間的空格代表「在裡面」。

## 範例

```css
.nav li a {
  color: orange;
}
```

```html
<ul class="nav">
  <li>
    <a href="#">首頁</a>
  </li>
  <li>
    <span>
      <a href="#">關於我們</a>
    </span>
  </li>
</ul>

<a href="#">外面的連結</a>
```

## 會選中誰？

```css
.nav li a {
  color: orange;
}
```

會選中：

```html
<a href="#">首頁</a>
<a href="#">關於我們</a>
```

因為這兩個 `a` 都在 `.nav` 裡面，而且也都在 `li` 裡面。

即使第二個 `a` 中間隔了一層 `span`，仍然會被選中，因為後代選擇器不要求一定是直接子層。

## 不會選中誰？

不會選中：

```html
<a href="#">外面的連結</a>
```

因為它不在 `.nav` 裡面。

## 實務使用時機

後代選擇器適合用在：

- 限制某個區塊內的樣式
- 設定區塊內特定元素的樣式
- 處理文章內容、選單內容、卡片內容等區域樣式

例如：

```css
.article p {
  line-height: 1.8;
}

.sidebar a {
  color: #333;
}
```

## 常見錯誤

### 錯誤 1：選擇器寫得太深

不建議：

```css
.page .main .content .card .header .title {
  font-size: 20px;
}
```

這種寫法雖然可以選到元素，但結構依賴太強。

只要 HTML 層級稍微改變，樣式就可能失效。

比較建議：

```css
.card-title {
  font-size: 20px;
}
```

或：

```css
.card .title {
  font-size: 20px;
}
```

### 錯誤 2：以為後代選擇器只選直接子層

```css
.nav a {
  color: red;
}
```

這段會選中 `.nav` 裡面所有層級的 `a`。

如果只想選直接子層，要使用子選擇器 `>`。

## 子選擇器

子選擇器使用 `>` 表示。

它只會選中某個元素的直接子元素，不會往更深層尋找。

## 一句話理解

> 子選擇器只選第一層子元素。

## 語法

```css
父元素 > 子元素 {
  屬性: 值;
}
```

## 範例

```css
.nav > a {
  color: red;
}
```

```html
<div class="nav">
  <a href="#">直接子元素</a>

  <p>
    <a href="#">不是直接子元素</a>
  </p>
</div>
```

## 會選中誰？

```css
.nav > a {
  color: red;
}
```

會選中：

```html
<a href="#">直接子元素</a>
```

因為這個 `a` 是 `.nav` 的直接子元素。

## 不會選中誰？

不會選中：

```html
<p>
  <a href="#">不是直接子元素</a>
</p>
```

裡面的 `a` 不會被選中，因為它不是 `.nav` 的直接子元素。

它是 `.nav` 的後代元素，但不是直接子元素。

## 後代選擇器 vs 子選擇器

| 比較項目 | 後代選擇器 | 子選擇器 |
|---|---|---|
| 寫法 | `.parent a` | `.parent > a` |
| 符號 | 空格 | `>` |
| 選取範圍 | 所有後代 | 只選直接子層 |
| 精準度 | 較寬 | 較精準 |
| 結構限制 | 較少 | 較嚴格 |

## 實務使用時機

子選擇器適合用在：

- 只想控制第一層子元素
- 避免樣式影響到更深層的巢狀元素
- 選單、列表、卡片結構中控制直接項目

例如：

```css
.menu > li {
  display: inline-block;
}
```

這代表只控制 `.menu` 底下第一層的 `li`。

## 常見錯誤

### 錯誤：把 `>` 當成「裡面的所有元素」

```css
.nav > a {
  color: red;
}
```

這不是選 `.nav` 裡面所有 `a`。

它只選 `.nav` 的直接子層 `a`。

如果要選所有後代 `a`，應該寫：

```css
.nav a {
  color: red;
}
```

## 相鄰兄弟選擇器

相鄰兄弟選擇器使用 `+` 表示。

它會選中「緊接在某個元素後面的第一個兄弟元素」。

## 一句話理解

> `+` 只選下一個，而且必須是緊接著的同層元素。

## 語法

```css
元素1 + 元素2 {
  屬性: 值;
}
```

意思是：

```text
選中元素1後面緊接著的第一個元素2。
```

## 範例

```css
h2 + p {
  color: red;
}
```

```html
<h2>標題</h2>
<p>第一段</p>
<p>第二段</p>

<div>其他內容</div>
<p>第三段</p>
```

## 會選中誰？

```css
h2 + p {
  color: red;
}
```

會選中：

```html
<p>第一段</p>
```

因為它是緊接在 `h2` 後面的第一個 `p`。

## 不會選中誰？

不會選中：

```html
<p>第二段</p>
<p>第三段</p>
```

原因是：

- 第二段不是緊接在 `h2` 後面的第一個兄弟元素
- 第三段前面隔了 `div`，不是緊接著 `h2`

## 實務使用時機

相鄰兄弟選擇器適合用在：

- 標題後第一段文字
- 相鄰列表項目
- 表單欄位後面的提示文字
- 某個元素出現後，緊接著的下一個元素需要特別樣式

例如：

```css
label + input {
  margin-top: 4px;
}

li + li {
  margin-top: 8px;
}
```

`li + li` 很常用來表示：

```text
除了第一個 li 之外，後面的 li 因為前面都有相鄰 li，所以會被選中。
```

## 常見錯誤

### 錯誤 1：以為 `+` 會選後面所有兄弟元素

```css
h2 + p {
  color: red;
}
```

這只會選緊接著的第一個 `p`。

如果要選後面所有同層的 `p`，應該使用 `~`。

### 錯誤 2：忽略「必須同層」

```html
<h2>標題</h2>
<div>
  <p>內容</p>
</div>
```

```css
h2 + p {
  color: red;
}
```

這樣選不到 `p`。

因為 `p` 在 `div` 裡面，不是 `h2` 的同層兄弟元素。

## 通用兄弟選擇器

通用兄弟選擇器使用 `~` 表示。

它會選中某個元素後面，所有符合條件的同層兄弟元素。

## 一句話理解

> `~` 會選後面所有符合條件的兄弟元素。

## 語法

```css
元素1 ~ 元素2 {
  屬性: 值;
}
```

意思是：

```text
選中元素1後面所有同層的元素2。
```

## 範例

```css
h2 ~ p {
  color: red;
}
```

```html
<p>前面的段落</p>

<h2>標題</h2>

<p>第一段</p>
<p>第二段</p>
<div>其他內容</div>
<p>第三段</p>
```

## 會選中誰？

```css
h2 ~ p {
  color: red;
}
```

會選中：

```html
<p>第一段</p>
<p>第二段</p>
<p>第三段</p>
```

因為它們都是 `h2` 後面的同層 `p`。

## 不會選中誰？

不會選中：

```html
<p>前面的段落</p>
```

因為它在 `h2` 前面。

`~` 只會往後選，不會往前選。

## 相鄰兄弟選擇器 vs 通用兄弟選擇器

| 比較項目 | `+` | `~` |
|---|---|---|
| 名稱 | 相鄰兄弟選擇器 | 通用兄弟選擇器 |
| 選取方向 | 往後 | 往後 |
| 是否必須同層 | 是 | 是 |
| 選幾個 | 只選緊接的第一個 | 選後面所有符合條件的兄弟元素 |
| 是否允許中間隔其他元素 | 不允許 | 允許 |

## 實務使用時機

通用兄弟選擇器適合用在：

- 某元素之後的一批元素
- checkbox 控制後方區塊顯示
- 某個標題後面的段落統一樣式

例如：

```css
.notice ~ p {
  color: #666;
}
```

## 常見錯誤

### 錯誤：以為 `~` 可以選前面的兄弟元素

```css
h2 ~ p {
  color: red;
}
```

這只會選 `h2` 後面的同層 `p`。

不會選 `h2` 前面的 `p`。

## 群組選擇器

群組選擇器使用逗號 `,` 分隔多個選擇器。

它的意思是：

```text
這幾個選擇器共用同一組樣式。
```

## 一句話理解

> 群組選擇器是把多個選擇器寫在一起，共用同一段 CSS 宣告。

## 語法

```css
選擇器1,
選擇器2,
選擇器3 {
  屬性: 值;
}
```

## 範例

```css
h1,
h2,
p {
  color: #333;
}
```

這等於：

```css
h1 {
  color: #333;
}

h2 {
  color: #333;
}

p {
  color: #333;
}
```

## 會選中誰？

```css
h1,
h2,
p {
  color: #333;
}
```

會選中所有：

```html
<h1>標題一</h1>
<h2>標題二</h2>
<p>段落</p>
```

## 不會選中誰？

不會選中：

```html
<span>文字</span>
<div>區塊</div>
```

因為這些元素沒有在群組選擇器中列出。

## 實務使用時機

群組選擇器適合用在：

- 多個元素共用相同樣式
- 減少重複 CSS
- 統一標題、段落、表單元素的樣式

例如：

```css
input,
select,
textarea {
  border: 1px solid #ccc;
  border-radius: 4px;
}
```

## 常見錯誤

### 錯誤 1：以為逗號表示層級

```css
.card, .title {
  color: red;
}
```

這不是選 `.card` 裡面的 `.title`。

它代表：

```text
選中 .card
也選中 .title
兩者共用 color: red
```

如果要選 `.card` 裡面的 `.title`，應該寫：

```css
.card .title {
  color: red;
}
```

### 錯誤 2：忘記逗號造成意思完全不同

```css
h1 h2 {
  color: red;
}
```

這代表：

```text
選中 h1 裡面的 h2。
```

但實務上 `h1` 裡面通常不會放 `h2`，所以可能選不到。

如果你想同時選 `h1` 和 `h2`，應該寫：

```css
h1,
h2 {
  color: red;
}
```

## 屬性選擇器

屬性選擇器會根據元素是否具有某個屬性，或屬性值是否符合條件來選取元素。

## 一句話理解

> 屬性選擇器是根據 HTML 屬性來選元素。

## 基本語法

```css
元素[屬性] {
  屬性: 值;
}
```

或：

```css
元素[屬性="屬性值"] {
  屬性: 值;
}
```

## 常見屬性選擇器

| 寫法 | 意思 |
|---|---|
| `[attr]` | 有這個屬性就選中 |
| `[attr="value"]` | 屬性值完全等於指定值 |
| `[attr^="value"]` | 屬性值以指定字串開頭 |
| `[attr$="value"]` | 屬性值以指定字串結尾 |
| `[attr*="value"]` | 屬性值包含指定字串 |
| `[attr~="value"]` | 屬性值以空格分隔，其中一個值等於指定值 |

## 範例一：只要有某個屬性就選中

```css
input[value] {
  color: red;
}
```

```html
<input type="text" value="有 value">
<input type="text">
```

## 會選中誰？

會選中：

```html
<input type="text" value="有 value">
```

因為它有 `value` 屬性。

## 不會選中誰？

不會選中：

```html
<input type="text">
```

因為它沒有 `value` 屬性。

## 範例二：屬性值完全相同

```css
input[type="password"] {
  border: 1px solid red;
}
```

```html
<input type="text">
<input type="password">
```

會選中：

```html
<input type="password">
```

因為它的 `type` 值完全等於 `password`。

## 範例三：屬性值以指定字串開頭

```css
div[class^="icon"] {
  color: blue;
}
```

```html
<div class="icon-home">首頁</div>
<div class="icon-user">使用者</div>
<div class="box-icon">圖示</div>
```

會選中：

```html
<div class="icon-home">首頁</div>
<div class="icon-user">使用者</div>
```

不會選中：

```html
<div class="box-icon">圖示</div>
```

因為 `box-icon` 不是以 `icon` 開頭。

## 範例四：屬性值以指定字串結尾

```css
section[class$="data"] {
  color: green;
}
```

```html
<section class="user-data">使用者資料</section>
<section class="order-data">訂單資料</section>
<section class="data-card">資料卡片</section>
```

會選中：

```html
<section class="user-data">使用者資料</section>
<section class="order-data">訂單資料</section>
```

不會選中：

```html
<section class="data-card">資料卡片</section>
```

因為 `data-card` 不是以 `data` 結尾。

## 範例五：屬性值包含指定字串

```css
a[href*="google"] {
  color: red;
}
```

```html
<a href="https://www.google.com">Google</a>
<a href="https://maps.google.com">Google Maps</a>
<a href="https://example.com">Example</a>
```

會選中：

```html
<a href="https://www.google.com">Google</a>
<a href="https://maps.google.com">Google Maps</a>
```

## 實務使用時機

屬性選擇器適合用在：

- 表單元素，例如 `input[type="text"]`
- 外部連結，例如 `a[target="_blank"]`
- 自訂資料屬性，例如 `[data-active="true"]`
- 根據檔案類型選連結，例如 `a[href$=".pdf"]`

例如：

```css
button[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

input[type="checkbox"] {
  accent-color: blue;
}

[data-status="error"] {
  color: red;
}
```

## 常見錯誤

### 錯誤 1：屬性值沒有加引號

有些情況下不加引號也可能有效：

```css
input[type=text] {
  color: red;
}
```

但更建議統一寫成：

```css
input[type="text"] {
  color: red;
}
```

這樣可讀性比較好，也比較不容易因特殊字元造成問題。

### 錯誤 2：用屬性選擇器取代 class 選擇器

可以這樣寫：

```css
div[class="card"] {
  border: 1px solid #ccc;
}
```

但一般更建議寫成：

```css
.card {
  border: 1px solid #ccc;
}
```

因為 class 選擇器更簡潔，也更符合常見 CSS 寫法。

### 錯誤 3：誤用完全匹配

```css
div[class="card"] {
  border: 1px solid #ccc;
}
```

這只會選中 class 完全等於 `card` 的元素。

如果 HTML 是：

```html
<div class="card active">內容</div>
```

它就不會被選中，因為完整 class 屬性值是 `card active`。

這時候應該使用：

```css
.card {
  border: 1px solid #ccc;
}
```

## 偽類選擇器

偽類選擇器用來表示元素的某種狀態，或元素在結構中的某個位置。

偽類選擇器使用單冒號 `:`。

## 一句話理解

> 偽類選擇器是在元素符合某種狀態或位置時，才選中它。

## 常見狀態偽類

| 偽類 | 意思 |
|---|---|
| `:link` | 尚未被訪問過的連結 |
| `:visited` | 已經被訪問過的連結 |
| `:hover` | 滑鼠移到元素上 |
| `:active` | 元素被按下時 |
| `:focus` | 元素取得焦點時 |
| `:checked` | checkbox 或 radio 被勾選時 |
| `:disabled` | 表單元素被停用時 |
| `:not()` | 排除符合條件的元素 |

## 範例一：連結狀態

```css
a:link {
  color: #333;
}

a:visited {
  color: purple;
}

a:hover {
  color: skyblue;
}

a:active {
  color: green;
}
```

## LVHA 順序

連結相關偽類常用順序是：

```text
L V H A
```

也就是：

```text
:link
:visited
:hover
:active
```

原因是這些狀態可能同時影響同一個 `a` 元素。

如果順序寫錯，後面的規則可能覆蓋前面的規則，導致效果不如預期。

## 範例二：focus

```css
input:focus {
  border-color: blue;
  outline: none;
}
```

```html
<input type="text" placeholder="請輸入姓名">
```

當 `input` 被點擊或用鍵盤切到時，就會套用 `:focus` 樣式。

## 範例三：checked

```css
input:checked + label {
  color: red;
}
```

```html
<input id="agree" type="checkbox">
<label for="agree">我同意</label>
```

當 checkbox 被勾選時，後面的 `label` 會變成紅色。

這個例子同時使用了：

```text
:checked 偽類
+ 相鄰兄弟選擇器
```

## 範例四：disabled

```css
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

```html
<button disabled>送出</button>
```

被停用的按鈕會套用這組樣式。

## 範例五：not

```css
.menu li:not(.active) {
  color: #666;
}
```

```html
<ul class="menu">
  <li class="active">首頁</li>
  <li>商品</li>
  <li>關於我們</li>
</ul>
```

這段會選中 `.menu` 裡面所有沒有 `.active` 的 `li`。

也就是：

```html
<li>商品</li>
<li>關於我們</li>
```

## 結構偽類選擇器

結構偽類用來根據元素在父元素中的位置選取元素。

常見結構偽類包括：

| 偽類 | 意思 |
|---|---|
| `:first-child` | 父元素中的第一個子元素 |
| `:last-child` | 父元素中的最後一個子元素 |
| `:nth-child(n)` | 父元素中的第 n 個子元素 |
| `:nth-last-child(n)` | 從最後往前數第 n 個子元素 |
| `:first-of-type` | 同類型元素中的第一個 |
| `:last-of-type` | 同類型元素中的最後一個 |
| `:nth-of-type(n)` | 同類型元素中的第 n 個 |

## first-child

```css
li:first-child {
  color: red;
}
```

```html
<ul>
  <li>第一個</li>
  <li>第二個</li>
  <li>第三個</li>
</ul>
```

會選中：

```html
<li>第一個</li>
```

因為它是父元素 `ul` 裡面的第一個子元素。

## first-child 的重要觀念

`:first-child` 看的是：

```text
這個元素是不是父元素裡的第一個孩子？
```

它不是只看同類型元素。

例如：

```css
section div:first-child {
  color: red;
}
```

```html
<section>
  <p>第一個孩子</p>
  <div>第一個 div</div>
</section>
```

這裡的 `div` 不會被選中。

原因是：

```text
這個 div 雖然是第一個 div，
但它不是 section 裡的第一個孩子。
section 裡的第一個孩子是 p。
```

## last-child

```css
li:last-child {
  color: red;
}
```

```html
<ul>
  <li>第一個</li>
  <li>第二個</li>
  <li>第三個</li>
</ul>
```

會選中：

```html
<li>第三個</li>
```

因為它是父元素 `ul` 裡面的最後一個子元素。

## nth-child(n)

`:nth-child(n)` 會根據元素在父元素中的順序選取元素。

```css
li:nth-child(2) {
  color: red;
}
```

```html
<ul>
  <li>第一個</li>
  <li>第二個</li>
  <li>第三個</li>
</ul>
```

會選中：

```html
<li>第二個</li>
```

## nth-child 常見寫法

| 寫法 | 意思 |
|---|---|
| `:nth-child(1)` | 第 1 個子元素 |
| `:nth-child(2)` | 第 2 個子元素 |
| `:nth-child(odd)` | 奇數位置 |
| `:nth-child(even)` | 偶數位置 |
| `:nth-child(n+3)` | 從第 3 個開始往後 |
| `:nth-child(-n+3)` | 前 3 個 |
| `:nth-child(3n)` | 3 的倍數位置 |
| `:nth-child(3n+1)` | 第 1、4、7、10... 個 |

## nth-child 範例

```css
li:nth-child(even) {
  background-color: #eee;
}
```

```html
<ul>
  <li>第 1 個</li>
  <li>第 2 個</li>
  <li>第 3 個</li>
  <li>第 4 個</li>
</ul>
```

會選中：

```html
<li>第 2 個</li>
<li>第 4 個</li>
```

## nth-last-child(n)

`:nth-last-child(n)` 是從最後一個子元素往前數。

```css
li:nth-last-child(2) {
  color: red;
}
```

```html
<ul>
  <li>第一個</li>
  <li>第二個</li>
  <li>第三個</li>
  <li>第四個</li>
</ul>
```

會選中：

```html
<li>第三個</li>
```

因為它是倒數第 2 個子元素。

## first-of-type

`:first-of-type` 會選中同類型元素中的第一個。

```css
section div:first-of-type {
  color: red;
}
```

```html
<section>
  <p>第一個孩子</p>
  <div>第一個 div</div>
  <div>第二個 div</div>
</section>
```

會選中：

```html
<div>第一個 div</div>
```

因為它是 `section` 裡第一個 `div`。

雖然它不是 `section` 的第一個孩子，但它是第一個 `div`。

## last-of-type

`:last-of-type` 會選中同類型元素中的最後一個。

```css
section div:last-of-type {
  color: red;
}
```

```html
<section>
  <div>第一個 div</div>
  <div>第二個 div</div>
  <p>段落</p>
</section>
```

會選中：

```html
<div>第二個 div</div>
```

因為它是 `section` 裡最後一個 `div`。

## nth-of-type(n)

`:nth-of-type(n)` 會根據同類型元素的順序來選取元素。

```css
section div:nth-of-type(2) {
  color: red;
}
```

```html
<section>
  <p>段落</p>
  <div>第一個 div</div>
  <div>第二個 div</div>
</section>
```

會選中：

```html
<div>第二個 div</div>
```

因為它是 `section` 裡第 2 個 `div`。

## nth-child 和 nth-of-type 的差別

這是結構偽類中最容易混淆的地方。

## 一句話區分

```text
nth-child：看所有子元素的第幾個。
nth-of-type：看同類型元素的第幾個。
```

## 範例

```css
section div:nth-child(1) {
  color: red;
}

section div:nth-of-type(1) {
  background-color: yellow;
}
```

```html
<section>
  <p>第一個孩子</p>
  <div>第一個 div</div>
  <div>第二個 div</div>
</section>
```

## `section div:nth-child(1)` 會選中誰？

不會選中任何 `div`。

原因是：

```text
nth-child(1) 要求這個 div 必須是 section 裡的第一個孩子。
但 section 裡的第一個孩子是 p，不是 div。
```

## `section div:nth-of-type(1)` 會選中誰？

會選中：

```html
<div>第一個 div</div>
```

原因是：

```text
nth-of-type(1) 是看同類型 div 中的第一個。
```

## 快速區分表

| 想做的事 | 使用 |
|---|---|
| 選父元素裡的第一個孩子 | `:first-child` |
| 選父元素裡的最後一個孩子 | `:last-child` |
| 選父元素裡的第 n 個孩子 | `:nth-child(n)` |
| 從後面數第 n 個孩子 | `:nth-last-child(n)` |
| 選同類型的第一個 | `:first-of-type` |
| 選同類型的最後一個 | `:last-of-type` |
| 選同類型的第 n 個 | `:nth-of-type(n)` |

## 偽類選擇器的實務使用時機

偽類選擇器適合用在：

- 滑鼠互動效果
- 表單 focus 效果
- disabled / checked 狀態
- 列表奇偶行樣式
- 選取第一個、最後一個或第 n 個元素
- 排除特定元素

例如：

```css
.card:hover {
  transform: translateY(-2px);
}

.form-input:focus {
  border-color: blue;
}

.table-row:nth-child(even) {
  background-color: #f7f7f7;
}

.list-item:not(.active) {
  color: #666;
}
```

## 偽類常見錯誤

### 錯誤 1：把 nth-child 當成 nth-of-type

```css
section div:nth-child(1) {
  color: red;
}
```

這不是選第一個 `div`。

它是選：

```text
同時是 div，且剛好是父元素第 1 個孩子的元素。
```

如果想選第一個 `div`，通常應該用：

```css
section div:first-of-type {
  color: red;
}
```

或：

```css
section div:nth-of-type(1) {
  color: red;
}
```

### 錯誤 2：以為 hover 只能用在 a

```css
.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}
```

`:hover` 不只可以用在 `a`，也可以用在很多元素上。

### 錯誤 3：忽略 focus 的鍵盤操作

```css
input:focus {
  outline: none;
}
```

如果只拿掉 `outline`，但沒有提供其他 focus 樣式，鍵盤使用者會不知道目前焦點在哪裡。

比較建議：

```css
input:focus {
  outline: 2px solid blue;
}
```

或：

```css
input:focus {
  border-color: blue;
}
```

## 偽元素選擇器

偽元素選擇器用來選取元素的一部分，或在元素前後建立裝飾性內容。

偽元素通常使用雙冒號 `::`。

## 一句話理解

> 偽元素不是實際 HTML 標籤，而是 CSS 產生或選取出來的局部效果。

## 常見偽元素

| 偽元素 | 意思 |
|---|---|
| `::first-letter` | 選中第一個字母或文字 |
| `::first-line` | 選中第一行文字 |
| `::selection` | 選中文字時的樣式 |
| `::before` | 在元素內容前面建立偽元素 |
| `::after` | 在元素內容後面建立偽元素 |

## first-letter

```css
p::first-letter {
  font-size: 32px;
  color: red;
}
```

```html
<p>Hello world</p>
```

這會讓段落第一個字母 `H` 套用特殊樣式。

## first-line

```css
p::first-line {
  color: blue;
}
```

這會讓段落第一行文字變成藍色。

注意：

```text
第一行會受到容器寬度、字體大小、換行結果影響。
```

所以不同螢幕寬度下，第一行包含的文字可能不同。

## selection

```css
p::selection {
  background-color: yellow;
  color: red;
}
```

當使用者選取 `p` 裡面的文字時，選取區域會套用這組樣式。

## before 和 after

`::before` 和 `::after` 常用來在元素前後加入裝飾性內容。

## 語法

```css
元素::before {
  content: "";
}

元素::after {
  content: "";
}
```

## 範例

```css
.required::after {
  content: "*";
  color: red;
  margin-left: 4px;
}
```

```html
<label class="required">姓名</label>
```

畫面上會看到：

```text
姓名*
```

但 HTML 裡面實際上仍然只有：

```html
<label class="required">姓名</label>
```

## before 和 after 的重要觀念

`::before` 和 `::after` 必須設定 `content` 才會顯示。

即使只是裝飾線條，也通常要寫：

```css
.box::before {
  content: "";
  display: block;
  width: 20px;
  height: 2px;
  background-color: red;
}
```

如果沒有 `content`，偽元素通常不會出現。

## 偽元素不是 DOM 元素

例如：

```css
.card::before {
  content: "";
}
```

這不會真的在 HTML 裡新增一個標籤。

你在 HTML 中不會看到：

```html
<before></before>
```

偽元素是 CSS 產生的視覺效果，不是真正的 DOM 節點。

## 偽類 vs 偽元素

| 比較項目 | 偽類 | 偽元素 |
|---|---|---|
| 符號 | `:` | `::` |
| 代表 | 元素狀態或結構位置 | 元素的一部分或裝飾內容 |
| 範例 | `:hover`、`:focus`、`:nth-child(2)` | `::before`、`::after`、`::first-line` |
| 是否是真實元素 | 不是 | 不是 |
| 常見用途 | 互動、狀態、位置 | 裝飾、局部文字、補充視覺效果 |

## 實務使用時機

偽元素適合用在：

- 必填欄位星號
- 裝飾線條
- icon 裝飾
- 清除浮動
- 卡片 hover 裝飾效果
- 文字第一行或第一個字的特殊樣式

例如：

```css
.section-title::after {
  content: "";
  display: block;
  width: 40px;
  height: 3px;
  background-color: currentColor;
  margin-top: 8px;
}
```

## 常見錯誤

### 錯誤 1：忘記寫 content

錯誤寫法：

```css
.box::before {
  width: 10px;
  height: 10px;
  background-color: red;
}
```

正確寫法：

```css
.box::before {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  background-color: red;
}
```

### 錯誤 2：把重要內容放在偽元素裡

不建議：

```css
.price::before {
  content: "特價";
}
```

如果「特價」是重要內容，最好直接寫在 HTML 中，因為偽元素主要適合裝飾性內容。

### 錯誤 3：把偽類和偽元素符號搞混

```css
button:hover {
  background-color: blue;
}
```

`:hover` 是偽類。

```css
button::before {
  content: "";
}
```

`::before` 是偽元素。

## 複合選擇器的組合使用

實務上，複合選擇器常常會一起出現。

例如：

```css
.card > .title:hover {
  color: blue;
}
```

這段可以拆成：

```text
.card > .title：選中 .card 的直接子層 .title
:hover：當滑鼠移到這個 .title 上時
```

再例如：

```css
input[type="checkbox"]:checked + label {
  color: red;
}
```

這段可以拆成：

```text
input[type="checkbox"]：選中 type 是 checkbox 的 input
:checked：這個 input 必須處於勾選狀態
+ label：選中它後面緊接著的 label
```

## 實務範例：checkbox 控制文字樣式

```css
input[type="checkbox"]:checked + label {
  text-decoration: line-through;
  color: #999;
}
```

```html
<input id="todo1" type="checkbox">
<label for="todo1">完成 CSS 筆記</label>
```

當 checkbox 被勾選時，後面的 label 會變成刪除線和灰色。

這個例子包含：

```text
屬性選擇器
偽類選擇器
相鄰兄弟選擇器
```

## 實務範例：卡片標題加裝飾線

```css
.card > .title::after {
  content: "";
  display: block;
  width: 32px;
  height: 2px;
  background-color: currentColor;
  margin-top: 8px;
}
```

```html
<div class="card">
  <h2 class="title">最新消息</h2>
</div>
```

這個例子包含：

```text
子選擇器
類選擇器
偽元素選擇器
```

## 複合選擇器與優先級初步觀念

複合選擇器可能會影響 CSS 優先級。

例如：

```css
.card .title {
  color: red;
}

.title {
  color: blue;
}
```

```html
<div class="card">
  <h2 class="title">標題</h2>
</div>
```

這裡 `.card .title` 通常會比 `.title` 優先，因為它包含兩個 class 條件。

可以先粗略理解：

```text
選擇器越具體，通常優先級越高。
```

但要注意：

```text
空格、>、+、~ 這些關係符號本身不增加優先級。
真正影響優先級的是其中包含的 id、class、屬性、偽類、標籤、偽元素。
```

例如：

```css
.card > .title {
  color: red;
}
```

和：

```css
.card .title {
  color: blue;
}
```

兩者都包含兩個 class：

```text
.card
.title
```

所以它們的優先級相同。

如果同時作用在同一個元素上，後寫的 CSS 規則會覆蓋前面的規則。

## 實務建議

## 1. 不要把選擇器寫得太深

不建議：

```css
.page .main .section .card .header .title span {
  color: red;
}
```

比較建議：

```css
.card-title {
  color: red;
}
```

或：

```css
.card .title {
  color: red;
}
```

選擇器越深，越依賴 HTML 結構，也越難維護。

## 2. 優先使用 class 作為樣式主體

實務上通常會以 class 作為主要樣式入口：

```css
.button {
  padding: 8px 16px;
}

.button:hover {
  background-color: #eee;
}
```

比起直接依賴標籤或太長的結構選擇器，class 更容易重用和維護。

## 3. 用關係選擇器限制範圍

例如：

```css
.article p {
  line-height: 1.8;
}
```

這樣可以只影響 `.article` 裡面的段落，不會影響整個網站的所有 `p`。

## 4. 用子選擇器避免影響深層元素

例如：

```css
.menu > li {
  border-bottom: 1px solid #ddd;
}
```

這樣只會影響第一層 `li`，不會影響巢狀選單裡的 `li`。

## 5. 用偽類處理狀態，不要急著加 JS

例如 hover、focus、checked、disabled 這些狀態，很多時候可以直接用 CSS 處理：

```css
.button:hover {
  opacity: 0.8;
}

.input:focus {
  border-color: blue;
}

.checkbox:checked + .label {
  color: red;
}
```

## 常見混淆點總整理

## 1. 空格和 `>` 不一樣

```css
.nav a {
  color: red;
}
```

選 `.nav` 裡面所有層級的 `a`。

```css
.nav > a {
  color: red;
}
```

只選 `.nav` 的直接子層 `a`。

## 2. `+` 和 `~` 不一樣

```css
h2 + p {
  color: red;
}
```

只選緊接在 `h2` 後面的第一個 `p`。

```css
h2 ~ p {
  color: red;
}
```

選 `h2` 後面所有同層的 `p`。

## 3. 逗號不是層級

```css
.card, .title {
  color: red;
}
```

代表 `.card` 和 `.title` 都套用樣式。

不是 `.card` 裡面的 `.title`。

## 4. `[class="box"]` 和 `.box` 不完全一樣

```css
[class="box"] {
  color: red;
}
```

只會選中 class 屬性完整等於 `box` 的元素。

```css
.box {
  color: red;
}
```

會選中 class 清單中包含 `box` 的元素。

例如：

```html
<div class="box active">內容</div>
```

`.box` 可以選中它，但 `[class="box"]` 不會。

## 5. `nth-child` 不是選同類型第 n 個

```css
section div:nth-child(1) {
  color: red;
}
```

意思不是選第一個 `div`。

而是：

```text
選中 section 裡面同時是 div 且是第 1 個孩子的元素。
```

如果要選第一個 `div`，通常使用：

```css
section div:nth-of-type(1) {
  color: red;
}
```

## 6. `::before` 和 `::after` 要有 content

```css
.box::before {
  content: "";
}
```

沒有 `content`，偽元素通常不會顯示。

## 7. 偽類和偽元素不同

```css
a:hover {
  color: red;
}
```

這是偽類，表示狀態。

```css
a::after {
  content: "→";
}
```

這是偽元素，表示產生或選取元素的一部分。

## 回查重點

如果之後忘記複合選擇器，可以先記這幾句：

```text
空格：選所有後代。
>：只選直接子元素。
+：只選緊接著的下一個兄弟元素。
~：選後面所有符合條件的兄弟元素。
,：多個選擇器共用同一組樣式。
[attr]：根據屬性選元素。
:hover、:focus、:nth-child()：根據狀態或結構位置選元素。
::before、::after：建立裝飾性偽元素，通常要搭配 content。
```

## 學完本節後可以接著學

學完複合選擇器後，建議接著學：

1. CSS 選擇器優先級
2. CSS 繼承與層疊
3. CSS 命名規範
4. CSS reset / normalize
5. 元件化 CSS 寫法
6. Vue scoped CSS 的作用原理

因為實務上寫 CSS 時，不只要知道「怎麼選到元素」，還要知道：

```text
誰會覆蓋誰？
樣式會不會外洩？
選擇器會不會太難維護？
```

## 一句話總結

複合選擇器就是在基礎選擇器之上，透過元素關係、屬性、狀態、結構位置與偽元素，更精準地選中目標元素；實務上要特別注意選取範圍、層級深度與可維護性。