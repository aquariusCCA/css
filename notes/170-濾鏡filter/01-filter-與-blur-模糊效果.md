---
source_atomic:
  - atomic/170-濾鏡filter/01-filter-與-blur-模糊效果.md
topics: [filter, blur, CSS濾鏡, 模糊效果, 長度單位]
summary: "說明如何用 filter: blur(...) 套用模糊濾鏡，並避免漏寫單位或誤用 blur 屬性。"
---

# filter 與 blur 模糊效果

## 學習目標

讀完這篇筆記後，你應該能夠：

- 說明 `filter` 屬性的用途。
- 使用 `blur()` 讓圖片或元素產生模糊效果。
- 判斷 `blur()` 數值與模糊程度之間的關係。
- 避免漏寫長度單位、誤把 `blur` 當成獨立屬性等常見錯誤。

## 使用情境

當你希望圖片、圖示或某個元素呈現模糊、灰階、亮度變化等視覺效果時，可以使用 CSS 的 `filter` 屬性。

本篇先聚焦在最容易理解的 `blur()`：讓圖片看起來變模糊。這類效果常用在背景圖、遮罩、焦點切換、未載入完成的圖片預覽，或單純用來示範 CSS 濾鏡的基本語法。

## 一句話理解

`filter` 負責套用濾鏡效果，`blur()` 是其中一種函數值，用來設定元素的模糊半徑。

## 基本語法

```css
selector {
  filter: blur(5px);
}
```

`filter` 的值通常會寫成濾鏡函數，例如 `blur(5px)`。

```css
/* filter: <filter-function>(); */

filter: blur(5px);
```

這裡的意思是：對元素套用一個模糊半徑為 `5px` 的模糊效果。

## blur() 的數值

`blur()` 括號中的值代表模糊半徑。數值越大，元素就越模糊。

```css
img {
  filter: blur(5px);
}
```

非 `0` 的模糊半徑需要帶上 CSS 長度單位，例如 `px` 或 `rem`。

```css
/* 正確 */
img {
  filter: blur(5px);
}

/* 錯誤 */
img {
  filter: blur(5);
}
```

`blur(5)` 少了長度單位，瀏覽器會把這個濾鏡函數視為無效。

## 圖片模糊範例

下面這張圖示範同一個 Firefox 標誌在套用模糊濾鏡前後的差異：

![Firefox 標誌套用模糊濾鏡前後對比](../../origin/170-濾鏡filter/assets/images/css-filter-img-001-50019e.png)

可以用下面的 CSS 套用模糊效果：

```css
img {
  filter: blur(5px);
}
```

搭配 HTML 圖片元素時，結構可以像這樣：

```html
<body>
  <img src="../../origin/170-濾鏡filter/assets/images/css-filter-img-002-354aea.jpg" alt="穿黑色西裝揮手的男士照片">
</body>
```

這段 HTML 本身只負責放入圖片；真正讓圖片變模糊的是 CSS 裡的 `filter: blur(5px);`。

## 範例拆解

```css
img {
  filter: blur(5px);
}
```

- `img`：選取頁面中的圖片元素。
- `filter`：指定要套用的濾鏡效果。
- `blur(5px)`：套用模糊效果，模糊半徑是 `5px`。

如果把數值改大，例如 `blur(12px)`，圖片會更模糊；如果改成 `blur(0)`，就等於沒有模糊效果。

## 常見錯誤

### 把 blur 當成獨立屬性

```css
img {
  blur: 5px;
}
```

`blur` 不是 CSS 屬性名稱。模糊效果要寫在 `filter` 裡：

```css
img {
  filter: blur(5px);
}
```

### 非 0 數值漏掉單位

```css
img {
  filter: blur(5);
}
```

`5` 沒有說明是 `px`、`rem` 還是其他長度單位，因此不是有效寫法。應改成：

```css
img {
  filter: blur(5px);
}
```

### 數值過大導致內容難以辨識

`blur()` 的數值越大，模糊越明顯。若圖片本身需要被閱讀或辨識，過大的模糊值會讓內容失去可用性。

實作時應依用途調整數值：背景裝飾可以模糊多一些；主要內容圖片則應保持清楚。

## 實務判斷準則

- 只想做模糊效果時，使用 `filter: blur(...)`。
- 非 `0` 的模糊值要加長度單位，例如 `5px`。
- 模糊值越大，元素越不清楚。
- 主要內容圖片不要過度模糊，避免影響辨識。
- 若效果沒有出現，先檢查是否把 `blur()` 寫在 `filter` 屬性裡，以及數值是否有單位。

## 重點整理

- `filter` 是用來套用圖形濾鏡效果的 CSS 屬性。
- `blur()` 是 `filter` 的函數值之一，用來產生模糊效果。
- `filter: blur(5px);` 會讓元素以 `5px` 的半徑產生模糊。
- `blur()` 的非 `0` 數值需要長度單位。
- `blur` 不是獨立 CSS 屬性，必須寫成 `filter: blur(...)`。

## 自我檢查

1. `filter: blur(5px);` 中的 `5px` 代表什麼？
2. 為什麼 `filter: blur(5);` 是錯誤寫法？
3. 如果你想讓圖片更模糊，應該調整哪個部分？
4. `blur: 5px;` 為什麼不會產生模糊效果？
