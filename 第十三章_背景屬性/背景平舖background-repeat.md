# 背景平鋪 background-repeat

所屬章節：第 13 章 背景屬性  
建議搭配 demo：[`demo/background-repeat/index.html`](./demo/background-repeat/index.html)

> 本節統一使用「平鋪」這個詞。若你原本檔名寫成「背景平舖」，概念相同，但筆記內文建議統一成「平鋪」。

---

## 本節導讀

`background-repeat` 用來控制**背景圖片是否重複排列**，以及沿著哪個方向重複。

當背景圖片比元素背景區域小時，瀏覽器預設會把圖片沿水平與垂直方向重複排列，直到鋪滿背景繪製區域。  
如果你只想讓圖片出現一次，或只想讓圖片沿 X 軸 / Y 軸重複，就需要設定 `background-repeat`。

它常見於：

- 小圖案重複形成紋理背景
- 背景圖片只顯示一次
- 水平線條背景
- 垂直側邊紋理
- 多背景圖分別控制不同重複方向
- 搭配 `background-size` 製作可縮放圖案
- 搭配 `background-position` 控制單張背景圖位置

---

## 學習目標

學完本節後，你應該能夠回答：

1. `background-repeat` 控制的是背景圖片還是背景顏色？
2. `background-repeat` 的預設值是什麼？
3. `repeat`、`no-repeat`、`repeat-x`、`repeat-y` 差在哪？
4. `space` 和 `round` 分別解決什麼問題？
5. 雙值語法 `background-repeat: 水平方向 垂直方向;` 怎麼讀？
6. 為什麼 `repeat-x` 等同於 `repeat no-repeat`？
7. 多背景圖時，`background-repeat` 的值如何一層一層對應？
8. `background-repeat` 和 `background-size`、`background-position` 如何配合？
9. 為什麼設定 `no-repeat` 後，還常常需要補 `background-position`？
10. 為什麼使用 `background` 簡寫時可能不小心重設 `background-repeat`？

---

## 關鍵字

- 中文：背景平鋪、背景重複、背景圖片重複、背景圖片不平鋪
- 英文：`background-repeat`
- 常見值：
  - `repeat`
  - `no-repeat`
  - `repeat-x`
  - `repeat-y`
  - `space`
  - `round`
- 雙值語法：
  - `repeat no-repeat`
  - `no-repeat repeat`
  - `space repeat`
  - `round no-repeat`
- 相關屬性：
  - `background-image`
  - `background-position`
  - `background-size`
  - `background-color`
  - `background-origin`
  - `background-clip`
  - `background`
- 易混淆概念：
  - `background-repeat` 只影響背景圖片，不影響背景顏色
  - 預設值不是 `no-repeat`，而是 `repeat`
  - `repeat-x` 是 `repeat no-repeat` 的簡寫
  - `repeat-y` 是 `no-repeat repeat` 的簡寫
  - `space` 會留下間距，避免裁切
  - `round` 會調整背景圖尺寸，可能造成圖案變形
  - 多背景圖時，逗號前後要一層一層對應

---

## 建議回查情境

當你遇到以下情況，可以回來查這一節：

- 背景圖片一直重複出現，想讓它只顯示一次
- 小圖案沒有如預期鋪滿整個區塊
- 想做可重複的紋理背景
- 想做只有水平重複的線條背景
- 想做只有垂直重複的側邊背景
- 不懂 `repeat-x` 和 `repeat y` 的差別
- 不懂 `space`、`round` 實際差在哪
- 使用多背景圖時，不知道每個 `background-repeat` 值對應哪一層
- 使用 `background` 簡寫後，原本的 `no-repeat` 失效
- 設定 `no-repeat` 後，背景圖位置不符合預期

---

## Demo 範例

本節 demo 放在：

```text
demo/background-repeat/index.html
```

本節 demo 使用本地 SVG 圖檔：

```text
demo/background-repeat/assets/tile-dot.svg
demo/background-repeat/assets/stripe-horizontal.svg
demo/background-repeat/assets/stripe-vertical.svg
demo/background-repeat/assets/badge.svg
```

