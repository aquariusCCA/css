---
source:
  - 'origin/080-布局重置默認樣式/01-布局重置默認樣式.md / # 方案二 : reset.css'
---

# reset.css 核心概念與初始化範例

參考文章：[css基础_布局版心、布局常用类名和重置默认样式-CSDN博客](https://blog.csdn.net/qq_57226103/article/details/129838618)

經過 reset 後的網頁，好似「一張白紙」，開發人員可以根據設計稿，精細地添加具體樣式。

reset 的技巧是選擇到具有默認樣式效果的元素，清空其默認樣式。

初始化程式碼如下：

```css
/* 把我们所有标签的内外边距清零 */
* {
  margin: 0;
  padding: 0
}

/* em 和 i 斜体的文字不倾斜 */
em,
i {
  font-style: normal
}

/* 去掉li 的小圆点 */
li {
  list-style: none
}

img {
  /* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框的问题 */
  border: 0;

  /* 取消图片底侧有空白缝隙的问题 */
  vertical-align: middle
}

button {
  /* 当我们鼠标经过 button 按钮的时候，鼠标变成小手 */
  cursor: pointer
}

a {
  color: #666;
  text-decoration: none
}

a:hover {
  color: #c81623
}

button,
input {
  /* "\5B8B\4F53" 就是宋体的意思 这样浏览器兼容性比较好 */
  font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif
}

body {
  /* CSS3 抗锯齿形 让文字显示的更加清晰 */
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
  color: #666
}

/* 隱藏元素 */
.hide,
.none {
  display: none
}

/* 清除浮动 */
.clearfix:after {
  visibility: hidden;
  clear: both;
  display: block;
  content: ".";
  height: 0
}

.clearfix {
  *zoom: 1
}
```
