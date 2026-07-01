---
source:
  - 'origin/070-元素的顯示與隱藏/01-元素的顯示與隱藏.md / # overflow溢出顯示和隱藏'
---

# overflow 溢出顯示和隱藏

`overflow` 屬性用來控制內容超出元素盒子時的顯示方式，例如顯示、隱藏或顯示捲動條。

溢出部分指的是內容超出盒子寬度或高度範圍的區域。一般情況下，不會希望溢出的內容直接顯示出來，因為它可能影響版面配置。

如果元素內部有定位的盒子，使用 `overflow: hidden` 時要特別留意，因為它會把超出範圍的部分一起隱藏。

```css
.peppa {
  /* overflow: visible; */
  /* overflow: hidden; */

  /* scroll 溢出的部分顯示滾動條，不溢出也顯示滾動條 */
  /* overflow: scroll; */

  /* auto 溢出的時候才顯示滾動條，不溢出不顯示滾動條 */
  /* overflow: auto; */
  width: 200px;
  height: 200px;
  border: 3px solid pink;
  margin: 100px auto;
}
```

```html
<div class="peppa">
  《小猪佩奇》，又名《粉红猪小妹》（台湾名为粉红猪），英文名为《Peppa
  Pig》，是由英国人阿斯特利（Astley）、贝克（Baker）、
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
</div>
```
