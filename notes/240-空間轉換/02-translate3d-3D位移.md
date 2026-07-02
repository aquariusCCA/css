---
source_atomic:
  - atomic/240-空間轉換/05-3D位移translate3d.md
---

# translate3d：3D 位移

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 3D 位移和 2D 位移的差異。
- 使用 `translateX()`、`translateY()`、`translateZ()` 沿單一軸移動元素。
- 使用 `translate3d(x, y, z)` 同時設定三個方向的位移。
- 知道 `translateZ()` 和 `translate3d()` 的 z 值不能使用百分比。
- 理解為什麼 z 軸位移通常需要配合透視效果才容易看出變化。

## 使用情境

2D 位移只能讓元素沿著 x 軸或 y 軸移動，也就是左右和上下移動。3D 位移多了 z 軸，能讓元素看起來往螢幕外靠近，或往螢幕內遠離。

例如：

- 卡片 hover 時往前浮起。
- 圖片或盒子在 3D 場景中前後移動。
- 搭配旋轉做出更有空間感的互動效果。

## 一句話理解

`translate3d()` 是 3D 位移函式，用 x、y、z 三個值控制元素在三個軸向上的移動距離。

## 基本語法

```css
transform: translate3d(x, y, z);
```

也可以分開寫成單一軸位移：

```css
transform: translateX(x);
transform: translateY(y);
transform: translateZ(z);
```

各函式的意義如下：

| 函式 | 說明 |
| --- | --- |
| `translateX(x)` | 沿 x 軸移動 |
| `translateY(y)` | 沿 y 軸移動 |
| `translateZ(z)` | 沿 z 軸移動 |
| `translate3d(x, y, z)` | 同時設定 x、y、z 三軸位移 |

## 取值規則

`translate3d(x, y, z)` 的三個值分別代表三個軸向的位移距離。

- `x` 可以使用長度值或百分比。
- `y` 可以使用長度值或百分比。
- `z` 必須使用長度值，不能使用百分比。
- 三個方向都可以使用正值或負值。

例如：

```css
.box {
  transform: translate3d(100px, 100px, 200px);
}
```

這代表 `.box`：

- 往 x 軸正方向移動 `100px`。
- 往 y 軸正方向移動 `100px`。
- 往 z 軸正方向移動 `200px`，也就是往螢幕外、靠近觀察者。

## 範例拆解

```css
body {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.box {
  width: 200px;
  height: 200px;
  background-color: pink;
  transition: all 0.5s;
}

.box:hover {
  transform: translate3d(100px, 100px, 200px);
}
```

```html
<body>
  <div class="box"></div>
</body>
```

這個範例中：

- `body` 提供 3D 場景與透視距離。
- `.box` 是要被移動的元素。
- hover 時，元素同時往右、往下、往螢幕外移動。
- 因為有 `perspective: 1000px`，z 軸正方向的位移更容易呈現出靠近觀察者的效果。

如果只想分開寫，也可以這樣：

```css
.box:hover {
  transform: translateX(100px) translateY(100px) translateZ(200px);
}
```

## 為什麼 translateZ 不一定明顯

z 軸是垂直於螢幕的方向。元素往 z 軸移動時，不像 x 軸或 y 軸那樣直接表現成左右或上下位移。

如果沒有透視效果，或畫面中沒有其他參考物，單純的 z 軸移動可能不容易看出來。通常會搭配：

- 父層或場景中的 `perspective`。
- 旋轉效果，例如 `rotateX()` 或 `rotateY()`。
- 其他元素作為前後距離的比較。

## 常見錯誤

### 錯誤一：z 軸使用百分比

`translateZ()` 和 `translate3d()` 的第三個值需要使用長度值。

```css
/* 不建議 */
.box {
  transform: translateZ(50%);
}
```

應改成：

```css
.box {
  transform: translateZ(100px);
}
```

### 錯誤二：沒有透視卻期待明顯的 z 軸效果

只寫 `translateZ(200px)`，不一定會立刻看出「往前」的視覺效果。通常需要場景提供 `perspective`。

```css
.scene {
  perspective: 1000px;
}
```

### 錯誤三：把 translate3d 的三個值順序記反

`translate3d()` 的順序固定是：

```css
translate3d(x, y, z)
```

不要把第三個 z 值誤當成 y 軸位移。

## 實務判斷

- 只需要左右移動：用 `translateX()`。
- 只需要上下移動：用 `translateY()`。
- 需要前後深度變化：用 `translateZ()`，並考慮搭配 `perspective`。
- 三軸都要一起控制：用 `translate3d(x, y, z)`。

## 小練習

1. 寫出讓元素往右 `80px`、往上 `40px`、往螢幕外 `120px` 的 `translate3d()`。
2. 說明為什麼 `translateZ(50%)` 不適合用來表示 z 軸位移。
3. 如果 `translateZ(200px)` 看不出變化，可以在哪個元素上加上 `perspective`？
