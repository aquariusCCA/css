# **flex-basis**

> 作用: 瀏覽器根據這個屬性設置的值，計算主軸上是否有多餘空間，默認值 auto，即 : 項目的高或寬。
> 
- flex-basis 屬性定義項目佔據主軸空間的大小，因為 flex 佈局默認的主軸都是橫向的（可以想像成數學坐標軸的X軸）。
- 語法格式 :
    
    ```css
    .item {
      flex-basis: <length> | auto;/* 默认值 auto */
    }
    ```
    

### **容器內項目的寬度是根據內容自適應的，這個也就是flex-basis默認值為auto的含義了**

![flex-basis.png](flex-basis.png)

```css
/* 设置容器的宽高、边框，方便看到样子 */
.container {
  width: 450px;
  height: 300px;
  margin: 8% auto;
  border: 1px solid pink;
  display: flex;
}

/* 设置3个项目的背景色 */
.item1 {
  background-color: skyblue;
}

.item2 {
  background-color: aliceblue;
}

.item3 {
  background-color: lightblue;
}
```

```html
<body>
  <div class="container">
    <div class="item item1">item1</div>
    <div class="item item2">item2</div>
    <div class="item item3">item3</div>
  </div>
</body>
```

### **設置項目的寬度為120px**

> 可以看到3個項目的寬度都為 120px了，這個就是 flex-basis 的含義了。
> 
> 
> ![截圖 2024-09-09 下午4.14.01.png](%25E6%2588%25AA%25E5%259C%2596_2024-09-09_%25E4%25B8%258B%25E5%258D%25884.14.01.png)
> 

```css
/* 设置容器的宽高、边框，方便看到样子 */
.container {
  width: 450px;
  height: 300px;
  margin: 8% auto;
  border: 1px solid pink;
  display: flex;
}

.item {
	/* flex-basis 属性定义了项目占据主轴空间（main size）大小。 */
	flex-basis: 120px;
}

/* 设置3个项目的背景色 */
.item1 {
  background-color: skyblue;
}

.item2 {
  background-color: aliceblue;
}

.item3 {
  background-color: lightblue;
}
```

```html
<body>
  <div class="container">
    <div class="item item1">item1</div>
    <div class="item item2">item2</div>
    <div class="item item3">item3</div>
  </div>
</body>
```

### **設置項目的寬度為200px**

![flex-basis3.png](flex-basis3.png)

- 項目被壓縮顯示了，運行效果圖裡可以看到縮小的區間。
- 縮小後項目的寬度是 `150px`，3個剛好為 `450px`，等於容器的寬度。

```css
/* 设置容器的宽高、边框，方便看到样子 */
.container {
  width: 450px;
  height: 300px;
  margin: 8% auto;
  border: 1px solid pink;
  display: flex;
}

.item {
	/* flex-basis属性定义了项目占据主轴空间（main size）大小。 */
	flex-basis: 200px;
}

/* 设置3个项目的背景色 */
.item1 {
  background-color: skyblue;
}

.item2 {
  background-color: aliceblue;
}

.item3 {
  background-color: lightblue;
}
```

```html
<body>
  <div class="container">
    <div class="item item1">item1</div>
    <div class="item item2">item2</div>
    <div class="item item3">item3</div>
  </div>
</body>
```

<aside>
💡

這個例子看起來和上面的例子沒有什麼差別，就是把寬度調整大一些。細心的同學會發現如果項目的寬度都為 200px，那麼 3 個就是 600px，會超過容器寬度了。 👉 由此可知，如果項目的總寬度超過容器的寬度，那麼會縮小到容器範圍內。

</aside>

### **思考 : 如果設置 width: 100px，那麼項目實際為多寬呢？**

> 解答：因為 flex-basis 屬性的優先級比 width 高，所以項目的寬度還是120px。
> 

