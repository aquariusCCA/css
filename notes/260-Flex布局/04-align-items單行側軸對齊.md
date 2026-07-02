---
source_atomic:
  - atomic/260-Flex布局/05-align-items單行側軸對齊.md
topics:
  - align-items
  - 側軸對齊
  - 單行對齊
  - stretch
  - baseline
summary: "說明 align-items 如何控制單行項目在側軸上的對齊，並釐清 stretch 生效條件。"
---

# align-items 單行側軸對齊

## 學習目標

- 使用 `align-items` 控制項目在側軸上的對齊。
- 分辨 `flex-start`、`flex-end`、`center`、`baseline`、`stretch`。
- 理解 `stretch` 的生效條件。
- 分辨單行側軸對齊與多行整體對齊。

## 使用情境

當一列 Flex 項目高度不同，或父容器比項目高時，你需要決定項目沿側軸靠上、靠下、置中或拉伸。這就是 `align-items` 的工作。

## 一句話理解

`align-items` 控制每一條 flex line 內，項目在側軸上的對齊方式。

## 常用值

| 值 | 效果 |
| --- | --- |
| `flex-start` | 靠側軸起點 |
| `flex-end` | 靠側軸終點 |
| `center` | 側軸置中 |
| `baseline` | 依第一行文字基線對齊 |
| `stretch` | 項目側軸尺寸為 `auto` 時拉伸，預設值 |

![align-items: center 讓項目沿側軸置中排列](../../origin/260-Flex布局/assets/images/flex-container-properties-img-012-bc16e3.png)

![align-items: stretch 讓項目沿側軸方向撐滿容器](../../origin/260-Flex布局/assets/images/flex-container-properties-img-014-44729a.png)

## 範例拆解

```css
.box-wrap {
  width: 500px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  border: 1px solid #666;
}

.box {
  width: 100px;
  background-color: skyblue;
}

.center {
  align-items: center;
}

.stretch {
  align-items: stretch;
}
```

在預設 `flex-direction: row` 時：

- 主軸是水平。
- 側軸是垂直。
- `align-items: center` 會讓項目垂直置中。
- `align-items: stretch` 會嘗試讓項目高度撐滿容器。

## stretch 的限制

`stretch` 只有在項目的側軸尺寸是 `auto` 時才明顯生效。

如果你已經寫了：

```css
.box {
  height: 100px;
}
```

那麼項目側軸尺寸已被固定，`stretch` 就不會把它拉到父容器高度。

## 常見錯誤

### 已設定高度卻期待 stretch 撐滿

`stretch` 不是強制覆蓋高度。要讓它拉伸，項目在側軸上的尺寸通常要保持 `auto`。

### 把 align-items 當成只支援單行

`align-items` 在多行中也會影響每一行內的項目對齊；只是多行彼此之間的整體分布要看 `align-content`。

### 忘記側軸會隨 flex-direction 改變

`column` 狀態下，側軸變成水平方向，`align-items` 控制的也會是水平對齊。

## 實務判斷

- 單行垂直置中：常用 `align-items: center`。
- 需要所有項目高度貼齊容器：確認未固定項目高度，再用 `stretch`。
- 只有某一個項目要不同對齊：用項目屬性 `align-self`。

## 重點整理

- `align-items` 控制側軸對齊。
- 在預設 `row` 中，它常表現為垂直對齊。
- `stretch` 需要項目側軸尺寸為 `auto` 才容易生效。
- 多行整體行距分布要看 `align-content`。

## 自我檢查

1. `align-items: center` 在預設 `row` 中控制哪個方向？
2. 為什麼項目有固定高度時，`stretch` 可能看不出效果？
3. 只想調整某一個 item 的側軸對齊時，應該用什麼屬性？
