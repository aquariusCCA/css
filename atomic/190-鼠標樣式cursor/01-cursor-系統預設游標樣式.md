---
source:
  - 'origin/190-鼠標樣式cursor/01-鼠標樣式cursor.md / 說明、對照圖、預設游標範例'
---

# cursor 系統預設游標樣式

`cursor` 屬性可設定滑鼠指標移到元素上時顯示的游標形狀。瀏覽器提供多種系統預定義游標，可用來提示元素的互動意義。

![cursor 屬性常見游標樣式對照表](../../origin/190-鼠標樣式cursor/assets/images/cursor-style-img-001-345435.png)

常見的系統預設游標值包含：

- `default`：預設箭頭游標。
- `pointer`：常用於可點擊項目，顯示手形游標。
- `move`：表示元素可移動。
- `text`：表示可選取或輸入文字。
- `not-allowed`：表示目前操作不被允許。
- `help`：表示可取得說明。
- `wait`：表示正在等待或載入。

```html
<body>
  <ul>
    <li style="cursor: default;">我是默认的小白鼠标样式</li>
    <li style="cursor: pointer;">我是鼠标小手样式</li>
    <li style="cursor: move;">我是鼠标移动样式</li>
    <li style="cursor: text;">我是鼠标文本样式</li>
    <li style="cursor: not-allowed;">我是鼠标禁止样式</li>
    <li style="cursor: help;">我是鼠标幫助样式</li>
    <li style="cursor: wait;">我是鼠标加載样式</li>
  </ul>
</body>
```
