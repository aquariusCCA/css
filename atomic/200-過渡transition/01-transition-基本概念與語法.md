---
source:
  - 'origin/200-過渡transition/01-過渡transition.md / 說明、語法、欄位解釋'
---

# transition 基本概念與語法

`transition` 是 CSS3 的過渡屬性，可在不使用 Flash 動畫或 JavaScript 的情況下，讓元素從一種樣式逐漸變換到另一種樣式。

過渡動畫是從一個狀態漸漸過渡到另一個狀態，經常和 `:hover` 搭配使用。

```css
transition: 要過渡的屬性 花費時間 運動曲線 何時開始
```

`transition` 的常見欄位如下：

- `要過渡的屬性`：想要變化的 CSS 屬性，例如寬度、高度、背景顏色、內外邊距。若希望所有可過渡的屬性都套用過渡效果，可使用 `all`。
- `花費時間`：過渡效果花費的時間，必須帶單位，例如 `0.5s`。
- `運動曲線`：控制過渡速度變化，預設值是 `ease`，可省略。
- `何時開始`：延遲觸發的時間，必須帶單位，預設值是 `0s`，可省略。

![transition 常見運動曲線示意圖](../../origin/200-過渡transition/assets/images/transition-transition-img-001-7a856b.jpg)
