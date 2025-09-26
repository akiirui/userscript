// ==UserScript==
// @name                Wikipedia Redirector
// @name:en-US          Wikipedia Redirector
// @name:zh-CN          维基百科重定向
// @description         Automatically redirect Wikipedia language variants
// @description:en-US   Automatically redirect Wikipedia language variants
// @description:zh-CN   自动重定向维基百科语言变体
// @namespace           wikipedia-redirector
// @version             2025.09.26
// @author              Akatsuki Rui
// @license             MIT License
// @run-at              document-start
// @match               *://zh.wikipedia.org/wiki/*
// @match               *://zh.wikipedia.org/zh/*
// @match               *://zh.wikipedia.org/zh-hk/*
// @match               *://zh.wikipedia.org/zh-mo/*
// @match               *://zh.wikipedia.org/zh-my/*
// @match               *://zh.wikipedia.org/zh-sg/*
// @match               *://zh.wikipedia.org/zh-tw/*
// @match               *://zh.m.wikipedia.org/wiki/*
// @match               *://zh.m.wikipedia.org/zh/*
// @match               *://zh.m.wikipedia.org/zh-hk/*
// @match               *://zh.m.wikipedia.org/zh-mo/*
// @match               *://zh.m.wikipedia.org/zh-my/*
// @match               *://zh.m.wikipedia.org/zh-sg/*
// @match               *://zh.m.wikipedia.org/zh-tw/*
// ==/UserScript==

"use strict";

const variants = /\/(wiki|zh-hk|zh-mo|zh-my|zh-sg|zh-tw)\//i;

window.location.replace(location.pathname.replace(variants, "/zh-cn/"));
