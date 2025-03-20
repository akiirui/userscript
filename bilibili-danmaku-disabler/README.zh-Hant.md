# bilibili 彈幕關閉

> **嗶哩嗶哩主站已經支持已登錄用戶的彈幕開關狀態記憶**
>
> 如果你不需要嵌入播放器的支持，你現在可以刪除此腳本了！
>
> 如果你需要嵌入播放器或不登錄嗶哩嗶哩時使用，仍可繼續使用此腳本。

支持嗶哩嗶哩主站和嵌入 HTML5 播放器。

## 其他功能

### 跳過充電界面

推薦添加以下規則至 uBlock Origin 規則中，避免跳過充電界面時播放器閃爍：

```
www.bilibili.com##.bilibili-player-electric-panel
```

### 取消自動連播

在視頻結束後取消連播。

## 附加腳本

- [直播彈幕控制][addon-script]

## GitHub

- [bilibili-danmaku-disabler][github]

[addon-script]: https://greasyfork.org/scripts/386857-live-danmaku-controller
[github]: https://github.com/akiirui/userscript/tree/bilibili-danmaku-disabler/
