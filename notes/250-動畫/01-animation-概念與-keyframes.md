---
source_atomic:
  - atomic/250-動畫/01-CSS動畫概念與製作流程.md
  - atomic/250-動畫/02-keyframes定義與動畫基本使用.md
  - atomic/250-動畫/03-動畫序列與百分比節點.md
topics: [animation, CSS 動畫, "@keyframes", 動畫序列, 百分比節點]
summary: "說明 animation 與 transition 的差異，以及如何用 @keyframes 定義多節點動畫。"
---

# animation 概念與 keyframes 基礎

## 學習目標

讀完這篇筆記後，你應該能夠：

- 說明 CSS 動畫和過渡效果的差異。
- 理解動畫由多個狀態節點組成。
- 使用 `@keyframes` 定義動畫。
- 用 `animation-name`、`animation-duration` 或 `animation` 呼叫動畫。
- 看懂 `from` / `to` 與百分比節點的關係。

## 問題情境

如果只是讓按鈕 hover 時變色，`transition` 通常就夠了。它很適合處理「兩個狀態之間」的平滑變化。

但如果你希望元素自動移動、重複播放、經過多個位置，或在不同時間點有不同樣式，`transition` 就不夠精細。這時就需要 CSS 動畫，也就是 `animation` 搭配 `@keyframes`。

## 一句話理解

CSS 動畫是把一段時間切成多個節點，讓元素依照這些節點逐步改變樣式。

動畫的本質可以想成「連續切換很多畫面」。每一個畫面稱為幀，瀏覽器快速播放這些狀態時，人眼就會感覺到連續動作。

## 過渡與動畫的差異

| 比較項目 | transition | animation |
| --- | --- | --- |
| 適合情境 | 兩個狀態之間的變化 | 多個狀態或可自動播放的變化 |
| 是否需要觸發 | 通常需要 hover、focus 等狀態改變 | 可以自動播放，也可以搭配互動 |
| 控制程度 | 較簡單 | 可控制節點、次數、方向、延遲、結束狀態 |
| 常見用途 | 按鈕 hover、卡片放大、顏色淡入 | 載入動畫、輪播跑馬燈、角色移動、多段效果 |

可以先用這個判斷：

- 只有起點和終點，優先考慮 `transition`。
- 有多個節點、重複播放或自動播放，考慮 `animation`。

## 製作動畫的兩個步驟

CSS 動畫通常分成兩步：

1. 用 `@keyframes` 定義動畫內容。
2. 在元素上使用或呼叫這個動畫。

定義動畫只是在告訴瀏覽器：「這段動畫有哪些狀態」。如果沒有把動畫套用到元素上，畫面不會動。

## 用 @keyframes 定義動畫

最簡單的動畫只有起點與終點，可以用 `from` 和 `to`：

```css
@keyframes change-width {
  from {
    width: 50px;
  }

  to {
    width: 200px;
  }
}
```

`from` 等同於 `0%`，代表動畫開始；`to` 等同於 `100%`，代表動畫結束。

也可以改寫成百分比：

```css
@keyframes change-width {
  0% {
    width: 50px;
  }

  100% {
    width: 200px;
  }
}
```

百分比表示「動畫總時間中的位置」，不是像素，也不是秒數。假設動畫總長是 `2s`，`50%` 就代表播放到第 `1s` 的狀態。

## 呼叫動畫

定義好 `@keyframes` 後，需要在元素上指定動畫名稱與持續時間：

```css
.box:hover {
  animation-name: change-width;
  animation-duration: 2s;
}
```

也可以使用簡寫：

```css
.box:hover {
  animation: change-width 2s;
}
```

這代表 `.box` 在 hover 時播放 `change-width` 動畫，整段動畫花 `2s` 完成。

## 基本動畫範例

```css
.box {
  width: 50px;
  height: 50px;
  background-color: skyblue;
}

.box:hover {
  animation: change-width 2s;
}

@keyframes change-width {
  from {
    width: 50px;
  }

  to {
    width: 200px;
  }
}
```

```html
<body>
  <div class="box"></div>
</body>
```

## 範例拆解

- `.box`：設定元素原本的寬高與背景色。
- `.box:hover`：滑鼠移入時呼叫動畫。
- `animation: change-width 2s;`：播放名稱為 `change-width` 的動畫，持續 `2s`。
- `@keyframes change-width`：定義動畫每個階段的樣式。
- `from`：動畫開始時寬度是 `50px`。
- `to`：動畫結束時寬度變成 `200px`。

如果只有寫 `@keyframes change-width`，但沒有在 `.box` 上寫 `animation-name` 或 `animation`，動畫不會播放。

## 多節點動畫序列

動畫可以不只起點和終點，也可以加入多個百分比節點：

```css
@keyframes move {
  0% {
    transform: translate(0, 0);
  }

  25% {
    transform: translate(1000px, 0);
  }

  50% {
    transform: translate(1000px, 500px);
  }

  75% {
    transform: translate(0, 500px);
  }

  100% {
    transform: translate(0, 0);
  }
}

div {
  width: 200px;
  height: 200px;
  background-color: pink;
  animation-name: move;
  animation-duration: 10s;
}
```

這段動畫把 `10s` 分成多個節點：

- `0%`：在原點。
- `25%`：移到右側。
- `50%`：移到右下。
- `75%`：移到左下。
- `100%`：回到原點。

這種由多個百分比節點構成的規則，就是動畫序列。

## 常見錯誤

### 只定義 keyframes，沒有呼叫動畫

```css
@keyframes move {
  to {
    transform: translateX(200px);
  }
}
```

這樣只是定義動畫，不會讓任何元素播放。要把動畫套用到元素上：

```css
.box {
  animation: move 2s;
}
```

### 只寫動畫名稱，忘記持續時間

```css
.box {
  animation-name: move;
}
```

`animation-duration` 的預設值是 `0s`，所以動畫會像沒有播放一樣。應補上非 `0s` 的時間：

```css
.box {
  animation-name: move;
  animation-duration: 2s;
}
```

### 誤解百分比節點

`50%` 不是移動 50%，也不是 50 秒。它代表動畫播放到整段時間一半時的狀態。真正移動多少，取決於該節點裡寫的 CSS。

## 實務判斷準則

- 動畫開始前，先想清楚「有哪些狀態節點」。
- 只有起點與終點時，可以用 `from` / `to`。
- 有三個以上狀態時，用 `0%`、`50%`、`100%` 等百分比節點更清楚。
- 定義動畫後，一定要在元素上呼叫動畫。
- 至少要指定動畫名稱與非 `0s` 的持續時間，動畫才會可見。

## 重點整理

- CSS 動畫適合處理多狀態、自動播放或可重複播放的效果。
- 動畫製作分成兩步：先 `@keyframes` 定義，再用 `animation` 呼叫。
- `from` / `to` 等同於 `0%` / `100%`。
- 百分比節點代表動畫總時長中的時間位置。
- 只寫 `@keyframes` 不會自動播放，必須套用到元素上。

## 自我檢查

1. `transition` 和 `animation` 最核心的使用差異是什麼？
2. 為什麼只寫 `@keyframes` 不會讓畫面動起來？
3. `from` 和 `to` 分別等同於哪兩個百分比？
4. 如果動畫總長是 `4s`，`50%` 節點代表第幾秒的狀態？
5. 為什麼只寫 `animation-name`，但沒有寫 `animation-duration`，通常看不到動畫？
