---
source_atomic:
  - atomic/070-元素的顯示與隱藏/02-display-顯示和隱藏.md
  - atomic/070-元素的顯示與隱藏/03-visibility-顯示和隱藏.md
---

# display: none 與 visibility: hidden：隱藏元素時是否保留位置

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `display: none` 如何隱藏元素。
- 說明 `visibility: hidden` 如何隱藏元素。
- 分辨兩者在版面佔位上的差異。
- 依照「是否保留原本位置」選擇合適的隱藏方式。

## 問題情境

網頁中常需要暫時隱藏元素：例如切換選單、收合提示訊息、顯示或隱藏互動區塊。這時候只知道「把元素藏起來」還不夠，還要判斷一件很重要的事：

隱藏之後，元素原本佔據的版面位置要不要保留？

如果不保留位置，後面的元素會補上來；如果保留位置，畫面會留下原本的空間。`display: none` 和 `visibility: hidden` 最大的差異就在這裡。

## 一句話理解

`display: none` 會讓元素消失且不佔位；`visibility: hidden` 會讓元素看不見，但仍保留原本位置。

## `display: none`：隱藏並移出版面

`display` 屬性原本用來設定元素的顯示方式，例如 block、inline、flex。當它被設定為 `none` 時，元素會被隱藏，而且不再佔有原本的版面位置。

```css
.peppa {
  display: none;
  width: 200px;
  height: 200px;
  background-color: pink;
}

.george {
  width: 200px;
  height: 200px;
  background-color: skyblue;
}
```

```html
<div class="peppa">佩奇</div>
<div class="george">喬治</div>
```

在這個例子中，`.peppa` 設定 `display: none` 後不會顯示，也不會占用 200px 高度。因此 `.george` 會往上補到 `.peppa` 原本的位置。

如果要把元素重新顯示出來，可以把 `display` 改回合適的顯示模式，例如：

```css
.peppa {
  display: block;
}
```

這裡的 `display: block` 不只代表「顯示」，也代表元素用 block 的方式參與版面。

## `visibility: hidden`：隱藏但保留位置

`visibility` 屬性用來指定元素是否可見。常見值有：

```css
visibility: visible;
visibility: hidden;
```

當元素設定為 `visibility: hidden` 時，元素本身看不見，但它仍然佔有原本的版面空間。

```css
.baba {
  visibility: hidden;
  width: 200px;
  height: 200px;
  background-color: pink;
}

.mama {
  width: 200px;
  height: 200px;
  background-color: skyblue;
}
```

```html
<div class="baba">豬爸爸</div>
<div class="mama">豬媽媽</div>
```

在這個例子中，`.baba` 看不見，但它的 200px 高度仍然保留。因此 `.mama` 不會往上補位，畫面中會留下 `.baba` 原本所在的空間。

## 差異對照

| 寫法 | 元素是否可見 | 是否保留原本位置 | 後面的元素是否補位 | 常見用途 |
| --- | --- | --- | --- | --- |
| `display: none` | 不可見 | 不保留 | 會補位 | 收合區塊、切換頁籤內容、完全不讓元素參與版面 |
| `visibility: hidden` | 不可見 | 保留 | 不會補位 | 暫時隱藏但避免版面跳動、保留佔位的提示或元件 |

判斷時可以先問一句話：

這個元素隱藏後，其他元素要不要補上來？

- 要補上來：使用 `display: none`。
- 不要補上來：使用 `visibility: hidden`。

## 常見錯誤

### 只記得兩者都能隱藏，忘記佔位差異

很多初學者會把 `display: none` 和 `visibility: hidden` 都理解成「看不到」，但版面行為完全不同。

如果你用 `display: none` 隱藏一個表單提示，下面內容可能會突然往上移；如果你用 `visibility: hidden` 隱藏一個原本應該收合的區塊，畫面可能會留下一大片空白。

### 用 `display: block` 當作所有元素的顯示還原值

`display: block` 確實可以讓元素重新顯示，但它同時也會把元素變成 block 顯示模式。若原本元素應該是 inline、inline-block、flex 或 grid，直接還原成 `block` 可能會改變版面。

因此重新顯示元素時，要思考它原本應該用哪一種 `display` 值。

### 把 `visibility: hidden` 當成不占空間的隱藏

`visibility: hidden` 會保留位置。如果目標是讓後方內容補上來，它不是合適選擇。

## 實務判斷準則

- 下拉選單、彈窗、頁籤內容需要完全收起時，通常用 `display: none`。
- 想避免版面跳動、但暫時不顯示某個內容時，可以用 `visibility: hidden`。
- 如果隱藏後畫面多出空白，檢查是否誤用了 `visibility: hidden`。
- 如果隱藏後旁邊或下方元素突然補位，檢查是否用了 `display: none`。
- 搭配 JavaScript 做顯示與隱藏時，除了看得見與看不見，也要確認元素是否還需要佔位。

## 重點整理

- `display: none`：元素不可見，且不再佔有原本版面位置。
- `visibility: hidden`：元素不可見，但仍保留原本版面位置。
- `display: block` 可以讓元素顯示，但也會指定元素為 block 顯示模式。
- 選擇隱藏方式時，核心判斷是「隱藏後是否保留空間」。

## 自我檢查

1. 一個元素設定 `display: none` 後，後面的元素會不會補上來？
2. 一個元素設定 `visibility: hidden` 後，它原本的空間還在嗎？
3. 如果你想隱藏一段錯誤訊息，但希望表單版面不要跳動，會選哪一種寫法？為什麼？
4. 為什麼不一定能用 `display: block` 還原所有被隱藏的元素？
5. 請判斷：如果 `.box1` 高度是 200px，`.box2` 在它下面，當 `.box1` 設成 `display: none` 時，`.box2` 的位置會如何改變？
