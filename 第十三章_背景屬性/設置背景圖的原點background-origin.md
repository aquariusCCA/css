# 設置背景圖的原點 background-origin

所屬章節：第 13 章 背景屬性  
建議搭配 demo：[`demo/background-origin/index.html`](./demo/background-origin/index.html)

---

## 本節導讀

`background-origin` 用來決定：

> **背景圖片的定位起點，要以哪一個盒模型區域作為參考。**

它常見的值只有三個：

```css
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;
```

很多初學者第一次看到 `background-origin` 時，容易誤會成：

- 背景從哪裡開始「顯示」
- 背景要不要被裁切
- 背景要不要包含 border
- 背景是不是從內容區開始畫

其實這些不完全對。

`background-origin` 真正控制的是：

```text
背景圖片的定位參考框（positioning area）
```

也就是說，它主要影響：

- `background-position`
- `background-repeat`
- 背景圖從哪個盒子開始平鋪 / 對齊

但它**不直接控制背景最後畫到哪裡**，那是 `background-clip` 的工作。

所以本節最重要的核心是：

```text
origin 控制「從哪個盒子開始定位背景」。
clip   控制「背景最後畫到哪個盒子為止」。
```

---

## 學習目標

學完本節後，你應該能夠回答：

1. `background-origin` 控制的是什麼？
2. `background-origin` 的預設值是什麼？
3. `border-box`、`padding-box`、`content-box` 各代表什麼？
4. `background-origin` 會影響背景色嗎？還是主要影響背景圖片？
5. `background-origin` 和 `background-position` 有什麼關係？
6. `background-origin` 和 `background-repeat` 有什麼關係？
7. `background-origin` 和 `background-clip` 差在哪？
8. 為什麼有 border / padding 時，`background-origin` 的差異才比較明顯？
9. `background-origin: content-box;` 為什麼常常還要搭配 `padding` 觀察？
10. 在 `background` 簡寫中，`background-origin` 如何表示？
11. 一個 box 值與兩個 box 值在 `background` 簡寫中怎麼判斷？
12. 實務上什麼情況會需要調整 `background-origin`？

---

## 關鍵字

- 中文：背景原點、背景定位原點、背景定位參考框、背景圖片原點
- 英文：`background-origin`
- 常見值：
  - `border-box`
  - `padding-box`
  - `content-box`
- 相關屬性：
  - `background-image`
  - `background-position`
  - `background-repeat`
  - `background-size`
  - `background-clip`
  - `background`
- 易混淆概念：
  - `background-origin` 不是控制裁切範圍
  - `background-origin` 不是控制背景色是否延伸到 border
  - `background-origin` 主要是控制背景圖片的定位參考框
  - `background-clip` 才是控制背景最後畫到哪裡
  - 預設值不是 `border-box`，而是 `padding-box`
  - 在 `background` 簡寫中，一個 box 值會同時指定 `origin` 與 `clip`
  - 在 `background` 簡寫中，兩個 box 值時：第一個是 `origin`，第二個是 `clip`

---

## 建議回查情境

當你遇到以下情況，可以回來查這一節：

- 背景圖位置看起來怪怪的，不知道是不是因為 padding / border 影響
- 想讓背景圖從 border 外框就開始定位
- 想讓背景圖只從內容區開始定位
- 想理解 `background-origin` 和 `background-clip` 的差別
- 在看別人的 `background` shorthand 時，看到 `padding-box content-box`
- 做卡片裝飾、底紋、框線視覺時，不知道定位應該以哪個盒子為準
- 想讓背景圖不要從 padding 區開始，而是從 content 區開始

---

## Demo 範例

本節 demo 放在：

```text
demo/background-origin/index.html
```

本節 demo 使用本地 SVG 圖檔：

```text
demo/background-origin/assets/pattern-grid.svg
demo/background-origin/assets/corner-badge.svg
demo/background-origin/assets/soft-dots.svg
```

這樣 demo 不依賴外部圖片網址，離線開啟也能正常觀看。

---

## 30 秒複習入口

