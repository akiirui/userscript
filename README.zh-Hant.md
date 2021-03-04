# Play with mpv handler

通過 mpv & youtube-dl 播放網頁上的視頻和歌曲，無需任何後臺服務。

此用戶腳本[不兼容 Greasemonkey v4.0+][note-greasemonkey]，請嘗試 Violentmonkey 或 Tampermonky。

## 安裝

### 基礎

- 安裝 [mpv][install-mpv] & [youtube-dl][install-youtube-dl]
- 安裝油猴腳本 [play-with-mpv-handler][install-userscript]

> 推薦 Windows 用戶安裝 [shinchiro's mpv builds][install-mpv-windows].
>
> 這個構建同時包含 `mpv` 和 `youtube-dl`，並且擁有更新它們的腳本。
>
> 在安裝這個構建後，記住運行 `updater.bat` 以更新 `mpv` 和下載最新的 `youtube-dl`。

### Linux

1. 安裝軟件包 [mpv-handler-git][install-mpv-handler-arch] <sup>AUR</sup> (僅限 Arch Linux)

或者

1. 下載最新的 [`mpv-handler-linux-x64.zip`][install-mpv-handler-linux]
2. 解壓縮壓縮包
3. 移動 `mpv-handler` 至 `~/.local/bin/`
4. 移動 `mpv-handler.desktop` 至 `~/.local/share/applications/`

**建議使用包管理器，但是你可能需要自己打包。**

### Windows

1. 下載最新的 [`mpv-handler-windows-x64.zip`][install-mpv-handler-windows]
2. 解壓縮至 `mpv` 的安裝文件夾
3. 運行 `handler-install.bat` 註冊協議處理程序

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

  - `~/.config/mpv/cookies/`

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

- [play-with-mpv-handler][github-userscript]
- [mpv-handler][github-mpv-handler]

## 鳴謝

- [mpv][thanks-mpv]
- [youtube-dl][thanks-youtube-dl]
- [papirus-icon-theme][thanks-papirus-icon-theme]

[note-greasemonkey]: https://github.com/akiirui/userscript/issues/1
[install-mpv]: https://mpv.io/installation/
[install-youtube-dl]: https://github.com/ytdl-org/youtube-dl/releases
[install-userscript]: https://greasyfork.org/scripts/416271-play-with-mpv
[install-mpv-windows]: https://sourceforge.net/projects/mpv-player-windows/files
[install-mpv-handler-arch]: https://aur.archlinux.org/packages/mpv-handler-git/
[install-mpv-handler-linux]: https://github.com/akiirui/mpv-handler/releases/latest/download/mpv-handler-linux-x64.zip
[install-mpv-handler-windows]: https://github.com/akiirui/mpv-handler/releases/latest/download/mpv-handler-windows-x64.zip
[usage-format-selection]: https://github.com/ytdl-org/youtube-dl/blob/master/README.md#format-selection
[usage-cookies-chromium]: https://chrome.google.com/webstore/detail/get-cookiestxt/bgaddhkoddajcdgocldbbfleckgcbcid/
[usage-cookies-firefox]: https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/
[support-issues]: https://github.com/akiirui/userscript/issues/new
[support-sites]: https://ytdl-org.github.io/youtube-dl/supportedsites.html
[github-userscript]: https://github.com/akiirui/userscript/tree/play-with-mpv-handler/
[github-mpv-handler]: https://github.com/akiirui/mpv-handler/
[thanks-mpv]: https://mpv.io/
[thanks-youtube-dl]: https://github.com/ytdl-org/youtube-dl/
[thanks-papirus-icon-theme]: https://github.com/PapirusDevelopmentTeam/papirus-icon-theme/
