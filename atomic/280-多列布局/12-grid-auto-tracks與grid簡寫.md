---
source:
  - 'origin/280-多列布局/03-容器屬性.md / # grid-auto-columns屬性、grid-auto-rows屬性'
  - 'origin/280-多列布局/03-容器屬性.md / # grid-template屬性、grid屬性'
---

# 隱式軌道與 Grid 簡寫屬性

## grid-auto-columns 與 grid-auto-rows

有時候，一些項目的指定位置，在現有網格的外部。比如網格原本只有 3 行，但是某一個項目指定在第 5 行，瀏覽器會自動生成多餘的隱式行，以便放置項目；如果項目指定到既有列之外，則會生成隱式列。

`grid-auto-columns` 屬性和 `grid-auto-rows` 屬性用來設置瀏覽器自動創建的多餘網格的列寬和行高。它們的寫法與 `grid-template-columns` 和 `grid-template-rows` 完全相同。

如果不指定這兩個屬性，隱式軌道的尺寸預設為 `auto`，通常會依該軌道內容大小、可用空間與對齊規則共同決定。

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-rows: 50px;
}
```

上面代碼指定新增的行高統一為 `50px`（原始的行高為 `100px`）。

## grid-template 與 grid

`grid-template` 屬性是 `grid-template-columns`、`grid-template-rows` 和 `grid-template-areas` 這三個屬性的合併簡寫形式。

`grid` 屬性是 `grid-template-rows`、`grid-template-columns`、`grid-template-areas`、`grid-auto-rows`、`grid-auto-columns`、`grid-auto-flow` 這六個屬性的合併簡寫形式。

<aside>
⚠️

**從易讀易寫的角度考慮，還是建議不要合併屬性，所以這裡就不詳細介紹這兩個屬性了。**

</aside>
