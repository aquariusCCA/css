---
source_atomic:
  - atomic/120-背景屬性/10-background-origin-背景圖原點.md
  - atomic/120-背景屬性/11-background-clip-背景裁剪.md
topics: [background-origin, background-clip, 盒模型區域, 文字背景效果]
summary: "比較背景定位原點與裁剪範圍，說明它們如何對應 border、padding、content 區域。"
---

# background-origin 與 background-clip：背景從哪裡開始、裁到哪裡

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `background-origin` 控制的是背景圖片的定位原點。
- 說明 `background-clip` 控制的是背景繪製或裁剪範圍。
- 分辨 `border-box`、`padding-box`、`content-box` 的差異。
- 看懂 `-webkit-background-clip: text` 製作文字背景效果的原理。

## 問題情境

當元素有 `border` 和 `padding` 時，背景不只是「放在盒子裡」這麼簡單。你可能會問：

背景圖片的位置是從邊框外側開始算，還是從 padding 區域開始算？背景顏色或背景圖要畫到邊框下面，還是只畫到內容區？

這時就會用到兩個很容易混淆的屬性：`background-origin` 和 `background-clip`。

參考文章：[CSS背景属性,background-origin和background-clip](https://blog.csdn.net/w875471321/article/details/120802835)

## 一句話理解

`background-origin` 決定背景圖片定位時「從哪個盒模型區域開始算」；`background-clip` 決定背景「最後畫到或裁到哪個區域」。

簡單說：

- `background-origin`：管起點。
- `background-clip`：管範圍。

## 先理解三個 box

這兩個屬性都會用到盒模型區域：

| 值 | 意思 |
| --- | --- |
| `border-box` | 包含 border、padding、content |
| `padding-box` | 包含 padding、content，不含 border |
| `content-box` | 只包含 content |

如果盒子沒有明顯的 border 和 padding，這些差異會很難看出來。因此學習時通常會建立一個有 padding 和 border 的盒子。

```css
.box {
  width: 600px;
  height: 500px;
  padding: 50px;
  border: 20px dotted blueviolet;
  background: url(./images/logo.png) no-repeat;
}
```

## background-origin：背景圖片的定位原點

`background-origin` 用來控制背景圖片的位置是以哪個盒模型區域作為定位參考。

常見值：

| 值 | 行為 |
| --- | --- |
| `padding-box` | 預設值，背景圖片從 padding 區域開始定位 |
| `border-box` | 背景圖片從 border 區域開始定位 |
| `content-box` | 背景圖片從 content 區域開始定位 |

範例：

```css
.box {
  width: 600px;
  height: 500px;
  padding: 50px;
  border: 20px dotted blueviolet;
  background: url(./images/logo.png) no-repeat;
  background-origin: border-box;
}
```

如果改成：

```css
.box {
  background-origin: content-box;
}
```

背景圖片的位置會以 content 區域開始計算，和 `border-box` 的定位結果不同。

## background-clip：背景裁剪範圍

`background-clip` 用來設定背景繪製到哪個區域為止，也可以理解成背景向外裁剪的邊界。

常見值：

| 值 | 行為 |
| --- | --- |
| `border-box` | 預設值，背景延伸到 border 區域 |
| `padding-box` | 背景延伸到 padding 區域，不畫到 border 區域 |
| `content-box` | 背景只延伸到 content 區域 |
| `text` | 背景只呈現在文字上，通常需加 `-webkit-` 前綴 |

範例：

```css
.box {
  width: 100px;
  height: 100px;
  padding: 50px;
  border: 20px dotted brown;
  background-color: blueviolet;
  background-clip: padding-box;
}
```

這表示背景不會畫到 border 區域，只會裁到 padding box。

## 文字背景效果

`background-clip: text` 可以讓背景只出現在文字形狀內。實務上常搭配 `-webkit-background-clip: text` 和透明文字顏色使用：

```css
.my-text {
  font-size: 36px;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(45deg, #ff9900, #ff0066);
  -webkit-background-clip: text;
}
```

```html
<div class="my-text">Hello, Background Clip!</div>
```

這段的概念是：元素有一個漸層背景，但背景只被裁在文字形狀裡；文字本身設為透明，於是看起來像文字填滿了漸層。

## origin 和 clip 的差異對照

| 屬性 | 控制重點 | 常見問題 |
| --- | --- | --- |
| `background-origin` | 背景圖片從哪個區域開始定位 | 圖片位置的起點不如預期 |
| `background-clip` | 背景繪製到哪個區域為止 | 背景是否延伸到 border、padding、content |

可以用一句話記：

`origin` 解決「從哪裡開始算位置」；`clip` 解決「畫到哪裡為止」。

## 常見錯誤

### 把 background-origin 和 background-clip 混成同一件事

兩者都會提到 `border-box`、`padding-box`、`content-box`，所以很容易混淆。但 `origin` 改的是背景圖片的定位參考，`clip` 改的是背景繪製範圍。

如果你遇到的是「背景圖片位置不對」，先想 `background-origin`；如果你遇到的是「背景有沒有畫到 border 下方」，先想 `background-clip`。

### 忘記盒子需要 border 和 padding 才容易觀察差異

如果元素沒有 `border` 或 `padding`，不同 box 的視覺差異可能很小。練習時應該建立一個有明顯 border、padding 和背景的盒子。

### 使用文字背景時忘記讓文字透明

做漸層文字時，如果文字顏色沒有設為透明，就會蓋住背景效果。

## 實務判斷準則

- 想調整背景圖片定位起點：使用 `background-origin`。
- 想限制背景繪製範圍：使用 `background-clip`。
- 做卡片、徽章、特殊邊框效果時，注意背景是否應該延伸到 border。
- 做漸層文字時，使用 `-webkit-background-clip: text` 並搭配 `color: transparent`。

## 重點整理

- `background-origin` 控制背景圖片的位置起點。
- `background-clip` 控制背景繪製或裁剪範圍。
- `border-box`、`padding-box`、`content-box` 都是盒模型區域。
- `background-clip: text` 可做文字填背景效果，通常需使用前綴。

## 自我檢查

1. `background-origin` 和 `background-clip` 分別控制什麼？
2. 如果希望背景圖片從 content 區域開始定位，應使用哪個屬性和值？
3. 如果希望背景不要畫到 border 區域，應使用哪個屬性和值？
4. 做漸層文字時，為什麼常搭配 `color: transparent`？
