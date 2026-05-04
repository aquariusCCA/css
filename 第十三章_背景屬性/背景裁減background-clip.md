# 背景裁減 background-clip

所屬章節：第 13 章 背景屬性  
建議搭配 demo：[`demo/background-clip/index.html`](./demo/background-clip/index.html)

> 本節保留原章節名稱「背景裁減」，但實務上也常稱為「背景裁切」。兩者在這裡指的是同一件事：背景最後被限制在哪個繪製範圍內。

---

## 本節導讀

`background-clip` 用來決定：

> **元素背景最後要畫到哪個盒模型區域為止。**

也就是說，它控制的是背景的**繪製裁切範圍**。

常見值：

```css
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;
```

進階 / 新語法中也可能看到：

```css
background-clip: border-area;
```

但一般學習與實務應先掌握：

```text
border-box
padding-box
content-box
text
```

其中前三個和盒模型有關，`text` 常用來做漸層文字。

---

## 學習目標

學完本節後，你應該能夠回答：

1. `background-clip` 控制的是什麼？
2. `background-clip` 的預設值是什麼？
3. `border-box`、`padding-box`、`content-box` 差在哪？
4. 為什麼 `border-box` 背景會畫到 border 底下，但不會蓋住 border？
5. 為什麼 dashed / dotted / 半透明 border 最適合觀察 `background-clip`？
6. `background-clip` 和 `background-origin` 差在哪？
7. `background-clip: text` 為什麼要搭配透明文字色？
8. 漸層文字怎麼寫？
9. `background-clip` 是否能用於多背景圖逐層設定？
10. 在 `background` 簡寫中，一個 box 值和兩個 box 值怎麼判斷？
11. 什麼情境適合使用 `padding-box`？
12. 什麼情境適合使用 `content-box`？
13. 什麼情境要避免過度依賴 `background-clip: text`？

---

## 關鍵字

- 中文：背景裁減、背景裁切、背景繪製範圍、背景裁切範圍、漸層文字
- 英文：`background-clip`
- 常見值：
  - `border-box`
  - `padding-box`
  - `content-box`
  - `text`
- 進階值：
  - `border-area`
- 相關屬性：
  - `background-color`
  - `background-image`
  - `background-origin`
  - `background-position`
  - `background-size`
  - `background-repeat`
  - `background`
  - `color`
  - `-webkit-text-fill-color`
- 易混淆概念：
  - `background-clip` 控制背景畫到哪裡
  - `background-origin` 控制背景圖片從哪裡開始定位
  - `background-clip` 不是背景圖片定位屬性
  - `background-clip: border-box` 背景在 border 下方，不是在 border 上方
  - `background-clip: text` 如果文字顏色不透明，通常看不到漸層文字效果
  - `background-clip` 可用逗號逐層對應多背景圖
  - `background` 簡寫中的 box 值可能同時影響 `origin` 與 `clip`

---

## 建議回查情境

當你遇到以下情況，可以回來查這一節：

- 想讓背景不要延伸到 border 底下
- 元素有透明、虛線、點線 border，背景顯示範圍不符合預期
- 想讓背景只出現在內容區，不包含 padding
- 想做漸層文字
- 不懂 `background-origin` 和 `background-clip` 差別
- 看別人的 `background: ... padding-box content-box;` 不知道怎麼拆
- 想讓多背景圖的不同圖層裁切到不同範圍
- 使用 `background: ...` 之後，原本的 clip 設定失效

---

## Demo 範例

本節 demo 放在：

```text
demo/background-clip/index.html
```

本節 demo 使用本地 SVG 圖檔：

```text
demo/background-clip/assets/pattern-grid.svg
demo/background-clip/assets/corner-badge.svg
demo/background-clip/assets/soft-dots.svg
```

這樣 demo 不依賴外部圖片網址，離線開啟也能正常觀看。

---

## 30 秒複習入口

