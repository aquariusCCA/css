---
source_atomic:
  - atomic/100-字體屬性/05-font-style-文字樣式.md
topics: [font-style, 斜體, 語意與視覺, HTML 語意標籤]
summary: "說明如何用 font-style 控制斜體，並區分 em/i 的語意與 CSS 視覺呈現。"
---

# font-style：設定文字是否傾斜

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `font-style` 控制的是文字字形風格。
- 使用 `normal` 與 `italic` 設定正常或斜體文字。
- 理解為什麼實務上常把 `<em>`、`<i>` 的預設斜體改回正常。
- 分辨語意標籤與視覺樣式的差異。

## 使用情境

`font-style` 最常見的用途是控制文字是否斜體。你可以用它讓一段文字傾斜，也可以把瀏覽器預設會傾斜的元素改回正常顯示。

實務上，比起大量把普通文字改成斜體，更常見的情境是：頁面使用了 `<em>` 或 `<i>`，但設計稿不希望它看起來傾斜，因此用 CSS 重設。

## 一句話理解

`font-style` 控制文字的字形風格，常用值是 `normal` 與 `italic`。

## 常用值

![font-style 屬性值對照表，說明 normal 與 italic 的字體樣式作用](../../origin/100-字體屬性/assets/images/font-properties-img-003-7bf350.png)

| 值 | 說明 |
| --- | --- |
| `normal` | 正常字形，不傾斜 |
| `italic` | 斜體字形 |

基本寫法：

```css
p {
  font-style: normal;
}
```

```css
p {
  font-style: italic;
}
```

## 範例拆解

```html
<p>同学,上课时候的你</p>
<em>下课时候的你</em>
```

瀏覽器通常會讓 `<em>` 呈現斜體，因為它帶有強調語意。若設計上不希望它傾斜，可以這樣寫：

```css
em {
  font-style: normal;
}
```

這段 CSS 不會移除 `<em>` 的語意，只是改變它的視覺呈現。

如果真的想讓某段普通文字呈現斜體，可以設定：

```css
p {
  font-style: italic;
}
```

## 語意與視覺要分開思考

`<em>` 表示語意上的強調，`font-style: italic` 則是視覺上的傾斜。兩者常常一起出現，但不是同一件事。

這個差異很重要：

- 想表達語意強調時，可以使用 `<em>`。
- 想控制是否傾斜時，使用 CSS 的 `font-style`。
- 如果 `<em>` 的預設斜體不符合設計，可以用 `font-style: normal` 重設。

## 常見錯誤

### 想取消斜體卻改 HTML 結構

如果 `<em>` 在內容上確實有強調語意，只是不想讓它顯示成斜體，不需要把 `<em>` 改成 `<span>`。應該保留語意，再用 CSS 調整樣式：

```css
em {
  font-style: normal;
}
```

### 把 `<i>` 或 `<em>` 當成單純視覺斜體工具

如果只是為了視覺效果，應優先思考是否用 class 搭配 CSS 控制樣式，而不是把語意標籤當裝飾工具。

```html
<span class="text-italic">提示文字</span>
```

```css
.text-italic {
  font-style: italic;
}
```

### 斜體用太多

大段斜體文字可讀性較差。斜體通常適合短字詞、引用、標示或局部強調，不適合整篇正文大量使用。

## 實務判斷準則

- 需要取消 `<em>`、`<i>` 的預設斜體時，使用 `font-style: normal`。
- 需要視覺斜體時，使用 `font-style: italic`。
- 語意是否強調由 HTML 決定；是否傾斜由 CSS 決定。
- 斜體應少量使用，避免影響閱讀。

## 重點整理

- `font-style` 控制文字是否使用斜體等字形風格。
- 常用值是 `normal` 與 `italic`。
- `<em>`、`<i>` 預設可能呈現斜體，但可以用 CSS 改回正常。
- 語意標籤與視覺樣式不是同一件事。

## 自我檢查

1. `font-style: normal` 的作用是什麼？
2. 為什麼有時候會對 `em` 設定 `font-style: normal`？
3. 如果只想做視覺斜體，一定要使用 `<em>` 嗎？
4. 大段文字都設成斜體可能造成什麼問題？
