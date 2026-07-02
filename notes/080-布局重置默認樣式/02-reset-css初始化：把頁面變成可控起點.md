---
source_atomic:
  - atomic/080-布局重置默認樣式/03-reset-css-核心概念與初始化範例.md
  - atomic/080-布局重置默認樣式/04-常見-reset-css-範例.md
---

# reset.css 初始化：把頁面變成可控起點

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 reset.css 的核心目的。
- 看懂常見 reset.css 片段在重置哪些默認樣式。
- 分辨 reset 樣式和專案設計樣式的不同。
- 判斷複製 reset.css 時哪些規則需要理解後再保留。

## 問題情境

當頁面開始進入正式布局時，你可能會希望畫面像一張乾淨的白紙：

- 文字、清單、標題的預設間距先歸零。
- 圖片、表單、連結等元素不要帶著瀏覽器各自的預設外觀。
- 後續所有視覺效果都由你自己的 CSS 明確決定。

`reset.css` 的思路，就是先把常見默認樣式清掉或統一，讓開發者依照設計稿重新添加具體樣式。

## 一句話理解

`reset.css` 是一組初始化 CSS，用來選中有默認樣式的元素，清除或統一它們的預設呈現。

它的目標不是讓頁面變漂亮，而是讓頁面變得可控。

## reset 的基本技巧

reset 的技巧可以簡化成一句話：

> 選到具有默認樣式效果的元素，清空或統一它們的默認樣式。

最常見的起點是清除內外距：

```css
* {
  margin: 0;
  padding: 0;
}
```

不過完整的 reset.css 通常不只處理 `margin` 和 `padding`，還會處理清單、圖片、連結、表單、字型與輔助工具類。

## 常見 reset 片段拆解

### 清除內外距

```css
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
li {
  margin: 0;
  padding: 0;
}
```

這類規則會把常見文字與列表元素的默認間距清掉，避免標題、段落、清單自帶間距干擾版面。

有些 reset 會使用 `*`，有些會列出具體元素。列出具體元素的好處是更明確：你可以看出哪些元素正在被初始化。

### 清除列表符號

```css
ul,
ol {
  list-style: none;
}
```

清單常被拿來製作導覽列、選單或卡片列表。這些場景通常不需要瀏覽器自帶的圓點或編號，因此會先移除。

如果你正在寫的是文章內容或說明文件，則不一定要清掉列表符號，因為列表符號本身有助於閱讀。

### 處理斜體語意元素

```css
em,
i {
  font-style: normal;
}
```

`em` 和 `i` 預設可能呈現斜體。有些專案會希望它們不自動傾斜，而是由 class 或設計系統決定視覺樣式。

這類規則要特別小心：如果你的內容真的需要保留斜體語意與視覺，清掉後要記得用其他樣式補回來。

### 處理圖片

```css
img {
  border: 0;
  vertical-align: middle;
}
```

常見目的包含：

- 移除舊瀏覽器中圖片外層連結可能出現的邊框。
- 減少圖片作為 inline 元素時底部出現空白縫隙的問題。

有些 reset 會使用：

```css
img {
  display: block;
}
```

這也能避免圖片底部縫隙，但會改變圖片的顯示模式。是否採用，要看專案中圖片常被當作 inline 內容還是區塊元素使用。

### 處理連結

```css
a {
  color: #666;
  text-decoration: none;
}

a:hover {
  color: #c81623;
}
```

連結預設常有顏色與底線。reset.css 有時會先把連結樣式統一，再由具體元件覆蓋。

需要注意的是，連結的 hover、focus、visited 狀態會影響可用性。若移除底線或 outline，應確保仍有清楚的互動提示。

### 處理表單與字型

```css
button,
input {
  font-family: Microsoft YaHei, Heiti SC, tahoma, arial, sans-serif;
}
```

表單元素在不同瀏覽器中常有自己的字型、字號和外觀。reset.css 可能會統一表單字型，讓按鈕和輸入框更接近頁面整體文字風格。

更現代的寫法常會使用：

