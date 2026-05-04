# 背景複合寫法 background

所屬章節：第 13 章 背景屬性  
建議搭配 demo：[`demo/background/index.html`](./demo/background/index.html)

---

## 本節導讀

`background` 是 CSS 背景屬性的**複合寫法 / 簡寫屬性**，可以在一行裡同時設定多個背景相關屬性。

例如：

```css
.card {
  background:
    url("./assets/badge.svg")
    right 24px bottom 24px / 120px 120px
    no-repeat
    #eff6ff;
}
```

這一行其實同時處理了：

```css
background-image: url("./assets/badge.svg");
background-position: right 24px bottom 24px;
background-size: 120px 120px;
background-repeat: no-repeat;
background-color: #eff6ff;
```

不過 `background` 很方便，也很危險。  
因為它是 shorthand，會把沒有寫出來的背景子屬性重設為初始值。

所以本節的核心不是背一串語法，而是掌握：

1. 什麼時候適合用 `background`。
2. 什麼時候應該用 longhand，例如 `background-image`、`background-position`。
3. `background-position / background-size` 中間的 `/` 不能省略。
4. 多背景圖時，每一層用逗號分隔。
5. `background-color` 只能放在最後一層。
6. `background-origin` 和 `background-clip` 在簡寫中可以用一個或兩個 box 值表示。
7. `background` 會重設未寫出的背景子屬性，這是實務中最常見的 bug 來源。

---

## 學習目標

學完本節後，你應該能夠回答：

1. `background` 是什麼？
2. `background` 可以設定哪些背景子屬性？
3. `background` 不包含哪個常見背景相關屬性？
4. 為什麼 `background` 可能造成原本設定失效？
5. 只想改背景圖時，為什麼不建議直接寫 `background: url(...)`？
6. `background-position` 和 `background-size` 在簡寫中如何同時寫？
7. `center / cover` 中的 `/` 是什麼意思？
8. `background-origin` 和 `background-clip` 在簡寫中如何判斷？
9. 多背景圖的簡寫如何使用逗號分隔？
10. 多背景圖時，哪一層可以寫 `background-color`？
11. 多背景圖時，第一層在上方還是下方？
12. 什麼情況適合用 `background`，什麼情況適合用 longhand？

---

## 關鍵字

- 中文：背景複合寫法、背景簡寫、背景 shorthand、背景屬性總寫法
- 英文：`background`
- 相關 longhand：
  - `background-color`
  - `background-image`
  - `background-position`
  - `background-size`
  - `background-repeat`
  - `background-origin`
  - `background-clip`
  - `background-attachment`
- 不包含：
  - `background-blend-mode`
- 關鍵語法：
  - `position / size`
  - `origin clip`
  - 多背景圖逗號分隔
  - 最後一層才能放背景色
- 易混淆概念：
  - `background` 不是只設定背景圖
  - `background: url(...)` 會重設其他背景子屬性
  - `background-size` 在簡寫中必須接在 `background-position` 後方，並用 `/` 分隔
  - `background-color` 只能出現在最後一個背景層
  - 一個 box 值會同時設定 `background-origin` 和 `background-clip`
  - 兩個 box 值時，第一個是 `background-origin`，第二個是 `background-clip`
  - `background-blend-mode` 不是 `background` 簡寫的一部分

---

## 建議回查情境

當你遇到以下情況，可以回來查這一節：

- 想把多個背景屬性合併成一行
- 想看懂別人寫的 `background: url(...) center / cover no-repeat`
- 不懂 `center / cover` 中間的 `/`
- 使用 `background` 後，原本的 `background-size`、`background-repeat`、`background-position` 失效
- 想寫多背景圖，例如「漸層遮罩 + 圖片 + 底色」
- 想確認 `background-color` 能不能放在第一層
- 想知道 `padding-box content-box` 在 `background` 裡怎麼解讀
- 不確定應該用 `background` 還是 `background-image`
- 重構 CSS 時，想避免 shorthand 覆蓋 longhand 的 bug

---

## Demo 範例

本節 demo 放在：