- `background-clip` 決定背景最後被裁切到哪個區域。
- 預設值是 `border-box`。
- `border-box`：背景畫到 border 外緣下方。
- `padding-box`：背景畫到 padding 外緣，不畫到 border 下方。
- `content-box`：背景只畫在 content 區域。
- `text`：背景裁切到文字形狀內，常用於漸層文字。
- `background-clip: text` 通常要搭配：
  - `color: transparent;`
  - `-webkit-background-clip: text;`
  - `-webkit-text-fill-color: transparent;`
- `background-clip` 控制「畫到哪裡」。
- `background-origin` 控制「從哪裡開始定位」。
- 多背景圖時，`background-clip` 可以用逗號逐層對應。
- 在 `background` 簡寫中：
  - 一個 box 值：同時設定 `origin` 和 `clip`
  - 兩個 box 值：第一個是 `origin`，第二個是 `clip`

---

## 速查區

### 1. 基本語法

```css
.box {
  background-color: #93c5fd;
  background-clip: border-box;
}
```

```css
.box {
  background-image: url("./assets/pattern-grid.svg");
  background-clip: padding-box;
}
```

---

### 2. 常見值對照

| 值 | 背景繪製範圍 | 直覺理解 | 常見用途 |
|---|---|---|---|
| `border-box` | 到 border 外緣 | 背景延伸到 border 底下 | 預設值、透明 / 虛線邊框效果 |
| `padding-box` | 到 padding 外緣 | 不畫到 border 底下 | 避免背景透過 border 空隙露出 |
| `content-box` | 只到 content 區 | 背景只保留在內容區 | 內容區強調、避免 padding 有底色 |
| `text` | 文字形狀 | 背景只出現在文字內 | 漸層文字 |
| `border-area` | border 繪製區域 | 背景裁切到邊框繪製區 | 進階邊框背景效果，支援度需留意 |

---

### 3. 形式定義速查

| 項目 | 說明 |
|---|---|
| 屬性名稱 | `background-clip` |
| 作用 | 設定背景的繪製裁切範圍 |
| 初始值 | `border-box` |
| 是否繼承 | 否 |
| 影響對象 | 背景顏色與背景圖片 |
| 是否影響定位 | 不直接影響定位，定位看 `background-origin` 與 `background-position` |
| 多背景圖 | 可用逗號分隔，逐層對應 |
| 文字裁切 | `background-clip: text` |
| 常搭配 | `background-origin`、`background`、`color: transparent` |

---

## 正文

## 1. `background-clip` 是什麼？

`background-clip` 是 CSS 背景屬性的一員，用來決定背景最後要畫到哪個盒模型區域。

```css
.box {
  padding: 32px;
  border: 16px dashed rgb(37 99 235 / 50%);
  background-color: #93c5fd;
  background-clip: border-box;
}
```

這裡的 `background-clip` 控制的是：

```text
背景色和背景圖片可見範圍到哪裡為止。
```

不是控制：

- 背景圖來源
- 背景圖大小
- 背景圖位置
- 背景圖是否重複
- 元素本身大小

---

## 2. 預設值是 `border-box`

`background-clip` 的預設值是：

```css
background-clip: border-box;
```

意思是背景會延伸到 border 的外緣。

但要注意：

> 背景是畫在 border 下方，不是蓋在 border 上方。

所以如果 border 是不透明實線：

```css
border: 16px solid #1d4ed8;
```

背景雖然在 border 下方，但你可能看不到。

如果 border 是：

```css
border: 16px dashed rgb(37 99 235 / 45%);
border: 16px dotted rgb(37 99 235 / 45%);
border: 16px solid rgb(37 99 235 / 35%);
```

你就會比較容易看到背景是否延伸到 border 底下。

---

## 3. `border-box`

```css
background-clip: border-box;
```

代表：

```text
背景畫到 border-box 的外緣。
```

盒模型範圍：

```text
content + padding + border
```

適合：

