---
source_atomic:
  - atomic/230-平面轉換/07-scale縮放語法與放大效果.md
  - atomic/230-平面轉換/08-多重transform綜合寫法與順序.md
---

# scale 縮放與多重 transform 順序

## 學習目標

讀完這篇筆記，你應該能夠：

- 使用 `scale()` 放大或縮小元素。
- 理解 `scale(2)`、`scale(0.5)` 與 `scale(x, y)` 的差異。
- 說明 `scale` 和 `translate` 一樣不會影響其他盒子的排版位置。
- 使用 `translate(-50%, -50%) scale(...)` 製作居中放大效果。
- 理解多個 transform function 寫在一起時，順序會影響結果。

## 問題情境

常見的 hover 效果不只會移動元素，也會讓圖示或圖片放大。例如滑鼠移入卡片時，中間出現一個放大的圖示；或讓圓形元素一邊移動一邊旋轉。

這些效果通常不是單一 transform 就能完成，而是會把 `translate()`、`scale()`、`rotate()` 放在同一個 `transform` 裡。這時要同時理解縮放語法與書寫順序。

## 一句話理解

`scale()` 控制元素視覺上的放大或縮小；多個 transform function 寫在同一個 `transform` 中時，順序不同，得到的視覺結果也可能不同。

## scale 基本語法

`scale()` 可以控制 X 軸與 Y 軸縮放倍率：

```css
transform: scale(x軸縮放倍數, y軸縮放倍數);
```

也可以只寫一個值，代表 X 軸與 Y 軸等比例縮放：

```css
transform: scale(縮放倍數);
```

常見寫法：

```css
.same-size {
  transform: scale(1, 1);
}

.larger {
  transform: scale(2, 2);
}

.larger-short {
  transform: scale(2);
}

.smaller {
  transform: scale(0.5, 0.5);
}
```

各自代表：

- `scale(1, 1)`：維持原尺寸，相當於沒有縮放。
- `scale(2, 2)`：寬與高都放大 2 倍。
- `scale(2)`：等同 `scale(2, 2)`。
- `scale(0.5, 0.5)`：寬與高都縮小成一半。

## scale 的特性

`scale` 和 `translate` 一樣，改變的是元素繪製後的視覺結果，不會讓其他盒子重新排版。

這代表元素看起來變大或變小，但它原本在文件流中佔據的空間仍維持不變。做 hover 放大效果時，常會搭配外層容器的 `overflow: hidden`，避免放大後的內容溢出。

`scale` 也會受到 `transform-origin` 影響。預設情況下，元素會從中心點縮放；如果把轉換原點改到左上角，縮放看起來就會從左上角展開。

## 居中放大效果

下面範例會在卡片中間放一個偽元素圖示，預設縮小到 `scale(0)` 並透明；hover 時變成 `scale(1)` 並顯示。

```html
<div class="box">
  <div class="cover"></div>
  <p>欲把西湖比西子</p>
  <p>淡妆浓抹总相宜</p>
</div>
```

```css
.box {
  height: 250px;
  width: 200px;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid #666;
  text-align: center;
}

.cover {
  position: relative;
  width: 200px;
  height: 150px;
  background-color: skyblue;
}

.cover::after {
  position: absolute;
  content: '';
  left: 50%;
  top: 50%;
  width: 40px;
  height: 40px;
  background-image: url(../../origin/230-平面轉換/assets/images/scale-img-001-e2d385.jpg);
  background-size: contain;
  transition: all .5s;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
}

.box:hover .cover::after {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
```

## 範例拆解

`.cover` 是偽元素的定位容器：

```css
.cover {
  position: relative;
}
```

偽元素先用 `left: 50%` 和 `top: 50%` 把左上角放到容器中心：

```css
.cover::after {
  position: absolute;
  left: 50%;
  top: 50%;
}
```

接著用 `translate(-50%, -50%)` 把偽元素依自身寬高往左上拉回一半，讓中心點對齊容器中心。

```css
transform: translate(-50%, -50%) scale(0);
```

