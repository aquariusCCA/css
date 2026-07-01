---
source:
  - 'origin/090-顏色/01-顏色.md / ## 3.2 RGB值'
---

# RGB 與 RGBA 顏色值

在 CSS 中，可以通過 RGB 值來指定顏色。

RGB 分別表示紅、綠、藍，書寫格式為 `rgb(141, 0, 0)`。

括號裡用三個數值分別表示三種顏色的強度，數值範圍是 `0` 到 `255`。

![RGB 色值範例，深紅背景顯示 rgb(141, 0, 0)](../../origin/090-顏色/assets/images/colors-img-004-09f9b5.png)

RGB 值也可以添加 alpha 值用於定義透明度。舊式語法可寫成 `rgba(0, 0, 0, 0.5)`；現代語法也可以寫成 `rgb(0 0 0 / 50%)`。

alpha 值中 `0` 或 `0%` 表示完全透明；`1` 或 `100%` 表示不透明。

![RGBA 透明色值範例，顯示 rgba(60, 60, 200, 0.2)](../../origin/090-顏色/assets/images/colors-img-005-8c78cc.png)
