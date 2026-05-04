# 背景圖片大小 background-size

所屬章節：第 13 章 背景屬性  
建議搭配 demo：[`demo/background-size/index.html`](./demo/background-size/index.html)

---

## 本節導讀

`background-size` 用來控制：

> **背景圖片要以多大的尺寸繪製。**

它不控制圖片位置，也不控制是否重複。  
它回答的是：

```text
這張背景圖應該多大？
```

最常見的值有：

```css
background-size: auto;
background-size: 120px;
background-size: 120px 80px;
background-size: 50% auto;
background-size: cover;
background-size: contain;
```

很多人學 `background-size` 時，只記得：

- `cover`
- `contain`

但真正要學會的是：

1. 單值與雙值語法。
2. `auto` 的意思。
3. 長度值與百分比怎麼影響背景圖尺寸。
4. `cover` 與 `contain` 的差異。
5. `background-size` 和 `background-repeat`、`background-position`、`background-origin` 的關係。
6. 多背景圖如何逐層設定不同大小。
7. 為什麼 `cover` 常搭配 `background-position: center`。
8. 什麼時候不該用 `background-size` 來做內容圖片排版。

---

## 學習目標

學完本節後，你應該能夠回答：

1. `background-size` 控制的是什麼？
2. `background-size` 的預設值是什麼？
3. 一個值與兩個值的寫法差在哪？
4. `background-size: 120px;` 代表什麼？
5. `background-size: 120px 80px;` 代表什麼？
6. `background-size: auto 120px;` 代表什麼？
7. `background-size: 50% auto;` 中的百分比是以什麼為參考？
8. `cover` 和 `contain` 差在哪？
9. 為什麼 `cover` 可能裁掉圖片的一部分？
10. 為什麼 `contain` 可能留白？
11. `background-size` 和 `background-repeat` 有什麼關係？
12. `background-size` 和 `background-position` 有什麼關係？
13. 多背景圖時，`background-size` 如何逐層對應？
14. `background-size` 如何寫進 `background` 簡寫？
15. 為什麼 `background-size` 通常不適合取代 `<img>` 的內容圖片排版？

---

## 關鍵字

- 中文：背景圖片大小、背景尺寸、背景縮放、背景鋪滿、背景完整顯示、等比例縮放
- 英文：`background-size`
- 常見值：
  - `auto`
  - `<length>`
  - `<percentage>`
  - `cover`
  - `contain`
- 常見寫法：
  - `background-size: auto;`
  - `background-size: 120px;`
  - `background-size: 120px 80px;`
  - `background-size: 50% auto;`
  - `background-size: cover;`
  - `background-size: contain;`
- 相關屬性：
  - `background-image`
  - `background-repeat`
  - `background-position`
  - `background-origin`
  - `background`
- 易混淆概念：
  - `background-size` 不控制背景位置
  - `background-size` 不控制元素大小
  - `background-size` 不控制圖片是否重複
  - 單值不是同時指定寬高
  - `cover` 不代表完整顯示圖片
  - `contain` 不代表一定鋪滿容器
  - 百分比是相對背景定位區域計算
  - `background-size` 在 `background` 簡寫中要寫在 `background-position` 後並用 `/` 分隔

---

## 建議回查情境

當你遇到以下情況，可以回來查這一節：

- Hero 背景要鋪滿容器
- 背景圖要完整顯示但不能裁切
- 卡片角落裝飾圖需要固定大小
- 不懂 `cover` 和 `contain` 差異
- 不懂 `background-size: 120px` 省略的是什麼
- 不懂 `50% auto` 的百分比基準
- 背景圖被重複時，想控制每張 tile 的尺寸
- 多背景圖時，不知道 `background-size` 如何逐層對應
- 在 `background` shorthand 中看不懂 `center / cover`
- 用 `cover` 之後主體被裁掉，不知道怎麼調整

---

## Demo 範例

本節 demo 放在：

```text
demo/background-size/index.html
```

本節 demo 使用本地 SVG 圖檔：

```text
demo/background-size/assets/hero-scene.svg
demo/background-size/assets/pattern-grid.svg
demo/background-size/assets/badge.svg
demo/background-size/assets/landmark.svg
```

這樣 demo 不依賴外部圖片網址，離線開啟也能正常觀看。

---

## 30 秒複習入口

- `background-size` 控制背景圖片繪製尺寸。
- 預設值是 `auto auto`，通常簡寫理解成 `auto`。
- 一個值時：
  - 指定寬度
  - 高度通常為 `auto`
- 兩個值時：
  - 第一個是寬度
  - 第二個是高度
