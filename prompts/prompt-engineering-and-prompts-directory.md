# 提示工程與 `prompts/` 目錄對應筆記

## 1. 核心概念

`prompts/` 目錄的分類重點，不是提示詞的名稱，也不是提示詞看起來像 Role、Task、Context、Code 或 Error，而是這段提示詞的**作用範圍**與**生命週期**。

可以先用四個問題判斷：

| 問題 | 對應目錄 | 說明 |
|---|---|---|
| 這是長期有效的角色或全域規則嗎？ | `prompts/system/` | 例如角色、語言、回答風格、全域限制 |
| 這是一套可以重複執行的任務步驟嗎？ | `prompts/workflows/` | 例如生成筆記、Debug、Code Review、重構流程 |
| 這是在規定最後輸出的樣子嗎？ | `prompts/formats/` | 例如筆記格式、表格格式、報告格式、練習題格式 |
| 這是某一次任務的具體資料或臨時要求嗎？ | `prompts/requests/` | 例如本次章節內容、程式碼、錯誤訊息、補充限制 |

簡單記法：

```text
system/     管「長期規則」
workflows/  管「處理流程」
formats/    管「輸出長相」
requests/   管「本次資料」
```

因此，`prompts/` 可以整理成：

```text
prompts/
├── system/      # 長期穩定的角色與全域規則
├── workflows/   # 可重複使用的任務流程
├── formats/     # 固定輸出格式
└── requests/    # 單次任務的具體提問與資料
```

---

## 2. 四大目錄定位

| 目錄 | 負責內容 | 適合放什麼 | 不適合放什麼 |
|---|---|---|---|
| `prompts/system/` | 長期角色與全域規則 | 角色設定、語言規則、教學風格、全域限制 | 單次任務資料、某段程式碼、某個錯誤訊息 |
| `prompts/workflows/` | 可重複執行的處理流程 | 筆記生成流程、Debug 流程、Code Review 流程、重構流程 | 某一次任務的完整資料 |
| `prompts/formats/` | 固定輸出格式 | 筆記格式、報告格式、表格格式、練習題格式 | 任務流程本身、實際輸入資料 |
| `prompts/requests/` | 本次任務資料與臨時要求 | 章節內容、程式碼、錯誤訊息、單次限制、迭代修正 | 長期規則、可重複流程、固定格式 |

---

## 3. 快速判斷規則

當你不知道某段提示詞該放哪裡時，可以依照下列順序判斷：

```text
1. 這段提示詞是否長期、全域有效？
   是 → 放 system/
   否 → 繼續判斷

2. 這段提示詞是否描述一套可重複使用的處理步驟？
   是 → 放 workflows/
   否 → 繼續判斷

3. 這段提示詞是否只是在規定輸出格式？
   是 → 放 formats/
   否 → 繼續判斷

4. 這段提示詞是否只屬於這一次任務？
   是 → 放 requests/
```

更直覺的說法是：

```text
誰來做、長期規則是什麼？ → system/
要怎麼做、處理流程是什麼？ → workflows/
最後要長什麼樣？ → formats/
這次要處理什麼？ → requests/
```

---

## 4. 常見提示元素怎麼放

提示工程常見元素包括 Role、Task、Context、Code、Error。這些元素不一定只對應到某一個目錄，重點仍然是看它的作用範圍。

| 提示元素 | 優先放置位置 | 判斷方式 |
|---|---|---|
| Role 角色 | `system/` | 長期角色放 `system/`；流程專用角色放 `workflows/`；本次臨時角色放 `requests/` |
| Task 任務 | `workflows/` | 可重複任務放 `workflows/`；單次任務放 `requests/`；輸出樣式放 `formats/` |
| Context 背景 | `requests/` | 本次背景放 `requests/`；長期背景放 `system/`；流程固定前提放 `workflows/` |
| Code 程式碼 | `requests/` | 實際程式碼放 `requests/`；分析步驟放 `workflows/`；分析報告格式放 `formats/` |
| Error 錯誤訊息 | `requests/` | 實際錯誤、stack trace、log 放 `requests/`；Debug 流程放 `workflows/`；Debug 報告格式放 `formats/` |
| Limit 限制條件 | 依作用範圍決定 | 全域限制放 `system/`；流程限制放 `workflows/`；格式限制放 `formats/`；本次限制放 `requests/` |

