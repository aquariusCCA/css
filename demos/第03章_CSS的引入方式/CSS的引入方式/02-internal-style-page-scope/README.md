# Demo 02：內部樣式表頁面作用範圍

來源筆記：`notes/第03章_CSS的引入方式/CSS的引入方式.md`

對應知識點：內部樣式表寫在同一份 HTML 的 `<style>` 標籤中，通常放在 `<head>`，可集中控制本頁符合 selector 的元素。

開啟方式：直接用瀏覽器開啟 `index.html`。

操作方式：不需要操作，觀察左右兩個區塊。

觀察重點：右側兩個 `div` 都符合 `.internal-style-demo .target`，因此一起變成粉紅色並放大；左側元素雖然也有 `.target`，但不在 `.internal-style-demo` 裡，所以沒有被同一條 selector 選到。

常見誤解：`style="..."` 是行內樣式 attribute；`<style>...</style>` 是內部樣式表標籤。兩者名稱相似，但作用範圍不同。
