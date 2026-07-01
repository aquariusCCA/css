---
source:
  - 'origin/080-布局重置默認樣式/01-布局重置默認樣式.md / 新浪 reset.css'
  - 'origin/080-布局重置默認樣式/01-布局重置默認樣式.md / 淘寶 reset.css'
---

# 常見 reset.css 範例

## 新浪 reset.css

```css
html,
body,
ul,
li,
ol,
dl,
dd,
dt,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
legend,
img {
  margin: 0;
  padding: 0;
}

fieldset,
img {
  border: none;
}

img {
  display: block;
}

address,
caption,
cite,
code,
dfn,
th,
var {
  font-style: normal;
  font-weight: normal;
}

ul,
ol {
  list-style: none;
}

body {
  color: #333;
  font: 12px/20px "SimSun", "宋体", "Arial Narrow", HELVETICA;
  background: #fff;
  /* overflow-y:scroll;*/
  overflow-x: hidden;
}

a {
  color: #666;
  text-decoration: none;
}

a:visited {
  color: #666;
}

a:hover,
a:active,
a:focus {
  color: #ff8400;
  text-decoration: underline;
}
```

## 淘寶 reset.css

```css
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}

body,
button,
input,
select,
textarea {
  font: 12px/1.5tahoma, arial, \5b8b\4f53;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}

address,
cite,
dfn,
em,
var {
  font-style: normal;
}

code,
kbd,
pre,
samp {
  font-family: couriernew, courier, monospace;
}

small {
  font-size: 12px;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

sup {
  vertical-align: text-top;
}

sub {
  vertical-align: text-bottom;
}

legend {
  color: #000;
}

fieldset,
img {
  border: 0;
}

button,
input,
select,
textarea {
  font-size: 100%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
```