- `background-origin` 決定背景圖片定位的參考框。
- 預設值是 `padding-box`。
- `border-box`：以 border 外框為背景定位起點。
- `padding-box`：以 padding 外框為背景定位起點。
- `content-box`：以 content 區域為背景定位起點。
- 它主要影響背景圖片的定位、起始平鋪與位置。
- 它不直接負責背景裁切；背景裁切是 `background-clip`。
- `background-origin` 在有 `padding`、`border`、`background-position`、`background-repeat` 時最容易看出差異。
- 在 `background` 簡寫中：
  - 一個 box 值：同時設定 `origin` 和 `clip`
  - 兩個 box 值：第一個 `origin`，第二個 `clip`

---

## 速查區

### 1. 基本語法

```css
.box {
  background-image: url("./assets/pattern-grid.svg");
  background-repeat: no-repeat;
  background-position: left top;
  background-origin: padding-box;
}
```

### 2. 三個核心值

| 值 | 代表的定位參考區域 | 直覺理解 |
|---|---|---|
| `border-box` | 以 border 外緣為背景圖片定位參考 | 從最外框開始算 |
| `padding-box` | 以 padding 外緣為背景圖片定位參考 | 不含 border，這是預設值 |
| `content-box` | 以 content 區域為背景圖片定位參考 | 只從內容區開始算 |

---

### 3. 形式定義速查

| 項目 | 說明 |
|---|---|
| 屬性名稱 | `background-origin` |
| 作用 | 設定背景圖片的定位參考框 |
| 初始值 | `padding-box` |
| 是否繼承 | 否 |
| 主要影響 | `background-position`、`background-repeat`、背景圖起始位置 |
| 相關對照 | `background-clip` 控制背景裁切範圍 |
| 多背景圖 | 可用逗號分隔，逐層對應 |
| 常見值 | `border-box`、`padding-box`、`content-box` |

---

## 正文

## 1. `background-origin` 是什麼？

`background-origin` 是 CSS 背景屬性的一員，用來設定**背景圖片的定位參考框**。

```css
.card {
  background-image: url("./assets/pattern-grid.svg");
  background-position: left top;
  background-repeat: no-repeat;
  background-origin: content-box;
}
```

這段的意思不是：

```text
背景只會顯示在 content 區。
```

而是：

```text
背景圖片的位置，是以 content-box 當作參考起點來計算。
```

這就是為什麼 `background-origin` 和 `background-clip` 常被拿來一起比較。

---

## 2. 預設值是 `padding-box`

`background-origin` 的初始值是：

```css
background-origin: padding-box;
```

也就是說，如果你沒有特別設定：

```css
.box {
  background-image: url("./assets/pattern-grid.svg");
}
```

瀏覽器會預設用 `padding-box` 來作為背景圖片的定位參考。

這代表：

- 背景圖的定位與平鋪，預設不從 border 區開始算
- 而是從 padding 區的外邊界開始算

---

## 3. 三個值怎麼理解？

### 3.1 `border-box`

```css
background-origin: border-box;
```

代表：

```text
背景圖片的定位參考框是 border-box。
```

也就是從元素最外層框線開始計算背景圖位置。

如果你有粗 border，並且背景圖設在左上角：

```css
background-position: left top;
```

那麼圖案會更靠近元素最外圍。

---

### 3.2 `padding-box`

```css
background-origin: padding-box;
```

代表：

```text
背景圖片的定位參考框是 padding-box。
```

這是預設值。

背景圖不把 border 區當作起點，而是從 padding 區開始定位。

---

### 3.3 `content-box`

```css
background-origin: content-box;
```

代表：

```text
背景圖片的定位參考框是 content-box。
```

如果元素有 padding，背景圖會明顯往內縮，因為它是從內容區開始定位，不是從 padding 外邊緣開始。

---

## 4. 為什麼差異常常看不出來？

因為如果你的元素沒有：

- `padding`
- `border`
- `background-position`
- `background-repeat: no-repeat`
- 或是夠明顯的背景圖案

那三個值的視覺差異可能不大。

要清楚觀察 `background-origin`，建議：

```css
.box {
  padding: 32px;
  border: 16px dashed #93c5fd;
  background-image: url("./assets/corner-badge.svg");
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 96px 96px;
}
```

這樣切換 `border-box`、`padding-box`、`content-box` 時，差異就會很明顯。

---

## 5. 和 `background-position` 的關係

`background-position` 負責決定背景圖要放在哪裡。  
`background-origin` 決定這個「哪裡」是以哪個盒子為參考。

例如：

```css
.box {
  background-position: left top;
}
```

如果搭配不同的 `background-origin`：

