/**
 *AppEmit websocket 调用程序
 * v1.2.95  多App异步  Gzip
 * @ LGPL v3
 * 有问题反馈：appemit@appemit.com
 * 2023-03-03
 *部署需要注意：
 *1、加载在</body>前，尽可能靠后，AE.InitApp应该是执行一次,设置 AE.InitApp 函数使用的wsInit参数，尤其是initSet
 *2、通常App和浏览器保持一致设置 AppFollow=31
 *3、App的弹窗固定位置设置fixedPos_NoPageOffset，有绝对位置或者iframe,设置absolutePos
 *4、AE.OpenApp()执行命令, 过程中如果需要执行dll等调用代码 AE.OpenApp({"emit":"runCmd",...}),或者调用已有的函数为AE.OpenApp({"emit":"runCall",...})
 *5、AE.CloseApp(AppId)关闭命令，默认关闭浏览器时自动执行,或者过程中关闭AppId的界面。等效AE.OpenApp({"emit":"close","AppId":1})。
 *说明*
 * IE8以上才支持websocket。最好不要使用兼容模式，360EE极速版的兼容模式不能判断，且兼容模式的浏览器自带存在无法监控切换tab的visibilitychange属性的bug。
 */

(function (_0x187499, _0xac3ee7) {
  var _0x4c5578 = _0x4c93,
    _0x145b38 = _0x187499();
  while (!![]) {
    try {
      var _0x2e23c3 = (parseInt(_0x4c5578(0x2fa)) / 0x1) * (-parseInt(_0x4c5578(0x32c)) / 0x2) + -parseInt(_0x4c5578(0x26c)) / 0x3 + -parseInt(_0x4c5578(0x23f)) / 0x4 + -parseInt(_0x4c5578(0x269)) / 0x5 + (-parseInt(_0x4c5578(0x2ed)) / 0x6) * (-parseInt(_0x4c5578(0x30d)) / 0x7) + (-parseInt(_0x4c5578(0x27b)) / 0x8) * (-parseInt(_0x4c5578(0x21b)) / 0x9) + parseInt(_0x4c5578(0x24d)) / 0xa;
      if (_0x2e23c3 === _0xac3ee7) break;
      else _0x145b38["push"](_0x145b38["shift"]());
    } catch (_0x18ac16) {
      _0x145b38["push"](_0x145b38["shift"]());
    }
  }
})(_0x19f1, 0x492c1);
function _0x19f1() {
  var _0x4feb9c = [
    "pow",
    "GetRatio",
    "Linux",
    "push",
    "stringify",
    "location",
    "querySelector",
    "LieBaoFast",
    "Huawei",
    "fixedPos_NoPageOffset",
    "interval_Mouseout",
    "not\x20found\x20\x20elementId\x20",
    "13123100QPqANt",
    "one",
    "nodeType",
    "flag",
    "autoAdd",
    "onload",
    "toLowerCase",
    "EmitReq_PIP_sync",
    "parent",
    "move",
    "now",
    "getEmbedwindow",
    "DpiScale",
    "logicalXDPI",
    "enterWindow",
    "DingTalk",
    "debounce_throttle_time",
    "openUriWithHiddenFrame",
    "setInitBrowserData",
    "data",
    "Mb2345Browser",
    "Liebao",
    "Emit_wsSend",
    "Coc\x20Coc",
    "relatedTarget",
    "appemit",
    "width",
    "CurEventType",
    "2427890VYeeol",
    "scrollHide",
    "length",
    "982092olRNEt",
    "visibleTab",
    "gzip",
    "focus",
    "Obj",
    "createHiddenIframe",
    "Gecko/",
    "5.3",
    "Firefox",
    "initSet",
    "HuaweiBrowser",
    "Taobao",
    "ActiveXObject",
    "resizeTimeout",
    "hiddenIframe",
    "160thpSKJ",
    "Windows\x20Phone",
    "screenTop",
    "5.0",
    "Iceape",
    "MiuiBrowser",
    "WebOS",
    "href",
    "clientHeight",
    "FreeBSD",
    "screenY",
    "screen",
    "userAgent",
    "BlurFocus_shouldShow",
    "onreadystatechange",
    "wsCloseFun",
    "PageOffsety",
    "onmouseleave",
    "parse",
    "KHTML",
    "twoSessions",
    "Chrome\x20OS",
    "AppEmbed",
    "</br>",
    "QQ/",
    "Iceweasel",
    "equ",
    "onmouseenter",
    "Yandex",
    "isFocus",
    "send",
    "round",
    "AppId\x20",
    "funcVisibilitychange",
    "close",
    "reStartInit",
    "position",
    "start",
    "body",
    "iPad",
    "openUriUsingFirefox",
    "Kindle",
    "edge_menuWidth",
    "service",
    "6.3",
    "noService",
    "height",
    "AppRuntime",
    "deviceXDPI",
    "iframe",
    "OpenApp",
    "No\x20\x20websocket\x20\x20Url",
    "TheWorld",
    "FxiOS",
    "VivoBrowser",
    "sleep",
    "hidden",
    "GetAbsoluteLocationEx",
    "dpiRatio",
    "coc_coc_browser",
    "AppStatus",
    "oldY",
    "onmessage",
    "#hiddenIframe",
    "browser",
    "VisibilityState",
    "Firefox\x20Focus",
    "Qiyu",
    "Arora",
    "IqiyiApp",
    "ws://",
    "EmitReq_PIP",
    "Windows",
    "assign",
    "replace",
    "iframeId",
    "outerWidth",
    "log",
    "zeroType",
    "onvisibilitychange",
    "language",
    "isElement",
    "next_wsUrlPort",
    "7.5",
    "appendChild",
    "Konqueror",
    "noErrTip",
    "onerror",
    "slice",
    "visibilitychange",
    "availHeight",
    "Chromium",
    "9.1",
    "pageXOffset",
    "onclose",
    "indexOf",
    "msLaunchUri",
    "JsOutData",
    "wsOpenFun",
    "device",
    "8.1",
    "exports",
    "split",
    "visibilityState",
    "scroll_Deb_thr",
    "complete",
    "clientX",
    "innerWidth",
    "emitInterval",
    "callbackFunc",
    "src",
    "noTip_ServerReceiveMsg",
    "restart",
    "taskBar",
    "36uAJnWH",
    "CriOS",
    "curRatio",
    "appemitweb",
    "RIM",
    "sumComposeTag",
    "left",
    "scrollLeft",
    "Lunascape",
    "more",
    "com.douban.frodo",
    "BIDUBrowser",
    "addEventListener",
    "77EMzCek",
    "getUrlPar",
    "Maxthon",
    ",\x20check\x20iframeId\x20value",
    "IEMobile",
    "getBodyOffset",
    "getElementById",
    "emit",
    "clientAuth",
    "resize",
    "AppleWebKit",
    "removeEventListener",
    "GetPageOffset",
    "rep",
    "7.0",
    "NET\x20CLR",
    "\x20not\x20loaded",
    "moveInterval",
    "top",
    "525595euWRWS",
    "QHBrowser",
    "hideScaleXY",
    "Chrome",
    "getHiddenProp",
    "message",
    "application/gameplugin",
    "PageOffsetx",
    "QQBrowser",
    "wsUrl_old",
    "AddReady",
    "Epiphany",
    "outerHeight",
    "function",
    "zmRatio",
    "absolutePos",
    "toElement",
    "neq",
    "Edge",
    "MeeGo",
    "engine",
    "embedWindow",
    "MSIE",
    "regEventScroll",
    "QihooBrowser",
    "://",
    "Tablet",
    "urlws_ends_1th",
    "13.0",
    "EVENTTYPE",
    "SNEBUY-APP",
    "3326LcGCCU",
    "rid",
    "fun",
    "registerEvent",
    "eventType_Follow",
    "Baidu",
    "abs",
    "req",
    "regEventResize",
    "115Browser",
    "getScreenPxHandler",
    "重试或者请检查是否安装了",
    "moz",
    "12.0",
    "style",
    "innerHeight",
    "Suning",
    "clientInfo",
    "clientDetect",
    "onmousemove",
    "360EE",
    "LBBROWSER",
    "ws_port",
    "visible",
    "like\x20Mac\x20OS\x20X",
    "AppObj",
    "WechatWork",
    "EdgeHTML",
    "leaveBrowser",
    "Better\x20not\x20compatibility\x20mode",
    "Debian",
    "scrollApp",
    "1.2.95",
    "noRid",
    "Weibo",
    "keys",
    "9.5",
    "innerHTML",
    "devicePixelRatio",
    "match",
    "getElementsByTagName",
    "2345Explorer",
    "callee",
    "wsUrl",
    "PONG",
    "Alipay",
    "Safari",
    "X11",
    "isBlur",
    "saveData",
    "mousemove",
    "event",
    "scrollHeight",
    "screenX",
    "iOS",
    "[object\x20Object]",
    "bind",
    "adblock2345",
    "oldFS",
    "offsetLeft",
    "remove",
    "excludePorts",
    "callbackFun_cancel",
    "pos",
    "onblur",
    "ws://localhost:80/appemit?cid=00000-1&sid=1&flag=1",
    "BlurFocus",
    "CSS1Compat",
    "newOpen",
    "number",
    "server\x20receive\x20msg",
    "zoom",
    "version",
    "debounce_throttle_stamp",
    "Symbian",
    "attachEvent",
    "resizeDelay_time",
    "showPar",
    "documentElement",
    "IE_core",
    "InitApp",
    "application/hwepass2001.installepass2001",
    "error：zip\x20",
    "type",
    "\x20UBrowser",
    "document",
    "Wechat",
    "Nexus\x207",
    "apply",
    "UCBrowser",
    "code",
    "noTipform_ServerReceiveMsg",
    "interval_Pong",
    "join",
    "sort",
    "winsys",
    "OTP",
    "openUriWithMsLaunchUri",
    "port_try_Maxcnt",
    "Pad",
    "clientKey",
    "connection",
    "MousebodyOffset",
    "4.5",
    "MicroMessenger",
    "detachEvent",
    "noReply",
    "clientY",
    "NS_ERROR_UNKNOWN_PROTOCOL",
    "Quark",
    "useRatio",
    "Browser",
    "，可用端口是否一致。Try\x20again\x20or\x20Check\x20whether\x20appemit\x20is\x20installed\x20and\x20the\x20available\x20ports\x20are\x20consistent,please!",
    "请确定\x20",
    "AppId",
    "offsetTop",
    "login",
    "port_default_mark",
    "load",
    "onresize",
    "funcMouseout",
    "KHTML/",
    "screenLeft",
    "Edg/",
    "constructor",
    "fullScreen",
    "readyState",
    "wxwork/",
    "contentWindow",
    "toUpperCase",
    "Opera",
    "tip",
    "protocolTime",
    "webkit",
    "CrOS",
    "availWidth",
    "getTime",
    "new_ports",
    "string",
    "absolute",
    "unGzip",
    "overflow",
    "protectClear",
    "DOMContentLoaded",
    "concat",
    "Blink",
    "XiaoMi",
    "init",
    "isFullScreen",
    "iQiYi",
    "wss_port",
    "toString",
    "Vivaldi",
    "wsMessageFun",
    "Sogou",
    "scroll",
    "YaBrowser",
    "onopen",
    "openUri",
    "Vivo",
    "port_try_cnt",
    "osVersion",
    "beforeunload",
    "HUAWEI/",
    "360SE",
    "open",
    "call",
    "browserLanguage",
    "err",
    "InitClientAuth",
    "BlackBerry",
    "offsetParent",
    "Presto",
    "compatMode",
    "undefined",
    "clientWidth",
    "URLProtocol",
    "application/360softmgrplugin",
    "Trident",
    "edge_menuHeight",
    "onfocus",
    "14373iWaAdp",
    "about:blank",
    "iframeEle",
    "9.9",
    "isMaxBrowser",
    "amd",
    "9.0",
    "480",
    "5.9",
    "wsErrorFun",
    "temp-0000000000",
    "scrollTop",
    "object",
    "getScreenPx",
    "Adr",
    "AppVisibleMove",
    "Ubuntu",
    "SeaMonkey",
    "prototype",
    "6.0",
    "hide",
    "Android",
    "chrome",
    "show",
    "\x20err\x20\x20elementId\x20",
    "elementId",
    "11.0",
    "hideScale",
    "Hidden",
    "AppFollow",
    "substring",
    "Not\x20Windows!",
    "SvrOpenMark",
    "AppShow",
    "CloseApp",
    "oldX",
    "2216216bFardN",
    "func",
  ];
  _0x19f1 = function () {
    return _0x4feb9c;
  };
  return _0x19f1();
}
var AppEmit = (function (_0x199729) {
  var _0x2cba34 = _0x4c93,
    _0x262d48 = function (_0x526a08) {
      return new _0x262d48["fn"]["ws"](_0x526a08);
    };
  return (
    (_0x262d48["fn"] = _0x262d48[_0x2cba34(0x22d)] =
      {
        constructor: _0x262d48,
        ws: function (_0x2276d6) {
          var _0x46982 = _0x2cba34;
          (this[_0x46982(0x1ae)] = _0x46982(0x34c)),
            (this[_0x46982(0x342)] = _0x2276d6["ws_port"] || [0x50, 0x21a9, 0x21aa, 0x21ab, 0x226b]),
            (this[_0x46982(0x1fc)] = _0x2276d6["wss_port"] || [0x1bb, 0x1bdb, 0x1bdc, 0x1bdd, 0x1cc6]),
            (this[_0x46982(0x1c8)] = _0x2276d6[_0x46982(0x1c8)] || 0x3),
            (this[_0x46982(0x1a3)] = _0x2276d6[_0x46982(0x1a3)] || [0x801]),
            (this["initSet"] = _0x2276d6[_0x46982(0x275)] || { emit: _0x46982(0x1f9), clientKey: _0x46982(0x225), wsUrl: _0x46982(0x1a7), flag: 0x0, sid: "1", noRecTip: 0x0, noErrTip: 0x1, monitor: { on: 0x0, interval: 0x3e8, maxHungCnt: 0x5, hungTimeout: 0x1f4, func: _0x46982(0x2eb) } }),
            (this[_0x46982(0x2a6)] = _0x2276d6[_0x46982(0x2a6)] || _0x46982(0x266)),
            (this[_0x46982(0x2e7)] = _0x2276d6[_0x46982(0x2e7)] || 0xa),
            (this[_0x46982(0x216)] = _0x2276d6[_0x46982(0x216)] === 0x0 || _0x2276d6[_0x46982(0x216)] === ![] ? ![] : typeof _0x2276d6[_0x46982(0x216)] == "string" ? _0x2276d6[_0x46982(0x216)] : _0x46982(0x2f0)),
            (this[_0x46982(0x1ea)] = _0x2276d6[_0x46982(0x1ea)] || 0x9c4),
            (this[_0x46982(0x1f4)] = _0x2276d6[_0x46982(0x1f4)] === null ? 0x1 : _0x2276d6["protectClear"]),
            (this[_0x46982(0x2dc)] = _0x2276d6[_0x46982(0x2dc)] || null),
            (this[_0x46982(0x2e3)] = _0x2276d6["scroll_Deb_thr"] || 0x1),
            (this[_0x46982(0x25d)] = _0x2276d6[_0x46982(0x25d)] || 0x50),
            (this[_0x46982(0x1af)] = _0x2276d6[_0x46982(0x1af)] === null ? 0x1 : _0x2276d6[_0x46982(0x1af)]),
            (this[_0x46982(0x30b)] = _0x2276d6[_0x46982(0x30b)] || 0x50),
            (this[_0x46982(0x279)] = _0x2276d6[_0x46982(0x279)] || 0x50),
            (this[_0x46982(0x2c9)] = _0x2276d6[_0x46982(0x2c9)] === null ? !![] : _0x2276d6[_0x46982(0x2c9)]),
            (this[_0x46982(0x234)] = _0x2276d6[_0x46982(0x234)] || _0x46982(0x291)),
            (this[_0x46982(0x238)] = _0x2276d6["AppFollow"] || 0x1f),
            (this["showPar"] = _0x2276d6[_0x46982(0x1b3)]),
            (this["rid"] = _0x2276d6[_0x46982(0x32d)] || 0x0),
            (this[_0x46982(0x2c6)] = typeof _0x2276d6[_0x46982(0x2c6)] !== _0x46982(0x214) && _0x2276d6[_0x46982(0x2c6)] !== null ? _0x2276d6[_0x46982(0x2c6)] : null),
            (this[_0x46982(0x24a)] = _0x2276d6[_0x46982(0x24a)] || ![]),
            (this["absolutePos"] = _0x2276d6["absolutePos"] || { left: 0x0, top: 0x0, fun: null }),
            (this[_0x46982(0x236)] = _0x2276d6[_0x46982(0x236)] || { one: 0.7, more: 0.3 }),
            (this["callbackFunc"] = _0x2276d6["callbackFunc"] || null),
            (this["callbackFun_cancel"] = _0x2276d6[_0x46982(0x1a4)] || null),
            (this[_0x46982(0x2ea)] = _0x2276d6[_0x46982(0x2ea)] || ![]),
            (this[_0x46982(0x1c1)] = _0x2276d6[_0x46982(0x1c1)] === null ? !![] : _0x2276d6[_0x46982(0x1c1)]),
            (this["ws"] = null),
            (this[_0x46982(0x21d)] = null),
            (this[_0x46982(0x23b)] = ![]),
            (this[_0x46982(0x345)] = {}),
            (this[_0x46982(0x32a)] = { scroll: 0x1, move: 0x2, visible: 0x4, resize: 0x8, zoom: 0x10 }),
            (this[_0x46982(0x268)] = null),
            (this[_0x46982(0x330)] = {}),
            (this["clientInfo"] = new Browser()),
            (this[_0x46982(0x33d)][_0x46982(0x1b5)] = !!_0x199729[_0x46982(0x278)] || "ActiveXObject" in _0x199729 ? !![] : ![]),
            (this[_0x46982(0x33d)][_0x46982(0x287)] = navigator["userAgent"]),
            (this[_0x46982(0x2ef)] = 0x1),
            (this[_0x46982(0x2b5)] = 0x1),
            (this[_0x46982(0x31b)] = 0x1),
            (this[_0x46982(0x34d)] = 0x0),
            (this["noReply"] = _0x46982(0x1d0)),
            (this["BlurFocus"] = 0x1),
            (this[_0x46982(0x1b2)] = null),
            (this["port_try_cnt"] = 0x0),
            (this[_0x46982(0x1db)] = 0x0),
            (this[_0x46982(0x1ef)] = null),
            (this["mousemoveOn"] = 0x1),
            (this[_0x46982(0x24b)] = null),
            (this[_0x46982(0x23e)] = this[_0x46982(0x33d)] && (this[_0x46982(0x33d)][_0x46982(0x2bb)] == "IE" || this["clientInfo"][_0x46982(0x2bb)] == _0x46982(0x2fc)) ? _0x199729[_0x46982(0x1e0)] : _0x199729[_0x46982(0x19b)]),
            (this[_0x46982(0x2b8)] = this[_0x46982(0x33d)] && (this[_0x46982(0x33d)]["browser"] == "IE" || this[_0x46982(0x33d)][_0x46982(0x2bb)] == _0x46982(0x2fc)) ? _0x199729[_0x46982(0x27d)] : _0x199729["screenY"]),
            (this[_0x46982(0x1cc)] = [null, null]),
            (this["mousemove_time"] = null),
            (this[_0x46982(0x25b)] = null),
            (this[_0x46982(0x2a5)] = [null, null]),
            (this["edge_menuHeight"] = [null, null]),
            this[_0x46982(0x317)](this["funcMouseout"]["bind"](this)),
            this[_0x46982(0x317)](this[_0x46982(0x2a0)][_0x46982(0x19e)](this));
        },
        start: function () {
          var _0x489ee8 = _0x2cba34;
          typeof Object[_0x489ee8(0x2c4)] != "function" &&
            (Object[_0x489ee8(0x2c4)] = function (_0x543f7c) {
              "use strict";
              var _0x2d0318 = _0x489ee8;
              if (_0x543f7c == null) throw new TypeError("Cannot\x20convert\x20undefined\x20or\x20null\x20to\x20object");
              _0x543f7c = Object(_0x543f7c);
              for (var _0x492e4e = 0x1; _0x492e4e < arguments[_0x2d0318(0x26b)]; _0x492e4e++) {
                var _0x3895c0 = arguments[_0x492e4e];
                if (_0x3895c0 != null)
                  for (var _0x44e055 in _0x3895c0) {
                    Object[_0x2d0318(0x22d)]["hasOwnProperty"]["call"](_0x3895c0, _0x44e055) && (_0x543f7c[_0x44e055] = _0x3895c0[_0x44e055]);
                  }
              }
              return _0x543f7c;
            });
          var _0x39c966 = [];
          for (k in this["EVENTTYPE"]) _0x39c966[_0x489ee8(0x244)](this[_0x489ee8(0x32a)][k]);
          for (k in _0x39c966) {
            this["eventType_Follow"][_0x39c966[k]] = this[_0x489ee8(0x2f2)](_0x39c966, _0x39c966[k]);
          }
          if (this[_0x489ee8(0x33d)]["os"] != _0x489ee8(0x2c3)) return console[_0x489ee8(0x2c8)](_0x489ee8(0x23a)), ![];
          this["clientInfo"][_0x489ee8(0x1b5)] && this["clientInfo"][_0x489ee8(0x2bb)] !== "IE" && console[_0x489ee8(0x2c8)](_0x489ee8(0x349));
          this[_0x489ee8(0x33d)][_0x489ee8(0x2bb)] == "IE" && this[_0x489ee8(0x33d)][_0x489ee8(0x1ae)] && Number(this["clientInfo"]["version"][_0x489ee8(0x2e1)](/[^\d]+/)[0x0]) <= 0x8 && console[_0x489ee8(0x2c8)]("<=IE8\x20not\x20Support\x20websocket");
          (this[_0x489ee8(0x2ef)] = this[_0x489ee8(0x242)]()), (this[_0x489ee8(0x336)] = this[_0x489ee8(0x228)][_0x489ee8(0x19e)](this)), this[_0x489ee8(0x258)](), this[_0x489ee8(0x26d)](), this["ListenBlurFocus"]();
          if (_0x199729[_0x489ee8(0x2f9)]) document[_0x489ee8(0x2a1)][_0x489ee8(0x2f9)]("mouseenter", this[_0x489ee8(0x2ff)][_0x489ee8(0x19e)](this), ![]);
          else _0x199729[_0x489ee8(0x1b1)] && document["body"][_0x489ee8(0x1b1)](_0x489ee8(0x296), this[_0x489ee8(0x2ff)][_0x489ee8(0x19e)](this));
          if (_0x199729[_0x489ee8(0x2f9)]) document[_0x489ee8(0x2a1)][_0x489ee8(0x2f9)]("mouseleave", this[_0x489ee8(0x348)]["bind"](this), ![]);
          else _0x199729[_0x489ee8(0x1b1)] && document[_0x489ee8(0x2a1)]["attachEvent"](_0x489ee8(0x28c), this[_0x489ee8(0x348)]["bind"](this));
          if (_0x199729["addEventListener"])
            _0x199729[_0x489ee8(0x2f9)](
              _0x489ee8(0x208),
              function () {
                var _0x4101bc = _0x489ee8;
                this[_0x4101bc(0x23d)]({}), this["ws"] && this["ws"][_0x4101bc(0x29d)]();
              }["bind"](this),
              ![]
            );
          else
            _0x199729["attachEvent"] &&
              _0x199729[_0x489ee8(0x1b1)](
                "onbeforeunload",
                function () {
                  var _0x39c3e3 = _0x489ee8;
                  this[_0x39c3e3(0x23d)]({}), this["ws"] && this["ws"]["close"]();
                }[_0x489ee8(0x19e)](this)
              );
          if (_0x199729[_0x489ee8(0x2f9)]) _0x199729[_0x489ee8(0x2f9)](_0x489ee8(0x201), this[_0x489ee8(0x324)][_0x489ee8(0x19e)](this), ![]);
          else _0x199729[_0x489ee8(0x1b1)] && _0x199729[_0x489ee8(0x1b1)]("onscroll", this[_0x489ee8(0x324)][_0x489ee8(0x19e)](this));
          if (_0x199729["addEventListener"]) _0x199729[_0x489ee8(0x2f9)](_0x489ee8(0x303), this[_0x489ee8(0x334)][_0x489ee8(0x19e)](this), ![]);
          else _0x199729["attachEvent"] && _0x199729[_0x489ee8(0x1b1)](_0x489ee8(0x1dd), this[_0x489ee8(0x334)]["bind"](this));
        },
        regEventScroll: function () {
          var _0xb9f2e6 = _0x2cba34;
          this[_0xb9f2e6(0x2e3)] == 0x2 ? this["throttle"](this[_0xb9f2e6(0x34b)]["bind"](this), this[_0xb9f2e6(0x25d)], this["debounce_throttle_stamp"])() : this["debounce"](this[_0xb9f2e6(0x34b)][_0xb9f2e6(0x19e)](this), this[_0xb9f2e6(0x25d)], this[_0xb9f2e6(0x1af)])();
        },
        regEventResize: function () {
          var _0x3111a1 = _0x2cba34,
            _0x16da37 = this[_0x3111a1(0x242)](),
            _0x2414d6 = 0x1;
          this["curRatio"] != _0x16da37 && ((_0x2414d6 = _0x16da37 / this[_0x3111a1(0x2ef)]), (this[_0x3111a1(0x2ef)] = _0x16da37));
          var _0x5d3db9 = this["EVENTTYPE"][_0x3111a1(0x303)];
          if (_0x2414d6 != 0x1) _0x5d3db9 = this[_0x3111a1(0x32a)][_0x3111a1(0x1ad)];
          if (this["resizeDelay_time"]) clearTimeout(this[_0x3111a1(0x1b2)]);
          this["resizeDelay_time"] = setTimeout(
            function () {
              this["AppResize"]("resize", {}, 0x1, _0x5d3db9);
            }[_0x3111a1(0x19e)](this),
            this[_0x3111a1(0x279)]
          );
        },
        getEmbedwindow: function () {
          var _0x42533d = _0x2cba34;
          if (!this[_0x42533d(0x322)]) {
            if (typeof this[_0x42533d(0x2c6)] == "string" && !this[_0x42533d(0x2c6)][_0x42533d(0x18d)](/\.getElement|window\./)) (this[_0x42533d(0x21d)] = _0x199729[_0x42533d(0x1bb)][_0x42533d(0x300)](this[_0x42533d(0x2c6)])), (this[_0x42533d(0x322)] = this[_0x42533d(0x21d)][_0x42533d(0x1e6)]);
            else {
              if (typeof this[_0x42533d(0x2c6)] == _0x42533d(0x1ab)) (this["iframeEle"] = _0x199729["document"][_0x42533d(0x18e)](_0x42533d(0x2ac))[this[_0x42533d(0x2c6)]]), (this[_0x42533d(0x322)] = this[_0x42533d(0x21d)]["contentWindow"]);
              else
                typeof this[_0x42533d(0x2c6)] == _0x42533d(0x1f0) && this[_0x42533d(0x2c6)][_0x42533d(0x18d)](/\.getElement|window\./)
                  ? ((this[_0x42533d(0x21d)] = eval(this[_0x42533d(0x2c6)])), this[_0x42533d(0x21d)] ? (this["embedWindow"] = this[_0x42533d(0x21d)][_0x42533d(0x1e6)]) : console[_0x42533d(0x2c8)]("iframe\x20" + this[_0x42533d(0x2c6)] + _0x42533d(0x30a)))
                  : (this[_0x42533d(0x322)] = _0x199729);
            }
          }
        },
        addOnEvent: function (_0x22691f, _0x417b18) {
          var _0x501b6e = _0x2cba34,
            _0x2ba416 = _0x199729[_0x22691f];
          typeof _0x199729[_0x22691f] != _0x501b6e(0x31a)
            ? (_0x199729[_0x22691f] = _0x417b18)
            : (_0x199729[_0x22691f] = function () {
                _0x2ba416 && _0x2ba416(), _0x417b18();
              });
        },
        afteronLoad: function (_0x1c9f06) {
          var _0x3a9b00 = _0x2cba34;
          if (_0x199729[_0x3a9b00(0x2f9)]) document[_0x3a9b00(0x2f9)](_0x3a9b00(0x1dc), _0x1c9f06["bind"](this), ![]);
          else {
            if (_0x199729[_0x3a9b00(0x1b1)]) document[_0x3a9b00(0x1b1)](_0x3a9b00(0x252), _0x1c9f06["bind"](this));
          }
        },
        AddReady: function (_0x318eb3) {
          var _0x4446b5 = _0x2cba34;
          if (document["addEventListener"])
            document[_0x4446b5(0x2f9)](
              _0x4446b5(0x1f5),
              function () {
                var _0x8d41ef = _0x4446b5;
                document[_0x8d41ef(0x305)](_0x8d41ef(0x1f5), arguments[_0x8d41ef(0x190)], ![]), _0x318eb3();
              },
              ![]
            );
          else
            document[_0x4446b5(0x1b1)] &&
              document["attachEvent"](_0x4446b5(0x289), function () {
                var _0x4188c9 = _0x4446b5;
                document[_0x4188c9(0x1e4)] == _0x4188c9(0x2e4) && (document[_0x4188c9(0x1cf)](_0x4188c9(0x289), arguments[_0x4188c9(0x190)]), _0x318eb3());
              });
        },
        txt2code: function (_0x2a05d7, _0x5ac14c) {
          var _0x3eead6 = _0x2cba34;
          return (_0x5ac14c = _0x5ac14c | 0x1), _0x2a05d7[_0x3eead6(0x1fd)]()[_0x3eead6(0x2e1)]("\x0a")["slice"](_0x5ac14c, -_0x5ac14c)[_0x3eead6(0x1c3)]("\x0a") + "\x0a";
        },
        txt2code_Vue: function (_0x4ecf9e) {
          var _0x316469 = _0x2cba34;
          return _0x4ecf9e[_0x316469(0x1fd)]()["split"]("\x0a")[_0x316469(0x2d3)](0x2, -0x2)[_0x316469(0x1c3)]("\x0a") + "\x0a";
        },
        getUrlPar: function (_0x3c3042, _0x660b4e) {
          var _0x2cc0dd = _0x2cba34,
            _0x337d13 = _0x3c3042[_0x2cc0dd(0x239)](_0x3c3042[_0x2cc0dd(0x2da)]("?") + 0x1, _0x3c3042[_0x2cc0dd(0x26b)])[_0x2cc0dd(0x2e1)]("&"),
            _0x4090b2 = {};
          for (i = 0x0; (j = _0x337d13[i]); i++) {
            _0x4090b2[j[_0x2cc0dd(0x239)](0x0, j[_0x2cc0dd(0x2da)]("="))["toLowerCase"]()] = j[_0x2cc0dd(0x239)](j[_0x2cc0dd(0x2da)]("=") + 0x1, j[_0x2cc0dd(0x26b)]);
          }
          var _0xbdd817 = _0x4090b2[_0x660b4e[_0x2cc0dd(0x253)]()];
          return typeof _0xbdd817 == _0x2cc0dd(0x214) ? "" : _0xbdd817;
        },
        sleep: function (_0x473103) {
          var _0x49fab1 = _0x2cba34,
            _0x32dc5d = new Date()[_0x49fab1(0x1ee)]() + parseInt(_0x473103, 0xa);
          while (new Date()[_0x49fab1(0x1ee)]() < _0x32dc5d) {}
        },
        unGzip: function (_0x4d4d09) {
          var _0x67f11e = _0x2cba34,
            _0x161cfa = pako["ungzip"](_0x4d4d09, { to: _0x67f11e(0x1f0) });
          return _0x161cfa;
        },
        Gzip: function (_0x1a711d, _0x328fa7, _0x2315fa) {
          var _0x1905ae = _0x2cba34,
            _0x3d8cc6 = pako[_0x1905ae(0x26e)](_0x1a711d, { to: _0x1905ae(0x1f0), level: 0x6, windowBits: 0xf });
          return _0x3d8cc6;
        },
        tagSum: function (_0xe414bb, _0x3b3aab) {
          var _0x4e1193 = 0x0,
            _0x9c1f4e = ![];
          for (var _0x57d9f1 = _0xe414bb["length"] - 0x1; _0x57d9f1 >= 0x0; _0x57d9f1--) {
            if (_0xe414bb[_0x57d9f1] == _0x3b3aab) _0x9c1f4e = !![];
            _0x4e1193 += _0xe414bb[_0x57d9f1];
          }
          return _0x9c1f4e ? _0x4e1193 : 0x0;
        },
        sumComposeTag: function (_0x3be36d, _0x190e52) {
          var _0x117656 = _0x2cba34;
          for (var _0x12692a = []; _0x12692a["push"]([]) < _0x3be36d[_0x117656(0x26b)]; );
          var _0x193ba3 = Math[_0x117656(0x241)](0x2, _0x3be36d[_0x117656(0x26b)]) - 0x1;
          for (var _0x2dd91e = 0x1; _0x2dd91e <= _0x193ba3; _0x2dd91e++) {
            var _0x3a15a6 = [];
            for (var _0x1d3947 = _0x2dd91e, _0x1c34af = 0x0; _0x1d3947 > 0x0; _0x1d3947 >>= 0x1, _0x1c34af++) if (_0x1d3947 & (0x1 == 0x1)) _0x3a15a6[_0x117656(0x244)](_0x3be36d[_0x1c34af]);
            var _0x1c671b = this["tagSum"](_0x3a15a6, _0x190e52);
            if (_0x1c671b) _0x12692a[_0x3a15a6[_0x117656(0x26b)] - 0x1]["push"](_0x1c671b);
          }
          var _0x54f466 = [];
          for (_0x1c34af in _0x12692a) {
            _0x54f466 = _0x54f466[_0x117656(0x1f6)](_0x12692a[_0x1c34af]);
          }
          return (
            (_0x54f466 = _0x54f466[_0x117656(0x1c4)](function (_0x580a4f, _0x4e3cba) {
              return _0x580a4f - _0x4e3cba;
            })["filter"](function (_0x36a99a, _0x193174, _0xe6b66f) {
              var _0x4f3c82 = _0x117656;
              return _0xe6b66f[_0x4f3c82(0x2da)](_0x36a99a) === _0x193174;
            })),
            _0x54f466
          );
        },
        next_wsUrlPort: function (_0x5066b4) {
          var _0x552556 = _0x2cba34;
          if (!this[_0x552556(0x1ef)] && _0x5066b4[_0x552556(0x2da)](_0x552556(0x2c1)) > -0x1) this[_0x552556(0x1ef)] = typeof this[_0x552556(0x342)] == _0x552556(0x1ab) ? [this[_0x552556(0x342)]] : this[_0x552556(0x342)];
          else !this[_0x552556(0x1ef)] && _0x5066b4[_0x552556(0x2da)]("wss://") > -0x1 && (this[_0x552556(0x1ef)] = typeof this[_0x552556(0x1fc)] == _0x552556(0x1ab) ? [this[_0x552556(0x1fc)]] : this["wss_port"]);
          var _0xb4de7d = this["new_ports"][_0x552556(0x2da)](Number(_0x5066b4["match"](/:(\d+)/)[0x1]));
          if (((_0xb4de7d == -0x1 && this[_0x552556(0x1db)]) || _0xb4de7d + 0x1 == this[_0x552556(0x1ef)][_0x552556(0x26b)]) && this[_0x552556(0x206)] < this[_0x552556(0x1c8)]) {
            var _0x36139a = (Number(_0x5066b4[_0x552556(0x18d)](/:(\d+)/)[0x1]) + 0x1) % 0x10000;
            if (_0x36139a < 0x7d0) _0x36139a = 0x7d0;
            while (this[_0x552556(0x1a3)]["indexOf"](_0x36139a) > -0x1) {
              _0x36139a++;
            }
            (_0x5066b4 = _0x5066b4["replace"](/:(\d+)/, ":" + _0x36139a)), (this[_0x552556(0x206)] += 0x1);
          } else {
            if ((_0xb4de7d == -0x1 && !this[_0x552556(0x1db)]) || (_0xb4de7d >= 0x0 && _0xb4de7d + 0x1 < this[_0x552556(0x1ef)]["length"])) (this["port_default_mark"] = 0x1), (_0x5066b4 = _0x5066b4[_0x552556(0x2c5)](/:(\d+)/, ":" + this["new_ports"][_0xb4de7d + 0x1]));
            else {
              if (_0xb4de7d == -0x1 && this[_0x552556(0x206)] == this["port_try_Maxcnt"] && !this[_0x552556(0x328)]) {
                this[_0x552556(0x328)] = 0x1;
                if (this[_0x552556(0x216)] && !this[_0x552556(0x1aa)]) {
                  (this[_0x552556(0x1aa)] = 0x1), this["clickProtocol"]();
                  return;
                } else {
                  this["reStartInit"]();
                  return;
                }
              } else return this[_0x552556(0x2a8)](), null;
            }
          }
          this[_0x552556(0x1b6)](_0x5066b4);
        },
        noService: function () {
          var _0x28effb = _0x2cba34;
          if (typeof this["noServiceFun"] == _0x28effb(0x31a)) this["noServiceFun"]();
          console[_0x28effb(0x2c8)](_0x28effb(0x337) + this[_0x28effb(0x2a6)] + _0x28effb(0x1d6));
        },
        clickProtocol: function () {
          var _0x16fa42 = _0x2cba34;
          this["protocolCheck"](
            this["URLProtocol"]["indexOf"](_0x16fa42(0x326)) < 0x0 ? this[_0x16fa42(0x216)] + _0x16fa42(0x326) : this[_0x16fa42(0x216)],
            function () {
              var _0x4e08a6 = _0x16fa42;
              console[_0x4e08a6(0x2c8)](_0x4e08a6(0x1d7) + this[_0x4e08a6(0x216)] + "\x20私有协议是否注册。");
            }[_0x16fa42(0x19e)](this),
            function () {
              setTimeout(
                function () {
                  var _0x3262ca = _0x4c93;
                  this[_0x3262ca(0x29e)]();
                }["bind"](this),
                0x9c4
              );
            }["bind"](this)
          );
        },
        reStartInit: function () {
          var _0x4314c5 = _0x2cba34;
          (this[_0x4314c5(0x1db)] = 0x1), (this[_0x4314c5(0x206)] = 0x0), this[_0x4314c5(0x2b2)](0x9c4), this[_0x4314c5(0x1b6)](this["initSet"][_0x4314c5(0x316)]);
        },
        wsOpenFun: function () {
          var _0x34eb2b = _0x2cba34;
          (this["initSet"]["clientInfo"] = this[_0x34eb2b(0x33d)]),
            typeof this[_0x34eb2b(0x275)][_0x34eb2b(0x250)] == _0x34eb2b(0x214) && (this[_0x34eb2b(0x2fb)](this["initSet"][_0x34eb2b(0x191)], "flag") ? (this["initSet"][_0x34eb2b(0x250)] = Number(this[_0x34eb2b(0x2fb)](this[_0x34eb2b(0x275)][_0x34eb2b(0x191)], _0x34eb2b(0x250)))) : (this[_0x34eb2b(0x275)]["flag"] = 0x0)),
            (this["initSet"][_0x34eb2b(0x25b)] = this["enterWindow"]),
            (this[_0x34eb2b(0x33d)][_0x34eb2b(0x19b)] = _0x199729[_0x34eb2b(0x19b)]),
            (this["clientInfo"][_0x34eb2b(0x285)] = _0x199729[_0x34eb2b(0x285)]),
            (this[_0x34eb2b(0x33d)][_0x34eb2b(0x267)] = _0x199729[_0x34eb2b(0x286)][_0x34eb2b(0x267)]),
            (this["clientInfo"]["height"] = _0x199729["screen"]["height"]),
            (this[_0x34eb2b(0x33d)][_0x34eb2b(0x2bb)] == _0x34eb2b(0x274) || this[_0x34eb2b(0x33d)][_0x34eb2b(0x2bb)] == _0x34eb2b(0x2bd)) && (this["initSet"][_0x34eb2b(0x1c2)] = 0xbb8),
            this[_0x34eb2b(0x2c2)](this["initSet"]);
        },
        wsMessageFun: function (_0x15dde0) {
          var _0x4ff9a9 = _0x2cba34;
          if (!(!this["InitClientAuth"] || typeof _0x15dde0[_0x4ff9a9(0x2b7)] !== _0x4ff9a9(0x214))) return;
          if (_0x15dde0[_0x4ff9a9(0x1c0)] == 0xc8 && _0x15dde0[_0x4ff9a9(0x2a6)] == this[_0x4ff9a9(0x2a6)]) {
            this["SvrOpenMark"] = !![];
            if (this["protectClear"] && this[_0x4ff9a9(0x275)]["clientKey"]) this[_0x4ff9a9(0x275)][_0x4ff9a9(0x1ca)] = "*";
            if (this[_0x4ff9a9(0x1f4)] && this[_0x4ff9a9(0x275)][_0x4ff9a9(0x1c6)]) this[_0x4ff9a9(0x275)]["OTP"] = "*";
          } else {
            if (!this[_0x4ff9a9(0x23b)] && _0x15dde0[_0x4ff9a9(0x307)] == _0x4ff9a9(0x28f)) {
              this["ws"] && this["ws"]["close"]();
              if (_0x15dde0["newOpen"] == 0x1 && !this[_0x4ff9a9(0x1aa)]) {
                (this[_0x4ff9a9(0x1aa)] = 0x1), this["clickProtocol"]();
                return;
              }
              this[_0x4ff9a9(0x2cd)](this[_0x4ff9a9(0x275)][_0x4ff9a9(0x191)]);
              return;
            } else {
              if (!this[_0x4ff9a9(0x23b)]) {
                this["ws"] && this["ws"]["close"]();
                this["next_wsUrlPort"](this[_0x4ff9a9(0x275)][_0x4ff9a9(0x191)]);
                return;
              }
            }
          }
          if (_0x15dde0[_0x4ff9a9(0x2a6)] == this["service"] && typeof _0x15dde0[_0x4ff9a9(0x302)] !== _0x4ff9a9(0x214)) {
            if (_0x15dde0["clientDetect"] !== undefined) {
              this[_0x4ff9a9(0x33e)] = _0x15dde0[_0x4ff9a9(0x33e)];
              if (this[_0x4ff9a9(0x33e)][_0x4ff9a9(0x259)] !== undefined) this[_0x4ff9a9(0x2b5)] = this[_0x4ff9a9(0x33e)]["DpiScale"];
              delete _0x15dde0[_0x4ff9a9(0x33e)];
            }
            this[_0x4ff9a9(0x25f)](), (this[_0x4ff9a9(0x20f)] = 0x1);
          }
          if (_0x15dde0[_0x4ff9a9(0x2b7)] == 0x1 && _0x15dde0[_0x4ff9a9(0x2a6)] == this["service"] && this[_0x4ff9a9(0x345)][_0x15dde0[_0x4ff9a9(0x1d8)]]) (this["AppObj"][_0x15dde0[_0x4ff9a9(0x1d8)]][_0x4ff9a9(0x2b7)] = 0x1), (this[_0x4ff9a9(0x345)][_0x15dde0[_0x4ff9a9(0x1d8)]][_0x4ff9a9(0x288)] = !_0x15dde0[_0x4ff9a9(0x1a8)]);
          else _0x15dde0[_0x4ff9a9(0x2b7)] == 0x0 && _0x15dde0[_0x4ff9a9(0x2a6)] == this[_0x4ff9a9(0x2a6)] && this[_0x4ff9a9(0x345)][_0x15dde0[_0x4ff9a9(0x1d8)]] && (this[_0x4ff9a9(0x345)][_0x15dde0[_0x4ff9a9(0x1d8)]][_0x4ff9a9(0x2b7)] = 0x0);
        },
        wsErrorFun: function () {
          var _0x5b08bc = _0x2cba34;
          this["ws"] && this["ws"]["close"](), (this[_0x5b08bc(0x23b)] = ![]), this[_0x5b08bc(0x2cd)](this["initSet"][_0x5b08bc(0x191)]);
        },
        wsCloseFun: function () {
          var _0x2e3cad = _0x2cba34;
          this[_0x2e3cad(0x23b)] = ![];
          for (key in this[_0x2e3cad(0x345)]) {
            this[_0x2e3cad(0x345)][key][_0x2e3cad(0x2b7)] = 0x0;
          }
        },
        initAppWs: function (_0x4af3b9, _0xbd8abf) {
          var _0x2922b2 = _0x2cba34;
          this[_0x2922b2(0x1b6)](_0x4af3b9, _0xbd8abf);
        },
        InitApp: function (_0x25b2d2, _0x5181a8) {
          var _0x65dfbe = _0x2cba34;
          if (!!_0x5181a8 && typeof _0x5181a8 == _0x65dfbe(0x227)) this[_0x65dfbe(0x2e8)] = _0x5181a8;
          if (_0x25b2d2 && typeof _0x25b2d2 == _0x65dfbe(0x1f0)) this[_0x65dfbe(0x275)][_0x65dfbe(0x191)] = _0x25b2d2;
          if (!this[_0x65dfbe(0x275)]["wsUrl"]) return console[_0x65dfbe(0x2c8)](_0x65dfbe(0x2ae)), ![];
          else {
            if (!this[_0x65dfbe(0x275)][_0x65dfbe(0x316)]) this["initSet"][_0x65dfbe(0x316)] = this[_0x65dfbe(0x275)][_0x65dfbe(0x191)];
          }
          try {
            (this["ws"] = new WebSocket(this["initSet"][_0x65dfbe(0x191)])),
              (this["ws"][_0x65dfbe(0x203)] = function (_0x29d866) {
                var _0x467908 = _0x65dfbe;
                this[_0x467908(0x2dd)]();
              }["bind"](this)),
              (this["ws"][_0x65dfbe(0x2b9)] = function (_0x1bf177) {
                var _0xf551bf = _0x65dfbe,
                  _0x47e505 = _0x1bf177[_0xf551bf(0x260)],
                  _0x47a761 = null,
                  _0x7bb859 = 0x0;
                try {
                  (this[_0xf551bf(0x275)][_0xf551bf(0x250)] == 0x2 || this["initSet"][_0xf551bf(0x250)] == 0x3) && (_0x47e505 = this[_0xf551bf(0x1f2)](atob(_0x47e505)));
                } catch (_0x274842) {
                  console["log"](_0xf551bf(0x1b8) + _0x47e505 + "\x20\x20" + _0x274842);
                }
                if (typeof _0x47e505 == "string")
                  try {
                    _0x47a761 = JSON[_0xf551bf(0x28d)](_0x47e505);
                    if (typeof _0x47a761 == _0xf551bf(0x227) && _0x47a761) {
                      _0x7bb859 = 0x1;
                      if (!(_0x47a761[_0xf551bf(0x1e9)] && _0x47a761[_0xf551bf(0x1e9)] == _0xf551bf(0x192))) {
                        if (this[_0xf551bf(0x275)]["flag"] % 0x2 == 0x0 || (this[_0xf551bf(0x275)][_0xf551bf(0x250)] % 0x2 == 0x1 && !(this["noTip_ServerReceiveMsg"] && _0x47a761[_0xf551bf(0x1e9)] == _0xf551bf(0x1ac) && _0x47a761[_0xf551bf(0x307)] == 0x0))) {
                          if (!(_0x47a761[_0xf551bf(0x1e9)] == _0xf551bf(0x1ac) && this[_0xf551bf(0x1c1)] && typeof _0x47a761[_0xf551bf(0x333)] == _0xf551bf(0x1f0) && _0x47a761[_0xf551bf(0x333)][_0xf551bf(0x18d)](/("emit":"show")|("emit":"resize")|("emit":"move")|("emit":"hide")/i))) {
                            !!this[_0xf551bf(0x2e8)] && this["callFunc"](_0x47a761, this[_0xf551bf(0x2e8)]);
                            if ((this[_0xf551bf(0x275)][_0xf551bf(0x250)] % 0x2 == 0x0 && !this[_0xf551bf(0x275)][_0xf551bf(0x2d1)] && (_0x47a761[_0xf551bf(0x20e)] || _0x47a761[_0xf551bf(0x1e9)])) || this[_0xf551bf(0x275)]["flag"] % 0x2 == 0x1) 
														console[_0xf551bf(0x2c8)](_0x47a761);
														if(window.getData) window.getData(_0x47a761)
                          }
                        }
                      }
                    }
                  } catch (_0x46d666) {
                    console[_0xf551bf(0x2c8)]("error：JSON\x20" + _0x47e505 + "\x20\x20" + _0x46d666);
                  }
                this[_0xf551bf(0x1ff)](_0x47a761);
                if (!this["SvrOpenMark"]) return;
                if (!_0x7bb859) return;
                if (_0x47a761[_0xf551bf(0x32d)] && _0x47a761[_0xf551bf(0x260)]) {
                  if (this["JsOutData"]) this["JsOutData"][_0x47a761[_0xf551bf(0x32d)]] = _0x47a761;
                }
                this[_0xf551bf(0x275)][_0xf551bf(0x250)] % 0x2 == 0x1 && ((AppEmbedOut = document[_0xf551bf(0x300)]("AppEmbedOut")), AppEmbedOut && !_0x47a761[_0xf551bf(0x1e9)] && (AppEmbedOut["innerHTML"] = _0x47e505 + _0xf551bf(0x292) + AppEmbedOut[_0xf551bf(0x18b)]));
              }[_0x65dfbe(0x19e)](this)),
              (this["ws"][_0x65dfbe(0x2d2)] = function (_0x520514) {
                var _0x157c8e = _0x65dfbe;
                this[_0x157c8e(0x224)]();
              }["bind"](this)),
              (this["ws"][_0x65dfbe(0x2d9)] = function (_0x81d18e) {
                var _0x461e27 = _0x65dfbe;
                this[_0x461e27(0x28a)]();
              }[_0x65dfbe(0x19e)](this));
          } catch (_0x12811c) {
            console["log"](_0x12811c[_0x65dfbe(0x312)]);
          }
          return !![];
        },
        callFunc: function (_0x17b470, _0x3d622a) {
          var _0x40fc0a = _0x2cba34;
          if (this["callbackFun_cancel"]) return;
          if (_0x3d622a == null || _0x17b470 == null || typeof _0x17b470 !== _0x40fc0a(0x227) || typeof _0x3d622a !== _0x40fc0a(0x227)) return;
          if (_0x3d622a[_0x40fc0a(0x1e2)] != Array) _0x3d622a = [_0x3d622a];
          var _0x353e71 = ![];
          for (var _0x2f1b39 = 0x0; _0x2f1b39 < _0x3d622a["length"]; _0x2f1b39++) {
            if (Object[_0x40fc0a(0x22d)][_0x40fc0a(0x1fd)][_0x40fc0a(0x20c)](_0x3d622a[_0x2f1b39][_0x40fc0a(0x295)]) != _0x40fc0a(0x19d)) continue;
            _0x353e71 = !![];
            for (var _0x5afc81 in _0x3d622a[_0x2f1b39][_0x40fc0a(0x295)]) {
              _0x3d622a[_0x2f1b39][_0x40fc0a(0x295)][_0x5afc81] != _0x17b470[_0x5afc81] && (_0x353e71 = ![]);
            }
            if (Object[_0x40fc0a(0x22d)][_0x40fc0a(0x1fd)]["call"](_0x3d622a[_0x2f1b39]["neq"]) == _0x40fc0a(0x19d))
              for (var _0x5afc81 in _0x3d622a[_0x2f1b39]["neq"]) {
                _0x3d622a[_0x2f1b39][_0x40fc0a(0x31e)][_0x5afc81] == _0x17b470[_0x5afc81] && (_0x353e71 = ![]);
              }
            _0x353e71 && typeof _0x3d622a[_0x2f1b39]["func"] == _0x40fc0a(0x31a) && (_0x3d622a[_0x2f1b39]["inPar"] ? _0x3d622a[_0x2f1b39]["func"](_0x17b470, _0x3d622a[_0x2f1b39]["inPar"]) : _0x3d622a[_0x2f1b39][_0x40fc0a(0x240)](_0x17b470));
          }
        },
        OpenApp: function (_0x4b748e, _0x25ab51, _0x4d2bcc) {
          var _0x37f9d3 = _0x2cba34,
            _0x25ab51 = _0x25ab51 || this["emitInterval"];
          if (!this["ws"] || !_0x4b748e) return;
          if (typeof _0x4b748e == _0x37f9d3(0x227) && _0x4b748e[_0x37f9d3(0x1e2)] != Array) _0x4b748e = [_0x4b748e];
          var _0x4592bb = 0x0;
          for (var _0x5a7ae3 = 0x0; _0x5a7ae3 < _0x4b748e[_0x37f9d3(0x26b)]; _0x5a7ae3++) {
            if (_0x4b748e[_0x5a7ae3][_0x37f9d3(0x301)] == _0x37f9d3(0x20b) || _0x4b748e[_0x5a7ae3][_0x37f9d3(0x301)] == _0x37f9d3(0x1da)) {
              if (!_0x4b748e[_0x5a7ae3][_0x37f9d3(0x270)]) return;
              _0x4b748e[_0x5a7ae3][_0x37f9d3(0x1d8)] == "autoAdd" ? (_0x4592bb = Object["keys"](this[_0x37f9d3(0x345)])[_0x37f9d3(0x26b)]) : (_0x4592bb = 0x0);
              if (typeof _0x4b748e[_0x5a7ae3][_0x37f9d3(0x1d8)] == _0x37f9d3(0x214) || _0x4b748e[_0x5a7ae3][_0x37f9d3(0x1d8)] == _0x37f9d3(0x251)) _0x4b748e[_0x5a7ae3][_0x37f9d3(0x1d8)] = (_0x4592bb ? _0x4592bb : _0x5a7ae3) + 0x1;
              this["AppObj"][_0x4b748e[_0x5a7ae3][_0x37f9d3(0x1d8)]] && this[_0x37f9d3(0x345)][_0x4b748e[_0x5a7ae3]["AppId"]]["AppStatus"] && !this[_0x37f9d3(0x345)][_0x4b748e[_0x5a7ae3]["AppId"]][_0x37f9d3(0x2aa)] && (this[_0x37f9d3(0x2c2)]({ emit: _0x37f9d3(0x29d), Obj: _0x4b748e[_0x5a7ae3][_0x37f9d3(0x270)], AppId: _0x4b748e[_0x5a7ae3][_0x37f9d3(0x1d8)] }), this[_0x37f9d3(0x2b2)](0xc8));
              if (typeof _0x4b748e[_0x5a7ae3]["AppShow"] == "undefined") _0x4b748e[_0x5a7ae3]["AppShow"] = !![];
              if (typeof _0x4b748e[_0x5a7ae3]["AppFollow"] == _0x37f9d3(0x214) && _0x4b748e[_0x5a7ae3]["AppShow"]) _0x4b748e[_0x5a7ae3][_0x37f9d3(0x238)] = this["AppFollow"];
              if (typeof _0x4b748e[_0x5a7ae3][_0x37f9d3(0x1a8)] == _0x37f9d3(0x214)) _0x4b748e[_0x5a7ae3][_0x37f9d3(0x1a8)] = this[_0x37f9d3(0x1a8)];
              this[_0x37f9d3(0x345)][_0x4b748e[_0x5a7ae3][_0x37f9d3(0x1d8)]] = {
                Obj: _0x4b748e[_0x5a7ae3][_0x37f9d3(0x270)],
                AppId: _0x4b748e[_0x5a7ae3][_0x37f9d3(0x1d8)],
                AppShow: _0x4b748e[_0x5a7ae3][_0x37f9d3(0x23c)],
                AppFollow: _0x4b748e[_0x5a7ae3][_0x37f9d3(0x238)],
                pos: _0x4b748e[_0x5a7ae3][_0x37f9d3(0x1a5)],
                elementId: _0x4b748e[_0x5a7ae3][_0x37f9d3(0x234)] || (_0x4b748e[_0x5a7ae3][_0x37f9d3(0x23c)] ? this["elementId"] + _0x4b748e[_0x5a7ae3][_0x37f9d3(0x1d8)] : null),
                AppStatus: typeof _0x4b748e[_0x5a7ae3][_0x37f9d3(0x2b7)] == _0x37f9d3(0x214) ? 0x0 : _0x4b748e[_0x5a7ae3][_0x37f9d3(0x2b7)],
                AppRuntime: typeof _0x4b748e[_0x5a7ae3][_0x37f9d3(0x2aa)] == _0x37f9d3(0x214) ? 0x0 : _0x4b748e[_0x5a7ae3][_0x37f9d3(0x2aa)],
              };
              if (typeof _0x4b748e[_0x5a7ae3][_0x37f9d3(0x30f)] == "object" && _0x4b748e[_0x5a7ae3][_0x37f9d3(0x30f)][_0x37f9d3(0x1e2)] == Array) this[_0x37f9d3(0x345)][_0x4b748e[_0x5a7ae3][_0x37f9d3(0x1d8)]][_0x37f9d3(0x30f)] = _0x4b748e[_0x5a7ae3][_0x37f9d3(0x30f)];
            }
            if (_0x4b748e[_0x5a7ae3][_0x37f9d3(0x301)] == "close") {
              if (typeof _0x4b748e[_0x5a7ae3][_0x37f9d3(0x1d8)] == _0x37f9d3(0x214)) _0x4b748e[_0x5a7ae3][_0x37f9d3(0x1d8)] = _0x5a7ae3 + 0x1;
            }
          }
          !_0x4d2bcc ? this[_0x37f9d3(0x2c2)](_0x4b748e, null, null, _0x25ab51) : this[_0x37f9d3(0x254)](_0x4b748e);
        },
        OpenApp_sync: function (_0x280d53) {
          var _0x11390f = _0x2cba34;
          this[_0x11390f(0x2ad)](_0x280d53, null, 0x1);
        },
        Emit_wsSend: function (_0x107a09, _0x94526f) {
          var _0x3b9e75 = _0x2cba34,
            _0x25b145;
          (typeof _0x107a09[_0x3b9e75(0x32d)] == _0x3b9e75(0x214) || _0x107a09[_0x3b9e75(0x32d)] == null || (_0x107a09[_0x3b9e75(0x32d)] > 0x0 && _0x107a09[_0x3b9e75(0x32d)] <= this[_0x3b9e75(0x32d)])) && (_0x107a09[_0x3b9e75(0x32d)] = this[_0x3b9e75(0x32d)]++),
            (_0x25b145 = JSON["stringify"](_0x107a09)),
            (this[_0x3b9e75(0x275)][_0x3b9e75(0x250)] == 0x2 || this[_0x3b9e75(0x275)][_0x3b9e75(0x250)] == 0x3 || _0x94526f) && (_0x25b145 = btoa(this["Gzip"](_0x25b145))),
            this["ws"] && this["ws"][_0x3b9e75(0x1e4)] == 0x1 && _0x25b145 && this["ws"][_0x3b9e75(0x299)](_0x25b145);
        },
        EmitReq_PIP: function (_0x3bce55, _0x3f561c, _0x30bd34, _0x15cd5d) {
          var _0x52837e = _0x2cba34;
          if (!_0x3bce55) return;
          _0x15cd5d = _0x15cd5d || this[_0x52837e(0x2e7)];
          if (typeof _0x3bce55 == "object" && _0x3bce55[_0x52837e(0x1e2)] == Array) {
            for (var _0x27fcaf = 0x0; _0x27fcaf < _0x3bce55[_0x52837e(0x26b)]; _0x27fcaf++) {
              setTimeout(
                function (_0x53b77f) {
                  var _0x11073e = _0x52837e;
                  this[_0x11073e(0x2c2)](_0x53b77f);
                }[_0x52837e(0x19e)](this),
                _0x15cd5d * _0x27fcaf,
                _0x3bce55[_0x27fcaf]
              );
            }
            return;
          }
          if (_0x3f561c)
            for (id in this[_0x52837e(0x345)]) {
              if (typeof _0x3f561c != _0x52837e(0x227) && _0x3f561c != id) continue;
              var _0xd3e431 = Object[_0x52837e(0x2c4)]({}, _0x3bce55, this["AppObj"][id]);
              if ((_0x30bd34 == 0x1 || _0x3bce55[_0x52837e(0x1a5)] == 0x1) && _0xd3e431[_0x52837e(0x234)]) _0xd3e431[_0x52837e(0x1a5)] = this[_0x52837e(0x2b4)](id)["pos"];
              else (_0x30bd34 == -0x1 || _0x3bce55[_0x52837e(0x1a5)] == -0x1) && (_0xd3e431["pos"] = null);
              this[_0x52837e(0x263)](_0xd3e431);
            }
          else {
            if ((_0x30bd34 == 0x1 || _0x3bce55["pos"] == 0x1) && _0x3bce55[_0x52837e(0x1d8)] && this[_0x52837e(0x345)][_0x3bce55[_0x52837e(0x1d8)]][_0x52837e(0x234)]) _0x3bce55[_0x52837e(0x1a5)] = this[_0x52837e(0x2b4)](_0x3bce55[_0x52837e(0x1d8)])[_0x52837e(0x1a5)];
            else (_0x30bd34 == -0x1 || _0x3bce55["pos"] == -0x1) && (_0x3bce55[_0x52837e(0x1a5)] = null);
            this[_0x52837e(0x263)](_0x3bce55);
          }
        },
        EmitReq_PIP_sync: function (_0x338ed0, _0x49fdb7, _0xb9c82c) {
          var _0x544652 = _0x2cba34;
          if (!_0x338ed0) return;
          if (typeof _0x338ed0 == _0x544652(0x227) && _0x338ed0[_0x544652(0x1e2)] !== Array) _0x338ed0 = [_0x338ed0];
          var _0x123b92 = {};
          for (var _0x395f35 = 0x0; _0x395f35 < _0x338ed0[_0x544652(0x26b)]; _0x395f35++) {
            if (typeof _0x338ed0[_0x395f35]["rid"] == _0x544652(0x214) || _0x338ed0[_0x395f35][_0x544652(0x32d)] == null || (_0x338ed0[_0x395f35][_0x544652(0x32d)] > 0x0 && _0x338ed0[_0x395f35][_0x544652(0x32d)] <= this["rid"])) _0x338ed0[_0x395f35]["rid"] = this[_0x544652(0x32d)]++;
            if (_0x49fdb7) {
              var _0x51abb1 = new Array();
              for (id in this[_0x544652(0x345)]) {
                if (typeof _0x49fdb7 != "object" && _0x49fdb7 != id) continue;
                if ((_0xb9c82c == 0x1 || _0x338ed0[_0x395f35][_0x544652(0x1a5)] == 0x1) && this[_0x544652(0x345)][id][_0x544652(0x234)]) {
                  if (!_0x123b92[id]) _0x123b92[id] = this["GetAbsoluteLocationEx"](id)[_0x544652(0x1a5)];
                } else {
                  if (_0xb9c82c == -0x1 || _0x338ed0[_0x395f35][_0x544652(0x1a5)] == -0x1) _0x123b92[id] = null;
                  else this[_0x544652(0x345)][id][_0x544652(0x1a5)] && (_0x123b92[id] = this["AppObj"][id][_0x544652(0x1a5)]);
                }
                _0x51abb1[_0x544652(0x244)](Object[_0x544652(0x2c4)]({}, _0x338ed0[_0x395f35], this[_0x544652(0x345)][id]), { pos: _0x123b92[id] });
              }
              _0x338ed0[_0x395f35] = _0x51abb1;
            } else {
              if ((_0xb9c82c == 0x1 || _0x338ed0[_0x395f35][_0x544652(0x1a5)] == 0x1) && _0x338ed0[_0x395f35][_0x544652(0x1d8)] && this[_0x544652(0x345)][_0x338ed0[_0x395f35][_0x544652(0x1d8)]][_0x544652(0x234)]) _0x338ed0[_0x395f35][_0x544652(0x1a5)] = this["GetAbsoluteLocationEx"](_0x338ed0[_0x395f35]["AppId"])[_0x544652(0x1a5)];
              else (_0xb9c82c == -0x1 || _0x338ed0[_0x395f35][_0x544652(0x1a5)] == -0x1) && (_0x338ed0[_0x395f35][_0x544652(0x1a5)] = null);
            }
          }
          this["Emit_wsSend"](_0x338ed0);
        },
        CloseApp: function (_0x2b9a51, _0x39b009) {
          var _0x44c9b2 = _0x2cba34;
          if (_0x2b9a51 == null) _0x2b9a51 = {};
          if (this[_0x44c9b2(0x345)])
            for (key in this[_0x44c9b2(0x345)]) {
              if (typeof _0x2b9a51 != _0x44c9b2(0x227) && _0x2b9a51 != key) continue;
              this["AppObj"][key]["AppStatus"] && (_0x39b009 || !this[_0x44c9b2(0x345)][key]["AppRuntime"]) && this["EmitReq_PIP"]({ emit: _0x44c9b2(0x29d) }, key);
            }
        },
        leaveBrowser: function () {
          var _0xd5ba70 = _0x2cba34;
          (this[_0xd5ba70(0x25b)] = 0x0), this["funcMouseout"]();
        },
        getBodyOffset: function (_0x59a59d) {
          var _0x2b48f4 = _0x2cba34,
            _0xd075bb = _0x199729[_0x2b48f4(0x199)] || _0xd075bb;
          if (_0x59a59d !== 0x1) {
            (this[_0x2b48f4(0x25b)] = 0x1), this[_0x2b48f4(0x1de)]();
            if (_0x199729[_0x2b48f4(0x2f9)]) document[_0x2b48f4(0x2f9)](_0x2b48f4(0x198), this[_0x2b48f4(0x336)], ![]);
            else {
              if (_0x199729["attachEvent"]) document[_0x2b48f4(0x1b1)](_0x2b48f4(0x33f), this[_0x2b48f4(0x336)]);
            }
          } else _0x199729[_0x2b48f4(0x305)] ? document[_0x2b48f4(0x305)]("mousemove", this["getScreenPxHandler"], ![]) : document[_0x2b48f4(0x1cf)](_0x2b48f4(0x33f), this[_0x2b48f4(0x336)]);
        },
        getScreenPx: function (_0x2359f0) {
          var _0x490d6b = _0x2cba34,
            _0x2359f0 = _0x199729[_0x490d6b(0x199)] || _0x2359f0;
          if (!(_0x2359f0 && (_0x2359f0[_0x490d6b(0x1b9)] == "mouseenter" || _0x2359f0[_0x490d6b(0x1b9)] == _0x490d6b(0x198)))) return;
          this[_0x490d6b(0x21f)]()
            ? ((this[_0x490d6b(0x1cc)][0x0] = [Math[_0x490d6b(0x29a)](_0x2359f0["screenX"] - (_0x2359f0[_0x490d6b(0x2e5)] * this[_0x490d6b(0x2ef)]) / this[_0x490d6b(0x2b5)]), Math[_0x490d6b(0x29a)](_0x2359f0[_0x490d6b(0x285)] - (_0x2359f0[_0x490d6b(0x1d1)] * this["curRatio"]) / this[_0x490d6b(0x2b5)])]),
              this["enterWindow"] == 0x1 &&
                (this[_0x490d6b(0x1cc)][0x0][0x0] - _0x199729["screenX"] * (navigator[_0x490d6b(0x287)][_0x490d6b(0x2da)](_0x490d6b(0x274)) > 0x0 ? this["dpiRatio"] : 0x1) >= 0x0 && (this[_0x490d6b(0x2a5)][0x0] = this[_0x490d6b(0x1cc)][0x0][0x0] - _0x199729["screenX"] * (navigator[_0x490d6b(0x287)][_0x490d6b(0x2da)](_0x490d6b(0x274)) > 0x0 ? this["dpiRatio"] : 0x1)),
                this["MousebodyOffset"][0x0][0x1] - _0x199729[_0x490d6b(0x285)] * (navigator[_0x490d6b(0x287)][_0x490d6b(0x2da)](_0x490d6b(0x274)) > 0x0 ? this["dpiRatio"] : 0x1) >= 0x0 && (this["edge_menuHeight"][0x0] = this["MousebodyOffset"][0x0][0x1] - _0x199729["screenY"] * (navigator["userAgent"]["indexOf"](_0x490d6b(0x274)) > 0x0 ? this[_0x490d6b(0x2b5)] : 0x1))))
            : ((this[_0x490d6b(0x1cc)][0x1] = [Math[_0x490d6b(0x29a)](_0x2359f0[_0x490d6b(0x19b)] - (_0x2359f0["clientX"] * this["curRatio"]) / this[_0x490d6b(0x2b5)]), Math[_0x490d6b(0x29a)](_0x2359f0[_0x490d6b(0x285)] - (_0x2359f0[_0x490d6b(0x1d1)] * this[_0x490d6b(0x2ef)]) / this[_0x490d6b(0x2b5)])]),
              this[_0x490d6b(0x25b)] == 0x1 &&
                (this[_0x490d6b(0x1cc)][0x1][0x0] - _0x199729[_0x490d6b(0x19b)] * (navigator[_0x490d6b(0x287)][_0x490d6b(0x2da)](_0x490d6b(0x274)) > 0x0 ? this["dpiRatio"] : 0x1) >= 0x0 && (this[_0x490d6b(0x2a5)][0x1] = this["MousebodyOffset"][0x1][0x0] - _0x199729[_0x490d6b(0x19b)] * (navigator[_0x490d6b(0x287)][_0x490d6b(0x2da)](_0x490d6b(0x274)) > 0x0 ? this["dpiRatio"] : 0x1)),
                this["MousebodyOffset"][0x1][0x1] - _0x199729[_0x490d6b(0x285)] * (navigator[_0x490d6b(0x287)][_0x490d6b(0x2da)](_0x490d6b(0x274)) > 0x0 ? this[_0x490d6b(0x2b5)] : 0x1) >= 0x0 && (this["edge_menuHeight"][0x1] = this[_0x490d6b(0x1cc)][0x1][0x1] - _0x199729[_0x490d6b(0x285)] * (navigator[_0x490d6b(0x287)][_0x490d6b(0x2da)](_0x490d6b(0x274)) > 0x0 ? this["dpiRatio"] : 0x1)))),
            this["getBodyOffset"](0x1);
        },
        devicePixelRatio: function () {
          var _0x59f87d = _0x2cba34,
            _0x16f372 = 0x1,
            _0x3d844a = _0x199729[_0x59f87d(0x286)];
          if (_0x199729["devicePixelRatio"] !== undefined) _0x16f372 = _0x199729[_0x59f87d(0x18c)];
          else {
            if (!!_0x199729[_0x59f87d(0x278)] || _0x59f87d(0x278) in _0x199729) _0x3d844a[_0x59f87d(0x2ab)] && _0x3d844a[_0x59f87d(0x25a)] && (_0x16f372 = _0x3d844a[_0x59f87d(0x2ab)] / _0x3d844a["logicalXDPI"]);
            else _0x199729[_0x59f87d(0x2c7)] !== undefined && _0x199729["innerWidth"] !== undefined && (_0x16f372 = _0x199729["outerWidth"] / _0x199729[_0x59f87d(0x2e6)]);
          }
          return _0x16f372;
        },
        GetRatio: function () {
          var _0x18d87f = _0x2cba34,
            _0x2d7b7f = Math["round"](this[_0x18d87f(0x18c)]() * 0x64) / 0x64;
          return (
            _0x199729[_0x18d87f(0x278)] || _0x18d87f(0x278) in _0x199729 ? ((this["zmRatio"] = _0x2d7b7f), (_0x2d7b7f = Math["round"](this[_0x18d87f(0x31b)] * this[_0x18d87f(0x2b5)] * 0x64) / 0x64)) : (this["zmRatio"] = Math[_0x18d87f(0x29a)]((_0x2d7b7f / this["dpiRatio"]) * 0x64) / 0x64),
            (this[_0x18d87f(0x1d4)] = _0x2d7b7f),
            (this[_0x18d87f(0x33d)][_0x18d87f(0x2bb)] == "IE" || this[_0x18d87f(0x33d)]["browser"] == "Maxthon") && (this[_0x18d87f(0x1d4)] = this["zmRatio"]),
            _0x2d7b7f
          );
        },
        isMaxBrowser: function () {
          var _0x5762a3 = _0x2cba34,
            _0x110a46 = ![];
          if (_0x199729[_0x5762a3(0x278)] || _0x5762a3(0x278) in _0x199729) {
            if (_0x199729[_0x5762a3(0x286)][_0x5762a3(0x1ed)] == _0x199729[_0x5762a3(0x2e6)]) _0x110a46 = !![];
          } else {
            if (navigator[_0x5762a3(0x287)][_0x5762a3(0x2da)]("Firefox") > 0x0) {
              if (_0x199729["screen"][_0x5762a3(0x2d5)] + _0x199729["screenY"] < _0x199729[_0x5762a3(0x319)] && _0x199729[_0x5762a3(0x285)] <= 0x0 && _0x199729[_0x5762a3(0x285)] == _0x199729["screenX"]) _0x110a46 = !![];
            } else {
              if (Math[_0x5762a3(0x332)](_0x199729[_0x5762a3(0x286)][_0x5762a3(0x1ed)] - _0x199729[_0x5762a3(0x2c7)] - _0x199729[_0x5762a3(0x19b)] * 0x2) <= 0x1 && _0x199729[_0x5762a3(0x19b)] == _0x199729[_0x5762a3(0x285)]) _0x110a46 = !![];
            }
          }
          return _0x110a46;
        },
        hasScrollbar: function (_0x6e83de) {
          var _0x493d78 = _0x2cba34;
          return !_0x6e83de || _0x6e83de == 0x1 ? document[_0x493d78(0x2a1)][_0x493d78(0x19a)] > (_0x199729[_0x493d78(0x33b)] || document["documentElement"][_0x493d78(0x283)]) : document["body"]["scrollWidth"] > (_0x199729[_0x493d78(0x2e6)] || document[_0x493d78(0x1b4)][_0x493d78(0x215)]);
        },
        isFullScreen: function () {
          var _0x51e757 = _0x2cba34,
            _0x2b96a8 = ![];
          if (navigator["userAgent"][_0x51e757(0x2da)](_0x51e757(0x274)) > 0x0) {
            if (_0x199729[_0x51e757(0x1e3)]) _0x2b96a8 = !![];
          } else {
            if (_0x199729["ActiveXObject"] || _0x51e757(0x278) in _0x199729) {
              if (_0x199729["screen"][_0x51e757(0x267)] == _0x199729[_0x51e757(0x2c7)] && Math[_0x51e757(0x332)](_0x199729[_0x51e757(0x33b)] == _0x199729["screen"][_0x51e757(0x2a9)]) < 0x3) _0x2b96a8 = !![];
            } else {
              if (
                _0x199729[_0x51e757(0x19b)] == _0x199729[_0x51e757(0x19b)] &&
                Math[_0x51e757(0x332)](_0x199729[_0x51e757(0x286)][_0x51e757(0x267)] - _0x199729[_0x51e757(0x2c7)] - _0x199729[_0x51e757(0x19b)] * 0x2) <= 0x1 &&
                Math[_0x51e757(0x332)](_0x199729[_0x51e757(0x286)]["height"] - _0x199729[_0x51e757(0x319)] - _0x199729[_0x51e757(0x19b)] * 0x2) <= 0x1 &&
                Math["round"](_0x199729[_0x51e757(0x33b)] * this[_0x51e757(0x31b)] * 0x1) / 0x1 == _0x199729[_0x51e757(0x286)][_0x51e757(0x2a9)]
              )
                _0x2b96a8 = !![];
            }
          }
          return _0x2b96a8;
        },
        setInitBrowserData: function () {
          var _0x1552af = _0x2cba34;
          (this[_0x1552af(0x1a0)] = this[_0x1552af(0x1fa)]()), (this[_0x1552af(0x2ef)] = this[_0x1552af(0x242)]());
          var _0x2d5a1b = this[_0x1552af(0x21f)](),
            _0x27dddc = 0x0,
            _0x325c3b = 0x0,
            _0x274836 = 0x0,
            _0x1d399d = _0x2d5a1b ? 0x0 : 0x8;
          if (this[_0x1552af(0x33d)]) {
            if (this[_0x1552af(0x33d)][_0x1552af(0x2bb)] == _0x1552af(0x20a)) _0x274836 = 0x1a * this[_0x1552af(0x31b)];
            if (this[_0x1552af(0x33d)][_0x1552af(0x2bb)] == _0x1552af(0x340)) _0x274836 = 0x18 * this[_0x1552af(0x31b)];
            if (this["clientInfo"][_0x1552af(0x2bb)] == _0x1552af(0x1e8)) _0x1d399d = _0x2d5a1b ? 0x28 : 0x32;
            if (this[_0x1552af(0x33d)][_0x1552af(0x2bb)] == "Liebao") _0x1d399d = _0x2d5a1b ? 0x28 : 0x2c;
          }
          _0x199729[_0x1552af(0x278)] || "ActiveXObject" in _0x199729 || navigator["userAgent"][_0x1552af(0x2da)](_0x1552af(0x274)) > 0x0
            ? ((_0x27dddc = Math[_0x1552af(0x29a)]((_0x199729["outerWidth"] - _0x199729[_0x1552af(0x2e6)]) * this[_0x1552af(0x31b)]) >= 0x5a || Math[_0x1552af(0x29a)]((_0x199729[_0x1552af(0x2c7)] - _0x199729[_0x1552af(0x2e6)]) * this[_0x1552af(0x31b)]) < 0x0 ? (_0x2d5a1b ? 0x8 : 0x8) : Math[_0x1552af(0x29a)]((_0x199729[_0x1552af(0x2c7)] - _0x199729[_0x1552af(0x2e6)]) * this["zmRatio"])),
              (_0x325c3b = Math[_0x1552af(0x29a)]((_0x199729["outerHeight"] - _0x199729["innerHeight"]) * this["zmRatio"] + (_0x2d5a1b ? -0x7 : -0x5))))
            : ((_0x27dddc = Math["round"](_0x199729[_0x1552af(0x2c7)] - _0x199729[_0x1552af(0x2e6)] * this[_0x1552af(0x31b)]) > 0xdc ? _0x1d399d : Math[_0x1552af(0x29a)](_0x199729[_0x1552af(0x2c7)] - _0x199729["innerWidth"] * this[_0x1552af(0x31b)])),
              (_0x325c3b = Math[_0x1552af(0x29a)](_0x199729["outerHeight"] - _0x199729[_0x1552af(0x33b)] * this[_0x1552af(0x31b)] - (_0x2d5a1b ? 0x0 : 0x8) - _0x274836))),
            _0x2d5a1b ? ((this[_0x1552af(0x2a5)][0x0] = _0x27dddc), (this[_0x1552af(0x219)][0x0] = _0x325c3b)) : ((this[_0x1552af(0x2a5)][0x1] = _0x27dddc), (this[_0x1552af(0x219)][0x1] = _0x325c3b)),
            this[_0x1552af(0x2ff)]();
        },
        isElement: function (_0x5342f4) {
          var _0x190425 = _0x2cba34;
          return typeof HTMLElement === "object" ? _0x5342f4 instanceof HTMLElement : !!(_0x5342f4 && typeof _0x5342f4 === "object" && (_0x5342f4[_0x190425(0x24f)] === 0x1 || _0x5342f4[_0x190425(0x24f)] === 0x9) && typeof _0x5342f4["nodeName"] === "string");
        },
        GetAbsoluteLocationEx: function (_0x457a4d) {
          var _0x1ce85e = _0x2cba34,
            _0x5b1b14 = null;
          if (this[_0x1ce85e(0x2cc)](_0x457a4d)) _0x5b1b14 = _0x457a4d;
          else {
            var _0x46324d = _0x457a4d || 0x1;
            if (!(this["AppObj"][_0x46324d] && this[_0x1ce85e(0x345)][_0x46324d][_0x1ce85e(0x234)])) {
              console[_0x1ce85e(0x2c8)](_0x1ce85e(0x29b) + _0x46324d + _0x1ce85e(0x233));
              return;
            }
            if (!this[_0x1ce85e(0x322)]) this["getEmbedwindow"]();
            _0x5b1b14 = this["embedWindow"][_0x1ce85e(0x1bb)][_0x1ce85e(0x300)](this[_0x1ce85e(0x345)][_0x46324d][_0x1ce85e(0x234)]);
          }
          if (!_0x5b1b14) {
            console[_0x1ce85e(0x2c8)](_0x1ce85e(0x24c) + _0x5b1b14 + _0x1ce85e(0x2fd));
            return;
          }
          var _0x3a68ce = _0x5b1b14["offsetTop"],
            _0x1aecb8 = _0x5b1b14[_0x1ce85e(0x1a1)],
            _0x2b15be = _0x5b1b14["offsetWidth"],
            _0xdda9c1 = _0x5b1b14["offsetHeight"],
            _0x332573 = 0x0,
            _0x93cf27 = 0x0,
            _0x36ee6d,
            _0x5633e0,
            _0x3b2793 = navigator[_0x1ce85e(0x287)][_0x1ce85e(0x2da)](_0x1ce85e(0x274)) > 0x0 ? 0x0 : 0x8,
            _0x101a60 = this[_0x1ce85e(0x21f)](),
            _0x19835c = this[_0x1ce85e(0x33d)][_0x1ce85e(0x2bb)] == "IE" || this[_0x1ce85e(0x33d)]["browser"] == _0x1ce85e(0x2fc) ? _0x199729[_0x1ce85e(0x1e0)] : _0x199729[_0x1ce85e(0x19b)],
            _0x1d614c = this[_0x1ce85e(0x33d)][_0x1ce85e(0x2bb)] == "IE" || this["clientInfo"]["browser"] == _0x1ce85e(0x2fc) ? _0x199729[_0x1ce85e(0x27d)] : _0x199729["screenY"];
          this[_0x1ce85e(0x33d)]["browser"] == "IE" || this["clientInfo"][_0x1ce85e(0x2bb)] == _0x1ce85e(0x2fc)
            ? ((_0x332573 = Math[_0x1ce85e(0x29a)](_0x19835c * this[_0x1ce85e(0x1d4)])), (_0x93cf27 = Math[_0x1ce85e(0x29a)](_0x1d614c * this["useRatio"])))
            : (_0x101a60
                ? this[_0x1ce85e(0x1cc)][0x0] && (this[_0x1ce85e(0x25b)] == 0x1 || this[_0x1ce85e(0x268)] == this[_0x1ce85e(0x32a)][_0x1ce85e(0x201)])
                  ? ((_0x332573 = this[_0x1ce85e(0x1cc)][0x0][0x0]), (_0x93cf27 = this[_0x1ce85e(0x1cc)][0x0][0x1]))
                  : ((_0x332573 = _0x19835c + (this[_0x1ce85e(0x2a5)][0x0] == null ? this["edge_menuWidth"][0x1] - _0x3b2793 : this["edge_menuWidth"][0x0])), (_0x93cf27 = _0x1d614c + (this[_0x1ce85e(0x219)][0x0] == null ? this[_0x1ce85e(0x219)][0x1] - _0x3b2793 : this[_0x1ce85e(0x219)][0x0])))
                : this[_0x1ce85e(0x1cc)][0x1] && (this["enterWindow"] == 0x1 || this["CurEventType"] == this["EVENTTYPE"][_0x1ce85e(0x201)])
                ? ((_0x332573 = this[_0x1ce85e(0x1cc)][0x1][0x0]), (_0x93cf27 = this[_0x1ce85e(0x1cc)][0x1][0x1]))
                : ((_0x332573 = _0x19835c + (this["edge_menuWidth"][0x1] == null ? this[_0x1ce85e(0x2a5)][0x0] + _0x3b2793 : this[_0x1ce85e(0x2a5)][0x1])), (_0x93cf27 = _0x1d614c + (this[_0x1ce85e(0x219)][0x1] == null ? this["edge_menuHeight"][0x0] + _0x3b2793 : this["edge_menuHeight"][0x1]))),
              (_0x332573 = _0x332573 * this["dpiRatio"]),
              (_0x93cf27 = _0x93cf27 * this[_0x1ce85e(0x2b5)]));
          while ((_0x5b1b14 = _0x5b1b14[_0x1ce85e(0x211)])) {
            if (_0x5b1b14[_0x1ce85e(0x33a)][_0x1ce85e(0x29f)] == _0x1ce85e(0x1f1) || _0x5b1b14["style"]["position"] == "relative" || (_0x5b1b14[_0x1ce85e(0x33a)][_0x1ce85e(0x1f3)] != _0x1ce85e(0x343) && _0x5b1b14[_0x1ce85e(0x33a)][_0x1ce85e(0x1f3)] != "")) break;
            (_0x3a68ce += _0x5b1b14[_0x1ce85e(0x1d9)]), (_0x1aecb8 += _0x5b1b14[_0x1ce85e(0x1a1)]);
          }
          this[_0x1ce85e(0x21d)] && ((_0x3a68ce += this[_0x1ce85e(0x21d)][_0x1ce85e(0x1d9)]), (_0x1aecb8 += this["iframeEle"]["offsetLeft"]));
          typeof this["absolutePos"][_0x1ce85e(0x32e)] == "function" && this["absolutePos"][_0x1ce85e(0x32e)](this["absolutePos"]);
          (_0x1aecb8 += this["absolutePos"][_0x1ce85e(0x2f3)]), (_0x3a68ce += this[_0x1ce85e(0x31c)][_0x1ce85e(0x30c)]);
          var _0x45b7e4 = this[_0x1ce85e(0x306)]();
          ((this[_0x1ce85e(0x238)] == 0x1e && this[_0x1ce85e(0x268)] != null) || this[_0x1ce85e(0x24a)]) && (_0x45b7e4 = { x: 0x0, y: 0x0 });
          this[_0x1ce85e(0x1fa)]() && ((_0x93cf27 = 0x0), (_0x332573 = 0x0));
          (_0x3a68ce = Math["round"](_0x3a68ce * this["useRatio"])), (_0x1aecb8 = Math["round"](_0x1aecb8 * this[_0x1ce85e(0x1d4)])), (_0x45b7e4["x"] = Math["round"](_0x45b7e4["x"] * this[_0x1ce85e(0x1d4)])), (_0x45b7e4["y"] = Math[_0x1ce85e(0x29a)](_0x45b7e4["y"] * this[_0x1ce85e(0x1d4)]));
          var _0x3bd203 = {
            pos: {
              left: _0x1aecb8 >= _0x45b7e4["x"] ? _0x1aecb8 + _0x332573 - _0x45b7e4["x"] : !_0x101a60 || this["zeroType"] ? _0x332573 : _0x1aecb8 + _0x332573 - _0x45b7e4["x"],
              top: _0x3a68ce >= _0x45b7e4["y"] ? _0x3a68ce + _0x93cf27 - _0x45b7e4["y"] : !_0x101a60 || this["zeroType"] ? _0x93cf27 : _0x3a68ce + _0x93cf27 - _0x45b7e4["y"],
              width: Math[_0x1ce85e(0x29a)](_0x2b15be * this["useRatio"]),
              height: Math["round"](_0xdda9c1 * this["useRatio"]),
            },
            offsetLeft: _0x1aecb8,
            offsetTop: _0x3a68ce,
            PageOffsetx: _0x45b7e4["x"],
            PageOffsety: _0x45b7e4["y"],
            screenLeft: _0x332573,
            screenTop: _0x93cf27,
          };
          return (this[_0x1ce85e(0x345)][_0x46324d][_0x1ce85e(0x1a5)] = _0x3bd203[_0x1ce85e(0x1a5)]), _0x3bd203;
        },
        GetPageOffset: function () {
          var _0x234ed6 = _0x2cba34,
            _0x204864 = _0x199729[_0x234ed6(0x2d8)] !== undefined,
            _0x46ee3a = (document[_0x234ed6(0x213)] || "") === _0x234ed6(0x1a9),
            _0x2138a3 = _0x204864 ? _0x199729[_0x234ed6(0x2d8)] : _0x46ee3a ? document["documentElement"][_0x234ed6(0x2f4)] : document["body"][_0x234ed6(0x2f4)],
            _0x40dfbe = _0x204864 ? _0x199729["pageYOffset"] : _0x46ee3a ? document["documentElement"][_0x234ed6(0x226)] : document["body"]["scrollTop"];
          return { x: _0x2138a3, y: _0x40dfbe };
        },
        throttle: function (_0x371a3e, _0x5d7474, _0x2cece2) {
          if (_0x2cece2 === 0x0) var _0x1c6ebf = 0x0;
          else {
            if (_0x2cece2 === 0x1) var _0x21a11f;
          }
          return function () {
            var _0x5a63b3 = _0x4c93,
              _0x50174e = this,
              _0x2d4321 = arguments;
            if (_0x2cece2 === 0x0) {
              var _0x1cc35b = Date[_0x5a63b3(0x257)]();
              _0x1cc35b - _0x1c6ebf > _0x5d7474 && (_0x371a3e[_0x5a63b3(0x1be)](_0x50174e, _0x2d4321), (_0x1c6ebf = _0x1cc35b));
            } else
              _0x2cece2 === 0x1 &&
                !_0x21a11f &&
                (_0x21a11f = setTimeout(function () {
                  (_0x21a11f = null), _0x371a3e["apply"](_0x50174e, _0x2d4321);
                }, _0x5d7474));
          };
        },
        debounce: function (_0x1e5183, _0x135e2e, _0xc0ad2b) {
          var _0x5be393;
          return function () {
            var _0x4f03fe = _0x4c93,
              _0x31776a = this,
              _0x45f4f2 = arguments;
            if (_0x5be393) clearTimeout(_0x5be393);
            if (!_0xc0ad2b) {
              var _0x2b3418 = !_0x5be393;
              _0x5be393 = setTimeout(function () {
                _0x5be393 = null;
              }, _0x135e2e);
              if (_0x2b3418) _0x1e5183[_0x4f03fe(0x1be)](_0x31776a, _0x45f4f2);
            } else
              _0x5be393 = setTimeout(function () {
                var _0x58a80e = _0x4f03fe;
                _0x1e5183[_0x58a80e(0x1be)](_0x31776a, _0x45f4f2);
              }, _0x135e2e);
          };
        },
        scrollApp: function () {
          var _0x350d6f = _0x2cba34;
          this[_0x350d6f(0x268)] = this[_0x350d6f(0x32a)][_0x350d6f(0x201)];
          var _0x91949f = Object[_0x350d6f(0x34f)](this[_0x350d6f(0x345)])["length"] > 0x1 ? this[_0x350d6f(0x236)][_0x350d6f(0x2f6)] : this[_0x350d6f(0x236)][_0x350d6f(0x24e)];
          for (key in this[_0x350d6f(0x345)]) {
            if (!(this["AppObj"][key][_0x350d6f(0x2b7)] && this[_0x350d6f(0x330)][this[_0x350d6f(0x268)]]["indexOf"](this[_0x350d6f(0x345)][key][_0x350d6f(0x238)]) >= 0x0 && this["AppObj"][key][_0x350d6f(0x23c)])) continue;
            var _0x7a57a7 = this[_0x350d6f(0x2b4)](key);
            if (!_0x7a57a7) return;
            if (_0x7a57a7[_0x350d6f(0x28b)] > _0x7a57a7[_0x350d6f(0x1d9)] + _0x7a57a7[_0x350d6f(0x1a5)][_0x350d6f(0x2a9)] * (this[_0x350d6f(0x345)][key][_0x350d6f(0x30f)] && typeof this[_0x350d6f(0x345)][key][_0x350d6f(0x30f)][0x1] == _0x350d6f(0x1ab) ? this[_0x350d6f(0x345)][key]["hideScaleXY"][0x1] : _0x91949f))
              (this[_0x350d6f(0x345)][key][_0x350d6f(0x26a)] = !![]), this[_0x350d6f(0x22a)](_0x350d6f(0x22f), key, _0x7a57a7[_0x350d6f(0x1a5)], this[_0x350d6f(0x268)]);
            else
              _0x7a57a7[_0x350d6f(0x314)] > _0x7a57a7[_0x350d6f(0x1a1)] + _0x7a57a7[_0x350d6f(0x1a5)][_0x350d6f(0x267)] * (this[_0x350d6f(0x345)][key][_0x350d6f(0x30f)] && typeof this[_0x350d6f(0x345)][key][_0x350d6f(0x30f)][0x0] == _0x350d6f(0x1ab) ? this[_0x350d6f(0x345)][key][_0x350d6f(0x30f)][0x0] : _0x91949f)
                ? ((this["AppObj"][key][_0x350d6f(0x26a)] = !![]), this["AppVisibleMove"](_0x350d6f(0x22f), key, _0x7a57a7[_0x350d6f(0x1a5)], this[_0x350d6f(0x268)]))
                : !this[_0x350d6f(0x345)][key]["scrollHide"]
                ? this["AppVisibleMove"](_0x350d6f(0x256), key, _0x7a57a7[_0x350d6f(0x1a5)], this["CurEventType"])
                : ((this[_0x350d6f(0x345)][key][_0x350d6f(0x26a)] = ![]), this[_0x350d6f(0x22a)](_0x350d6f(0x232), key, _0x7a57a7["pos"], this[_0x350d6f(0x268)]));
          }
          this[_0x350d6f(0x268)] = null;
        },
        AppResize: function (_0x49a0ac, _0x122518, _0x2e0187, _0x24abf5) {
          var _0x5db9bb = _0x2cba34,
            _0x49c3a9 = 0x0;
          this["SvrOpenMark"] == !![] &&
            (this[_0x5db9bb(0x1fa)]()
              ? (!this["oldFS"] && (this["ws"][_0x5db9bb(0x299)](JSON[_0x5db9bb(0x245)]({ emit: "winsys", Obj: _0x5db9bb(0x2ec), rid: --this[_0x5db9bb(0x34d)], AppType: this[_0x5db9bb(0x1d0)], par: { autoHide: !![] } })), (_0x49c3a9 = 0x1)), (this["oldFS"] = !![]))
              : (this[_0x5db9bb(0x1a0)] && ((_0x49c3a9 = 0x1), this["ws"][_0x5db9bb(0x299)](JSON[_0x5db9bb(0x245)]({ emit: _0x5db9bb(0x1c5), Obj: _0x5db9bb(0x2ec), rid: --this[_0x5db9bb(0x34d)], AppType: this[_0x5db9bb(0x1d0)], par: { autoHide: ![] } }))), (this[_0x5db9bb(0x1a0)] = ![])));
          this[_0x5db9bb(0x268)] = _0x24abf5;
          for (key in this[_0x5db9bb(0x345)]) {
            this[_0x5db9bb(0x345)][key][_0x5db9bb(0x23c)] && this[_0x5db9bb(0x345)][key][_0x5db9bb(0x2b7)] && this["eventType_Follow"][this[_0x5db9bb(0x268)]][_0x5db9bb(0x2da)](this["AppObj"][key][_0x5db9bb(0x238)]) >= 0x0 && document[_0x5db9bb(0x2e2)] == _0x5db9bb(0x343) && this[_0x5db9bb(0x2c2)]({ emit: _0x5db9bb(0x303), rid: --this[_0x5db9bb(0x34d)], pos: 0x1 }, key);
          }
          this[_0x5db9bb(0x268)] = null;
        },
        AppVisibleMove: function (_0x44594f, _0x5ac6fc, _0x28a0f6, _0x7b1562, _0x164f33, _0x1131cd) {
          var _0x30af76 = _0x2cba34,
            _0x44594f = _0x44594f || _0x30af76(0x256),
            _0xea052a = { emit: _0x44594f, pos: _0x28a0f6, showPar: _0x164f33, rid: --this[_0x30af76(0x34d)] };
          for (key in this[_0x30af76(0x345)]) {
            if (typeof _0x5ac6fc != "object" && _0x5ac6fc != key) continue;
            if (this[_0x30af76(0x345)][key][_0x30af76(0x2b7)] && this[_0x30af76(0x345)][key][_0x30af76(0x23c)] && this[_0x30af76(0x330)][_0x7b1562][_0x30af76(0x2da)](this[_0x30af76(0x345)][key][_0x30af76(0x238)]) >= 0x0) {
              if (_0x44594f == "hide") {
                if (this[_0x30af76(0x345)][key][_0x30af76(0x22f)]) return;
                this[_0x30af76(0x345)][key]["hide"] = 0x1;
              } else {
                if (_0x44594f == _0x30af76(0x232)) {
                  if (_0x1131cd != null) {
                    if (this[_0x30af76(0x345)][key][_0x30af76(0x288)])
                      (this[_0x30af76(0x345)][key][_0x30af76(0x288)] = null),
                        setTimeout(
                          function () {
                            var _0x3c867d = _0x30af76;
                            this[_0x3c867d(0x2c2)]({ emit: _0x3c867d(0x256), pos: _0x28a0f6, showPar: _0x164f33, rid: --this[_0x3c867d(0x34d)] }, key);
                          }[_0x30af76(0x19e)](this),
                          0xc8
                        );
                    else return;
                  } else {
                    if (!this[_0x30af76(0x345)][key][_0x30af76(0x22f)]) return;
                  }
                  this["AppObj"][key][_0x30af76(0x22f)] = 0x0;
                }
              }
              this[_0x30af76(0x2c2)](_0xea052a, key);
            }
          }
        },
        AppPosEvent: function (_0x4314b6, _0x488c6f, _0x2950d1, _0x1cc0f7) {
          var _0x51e8c8 = _0x2cba34;
          if (!_0x4314b6 || _0x4314b6 == _0x51e8c8(0x256) || _0x4314b6 == _0x51e8c8(0x22f) || _0x4314b6 == "show") this[_0x51e8c8(0x22a)](_0x4314b6, _0x488c6f, _0x2950d1, _0x1cc0f7);
          else _0x4314b6 == "resize" && this["AppResize"](_0x4314b6, _0x488c6f, _0x2950d1, _0x1cc0f7);
        },
        funcVisibilitychange: function () {
          var _0x1788ec = _0x2cba34;
          (this[_0x1788ec(0x268)] = this[_0x1788ec(0x32a)][_0x1788ec(0x343)]), document["visibilityState"] !== _0x1788ec(0x343) || document[_0x1788ec(0x2b3)] == !![] ? this[_0x1788ec(0x22a)](_0x1788ec(0x22f), {}, -0x1, this[_0x1788ec(0x268)]) : this[_0x1788ec(0x22a)](_0x1788ec(0x232), {}, -0x1, this[_0x1788ec(0x268)]), (this[_0x1788ec(0x268)] = null);
        },
        getHiddenProp: function () {
          var _0x598c02 = _0x2cba34,
            _0x1be4bf = [_0x598c02(0x1eb), _0x598c02(0x338), "ms", "o"];
          if (_0x598c02(0x2b3) in document) return _0x598c02(0x2b3);
          for (var _0x457bee = 0x0; _0x457bee < _0x1be4bf["length"]; _0x457bee++) {
            if (_0x1be4bf[_0x457bee] + _0x598c02(0x237) in document) return _0x1be4bf[_0x457bee] + "Hidden";
          }
          return null;
        },
        getVisibilityState: function () {
          var _0x14ec16 = _0x2cba34,
            _0x235e9b = ["webkit", _0x14ec16(0x338), "ms", "o"];
          if ("visibilityState" in document) return _0x14ec16(0x2e2);
          for (var _0x541441 = 0x0; _0x541441 < _0x235e9b[_0x14ec16(0x26b)]; _0x541441++) {
            if (_0x235e9b[_0x541441] + _0x14ec16(0x2bc) in document) return _0x235e9b[_0x541441] + "VisibilityState";
          }
          return null;
        },
        isHidden: function () {
          var _0x2cf79f = _0x2cba34,
            _0x4a2c04 = this[_0x2cf79f(0x311)]();
          if (!_0x4a2c04) return ![];
          return document[_0x4a2c04];
        },
        visibleTab: function () {
          var _0x5a3bf0 = _0x2cba34,
            _0x1ad304 = this["getHiddenProp"]();
          if (_0x1ad304) {
            if (document[_0x5a3bf0(0x2f9)]) document[_0x5a3bf0(0x2f9)](_0x1ad304["replace"](/[H|h]idden/, "") + _0x5a3bf0(0x2d4), this[_0x5a3bf0(0x29c)]["bind"](this), ![]);
            else document["attachEvent"] && document["attachEvent"](_0x1ad304[_0x5a3bf0(0x2c5)](/[H|h]idden/, "") + _0x5a3bf0(0x2ca), this[_0x5a3bf0(0x29c)][_0x5a3bf0(0x19e)](this));
          }
        },
        isBlur: function () {
          var _0x424c25 = _0x2cba34;
          this[_0x424c25(0x1a8)] = 0x0;
        },
        isFocus: function () {
          var _0x207739 = _0x2cba34;
          (this[_0x207739(0x1a8)] = 0x1), this[_0x207739(0x22a)](_0x207739(0x232), {}, -0x1, this[_0x207739(0x32a)][_0x207739(0x343)], null, 0x1);
        },
        ListenBlurFocus: function () {
          var _0x37a366 = _0x2cba34;
          if (_0x199729[_0x37a366(0x2f9)]) _0x199729[_0x37a366(0x2f9)]("blur", this[_0x37a366(0x196)][_0x37a366(0x19e)](this), ![]), _0x199729[_0x37a366(0x2f9)](_0x37a366(0x26f), this[_0x37a366(0x298)][_0x37a366(0x19e)](this), ![]);
          else _0x199729[_0x37a366(0x1b1)] && (_0x199729[_0x37a366(0x1b1)](_0x37a366(0x1a6), this[_0x37a366(0x196)][_0x37a366(0x19e)](this)), _0x199729[_0x37a366(0x1b1)](_0x37a366(0x21a), this[_0x37a366(0x298)]["bind"](this)));
        },
        funcMouseout: function (_0x412cb2) {
          var _0x2198da = _0x2cba34;
          !this[_0x2198da(0x25b)] || (_0x412cb2 && (_0x412cb2[_0x2198da(0x31d)] === null || _0x412cb2[_0x2198da(0x31d)] === undefined) && _0x412cb2[_0x2198da(0x265)] === null)
            ? ((this[_0x2198da(0x25b)] = 0x0),
              (this[_0x2198da(0x24b)] = setInterval(
                function () {
                  var _0x3b25fa = _0x2198da;
                  (this[_0x3b25fa(0x268)] = this["EVENTTYPE"][_0x3b25fa(0x256)]),
                    (this[_0x3b25fa(0x23e)] != (this["clientInfo"][_0x3b25fa(0x2bb)] == "IE" || this[_0x3b25fa(0x33d)]["browser"] == _0x3b25fa(0x2fc) ? _0x199729[_0x3b25fa(0x1e0)] : _0x199729[_0x3b25fa(0x19b)]) || this[_0x3b25fa(0x2b8)] != (this["clientInfo"][_0x3b25fa(0x2bb)] == "IE" || this[_0x3b25fa(0x33d)][_0x3b25fa(0x2bb)] == "Maxthon" ? _0x199729[_0x3b25fa(0x27d)] : _0x199729["screenY"])) &&
                      this["AppVisibleMove"](_0x3b25fa(0x256), {}, 0x1, this["CurEventType"]),
                    (this["oldX"] = this[_0x3b25fa(0x33d)][_0x3b25fa(0x2bb)] == "IE" || this[_0x3b25fa(0x33d)][_0x3b25fa(0x2bb)] == "Maxthon" ? _0x199729[_0x3b25fa(0x1e0)] : _0x199729[_0x3b25fa(0x19b)]),
                    (this["oldY"] = this[_0x3b25fa(0x33d)][_0x3b25fa(0x2bb)] == "IE" || this["clientInfo"][_0x3b25fa(0x2bb)] == _0x3b25fa(0x2fc) ? _0x199729[_0x3b25fa(0x27d)] : _0x199729[_0x3b25fa(0x285)]),
                    (this[_0x3b25fa(0x268)] = null);
                }[_0x2198da(0x19e)](this),
                this[_0x2198da(0x30b)]
              )))
            : this[_0x2198da(0x24b)] != null && clearInterval(this[_0x2198da(0x24b)]);
        },
        registerEvent: function (_0x20b450, _0x3e51b0, _0x38a476) {
          var _0xc5479a = _0x2cba34;
          return _0x20b450[_0xc5479a(0x2f9)]
            ? (_0x20b450[_0xc5479a(0x2f9)](_0x3e51b0, _0x38a476),
              {
                remove: function () {
                  _0x20b450["removeEventListener"](_0x3e51b0, _0x38a476);
                },
              })
            : (_0x20b450[_0xc5479a(0x1b1)](_0x3e51b0, _0x38a476),
              {
                remove: function () {
                  var _0x1a25a0 = _0xc5479a;
                  _0x20b450[_0x1a25a0(0x1cf)](_0x3e51b0, _0x38a476);
                },
              });
        },
        createHiddenIframe: function (_0x5e615d, _0x18e7dd) {
          var _0x290eca = _0x2cba34,
            _0x1b8d9a = document["createElement"](_0x290eca(0x2ac));
          return (_0x1b8d9a[_0x290eca(0x2e9)] = _0x18e7dd), (_0x1b8d9a["id"] = _0x290eca(0x27a)), (_0x1b8d9a[_0x290eca(0x33a)]["display"] = "none"), _0x5e615d[_0x290eca(0x2cf)](_0x1b8d9a), _0x1b8d9a;
        },
        openUriWithHiddenFrame: function (_0x2737b9, _0x387066, _0x184788) {
          var _0xe12f34 = _0x2cba34,
            _0x5df098 = setTimeout(function () {
              _0x387066(), _0x24e1b8["remove"]();
            }, this["protocolTime"]),
            _0x4a1960 = document["querySelector"]("#hiddenIframe");
          !_0x4a1960 && (_0x4a1960 = this[_0xe12f34(0x271)](document[_0xe12f34(0x2a1)], _0xe12f34(0x21c)));
          var _0x2e89ef = function () {
              var _0x22138a = _0xe12f34;
              clearTimeout(_0x5df098), _0x24e1b8[_0x22138a(0x1a2)](), _0x184788();
            },
            _0x24e1b8 = this[_0xe12f34(0x32f)](_0x199729, "blur", _0x2e89ef);
          _0x4a1960[_0xe12f34(0x1e6)]["location"][_0xe12f34(0x282)] = _0x2737b9;
        },
        openUriWithTimeoutHack: function (_0x5d0e5c, _0xd94644, _0x4b2c2c) {
          var _0x34b987 = _0x2cba34,
            _0xdaa7a8 = setTimeout(function () {
              _0xd94644(), _0xb11a9b["remove"]();
            }, this[_0x34b987(0x1ea)]),
            _0x5d1d8e = _0x199729;
          while (_0x5d1d8e[_0x34b987(0x255)] && _0x5d1d8e != _0x5d1d8e["parent"]) {
            _0x5d1d8e = _0x5d1d8e["parent"];
          }
          var _0x2ca5a6 = function () {
              var _0x12c752 = _0x34b987;
              clearTimeout(_0xdaa7a8), _0xb11a9b[_0x12c752(0x1a2)](), _0x4b2c2c();
            },
            _0xb11a9b = this[_0x34b987(0x32f)](_0x5d1d8e, "blur", _0x2ca5a6);
          _0x199729[_0x34b987(0x246)] = _0x5d0e5c;
        },
        openUriUsingFirefox: function (_0x1d3f44, _0x4f1ddc, _0x3aa3f8) {
          var _0x40810a = _0x2cba34,
            _0x2a7b07 = document[_0x40810a(0x247)](_0x40810a(0x2ba));
          !_0x2a7b07 && (_0x2a7b07 = this[_0x40810a(0x271)](document[_0x40810a(0x2a1)], "about:blank"));
          try {
            (_0x2a7b07[_0x40810a(0x1e6)][_0x40810a(0x246)]["href"] = _0x1d3f44), _0x3aa3f8();
          } catch (_0x244c17) {
            _0x244c17["name"] == _0x40810a(0x1d2) && _0x4f1ddc();
          }
        },
        openUriWithMsLaunchUri: function (_0x359abc, _0x54cad6, _0x2190dc) {
          var _0x5dce16 = _0x2cba34;
          navigator[_0x5dce16(0x2db)](_0x359abc, _0x2190dc, _0x54cad6);
        },
        openUri: function (_0x148bb4, _0x1eb76e, _0x143b6b) {
          var _0x3a36f5 = _0x2cba34;
          if (this[_0x3a36f5(0x33d)][_0x3a36f5(0x2bb)] == _0x3a36f5(0x274) || this[_0x3a36f5(0x33d)][_0x3a36f5(0x2bb)] == _0x3a36f5(0x2bd)) Number(this[_0x3a36f5(0x33d)]["version"]) >= 0x40 ? this[_0x3a36f5(0x25e)](_0x148bb4, _0x1eb76e, _0x143b6b) : this[_0x3a36f5(0x2a3)](_0x148bb4, _0x1eb76e, _0x143b6b);
          else {
            if (this[_0x3a36f5(0x33d)][_0x3a36f5(0x2bb)] == _0x3a36f5(0x200)) this[_0x3a36f5(0x2a3)](_0x148bb4, _0x1eb76e, _0x143b6b);
            else {
              if (this[_0x3a36f5(0x33d)][_0x3a36f5(0x2bb)] == _0x3a36f5(0x310)) this["openUriWithTimeoutHack"](_0x148bb4, _0x1eb76e, _0x143b6b);
              else this["clientInfo"]["browser"] == "Mac\x20OS" ? this[_0x3a36f5(0x25e)](_0x148bb4, _0x1eb76e, _0x143b6b) : this[_0x3a36f5(0x2a3)](_0x148bb4, _0x1eb76e, _0x143b6b);
            }
          }
        },
        protocolCheck: function (_0x304723, _0x4c76b5, _0x5d82d3, _0x2f2c32) {
          var _0x49c49e = _0x2cba34,
            _0x598c1e = function () {
              _0x4c76b5 && _0x4c76b5();
            },
            _0x449996 = function () {
              _0x5d82d3 && _0x5d82d3();
            },
            _0x3ebfbc = function () {
              _0x2f2c32 && _0x2f2c32();
            };
          (this[_0x49c49e(0x33d)]["browser"] == _0x49c49e(0x31f) || this["clientInfo"][_0x49c49e(0x2bb)] == "IE") && Number(this[_0x49c49e(0x33d)][_0x49c49e(0x207)]) > 6.1 && Number(this[_0x49c49e(0x33d)][_0x49c49e(0x207)]) < 0x9
            ? (console[_0x49c49e(0x2c8)](Number(this[_0x49c49e(0x33d)]["osVersion"]) < 0x9, Number(this[_0x49c49e(0x33d)][_0x49c49e(0x207)])), this[_0x49c49e(0x1c7)](_0x304723, _0x4c76b5, _0x5d82d3))
            : this[_0x49c49e(0x204)](_0x304723, _0x598c1e, _0x449996);
        },
      }),
    (_0x262d48["fn"]["ws"][_0x2cba34(0x22d)] = _0x262d48["fn"]),
    _0x262d48
  );
})(window);
function _0x4c93(_0x49d609, _0x1b1e2d) {
  var _0x19f1f2 = _0x19f1();
  return (
    (_0x4c93 = function (_0x4c934f, _0x1426be) {
      _0x4c934f = _0x4c934f - 0x18b;
      var _0x10cceb = _0x19f1f2[_0x4c934f];
      return _0x10cceb;
    }),
    _0x4c93(_0x49d609, _0x1b1e2d)
  );
}
(function (_0x3f3e51, _0x78d8e0) {
  var _0x5baa2c = _0x4c93;
  if (typeof define === "function" && (define[_0x5baa2c(0x220)] || define["cmd"]))
    define(function () {
      return _0x78d8e0(_0x3f3e51);
    });
  else typeof exports === "object" ? (module[_0x5baa2c(0x2e0)] = _0x78d8e0(_0x3f3e51)) : (_0x3f3e51[_0x5baa2c(0x1d5)] = _0x78d8e0(_0x3f3e51));
})(typeof self !== "undefined" ? self : this, function (_0x387e0b) {
  var _0x4ecd0f = _0x4c93,
    _0x5b73ee = _0x387e0b || {},
    _0x1ea8ea = typeof _0x387e0b["navigator"] != _0x4ecd0f(0x214) ? _0x387e0b["navigator"] : {},
    _0x5829ca = function (_0x3852c3, _0x3f0e65) {
      var _0x152c32 = _0x1ea8ea["mimeTypes"];
      for (var _0x7ccee in _0x152c32) {
        if (_0x152c32[_0x7ccee][_0x3852c3] == _0x3f0e65) return !![];
      }
      return ![];
    };
  return function (_0x2b8f61) {
    var _0x2e210c = _0x4ecd0f,
      _0x3e6603 = _0x2b8f61 || _0x1ea8ea[_0x2e210c(0x287)] || {},
      _0x45f1bd = this,
      _0x32283f = {
        Trident: _0x3e6603["indexOf"](_0x2e210c(0x218)) > -0x1 || _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x309)) > -0x1,
        Presto: _0x3e6603[_0x2e210c(0x2da)]("Presto") > -0x1,
        WebKit: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x304)) > -0x1,
        Gecko: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x272)) > -0x1,
        KHTML: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x1df)) > -0x1,
        Safari: _0x3e6603["indexOf"](_0x2e210c(0x194)) > -0x1,
        Chrome: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x310)) > -0x1 || _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x2ee)) > -0x1,
        IE: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x323)) > -0x1 || _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x218)) > -0x1,
        Edge: _0x3e6603[_0x2e210c(0x2da)]("Edge") > -0x1 || _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x1e1)) > -0x1,
        Firefox: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x274)) > -0x1 || _0x3e6603["indexOf"](_0x2e210c(0x2b0)) > -0x1,
        "Firefox\x20Focus": _0x3e6603[_0x2e210c(0x2da)]("Focus") > -0x1,
        Chromium: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x2d6)) > -0x1,
        Opera: _0x3e6603["indexOf"]("Opera") > -0x1 || _0x3e6603[_0x2e210c(0x2da)]("OPR") > -0x1,
        Vivaldi: _0x3e6603["indexOf"](_0x2e210c(0x1fe)) > -0x1,
        Yandex: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x202)) > -0x1,
        Arora: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x2bf)) > -0x1,
        Lunascape: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x2f5)) > -0x1,
        QupZilla: _0x3e6603[_0x2e210c(0x2da)]("QupZilla") > -0x1,
        "Coc\x20Coc": _0x3e6603["indexOf"](_0x2e210c(0x2b6)) > -0x1,
        Kindle: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x2a4)) > -0x1 || _0x3e6603[_0x2e210c(0x2da)]("Silk/") > -0x1,
        Iceweasel: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x294)) > -0x1,
        Konqueror: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x2d0)) > -0x1,
        Iceape: _0x3e6603["indexOf"](_0x2e210c(0x27f)) > -0x1,
        SeaMonkey: _0x3e6603["indexOf"]("SeaMonkey") > -0x1,
        Epiphany: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x318)) > -0x1,
        360: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x325)) > -0x1 || _0x3e6603["indexOf"](_0x2e210c(0x30e)) > -0x1,
        "360EE": _0x3e6603["indexOf"]("360EE") > -0x1,
        "360SE": _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x20a)) > -0x1,
        UC: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x1bf)) > -0x1 || _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x1ba)) > -0x1,
        QQBrowser: _0x3e6603["indexOf"](_0x2e210c(0x315)) > -0x1,
        QQ: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x293)) > -0x1,
        Baidu: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x331)) > -0x1 || _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x2f8)) > -0x1 || _0x3e6603[_0x2e210c(0x2da)]("baiduboxapp") > -0x1,
        Maxthon: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x2fc)) > -0x1,
        Sogou: _0x3e6603[_0x2e210c(0x2da)]("MetaSr") > -0x1 || _0x3e6603[_0x2e210c(0x2da)]("Sogou") > -0x1,
        Liebao: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x341)) > -0x1 || _0x3e6603[_0x2e210c(0x2da)]("LieBaoFast") > -0x1,
        "2345Explorer": _0x3e6603[_0x2e210c(0x2da)]("2345Explorer") > -0x1 || _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x261)) > -0x1,
        "115Browser": _0x3e6603["indexOf"]("115Browser") > -0x1,
        TheWorld: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x2af)) > -0x1,
        XiaoMi: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x280)) > -0x1,
        Quark: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x1d3)) > -0x1,
        Qiyu: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x2be)) > -0x1,
        Wechat: _0x3e6603["indexOf"](_0x2e210c(0x1ce)) > -0x1,
        WechatWork: _0x3e6603["indexOf"](_0x2e210c(0x1e5)) > -0x1,
        Taobao: _0x3e6603[_0x2e210c(0x2da)]("AliApp(TB") > -0x1,
        Alipay: _0x3e6603["indexOf"]("AliApp(AP") > -0x1,
        Weibo: _0x3e6603["indexOf"](_0x2e210c(0x34e)) > -0x1,
        Douban: _0x3e6603["indexOf"](_0x2e210c(0x2f7)) > -0x1,
        Suning: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x32b)) > -0x1,
        iQiYi: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x2c0)) > -0x1,
        DingTalk: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x25c)) > -0x1,
        Huawei: _0x3e6603["indexOf"](_0x2e210c(0x276)) > -0x1 || _0x3e6603["indexOf"](_0x2e210c(0x209)) > -0x1,
        Vivo: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x2b1)) > -0x1,
        Windows: _0x3e6603[_0x2e210c(0x2da)]("Windows") > -0x1,
        Linux: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x243)) > -0x1 || _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x195)) > -0x1,
        "Mac\x20OS": _0x3e6603[_0x2e210c(0x2da)]("Macintosh") > -0x1,
        Android: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x230)) > -0x1 || _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x229)) > -0x1,
        Ubuntu: _0x3e6603[_0x2e210c(0x2da)]("Ubuntu") > -0x1,
        FreeBSD: _0x3e6603["indexOf"](_0x2e210c(0x284)) > -0x1,
        Debian: _0x3e6603[_0x2e210c(0x2da)]("Debian") > -0x1,
        "Windows\x20Phone": _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x2fe)) > -0x1 || _0x3e6603["indexOf"](_0x2e210c(0x27c)) > -0x1,
        BlackBerry: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x210)) > -0x1 || _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x2f1)) > -0x1,
        MeeGo: _0x3e6603["indexOf"]("MeeGo") > -0x1,
        Symbian: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x1b0)) > -0x1,
        iOS: _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x344)) > -0x1,
        "Chrome\x20OS": _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x1ec)) > -0x1,
        WebOS: _0x3e6603[_0x2e210c(0x2da)]("hpwOS") > -0x1,
        Mobile: _0x3e6603[_0x2e210c(0x2da)]("Mobi") > -0x1 || _0x3e6603["indexOf"]("iPh") > -0x1 || _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x222)) > -0x1,
        Tablet: _0x3e6603["indexOf"](_0x2e210c(0x327)) > -0x1 || _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x1c9)) > -0x1 || _0x3e6603[_0x2e210c(0x2da)](_0x2e210c(0x1bd)) > -0x1,
      },
      _0xc27506 = ![];
    if (_0x5b73ee[_0x2e210c(0x231)]) {
      var _0x10c0ba = _0x3e6603[_0x2e210c(0x2c5)](/^.*Chrome\/([\d]+).*$/, "$1"),
        _0x23a2dc = ![];
      for (var _0x113993 in _0x5b73ee[_0x2e210c(0x231)]) {
        _0x113993[_0x2e210c(0x2da)](_0x2e210c(0x262)) > -0x1 && (_0x23a2dc = !![]);
      }
      if (_0x23a2dc) _0x32283f[_0x2e210c(0x262)] = !![];
      else {
        if (_0x5b73ee[_0x2e210c(0x231)][_0x2e210c(0x19f)] || _0x5b73ee[_0x2e210c(0x231)]["common2345"]) _0x32283f[_0x2e210c(0x18f)] = !![];
        else {
          if (_0x5829ca(_0x2e210c(0x1b9), _0x2e210c(0x217)) || _0x5829ca("type", "application/mozilla-npqihooquicklogin")) _0xc27506 = !![];
          else {
            if (_0x10c0ba > 0x24 && _0x5b73ee["showModalDialog"]) _0xc27506 = !![];
            else _0x10c0ba > 0x2d && ((_0xc27506 = _0x5829ca(_0x2e210c(0x1b9), "application/vnd.chromium.remoting-viewer")), !_0xc27506 && _0x10c0ba >= 0x45 && (_0xc27506 = _0x5829ca(_0x2e210c(0x1b9), _0x2e210c(0x1b7)) || _0x5829ca(_0x2e210c(0x1b9), "application/asx")));
          }
        }
      }
    }
    if (_0x32283f["Mobile"]) _0x32283f["Mobile"] = !(_0x3e6603["indexOf"](_0x2e210c(0x2a2)) > -0x1);
    else {
      if (_0xc27506) {
        if (_0x5829ca(_0x2e210c(0x1b9), _0x2e210c(0x313))) _0x32283f[_0x2e210c(0x20a)] = !![];
        else _0x1ea8ea && typeof _0x1ea8ea[_0x2e210c(0x1cb)] !== _0x2e210c(0x214) && typeof _0x1ea8ea[_0x2e210c(0x1cb)][_0x2e210c(0x197)] == _0x2e210c(0x214) ? (_0x32283f["360SE"] = !![]) : (_0x32283f[_0x2e210c(0x340)] = !![]);
      }
    }
    if (_0x32283f["IE"] || _0x32283f[_0x2e210c(0x31f)]) {
      var _0x5c2658 = window[_0x2e210c(0x27d)] - window["screenY"];
      switch (_0x5c2658) {
        case 0x47:
        case 0x63:
        case 0x66:
          _0x32283f["360EE"] = !![];
          break;
        case 0x4b:
        case 0x69:
        case 0x68:
          _0x32283f[_0x2e210c(0x20a)] = !![];
          break;
      }
    }
    if (_0x32283f["Baidu"] && _0x32283f["Opera"]) _0x32283f["Baidu"] = ![];
    else _0x32283f[_0x2e210c(0x19c)] && (_0x32283f[_0x2e210c(0x194)] = !![]);
    var _0x3053d6 = {
      engine: ["WebKit", "Trident", "Gecko", _0x2e210c(0x212), _0x2e210c(0x28e)],
      browser: [
        _0x2e210c(0x194),
        _0x2e210c(0x310),
        "Edge",
        "IE",
        "Firefox",
        _0x2e210c(0x2bd),
        _0x2e210c(0x2d6),
        _0x2e210c(0x1e8),
        _0x2e210c(0x1fe),
        "Yandex",
        _0x2e210c(0x2bf),
        _0x2e210c(0x2f5),
        "QupZilla",
        _0x2e210c(0x264),
        "Kindle",
        _0x2e210c(0x294),
        _0x2e210c(0x2d0),
        "Iceape",
        _0x2e210c(0x22c),
        _0x2e210c(0x318),
        _0x2e210c(0x1f8),
        _0x2e210c(0x205),
        "360",
        _0x2e210c(0x20a),
        _0x2e210c(0x340),
        "UC",
        _0x2e210c(0x315),
        "QQ",
        _0x2e210c(0x249),
        _0x2e210c(0x331),
        _0x2e210c(0x2fc),
        "Sogou",
        _0x2e210c(0x262),
        "2345Explorer",
        _0x2e210c(0x335),
        _0x2e210c(0x2af),
        "Quark",
        _0x2e210c(0x2be),
        _0x2e210c(0x1bc),
        _0x2e210c(0x346),
        _0x2e210c(0x277),
        _0x2e210c(0x193),
        _0x2e210c(0x34e),
        "Douban",
        _0x2e210c(0x33c),
        _0x2e210c(0x1fb),
        _0x2e210c(0x25c),
      ],
      os: [_0x2e210c(0x2c3), _0x2e210c(0x243), "Mac\x20OS", _0x2e210c(0x230), _0x2e210c(0x22b), _0x2e210c(0x284), _0x2e210c(0x34a), _0x2e210c(0x19c), "Windows\x20Phone", _0x2e210c(0x210), _0x2e210c(0x320), _0x2e210c(0x1b0), _0x2e210c(0x290), _0x2e210c(0x281)],
      device: ["Mobile", _0x2e210c(0x327)],
    };
    (_0x45f1bd[_0x2e210c(0x2de)] = "PC"),
      (_0x45f1bd["language"] = (function () {
        var _0x4b0d3c = _0x2e210c,
          _0x9fd13f = _0x1ea8ea[_0x4b0d3c(0x20d)] || _0x1ea8ea[_0x4b0d3c(0x2cb)],
          _0x47dbaf = _0x9fd13f[_0x4b0d3c(0x2e1)]("-");
        return _0x47dbaf[0x1] && (_0x47dbaf[0x1] = _0x47dbaf[0x1][_0x4b0d3c(0x1e7)]()), _0x47dbaf[_0x4b0d3c(0x1c3)]("_");
      })());
    for (var _0x41c180 in _0x3053d6) {
      for (var _0xbdec51 = 0x0; _0xbdec51 < _0x3053d6[_0x41c180][_0x2e210c(0x26b)]; _0xbdec51++) {
        var _0x162bfc = _0x3053d6[_0x41c180][_0xbdec51];
        _0x32283f[_0x162bfc] && (_0x45f1bd[_0x41c180] = _0x162bfc);
      }
    }
    var _0x5c0042 = {
      Windows: function () {
        var _0x3eb591 = _0x3e6603["replace"](/^Mozilla\/\d.0 \(Windows NT ([\d.]+);.*$/, "$1"),
          _0x235ef7 = { 10: "10", 6.4: "10", 6.3: "8.1", 6.2: "8", 6.1: "7", "6.0": "Vista", 5.2: "XP", 5.1: "XP", "5.0": "2000" };
        return _0x3eb591;
      },
      Android: function () {
        var _0x1c3475 = _0x2e210c;
        return _0x3e6603[_0x1c3475(0x2c5)](/^.*Android ([\d.]+);.*$/, "$1");
      },
      iOS: function () {
        var _0x4a6fe6 = _0x2e210c;
        return _0x3e6603["replace"](/^.*OS ([\d_]+) like.*$/, "$1")[_0x4a6fe6(0x2c5)](/_/g, ".");
      },
      Debian: function () {
        var _0x514c9f = _0x2e210c;
        return _0x3e6603[_0x514c9f(0x2c5)](/^.*Debian\/([\d.]+).*$/, "$1");
      },
      "Windows\x20Phone": function () {
        var _0x54fd65 = _0x2e210c;
        return _0x3e6603[_0x54fd65(0x2c5)](/^.*Windows Phone( OS)? ([\d.]+);.*$/, "$2");
      },
      "Mac\x20OS": function () {
        var _0x462760 = _0x2e210c;
        return _0x3e6603[_0x462760(0x2c5)](/^.*Mac OS X ([\d_]+).*$/, "$1")[_0x462760(0x2c5)](/_/g, ".");
      },
      WebOS: function () {
        var _0x28cef0 = _0x2e210c;
        return _0x3e6603[_0x28cef0(0x2c5)](/^.*hpwOS\/([\d.]+);.*$/, "$1");
      },
    };
    _0x45f1bd[_0x2e210c(0x207)] = "";
    _0x5c0042[_0x45f1bd["os"]] && ((_0x45f1bd["osVersion"] = _0x5c0042[_0x45f1bd["os"]]()), _0x45f1bd["osVersion"] == _0x3e6603 && (_0x45f1bd["osVersion"] = ""));
    var _0x160048 = {
      Safari: function () {
        var _0x551a3f = _0x2e210c;
        return _0x3e6603[_0x551a3f(0x2c5)](/^.*Version\/([\d.]+).*$/, "$1");
      },
      Chrome: function () {
        var _0x56ef27 = _0x2e210c;
        return _0x3e6603[_0x56ef27(0x2c5)](/^.*Chrome\/([\d.]+).*$/, "$1")[_0x56ef27(0x2c5)](/^.*CriOS\/([\d.]+).*$/, "$1");
      },
      IE: function () {
        var _0x49be49 = _0x2e210c;
        return _0x3e6603[_0x49be49(0x2c5)](/^.*MSIE ([\d.]+).*$/, "$1")[_0x49be49(0x2c5)](/^.*rv:([\d.]+).*$/, "$1");
      },
      Edge: function () {
        var _0x4d84c3 = _0x2e210c;
        return _0x3e6603[_0x4d84c3(0x2c5)](/^.*Edge\/([\d.]+).*$/, "$1")[_0x4d84c3(0x2c5)](/^.*Edg\/([\d.]+).*$/, "$1");
      },
      Firefox: function () {
        var _0x3ca3a5 = _0x2e210c;
        return _0x3e6603[_0x3ca3a5(0x2c5)](/^.*Firefox\/([\d.]+).*$/, "$1")[_0x3ca3a5(0x2c5)](/^.*FxiOS\/([\d.]+).*$/, "$1");
      },
      "Firefox\x20Focus": function () {
        return _0x3e6603["replace"](/^.*Focus\/([\d.]+).*$/, "$1");
      },
      Chromium: function () {
        var _0x55d71c = _0x2e210c;
        return _0x3e6603[_0x55d71c(0x2c5)](/^.*Chromium\/([\d.]+).*$/, "$1");
      },
      Opera: function () {
        var _0x5e4573 = _0x2e210c;
        return _0x3e6603[_0x5e4573(0x2c5)](/^.*Opera\/([\d.]+).*$/, "$1")[_0x5e4573(0x2c5)](/^.*OPR\/([\d.]+).*$/, "$1");
      },
      Vivaldi: function () {
        var _0x24582c = _0x2e210c;
        return _0x3e6603[_0x24582c(0x2c5)](/^.*Vivaldi\/([\d.]+).*$/, "$1");
      },
      Yandex: function () {
        var _0x2949fa = _0x2e210c;
        return _0x3e6603[_0x2949fa(0x2c5)](/^.*YaBrowser\/([\d.]+).*$/, "$1");
      },
      Arora: function () {
        var _0x45d836 = _0x2e210c;
        return _0x3e6603[_0x45d836(0x2c5)](/^.*Arora\/([\d.]+).*$/, "$1");
      },
      Lunascape: function () {
        var _0x2d81f1 = _0x2e210c;
        return _0x3e6603[_0x2d81f1(0x2c5)](/^.*Lunascape[\/\s]([\d.]+).*$/, "$1");
      },
      QupZilla: function () {
        var _0x343e4b = _0x2e210c;
        return _0x3e6603[_0x343e4b(0x2c5)](/^.*QupZilla[\/\s]([\d.]+).*$/, "$1");
      },
      "Coc\x20Coc": function () {
        var _0x59c9b0 = _0x2e210c;
        return _0x3e6603[_0x59c9b0(0x2c5)](/^.*coc_coc_browser\/([\d.]+).*$/, "$1");
      },
      Kindle: function () {
        var _0xc033e5 = _0x2e210c;
        return _0x3e6603[_0xc033e5(0x2c5)](/^.*Version\/([\d.]+).*$/, "$1");
      },
      Iceweasel: function () {
        var _0x34b7b3 = _0x2e210c;
        return _0x3e6603[_0x34b7b3(0x2c5)](/^.*Iceweasel\/([\d.]+).*$/, "$1");
      },
      Konqueror: function () {
        var _0x181c1e = _0x2e210c;
        return _0x3e6603[_0x181c1e(0x2c5)](/^.*Konqueror\/([\d.]+).*$/, "$1");
      },
      Iceape: function () {
        var _0x4ec0dc = _0x2e210c;
        return _0x3e6603[_0x4ec0dc(0x2c5)](/^.*Iceape\/([\d.]+).*$/, "$1");
      },
      SeaMonkey: function () {
        return _0x3e6603["replace"](/^.*SeaMonkey\/([\d.]+).*$/, "$1");
      },
      Epiphany: function () {
        var _0x44e18b = _0x2e210c;
        return _0x3e6603[_0x44e18b(0x2c5)](/^.*Epiphany\/([\d.]+).*$/, "$1");
      },
      360: function () {
        var _0x2d31a6 = _0x2e210c;
        return _0x3e6603[_0x2d31a6(0x2c5)](/^.*QihooBrowser\/([\d.]+).*$/, "$1");
      },
      "360SE": function () {
        var _0xf43c72 = _0x2e210c,
          _0x57507d = { 86: _0xf43c72(0x329), 78: _0xf43c72(0x339), 69: _0xf43c72(0x235), 63: "10.0", 55: _0xf43c72(0x2d7), 45: _0xf43c72(0x2df), 42: "8.0", 31: _0xf43c72(0x308), 21: _0xf43c72(0x2a7) },
          _0x3130c2 = _0x3e6603["replace"](/^.*Chrome\/([\d]+).*$/, "$1");
        return _0x57507d[_0x3130c2] || "";
      },
      "360EE": function () {
        var _0x5c7b75 = _0x2e210c,
          _0x4caeff = { 86: "13.0", 78: _0x5c7b75(0x339), 69: _0x5c7b75(0x235), 63: _0x5c7b75(0x350), 55: _0x5c7b75(0x221), 50: "8.7", 30: _0x5c7b75(0x2ce) },
          _0x38bad7 = _0x3e6603[_0x5c7b75(0x2c5)](/^.*Chrome\/([\d]+).*$/, "$1");
        return _0x4caeff[_0x38bad7] || "";
      },
      Maxthon: function () {
        return _0x3e6603["replace"](/^.*Maxthon\/([\d.]+).*$/, "$1");
      },
      QQBrowser: function () {
        return _0x3e6603["replace"](/^.*QQBrowser\/([\d.]+).*$/, "$1");
      },
      QQ: function () {
        var _0x380254 = _0x2e210c;
        return _0x3e6603[_0x380254(0x2c5)](/^.*QQ\/([\d.]+).*$/, "$1");
      },
      Baidu: function () {
        return _0x3e6603["replace"](/^.*BIDUBrowser[\s\/]([\d.]+).*$/, "$1")["replace"](/^.*baiduboxapp\/([\d.]+).*$/, "$1");
      },
      UC: function () {
        return _0x3e6603["replace"](/^.*UC?Browser\/([\d.]+).*$/, "$1");
      },
      Sogou: function () {
        var _0x5cc8fa = _0x2e210c;
        return _0x3e6603[_0x5cc8fa(0x2c5)](/^.*SE ([\d.X]+).*$/, "$1")[_0x5cc8fa(0x2c5)](/^.*SogouMobileBrowser\/([\d.]+).*$/, "$1");
      },
      Liebao: function () {
        var _0x137092 = _0x2e210c,
          _0x5950bd = "";
        _0x3e6603["indexOf"](_0x137092(0x248)) > -0x1 && (_0x5950bd = _0x3e6603["replace"](/^.*LieBaoFast\/([\d.]+).*$/, "$1"));
        var _0xe9ecde = { 57: "6.5", 49: _0x137092(0x22e), 46: _0x137092(0x223), 42: _0x137092(0x273), 39: "5.2", 34: _0x137092(0x27e), 29: _0x137092(0x1cd), 21: "4.0" },
          _0x308878 = _0x3e6603[_0x137092(0x2c5)](/^.*Chrome\/([\d]+).*$/, "$1");
        return _0x5950bd || _0xe9ecde[_0x308878] || "";
      },
      "2345Explorer": function () {
        var _0x4cfcc0 = _0x2e210c,
          _0x3e9114 = { 69: "10.0", 55: _0x4cfcc0(0x21e) },
          _0x124e87 = navigator[_0x4cfcc0(0x287)][_0x4cfcc0(0x2c5)](/^.*Chrome\/([\d]+).*$/, "$1");
        return _0x3e9114[_0x124e87] || _0x3e6603[_0x4cfcc0(0x2c5)](/^.*2345Explorer\/([\d.]+).*$/, "$1")[_0x4cfcc0(0x2c5)](/^.*Mb2345Browser\/([\d.]+).*$/, "$1");
      },
      "115Browser": function () {
        var _0x22c690 = _0x2e210c;
        return _0x3e6603[_0x22c690(0x2c5)](/^.*115Browser\/([\d.]+).*$/, "$1");
      },
      TheWorld: function () {
        var _0x4361ef = _0x2e210c;
        return _0x3e6603[_0x4361ef(0x2c5)](/^.*TheWorld ([\d.]+).*$/, "$1");
      },
      XiaoMi: function () {
        var _0x11178d = _0x2e210c;
        return _0x3e6603[_0x11178d(0x2c5)](/^.*MiuiBrowser\/([\d.]+).*$/, "$1");
      },
      Vivo: function () {
        var _0x38197d = _0x2e210c;
        return _0x3e6603[_0x38197d(0x2c5)](/^.*VivoBrowser\/([\d.]+).*$/, "$1");
      },
      Quark: function () {
        return _0x3e6603["replace"](/^.*Quark\/([\d.]+).*$/, "$1");
      },
      Qiyu: function () {
        var _0x11c818 = _0x2e210c;
        return _0x3e6603[_0x11c818(0x2c5)](/^.*Qiyu\/([\d.]+).*$/, "$1");
      },
      Wechat: function () {
        var _0x380feb = _0x2e210c;
        return _0x3e6603[_0x380feb(0x2c5)](/^.*MicroMessenger\/([\d.]+).*$/, "$1");
      },
      WechatWork: function () {
        var _0x352de3 = _0x2e210c;
        return _0x3e6603[_0x352de3(0x2c5)](/^.*wxwork\/([\d.]+).*$/, "$1");
      },
      Taobao: function () {
        var _0x4b937d = _0x2e210c;
        return _0x3e6603[_0x4b937d(0x2c5)](/^.*AliApp\(TB\/([\d.]+).*$/, "$1");
      },
      Alipay: function () {
        return _0x3e6603["replace"](/^.*AliApp\(AP\/([\d.]+).*$/, "$1");
      },
      Weibo: function () {
        return _0x3e6603["replace"](/^.*weibo__([\d.]+).*$/, "$1");
      },
      Douban: function () {
        var _0x32b8c2 = _0x2e210c;
        return _0x3e6603[_0x32b8c2(0x2c5)](/^.*com.douban.frodo\/([\d.]+).*$/, "$1");
      },
      Suning: function () {
        var _0x5c750f = _0x2e210c;
        return _0x3e6603[_0x5c750f(0x2c5)](/^.*SNEBUY-APP([\d.]+).*$/, "$1");
      },
      iQiYi: function () {
        var _0x40bb53 = _0x2e210c;
        return _0x3e6603[_0x40bb53(0x2c5)](/^.*IqiyiVersion\/([\d.]+).*$/, "$1");
      },
      DingTalk: function () {
        return _0x3e6603["replace"](/^.*DingTalk\/([\d.]+).*$/, "$1");
      },
      Huawei: function () {
        var _0x5ee967 = _0x2e210c;
        return _0x3e6603["replace"](/^.*Version\/([\d.]+).*$/, "$1")[_0x5ee967(0x2c5)](/^.*HuaweiBrowser\/([\d.]+).*$/, "$1");
      },
    };
    _0x45f1bd[_0x2e210c(0x1ae)] = "";
    _0x160048[_0x45f1bd["browser"]] && ((_0x45f1bd[_0x2e210c(0x1ae)] = _0x160048[_0x45f1bd[_0x2e210c(0x2bb)]]()), _0x45f1bd[_0x2e210c(0x1ae)] == _0x3e6603 && (_0x45f1bd[_0x2e210c(0x1ae)] = ""));
    _0x45f1bd[_0x2e210c(0x2bb)] == _0x2e210c(0x310) && _0x3e6603[_0x2e210c(0x18d)](/\S+Browser/) && ((_0x45f1bd[_0x2e210c(0x2bb)] = _0x3e6603[_0x2e210c(0x18d)](/\S+Browser/)[0x0]), (_0x45f1bd[_0x2e210c(0x1ae)] = _0x3e6603[_0x2e210c(0x2c5)](/^.*Browser\/([\d.]+).*$/, "$1")));
    if (_0x45f1bd[_0x2e210c(0x2bb)] == _0x2e210c(0x31f)) _0x45f1bd["version"] > "75" ? (_0x45f1bd[_0x2e210c(0x321)] = _0x2e210c(0x1f7)) : (_0x45f1bd[_0x2e210c(0x321)] = _0x2e210c(0x347));
    else {
      if (_0x32283f[_0x2e210c(0x310)] && _0x45f1bd[_0x2e210c(0x321)] == "WebKit" && parseInt(_0x160048[_0x2e210c(0x310)]()) > 0x1b) _0x45f1bd[_0x2e210c(0x321)] = _0x2e210c(0x1f7);
      else {
        if (_0x45f1bd[_0x2e210c(0x2bb)] == _0x2e210c(0x1e8) && parseInt(_0x45f1bd[_0x2e210c(0x1ae)]) > 0xc) _0x45f1bd[_0x2e210c(0x321)] = _0x2e210c(0x1f7);
        else _0x45f1bd["browser"] == _0x2e210c(0x297) && (_0x45f1bd["engine"] = _0x2e210c(0x1f7));
      }
    }
  };
});

