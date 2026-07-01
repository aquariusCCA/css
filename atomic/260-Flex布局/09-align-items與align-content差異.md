---
source:
  - 'origin/260-Flex布局/03-flex佈局常見父項屬性.md / # align-content 和 align-items 區別'
---

# align-items 與 align-content 差異

![align-items 與 align-content 在單行和多行 flex 版面中的差異比較](../../origin/260-Flex布局/assets/images/flex-container-properties-img-025-fa53a7.png)

- `align-items` 控制每條 flex line 內，項目在側軸上的對齊方式；單行和多行版面都會受到它影響。
- `align-content` 只在有多條 flex line，且側軸方向有剩餘空間時生效，用來控制多行整體在側軸上的分布。

<aside>
💡

**總結：項目在每一行內的側軸對齊看 `align-items`；多行整體之間的側軸分布看 `align-content`。**

</aside>
