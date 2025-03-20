# bilibili 弹幕关闭

> **哔哩哔哩主站已经支持已登录用户的弹幕开关状态记忆**
>
> 如果你不需要嵌入播放器的支持，你现在可以删除此脚本了！
>
> 如果你需要嵌入播放器或不登录哔哩哔哩时使用，仍可继续使用此脚本。

支持哔哩哔哩主站和嵌入 HTML5 播放器。

## 其他功能

### 跳过充电界面

推荐添加以下规则至 uBlock Origin 规则中，避免跳过充电界面时播放器闪烁：

```
www.bilibili.com##.bilibili-player-electric-panel
```

### 取消自动连播

在视频结束后取消连播。

## 附加脚本

- [直播弹幕控制][addon-script]

## GitHub

- [bilibili-danmaku-disabler][github]

[addon-script]: https://greasyfork.org/scripts/386857-live-danmaku-controller
[github]: https://github.com/akiirui/userscript/tree/bilibili-danmaku-disabler/
