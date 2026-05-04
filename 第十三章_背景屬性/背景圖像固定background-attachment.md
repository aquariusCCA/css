# 背景圖像固定 background-attachment

所屬章節：第 13 章 背景屬性  
建議搭配 demo：[`demo/background-attachment/index.html`](./demo/background-attachment/index.html)

---

## 本節導讀

`background-attachment` 用來控制**背景圖片如何附著在捲動行為上**。

它不是控制圖片來源、圖片大小、圖片位置，也不是控制元素能不能捲動；它只回答一個問題：

```text
當頁面或元素內容捲動時，背景圖片要跟誰一起動？
```

最常見的三個值是：

```css
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;
```

簡化記法：

```text
scroll：背景黏在元素盒子上。
fixed ：背景黏在 viewport 上。
local ：背景黏在元素內容上。
```

---

## 學習目標

學完本節後，你應該能夠回答：

1. `background-attachment` 控制的是什麼？
2. `scroll`、`fixed`、`local` 的差異是什麼？
3. 為什麼 `scroll` 是預設值？
4. `fixed` 是相對於元素固定，還是相對於 viewport 固定？
5. 為什麼要用可捲動容器才能清楚看出 `scroll` 和 `local` 的差異？
6. `fixed` 為什麼常用於視差背景？
7. 為什麼手機版常把 `fixed` 回退成 `scroll`？
8. 多背景圖時，`background-attachment` 如何逐層對應？
9. `background-attachment` 和 `background-position`、`background-size` 的分工是什麼？
10. 使用 `background` 簡寫時，為什麼可能讓固定背景失效？

---

## 關鍵字

- 中文：背景圖像固定、背景附著、固定背景、視差背景、容器內捲動背景
- 英文：`background-attachment`
- 常見值：`scroll`、`fixed`、`local`
- 相關屬性：
  - `background-image`
  - `background-position`
  - `background-size`
  - `background-repeat`
  - `background-origin`
  - `background-clip`
  - `background`
  - `overflow`

---

## 建議回查情境

當你遇到以下情況，可以回來查這一節：

- 想做固定背景或視差背景
- 背景沒有如預期固定在畫面上
- 不懂 `scroll`、`fixed`、`local` 差異
- 想讓可捲動容器內的背景跟著內容一起捲動
- 想比較「頁面捲動」與「容器內部捲動」對背景的影響
- 多背景圖需要一層固定、一層跟著元素走
- 手機版 `background-attachment: fixed` 效果不穩或效能不好
- 使用 `background` 簡寫後，原本的固定背景效果消失

---

## Demo 範例

本節 demo 放在：

```text
demo/background-attachment/index.html
```

本節 demo 使用本地 SVG 圖檔：

```text
demo/background-attachment/assets/landscape.svg
demo/background-attachment/assets/pattern-grid.svg
demo/background-attachment/assets/local-stripes.svg
```

這樣 demo 不依賴外部圖片網址，離線開啟也能正常觀看。

---

## 30 秒複習入口

- `background-attachment` 控制背景圖片和捲動行為的關係。
- 預設值是 `scroll`。
- `scroll`：背景相對元素盒子固定；頁面捲動時元素與背景一起移動，但元素內部內容捲動時背景不跟著內容移動。
- `fixed`：背景相對 viewport 固定；頁面捲動時背景看起來不動。
- `local`：背景相對元素內容固定；若元素本身可捲動，背景會跟著內容一起捲動。
- 比較 `scroll` 和 `local` 時，要用 `overflow: auto` 的內部捲動容器才明顯。
- `fixed` 常用於視差背景，但在行動裝置上可能有相容性、效能或體驗差異。
- 多背景圖時，`background-attachment` 可用逗號逐層對應。
- 使用 `background` 簡寫時，未寫出的背景子屬性可能被重設。

---

## 速查區

### 基本語法

```css
.hero {
  min-height: 480px;
  background-image: url("./assets/landscape.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
```

### 三個核心值

| 值 | 直覺理解 | 捲動行為 | 常見用途 |
|---|---|---|---|
| `scroll` | 黏在元素盒子上 | 頁面捲動時元素與背景一起移動；元素內部內容捲動時背景不跟著內容移動 | 一般背景，預設值 |
| `fixed` | 黏在 viewport 上 | 背景相對 viewport 固定，頁面捲動時背景看起來不動 | 固定背景、視差效果 |
| `local` | 黏在元素內容上 | 元素內容內部捲動時，背景跟著內容一起捲動 | 可捲動容器、文字區塊、表格容器 |