```css
/* 设置容器的宽高、边框，方便看到样子 */
.container {
  width: 450px;
  height: 300px;
  margin: 8% auto;
  border: 1px solid pink;
  display: flex;
}

.item {
	/* flex-basis属性定义了项目占据主轴空间（main size）大小。 */
	flex-basis: 120px;
}

/* 设置3个项目的背景色 */
.item1 {
  background-color: skyblue;
}

.item2 {
  width: 100px;
  background-color: aliceblue;
}

.item3 {
  background-color: lightblue;
}
```

```html
<body>
  <div class="container">
    <div class="item item1">item1</div>
    <div class="item item2">item2</div>
    <div class="item item3">item3</div>
  </div>
</body>
```

### **思考設置寬度為什麼不直接用width屬性？還要再多一個flex-basis屬性，不是多此一舉嗎？**

`flex-basis` 這邊並沒有說是定義項目的寬度，***而是說：佔據主軸空間的大小***。因為設置容器屬性 `flex-direction` 為 `column` 或者 `column-reverse` 的時候主軸會變成縱向的（可以想像成數學坐標軸的 Y 軸）。

在這種情況下，`flex-basis` 就是設置高，可以理解成 `height` 屬性。從這個意義上來講，`flex-basis` 不全等於 `width`。

<aside>
💡

**備註: 因為 `flex-basis` 的優先級比`width`、`height` 高，所以才會導致它們失效。**

- 主軸是橫向 → 寬度失效。
- 主軸是縱向 → 高度失效。
</aside>

# **flex-grow**

> flex-grow 屬性定義項目的擴大係數，用於分配容器的剩餘空間，那麼什麼是剩餘空間呢 ？其實非常簡單，剩餘空間計算方式就是 → `容器大小 減去 所有項目的總大小`
> 
- 參考示例如下:
    
    ![flex-grow.png](flex-grow.png)
    
    - 每個項目的寬度為 `50px`，3個為 `150px`。
    - 剩餘空間為 `450px - 150px = 300px`。

<aside>
💡

**語法格式:**

```css
.item {
	/* >=0 的数，默认值为 0 */
	flex-grow: <number>;
}
```

- 默認為 0 ，即如果容器存在剩餘空間，也不放大。
- `flex-grow` 只能為 `>=0` 的數字，項目根據設置的係數進行放大。
</aside>

### **那麼問題就來了，項目是如何根據設置的係數分配剩餘空間呢？**

> 這邊涉及到兩個關鍵公式：
> 
- **計算將多少剩餘空間拿來分配**
    - 公式  ⇒  剩餘空間 * ( 所有項目的 `flex-grow` 之和 `>= 1`  ?  1  :  所有項目的 `flex-grow` 之和 ) 。
    - 這邊用了一個三元表達式，理解不難，公式的意思就是說：如果所有項目的 `flex-grow` 之和大於等於 1，那麼就是所有的剩餘空間都拿來分配，否則乘以係數即為要分配的剩餘空間。
- **計算每個項目分配到多少剩餘空間**
    - 公式  ⇒  要分配的剩餘空間 * ( 單個項目 `flex-grow` / 所有項目的 `flex-grow` 之和 )。
    - 簡單的說，就是按照 `flex-grow` 佔比進行分配

### **示例 1 : 設置項目的 flex-grow 為 1**

```css
/* 设置容器的宽高、边框，方便看到样子 */
.container {
  width: 450px;
  height: 300px;
  margin: 8% auto;
  border: 1px solid pink;
  display: flex;
}

.item {
	/* 	flex-basis属性定义了项目占据主轴空间（main size）大小。 */
	/* 	这边设置为50px */
	flex-basis: 50px;

	/* flex-grow 属性定义项目的扩大系数 */
	/* 这边设置为1 */
	flex-grow: 1;
}

/* 设置3个项目的背景色 */
.item1 {
  background-color: skyblue;
}

.item2 {
  background-color: aliceblue;
}

.item3 {
  background-color: lightblue;
}
```