範例：

```text
「你是一位 Java 全端工程教學助理」
→ 長期角色，放 system/

「請依照：讀取資料 → 萃取重點 → 補充解釋 → 產生筆記」
→ 可重複流程，放 workflows/

「輸出需包含：核心概念、白話解釋、範例、小結」
→ 固定輸出格式，放 formats/

「以下是第 3 章 Servlet Request 與 Response 的原始資料」
→ 本次輸入資料，放 requests/
```

---

## 5. 進階提示工程技巧怎麼放

CoT、Few-Shot、分隔符號、負向提示與迭代優化，都不是獨立目錄。它們是提示詞技巧，應該依照實際用途放進不同目錄。

| 技巧 | 應該怎麼放 | 注意事項 |
|---|---|---|
| 逐步分析 / CoT | 需要分析流程時放 `workflows/`；若只是規定輸出「分析摘要」則放 `formats/` | 不建議在 `system/` 要求所有回答都逐步思考，否則簡單任務會變冗長 |
| Few-Shot 少樣本 | 用來固定輸出樣式時放 `formats/`；示範完整流程時放 `workflows/`；本次臨時範例放 `requests/` | 範例越穩定，越適合從 `requests/` 移到 `formats/` |
| 分隔符號 | 提示詞模板結構放 `workflows/`；實際填入內容放 `requests/`；輸出區塊規則放 `formats/` | 用來區分任務、背景、程式碼、限制與輸出格式 |
| 負向提示 | 依作用範圍決定位置 | 全域禁止事項放 `system/`；流程限制放 `workflows/`；格式限制放 `formats/`；本次限制放 `requests/` |
| 迭代優化 | 單次修正放 `requests/`；經常重複的修正沉澱到 `workflows/` 或 `formats/` | 重複出現的要求不要每次重新寫，應該變成固定規則 |

例如：

```text
「請先判斷錯誤類型，再找出原因，最後提出修正方式」
→ Debug 分析流程，放 workflows/

「請按照：錯誤訊息、可能原因、修正方式、預防方式輸出」
→ Debug 報告格式，放 formats/

「這次不要使用 Java Stream API」
→ 本次限制，放 requests/
```

---

## 6. 沉澱規則：從單次要求變成可重複提示詞

`requests/` 是一次性輸入，但如果某個要求經常出現，就不應該一直放在 `requests/` 裡重複撰寫。

可以依照下列規則沉澱：

| 重複出現的內容 | 應該沉澱到哪裡 | 範例 |
|---|---|---|
| 重複出現的全域規則 | `system/` | 一律使用繁體中文、不要捏造來源、適合初學者閱讀 |
| 重複出現的處理步驟 | `workflows/` | 讀取資料 → 萃取重點 → 補充解釋 → 產生筆記 |
| 重複出現的輸出要求 | `formats/` | 每份筆記都要有核心概念、白話解釋、實務範例、小結 |
| 只出現一次的具體資料 | `requests/` | 某章節內容、某段程式碼、某個錯誤訊息 |

沉澱前：

```md
# prompts/requests/generate-ch03-notes.md

請根據以下原始資料產生筆記。

要求：
1. 使用繁體中文。
2. 用初學者能理解的方式說明。
3. 補充白話解釋。
4. 加入 Java Web 實務範例。
5. 最後加入小結。
```

沉澱後：

```text
使用繁體中文、初學者教學風格 → system/java-teacher.md
產生筆記的處理步驟 → workflows/origin-to-notes.md
白話解釋、實務範例、小結 → formats/teaching-note-format.md
第 3 章原始資料 → requests/generate-ch03-notes.md
```

---

## 7. 實際組合方式

一次完整的 AI 提問，通常不是只使用單一提示詞，而是組合多個提示詞：

