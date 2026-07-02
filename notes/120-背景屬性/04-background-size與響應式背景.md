---
source_atomic:
  - atomic/120-背景屬性/12-background-size-背景圖片大小.md
  - atomic/120-背景屬性/13-background-size-背景兩倍圖.md
  - atomic/120-背景屬性/14-background-size-響應式背景圖片.md
---

# background-size 與響應式背景圖片

## 學習目標

讀完這篇筆記，你應該能夠：

- 使用 `background-size` 設定背景圖片尺寸。
- 分辨固定長度、百分比、`contain`、`cover` 的差異。
- 理解背景兩倍圖的基本做法。
- 使用比例盒技巧製作響應式背景圖片。

## 問題情境

背景圖片放進元素後，圖片尺寸常常不剛好：可能太小、太大、比例不合，或在不同螢幕寬度下需要跟著縮放。這時只控制位置和平鋪還不夠，還要控制背景圖的大小。

`background-size` 就是用來解決背景圖片尺寸問題的屬性。

## 一句話理解

`background-size` 控制背景圖片在元素中的顯示大小；`cover` 偏向鋪滿容器，`contain` 偏向完整顯示圖片。

## 基本語法

```css
background-size: 背景圖片寬度 背景圖片高度;
```

例如：

```css
.box {
  width: 800px;
  height: 800px;
  background-color: pink;
  background-image: url(./images/logo.png);
  background-repeat: no-repeat;
  background-size: 500px 500px;
}
```

這表示背景圖片以 500px 寬、500px 高顯示。

## 常見取值

| 取值 | 行為 |
| --- | --- |
| `auto` | 使用背景圖片原始大小，預設值 |
| 長度值 | 用固定尺寸指定背景圖大小，不可為負值 |
| 百分比 | 相對背景定位區域計算，不可為負值 |
| `contain` | 等比縮放，讓完整圖片放進容器內，可能留下空白 |
| `cover` | 等比縮放，讓圖片覆蓋整個容器，可能裁掉部分圖片 |

## 單值與雙值寫法

雙值寫法指定寬和高：

```css
.box {
  background-size: 500px 500px;
}
```

單值寫法通常表示指定寬度，高度省略並等比例縮放：

```css
.box {
  background-size: 500px;
}
```

百分比也可以使用：

```css
.box {
  background-size: 50%;
}
```

百分比是相對背景定位區域計算。入門時可以先理解成相對元素背景區域縮放，但在進階場景中，會受到 `background-origin` 等設定影響。

## contain 和 cover 怎麼選

`contain` 會讓完整圖片放進容器內：

```css
.box {
  background-size: contain;
}
```

它的重點是「圖片完整」，代價是容器可能有空白區域。

`cover` 會讓圖片覆蓋整個容器：

```css
.box {
  background-size: cover;
}
```

它的重點是「容器鋪滿」，代價是圖片可能被裁切，無法完整顯示。

可以這樣判斷：

- 圖片必須完整出現：選 `contain`。
- 容器不能留空白：選 `cover`。

## 背景兩倍圖

在高解析螢幕上，為了讓圖片看起來更清晰，常會準備較大的圖片，再用 CSS 縮小顯示。

例如畫面上需要一個 `50px * 50px` 的背景圖，但素材準備 `100px * 100px`，再用 `background-size` 縮放成 `50px * 50px`。

```css
.icon {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  background: url(./images/ldh.jpg) no-repeat;
  background-size: 50px 50px;
}
```

這就是背景兩倍圖的基本思路：素材尺寸比實際顯示尺寸大，顯示時縮小，讓畫面更清楚。

## 響應式背景圖片

背景圖片不會像 `img` 一樣自動撐開元素高度。若想做響應式背景區塊，常見做法是用垂直方向的 `padding-top` 撐出比例。

計算方式：

```text
padding-top = (圖片高度 / 圖片寬度) * 100%
```

例如圖片寬度是 640px、高度是 419px：

```text
419 / 640 * 100% = 65.46%
```

可以寫成：

```css
.column {
  max-width: 640px;
}

.figure {
  padding-top: 65.46%;
  background: url(./images/ldh.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}
```

```html
<div class="column">
  <div class="figure"></div>
</div>
```

這樣 `.figure` 的高度會跟著寬度等比例變化，而背景圖用 `cover` 填滿區塊，並用 `background-position: center` 讓裁切盡量從中央開始。

## 常見錯誤

### 以為 cover 會完整顯示圖片

`cover` 的目標是鋪滿容器，不是完整保留圖片。當圖片比例和容器比例不同時，圖片可能被裁切。

### 以為 contain 會填滿容器

`contain` 的目標是完整放入圖片，所以容器可能出現空白。若不能接受空白，應考慮 `cover`。

### 忘記背景圖片不會撐開元素

背景圖只是裝飾，不會決定元素高度。響應式背景常需要額外用 `height`、`aspect-ratio` 或 `padding-top` 讓容器有尺寸。

## 實務判斷準則

- 指定固定顯示大小：使用長度值，例如 `500px 500px`。
- 依容器比例縮放：使用百分比。
- 圖片要完整出現：使用 `contain`。
- 區塊要被鋪滿：使用 `cover`。
- 高清小圖示：準備較大素材，再用 `background-size` 縮小。
- 響應式背景：先讓容器有比例，再控制背景 `cover` 與 `position`。

## 重點整理

- `background-size` 控制背景圖片的顯示大小。
- 單值通常指定寬度，高度等比例縮放。
- `contain` 完整顯示圖片但可能留白。
- `cover` 填滿容器但可能裁切圖片。
- 響應式背景需要先處理容器尺寸，背景圖本身不會撐開元素。

## 自我檢查

1. `background-size: 500px;` 只寫一個值時，通常代表什麼？
2. `contain` 和 `cover` 的取捨差異是什麼？
3. 如果畫面需要顯示 50px 圖示，但素材準備 100px 圖片，應如何用 `background-size`？
4. 為什麼響應式背景區塊常需要用 `padding-top` 或其他方法撐出高度？
