---
source:
  - 'origin/150-CSS定位/04-相對定位relative.md / 全文'
---

# relative 相對定位

相對定位是元素在移動位置時，相對於自己原來的位置進行移動。

邊偏移方向：

- `left`：正值向右，負值向左。
- `right`：正值向左，負值向右。
- `top`：正值向下，負值向上。
- `bottom`：正值向上，負值向下。
- 當四個屬性同時存在時，`left`、`top` 優先級最高。

相對定位的特點：

- 移動位置時，參照點是自己原來的位置。
- 原來在標準流的位置會繼續佔有，後面的盒子仍然以標準流方式對待。
- 相對定位不脫標，會繼續保留原來位置。
- 相對定位最典型的應用，是給絕對定位當父級參考。
- 定位元素的顯示層級比普通元素高。
- 定位元素會覆蓋在普通元素之上。
- 兩個元素都定位時，後寫的元素會蓋在先寫的元素之上。

注意事項：

- `left` 不建議和 `right` 一起設定，`top` 不建議和 `bottom` 一起設定。
- 相對定位元素也能繼續浮動，但不推薦這樣做。
- 相對定位元素也能透過 margin 調整位置，但不推薦這樣做。

```css
.box1 {
  position: relative;
  top: 100px;
  left: 100px;
  width: 200px;
  height: 200px;
  background-color: pink;
}

.box2 {
  width: 200px;
  height: 200px;
  background-color: deeppink;
}
```

```html
<body>
  <div class="box1"></div>
  <div class="box2"></div>
</body>
```

> 待後續內容審查確認：「left 不能和 right 一起設置，top 和 bottom 不能一起設置」屬於入門簡化說法，正式 notes 可補充同時設定時的實際約束規則。