```text
demo/background/index.html
```

本節 demo 使用本地 SVG 圖檔：

```text
demo/background/assets/hero-scene.svg
demo/background/assets/pattern-grid.svg
demo/background/assets/badge.svg
```

這樣 demo 不依賴外部圖片網址，離線開啟也能正常觀看。

未來新增其他背景屬性 demo 時，可以繼續放在：

```text
demo/background-color/index.html
demo/background-image/index.html
demo/background-repeat/index.html
demo/background-position/index.html
demo/background-attachment/index.html
```

每一節都保留自己的 `index.html`、`style.css`、`README.md`，但透過外層資料夾名稱區分主題。

---

## 30 秒複習入口

- `background` 是背景屬性的簡寫。
- 它可以一次設定背景色、背景圖、位置、尺寸、重複、定位盒、裁切盒、附著方式。
- 常見完整概念可以記成：

```css
background:
  color
  image
  position / size
  repeat
  attachment
  origin
  clip;
```

- 順序大多彈性，但有幾個硬規則：
  - `background-size` 必須接在 `background-position` 後面，並用 `/` 分隔。
  - 多背景圖用逗號分隔。
  - `background-color` 只能寫在最後一層。
  - box 值一個時，同時代表 `origin` 和 `clip`。
  - box 值兩個時，第一個是 `origin`，第二個是 `clip`。
- `background` 會重設未寫出的背景子屬性。
- 只想改單一背景屬性時，優先用 longhand。
- 只有當你真的想一次描述整組背景時，才適合用 `background`。
- `background-blend-mode` 不是 `background` 簡寫的一部分，要另外寫。

---

## 速查區

### 1. 基本語法

```css
.box {
  background: #eff6ff;
}
```

```css
.box {
  background: url("./assets/badge.svg") no-repeat center;
}
```

```css
.box {
  background: url("./assets/hero-scene.svg") center / cover no-repeat #0f172a;
}
```

---

### 2. 常見簡寫對照

| 簡寫 | 大致等價 |
|---|---|
| `background: #eff6ff;` | `background-color: #eff6ff;`，其他背景子屬性重設 |
| `background: url("./bg.svg");` | 設定背景圖，其他背景子屬性回到初始值 |
| `background: url("./bg.svg") no-repeat;` | 背景圖不重複 |
| `background: url("./bg.svg") center no-repeat;` | 背景圖置中且不重複 |
| `background: url("./bg.svg") center / cover no-repeat;` | 背景圖置中、cover、不重複 |
| `background: url("./bg.svg") right 24px bottom 16px / 120px 120px no-repeat #fff;` | 背景圖右下角定位、指定尺寸、不重複、白底 |

---

### 3. `position / size` 速查

`background-size` 要寫在 `background-position` 後面，並用 `/` 分隔。

```css
background: url("./bg.svg") center / cover no-repeat;
```

代表：

```css
background-image: url("./bg.svg");
background-position: center;
background-size: cover;
background-repeat: no-repeat;
```

錯誤或容易失效：

```css
background: url("./bg.svg") cover center no-repeat;
```

因為 `cover` 是 `background-size`，在簡寫中不能直接亂放，應該寫在 `/` 後面。

---

### 4. `origin / clip` 速查

在 `background` 簡寫中，box 值可用來設定 `background-origin` 和 `background-clip`。

常見 box 值：

```css
border-box
padding-box
content-box
```

#### 一個 box 值

```css
background: url("./bg.svg") padding-box;
```

大致代表：

```css
background-origin: padding-box;
background-clip: padding-box;
```

#### 兩個 box 值

