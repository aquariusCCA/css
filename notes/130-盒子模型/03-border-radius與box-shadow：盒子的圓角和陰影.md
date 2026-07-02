---
source_atomic:
  - atomic/130-盒子模型/05-border-radius-圓角邊框.md
  - atomic/130-盒子模型/15-box-shadow-盒子陰影.md
---

# border-radius 與 box-shadow：盒子的圓角和陰影

## 學習目標

讀完這篇筆記，你應該能夠：

- 使用 `border-radius` 設定盒子的圓角。
- 用 `50%` 製作圓形盒子。
- 說明 `box-shadow` 各參數的基本意義。
- 理解圓角和陰影是視覺效果，不會像 padding 一樣改變內容間距。
- 避免 `box-shadow` 誤寫 `outset` 等常見錯誤。

## 使用情境

盒模型不只控制尺寸，也能控制盒子的外觀。

例如：

- 卡片需要圓角，看起來比較柔和。
- 頭像圖片需要變成圓形。
- 按鈕 hover 時要出現陰影，提示可互動。
- 面板需要陰影，讓它從背景中浮起來。

這些常見效果通常會用到 `border-radius` 和 `box-shadow`。

## border-radius：設定盒子的圓角

`border-radius` 可以設定元素外邊框的圓角，讓盒子的四個角變得圓潤。

圓角可以理解成「用圓或橢圓和邊框相交」後形成的角。

![圓與邊框交集形成 border-radius 圓角的原理圖](../../origin/130-盒子模型/assets/images/box-border-img-003-1355f0.png)

最基本寫法：

```css
.box {
  width: 300px;
  height: 150px;
  background-color: pink;
  border-radius: 10px;
}
```

單一值會讓四個角使用相同圓角。

## 四個角的方向

如果要分別設定四個角，可以使用方向屬性：

```css
border-top-left-radius: 20px;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
border-bottom-left-radius: 20px;
```

也可以使用簡寫：

```css
border-radius: 左上 右上 右下 左下;
```

方向順序和 padding、margin 的四值寫法一樣，是從左上角開始，順時針設定。

例如：

```css
.box {
  border-radius: 10px 20px 30px 40px;
}
```

代表：

- 左上角：`10px`
- 右上角：`20px`
- 右下角：`30px`
- 左下角：`40px`

## 製作圓形與膠囊形

如果盒子是正方形，可以用 `border-radius: 50%` 做成圓形。

```css
.avatar {
  width: 200px;
  height: 200px;
  background-color: pink;
  border-radius: 50%;
}
```

如果盒子是矩形，`50%` 會形成橢圓形角，不一定是正圓。若想做膠囊形按鈕，可以把圓角設為高度的一半：

```css
.pill {
  width: 300px;
  height: 100px;
  background-color: pink;
  border-radius: 50px;
}
```

實務中也常用一個很大的值：

```css
.pill {
  border-radius: 999px;
}
```

這樣可以讓高度變動時仍維持膠囊形效果。

## box-shadow：設定盒子陰影

`box-shadow` 可以為盒子添加陰影。

![box-shadow 參數值與陰影效果說明表](../../origin/130-盒子模型/assets/images/box-shadow-img-001-533a43.png)

基本語法：

```css
box-shadow: h-shadow v-shadow blur spread color inset;
```

常見參數：

| 參數 | 說明 |
| --- | --- |
| `h-shadow` | 水平偏移，正值往右、負值往左 |
| `v-shadow` | 垂直偏移，正值往下、負值往上 |
| `blur` | 模糊距離，值越大越模糊 |
| `spread` | 陰影尺寸，正值擴大、負值縮小 |
| `color` | 陰影顏色 |
| `inset` | 內陰影，省略時是外陰影 |

例如：

```css
.box {
  width: 100px;
  height: 100px;
  background-color: black;
}

.box:hover {
  box-shadow: 10px 10px 10px -4px #ccc;
}
```

這段會在滑鼠經過 `.box` 時添加陰影。

## 外陰影與內陰影

`box-shadow` 預設是外陰影，不需要寫任何關鍵字。

```css
.card {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
}
```

如果要做內陰影，才使用 `inset`：

```css
.card {
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.2);
}
```

注意：外陰影不能寫成 `outset`。`box-shadow` 沒有 `outset` 這個合法值，寫了反而會讓陰影無效。

## 陰影不佔版面空間

`box-shadow` 只是視覺繪製效果，不會像 `border` 或 `padding` 一樣改變盒子的尺寸，也不會把旁邊的盒子推開。

這代表陰影太大時，可能會在視覺上和周圍元素重疊。必要時要用容器留白、間距或裁切設定處理。

## 常見錯誤

### 誤解：`border-radius: 50%` 一定會得到正圓

只有元素寬高相等時，`50%` 才會形成正圓。寬高不同時會得到橢圓形或圓角矩形效果。

### 誤解：圓角會改變盒模型尺寸

`border-radius` 只改變角的視覺形狀，不會改變盒子的 content、padding、border、margin 計算。

### 誤解：外陰影要寫 `outset`

`box-shadow` 預設就是外陰影，不能寫 `outset`。如果寫入無效值，整條陰影宣告可能失效。

### 誤解：陰影會把其他元素推開

陰影不佔版面空間，不會影響其他盒子的排列。如果視覺上太擠，要另外調整 margin 或容器間距。

## 重點整理

- `border-radius` 用來設定盒子圓角。
- 四值寫法從左上角開始，順時針設定。
- 正方形搭配 `border-radius: 50%` 可以做成圓形。
- `box-shadow` 用來設定盒子陰影，預設為外陰影。
- `box-shadow` 不佔版面空間，且不能使用 `outset`。

## 自我檢查

1. `border-radius: 10px 20px 30px 40px;` 四個值分別對應哪些角？
2. 為什麼寬高不同的元素使用 `border-radius: 50%` 不會是正圓？
3. `box-shadow: 10px 10px 10px -4px #ccc;` 中第三個值代表什麼？
4. 外陰影需要寫 `outset` 嗎？
5. `box-shadow` 會不會影響其他盒子的排列？
