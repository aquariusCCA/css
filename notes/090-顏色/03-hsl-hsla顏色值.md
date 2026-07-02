---
source_atomic:
  - atomic/090-顏色/05-hsl-與-hsla-顏色值.md
topics:
  - HSL 色值
  - HSLA
  - hue
  - saturation
  - lightness
summary: "說明 HSL 如何用色調、飽和度與亮度描述顏色，並加入 alpha 透明度。"
---

# HSL 與 HSLA 顏色值

## 學習目標

讀完這篇筆記後，你應該能夠：

- 說明 HSL 三個部分：色調、飽和度與亮度。
- 使用 hue 色輪角度理解不同顏色的位置。
- 說明 saturation 如何影響顏色純度。
- 說明 lightness 如何影響顏色明暗。
- 使用 HSLA 或現代 HSL 語法指定透明度。
- 分辨 HSL 和 RGB 在思考方式上的差異。

## HSL 是什麼

HSL 是 CSS 中另一種常見顏色表示方式。它由三個部分組成：

- Hue：色調
- Saturation：飽和度
- Lightness：亮度

基本格式如下：

```css
.box {
  color: hsl(240, 86%, 50%);
}
```

和 RGB 直接調整紅、綠、藍通道不同，HSL 更接近人對顏色的直覺描述：先決定「是什麼顏色」，再調整「純不純」和「亮不亮」。

## 色調 hue

Hue 表示色調，也就是顏色在色輪上的角度。

常見取值可以用 `0` 到 `360` 來理解；`0deg` 和 `360deg` 代表色輪上的同一個位置。

常見位置包含：

| hue | 大致顏色 |
| --- | --- |
| `0` 或 `360` | 紅色 |
| `120` | 綠色 |
| `240` | 藍色 |

例如：

```css
.purple {
  color: hsl(289, 100%, 50%);
}
```

![HSL 色調範例，紫色背景顯示 hsl(289, 100%, 50%)](../../origin/090-顏色/assets/images/colors-img-006-2233e1.png)

色輪可以幫助理解 hue 的方向：

![HSL 色輪示意圖，標示紅、黃、綠、青、藍與洋紅角度](../../origin/090-顏色/assets/images/colors-img-007-c8a93b.png)

如果想改變「顏色種類」，通常調整 hue。

## 飽和度 saturation

Saturation 表示顏色的純度，通常使用百分比。

- `0%` 表示沒有彩度，會變成灰階。
- `100%` 表示色彩最純。

例如：

```css
.muted {
  color: hsl(289, 20%, 50%);
}

.vivid {
  color: hsl(289, 100%, 50%);
}
```

![HSL 飽和度示意圖，顯示 0% 到 100% 的紫色純度變化](../../origin/090-顏色/assets/images/colors-img-008-f53968.png)

飽和度越低，顏色越灰、越不鮮豔；飽和度越高，顏色越鮮明。

## 亮度 lightness

Lightness 表示顏色的明暗程度，也使用百分比。

- `0%` 是黑色。
- `50%` 通常是不偏白也不偏黑的基準亮度。
- `100%` 是白色。

例如：

```css
.dark-blue {
  color: hsl(240, 86%, 30%);
}

.blue {
  color: hsl(240, 86%, 50%);
}

.light-blue {
  color: hsl(240, 86%, 70%);
}
```

![HSL 亮度範例，藍色背景顯示 hsl(240, 86%, 50%)](../../origin/090-顏色/assets/images/colors-img-009-68b12e.png)

![HSL 亮度範例，橘色背景顯示 hsl(40, 100%, 53%)](../../origin/090-顏色/assets/images/colors-img-010-4517be.png)

如果想在同一個色調下做深色、淺色變化，調整 lightness 通常很直覺。

## HSLA 與透明度

和 RGB 一樣，HSL 也可以加入 alpha 透明度。

舊式語法可以寫成：

```css
.overlay {
  background-color: hsla(198, 100%, 50%, 0.7);
}
```

![HSLA 透明色值範例，顯示 hsla(198, 100%, 50%, 0.7)](../../origin/090-顏色/assets/images/colors-img-011-3d4910.png)

第四個值是 alpha：

- `0` 表示完全透明。
- `1` 表示完全不透明。
- `0.7` 表示 70% 不透明。

現代 CSS 也可以使用斜線語法：

```css
.overlay {
  background-color: hsl(198 100% 50% / 70%);
}
```

這種寫法和現代 RGB 語法一致，都是在斜線後面寫 alpha。

## HSL 和 RGB 的差異

RGB 和 HSL 都能表示顏色，但思考角度不同。

| 表示方式 | 思考角度 | 適合情境 |
| --- | --- | --- |
| RGB | 紅、綠、藍三個通道的強度 | 需要理解或調整色光通道 |
| HSL | 色調、飽和度、亮度 | 需要調整顏色種類、純度、明暗 |

例如，想把一個藍色變亮，使用 HSL 時可以直接提高第三個值：

```css
.button {
  background-color: hsl(220, 80%, 45%);
}

.button:hover {
  background-color: hsl(220, 80%, 55%);
}
```

這裡 hue 和 saturation 不變，只調整 lightness，就能做出同色系的 hover 變化。

## 常見誤解

- **誤解：HSL 的 hue 一定要寫 `deg`。**  
  入門常看到 `hsl(240, 86%, 50%)` 這種寫法，也可以理解為角度。現代語法中也可明確使用角度單位。

- **誤解：飽和度越高，顏色越亮。**  
  飽和度控制的是純度，不是明暗。亮不亮主要看 lightness。

- **誤解：亮度 `100%` 是最鮮豔的顏色。**  
  Lightness `100%` 會變成白色，不是最鮮豔。鮮豔程度主要和 saturation 有關。

- **誤解：HSLA 和 HSL 是完全不同的系統。**  
  HSLA 只是 HSL 加上 alpha 透明度。

## 重點整理

- HSL 分別代表 hue、saturation、lightness。
- Hue 是色輪角度，`0` 或 `360` 是紅色，`120` 是綠色，`240` 是藍色。
- Saturation 控制色彩純度，`0%` 越灰，`100%` 越純。
- Lightness 控制明暗，`0%` 是黑色，`100%` 是白色。
- HSLA 或現代 `hsl(... / ...)` 語法可以加入 alpha 透明度。
- HSL 很適合用來做同色系的深淺、飽和度與互動狀態調整。

## 自我檢查

1. HSL 三個字母分別代表什麼？
2. `hsl(0, 100%, 50%)` 大致會是什麼顏色？
3. 如果想讓顏色變灰，應該調整 saturation 還是 lightness？
4. 如果想讓同一個藍色變亮，應該優先調整哪個值？
5. `hsl(198 100% 50% / 70%)` 中的 `70%` 代表什麼？
