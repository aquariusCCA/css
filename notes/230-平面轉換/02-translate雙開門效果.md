---
source_atomic:
  - atomic/230-平面轉換/03-translate雙開門效果.md
topics: [translateX, 偽元素, 雙開門效果, overflow hidden, transition]
summary: "說明用偽元素與 translateX 製作 hover 雙開門動畫。"
---

# translate 雙開門效果

## 學習目標

讀完這篇筆記，你應該能夠：

- 使用偽元素建立左右兩片遮罩門。
- 透過 `translateX()` 讓左右門片分別向外移動。
- 理解 `overflow: hidden`、`position: relative` 與絕對定位在效果中的角色。
- 避免偽元素沒有顯示、門片方向錯誤、動畫超出容器等常見問題。

## 問題情境

有些圖片或區塊在 hover 時會做「左右打開」的效果：滑鼠移入前，左右兩片遮罩蓋住內容；滑鼠移入後，左邊往左移出、右邊往右移出，像雙開門一樣露出底下內容。

這種效果不需要額外寫兩個空標籤，可以用 `::before` 和 `::after` 當作左右門片，再用 `translateX()` 控制它們往左右移動。

## 一句話理解

雙開門效果就是讓左右兩個絕對定位的偽元素，在 hover 時分別 `translateX(-100%)` 和 `translateX(100%)`。

## 結構規劃

HTML 只需要一個容器：

```html
<div class="box"></div>
```

CSS 會把 `.box::before` 當作左門片，`.box::after` 當作右門片：

| 元素 | 角色 | 初始位置 | hover 後 |
| --- | --- | --- | --- |
| `.box` | 外層容器 | 固定寬高，裁切溢出內容 | 保持不動 |
| `.box::before` | 左門片 | 放在容器左半邊 | 往左移出 |
| `.box::after` | 右門片 | 放在容器右半邊 | 往右移出 |

## 完整範例

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>translate doors</title>
  <style>
    .box {
      position: relative;
      overflow: hidden;
      width: 600px;
      height: 200px;
      border: 1px solid #333;
    }

    .box::before,
    .box::after {
      content: '';
      position: absolute;
      width: 50%;
      height: 100%;
      transition: all 0.5s;
    }

    .box::before {
      left: 0;
      top: 0;
      background-color: skyblue;
    }

    .box::after {
      right: 0;
      top: 0;
      background-color: yellow;
    }

    .box:hover::before {
      transform: translateX(-100%);
    }

    .box:hover::after {
      transform: translateX(100%);
    }
  </style>
</head>

<body>
  <div class="box"></div>
</body>

</html>
```

## 範例拆解

`.box` 是整個效果的舞台：

```css
.box {
  position: relative;
  overflow: hidden;
  width: 600px;
  height: 200px;
  border: 1px solid #333;
}
```

`position: relative` 讓左右門片可以用 `.box` 作為定位基準。`overflow: hidden` 讓門片往外移動時，超出容器的部分被裁切，不會在容器外面露出。

兩個偽元素共用門片基本樣式：

```css
.box::before,
.box::after {
  content: '';
  position: absolute;
  width: 50%;
  height: 100%;
  transition: all 0.5s;
}
```

這裡最容易漏掉的是 `content: ''`。偽元素如果沒有 `content`，通常不會產生可見盒子。

左門片放在左半邊：

```css
.box::before {
  left: 0;
  top: 0;
  background-color: skyblue;
}
```

右門片放在右半邊：

```css
.box::after {
  right: 0;
  top: 0;
  background-color: yellow;
}
```

hover 時，兩片門分別向外移動：

```css
.box:hover::before {
  transform: translateX(-100%);
}

.box:hover::after {
  transform: translateX(100%);
}
```

`translateX(-100%)` 會讓左門片向左移動自身寬度的 100%。因為左門片寬度剛好是容器的一半，所以會完整移出左側。

`translateX(100%)` 則讓右門片向右移動自身寬度的 100%，完整移出右側。

## 常見錯誤

### 偽元素沒有 content

如果少了 `content: ''`，`::before` 和 `::after` 可能不會生成盒子，後面的寬高、背景色和 transform 都看不到效果。

```css
.box::before,
.box::after {
  content: '';
}
```

### 忘記讓容器 overflow hidden

雙開門移出時，門片會跑到容器外。如果 `.box` 沒有 `overflow: hidden`，移出的門片仍可能在外面被看見，效果就不像「打開後消失」。

### 左右方向寫反

左門片要往左，所以是 `translateX(-100%)`；右門片要往右，所以是 `translateX(100%)`。如果方向寫反，兩片門會往中間擠或互相重疊。

### 門片寬度不是 50%

這個範例假設左右各一半，所以偽元素寬度是 `50%`。如果門片寬度不是一半，`translateX(100%)` 仍是移動「自身寬度」，需要重新確認視覺效果。

## 實務改造方向

這個效果可以延伸到更多場景：

- 在 `.box` 裡放圖片或文字，讓門片打開後露出內容。
- 將左右門片改成半透明背景，做圖片遮罩開門效果。
- 調整 `transition-duration`，控制門片打開速度。
- 改用不同顏色、背景圖或漸層作為門片。

## 重點整理

- 雙開門效果可用 `::before` 和 `::after` 建立左右門片。
- 偽元素需要 `content: ''` 才能穩定生成。
- 外層容器需要 `position: relative` 與 `overflow: hidden`。
- 左門片使用 `translateX(-100%)`，右門片使用 `translateX(100%)`。
- `transition` 負責讓位移從瞬間跳動變成平滑動畫。

## 自我檢查

1. 為什麼 `.box::before` 和 `.box::after` 必須設定 `content: ''`？
2. 外層 `.box` 的 `overflow: hidden` 在雙開門效果中負責什麼？
3. 左門片為什麼使用 `translateX(-100%)`？
4. 如果希望門片打開得慢一點，應該調整哪個屬性？
