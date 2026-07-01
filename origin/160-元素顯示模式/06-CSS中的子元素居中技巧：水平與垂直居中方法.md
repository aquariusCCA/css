<aside>
💡

**如何讓子元素在父親中水平居中 :**

- 若子元素為塊元素，給子元素加上 → `margin: 0 auto;`
- 若子元素為行內元素、行內塊元素，給父元素加上 → `text-align: center;`
</aside>

<aside>
💡

**如何讓子元素在父親中垂直居中 :**

- 若子元素為塊元素，給子元素加上 → margin-top，值為 `(父元素 content - 子元素總高) / 2`
- 若子元素為行內元素、行內塊元素，給父元素加上
    - 讓父元素的 `height = line-height` 。
    - 讓每個子元素都加上 `vertical-align: middle` 。
    - 若想絕對垂直居中，父元素 `font-size` 設置為 0。
</aside>

<aside>
⚠️

**行內元素、行內塊元素，可以被父元素當作文本處理。**

- 即: 可以像處理文本對齊一樣去處理，例如 : text-align、line-height、text-indent 等。
</aside>

- **塊元素程式碼範例**
    
    ```css
    .outer {
      width: 400px;
      height: 400px;
      background-color: gray;
      overflow: hidden;
    }
    
    .inner {
      width: 200px;
      height: 100px;
      background-color: orange;
      margin: 0 auto;
      margin-top: 150px;
      text-align: center;
      line-height: 100px;
    }
    ```
    
    ```html
    <div class="outer">
      <div class="inner">inner</div>
    </div>
    ```
    
- **行內元素、行內塊元素程式碼範例**
    
    ```css
    div {
      width: 400px;
      height: 400px;
      background-color: gray;
      font-size: 0;
    }
    
    .outer {
      width: 400px;
      height: 400px;
      background-color: gray;
      text-align: center;
      line-height: 400px;
      font-size: 0px;
    }
    
    input {
      vertical-align: middle;
    }
    
    span {
      font-size: 20px;
      vertical-align: middle;
      background-color: orange;
    }
    ```
    
    ```html
    <div class="outer">
      <span>出來玩啊</span>
      <input type="text">
    </div>
    ```
    