# 背景位置 background-position

所屬章節：第 13 章 背景屬性  
建議搭配 demo：[`demo/background-position/index.html`](./demo/background-position/index.html)

---

## 本節導讀

`background-position` 用來控制**背景圖片在背景定位區域中的初始位置**。

它常常和以下屬性一起使用：

```css
background-image: url("./assets/marker.svg");
background-repeat: no-repeat;
background-position: center;
background-size: 80px 80px;
```

學這個屬性時，重點不是只背 `left`、`top`、`center`、`right`、`bottom`，而是要理解：

1. 它移動的是背景圖片，不是元素本身。
2. 它控制的是圖片在背景定位區域中的位置。
3. 預設位置是左上角，也就是 `0% 0%`。
4. 單值、雙值、三值、四值語法的判斷規則不同。
5. 百分比定位不是單純「距離左上角幾%」，而是「背景圖上的某個百分比點，對齊容器上的某個百分比點」。
6. 多背景圖時，`background-position` 可以用逗號逐層對應。

---

## 學習目標

學完本節後，你應該能夠回答：

1. `background-position` 控制的是元素、內容，還是背景圖片？
2. `background-position` 的預設值是什麼？
3. `background-position: right;` 省略的另一個方向是什麼？
4. `background-position: 20px;` 代表什麼？
5. `background-position: 20px 40px;` 中哪個是 X、哪個是 Y？
6. `left top` 和 `top left` 是否等價？
7. `left right`、`top bottom` 為什麼是無效寫法？
8. `background-position: 50% 50%;` 真正的對齊概念是什麼？
9. `right 24px bottom 16px` 這種四值語法怎麼讀？
10. 多背景圖時，`background-position` 的值如何一層一層對應？
11. 為什麼觀察 `background-position` 時通常要先設定 `background-repeat: no-repeat;`？
12. 為什麼使用 `background` 簡寫可能不小心重設 `background-position`？

---

## 關鍵字

- 中文：背景位置、背景圖位置、背景圖片定位、背景圖靠右、背景圖置中
- 英文：`background-position`
- 常見值：
  - `left`
  - `right`
  - `top`
  - `bottom`
  - `center`
  - `<length>`
  - `<percentage>`
- 常見寫法：
  - `background-position: center;`
  - `background-position: right bottom;`
  - `background-position: 20px 40px;`
  - `background-position: 50% 50%;`
  - `background-position: right 24px bottom 16px;`
- 相關屬性：
  - `background-image`
  - `background-repeat`
  - `background-size`
  - `background-origin`
  - `background-clip`
  - `background-position-x`
  - `background-position-y`
  - `background`
- 易混淆概念：
  - `background-position` 不是移動元素本身
  - `background-position` 不是控制背景圖片尺寸
  - `background-position` 不是控制是否平鋪
  - 單值時，另一個方向通常會補 `center`
  - 兩個純數值時，第一個是 X，第二個是 Y
  - 兩個方位關鍵字時，順序通常可交換
  - 方向關鍵字加偏移量時，順序與對應關係很重要
  - 百分比是「圖像點對齊容器點」，不是簡單的 margin 百分比

---

## 建議回查情境

當你遇到以下情況，可以回來查這一節：

- 想讓背景圖置中
- 想讓背景圖靠右下角
- 想讓背景圖距離右下角固定 `24px`
- 想讓背景圖距離左上角 `20px 40px`
- 不懂 `right`、`top` 省略另一個值時代表什麼
- 不懂 `center 20px` 和 `20px center` 差在哪
- 不懂 `right 20px bottom 10px` 怎麼讀
- 背景圖明明有設定位置，但畫面看起來沒變
- 背景圖預設平鋪，導致位置變化不明顯
- 多背景圖時，不知道 `background-position` 怎麼逐層對應
- 使用 `background` 簡寫後，原本的背景位置被重設

---

## Demo 範例

本節 demo 放在：

```text
demo/background-position/index.html
```

本節 demo 使用本地 SVG 圖檔：

```text
demo/background-position/assets/marker.svg
demo/background-position/assets/dot-grid.svg
demo/background-position/assets/corner-badge.svg
```