這樣 demo 不依賴外部圖片網址，離線開啟也能正常觀看。

未來新增其他背景屬性 demo 時，可以繼續放在：

```text
demo/background-color/index.html
demo/background-image/index.html
demo/background-position/index.html
demo/background-size/index.html
```

每一節都保留自己的 `index.html`、`style.css`、`README.md`，但透過外層資料夾名稱區分主題。

---

## 30 秒複習入口

- `background-repeat` 控制背景圖片如何重複排列。
- 它不控制背景顏色；背景顏色本身就是鋪滿背景繪製區域。
- 預設值是 `repeat`，等同於 `repeat repeat`。
- `repeat`：水平與垂直方向都重複。
- `no-repeat`：不重複，只顯示一張。
- `repeat-x`：只沿水平 X 軸重複，等同 `repeat no-repeat`。
- `repeat-y`：只沿垂直 Y 軸重複，等同 `no-repeat repeat`。
- `space`：盡量重複但不裁切，剩餘空間分配成間距。
- `round`：調整背景圖尺寸，讓圖案剛好填滿，不留間距，但可能變形。
- 雙值語法的第一個值控制水平方向，第二個值控制垂直方向。
- 多背景圖時，`background-repeat` 可以用逗號對應每一層背景圖。
- 如果使用 `background` 簡寫，未寫出的背景子屬性可能被重設。

---

## 速查區

### 1. 基本語法

```css
.selector {
  background-image: url("./assets/tile-dot.svg");
  background-repeat: repeat;
}
```

### 2. 常見值

| 值 | 等價寫法 | 效果 | 常見用途 |
|---|---|---|---|
| `repeat` | `repeat repeat` | 水平與垂直方向都重複 | 紋理、圖案底紋 |
| `no-repeat` | `no-repeat no-repeat` | 不重複，只顯示一次 | icon、logo、單張裝飾圖 |
| `repeat-x` | `repeat no-repeat` | 只沿 X 軸水平重複 | 水平線、橫向紋理 |
| `repeat-y` | `no-repeat repeat` | 只沿 Y 軸垂直重複 | 垂直線、側邊紋理 |
| `space` | `space space` | 重複但不裁切，剩餘空間變間距 | 希望圖案完整顯示 |
| `round` | `round round` | 調整背景圖大小，剛好鋪滿 | 希望不留空白且不裁切邊緣 |

---

### 3. 雙值語法

```css
background-repeat: 水平方向 垂直方向;
```

例如：

```css
background-repeat: repeat no-repeat;
```

意思是：

```text
水平方向：repeat
垂直方向：no-repeat
```

也就是只沿水平方向重複，等同於：

```css
background-repeat: repeat-x;
```

常見對照：

| 寫法 | 水平方向 | 垂直方向 | 等價 |
|---|---|---|---|
| `repeat repeat` | 重複 | 重複 | `repeat` |
| `no-repeat no-repeat` | 不重複 | 不重複 | `no-repeat` |
| `repeat no-repeat` | 重複 | 不重複 | `repeat-x` |
| `no-repeat repeat` | 不重複 | 重複 | `repeat-y` |
| `space repeat` | 水平分配間距 | 垂直重複 | 無單值簡寫 |
| `round no-repeat` | 水平縮放鋪滿 | 垂直不重複 | 無單值簡寫 |

---

### 4. 形式定義速查

| 項目 | 說明 |
|---|---|
| 屬性名稱 | `background-repeat` |
| 作用 | 設定背景圖片的重複方式 |
| 初始值 | `repeat`，計算後可視為 `repeat repeat` |
| 是否繼承 | 否 |
| 影響對象 | 背景圖片，不是背景顏色 |
| 單值語法 | 同時設定水平與垂直方向，或使用 `repeat-x` / `repeat-y` |
| 雙值語法 | 第一個值控制水平，第二個值控制垂直 |
| 多背景圖 | 可用逗號分隔，逐層對應背景圖片 |
| 常搭配屬性 | `background-image`、`background-size`、`background-position` |
| 使用簡寫風險 | `background` 可能重設 `background-repeat` |

---

## 正文

## 1. `background-repeat` 是什麼？

