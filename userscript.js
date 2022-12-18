// ==UserScript==
// @name                Play with MPV
// @name:en-US          Play with MPV
// @name:zh-CN          使用 MPV 播放
// @name:zh-TW          使用 MPV 播放
// @description         Play videos and songs on the website via mpv-handler
// @description:en-US   Play videos and songs on the website via mpv-handler
// @description:zh-CN   通过 mpv-handler 播放网页上的视频和歌曲
// @description:zh-TW   通過 mpv-handler 播放網頁上的視頻和歌曲
// @namespace           play-with-mpv-handler
// @version             2022.11.11.3
// @author              Akatsuki Rui
// @license             MIT License
// @require             https://cdn.jsdelivr.net/gh/sizzlemctwizzle/GM_config@a4a49b47ecfb1d8fcd27049cc0e8114d05522a0f/gm_config.js
// @grant               GM_info
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_notification
// @grant               GM_openInTab
// @run-at              document-body
// @noframes
// @match        http://*/*
// @match        https://*/*
// ==/UserScript==

"use strict";

const MPV_HANDLER_VERSION = "v0.3.0";

const ICON_MPV =
  "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0\
PSI2NCIgdmVyc2lvbj0iMSI+CiA8Y2lyY2xlIHN0eWxlPSJvcGFjaXR5Oi4yIiBjeD0iMzIiIGN5\
PSIzMyIgcj0iMjgiLz4KIDxjaXJjbGUgc3R5bGU9ImZpbGw6IzhkMzQ4ZSIgY3g9IjMyIiBjeT0i\
MzIiIHI9IjI4Ii8+CiA8Y2lyY2xlIHN0eWxlPSJvcGFjaXR5Oi4zIiBjeD0iMzQuNSIgY3k9IjI5\
LjUiIHI9IjIwLjUiLz4KIDxjaXJjbGUgc3R5bGU9Im9wYWNpdHk6LjIiIGN4PSIzMiIgY3k9IjMz\
IiByPSIxNCIvPgogPGNpcmNsZSBzdHlsZT0iZmlsbDojZmZmZmZmIiBjeD0iMzIiIGN5PSIzMiIg\
cj0iMTQiLz4KIDxwYXRoIHN0eWxlPSJmaWxsOiM2OTFmNjkiIHRyYW5zZm9ybT0ibWF0cml4KDEu\
NTE1NTQ0NSwwLDAsMS41LC0zLjY1Mzg3OSwtNC45ODczODQ4KSIgZD0ibTI3LjE1NDUxNyAyNC42\
NTgyNTctMy40NjQxMDEgMi0zLjQ2NDEwMiAxLjk5OTk5OXYtNC0zLjk5OTk5OWwzLjQ2NDEwMiAy\
eiIvPgogPHBhdGggc3R5bGU9ImZpbGw6I2ZmZmZmZjtvcGFjaXR5Oi4xIiBkPSJNIDMyIDQgQSAy\
OCAyOCAwIDAgMCA0IDMyIEEgMjggMjggMCAwIDAgNC4wMjE0ODQ0IDMyLjU4NTkzOCBBIDI4IDI4\
IDAgMCAxIDMyIDUgQSAyOCAyOCAwIDAgMSA1OS45Nzg1MTYgMzIuNDE0MDYyIEEgMjggMjggMCAw\
IDAgNjAgMzIgQSAyOCAyOCAwIDAgMCAzMiA0IHoiLz4KPC9zdmc+Cg==";

