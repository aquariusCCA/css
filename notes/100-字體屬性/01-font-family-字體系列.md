---
source_atomic:
  - atomic/100-字體屬性/01-css-字體屬性概覽.md
  - atomic/100-字體屬性/02-font-family-字體系列.md
topics: [font-family, 字體清單, 後備字體, 通用字體族]
summary: "說明如何用字體清單指定優先字體與後備策略，讓文字在不同裝置上穩定呈現。"
---

# font-family：設定文字使用哪一組字體

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `font-family` 控制的是文字使用的字體系列。
- 寫出具備後備字體的字體清單。
- 理解瀏覽器如何依照順序尋找可用字體。
- 避免字體名稱、逗號與通用字體族的常見錯誤。

## 字體屬性在本章的位置

CSS 常見字體屬性包含 `font-style`、`font-weight`、`font-size`、`font-family`，以及可一次設定多個字體屬性的 `font` 複合屬性。

![CSS 字體屬性總表，整理 font-style、font-weight、font-size、font-family 與 font 連寫注意點](../../origin/100-字體屬性/assets/images/font-properties-img-001-3f6ba8.png)

這一篇先從 `font-family` 開始，因為字體系列會直接影響文字呈現的風格，也牽涉到「使用者電腦是否真的有這套字體」這個實務問題。

## 使用情境

當你希望頁面文字使用特定字體，例如英文用 Arial、中文用微軟雅黑，或希望程式碼區塊使用等寬字體，就會使用 `font-family`。

但網頁不能假設每個使用者的裝置都有同一套字體。因此實務上通常不只寫一個字體，而是寫一串字體清單，讓瀏覽器依序尋找可用字體。

## 一句話理解

`font-family` 是文字的字體候選清單，瀏覽器會從左到右嘗試，直到找到可用的字體或最後的通用字體族。

## 基本語法

```css
div {
  font-family: Arial, "Microsoft YaHei", "微软雅黑", sans-serif;
}
```

這段宣告的意思是：

1. 優先使用 `Arial`。
2. 如果需要中文字形或 Arial 不適用，嘗試 `"Microsoft YaHei"`。
3. 再嘗試 `"微软雅黑"`。
4. 如果前面字體都不可用，使用系統提供的 `sans-serif` 無襯線字體。

## 字體清單的書寫規則

字體清單要注意三件事：

- 多個字體之間使用英文逗號 `,` 分隔。
- 字體名稱包含多個單詞時，建議加上引號，例如 `"Microsoft YaHei"`。
- 清單最後建議放通用字體族，例如 `serif`、`sans-serif` 或 `monospace`。

通用字體族不是某一套特定字體，而是讓瀏覽器依照使用者系統挑選合理的後備字體。

## 瀏覽器如何選字體

瀏覽器會依照 `font-family` 清單從左到右查找：

1. 如果第一個字體可用，就優先使用。
2. 如果字體不存在，瀏覽器會看下一個字體。
3. 如果某個字體存在，但缺少正在顯示的字形，例如缺中文字，也可能繼續往後找。
4. 如果具名字體都不適用，最後使用通用字體族對應的系統後備字體。

這就是為什麼字體清單通常會同時放英文、中文與通用字體族。

## 範例拆解

```css
body {
  font-family: Arial, "Microsoft YaHei", "微软雅黑", sans-serif;
}
```

- `body`：通常用來設定整個頁面的基礎字體。
- `Arial`：常見英文字體。
- `"Microsoft YaHei"`、`"微软雅黑"`：常見中文顯示字體名稱。
- `sans-serif`：當前面字體不可用時，交給系統選擇無襯線後備字體。

如果只寫：

```css
body {
  font-family: Arial;
}
```

當頁面包含中文時，瀏覽器仍會自行找後備字體，但你沒有明確控制後備策略，跨裝置結果會比較不可預期。

## 常見錯誤

### 使用中文逗號分隔字體

```css
body {
  font-family: Arial，"Microsoft YaHei"，sans-serif;
}
```

這裡使用的是中文逗號，CSS 不會把它當成正確的字體分隔符。字體清單應使用英文逗號：

```css
body {
  font-family: Arial, "Microsoft YaHei", sans-serif;
}
```

### 多單詞字體名稱沒有加引號

瀏覽器通常仍可能解析部分未加引號的字體名稱，但為了可讀性與穩定性，多單詞字體名稱建議加引號。

```css
body {
  font-family: "Microsoft YaHei", sans-serif;
}
```

### 清單最後沒有通用字體族

```css
body {
  font-family: "Some Custom Font";
}
```

如果這套字體不存在，瀏覽器仍會 fallback，但你沒有明確指定希望落在哪一類字體。較好的寫法是補上通用字體族：

```css
body {
  font-family: "Some Custom Font", sans-serif;
}
```

## 實務判斷準則

- 頁面基礎字體通常設定在 `body`。
- 字體清單應由「最想使用的字體」排到「最通用的後備類型」。
- 中英文混排時，要考慮英文字體與中文字體是否都能正常顯示。
- 清單最後放通用字體族，讓不可用情況仍有合理退路。

## 重點整理

- `font-family` 用來指定文字的字體候選清單。
- 多個字體之間用英文逗號分隔。
- 多單詞字體名稱建議加引號。
- 瀏覽器會從左到右尋找可用字體，也會在缺字時尋找後備字體。
- 清單最後建議放 `serif`、`sans-serif`、`monospace` 等通用字體族。

## 自我檢查

1. 為什麼 `font-family` 通常不只寫一個字體？
2. `Arial, "Microsoft YaHei", sans-serif` 中，瀏覽器會先嘗試哪個字體？
3. 多個字體之間應該使用中文逗號還是英文逗號？
4. 為什麼字體清單最後建議放通用字體族？