`background-repeat` 是 CSS 背景屬性的一員，用來設定背景圖片是否要重複排列。

```css
.box {
  background-image: url("./assets/tile-dot.svg");
  background-repeat: repeat;
}
```

這段程式的意思是：

```text
使用 tile-dot.svg 作為背景圖片，
並讓這張背景圖在水平與垂直方向重複排列。
```

要注意：`background-repeat` 不會自己產生圖片。  
它必須搭配 `background-image`，才有明顯效果。

---

## 2. 預設值是 `repeat`

如果你只寫：

```css
.box {
  background-image: url("./assets/tile-dot.svg");
}
```

瀏覽器預設會使用：

```css
.box {
  background-repeat: repeat;
}
```

也可以理解成：

```css
.box {
  background-repeat: repeat repeat;
}
```

所以當背景圖片比元素小時，你會看到同一張小圖被重複鋪滿整個背景區域。

這就是為什麼很多初學者設定背景圖片後，會發現畫面出現一堆重複圖片。

---

## 3. `background-repeat` 控制的是背景圖片，不是背景顏色

背景顏色不需要設定重複。

```css
.box {
  background-color: #fde68a;
}
```

背景顏色本來就會填滿元素的背景繪製範圍。

`background-repeat` 只影響：

```css
background-image
```

例如：

```css
.box {
  background-color: #fde68a;
  background-image: url("./assets/tile-dot.svg");
  background-repeat: no-repeat;
}
```

這裡的結果是：

- 背景色仍然鋪滿整個元素
- 背景圖片只顯示一次
- 如果圖片有透明區域，會看到下面的背景色

---

## 4. `repeat`

`repeat` 是預設值，表示背景圖片會在水平與垂直方向都重複。

```css
.box {
  background-image: url("./assets/tile-dot.svg");
  background-repeat: repeat;
}
```

適合：

- 紋理背景
- 網格背景
- 小圖案底紋
- 可無限延伸的背景素材

注意：如果背景圖片尺寸與容器尺寸不剛好整除，邊緣的圖片可能會被裁切。

---

## 5. `no-repeat`

`no-repeat` 表示背景圖片不重複，只顯示一張。

```css
.box {
  background-image: url("./assets/badge.svg");
  background-repeat: no-repeat;
}
```

適合：

- icon 裝飾
- 卡片角落圖案
- Hero 背景圖
- logo 型裝飾
- 單張插圖式背景

但只寫 `no-repeat` 通常還不夠。  
因為背景圖片的位置預設會從背景定位區域的左上角開始。

所以實務上常搭配：

```css
.box {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
```

或：

```css
.box {
  background-repeat: no-repeat;
  background-position: right 24px bottom 24px;
  background-size: 120px auto;
}
```

---

## 6. `repeat-x`

`repeat-x` 表示只沿 X 軸，也就是水平方向重複。

```css
.box {
  background-image: url("./assets/stripe-horizontal.svg");
  background-repeat: repeat-x;
}
```

它等同於：

```css
.box {
  background-repeat: repeat no-repeat;
}
```

意思是：

```text
水平方向：重複
垂直方向：不重複
```

適合：

- 橫向分隔線
- 頁首或頁尾的水平紋理
- 水平鋸齒邊
- 橫向重複的裝飾帶

常搭配：

```css
background-position: left bottom;
```

例如把水平線放在區塊底部。

---

## 7. `repeat-y`

`repeat-y` 表示只沿 Y 軸，也就是垂直方向重複。

```css
.box {
  background-image: url("./assets/stripe-vertical.svg");
  background-repeat: repeat-y;
}
```

它等同於：

```css
.box {
  background-repeat: no-repeat repeat;
}
```

意思是：

```text
水平方向：不重複
垂直方向：重複
```

適合：

- 側邊欄背景
- 垂直分隔線
- 左右邊框風格裝飾
- 垂直時間軸背景

常搭配：

```css
background-position: left top;
```

或：

```css
background-position: right top;
```

---

## 8. `space`

`space` 的目標是：

> 讓背景圖片盡量重複，但不要裁切邊緣圖片。

