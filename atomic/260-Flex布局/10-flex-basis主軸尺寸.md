---
source:
  - 'origin/260-Flex布局/04-flex布局子項常見屬性.md / # flex-basis'
---

# flex-basis 主軸尺寸

`flex-basis` 的作用：瀏覽器根據這個屬性設置的值，計算主軸上是否有多餘空間，默認值 `auto`，即項目的高或寬。

- `flex-basis` 屬性定義項目佔據主軸空間的大小，因為 flex 佈局默認的主軸都是橫向的（可以想像成數學坐標軸的 X 軸）。
- 語法格式：

```css
.item {
  flex-basis: <length> | auto; /* 默认值 auto */
}
```

## flex-basis 默認為 auto

容器內項目的寬度是根據內容自適應的，這個也就是 `flex-basis` 默認值為 `auto` 的含義。

![未設定 flex-basis 時三個 flex 項目依內容寬度排列](../../origin/260-Flex布局/assets/images/flex-item-properties-img-001-783fba.png)

## 設置項目的寬度為 120px

可以看到 3 個項目的寬度都為 `120px` 了，這個就是 `flex-basis` 的含義。

![三個 flex 項目設定 flex-basis: 120px 後等寬排列](../../origin/260-Flex布局/assets/images/flex-item-properties-img-002-1cff69.png)

```css
.item {
  /* flex-basis 属性定义了项目占据主轴空间（main size）大小。 */
  flex-basis: 120px;
}
```

## 設置項目的寬度為 200px

![三個 flex 項目設定 flex-basis: 200px 後在容器中壓縮排列](../../origin/260-Flex布局/assets/images/flex-item-properties-img-003-c9d5b4.png)

- 項目被壓縮顯示了，運行效果圖裡可以看到縮小的區間。
- 縮小後項目的寬度是 `150px`，3 個剛好為 `450px`，等於容器的寬度。

<aside>
💡

這個例子看起來和上面的例子沒有什麼差別，就是把寬度調整大一些。細心的同學會發現如果項目的寬度都為 200px，那麼 3 個就是 600px，會超過容器寬度了。👉 由此可知，如果項目的總寬度超過容器的寬度，那麼會縮小到容器範圍內。

</aside>

## flex-basis 與 width

如果同時設置 `flex-basis: 120px` 和 `width: 100px`，且 `flex-basis` 不是 `auto`，瀏覽器會優先用 `flex-basis` 作為 flex 項目的初始主軸尺寸，所以此例項目的初始主軸尺寸仍是 `120px`。

`flex-basis` 這邊並沒有說是定義項目的寬度，而是說：佔據主軸空間的大小。因為設置容器屬性 `flex-direction` 為 `column` 或者 `column-reverse` 的時候主軸會變成縱向的（可以想像成數學坐標軸的 Y 軸）。

在這種情況下，`flex-basis` 就是設置高，可以理解成 `height` 屬性。從這個意義上來講，`flex-basis` 不全等於 `width`。

<aside>
💡

**備註：當 `flex-basis` 不是 `auto` 時，它會優先作為 flex 項目的初始主軸尺寸；不是讓 `width`、`height` 在所有情況下都失效。**

- 主軸是橫向 → `flex-basis` 會優先於 `width` 作為初始主軸尺寸。
- 主軸是縱向 → `flex-basis` 會優先於 `height` 作為初始主軸尺寸。

</aside>
