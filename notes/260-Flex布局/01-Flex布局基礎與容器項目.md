---
source_atomic:
  - atomic/260-Flex布局/01-Flex彈性布局與基本原理.md
  - atomic/260-Flex布局/02-Flex容器屬性總覽.md
topics:
  - Flex 布局
  - Flex 容器
  - Flex 項目
  - 容器屬性
  - 項目屬性
summary: "說明 Flex 如何由父容器控制直接子項目的排列、對齊與空間分配。"
---

# Flex 布局基礎與容器項目

## 學習目標

- 理解 Flex 布局用來解決什麼版面問題。
- 分辨 Flex 容器與 Flex 項目。
- 知道哪些屬性設定在父元素，哪些行為影響子元素。
- 建立後續學習主軸、側軸、對齊與空間分配的基本心智模型。

## 問題情境

傳統布局常需要搭配標準流、浮動、定位與手動間距，才能讓幾個子盒子排列整齊。當需求變成「平均分配寬度」「一列置中」「子項自動填滿剩餘空間」時，傳統寫法會變得繁瑣。

Flex 布局的核心價值，是讓父元素直接控制子元素的排列、對齊與空間分配。

![傳統布局與 flex 彈性布局差異比較表](../../origin/260-Flex布局/assets/images/flex-introduction-img-001-3c443d.png)

## 一句話理解

Flex 布局就是在父元素上開啟彈性容器，然後用容器與項目屬性控制子元素如何排列。

## 容器與項目

開啟 Flex 的元素稱為 Flex 容器：

```css
.container {
  display: flex;
}
```

容器的直接子元素會自動成為 Flex 項目。

![Flex 容器、flex 項目與主軸方向示意圖](../../origin/260-Flex布局/assets/images/flex-layout-basics-img-001-20d356.png)

需要特別注意：

- 只有直接子元素是 flex item，孫元素不是。
- 一個元素可以同時是外層容器的項目，也可以自己再設定 `display: flex` 成為內層容器。
- 當子元素成為 flex item 後，`float`、`clear`、`vertical-align` 對它們的傳統效果會失效或不再是主要布局手段。

## 初體驗

```css
div {
  display: flex;
  width: 80%;
  max-width: 980px;
  min-width: 320px;
  margin: 0 auto;
  background-color: pink;
}

div span {
  height: 100px;
  background-color: purple;
  margin-right: 5px;
  flex: 1;
}
```

```html
<div>
  <span>1</span>
  <span>2</span>
  <span>3</span>
</div>
```

這裡的 `div` 是 Flex 容器，三個 `span` 是 Flex 項目。`flex: 1` 讓三個項目平均分配可用空間。

## 容器屬性總覽

常見父元素屬性有：

| 屬性 | 負責內容 |
| --- | --- |
| `flex-direction` | 設定主軸方向 |
| `justify-content` | 設定主軸上的項目排列方式 |
| `align-items` | 設定單行項目在側軸上的對齊 |
| `align-content` | 設定多行項目在側軸上的整體分布 |
| `flex-wrap` | 設定項目是否換行 |
| `flex-flow` | `flex-direction` 與 `flex-wrap` 的簡寫 |

學 Flex 時不要只背屬性值，先判斷「這個問題是在主軸、側軸、單行、多行，還是單一項目」。

## 常見錯誤

### 以為所有後代都是 flex item

只有容器的直接子元素是 flex item。若要控制孫元素，需要在它的父元素上再次開啟 Flex。

### 還用 float 控制 flex item

Flex item 的排列應該用 Flex 屬性處理，不應再期待 `float`、`clear` 或 `vertical-align` 來主導布局。

### 不分容器屬性與項目屬性

例如 `justify-content` 設在容器上，`flex-grow` 設在項目上。放錯位置時，樣式通常不會如預期生效。

## 重點整理

- `display: flex` 讓元素成為 Flex 容器。
- 容器的直接子元素會成為 Flex 項目。
- Flex 的本質是用父容器控制子項目的排列與分配。
- 後續學習要抓住主軸、側軸、容器屬性、項目屬性四個概念。

## 自我檢查

1. 哪些元素會成為 Flex 項目？
2. 為什麼 Flex item 不應再依賴 `float` 排版？
3. `justify-content` 應該寫在容器還是項目上？
