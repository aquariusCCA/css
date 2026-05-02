# 第02章 CSS 屬性書寫順序

> 所屬章節：第二章 CSS 屬性書寫順序  
> 課程入口：[CSS 筆記總覽](../README.md)  
> 關鍵字：CSS、屬性順序、屬性分類、布局定位、盒模型、文字樣式、背景外觀、display、position、Stylelint、Prettier  
> 建議回查情境：寫 CSS 時不知道屬性要怎麼排序、想統一團隊 CSS 風格、想讓樣式區塊更容易閱讀與維護時

---

## 本章導讀

這一章要整理的是 **CSS 屬性的建議書寫順序**。

CSS 屬性的書寫順序，不是瀏覽器要求的語法規定。

也就是說，下面兩種寫法在功能上通常是一樣的：

```css
.card {
    color: #333;
    display: flex;
    padding: 16px;
}
```

```css
.card {
    display: flex;
    padding: 16px;
    color: #333;
}
```

但是從閱讀與維護角度來看，第二種寫法通常比較好。

因為它符合比較自然的閱讀順序：

> 先看元素怎麼排版，再看元素本身大小與間距，接著看文字，最後看外觀與其他效果。

本章重點不是背死規則，而是建立一個好維護的 CSS 書寫習慣。

---

## 你會在這篇學到什麼

讀完本篇後，你應該能理解：

- 為什麼 CSS 屬性需要固定書寫順序
- CSS 屬性常見可以分成哪些類別
- 為什麼 `display`、`position` 通常會優先書寫
- 盒模型屬性、文字屬性、外觀屬性應該怎麼排序
- 如何把混亂的 CSS 重構成比較容易閱讀的格式
- 實務上團隊如何統一 CSS 屬性順序

---

# 1. 為什麼 CSS 屬性需要書寫順序？

CSS 本身不強制要求屬性順序。

例如：

```css
.box {
    color: red;
    width: 200px;
    display: flex;
    padding: 16px;
}
```

這樣寫語法沒有錯。

但是當樣式越來越多時，如果屬性沒有固定順序，就會出現幾個問題：

- 想找某個屬性時不容易找
- 同類屬性分散在不同位置
- 團隊成員寫法不一致
- 後續維護時容易漏改
- 閱讀 CSS 時需要來回掃描

因此，實務上常會約定一套 CSS 屬性書寫順序。

它的目的不是讓程式「可以執行」，而是讓程式「更容易閱讀與維護」。

---

# 2. 建議的 CSS 屬性書寫順序

一般可以依照下面順序書寫：

1. 布局與定位屬性
2. 盒模型與尺寸屬性
3. 文字與字體屬性
4. 背景與外觀屬性
5. 互動、動畫與其他屬性

可以簡化記成一句話：

> 先布局，再盒模型，再文字，再外觀，最後補充特殊效果。

---

# 3. 第一類：布局與定位屬性

布局與定位屬性通常放在最前面。

因為這類屬性會先決定元素：

- 要不要顯示
- 用什麼方式顯示
- 在頁面中怎麼排列
- 是否脫離正常文檔流
- 是否需要控制層級

常見屬性如下：

```css
display
position
top
right
bottom
left
z-index
float
clear
visibility
overflow
```

例如：

```css
.card {
    display: flex;
    position: relative;
    overflow: hidden;
}
```

---

## 3.1 為什麼 `display` 通常放最前面？

`display` 會影響元素的顯示模式。

例如：

```css
.container {
    display: flex;
}
```

當元素設定為 `display: flex;` 後，它的子元素排列方式就會受到影響。

如果是：

```css
.container {
    display: grid;
}
```

那它又會變成 Grid 版面。

因此，`display` 通常會優先書寫，讓讀者一開始就知道這個元素的排版模式。

---

## 3.2 為什麼 `position` 也要放前面？

`position` 會影響元素的定位方式。

例如：

```css
.badge {
    position: absolute;
    top: 8px;
    right: 8px;
}
```

只要看到 `position: absolute;`，就知道這個元素可能會脫離一般排列流程，並且透過 `top`、`right`、`bottom`、`left` 控制位置。

