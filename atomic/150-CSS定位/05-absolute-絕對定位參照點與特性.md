---
source:
  - 'origin/150-CSS定位/05-絕對定位absolute.md / 開頭至父級有定位範例'
---

# absolute 絕對定位參照點與特性

絕對定位是元素在移動位置時，相對於它的祖先元素來說的。

絕對定位的參考點：

- 參考它的包含塊。
- 如果沒有可作為包含塊的定位祖先，通常相對初始包含塊定位；可以理解為文檔根部，而不是固定在瀏覽器可視區。
- 如果祖先元素有定位，也就是相對、絕對或固定定位，則以最近一級有定位的祖先元素為參考點移動位置。

包含塊的概念：

- 對於沒有脫離文檔流的元素，包含塊就是父元素。
- 對於脫離文檔流的元素，包含塊通常是最近的定位祖先；如果所有祖先元素都沒定位，通常以初始包含塊作為參考。

絕對定位的特點：

- 不再佔用原先的位置，也就是脫標。
- 脫離文檔流會對後面的兄弟元素、父元素有影響。
- `left` 不建議和 `right` 一起設定，`top` 不建議和 `bottom` 一起設定。
- 絕對定位和浮動不能同時設定；如果同時設定，浮動失效，以定位為主。
- 絕對定位元素也能透過 margin 調整位置，但不推薦這樣做。
- 無論原本是行內、行內塊或塊級元素，設定為絕對定位後，都會變成定位元素。
- 定位元素預設寬高由內容撐開，也能自由設定寬高。

沒有祖先元素定位的範例：

```css
.father {
  width: 500px;
  height: 500px;
  background-color: skyblue;
}

.son {
  position: absolute;
  top: 10px;
  left: 10px;

  /*
  top: 100px;
  right: 200px;
  */

  /*
  left: 0;
  bottom: 0;
  */

  width: 200px;
  height: 200px;
  background-color: pink;
}
```

```html
<body>
  <div class="father">
    <div class="son"></div>
  </div>
</body>
```

父級有定位的範例：

```css
.yeye {
  position: relative;
  width: 800px;
  height: 800px;
  background-color: hotpink;
  padding: 50px;
}

.father {
  width: 500px;
  height: 500px;
  background-color: skyblue;
}

.son {
  position: absolute;
  left: 30px;
  bottom: 10px;
  width: 200px;
  height: 200px;
  background-color: pink;
}
```

```html
<body>
  <div class="yeye">
    <div class="father">
      <div class="son"></div>
    </div>
  </div>
</body>
```

> 待後續內容審查確認：「left 不能和 right 一起設置，top 和 bottom 不能一起設置」屬於入門簡化說法，正式 notes 可補充同時設定時的實際約束規則。
