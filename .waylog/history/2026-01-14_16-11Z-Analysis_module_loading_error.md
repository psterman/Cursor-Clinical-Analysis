# Analysis module loading error
_Exported on 01/15/2026 at 00:11:26 GMT+8 from Cursor via WayLog_


**User**

处理失败: Error: 分析模块未加载，请刷新页面重试
    at <anonymous>:204:19
    at Generator.<anonymous> (<anonymous>:3:1660)
    at Generator.next (<anonymous>:4:255)
    at asyncGeneratorStep (<anonymous>:9:70)
    at _next (<anonymous>:10:163)
    at <anonymous>:10:299
    at new Promise (<anonymous>)
    at <anonymous>:10:90
    at handleFileUpload (<anonymous>:269:20)
    at onChange (<anonymous>:406:7)
    at Object.kj (react-dom.production.min.js:223:217)
    at jj (react-dom.production.min.js:34:117)
    at mj (react-dom.production.min.js:34:171)
    at gh (react-dom.production.min.js:62:93)
    at Xg (react-dom.production.min.js:63:1)
    at react-dom.production.min.js:72:332
    at Tf (react-dom.production.min.js:189:448)
    at wg (react-dom.production.min.js:32:481)
    at Ce (react-dom.production.min.js:65:218)
    at Be (react-dom.production.min.js:47:62)
    at zj (react-dom.production.min.js:46:351)

---


**Cursor**

检查相关代码，定位分析模块未加载的原因。



搜索错误信息 "分析模块未加载" 的来源：



查看 `index.html` 中模块加载的相关代码：



问题：模块加载是异步的，可能在文件上传时尚未完成。改进模块加载逻辑，增加错误处理和重试机制：

---
