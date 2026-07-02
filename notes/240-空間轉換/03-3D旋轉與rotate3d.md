---
source_atomic:
  - atomic/240-空間轉換/06-3D旋轉與各軸旋轉.md
  - atomic/240-空間轉換/07-rotate3d自訂軸旋轉.md
topics:
  - 3D 旋轉
  - rotate3d
  - 自訂旋轉軸
  - 左手準則
  - rotateZ
summary: "說明 3D 旋轉如何沿 x、y、z 軸或自訂軸轉動，並釐清 rotate3d 的向量參數。"
---

# 3D 旋轉與 rotate3d

## 學習目標

讀完這篇筆記，你應該能夠：

- 分辨 `rotateX()`、`rotateY()`、`rotateZ()` 分別沿哪個軸旋轉。
- 使用左手準則判斷 x 軸與 y 軸旋轉方向。
- 使用 `rotate3d(x, y, z, angle)` 指定自訂旋轉軸。
- 理解 `rotate3d()` 前三個參數代表旋轉軸向量，而不是三個旋轉角度。

## 使用情境

3D 旋轉常用在卡片翻面、圖片傾斜、立方體效果或 hover 互動。和 2D 旋轉相比，3D 旋轉不只是在平面上轉圈，還可以讓元素像在空間中往前、往後或往側面翻轉。

常見需求包括：

- 沿 x 軸旋轉，讓元素像上下翻動。
- 沿 y 軸旋轉，讓元素像左右翻面。
- 沿 z 軸旋轉，得到接近 2D `rotate()` 的平面旋轉。
- 沿自訂軸旋轉，做出斜向翻轉效果。

## 一句話理解

3D 旋轉是讓元素沿著 x、y、z 軸或自訂軸轉動；`rotate3d()` 則用一個向量指定旋轉軸，再用角度指定旋轉量。

## 基本語法

```css
transform: rotateX(45deg);
transform: rotateY(45deg);
transform: rotateZ(45deg);
```

三個函式的差異如下：

| 函式 | 旋轉方向 |
| --- | --- |
| `rotateX(angle)` | 沿 x 軸旋轉 |
| `rotateY(angle)` | 沿 y 軸旋轉 |
| `rotateZ(angle)` | 沿 z 軸旋轉 |

其中 `rotateZ()` 是沿著垂直螢幕的 z 軸旋轉，視覺上接近一般 2D 旋轉。

## rotateX：沿 x 軸旋轉

可以用左手準則判斷 x 軸旋轉方向：

![左手準則判斷 X 軸旋轉方向](../../origin/240-空間轉換/assets/images/3d-rotate-rotate3d-img-001-36e5a3.png)

- 左手拇指指向 x 軸正方向。
- 其餘手指彎曲方向，就是元素沿 x 軸正方向旋轉的方向。

範例：

```css
body {
  transform-style: preserve-3d;
  perspective: 500px;
}

img {
  display: block;
  margin: 100px auto;
  transition: all 1s;
}

img:hover {
  transform: rotateX(45deg);
}
```

```html
<body>
  <img src="../../origin/240-空間轉換/assets/images/3d-rotate-rotate3d-img-002-36e5a3.png" alt="左手準則判斷 X 軸旋轉方向">
</body>
```

`rotateX(45deg)` 會讓元素沿 x 軸翻轉，視覺上像是元素往前或往後傾斜。

## rotateY：沿 y 軸旋轉

判斷 y 軸旋轉時，同樣使用左手準則：

![左手準則判斷 Y 軸旋轉方向](../../origin/240-空間轉換/assets/images/3d-rotate-rotate3d-img-003-367a85.png)

- 左手拇指指向 y 軸正方向。
- 其餘手指彎曲方向，就是元素沿 y 軸正方向旋轉的方向。

範例：

```css
body {
  transform-style: preserve-3d;
  perspective: 500px;
}

img {
  display: block;
  margin: 100px auto;
  transition: all 1s;
}

img:hover {
  transform: rotateY(45deg);
}
```

