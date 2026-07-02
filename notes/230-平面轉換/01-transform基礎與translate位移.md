---
source_atomic:
  - atomic/230-平面轉換/01-平面轉換與二維座標.md
  - atomic/230-平面轉換/02-translate位移語法與特性.md
  - atomic/230-平面轉換/04-translate不影響佈局與置中應用.md
topics: [transform, translate, 2D 轉換, 視覺位移, 絕對定位置中]
summary: "說明 transform 與 translate 的位移語法、特性和置中應用。"
---

# transform 基礎與 translate 位移

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解 CSS 2D 轉換可以改變元素的視覺位置與形狀。
- 說明 `translate` 如何沿著 X 軸與 Y 軸移動元素。
- 分辨 `translate` 位移與一般排版位置的差異。
- 理解 `translate()` 中百分比是相對元素自身尺寸計算。
- 使用 `translate(-50%, -50%)` 搭配定位完成水平與垂直置中。

## 問題情境

做互動效果時，常會需要讓元素「看起來」移動一下，例如滑鼠移入卡片後往右下偏移，或讓一個盒子從角落移到容器中央。

如果只用 `margin` 或定位屬性改位置，可能會牽動周圍盒子的排版。`transform: translate(...)` 的價值就在這裡：它可以改變元素的視覺位置，但不會重新推擠其他元素。

## 一句話理解

`transform` 是元素的視覺變形工具；`translate` 是其中負責「位移」的函式，會讓元素在畫面上沿 X / Y 軸移動。

## 2D 轉換與座標軸

2D 轉換是在二維平面中改變元素的視覺效果，常見類型包含：

- 位移：`translate`
- 旋轉：`rotate`
- 縮放：`scale`

學習平面轉換前，先抓住座標方向很重要：X 軸控制水平方向，Y 軸控制垂直方向。在瀏覽器畫面中，X 軸往右是正方向，Y 軸往下是正方向。

![2D 轉換座標軸方向示意圖](../../origin/230-平面轉換/assets/images/2d-transforms-intro-img-001-a41858.png)

## translate 基本語法

`translate()` 可以同時設定水平與垂直位移：

```css
transform: translate(x, y);
```

例如：

```css
.box {
  transform: translate(100px, 100px);
}
```

這代表元素視覺上往右移動 `100px`，並往下移動 `100px`。

如果只想控制單一方向，也可以分開寫：

```css
.box {
  transform: translateX(100px);
}
```

```css
.box {
  transform: translateY(100px);
}
```

只移動 X 軸時，下面兩種寫法效果相同：

```css
transform: translate(100px, 0);
transform: translateX(100px);
```

## 百分比是相對自身尺寸

`translate()` 的百分比不是相對父層，而是相對元素自己。

```css
.box {
  transform: translate(50%, 50%);
}
```

如果 `.box` 自己寬 `200px`、高 `100px`，那麼：

- `translateX(50%)` 等於往右移動 `100px`
- `translateY(50%)` 等於往下移動 `50px`

這個特性讓 `translate` 很適合處理「以自身尺寸為基準」的效果，例如元素置中。

## translate 不會影響其他盒子

下面範例中，第一個盒子 hover 時會往右下移動，但第二個盒子的排版位置不會跟著被推開。

```html
<div class="w one"></div>
<div class="w two"></div>
```

```css
.w {
  width: 200px;
  height: 200px;
}

.one {
  background-color: pink;
}

.one:hover {
  transform: translate(30px, 30px);
}

.two {
  background-color: purple;
}
```

這裡的重點是：`transform` 影響的是元素繪製後的視覺結果，不會重新計算文件流中的位置。因此 `.one` 看起來移動了，但 `.two` 原本佔的位置不會被重新安排。

## 用 translate 完成水平與垂直置中

`translate(-50%, -50%)` 常和絕對定位一起使用，用來把元素真正拉回自己的中心點。

```html
<div class="wrap">
  <div class="box"></div>
</div>
```

```css
.wrap {
  position: relative;
  width: 500px;
  height: 200px;
  border: 1px solid #333;
}

.box {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100px;
  height: 100px;
  background-color: skyblue;
  transform: translate(-50%, -50%);
}
```

拆開來看：

- `left: 50%`：讓 `.box` 的左邊緣移到父層水平中心。
- `top: 50%`：讓 `.box` 的上邊緣移到父層垂直中心。
- `translate(-50%, -50%)`：再依 `.box` 自己的寬高往左、往上拉回一半。

這樣盒子的中心點才會和父層中心點重合。

## 常見錯誤

### 以為 translate 會推動其他元素

`translate` 只改變視覺位置，不改變元素在文件流中原本佔據的空間。若你希望其他元素一起被推開，應該改用排版屬性，例如 `margin`、Flexbox 或 Grid。

### 以為 translate 的百分比相對父層

`translate(50%, 50%)` 是相對元素自己，不是父層。這也是為什麼 `left: 50%` 和 `translate(-50%, -50%)` 可以搭配完成置中：前者看父層，後者看自身。

### 對同一元素分開寫多個 transform

同一條 CSS 規則中，如果重複宣告 `transform`，後面的會覆蓋前面的。

```css
/* 後面的 rotate 會覆蓋前面的 translate */
.box {
  transform: translateX(100px);
  transform: rotate(45deg);
}
```

如果需要同時位移與旋轉，應寫在同一個 `transform` 裡：

```css
.box {
  transform: translateX(100px) rotate(45deg);
}
```

## 實務判斷準則

- 要做視覺位移且不影響排版：用 `transform: translate(...)`。
- 要讓元素真正佔據新位置並推動其他元素：使用排版方式處理。
- 要做絕對定位置中：常用 `left: 50%`、`top: 50%`、`translate(-50%, -50%)`。
- 使用百分比位移時，先確認基準是元素自身寬高。

## 重點整理

- `transform` 可以讓元素在 2D 或 3D 空間中變形。
- `translate(x, y)` 讓元素沿 X / Y 軸做視覺位移。
- `translate` 不會影響其他元素的排版位置。
- `translate()` 中的百分比是相對自身尺寸。
- `translate(-50%, -50%)` 搭配 `left: 50%`、`top: 50%` 是常見置中技巧。

## 自我檢查

1. `translate(30px, 30px)` 會讓元素往哪個方向移動？
2. `translate(50%, 50%)` 的百分比是相對父層還是元素自身？
3. 為什麼 `translate` 移動元素後，後面的盒子不會被推開？
4. 使用絕對定位置中時，為什麼只寫 `left: 50%; top: 50%;` 還不夠？