```html
<body>
  <div class="container">
    <div class="item item1">item1</div>
    <div class="item item2">item2</div>
    <div class="item item3">item3</div>
  </div>
</body>
```

- 我們觀察到 3 個項目的寬度都變成了 150px，可以看到項目被進行了擴大。
    
    ![flex-grow2.png](flex-grow2.png)
    
- 現在套公式看下情況：
    - 計算總共要分配多少剩餘空間
        
        ```html
        要分配的剩余空间
         = 剩余空间 * ( 所有项目的 flex-grow 之和 >= 1 ? 1 : 所有项目的 flex-grow 之和 )
         = 300px * (3 >= 1 ? 1 : 3)
         = 300px * 1
         = 300px
        ```
        
    - 計算每個項目分配到多少剩餘空間
        - 因為每個項目 `flex-grow` 都為 1，所以每個項目分配的剩餘空間都一樣。
        
        ```html
        每个项目分配的剩余空间
         = 要分配的剩余空间 * ( 单个项目 flex-grow / 所有项目的 flex-grow 之和 )
         = 300px * ( 1 / 3)
         = 100px
        ```
        
        - 每個項目多分配 `100px`，加上自身設置的 `flex-basis`，最終每個項目寬度就為 `150px` 了。

### **示例 2 : 設置項目 1 的 flex-grow 為 1，項目 2 的 flex-grow 為 2，項目 3 的 flex-grow 為 3**

```css
/* 设置容器的宽高、边框，方便看到样子 */
.container {
  width: 450px;
  height: 300px;
  margin: 8% auto;
  border: 1px solid pink;
  display: flex;
}

.item {
	/* 	flex-basis属性定义了项目占据主轴空间（main size）大小。 */
	/* 	这边设置为50px */
	flex-basis: 50px;
}

/* 设置3个项目的背景色 */
.item1 {
	/* flex-grow属性定义项目的放大比例 */
	flex-grow: 1;
  background-color: skyblue;
}

.item2 {
	/* flex-grow属性定义项目的放大比例 */
	flex-grow: 2;
  background-color: aliceblue;
}

.item3 {
	/* flex-grow属性定义项目的放大比例 */
	flex-grow: 3;
  background-color: lightblue;
}
```

```html
<body>
  <div class="container">
    <div class="item item1">item1</div>
    <div class="item item2">item2</div>
    <div class="item item3">item3</div>
  </div>
</body>

```

> 這個示例和上例差不多，只是數字變成了小數，並且總和不大於 1 先套公式來計算一下：
> 
- 計算總共要分配多少剩餘空間。
    
    ```html
    要分配的剩余空间
     = 剩余空间 * ( 所有项目的 flex-grow 之和 >= 1 ? 1 : 所有项目的 flex-grow 之和 )
     = 300px * (6 >= 1 ? 1 : 6)
     = 300px * 1
     = 300px
    ```
    
- 計算每個項目分配到多少剩餘空間。
    - 因為每個項目 flex-grow 都不一樣，所以每個項目分配的剩餘空間要分開計算。
    
    ```html
    项目1分配的剩余空间
     = 要分配的剩余空间 * ( 项目1 flex-grow / 所有项目的 flex-grow 之和 )
     = 300px * ( 1 / 6)
     = 50px
    
    项目2分配的剩余空间
     = 要分配的剩余空间 * ( 项目2 flex-grow / 所有项目的 flex-grow 之和 )
     = 300px * ( 2 / 6)
     = 100px
    
    项目3分配的剩余空间
     = 要分配的剩余空间 * ( 项目3 flex-grow / 所有项目的 flex-grow 之和 )
     = 300px * ( 3 / 6)
     = 150px
    ```
    
    - 所以最終：項目 1 寬為 `100px`、項目 2 寬為 `150px`、項目 3 寬為 `200px`。