所以 `position` 也適合放在前面。

---

# 4. 第二類：盒模型與尺寸屬性

盒模型與尺寸屬性主要控制元素本身的大小、間距與邊框。

常見屬性如下：

```css
box-sizing
width
min-width
max-width
height
min-height
max-height
margin
padding
border
border-width
border-style
border-color
border-radius
```

例如：

```css
.card {
    box-sizing: border-box;
    width: 300px;
    min-height: 160px;
    margin: 16px;
    padding: 24px;
    border: 1px solid #ddd;
    border-radius: 8px;
}
```

這類屬性建議放在布局與定位屬性後面。

因為讀者通常會先看：

> 這個元素怎麼排？

再看：

> 這個元素多大？跟其他元素距離多少？

---

## 4.1 為什麼不建議叫「自身屬性」？

有些教材會把 `width`、`height`、`margin`、`padding`、`border` 稱為「自身屬性」。

這樣說可以理解，但不夠精準。

更建議稱為：

> 盒模型與尺寸屬性

因為這些屬性大多和 CSS 盒模型有關。

CSS 中每個元素都可以理解成一個盒子，常見結構包含：

- content：內容區域
- padding：內距
- border：邊框
- margin：外距

所以把這一類屬性稱為「盒模型與尺寸屬性」，會比「自身屬性」更清楚。

---

# 5. 第三類：文字與字體屬性

文字與字體屬性主要控制文字的顯示方式。

常見屬性如下：

```css
color
font
font-family
font-size
font-weight
line-height
letter-spacing
text-align
text-decoration
text-indent
text-overflow
white-space
word-break
vertical-align
```

例如：

```css
.title {
    color: #333;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
    text-align: center;
}
```

這類屬性通常放在盒模型後面。

因為它們主要處理的是：

> 元素裡面的文字怎麼呈現？

---

## 5.1 `color` 是文字屬性還是外觀屬性？

`color` 控制的是文字顏色，所以通常歸類在文字屬性。

例如：

```css
p {
    color: #666;
}
```

它影響的是文字本身，而不是元素背景或邊框。

因此在屬性排序中，`color` 通常會和 `font-size`、`line-height`、`text-align` 放在一起。

---

# 6. 第四類：背景與外觀屬性

背景與外觀屬性主要控制元素的視覺裝飾。

常見屬性如下：

```css
background
background-color
background-image
background-size
background-position
background-repeat
box-shadow
opacity
```

例如：

```css
.card {
    background: #fff;
    box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
    opacity: 0.95;
}
```

如果使用漸層背景，也建議放在這一類：

```css
.banner {
    background: linear-gradient(to right, #4facfe, #00f2fe);
}
```

---

## 6.1 `background` 應該放在哪一類？

`background`、`background-color`、`background-image`、`background: linear-gradient(...)` 本質上都和背景外觀有關。

所以建議統一放在「背景與外觀屬性」中。

不要一部分放在盒模型，一部分放在其他屬性，否則初學者容易混淆。

---

## 6.2 `border-radius` 應該放在哪一類？

`border-radius` 是控制元素邊角圓角的屬性。

它和 `border` 的關係比較近，所以實務上常會放在盒模型與尺寸屬性附近。

例如：

```css
.card {
    width: 300px;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
}
```

這樣讀起來會比較自然。

---

# 7. 第五類：互動、動畫與其他屬性

最後可以放一些互動、動畫或比較特殊的屬性。

常見屬性如下：

```css
cursor
pointer-events
user-select
transition
transform
animation
content
```

例如：

```css
.button {
    cursor: pointer;
    user-select: none;
    transition: all 0.3s ease;
}
```

這類屬性通常放在最後，因為它們不是元素最基礎的版面、尺寸或文字設定，而是補充互動效果或特殊行為。

---

# 8. 完整排序範例

下面是一段沒有整理過的 CSS：

```css
.card {
    color: #333;
    border-radius: 8px;
    display: flex;
    background: #fff;
    padding: 16px;
    width: 300px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
    font-size: 16px;
    position: relative;
    cursor: pointer;
    line-height: 1.5;
}
```

