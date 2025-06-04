# play with mpv

通過 mpv-handler 播放網頁上的視頻和歌曲，無需任何後臺服務。

此用戶腳本[不兼容 Greasemonkey v4.0+][note-greasemonkey]，請嘗試 Violentmonkey 或 Tampermonky。

[note-greasemonkey]: https://github.com/akiirui/userscript/issues/1

## 安裝

### userscript

[![][badges-play-with-mpv]][install-play-with-mpv]

### mpv-handler

[![mpv-handler][badges-mpv-handler]][install-mpv-handler]

### mpv & yt-dlp

[![][badges-mpv]][install-mpv]
[![][badges-yt-dlp]][install-yt-dlp]

> 推薦 Windows 用戶安裝 [shinchiro's mpv builds][install-mpv-windows].
>
> 這個構建同時包含 `mpv` 和 `yt-dlp`，並且擁有更新它們的腳本。
>
> 在安裝這個構建後，記住運行 `updater.bat` 以更新 `mpv` 和下載最新的 `yt-dlp`。

[badges-mpv-handler]: https://img.shields.io/github/v/release/akiirui/mpv-handler?style=for-the-badge&logo=github&label=mpv-handler&color=blue
[badges-mpv]: https://img.shields.io/github/v/release/mpv-player/mpv?style=for-the-badge&logo=mpv&label=mpv&color=blue
[badges-play-with-mpv]: https://img.shields.io/greasyfork/v/416271?style=for-the-badge&logo=greasyfork&label=play-with-mpv
[badges-yt-dlp]: https://img.shields.io/github/v/release/yt-dlp/yt-dlp?style=for-the-badge&logo=youtube&label=yt-dlp
[install-mpv-handler]: https://github.com/akiirui/mpv-handler/blob/main/README.md#installation
[install-mpv-windows]: https://sourceforge.net/projects/mpv-player-windows/files
[install-mpv]: https://mpv.io/installation/
[install-play-with-mpv]: https://greasyfork.org/scripts/416271-play-with-mpv
[install-yt-dlp]: https://github.com/yt-dlp/yt-dlp/releases

## 使用

打開受支持的網站，點擊左下角的 mpv 圖標。

盡情享受！

### Try Pass cookies (傳遞 cookies)

> 供高級用戶播放僅限會員的視頻。
>
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

### MPV Profile (MPV 預設)

> 有關詳細信息，請參閱 [MPV Profiles][usage-mpv-profile]

1. 打開設置，輸入你想要的預設名。

### Prefer Video Quality (選擇視頻品質)

> 這個功能基於 [Format Selection][usage-format-selection]

1. 打開設置，選擇你想要的視頻質量。

### Prefer Video Codec (選擇視頻編碼)

> 這個功能基於 [Sorting Format][usage-sorting-format]

1. 打開設置，選擇你想要的視頻編碼。

### Run With Console (以命令行運行)

- `yes`: 在有命令行窗口的情況下運行 mpv-handler 以便於查看輸出和錯誤
- `no`: 在沒有命令行窗口的情況下運行 mpv-handler

[usage-cookies-chromium]: https://chrome.google.com/webstore/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc/
[usage-cookies-firefox]: https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/
[usage-mpv-profile]: https://mpv.io/manual/stable/#profiles
[usage-format-selection]: https://github.com/yt-dlp/yt-dlp/blob/master/README.md#format-selection
[usage-sorting-format]: https://github.com/yt-dlp/yt-dlp/blob/master/README.md#sorting-formats

## 網站支持

如果你需要某些網站的支持，歡迎提交 PR 或者創建一個 [Issue][support-issue]。

當然，僅限於 [所支持的網站][support-sites]。

[support-issue]: https://github.com/akiirui/userscript/issues/new
[support-sites]: https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md

## GitHub

- [play-with-mpv][github-userscript]
- [mpv-handler][github-mpv-handler]

[github-mpv-handler]: https://github.com/akiirui/mpv-handler/
[github-userscript]: https://github.com/akiirui/userscript/tree/main/play-with-mpv

## 鳴謝

- [mpv][thanks-mpv]
- [yt-dlp][thanks-yt-dlp]
- [papirus-icon-theme][thanks-papirus-icon-theme]

[thanks-mpv]: https://mpv.io/
[thanks-papirus-icon-theme]: https://github.com/PapirusDevelopmentTeam/papirus-icon-theme/
[thanks-yt-dlp]: https://github.com/yt-dlp/yt-dlp