### **示例 3 : 設置項目 1 的 flex-grow 為 0.1，項目 2 的 flex-grow 為 0.2，項目 3 的 flex-grow 為 0.3**

```css
/* 设置容器的宽高、边框，方便看到样子 */
.container {
  width: 450px;
  height: 300px;
  margin: 8% auto;
  border: 1px solid pink;
  display: flex;
}

.item {
	/* 	flex-basis属性定义了项目占据主轴空间（main size）大小。 */
	/* 	这边设置为50px */
	flex-basis: 50px;
}

/* 设置3个项目的背景色 */
.item1 {
	/* flex-grow属性定义项目的放大比例 */
	flex-grow: 0.1;
  background-color: skyblue;
}

.item2 {
	/* flex-grow属性定义项目的放大比例 */
	flex-grow: 0.2;
  background-color: aliceblue;
}

.item3 {
	/* flex-grow属性定义项目的放大比例 */
	flex-grow: 0.3;
  background-color: lightblue;
}
```

```html
<body>
  <div class="container">
    <div class="item item1">item1</div>
    <div class="item item2">item2</div>
    <div class="item item3">item3</div>
  </div>
</body>
```

- **計算總共要分配多少剩餘空間**
    
    ```html
    要分配的剩余空间
     = 剩余空间 * ( 所有项目的 flex-grow 之和 >= 1 ? 1 : 所有项目的 flex-grow 之和 )
     = 300px * (0.6 >= 1 ? 1 : 0.6)
     = 300px * 0.6
     = 180px
    ```
    
- **計算每個項目分配到多少剩餘空間**
    
    因為每個項目 `flex-grow` 都不一樣，所以每個項目分配的剩餘空間要分開計算。
    
    ```html
    项目1分配的剩余空间
     = 要分配的剩余空间 * ( 项目1 flex-grow / 所有项目的 flex-grow 之和 )
     = 180px * ( 0.1 / 0.6)
     = 30px
    
    项目2分配的剩余空间
     = 要分配的剩余空间 * ( 项目2 flex-grow / 所有项目的 flex-grow 之和 )
     = 180px * ( 0.2 / 0.6)
     = 60px
    
    项目3分配的剩余空间
     = 要分配的剩余空间 * ( 项目3 flex-grow / 所有项目的 flex-grow 之和 )
     = 180px * ( 0.3 / 0.6)
     = 90px
    ```
    
    所以最終：項目 1 寬為 `80px`、項目 2 寬為 `110px`、項目 3 寬為 `140px`。
    

### **flow-grow 應用**

- flow-grow 屬性在項目中運用很多，比如頁面佈局、導航條、分頁等。
    
    ![flow-grow應用.png](flow-grow%25E6%2587%2589%25E7%2594%25A8.png)
    
- 這個其實就是騰訊首頁的導航條了，我們模擬實現一下，步驟分為 4 步:
- Step1: 首先先寫 html 標籤，標籤很簡單一個 nav 包含若干 a 標籤。
    
    ```html
    <nav class="container">
      <a class="item" href="#">新闻</a>
      <a class="item" href="#">视频</a>
      <a class="item" href="#">图片</a>
      <a class="item" href="#">军事</a>
      <a class="item" href="#">体育</a>
      <a class="item" href="#">NBA</a>
      <a class="item" href="#">娱乐</a>
      <a class="item" href="#">财经</a>
      <a class="item" href="#">科技</a>
    </nav>
    ```
    
- Step2: 設置基本樣式，背景、顏色、邊框圓角等。
    
    ```css
    .container {
      height: 44px;
      background-color: #1479d7;
      border-radius: 3px;
    }
    
    .item {
      color: white;
      text-align: center;
      text-decoration: none;
    }
    ```
    
