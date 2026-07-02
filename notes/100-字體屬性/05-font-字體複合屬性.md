---
source_atomic:
  - atomic/100-字體屬性/06-font-字體複合屬性.md
topics: [font, 複合屬性, font-size, font-family, line-height]
summary: "說明 font 簡寫的必要項目、書寫順序、行高語法與省略值重設風險。"
---

# font：一次設定多個字體屬性

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `font` 是字體相關屬性的複合寫法。
- 正確安排 `font-style`、`font-weight`、`font-size/line-height`、`font-family` 的順序。
- 知道 `font-size` 與 `font-family` 在 `font` 簡寫中不可省略。
- 避免複合屬性把未寫出的字體設定重設回初始值。

## 使用情境

當你需要同時設定文字樣式、粗細、大小、行高與字體系列時，可以使用 `font` 複合屬性節省程式碼。

不過 `font` 的語法比單一屬性更嚴格。它適合在你清楚知道要一次設定哪些字體屬性時使用，不適合隨手把零散值塞在一起。

## 一句話理解

`font` 是字體屬性的簡寫，但至少必須包含 `font-size` 和 `font-family`，且順序不能亂。

## 基本順序

常見順序如下：

```text
font-style font-weight font-size/line-height font-family
```

範例：

```css
div {
  font: italic 700 16px/1.5 "Microsoft YaHei", "微软雅黑", sans-serif;
}
```

這一行等價於同時設定多個字體相關屬性：

```css
div {
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  font-family: "Microsoft YaHei", "微软雅黑", sans-serif;
}
```

## 範例拆解

```html
<div>正在努力學習前端知識中 ... </div>
```

```css
div {
  font: italic 700 16px/1.5 "Microsoft YaHei", "微软雅黑", sans-serif;
}
```

逐段看：

- `italic`：設定 `font-style`，讓文字傾斜。
- `700`：設定 `font-weight`，讓文字加粗。
- `16px`：設定 `font-size`，文字大小為 16 像素。
- `/1.5`：設定 `line-height`，行高為字號的 1.5 倍。
- `"Microsoft YaHei", "微软雅黑", sans-serif`：設定 `font-family`，並提供後備字體族。

## 必填項目

使用 `font` 時，`font-size` 和 `font-family` 必須出現，否則整個 `font` 宣告無效。

```css
/* 錯誤：缺少 font-family */
.title {
  font: italic 700 16px;
}
```

```css
/* 正確 */
.title {
  font: italic 700 16px "Microsoft YaHei", sans-serif;
}
```

## 可選值與順序限制

`font-style`、`font-variant`、`font-weight` 等可選值必須寫在 `font-size` 前面。若省略這些值，它們不是保留原本設定，而是回到初始值。

例如：

```css
.card {
  font-style: italic;
  font-weight: 700;
  font: 16px Arial, sans-serif;
}
```

最後一行 `font: 16px Arial, sans-serif;` 會把未寫出的 `font-style`、`font-weight` 重設回初始值，導致前面的 `italic` 與 `700` 不再生效。

這是複合屬性最容易踩到的地方：它不是只補上你有寫的部分，而是一次重新設定整組相關屬性。

## 行高的寫法

如果要在 `font` 裡同時設定行高，`line-height` 必須緊接在 `font-size` 後面，並用 `/` 分隔：

```css
.article {
  font: 16px/1.6 Arial, sans-serif;
}
```

錯誤示例：

```css
.article {
  font: 16px Arial, sans-serif / 1.6;
}
```

`/1.6` 放錯位置，瀏覽器無法依照 `font` 語法正確解析。

## 常見錯誤

### 漏掉 `font-size` 或 `font-family`

`font` 宣告至少要包含大小與字體系列。缺少其中任何一個，整條宣告都會失效。

### 把 `font-family` 放在前面

```css
.text {
  font: Arial 16px;
}
```

字體系列必須放在 `font-size` 之後，而且通常在最後：

```css
.text {
  font: 16px Arial, sans-serif;
}
```

### 以為省略值會保留原設定

複合屬性會重設相關子屬性。若不希望 `font-style` 或 `font-weight` 被重設，就要在 `font` 裡明確寫出，或改用單一屬性分開設定。

## 實務判斷準則

- 如果只改一個字體屬性，優先使用單一屬性，例如 `font-size`。
- 如果要一次設定完整文字樣式，可使用 `font`。
- 使用 `font` 時，務必檢查 `font-size`、`line-height`、`font-family` 的位置。
- 不熟悉複合屬性的重設行為時，分開寫會更安全。

## 重點整理

- `font` 是字體相關屬性的複合寫法。
- 基本順序可記為：樣式、粗細、大小/行高、字體。
- `font-size` 和 `font-family` 是必填項目。
- `line-height` 必須寫成 `font-size/line-height`。
- 省略的可選值會回到初始值，不是保留原本設定。

## 自我檢查

1. `font: italic 700 16px/1.5 Arial, sans-serif;` 中的 `700` 代表哪個屬性？
2. 使用 `font` 複合屬性時，哪兩個項目不可省略？
3. 為什麼 `font: 16px Arial, sans-serif;` 可能會讓原本的斜體或粗體消失？
4. 如果要同時設定字號與行高，`line-height` 應該放在哪裡？
