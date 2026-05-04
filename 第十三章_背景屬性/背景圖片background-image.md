# 背景圖片 background-image

所屬章節：第 13 章 背景屬性  
建議搭配 demo：[`demo/background-image/index.html`](./demo/background-image/index.html)

---

## 本節導讀

`background-image` 用來替元素設定**一層或多層背景圖像**。

這裡的「圖像」不只是真正的圖片檔，也包含 CSS 產生的漸層，例如：

```css
background-image: url("./images/card-bg.png");
background-image: linear-gradient(135deg, #dbeafe, #eff6ff);
background-image: url("./pattern.svg"), linear-gradient(#fff, #f8fafc);
```

它常用於：

- 裝飾性背景
- Banner / Hero 區塊
- 卡片底紋
- 重複圖案背景
- 漸層背景
- 圖片上加遮罩提升文字可讀性

但它不適合用來放「有內容意義」的圖片。  
如果圖片本身是文章插圖、商品圖、人物照片、證件圖、圖表，通常應使用 `<img>`，並提供合適的 `alt`。

---

## 學習目標

學完本節後，你應該能夠回答：

1. `background-image` 是什麼？
2. `url()`、`linear-gradient()`、`none` 分別代表什麼？
3. 背景圖片為什麼不會把盒子撐開？
4. 背景圖片為什麼預設會重複平鋪？
5. 背景圖片和 `<img>` 的語意差在哪？
6. 多背景圖的圖層順序怎麼判斷？
7. `background-image` 和 `background-color` 誰在上、誰在下？
8. `background-image` 和 `background` 簡寫差在哪？
9. 實務上如何處理圖片載入失敗、文字可讀性與路徑問題？

---

## 關鍵字

- 中文：背景圖片、背景圖、裝飾圖、漸層背景、多背景圖、圖片遮罩
- 英文：`background-image`
- 常見值：`none`、`url()`、`linear-gradient()`、`radial-gradient()`、`image-set()`
- 相關屬性：
  - `background-color`
  - `background-repeat`
  - `background-position`
  - `background-size`
  - `background-attachment`
  - `background-origin`
  - `background-clip`
  - `background`
- 易混淆概念：
  - 背景圖片 ≠ `<img>` 內容圖片
  - `background-image` 不會撐開盒子
  - `background-image` 只設定圖片來源，不負責尺寸、位置、重複方式
  - `linear-gradient()` 也是一種背景圖像
  - 多背景圖第一個值在最上層
  - `background: ...` 是簡寫，可能會重設其他背景屬性

---

## 建議回查情境

當你遇到以下情況，可以回來查這一節：

- 想替卡片、Banner、頁面區塊加背景圖
- 想確認圖片該用 `<img>` 還是 `background-image`
- 背景圖片沒有顯示，不知道是路徑錯、盒子沒高度，還是被其他屬性蓋掉
- 想用漸層當背景
- 想在圖片上加一層半透明遮罩，讓文字更清楚
- 想整理 `background-image`、`background-size`、`background-position` 的分工
- 想知道多背景圖的逗號順序怎麼讀

---

## Demo 範例

本節 demo 放在：

```text
demo/background-image/index.html
```

本節 demo 使用本地 SVG 圖檔：

```text
demo/background-image/assets/hero-pattern.svg
demo/background-image/assets/tile-pattern.svg
demo/background-image/assets/decorative-shape.svg
```

這樣 demo 不依賴外部圖片網址，離線開啟也能正常觀看。

未來新增其他背景屬性 demo 時，可以繼續放在：

```text
demo/background-color/index.html
demo/background-repeat/index.html
demo/background-position/index.html
demo/background-size/index.html
```

每一節都保留自己的 `index.html`、`style.css`、`README.md`，但透過外層資料夾名稱區分主題。

---

## 30 秒複習入口