這裡把 `translate` 和 `scale` 寫在同一個 `transform` 裡，因為同一個元素只能以一個 `transform` 宣告整組轉換。hover 時改成：

```css
transform: translate(-50%, -50%) scale(1);
```

偽元素就會維持在中心，同時從縮小不可見變成原始大小。

`opacity` 則負責透明度：

```css
opacity: 0;
```

hover 時變成：

```css
opacity: 1;
```

因此整個效果是「圖示在中心淡入並放大」。

## 多重 transform 寫法

如果同時需要位移、縮放、旋轉，應寫在同一個 `transform` 中：

```css
transform: translate(20px, 0) scale(1.2) rotate(15deg);
```

例如：

```css
.box {
  transform: translate(400px) rotate(360deg);
}
```

多個 transform function 的順序會影響結果。尤其當旋轉和位移同時存在時，旋轉可能讓後續視覺方向和預期不同。實務上應固定一套清楚的書寫順序，並用實際效果確認是否符合需求。

## 綜合範例

```html
<div class="wrap">
  <div class="box"></div>
</div>
```

```css
.wrap {
  width: 600px;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #666;
}

.box {
  position: relative;
  height: 200px;
  width: 200px;
  overflow: hidden;
  border-radius: 50%;
  background-color: skyblue;
  transition: all 3s;
}

.box::before {
  position: absolute;
  width: 200px;
  height: 100px;
  content: '';
  background-color: yellow;
}

.wrap:hover .box {
  transform: translate(400px) rotate(360deg);
}
```

這個範例讓 `.box` 在 hover 時往右移動並旋轉一圈。`transition: all 3s` 讓整個變化變成 3 秒動畫。

## 常見錯誤

### 以為 scale 會改變排版空間

`scale(2)` 會讓元素看起來變成 2 倍大，但不會讓其他元素重新排版。如果放大後蓋住旁邊元素，這是 transform 的視覺效果，不是文件流重新計算。

### 重複宣告 transform

這是最常見的錯誤之一：

```css
.box {
  transform: translate(-50%, -50%);
  transform: scale(1);
}
```

後面的 `transform: scale(1)` 會覆蓋前面的 `translate(-50%, -50%)`，導致置中失效。應改成：

```css
.box {
  transform: translate(-50%, -50%) scale(1);
}
```

### 忽略 transform 順序

`transform: translate(...) rotate(...)` 和 `transform: rotate(...) translate(...)` 不一定會得到同樣的視覺結果。當效果不如預期時，除了檢查數值，也要檢查 function 的書寫順序。

### 忘記設定 transform-origin

`scale` 預設從中心縮放。如果你期待它從左上角、右下角或某個邊緣展開，就需要另外設定 `transform-origin`。

## 實務判斷準則

- 單純放大或縮小：使用 `scale()`。
- 要從中心淡入放大：常搭配 `opacity`、`transition`、`scale()`。
- 要同時置中與縮放：把 `translate(-50%, -50%)` 和 `scale(...)` 寫在同一個 `transform`。
- 要同時位移、旋轉、縮放：注意 transform function 的順序。
- 放大後不想溢出容器：外層可搭配 `overflow: hidden`。

## 重點整理

- `scale(1)` 維持原尺寸，`scale(2)` 放大 2 倍，`scale(0.5)` 縮小一半。
- `scale(x, y)` 可以分別控制水平與垂直縮放。
- `scale` 不會影響其他盒子的排版位置。
- 同一元素要組合多個轉換時，必須寫在同一個 `transform` 宣告中。
- 多個 transform function 的順序會影響視覺結果。

## 自我檢查

1. `scale(2)` 和 `scale(2, 2)` 是否等效？
2. `scale(0.5, 0.5)` 代表放大還是縮小？
3. 為什麼 `transform: translate(-50%, -50%); transform: scale(1);` 會讓置中失效？
4. 當元素放大後蓋住旁邊元素，這代表文件流位置改變了嗎？
5. 多個 transform function 寫在一起時，為什麼要注意順序？
