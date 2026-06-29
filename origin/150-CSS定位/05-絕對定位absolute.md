# 絕對定位absolute

<aside>
💡 **Questions:**

*Write it during the class*

</aside>

<aside>
💡 **Key Points:**

*Write it after the class*

</aside>

<aside>
📌 **Summary:**

*Write it after the class*

</aside>

<aside>
✏️

**Notes:**

*Write it during the class*

> 絕對定位是元素在移動位置的時候，是相對於它的祖先元素來說的。
> 

<aside>
💡

**絕對定位的參考點在哪裡 ?**

- 參考它的包含塊。
    - 如果沒有祖先元素，或者祖先元素沒定位，則以瀏覽器為准進行定位(Document 文檔)。
    - 如果祖先元素父級有定位 (相對、絕對、固定定位)，則以最近一級的有定位祖先元素為參考點移動位置。
- 甚麼是包含塊 ?
    - 對於沒有脫離文檔流的元素，包含塊就是父元素。
    - 對於脫離文檔流的元素，包含塊是第一個擁有定位屬性的祖先元素，如果所有祖先元素都沒定位，那包含塊就是整個頁面。
</aside>

<aside>
💡

**特點 :**

- 絕對定位不再佔用原先的位置(脫標)，脫離文檔流會對後面的兄弟元素、父元素有影響。
- left 不能和 right 一起設置，top 和 bottom 不能一起設置。
- 絕對定位、浮動不能同時設置，如果同時設置，浮動失效，以定位為主。
- 絕對定位的元素，也能通過 margin 調整位置，但不推薦這樣做。
- 無論是什麼元素 (行內、行內塊、塊級) 設置為絕對定位之後，都變成了定位元素。
    - 何謂定位元素 → 默認寬、高都被內容所撐開，且能自由設置寬高。
- 💡 絕對定位是脫離標準流的。
</aside>

- **沒有祖先元素** 的範例程式碼
    
    ```css
    .father {
      width: 500px;
      height: 500px;
      background-color: skyblue;
    }
    .son {
      position: absolute;
    
      top: 10px;
      left: 10px;
    
    	/* 
    	top: 100px;
      right: 200px; 
      */
      
      /* 
      left: 0;
      bottom: 0; 
      */
      
      width: 200px;
      height: 200px;
      background-color: pink;
    }
    ```
    
    ```html
    <body>
      <div class="father">
    	  <div class="son"></div>
      </div>
    </body>
    ```
    
- **父級有定位** 的範例程式碼
    
    ```css
    .yeye {
      position: relative;
      width: 800px;
      height: 800px;
      background-color: hotpink;
      padding: 50px;
    }
    
    .father {
      width: 500px;
      height: 500px;
      background-color: skyblue;
    }
    
    .son {
      position: absolute;
      left: 30px;
      bottom: 10px;
      width: 200px;
      height: 200px;
      background-color: pink;
    }
    ```
    
    ```html
    <body>
      <div class="yeye">
        <div class="father">
          <div class="son"></div>
        </div>
      </div>
    </body>
    ```
    

# **絕對定位的盒子居中**

<aside>
⚠️

**加了絕對定位的盒子不能通過 `margin: 0 auto` 水平居中，但是可以通過以下計算方法實現水平和垂直居中。**

- `left: 50%;` 讓盒子的左側移動到父級元素的水平中心位置。
- `margin-left: -100px;` 讓盒子向左移動自身寬度的一半。
</aside>

```css
.box {
  position: absolute;
  
	/* 1. left 走 50%  父容器寬度的一半 */
	left: 50%;
	
	/* 2. margin 負值 往左邊走 自己盒子寬度的一半 */
	margin-left: -100px;
	
	/* 3. top 走 50% 父容器高度的一半 */
	top: 50%;
	
	/* 4. margin 負值 往上走 自己盒子高度的一半 */
	margin-top: -100px;
	
  width: 200px;
  height: 200px;
  background-color: pink;
}
```

```html
<body>
    <div class="box"></div>
</body>
```

# **子絕父相的由來**

> 意思：子級使用絕對定位，父級則需要相對定位。
> 
- 絕對定位查找父級的方法：逐級向上，最終是瀏覽器窗口。
- 子級絕對定位，不會佔有位置，可以放到父盒子裡面的任何一個地方，不會影響其他的兄弟盒子。
- 父盒子需要加定位限制子盒子在父盒子內顯示。
- 父盒子佈局時，需要佔有位置，因此父親只能是相對定位。

<aside>
💡

**總結：因為父級需要佔有位置，因此是相對定位，子盒子不要佔有位置，則是絕對定位。**

</aside>

</aside>