# CSS 屬性書寫順序

## 學習目標

讀完本章後，你應該能說明為什麼同一個 selector 裡的 CSS declaration 需要固定書寫順序。你也應該能把一組零散的 CSS 屬性重新整理成較容易閱讀的順序：先看布局與定位，再看元素自身盒子，再看文字樣式，最後處理其他視覺或互動細節。

本章的重點不是背誦所有 CSS 屬性，而是建立一個閱讀與維護 CSS 的順序模型。當你看到一大段樣式時，應該能先判斷這個元素如何顯示、佔多少空間、文字如何呈現，以及還有哪些裝飾或互動效果。

## 前置知識

學習本章前，建議先能看懂基本 CSS 規則，例如：

```css
.card {
    color: #222;
    padding: 16px;
}
```

你需要知道 `.card` 是 selector，`color: #222;` 與 `padding: 16px;` 是 declarations。若還不熟悉 selector、property、value、冒號與分號，應先回到 CSS 簡介章節建立基本語法觀念。

本章會提到 `display`、`position`、`width`、`margin`、`font`、`background` 等屬性，但不會深入教完整 box model、position、flexbox、文字排版或背景語法。這些主題適合在後續章節分開學習。

## 本章範圍

本章深入處理的是「同一個 CSS 規則中，屬性宣告如何排序才方便閱讀與維護」。來源資料將屬性分成四組：布局定位屬性、自身屬性、文本屬性與其他屬性，並特別建議 `display` 優先書寫，因為它會影響元素的顯示模式。

本章只會把這些分類轉成可操作的閱讀順序，不會展開每個屬性的完整用法。像 `position` 的定位上下文、`overflow` 的溢出行為、`font` 的縮寫語法、`text-align` 的文字對齊、`box-shadow` 的陰影參數、`linear-gradient()` 的背景語法，都可以另開章節。

補充說明：CSS 屬性書寫順序主要是維護慣例，不是瀏覽器要求的語法格式。多數不同屬性換順序後，畫面結果不會改變；但當同一屬性重複宣告，或 shorthand 與 longhand 互相覆蓋時，後出現的宣告可能影響結果。這屬於 cascade 與 source order 的完整主題，本章只提醒，不深入展開。

## 先看問題：一段 CSS 能生效，但很難閱讀

先看一段常見的初學者寫法：

```html
<article class="card">
    <h2>CSS 屬性書寫順序</h2>
    <p>固定順序可以讓樣式更容易閱讀與維護。</p>
</article>
```

```css
.card {
    color: #222;
    border-radius: 8px;
    display: block;
    padding: 16px;
    overflow: hidden;
    width: 320px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .12);
    margin: 24px;
    font-family: Arial, sans-serif;
}
```

這段 CSS 可能可以正常顯示，但閱讀時會有一個問題：你很難快速看出這個元素的顯示模式、尺寸、間距、文字設定與裝飾效果分別在哪裡。當 declaration 數量變多，開發者每次修改都要來回掃描，維護成本就會增加。

CSS 屬性書寫順序要解決的不是「讓瀏覽器更懂 CSS」，而是「讓人更容易讀懂這個元素如何被畫出來」。一個穩定的順序可以讓你從外到內、從版面到細節，逐步理解這個元素。

## 第一課：先寫布局定位，先判斷元素如何參與版面

### 問題情境

你正在檢查 `.card` 為什麼寬度、溢出或排列結果和預期不同。這時如果第一眼看到的是 `color`、`border-radius` 或 `box-shadow`，你其實還不知道這個元素如何參與版面。

因此，閱讀一段 CSS 時，最先需要回答的問題是：這個元素用什麼顯示模式？它是否定位？是否浮動？內容超出時如何處理？

### 畫面觀察

在 CSS 中，`display` 會影響元素的顯示模式，也會影響後續許多版面判斷。例如同樣是設定寬度與間距，block、inline、flex container 或 grid container 的行為可能不同。

來源資料把 `display`、`position`、`float`、`clear`、`visibility`、`overflow` 放在「布局定位屬性」中，並建議 `display` 第一個寫。這個順序的用意是：先確認元素在版面系統中的角色，再往下看尺寸與外觀。

### 最小修改

把原本散落在中間的布局定位屬性移到宣告區塊前段：

```css
.card {
    display: block;
    overflow: hidden;
    width: 320px;
    margin: 24px;
    padding: 16px;
    background: #fff;
    color: #222;
    font-family: Arial, sans-serif;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .12);
}
```

