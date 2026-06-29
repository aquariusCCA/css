# **1. 行內樣式表**

> 行內樣式表是在元素標籤內部的 style 屬性中設定 CSS 樣式，適合於修改簡單樣式。

- style 其實就是標籤的屬性。
- 在雙引號中間，寫法要符合 CSS 規範。
- 可以控制當前的標籤設置樣式。

```html
<p style="color: pink; font-size: 20px;">給我一個粉紅的回憶</p>
```

> **⚠️ 由於書寫繁瑣，並且沒有體現出結構與樣式相分離的思想，所以不推薦大量使用，只有對當前元素添加簡單樣式的時候，可以考慮使用。**


# **2. 內部樣式表**

> 內部樣式表是寫到 HTML 頁面內部，是將所有的 CSS 代碼抽取出來，單獨放到一個 `<style>` 標籤中。

- `<style>` 標籤理論上可以放在 HTML 文檔的任何地方，但一般都會放在文檔的 `<head>` 標籤中。
- 使用內部樣式表設定 CSS，通常也被稱為嵌入式引入，這種方式是我們練習時常用的方式。
- 通過此種方式，可以方便控制當前整個頁面中的元素樣式設置。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>内部样式表</title>
    <style>
        div {
            color: pink;
        }
    </style>
</head>

<body>
    <div>所謂內部樣式表,就是在html頁面內部寫樣式,但是是單獨寫到style標籤內部.</div>
</body>

</html>
```

> **💡 代碼結構清晰，但是並沒有實現結構與樣式完全分離。**

# **3. 外部樣式表**

> 實際開發都是使用外部樣式表，適合於樣式比較多的情況，核心是樣式單獨寫到 CSS 文件中，之後把 CSS 文件引入到 HTML 頁面中使用。

- 引入外部樣式表分為兩步 :
    - Step 1: 新建一個後綴名為 `.css` 的樣式文件，把所有 CSS 代碼都放入此文件中。
    - Step 2: 在 HTML 頁面中，使用 `<link>` 標籤引入這個文件。

```css
/* 這 style.css 文件裡面只有樣式沒有標籤 */
div {
    color:  pink;
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div>來呀~快活呀,反正有大把時間...</div>
</body>
</html>
```

# **4. 總結**

![CSS的引入方式總結.png](%E7%AC%AC03%E7%AB%A0_CSS%E7%9A%84%E5%BC%95%E5%85%A5%E6%96%B9%E5%BC%8F/CSS%25E7%259A%2584%25E5%25BC%2595%25E5%2585%25A5%25E6%2596%25B9%25E5%25BC%258F%25E7%25B8%25BD%25E7%25B5%2590.png)

- 外部樣式
    - 作用範圍 : 多個頁面
    - 缺點
        - 需要引入才能使用。
    - 優點
        - 樣式可多個頁面複用。
        - 代碼結構清晰。
        - 可觸發瀏覽器的緩存機制。
        - 結構與樣式徹底分離。
- 內部樣式
    - 作用範圍 : 當前頁面。
    - 缺點
        - 結構與樣式未徹底分離。
        - 樣式不能多個頁面複用。
    - 優點
        - 樣式可複用。
        - 代碼結構清晰。
- 行內樣式
    - 作用範圍 : 當前標籤。
    - 缺點
        - 結構與樣式未分離。
        - 代碼結構混亂。
        - 樣式不能複用。
    - 優點
        - 優先級最高。