```css
.box {
  background-image: url("./assets/badge.svg");
  background-repeat: space;
}
```

效果概念：

1. 瀏覽器會計算背景圖片最多可以完整放幾張。
2. 第一張和最後一張會貼近容器邊緣。
3. 多出來的空間會平均分配到圖片之間。
4. 背景圖不會因為容器尺寸不整除而被裁切。
5. 如果空間連一張圖片都放不下，仍可能被裁切。

適合：

- 圖案必須完整顯示
- 不希望邊緣出現半顆圖案
- 裝飾圖案之間可以接受空隙

注意：`space` 可能導致圖案間距變大。  
如果你希望圖案之間沒有空隙，`space` 就不適合。

---

## 9. `round`

`round` 的目標是：

> 讓背景圖片重複時剛好填滿，不留空白，也盡量避免裁切。

```css
.box {
  background-image: url("./assets/badge.svg");
  background-repeat: round;
}
```

效果概念：

1. 瀏覽器會計算要放幾張圖片比較接近。
2. 背景圖片會被縮放，讓它們剛好填滿可用空間。
3. 因為圖片尺寸被調整，所以可能造成圖案比例變形。

適合：

- 希望圖案鋪滿背景
- 不想出現邊緣裁切
- 可以接受圖案尺寸被微調

注意：如果背景圖是 logo、icon、人物、商品圖片，通常不建議用 `round`，因為它可能改變圖案比例。

---

## 10. `space` 和 `round` 的差異

| 比較 | `space` | `round` |
|---|---|---|
| 是否裁切 | 盡量不裁切 | 盡量不裁切 |
| 如何處理剩餘空間 | 分配成圖片間距 | 調整圖片尺寸 |
| 是否可能有空白 | 可能有間距 | 通常不留空隙 |
| 是否可能變形 | 不會改變圖片比例 | 可能改變圖片比例 |
| 適合情境 | 圖案要完整、可接受間距 | 想鋪滿、可接受縮放 |
| 不適合情境 | 不能有空隙的背景 | 不能變形的圖案 |

簡單記：

```text
space：留空間，不變形。
round：改尺寸，不留空。
```

---

## 11. 雙值語法：水平 | 垂直

`background-repeat` 可以寫兩個值：

```css
.box {
  background-repeat: repeat no-repeat;
}
```

讀法是：

```text
第一個值：水平方向
第二個值：垂直方向
```

所以：

```css
background-repeat: repeat no-repeat;
```

等同：

```css
background-repeat: repeat-x;
```

而：

```css
background-repeat: no-repeat repeat;
```

等同：

```css
background-repeat: repeat-y;
```

### 更多雙值範例

```css
background-repeat: space repeat;
```

意思是：

```text
水平方向使用 space
垂直方向使用 repeat
```

```css
background-repeat: round no-repeat;
```

意思是：

```text
水平方向使用 round
垂直方向不重複
```

這些寫法沒有對應的單值簡寫，但在做特殊紋理或裝飾背景時很有用。

---

## 12. 多背景圖中的 `background-repeat`

同一個元素可以有多層背景圖片：

```css
.card {
  background-image:
    url("./assets/badge.svg"),
    url("./assets/tile-dot.svg");
}
```

如果要分別控制每一層的重複方式，可以用逗號：

```css
.card {
  background-image:
    url("./assets/badge.svg"),
    url("./assets/tile-dot.svg");
  background-repeat:
    no-repeat,
    repeat;
}
```

對應方式如下：

| 層級 | `background-image` | `background-repeat` |
|---|---|---|
| 第 1 層，最上層 | `url("./assets/badge.svg")` | `no-repeat` |
| 第 2 層，下方 | `url("./assets/tile-dot.svg")` | `repeat` |

也就是：

```text
第一個 background-repeat 對應第一個 background-image。
第二個 background-repeat 對應第二個 background-image。
```

### 多背景圖完整範例

```css
.card {
  background-color: #eff6ff;
  background-image:
    url("./assets/badge.svg"),
    url("./assets/tile-dot.svg");
  background-repeat:
    no-repeat,
    repeat;
  background-position:
    right 24px bottom 24px,
    left top;
  background-size:
    96px auto,
    48px 48px;
}
```

