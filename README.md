# Play with mpv handler

Play website videos and songs with mpv & youtube-dl, without any background service.

> This userscipt is [not compatible with Greasemonkey v4.0+][note-greasemokey], try Violentmoneky or Tampermonkey.

## Install

### Both

- Install [mpv][install-mpv] & [youtube-dl][install-youtube-dl]
- Install userscript [play-with-mpv-handler][install-userscript]

> For Windows users, recommend to install [shinchiro's mpv builds][install-mpv-windows].
>
> This build include `mpv` and `youtube-dl` both, and have a script to update these.
>
> After install this build, remember run `updater.bat` to update `mpv` and download latest `youtube-dl`.

### Linux

1. Install package [mpv-handler-git][install-mpv-handler-arch] <sup>AUR</sup> (Arch Linux Only)

Or

1. Download latest [`mpv-handler-linux-x64.zip`][install-mpv-handler-linux]
2. Unzip this archive.
3. Move `mpv-handler` to `~/.local/bin/`
4. Move `mpv-handler.desktop` to `~/.local/share/applications/`

**Recommend using package manager, but you need packaging it manually.**

### Windows

1. Download latest [`mpv-handler-windows-x64.zip`][install-mpv-handler-windows]
2. Unzip this archive to `mpv` installation folder
3. Run `handler-install.bat` to register protocol handler

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

- [play-with-mpv-handler][github-userscript]
- [mpv-handler][github-mpv-handler]

## Thanks

- [mpv][thanks-mpv]
- [youtube-dl][thanks-youtube-dl]
- [papirus-icon-theme][thanks-papirus-icon-theme]

[note-greasemokey]: https://github.com/akiirui/userscript/issues/1
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
