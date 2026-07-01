---
source:
  - 'origin/260-Flex布局/04-flex布局子項常見屬性.md / # flex-shrink'
---

# flex-shrink 超出空間壓縮

`flex-grow` 用於放大，`flex-shrink` 就是縮小。放大是因為有剩餘空間，縮小則是因為項目的主軸尺寸總和超過容器，有一個超出空間，所以要進行縮小。

超出空間計算方式：

```text
所有項目的總大小 - 容器大小
```

![flex-shrink 控制項目壓縮比例的計算示意圖](../../origin/260-Flex布局/assets/images/flex-item-properties-img-007-106f88.png)

## 語法格式

```css
.item {
  /* >=0 的数，默认值为 1 */
  flex-shrink: <number>;
}
```

- 默認值為 `1`，表示所有項目等比例縮小。
- 如果為 `0`，那麼表示不縮小。

## 壓縮公式

計算超出空間中多少用來壓縮：

```text
超出空间 * ( 所有项目的 flex-shrink 之和 >= 1 ? 1 : 所有项目的 flex-shrink 之和 )
```

如果沒有超出空間，那麼就不用壓縮了。當所有項目的 `flex-shrink` 之和小於 `1` 時，瀏覽器可能只壓縮部分超出空間；例如超出空間為 `150px`、所有項目的 `flex-shrink` 之和為 `0.6`，則用來壓縮的空間為 `90px`。

計算每個項目縮小多少空間：

```text
要压缩的空间 * ( 单个项目的 flex-shrink * flex base size / 所有项目的 flex-shrink * flex base size 之和 )
```

簡單的說，壓縮比例要看 `flex-shrink` 乘上項目的 flex base size；只有在各項目的 flex base size 相同時，才可以簡化成按照 `flex-shrink` 佔比進行縮小。

## 示例 1：flex-shrink 為 0

```css
.item {
  /* flex-basis 属性定义了项目占据主轴空间（main size）大小。 */
  flex-basis: 200px;

  /* flex-shrink 属性定义项目的缩小系数 */
  flex-shrink: 0;
}
```

<aside>
💡

**其中 `flex-shrink` 為 `0` 表示不壓縮項目。**

</aside>

## 示例 2：flex-shrink 分別為 0、1、2

```text
要压缩的空间
 = 总超出空间 * ( 所有项目的 flex-shrink 之和 >= 1 ? 1 : 所有项目的 flex-shrink 之和 )
 = 150px * ( 3 >= 1 ? 1 : 3)
 = 150px

项目 1 压缩的空间
 = 150px * ( 0 / 3 )
 = 0

项目 2 压缩的空间
 = 150px * ( 1 / 3 )
 = 50px

项目 3 压缩的空间
 = 150px * ( 2 / 3 )
 = 100px
```

所以最終：項目 1 寬為 `200px`、項目 2 寬為 `150px`、項目 3 寬為 `100px`。

## 示例 3：flex-shrink 分別為 0.1、0.2、0.3

```text
要压缩的空间
 = 总超出空间 * ( 所有项目的 flex-shrink 之和 >= 1 ? 1 : 所有项目的 flex-shrink 之和 )
 = 150px * ( 0.6 >= 1 ? 1 : 0.6)
 = 90px

项目 1 压缩的空间
 = 90px * ( 0.1 / 0.6 )
 = 15px

项目 2 压缩的空间
 = 90px * ( 0.2 / 0.6 )
 = 30px

项目 3 压缩的空间
 = 90px * ( 0.3 / 0.6 )
 = 45px
```

所以最終：項目 1 寬為 `185px`、項目 2 寬為 `170px`、項目 3 寬為 `155px`。
