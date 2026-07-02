---
source_atomic:
  - atomic/150-CSS定位/06-absolute-絕對定位盒子居中.md
  - atomic/150-CSS定位/07-子絕父相.md
---

# absolute 居中與子絕父相

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明為什麼絕對定位盒子不能只靠普通流中的 `margin: 0 auto` 完成一般置中。
- 使用 `left: 50%` 搭配負 margin 或 `transform` 理解絕對定位居中。
- 說明「子絕父相」的意思與用途。
- 避免絕對定位子元素因為缺少定位父級而跑到錯誤位置。

## 問題情境

你常會遇到這類需求：

- 把播放按鈕放在圖片正中央。
- 把標籤放到商品卡片右上角。
- 把關閉按鈕放到彈窗右上角。

這些元素通常不應該佔用普通流位置，而是應該疊在父盒子內。這時就會用到絕對定位與「子絕父相」。

## 一句話理解

子絕父相就是子元素用 `absolute` 脫標定位，父元素用 `relative` 保留版面並提供定位參照。

## 為什麼絕對定位盒子不能只靠 `margin: 0 auto`

普通流中的 block 元素可以靠明確寬度與 `margin: 0 auto` 水平置中。但絕對定位元素已經脫離文檔流，它的位置主要由定位參照與邊偏移決定。

因此絕對定位的居中通常要先用邊偏移把元素推到父容器中心附近，再把元素自身拉回一半。

## 方式一：`left: 50%` 搭配負 margin

當盒子寬高明確時，可以使用負 margin：

```css
.box {
  position: absolute;
  left: 50%;
  margin-left: -100px;
  top: 50%;
  margin-top: -100px;
  width: 200px;
  height: 200px;
  background-color: pink;
}
```

拆解：

- `left: 50%`：讓盒子的左邊走到父容器水平中心。
- `margin-left: -100px`：盒子向左移動自身寬度的一半。
- `top: 50%`：讓盒子的上邊走到父容器垂直中心。
- `margin-top: -100px`：盒子向上移動自身高度的一半。

這種方式的前提是你知道盒子的寬高，才能計算負 margin。

## 方式二：`transform` 居中

若不想手動計算寬高的一半，常見現代寫法是：

```css
.box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

`translate(-50%, -50%)` 的百分比是相對元素自身尺寸，因此不需要事先知道盒子的精確寬高。這是實務中很常見的絕對定位居中方式。

## 水平居中的補充做法

若盒子有明確寬度，也可以用左右偏移搭配 auto margin 做水平居中：

```css
.box {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 200px;
}
```

這種寫法只處理水平置中；垂直方向仍需其他方式。

## 子絕父相的結構

子絕父相的典型寫法：

```css
.card {
  position: relative;
}

.badge {
  position: absolute;
  top: 0;
  right: 0;
}
```

```html
<div class="card">
  <span class="badge">NEW</span>
</div>
```

拆解：

- `.card` 使用相對定位，仍保留在普通流裡。
- `.badge` 使用絕對定位，脫標後放到 `.card` 的右上角。
- 因為 `.card` 是最近定位祖先，`.badge` 會以 `.card` 為參照。

## 為什麼父級常用 relative

父級需要在頁面中正常佔位，不能因為提供定位參照就脫標。`relative` 剛好符合這個需求：

- 它會讓父級成為定位祖先。
- 它不會讓父級脫離文檔流。
- 不設定邊偏移時，父級視覺位置不變。

因此「父相」不是為了移動父盒子，而是為了提供參照。

## 常見錯誤

### 只寫子元素 absolute，忘記父級定位

```css
.badge {
  position: absolute;
  top: 0;
  right: 0;
}
```

如果父盒子沒有定位，`.badge` 可能會找到更外層的定位祖先，位置就不在你預期的卡片內。應補上：

```css
.card {
  position: relative;
}
```

### 用負 margin 居中但盒子尺寸改了

如果寬高從 `200px` 改成 `240px`，`margin-left: -100px` 就不再是一半。這時要同步調整負 margin，或改用 `transform`。

### 把父級也設成 absolute

父級如果也脫標，可能影響整個版面。除非你確定父級也需要脫離文檔流，否則父級通常用 `relative`。

## 實務判斷準則

- 卡片角標、遮罩按鈕、彈窗關閉鈕：常用子絕父相。
- 已知盒子寬高：可用 `left: 50%` 加負 margin。
- 不確定盒子寬高：優先考慮 `transform: translate(-50%, -50%)`。
- 父級只是提供參照時，用 `position: relative` 且不設定偏移。

## 重點整理

- 絕對定位元素的位置由參照點與邊偏移決定。
- `left: 50%` 會把元素邊緣推到中心，不是讓整個元素置中。
- 負 margin 或 `transform` 可以把元素自身拉回一半。
- 子絕父相：子元素 absolute，父元素 relative。
- 父級使用 relative 是為了保留版面位置並提供定位參照。

## 自我檢查

1. `left: 50%` 後，為什麼還需要負 margin 或 `transform`？
2. 子絕父相中的「父相」通常是為了移動父元素嗎？
3. 如果絕對定位角標跑到頁面左上角附近，可能少了什麼設定？
4. 已知盒子寬高與未知盒子寬高時，居中寫法可以怎麼選？
