---
source_atomic:
  - atomic/130-盒子模型/13-margin-負值運用.md
topics: [負 margin, 邊框重疊, hover 狀態, position, z-index]
summary: "說明負 margin 處理相鄰邊框重疊與 hover 層級問題。"
---

# margin 負值：讓相鄰邊框重疊

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解負 `margin` 會讓元素往相反方向移動。
- 使用 `margin-left: -1px` 解決相鄰邊框變粗的視覺問題。
- 說明 hover 時為什麼需要提高目前盒子的層級。
- 分辨沒有定位時用 `position: relative`，已有定位時用 `z-index` 的差異。

## 問題情境

假設你有一排商品卡片，每個卡片都有 `1px` 邊框。

如果卡片並排緊貼，兩個卡片相鄰處會變成：

```text
左邊卡片右邊框 1px + 右邊卡片左邊框 1px = 2px
```

視覺上中間線會比外側邊框粗。

![使用負 margin 讓相鄰盒子邊框重疊的示意圖](../../origin/130-盒子模型/assets/images/box-margin-img-003-e9cdd1.png)

這時可以用負 margin 讓相鄰邊框重疊，讓中間線看起來仍然是 `1px`。

## 一句話理解

負 `margin` 可以讓元素往相反方向移動，常用來讓相鄰盒子的邊框互相壓住。

正數 margin 會把元素往外推開；負數 margin 則會把元素拉近，甚至產生重疊。

## 基本做法

假設多個 `li` 並排，每個都有 `1px` 邊框：

```css
ul li {
  float: left;
  list-style: none;
  width: 150px;
  height: 200px;
  border: 1px solid red;
  margin-left: -1px;
}
```

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>
```

`margin-left: -1px` 會讓每個盒子往左移動 `1px`，剛好壓住前一個盒子的右邊框。

## 為什麼 hover 時會有層級問題

常見互動是滑鼠經過卡片時改變邊框顏色：

```css
ul li:hover {
  border: 1px solid blue;
}
```

但因為相鄰盒子有重疊，hover 的藍色邊框可能被旁邊盒子壓住，看起來不完整。

解法是讓目前 hover 的盒子層級提高，蓋在相鄰盒子上。

## 沒有定位時：加 relative

如果盒子原本沒有定位，可以在 hover 時加相對定位：

```css
ul li {
  float: left;
  list-style: none;
  width: 150px;
  height: 200px;
  border: 1px solid red;
  margin-left: -1px;
}

ul li:hover {
  position: relative;
  border: 1px solid blue;
}
```

`position: relative` 會讓元素成為定位元素，使它在重疊時更容易被提升到上層顯示。

## 已有定位時：用 z-index

如果每個 `li` 已經有定位，可以直接在 hover 時提高 `z-index`：

```css
ul li {
  position: relative;
  float: left;
  list-style: none;
  width: 150px;
  height: 200px;
  border: 1px solid red;
  margin-left: -1px;
}

ul li:hover {
  z-index: 1;
  border: 1px solid blue;
}
```

`z-index` 只對定位元素有效，因此如果元素沒有定位，直接寫 `z-index` 通常不會達到預期。

## 常見錯誤

### 誤解：負 margin 只是讓元素消失

負 margin 不會讓元素消失，它會改變元素和周圍空間的關係。用得好可以解決細線重疊，用不好也可能造成元素互相覆蓋。

### 誤解：只要加 `margin-left: -1px`，hover 邊框就一定正常

負 margin 只處理相鄰邊框變粗的問題。hover 邊框如果被相鄰元素壓住，還需要提高目前元素的層級。

### 誤解：`z-index` 隨便寫都有效

`z-index` 通常需要配合定位元素使用。若元素沒有 `position`，要先設定 `position: relative`。

## 實務判斷

負 margin 適合小範圍、可預期的視覺修正，例如 `1px` 邊框重疊。

不適合用負 margin 大量調整整體版面，因為它會讓元素之間的實際關係變得不直觀。若只是想控制一般間距，優先使用正常 margin、padding 或布局方式。

## 重點整理

- 負 margin 會讓元素往相反方向移動。
- `margin-left: -1px` 可用來讓相鄰 `1px` 邊框重疊。
- hover 邊框可能需要提高層級才不會被相鄰元素蓋住。
- 沒有定位時可在 hover 加 `position: relative`。
- 已有定位時可用 `z-index` 提升目前元素。

## 自我檢查

1. 為什麼兩個都有 `1px` 邊框的盒子緊貼時，中間線看起來會變粗？
2. `margin-left: -1px` 在這個案例中解決了什麼問題？
3. hover 邊框被旁邊盒子壓住時，為什麼需要提高層級？
4. 為什麼只寫 `z-index: 1` 不一定有效？
