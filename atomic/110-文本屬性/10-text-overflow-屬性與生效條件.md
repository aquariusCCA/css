---
source:
  - 'origin/110-文本屬性/09-文本溢出text-overflow.md / 開頭到注意事項'
---

# text-overflow 屬性與生效條件

`text-overflow` 規定當文本溢出包含元素時發生的事情。

屬性值如下：

1. `clip`：裁剪文本，默認值。
2. `ellipsis`：使用省略號代表被修剪的文本。

```css
.a {
  width: 100px;
  height: 20px;
  font: 8px/20px arial;
  border: 1px solid black;

  /* 超出元素框部分隐藏 */
  overflow: hidden;

  /* 超出的文本被裁剪 */
  text-overflow: clip;

  /* 强制文本在同一行表示 */
  white-space: nowrap;
}

.b {
  width: 100px;
  height: 20px;
  font: 8px/20px arial;
  border: 1px solid black;

  /* 超出元素框部分隐藏 */
  overflow: hidden;

  /* 超出的文本用省略号表示 */
  text-overflow: ellipsis;

  /* 强制文本在同一行表示 */
  white-space: nowrap;
}
```

```html
<div class="a">我是大聪明我是大聪明我是大聪明我是大聪明</div>
<br><br>
<div class="b">我是大聪明我是大聪明我是大聪明我是大聪明</div>
```

注意：要使得 `text-overflow` 屬性生效，塊容器必須顯示定義 `overflow` 為非 `visible` 值，`white-space` 為 `nowrap` 值。