- Step3: 設置容器為 flex 佈局，項目 flex-grow 為 1 平分剩餘空間。
    
    ```css
    .container {
    	/* 设置子元素的布局为flex布局 */
    	display: flex;
    }
    
    .item {
    	/* 设置项目放大系数 */
    	flex-grow: 1;
    }
    ```
    
- Step4: 再來一個上下居中即可，flex 彈性佈局將容器屬性 align-items 設置為 center 即可。
    
    ```css
    .container {
    	/* 设置交叉轴上项目居中排列 */
    	align-items: center;
    }
    ```
    

# **flex-shrink**

> 本篇介紹了 flex-shrink 屬性，flow-grow 用於放大，那麼 flex-shrink 就是縮小了，其縮小規則和 flex-grow 類似，放大是因為有剩餘空間，縮小就是因為項目的寬度超過容器了，有一個超出空間，所以就要進行縮小。
> 
- 超出空間計算方式: `所有項目的總大小 減去 容器大小`
    
    ![flex-shrink.png](flex-shrink.png)
    
- 語法格式:
    
    ```css
    .item {
    	/* >=0 的数，默认值为 1 */
    	flex-shrink: <number>;
    }
    ```
    
    - 其中 :
        - 默認值為 1，表示所有項目等比例縮小。
        - 如果為 0，那麼表示不縮小。
- 縮小的尺寸計算方式和 `flew-grow` 類似，涉及到兩個公式：
    - 計算超出空間中多少用來壓縮 :
        
        ```
        公式：超出空间 * ( 所有项目的 flex-shrink 之和 >= 1 ? 1 : 所有项目的 flex-shrink 之和 ) 。
        ```
        
        如果沒有超出空間，那麼就不用壓縮了；如果超出空間為 `150px`，所有項目的 `flex-shrink` 之和為 `0.6`，那麼 `90px` 用來壓縮。
        
    - 計算每個項目縮小多少空間 :
        
        ```
        公式：要压缩的空间 * ( 单个项目 flex-shrink / 所有项目的 flex-shrink 之和 )
        ```
        
        簡單的說，就是按照 `flex-shrink` 佔比進行縮小。
        
        下面我們結合例子進行說明，對這邊的計算公式進行理解。
        

### **示例 1 : 設置項目的 flex-shrink 為 0**

```css
/* 设置容器的宽高、边框，方便看到样子 */
.container {
  width: 450px;
  height: 300px;
  margin: 8% auto;
  border: 1px solid pink;
  display: flex;
}

.item {
	/* flex-basis 属性定义了项目占据主轴空间（main size）大小。 */
	flex-basis: 200px;

	/* flex-shrink 属性定义项目的缩小系数 */
	flex-shrink: 0;
}

/* 设置3个项目的背景色 */
.item1 {
  background-color: skyblue;
}

.item2 {
  background-color: aliceblue;
}

.item3 {
  background-color: lightblue;
}
```

```html
<body>
  <div class="container">
    <div class="item item1">item1</div>
    <div class="item item2">item2</div>
    <div class="item item3">item3</div>
  </div>
</body>
```

<aside>
💡

**其中 flex-shrink 為 0 表示不壓縮項目。**

</aside>

### **示例 2 : 接上例，設置項目 1、2、3 的 flex-shrink 分別為 0、1、2**

1. 計算超出空間中多少用來壓縮 :
    
    ```
    要压缩的空间
     = 总超出空间 * ( 所有项目的 flex-shrink 之和 >= 1 ? 1 : 所有项目的 flex-shrink 之和 ) 。
     = 150px * ( 3 >= 1 ? 1 : 3)
     = 150px
    ```
    
2. 計算每個項目縮小多少空間 :
    
    ```
    项目 1 压缩的空间
     = 150px * ( 0 / 3 )
     = 0
    
    项目 2 压缩的空间
     = 150px * ( 1 / 3 )
     = 50px
    
    项目 3 压缩的空间
     = 150px * ( 2 / 3 )
     = 100px
    ```
    