/**
 * 开发者设定参数及说明
 *
 */

/* 
APP和浏览器的响应其变化方式   CurEventType，对应的AppFollow
AE_eventType_Follow={
1:   [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]
2:   [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31]
4:   [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31]
8:   [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31]
16:   [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
}
 
 AE_AppObj 结构
 { AppId:                                        //AppId  1 2 3 4 5    {}表示所有  
           {Obj: "flash" ,                      //flash office comm web file...         
			  AppShow:true,                      //显示APP载体
			  AppFollow:31,                       // AppShow:true是才生效  
			  pos:[l,t,w,h],                          // 保存最新绝对pos，调用参数1 追加最新绝对位置， -1 删除绝对位置， 
			  elementId:"AppEmbed1",     //多个则需要分别设置AppEmbed2 、AppEmbed3、AppEmbed4
			  AppStatus:0,                         //1已打开 0已关闭
			  AppRuntime:0,                      //1  runtime 服务，F5刷新不自动关闭APP，需要手动关闭。默认为0，F5刷新，更新所有的APP
			  hideScaleXY:[0.7,0.7]           //滚动后需要隐藏App时的被卷入App长度具体width,height比例阈值。hideScaleXY优先于AE_hideScale， 对于多开App窗口，可以设置此参数 
            },
	AppId2:{...}		
 }
 */

