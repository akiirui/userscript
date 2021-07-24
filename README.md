# play with mpv

Play videos and songs on the website via mpv-handler, without any background service.

> This userscipt is [not compatible with Greasemonkey v4.0+][note-greasemonkey], try Violentmoneky or Tampermonkey.

Developer's note:

> Because mpv-handler has a big feature updates, this userscript doesn't yet supported feature "Select Downloader".
>
> The feature "Select Downloader" will be updated asap.

## Installation

### userscript

[![][badges-play-with-mpv]][install-userscript]

### mpv & youtube-dl

[![mpv][badges-mpv]][install-mpv]
[![ytdl][badges-ytdl]][install-ytdl]

> For Windows users, recommend to install [shinchiro's mpv builds][install-mpv-windows].
>
> This build include `mpv` and `youtube-dl` both, and have a script to update these.
>
> After install this build, remember run `updater.bat` to update `mpv` and download latest `youtube-dl`.

### mpv-handler

[![mpv-handler][badges-mpv-handler]][install-mpv-handler]

## Usage

Open supported sites and click left-bottom mpv icon.

Enjoy!

### Choose the video quality

> This feature base on youtube-dl [format selection][usage-format-selection]

1. Open settings, Switch **Prefer Quality** to your want.

### Pass cookies to `youtube-dl`

**For advanced users to view member-only videos.**

> Because userscript no permissions to access full cookies (like `HttpOnly` cookies), then manually export cookies only.

1. Open settings, Switch **Try Pass Cookies** to **Yes**.
2. Export cookies file manually ([Chromium][usage-cookies-chromium], [Firefox][usage-cookies-firefox])

Cookies must be export to these path:

- Linux:

  - `~/.config/mpv/cookies/`

- Windows:

  - `(mpv-hander.exe parent folder)\cookies\`

Cookies file name must be following this format:

- `www.youtube.com.txt` (https://www.youtube.com/watch?v=BUOmDL1L4XU)

## Supported sites (Alphabetically)

- bilibili
- Twitch
- YouTube
- And more sites waiting to add ~

Because `youtube-dl` is supported too many sites , I cannot add all of these sites to `@match` at onetime.

If you need support for some sites, create a [Issues][support-issues].

Of course, `youtube-dl` [supported sites][support-sites] only.

## GitHub

- [play-with-mpv][github-userscript]
- [mpv-handler][github-mpv-handler]

## Thanks

- [mpv][thanks-mpv]
- [youtube-dl][thanks-youtube-dl]
- [papirus-icon-theme][thanks-papirus-icon-theme]

[badges-mpv-handler]: https://img.shields.io/github/v/tag/akiirui/mpv-handler?label=mpv-handler&style=for-the-badge
[badges-mpv]: https://img.shields.io/github/v/tag/mpv-player/mpv?label=MPV&style=for-the-badge
[badges-play-with-mpv]: https://img.shields.io/badge/dynamic/json?style=for-the-badge&label=play-with-mpv&prefix=v&query=version&url=https%3A%2F%2Fgreasyfork.org%2Fscripts%2F416271.json
[badges-ytdl]: https://img.shields.io/github/v/tag/ytdl-org/youtube-dl?label=youtube-dl&style=for-the-badge
[github-mpv-handler]: https://github.com/akiirui/mpv-handler/
[github-userscript]: https://github.com/akiirui/userscript/tree/play-with-mpv-handler/
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
