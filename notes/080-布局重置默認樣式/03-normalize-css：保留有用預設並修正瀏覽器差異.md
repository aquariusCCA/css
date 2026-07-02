---
source_atomic:
  - atomic/080-布局重置默認樣式/05-normalize-css-概念與目的.md
  - atomic/080-布局重置默認樣式/06-normalize-css-源碼與使用方式.md
topics: [Normalize.css, reset.css, 跨瀏覽器差異, 基礎樣式, 可用性]
summary: "說明 Normalize.css 的策略、用途與和 reset.css 的差異。"
---

# Normalize.css：保留有用預設並修正瀏覽器差異

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 Normalize.css 和傳統 reset.css 的差異。
- 理解 Normalize.css 為什麼不是單純把所有默認樣式清掉。
- 看懂 normalize.css 中常見規則的目的。
- 判斷在專案中如何使用 Normalize.css 作為基礎樣式。

## 問題情境

傳統 reset.css 常用「清空」的方式處理瀏覽器默認樣式，例如把許多元素的 `margin`、`padding`、`font-style`、`list-style` 都歸零或移除。

這樣做可以讓頁面很可控，但也可能帶來另一個問題：有些瀏覽器預設其實是有用的，全部清掉後，你又要重新補回來。

Normalize.css 的思路比較溫和。它不是把瀏覽器預設全部抹掉，而是保留有用的預設，修正不一致或有問題的地方。

## 一句話理解

Normalize.css 是一份現代化的基礎 CSS，用來保留有用的瀏覽器默認樣式，同時修正跨瀏覽器差異與已知問題。

它可以看成 CSS reset 的替代方案，但它的目標不是「清空一切」，而是「讓預設更一致、更合理」。

## Normalize.css 的主要目的

Normalize.css 的目的可以整理成幾個方向：

1. 保護有用的瀏覽器默認樣式，而不是完全去掉它們。
2. 為大部分 HTML 元素提供一致的基礎樣式。
3. 修復瀏覽器自身的 bug，讓不同瀏覽器呈現更接近。
4. 用一些小技巧優化 CSS 的可用性。
5. 透過註釋和文件解釋每段程式碼為什麼存在。

這些目的讓 Normalize.css 很適合作為專案的基礎樣式層。

## 和 reset.css 的差異

| 比較項目 | reset.css | Normalize.css |
| --- | --- | --- |
| 核心思路 | 清除或歸零默認樣式 | 保留有用預設，修正差異 |
| 頁面起點 | 接近白紙 | 接近一致且合理的瀏覽器基礎 |
| 對預設樣式態度 | 多數清掉再重建 | 有用的保留，有問題的修正 |
| 適合情境 | 需要完全掌控視覺起點 | 希望跨瀏覽器一致，同時保留基本可讀性 |

兩者沒有絕對誰比較好，差別在於專案想要的起點。

如果你需要完全依照設計系統重建所有樣式，reset.css 可能更直觀；如果你希望保留合理預設，只修掉差異，Normalize.css 會更接近現代專案常見需求。

## 看懂 normalize.css 的代表性片段

Normalize.css 原始碼很長，不需要在學習階段逐行背誦。更重要的是理解它的規則通常都帶著「為什麼」。

### 文件層級修正

```css
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
```

這段處理的是整份文件的基礎文字行高，以及 iOS 裝置方向改變後可能出現的文字大小調整問題。

它不像 reset.css 那樣只是清空，而是在修正瀏覽器行為差異。

### 清除 body 外距

```css
body {
  margin: 0;
}
```

這段和許多 reset.css 一樣，會移除 `body` 預設外距。因為 `body` 的預設外距很常干擾布局，所以 Normalize.css 也會處理。

這也提醒我們：Normalize.css 不是完全不重置，而是只針對有必要的地方做調整。

### 讓 HTML5 元素呈現一致

```css
main {
  display: block;
}
```

這類規則用來讓某些元素在不同瀏覽器中呈現一致。對現代瀏覽器來說可能不明顯，但它反映了 Normalize.css 的目標：修正瀏覽器之間的差異，而不是盲目歸零。

### 表單元素繼承文字樣式

```css
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
```

表單元素常有各瀏覽器自己的外觀與字型。這段讓它們更接近頁面文字設定，也減少表單和周圍內容不協調的情況。