```css
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;
```

雖然都寫 `left top`，但「左上角」其實分別是：

- `border-box` 的左上角
- `padding-box` 的左上角
- `content-box` 的左上角

這就是為什麼 `background-origin` 改變時，背景圖看起來會位移。

---

## 6. 和 `background-repeat` 的關係

`background-repeat` 決定背景圖是否重複平鋪。  
`background-origin` 會影響平鋪的起點。

例如：

```css
.box {
  background-image: url("./assets/pattern-grid.svg");
  background-repeat: repeat;
  background-origin: content-box;
}
```

表示這個 pattern 的第一張起始位置，是從 content-box 開始鋪。

如果改成：

```css
background-origin: border-box;
```

那第一張 pattern 會從 border-box 開始鋪。

這在做網格背景、斜線背景、框線底紋時很有感。

---

## 7. 和 `background-clip` 的關係

這是最重要的比較。

### `background-origin`

控制：

```text
背景圖片從哪個盒子開始定位
```

### `background-clip`

控制：

```text
背景最後畫到哪個盒子為止
```

例如：

```css
.box {
  background-origin: content-box;
  background-clip: border-box;
}
```

意思是：

```text
背景從 content-box 開始定位，
但最後可以畫到 border-box 為止。
```

反過來：

```css
.box {
  background-origin: border-box;
  background-clip: content-box;
}
```

意思是：

```text
背景從 border-box 開始定位，
但最後只會顯示在 content-box 範圍內。
```

### 一句話區分

```text
origin：從哪裡開始算位置
clip  ：畫到哪裡為止
```

---

## 8. 和 `background-color` 的關係

`background-origin` 主要影響背景圖片。  
背景顏色通常不需要「定位」，所以在概念上重點仍然是背景圖片。

```css
.box {
  background-color: #eff6ff;
  background-image: url("./assets/corner-badge.svg");
  background-origin: content-box;
}
```

這裡真正會明顯受 `background-origin` 影響的是背景圖片的位置。

---

## 9. 多背景圖中的 `background-origin`

和其他背景屬性一樣，`background-origin` 也可以逐層設定。

```css
.card {
  background-image:
    url("./assets/corner-badge.svg"),
    url("./assets/pattern-grid.svg");

  background-origin:
    content-box,
    border-box;
}
```

對應方式如下：

| 層級 | `background-image` | `background-origin` |
|---|---|---|
| 第 1 層，最上層 | `corner-badge.svg` | `content-box` |
| 第 2 層，下層 | `pattern-grid.svg` | `border-box` |

也就是：

```text
第一個 origin 對應第一張背景圖。
第二個 origin 對應第二張背景圖。
```

---

## 10. 在 `background` 簡寫中的表示方式

### 一個 box 值

```css
.box {
  background: url("./assets/pattern-grid.svg") padding-box;
}
```

這裡的 `padding-box` 會同時表示：

```css
background-origin: padding-box;
background-clip: padding-box;
```

### 兩個 box 值

```css
.box {
  background: url("./assets/pattern-grid.svg") padding-box content-box;
}
```

代表：

```css
background-origin: padding-box;
background-clip: content-box;
```

簡單記：

```text
一個 box：origin 和 clip 都用它。
兩個 box：第一個 origin，第二個 clip。
```

---

## 11. 實務案例 1：右上角裝飾圖

```css
.card {
  padding: 32px;
  border: 14px solid #bfdbfe;
  background-color: #ffffff;
  background-image: url("./assets/corner-badge.svg");
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 88px 88px;
  background-origin: content-box;
}
```

這樣背景圖會以 content-box 為右上角參考，而不是從 border 或 padding 外框開始。

適合：

- 卡片內角裝飾
- 內容區專屬圖案
- 不想讓圖案靠太外層時

---

## 12. 實務案例 2：外框紋理背景

```css
.frame {
  padding: 24px;
  border: 18px solid #1d4ed8;
  background-image: url("./assets/pattern-grid.svg");
  background-repeat: repeat;
  background-origin: border-box;
}
```

這樣紋理會從 border-box 就開始鋪，視覺上更像整個框都參與了背景定位。

---

## 13. 常見錯誤與排查

### 錯誤 1：把 `origin` 當成 `clip`

```css
.box {
  background-origin: content-box;
}
```

