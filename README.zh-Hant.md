# play with mpv

通過 mpv-handler 播放網頁上的視頻和歌曲，無需任何後臺服務。

此用戶腳本[不兼容 Greasemonkey v4.0+][note-greasemonkey]，請嘗試 Violentmonkey 或 Tampermonky。

開發者注:

> 由於 mpv-handler 有一個大的功能性更新，此用戶腳本暫時不支持新的「下載器選擇」功能。
>
> 功能「下載器選擇」將盡快更新。

## 安裝

### userscript

[![][badges-play-with-mpv]][install-userscript]

### mpv & youtube-dl

[![mpv][badges-mpv]][install-mpv]
[![ytdl][badges-ytdl]][install-ytdl]

> 推薦 Windows 用戶安裝 [shinchiro's mpv builds][install-mpv-windows].
>
> 這個構建同時包含 `mpv` 和 `youtube-dl`，並且擁有更新它們的腳本。
>
> 在安裝這個構建後，記住運行 `updater.bat` 以更新 `mpv` 和下載最新的 `youtube-dl`。

### mpv-handler

[![mpv-handler][badges-mpv-handler]][install-mpv-handler]

## 使用

打開受支持的網站，點擊左下角的 mpv 圖標

盡情享受！

### 選擇視頻品質

> 這個功能基於 youtube-dl [format selection][usage-format-selection]

1. 打開設置，將 **Perfer Quality** 切換爲你需要的品質。

### 傳遞 cookies 至 `youtube-dl`

**供高級用戶播放僅限會員的視頻。**

> 因爲用戶腳本沒有權限讀取所有的 cookies （例如 `HttpOnly` 的 cookies），所以只能手動導出 cookies。

1. 打開設置，將 **Try Pass Cookies** 切換爲 **Yes**。
2. 手動導出 cookies ([Chromium][usage-cookies-chromium], [Firefox][usage-cookies-firefox])。

Cookies 必須導出至以下位置：

- Linux:

  - `$HOME/.config/mpv-handler/cookies/`

- Windows:

  - `(mpv-hander.exe 的父目錄)\cookies\`

Cookies 的文件名必須遵循以下格式：

- `www.youtube.com.txt` (https://www.youtube.com/watch?v=BUOmDL1L4XU)

## 支持的網站 (字母排序)

- bilibili
- Twitch
- YouTube
- 還有更多的網站等待添加～

因爲 `youtube-dl` 支持了非常多的網站，我無法一次性添加所有的網站進 `@match`。

如果你需要某些網站的支持，歡迎提交 PR 或者創建一個 [Issues][support-issues]。

當然，僅限於 `youtube-dl` [所支持的網站][support-sites]。

## GitHub

- [play-with-mpv][github-userscript]
- [mpv-handler][github-mpv-handler]

## 鳴謝

- [mpv][thanks-mpv]
- [youtube-dl][thanks-youtube-dl]
- [papirus-icon-theme][thanks-papirus-icon-theme]

[badges-mpv-handler]: https://img.shields.io/github/v/tag/akiirui/mpv-handler?label=mpv-handler&style=for-the-badge
[badges-mpv]: https://img.shields.io/github/v/tag/mpv-player/mpv?label=MPV&style=for-the-badge
[badges-play-with-mpv]: https://img.shields.io/badge/dynamic/json?style=for-the-badge&label=play-with-mpv&prefix=v&query=version&url=https%3A%2F%2Fgreasyfork.org%2Fscripts%2F416271.json
[badges-ytdl]: https://img.shields.io/github/v/tag/ytdl-org/youtube-dl?label=youtube-dl&style=for-the-badge
[github-mpv-handler]: https://github.com/akiirui/mpv-handler/
[github-userscript]: https://github.com/akiirui/userscript/tree/play-with-mpv/
[install-mpv-handler]: https://github.com/akiirui/mpv-handler/blob/main/README.md#installation
[install-mpv-windows]: https://sourceforge.net/projects/mpv-player-windows/files
[install-mpv]: https://mpv.io/installation/
[install-userscript]: https://greasyfork.org/scripts/416271-play-with-mpv
[install-ytdl]: https://github.com/ytdl-org/youtube-dl/releases
[note-greasemonkey]: https://github.com/akiirui/userscript/issues/1
[support-issues]: https://github.com/akiirui/userscript/issues/new
[support-sites]: https://ytdl-org.github.io/youtube-dl/supportedsites.html
[thanks-mpv]: https://mpv.io/
[thanks-papirus-icon-theme]: https://github.com/PapirusDevelopmentTeam/papirus-icon-theme/
[thanks-youtube-dl]: https://github.com/ytdl-org/youtube-dl/
[usage-cookies-chromium]: https://chrome.google.com/webstore/detail/get-cookiestxt/bgaddhkoddajcdgocldbbfleckgcbcid/
[usage-cookies-firefox]: https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/
[usage-format-selection]: https://github.com/ytdl-org/youtube-dl/blob/master/README.md#format-selection
