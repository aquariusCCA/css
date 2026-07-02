---
source_atomic:
  - atomic/260-Flex布局/12-flex-grow導覽列應用.md
  - atomic/260-Flex布局/14-flex簡寫屬性.md
---

# flex 簡寫與常見布局應用

## 學習目標

- 理解 `flex` 是 `flex-grow`、`flex-shrink`、`flex-basis` 的簡寫。
- 正確解讀 `flex: 1`。
- 使用 Flex 實作導覽列平均分配。
- 使用 `flex: 1` 完成左右固定、中間自適應布局。

## 問題情境

實務上很少每次都完整寫：

```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
```

你更常看到：

```css
.item {
  flex: 1;
}
```

但 `flex: 1` 不是只代表 `flex-grow: 1`，它是一組簡寫。

## 一句話理解

`flex` 是控制項目放大、縮小與初始主軸尺寸的簡寫，常用來快速分配可用空間。

## flex 語法

```css
.item {
  flex: flex-grow flex-shrink flex-basis;
}
```

常見值：

| 寫法 | 大致含義 |
| --- | --- |
| `flex: 1` | 常見瀏覽器中近似 `1 1 0%`，用於按比例分配 |
| `flex: auto` | `1 1 auto` |
| `flex: none` | `0 0 auto` |
| `flex: 1 0 120px` | 可放大、不壓縮，初始主軸尺寸 120px |

## 導覽列平均分配

```html
<nav class="container">
  <a class="item" href="#">新闻</a>
  <a class="item" href="#">视频</a>
  <a class="item" href="#">图片</a>
  <a class="item" href="#">军事</a>
</nav>
```

```css
.container {
  display: flex;
  align-items: center;
  height: 44px;
  background-color: #1479d7;
}

.item {
  flex-grow: 1;
  color: white;
  text-align: center;
  text-decoration: none;
}
```

![使用 flex-grow 讓導覽列項目平均分配寬度](../../origin/260-Flex布局/assets/images/flex-item-properties-img-006-5b9d3d.png)

這裡每個連結都是 flex item，`flex-grow: 1` 讓它們平均分配剩餘空間。

## 左右固定，中間自適應

```css
section {
  display: flex;
  width: 60%;
  height: 150px;
  background-color: pink;
  margin: 0 auto;
}

section div:nth-child(1),
section div:nth-child(3) {
  width: 100px;
}

section div:nth-child(2) {
  flex: 1;
}
```

![使用 flex: 1 讓中間欄填滿剩餘寬度](../../origin/260-Flex布局/assets/images/flex-item-properties-img-008-bdb8dc.png)

左右欄固定 `100px`，中間欄使用 `flex: 1`，就會吃掉剩餘寬度。

## 不同比例分配

```css
.box-wrap {
  width: 500px;
  margin: 0 auto;
  display: flex;
  height: 200px;
  border: 1px solid #666;
}

.box-1 {
  width: 100px;
}

.box-2 {
  flex: 3;
}

.box-3 {
  flex: 1;
}
```

```html
<div class="box-wrap">
  <div class="box box-1"></div>
  <div class="box box-2"></div>
  <div class="box box-3"></div>
</div>
```

這表示 `.box-2` 和 `.box-3` 分配剩餘空間時，比例是 `3 : 1`。

## 常見錯誤

### 以為 flex: 1 只設定 flex-grow

`flex: 1` 是簡寫，通常還會影響 `flex-shrink` 和 `flex-basis`。因此它和單獨寫 `flex-grow: 1` 不完全相同。

### 忘記固定欄也會佔空間

做左右固定、中間自適應時，要先扣掉固定欄，再讓中間欄分剩餘空間。

### 導覽列只設定 flex，忘記文字對齊

`flex-grow` 讓每個 `<a>` 變寬，但文字是否置中仍要靠 `text-align: center` 或其他對齊方式處理。

## 重點整理

- `flex` 是 grow、shrink、basis 的簡寫。
- `flex: 1` 常用於讓項目按比例分配空間。
- 導覽列平均分配可用 `flex-grow: 1` 或適當的 `flex`。
- 左右固定、中間自適應是 Flex 的典型場景。

## 自我檢查

1. `flex` 簡寫包含哪三個屬性？
2. `flex: 1` 和只寫 `flex-grow: 1` 完全一樣嗎？
3. 左右固定、中間自適應時，中間欄通常應設定什麼？