圖層從上到下是：

```text
badge.svg       no-repeat，右下角裝飾
tile-dot.svg    repeat，底層紋理
background-color 背景底色
```

---

## 13. 和 `background-position` 的關係

`background-repeat` 決定是否重複。  
`background-position` 決定背景圖片的起始位置或單張圖片的位置。

```css
.box {
  background-image: url("./assets/badge.svg");
  background-repeat: no-repeat;
  background-position: center;
}
```

如果你寫：

```css
background-repeat: no-repeat;
```

但沒有寫：

```css
background-position: center;
```

背景圖片通常會出現在左上角。

所以 `no-repeat` 常常和 `background-position` 一起出現：

```css
background-repeat: no-repeat;
background-position: right 24px bottom 24px;
```

---

## 14. 和 `background-size` 的關係

`background-size` 決定背景圖片的尺寸。  
背景圖片尺寸會直接影響重複效果。

```css
.box {
  background-image: url("./assets/tile-dot.svg");
  background-size: 48px 48px;
  background-repeat: repeat;
}
```

如果你把 `background-size` 改大：

```css
background-size: 96px 96px;
```

同一個容器裡可以重複的圖片數量就會變少。

### 搭配 `repeat`

```css
.pattern {
  background-size: 48px 48px;
  background-repeat: repeat;
}
```

### 搭配 `round`

```css
.pattern {
  background-size: 48px 48px;
  background-repeat: round;
}
```

要注意：`round` 本身可能進一步調整背景圖尺寸，因此最終顯示尺寸可能不是你原本設定的精確值。

---

## 15. 和 `background-origin`、`background-clip` 的關係

背景圖片在哪個範圍內重複，還會受到背景相關盒模型屬性的影響。

### `background-origin`

`background-origin` 決定背景圖片定位與重複的參考範圍。

```css
.box {
  background-origin: padding-box;
}
```

常見值：

```css
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;
```

### `background-clip`

`background-clip` 決定背景最後被裁切到哪個範圍。

```css
.box {
  background-clip: content-box;
}
```

簡化理解：

| 屬性 | 主要控制 |
|---|---|
| `background-origin` | 背景圖片從哪個盒子開始定位與平鋪 |
| `background-clip` | 背景最後畫到哪個盒子為止 |
| `background-repeat` | 背景圖片如何重複排列 |

入門階段可以先掌握 `background-repeat` 本身；遇到 padding、border、content 區域差異時，再回查 `background-origin` 和 `background-clip`。

---

## 16. 和 `background` 簡寫的關係

只想改重複方式時，建議使用：

```css
.card {
  background-repeat: no-repeat;
}
```

不要隨便改成：

```css
.card {
  background: no-repeat;
}
```

因為 `background` 是簡寫，會一次設定多個背景子屬性。  
如果你沒有把其他資訊寫完整，可能會重設原本的背景圖、背景色、位置、尺寸等設定。

### 可能出問題的例子

```css
.card {
  background-color: #eff6ff;
  background-image: url("./assets/badge.svg");
  background-position: right 24px bottom 24px;
  background-size: 120px auto;
  background-repeat: no-repeat;
}

/* 後面又寫 */
.card {
  background: repeat;
}
```

這種寫法可能讓背景圖片與其他背景設定被重設，造成結果和預期不同。

### 安全寫法

```css
.card {
  background-repeat: repeat;
}
```

如果確定要使用 `background` 簡寫，就把需要的資訊寫完整：

```css
.card {
  background:
    url("./assets/badge.svg")
    right 24px bottom 24px / 120px auto
    no-repeat
    #eff6ff;
}
```

注意：在 `background` 簡寫中，`background-size` 通常接在 `background-position` 後面，並用 `/` 分隔。

---

## 17. 實務案例 1：紋理背景

```html
<section class="pattern-panel">
  <h2>紋理背景</h2>
  <p>使用小圖案重複鋪滿整個區塊。</p>
</section>
```

```css
.pattern-panel {
  padding: 48px;
  background-color: #eff6ff;
  background-image: url("./assets/tile-dot.svg");
  background-repeat: repeat;
  background-size: 48px 48px;
}
```