這樣 demo 不依賴外部圖片網址，離線開啟也能正常觀看。

未來新增其他背景屬性 demo 時，可以繼續放在：

```text
demo/background-color/index.html
demo/background-image/index.html
demo/background-repeat/index.html
demo/background-size/index.html
```

每一節都保留自己的 `index.html`、`style.css`、`README.md`，但透過外層資料夾名稱區分主題。

---

## 30 秒複習入口

- `background-position` 控制背景圖片在背景定位區域中的位置。
- 它不會移動元素本身，也不會移動文字或子元素。
- 預設值是 `0% 0%`，也可以理解成 `left top`。
- 常見搭配：`background-repeat: no-repeat;`，否則背景圖片預設平鋪，位置差異可能不明顯。
- 單一關鍵字：
  - `right` 等同 `right center`
  - `top` 等同 `center top`
  - `center` 等同 `center center`
- 單一數值：
  - `20px` 等同 `20px center`
- 兩個純數值：
  - `20px 40px` 表示 X 軸 `20px`、Y 軸 `40px`
- 兩個方位關鍵字：
  - `left top` 和 `top left` 等價
- 百分比定位：
  - `50% 50%` 表示圖片的中心點對齊容器的中心點
  - `100% 100%` 表示圖片右下角對齊容器右下角
- 三值 / 四值語法：
  - `right 24px bottom 16px` 表示距離右邊 `24px`，距離底部 `16px`
- 多背景圖時，`background-position` 用逗號逐層對應。
- 使用 `background` 簡寫時，未寫出的背景子屬性可能會被重設。

---

## 速查區

### 1. 基本語法

```css
.selector {
  background-image: url("./assets/marker.svg");
  background-repeat: no-repeat;
  background-position: center;
}
```

### 2. 常見值對照

| 寫法 | 等價 / 意義 |
|---|---|
| `left top` | 靠左上 |
| `top left` | 靠左上，與 `left top` 等價 |
| `center` | 水平與垂直都置中 |
| `right` | 水平靠右，垂直置中 |
| `top` | 垂直靠上，水平置中 |
| `right bottom` | 靠右下 |
| `20px 40px` | X 軸距左 `20px`，Y 軸距上 `40px` |
| `20px` | X 軸 `20px`，Y 軸置中 |
| `50% 50%` | 圖片中心點對齊容器中心點 |
| `100% 100%` | 圖片右下角對齊容器右下角 |
| `right 24px bottom 16px` | 距右 `24px`，距底 `16px` |
| `left 20px top 10px` | 距左 `20px`，距上 `10px` |

---

### 3. 語法形式速查

| 語法 | 範例 | 說明 |
|---|---|---|
| 單值關鍵字 | `center` | 另一軸補 `center` |
| 單值數值 | `20px` | X 軸 `20px`，Y 軸補 `center` |
| 雙值關鍵字 | `left top` | 指定水平與垂直方位，順序通常可交換 |
| 雙值數值 | `20px 40px` | 第一個是 X，第二個是 Y |
| 關鍵字 + 數值 | `left 20px` | X 軸從左偏移 `20px`，Y 軸通常補中間 |
| 三值語法 | `right 20px top` | 偏移量套用到前一個方位關鍵字 |
| 四值語法 | `right 24px bottom 16px` | 第二、第四個值是前一個方位的偏移量 |
| 多背景圖 | `right bottom, left top` | 用逗號逐層對應背景圖 |

---

### 4. 形式定義速查

| 項目 | 說明 |
|---|---|
| 屬性名稱 | `background-position` |
| 作用 | 設定每一層背景圖片的初始位置 |
| 初始值 | `0% 0%`，也就是 `left top` |
| 是否繼承 | 否 |
| 影響對象 | 背景圖片，不是元素本身或內容 |
| 參考區域 | 背景定位區域，會受到 `background-origin` 影響 |
| 百分比參考 | 背景定位區域尺寸減去背景圖片尺寸後，再乘以百分比 |
| 多背景圖 | 可用逗號分隔，逐層對應 |
| 常搭配屬性 | `background-image`、`background-repeat`、`background-size` |
| 使用簡寫風險 | `background` 可能重設 `background-position` |

