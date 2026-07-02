---
source_atomic:
  - atomic/180-漸變linear-gradient/01-linear-gradient-基本語法.md
  - atomic/180-漸變linear-gradient/02-linear-gradient-圖片遮罩實戰.md
---

# linear-gradient：建立線性漸層與圖片遮罩

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解 `linear-gradient()` 可以建立線性漸層背景。
- 使用 `background-image` 套用由透明到半透明黑色的漸層。
- 看懂圖片卡片中 `.cover`、`.title`、`.mask` 的分工。
- 使用漸層遮罩提升圖片上文字的可讀性。
- 判斷製作 hover 圖片遮罩時需要注意哪些定位與疊放條件。

## 問題情境

圖片上直接放白色文字時，很容易遇到一個問題：圖片亮的地方會讓文字看不清楚。如果只加一整片半透明黑色，又可能讓整張圖片都變暗，視覺效果太重。

更常見的做法是只在文字附近加上一層漸層遮罩，讓畫面從透明慢慢過渡到半透明黑色。這樣圖片上方仍保留原本亮度，文字所在區域則有足夠對比。

## 一句話理解

`linear-gradient()` 是一種 CSS 圖像函式，可以建立「沿著一條直線變化」的背景圖，常搭配 `background-image` 使用。

## 基本語法

最簡單的線性漸層可以只寫兩個顏色值：

```css
.box {
  width: 200px;
  height: 200px;
  background-image: linear-gradient(transparent, rgba(0, 0, 0, .5));
}
```

```html
<div class="box"></div>
```

這段 CSS 的意思是：

- `linear-gradient(...)`：建立一張線性漸層圖像。
- `transparent`：漸層起點是透明。
- `rgba(0, 0, 0, .5)`：漸層終點是 50% 不透明的黑色。
- `background-image`：把這張漸層圖像放到元素背景上。

多個顏色值用逗號分隔，瀏覽器會依序在這些顏色之間產生平滑過渡。

## 為什麼它寫在 background-image

`linear-gradient()` 產生的是一種 CSS `<image>`，不是單純的顏色值。因此它通常放在 `background-image`，而不是 `background-color`。

```css
.box {
  background-image: linear-gradient(transparent, rgba(0, 0, 0, .5));
}
```

這一點和一般背景圖片很像：背景圖片可以是 `url(...)` 指向的檔案，也可以是 `linear-gradient(...)` 這種由 CSS 直接產生的圖像。

## 圖片遮罩的實作思路

圖片卡片遮罩通常會拆成三層：

| 層級 | 元素 | 責任 |
| --- | --- | --- |
| 圖片層 | `.cover` | 顯示原始圖片，可在 hover 時放大 |
| 文字層 | `.title` | 放在圖片下方，顯示標題文字 |
| 遮罩層 | `.mask` | 疊在圖片上，使用漸層背景提高文字可讀性 |

核心概念是讓卡片本身成為定位容器，圖片、文字與遮罩都放在這個容器內，再用絕對定位把文字與遮罩疊到圖片上。

## 完整範例

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>linear-gradient mask</title>
  <style>
    p {
      margin: 0;
      padding: 0;
    }

    .box {
      display: block;
      width: 200px;
      height: 150px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
    }

    .box .cover {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.5s;
    }

    .box .title {
      position: absolute;
      width: 100%;
      height: 50px;
      padding: 10px;
      bottom: 0;
      left: 0;
      color: white;
      box-sizing: border-box;
      z-index: 2;
    }

    .box .mask {
      position: absolute;
      opacity: 0;
      transition: all 0.5s;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: linear-gradient(transparent, rgba(0, 0, 0, .6));
    }

    .box:hover .mask {
      opacity: 1;
    }

    .box:hover .cover {
      transform: scale(1.2);
    }
  </style>
</head>

<body>
  <a class="box" href="#">
    <img class="cover" src="../../origin/180-漸變linear-gradient/assets/images/linear-gradient-img-001-354aea.jpg" alt="穿黑色西裝揮手的男士照片">

    <div class="title">
      <p>百日依山尽</p>
    </div>

    <div class="mask"></div>
  </a>
</body>

