---
source_atomic:
  - atomic/110-文本屬性/10-text-overflow-屬性與生效條件.md
  - atomic/110-文本屬性/11-單行文本溢出省略號.md
  - atomic/110-文本屬性/12-多行文本溢出省略號.md
---

# text-overflow 文本溢出與省略號

## 學習目標

讀完這篇筆記後，你應該能夠：

- 說明 `text-overflow` 控制文本溢出時的呈現方式。
- 分辨 `clip` 與 `ellipsis`。
- 寫出單行文本溢出省略號的三個必要條件。
- 理解多行文本省略號的常見寫法與相容性限制。

## 使用情境

在新聞列表、商品卡片、文章標題、使用者名稱等 UI 中，文字長度常常不可控。如果文字直接換行或溢出，可能破壞版面。

這時可以使用省略號表示被截斷的文字，讓版面保持整齊，同時提示使用者後面還有內容。

## text-overflow 是什麼

`text-overflow` 規定當文本溢出包含元素時如何呈現。

常見值：

| 值 | 效果 |
| --- | --- |
| `clip` | 裁剪文本，預設值 |
| `ellipsis` | 使用省略號代表被修剪的文本 |

```css
.a {
  width: 100px;
  height: 20px;
  font: 8px/20px arial;
  border: 1px solid black;
  overflow: hidden;
  text-overflow: clip;
  white-space: nowrap;
}

.b {
  width: 100px;
  height: 20px;
  font: 8px/20px arial;
  border: 1px solid black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

```html
<div class="a">我是大聰明我是大聰明我是大聰明我是大聰明</div>
<br><br>
<div class="b">我是大聰明我是大聰明我是大聰明我是大聰明</div>
```

注意：要讓 `text-overflow` 生效，通常必須明確讓 `overflow` 不是 `visible`，並讓文字不要自動換行。

## 單行文本溢出省略號

![新聞列表中的單行文字溢出省略號效果](../../origin/110-文本屬性/assets/images/text-overflow-img-001-141123.png)

單行文本溢出省略號必須滿足三個條件：

```css
/* 1. 強制文字在同一行顯示 */
white-space: nowrap;

/* 2. 隱藏超出的部分 */
overflow: hidden;

/* 3. 用省略號代表被截斷的文字 */
text-overflow: ellipsis;
```

完整範例：

```css
div {
  width: 150px;
  height: 80px;
  background-color: pink;
  margin: 100px auto;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

```html
<div>
  啥也不說，此處省略一萬字
</div>
```

三個條件缺一不可。只寫 `text-overflow: ellipsis` 通常不會看到省略號。

## 多行文本溢出省略號

多行文本溢出顯示省略號有相容性限制，常見寫法依賴 `-webkit-line-clamp`、`display: -webkit-box` 與 `-webkit-box-orient: vertical`，實際支援需依目標瀏覽器確認。

![圖文卡片中的多行文字溢出省略號效果](../../origin/110-文本屬性/assets/images/text-overflow-img-002-52efc0.png)

常見寫法通常包含：

```css
overflow: hidden;
text-overflow: ellipsis;

/* 彈性伸縮盒子模型顯示 */
display: -webkit-box;

/* 限制顯示行數 */
-webkit-line-clamp: 2;

/* 設定伸縮盒子子元素排列方向 */
-webkit-box-orient: vertical;
```

完整範例：

```css
div {
  width: 150px;
  height: 65px;
  background-color: pink;
  margin: 100px auto;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
```

```html
<div>
  啥也不說，此處省略一萬字，啥也不說，此處省略一萬字此處省略一萬字
</div>
```

## 單行與多行的差異

| 需求 | 核心寫法 | 注意事項 |
| --- | --- | --- |
| 單行省略 | `nowrap` + `overflow: hidden` + `text-overflow: ellipsis` | 文字被強制放在同一行 |
| 多行省略 | `-webkit-line-clamp` 搭配 `-webkit-box` | 有相容性限制 |

單行省略的條件較穩定；多行省略更像是常見工程寫法，使用前要確認目標瀏覽器支援。

## 常見錯誤

- **只寫 `text-overflow: ellipsis`**：沒有 `overflow: hidden` 和 `white-space: nowrap` 時，單行省略號通常不會生效。
- **忘記設定寬度或可約束的容器大小**：如果容器不產生溢出，就沒有省略的情境。
- **把單行條件套到多行需求**：`white-space: nowrap` 會強制單行，不適合多行省略。
- **忽略多行省略相容性**：`-webkit-line-clamp` 寫法常用，但仍應依目標瀏覽器確認。

## 實務判斷準則

- 標題、列表項、按鈕文字只允許一行：使用單行省略。
- 卡片摘要需要固定顯示兩三行：使用多行省略，並確認支援情況。
- 重要資訊不可被截斷時，不要只用省略號；可提供 tooltip、詳情頁或展開方式。
- 先確保容器寬度與溢出條件明確，再檢查省略號是否生效。

## 重點整理

- `text-overflow` 控制文本溢出時的呈現方式。
- `clip` 是裁剪，`ellipsis` 是省略號。
- 單行省略必須搭配 `white-space: nowrap`、`overflow: hidden`、`text-overflow: ellipsis`。
- 多行省略常用 `-webkit-line-clamp` 方案，但有相容性限制。
- 省略號只是一種視覺提示，不適合隱藏關鍵資訊。

## 自我檢查

1. 單行文字省略號需要哪三個核心屬性？
2. 為什麼只寫 `text-overflow: ellipsis` 通常不會生效？
3. 多行省略號常用哪個屬性限制行數？
4. 哪些內容不適合只用省略號截斷？