### 形式定義速查

| 項目 | 說明 |
|---|---|
| 屬性名稱 | `background-attachment` |
| 作用 | 控制背景圖片相對於 viewport、元素盒子或元素內容的附著方式 |
| 初始值 | `scroll` |
| 是否繼承 | 否 |
| 常見值 | `scroll`、`fixed`、`local` |
| 影響對象 | 背景圖片，不是元素本身 |
| 多背景圖 | 可用逗號分隔，逐層對應 |
| 常搭配屬性 | `background-image`、`background-position`、`background-size`、`background-repeat` |
| 常見實務限制 | `fixed` 在部分行動裝置上效果與效能可能不穩定 |
| 使用簡寫風險 | `background` 可能重設 `background-attachment` |

---

## 正文

## 1. `background-attachment` 是什麼？

`background-attachment` 是 CSS 背景屬性的一員，用來控制背景圖片和捲動行為之間的關係。

```css
.box {
  background-image: url("./assets/landscape.svg");
  background-attachment: scroll;
}
```

它不會決定圖片是哪一張，也不會決定圖片位置或尺寸。這些分別是其他屬性的工作：

| 屬性 | 負責什麼 |
|---|---|
| `background-image` | 背景圖片來源 |
| `background-repeat` | 是否重複平鋪 |
| `background-position` | 背景圖片位置 |
| `background-size` | 背景圖片尺寸 |
| `background-attachment` | 背景圖片跟誰一起捲動 |

---

## 2. 預設值：`scroll`

`background-attachment` 的預設值是：

```css
background-attachment: scroll;
```

在一般頁面中，元素隨著頁面一起捲動時，背景看起來也會跟著元素一起走。

```css
.section {
  background-image: url("./assets/pattern-grid.svg");
  background-attachment: scroll;
}
```

可以簡化理解成：

```text
背景附著在元素盒子上。
```

但要注意一個重要細節：

> 如果元素本身有內部捲動條，`scroll` 的背景不會跟著元素內部內容一起捲動。

也就是：

```text
頁面捲動：元素和背景一起移動。
元素內部內容捲動：背景停在元素盒子上，不跟內容一起捲。
```

---

## 3. `fixed`：背景相對 viewport 固定

`fixed` 表示背景圖片相對於 viewport 固定。

```css
.hero {
  background-image: url("./assets/landscape.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
```

效果是：

```text
頁面捲動時，元素內容會移動，
但背景圖片像固定在螢幕後面一樣。
```

`fixed` 常被用於：

- 固定背景
- 視差滾動效果
- 大型 Hero 區塊
- 沉浸式章節背景
- 圖片視窗效果

重要觀念：

```text
fixed 不是把背景固定在元素裡，而是讓背景相對 viewport 固定。
```

所以元素比較像一個「視窗」，讓你透過它看到固定在 viewport 後面的背景。

---

## 4. `local`：背景跟著元素內容捲動

`local` 表示背景相對於元素內容固定。

```css
.scroll-box {
  max-height: 260px;
  overflow: auto;
  background-image: url("./assets/local-stripes.svg");
  background-attachment: local;
}
```

當 `.scroll-box` 裡面的內容捲動時，背景也會跟著內容一起捲動。

適合場景：

- 可捲動文字區塊
- 可捲動表格容器
- 程式碼區塊
- 卡片內部捲動內容
- 想讓背景紋理和內容同步移動的 UI

如果元素沒有內部捲動，`local` 和 `scroll` 常常看起來差不多。要看出差異，通常需要：

```css
.box {
  height: 260px;
  overflow: auto;
}
```

---

## 5. `scroll` vs `local`

假設有一個可捲動容器：

```html
<div class="panel">
  <p>很多內容...</p>
  <p>很多內容...</p>
  <p>很多內容...</p>
</div>
```

共同 CSS：

```css
.panel {
  height: 260px;
  overflow: auto;
  background-image: url("./assets/local-stripes.svg");
  background-repeat: repeat-y;
}
```

### 使用 `scroll`

```css
.panel {
  background-attachment: scroll;
}
```

容器內容上下捲動時，背景停在容器盒子上。

### 使用 `local`

```css
.panel {
  background-attachment: local;
}
```

容器內容上下捲動時，背景跟著內容一起捲動。

簡單記：

```text
scroll：背景黏在盒子上。
local ：背景黏在內容上。
```

---

## 6. `fixed` vs `scroll`

在頁面層級上，`scroll` 和 `fixed` 差異很明顯。