- `cover`：盡量鋪滿容器，可能裁切圖片。
- `contain`：盡量完整顯示圖片，可能留下空白。
- 百分比是相對背景定位區域來計算。
- `background-size` 和 `background-repeat` 一起使用時，會影響平鋪單位大小。
- `background-size` 和 `background-position` 一起使用時，會影響背景圖定位後的可見結果。
- 多背景圖時，`background-size` 可以用逗號逐層對應。
- 在 `background` 簡寫中，`background-size` 要接在 `background-position` 後面，並用 `/` 分隔。

---

## 速查區

### 1. 基本語法

```css
.box {
  background-image: url("./assets/badge.svg");
  background-repeat: no-repeat;
  background-size: 120px 120px;
}
```

### 2. 常見值對照

| 寫法 | 意義 |
|---|---|
| `auto` | 使用背景圖片原始尺寸 |
| `120px` | 寬度 120px，高度 auto |
| `120px 80px` | 寬度 120px，高度 80px |
| `50% auto` | 寬度為背景定位區域的 50%，高度依比例自動計算 |
| `auto 120px` | 高度 120px，寬度依比例自動計算 |
| `cover` | 盡量鋪滿背景定位區域，可能裁切 |
| `contain` | 盡量完整顯示背景圖片，可能留白 |

---

### 3. 形式定義速查

| 項目 | 說明 |
|---|---|
| 屬性名稱 | `background-size` |
| 作用 | 設定背景圖片的繪製尺寸 |
| 初始值 | `auto auto` |
| 是否繼承 | 否 |
| 多背景圖 | 可用逗號分隔，逐層對應 |
| 常見值 | 長度、百分比、`auto`、`cover`、`contain` |
| 常見搭配 | `background-position`、`background-repeat`、`background-image` |
| shorthand 規則 | 接在 `background-position` 後並用 `/` 分隔 |

---

## 正文

## 1. `background-size` 是什麼？

`background-size` 是 CSS 背景屬性的一員，用來設定背景圖片的大小。

```css
.card {
  background-image: url("./assets/badge.svg");
  background-repeat: no-repeat;
  background-size: 96px 96px;
}
```

這段意思是：

```text
把背景圖片畫成 96px × 96px。
```

注意：

- 它不改變元素大小
- 它不改變圖片檔案本身
- 它只控制背景繪製出來時的尺寸

---

## 2. 預設值是 `auto auto`

`background-size` 的初始值是：

```css
background-size: auto auto;
```

很多教學會簡化記成：

```css
background-size: auto;
```

你可以理解成：

```text
如果沒有特別設定，背景圖片就用它原本的大小來畫。
```

---

## 3. 一個值的寫法

### 3.1 長度值

```css
background-size: 120px;
```

代表：

```text
寬度：120px
高度：auto
```

如果背景圖有固有比例，高度會依比例自動推算。

---

### 3.2 百分比

```css
background-size: 50%;
```

代表：

```text
寬度：背景定位區域的 50%
高度：auto
```

這裡的百分比不是相對圖片原始尺寸，而是相對於**背景定位區域**。

---

## 4. 兩個值的寫法

### 4.1 長度 + 長度

```css
background-size: 120px 80px;
```

代表：

```text
寬度：120px
高度：80px
```

如果你兩個值都明確寫死，背景圖可能被拉伸變形。

---

### 4.2 長度 / 百分比 + `auto`

```css
background-size: auto 120px;
```

代表：

```text
寬度：auto
高度：120px
```

如果圖片有固有比例，寬度會依比例計算。

```css
background-size: 50% auto;
```

代表：

```text
寬度：背景定位區域的 50%
高度：依比例自動計算
```

---

## 5. `cover`

```css
background-size: cover;
```

意思是：

```text
讓背景圖片在保持比例的前提下，盡可能覆蓋整個背景定位區域。
```

重點：

- 保持比例
- 鋪滿容器
- 可能裁切

### 為什麼會裁切？

因為如果容器比例和圖片比例不同，要想鋪滿整個容器，就可能需要超出另一邊。

例如：

- 圖片比較寬
- 容器比較高

要鋪滿容器高度時，圖片寬度可能超出容器，因此左右被裁掉。

### 常見搭配

