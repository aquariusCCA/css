---
source_atomic:
  - atomic/260-Flex布局/04-justify-content主軸對齊.md
topics:
  - justify-content
  - 主軸對齊
  - 剩餘空間分配
  - space-between
  - space-evenly
summary: "說明 justify-content 如何在主軸上分配剩餘空間，並比較常見間距值。"
---

# justify-content 主軸對齊

## 學習目標

- 使用 `justify-content` 控制主軸上的項目排列。
- 分辨 `center`、`space-between`、`space-around`、`space-evenly` 的間距差異。
- 理解 `justify-content` 的方向會受到 `flex-direction` 影響。
- 能依照版面需求選擇合適的主軸對齊方式。

## 使用情境

當 Flex 項目沒有佔滿整個主軸時，剩餘空間要放在哪裡，就是 `justify-content` 要處理的問題。

例如導覽列項目要置中、左右兩端對齊、或每個項目之間平均留白，都可以使用它。

## 一句話理解

`justify-content` 控制 Flex 項目在主軸上的排列方式，以及主軸剩餘空間如何分配。

## 常用值

| 值 | 效果 |
| --- | --- |
| `flex-start` | 靠主軸起點，預設值 |
| `flex-end` | 靠主軸終點 |
| `center` | 主軸置中 |
| `space-between` | 第一個貼起點，最後一個貼終點，中間平均分配 |
| `space-around` | 每個項目左右都有相同空間，兩端距離是中間距離的一半 |
| `space-evenly` | 所有間距完全相等，包含兩端 |

![justify-content: flex-start 讓項目靠主軸起點排列](../../origin/260-Flex布局/assets/images/flex-container-properties-img-004-4a89f1.png)

![justify-content: center 讓項目置中排列](../../origin/260-Flex布局/assets/images/flex-container-properties-img-006-076533.png)

![justify-content: space-between 讓項目貼齊兩端並平均分配中間間距](../../origin/260-Flex布局/assets/images/flex-container-properties-img-008-555829.png)

![justify-content: space-evenly 讓項目與容器邊界間距相等](../../origin/260-Flex布局/assets/images/flex-container-properties-img-009-2e6236.png)

## 範例拆解

```css
.box-wrap {
  display: flex;
  width: 500px;
  border: 1px solid #eee;
}

.box {
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-color: skyblue;
}

.box-center {
  justify-content: center;
}

.box-between {
  justify-content: space-between;
}

.box-around {
  justify-content: space-around;
}

.box-evenly {
  justify-content: space-evenly;
}
```

如果容器寬 `500px`，三個項目各 `100px`，剩餘空間就是 `200px`。不同值的差異，就是這 `200px` 放在何處。

## 常見錯誤

### 混淆 space-around 與 space-evenly

`space-around` 是每個項目兩側各有一份空間，所以兩個項目中間會疊成兩份，兩端只有一份。`space-evenly` 則是兩端和中間完全等距。

### 忘記主軸會變

若 `flex-direction: column`，`justify-content` 控制的是垂直方向，不再是水平。

### 項目已經填滿主軸仍期待分散效果

如果項目總尺寸剛好填滿容器，沒有剩餘空間可分配，`justify-content` 的可見效果就會很小或沒有。

## 實務判斷

- 只想置中：`center`。
- 兩端貼齊，中間平均：`space-between`。
- 每個項目周圍都有呼吸空間：`space-around`。
- 所有間距完全一致：`space-evenly`。

## 重點整理

- `justify-content` 控制主軸對齊。
- 它本質上是在分配主軸剩餘空間。
- 判斷效果前要先知道目前主軸方向。
- `space-around` 與 `space-evenly` 的兩端距離不同。

## 自我檢查

1. `justify-content` 控制主軸還是側軸？
2. `space-between` 的兩端會留空嗎？
3. `space-around` 和 `space-evenly` 最大差異是什麼？
