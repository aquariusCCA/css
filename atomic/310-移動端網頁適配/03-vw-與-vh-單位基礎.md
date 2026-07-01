---
source:
  - 'origin/310-移動端網頁適配/03-長度單位 vw、vh.md / # 簡介'
---

# vw 與 vh 單位基礎

- 含意：
    - vw：viewport width
    - vh：viewport height

換算方式：

```text
1vw = 1/100视口宽度
1vh = 1/100视口高度

vw单位的尺寸 = px单位数值 / ( 1 / 100 * 视口宽度)
```

例如：

```text
357px宽的设备

1vw = 357px / 100 = 3.57px
```

範例：

```css
/* index.less */
/* 375的设计稿：68 * 29 */
.box {
  width: (68 / 3.75vw);
  height: (29 / 3.75vw);
}
```

<aside>
⚠️

**vw、vh 只能選擇一個作為單位，因為不同設備的寬高比例是不一樣的。**

</aside>

## vw 體驗

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport"
    content="width=device-width, user-scalable=no,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .box {
      width: 50vw;
      height: 30vw;
      background-color: pink;
    }
  </style>
</head>

<body>
  <div class="box"></div>
</body>

</html>
```

## vh 體驗

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport"
    content="width=device-width, user-scalable=no,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .box {
      width: 50vw;
      height: 30vw;
      background-color: pink;
    }
  </style>
</head>

<body>
  <div class="box"></div>
</body>

</html>
```