- `background-image` 用來設定元素背景圖像。
- 最常見語法是 `background-image: url("./image.png");`。
- `linear-gradient()`、`radial-gradient()` 也屬於背景圖像。
- 預設值是 `none`。
- 背景圖片預設會重複平鋪，等同搭配 `background-repeat: repeat;`。
- 背景圖片**不會撐開盒子**；元素需要內容、`width`、`height`、`padding`、`min-height` 等可見空間。
- 背景圖片通常用於裝飾；有語意的圖片應該使用 `<img>`。
- 同一個元素可以有多層背景圖，用逗號分隔。
- 多背景圖的第一個值在最上層，最後一個值在最底層。
- `background-color` 是底色，會顯示在背景圖片下方。
- 只想改圖片來源時，用 `background-image`；想一次設定多個背景屬性時，才用 `background`。

---

## 速查區

### 1. 基本語法

```css
.selector {
  background-image: url("./images/bg.png");
}
```

路徑建議加引號：

```css
.card {
  background-image: url("./assets/card-bg.svg");
}
```

### 2. 常見值

| 寫法 | 範例 | 說明 |
|---|---|---|
| `none` | `background-image: none;` | 不使用背景圖片 |
| `url()` | `background-image: url("./bg.png");` | 使用圖片檔 |
| `linear-gradient()` | `background-image: linear-gradient(135deg, #dbeafe, #eff6ff);` | 線性漸層 |
| `radial-gradient()` | `background-image: radial-gradient(circle, #fff, #bfdbfe);` | 放射狀漸層 |
| 多背景 | `background-image: url("./icon.svg"), linear-gradient(#fff, #eee);` | 多層背景 |
| `image-set()` | `background-image: image-set(url("./bg.png") 1x, url("./bg@2x.png") 2x);` | 依解析度選擇圖片 |

---

### 3. 形式定義速查

| 項目 | 說明 |
|---|---|
| 屬性名稱 | `background-image` |
| 作用 | 設定元素的一層或多層背景圖像 |
| 初始值 | `none` |
| 是否繼承 | 否 |
| 常見值型別 | `none`、`<image>` |
| 是否影響盒子尺寸 | 否 |
| 是否提供語意 | 否 |
| 預設重複方式 | `background-repeat: repeat` |
| 與背景色關係 | 背景圖片在背景色上方 |
| 多背景圖順序 | 第一個值在最上層，最後一個值在最下層 |

---

### 4. 常用組合

#### 卡片背景圖

```css
.card {
  min-height: 240px;
  background-color: #f8fafc;
  background-image: url("./assets/decorative-shape.svg");
  background-repeat: no-repeat;
  background-position: right 24px bottom 24px;
  background-size: 120px auto;
}
```

#### Banner 背景圖

```css
.hero {
  min-height: 360px;
  background-color: #0f172a;
  background-image:
    linear-gradient(rgb(15 23 42 / 70%), rgb(15 23 42 / 70%)),
    url("./assets/hero-pattern.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
}
```

#### 重複紋理

```css
.pattern {
  background-color: #fff7ed;
  background-image: url("./assets/tile-pattern.svg");
  background-repeat: repeat;
}
```

#### 漸層背景

```css
.gradient {
  background-image: linear-gradient(135deg, #e0f2fe, #f5f3ff);
}
```

---

## 正文

## 1. `background-image` 是什麼？

`background-image` 是 CSS 背景屬性的一員，用來設定元素的背景圖像。

```html
<div class="box">背景圖片</div>
```

```css
.box {
  width: 320px;
  height: 180px;
  background-image: url("./assets/hero-pattern.svg");
}
```

這段程式會替 `.box` 設定背景圖。

但是要注意：

```css
background-image: url("./assets/hero-pattern.svg");
```

只負責「圖片來源」，不負責：

- 盒子寬度
- 盒子高度
- 圖片是否重複
- 圖片位置
- 圖片尺寸
- 圖片是否固定
- 圖片是否有語意

這些都需要其他 CSS 或 HTML 結構配合。

---

## 2. 背景圖片不會撐開盒子

這是 `background-image` 最重要的觀念之一。

背景圖片和背景顏色一樣，都是「畫在盒子背景上的視覺效果」。  
它不是內容，所以不會像 `<img>` 一樣佔據版面，也不會把父元素撐高。

