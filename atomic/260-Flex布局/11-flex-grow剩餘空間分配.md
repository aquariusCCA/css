---
source:
  - 'origin/260-Flex布局/04-flex布局子項常見屬性.md / # flex-grow'
  - 'origin/260-Flex布局/04-flex布局子項常見屬性.md / ### 示例 1 : 設置項目的 flex-grow 為 1'
  - 'origin/260-Flex布局/04-flex布局子項常見屬性.md / ### 示例 2 : 設置項目 1 的 flex-grow 為 1，項目 2 的 flex-grow 為 2，項目 3 的 flex-grow 為 3'
  - 'origin/260-Flex布局/04-flex布局子項常見屬性.md / ### 示例 3 : 設置項目 1 的 flex-grow 為 0.1，項目 2 的 flex-grow 為 0.2，項目 3 的 flex-grow 為 0.3'
---

# flex-grow 剩餘空間分配

`flex-grow` 屬性定義項目的擴大係數，用於分配容器的剩餘空間。剩餘空間計算方式就是：

```text
容器大小 - 所有項目的總大小
```

![flex-grow 可分配容器剩餘空間的示意圖](../../origin/260-Flex布局/assets/images/flex-item-properties-img-004-ad14e7.png)

- 每個項目的寬度為 `50px`，3 個為 `150px`。
- 剩餘空間為 `450px - 150px = 300px`。

<aside>
💡

**語法格式：**

```css
.item {
  /* >=0 的数，默认值为 0 */
  flex-grow: <number>;
}
```

- 默認為 `0`，即如果容器存在剩餘空間，也不放大。
- `flex-grow` 只能為 `>=0` 的數字，項目根據設置的係數進行放大。

</aside>

## 分配公式

- 計算將多少剩餘空間拿來分配：

```text
剩餘空間 * ( 所有項目的 flex-grow 之和 >= 1 ? 1 : 所有項目的 flex-grow 之和 )
```

如果所有項目的 `flex-grow` 之和大於等於 1，那麼就是所有的剩餘空間都拿來分配，否則乘以係數即為要分配的剩餘空間。

- 計算每個項目分配到多少剩餘空間：

```text
要分配的剩餘空間 * ( 單個項目 flex-grow / 所有項目的 flex-grow 之和 )
```

簡單的說，就是按照 `flex-grow` 佔比進行分配。

## 示例 1：項目的 flex-grow 為 1

```css
.container {
  width: 450px;
  height: 300px;
  margin: 8% auto;
  border: 1px solid pink;
  display: flex;
}

.item {
  /* flex-basis属性定义了项目占据主轴空间（main size）大小。 */
  /* 这边设置为50px */
  flex-basis: 50px;

  /* flex-grow 属性定义项目的扩大系数 */
  /* 这边设置为1 */
  flex-grow: 1;
}
```

3 個項目的寬度都變成了 `150px`，可以看到項目被進行了擴大。

![三個 flex 項目設定 flex-grow: 1 後平均放大](../../origin/260-Flex布局/assets/images/flex-item-properties-img-005-00835f.png)

```text
要分配的剩余空间
 = 剩余空间 * ( 所有项目的 flex-grow 之和 >= 1 ? 1 : 所有项目的 flex-grow 之和 )
 = 300px * (3 >= 1 ? 1 : 3)
 = 300px * 1
 = 300px

每个项目分配的剩余空间
 = 要分配的剩余空间 * ( 单个项目 flex-grow / 所有项目的 flex-grow 之和 )
 = 300px * ( 1 / 3)
 = 100px
```

每個項目多分配 `100px`，加上自身設置的 `flex-basis`，最終每個項目寬度就為 `150px`。

## 示例 2：flex-grow 分別為 1、2、3

```text
要分配的剩余空间
 = 剩余空间 * ( 所有项目的 flex-grow 之和 >= 1 ? 1 : 所有项目的 flex-grow 之和 )
 = 300px * (6 >= 1 ? 1 : 6)
 = 300px * 1
 = 300px

项目1分配的剩余空间
 = 要分配的剩余空间 * ( 项目1 flex-grow / 所有项目的 flex-grow 之和 )
 = 300px * ( 1 / 6)
 = 50px

项目2分配的剩余空间
 = 要分配的剩余空间 * ( 项目2 flex-grow / 所有项目的 flex-grow 之和 )
 = 300px * ( 2 / 6)
 = 100px

项目3分配的剩余空间
 = 要分配的剩余空间 * ( 项目3 flex-grow / 所有项目的 flex-grow 之和 )
 = 300px * ( 3 / 6)
 = 150px
```

所以最終：項目 1 寬為 `100px`、項目 2 寬為 `150px`、項目 3 寬為 `200px`。

## 示例 3：flex-grow 分別為 0.1、0.2、0.3

```text
要分配的剩余空间
 = 剩余空间 * ( 所有项目的 flex-grow 之和 >= 1 ? 1 : 所有项目的 flex-grow 之和 )
 = 300px * (0.6 >= 1 ? 1 : 0.6)
 = 300px * 0.6
 = 180px

项目1分配的剩余空间
 = 要分配的剩余空间 * ( 项目1 flex-grow / 所有项目的 flex-grow 之和 )
 = 180px * ( 0.1 / 0.6)
 = 30px

项目2分配的剩余空间
 = 要分配的剩余空间 * ( 项目2 flex-grow / 所有项目的 flex-grow 之和 )
 = 180px * ( 0.2 / 0.6)
 = 60px

项目3分配的剩余空间
 = 要分配的剩余空间 * ( 项目3 flex-grow / 所有项目的 flex-grow 之和 )
 = 180px * ( 0.3 / 0.6)
 = 90px
```

所以最終：項目 1 寬為 `80px`、項目 2 寬為 `110px`、項目 3 寬為 `140px`。