```css
.section-scroll {
  background-attachment: scroll;
}

.section-fixed {
  background-attachment: fixed;
}
```

頁面往下捲動時：

```text
scroll：元素移動，背景跟著元素移動。
fixed ：元素移動，但背景相對 viewport 不動。
```

所以 `fixed` 常用於視差感：

```css
.parallax {
  min-height: 420px;
  background-image: url("./assets/landscape.svg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
```

---

## 7. 多背景圖中的 `background-attachment`

同一個元素可以有多層背景圖：

```css
.hero {
  background-image:
    linear-gradient(rgb(15 23 42 / 65%), rgb(15 23 42 / 65%)),
    url("./assets/landscape.svg");
}
```

也可以分別設定 attachment：

```css
.hero {
  background-attachment:
    scroll,
    fixed;
}
```

對應方式如下：

| 層級 | `background-image` | `background-attachment` |
|---|---|---|
| 第 1 層，最上層 | `linear-gradient(...)` | `scroll` |
| 第 2 層，下方 | `url("./assets/landscape.svg")` | `fixed` |

也就是：

```text
第一個 background-attachment 對應第一個 background-image。
第二個 background-attachment 對應第二個 background-image。
```

---

## 8. 和 `background-position`、`background-size` 的關係

`background-attachment` 控制背景附著方式。  
`background-position` 控制背景位置。  
`background-size` 控制背景尺寸。

固定背景最常見的組合是：

```css
.hero {
  background-image: url("./assets/landscape.svg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
```

當使用 `fixed` 時，`background-position: center;` 通常會呈現成背景在 viewport 中置中的效果。  
如果圖片主體在某一側，可以改成：

```css
background-position: right center;
background-position: center top;
```

---

## 9. 和 `overflow` 的關係

如果要看懂 `local`，一定要理解 `overflow`。

```css
.panel {
  height: 260px;
  overflow-y: auto;
  background-attachment: local;
}
```

只有當元素內容超過容器高度，並且容器本身可以捲動時，`local` 的效果才明顯。

如果元素沒有內部捲動，`local` 和 `scroll` 通常很難看出差異。

---

## 10. 手機版與效能注意

`background-attachment: fixed` 很適合桌面版視覺效果，但實務上不建議在所有裝置上無腦使用。

可能遇到的問題：

- 行動瀏覽器效果和桌面版不同
- 捲動時卡頓
- 背景重繪成本較高
- 視差效果影響閱讀
- 背景位置和 `background-size: cover` 在不同尺寸下不穩定

常見保守寫法：

```css
.cover {
  background-image: url("./assets/landscape.svg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

@media (max-width: 768px) {
  .cover {
    background-attachment: scroll;
  }
}
```

---

## 11. 和 `background` 簡寫的關係

只想修改背景附著方式時，建議使用：

```css
.hero {
  background-attachment: fixed;
}
```

不要隨便寫成：

```css
.hero {
  background: fixed;
}
```

因為 `background` 是簡寫，會一次設定多個背景子屬性。未寫出的背景子屬性可能會被重設。

### 可能出問題的例子

```css
.hero {
  background-color: #0f172a;
  background-image: url("./assets/landscape.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.hero.active {
  background: url("./assets/landscape.svg");
}
```

後面的 `background` 可能把 `background-attachment` 重設回預設值。

### 安全寫法

只改 attachment：

```css
.hero.active {
  background-attachment: fixed;
}
```

若確定要使用 `background` 簡寫，要把需要的資訊寫完整：

```css
.hero {
  background:
    url("./assets/landscape.svg")
    center / cover
    no-repeat
    fixed
    #0f172a;
}
```

注意：在 `background` 簡寫中，`background-size` 通常要接在 `background-position` 後面，並用 `/` 分隔。

---

## 12. 實務案例

### 案例 1：固定背景 Hero

```css
.hero {
  min-height: 480px;
  color: white;
  background-color: #0f172a;
  background-image:
    linear-gradient(rgb(15 23 42 / 65%), rgb(15 23 42 / 65%)),
    url("./assets/landscape.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: scroll, fixed;
}
```

### 案例 2：可捲動文字區塊

```css
.reading-panel {
  max-height: 260px;
  overflow: auto;
  padding: 24px;
  background-color: #ffffff;
  background-image: url("./assets/local-stripes.svg");
  background-repeat: repeat-y;
  background-position: left top;
  background-attachment: local;
}
```

### 案例 3：手機版取消 fixed

```css
@media (max-width: 768px) {
  .hero {
    background-attachment: scroll;
  }
}
```

---