### 可能看不到的寫法

```html
<div class="empty-bg"></div>
```

```css
.empty-bg {
  background-image: url("./assets/hero-pattern.svg");
}
```

這個元素可能看不到背景圖，因為它沒有：

- 內容
- `width`
- `height`
- `padding`
- `min-height`

### 可見的寫法

```css
.empty-bg {
  width: 320px;
  min-height: 180px;
  background-image: url("./assets/hero-pattern.svg");
}
```

只要盒子有可見面積，背景圖片才有地方被畫出來。

---

## 3. 背景圖片和 `<img>` 的差異

判斷方式可以用一句話：

> 圖片拿掉後，內容是否仍然完整？

如果答案是「仍然完整」，通常可以用 `background-image`。  
如果答案是「內容會失去重要資訊」，通常要用 `<img>`。

### 適合用 `background-image`

```css
.banner {
  background-image: url("./assets/hero-pattern.svg");
}
```

適合情境：

- 裝飾性背景
- 視覺氛圍
- 紋理
- 圖案
- 漸層
- 文字後面的遮罩背景

### 適合用 `<img>`

```html
<img src="./product.jpg" alt="黑色無線滑鼠">
```

適合情境：

- 商品圖片
- 文章圖片
- 人物照片
- 圖表
- Logo 若本身是網站識別或重要內容
- 任何需要 `alt` 文字的圖片

### 對照表

| 比較項目 | `background-image` | `<img>` |
|---|---|---|
| 本質 | CSS 視覺背景 | HTML 內容 |
| 是否有語意 | 沒有 | 有 |
| 是否能寫 `alt` | 不能 | 可以 |
| 是否會撐開盒子 | 不會 | 會，圖片是內容 |
| 適合用途 | 裝飾、氛圍、底紋、遮罩 | 內容圖片、商品圖、文章圖 |
| SEO / 無障礙 | 不適合承載重要資訊 | 適合承載重要圖片資訊 |

---

## 4. `url()` 的路徑觀念

基本語法：

```css
.card {
  background-image: url("./assets/card-bg.svg");
}
```

在獨立 CSS 檔案中，`url()` 的相對路徑通常是相對於**該 CSS 檔案所在位置**，不是相對於 HTML 檔案。

例如：

```text
demo/background-image/
├─ index.html
├─ style.css
└─ assets/
   └─ hero-pattern.svg
```

因為 `style.css` 和 `assets/` 在同一層，所以 CSS 可以寫：

```css
.hero {
  background-image: url("./assets/hero-pattern.svg");
}
```

而不是：

```css
.hero {
  background-image: url("./demo/background-image/assets/hero-pattern.svg");
}
```

### 實務建議

- 路徑中有空白、括號、特殊字元時，建議使用引號。
- 圖片檔名建議使用英文、小寫、連字號。
- 開發時如果背景圖不顯示，先開 DevTools 的 Network 或 Console 檢查是否 404。
- 若專案使用 Vite / Vue / Webpack，打包後的路徑可能會被工具處理，要依專案規則調整。

---

## 5. `none`：移除背景圖片

`background-image` 的預設值是：

```css
background-image: none;
```

你也可以用它明確移除背景圖片：

```css
.card {
  background-image: none;
}
```

常見情境：

```css
.card {
  background-image: url("./assets/card-bg.svg");
}

.card.is-simple {
  background-image: none;
}
```

這代表 `.is-simple` 狀態下不要顯示背景圖片。

---

## 6. 漸層也是背景圖片

很多人會以為 `background-image` 只能放圖片檔。  
實際上 CSS 漸層也是一種 `<image>`，所以可以放在 `background-image` 裡。

### 線性漸層

```css
.box {
  background-image: linear-gradient(135deg, #dbeafe, #eff6ff);
}
```

### 放射狀漸層

```css
.box {
  background-image: radial-gradient(circle at top left, #bfdbfe, transparent 50%);
}
```

### 漸層常見用途

