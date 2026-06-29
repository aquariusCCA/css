> background-image 屬性描述了元素的背景圖像，實際開發常見於 logo 或者一些裝飾性的小圖片或者是超大的背景圖片，優點是非常便於控制位置。

```css
background-image: url(图片路径);
```

<aside>
⚠️

**注意點**

- 背景圖片中 URL 中可以省略引號。
- 背景圖片默認是水平和垂直方向平鋪的。
- 背景圖片僅僅是只給盒子起到裝飾效果，類似於背景顏色，是不能稱開盒子的。
</aside>

```css
div {
    width: 300px;
    height: 300px;
    background-image: url(./images/logo.png);
}
```

```html
<div></div>
```