```css
.hero {
  background-image: url("./assets/hero-scene.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

這是 Hero 區塊最常見的寫法。

為什麼常搭配 `center`？

因為 `cover` 可能裁切圖片。  
如果把位置設為 `center`，通常能讓主體比較平均地保留在畫面中。

---

## 6. `contain`

```css
background-size: contain;
```

意思是：

```text
讓背景圖片在保持比例的前提下，盡可能完整地顯示在背景定位區域內。
```

重點：

- 保持比例
- 完整顯示圖片
- 可能留白

### 為什麼會留白？

因為 `contain` 的目標是「整張圖都要進來」，而不是「把容器鋪滿」。

如果容器比例和圖片比例不同，就會在某一個方向上留下空間。

### 適合情境

- Logo 背景
- 圖示類背景
- 需要整張圖都看見
- 不希望裁掉圖片

---

## 7. `cover` vs `contain`

| 值 | 是否保持比例 | 是否鋪滿容器 | 是否完整顯示圖片 | 常見副作用 |
|---|---|---|---|---|
| `cover` | 是 | 是 | 不一定 | 可能裁切 |
| `contain` | 是 | 不一定 | 是 | 可能留白 |

一句話記：

```text
cover：寧可裁切，也要鋪滿。
contain：寧可留白，也要完整。
```

---

## 8. 和 `background-repeat` 的關係

`background-size` 會影響背景平鋪單位的大小。

```css
.box {
  background-image: url("./assets/pattern-grid.svg");
  background-repeat: repeat;
  background-size: 72px 72px;
}
```

這代表每一張被平鋪的 pattern 都會是 `72px × 72px`。

如果你改成：

```css
background-size: 120px 120px;
```

平鋪單位就會變大。

這在做：

- 格紋背景
- 點點背景
- 圖案牆
- 裝飾底紋

時非常常用。

---

## 9. 和 `background-position` 的關係

`background-size` 改變時，背景圖大小改變，定位的可見結果也會改變。

例如：

```css
.card {
  background-image: url("./assets/badge.svg");
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 120px 120px;
}
```

如果你把大小改小：

```css
background-size: 72px 72px;
```

同樣是 `right bottom`，圖片仍靠右下，但可見範圍和視覺比例會不同。

特別是在 `cover` / `contain` 場景中，`background-position` 會影響：

- 哪一部分被裁掉
- 留白出現在哪裡
- 圖片主體靠哪一側

---

## 10. 和 `background-origin` 的關係

百分比與 `cover` / `contain` 是相對於**背景定位區域**來計算。  
這個背景定位區域又會受到 `background-origin` 影響。

```css
.box {
  background-origin: content-box;
  background-size: 50% auto;
}
```

這裡的 `50%` 不是相對整個 border-box，而是相對 `content-box`。

所以當你調整 `background-origin` 時，`background-size` 的百分比效果也可能跟著變。

---

## 11. 多背景圖中的 `background-size`

和其他背景屬性一樣，`background-size` 可以逐層設定。

```css
.card {
  background-image:
    url("./assets/badge.svg"),
    url("./assets/pattern-grid.svg");

  background-size:
    96px 96px,
    72px 72px;
}
```

對應方式如下：

| 層級 | `background-image` | `background-size` |
|---|---|---|
| 第 1 層，最上層 | `badge.svg` | `96px 96px` |
| 第 2 層，下方 | `pattern-grid.svg` | `72px 72px` |

完整範例：

```css
.card {
  background-image:
    url("./assets/badge.svg"),
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
}
```

---

## 12. 在 `background` 簡寫中的位置

`background-size` 在 `background` shorthand 中，必須寫在 `background-position` 後，並用 `/` 分隔。

正確：

```css
background: url("./assets/hero-scene.svg") center / cover no-repeat;
```

拆解：

```css
background-image: url("./assets/hero-scene.svg");
background-position: center;
background-size: cover;
background-repeat: no-repeat;
```

如果少了 `/`，就不是合法的 `position / size` 寫法。

---

## 13. 實務案例 1：Hero 背景

```css
.hero {
  min-height: 420px;
  background-image: url("./assets/hero-scene.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
```

這是最常見的 Hero 背景寫法。  
優點：

- 鋪滿容器
- 保持比例
- 視覺穩定

缺點：

- 容易裁切圖片主體
- 必須搭配 `background-position` 微調

---

## 14. 實務案例 2：Logo / 圖示完整顯示

```css
.logo-panel {
  background-image: url("./assets/landmark.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
```

這種情況通常希望整張圖完整顯示，所以 `contain` 比 `cover` 更適合。

---

## 15. 實務案例 3：卡片右下角裝飾圖

```css
.card {
  background-image: url("./assets/badge.svg");
  background-repeat: no-repeat;
  background-position: right 24px bottom 24px;
  background-size: 96px 96px;
}
```

這種固定尺寸背景裝飾，非常適合直接寫明確長寬。

---

## 16. 實務案例 4：平鋪底紋

```css
.panel {
  background-image: url("./assets/pattern-grid.svg");
  background-repeat: repeat;
  background-position: left top;
  background-size: 64px 64px;
}
```

這裡 `background-size` 不是在「放大一張圖」，而是在控制每個平鋪 tile 的尺寸。

---

## 17. 常見錯誤與排查

### 錯誤 1：以為單值同時控制寬高

```css
background-size: 120px;
```

不是：

```text
寬高都 120px
```

而是：

```text
寬度 120px，高度 auto
```

---

### 錯誤 2：誤解 `cover`

很多人以為：

```css
background-size: cover;
```

代表「整張圖完整顯示」。

其實不對。  
`cover` 的重點是：

```text
鋪滿容器
```

因此可能裁切圖片。

---

### 錯誤 3：誤解 `contain`

很多人以為：

```css
background-size: contain;
```

代表「容器一定被鋪滿」。

其實不對。  
`contain` 的重點是：

```text
整張圖完整顯示
```

因此可能留白。

---

### 錯誤 4：把 `background-size` 當成控制元素大小

```css
.box {
  background-size: 300px 200px;
}
```

這不會讓 `.box` 變成 `300px × 200px`。  
它只會改變背景圖大小。

如果要控制元素大小，應使用：

```css
width
height
min-height
```

---

### 錯誤 5：`background` 簡寫漏掉 `/`

錯誤：

```css
background: url("./assets/hero-scene.svg") center cover no-repeat;
```

正確：

```css
background: url("./assets/hero-scene.svg") center / cover no-repeat;
```

---

## 18. 面試與讀碼常見問法

### 問題 1：`background-size` 的預設值是什麼？

預設值是：

```css
background-size: auto auto;
```

---

### 問題 2：`background-size: 120px;` 是什麼意思？

代表：

```text
寬度：120px
高度：auto
```

---

### 問題 3：`cover` 和 `contain` 差在哪？

- `cover`：保持比例，鋪滿容器，可能裁切
- `contain`：保持比例，完整顯示圖片，可能留白

---

### 問題 4：`background-size` 和 `background-repeat` 有什麼關係？

如果背景會重複，`background-size` 會影響每個重複 tile 的尺寸。

---

### 問題 5：多背景圖時，`background-size` 如何對應？

用逗號逐層對應：

```css
background-image:
  url("./a.svg"),
  url("./b.svg");

background-size:
  96px 96px,
  72px 72px;
```

第一個 size 對應第一張背景圖，第二個 size 對應第二張背景圖。

---

## 19. 一句話抓核心

> `background-size` 負責控制背景圖片畫多大；`cover` 是寧可裁切也要鋪滿，`contain` 是寧可留白也要完整。

---

## 自測問題

1. `background-size` 控制的是元素大小，還是背景圖片大小？
2. `background-size` 的預設值是什麼？
3. `background-size: 120px;` 中，省略的是哪個方向？
4. `background-size: auto 120px;` 代表什麼？
5. `background-size: 50% auto;` 的百分比是相對什麼？
6. `cover` 和 `contain` 哪個會裁切？哪個會留白？
7. 為什麼 `cover` 常搭配 `background-position: center`？
8. `background-size` 和 `background-repeat` 的關係是什麼？
9. `background-size` 和 `background-position` 的關係是什麼？
10. 多背景圖時，`background-size` 如何逐層對應？
11. 在 `background` 簡寫中，`background-size` 該寫在哪裡？
12. 為什麼 `background-size` 通常不適合拿來取代 `<img>` 做內容圖片？

---

## 練習題

### 練習 1：固定尺寸裝飾圖

建立一張卡片：

```css
background-image: url("./assets/badge.svg");
background-repeat: no-repeat;
background-position: right 24px bottom 24px;
background-size: 96px 96px;
```

觀察固定尺寸裝飾圖效果。

---

### 練習 2：比較 `cover` 和 `contain`

建立兩個 Hero 區塊，分別設定：

```css
background-size: cover;
background-size: contain;
```

觀察：

- 哪一個裁切
- 哪一個留白
- 搭配 `background-position: center` 後有何差異

---

### 練習 3：平鋪 tile 大小

建立兩個底紋盒子，都用：

```css
background-repeat: repeat;
```

但分別設定：

```css
background-size: 48px 48px;
background-size: 96px 96px;
```

比較重複圖案密度。

---

### 練習 4：多背景圖

建立一個卡片，要求：

- 第 1 層：右下角徽章，`96px 96px`
- 第 2 層：底紋圖案，`72px 72px`
- 使用逗號逐層設定 `background-size`

---

## 延伸閱讀

- 上一篇：背景裁減 `background-clip`
- 下一篇：背景位置 `background-position`
- 建議搭配：
  - `background-image`
  - `background-repeat`
  - `background-position`
  - `background-origin`
  - `background`

---

## 參考資料

- MDN Web Docs：`background-size`
- MDN Web Docs：`background`
- CSS Backgrounds and Borders Module