```css
button,
input,
select,
textarea {
  font: inherit;
}
```

這表示讓表單元素繼承父層文字設定，減少和周圍文字不一致的情況。

### 輔助工具類

有些 reset.css 會包含通用工具類：

```css
.hide,
.none {
  display: none;
}
```

或清除浮動：

```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

這些已經不只是「重置元素默認樣式」，而是專案常用工具。若放在 reset.css 裡，團隊需要知道它們是通用工具，而不是瀏覽器預設行為的一部分。

## 新浪與淘寶 reset 的共同重點

不同網站或團隊的 reset.css 寫法不完全一樣，但常見方向很接近。

| 重置目標 | 常見寫法 | 目的 |
| --- | --- | --- |
| 文字與結構元素 | 對 `body`、`p`、標題、清單設定 `margin: 0; padding: 0;` | 清掉預設間距 |
| 圖片與欄位框 | `fieldset, img { border: 0; }` | 移除不需要的邊框 |
| 清單 | `ul, ol { list-style: none; }` | 移除列表符號 |
| 連結 | `a { text-decoration: none; }` | 統一連結外觀 |
| 表格 | `border-collapse: collapse; border-spacing: 0;` | 清理表格預設間距 |
| 表單 | 統一 `button`、`input`、`textarea` 字型與字號 | 減少瀏覽器差異 |

這些範例最重要的不是逐字背下來，而是看懂每一段在處理哪一類默認樣式。

## 實務使用方式

實務上使用 reset.css 時，可以遵守幾個原則：

1. 把 reset.css 放在專案樣式的最前面。
2. reset 只做初始化，不直接承擔頁面設計。
3. 只保留專案真的需要的 reset 規則。
4. 複製舊範例時，先理解兼容性註解與歷史寫法。
5. 在 reset 之後再撰寫元件、版面與主題樣式。

例如樣式載入順序可以是：

```html
<link rel="stylesheet" href="./reset.css">
<link rel="stylesheet" href="./layout.css">
<link rel="stylesheet" href="./components.css">
```

這樣 reset 先建立基準，後面的 CSS 再負責真正的視覺設計。

## 常見錯誤

### 誤解：reset.css 越長越完整

reset.css 不是越長越好。太多不理解的規則可能會清掉有用的預設，例如表單 focus 樣式、列表語意提示或文字可讀性。好的 reset 應該服務專案，而不是把所有瀏覽器樣式都粗暴抹掉。

### 誤解：複製別人的 reset.css 就一定適合自己專案

不同專案的元素使用習慣不同。電商頁、文章站、後台系統、行動網頁需要的 reset 不一定一樣。複製前要看懂它處理了哪些元素，避免引入不需要的副作用。

### 誤解：reset.css 可以取代後續樣式

reset.css 只是初始化。它不應該決定完整的品牌色、間距系統、元件外觀。這些應該由專案自己的樣式層負責。

### 誤解：舊版兼容寫法永遠都要保留

有些 reset 範例包含舊瀏覽器兼容寫法，例如特殊 hack 或舊版 IE 相關處理。若你的專案不需要支援這些環境，可以評估移除，讓 CSS 更乾淨。

## 重點整理

- `reset.css` 的目標是清除或統一瀏覽器默認樣式。
- 它能讓頁面從更可控的基準開始，而不是直接完成設計。
- 常見 reset 會處理內外距、列表、圖片、連結、表單、表格等元素。
- 複製 reset.css 時要理解每段規則的目的。
- reset 應放在專案樣式前面，後續再撰寫布局與元件樣式。

## 自我檢查

1. `reset.css` 和一般元件樣式最大的差別是什麼？
2. 為什麼清單元素常會設定 `list-style: none`？
3. `img { vertical-align: middle; }` 或 `img { display: block; }` 常用來處理什麼問題？
4. 複製一份很舊的 reset.css 時，為什麼要先確認裡面的兼容性寫法是否仍需要？
5. 如果 reset.css 把所有 `a` 的底線都移除，還需要注意哪些互動或可用性問題？