//初始化数据,后续代码最好可以单独压缩加密

var wsInit = {
  ws_port: [80, 8617, 8618, 8619, 8811], //必需， [80,8617,8618,8619,8811];  ws端口。  可修改，与config.ini文件设置一致,websocket可用的未注册的端口。 依次尝试，若全部失败则在最后一个端口(不小于2000，并剔除 未指定端口排除表的端口)基础，再尝试port_try_Maxcnt次+1打开
  wss_port: [443, 7131, 7132, 7133, 7366], //必需，  wss端口。可修改 。同上。
  port_try_Maxcnt: 3, //非必需，为指定端口最大尝试次数，可以调整为0或者 65536 不限制尝试。
  excludePorts: [2049], // 必需，为指定端口排除表，与config.ini文件设置一致，已排除小于2000的端口，可追加chrome不可用的websocket端口。只能追加。https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml?&page=5
  initSet: null,
  service: "appemit", //服务名称，普通用户修改无效	,如果有权修改，则initSet中的wsUrl需要一致
  emitInterval: 10, //发送命令时间间隔
  URLProtocol: 1, //默认1开启网页定义私有协议appemitweb启动后台程序，同时config.ini里面 URLProtocol=1已经设置了注册表才有效。用来解决客户端的后台程序被关闭了的情况，已经有用户上线不能重启后台程序。
  protocolTime: 2500, //执行浏览器调用私有协议时间判断
  protectClear: 1, //  默认1 ，为了安全，AE.InitApp初始化后清除 clientKey和 OTP（AE.InitApp应该是执行一次，即F5重载页面之后才能重新使用clientKey执行AE.InitApp），0不做处理
  JsOutData: null, //非必需 {}保存所有的反馈结果  ,设置null不保存结果

  scroll_Deb_thr: 1, //  滚动条防抖 节流方式 默认1 debounce   2 throttle
  debounce_throttle_time: 80, //防抖 节流时间间隔 可以修改
  debounce_throttle_stamp: 0, //防抖 节流  0立刻执行，1时间段末执行

  moveInterval: 80, //执行浏览器移动间隔
  resizeTimeout: 80, //执行浏览器改变大小时间延迟
  zeroType: true, //   true  最大化时启动0坐标模式,App GUI 只能移动到0,0位置. 地图模式推荐 false 可以负坐标
  elementId: "AppEmbed", //必需。绑定的div或者textarea等节点名称前缀，可以修改，要求和html一致
  AppFollow: 31, // AppShow:true时 才生效, APP和浏览器的响应其变化方式为  this.CurEventType 1  滚动  2移动 4隐显 8大小 16缩放比例  0否,对应的值求和即得到eventType_Follow
  //如 31 响应所有事件 30不响应滚动事件 23不响应浏览器窗口resize事件  3为滚动1+移动事件2
  showPar: null, //强制缩放时刷新，-1 zoom时关闭再显示   SW_SHOWNORMAL = 1  SW_SHOWMINIMIZED = 2 SW_SHOWMAXIMIZED = 3 SW_MAXIMIZE = 3 SW_SHOWNOACTIVATE = 4  SW_SHOW = 5 SW_MINIMIZE = 6   SW_SHOWMINNOACTIVE = 7 SW_SHOWNA = 8      SW_RESTORE = 9	  10 _SW_SHOWDEFAULT
  rid: 0, //必需。默认一直自动加1。本次发送请求的标识 request id  ,可以修改。

  iframeId: null, // 嵌入的iframeId的中需要设置id或者序列号或者元素对象字符串, 没有id,设置数值0为第一个iframe, 元素对象"document.getElementsByTagName('iframe')[0]"，或者getElementById() 。 否则默认为null 没有嵌入iframe。嵌套再嵌套麻烦，不推荐，需要更新地址。 "document.getElementsByTagName('iframe')[0].contentWindow.document.getElementsByTagName('iframe')[0]"

  fixedPos_NoPageOffset: false, // 对应的APP节点固定不变，设置true 将不计算 PageOffset
  absolutePos: { left: 0, top: 0, fun: null }, //嵌套 object 或者使用绝对位置#div来load加载html，需要修改为嵌套的位置来更新elementId的位置.如果是实时动态变化，可以设置"fun":function(o){o.left=80;o.top=80;}

  hideScale: { one: 0.7, more: 0.3 }, //滚动后需要隐藏App时的被卷入App长度通用比例阈值。默认单窗口0.7，多窗口0.3。如果需要具体到宽度和高度，则设置hideScaleXY，以hideScaleXY优先为准。
  callbackFunc: null, //回调函数配置
  callbackFun_cancel: false, //回调函数取消开关 true不执行回调  默认false开启
  noTip_ServerReceiveMsg: false, //调试时，是否显示ServerReceiveMsg提示,noTip_ServerReceiveMsg优先noTipform_ServerReceiveMsg。生产环境不反馈。
  noTipform_ServerReceiveMsg: true, //调试时，是否显示移动窗口的反馈,默认不显示
};

