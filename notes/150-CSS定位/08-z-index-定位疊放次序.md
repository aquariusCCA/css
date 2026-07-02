---
source_atomic:
  - atomic/150-CSS定位/13-z-index-定位疊放次序.md
---

# z-index：定位疊放次序

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `z-index` 用來控制重疊元素的前後次序。
- 正確使用 `z-index` 數值，不加單位。
- 理解 `z-index` 主要作用於定位元素，也可作用於 flex 或 grid item。
- 知道相同 `z-index` 時，通常後寫的元素會在上方。

## 使用情境

使用定位布局時，盒子很容易重疊。例如彈窗要蓋在遮罩上，角標要蓋在圖片上，固定工具列要蓋在內容上。這時就需要控制誰在前、誰在後。

`z-index` 就是用來控制元素在 z 軸上的疊放次序。

## 一句話理解

`z-index` 的數值越大，元素通常越靠近觀察者，也就越容易顯示在上方。

## 基本語法

```css
.box {
  position: absolute;
  z-index: 1;
}
```

注意：`z-index` 的數字後面不能加單位。

```css
/* 錯誤 */
.box {
  position: absolute;
  z-index: 10px;
}
```

```css
/* 正確 */
.box {
  position: absolute;
  z-index: 10;
}
```

## z-index 的基本規則

常見規則如下：

- 數值可以是正整數、負整數或 `0`。
- 預設值是 `auto`。
- 數值越大，盒子通常越靠上。
- 如果值相同，通常依書寫順序後來居上。
- `z-index` 主要作用於定位元素，也可作用於 flex 或 grid item。
- 普通非定位元素設定 `z-index`，通常不會產生預期的堆疊效果。

## 範例拆解

```css
.box {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
}

.xiongda {
  background-color: red;
  z-index: 1;
}

.xionger {
  background-color: green;
  left: 50px;
  top: 50px;
  z-index: 2;
}

.qiangge {
  background-color: blue;
  left: 100px;
  top: 100px;
}
```

```html
<body>
  <div class="box xiongda">熊大</div>
  <div class="box xionger">熊二</div>
  <div class="box qiangge">光头强</div>
</body>
```

拆解：

- 三個元素都有 `position: absolute`，因此可用 `z-index` 控制疊放。
- `.xionger` 的 `z-index: 2` 大於 `.xiongda` 的 `z-index: 1`，所以 `.xionger` 會在 `.xiongda` 上方。
- `.qiangge` 沒有設定 `z-index`，預設是 `auto`；它與其他元素的實際前後關係會受預設堆疊規則與書寫順序影響。

## 相同值時的後來居上

如果兩個定位元素的 `z-index` 相同，後出現在 HTML 中的元素通常會蓋在先出現的元素上。

```html
<div class="box one"></div>
<div class="box two"></div>
```

```css
.one,
.two {
  position: absolute;
  z-index: 1;
}
```

在沒有其他層疊上下文干擾時，`.two` 通常會在 `.one` 上方。

## 層疊上下文的提醒

`z-index` 不只是單純比全頁數字大小。元素所處的層疊上下文也會影響結果。這篇先掌握入門規則：定位元素、數值大小、相同值時的書寫順序。

當你發現 `z-index: 9999` 仍然蓋不上某個元素時，通常就要回頭檢查層疊上下文，而不是繼續盲目加大數字。

## 常見錯誤

### 在普通元素上設定 z-index 卻期待生效

```css
.box {
  z-index: 10;
}
```

如果 `.box` 不是定位元素，也不是符合條件的 flex/grid item，這個 `z-index` 通常不會產生預期效果。常見修正是讓它成為定位元素：

```css
.box {
  position: relative;
  z-index: 10;
}
```

### 數字後面加單位

`z-index` 是層級數字，不是長度，不能寫 `px`、`rem` 等單位。

### 一味把數字加很大

如果堆疊問題來自層疊上下文，單純把數字加大不一定有用。應先確認元素是否在同一個可比較的堆疊環境中。

## 實務判斷準則

- 需要控制疊放前後時，再使用 `z-index`。
- 設定 `z-index` 前，確認元素是否是定位元素或符合條件的 flex/grid item。
- 層級值應有規劃，不要隨手寫超大數字。
- 相同層級元素重疊時，要注意 HTML 書寫順序。

## 重點整理

- `z-index` 控制元素在 z 軸上的疊放次序。
- 數值越大，通常越靠上。
- `z-index` 數字不加單位。
- 它主要作用於定位元素，也可作用於 flex/grid item。
- 相同值時，通常後寫元素在上。
- 進階情況還會受層疊上下文影響。

## 自我檢查

1. `z-index: 10px` 錯在哪裡？
2. 為什麼普通非定位元素設定 `z-index` 可能沒有效果？
3. 兩個定位元素 `z-index` 都是 `1` 時，通常誰會在上方？
4. 如果 `z-index: 9999` 仍蓋不上另一個元素，可能要檢查什麼？