- 預設情境
- 透明 border 效果
- 虛線 / 點線 border 需要露出背景
- 想讓整個元素外觀完整被背景覆蓋

### 範例

```css
.card {
  padding: 32px;
  border: 16px dashed rgb(37 99 235 / 45%);
  background-color: #dbeafe;
  background-image: url("./assets/pattern-grid.svg");
  background-clip: border-box;
}
```

背景會出現在 border 下方，因此透過 dashed border 的空隙可以看到背景。

---

## 4. `padding-box`

```css
background-clip: padding-box;
```

代表：

```text
背景畫到 padding-box 的外緣，不畫到 border 下方。
```

盒模型範圍：

```text
content + padding
```

適合：

- 想讓 border 區域保持乾淨
- 不希望背景透過 dashed / dotted border 露出
- 半透明 border 不想混到背景色
- 想讓背景從 border 內側開始顯示

### 範例

```css
.card {
  padding: 32px;
  border: 16px dashed rgb(37 99 235 / 45%);
  background-color: #dbeafe;
  background-clip: padding-box;
}
```

這時 border 底下不會有背景，dashed border 的空隙會露出父層背景。

---

## 5. `content-box`

```css
background-clip: content-box;
```

代表：

```text
背景只畫在 content-box 裡。
```

盒模型範圍：

```text
content
```

適合：

- 想讓 padding 區域保持透明
- 想讓背景只貼著內容區
- 做內容區塊強調
- 需要明確區分 content 與 padding 視覺範圍

### 範例

```css
.card {
  padding: 32px;
  border: 16px dashed rgb(37 99 235 / 45%);
  background-color: #dbeafe;
  background-clip: content-box;
}
```

這時背景只會出現在內容區，padding 和 border 區不會畫背景。

---

## 6. `text`：漸層文字

```css
background-clip: text;
```

代表：

```text
背景裁切到文字形狀內。
```

常見用法：

```css
.title {
  background: linear-gradient(90deg, #2563eb, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
```

為什麼要讓文字透明？

因為背景被裁切到文字形狀裡，但如果文字本身仍有不透明顏色，文字顏色會蓋住背景，你就看不到漸層。

### 實務建議

漸層文字要注意可讀性：

- 背景失效時，文字可能看不到
- 漸層對比不足時，閱讀困難
- 建議提供 fallback color
- 不要把大量正文都做成漸層文字
- 適合用在標題、品牌字、強調文字

更保守的寫法：

```css
.title {
  color: #2563eb;
}

@supports ((background-clip: text) or (-webkit-background-clip: text)) {
  .title {
    background: linear-gradient(90deg, #2563eb, #ec4899);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }
}
```

---

## 7. `border-area`：進階值

你可能在較新的文件中看到：

```css
background-clip: border-area;
```

它的概念是背景裁切到 border 的繪製區域。  
這對於做特殊邊框背景、漸層邊框效果可能有用。

不過入門和多數實務場景，仍應先掌握：

```css
border-box
padding-box
content-box
text
```

如果要使用 `border-area`，建議先用：

```css
@supports (background-clip: border-area) {
  .box {
    background-clip: border-area;
  }
}
```

並準備 fallback。

---

## 8. `background-clip` 和 `background-origin` 的差異

這是本節最重要的觀念。

### `background-clip`

控制：

```text
背景最後畫到哪裡為止
```

### `background-origin`

控制：

```text
背景圖片從哪個盒子開始定位
```

對照：

| 屬性 | 控制重點 | 影響 |
|---|---|---|
| `background-origin` | 背景圖片定位參考框 | 影響 `background-position`、平鋪起點 |
| `background-clip` | 背景繪製裁切範圍 | 影響背景可見範圍 |

### 範例

```css
.box {
  background-origin: content-box;
  background-clip: border-box;
}
```

意思是：

```text
背景圖片從 content-box 開始定位，
但背景最後可以畫到 border-box。
```

