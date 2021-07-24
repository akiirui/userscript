# play with mpv

通过 mpv-handler 播放网页上的视频和歌曲，无需任何后台服务。

此用户脚本[不兼容 Greasemonkey v4.0+][note-greasemonkey]，请尝试 Violentmonkey 或 Tampermonky。

开发者注:

> 由于 mpv-handler 有一个大的功能性更新，此用户脚本暂时不支持新的「下载器选择」功能。
>
> 功能「下载器选择」将尽快更新。

## 安装

### userscript

[![][badges-play-with-mpv]][install-userscript]

### mpv & youtube-dl

[![mpv][badges-mpv]][install-mpv]
[![ytdl][badges-ytdl]][install-ytdl]

> 推荐 Windows 用户安装 [shinchiro's mpv builds][install-mpv-windows].
>
> 这个构建同时包含 `mpv` 和 `youtube-dl`，并且拥有更新它们的脚本。
>
> 在安装这个构建后，记住运行 `updater.bat` 以更新 `mpv` 和下载最新的 `youtube-dl`。

### mpv-handler

[![mpv-handler][badges-mpv-handler]][install-mpv-handler]

## 使用

打开受支持的网站，点击左下角的 mpv 图标

尽情享受！

### 选择视频品质

> 这个功能基于 youtube-dl [format selection][usage-format-selection]

1. 打开设置，将 **Perfer Quality** 切换为你需要的品质。

### 传递 cookies 至 `youtube-dl`

**供高级用户播放仅限会员的视频。**

> 因为用户脚本没有权限读取所有的 cookies （例如 `HttpOnly` 的 cookies），所以只能手动导出 cookies。

1. 打开设置，将 **Try Pass Cookies** 切换为 **Yes**。
2. 手动导出 cookies ([Chromium][usage-cookies-chromium], [Firefox][usage-cookies-firefox])。

Cookies 必须导出至以下位置：

- Linux:

  - `~/.config/mpv/cookies/`

- Windows:

  - `(mpv-hander.exe 的父目录)\cookies\`

Cookies 的文件名必须遵循以下格式：

- `www.youtube.com.txt` (https://www.youtube.com/watch?v=BUOmDL1L4XU)

## 支持的网站 (字母排序)

- bilibili
- Twitch
- YouTube
- 还有更多的网站等待添加～

因为 `youtube-dl` 支持了非常多的网站，我无法一次性添加所有的网站进 `@match`。

如果你需要某些网站的支持，欢迎提交 PR 或者创建一个 [Issues][support-issues]。

当然，仅限于 `youtube-dl` [所支持的网站][support-sites]。

## GitHub

- [play-with-mpv][github-userscript]
- [mpv-handler][github-mpv-handler]

## 鸣谢

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