適合：

- 背景底紋
- 輕量裝飾
- 不需要大型圖片的視覺層次

---

## 18. 實務案例 2：卡片角落裝飾

```html
<article class="feature-card">
  <h2>卡片角落裝飾</h2>
  <p>右下角圖案只顯示一次。</p>
</article>
```

```css
.feature-card {
  min-height: 220px;
  padding: 32px;
  background-color: #ffffff;
  background-image: url("./assets/badge.svg");
  background-repeat: no-repeat;
  background-position: right 24px bottom 24px;
  background-size: 96px auto;
}
```

適合：

- 卡片裝飾
- 空狀態插圖
- 右下角 icon
- 標籤圖案

---

## 19. 實務案例 3：水平底線效果

```css
.section-title {
  background-image: url("./assets/stripe-horizontal.svg");
  background-repeat: repeat-x;
  background-position: left bottom;
  background-size: 32px 6px;
  padding-bottom: 12px;
}
```

這種寫法可以讓小圖案沿水平方向重複，形成底線或裝飾帶。

---

## 20. 實務案例 4：左側垂直裝飾線

```css
.timeline {
  background-image: url("./assets/stripe-vertical.svg");
  background-repeat: repeat-y;
  background-position: left top;
  background-size: 6px 32px;
  padding-left: 32px;
}
```

這種寫法常用在：

- 時間軸
- 側邊欄
- 引言區塊
- 步驟清單

---

## 21. 常見錯誤與排查

### 錯誤 1：忘記預設會重複

```css
.box {
  background-image: url("./assets/badge.svg");
}
```

如果圖片很小，就會到處重複。

修正：

```css
.box {
  background-image: url("./assets/badge.svg");
  background-repeat: no-repeat;
}
```

---

### 錯誤 2：以為 `background-repeat` 可以控制背景顏色

```css
.box {
  background-color: #fde68a;
  background-repeat: no-repeat;
}
```

這沒有意義，因為背景顏色本來就不是圖片，也不會被 `background-repeat` 控制。

---

### 錯誤 3：設定 `no-repeat` 後圖片位置不對

```css
.box {
  background-image: url("./assets/badge.svg");
  background-repeat: no-repeat;
}
```

圖片預設位置通常是左上角。

修正：

```css
.box {
  background-image: url("./assets/badge.svg");
  background-repeat: no-repeat;
  background-position: center;
}
```

或：

```css
.box {
  background-position: right 24px bottom 24px;
}
```

---

### 錯誤 4：想用 `repeat-x`，結果寫成不存在的值

錯誤：

```css
.box {
  background-repeat: repeat x;
}
```

正確：

```css
.box {
  background-repeat: repeat-x;
}
```

或：

```css
.box {
  background-repeat: repeat no-repeat;
}
```

---

### 錯誤 5：多背景圖的值沒有一層一層對應

```css
.card {
  background-image:
    url("./assets/badge.svg"),
    url("./assets/tile-dot.svg");
  background-repeat: no-repeat;
}
```

這樣單一值會套用到背景層的重複規則。  
如果你想明確控制每一層，建議寫清楚：

```css
.card {
  background-repeat:
    no-repeat,
    repeat;
}
```

---

### 錯誤 6：用 `background` 簡寫覆蓋原本設定

```css
.card {
  background-repeat: no-repeat;
}

.card.active {
  background: url("./assets/tile-dot.svg");
}
```

後面的 `background` 會改寫整組背景設定。  
只想改背景圖時，應該寫：

```css
.card.active {
  background-image: url("./assets/tile-dot.svg");
}
```

只想改重複方式時，應該寫：

```css
.card.active {
  background-repeat: repeat;
}
```

---

## 22. 面試與讀碼常見問法

### 問題 1：`background-repeat` 的預設值是什麼？

預設值是 `repeat`，也可以理解成水平與垂直方向都重複，即 `repeat repeat`。

---

### 問題 2：`repeat-x` 和 `repeat-y` 差在哪？

`repeat-x` 只沿水平方向重複，等同：

