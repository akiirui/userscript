// ==UserScript==
// @name                bilibili Danmaku Disabler
// @name:en-US          bilibili Danmaku Disabler
// @name:zh-CN          bilibili 弹幕关闭
// @name:zh-TW          bilibili 彈幕關閉
// @description         Automatically turn off bilibili HTML5 player danmaku
// @description:en-US   Automatically turn off bilibili HTML5 player danmaku
// @description:zh-CN   自动关闭哔哩哔哩 HTML5 播放器弹幕
// @description:zh-TW   自動關閉嗶哩嗶哩 HTML5 播放器彈幕
// @namespace           bilibili-danmaku-disabler
// @version             2023.11.26
// @author              Akatsuki Rui
// @license             MIT License
// @grant               GM_info
// @compatible          chrome  Since Chrome 26
// @compatible          firefox Since Firefox 14
// @compatible          opera Since 15
// @run-at              document-idle
// @match               *://www.bilibili.com/?bvid=*
// @match               *://www.bilibili.com/*video/*
// @match               *://www.bilibili.com/bangumi/play/*
// @match               *://www.bilibili.com/blackboard/*
// @match               *://www.bilibili.com/html/player.html*
// @match               *://player.bilibili.com/*
// ==/UserScript==

"use strict";

const SELECTOR_NATIVE = {
  on: "input:checked[class='bui-switch-input'][aria-label='']",
  off: "input:not(:checked)[class='bui-switch-input'][aria-label='']",
  onNew: "input:checked[class='bui-danmaku-switch-input']",
  offNew: "input:not(:checked)[class='bui-danmaku-switch-input']",
};

const SELECTOR_EMBED = {
  on: "div[class~='bilibili-player-video-btn-danmaku'][data-text='打开弹幕']",
  off: "div[class~='bilibili-player-video-btn-danmaku'][data-text='关闭弹幕']",
  onNew: "input:checked[class='bui-danmaku-switch-input']",
  offNew: "input:not(:checked)[class='bui-danmaku-switch-input']",
};

const SELECTOR_OTHER = {
  support: ".bilibili-player-electric-panel-jump",
  related: ".bpx-player-ending-related-item-cancel",
};

const IS_EMBED = document.location.hostname === "player.bilibili.com";
const SELECTOR = IS_EMBED ? SELECTOR_EMBED : SELECTOR_NATIVE;

// Click element with timeout
function clickElement(element, timeout) {
  setTimeout(() => {
    const button = document.querySelector(element);
    if (button) button.click();
  }, timeout);
}

// Skip some features
function skipFeature() {
  const skip = () => {
    clickElement(SELECTOR_OTHER.support, 10);
    clickElement(SELECTOR_OTHER.related, 100);
  };

  const videoElementA = document.querySelector("video");
  const videoElementB = document.querySelector("bwp-video");

  if (videoElementA) {
    videoElementA.onended = skip;
  }
  if (videoElementB) {
    videoElementB.onended = skip;
  }
}

// Disable danmaku
function disableDanmaku() {
  if (
    !document.querySelector(SELECTOR.off) &&
    !document.querySelector(SELECTOR.offNew)
  ) {
    clickElement(SELECTOR.on, 100);
    clickElement(SELECTOR.onNew, 100);

    setTimeout(disableDanmaku, 500);
  } else {
    skipFeature();
  }
}

// PJAX detector
function disableDanmakuPJAX() {
  const obServer = new MutationObserver(disableDanmaku);
  const obTarget = document.head;
  const obOption = { childList: true };

  disableDanmaku();
  obServer.observe(obTarget, obOption);
}

// Redirect page
if (location.href.includes("/s/video/")) {
  location.replace(location.href.replace("/s/video/", "/video/"));
}
if (location.href.includes("/?bvid=")) {
  location.replace(
    location.href.replace("/?bvid=", "/video/").replace(/&.+/, "")
  );
}

// Run disabler
IS_EMBED ? disableDanmaku() : disableDanmakuPJAX();
