// ==UserScript==
// @name                Use My Fonts
// @name:en-US          Use My Fonts
// @name:zh-CN          使用我的字体
// @description         Use my custom fonts on the pages
// @description:en-US   Use my custom fonts on the pages
// @description:zh-CN   在页面上使用我的自定义字体
// @namespace           use-my-fonts
// @version             2025.05.07
// @author              Akatsuki Rui
// @license             MIT License
// @grant               GM_addStyle
// @run-at              document-start
// @match               *://*/*
// ==/UserScript==

"use strict";

const css = String.raw;

// FONT_CSS is generated by fonts.scss
const FONT_CSS = `
@charset "UTF-8";
@font-face { font-family: "Arial"; src: local("Roboto"); }
@font-face { font-family: "Helvetica"; src: local("Roboto"); }
@font-face { font-family: "Lucida Grande"; src: local("Roboto"); }
@font-face { font-family: "Lucida Sans Unicode"; src: local("Roboto"); }
@font-face { font-family: "Open Sans"; src: local("Roboto"); }
@font-face { font-family: "Segoe UI"; src: local("Roboto"); }
@font-face { font-family: "Tahoma"; src: local("Roboto"); }
@font-face { font-family: "Verdana"; src: local("Roboto"); }
@font-face { font-family: "Microsoft YaHei UI"; src: local("Noto Sans CJK SC"); }
@font-face { font-family: "Microsoft YaHei"; src: local("Noto Sans CJK SC"); }
@font-face { font-family: "微软雅黑"; src: local("Noto Sans CJK SC"); }
@font-face { font-family: "NSimsun"; src: local("Noto Sans CJK SC"); }
@font-face { font-family: "新宋体"; src: local("Noto Sans CJK SC"); }
@font-face { font-family: "Simsun"; src: local("Noto Sans CJK SC"); }
@font-face { font-family: "宋体"; src: local("Noto Sans CJK SC"); }
@font-face { font-family: "Simhei"; src: local("Noto Sans CJK SC"); }
@font-face { font-family: "黑体"; src: local("Noto Sans CJK SC"); }
@font-face { font-family: "Microsoft Jhenghei"; src: local("Noto Sans CJK TC"); }
@font-face { font-family: "微軟正黑體"; src: local("Noto Sans CJK TC"); }
@font-face { font-family: "ヒラギノ角ゴ Pro W3"; src: local("Noto Sans CJK JP"); }
@font-face { font-family: "Hiragino Kaku Gothic Pro"; src: local("Noto Sans CJK JP"); }
@font-face { font-family: "ＭＳ ゴシック"; src: local("Noto Sans CJK JP"); }
@font-face { font-family: "MS Gothic"; src: local("Noto Sans CJK JP"); }
@font-face { font-family: "ＭＳ Ｐゴシック"; src: local("Noto Sans CJK JP"); }
@font-face { font-family: "MS PGothic"; src: local("Noto Sans CJK JP"); }
@font-face { font-family: "メイリオ"; src: local("Noto Sans CJK JP"); }
@font-face { font-family: "Meiryo"; src: local("Noto Sans CJK JP"); }
@font-face { font-family: "Osaka"; src: local("Noto Sans CJK JP"); }
@font-face { font-family: "Malgun Gothic"; src: local("Noto Sans CJK KR"); }
@font-face { font-family: "맑은 고딕"; src: local("Noto Sans CJK KR"); }
@font-face { font-family: "Consolas"; src: local("Cascadia Code"); }
`;

GM_addStyle(FONT_CSS.trim());
