---
source:
  - 'origin/250-動畫/04-動畫常用屬性.md / # 動畫常用屬性'
---

# animation 常用屬性

![CSS 動畫常用屬性與用途對照表](../../origin/250-動畫/assets/images/animation-common-properties-img-001-79665f.png)

```html
<body>
    <div></div>
</body>
```

```css
/* 1. 定義動畫 */
@keyframes move {
  0% {
      transform: translateX(0px);
  }

  100% {
      transform: translateX(1000px);
  }
}

div {
  width: 200px;
  height: 200px;
  background-color: pink;

	/* 2. 調用動畫 */
	animation-name: move;/* 動畫名稱 */

  animation-duration: 2s;/* 持續時間 */

  animation-timing-function: ease-in;/* 運動曲線 */
  
  animation-delay: 1s;/* 何時開始 */
  
  /* 重複次數 */
  /* animation-iteration-count: infinite;  */
  
  /* 是否反向播放 */
  /* animation-direction: alternate; */
  animation-fill-mode: forwards;
}

div:hover {
	/* 是否停止動畫 */
	animation-play-state: paused;
}
```
