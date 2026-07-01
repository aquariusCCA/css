---
source:
  - 'origin/260-Flex布局/03-flex佈局常見父項屬性.md / # align-content 和 align-items 區別'
---

# align-items 與 align-content 差異

![align-items 與 align-content 在單行和多行 flex 版面中的差異比較](../../origin/260-Flex布局/assets/images/flex-container-properties-img-025-fa53a7.png)

- `align-items` 適用於單行情況下，只有上對齊、下對齊、居中和拉伸。
- `align-content` 適應於換行（多行）的情況下（單行情況下無效），可以設置上對齊、下對齊、居中、拉伸以及平均分配剩餘空間等屬性值。

<aside>
💡

**總結就是單行找 `align-items`，多行找 `align-content`。**

</aside>