---

## 正文

## 1. `background-position` 是什麼？

`background-position` 是 CSS 背景屬性的一員，用來控制背景圖片的位置。

```css
.box {
  width: 320px;
  height: 220px;
  background-image: url("./assets/marker.svg");
  background-repeat: no-repeat;
  background-position: right bottom;
}
```

這段程式的意思是：

```text
把背景圖片放在背景定位區域的右下角。
```

注意：它移動的是背景圖片，不是元素本身。

```css
.box {
  background-position: right bottom;
}
```

不會讓 `.box` 這個元素跑到右下角，也不會讓 `.box` 裡面的文字跑到右下角。

---

## 2. 為什麼常常搭配 `background-repeat: no-repeat`

背景圖片預設會重複平鋪：

```css
background-repeat: repeat;
```

如果背景圖重複鋪滿整個盒子，你很難觀察「單張背景圖被放在哪裡」。

所以學習與除錯 `background-position` 時，通常先寫：

```css
.box {
  background-repeat: no-repeat;
}
```

這樣只剩一張背景圖，位置差異會比較明顯。

---

## 3. 預設值：`0% 0%`

`background-position` 的初始值是：

```css
background-position: 0% 0%;
```

也可以理解成：

```css
background-position: left top;
```

也就是背景圖片預設從左上角開始定位。

例如只寫：

```css
.box {
  background-image: url("./assets/marker.svg");
  background-repeat: no-repeat;
}
```

通常會看到背景圖出現在左上角。

---

## 4. 一個值的寫法

### 4.1 單一關鍵字

```css
background-position: right;
```

等同於：

```css
background-position: right center;
```

也就是：

```text
X 軸：靠右
Y 軸：置中
```

```css
background-position: top;
```

等同於：

```css
background-position: center top;
```

也就是：

```text
X 軸：置中
Y 軸：靠上
```

```css
background-position: center;
```

等同於：

```css
background-position: center center;
```

### 4.2 單一數值

```css
background-position: 20px;
```

等同於：

```css
background-position: 20px center;
```

也就是：

```text
X 軸：距離左側 20px
Y 軸：置中
```

如果你想寫 Y 軸距離上方 `20px`，要寫：

```css
background-position: center 20px;
```

---

## 5. 兩個值的寫法

### 5.1 兩個方位關鍵字

```css
background-position: left top;
background-position: top left;
```

上面兩種通常等價，都表示左上角。

因為 `left` 明確屬於水平方向，`top` 明確屬於垂直方向，瀏覽器可以判斷它們各自代表哪一軸。

但不能寫同一軸的兩個相反關鍵字：

```css
background-position: left right;  /* 無效 */
background-position: top bottom;  /* 無效 */
```

因為 `left` 和 `right` 都是水平軸，`top` 和 `bottom` 都是垂直軸，這樣無法同時成立。

---

### 5.2 兩個純數值

```css
background-position: 20px 40px;
```

兩個值都是長度或百分比時，規則很直接：

```text
第一個值：X 軸
第二個值：Y 軸
```

所以：

```css
background-position: 20px 40px;
```

代表：

```text
X 軸距離左側 20px
Y 軸距離上方 40px
```

---

### 5.3 數值與 `center`

```css
background-position: 20px center;
```

代表：

```text
X 軸：20px
Y 軸：center
```

```css
background-position: center 20px;
```

代表：

```text
X 軸：center
Y 軸：20px
```

這兩個寫法不一樣。

---

## 6. 百分比定位：不是單純距離左上角幾 %

百分比是 `background-position` 最容易誤會的地方。

```css
background-position: 50% 50%;
```

很多人會理解成：

```text
背景圖左上角距離容器左上角 50% 50%
```

這是不精確的。

更正確的理解是：

```text
背景圖自己的 50% 50% 位置，
對齊容器的 50% 50% 位置。
```

所以 `50% 50%` 會讓背景圖片置中。

### 常見百分比對齊