這段 CSS 可以執行，但閱讀順序比較混亂。

整理後可以改成：

```css
.card {
    display: flex;
    position: relative;

    width: 300px;
    padding: 16px;
    border-radius: 8px;

    color: #333;
    font-size: 16px;
    line-height: 1.5;

    background: #fff;
    box-shadow: 0 4px 12px rgb(0 0 0 / 10%);

    cursor: pointer;
}
```

整理後的閱讀順序變成：

1. 先看 `.card` 怎麼排版
2. 再看 `.card` 的尺寸與間距
3. 再看文字樣式
4. 再看背景與陰影
5. 最後看滑鼠互動效果

這樣之後要修改樣式時，會比較容易找到對應屬性。

---

# 9. 更完整的建議排序表

以下是一個比較完整的 CSS 屬性排序參考表。

| 分類 | 常見屬性 | 說明 |
| --- | --- | --- |
| 布局與定位 | `display`、`position`、`top`、`right`、`bottom`、`left`、`z-index`、`float`、`clear`、`visibility`、`overflow` | 決定元素如何顯示、定位與排列 |
| 盒模型與尺寸 | `box-sizing`、`width`、`height`、`min-width`、`max-width`、`min-height`、`max-height`、`margin`、`padding`、`border`、`border-radius` | 控制元素大小、間距、邊框與盒模型 |
| 文字與字體 | `color`、`font`、`font-family`、`font-size`、`font-weight`、`line-height`、`letter-spacing`、`text-align`、`text-decoration`、`white-space`、`word-break` | 控制文字顯示方式 |
| 背景與外觀 | `background`、`background-color`、`background-image`、`background-size`、`background-position`、`box-shadow`、`opacity` | 控制元素背景與視覺裝飾 |
| 互動、動畫與其他 | `cursor`、`pointer-events`、`user-select`、`transition`、`transform`、`animation`、`content` | 控制互動、動畫與特殊效果 |

---

# 10. 實務上的團隊做法

在實務開發中，CSS 屬性排序通常有三種做法：

## 10.1 團隊約定

團隊可以在文件中規定屬性順序。

例如：

```text
1. Layout
2. Box Model
3. Typography
4. Visual
5. Animation / Misc
```

這種方式簡單直接，但需要團隊成員自己遵守。

---

## 10.2 使用格式化工具

有些團隊會使用格式化工具統一程式碼風格。

常見工具例如：

- Prettier
- Stylelint
- Stylelint 相關排序規則或外掛

這些工具可以幫助團隊減少格式爭論，把注意力放回功能與架構本身。

---

## 10.3 依照專案既有風格

如果你加入一個既有專案，最重要的不是堅持自己的排序習慣，而是先觀察專案原本怎麼寫。

如果專案已經有明確規範，就優先遵守專案規範。

如果專案沒有規範，就可以採用本章這種通用排序方式。

---

# 11. 初學者常見誤解

## 11.1 誤解一：CSS 屬性順序會影響所有屬性的效果

大多數情況下，屬性順序不會影響結果。

例如：

```css
.box {
    width: 100px;
    height: 100px;
}
```

和：

```css
.box {
    height: 100px;
    width: 100px;
}
```

效果通常一樣。

但如果同一個屬性重複出現，後面的會覆蓋前面的。

例如：

```css
.box {
    color: red;
    color: blue;
}
```

最後會套用：

```css
color: blue;
```

所以要注意：

> 屬性分類順序主要是為了可讀性；相同屬性的先後順序，才可能直接影響覆蓋結果。

---

## 11.2 誤解二：一定要完全照這個順序寫

不一定。

這份順序是建議，不是法律。

如果團隊有自己的規範，應該優先遵守團隊規範。

如果某些屬性放在一起更容易理解，也可以依照實際情況調整。

例如：

```css
.button {
    background: #1677ff;
    color: #fff;
}
```

雖然 `color` 通常歸類在文字屬性，`background` 通常歸類在背景外觀屬性，但在按鈕樣式中，把背景色和文字色放在一起有時也方便閱讀。