```css
background-repeat: repeat no-repeat;
```

`repeat-y` 只沿垂直方向重複，等同：

```css
background-repeat: no-repeat repeat;
```

---

### 問題 3：`space` 和 `round` 差在哪？

`space` 會保持圖片原尺寸，將多餘空間分配成間距；  
`round` 會調整圖片尺寸，讓重複圖案剛好填滿容器。

簡單記：

```text
space：留空間，不變形。
round：改尺寸，不留空。
```

---

### 問題 4：`background-repeat` 會影響背景顏色嗎？

不會。  
`background-repeat` 只影響背景圖片。背景顏色本來就會鋪滿背景繪製區域。

---

### 問題 5：為什麼設定 `no-repeat` 後還要設定 `background-position`？

因為 `no-repeat` 只控制「不要重複」，不控制「圖片放哪裡」。  
如果沒有設定 `background-position`，背景圖片通常會從左上角開始顯示。

---

### 問題 6：多背景圖時，`background-repeat` 怎麼對應？

用逗號一層一層對應。

```css
background-image:
  url("./badge.svg"),
  url("./tile.svg");

background-repeat:
  no-repeat,
  repeat;
```

第一個 `no-repeat` 對應第一張 `badge.svg`，第二個 `repeat` 對應第二張 `tile.svg`。

---

## 23. 一句話抓核心

> `background-repeat` 負責控制背景圖片的重複方式；預設會水平與垂直都重複，若只想顯示一次、只沿單一方向重複，或避免邊緣裁切，就要搭配 `no-repeat`、`repeat-x`、`repeat-y`、`space`、`round` 或雙值語法。

---

## 自測問題

1. `background-repeat` 控制背景圖片還是背景顏色？
2. `background-repeat` 的預設值是什麼？
3. `repeat` 等同於哪個雙值寫法？
4. `no-repeat` 等同於哪個雙值寫法？
5. `repeat-x` 等同於哪個雙值寫法？
6. `repeat-y` 等同於哪個雙值寫法？
7. `space` 的特色是什麼？
8. `round` 的特色是什麼？
9. `space` 和 `round` 哪一個可能讓圖片變形？
10. 雙值語法中第一個值控制哪個方向？
11. 多背景圖時，`background-repeat` 如何對應 `background-image`？
12. 為什麼設定 `no-repeat` 後，圖片仍可能出現在左上角？
13. 使用 `background` 簡寫時，為什麼可能讓原本的 `background-repeat` 失效？

---

## 練習題

### 練習 1：比較四種基礎值

建立四個盒子，分別設定：

```css
background-repeat: repeat;
background-repeat: no-repeat;
background-repeat: repeat-x;
background-repeat: repeat-y;
```

觀察同一張小背景圖在不同值下的差異。

---

### 練習 2：比較 `space` 和 `round`

建立兩個盒子，使用同一張背景圖：

```css
background-repeat: space;
background-repeat: round;
```

調整盒子寬度，觀察：

- `space` 的間距如何變化
- `round` 的圖案尺寸如何變化

---

### 練習 3：使用雙值語法

建立三個盒子，分別設定：

```css
background-repeat: repeat no-repeat;
background-repeat: no-repeat repeat;
background-repeat: space repeat;
```

說明每一個值的水平與垂直方向行為。

---

### 練習 4：多背景圖

建立一張卡片，要求：

- 底層有重複平鋪的小圖案
- 右下角有單張裝飾圖
- 背景色作為底色
- 使用兩組 `background-repeat` 值逐層對應

提示：

```css
background-image:
  url("./assets/badge.svg"),
  url("./assets/tile-dot.svg");

background-repeat:
  no-repeat,
  repeat;
```

---

## 延伸閱讀

- 上一篇：背景圖片 `background-image`
- 下一篇：背景位置 `background-position`
- 建議搭配：
  - `background-size`
  - `background-position`
  - `background-image`
  - `background`
  - `background-origin`
  - `background-clip`

---

## 參考資料

- MDN Web Docs：`background-repeat`
- MDN Web Docs：CSS backgrounds and borders
- MDN Web Docs：Using multiple backgrounds