const ICON_SETTINGS =
  "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0\
PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KIDxkZWZzPgogIDxzdHlsZSBpZD0iY3VycmVudC1j\
b2xvci1zY2hlbWUiIHR5cGU9InRleHQvY3NzIj4KICAgLkNvbG9yU2NoZW1lLVRleHQgeyBjb2xv\
cjojNDQ0NDQ0OyB9IC5Db2xvclNjaGVtZS1IaWdobGlnaHQgeyBjb2xvcjojNDI4NWY0OyB9CiAg\
PC9zdHlsZT4KIDwvZGVmcz4KIDxwYXRoIHN0eWxlPSJmaWxsOmN1cnJlbnRDb2xvciIgY2xhc3M9\
IkNvbG9yU2NoZW1lLVRleHQiIGQ9Ik0gNi4yNSAxIEwgNi4wOTU3MDMxIDIuODQzNzUgQSA1LjUg\
NS41IDAgMCAwIDQuNDg4MjgxMiAzLjc3MzQzNzUgTCAyLjgxMjUgMi45ODQzNzUgTCAxLjA2MjUg\
Ni4wMTU2MjUgTCAyLjU4Mzk4NDQgNy4wNzIyNjU2IEEgNS41IDUuNSAwIDAgMCAyLjUgOCBBIDUu\
NSA1LjUgMCAwIDAgMi41ODAwNzgxIDguOTMxNjQwNiBMIDEuMDYyNSA5Ljk4NDM3NSBMIDIuODEy\
NSAxMy4wMTU2MjUgTCA0LjQ4NDM3NSAxMi4yMjg1MTYgQSA1LjUgNS41IDAgMCAwIDYuMDk1NzAz\
MSAxMy4xNTIzNDQgTCA2LjI0NjA5MzggMTUuMDAxOTUzIEwgOS43NDYwOTM4IDE1LjAwMTk1MyBM\
IDkuOTAwMzkwNiAxMy4xNTgyMDMgQSA1LjUgNS41IDAgMCAwIDExLjUwNzgxMiAxMi4yMjg1MTYg\
TCAxMy4xODM1OTQgMTMuMDE3NTc4IEwgMTQuOTMzNTk0IDkuOTg2MzI4MSBMIDEzLjQxMjEwOSA4\
LjkyOTY4NzUgQSA1LjUgNS41IDAgMCAwIDEzLjQ5NjA5NCA4LjAwMTk1MzEgQSA1LjUgNS41IDAg\
MCAwIDEzLjQxNjAxNiA3LjA3MDMxMjUgTCAxNC45MzM1OTQgNi4wMTc1NzgxIEwgMTMuMTgzNTk0\
IDIuOTg2MzI4MSBMIDExLjUxMTcxOSAzLjc3MzQzNzUgQSA1LjUgNS41IDAgMCAwIDkuOTAwMzkw\
NiAyLjg0OTYwOTQgTCA5Ljc1IDEgTCA2LjI1IDEgeiBNIDggNiBBIDIgMiAwIDAgMSAxMCA4IEEg\
MiAyIDAgMCAxIDggMTAgQSAyIDIgMCAwIDEgNiA4IEEgMiAyIDAgMCAxIDggNiB6IiB0cmFuc2Zv\
cm09InRyYW5zbGF0ZSg0IDQpIi8+Cjwvc3ZnPgo=";

const MPV_CSS = `
.pwm-play {
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 50%;
  background-size: 48px;
  background-image: url(data:image/svg+xml;base64,${ICON_MPV});
  background-repeat: no-repeat;
}
.pwm-settings {
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease-in-out;
  display: block;
  position: absolute;
  top: -32px;
  width: 32px;
  height: 32px;
  margin-left: 8px;
  border: 0;
  border-radius: 50%;
  background-size: 32px;
  background-color: #eeeeee;
  background-image: url(data:image/svg+xml;base64,${ICON_SETTINGS});
  background-repeat: no-repeat;
}
.play-with-mpv {
  z-index: 99999;
  position: fixed;
  left: 8px;
  bottom: 8px;
}
.pwm-play:hover + .pwm-settings,
.pwm-settings:hover {
  opacity: 1;
  visibility: visible;
  transition: all 0.2s ease-in-out;
}
`;

const CONFIG_ID = "play-with-mpv";

const CONFIG_CSS = `
body {
  display: flex;
}
#${CONFIG_ID}_wrapper {
  margin: auto;
}
#${CONFIG_ID} .config_header {
  padding-bottom: 8px;
}
#${CONFIG_ID}_field_preferQuality {
  padding-top: 4px;
  padding-bottom: 8px;
}
#${CONFIG_ID} .saveclose_buttons {
  margin: 1px;
  padding: 4px 16px;
}
#${CONFIG_ID} .reset_holder {
  padding-top: 4px;
}
`;

const CONFIG_IFRAME_CSS = `
position: fixed;
z-index: 999;
width: 440px;
height: 240px;
border: 1px solid;
border-radius: 2px;
`;

