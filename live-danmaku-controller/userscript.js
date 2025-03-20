// ==UserScript==
// @name                Live Danmaku Controller
// @name:en-US          Live Danmaku Controller
// @name:zh-CN          直播弹幕控制
// @name:zh-TW          直播彈幕控制
// @description         Automatically turn off the live streaming danmaku
// @description:en-US   Automatically turn off the live streaming danmaku
// @description:zh-CN   自动关闭直播弹幕
// @description:zh-TW   自動關閉直播彈幕
// @namespace           live-danmaku-controller
// @version             2021.10.06
// @author              Akatsuki Rui
// @license             MIT License
// @grant               GM_info
// @compatible          chrome Since Chrome 49.x
// @compatible          firefox Since Firefox 44.x
// @compatible          opera Since 17.x
// @run-at              document-idle
// @match               *://www.douyu.com/*
// @match               *://www.huya.com/*
// @match               *://www.yy.com/*
// ==/UserScript==

"use strict";

const SELECTOR = {
  "www.douyu.com": {
    on: "div[class^='showdanmu-']:not([class*='removed-'])",
    off: "div[class^='hidedanmu-']:not([class*='removed-'])",
  },
  "www.huya.com": {
    on: "div[id='player-danmu-btn'][title='关闭弹幕']",
    off: "div[id='player-danmu-btn'][title='开启弹幕']",
  },
  "www.yy.com": {
    on: "div[class~='yc__bullet-comments-btn'][title='关闭弹幕']",
    off: "div[class~='yc__bullet-comments-btn'][title='打开弹幕']",
  },
};

// Delay danmaku disabler for some sites (Default 10s)
const DELAY_TIME = 10000;
const DELAY_SITE = ["www.yy.com"];

const LIVE_SITE = document.location.hostname;

// Danmaku disabler
function disableDanmaku() {
  let button = document.querySelector(SELECTOR[LIVE_SITE].on);

  if (button) {
    button.click();
  }
  setTimeout(() => {
    if (document.querySelector(SELECTOR[LIVE_SITE].off) === null) {
      disableDanmaku();
    }
  }, 500);
}

// To fix the button is showing as OFF, but danmaku still appear
DELAY_SITE.includes(LIVE_SITE)
  ? setTimeout(disableDanmaku, DELAY_TIME)
  : disableDanmaku();