這裡的畫面結果不一定改變，但閱讀順序改變了。現在你一開始就能看到 `.card` 是 `display: block;`，並且內容超出時使用 `overflow: hidden;` 處理。

### 結果解釋

`display` 寫在前面，可以讓讀者先建立版面模型：這個元素是一個區塊、行內元素、flex container，還是其他顯示模式。接著看 `position`、`float`、`clear`、`visibility`、`overflow`，就能判斷它是否脫離一般排版、是否浮動、是否可見，以及內容超出盒子時如何呈現。

這些屬性通常會影響「元素和其他元素如何互動」。如果把它們藏在顏色、陰影、圓角之間，排查版面問題時就不容易先抓到關鍵。

### 誤判修正

不要把「先寫 `display`」誤解成「`display` 一定會改變畫面」。如果元素原本的瀏覽器預設顯示模式剛好就是你設定的值，畫面可能看不出差異。這個順序的價值在於讓讀者先看見顯示模式，而不是保證每次設定都會產生肉眼可見的變化。

另一個常見誤解是以為排序可以解決所有排版問題。實際上，排序只讓問題更容易被看見；若 `display` 值本身用錯，仍需要回到該屬性的規則去修正。

### 小整理

布局定位屬性適合放在 declaration block 前段，尤其是 `display`。閱讀時先問：這個元素如何顯示？是否定位或浮動？是否可見？內容超出時如何處理？

## 第二課：再寫自身屬性，建立元素盒子的大小與外觀底層

### 問題情境

當你知道 `.card` 是一個 block 元素後，下一個問題通常是：它佔多大？離其他元素多遠？內部內容和邊框距離多遠？背景和邊框長什麼樣子？

如果尺寸、間距與背景散落在整段 CSS 中，修改卡片大小時就很容易漏看 `padding`、`border` 或 `margin`。

### 畫面觀察

來源資料把 `width`、`height`、`margin`、`padding`、`border`、`background` 放在「自身屬性」中。這些屬性主要描述元素自己的盒子：寬高、外距、內距、邊框與背景。

它們和布局定位屬性不同。布局定位屬性先決定元素如何參與版面；自身屬性則更接近「這個元素本身佔用多少空間，以及自己的表面如何呈現」。

### 最小修改

把自身屬性放在布局定位屬性後面：

```css
.card {
    display: block;
    overflow: hidden;

    width: 320px;
    margin: 24px;
    padding: 16px;
    border: 1px solid #ddd;
    background: #fff;

    color: #222;
    font-family: Arial, sans-serif;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .12);
}
```

這次最小修改除了重新排序，也加入 `border: 1px solid #ddd;`，讓你能觀察自身屬性之間的關係：`width` 控制寬度，`margin` 控制外部距離，`padding` 控制內容與邊界的距離，`border` 顯示邊界，`background` 填滿元素背景。

### 結果解釋

現在你閱讀 `.card` 時，可以先看到它如何顯示，再看到它的盒子條件。這樣排查「卡片太寬」、「內容太貼邊」、「卡片之間太擠」、「背景沒有出現」等問題時，會先集中檢查同一區段的屬性。

這個順序也讓後續修改更穩定。例如你想調整卡片和其他元素的距離，就找 `margin`；想調整內容和邊框的距離，就找 `padding`；想看背景或邊框，就找 `background` 與 `border`。

### 誤判修正

初學者常把 `margin` 和 `padding` 混在一起理解。放在同一組不代表它們效果相同，而是它們都和元素盒子的空間有關。簡單判斷是：`margin` 是元素外部的距離，`padding` 是元素內容和邊界之間的距離。

也不要以為 `background` 只屬於裝飾。來源把 `background` 放在自身屬性中，是因為背景通常附著在元素盒子上，和元素自身的可視範圍有關。至於漸層背景、背景圖片、背景位置等細節，適合另開背景章節。

### 小整理

自身屬性適合放在布局定位之後。閱讀時問：這個元素多大？和外界距離多少？內容離邊界多遠？有沒有邊框與背景？

## 第三課：接著寫文本屬性，處理內容文字的呈現

### 問題情境

卡片的盒子已經穩定後，下一步才是看文字本身：文字顏色是否正確？字體大小是否合適？文字是否置中？過長文字是否換行？

如果文字設定混在寬高、背景、陰影之間，當你只想調整閱讀體驗時，就會被許多與文字無關的屬性干擾。