這不代表背景只顯示在 content 區。  
它代表的是背景圖片定位從 content-box 開始算。

如果你要控制背景只畫到哪裡，應該看：

```css
background-clip
```

---

### 錯誤 2：元素沒有 padding / border，看不出差異

```css
.box {
  background-origin: border-box;
}
```

如果沒有 `padding` 或 `border`，三個 box 很可能非常接近，看不出差異。

建議補上：

```css
padding: 24px;
border: 12px solid #93c5fd;
```

---

### 錯誤 3：背景圖預設平鋪，差異不明顯

如果用 `repeat` 且圖案很小，有時候很難第一眼看懂。

學習時可先用：

```css
background-repeat: no-repeat;
background-position: left top;
background-size: 96px 96px;
```

這樣最容易觀察背景原點的差異。

---

### 錯誤 4：在 shorthand 中搞混 box 值

```css
background: url("./assets/pattern-grid.svg") padding-box content-box;
```

這裡不是兩層背景。  
而是：

```text
padding-box = background-origin
content-box = background-clip
```

---

## 14. 面試與讀碼常見問法

### 問題 1：`background-origin` 的預設值是什麼？

預設值是：

```css
background-origin: padding-box;
```

---

### 問題 2：`background-origin` 控制什麼？

它控制背景圖片的定位參考框，也就是背景圖位置與平鋪起點是從哪個盒子開始計算。

---

### 問題 3：`background-origin` 和 `background-clip` 差在哪？

- `background-origin`：從哪個盒子開始定位背景
- `background-clip`：背景最後畫到哪個盒子為止

---

### 問題 4：`border-box`、`padding-box`、`content-box` 差在哪？

它們分別代表：

- 最外層 border 區域
- border 內側的 padding 區域
- 最內層內容區域

---

### 問題 5：一個 box 值和兩個 box 值在 `background` shorthand 中怎麼判斷？

- 一個 box 值：同時作為 `background-origin` 和 `background-clip`
- 兩個 box 值：第一個 `background-origin`，第二個 `background-clip`

---

## 15. 一句話抓核心

> `background-origin` 決定背景圖片「從哪個盒子開始定位」；它影響背景圖的位置與平鋪起點，而不是背景最後畫到哪裡。

---

## 自測問題

1. `background-origin` 控制的是背景定位參考框，還是背景裁切範圍？
2. `background-origin` 的預設值是什麼？
3. `border-box`、`padding-box`、`content-box` 的差別是什麼？
4. `background-origin` 和 `background-position` 有什麼關係？
5. `background-origin` 和 `background-repeat` 有什麼關係？
6. `background-origin` 和 `background-clip` 差在哪？
7. 為什麼元素沒有 border / padding 時，差異可能不明顯？
8. 在 `background` 簡寫中，一個 box 值代表什麼？
9. 在 `background` 簡寫中，兩個 box 值如何分配給 `origin` 和 `clip`？
10. 多背景圖時，`background-origin` 如何逐層對應？

---

## 練習題

### 練習 1：比較三個 origin 值

建立三個盒子，共用：

```css
padding: 32px;
border: 16px dashed #93c5fd;
background-image: url("./assets/corner-badge.svg");
background-repeat: no-repeat;
background-position: left top;
background-size: 96px 96px;
```

分別設定：

```css
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;
```

觀察背景圖左上角對齊位置的差異。

---

### 練習 2：搭配 `background-clip`

建立兩個盒子：

```css
background-origin: border-box;
background-clip: content-box;
```

與：

```css
background-origin: content-box;
background-clip: border-box;
```

說明這兩者差在哪裡。

---

### 練習 3：多背景圖

建立一個卡片：

- 第 1 層：右上角裝飾圖，以 `content-box` 為 origin
- 第 2 層：格紋底圖，以 `border-box` 為 origin

提示：

```css
background-image:
  url("./assets/corner-badge.svg"),
  url("./assets/pattern-grid.svg");

background-origin:
  content-box,
  border-box;
```

---

## 延伸閱讀

- 上一篇：背景複合寫法 `background`
- 下一篇：背景裁切 `background-clip`
- 建議搭配：
  - `background-position`
  - `background-repeat`
  - `background-clip`
  - `background`
  - `background-size`

---

## 參考資料

- MDN Web Docs：`background-origin`
- MDN Web Docs：`background-clip`
- MDN Web Docs：`background`