```css
background: url("./bg.svg") padding-box content-box;
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

### 5. 多背景圖速查

```css
.hero {
  background:
    linear-gradient(rgb(15 23 42 / 70%), rgb(15 23 42 / 70%)),
    url("./assets/hero-scene.svg") center / cover no-repeat #0f172a;
}
```

圖層從上到下：

```text
第 1 層：linear-gradient(...)  遮罩，在最上層
第 2 層：url(...)              圖片，在下層
最底層：#0f172a                背景色，只能寫在最後一層
```

---

### 6. 形式定義速查

| 項目 | 說明 |
|---|---|
| 屬性名稱 | `background` |
| 類型 | shorthand / 複合寫法 / 簡寫屬性 |
| 作用 | 一次設定多個背景子屬性 |
| 初始值 | 各子屬性回到自己的初始值 |
| 是否繼承 | 否 |
| 可設定 | `color`、`image`、`position`、`size`、`repeat`、`origin`、`clip`、`attachment` |
| 不包含 | `background-blend-mode` |
| 多背景圖 | 用逗號分隔 |
| 背景色限制 | 只能放在最後一層 |
| 重要規則 | `background-size` 必須寫在 `background-position /` 後面 |
| 常見風險 | 重設未寫出的背景子屬性 |

---

## 正文

## 1. `background` 是什麼？

`background` 是 CSS 背景屬性的簡寫。

```css
.card {
  background: #eff6ff;
}
```

這一行看起來像只是設定背景色，但它其實是 shorthand。  
也就是說，它會把整組背景子屬性重新設定一次。

`background` 可以涵蓋：

```css
background-color
background-image
background-position
background-size
background-repeat
background-origin
background-clip
background-attachment
```

但不包含：

```css
background-blend-mode
```

如果要設定混合模式，必須另外寫：

```css
.card {
  background-blend-mode: multiply;
}
```

---

## 2. 為什麼 `background` 很方便？

原本你可能需要寫：

```css
.hero {
  background-color: #0f172a;
  background-image: url("./assets/hero-scene.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

可以簡寫成：

```css
.hero {
  background: url("./assets/hero-scene.svg") center / cover no-repeat #0f172a;
}
```

這樣可讀性更集中，適合描述「一整組背景設定」。

---

## 3. 為什麼 `background` 很危險？

因為 shorthand 會重設沒有寫出來的子屬性。

假設原本有：

```css
.card {
  background-color: #eff6ff;
  background-image: url("./assets/badge.svg");
  background-repeat: no-repeat;
  background-position: right 24px bottom 24px;
  background-size: 120px 120px;
}
```

後面如果寫：

```css
.card.active {
  background: url("./assets/hero-scene.svg");
}
```

你可能只是想換圖片，但實際上其他背景子屬性也可能被重設，例如：

```css
background-color
background-repeat
background-position
background-size
background-attachment
background-origin
background-clip
```

結果可能變成：

```text
背景圖變回左上角
背景圖開始重複平鋪
背景尺寸回到 auto
背景色消失或變回 transparent
```

### 安全做法

如果只是想換圖片：

```css
.card.active {
  background-image: url("./assets/hero-scene.svg");
}
```

如果只是想換位置：

```css
.card.active {
  background-position: center;
}
```

如果只是想換尺寸：

```css
.card.active {
  background-size: cover;
}
```

只有當你真的想重設整組背景時，才使用 `background`。

---

## 4. `background` 的順序是不是固定？

`background` 的順序大多不是完全固定。  
例如以下通常都可以讀懂：

```css
background: #eff6ff url("./assets/badge.svg") no-repeat center;
background: url("./assets/badge.svg") center no-repeat #eff6ff;
```

但是有幾個規則不能亂：

1. `background-size` 必須跟在 `background-position` 後面。
2. `background-position` 和 `background-size` 中間必須用 `/`。
3. 多背景圖用逗號分隔。
4. `background-color` 只能放在最後一層。
5. `background-origin` 和 `background-clip` 的 box 值順序有意義。

所以建議你建立固定書寫順序：

```css
background:
  image
  position / size
  repeat
  attachment
  origin
  clip
  color;
```

常用實務順序：

```css
background:
  url("./assets/badge.svg")
  right 24px bottom 24px / 120px 120px
  no-repeat
  #eff6ff;
```

---

## 5. `position / size` 是最重要的簡寫規則

這是 `background` 最容易寫錯的地方。

正確：

```css
background: url("./assets/hero-scene.svg") center / cover no-repeat;
```

錯誤或不建議：

```css
background: url("./assets/hero-scene.svg") cover center no-repeat;
```

因為 `cover` 是 `background-size` 的值。  
在 `background` 簡寫中，`background-size` 要接在 `background-position` 後面，並用 `/` 分隔。

### 拆解

```css
background: url("./assets/hero-scene.svg") center / cover no-repeat;
```

等價於：

```css
background-image: url("./assets/hero-scene.svg");
background-position: center;
background-size: cover;
background-repeat: no-repeat;
```

### 更多例子

```css
background: url("./assets/badge.svg") right bottom / 96px 96px no-repeat;
```

等價於：

```css
background-image: url("./assets/badge.svg");
background-position: right bottom;
background-size: 96px 96px;
background-repeat: no-repeat;
```

```css
background: url("./assets/badge.svg") right 24px bottom 16px / 120px auto no-repeat;
```

等價於：

```css
background-image: url("./assets/badge.svg");
background-position: right 24px bottom 16px;
background-size: 120px auto;
background-repeat: no-repeat;
```

---

## 6. 背景色 `background-color` 的位置

單一背景時，背景色可以放在簡寫中：

```css
background: url("./assets/hero-scene.svg") center / cover no-repeat #0f172a;
```

也可以只寫背景色：

```css
background: #0f172a;
```

但如果是多背景圖：

```css
background:
  linear-gradient(rgb(15 23 42 / 70%), rgb(15 23 42 / 70%)),
  url("./assets/hero-scene.svg") center / cover no-repeat #0f172a;
```

背景色只能放在最後一層。

錯誤觀念：

```css
background:
  #0f172a,
  url("./assets/hero-scene.svg");
```

背景色不是一張背景圖層，不應該放在前面的圖層位置。

簡單記：

```text
多背景圖：圖片與漸層可以有很多層，但背景色只有一個，而且在最底層。
```

---

## 7. 多背景圖簡寫

多背景圖使用逗號分隔。

```css
.hero {
  background:
    linear-gradient(rgb(15 23 42 / 70%), rgb(15 23 42 / 70%)),
    url("./assets/hero-scene.svg") center / cover no-repeat #0f172a;
}
```

第一個背景在最上層，最後一個背景在最下層。  
背景色在所有背景圖片與漸層的下方。

### 圖層順序

```text
第 1 層：linear-gradient(...)     最上層，遮罩
第 2 層：url("./hero-scene.svg")  圖片
底色：#0f172a                     最底層
```

### 多背景圖中每一層都可以有自己的設定

```css
.card {
  background:
    url("./assets/badge.svg") right 24px bottom 24px / 120px 120px no-repeat,
    url("./assets/pattern-grid.svg") left top / 72px 72px repeat,
    linear-gradient(135deg, #eff6ff, #ffffff);
}
```

拆解：

```text
第 1 層：badge.svg，右下角，不重複，120px
第 2 層：pattern-grid.svg，左上角，重複，72px
第 3 層：漸層底色
```

---

## 8. `origin` 與 `clip` 的簡寫

`background` 裡可以寫 `border-box`、`padding-box`、`content-box`。

這些值和兩個 longhand 有關：

```css
background-origin
background-clip
```

### 一個 box 值

```css
.box {
  background: url("./assets/pattern-grid.svg") padding-box;
}
```

表示：

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

表示：

```css
background-origin: padding-box;
background-clip: content-box;
```

讀法：

```text
第一個 box：background-origin
第二個 box：background-clip
```

實務上如果你正在教學或除錯，我會建議先用 longhand 寫清楚：

```css
background-origin: padding-box;
background-clip: content-box;
```

等觀念穩定後，再合併進 `background`。

---

## 9. `attachment` 的簡寫

`background-attachment` 也可以寫在 `background` 裡。

```css
.hero {
  background: url("./assets/hero-scene.svg") center / cover no-repeat fixed #0f172a;
}
```

大致等價於：

```css
background-image: url("./assets/hero-scene.svg");
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-color: #0f172a;
```

但要注意：

```css
fixed
```

在某些行動裝置上可能有效果或效能限制。  
實務上手機版常改回：

```css
@media (max-width: 768px) {
  .hero {
    background-attachment: scroll;
  }
}
```

---

## 10. `background` 不包含 `background-blend-mode`

很多人會以為所有 `background-*` 都能放進 `background`。  
但 `background-blend-mode` 不屬於 `background` 簡寫的一部分。

錯誤觀念：

```css
.card {
  background: multiply;
}
```

正確：

```css
.card {
  background:
    linear-gradient(rgb(37 99 235 / 40%), rgb(37 99 235 / 40%)),
    url("./assets/hero-scene.svg") center / cover no-repeat;
  background-blend-mode: multiply;
}
```

或視需求分開寫：

```css
.card {
  background-image:
    linear-gradient(rgb(37 99 235 / 40%), rgb(37 99 235 / 40%)),
    url("./assets/hero-scene.svg");
  background-blend-mode: multiply;
}
```

---

## 11. 適合使用 `background` 的情境

### 適合

當你要一次描述完整背景時：

```css
.hero {
  background: url("./assets/hero-scene.svg") center / cover no-repeat #0f172a;
}
```

當你要寫多背景圖時：

```css
.hero {
  background:
    linear-gradient(rgb(15 23 42 / 70%), rgb(15 23 42 / 70%)),
    url("./assets/hero-scene.svg") center / cover no-repeat #0f172a;
}
```

當你想明確重設整組背景時：

```css
.card.is-plain {
  background: #ffffff;
}
```

### 不適合

只想改圖片來源：

```css
.card {
  background-image: url("./assets/new-image.svg");
}
```

只想改位置：

```css
.card {
  background-position: center;
}
```

只想改尺寸：

```css
.card {
  background-size: cover;
}
```

只想改重複方式：

```css
.card {
  background-repeat: no-repeat;
}
```

這些情境用 longhand 更安全。

---

## 12. 實務案例 1：Hero 背景

```html
<section class="hero">
  <h1>複合背景寫法</h1>
  <p>使用漸層遮罩、圖片、位置、尺寸與底色。</p>
</section>
```

```css
.hero {
  min-height: 420px;
  color: white;
  background:
    linear-gradient(rgb(15 23 42 / 72%), rgb(15 23 42 / 72%)),
    url("./assets/hero-scene.svg") center / cover no-repeat #0f172a;
}
```

這是非常常見的實務寫法。

拆解：

```css
.hero {
  background-color: #0f172a;
  background-image:
    linear-gradient(rgb(15 23 42 / 72%), rgb(15 23 42 / 72%)),
    url("./assets/hero-scene.svg");
  background-position:
    0% 0%,
    center;
  background-size:
    auto,
    cover;
  background-repeat:
    repeat,
    no-repeat;
}
```

注意：漸層那層如果沒有特別指定，會使用自己的預設背景子屬性。  
如果你要嚴格控制每一層，也可以寫得更完整。

---

## 13. 實務案例 2：卡片右下角裝飾圖

```css
.feature-card {
  min-height: 240px;
  padding: 32px;
  background:
    url("./assets/badge.svg")
    right 24px bottom 24px / 120px 120px
    no-repeat
    #ffffff;
}
```

拆解：

```css
.feature-card {
  background-color: #ffffff;
  background-image: url("./assets/badge.svg");
  background-position: right 24px bottom 24px;
  background-size: 120px 120px;
  background-repeat: no-repeat;
}
```

這種寫法適合：

- 卡片角落裝飾
- 空狀態插圖
- 小圖案點綴
- 右下角 icon

---

## 14. 實務案例 3：多層卡片背景

```css
.info-card {
  background:
    url("./assets/badge.svg") right 24px bottom 24px / 120px 120px no-repeat,
    url("./assets/pattern-grid.svg") left top / 72px 72px repeat,
    linear-gradient(135deg, #eff6ff, #ffffff);
}
```

這段代表：

```text
第 1 層：badge.svg，右下角裝飾
第 2 層：pattern-grid.svg，重複格紋
第 3 層：漸層底色
```

這種寫法在實務上很有用，因為你不用新增額外 HTML 元素，也能做出多層視覺背景。

---

## 15. 實務案例 4：可讀性較高的拆分寫法

如果 `background` 寫太長，可讀性會變差。

例如：

```css
.hero {
  background:
    linear-gradient(rgb(15 23 42 / 72%), rgb(15 23 42 / 72%)),
    url("./assets/hero-scene.svg") center / cover no-repeat fixed #0f172a;
}
```

團隊維護時，可以改成：

```css
.hero {
  background-color: #0f172a;
  background-image:
    linear-gradient(rgb(15 23 42 / 72%), rgb(15 23 42 / 72%)),
    url("./assets/hero-scene.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
```

拆開寫不代表比較差。  
對於複雜背景，拆開反而更容易維護。

---

## 16. 常見錯誤與排查

### 錯誤 1：只想換圖片，卻重設整組背景

```css
.card.active {
  background: url("./assets/new-image.svg");
}
```

可能造成：

```text
repeat 回到 repeat
position 回到 0% 0%
size 回到 auto
color 回到 transparent
```

修正：

```css
.card.active {
  background-image: url("./assets/new-image.svg");
}
```

---

### 錯誤 2：忘記 `position / size` 的 `/`

錯誤：

```css
.hero {
  background: url("./assets/hero-scene.svg") center cover no-repeat;
}
```

正確：

```css
.hero {
  background: url("./assets/hero-scene.svg") center / cover no-repeat;
}
```

---

### 錯誤 3：把背景色放在多背景圖的前面

錯誤觀念：

```css
.hero {
  background:
    #0f172a,
    url("./assets/hero-scene.svg");
}
```

正確：

```css
.hero {
  background:
    linear-gradient(rgb(15 23 42 / 70%), rgb(15 23 42 / 70%)),
    url("./assets/hero-scene.svg") center / cover no-repeat #0f172a;
}
```

---

### 錯誤 4：以為 `background` 包含 `background-blend-mode`

錯誤：

```css
.card {
  background: multiply;
}
```

正確：

```css
.card {
  background-blend-mode: multiply;
}
```

---

### 錯誤 5：多背景圖忘記每層都可以有自己的設定

不夠清楚：

```css
.card {
  background:
    url("./assets/badge.svg"),
    url("./assets/pattern-grid.svg");
}
```

更清楚：

```css
.card {
  background:
    url("./assets/badge.svg") right 24px bottom 24px / 120px 120px no-repeat,
    url("./assets/pattern-grid.svg") left top / 72px 72px repeat,
    #eff6ff;
}
```

---

### 錯誤 6：簡寫太長，降低可讀性

如果一行太長：

```css
.hero {
  background: linear-gradient(rgb(15 23 42 / 72%), rgb(15 23 42 / 72%)), url("./assets/hero-scene.svg") center / cover no-repeat fixed border-box padding-box #0f172a;
}
```

可以改成多行：

```css
.hero {
  background:
    linear-gradient(rgb(15 23 42 / 72%), rgb(15 23 42 / 72%)),
    url("./assets/hero-scene.svg")
    center / cover
    no-repeat
    fixed
    border-box
    padding-box
    #0f172a;
}
```

或直接拆成 longhand，通常更好維護。

---

## 17. 面試與讀碼常見問法

### 問題 1：`background` 是什麼？

`background` 是 CSS 背景屬性的 shorthand，可以一次設定背景色、背景圖、背景位置、背景尺寸、重複方式、附著方式、定位盒與裁切盒。

---

### 問題 2：使用 `background` 有什麼風險？

它會重設未寫出的背景子屬性。  
如果只想修改單一背景屬性，用 longhand 比較安全。

---

### 問題 3：`center / cover` 是什麼？

`center` 是 `background-position`。  
`cover` 是 `background-size`。  
在 `background` 簡寫中，尺寸必須寫在位置後方，並用 `/` 分隔。

```css
background: url("./bg.svg") center / cover no-repeat;
```

---

### 問題 4：多背景圖時誰在上層？

第一個背景在最上層，最後一個背景在最下層。  
背景色在所有背景圖片下方。

---

### 問題 5：多背景圖時，背景色可以放在哪？

只能放在最後一層。

---

### 問題 6：`padding-box content-box` 怎麼讀？

第一個 box 值是 `background-origin`。  
第二個 box 值是 `background-clip`。

```css
background: url("./bg.svg") padding-box content-box;
```

大致等於：

```css
background-origin: padding-box;
background-clip: content-box;
```

---

### 問題 7：`background` 包含 `background-blend-mode` 嗎？

不包含。  
`background-blend-mode` 要另外寫。

---

## 18. 一句話抓核心

> `background` 是一次設定整組背景的簡寫；它很適合描述完整背景，但只要你只是想改某一個背景子屬性，就應優先使用 longhand，避免未寫出的設定被重設。

---

## 自測問題

1. `background` 是 longhand 還是 shorthand？
2. `background` 可以設定哪些背景子屬性？
3. `background` 是否包含 `background-blend-mode`？
4. 為什麼 `background: url("./bg.svg");` 可能造成 bug？
5. 只想修改背景圖片來源時，應該用 `background` 還是 `background-image`？
6. `background-size` 在 `background` 簡寫中必須寫在哪裡？
7. `center / cover` 中，`center` 是什麼？`cover` 是什麼？
8. 多背景圖用什麼符號分隔？
9. 多背景圖中第一個背景在上層還是下層？
10. 多背景圖中 `background-color` 可以放在哪一層？
11. 一個 box 值在 `background` 中代表什麼？
12. 兩個 box 值在 `background` 中如何對應 `origin` 和 `clip`？
13. 什麼情況適合用 `background`？
14. 什麼情況應該用 `background-position`、`background-size` 等 longhand？

---

## 練習題

### 練習 1：把 longhand 改成 shorthand

把下面程式碼改成 `background`：

```css
.card {
  background-color: #eff6ff;
  background-image: url("./assets/badge.svg");
  background-repeat: no-repeat;
  background-position: right 24px bottom 24px;
  background-size: 120px 120px;
}
```

參考答案：

```css
.card {
  background:
    url("./assets/badge.svg")
    right 24px bottom 24px / 120px 120px
    no-repeat
    #eff6ff;
}
```

---

### 練習 2：找出錯誤

下面哪裡錯？

```css
.hero {
  background: url("./assets/hero-scene.svg") center cover no-repeat;
}
```

答案：`cover` 是 `background-size`，必須寫在 `/` 後面。

修正：

```css
.hero {
  background: url("./assets/hero-scene.svg") center / cover no-repeat;
}
```

---

### 練習 3：多背景圖

建立一個 Hero，要求：

- 第一層：深色半透明漸層
- 第二層：背景圖
- 背景圖置中、cover、不重複
- 底色為 `#0f172a`

提示：

```css
.hero {
  background:
    linear-gradient(rgb(15 23 42 / 70%), rgb(15 23 42 / 70%)),
    url("./assets/hero-scene.svg") center / cover no-repeat #0f172a;
}
```

---

### 練習 4：避免 shorthand bug

原本有：

```css
.card {
  background:
    url("./assets/badge.svg")
    right 24px bottom 24px / 120px 120px
    no-repeat
    #ffffff;
}
```

現在只想換圖片，請問應該怎麼寫？

答案：

```css
.card {
  background-image: url("./assets/new-badge.svg");
}
```

---

## 延伸閱讀

- 上一篇：背景圖像固定 `background-attachment`
- 下一篇：背景尺寸 `background-size`
- 建議搭配：
  - `background-color`
  - `background-image`
  - `background-repeat`
  - `background-position`
  - `background-size`
  - `background-origin`
  - `background-clip`
  - `background-attachment`

---

## 參考資料

- MDN Web Docs：`background`
- MDN Web Docs：CSS shorthand properties
- MDN Web Docs：Using multiple backgrounds