### 畫面觀察

來源資料將 `color`、`font`、`text-decoration`、`text-align`、`vertical-align`、`white-space`、`break-word` 歸在「文本屬性」。這組屬性用來理解文字如何被呈現，包括顏色、字體、裝飾線、水平對齊、垂直對齊與空白處理。

注意：來源中的 `break-word` 以屬性名稱形式出現，但來源沒有提供完整語法。實務上它可能指向文字斷行相關設定；本章只保留「文字換行處理」這個分類意圖，不把 `break-word` 當作完整屬性教學。

### 最小修改

把文本屬性集中放在自身屬性後面：

```css
.card {
    display: block;
    overflow: hidden;

    width: 320px;
    margin: 24px;
    padding: 16px;
    border: 1px solid #ddd;
    background: #fff;

    color: #222;
    font-family: Arial, sans-serif;
    font-size: 16px;
    text-align: left;
}
```

這個範例用 `color`、`font-family`、`font-size` 與 `text-align` 展示文本區段。修改前，文字設定分散；修改後，所有和文字閱讀有關的宣告集中在同一段。

### 結果解釋

文本屬性放在盒子屬性後面，可以建立一個清楚的閱讀順序：先確認容器，再確認容器裡的文字。這對初學者尤其重要，因為文字顯示結果常受到父元素寬度、內距與溢出設定影響。

例如同樣的 `text-align: left;`，如果容器寬度不同，文字行長就不同；同樣的字級，如果 `padding` 很小，文字看起來會貼邊。因此先看自身盒子，再看文字樣式，通常更符合排查畫面問題的順序。

### 誤判修正

不要以為文本屬性只會作用在文字節點本身。很多文字樣式會套在元素上，再影響元素內的文字呈現。當你在 `.card` 上寫 `color`，卡片內部文字可能會跟著使用這個顏色；但更完整的繼承規則要在 inheritance 章節學習。

也不要把 `vertical-align` 誤解成任何元素都能拿來做垂直置中。它有特定適用情境，本章只把它放在文本相關分類中，不展開其完整行為。

### 小整理

文本屬性適合放在元素自身屬性之後。閱讀時問：文字顏色、字體、裝飾、對齊與換行如何被設定？若文字結果不如預期，也要回頭看容器的寬度、內距與溢出條件。

## 第四課：最後寫其他屬性，處理裝飾、互動與特殊內容

### 問題情境

當元素如何排列、盒子多大、文字如何呈現都清楚後，最後才適合看較細節的效果，例如滑鼠游標、圓角、陰影、文字陰影或特殊產生內容。

如果一開始就先看 `box-shadow` 或 `border-radius`，可能會花很多時間在視覺裝飾上，卻還沒確認元素本身的版面條件。

### 畫面觀察

來源資料把 `content`、`cursor`、`border-radius`、`box-shadow`、`text-shadow`、`background:liner-gradient...` 放在「其他屬性」。這些屬性不全屬於同一種 CSS 機制，但在書寫順序上可以放在最後，因為它們多半是建立在前面版面、盒子與文字設定之上的補充效果。

補充說明：`border-radius` 和 `box-shadow` 常用於視覺裝飾；`cursor` 常用於互動提示；`content` 通常和 pseudo-element 等情境有關；漸層背景屬於背景相關語法。這些都可以另開章節深入處理。

### 最小修改

把其他屬性放在文本屬性後面：

```css
.card {
    display: block;
    overflow: hidden;

    width: 320px;
    margin: 24px;
    padding: 16px;
    border: 1px solid #ddd;
    background: #fff;

    color: #222;
    font-family: Arial, sans-serif;
    font-size: 16px;
    text-align: left;

    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .12);
    cursor: pointer;
}
```

現在這段 CSS 的閱讀路線很穩定：先看顯示與溢出，再看盒子，接著看文字，最後看圓角、陰影與游標。

### 結果解釋

把其他屬性放最後，可以避免細節效果干擾主線判斷。當你只想知道 `.card` 為什麼佔用 320px 或為什麼內容被裁切時，前段就能找到關鍵；當你想調整精緻度或互動提示時，再讀到後段。

這種順序也方便團隊協作。即使不同開發者沒有同時寫同一段 CSS，只要都遵守接近的排序，後續維護者就能用同一套路徑閱讀每個 selector。

### 誤判修正