GM_config.init({
  id: `${CONFIG_ID}`,
  title: `${GM_info.script.name}`,
  fields: {
    preferQuality: {
      label: "Prefer Quality",
      type: "radio",
      options: ["Best", "2160p", "1440p", "1080p", "720p", "480p", "360p"],
      default: "Best",
    },
    useCookies: {
      label: "Try Pass Cookies",
      type: "radio",
      options: ["Yes", "No"],
      default: "No",
    },
  },
  events: {
    save: () => {
      updateButton(location.href, true);
      GM_config.close();
    },
    reset: () => {
      updateButton(location.href, true);
      GM_config.save();
      GM_config.close();
    },
  },
  css: CONFIG_CSS.trim(),
});

const original = {
  // 防止 defineProperty 和 defineProperties 被 AOP 脚本重写
  Object: {
    defineProperty: Object.defineProperty,
    defineProperties: Object.defineProperties,
  },

  // 防止此类玩法：https://juejin.cn/post/6865910564817010702
  Proxy,

  Map,
  map: {
    clear: Map.prototype.clear,
    set: Map.prototype.set,
    has: Map.prototype.has,
    get: Map.prototype.get,
  },

  console: {
    log: console.log,
    info: console.info,
    error: console.error,
    warn: console.warn,
    table: console.table,
  },

  ShadowRoot,
  HTMLMediaElement,
  CustomEvent,

  JSON: {
    parse: JSON.parse,
    stringify: JSON.stringify,
  },

  alert,
  confirm,
  prompt,
};

// from https://github.com/xxxily/h5player/blob/5b1427b9a90e84d65b233aeecf048aabaa3700e2/src/libs/utils/mediaCore.js
const mediaCore = (function () {
  let hasMediaCoreInit = false;
  let hasProxyHTMLMediaElement = false;
  let originDescriptors = {};
  const originMethods = {};
  const mediaElementList = [];
  const mediaElementHandler = [];

  function isHTMLMediaElement(el) {
    return el instanceof original.HTMLMediaElement;
  }

  // 检测到media对象的处理逻辑，依赖Proxy对media函数的代理
  function mediaDetectHandler(ctx) {
    if (isHTMLMediaElement(ctx) && !mediaElementList.includes(ctx)) {
      mediaElementList.push(ctx);

      try {
        mediaElementHandler.forEach((handler) => {
          handler instanceof Function && handler(ctx);
        });
      } catch (e) {}
    }
  }

  // 代理方法play和pause方法，确保能正确暂停和播放
  function proxyPrototypeMethod(element, methodName) {
    const originFunc = element && element.prototype[methodName];
    if (!originFunc) return;

    element.prototype[methodName] = new original.Proxy(originFunc, {
      apply(target, ctx, args) {
        mediaDetectHandler(ctx);
        return target.apply(ctx, args);
      },
    });
  }

  // 劫持 playbackRate、volume、currentTime 属性，并增加锁定的逻辑，从而实现更强的抗干扰能力
  function hijackPrototypeProperty(element, property) {
    if (!element || !element.prototype || !originDescriptors[property]) {
      return false;
    }

    original.Object.defineProperty.call(Object, element.prototype, property, {
      configurable: true,
      enumerable: true,
      get: function () {
        return originDescriptors[property].get.apply(this, arguments);
      },
      set: function (value) {
        if (property === "src") {
          mediaDetectHandler(this);
        }

        return originDescriptors[property].set.apply(this, arguments);
      },
    });
  }

  function mediaProxy() {
    if (!hasProxyHTMLMediaElement) {
      const proxyMethods = ["play", "pause", "load", "addEventListener"];
      proxyMethods.forEach((methodName) => {
        proxyPrototypeMethod(HTMLMediaElement, methodName);
      });

      const hijackProperty = ["playbackRate", "volume", "currentTime", "src"];
      hijackProperty.forEach((property) => {
        hijackPrototypeProperty(HTMLMediaElement, property);
      });

      hasProxyHTMLMediaElement = true;
    }

    return hasProxyHTMLMediaElement;
  }

  /**
   * 媒体标签检测，可以检测出video、audio、以及其它标签名经过改造后的媒体Element
   * @param {Function} handler -必选 检出后要执行的回调函数
   * @returns mediaElementList
   */
  function mediaChecker(handler) {
    if (
      !(handler instanceof Function) ||
      mediaElementHandler.includes(handler)
    ) {
      return mediaElementList;
    } else {
      mediaElementHandler.push(handler);
    }

    if (!hasProxyHTMLMediaElement) {
      mediaProxy();
    }

    return mediaElementList;
  }

  // 初始化mediaCore相关功能
  function init(mediaCheckerHandler) {
    if (hasMediaCoreInit) {
      return false;
    }

    originDescriptors = Object.getOwnPropertyDescriptors(
      HTMLMediaElement.prototype
    );

    Object.keys(HTMLMediaElement.prototype).forEach((key) => {
      try {
        if (HTMLMediaElement.prototype[key] instanceof Function) {
          originMethods[key] = HTMLMediaElement.prototype[key];
        }
      } catch (e) {}
    });

    mediaCheckerHandler =
      mediaCheckerHandler instanceof Function ? mediaCheckerHandler : () => {};
    mediaChecker(mediaCheckerHandler);

    hasMediaCoreInit = true;
    return true;
  }

  return {
    init,
    mediaChecker,
    originDescriptors,
    originMethods,
    mediaElementList,
  };
})();

