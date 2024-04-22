# play with mpv

Play videos and songs on the website via mpv-handler, without any background service.

> This userscipt is [not compatible with Greasemonkey v4.0+][note-greasemonkey], try Violentmoneky or Tampermonkey.

[note-greasemonkey]: https://github.com/akiirui/userscript/issues/1

## Installation

### userscript

[![][badges-play-with-mpv]][install-play-with-mpv]

### mpv-handler

[![mpv-handler][badges-mpv-handler]][install-mpv-handler]

### mpv & yt-dlp

[![][badges-mpv]][install-mpv]
[![][badges-yt-dlp]][install-yt-dlp]

> For Windows users, recommend to install [shinchiro's mpv builds][install-mpv-windows].
>
> This build include `mpv` and `yt-dlp` both, and have a script to update these.
>
> After install this build, remember run `updater.bat` to update `mpv` and download latest `yt-dlp`.

[badges-mpv-handler]: https://img.shields.io/github/v/tag/akiirui/mpv-handler?label=mpv-handler&style=for-the-badge
[badges-mpv]: https://img.shields.io/github/v/tag/mpv-player/mpv?label=MPV&style=for-the-badge
[badges-play-with-mpv]: https://img.shields.io/badge/dynamic/json?style=for-the-badge&label=play-with-mpv&prefix=v&query=version&url=https%3A%2F%2Fgreasyfork.org%2Fscripts%2F416271.json
[badges-yt-dlp]: https://img.shields.io/github/v/tag/yt-dlp/yt-dlp?label=yt-dlp&style=for-the-badge
[install-mpv-handler]: https://github.com/akiirui/mpv-handler/blob/main/README.md#installation
[install-mpv-windows]: https://sourceforge.net/projects/mpv-player-windows/files
[install-mpv]: https://mpv.io/installation/
[install-play-with-mpv]: https://greasyfork.org/scripts/416271-play-with-mpv
[install-yt-dlp]: https://github.com/yt-dlp/yt-dlp/releases

## Usage

Open supported sites and click left-bottom mpv icon.

Enjoy!

### Try Pass cookies

> For advanced users to view member-only videos.
>
> Because userscript no permissions to access full cookies (like `HttpOnly` cookies), then manually export cookies only.

1. Open settings, Switch **Try Pass Cookies** to **Yes**.
2. Export cookies file manually ([Chromium][usage-cookies-chromium], [Firefox][usage-cookies-firefox])

Cookies must be export to these path:

- Linux:

  - `$HOME/.config/mpv-handler/cookies/`

- Windows:

  - `(mpv-hander.exe parent folder)\cookies\`

Cookies file name must be following this format:

- `www.youtube.com.txt` (https://www.youtube.com/watch?v=BUOmDL1L4XU)

### MPV Profile

> For more details, see [MPV Profiles][usage-mpv-profile]

1. Open settings, enter your want profile name.

### Prefer Video Quality

> This feature based on [Format Selection][usage-format-selection]

1. Open settings, choose your want video quality.

### Prefer Video Codec

> This feature based on [Sorting Format][usage-sorting-format]

1. Open settings, choose your want video codec.

[usage-cookies-chromium]: https://chrome.google.com/webstore/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc/
[usage-cookies-firefox]: https://addons.mozilla.org/en-US/firefox/addon/cookies-txt/
[usage-mpv-profile]: https://mpv.io/manual/stable/#profiles
[usage-format-selection]: https://github.com/yt-dlp/yt-dlp/blob/master/README.md#format-selection
[usage-sorting-format]: https://github.com/yt-dlp/yt-dlp/blob/master/README.md#sorting-formats

### Run With Console

- `yes`: Run mpv-handler with console window to view outputs and errors
- `no`: Run mpv-handler without console window

## Supported sites

If you need support for some sites, create a [Issue][support-issue].

Of course, [supported sites][support-sites] only.

[support-issue]: https://github.com/akiirui/userscript/issues/new
[support-sites]: https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md

## GitHub

- [play-with-mpv][github-userscript]
- [mpv-handler][github-mpv-handler]

[github-mpv-handler]: https://github.com/akiirui/mpv-handler/
[github-userscript]: https://github.com/akiirui/userscript/tree/play-with-mpv/

## Thanks

- [mpv][thanks-mpv]
- [yt-dlp][thanks-yt-dlp]
- [papirus-icon-theme][thanks-papirus-icon-theme]

[thanks-mpv]: https://mpv.io/
[thanks-papirus-icon-theme]: https://github.com/PapirusDevelopmentTeam/papirus-icon-theme/
[thanks-yt-dlp]: https://github.com/yt-dlp/yt-dlp