```css
/* 设置容器的宽高、边框，方便看到样子 */
.container {
  width: 450px;
  height: 300px;
  margin: 8% auto;
  border: 1px solid pink;
  display: flex;
}

.item {
	/* flex-basis 属性定义了项目占据主轴空间（main size）大小。 */
	flex-basis: 200px;
}

/* 设置3个项目的背景色 */
.item1 {
  flex-shrink: 0;
  background-color: skyblue;
}

.item2 {
  flex-shrink: 1;
  background-color: aliceblue;
}

.item3 {
  flex-shrink: 2;
  background-color: lightblue;
}
```

```html
<body>
  <div class="container">
    <div class="item item1">item1</div>
    <div class="item item2">item2</div>
    <div class="item item3">item3</div>
  </div>
</body>
```

<aside>
💡

**所以最終：項目 1 寬為 200px、項目 2 寬為 150px、項目 3 寬為 100px。**

</aside>

### **示例 3 : 設置項目 1、2、3 的 flex-shrink 分別為 0.1、0.2、0.3**

1. 計算超出空間中多少用來壓縮 :
    
    ```
    要压缩的空间
     = 总超出空间 * ( 所有项目的 flex-shrink 之和 >= 1 ? 1 : 所有项目的 flex-shrink 之和 ) 。
     = 150px * ( 0.6 >= 1 ? 1 : 0.6)
     = 90px
    ```
    
2. 計算每個項目縮小多少空間 :
    
    ```
    项目 1 压缩的空间
     = 90px * ( 0.1 / 0.6 )
     = 15px
    
    项目 2 压缩的空间
     = 90px * ( 0.2 / 0.6 )
     = 30px
    
    项目 3 压缩的空间
     = 90px * ( 0.3 / 0.6 )
     = 45px
    ```
    

```css
/* 设置容器的宽高、边框，方便看到样子 */
.container {
  width: 450px;
  height: 300px;
  margin: 8% auto;
  border: 1px solid pink;
  display: flex;
}

.item {
	/* flex-basis 属性定义了项目占据主轴空间（main size）大小。 */
	flex-basis: 200px;
}

/* 设置3个项目的背景色 */
.item1 {
  flex-shrink: .1;
  background-color: skyblue;
}

.item2 {
  flex-shrink: .2;
  background-color: aliceblue;
}

.item3 {
  flex-shrink: .3;
  background-color: lightblue;
}
```

```html
<body>
  <div class="container">
    <div class="item item1">item1</div>
    <div class="item item2">item2</div>
    <div class="item item3">item3</div>
  </div>
</body>
```

<aside>
💡

**所以最終：項目 1 寬為 185x、項目 2 寬為 170px、項目 3 寬為 155px**

</aside>

# **flex 属性**

> flex 屬性就是 flex-grow、flex-shrink、flex-basis 三個屬性的合集。
> 
> - `flex-grow` → 用於設置項目的放大係數。
> - `flex-shrink` → 用於設置項目的縮小係數。
> - `flex-basis` → 用於設置項目在主軸上的空間。
- 那麼項目屬性 flex 就很簡單了，他其實是 3 個屬性的集中而已，語法格式如下:
    
    ```css
    .item {
      flex: flex-grow flex-shrink flex-basis | auto | none;
    }
    ```
    
- 其中 :
    - 這個屬性可以獨立設置 flex-grow flex-shrink flex-basis 的值，如：1 0 120px。
    - auto 表示：1 1 auto，即等比例擴大或者壓縮。
    - none 表示：0 0 auto，即不擴大，也不壓縮。
- 實務中常看到如下的程式碼:
    
    ```css
    .item {
    	/* 這個其實就是表示 flex-grow 設置為 1，各項目等比例放大。*/
    	flex: 1;
    }
    ```
    

### **左右固定，中間是剩餘空間的範例程式碼**