```css
background-position: 0% 0%;
```

意思是：

```text
背景圖左上角對齊容器左上角。
```

```css
background-position: 100% 100%;
```

意思是：

```text
背景圖右下角對齊容器右下角。
```

```css
background-position: 25% 75%;
```

意思是：

```text
背景圖上 25% / 75% 的點，
對齊容器上 25% / 75% 的點。
```

### 公式理解

在某一軸上，百分比偏移量可簡化理解為：

```text
(背景定位區域尺寸 - 背景圖片尺寸) × 百分比
```

例如 X 軸：

```text
(container width - image width) × position-x%
```

如果容器寬度是 `320px`，背景圖片寬度是 `80px`，位置是 `50%`：

```text
(320px - 80px) × 50% = 120px
```

所以圖片左邊會距離容器左側 `120px`，剛好置中。

### 特別注意

如果背景圖片尺寸和容器尺寸在某一軸完全一樣：

```text
container size - image size = 0
```

那麼百分比在該軸上就不會產生可見位移。

這也是為什麼 `background-size: cover;` 或圖片剛好填滿容器時，調整某些百分比位置可能看起來不明顯。

---

## 7. 三值語法

三值語法可以理解成：

> 兩個值是方向關鍵字，另一個數值是前一個方向關鍵字的偏移量。

例如：

```css
background-position: right 24px top;
```

讀法：

```text
right 24px：距離右邊 24px
top：距離上方 0
```

也就是：

```css
background-position: right 24px top 0;
```

另一個例子：

```css
background-position: left top 20px;
```

讀法：

```text
left：距離左邊 0
top 20px：距離上方 20px
```

三值語法的判斷重點是：

```text
數值偏移量會套用到它前面的方位關鍵字。
```

不過實務上，為了可讀性，我建議你多數情況直接使用四值語法。

---

## 8. 四值語法：從指定邊緣偏移

四值語法非常適合「距離右下角固定距離」這種需求。

```css
background-position: right 24px bottom 16px;
```

讀法：

```text
距離右邊 24px
距離底部 16px
```

完整範例：

```css
.card {
  background-image: url("./assets/corner-badge.svg");
  background-repeat: no-repeat;
  background-size: 96px 96px;
  background-position: right 24px bottom 16px;
}
```

這比下面這種寫法更直覺：

```css
background-position: calc(100% - 24px) calc(100% - 16px);
```

常見四值語法：

```css
background-position: right 24px bottom 16px;
background-position: left 20px top 12px;
background-position: right 32px top 24px;
background-position: left 16px bottom 20px;
```

四值語法中：

```text
第 1、3 個值：方位關鍵字
第 2、4 個值：前一個方位關鍵字的偏移量
```

也就是：

```css
right 24px bottom 16px
```

代表：

```text
right + 24px
bottom + 16px
```

---

## 9. 多背景圖中的 `background-position`

同一個元素可以有多層背景圖：

```css
.card {
  background-image:
    url("./assets/corner-badge.svg"),
    url("./assets/dot-grid.svg");
}
```

如果要分別設定每一層的位置，可以用逗號分隔：

```css
.card {
  background-image:
    url("./assets/corner-badge.svg"),
    url("./assets/dot-grid.svg");

  background-position:
    right 24px bottom 24px,
    left top;
}
```

對應方式如下：

| 層級 | `background-image` | `background-position` |
|---|---|---|
| 第 1 層，最上層 | `url("./assets/corner-badge.svg")` | `right 24px bottom 24px` |
| 第 2 層，下方 | `url("./assets/dot-grid.svg")` | `left top` |

也就是：

```text
第一個 background-position 對應第一個 background-image。
第二個 background-position 對應第二個 background-image。
```

完整範例：

```css
.card {
  background-color: #eff6ff;
  background-image:
    url("./assets/corner-badge.svg"),
    url("./assets/dot-grid.svg");
  background-repeat:
    no-repeat,
    repeat;
  background-position:
    right 24px bottom 24px,
    left top;
  background-size:
    96px 96px,
    56px 56px;
}
```

---

## 10. 和 `background-size` 的關係

