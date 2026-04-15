# BEM 命名模式

## 章節入口

- 返回章節入口：[第七章 BEM 命名模式](./README.md)

## 參考文章

- [BEM 命名模式](https://medium.com/ivycodefive/bem-%E5%91%BD%E5%90%8D%E6%A8%A1%E5%BC%8F-e942fd2f816a)
- [juejin.cn](https://juejin.cn/post/6844903672162304013#heading-3)

## 關鍵字

- BEM
- Block
- Element
- Modifier
- `__`
- `--`
- class 命名
- CSS 命名規範

## 什麼是 BEM

BEM 是 `Block`、`Element`、`Modifier` 的簡寫，是一種常見的 CSS 命名方法論。

它的目的，是讓 class 名稱更容易理解，也讓元件結構更清楚。

## BEM 的三個部分

### Block

Block 是一個獨立的區塊或元件，例如卡片、表單、按鈕群組。

### Element

Element 是區塊中的子元素，不能脫離 Block 單獨理解。

### Modifier

Modifier 是狀態、變體或修飾效果，例如亮色、暗色、disabled。

## 命名規則

BEM 常見的命名方式如下：

- Block：`block`
- Element：`block__element`
- Modifier：`block--modifier`

其中：

- `__` 連接 Block 和 Element
- `--` 連接 Block 和 Modifier

## 圖示理解

![BEM 命名模式](./images/image_1776219074564_23b2a00b.png)

## 為什麼要用 BEM

BEM 的重點，不只是命名長一點，而是讓結構更清楚。

它帶來的好處包括：

- 從 class 名稱就能看出元件關係
- 比較容易維護
- 比較容易協作
- 比較不容易讓樣式互相污染

## 用卡片理解 BEM

以下用卡片元件來理解 BEM。

![卡片 BEM 範例](./images/image_1776219074569_fca6285c.png)

如果把卡片拆開來看：

- `B`：整個卡片元件
- `E`：卡片內的圖片、標題、內文
- `M`：背景色之類的變體

看過命名後，就比較容易理解元件關係：

![卡片 BEM 結構](./images/image_1776219074569_423bcfde.png)

## 一般寫法和 BEM 寫法

### 一般寫法

```html
<div class="article">
    <div class="body">
        <button class="button-primary"></button>
        <button class="button-success"></button>
    </div>
</div>
```

這種寫法可以看出大概結構，但 class 名稱和元件關係不夠明確。

### BEM 寫法

```html
<div class="article">
    <div class="article__body">
        <div class="tag"></div>
        <button class="article__button--primary"></button>
        <button class="article__button--success"></button>
    </div>
</div>
```

這種寫法把元件關係直接寫進 class 名稱裡，閱讀上更直觀。

## 什麼時候該用 BEM

不是每個 class 都需要寫成 BEM。

比較適合用 BEM 的情況是：

- 這個元素屬於某個元件的內部結構
- 這個元素和元件之間有明確關聯
- 這個元素需要表達狀態或變體

不太需要用 BEM 的情況是：

- 單純的通用工具類
- 和元件關係不大的樣式

例如：

```css
.hide {
    display: none !important;
}
```

這種就是很單純的工具類，不一定要硬套 BEM。

## BEM 搭配 SCSS

如果 class 名稱太長，可以搭配 SCSS 的巢狀寫法來減少重複。

```scss
.card {
  margin: 2em;
  max-width: 300px;
  padding: 2em;
  box-shadow: 0 10px 30px -10px rgba(0,0,0,.45);

  &--light {
    background-color: #eee;
  }

  &--dark {
    background: #333;
    color: white;
  }
}
```

這樣可以把重複的 `card` 前綴集中管理。

## 避免過深的命名

不建議把 class 寫得過度巢狀，例如 `.block__el1__el2` 這種形式。

原因是：

- 可讀性會下降
- 名稱會變得很長
- 反而不容易維護

## 推薦寫法

```scss
.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }
```

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```

## 一句話總結

BEM 是一種把元件、子元素和狀態拆清楚的命名方式，重點是讓 class 更好讀、更好維護。
