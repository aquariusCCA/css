---
source:
  - 'origin/310-移動端網頁適配/05-rem適配布局.md / ### rem 實際開發適配方案二'
---

# flexible.js 與 rem 開發方案

> 定位：`flexible.js` / `amfe-flexible` 是早期常見的移動端 `rem` 適配方案，現在更適合作為舊專案維護或歷史方案理解。新專案通常優先考慮 `viewport`、`vw` / `vh`、媒體查詢、`rem` 搭配現代響應式 CSS 等方案。

flexible.js 是手淘开发出的一个用来适配移动端的 js 框架。手淘框架的核心原理就是根据不同的 width 给网页中 html 根节点设置不同的 font-size，然后所有的 px 都用 rem 来代替，这样就实现了不同大小的屏幕都适应相同的样式了。其实它就是一个终端设备适配的解决方案，也就是说它可以让你在不同的终端设备中实现页面适配。

flexible.js 是用来使内容适应屏幕大小的插件。

rem，是相对单位，是相对 HTML 根元素，可谓集相对大小和绝对大小的优点于一身，通过它既可以做到只修改根元素就成比例地调整所有字体大小，又可以避免字体大小逐层复合的连锁反应。

## 安装

- 方式一：github 下载地址

    ![amfe-flexible GitHub 專案檔案列表](../../origin/310-移動端網頁適配/assets/images/rem-adaptive-layout-img-003-05dd14.png)

- 方式二：`npm i -S amfe-flexible`

## 导入

```jsx
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">
<script src="./index.js"></script>
```

## 使用

- 如要转化为 1rem=80px；将 flexible.js 中的 10 改为 24，因为 1920/24=80。

    ![flexible.js 設定 html 根字級公式](../../origin/310-移動端網頁適配/assets/images/rem-adaptive-layout-img-004-fce94c.png)

- vscode 安装 cssrem 插件（方便写代码时 px 与 rem 的换算）。

    ![VS Code 安裝 cssrem 外掛頁面](../../origin/310-移動端網頁適配/assets/images/rem-adaptive-layout-img-005-8c094a.png)

- 修改扩展设置中的 root font size 值为 80（设置 1rem=80px）。

    ![cssrem 外掛 root font size 設為 80](../../origin/310-移動端網頁適配/assets/images/rem-adaptive-layout-img-006-d9bc9c.png)

- 代码效果

    ![VS Code 顯示 px 轉 rem 換算提示](../../origin/310-移動端網頁適配/assets/images/rem-adaptive-layout-img-007-08244e.png)

## flexible.js 代码解读

```jsx
(function flexible(window, document) {
    // 获取的html 的根元素
    var docEl = document.documentElement
    // dpr 物理像素比
    //window.devicePixelRatio 当前浏览器物流像素比
    var dpr = window.devicePixelRatio || 1

    // adjust body font size  设置我们body 的字体大小
    function setBodyFontSize() {
        // 如果页面中有body 这个元素 就设置body的字体大小
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {
            // 如果页面中没有body 这个元素，则等着 我们页面主要的DOM元素加载完毕再去设置body 的字体大小
            // DOMContentLoaded   DOM元素加载后执行
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10    设置我们 html 元素的文字大小
    function setRemUnit() {
        // html 宽度分为10等份
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize  当我们页面尺寸大小发生变化的时候，要重新设置下rem 的大小
    window.addEventListener('resize', setRemUnit)
        // pageshow 是我们重新加载页面触发的事件
    window.addEventListener('pageshow', function(e) {
        // e.persisted 返回的是true 就是说如果这个页面是从缓存取过来的页面，也需要从新计算一下rem 的大小
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports  有些移动端的浏览器不支持0.5像素的写法
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))
```
