---
source:
  - 'origin/230-平面轉換/02-移動translate.md / 開頭與重點'
  - 'origin/230-平面轉換/06-總結.md / translate 摘要'
---

# translate 位移語法與特性

> 2D 移動是 2D 轉換裡面的一種功能，可以改變元素在頁面中的位置，類似定位。

```css
transform: translate(水平移动距离，垂直移动距离);

transform: translate(100px, 100px);

/* 或者分开写 */
transform: translateX(n);
transform: translateY(n);

/* 如果只移动 X 轴  */
transform: translate(100px, 0);
transform: translateX(100px);
```

## 重點

- 定義 `2D` 轉換中的移動，沿著 X 和 Y 軸移動元素。
- `translate` 最大的優點：不會影響到其他元素的位置。
- `translate` 中的百分比單位是相對於自身元素的。

```css
transform: translate(50%, 50%);
```

2D 移動 `translate(x, y)` 最大的優勢是不影響其他盒子，裡面參數用 `%` 時，是相對於自身寬度和高度來計算的。

也可以分開寫：

```css
transform: translateX(x);
transform: translateY(y);
```