## 13. 常見錯誤與排查

### 錯誤 1：以為 `scroll` 會跟著元素內容捲動

```css
.panel {
  overflow: auto;
  background-attachment: scroll;
}
```

如果你希望背景跟著 `.panel` 裡的內容一起捲，要用：

```css
.panel {
  background-attachment: local;
}
```

### 錯誤 2：以為 `fixed` 是相對元素固定

```css
.card {
  background-attachment: fixed;
}
```

`fixed` 是相對 viewport 固定。元素比較像一個視窗，讓你看見固定在 viewport 後面的背景。

### 錯誤 3：只寫 `fixed`，但沒有背景圖片

```css
.hero {
  background-attachment: fixed;
}
```

這不會產生明顯效果，因為沒有背景圖片。

### 錯誤 4：沒有設定高度，看不到固定背景效果

```css
.hero {
  background-image: url("./assets/landscape.svg");
  background-attachment: fixed;
}
```

修正：

```css
.hero {
  min-height: 480px;
}
```

### 錯誤 5：手機版過度依賴 `fixed`

如果在手機上出現卡頓、背景跳動、效果不一致，可以改成：

```css
@media (max-width: 768px) {
  .hero {
    background-attachment: scroll;
  }
}
```

---

## 14. 面試與讀碼常見問法

### 問題 1：`background-attachment` 的預設值是什麼？

預設值是：

```css
background-attachment: scroll;
```

### 問題 2：`scroll`、`fixed`、`local` 差在哪？

```text
scroll：背景黏在元素盒子上。
fixed ：背景黏在 viewport 上。
local ：背景黏在元素內容上。
```

### 問題 3：為什麼 `scroll` 和 `local` 看起來一樣？

如果元素沒有內部捲動，兩者常常看起來差不多。要比較差異，需要：

```css
height: 260px;
overflow: auto;
```

### 問題 4：`fixed` 是相對誰固定？

相對 viewport 固定，不是相對元素本身固定。

### 問題 5：多背景圖時，`background-attachment` 怎麼對應？

用逗號逐層對應。

```css
background-image:
  linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)),
  url("./bg.svg");

background-attachment:
  scroll,
  fixed;
```

---

## 一句話抓核心

> `background-attachment` 負責控制背景圖片和捲動行為的關係：`scroll` 黏在元素盒子上，`fixed` 黏在 viewport 上，`local` 黏在元素內容上。

---

## 自測問題

1. `background-attachment` 控制的是背景圖片來源、位置、尺寸，還是捲動附著方式？
2. `background-attachment` 的預設值是什麼？
3. `scroll` 是什麼意思？
4. `fixed` 是相對元素固定，還是相對 viewport 固定？
5. `local` 適合用在哪種元素上？
6. 為什麼比較 `scroll` 和 `local` 時，需要 `overflow: auto`？
7. 頁面捲動時，`fixed` 背景會不會跟著元素一起動？
8. 元素內容內部捲動時，`scroll` 背景會不會跟著內容一起動？
9. 元素內容內部捲動時，`local` 背景會不會跟著內容一起動？
10. 多背景圖時，`background-attachment` 如何逐層對應？
11. 為什麼手機版常把 `fixed` 改回 `scroll`？
12. 使用 `background` 簡寫時，為什麼可能讓固定背景效果失效？

---

## 練習題

### 練習 1：比較 `scroll` 和 `fixed`

建立兩個高度 `420px` 的 section：

```css
background-attachment: scroll;
background-attachment: fixed;
```

讓頁面可以上下捲動，觀察背景是否跟著頁面移動。

### 練習 2：比較 `scroll` 和 `local`

建立兩個可捲動容器：

```css
height: 260px;
overflow: auto;
```

分別設定：

```css
background-attachment: scroll;
background-attachment: local;
```

放入大量文字後，捲動容器內部內容，觀察背景是否跟著內容移動。

### 練習 3：多背景圖 attachment

建立一個 hero：

```css
background-image:
  linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)),
  url("./assets/landscape.svg");

background-attachment:
  scroll,
  fixed;
```

觀察遮罩與背景圖的附著行為。

---

## 延伸閱讀

- 上一篇：背景位置 `background-position`
- 下一篇：背景尺寸 `background-size`
- 建議搭配：
  - `background-image`
  - `background-position`
  - `background-size`
  - `background-repeat`
  - `background`
  - `overflow`

---

## 參考資料

- MDN Web Docs：`background-attachment`
- MDN Web Docs：`background`
- MDN Web Docs：CSS backgrounds and borders