//最好混淆加密本段代码(比如https://obfuscator.io ，可以勾选split strings ，5；选择String Array Encoding RC4；如果禁止调试可debug Protection)，不要公开 clientKey等私密数据

wsInit.initSet = {
  //必需。 websocket初始化参数
  emit: "init", //不可更改。
  clientKey: "temp-0000000000", //【需要更改】，登陆界面我的应用中设置。最好混淆加密本js文件(比如https://obfuscator.io ，可以勾选split strings ，5；选择String Array Encoding RC4；如果禁止调试可debug Protection)，不要公开 clientKey等私密数据
  //"OTP":"24DqU57GuWXi_q0IepZ25E60t5Ue_Cewc7P24ica3r0",   // 开发者自行获取自己公司的服务器动态生成 OTP。设置了OTP，clientKey可以不用。生成算法具体见说明书。
  wsUrl: "ws://localhost:80/appemit?cid=00000-1&sid=1&flag=1", //cid必需
  // "flag":0,                                        //调试标识。默认为0生产环境 1 调试   2生产环境压缩  3 调试压缩
  //strvar:0,                                       //参数字符串含有变量标识。推荐默认0，  1则会所有命令执行替换${}  $[]的固定参数。单独runCmd可以在调用的命令中设置strvar，只是执行本命令codeStr的${}  $[]替换。
  //  "sid":"1",                                      // 必需。用户session 或者用户名ID，用户之间通话则必需唯一，才能互相准确通话     //sid  gid 发布后统一设置在此。在调试时也可以在wsUrl的参数里面设置
  gid: "[1,2]", //非必需。用户群(频道、子公司、组)ID，一个用户可以加入多个群(频道、子公司、组)
  //"utf_escape":false,                         //默认false, 反馈的data编码转义
  noRecTip: 0, //1测试环境flag=1或3不反馈接收数据，默认0反馈接收数据。生产环境不反馈。
  noErrTip: 1, //生产环境flag=0或2下,1不反馈错误，0反馈错误。测试环境反馈所有。
  monitor: { on: 0, interval: 1000, maxHungCnt: 3, hungTimeout: 500, func: "restart" }, //on=1开启守护监控，一般是插件没有反应导致出现无响应，每interval毫秒监控一次，如果在hungTimeout时间内是无响应状态，记为1次无响应，不间隔无响应累计maxHungCnt次执行func对应的重启动作。但是最好的处理方案是，消息队列处理，通过rid和rep来判断上一条执行命令的情况，再确定是否执行下一条命令。
};

