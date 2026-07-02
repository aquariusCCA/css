---
source_atomic:
  - atomic/230-平面轉換/05-rotate旋轉語法.md
  - atomic/230-平面轉換/06-transform-origin轉換原點.md
---

# rotate 旋轉與 transform-origin 轉換原點

## 學習目標

讀完這篇筆記，你應該能夠：

- 使用 `rotate()` 讓元素在 2D 平面中旋轉。
- 理解 `deg` 角度單位與正負角度方向。
- 說明元素預設會繞自己的中心點旋轉。
- 使用 `transform-origin` 改變旋轉或縮放的中心點。
- 避免角度單位、原點語法和旋轉中心相關的常見錯誤。

## 問題情境

做 hover 效果時，旋轉很常見：圖示可以轉一圈，卡片可以微微傾斜，按鈕箭頭可以展開。大多數時候，元素繞中心旋轉就夠了。

但有些效果需要元素繞特定位置旋轉，例如像門一樣從右下角轉開。這時只會寫 `rotate()` 還不夠，還要理解 `transform-origin`。

## 一句話理解

`rotate()` 決定元素轉幾度；`transform-origin` 決定元素繞哪個點轉。

## rotate 基本語法

`rotate()` 用來讓元素在 2D 平面內旋轉：

```css
transform: rotate(角度);
```

角度需要加上單位 `deg`：

```css
.box {
  transform: rotate(45deg);
}
```

在一般由左至右的書寫方向下：

- 正角度：順時針旋轉
- 負角度：逆時針旋轉

```css
.clockwise {
  transform: rotate(45deg);
}

.counter-clockwise {
  transform: rotate(-45deg);
}
```

## 旋轉範例

```html
<div class="box"></div>
```

```css
.box {
  margin: 0 auto;
  width: 50px;
  height: 50px;
  background-color: skyblue;
  transition: all 0.5s;
}

.box:hover {
  transform: rotate(360deg);
}
```

這段效果是：滑鼠移入 `.box` 時，元素順時針旋轉一整圈。`transition` 讓旋轉過程變成 0.5 秒的動畫，而不是瞬間跳到結果。

## 預設旋轉中心

元素預設會繞自己的中心點旋轉。這個中心點可以理解成：

```css
transform-origin: 50% 50%;
```

也就是元素寬度 50%、高度 50% 的位置。

如果你沒有設定 `transform-origin`，大多數旋轉都會從元素中心轉動。

## transform-origin 基本語法

`transform-origin` 用來設定轉換原點：

```css
transform-origin: x y;
```

注意：x 和 y 之間使用空格，不是逗號。

可用值包含：

- 百分比：`50% 50%`
- 像素：`20px 10px`
- 方位名詞：`left`、`right`、`top`、`bottom`、`center`

例如：

```css
.box {
  transform-origin: right bottom;
}
```

這代表轉換原點在元素右下角。

## 改變旋轉中心範例

```html
<div class="box"></div>
```

```css
.box {
  margin: 0 auto;
  width: 50px;
  height: 50px;
  background-color: skyblue;
  transition: all 0.5s;
  transform-origin: right bottom;
}

.box:hover {
  transform: rotate(360deg);
}
```

這個範例和前面的旋轉範例很像，但旋轉原點改成了右下角。視覺上，元素不再只是繞自身中心轉，而是繞右下角轉動。

## rotate 與 transform-origin 的關係

`rotate()` 和 `transform-origin` 處理的是兩件不同的事：

| 屬性 / 函式 | 負責內容 |
| --- | --- |
| `transform: rotate(...)` | 決定旋轉角度 |
| `transform-origin` | 決定轉換中心點 |

如果只改 `rotate()`，你會改變旋轉幅度；如果只改 `transform-origin`，你會改變旋轉時的支點。

## 常見錯誤

### 忘記 deg 單位

`rotate(45)` 是不完整的角度寫法，應寫成：

```css
.box {
  transform: rotate(45deg);
}
```

CSS 需要知道這個數字代表角度，所以要加上 `deg`。

### transform-origin 用逗號分隔

`transform-origin` 的兩個值用空格分隔，不用逗號。

```css
/* 建議 */
.box {
  transform-origin: right bottom;
}
```

### 誤以為 transform-origin 只影響 rotate

`transform-origin` 影響的是 transform 的轉換原點。它不只會影響旋轉，也會影響縮放等轉換效果。

### 對同一元素重複宣告 transform

如果同一個規則裡寫兩次 `transform`，後者會覆蓋前者。需要同時旋轉和位移時，應寫成同一行：

```css
.box {
  transform: translateX(100px) rotate(45deg);
}
```

## 實務判斷準則

- 只需要轉動元素：使用 `transform: rotate(...)`。
- 旋轉支點不是中心：加上 `transform-origin`。
- 做展開、開門、翻牌等效果時，先思考支點在哪。
- 做 hover 旋轉動畫時，通常會搭配 `transition`。

## 重點整理

- `rotate()` 讓元素在 2D 平面旋轉。
- 角度單位常用 `deg`，例如 `rotate(360deg)`。
- 正角度通常順時針，負角度通常逆時針。
- 預設轉換原點是元素中心，也就是 `50% 50%`。
- `transform-origin` 可以用百分比、像素或方位名詞設定。

## 自我檢查

1. `rotate(360deg)` 代表元素旋轉多少？
2. `rotate(-45deg)` 和 `rotate(45deg)` 的方向有什麼差異？
3. 元素預設繞哪個位置旋轉？
4. `transform-origin: right bottom` 代表轉換原點在哪裡？
5. `transform-origin` 的兩個值中間應該用逗號還是空格？