「其他屬性」不是不重要的屬性，也不是可以隨便亂放的區域。它只是表示這些宣告通常不是判斷版面主結構的第一步。若某個專案對特定效果有明確規範，也可以再細分順序，例如先寫圓角，再寫陰影，再寫游標。

### 小整理

其他屬性適合放在最後，作為裝飾、互動或特殊內容補充。閱讀時問：前面的版面、盒子與文字條件是否已經清楚？這些細節效果是否建立在正確的元素基礎上？

## 屬性書寫順序回查

理解前面四課後，可以把本章順序整理成下表，作為書寫與檢查 CSS 時的回查工具：

| 順序 | 分類 | 來源列出的屬性 | 閱讀時先問 |
|---|---|---|---|
| 1 | 布局定位屬性 | `display`、`position`、`float`、`clear`、`visibility`、`overflow` | 元素如何顯示、定位、浮動、可見或處理溢出？ |
| 2 | 自身屬性 | `width`、`height`、`margin`、`padding`、`border`、`background` | 元素盒子多大？內外距、邊框與背景如何？ |
| 3 | 文本屬性 | `color`、`font`、`text-decoration`、`text-align`、`vertical-align`、`white-space`、`break-word` | 文字顏色、字體、裝飾、對齊與換行如何？ |
| 4 | 其他屬性 | `content`、`cursor`、`border-radius`、`box-shadow`、`text-shadow`、`background:liner-gradient...` | 還有哪些裝飾、互動提示或特殊內容效果？ |

這張表是排序模型，不是完整屬性教學。實際開發時，可以依團隊規範微調，但同一個專案內應保持一致。

## 完整範例：把零散宣告整理成可維護順序

這個範例要解決的畫面問題不是「卡片沒有樣式」，而是「卡片樣式太難閱讀」。修改前，CSS 可以生效，但 declaration 順序混亂；修改後，畫面可能相同，但維護者能更快找到要修改的區段。

### 設定前

```css
.card {
    color: #222;
    border-radius: 8px;
    display: block;
    padding: 16px;
    overflow: hidden;
    width: 320px;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .12);
    margin: 24px;
    font-size: 16px;
    cursor: pointer;
}
```

### 設定後

```css
.card {
    display: block;
    overflow: hidden;

    width: 320px;
    margin: 24px;
    padding: 16px;
    background: #fff;

    color: #222;
    font-size: 16px;

    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .12);
    cursor: pointer;
}
```

### 範例拆解

這段 CSS 的作用對象是 class 為 `card` 的 HTML 元素。作用條件是 HTML 中存在符合 `.card` selector 的元素，例如 `<article class="card">...</article>`。

主要變化不是某個屬性值改變，而是 declaration 的閱讀順序改變。修改前，布局、盒子、文字與裝飾屬性混在一起；修改後，讀者可以依照「布局定位 → 自身屬性 → 文本屬性 → 其他屬性」逐段檢查。

如果畫面修改前後看起來一樣，這並不代表整理沒有價值。CSS 是長期維護的檔案，順序一致可以減少找屬性的時間，也能降低同一組屬性被重複新增到不同位置的機率。

初學者容易誤解的是：以為屬性排序等於 CSS 生效順序。更精確地說，本章排序是維護順序；真正影響樣式競爭的是 selector、specificity、inheritance、cascade 與 source order 等規則。這些規則需要另開章節深入學習。

## 常見誤解與修正方式

### 誤解一：屬性順序一定會改變畫面

錯誤理解是：只要把 `display` 放前面，畫面就會不同。實際上，本章討論的排序多半是可讀性規範。若屬性沒有互相覆蓋，重新排序通常不會改變畫面。正確理解是：排序讓人更快理解 CSS，不是用來取代屬性本身的行為規則。

### 誤解二：把屬性分類後，就不用理解各屬性

分類只能幫助你找到屬性的位置，不能替你理解屬性的效果。`overflow` 放在布局定位區，仍然需要知道它如何處理內容溢出；`margin` 和 `padding` 放在自身屬性區，仍然要能分辨外距與內距。

### 誤解三：所有團隊都必須使用完全相同順序

來源提供的是一種建議順序，不是唯一標準。實務上，團隊可以依專案需求調整，但應保持一致。最不適合的狀態是每個人都用自己的順序，導致同一份 CSS 需要用不同方式閱讀。

### 誤解四：其他屬性可以隨便放