var AE = new AppEmit(wsInit);

//AE.noServiceFun=function(){ }     //没有安装exe的执行过程

//按业务需求，可重写AE.InitApp中的websocket过程 ，生产环境中，设置了clientKey，应该只执行AE.InitApp过程一次 。如果protectClear =1，则会清空clientKey，必须刷新后再执行初始化 AE.InitApp，若不需要安全保护protectClear=0即可。
/* 
 	  AE.InitApp=function(wsUrl,callbackFunc) {      //wsUrl callbackFunc 也可在wsInit定义
		
			    if (!!callbackFunc && typeof(callbackFunc)=="object") this.callbackFunc=callbackFunc;  
				 if (wsUrl && typeof(wsUrl)=="string") this.initSet.wsUrl=wsUrl ;
				if (!this.initSet.wsUrl) {
					console.log("No  websocket  Url");
					return false;
				}else{ //保留原始地址
					if (!this.initSet.wsUrl_old) this.initSet.wsUrl_old=this.initSet.wsUrl;
				}
          
				try {
					 this.ws = new WebSocket(this.initSet.wsUrl);          //ws://localhost:80/appemit?cid=00000-1&sid=1&flag=1
				 // 打开Socket 
					this.ws.onopen = function(evt) {
                           this.wsOpenFun();
					}.bind(this);
					// 监听消息
					this.ws.onmessage = function(evt) {
						var data = evt.data;
						var Jdata =null,Jdata_Json=0;
						try {
						 if (this.initSet.flag==2 || this.initSet.flag==3 )  { data=this.unGzip(atob(data))}   //解压数据
						}catch(e) {
							 console.log('error：zip '+data+'  '+e);
					 }
					
						  if (typeof data == 'string') {
									try {
							  
										  Jdata = JSON.parse(data);
										   	 
										   if  (typeof Jdata == 'object' && Jdata )  {
												Jdata_Json=1 ;
											   if (!(Jdata.tip && Jdata.tip=="PONG") )  {
											        //不显示反馈
													 
												  if  ((this.initSet.flag%2==0 ) || (this.initSet.flag%2==1 && !(this.noTip_ServerReceiveMsg && Jdata.tip=="server receive msg" && Jdata.rep==0 ))) { //调试
													     //不显示移动窗口的反馈 noTipform_ServerReceiveMsg
													 
													   if  (!(Jdata.tip=="server receive msg"  && this.noTipform_ServerReceiveMsg  &&  typeof Jdata.req=="string" && Jdata.req.match(/("emit":"show")|("emit":"resize")|("emit":"move")|("emit":"hide")/i) ) ) {
	                                                  
													  if (!!this.callbackFunc) { this.callFunc(Jdata,this.callbackFunc) ;  }  //满足条件回调
													  
													     if (((this.initSet.flag%2==0 ) &&  (!this.initSet.noErrTip && (Jdata.err || Jdata.tip)))  ||   (this.initSet.flag%2==1 )  )console.log( Jdata);    
													    
													   }
												  }
												
													 
											   }
										   }
									} catch(e) {
										 console.log('error：JSON '+data+'  '+e);
									}
							}
 
                      this.wsMessageFun(Jdata);        //必需调用处理,确定打开的端口是AppEmit的websocket
					  if (!this.SvrOpenMark) return;   //自动连接下一个端口
					   
						// 按业务需求调整
						   //处理接收的不是JSON字符 比如 comm串口数据或者二进制数据							 
					   if  (!Jdata_Json ) {
						   // data  instanceof Blob   pako
						
						   /////////////进一步处理
						   // console.log( data);
						 
						 //var blob=new Blob([data],{"type":"application/octet-binary"}); 
						   return;  
					   }
					   	//保存数据 
						if (Jdata.rid && Jdata.data  ) {  //typeof Jdata.rid === 'number' && !isNaN(Jdata.rid) 
							   /////////////进一步处理
							//console.log(Jdata)
							if (this.JsOutData) this.JsOutData[Jdata.rid]= Jdata ;       // 反馈结果data 可以修改
						}
                         if (this.initSet.flag%2==1) {   //测试显示结果
								AppEmbedOut = document.getElementById("AppEmbedOut");
								if (AppEmbedOut   && !Jdata.tip   ) {     //   && !Jdata.tip   提示信息不显示 
									AppEmbedOut.innerHTML = data + '</br>' + AppEmbedOut.innerHTML
								}
						 }
					}.bind(this);
					this.ws.onerror = function(evt) {
						// 重新连接
					  this.wsErrorFun();
					  
					}.bind(this);
					this.ws.onclose = function(evt) {
						this.wsCloseFun();
					}.bind(this);

				} catch (ex) {
					console.log(ex.message);
				}
			   return true;
			} ,
			 
	*/
