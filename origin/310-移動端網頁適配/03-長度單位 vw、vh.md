# **簡介**

- 含意 :
    - vw : viewport width
    - vh : viewport height

換算方式 :

```
1vw = 1/100视口宽度
1vh = 1/100视口高度

vw单位的尺寸 = px单位数值 / ( 1 / 100 * 视口宽度)
```

例如 :

```
357px宽的设备

1vw = 357px / 100 = 3.57px
```

範例 :

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

- **vw 體驗**
    
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
    
- **vh 體驗**
    
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
    

# **vw 移動適配**

- 確定設計稿對應的 vw 尺寸 ( 1/100 視口寬度 )
    - 查看設計稿寬度 → 確定參考設備寬度 ( 視口寬度 ) → 確定 vw 尺寸 ( 1/100 視口寬度 )
- vw 單位的尺寸 = px 單位數值 / ( 1/100 視口寬度 )

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
      margin: o;
      padding: 0;
    }

    .box {
      width: 18vw;
      height: 7vw;
      background-color: pink;
    }
  </style>
</head>

<body>
  <div class="box"></div>
</body>

</html>
```

# **vh 移動適配**

- 確定設計稿對應的 vh 尺寸 ( 1/100 視口高度 )
    - 查看設計稿寬度 → 確定參考設備寬度 ( 視口高度 ) → 確定 vh 尺寸 ( 1/100 視口高度 )
- vh 單位的尺寸 = px 單位數值 / ( 1/100 視口高度 )

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
      margin: o;
      padding: 0;
    }

    .box {
      width: 18vh;
      height: 7vh;
      background-color: pink;
    }
  </style>
</head>

<body>
  <div class="box"></div>
</body>

</html>
```