```css
.box {
  background-origin: border-box;
  background-clip: content-box;
}
```

意思是：

```text
背景圖片從 border-box 開始定位，
但最後只顯示在 content-box。
```

簡單記：

```text
origin：從哪裡開始算位置。
clip  ：畫到哪裡被裁掉。
```

---

## 9. 多背景圖中的 `background-clip`

多背景圖時，`background-clip` 可以用逗號逐層對應。

```css
.card {
  background-image:
    url("./assets/corner-badge.svg"),
    url("./assets/pattern-grid.svg");
  background-clip:
    content-box,
    border-box;
}
```

對應方式：

| 層級 | `background-image` | `background-clip` |
|---|---|---|
| 第 1 層，最上層 | `corner-badge.svg` | `content-box` |
| 第 2 層，下方 | `pattern-grid.svg` | `border-box` |

完整範例：

```css
.card {
  padding: 32px;
  border: 16px dashed rgb(37 99 235 / 45%);
  background-color: #ffffff;
  background-image:
    url("./assets/corner-badge.svg"),
    url("./assets/pattern-grid.svg");
  background-repeat:
    no-repeat,
    repeat;
  background-position:
    right 24px bottom 24px,
    left top;
  background-size:
    96px 96px,
    72px 72px;
  background-origin:
    content-box,
    border-box;
  background-clip:
    content-box,
    border-box;
}
```

---

## 10. 在 `background` 簡寫中的 box 值

`background` 簡寫中可以出現 box 值：

```css
border-box
padding-box
content-box
```

這些值可能同時影響：

```css
background-origin
background-clip
```

### 一個 box 值

```css
background: url("./assets/pattern-grid.svg") padding-box;
```

大致等於：

```css
background-origin: padding-box;
background-clip: padding-box;
```

### 兩個 box 值

