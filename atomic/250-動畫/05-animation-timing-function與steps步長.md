---
source:
  - 'origin/250-動畫/04-動畫常用屬性.md / # 速度曲線step步長'
---

# animation-timing-function 與 steps 步長

> `animation-timing-function`：規定動畫的速度曲線，默認是 `ease`。

![animation-timing-function 速度曲線值對照表](../../origin/250-動畫/assets/images/animation-common-properties-img-002-9c9ba2.png)

```css
div {
  font-size: 20px;
  overflow: hidden;
  width: 0;
  height: 30px;
  background-color: pink;
  animation-name: w;
  animation-duration: 4s;
	/* steps: 就是分幾步來完成我們的動畫，有了 steps 就不要再寫 ease 或者是 linear */
	animation-timing-function: steps(10);
  animation-fill-mode: forwards;

	/* 複合寫法 */
	/* animation: w 4s steps(10) forwards; */
}

@keyframes w {
  0% {
    width: 0;
  }

  100% {
    width: 200px;
  }
}
```

```html
<body>
  <div>大家來一起學習前端吧</div>
</body>
```
