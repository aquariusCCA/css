---
source_atomic:
  - atomic/240-空間轉換/08-3D縮放scale3d.md
  - atomic/240-空間轉換/09-多重3D轉換的書寫順序.md
---

# scale3d 與多重 3D 轉換順序

## 學習目標

讀完這篇筆記，你應該能夠：

- 使用 `scaleZ()` 與 `scale3d(x, y, z)` 設定 3D 縮放。
- 理解 `scale3d()` 三個參數分別對應 x、y、z 軸。
- 知道 `scale3d()` 的參數不可省略。
- 理解多個 transform 函式會依書寫順序組合，順序不同會得到不同視覺結果。

## 使用情境

3D 縮放可以讓元素在三維空間中放大或縮小。實務上它常和旋轉、位移一起使用，因為單獨調整 z 軸縮放不一定容易被看出來。

例如：

- 在有旋轉、透視或參考物的 3D 場景中，更容易看出 z 軸方向的縮放變化。
- 搭配 `rotateY()` 觀察 z 軸縮放效果。
- 先位移、再縮放、再旋轉，組合出更完整的 3D 視覺變化。

## 一句話理解

`scale3d()` 用三個數字控制元素在 x、y、z 三個軸向上的縮放比例；多個 3D transform 函式會按照書寫順序疊加，因此順序會影響最後效果。

## scaleZ 與 scale3d 基本語法

```css
transform: scaleZ(3);
transform: scale3d(1.5, 1.5, 3);
```

常用函式如下：

| 函式 | 說明 |
| --- | --- |
| `scaleZ(z)` | 設定 z 軸方向的縮放比例 |
| `scale3d(x, y, z)` | 同時設定 x、y、z 三軸縮放比例 |

縮放值是一個數字：

- `1` 表示不縮放。
- 大於 `1` 表示放大。
- 小於 `1` 且大於 `0` 表示縮小。

## scale3d 的參數不能省略

`scale3d()` 必須提供三個參數：

```css
.box {
  transform: scale3d(1.5, 1.5, 3);
}
```

三個值分別代表：

- 第一個值：x 軸縮放比例。
- 第二個值：y 軸縮放比例。
- 第三個值：z 軸縮放比例。

如果只要控制單一軸，使用對應的單軸函式會更清楚。

## 範例：搭配旋轉觀察 z 軸縮放

```css
.outer {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  margin: 100px auto 0;
  transform-style: preserve-3d;
  perspective: 500px;
}

.inner {
  width: 200px;
  height: 200px;
  background-color: skyblue;
  transform: scale3d(1.5, 1.5, 3) rotateY(30deg);
}
```

```html
<body>
  <div class="outer">
    <div class="inner">inner</div>
  </div>
</body>
```

這個範例中：

- `.outer` 提供 3D 空間和透視效果。
- `.inner` 在 x 軸、y 軸放大為 `1.5` 倍。
- `.inner` 在 z 軸放大為 `3` 倍。
- `rotateY(30deg)` 讓元素側向旋轉，幫助觀察 z 軸相關效果。

如果沒有旋轉或透視，z 軸縮放的視覺差異可能不容易看出來。

## 多重 3D 轉換的書寫順序

`transform` 可以同時放多個轉換函式：

```css
transform: translateZ(100px) scaleZ(3) rotateY(30deg);
```

多個 transform 函式會依書寫順序組合。順序不同，視覺結果也可能不同。

可以把它理解成：你不是只指定「有哪些效果」，也同時指定了「這些效果以什麼順序作用」。

## 範例：位移、縮放、旋轉一起使用

```css
.outer {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  margin: 100px auto 0;
  transform-style: preserve-3d;
  perspective: 500px;
}

.inner {
  width: 200px;
  height: 200px;
  background-color: skyblue;
  transform: translateZ(100px) scaleZ(3) rotateY(30deg);
}
```

```html
<body>
  <div class="outer">
    <div class="inner">inner</div>
  </div>
</body>
```

這段 `transform` 的目標是：

- 先讓元素沿 z 軸往觀察者方向移動 `100px`。
- 再讓 z 軸方向縮放 `3` 倍。
- 最後沿 y 軸旋轉 `30deg`，讓立體變化更容易被看見。

## 常見錯誤

### 錯誤一：省略 scale3d 的參數

`scale3d()` 需要三個值。如果只想控制 z 軸，不要寫不完整的 `scale3d()`，可以改用 `scaleZ()`。

```css
/* 清楚表達只縮放 z 軸 */
.inner {
  transform: scaleZ(3);
}
```

### 錯誤二：期待 scaleZ 單獨產生明顯畫面變化

z 軸縮放常需要搭配 3D 場景、透視或旋轉才容易被觀察。若元素沒有側向角度，z 軸變化可能不明顯。

### 錯誤三：忽略 transform 函式順序

以下兩段都包含位移、縮放與旋轉，但順序不同，最後效果也可能不同：

```css
transform: translateZ(100px) scaleZ(3) rotateY(30deg);
transform: rotateY(30deg) scaleZ(3) translateZ(100px);
```

調整 3D 效果時，不只要看使用了哪些函式，也要檢查它們的排列順序。

## 實務判斷

- 想單獨控制 z 軸縮放：用 `scaleZ()`。
- 想同時控制三軸縮放：用 `scale3d(x, y, z)`。
- z 軸效果不明顯時：加入透視、旋轉或其他參考物。
- 多個 transform 函式一起使用時：把順序當成效果設計的一部分。

## 重點整理

- `scaleZ()` 控制 z 軸縮放。
- `scale3d(x, y, z)` 分別控制 x、y、z 三軸縮放，三個參數不可省略。
- `1` 表示不縮放，大於 `1` 放大，小於 `1` 縮小。
- z 軸縮放通常要配合透視或旋轉才容易觀察。
- 多個 transform 函式會依書寫順序組合，順序不同會改變結果。

## 小練習

1. 寫出讓元素 x 軸放大 `1.2` 倍、y 軸不變、z 軸放大 `2` 倍的 `scale3d()`。
2. 如果 `scaleZ(3)` 看不出效果，可以加上哪一類 transform 來幫助觀察？
3. 比較 `translateZ(100px) rotateY(30deg)` 和 `rotateY(30deg) translateZ(100px)`，為什麼兩者可能不同？
