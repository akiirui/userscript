# Play with mpv handler

通过 mpv & youtube-dl 播放网页上的视频和歌曲，无需任何后台服务。

此用户脚本[不兼容 Greasemonkey v4.0+][note-greasemonkey]，请尝试 Violentmonkey 或 Tampermonky。

## 安装

### 基础

- 安装 [mpv][install-mpv] & [youtube-dl][install-youtube-dl]
- 安装油猴脚本 [play-with-mpv-handler][install-userscript]

> 推荐 Windows 用户安装 [shinchiro's mpv builds][install-mpv-windows].
>
> 这个构建同时包含 `mpv` 和 `youtube-dl`，并且拥有更新它们的脚本。
>
> 在安装这个构建后，记住运行 `updater.bat` 以更新 `mpv` 和下载最新的 `youtube-dl`。

### Linux

1. 安装软件包 [mpv-handler-git][install-mpv-handler-arch] <sup>AUR</sup> (仅限 Arch Linux)

或者

1. 下载最新的 [`mpv-handler-linux-x64.zip`][install-mpv-handler-linux]
2. 解压缩压缩包
3. 移动 `mpv-handler` 至 `~/.local/bin/`
4. 移动 `mpv-handler.desktop` 至 `~/.local/share/applications/`

**建议使用包管理器，但是你可能需要自己打包。**

### Windows

1. 下载最新的 [`mpv-handler-windows-x64.zip`][install-mpv-handler-windows]
2. 解压缩至 `mpv` 的安装文件夹
3. 运行 `handler-install.bat` 注册协议处理程序

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

- [play-with-mpv-handler][github-userscript]
- [mpv-handler][github-mpv-handler]

## 鸣谢

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