這是 Normalize.css 很典型的做法：不把表單全部清空，而是把差異調整到比較一致的基礎。

### 保留或修復可用性

```css
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
```

這段和焦點樣式有關。焦點樣式對鍵盤操作和可及性很重要，因此 Normalize.css 會在修正瀏覽器差異時注意不要讓元素失去可操作提示。

這也是它和粗暴 reset 的重要差別：不是只追求「看起來乾淨」，也要保留可用性。

## 如何使用 Normalize.css

使用 Normalize.css 時，常見有兩種方式。

### 作為專案基礎 CSS

你可以先引入 Normalize.css，再在它之上撰寫自己的布局和元件樣式。

```html
<link rel="stylesheet" href="./normalize.css">
<link rel="stylesheet" href="./styles.css">
```

這樣 Normalize.css 負責跨瀏覽器基礎一致性，`styles.css` 負責你的實際設計。

### 以 Normalize.css 為基礎再客製

另一種方式，是把 Normalize.css 視為基礎，根據專案需求調整部分規則。

例如，Normalize.css 保留了標題的基本大小與間距，但你的設計系統可能有自己的標題規範，那就可以在後續 CSS 中覆蓋：

```css
h1 {
  margin: 0 0 24px;
  font-size: 32px;
  line-height: 1.25;
}
```

Normalize.css 建立的是「一致基礎」，不是最終設計。

## 什麼時候選 Normalize.css

Normalize.css 適合這些情境：

- 你希望保留瀏覽器有用的預設可讀性。
- 你想減少不同瀏覽器之間的基礎呈現差異。
- 你不想從完全空白的樣式起點重建所有元素。
- 你正在建立一個需要長期維護的通用基礎樣式層。

如果專案已經有完整設計系統，也可以使用 Normalize.css 作為底層，再由設計系統樣式覆蓋需要的部分。

## 常見錯誤

### 誤解：Normalize.css 會讓頁面直接變漂亮

Normalize.css 只是基礎樣式，不是 UI 設計。它讓不同瀏覽器的起點更一致，但按鈕、卡片、導覽列、主題色仍然需要你自己寫 CSS。

### 誤解：Normalize.css 和 reset.css 做的是完全一樣的事

兩者都處理瀏覽器默認樣式，但策略不同。reset.css 偏向清空；Normalize.css 偏向保留有用預設並修正差異。

### 誤解：引入 Normalize.css 後就不用管元素預設樣式

Normalize.css 不會替你決定專案所有元素的最終樣式。它只建立合理基礎，後續仍要依照設計需求設定標題、段落、清單、表單和元件。

### 誤解：需要逐行背下 normalize.css 源碼

學習階段不需要背完整源碼。更重要的是看懂它的註釋和規則目的：這段是在保留預設、修正差異，還是改善可用性。

## 實務判斷

選擇 reset.css 或 Normalize.css 時，可以先問：

- 專案是否想從接近白紙的狀態開始？是的話偏向 reset.css。
- 專案是否想保留合理預設，只修掉跨瀏覽器差異？是的話偏向 Normalize.css。
- 團隊是否已有自己的基礎樣式或設計系統？若有，先看它是否已包含 reset 或 normalize。
- 是否需要支援特定舊瀏覽器？若需要，應確認使用的版本與規則是否符合支援範圍。

真正重要的不是名字，而是你知道這份基礎 CSS 做了什麼、為什麼做，以及後續樣式如何覆蓋它。

## 重點整理

- Normalize.css 是 CSS reset 的替代方案之一。
- 它保留有用的瀏覽器默認樣式，同時修正跨瀏覽器差異。
- 它不是最終設計樣式，而是專案的基礎樣式層。
- 讀 normalize.css 時，重點是理解每段規則背後的原因。
- 使用時通常先引入 Normalize.css，再撰寫自己的專案樣式。

## 自我檢查

1. Normalize.css 和傳統 reset.css 最大的策略差異是什麼？
2. 為什麼 Normalize.css 仍然會設定 `body { margin: 0; }`？
3. 表單元素使用 `font-family: inherit` 主要想解決什麼問題？
4. 為什麼不建議把 Normalize.css 當成完整 UI 設計？
5. 如果你的專案已有設計系統，使用 Normalize.css 時應注意什麼？
