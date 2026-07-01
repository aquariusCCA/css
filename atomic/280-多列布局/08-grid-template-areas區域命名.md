---
source:
  - 'origin/280-多列布局/03-容器屬性.md / # grid-template-areas屬性'
---

# grid-template-areas 區域命名

網格佈局允許指定「區域」（area），一個區域由單個或多個單元格組成。`grid-template-areas` 屬性用於定義區域。

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
}
```

上面代碼先劃分出 9 個單元格，然後將其定名為 a 到 i 的九個區域，分別對應這九個單元格。

多個單元格合併成一個區域的寫法如下：

```css
grid-template-areas: 'a a a'
                     'b b b'
                     'c c c';
```

下面是一個佈局實例：

```css
grid-template-areas: "header header header"
                     "main main sidebar"
                     "footer footer footer";
```

上面代碼中，頂部是頁眉區域 `header`，底部是頁腳區域 `footer`，中間部分則為 `main` 和 `sidebar`。

如果某些區域不需要利用，則使用點 `.` 表示。

```css
grid-template-areas: 'a . c'
                     'd . f'
                     'g . i';
```

上面代碼中，中間一列為點，表示沒有用到該單元格，或者該單元格不屬於任何區域。

<aside>
⚠️

**注意，區域的命名會影響到網格線。每個區域的起始網格線，會自動命名為區域名 `-start`，終止網格線自動命名為區域名 `-end`。比如，區域名為 `header`，則起始位置的水平網格線和垂直網格線叫做 `header-start`，終止位置的水平網格線和垂直網格線叫做 `header-end`。**

</aside>