![flex属性.png](flex%25E5%25B1%259E%25E6%2580%25A7.png)

```html
<body>
    <section>
        <div></div>
        <div></div>
        <div></div>
    </section>
</body>
```

```css
section {
  display: flex;
  width: 60%;
  height: 150px;
  background-color: pink;
  margin: 0 auto;
}

section div:nth-child(1) {
  width: 100px;
  height: 150px;
  background-color: red;
}

section div:nth-child(2) {
  flex: 1;
  background-color: green;
}

section div:nth-child(3) {
  width: 100px;
  height: 150px;
  background-color: blue;
}
```

### **每個 span 各占一份的範例程式碼**

![flex属性2.png](flex%25E5%25B1%259E%25E6%2580%25A72.png)

```html
<body>
    <p>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </p>
</body>
```

```css
p {
    display: flex;
    width: 60%;
    height: 150px;
    background-color: pink;
    margin: 100px auto;
}

p span {
    flex: 1;
}
```

### **每個 span 各占不同份數的範例程式碼**

```css
.box-wrap {
  width: 500px;
  margin: 0 auto;
  display: flex;
  height: 200px;
  border: 1px solid #666;
}

/* 固定尺寸 */
.box-1 {
  width: 100px;
  background-color: skyblue;
}

/* 占 3/4 */
.box-2 {
  flex: 3;
  background-color: yellow;
}

/* 占 1/4 */
.box-3 {
  flex: 1;
  background-color: green;
}
```

```html
<body>
  <div class="box-wrap">
    <div class="box box-1"></div>
    <div class="box box-2"></div>
    <div class="box box-3"></div>
  </div>
</body>
```

# **order 屬性定義項目的排列順序**

> 數值越小，排列越靠前，默認為 0，注意和 z-index 不一樣。
> 
> 
> ![order屬性定義項目的排列順序.png](order%25E5%25B1%25AC%25E6%2580%25A7%25E5%25AE%259A%25E7%25BE%25A9%25E9%25A0%2585%25E7%259B%25AE%25E7%259A%2584%25E6%258E%2592%25E5%2588%2597%25E9%25A0%2586%25E5%25BA%258F.png)
> 

```html
<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>
```

```css
div {
  display: flex;
  width: 80%;
  height: 300px;
  background-color: pink;
}

div span {
  width: 150px;
  height: 100px;
  margin-right: 5px;
}

div span:nth-child(1) {
  background-color: purple;
}

div span:nth-child(2) {
	/* 默认是0，-1比0小所以在前面  */
	background-color: yellow;
  order: -1;
}

div span:nth-child(3) {
  background-color: skyblue;
}
```

# **align-self 控制子項自己在側軸上的排列方式**

![align-self控制子項自己在側軸上的排列方式.png](align-self%25E6%258E%25A7%25E5%2588%25B6%25E5%25AD%2590%25E9%25A0%2585%25E8%2587%25AA%25E5%25B7%25B1%25E5%259C%25A8%25E5%2581%25B4%25E8%25BB%25B8%25E4%25B8%258A%25E7%259A%2584%25E6%258E%2592%25E5%2588%2597%25E6%2596%25B9%25E5%25BC%258F.png)

- `align-self` 屬性允許單個項目有與其他項目不一樣的對齊方式，可覆蓋 `align-items` 屬性。
- 默認值為 `auto`，表示繼承父元素的 `align-items` 屬性，如果沒有父元素，則等同於 `stretch`。

```html
<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>
```

```css
div {
  display: flex;
  width: 80%;
  height: 300px;
  background-color: pink;
  
	/* 让三个子盒子沿着侧轴底侧对齐 */
	/* align-items: flex-end; */
}

div span {
  width: 150px;
  height: 100px;
  background-color: purple;
  margin-right: 5px;
}

div span:nth-child(3) {
	/* 我们想只让3号盒子下来底侧 */
	align-self: flex-end;
}
```