function notifyUpdate() {
  let version = GM_getValue("mpvHandlerVersion", null);

  if (version !== MPV_HANDLER_VERSION) {
    const UPDATE_NOTIFY = {
      title: `${GM_info.script.name}`,
      text: `mpv-handler is upgraded to ${MPV_HANDLER_VERSION}\n\nClick to check updates`,
      onclick: () => {
        GM_openInTab("https://github.com/akiirui/mpv-handler/releases/latest");
      },
    };

    GM_notification(UPDATE_NOTIFY);
    GM_setValue("mpvHandlerVersion", MPV_HANDLER_VERSION);
  }
}

function appendButton() {
  let head = document.getElementsByTagName("head")[0];
  let style = document.createElement("style");

  if (head) {
    style.innerHTML = MPV_CSS.trim();
    head.appendChild(style);
  }

  let body = document.body;
  let buttonDiv = document.createElement("div");
  let buttonPlay = document.createElement("a");
  let buttonSettings = document.createElement("button");

  if (body) {
    buttonPlay.className = "pwm-play";
    buttonPlay.style = "display: none";
    buttonPlay.target = "_blank";
    buttonPlay.addEventListener("click", (e) => {
      mediaCore
        .mediaChecker(() => {})
        .forEach((videoElement) => videoElement.pause());
      if (e.stopPropagation) e.stopPropagation();
    });

    buttonSettings.className = "pwm-settings";
    buttonSettings.addEventListener("click", () => {
      if (!GM_config.isOpen) {
        GM_config.open();
        GM_config.frame.style = CONFIG_IFRAME_CSS.trim();
      }
    });

    buttonDiv.className = "play-with-mpv";
    buttonDiv.appendChild(buttonPlay);
    buttonDiv.appendChild(buttonSettings);

    body.appendChild(buttonDiv);

    document.addEventListener("fullscreenchange", () => {
      let button = document.getElementsByClassName("pwm-play")[0];

      button.style = document.fullscreenElement
        ? "display: none"
        : "display: block";
    });
  }
}

function updateButton(currentUrl, hasVideo) {
  let button = document.getElementsByClassName("pwm-play")[0];

  if (button) {
    let quality = GM_config.get("preferQuality").toLowerCase();
    let cookies = GM_config.get("useCookies").toLowerCase();
    let options = [];

    let proto =
      "mpv://play/" + btoa(currentUrl).replace(/\//g, "_").replace(/\+/g, "-");

    if (cookies === "yes") {
      options.push("cookies=" + document.location.hostname + ".txt");
    }
    if (quality !== "best") {
      options.push("quality=" + quality);
    }

    if (options.length !== 0) {
      proto += "/?";

      options.forEach((option, index) => {
        proto += option;

        if (index + 1 !== options.length) {
          proto += "&";
        }
      });
    }

    button.style = hasVideo ? "display: block" : "display: none";
    button.href = hasVideo ? proto : "";
  }
}

function hasVisibleMedia() {
  return (
    mediaCore
      .mediaChecker(() => {})
      .findIndex((media) => {
        const style = window.getComputedStyle(media);
        return style.display !== "none" && style.visibility !== "hidden";
      }) !== -1
  );
}

function detectPJAX() {
  let previousUrl = null;

  const checkHref = () => {
    let currentUrl = location.href;

    if (previousUrl !== currentUrl) {
      previousUrl = currentUrl;
      updateButton(currentUrl, hasVisibleMedia());
    }
  };

  setInterval(checkHref, 500);
}

mediaCore.init();
notifyUpdate();
appendButton();
updateButton(location.href, hasVisibleMedia());
detectPJAX();