`background-position` 控制位置。  
`background-size` 控制尺寸。

```css
.box {
  background-image: url("./assets/marker.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 80px 80px;
}
```

如果背景圖片尺寸改變，位置的可見結果也可能改變。

尤其是百分比定位，計算時會用到：

```text
背景定位區域尺寸 - 背景圖片尺寸
```

所以 `background-size` 會影響百分比定位的實際偏移量。

### 常見組合

```css
.hero {
  background-image: url("./images/hero.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

這是 Hero 區塊很常見的寫法：

```text
圖片置中，並盡量鋪滿容器。
```

若圖片主體在右側，可以改成：

```css
background-position: right center;
```

若圖片主體在上方，可以改成：

```css
background-position: center top;
```

---

## 11. 和 `background-repeat` 的關係

`background-position` 控制背景圖片的起始位置。  
`background-repeat` 控制背景圖片是否重複。

如果圖片重複平鋪，位置變化可能不明顯：

```css
.box {
  background-image: url("./assets/marker.svg");
  background-repeat: repeat;
  background-position: right bottom;
}
```

因為畫面上有很多張背景圖，你不容易判斷「那一張」的位置。

學習或排查時，建議先改成：

```css
background-repeat: no-repeat;
```

看懂單張圖的位置後，再決定是否需要 `repeat`。

---

## 12. 和 `background-origin` 的關係

`background-position` 是相對於背景定位區域定位。  
這個背景定位區域會受到 `background-origin` 影響。

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

簡化理解：

| 屬性 | 控制什麼 |
|---|---|
| `background-position` | 背景圖片放在哪裡 |
| `background-origin` | 以哪個盒子作為定位參考 |
| `background-clip` | 背景最後被裁切到哪個盒子 |

入門階段先把 `background-position` 學好。  
遇到有 border、padding、content 區域差異時，再回查 `background-origin`。

---

## 13. `background-position-x` 和 `background-position-y`

如果你只想單獨控制 X 軸或 Y 軸，可以使用：

```css
background-position-x: right;
background-position-y: bottom;
```

或：

```css
background-position-x: 24px;
background-position-y: center;
```

不過實務上更常直接使用：

```css
background-position: right bottom;
```

要注意：

```css
background-position
```

是簡寫，後面如果再次宣告，可能會覆蓋你前面設定的 `background-position-x` 和 `background-position-y`。

例如：

```css
.box {
  background-position-x: right;
  background-position-y: bottom;
  background-position: center;
}
```

最後會以：

```css
background-position: center;
```

為主。

---

## 14. 和 `background` 簡寫的關係

只想改背景位置時，建議使用：

```css
.card {
  background-position: right bottom;
}
```

不要隨便改成：

```css
.card {
  background: right bottom;
}
```

因為 `background` 是簡寫，會一次設定多個背景子屬性。  
未寫出的背景子屬性可能會被重設為預設值。

### 可能出問題的例子

```css
.card {
  background-color: #eff6ff;
  background-image: url("./assets/corner-badge.svg");
  background-repeat: no-repeat;
  background-size: 96px 96px;
  background-position: right 24px bottom 24px;
}

/* 後面又寫 */
.card {
  background: center;
}
```

後面的 `background` 可能讓背景圖片、背景色、重複方式、尺寸等被重設。

### 安全寫法

只改位置：

```css
.card {
  background-position: center;
}
```

若確定要使用 `background` 簡寫，要把需要的資訊寫完整：

```css
.card {
  background:
    url("./assets/corner-badge.svg")
    right 24px bottom 24px / 96px 96px
    no-repeat
    #eff6ff;
}
```

注意：在 `background` 簡寫中，`background-size` 通常要接在 `background-position` 後面，並用 `/` 分隔。

---

## 15. 實務案例 1：右下角裝飾圖

```html
<article class="feature-card">
  <h2>卡片標題</h2>
  <p>右下角有裝飾圖，但不影響內容理解。</p>
