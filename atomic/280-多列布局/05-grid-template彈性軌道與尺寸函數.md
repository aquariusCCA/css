---
source:
  - 'origin/280-多列布局/03-容器屬性.md / # grid-template-columns屬性、grid-template-rows屬性 / ### auto-fill 關鍵字'
  - 'origin/280-多列布局/03-容器屬性.md / # grid-template-columns屬性、grid-template-rows屬性 / ### fr 關鍵字'
  - 'origin/280-多列布局/03-容器屬性.md / # grid-template-columns屬性、grid-template-rows屬性 / ### minmax()'
  - 'origin/280-多列布局/03-容器屬性.md / # grid-template-columns屬性、grid-template-rows屬性 / ### auto關鍵字'
---

# grid-template 彈性軌道與尺寸函數

## auto-fill 關鍵字

有時，單元格的大小是固定的，但是容器的大小不確定。如果希望每一行（或每一列）容納盡可能多的單元格，這時可以使用 `auto-fill` 關鍵字表示自動填充。

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
```

上面代碼表示每列寬度 `100px`，然後自動填充，直到容器不能放置更多的列。

![auto-fill 自動填滿 100px 欄位的 Grid](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-005-64b607.png)

## fr 關鍵字

`fr` 關鍵字代表可用空間的一份。如果兩列都設成 `1fr`，就會等分剩餘空間。

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

![1fr 1fr 建立兩欄等寬 Grid](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-006-e6a452.png)

也可以混合固定尺寸和比例尺寸。

```css
.container {
  display: grid;
  grid-template-columns: 150px 1fr 2fr;
}
```

![150px、1fr、2fr 三欄比例 Grid](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-007-4bf65b.png)

## minmax()

`minmax()` 函數產生一個長度範圍，表示長度就在這個範圍之中。

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr minmax(100px, 1fr);
}
```

![minmax 設定第三欄最小與最大寬度](../../origin/280-多列布局/assets/images/multi-column-layout-container-properties-img-008-d62aea.png)

## auto 關鍵字

`auto` 關鍵字表示由瀏覽器自己決定長度。

```css
.container {
  display: grid;
  grid-template-columns: 100px auto 100px;
}
```