```text
system/java-teacher.md
+ workflows/origin-to-notes.md
+ formats/teaching-note-format.md
+ requests/generate-servlet-request-response-notes.md
```

代表意思是：

| 組成 | 作用 |
|---|---|
| `system/java-teacher.md` | 告訴 AI 長期角色、語言與教學風格 |
| `workflows/origin-to-notes.md` | 告訴 AI 這次任務的處理流程 |
| `formats/teaching-note-format.md` | 告訴 AI 最後輸出格式 |
| `requests/generate-servlet-request-response-notes.md` | 提供這次實際資料與具體要求 |

組合後可以理解成：

```text
你是一位 Java 全端教學助理。
請按照「從原始資料生成筆記」的流程處理。
最後請使用「教書型筆記格式」輸出。
以下是這次要處理的 Servlet Request 與 Response 原始資料。
```

---

## 8. 完整範例：生成 Servlet 筆記

### 8.1 `prompts/system/java-teacher.md`

```md
# Java 全端工程教學助理

你是一位 Java 全端工程教學助理。

回答時請遵守：

1. 使用繁體中文。
2. 先用白話說明，再補充專業觀念。
3. 優先使用 Java Web、Servlet、Spring Boot 相關範例。
4. 適合初學者閱讀。
5. 不要捏造不存在的來源或 API。
```

---

### 8.2 `prompts/workflows/origin-to-notes.md`

```md
# 從原始資料產生教書型筆記

請根據提供的原始資料產生教書型筆記。

處理流程：

1. 判斷主題。
2. 萃取重要概念。
3. 補充必要背景知識。
4. 用白話解釋核心概念。
5. 加入 Java Web 實務情境。
6. 補充初學者常見誤解。
7. 依照指定格式輸出。

輸出時請提供清楚的分析摘要與結論，不需要輸出過度冗長的推理過程。
```

---

### 8.3 `prompts/formats/teaching-note-format.md`

```md
# 教書型筆記格式

請使用以下格式輸出：

# 主題

## 1. 這是什麼？

用白話解釋這個主題的基本概念。

## 2. 為什麼需要它？

說明它解決什麼問題，以及在 Java Web 開發中的用途。

## 3. 核心觀念

條列重要觀念，並補充必要說明。

## 4. Java Web 實務範例

提供簡單、可理解的實務情境或程式碼片段。

## 5. 初學者常見誤解

列出容易混淆的地方，並說明正確理解方式。

## 6. 小結

用簡短段落整理本章重點。
```

---

### 8.4 `prompts/requests/generate-servlet-request-response-notes.md`

````md
# 生成 Servlet Request 與 Response 筆記

請根據以下原始資料產生教書型筆記。

請套用：

- `prompts/system/java-teacher.md`
- `prompts/workflows/origin-to-notes.md`
- `prompts/formats/teaching-note-format.md`

### 背景

這是 Java Web 課程中關於 Servlet Request 與 Response 的章節。

讀者已經理解 HTTP 基本概念，但還不熟悉 Servlet API。

### 原始資料

```text
ServletRequest 代表客戶端送到伺服器的請求資料。
ServletResponse 代表伺服器回傳給客戶端的回應資料。
```

### 補充要求

1. 請補充 HTTP Request 與 HTTP Response 的關係。
2. 請加入初學者容易混淆的地方。
3. 請使用 Java Web 情境說明。
4. 請避免只做摘要，要寫成教學筆記。
````

---

## 9. 最終整理

這份筆記的核心可以濃縮成一句話：

> 提示詞應該依照「作用範圍」與「生命週期」分層管理：長期規則放 `system/`，重複流程放 `workflows/`，輸出樣式放 `formats/`，單次資料放 `requests/`。

實務上，可以用以下原則維護：

```text
第一次出現的具體需求 → 先放 requests/
重複出現的處理步驟 → 移到 workflows/
重複出現的輸出要求 → 移到 formats/
重複出現的全域規則 → 移到 system/
```

這樣 `prompts/` 不只是存放提示詞的資料夾，而是一套可以持續沉澱、重複使用與維護的提示詞管理系統。
