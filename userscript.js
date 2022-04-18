// ==UserScript==
// @name                Play with mpv
// @name:en-US          Play with mpv
// @name:zh-CN          使用 mpv 播放
// @name:zh-TW          使用 mpv 播放
// @description         Play videos and songs on the website via mpv-handler
// @description:en-US   Play videos and songs on the website via mpv-handler
// @description:zh-CN   通过 mpv-handler 播放网页上的视频和歌曲
// @description:zh-TW   通過 mpv-handler 播放網頁上的視頻和歌曲
// @namespace           play-with-mpv-handler
// @version             2022.04.18
// @author              Akatsuki Rui
// @license             MIT License
// @require             https://cdn.jsdelivr.net/gh/sizzlemctwizzle/GM_config@a4a49b47ecfb1d8fcd27049cc0e8114d05522a0f/gm_config.js
// @grant               GM_info
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_notification
// @grant               GM_openInTab
// @compatible          chrome Since Chrome 49.x
// @compatible          firefox Since Firefox 44.x with Violentmonky or Tampermonkey
// @compatible          opera Since 17.x
// @run-at              document-idle
// @noframes
// @match               *://clips.twitch.tv/*
// @match               *://www.bilibili.com/video/*
// @match               *://www.twitch.tv/*
// @match               *://www.youtube.com/*
// @match               *://m.youtube.com/*
// ==/UserScript==

"use strict";

const MPV_HANDLER_VERSION = "v0.2.16";

const MATCHERS = {
  "clips.twitch.tv": /clips.twitch.tv/gi,
  "www.bilibili.com": /www.bilibili.com\/video\/(av|bv)/gi,
  "www.twitch.tv":
    /www.twitch.tv\/(?!(directory|downloads|jobs|p|turbo)\/).+/gi,
  "www.youtube.com": /www.youtube.com\/(watch|playlist|shorts)\?/gi,
  "m.youtube.com": /m.youtube.com\/(watch|playlist|shorts)\?/gi,
};

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
.pwm-iframe {
  display: none;
}
.play-with-mpv {
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
#${CONFIG_ID}_field_perferQuality {
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
    perferQuality: {
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
      updateButton(location.href);
      GM_config.close();
    },
    reset: () => {
      updateButton(location.href);
      GM_config.save();
      GM_config.close();
    },
  },
  css: CONFIG_CSS.trim(),
});

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

function matchUrl(currentUrl) {
  return currentUrl.search(MATCHERS[location.hostname]) !== -1;
}

function appendButton() {
  let head = document.getElementsByTagName("head")[0];
  let style = document.createElement("style");

  if (head) {
    style.innerHTML = MPV_CSS.trim();
    head.appendChild(style);
  }

  let body = document.getElementsByTagName("body")[0];
  let buttonDiv = document.createElement("div");
  let buttonIframe = document.createElement("iframe");
  let buttonPlay = document.createElement("a");
  let buttonSettings = document.createElement("button");

  if (body) {
    buttonIframe.className = "pwm-iframe";
    buttonIframe.name = "pwm-iframe";

    buttonPlay.className = "pwm-play";
    buttonPlay.target = "pwm-iframe";
    buttonPlay.style = "display: none";
    buttonPlay.addEventListener("click", (e) => {
      let videoElement = document.getElementsByTagName("video")[0];
      if (videoElement) videoElement.pause();
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
    buttonDiv.appendChild(buttonIframe);
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

function updateButton(currentUrl) {
  let isMatch = matchUrl(currentUrl);
  let button = document.getElementsByClassName("pwm-play")[0];

  if (button) {
    let quality = GM_config.get("perferQuality").toLowerCase();
    let cookies = GM_config.get("useCookies").toLowerCase();
    let protocol = "mpv://play/" + btoa(currentUrl) + "/";

    if (cookies === "yes") {
      protocol += "?cookies=" + document.location.hostname + ".txt" + "&";
    } else {
      protocol += "?";
    }

    protocol += "downloader=mpv" + "&";
    protocol += "quality=" + quality;

    button.style = isMatch ? "display: block" : "display: none";
    button.href = isMatch ? protocol : "";
  }
}

function detectPJAX() {
  let previousUrl = null;
  let currentUrl = null;

  setInterval(() => {
    currentUrl = location.href;

    if (previousUrl !== currentUrl) {
      updateButton(currentUrl);
      previousUrl = currentUrl;
    }
  }, 500);
}

notifyUpdate();
appendButton();
detectPJAX();
