---
source:
  - 'origin/100-字體屬性/01-字體屬性.md / # 字體粗細font-weight'
---

# font-weight 字體粗細

CSS 使用 `font-weight` 屬性設置文本字體的粗細。

![font-weight 屬性值對照表，列出 normal、bold、bolder 與 100 到 900 數值](../../origin/100-字體屬性/assets/images/font-properties-img-002-261a82.png)

常見字重教材多使用 `100` 到 `900` 的整百數值；現代 CSS 允許 `1` 到 `1000` 的數字範圍，實際顯示效果仍取決於字體是否提供對應字重。

```css
font-weight: normal | bold | bolder | lighter | number
```

重點：

1. 不是所有字體都提供了九種粗細，因此部分取值在頁面中無變化。
2. 實際開發中以 `400`（正常）、`700`（加粗）兩種取值最常使用。
3. 實際開發時，更常用數字表示粗細。

```css
.bold {
  /* 這個 700 的後面不要跟單位，等價於 bold，都是加粗的效果 */
  /* 實際開發中，我們更提倡使用數字，表示加粗或者變細 */
  font-weight: 700;
}

h2 {
  font-weight: 400;
}
```

```html
<h2>pink的秘密</h2>
<p>那一抹众人中最漂亮的颜色,</p>
<p>优雅,淡然,又那么心中清澈.</p>
<p>前端总是伴随着困难和犯错,</p>
<p>静心,坦然,攻克一个又一个.</p>
<p class="bold">拼死也要克服它,</p>
<p>这是pink的秘密也是老师最终的嘱托.</p>
```
