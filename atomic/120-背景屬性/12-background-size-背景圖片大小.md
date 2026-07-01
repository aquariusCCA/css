---
source:
  - 'origin/120-背景屬性/11-背景圖片大小background-size.md / 開頭到基本範例'
---

# background-size 背景圖片大小

`background-size` 的作用是設置背景圖片的大小。

```css
background-size: 背景圖片寬度 背景圖片高度;
```

取值如下：

1. `auto`：背景圖片的真實大小，默認值。
2. 用長度值指定背景圖大小，不允許負值。
3. 用百分比指定背景圖片大小，不允許負值。
4. `contain`：將背景圖片等比縮放，使背景圖片的寬或高與容器的寬或高相等，再將完整背景圖片包含在容器內，但可能造成容器裡部分區域沒有背景圖片。
5. `cover`：將背景圖片等比縮放，直到完全覆蓋容器，圖片會盡可能完整地顯示在元素上，但背景圖片有可能顯示不完整。

```css
.box {
  width: 800px;
  height: 800px;
  background-color: pink;
  background-image: url(./images/logo.png);
  background-repeat: no-repeat;

  background-size: 500px 500px;
  /* background-size: 100% 100%; */

  /* 1. 只寫一個參數: 肯定是寬度，高度省略了，會等比例縮放 */
  /* background-size: 500px; */

  /* 2. 裡面的單位可以用 % -> 相對於背景定位區域計算，預設通常是元素自身的 padding box */
  /* background-size: 50%; */

  /* 3. cover: 等比例拉伸，要完全覆蓋 div 盒子，可能有部分背景圖片顯示不全 */
  /* background-size: cover; */

  /* 4. contain 高度和寬度等比例拉伸，當寬度或者高度鋪滿 div 盒子，就不再進行拉伸了，可能有部分空白區域。 */
  background-size: contain;
}
```

```html
<div class="box"></div>
```
