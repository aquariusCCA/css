# 盒子陰影 box-shadow

> 所屬章節：[第十四章 盒子模型](./README.md)  
> 關鍵字：box-shadow、盒子陰影、offset-x、offset-y、blur、spread、inset  
> 建議回查情境：想替卡片或按鈕加陰影時；分不清模糊距離和陰影尺寸時；想確認陰影會不會影響盒子排列時

## 本節導讀

這一節說明 CSS 的 `box-shadow`。`box-shadow` 可以替盒子添加陰影，常用在卡片、按鈕、彈窗、懸停效果等視覺層次上。

第一次閱讀時，先掌握 `box-shadow` 的語法順序，再理解水平位移、垂直位移、模糊距離、陰影尺寸、顏色和內陰影各自控制什麼。後續做 hover 效果或卡片陰影時，可以回到這篇查參數怎麼調。

## 你會在這篇學到什麼

- `box-shadow` 是什麼。
- `box-shadow` 各參數的作用。
- 外陰影和內陰影的差異。
- 為什麼 `box-shadow` 不會影響盒子排列。
- 如何做滑鼠移入時才出現陰影的效果。

## 先講結論

`box-shadow` 用來設定盒子的陰影效果。它是視覺效果，不屬於盒子模型的 `content`、`padding`、`border` 或 `margin`，所以不會改變盒子的實際尺寸，也不會把其他盒子推開。

![盒子陰影box-shadow.png](./images/1777900868930_Y9xkgTXVNd.png)

常見語法：

```css
box-shadow: offset-x offset-y blur-radius spread-radius color inset;
```

其中最少要寫水平位移和垂直位移：

```css
box-shadow: 10px 10px;
```

實務上通常會加上模糊距離和顏色：

```css
box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
```

## `box-shadow` 的參數

| 參數 | 是否必填 | 作用 |
| --- | --- | --- |
| `offset-x` | 必填 | 水平位移。正值往右，負值往左。 |
| `offset-y` | 必填 | 垂直位移。正值往下，負值往上。 |
| `blur-radius` | 選填 | 模糊距離。值越大，陰影越模糊；預設是 `0`，不能是負值。 |
| `spread-radius` | 選填 | 陰影尺寸。正值讓陰影擴大，負值讓陰影縮小；預設是 `0`。 |
| `color` | 選填 | 陰影顏色。實務上建議明確指定，常用 `rgba()` 做透明陰影。 |
| `inset` | 選填 | 改成內陰影。沒有寫時，預設是外陰影。 |

例如：

```css
box-shadow: 10px 10px 10px -4px #ccc;
```

可以拆成：

- `10px`：陰影往右移動 `10px`。
- `10px`：陰影往下移動 `10px`。
- `10px`：模糊距離是 `10px`。
- `-4px`：陰影尺寸縮小 `4px`。
- `#ccc`：陰影顏色是淺灰色。

## 位移方向

前兩個值決定陰影的位置。

```css
/* 往右下方偏移 */
box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.25);

/* 往左上方偏移 */
box-shadow: -10px -10px 8px rgba(0, 0, 0, 0.25);

/* 不偏移，只在四周產生陰影 */
box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
```

如果只想讓陰影像光暈一樣包在四周，通常會把 `offset-x` 和 `offset-y` 都設為 `0`，再調整 `blur-radius`。

## 模糊距離與陰影尺寸

`blur-radius` 和 `spread-radius` 容易混淆。

```css
box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
```

這裡的 `20px` 是模糊距離，會讓陰影邊緣變得更柔和。

```css
box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.15);
```

這裡的 `6px` 是陰影尺寸，會讓陰影範圍向外擴大，但不增加模糊。

簡單記法：

- `blur-radius` 控制陰影邊緣的虛實。
- `spread-radius` 控制陰影本身向外或向內擴張多少。

## 外陰影與內陰影

`box-shadow` 預設是外陰影，也就是陰影畫在盒子外側。

```css
.box {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
```

如果要改成內陰影，加入 `inset`：

```css
.box {
  box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.25);
}
```

要注意：外陰影是預設狀態，但不能寫 `outset`。

```css
/* 錯誤：box-shadow 沒有 outset 這個關鍵字 */
box-shadow: 10px 10px 10px #ccc outset;
```

如果寫了 `outset`，整個陰影宣告會無效。

## hover 陰影範例

開發中常見的做法是：元素平常沒有陰影，滑鼠移入時才加上陰影，讓使用者感覺元素可以被互動。

```css
.box {
  width: 100px;
  height: 100px;
  background-color: black;
  transition: box-shadow 0.2s ease;
}

.box:hover {
  box-shadow: 10px 10px 10px -4px #ccc;
}
```

```html
<div class="box"></div>
```

這段程式碼表示：

- `.box` 平常沒有陰影。
- 滑鼠移入 `.box` 時，新增一個往右下方偏移的淺灰色陰影。
- `transition` 讓陰影出現得比較平滑。

## 多層陰影

`box-shadow` 可以一次設定多個陰影，每一層用逗號分隔。

```css
.card {
  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.12),
    0 12px 24px rgba(0, 0, 0, 0.16);
}
```

多層陰影可以讓陰影更自然，但不建議一開始就寫得太複雜。初學時先掌握單層陰影的參數比較重要。

## 常見混淆點

### `box-shadow` 不佔用版面空間

陰影可能看起來超出盒子範圍，但它不會改變元素的 `width`、`height`，也不會影響其他盒子的排列。它可能覆蓋附近內容，但不會把附近內容推開。

### 模糊距離不是陰影尺寸

`blur-radius` 讓陰影變柔和；`spread-radius` 才是調整陰影擴張或收縮的值。

### 預設外陰影不用寫關鍵字

`box-shadow` 預設就是外陰影。要內陰影才寫 `inset`；不要寫 `outset`。

### 透明陰影通常比純色陰影自然

實務上常用 `rgba()` 寫陰影顏色，例如：

```css
box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
```

這樣比直接使用 `black` 更容易做出柔和、不突兀的陰影。

## 延伸閱讀

- [盒子模型的組成](./盒子模型的組成.md)
- [邊框 border](./邊框border.md)
- [box-sizing](./box-sizing.md)
- [邊框外輪廓 outline](./邊框外輪廓outline.md)

## 一句話抓核心

`box-shadow` 是盒子的視覺陰影效果，不佔版面空間；先掌握水平位移、垂直位移、模糊距離和顏色，再視需要加入陰影尺寸或 `inset`。
