---
source_atomic:
  - atomic/130-盒子模型/03-border-基本語法.md
  - atomic/130-盒子模型/04-border-影響盒子實際大小.md
  - atomic/130-盒子模型/06-outline-外輪廓.md
---

# border 與 outline：邊框和外輪廓的差異

## 學習目標

讀完這篇筆記，你應該能夠：

- 使用 `border` 設定元素邊框。
- 說出 `border-width`、`border-style`、`border-color` 的用途。
- 理解 border 會增加預設盒模型中的實際尺寸。
- 分辨 `border` 和 `outline` 在盒模型中的差異。
- 知道移除 focus outline 時需要提供替代樣式。

## 使用情境

當你想讓一個盒子的邊界可見，例如卡片外框、按鈕邊框、表單欄位邊框，就會使用 `border`。

但有些線條只是用來提示狀態，例如輸入框被聚焦時瀏覽器顯示的外輪廓，這時就會遇到 `outline`。

兩者看起來都像元素外圍的線，但在盒模型中的行為不同：`border` 會佔空間，`outline` 不佔空間。

## border 的基本組成

`border` 由三個部分組成：

| 屬性 | 說明 |
| --- | --- |
| `border-width` | 邊框寬度 |
| `border-style` | 邊框樣式 |
| `border-color` | 邊框顏色 |

![border-width border-style border-color 屬性作用表](../../origin/130-盒子模型/assets/images/box-border-img-001-9d9559.png)

可以分開寫：

```css
div {
  width: 200px;
  height: 200px;
  border-width: 10px;
  border-style: solid;
  border-color: red;
}
```

也可以用複合寫法：

```css
div {
  width: 200px;
  height: 200px;
  border: 10px solid red;
}
```

複合寫法中，粗細、線條樣式、顏色的順序通常不固定，但開發中常寫成：

```css
border: 寬度 樣式 顏色;
```

## border-style 常見值

`border-style` 決定邊框長什麼樣子。

| 值 | 說明 |
| --- | --- |
| `none` | 沒有邊框，預設值 |
| `solid` | 單實線，最常用 |
| `dashed` | 虛線 |
| `dotted` | 點線 |

例如：

```css
.box {
  width: 300px;
  height: 200px;
  border: 5px solid pink;
}
```

如果只想設定某一邊，可以使用方向屬性：

```css
.box {
  border-top: 5px solid pink;
  border-bottom: 10px dashed purple;
}
```

## border 會影響盒子實際大小

在預設盒模型中，`width` 和 `height` 只設定 content 區域。邊框會加在 content 外面，因此會增加盒子的實際大小。

![border 會增加盒子實際寬高的示意圖](../../origin/130-盒子模型/assets/images/box-border-img-002-4b487b.png)

例如你想要畫面上的盒子總大小是 `400px * 400px`，但邊框每邊有 `10px`。

如果直接寫：

```css
.box {
  width: 400px;
  height: 400px;
  border: 10px solid red;
}
```

預設盒模型下，實際寬高會變成：

```text
寬度 = 400px + 10px + 10px = 420px
高度 = 400px + 10px + 10px = 420px
```

如果要讓總大小仍然是 `400px * 400px`，就要扣掉邊框：

```css
.box {
  width: 380px;
  height: 380px;
  background-color: pink;
  border: 10px solid red;
}
```

另一種更現代的方式，是使用 `box-sizing: border-box`，讓 `width` 包含 content、padding 和 border。

## outline 是什麼

`outline` 是繪製在元素外圍的輪廓線，可以設定顏色、樣式和寬度。

![outline 位於 border 外側且不占盒子尺寸的示意圖](../../origin/130-盒子模型/assets/images/box-outline-img-001-d80535.png)

簡寫格式：

```css
outline: outline-color outline-style outline-width;
```

例如：

```css
.outlined-element {
  width: 200px;
  height: 100px;
  background-color: #f0f0f0;
  margin: 20px;
  outline: 2px solid #3498db;
}
```

`outline` 和 `border` 最大的不同是：`outline` 不會佔用版面空間，也不會增加盒子的實際 `width` 或 `height`。

## border 與 outline 對照

| 比較項目 | `border` | `outline` |
| --- | --- | --- |
| 位置 | 盒模型的一部分，位於 padding 外側 | 繪製在元素外圍 |
| 是否佔空間 | 會 | 不會 |
| 是否影響尺寸 | 會增加預設盒模型下的實際大小 | 不影響尺寸與位置 |
| 常見用途 | 元件邊框、卡片外框、按鈕邊界 | focus 輪廓、暫時強調元素 |

## focus 輪廓與可用性

瀏覽器常會在可聚焦元素 focus 時顯示預設外輪廓。例如使用鍵盤 Tab 移動到輸入框時，外輪廓能提示目前焦點在哪裡。

你可以移除預設輪廓：

```css
input {
  outline: none;
}
```

但不應該只移除而不補替代樣式。比較好的做法是提供新的 focus 樣式：

```css
input:focus {
  outline: 2px solid #3498db;
  outline-offset: 2px;
}
```

這樣既能控制外觀，也保留鍵盤操作時的重要提示。

## 常見錯誤

### 誤解：`border` 不會改變盒子大小

在預設盒模型中，border 會增加盒子的實際寬高。若設計稿的尺寸包含邊框，要扣回 content 尺寸，或改用 `box-sizing: border-box`。

### 誤解：`outline` 和 `border` 是同一件事

兩者都能畫線，但 `outline` 不佔空間，`border` 佔空間。用錯時可能導致元素尺寸與版面位置和預期不同。

### 誤解：移除 `outline` 可以讓表單更漂亮

如果沒有替代 focus 樣式，鍵盤使用者會很難知道目前焦點在哪裡。移除 outline 時，應提供新的清楚 focus 狀態。

## 重點整理

- `border` 由寬度、樣式、顏色組成。
- `border-style: solid` 是最常見的邊框樣式。
- 預設盒模型中，border 會增加盒子實際大小。
- `outline` 繪製在元素外圍，不佔版面空間。
- 移除預設 focus outline 時，要提供替代 focus 樣式。

## 自我檢查

1. `border` 的三個基本組成是什麼？
2. `border: 5px solid red;` 中的 `solid` 代表什麼？
3. 一個盒子 `width: 200px`，左右 border 各 `10px`，預設盒模型下實際寬度是多少？
4. `outline` 和 `border` 哪一個會影響盒子尺寸？
5. 為什麼不建議單純寫 `outline: none;` 而沒有其他 focus 樣式？