```css
background: url("./assets/pattern-grid.svg") padding-box content-box;
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

若你正在學習或除錯，我建議先拆成 longhand：

```css
background-origin: padding-box;
background-clip: content-box;
```

確認效果後，再合併成 shorthand。

---

## 11. 實務案例 1：避免背景透過邊框空隙露出

```css
.alert {
  padding: 24px;
  border: 12px dashed rgb(220 38 38 / 50%);
  background-color: #fee2e2;
  background-clip: padding-box;
}
```

這樣背景不會畫到 border 底下。  
如果 border 是 dashed 或半透明，空隙中會露出父層背景，而不是 `.alert` 的背景。

---

## 12. 實務案例 2：只強調內容區

```css
.note {
  padding: 28px;
  border: 1px solid #e2e8f0;
  background:
    linear-gradient(135deg, #dbeafe, #eff6ff);
  background-clip: content-box;
}
```

這樣背景只出現在 content 區，不會包含 padding。

---

## 13. 實務案例 3：漸層文字標題

```css
.heading {
  font-size: 56px;
  font-weight: 900;
  background: linear-gradient(90deg, #2563eb, #9333ea, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
```

適合：

- Landing page 標題
- 品牌字
- 活動主標
- 少量強調文字

不建議：

- 大量正文
- 對比不足的漸層
- 沒有 fallback 的關鍵資訊

---

## 14. 常見錯誤與排查

### 錯誤 1：把 `clip` 當成 `origin`

```css
.box {
  background-clip: content-box;
}
```

這不是「背景圖片從 content-box 開始定位」。  
它是「背景最後只顯示在 content-box」。

定位要看：

```css
background-origin
background-position
```

---

### 錯誤 2：以為 `border-box` 會覆蓋 border

```css
.box {
  background-clip: border-box;
}
```

背景會畫到 border 底下，但不會蓋住 border。  
如果 border 是不透明實線，你通常看不到背景在 border 下方。

---

### 錯誤 3：看不出三個值差異

請確認有：

```css
padding: 32px;
border: 16px dashed rgb(37 99 235 / 50%);
background-color: #dbeafe;
```

若沒有 padding / border，或 border 是不透明實線，差異可能很不明顯。

---

### 錯誤 4：漸層文字忘記透明文字色

```css
.title {
  background: linear-gradient(90deg, #2563eb, #ec4899);
  background-clip: text;
}
```

修正：

```css
.title {
  background: linear-gradient(90deg, #2563eb, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
```

---

### 錯誤 5：在 `background` 簡寫中搞混 box 值

```css
background: url("./assets/pattern-grid.svg") padding-box content-box;
```

這不是兩張背景圖。  
它是：

```text
padding-box = background-origin
content-box = background-clip
```

---

## 15. 面試與讀碼常見問法

### 問題 1：`background-clip` 的預設值是什麼？

預設值是：

```css
background-clip: border-box;
```

---

### 問題 2：`background-clip` 控制什麼？

它控制背景的繪製裁切範圍，也就是背景最後畫到哪個盒模型區域為止。

---

### 問題 3：`background-clip` 和 `background-origin` 差在哪？

- `background-origin`：背景圖片從哪個盒子開始定位
- `background-clip`：背景最後畫到哪個盒子為止

---

### 問題 4：為什麼 `background-clip: border-box` 的效果有時看不出來？

因為背景畫在 border 下方。  
如果 border 是不透明實線，背景被 border 蓋住，很難看出差異。使用 dashed、dotted 或半透明 border 比較容易觀察。

---

### 問題 5：漸層文字怎麼做？

```css
.title {
  background: linear-gradient(90deg, #2563eb, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
```

---

## 16. 一句話抓核心

> `background-clip` 決定背景「畫到哪裡為止」；它是裁切背景繪製範圍，不是決定背景圖片從哪裡開始定位。

---

## 自測問題

1. `background-clip` 控制的是背景定位，還是背景繪製裁切範圍？
2. `background-clip` 的預設值是什麼？
3. `border-box`、`padding-box`、`content-box` 分別代表背景畫到哪裡？
4. 為什麼 `border-box` 背景不一定看得出來？
5. `background-clip: text` 為什麼要搭配透明文字色？
6. `background-clip` 和 `background-origin` 差在哪？
7. 多背景圖時，`background-clip` 如何逐層對應？
8. 在 `background` 簡寫中，一個 box 值代表什麼？
9. 在 `background` 簡寫中，兩個 box 值如何對應 origin 和 clip？
10. 什麼情境適合使用 `padding-box`？
11. 什麼情境適合使用 `content-box`？
12. 使用漸層文字時，應注意哪些可讀性問題？

---

## 練習題

### 練習 1：比較三個盒模型值

建立三個盒子，共用：

```css
padding: 32px;
border: 16px dashed rgb(37 99 235 / 50%);
background-color: #dbeafe;
background-image: url("./assets/pattern-grid.svg");
```

分別設定：

```css
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
```

觀察背景是否出現在 border 底下、padding 區、content 區。

---

### 練習 2：origin vs clip

建立兩個盒子：

```css
background-origin: content-box;
background-clip: border-box;
```

與：

```css
background-origin: border-box;
background-clip: content-box;
```

說明：

- 背景從哪裡開始定位？
- 背景最後畫到哪裡？

---

### 練習 3：漸層文字

建立一個標題，要求：

```css
background: linear-gradient(90deg, #2563eb, #ec4899);
background-clip: text;
color: transparent;
```

並補上 WebKit 前綴：

```css
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## 延伸閱讀

- 上一篇：設置背景圖的原點 `background-origin`
- 下一篇：背景圖片大小 `background-size`
- 建議搭配：
  - `background-origin`
  - `background`
  - `background-image`
  - `background-position`
  - `background-color`
  - `盒模型`

---

## 參考資料

- MDN Web Docs：`background-clip`
- MDN Web Docs：`background-origin`
- MDN Web Docs：`background`
- CSS Backgrounds and Borders Module