其他屬性放最後，不代表不需要整理。像 `border-radius`、`box-shadow`、`cursor`、`text-shadow` 仍可以依視覺裝飾、互動提示或特殊內容再細分。只是在本章的入門排序中，它們不應搶在布局與盒子判斷之前。

### 誤解五：來源中的每個名稱都能直接當成完整語法

來源是屬性分類清單，不是完整語法表。例如 `break-word` 和 `background:liner-gradient...` 都缺少完整上下文。本章只採用它們代表的分類意圖：文字換行處理與背景效果。完整語法需要另行確認。

## 實務使用情境

當一個 selector 裡只有一兩條 declaration 時，排序的效果不明顯。但當你開始寫卡片、按鈕、導覽列、表單欄位、彈窗、列表項目等元件時，同一個 declaration block 可能包含十幾條屬性。這時固定書寫順序能讓你更快找出要修改的屬性。

在團隊協作中，固定順序也能降低 code review 的溝通成本。審查者可以先看布局是否合理，再看盒模型，再看文字樣式，最後看裝飾細節，而不是在整段 CSS 中來回搜尋。

在除錯時，這個順序可以當成檢查路徑。若元素位置或排列不對，先看布局定位屬性；若尺寸或間距不對，檢查自身屬性；若文字顯示不對，檢查文本屬性；若只有圓角、陰影、游標或特殊效果不對，再看其他屬性。

## 自我檢查

1. 觀察下面的 CSS，請依本章順序重新排列 declaration。

   ```css
   .button {
       color: white;
       padding: 8px 12px;
       display: inline-block;
       border-radius: 4px;
       background: #1677ff;
       cursor: pointer;
       text-align: center;
   }
   ```

2. 如果你想檢查某個元素為什麼內容被裁切，應該優先在本章哪一類屬性中尋找可能原因？為什麼？

3. `margin` 和 `padding` 都放在自身屬性中。請用一句話分辨它們各自影響的空間。

4. 若把 `box-shadow` 放在 `display` 前面，CSS 語法一定錯嗎？畫面一定會改變嗎？請說明本章真正建議排序的原因。

5. 來源建議 `display` 第一個寫。請說明這個建議和「元素顯示模式」有什麼關係。

## 小結

CSS 屬性書寫順序是一種讓樣式更容易閱讀、修改與除錯的維護慣例。本章採用的主線是：先寫布局定位屬性，尤其先看 `display`；再寫元素自身的尺寸、間距、邊框與背景；接著寫文字相關屬性；最後寫裝飾、互動或特殊內容相關屬性。

這個順序不會取代 CSS 各屬性的實際規則，也不是所有專案唯一可用的標準。真正重要的是讓同一份 CSS 能用一致的路徑閱讀：先判斷元素如何參與版面，再判斷它自己的盒子，接著看文字，最後看細節效果。

## 來源與補充說明

本章主要根據 `origin/第02章_CSS屬性書寫順序/CSS屬性書寫順序.md` 整理。來源直接支持的內容包含：CSS 屬性可依布局定位屬性、自身屬性、文本屬性與其他屬性分類；布局定位屬性包含 `display`、`position`、`float`、`clear`、`visibility`、`overflow`；來源並建議 `display` 第一個寫，因為它關係到顯示模式；自身屬性包含 `width`、`height`、`margin`、`padding`、`border`、`background`；文本屬性包含 `color`、`font`、`text-decoration`、`text-align`、`vertical-align`、`white-space`、`break-word`；其他屬性包含 `content`、`cursor`、`border-radius`、`box-shadow`、`text-shadow` 與背景漸層相關內容。

補充說明：本章補充了「屬性排序主要改善可讀性與維護性」、「多數不同屬性重新排序不一定改變畫面」、「重複宣告、shorthand 與 longhand 可能受 source order 影響」、「排序可用於 code review 與除錯路徑」等背景，用來幫助初學者理解來源中的分類清單。這些補充沒有展開到完整 cascade、specificity、inheritance、box model、position、background 或 typography 規則。

待確認：來源中的 `break-word` 未提供完整語法，無法判斷它指的是哪一個正式屬性或值；來源中的 `background:liner-gradient...` 可能是在表示漸層背景，但拼字與完整語法不足，本章不做完整語法結論。

適合另開章節的主題包含：`display` 與 normal flow、position 定位、float 與 clear、overflow、box model、文字排版、背景與漸層、pseudo-element 的 `content`、cursor 互動提示、陰影效果，以及 cascade 與 source order。
