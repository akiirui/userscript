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
// @version             2023.07.04
// @author              Akatsuki Rui
// @license             MIT License
// @require             https://cdn.jsdelivr.net/gh/sizzlemctwizzle/GM_config@2207c5c1322ebb56e401f03c2e581719f909762a/gm_config.js
// @grant               GM_info
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_notification
// @run-at              document-idle
// @noframes
// @match               *://*.youtube.com/*
// @match               *://*.twitch.tv/*
// @match               *://*.crunchyroll.com/*
// @match               *://*.bilibili.com/*
// @match               *://*.kick.com/*
// ==/UserScript==

"use strict";

const MPV_HANDLER_VERSION = "v0.3.4";

const MATCHERS = {
  "www.youtube.com": /www.youtube.com\/(watch|playlist|shorts)\?/gi,
  "m.youtube.com": /m.youtube.com\/(watch|playlist|shorts)\?/gi,
  "www.twitch.tv":
    /www.twitch.tv\/(?!(directory|downloads|jobs|p|turbo)\/).+/gi,
  "clips.twitch.tv": /clips.twitch.tv/gi,
  "www.crunchyroll.com": /www.crunchyroll.com\/.*watch\/([0-9]|[A-Z])+/gi,
  "beta.crunchyroll.com": /beta.crunchyroll.com\/.*watch\/([0-9]|[A-Z])+/gi,
  "live.bilibili.com": /live.bilibili.com\/[0-9]+/gi,
  "www.bilibili.com": /www.bilibili.com\/video\/(av|bv)/gi,
  "kick.com": /kick.com\/(?!(categories)\/).+/gi,
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
  justify-content: center;
}
#${CONFIG_ID}_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#${CONFIG_ID} .config_header {
  display: flex;
  align-items: center;
  padding: 12px;
}
#${CONFIG_ID} .config_var {
  margin: 0 0 12px 0;
}
#${CONFIG_ID} .field_label {
  display: inline-block;
  width: 140px;
  font-size: 14px;
}
#${CONFIG_ID}_field_cookies,
#${CONFIG_ID}_field_profile,
#${CONFIG_ID}_field_quality,
#${CONFIG_ID}_field_v_codec {
  width: 80px;
  height: 24px;
  font-size: 14px;
  text-align: center;
}
#${CONFIG_ID}_buttons_holder {
  display: flex;
  flex-direction: column;
}
#${CONFIG_ID} .saveclose_buttons {
  margin: 1px;
  padding: 4px 0;
}
#${CONFIG_ID} .reset_holder {
  padding-top: 4px;
}
`;

const CONFIG_IFRAME_CSS = `
position: fixed;
z-index: 99999;
width: 300px;
height: 300px;
border: 1px solid;
border-radius: 10px;
`;

// GM_config init
GM_config.init({
  id: `${CONFIG_ID}`,
  title: `${GM_info.script.name}`,
  fields: {
    cookies: {
      label: "Try Pass Cookies",
      type: "select",
      options: ["yes", "no"],
      default: "no",
    },
    profile: {
      label: "MPV Profile",
      type: "text",
      default: "default",
    },
    quality: {
      label: "Prefer Video Quality",
      type: "select",
      options: ["best", "2160p", "1440p", "1080p", "720p", "480p", "360p"],
      default: "best",
    },
    v_codec: {
      label: "Prefer Video Codec",
      type: "select",
      options: ["any", "av01", "vp9", "h265", "h264"],
      default: "any",
    },
  },
  events: {
    save: () => {
      let profile = GM_config.get("profile").trim();

      if (profile === "") {
        GM_config.set("profile", "default");
      } else {
        GM_config.set("profile", profile);
      }

      updateButton(location.href);
      GM_config.close();
    },
    reset: () => {
      GM_config.save();
    },
  },
  css: CONFIG_CSS.trim(),
});

// URL-safe base64 encode
function btoaUrl(url) {
  return btoa(url).replace(/\//g, "_").replace(/\+/g, "-").replace(/\=/g, "");
}

// Generate "mpv://play/" protocol
function generateProto(url) {
  let cookies = GM_config.get("cookies").toLowerCase();
  let profile = GM_config.get("profile").trim();
  let quality = GM_config.get("quality").toLowerCase();
  let v_codec = GM_config.get("v_codec").toLowerCase();
  let options = [];

  let proto = "mpv://play/" + btoaUrl(url);

  if (cookies === "yes") {
    options.push("cookies=" + document.location.hostname + ".txt");
  }
  if (profile !== "default" && profile !== "") {
    options.push("profile=" + profile);
  }
  if (quality !== "best") {
    options.push("quality=" + quality);
  }
  if (v_codec !== "any") {
    options.push("v_codec=" + v_codec);
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

  return proto;
}

// Check the URL is matched or not
function matchUrl(url) {
  if (MATCHERS[location.hostname]) {
    return url.search(MATCHERS[location.hostname]) !== -1;
  } else {
    return false;
  }
}

// Update button display status and URL
function updateButton(url) {
  let isMatch = matchUrl(url);
  let button = document.getElementsByClassName("pwm-play")[0];

  if (button) {
    button.style =
      isMatch && !document.fullscreenElement
        ? "display: block"
        : "display: none";
    button.href = isMatch ? generateProto(url) : "";
  }
}

// Notify update about mpv-handler
function notifyUpdate() {
  let version = GM_getValue("mpvHandlerVersion", null);

  if (version !== MPV_HANDLER_VERSION) {
    const UPDATE_NOTIFY = {
      title: `${GM_info.script.name}`,
      text: `mpv-handler is upgraded to ${MPV_HANDLER_VERSION}\n\nClick to check updates`,
      onclick: () => {
        window.open("https://github.com/akiirui/mpv-handler/releases/latest");
      },
    };

    GM_notification(UPDATE_NOTIFY);
    GM_setValue("mpvHandlerVersion", MPV_HANDLER_VERSION);
  }
}

// Add play and settings buttons to page
function createButton() {
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

// Detect PJAX changes
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
createButton();
detectPJAX();
