> CSS3 中新增了盒子陰影，我們可以使用 box-shadow 屬性為盒子添加陰影。
>  
> ![盒子陰影box-shadow.png](%E7%9B%92%E5%AD%90%E9%99%B0%E5%BD%B1box-shadow/%25E7%259B%2592%25E5%25AD%2590%25E9%2599%25B0%25E5%25BD%25B1box-shadow.png)

```css
box-shadow: h-shadow v-shadow blur spread color inset;
```

- 模糊距離：影子的虛實。
- 陰影尺寸：影子的大小。

<aside>
⚠️

**注意 :**

- 默認的是外陰影（outset），但是不可以在後面寫這個單詞，否則導致陰影無效。
- 盒子陰影不佔用空間，不會影響其他盒子排列。
</aside>

```css
.box {
    width: 100px;
    height: 100px;
    background-color: black;
}

.box:hover {
	/* 開發中陰影常用: 原先盒子沒有影子，當我們鼠標經過盒子就添加陰影效果。 */
	box-shadow: 10px 10px 10px -4px #ccc ;
}
```

```html
<div class="box"></div>
```