</article>
```

```css
.feature-card {
  min-height: 220px;
  padding: 32px;
  background-color: #ffffff;
  background-image: url("./assets/corner-badge.svg");
  background-repeat: no-repeat;
  background-size: 96px 96px;
  background-position: right 24px bottom 24px;
}
```

這種寫法比 `right bottom` 更精準，因為你可以保留固定邊距。

---

## 16. 實務案例 2：Hero 圖片主體位置

```css
.hero {
  min-height: 420px;
  color: white;
  background-color: #0f172a;
  background-image:
    linear-gradient(rgb(15 23 42 / 62%), rgb(15 23 42 / 62%)),
    url("./images/hero.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

如果圖片主體偏右，可以調整成：

```css
background-position: right center;
```

如果圖片主體偏上，可以調整成：

```css
background-position: center top;
```

如果想用百分比微調：

```css
background-position: 70% 40%;
```

這在 RWD 中很常見，因為圖片裁切範圍會隨容器比例變化。

---

## 17. 實務案例 3：輸入框 icon

```html
<label class="search-field">
  <span>搜尋</span>
  <input type="search" placeholder="請輸入關鍵字">
</label>
```

```css
.search-field input {
  padding-left: 44px;
  background-image: url("./assets/search-icon.svg");
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: left 14px center;
}
```

這裡使用：

```css
background-position: left 14px center;
```

讀法：

```text
水平：距離左邊 14px
垂直：置中
```

輸入框 icon 是 `background-position` 很常見的實務場景。

---

## 18. 常見錯誤與排查

### 錯誤 1：以為它會移動元素

```css
.box {
  background-position: right bottom;
}
```

這只會移動背景圖片，不會移動 `.box` 本身。  
要移動元素本身，應該使用排版或定位屬性，例如 `margin`、Flex、Grid、`position`。

---

### 錯誤 2：忘記 `background-repeat: no-repeat`

```css
.box {
  background-image: url("./assets/marker.svg");
  background-position: right bottom;
}
```

因為背景圖片預設會重複，位置變化可能不明顯。

修正：

```css
.box {
  background-image: url("./assets/marker.svg");
  background-repeat: no-repeat;
  background-position: right bottom;
}
```

---

### 錯誤 3：誤解百分比定位

```css
background-position: 50% 50%;
```

不要理解成：

```text
圖片左上角距離容器 50% 50%
```

應該理解成：

```text
圖片中心點對齊容器中心點。
```

---

### 錯誤 4：把 `right 20px` 寫成 `20px right`

```css
background-position: 20px right; /* 錯誤或不符合預期 */
```

更清楚的寫法：

```css
background-position: right 20px center;
```

或：

```css
background-position: right 20px top 0;
```

如果只是想距離右邊 `20px` 並垂直置中：

```css
background-position: right 20px center;
```

---

### 錯誤 5：用 `background` 簡寫覆蓋原本設定

```css
.card {
  background-image: url("./assets/corner-badge.svg");
  background-repeat: no-repeat;
  background-size: 96px 96px;
  background-position: right bottom;
}

.card.active {
  background: center;
}
```

後面的 `background` 可能讓原本的背景圖片、尺寸、重複方式被重設。

只改位置應該寫：

```css
.card.active {
  background-position: center;
}
```

---

### 錯誤 6：多背景圖位置沒有逐層對應

```css
.card {
  background-image:
    url("./assets/corner-badge.svg"),
    url("./assets/dot-grid.svg");
  background-position: right bottom;
}
```

如果想明確控制每一層，建議寫成：

```css
.card {
  background-position:
    right bottom,
    left top;
}
```

---

## 19. 面試與讀碼常見問法

### 問題 1：`background-position` 的預設值是什麼？

預設值是：

```css
background-position: 0% 0%;
```

也可以理解成：

```css
background-position: left top;
```

---

### 問題 2：`background-position: right;` 是什麼意思？

等同於：

```css
background-position: right center;
```

也就是水平靠右、垂直置中。

---

### 問題 3：`background-position: 20px;` 是什麼意思？

等同於：

```css
background-position: 20px center;
```

也就是 X 軸距左 `20px`，Y 軸置中。

---

### 問題 4：`left top` 和 `top left` 一樣嗎？

通常一樣。  
因為 `left` 屬於水平軸，`top` 屬於垂直軸，瀏覽器可以判斷它們各自對應的軸。

---

### 問題 5：`50% 50%` 為什麼會置中？

因為它表示：

```text
背景圖的 50% 50% 點，對齊容器的 50% 50% 點。
```

也就是圖片中心對齊容器中心。

---

### 問題 6：`right 24px bottom 16px` 怎麼讀？

讀成：

```text
距離右邊 24px
距離底部 16px
```

這是四值語法，常用來做右下角裝飾圖。

---

### 問題 7：多背景圖時，`background-position` 怎麼對應？

用逗號逐層對應。

```css
background-image:
  url("./badge.svg"),
  url("./grid.svg");

background-position:
  right bottom,
  left top;
```

第一個位置對應第一張背景圖，第二個位置對應第二張背景圖。

---

## 20. 一句話抓核心

> `background-position` 負責設定背景圖片的位置；預設是左上角，百分比是「圖片上的百分比點對齊容器上的百分比點」，而三值、四值語法可以表達「距離某個邊緣多少距離」的精準定位。

---

## 自測問題

1. `background-position` 控制的是元素本身、內容，還是背景圖片？
2. `background-position` 的預設值是什麼？
3. `background-position: right;` 等同於什麼？
4. `background-position: top;` 等同於什麼？
5. `background-position: 20px;` 等同於什麼？
6. `background-position: 20px 40px;` 中，哪個是 X 軸？哪個是 Y 軸？
7. `left top` 和 `top left` 是否等價？
8. `left right` 為什麼無效？
9. `background-position: 50% 50%;` 為什麼會置中？
10. `background-position: 100% 100%;` 代表什麼？
11. `right 24px bottom 16px` 怎麼讀？
12. 多背景圖時，`background-position` 如何逐層對應？
13. 為什麼觀察背景位置時，常常要先設定 `background-repeat: no-repeat;`？
14. 為什麼 `background-size` 會影響百分比定位的可見效果？
15. 使用 `background` 簡寫時，為什麼可能讓背景位置失效？

---

## 練習題

### 練習 1：九宮格定位

建立九個盒子，使用同一張背景圖，分別設定：

```css
background-position: left top;
background-position: center top;
background-position: right top;
background-position: left center;
background-position: center;
background-position: right center;
background-position: left bottom;
background-position: center bottom;
background-position: right bottom;
```

觀察圖片在九宮格中的位置。

---

### 練習 2：數值定位

建立三個盒子，分別設定：

```css
background-position: 20px 20px;
background-position: 50px center;
background-position: center 40px;
```

說明每一個值的 X 軸與 Y 軸含義。

---

### 練習 3：百分比定位

建立四個盒子，分別設定：

```css
background-position: 0% 0%;
background-position: 50% 50%;
background-position: 100% 100%;
background-position: 25% 75%;
```

觀察圖片的對齊點如何改變。

---

### 練習 4：四值語法

建立一張卡片，右下角有裝飾圖，要求：

```css
background-position: right 24px bottom 24px;
```

接著改成：

```css
background-position: left 24px top 24px;
background-position: right 32px top 20px;
```

觀察距離指定邊緣的效果。

---

### 練習 5：多背景圖

建立一張卡片，要求：

- 第一層：右下角裝飾圖，不重複
- 第二層：點狀格紋，重複平鋪
- 使用兩個 `background-position` 值逐層對應

提示：

```css
background-image:
  url("./assets/corner-badge.svg"),
  url("./assets/dot-grid.svg");

background-position:
  right 24px bottom 24px,
  left top;
```

---

## 延伸閱讀

- 上一篇：背景平鋪 `background-repeat`
- 下一篇：背景圖像固定 `background-attachment`
- 建議搭配：
  - `background-size`
  - `background-repeat`
  - `background-image`
  - `background-origin`
  - `background`
  - `background-position-x`
  - `background-position-y`

---

## 參考資料

- MDN Web Docs：`background-position`
- MDN Web Docs：`background`
- MDN Web Docs：CSS backgrounds and borders
