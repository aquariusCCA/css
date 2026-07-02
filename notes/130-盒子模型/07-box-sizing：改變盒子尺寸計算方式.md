---
source_atomic:
  - atomic/130-盒子模型/14-box-sizing-盒模型計算方式.md
---

# box-sizing：改變盒子尺寸計算方式

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `box-sizing` 用來改變什麼計算方式。
- 分辨 `content-box` 和 `border-box` 的差異。
- 使用公式計算兩種盒模型下的實際寬度。
- 理解為什麼專案中常全局設定 `box-sizing: border-box`。
- 避免把 `border-box` 誤解成 padding 和 border 不存在。

## 問題情境

你寫了一個寬度 `200px` 的盒子：

```css
.box {
  width: 200px;
  padding: 15px;
  border: 20px solid red;
}
```

但畫面上的盒子並不是 `200px` 寬，而是變得更大。

這是因為預設盒模型中，`width` 只代表 content 寬度，padding 和 border 會額外加上去。

`box-sizing` 就是用來改變盒子尺寸計算方式的屬性。

## 一句話理解

`box-sizing` 決定 CSS 的 `width` / `height` 是只算 content，還是把 padding 和 border 一起算進去。

常見值有兩個：

- `content-box`
- `border-box`

## content-box：預設盒模型

`content-box` 是預設值。

```css
box-sizing: content-box;
```

在 `content-box` 中：

```text
盒子最終寬度 = width(content) + padding-left + padding-right + border-left + border-right
```

例如：

```css
.box {
  width: 200px;
  padding: 15px;
  border: 20px solid red;
  box-sizing: content-box;
}
```

實際寬度是：

```text
200px + 15px + 15px + 20px + 20px = 270px
```

這就是為什麼加了 padding 和 border 後，盒子會比原本設定的 `width` 更大。

## border-box：寬度包含 padding 和 border

`border-box` 會讓盒子的最終寬度等於 `width`。

```css
box-sizing: border-box;
```

在 `border-box` 中：

```text
盒子最終寬度 = width = content + padding + border
```

例如：

```css
.box {
  width: 200px;
  padding: 15px;
  border: 20px solid red;
  box-sizing: border-box;
}
```

實際寬度仍然是 `200px`。瀏覽器會在這 `200px` 裡面分配 content、padding 和 border。

也就是說，padding 和 border 沒有消失，而是被包含在 `width` 裡。

## 對照範例

```css
* {
  margin: 0;
  padding: 0;
}

.content-box {
  width: 200px;
  height: 200px;
  background-color: pink;
  border: 20px solid red;
  padding: 15px;
  box-sizing: content-box;
}

.border-box {
  width: 200px;
  height: 200px;
  background-color: pink;
  border: 20px solid red;
  padding: 15px;
  box-sizing: border-box;
}
```

```html
<div class="content-box">content-box</div>
<div class="border-box">border-box</div>
```

`.content-box` 會比 `200px` 更大，因為 padding 和 border 額外加上去。

`.border-box` 的總寬高仍是 `200px`，因為 padding 和 border 已包含在 `width` / `height` 內。

## 為什麼常全局設定 border-box

現代專案中常見這種寫法：

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

這樣做的好處是：你設定的 `width` 更接近畫面上盒子的最終大小。

例如卡片寬度要 `320px`，使用 `border-box` 後，即使加上 padding 和 border，卡片總寬仍可保持 `320px`，布局比較好預測。

## 邊界條件

`border-box` 不是魔法。它只是把 padding 和 border 放進 `width` 裡計算。

如果 padding 和 border 太大，content 區域仍可能被擠得很小。

例如：

```css
.box {
  width: 100px;
  padding: 60px;
  border: 10px solid red;
  box-sizing: border-box;
}
```

左右 padding 已經是 `120px`，再加上左右 border `20px`，超過 `width: 100px`，內容區就沒有合理空間。這種寫法仍然需要避免。

## 常見錯誤

### 誤解：`border-box` 會讓 padding 不影響畫面

padding 仍然存在，也仍然會佔據盒子內部空間。只是它不會再把盒子總寬撐大，而是壓縮 content 區域。

### 誤解：`content-box` 是錯的

`content-box` 是 CSS 預設模型，不是錯誤。只是它在實務布局時比較容易讓總尺寸超出預期。

### 誤解：全局設定 `border-box` 後就不用管尺寸

即使使用 `border-box`，仍然要注意 padding、border、內容長度和最小尺寸。它降低計算負擔，但不會自動解決所有布局問題。

## 實務判斷

如果你是初學盒模型，應該先理解 `content-box`，因為它是預設計算方式。

進入實務專案後，通常可以考慮全局使用 `border-box`，讓元件尺寸更容易維護。

推薦順序：

1. 先學懂 `content-box` 如何計算。
2. 再學 `border-box` 如何改變計算方式。
3. 實作專案時視規範決定是否全局套用 `border-box`。

## 重點整理

- `box-sizing` 決定 `width` / `height` 如何計算盒子尺寸。
- `content-box` 是預設值，`width` 只代表 content。
- `border-box` 讓 `width` 包含 content、padding 和 border。
- `border-box` 常用於實務專案，因為總尺寸更容易預測。
- padding 和 border 在 `border-box` 中不會消失，而是佔用 `width` 內部空間。

## 自我檢查

1. `content-box` 下，盒子最終寬度如何計算？
2. `border-box` 下，`width` 包含哪些部分？
3. 一個盒子 `width: 200px`、左右 padding 各 `15px`、左右 border 各 `20px`，`content-box` 下實際寬度是多少？
4. 為什麼很多專案會全局設定 `box-sizing: border-box`？
5. `border-box` 是否代表 padding 和 border 不再存在？
