---
source_atomic:
  - atomic/130-盒子模型/07-padding-基本語法.md
  - atomic/130-盒子模型/08-padding-影響盒子實際大小.md
  - atomic/130-盒子模型/09-padding-不影響盒子大小的情況.md
---

# padding：內容與邊框之間的距離

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `padding` 控制的是哪一段距離。
- 使用一到四值簡寫設定不同方向的內邊距。
- 理解 padding 在預設盒模型中會影響盒子實際大小。
- 說明未設定寬度的塊級盒子中，水平方向 padding 的尺寸表現。
- 判斷什麼時候可以用 padding 撐開可點擊區或導航項目。

## 使用情境

當盒子裡的內容貼著邊框，看起來太擠時，就需要 `padding`。

例如：

- 卡片文字不要貼著卡片邊緣。
- 按鈕文字和按鈕邊框之間要留空間。
- 導航連結需要更大的點擊區域。

這些都是內容和邊框之間的距離問題。

## 一句話理解

`padding` 是盒子內容區和邊框之間的內部空間。

![padding-left padding-right padding-top padding-bottom 屬性作用表](../../origin/130-盒子模型/assets/images/box-padding-img-001-c208a5.png)

它位於 content 外側、border 內側，因此背景色通常會延伸到 padding 區域。

## 基本語法

可以單獨設定某個方向：

```css
.box {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}
```

也可以使用簡寫：

```css
padding: 上 右 下 左;
padding: 上 左右 下;
padding: 上下 左右;
padding: 上下左右;
```

![padding 簡寫中一到四個值的對應方向表](../../origin/130-盒子模型/assets/images/box-padding-img-002-1510d3.png)

方向記憶方式是：從上開始，順時針走。

## 一到四值拆解

```css
.box-a {
  padding: 20px;
}
```

四個方向都是 `20px`。

```css
.box-b {
  padding: 10px 20px;
}
```

上下 `10px`，左右 `20px`。

```css
.box-c {
  padding: 10px 20px 30px;
}
```

上 `10px`，左右 `20px`，下 `30px`。

```css
.box-d {
  padding: 10px 20px 30px 40px;
}
```

上 `10px`，右 `20px`，下 `30px`，左 `40px`。

## padding 會影響盒子實際大小

當盒子已經有指定的 `width` 和 `height` 時，再加上 padding，會發生兩件事：

- 內容和邊框之間產生距離。
- 盒子的實際大小被 padding 撐大。

![padding 會增加盒子實際寬高的示意圖](../../origin/130-盒子模型/assets/images/box-padding-img-003-3dcae2.png)

例如：

```css
div {
  width: 160px;
  height: 160px;
  background-color: pink;
  padding: 20px;
}
```

在預設盒模型中，實際寬高會變成：

```text
實際寬度 = 160px + 20px + 20px = 200px
實際高度 = 160px + 20px + 20px = 200px
```

如果設計稿要求盒子最終大小就是 `160px * 160px`，就需要扣掉 padding，或改用 `box-sizing: border-box`。

## padding 撐開內容區的好處

padding 影響盒子大小不一定是壞事。有些場景正是要利用 padding 撐開空間。

例如導航列中，每個連結文字長度不同，如果硬給每個盒子固定寬度，可能不夠彈性。這時可以讓文字內容決定基本寬度，再用左右 padding 撐開點擊區。

![導航列透過 padding 撐開連結間距的示例](../../origin/130-盒子模型/assets/images/box-padding-img-004-835d5f.png)

```css
.nav a {
  display: inline-block;
  padding: 0 16px;
  line-height: 40px;
}
```

這樣每個連結可以依文字長度自然變寬，同時保留一致的左右空間。

## 未設定寬度時的尺寸表現

如果一個塊級盒子沒有指定 `width`，它通常會自動填滿父容器可用寬度。

在這種情況下，水平方向的 padding 通常不會讓盒子超出父容器，而是讓 content 區域自動縮小來容納 padding。

例如：

```css
.parent {
  width: 300px;
  background-color: purple;
}

.child {
  padding: 30px;
  background-color: skyblue;
}
```

`.child` 沒有指定 `width`，它會在父容器寬度內安排 content 和 padding。

但要注意：padding 仍然是盒子實際尺寸的一部分。未設定 `height` 時，垂直方向 padding 仍會增加盒子的實際高度。

## 常見錯誤

### 誤解：padding 只是把內容往裡推，不會改變盒子大小

在預設盒模型中，如果盒子已有明確 `width` 或 `height`，padding 會增加盒子實際大小。這是造成版面超出設計稿的常見原因。

### 誤解：padding 和 margin 都只是空白，隨便用

padding 是盒子內部空間，背景色會涵蓋 padding；margin 是盒子外部距離，背景色不會涵蓋。兩者用途不同。

### 誤解：所有盒子加 padding 都一定會超出父容器

未指定 `width` 的塊級盒子，水平方向通常會自動縮小 content 區域來容納 padding，不一定超出父容器。

## 實務判斷

可以這樣判斷是否該用 padding：

- 想讓內容不要貼著邊框：用 padding。
- 想增加按鈕或連結的點擊區：用 padding。
- 想讓背景色延伸到空白區域：用 padding。
- 想拉開兩個盒子的距離：通常用 margin。

## 重點整理

- `padding` 是 content 和 border 之間的內部空間。
- padding 簡寫方向是上、右、下、左。
- 預設盒模型中，已指定寬高的盒子會被 padding 撐大。
- 未指定寬度的塊級盒子，水平方向 content 會自動縮小容納 padding。
- padding 常用來增加內容舒適度和可點擊範圍。

## 自我檢查

1. `padding: 10px 20px;` 分別代表哪些方向？
2. 一個盒子 `width: 160px`，左右 padding 各 `20px`，預設盒模型下實際寬度是多少？
3. 為什麼導航列連結常用左右 padding，而不是每個連結都設定固定寬度？
4. padding 和 margin 在背景色覆蓋範圍上有什麼差異？