所以重點不是死背順序，而是讓樣式更容易理解。

---

## 11.3 誤解三：只要屬性順序漂亮，CSS 就一定好維護

不一定。

屬性順序只是 CSS 可維護性的一部分。

真正好維護的 CSS 還需要考慮：

- class 命名是否清楚
- 選擇器是否過度複雜
- 樣式是否重複太多
- 是否有不必要的 `!important`
- 是否有良好的元件化拆分
- 是否符合專案架構

所以本章只是在處理：

> 單一 CSS 規則內部的屬性排列問題。

它不是 CSS 架構的全部。

---

# 12. 建議實作習慣

平常寫 CSS 時，可以先用下面順序思考：

```text
1. 這個元素怎麼排？
2. 這個元素多大？
3. 這個元素的文字怎麼顯示？
4. 這個元素的背景、邊框、陰影怎麼呈現？
5. 這個元素有沒有互動或動畫？
```

對應到 CSS 屬性就是：

```css
.example {
    /* 1. 布局與定位 */
    display: flex;
    position: relative;

    /* 2. 盒模型與尺寸 */
    width: 300px;
    padding: 16px;
    border-radius: 8px;

    /* 3. 文字與字體 */
    color: #333;
    font-size: 16px;
    line-height: 1.5;

    /* 4. 背景與外觀 */
    background: #fff;
    box-shadow: 0 4px 12px rgb(0 0 0 / 10%);

    /* 5. 互動、動畫與其他 */
    cursor: pointer;
    transition: all 0.3s ease;
}
```

實務上不一定每次都要寫註解。

但初學階段可以先用註解幫助自己養成分類習慣。

熟悉之後，就可以直接按照這個順序書寫。

---

# 13. 本章小結

本章重點如下：

- CSS 屬性順序不是語法強制規定
- 固定屬性順序的主要目的是提升可讀性與維護性
- 建議順序是：布局與定位、盒模型與尺寸、文字與字體、背景與外觀、互動動畫與其他
- `display` 通常優先寫，因為它會影響元素的顯示與排版模式
- `position` 也適合放前面，因為它會影響元素定位方式
- `border-radius` 建議靠近 `border`，放在盒模型與尺寸類別附近
- `background`、`background-color`、`background-image`、`linear-gradient(...)` 都可以歸在背景與外觀屬性
- 團隊如果有自己的 CSS 規範，應該優先遵守團隊規範
- 實務上可以透過 Prettier、Stylelint 或團隊規範統一 CSS 風格

---

# 14. 30 秒複習

如果只記一個排列原則：

> 先布局，再盒模型，再文字，再外觀，最後互動與動畫。

如果只記一個實作習慣：

> `display` 和 `position` 通常優先寫，因為它們會先決定元素怎麼排、怎麼定位。

如果只記一個觀念：

> CSS 屬性順序不是為了讓瀏覽器看懂，而是為了讓工程師更容易維護。

---

# 15. 自我檢查

讀完本章後，可以用下面問題檢查自己是否理解：

1. CSS 屬性書寫順序是語法規定嗎？
2. 為什麼 `display` 通常會放在前面？
3. 為什麼 `position`、`top`、`right`、`bottom`、`left` 適合放在同一區？
4. `width`、`height`、`margin`、`padding` 屬於哪一類？
5. `color` 通常應該歸類在哪一類？
6. `background: linear-gradient(...)` 應該歸類在哪一類？
7. `border-radius` 建議靠近哪一類屬性？
8. 屬性順序主要解決什麼問題？
9. 如果團隊規範和本章建議不同，應該優先遵守哪一個？
10. 同一個屬性重複出現時，前面的有效還是後面的有效？

---

# 16. 延伸閱讀

讀完這篇後，可以接著學習：

- CSS 選擇器
- CSS 引入方式
- CSS 層疊與權重
- CSS 盒模型
- Flex 布局
- Grid 布局
- 響應式設計

如果想回到本章入口：

- [第二章 CSS屬性書寫順序](./README.md)

如果要返回整份筆記總覽：

- [CSS 筆記總覽](../README.md)