```html
<body>
  <img src="../../origin/240-空間轉換/assets/images/3d-rotate-rotate3d-img-003-367a85.png" alt="左手準則判斷 Y 軸旋轉方向">
</body>
```

`rotateY(45deg)` 常用來做左右翻面效果，例如卡片翻轉。

## rotateZ：沿 z 軸旋轉

`rotateZ()` 沿著 z 軸旋轉。因為 z 軸垂直螢幕，視覺上通常像元素在平面上轉動。

```css
body {
  transform-style: preserve-3d;
  perspective: 500px;
}

img {
  display: block;
  margin: 100px auto;
  transition: all 1s;
}

img:hover {
  transform: rotateZ(45deg);
}
```

```html
<body>
  <img src="../../origin/240-空間轉換/assets/images/3d-rotate-rotate3d-img-004-354aea.jpg" alt="穿黑色西裝揮手的男士照片">
</body>
```

如果只是要做一般平面旋轉，`rotateZ(45deg)` 和常見的 `rotate(45deg)` 在視覺理解上很接近。

## rotate3d：沿自訂軸旋轉

`rotate3d()` 可以指定自訂旋轉軸。

```css
transform: rotate3d(x, y, z, angle);
```

參數意義如下：

| 參數 | 說明 |
| --- | --- |
| `x` | 旋轉軸在 x 軸方向的分量 |
| `y` | 旋轉軸在 y 軸方向的分量 |
| `z` | 旋轉軸在 z 軸方向的分量 |
| `angle` | 旋轉角度 |

例如：

```css
/* 沿著 X 軸旋轉 45deg */
transform: rotate3d(1, 0, 0, 45deg);

/* 沿著對角線旋轉 45deg */
transform: rotate3d(1, 1, 0, 45deg);
```

`rotate3d(1, 0, 0, 45deg)` 等同於指定旋轉軸朝 x 軸方向，因此效果接近 `rotateX(45deg)`。

`rotate3d(1, 1, 0, 45deg)` 則表示旋轉軸同時包含 x 與 y 方向，所以會沿著斜向軸旋轉。

## rotate3d 範例拆解

```css
body {
  transform-style: preserve-3d;
  perspective: 500px;
}

img {
  display: block;
  margin: 100px auto;
  transition: all 1s;
}

img:hover {
  transform: rotate3d(1, 1, 0, 45deg);
}
```

```html
<body>
  <img src="../../origin/240-空間轉換/assets/images/3d-rotate-rotate3d-img-004-354aea.jpg" alt="穿黑色西裝揮手的男士照片">
</body>
```

這個範例中：

- `body` 提供 3D 場景與透視距離。
- 圖片在 hover 時沿著自訂軸旋轉。
- `1, 1, 0` 表示旋轉軸同時往 x 與 y 方向延伸，不包含 z 軸方向。
- `45deg` 是旋轉角度。

## 常見錯誤

### 錯誤一：把 rotate3d 的前三個值當成三個角度

`rotate3d(1, 1, 0, 45deg)` 不是「x 轉 1 度、y 轉 1 度、z 轉 0 度」。

前三個值是旋轉軸向量，最後一個值才是角度。

### 錯誤二：混淆 rotateY 和 rotateZ

`rotateY()` 是左右翻面；`rotateZ()` 則更像平面旋轉。當你想做卡片左右翻轉時，通常應該使用 `rotateY()`，而不是 `rotateZ()`.

### 錯誤三：沒有透視導致 3D 感不明顯

旋轉本身會生效，但如果缺少合適的 `perspective`，3D 旋轉的立體感可能不夠明顯。

## 實務判斷

- 要上下翻動：優先考慮 `rotateX()`。
- 要左右翻面：優先考慮 `rotateY()`。
- 要平面旋轉：使用 `rotateZ()` 或 `rotate()`。
- 要斜向或特殊軸旋轉：使用 `rotate3d()`。

## 小練習

1. 寫出讓元素沿 y 軸旋轉 `60deg` 的 CSS。
2. `rotate3d(0, 0, 1, 30deg)` 接近哪一種單軸旋轉函式？
3. 說明 `rotate3d(1, 1, 0, 45deg)` 中前三個數字的意思。