- 卡片底色
- Banner 背景
- Skeleton loading
- 圖片遮罩
- 深色覆蓋層
- 讓文字區塊更有層次

---

## 7. 背景圖片預設會平鋪

如果背景圖片比元素小，預設會重複鋪滿元素。

這等同於：

```css
.box {
  background-image: url("./assets/tile-pattern.svg");
  background-repeat: repeat;
}
```

如果你只想顯示一次圖片，需要另外設定：

```css
.box {
  background-repeat: no-repeat;
}
```

如果你只想水平重複：

```css
.box {
  background-repeat: repeat-x;
}
```

如果你只想垂直重複：

```css
.box {
  background-repeat: repeat-y;
}
```

`background-image` 本身不處理平鋪方式，這是 `background-repeat` 的工作。

---

## 8. 背景圖片的位置與大小不是 `background-image` 決定的

`background-image` 只決定圖片來源。  
若要控制位置和大小，要搭配其他屬性。

```css
.hero {
  background-image: url("./assets/hero-pattern.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

分工如下：

| 屬性 | 負責什麼 |
|---|---|
| `background-image` | 圖片來源 |
| `background-repeat` | 是否重複平鋪 |
| `background-position` | 背景圖位置 |
| `background-size` | 背景圖尺寸 |
| `background-attachment` | 是否跟著頁面捲動 |
| `background-origin` | 背景定位參考盒 |
| `background-clip` | 背景繪製裁切範圍 |
| `background-color` | 背景底色 |

所以實務上很少只寫 `background-image`。  
常見會搭配：

```css
background-repeat: no-repeat;
background-position: center;
background-size: cover;
```

---

## 9. 多背景圖

同一個元素可以設定多個背景圖，用逗號分隔：

```css
.card {
  background-image:
    url("./assets/decorative-shape.svg"),
    linear-gradient(135deg, #eff6ff, #dbeafe);
}
```

圖層順序是：

1. 第一個背景在最上層
2. 第二個背景在它下面
3. 最後一個背景在最底層
4. `background-color` 比所有背景圖片更底層

### 例子：圖片上加遮罩

```css
.hero {
  background-color: #0f172a;
  background-image:
    linear-gradient(rgb(15 23 42 / 72%), rgb(15 23 42 / 72%)),
    url("./assets/hero-pattern.svg");
  color: white;
}
```

這裡的圖層從上到下是：

```text
linear-gradient(...)  半透明遮罩
url(...)              背景圖片
background-color      底色
```

為什麼遮罩要寫第一個？  
因為第一個背景在最上層，才能蓋在圖片上面。

---

## 10. 背景色是圖片的保底色

建議使用背景圖片時，通常也加上 `background-color`：

```css
.hero {
  background-color: #0f172a;
  background-image: url("./assets/hero-pattern.svg");
}
```

原因：

1. 圖片載入前，使用者至少會先看到底色。
2. 圖片載入失敗時，版面不會完全空白。
3. 背景圖片有透明區域時，底色會透出來。
4. 深色底色可以搭配白字，維持基本可讀性。

尤其是大型 Banner、Hero、卡片封面，幾乎都應該有背景色作為 fallback。

---

## 11. `background-image` 和 `background` 簡寫

只想改圖片來源時，建議使用：

```css
.card {
  background-image: url("./assets/card-bg.svg");
}
```

不要隨便改成：

```css
.card {
  background: url("./assets/card-bg.svg");
}
```

因為 `background` 是簡寫，會一起設定多個背景相關屬性。  
沒有寫出的背景子屬性，可能會被重設為預設值。

### 可能出問題的例子

```css
.card {
  background-color: #f8fafc;
  background-image: url("./assets/card-bg.svg");
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 160px auto;
}

/* 後面又寫 */
.card {
  background: url("./assets/another-bg.svg");
}
```

後面的 `background` 可能讓原本的：

```css
background-color
background-repeat
background-position
background-size
```

被重設或覆蓋。

### 更安全的改法

```css
.card {
  background-image: url("./assets/another-bg.svg");
}
```

如果確定要用簡寫，建議把需要的資訊寫完整：

```css
.card {
  background:
    url("./assets/another-bg.svg")
    right 24px bottom 24px / 160px auto
    no-repeat
    #f8fafc;
}
```

注意 `background-size` 在簡寫中通常要跟在 `background-position` 後面，並使用 `/` 分隔。

---

## 12. `image-set()`：依螢幕解析度選圖片

實務上若要提供 1x、2x 圖片，可以使用 `image-set()`：

```css
.hero {
  background-image: image-set(
    url("./assets/hero-pattern.svg") 1x,
    url("./assets/hero-pattern.svg") 2x
  );
}
```

實際專案通常會準備不同解析度的圖片：

```css
.hero {
  background-image: image-set(
    url("./images/hero.jpg") 1x,
    url("./images/hero@2x.jpg") 2x
  );
}
```

這可以讓高解析度螢幕拿到更合適的圖片。  
但要注意瀏覽器支援度與專案需求，不一定每個背景圖都需要這樣處理。

---

## 13. 實務案例：Hero 區塊

HTML：

```html
<section class="hero">
  <p class="eyebrow">CSS Background</p>
  <h1>背景圖片讓區塊更有視覺層次</h1>
  <p>使用背景色作為 fallback，使用圖片建立氛圍，再用漸層遮罩提升文字可讀性。</p>
</section>
```

CSS：

```css
.hero {
  min-height: 360px;
  padding: 48px;
  color: white;
  background-color: #0f172a;
  background-image:
    linear-gradient(rgb(15 23 42 / 74%), rgb(15 23 42 / 74%)),
    url("./assets/hero-pattern.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

這個案例同時使用：

- `background-color`：深色底色
- `linear-gradient()`：遮罩
- `url()`：背景圖
- `background-repeat: no-repeat`：不重複
- `background-position: center`：置中
- `background-size: cover`：鋪滿區塊

這是實務中很常見的寫法。

---

## 14. 實務案例：卡片裝飾背景

```html
<article class="feature-card">
  <h2>背景圖片只是裝飾</h2>
  <p>卡片右下角的圖案不影響內容理解，所以適合用 background-image。</p>
</article>
```

```css
.feature-card {
  min-height: 220px;
  padding: 32px;
  background-color: #ffffff;
  background-image: url("./assets/decorative-shape.svg");
  background-repeat: no-repeat;
  background-position: right 24px bottom 24px;
  background-size: 120px auto;
}
```

這裡的圖案只是視覺裝飾，拿掉後內容仍然完整，所以適合用背景圖片。

---

## 15. 常見錯誤與排查

### 錯誤 1：盒子沒有高度

```css
.box {
  background-image: url("./assets/hero-pattern.svg");
}
```

修正：

```css
.box {
  min-height: 180px;
  background-image: url("./assets/hero-pattern.svg");
}
```

---

### 錯誤 2：圖片路徑錯誤

```css
.box {
  background-image: url("./images/bg.png");
}
```

如果 `images/bg.png` 不存在，就不會顯示圖片。

排查方式：

1. 開 DevTools
2. 看 Network 是否有 404
3. 確認路徑是相對於 CSS 檔案
4. 確認檔名大小寫是否正確

---

### 錯誤 3：忘記預設會平鋪

```css
.box {
  background-image: url("./assets/decorative-shape.svg");
}
```

修正：

```css
.box {
  background-image: url("./assets/decorative-shape.svg");
  background-repeat: no-repeat;
}
```

---

### 錯誤 4：文字看不清楚

```css
.hero {
  color: white;
  background-image: url("./assets/hero-pattern.svg");
}
```

修正：加上遮罩與底色。

```css
.hero {
  color: white;
  background-color: #0f172a;
  background-image:
    linear-gradient(rgb(15 23 42 / 72%), rgb(15 23 42 / 72%)),
    url("./assets/hero-pattern.svg");
}
```

---

### 錯誤 5：把重要圖片放進背景

```css
.product {
  background-image: url("./product.jpg");
}
```

如果這是商品圖，建議改用：

```html
<img src="./product.jpg" alt="商品名稱">
```

背景圖片沒有 `alt`，不適合承載重要內容。

---

### 錯誤 6：用 `background` 簡寫覆蓋原本設定

```css
.card {
  background-color: #f8fafc;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.card.active {
  background: url("./assets/hero-pattern.svg");
}
```

修正：

```css
.card.active {
  background-image: url("./assets/hero-pattern.svg");
}
```

除非你想一次重設整組背景屬性，否則不要為了改圖片就使用 `background` 簡寫。

---

## 16. 面試與讀碼常見問法

### 問題 1：`background-image` 和 `<img>` 差在哪？

重點回答：

- `background-image` 是 CSS 視覺背景，沒有語意，不會撐開盒子，也不能提供 `alt`。
- `<img>` 是 HTML 內容圖片，有語意，會佔據版面，可以提供 `alt`。
- 裝飾圖用背景；重要內容圖用 `<img>`。

### 問題 2：為什麼設定了背景圖卻沒出現？

可能原因：

- 元素沒有寬高或內容
- 圖片路徑錯
- 被後面的 CSS 覆蓋
- 背景圖太小且位置不明顯
- 文字或其他背景層蓋住了
- 沒有設定 `background-size`，圖片尺寸不符合預期

### 問題 3：多背景圖誰在上面？

第一個值在最上層。

```css
background-image:
  linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)),
  url("./bg.jpg");
```

這裡 `linear-gradient()` 在上，`url()` 在下。

### 問題 4：為什麼建議同時寫 `background-color`？

因為它是背景圖的 fallback：

- 圖片載入前有底色
- 圖片失敗時不會空白
- 圖片透明區域可以露出底色
- 有助於維持文字對比

---

## 17. 一句話抓核心

> `background-image` 負責「背景圖像來源」，通常用於裝飾與視覺效果；它不提供內容語意、不會撐開盒子，也不負責尺寸、位置與重複方式。

---

## 自測問題

1. `background-image` 的基本語法是什麼？
2. `background-image` 的預設值是什麼？
3. 為什麼只設定背景圖片，畫面上可能還是看不到？
4. 背景圖片預設會不會重複平鋪？
5. `linear-gradient()` 為什麼可以寫在 `background-image`？
6. `background-image` 和 `<img>` 最大差異是什麼？
7. 多背景圖中，第一個值在上層還是下層？
8. `background-color` 和 `background-image` 同時存在時，誰在底層？
9. 什麼情況不建議使用 `background-image`？
10. 為什麼只想換背景圖時，不建議直接寫 `background: url(...);`？

---

## 練習題

### 練習 1：基本背景圖

建立一個 `.box`，要求：

- 寬度 `320px`
- 高度 `180px`
- 使用 `background-image`
- 圖片不重複
- 圖片置中
- 圖片完整顯示在盒子內

提示：

```css
background-repeat: no-repeat;
background-position: center;
background-size: contain;
```

---

### 練習 2：Hero 遮罩

建立一個 `.hero`，要求：

- 高度至少 `360px`
- 使用一張背景圖
- 加上一層半透明黑色漸層
- 文字為白色
- 背景圖鋪滿容器

提示：

```css
background-image:
  linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)),
  url("./assets/hero-pattern.svg");
```

---

### 練習 3：多背景圖卡片

建立一張卡片，要求：

- 有白色底色
- 右下角有裝飾圖
- 背後有淡色漸層
- 內容仍然清楚可讀

---

## 延伸閱讀

- 上一篇：背景顏色 `background-color`
- 下一篇：背景平鋪 `background-repeat`
- 建議搭配：
  - `background-size`
  - `background-position`
  - `background-repeat`
  - `background`
  - `img` 標籤和背景圖片的區別

---

## 參考資料

- MDN Web Docs：`background-image`
- MDN Web Docs：`background`
- MDN Web Docs：Using multiple backgrounds
- MDN Web Docs：`image-set()`
- MDN Web Docs：`<image>`
