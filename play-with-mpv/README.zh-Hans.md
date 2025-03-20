# play with mpv

通过 mpv-handler 播放网页上的视频和歌曲，无需任何后台服务。

此用户脚本[不兼容 Greasemonkey v4.0+][note-greasemonkey]，请尝试 Violentmonkey 或 Tampermonky。

[note-greasemonkey]: https://github.com/akiirui/userscript/issues/1

## 安装

### userscript

[![][badges-play-with-mpv]][install-play-with-mpv]

### mpv-handler

[![mpv-handler][badges-mpv-handler]][install-mpv-handler]

### mpv & yt-dlp

[![][badges-mpv]][install-mpv]
[![][badges-yt-dlp]][install-yt-dlp]

> 推荐 Windows 用户安装 [shinchiro's mpv builds][install-mpv-windows].
>
> 这个构建同时包含 `mpv` 和 `yt-dlp`，并且拥有更新它们的脚本。
>
> 在安装这个构建后，记住运行 `updater.bat` 以更新 `mpv` 和下载最新的 `yt-dlp`。

[badges-mpv-handler]: https://img.shields.io/github/v/tag/akiirui/mpv-handler?label=mpv-handler&style=for-the-badge
[badges-mpv]: https://img.shields.io/github/v/tag/mpv-player/mpv?label=MPV&style=for-the-badge
[badges-play-with-mpv]: https://img.shields.io/badge/dynamic/json?style=for-the-badge&label=play-with-mpv&prefix=v&query=version&url=https%3A%2F%2Fgreasyfork.org%2Fscripts%2F416271.json
[badges-yt-dlp]: https://img.shields.io/github/v/tag/yt-dlp/yt-dlp?label=yt-dlp&style=for-the-badge
[install-mpv-handler]: https://github.com/akiirui/mpv-handler/blob/main/README.md#installation
[install-mpv-windows]: https://sourceforge.net/projects/mpv-player-windows/files
[install-mpv]: https://mpv.io/installation/
[install-play-with-mpv]: https://greasyfork.org/scripts/416271-play-with-mpv
[install-yt-dlp]: https://github.com/yt-dlp/yt-dlp/releases

## 使用

打开受支持的网站，点击左下角的 mpv 图标。

尽情享受！

### Try Pass cookies (传递 cookies)

> 供高级用户播放仅限会员的视频。
>
> 因为用户脚本没有权限读取所有的 cookies （例如 `HttpOnly` 的 cookies），所以只能手动导出 cookies。

1. 打开设置，将 **Try Pass Cookies** 切换为 **Yes**。
2. 手动导出 cookies ([Chromium][usage-cookies-chromium], [Firefox][usage-cookies-firefox])。

Cookies 必须导出至以下位置：

- Linux:

  - `$HOME/.config/mpv-handler/cookies/`

- Windows:

  - `(mpv-hander.exe 的父目录)\cookies\`

Cookies 的文件名必须遵循以下格式：

- `www.youtube.com.txt` (https://www.youtube.com/watch?v=BUOmDL1L4XU)

### MPV Profile (MPV 预设)

> 有关详细信息，请参阅 [MPV Profiles][usage-mpv-profile]

1. 打开设置，输入你想要的预设名。

### Prefer Video Quality (选择视频品质)

> 这个功能基于 [Format Selection][usage-format-selection]

1. 打开设置，选择你想要的视频质量。

### Prefer Video Codec (选择视频编码)

> 这个功能基于 [Sorting Format][usage-sorting-format]

1. 打开设置，选择你想要的视频编码。

### Run With Console (以命令行运行)

- `yes`: 在有命令行窗口的情况下运行 mpv-handler 以便于查看输出和错误
- `no`: 在没有命令行窗口的情况下运行 mpv-handler

[usage-cookies-chromium]: https://chrome.google.com/webstore/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc/
[usage-cookies-firefox]: https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/
[usage-mpv-profile]: https://mpv.io/manual/stable/#profiles
[usage-format-selection]: https://github.com/yt-dlp/yt-dlp/blob/master/README.md#format-selection
[usage-sorting-format]: https://github.com/yt-dlp/yt-dlp/blob/master/README.md#sorting-formats

## 网站支持

如果你需要某些网站的支持，欢迎提交 PR 或者创建一个 [Issue][support-issue]。

当然，仅限于 [所支持的网站][support-sites]。

[support-issue]: https://github.com/akiirui/userscript/issues/new
[support-sites]: https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md

## GitHub

- [play-with-mpv][github-userscript]
- [mpv-handler][github-mpv-handler]

[github-mpv-handler]: https://github.com/akiirui/mpv-handler/
[github-userscript]: https://github.com/akiirui/userscript/tree/play-with-mpv/

## 鸣谢

- [mpv][thanks-mpv]
- [yt-dlp][thanks-yt-dlp]
- [papirus-icon-theme][thanks-papirus-icon-theme]

[thanks-mpv]: https://mpv.io/
[thanks-papirus-icon-theme]: https://github.com/PapirusDevelopmentTeam/papirus-icon-theme/
[thanks-yt-dlp]: https://github.com/yt-dlp/yt-dlp