</html>
```

## 範例拆解

`.box` 是整張卡片的容器：

```css
.box {
  display: block;
  width: 200px;
  height: 150px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
```

這裡有兩個重要設定：

- `position: relative`：讓內部的 `.title` 和 `.mask` 可以以 `.box` 為基準做絕對定位。
- `overflow: hidden`：圖片 hover 放大時，超出卡片範圍的部分會被裁切，不會溢出來。

圖片層 `.cover` 負責填滿容器：

```css
.box .cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s;
}
```

`object-fit: cover` 讓圖片填滿 200px x 150px 的區域，即使圖片比例不同，也會以裁切方式維持視覺填滿。

文字層 `.title` 固定在卡片底部：

```css
.box .title {
  position: absolute;
  width: 100%;
  height: 50px;
  padding: 10px;
  bottom: 0;
  left: 0;
  color: white;
  box-sizing: border-box;
  z-index: 2;
}
```

`bottom: 0` 和 `left: 0` 讓標題貼齊卡片左下角。`z-index: 2` 讓文字層壓在遮罩層上方，避免文字被遮罩蓋住。

遮罩層 `.mask` 覆蓋整張圖片：

```css
.box .mask {
  position: absolute;
  opacity: 0;
  transition: all 0.5s;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(transparent, rgba(0, 0, 0, .6));
}
```

這裡的漸層從透明過渡到 60% 不透明黑色。因為沒有指定方向，瀏覽器會使用預設方向，也就是由上往下漸變。這正好適合圖片卡片：上方保持透明，下方逐漸變暗，讓底部文字更清楚。

hover 時再讓遮罩出現、圖片放大：

```css
.box:hover .mask {
  opacity: 1;
}

.box:hover .cover {
  transform: scale(1.2);
}
```

`opacity` 從 `0` 變成 `1`，搭配 `transition` 形成淡入效果。圖片的 `transform: scale(1.2)` 則讓卡片在滑鼠移入時有放大的動態感。

## 常見錯誤

### 把 linear-gradient 寫到 background-color

`linear-gradient()` 是 CSS 圖像函式，不是單一顏色。若要把它當背景使用，應放在 `background-image` 或 `background` 中。

```css
/* 建議 */
.box {
  background-image: linear-gradient(transparent, rgba(0, 0, 0, .6));
}
```

### 忘記讓父層成為定位容器

如果 `.box` 沒有 `position: relative`，內部的絕對定位元素可能會改以其他祖先元素或頁面作為定位基準，導致遮罩和文字沒有疊在圖片上。

```css
.box {
  position: relative;
}
```

### 遮罩蓋住文字

遮罩和文字都使用絕對定位時，需要注意疊放順序。範例中讓 `.title` 有 `z-index: 2`，確保文字在遮罩上方。如果文字被遮住，先檢查 `z-index` 和定位設定。

### 圖片放大後溢出卡片

`transform: scale(1.2)` 會讓圖片視覺尺寸變大。如果 `.box` 沒有 `overflow: hidden`，圖片可能超出卡片範圍。想做卡片內放大效果時，通常會把外層容器設為 `overflow: hidden`。

## 實務判斷準則

- 需要平滑的背景過渡效果時，可以使用 `linear-gradient()`。
- 只是單一底色時，用 `background-color` 即可。
- 圖片上文字不清楚時，可以用透明到半透明黑色的漸層遮罩。
- 做遮罩疊層時，先確認父層定位、遮罩尺寸、文字疊放順序。
- hover 動態效果要搭配 `transition`，否則變化會太突然。

## 延伸參考

- [CSS 渐变](https://www.w3school.com.cn/css/css3_gradients.asp)
- [CSS 径向渐变](https://www.w3school.com.cn/css/css3_gradients_radial.asp)

## 重點整理

- `linear-gradient()` 可建立線性漸層，常搭配 `background-image`。
- 漸層色標使用逗號分隔，瀏覽器會在色標之間產生平滑過渡。
- `linear-gradient(transparent, rgba(0, 0, 0, .6))` 很適合做圖片下方遮罩。
- 圖片遮罩通常需要 `position: relative`、`position: absolute`、`overflow: hidden` 和適當的 `z-index` 配合。
- `opacity` 與 `transform` 搭配 `transition` 可以做出 hover 淡入與圖片放大的效果。

## 自我檢查

1. 為什麼 `linear-gradient()` 通常寫在 `background-image`，而不是 `background-color`？
2. `linear-gradient(transparent, rgba(0, 0, 0, .6))` 會產生什麼樣的視覺效果？
3. 圖片卡片中的 `.box` 為什麼需要 `position: relative`？
4. 如果 hover 時圖片放大後超出卡片範圍，應該檢查哪個 CSS 屬性？
5. 為什麼標題文字層需要注意 `z-index`？
