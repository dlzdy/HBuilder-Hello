function __adsfsdaf99dsafsd090dsfsd__() {
  function e(e, t) {
    t = [e][i[5]]([][i[6]][i[7]](t)),
    logger[i[8]][i[9]](logger, t)
  }
  function t(e, t) {
    try {
      switch (t) {
      case i[10]:
      case i[11]:
        return JSON[i[12]](e);
      case i[13]:
        return i[14]
      }
    } catch(n) {
      return i[15] + n
    }
    return null === e || void 0 === e ? Object[i[16]].toString[i[7]](e) : e[i[17]]()
  }
  function n(e, n) {
    if (null === e || void 0 === e) return [i[18]];
    if (1 == arguments[i[19]]) return [e[i[17]]()];
    typeof e != i[20] && (e = e[i[17]]());
    for (var o = /(.*?)%(.)(.*)/,
    r = e,
    s = []; n[i[19]];) {
      var a = o[i[21]](r);
      if (!a) break;
      var c = n[i[22]]();
      r = a[3],
      s[i[23]](a[1]),
      a[2] != i[24] ? s[i[23]](t(c, a[2])) : (s[i[23]](i[24]), n[i[26]](c))
    }
    s[i[23]](r);
    var u = [][i[6]][i[7]](n);
    return u[i[26]](s[i[27]](i[14])),
    u
  }
  var i = ["plus", "tools", "bridge", "Console", "console", "concat", "slice", "call", "logLevel", "apply", "j", "o", "stringify", "c", "", "error JSON.stringify()ing argument: ", "prototype", "toString", "", "length", "string", "exec", "shift", "push", "%", "%", "unshift", "join", "", "log", "LOG", "info", "INFO", "warn", "WARN", "error", "ERROR", "assert", "ASSERT:", "clear", "clear", "time", "valueOf", "timeEnd", "Timer [", ": ", "ms]", "format", "logLevel", " ", "debug", "addEventListener", "error", "message", "\rfilename:", "filename", "\rlineno:", "lineno"],
  o = (window[i[0]][i[1]], window[i[0]]),
  r = !0;
  B = window[i[0]][i[2]],
  _LOGF = i[3],
  winConsole = window[i[4]],
  Timers = {},
  logger = {},
  logger[i[29]] = function() {
    e(i[30], arguments)
  },
  logger[i[31]] = function() {
    e(i[32], arguments)
  },
  logger[i[33]] = function() {
    e(i[34], arguments)
  },
  logger[i[35]] = function() {
    e(i[36], arguments)
  },
  logger[i[37]] = function(e) {
    if (!e) {
      var t = vformat([][i[6]][i[7]](arguments, 1));
      throw logger[i[29]](i[38] + t),
      Error(t)
    }
  },
  logger[i[39]] = function() {
    B[i[21]](_LOGF, i[40], 0)
  },
  logger[i[41]] = function(e) {
    Timers[e] = (new Date)[i[42]]()
  },
  logger[i[43]] = function(e) {
    var t = Timers[e];
    if (t) {
      var n = (new Date)[i[42]]() - t;
      logger[i[29]](i[44] + e + i[45] + n + i[46])
    }
  },
  logger[i[8]] = function(e) {
    var t = [][i[6]][i[7]](arguments, 1),
    n = logger[i[47]][i[9]](logger[i[47]], t);
    B[i[21]](_LOGF, i[48], [e, n])
  },
  logger[i[47]] = function() {
    return n(arguments[0], [][i[6]][i[7]](arguments, 1))[i[27]](i[49])
  },
  r ? (o[i[4]] = {},
  o[i[4]][i[29]] = function() {},
  o[i[4]][i[31]] = function() {},
  o[i[4]][i[35]] = function() {},
  o[i[4]][i[33]] = function() {},
  o[i[4]][i[37]] = function() {},
  o[i[4]][i[39]] = function() {},
  o[i[4]][i[41]] = function() {},
  o[i[4]][i[43]] = function() {}) : o[i[4]] = logger,
  o[i[1]][i[50]] && (window[i[4]][i[29]] = logger[i[29]], window[i[4]][i[31]] = logger[i[31]], window[i[4]][i[35]] = logger[i[35]], window[i[4]][i[33]] = logger[i[33]], window[i[51]](i[52],
  function(e) {
    var t = e[i[53]] + i[54] + e[i[55]] + i[56] + e[i[57]];
    window[i[4]][i[35]](t)
  }))
}
if (!window.plus || window.plus && !window.plus.isReady) {
  var type = typeof window.plus;
  "function" == type || "object" == type ? (window.plus.isReady = !0, navigator.plus = window.__html5plus__ = window.plus) : window.__html5plus__ = window.plus = navigator.plus = {
    isReady: !0
  }
} !
function(e) {
  var t = e.tools = {
    __UUID__: 0,
    UNKNOWN: -1,
    IOS: 0,
    ANDROID: 1,
    platform: -1,
    debug: !1,
    UUID: function(e) {
      return e + this.__UUID__+++(new Date).valueOf()
    },
    extend: function(e, t) {
      for (var n in t) e[n] = t[n]
    },
    typeName: function(e) {
      return Object.prototype.toString.call(e).slice(8, -1)
    },
    isDate: function(e) {
      return "Date" == t.typeName(e)
    },
    isArray: function(e) {
      return "Array" == t.typeName(e)
    },
    isDebug: function() {
      return e.tools.debug
    },
    stringify: function(e) {
      return window.JSON3 ? window.JSON3.stringify(e) : JSON.stringify(e)
    },
    isNumber: function(e) {
      return "number" == typeof e || e instanceof Number
    },
    execJSfile: function(e) {
      function t(e) {
        var n = document.head,
        i = document.body;
        n ? n.insertBefore(e, n.firstChild) : i ? i.insertBefore(e, i.firstChild) : setTimeout(function() {
          t(e)
        },
        100)
      }
      var n = document.createElement("script");
      n.type = "text/javascript",
      n.src = e,
      t(n)
    },
    copyObjProp2Obj: function(e, t, n) {
      var i = n instanceof Array ? !0 : !1;
      for (var o in t) {
        var r = !0;
        if (i) for (var s = 0; s < n.length; s++) if (o == n[s]) {
          r = !1;
          break
        }
        r ? e[o] = t[o] : r = !0
      }
    },
    clone: function(e) {
      if (!e || "function" == typeof e || t.isDate(e) || "object" != typeof e) return e;
      var n, i;
      if (t.isArray(e)) {
        for (n = [], i = 0; i < e.length; ++i) n.push(t.clone(e[i]));
        return n
      }
      n = {};
      for (i in e) i in n && n[i] == e[i] || (n[i] = t.clone(e[i]));
      return n
    }
  };
  t.debug = window.__nativeparamer__ && window.__nativeparamer__.debug ? !0 : !1,
  t.platform = window._____platform_____
} (window.plus),
function(plus) {
  function createExecIframe() {
    function e(t) {
      var n = document.body;
      n ? t.parentNode || n.appendChild(t) : setTimeout(function() {
        e(t)
      },
      100)
    }
    var t = document.createElement("iframe");
    return t.id = "exebridge",
    t.style.display = "none",
    e(t),
    t
  }
  window.__prompt__ = window.prompt;
  var T = plus.tools,
  B = plus.bridge = {
    NO_RESULT: 0,
    OK: 1,
    CLASS_NOT_FOUND_EXCEPTION: 2,
    ILLEGAL_ACCESS_EXCEPTION: 3,
    INSTANTIATION_EXCEPTION: 4,
    MALFORMED_URL_EXCEPTION: 5,
    IO_EXCEPTION: 6,
    INVALID_ACTION: 7,
    JSON_EXCEPTION: 8,
    ERROR: 9,
    callbacks: {},
    commandQueue: [],
    isInEvalJs: 0,
    synExecXhr: new XMLHttpRequest,
    execIframe: null,
    nativecomm: function() {
      if (!B.commandQueue.length) return "";
      var e = "[" + B.commandQueue.join(",") + "]";
      return B.commandQueue.length = 0,
      e
    },
    execImg: null,
    createImg: function() {
      function e(t) {
        var n = document.body;
        n ? n.appendChild(t) : setTimeout(function() {
          e(t)
        },
        100)
      }
      var t = document.createElement("img");
      return t.id = "exebridge",
      t.style.display = "none",
      e(t),
      t
    },
    exec: function(e, t, n, i, o) {
      if (n && n.push(i), T.IOS == T.platform) {
        if (window.webkit && window.webkit.messageHandlers) return void window.webkit.messageHandlers.plus.postMessage("[" + T.stringify([window.__HtMl_Id__, e, t, i || null, n]) + "]");
        if (B.commandQueue.push(T.stringify([window.__HtMl_Id__, e, t, i || null, n])), "function" == typeof __dc_plus_Command_ && !B.isInEvalJs && 1 == B.commandQueue.length) {
          {
            __dc_plus_Command_("plus://command")
          }
          return
        }
        B.execIframe && !B.execIframe.parentNode && document.body.appendChild(B.execIframe),
        1 != B.commandQueue.length || B.isInEvalJs || (B.execIframe = B.execIframe || createExecIframe(), B.execIframe.src = "plus://command")
      } else T.ANDROID == T.platform && (o || window._____platform_os_version_____ && window._____platform_os_version_____ < 21 ? window.__prompt__(T.stringify(n), "pdr:" + T.stringify([e, t, !0])) : window._bridge.prompt(T.stringify(n), "pdr:" + T.stringify([e, t, !0])))
    },
    execSync2: function(e, t, n, i, o) {
      try {
        if (T.IOS == T.platform && "function" == typeof __dc__plusGo) {
          var r = T.stringify([[window.__HtMl_Id__, e, t, null, n]]),
          s = __dc__plusGo(r);
          return i ? i(s) : window.eval(s)
        }
      } catch(a) {
        console.log("sf:" + t + "-" + e)
      }
      return B.execSync(e, t, n, i, o)
    },
    execSync: function(service, action, args, fn, force) {
      if (T.IOS == T.platform) {
        if ("function" == typeof __dc__plusGo) {
          var json = T.stringify([[window.__HtMl_Id__, service, action, null, args]]),
          ret = __dc__plusGo(json);
          return fn ? fn(ret) : window.eval(ret)
        }
        try {
          var json = T.stringify([[window.__HtMl_Id__, service, action, null, args]]),
          sync = B.synExecXhr;
          if (sync.open("post", "http://localhost:13131/cmds", !1), sync.setRequestHeader("Content-Type", "multipart/form-data"), sync.send(json), fn) return fn(sync.responseText)
        } catch(e) {
          console.log("sf:" + action + "-" + service)
        }
        return window.eval(sync.responseText)
      }
      if (T.ANDROID == T.platform) {
        var ret;
        return ret = force || window._____platform_os_version_____ && window._____platform_os_version_____ < 21 ? window.__prompt__(T.stringify(args), "pdr:" + T.stringify([service, action, !1])) : window._bridge.prompt(T.stringify(args), "pdr:" + T.stringify([service, action, !1])),
        fn ? fn(ret) : eval(ret)
      }
    },
    nativeEval: function(e) {
      if (T.IOS == T.platform) {
        if (window.webkit && window.webkit.messageHandlers) return window.setTimeout(e, 0),
        "";
        B.isInEvalJs++;
        try {
          return e(),
          B.nativecomm()
        } finally {
          B.isInEvalJs--
        }
      } else e()
    },
    callbackFromNative: function(e, t) {
      var n = B.callbacks[e];
      n && (t.status == B.OK && n.success ? n.success && n.success(t.message) : n.fail && n.fail(t.message), t.keepCallback || delete B.callbacks[e])
    },
    callbackId: function(e, t) {
      var n = T.UUID("plus");
      return B.callbacks[n] = {
        success: e,
        fail: t
      },
      n
    }
  }
} (window.plus),
plus.obj = plus.obj || {},
plus.obj.Callback = function() {
  function e() {
    var e = this;
    e.__callbacks__ = {},
    e.__callback_id__ = plus.bridge.callbackId(function(t) {
      var n = t.evt,
      i = t.args,
      o = e.__callbacks__[n];
      if (o) for (var r = o.length,
      s = 0; r > s; s++) e.onCallback(o[s], n, i)
    })
  }
  return e.prototype.addEventListener = function(e, t) {
    var n = !1,
    i = this;
    return t && (i.__callbacks__[e] || (i.__callbacks__[e] = [], n = !0), i.__callbacks__[e].push(t)),
    n
  },
  e.prototype.removeEventListener = function(e, t) {
    var n = !1,
    i = this;
    return i.__callbacks__[e] && (i.__callbacks__[e].pop(t), n = 0 === i.__callbacks__[e].length, n && (i.__callbacks__[e] = null)),
    n
  },
  e
} (),
function(e, t) {
  function n(e) {
    var t = s.callbackId(function(e) {
      var t = _.slice(0);
      f = new d(e.x, e.y, e.z);
      for (var n = 0,
      i = t.length; i > n; n++) t[n].win(f)
    },
    function(e) {
      for (var t = _.slice(0), n = 0, i = t.length; i > n; n++) t[n].fail(e)
    });
    s.exec(c, "start", [t, e]),
    u = !0
  }
  function i() {
    s.exec(c, "stop", []),
    u = !1
  }
  function o(e, t) {
    return {
      win: e,
      fail: t
    }
  }
  function r(e) {
    var t = _.indexOf(e);
    t > -1 && (_.splice(t, 1), 0 === _.length && i())
  }
  var e = e,
  s = e.bridge,
  a = e.tools,
  c = "Accelerometer",
  u = !1,
  l = {},
  _ = [],
  f = null,
  d = function(e, t, n) {
    this.xAxis = e,
    this.yAxis = t,
    this.zAxis = n
  },
  h = {
    getCurrentAcceleration: function(e, t) {
      var i = o(function(t) {
        r(i),
        e(t)
      },
      function(e) {
        r(i),
        t && t(e)
      });
      _.push(i),
      u || n( - 1)
    },
    watchAcceleration: function(e, i, s) {
      var c = s && s.frequency && "number" == typeof s.frequency ? s.frequency: 500,
      d = a.UUID("watch"),
      h = o(function() {},
      function(e) {
        r(h),
        i && i(e)
      });
      return _.push(h),
      l[d] = {
        timer: t.setInterval(function() {
          f && e(f)
        },
        c),
        listeners: h
      },
      u ? f && e(f) : n(c),
      d
    },
    clearWatch: function(e) {
      e && l[e] && (t.clearInterval(l[e].timer), r(l[e].listeners), delete l[e])
    }
  };
  e.accelerometer = h
} (this.plus, this),
function(e) {
  var e = e,
  t = e.bridge,
  n = e.tools,
  i = "Audio",
  o = "RecorderExecMethod",
  r = "AudioExecMethod",
  s = "AudioSyncExecMethod";
  e.audio = {
    getRecorder: function() {
      var e = {
        _Audio_UUID__: n.UUID("Record"),
        supportedFormats: ["amr", "3gp"],
        supportedSamplerates: [8e3, 16e3, 44100],
        record: function(e, n, r) {
          var s = t.callbackId(n, r);
          t.exec(i, o, ["record", [this._Audio_UUID__, s, e]])
        },
        stop: function() {
          t.exec(i, o, ["stop", [this._Audio_UUID__]])
        },
        pause: function() {
          t.exec(i, o, ["pause", [this._Audio_UUID__]])
        }
      };
      return n.IOS == n.platform && (e.supportedFormats = ["wav", "aac", "amr"]),
      e
    },
    createPlayer: function(e) {
      var o = {
        _Player_FilePath: e,
        _Audio_Player_UUID_: n.UUID("Player"),
        play: function(e, n) {
          var o = t.callbackId(e, n);
          t.exec(i, r, ["play", [this._Audio_Player_UUID_, o]])
        },
        pause: function() {
          t.exec(i, r, ["pause", [this._Audio_Player_UUID_]])
        },
        resume: function() {
          t.exec(i, r, ["resume", [this._Audio_Player_UUID_]])
        },
        stop: function() {
          t.exec(i, r, ["stop", [this._Audio_Player_UUID_]])
        },
        seekTo: function(e) {
          t.exec(i, r, ["seekTo", [this._Audio_Player_UUID_, e]])
        },
        getDuration: function() {
          return t.execSync2(i, s, ["getDuration", [this._Audio_Player_UUID_]])
        },
        getPosition: function() {
          return t.execSync2(i, s, ["getPosition", [this._Audio_Player_UUID_]])
        },
        setRoute: function(e) {
          t.exec(i, r, ["setRoute", [this._Audio_Player_UUID_, e]])
        }
      };
      return t.execSync(i, s, ["CreatePlayer", [o._Audio_Player_UUID_, o._Player_FilePath]]),
      o
    },
    ROUTE_SPEAKER: 0,
    ROUTE_EARPIECE: 1
  }
} (window.plus),
function(e) {
  function t(e, t, o) {
    var r = this;
    r.onmarked = null,
    r.onerror = null,
    r.isClose = !1;
    var s = i.callbackId(function(e) {
      "function" == typeof r.onmarked && r.onmarked(e.type, e.message, e.file)
    },
    function(e) {
      "function" == typeof r.onerror && r.onerror(e)
    }),
    a = document.getElementById(e);
    a.addEventListener("resize",
    function() {
      var e = [a.offsetLeft, a.offsetTop, a.offsetWidth, a.offsetHeight];
      i.exec(n, "resize", [e])
    },
    !1);
    var c = [a.offsetLeft, a.offsetTop, a.offsetWidth, a.offsetHeight];
    i.exec(n, "Barcode", [s, c, t, o])
  }
  var e = e,
  n = "barcode",
  i = e.bridge,
  o = t.prototype;
  o.start = function(e) {
    this.isClose || i.exec(n, "start", [e])
  },
  o.setFlash = function(e) {
    this.isClose || i.exec(n, "setFlash", [e])
  },
  o.cancel = function() {
    this.isClose || i.exec(n, "cancel", [])
  },
  o.close = function() {
    this.isClose || (i.exec(n, "close", []), this.isClose = !0)
  };
  var r = {
    Barcode: t,
    scan: function(e, t, o, r) {
      var s = "function" != typeof t ? null: function(e) {
        t(e.type, e.message, e.file)
      },
      a = "function" != typeof o ? null: function(e) {
        o(e)
      },
      c = i.callbackId(s, a);
      i.exec(n, "scan", [c, e, r])
    }
  };
  r.QR = 0,
  r.EAN13 = 1,
  r.EAN8 = 2,
  r.AZTEC = 3,
  r.DATAMATRIX = 4,
  r.UPCA = 5,
  r.UPCE = 6,
  r.CODABAR = 7,
  r.CODE39 = 8,
  r.CODE93 = 9,
  r.CODE128 = 10,
  r.ITF = 11,
  r.MAXICODE = 12,
  r.PDF417 = 13,
  r.RSS14 = 14,
  r.RSSEXPANDED = 15,
  e.barcode = r
} (window.plus),
function(e) {
  var e = e,
  t = e.bridge,
  n = "Cache";
  e.cache = {
    clear: function(e) {
      var i = t.callbackId(function() {
        e && e()
      },
      null);
      window.localStorage.clear(),
      window.sessionStorage.clear(),
      t.exec(n, "clear", [i])
    },
    calculate: function(e) {
      var i = t.callbackId(function(t) {
        e && e(t)
      },
      null);
      t.exec(n, "calculate", [i])
    },
    setMaxSize: function(e) {
      t.exec(n, "setMaxSize", [e])
    }
  }
} (window.plus),
function(e) {
  function t() {
    this.__busy__ = !1,
    this.supportedImageResolutions = [],
    this.supportedVideoResolutions = [],
    this.supportedImageFormats = [],
    this.supportedVideoFormats = []
  }
  var n, e = e,
  i = e.bridge,
  o = "Camera",
  r = t.prototype;
  r.captureImage = function(e, t, n) {
    var r = this;
    if (!r.__busy__) {
      var s = "function" != typeof e ? null: function(t) {
        r.__busy__ = !1,
        e(t)
      },
      a = "function" != typeof t ? null: function(e) {
        r.__busy__ = !1,
        t(e)
      },
      c = i.callbackId(s, a);
      i.exec(o, "captureImage", [c, n])
    }
  },
  r.startVideoCapture = function(e, t, n) {
    var r = this;
    if (!r.__busy__) {
      var s = "function" != typeof e ? null: function(t) {
        r.__busy__ = !1,
        e(t)
      },
      a = "function" != typeof t ? null: function(e) {
        r.__busy__ = !1,
        t(e)
      },
      c = i.callbackId(s, a);
      i.exec(o, "startVideoCapture", [c, n])
    }
  },
  r.stopVideoCapture = function() {
    i.exec(o, "stopVideoCapture", [])
  };
  var s = {
    getCamera: function(e) {
      if (n) return n;
      n = new t;
      var r = i.execSync(o, "getCamera", [n.__UUID__, e]);
      return r ? (n.supportedImageFormats = r.supportedImageFormats, n.supportedVideoFormats = r.supportedVideoFormats, n.supportedImageResolutions = r.supportedImageResolutions, n.supportedVideoResolutions = r.supportedVideoResolutions) : (n.supportedImageFormats = ["png", "jpg"], n.supportedImageResolutions = ["640*480", "1280*720", "960*540"], n.supportedVideoFormats = ["mp4"], n.supportedVideoResolutions = ["640*480", "1280*720", "960*540"]),
      n
    }
  };
  e.camera = s
} (window.plus),
plus.tools.debug ? __adsfsdaf99dsafsd090dsfsd__() : (plus.console = {},
plus.console.log = function() {},
plus.console.info = function() {},
plus.console.error = function() {},
plus.console.warn = function() {},
plus.console.assert = function() {},
plus.console.clear = function() {},
plus.console.time = function() {},
plus.console.timeEnd = function() {}),
function(e) {
  function t(e, t, n, i, o, r, s, a, c, u, l, _, f, d, h) {
    this.id = e || null,
    this.rawId = h || null,
    this.target = 0,
    this.displayName = t || null,
    this.name = n || null,
    this.nickname = i || null,
    this.phoneNumbers = o || null,
    this.emails = r || null,
    this.addresses = s || null,
    this.ims = a || null,
    this.organizations = c || null,
    this.birthday = u || null,
    this.note = l || null,
    this.photos = _ || null,
    this.categories = f || null,
    this.urls = d || null
  }
  function n(e, t) {
    function n(e, t) {
      if (e) for (var n = e.length,
      i = 0; n > i; ++i) t[i].id = e[i].id
    }
    t.id = e.id,
    n(e.phoneNumbers, t.phoneNumbers),
    n(e.emails, t.emails),
    n(e.addresses, t.addresses),
    n(e.ims, t.ims),
    n(e.organizations, t.organizations),
    n(e.categories, t.categories),
    n(e.photos, t.photos),
    n(e.urls, t.urls)
  }
  function i(e) {
    var t = e.birthday;
    try {
      l.isDate(t) || (e.birthday = new Date(parseFloat(t)))
    } catch(n) {
      console.log("Cordova Contact convertIn error: exception creating date.")
    }
    return e
  }
  function o(e) {
    var t = e.birthday;
    if (null !== t) {
      if (!l.isDate(t)) try {
        t = new Date(t)
      } catch(n) {
        t = null
      }
      l.isDate(t) && (t = t.valueOf()),
      e.birthday = t
    }
    return e
  }
  function r(e) {
    this.type = e
  }
  var s, a, e = e,
  c = "Contacts",
  u = e.bridge,
  l = e.tools,
  _ = function(e) {
    this.code = e || null
  };
  _.UNKNOWN_ERROR = 0,
  _.INVALID_ARGUMENT_ERROR = 1,
  _.TIMEOUT_ERROR = 2,
  _.PENDING_OPERATION_ERROR = 3,
  _.IO_ERROR = 4,
  _.NOT_SUPPORTED_ERROR = 5,
  _.PERMISSION_DENIED_ERROR = 20;
  var f = t.prototype;
  f.remove = function(e, t) {
    var n = t &&
    function(e) {
      t(new _(e))
    };
    if (null === this.id) n(_.UNKNOWN_ERROR);
    else {
      var i = u.callbackId(e, n);
      u.exec(c, "remove", [i, this.id, this.target], {
        cbid: i
      })
    }
  },
  f.clone = function() {
    function e(e) {
      if (e) for (var t = e.length,
      n = 0; t > n; ++n) e[n].id = null
    }
    var t = l.clone(this);
    return t.id = null,
    e(t.phoneNumbers),
    e(t.emails),
    e(t.addresses),
    e(t.ims),
    e(t.organizations),
    e(t.categories),
    e(t.photos),
    e(t.urls),
    t
  },
  f.save = function(e, t) {
    var r = this,
    f = function(e) {
      t && t(new _(e))
    },
    d = function(t) {
      if (t) try {
        var o = 0 == r.target ? s.create(t) : a.create(t);
        e && (n(i(o), r), e(r))
      } catch(c) {
        console.log(c)
      } else f(_.UNKNOWN_ERROR)
    },
    h = o(l.clone(this)),
    p = u.callbackId(d, f);
    u.exec(c, "save", [p, h, this.target], {
      cbid: p
    })
  };
  var d = r.prototype;
  d.create = function(e) {
    var n = new t;
    n.target = this.type;
    for (var i in e) void 0 !== n[i] && e.hasOwnProperty(i) && (n[i] = e[i]);
    return n
  },
  d.find = function(e, t, n, i) {
    var o = function(e) {
      for (var n = [], i = 0, o = e.length; o > i; i++) n.push(s.create(e[i]));
      t(n)
    },
    r = u.callbackId(o, n);
    u.exec(c, "search", [r, e, i], {
      cbid: r
    })
  };
  var h = e.contacts = {
    getAddressBook: function(e, t, n) { (0 !== e || 1 !== e) && (e = 0);
      var i = function() {
        t && (h.ADDRESSBOOK_PHONE == e ? (s = s ? s: new r(0), t(s)) : (a = a ? a: new r(1), t(s)))
      },
      o = function(e) {
        n(new _(e))
      },
      l = u.callbackId(i, o);
      u.exec(c, "getAddressBook", [l, e], {
        cbid: l
      })
    },
    ADDRESSBOOK_PHONE: 0,
    ADDRESSBOOK_SIM: 1
  }
} (window.plus),
function(e) {
  function t(e, t, n) {
    this.type = r.getValue(e, ""),
    this.handles = [],
    this.capture = r.getValue(n, !1),
    "function" == typeof t && this.handles.push(t)
  }
  function n(e, t, n) {
    var i = this;
    i.id = o.UUID("dt"),
    i.url = r.getValue(e, ""),
    i.downloadedSize = 0,
    i.totalSize = 0,
    i.options = t || {},
    i.filename = r.getValue(i.options.filename, ""),
    i.method = r.getValue(i.options.method, "GET"),
    i.timeout = r.getValue(i.options.timeout, 120),
    i.retry = r.getValue(i.options.retry, 3),
    i.retryInterval = r.getValue(i.options.retryInterval, 30),
    i.priority = r.getValue(i.options.priority, 1),
    i.onCompleted = n || null,
    i.eventHandlers = {},
    i.data = r.getValue(i.options.data, null),
    i.__requestHeaders__ = {},
    i.__responseHeaders__ = {},
    i.__noParseResponseHeader__ = null,
    i.__cacheReponseHeaders__ = {}
  }
  var e = e,
  i = e.bridge,
  o = e.tools,
  r = {
    server: "Downloader",
    getValue: function(e, t) {
      return void 0 === e ? t: e
    }
  };
  t.prototype.fire = function() {
    for (var e = 0; e < this.handles.length; ++e) this.handles[e].apply(this, arguments)
  };
  var s = n.prototype;
  s.getFileName = function() {
    return this.filename
  },
  s.start = function() {
    i.exec(r.server, "start", [this.id, this.__requestHeaders__])
  },
  s.pause = function() {
    i.exec(r.server, "pause", [this.id])
  },
  s.resume = function() {
    i.exec(r.server, "resume", [this.id])
  },
  s.abort = function() {
    i.exec(r.server, "abort", [this.id])
  },
  s.getAllResponseHeaders = function() {
    if (this.__noParseResponseHeader__) return this.__noParseResponseHeader__;
    var e = "";
    for (var t in this.__responseHeaders__) e = e + t + " : " + this.__responseHeaders__[t] + "\r\n";
    return this.__noParseResponseHeader__ = e,
    this.__noParseResponseHeader__
  },
  s.getResponseHeader = function(e) {
    if ("string" == typeof e) {
      var t = null;
      if (e = e.toLowerCase(), t = this.__cacheReponseHeaders__[e]) return t;
      for (var n in this.__responseHeaders__) {
        var i = this.__responseHeaders__[n];
        n = n.toLowerCase(),
        e === n && (t = t ? t + ", " + i: i)
      }
      return this.__cacheReponseHeaders__[e] = t,
      t
    }
    return ""
  },
  s.setRequestHeader = function(e, t) {
    if ("string" == typeof e && "string" == typeof t) {
      var n = this.__requestHeaders__[e];
      this.__requestHeaders__[e] = n ? n + ", " + t: t
    }
  },
  s.addEventListener = function(e, n, i) {
    if ("string" == typeof e && "function" == typeof n) {
      var o = e.toLowerCase();
      void 0 === this.eventHandlers[o] ? this.eventHandlers[o] = new t(e, n, i) : this.eventHandlers[o].handles.push(n)
    }
  },
  s.__handlerEvt__ = function(e) {
    var t = this;
    t.filename = r.getValue(e.filename, t.filename),
    t.state = r.getValue(e.state, t.state),
    t.downloadedSize = r.getValue(e.downloadedSize, t.downloadedSize),
    t.totalSize = r.getValue(e.totalSize, t.totalSize),
    t.__responseHeaders__ = r.getValue(e.headers, {}),
    4 == t.state && "function" == typeof t.onCompleted && t.onCompleted(t, e.status || null);
    var n = this.eventHandlers.statechanged;
    n && n.fire(t, e.status || null)
  };
  var a = e.downloader = {
    __taskList__: [],
    createDownload: function(e, t, o) {
      if ("string" == typeof e) {
        var s = new n(e, t, o);
        return a.__taskList__[s.id] = s,
        i.exec(r.server, "createDownload", [s]),
        s
      }
      return null
    },
    enumerate: function(e, t) {
      var o = i.callbackId(function(t) {
        for (var i = [], o = t.length, s = 0, c = a.__taskList__; o > s; s++) {
          var u = t[s];
          if (u && u.uuid) {
            var l = c[u.uuid];
            l || (l = new n, l.id = u.uuid, c[l.id] = l),
            l.state = r.getValue(u.state, l.state),
            l.options = r.getValue(u.options, l.options),
            l.filename = r.getValue(u.filename, l.filename),
            l.url = r.getValue(u.url, l.url),
            l.downloadedSize = r.getValue(u.downloadedSize, l.downloadedSize),
            l.totalSize = r.getValue(u.totalSize, l.totalSize),
            l.__responseHeaders__ = r.getValue(t.headers, l.__responseHeaders__),
            i.push(l)
          }
        }
        "function" == typeof e && e(i)
      });
      i.exec(r.server, "enumerate", [o, t])
    },
    clear: function(e) {
      var t = -1e4; ("number" == typeof e || e instanceof Number) && (t = e),
      i.exec(r.server, "clear", [t])
    },
    startAll: function() {
      i.exec(r.server, "startAll", [0])
    },
    __handlerEvt__: function(e, t) {
      var n = a.__taskList__[e];
      n && (6 == t.state && delete a.__taskList__[e], n.__handlerEvt__(t))
    }
  }
} (window.plus),
function(e) {
  function t(e, t) {
    this.code = e || null,
    this.message = t || ""
  }
  var e = e,
  n = e.bridge,
  i = "Gallery",
  o = {
    Ready: 0,
    Busy: 1
  };
  t.BUSY = 1;
  var r = e.gallery = {
    __galleryStatus: o.Ready,
    onPickImageFinished: null,
    pick: function(e, s, a) {
      if (o.Busy == r.__galleryStatus) return void window.setTimeout(function() {
        "function" == typeof s && s(new t(t.BUSY, "\u5df2\u7ecf\u6253\u5f00\u4e86\u76f8\u518c"))
      },
      0);
      r.__galleryStatus = o.Busy;
      var c = n.callbackId(function(t) {
        if (r.__galleryStatus = o.Ready, "function" == typeof e) if (t && t.multiple) {
          var n = {};
          n.files = t.files,
          e(n)
        } else e(t.files[0])
      },
      function(e) {
        r.__galleryStatus = o.Ready,
        "function" == typeof s && s(e)
      }),
      u = n.callbackId(function() {
        "function" == typeof a.onmaxed && a.onmaxed()
      });
      n.exec(i, "pick", [c, a, u], {
        cbid: c
      })
    },
    save: function(e, t, o) {
      if ("string" == typeof e) {
        var r = n.callbackId(function() {
          "function" == typeof t && t()
        },
        function(e) {
          "function" == typeof o && o(e)
        });
        return n.exec(i, "save", [e, r], {
          cbid: r
        }),
        !0
      }
      return ! 1
    }
  }
} (window.plus),
function(e) {
  function t(e, t, n, i, o, r, s) {
    this.latitude = e,
    this.longitude = t,
    this.accuracy = void 0 !== i ? i: null,
    this.altitude = void 0 !== n ? n: null,
    this.heading = void 0 !== o ? o: null,
    this.speed = void 0 !== r ? r: null,
    (0 === this.speed || null === this.speed) && (this.heading = 0 / 0),
    this.altitudeAccuracy = void 0 !== s ? s: null
  }
  function n(e, n) {
    e ? (this.coordsType = e.coordsType, this.address = e.address, this.addresses = e.addresses, this.coords = new t(e.latitude, e.longitude, e.altitude, e.accuracy, e.heading, e.velocity, e.altitudeAccuracy)) : this.coords = new t,
    this.timestamp = void 0 !== n ? n: (new Date).getTime()
  }
  function i(e, t) {
    this.code = e || null,
    this.message = t || ""
  }
  function o(e) {
    var t = {
      maximumAge: 0,
      enableHighAccuracy: !1,
      timeout: 1 / 0,
      geocode: !0
    };
    return e && (void 0 !== e.maximumAge && !isNaN(e.maximumAge) && e.maximumAge > 0 && (t.maximumAge = e.maximumAge), void 0 !== e.enableHighAccuracy && (t.enableHighAccuracy = e.enableHighAccuracy), void 0 === e.timeout || isNaN(e.timeout) || (t.timeout = e.timeout < 0 ? 0 : e.timeout), e.coordsType && (t.coordsType = e.coordsType), e.provider && (t.provider = e.provider), void 0 !== e.geocode && (t.geocode = e.geocode)),
    t
  }
  function r(e, t) {
    var n = setTimeout(function() {
      s(n),
      n = null,
      e(new i(i.TIMEOUT, "Position retrieval timed out."))
    },
    t);
    return n
  }
  function s(e) {
    e !== !0 && clearTimeout(e)
  }
  function a(e, t, a, l) {
    a = o(a);
    var _ = {
      timer: null
    },
    d = function(t) {
      if (s(_.timer), _.timer) {
        var i = new n({
          latitude: t.latitude,
          longitude: t.longitude,
          altitude: t.altitude,
          accuracy: t.accuracy,
          heading: t.heading,
          velocity: t.velocity,
          coordsType: t.coordsType,
          address: t.address,
          addresses: t.addresses,
          altitudeAccuracy: t.altitudeAccuracy
        },
        void 0 === t.timestamp ? (new Date).getTime() : t.timestamp instanceof Date ? t.timestamp.getTime() : t.timestamp);
        f.lastPosition = i,
        e(i)
      }
    },
    h = function(e) {
      s(_.timer),
      _.timer = null;
      var n = new i(e.code, e.message);
      t && t(n)
    };
    if (f.lastPosition && a.maximumAge && (new Date).getTime() - f.lastPosition.timestamp <= a.maximumAge) e(f.lastPosition);
    else if (0 === a.timeout) h(new i(i.TIMEOUT, "timeout value in PositionOptions set to 0 and no cached Position object available, or cached Position object's age exceeds provided PositionOptions' maximumAge parameter."));
    else if (_.timer = 1 / 0 !== a.timeout ? r(h, a.timeout) : !0, l) {
      var p = u.callbackId(d, h);
      u.exec(c, "getCurrentPosition", [p, a.enableHighAccuracy, a.maximumAge, a.coordsType, a.provider, a.geocode, a.timeout])
    }
    return _
  }
  var e = e,
  c = "Geolocation",
  u = e.bridge,
  l = e.tools,
  _ = {};
  i.PERMISSION_DENIED = 1,
  i.POSITION_UNAVAILABLE = 2,
  i.TIMEOUT = 3,
  i.UNKNOWN_ERROR = 4;
  var f = e.geolocation = {
    lastPosition: null,
    getCurrentPosition: function(e, t, n) {
      a(e, t, n, !0)
    },
    watchPosition: function(e, t, d) {
      d = o(d);
      var h = l.UUID("timer");
      _[h] = a(e, t, d, !1);
      var p = function(e) {
        s(_[h].timer);
        var n = new i(e.code, e.message);
        t && t(n)
      },
      v = function(t) {
        s(_[h].timer),
        1 / 0 !== d.timeout && (_[h].timer = r(p, d.timeout));
        var i = new n({
          latitude: t.latitude,
          longitude: t.longitude,
          altitude: t.altitude,
          accuracy: t.accuracy,
          heading: t.heading,
          velocity: t.velocity,
          coordsType: t.coordsType,
          address: t.address,
          addresses: t.addresses,
          altitudeAccuracy: t.altitudeAccuracy
        },
        void 0 === t.timestamp ? (new Date).getTime() : t.timestamp instanceof Date ? t.timestamp.getTime() : t.timestamp);
        f.lastPosition = i,
        e(i)
      },
      y = u.callbackId(v, p);
      return u.exec(c, "watchPosition", [y, h, d.enableHighAccuracy, d.coordsType, d.provider, d.geocode, d.timeout, d.maximumAge]),
      h
    },
    clearWatch: function(e) {
      e && void 0 !== _[e] && (s(_[e].timer), _[e].timer = !1, u.exec(c, "clearWatch", [e]))
    }
  }
} (window.plus),
function(e) {
  function t(e) {
    this.code = e.code || null,
    this.message = e.message || ""
  }
  function n(e) {
    var n = "\u672a\u77e5\u9519\u8bef";
    switch (e) {
    case t.NOT_FOUND_ERR:
      n = "\u6587\u4ef6\u6ca1\u6709\u53d1\u73b0";
      break;
    case t.SECURITY_ERR:
      n = "\u6ca1\u6709\u83b7\u5f97\u6388\u6743";
      break;
    case t.ABORT_ERR:
      n = "\u53d6\u6d88";
      break;
    case t.NOT_READABLE_ERR:
      n = "\u4e0d\u5141\u8bb8\u8bfb";
      break;
    case t.ENCODING_ERR:
      n = "\u7f16\u7801\u9519\u8bef";
      break;
    case t.NO_MODIFICATION_ALLOWED_ERR:
      n = "\u4e0d\u5141\u8bb8\u4fee\u6539";
      break;
    case t.INVALID_STATE_ERR:
      n = "\u65e0\u6548\u7684\u72b6\u6001";
      break;
    case t.SYNTAX_ERR:
      n = "\u8bed\u6cd5\u9519\u8bef";
      break;
    case t.INVALID_MODIFICATION_ERR:
      n = "\u65e0\u6548\u7684\u4fee\u6539";
      break;
    case t.QUOTA_EXCEEDED_ERR:
      n = "\u6267\u884c\u51fa\u9519";
      break;
    case t.TYPE_MISMATCH_ERR:
      n = "\u7c7b\u578b\u4e0d\u5339\u914d";
      break;
    case t.PATH_EXISTS_ERR:
      n = "\u8def\u5f84\u5b58\u5728"
    }
    return {
      code: e,
      message: n
    }
  }
  function i(e, t) {
    t = t || {},
    this.type = e,
    this.bubbles = !1,
    this.cancelBubble = !1,
    this.cancelable = !1,
    this.lengthComputable = !1,
    this.loaded = t.loaded || 0,
    this.total = t.total || 0,
    this.target = t.target || null
  }
  function o(e, t, n, i, o) {
    this.size = o || 0,
    this.type = n || null,
    this.name = e || "",
    this.lastModifiedDate = new Date(i) || null,
    this.fullPath = t || null
  }
  function r(e) {
    this.modificationTime = void 0 !== e ? new Date(e) : null,
    this.size = 0,
    this.directoryCount = 0,
    this.fileCount = 0
  }
  function s(e, t, n, i, o, r) {
    this.isFile = void 0 !== e ? e: !1,
    this.isDirectory = void 0 !== t ? t: !1,
    this.name = n || "",
    this.fullPath = i || "",
    this.fileSystem = o || null,
    this.__PURL__ = r ? r: "",
    this.__remoteURL__ = r ? "http://localhost:13131/" + r: ""
  }
  function a(e, t, n, i) {
    b.constructor.apply(this, [!0, !1, e, t, n, i])
  }
  function c(e, t, n, i) {
    b.constructor.apply(this, [!1, !0, e, t, n, i])
  }
  function u(e, t) {
    this.path = e || null,
    this.__fileSystem__ = t || null
  }
  function l() {
    this.fileName = "",
    this.readyState = 0,
    this.result = null,
    this.error = null,
    this.onloadstart = null,
    this.onprogress = null,
    this.onload = null,
    this.onabort = null,
    this.onerror = null,
    this.onloadend = null
  }
  function _(e) {
    this.fileName = "",
    this.readyState = 0,
    this.result = null,
    this.length = 0,
    e && (this.fileName = e.fullPath || e, this.length = e.size || 0),
    this.position = 0,
    this.error = null,
    this.onwritestart = null,
    this.onprogress = null,
    this.onwrite = null,
    this.onabort = null,
    this.onsuccess = null,
    this.onerror = null,
    this.onwriteend = null
  }
  function f(e, t) {
    this.name = e || null,
    this.root = null,
    t && (this.root = new c(t.name, t.fullPath, this, t.remoteURL))
  }
  function d(e, i, o) {
    var r = function(e) {
      "function" == typeof o && o(new t(e))
    };
    if (1 > e || e > 4) r(n(t.SYNTAX_ERR));
    else {
      var s = w[e],
      a = function(o) {
        o ? "function" == typeof i && (s || (s = new f(o.name, o.root), w[e] = s), i(s)) : r(n(t.NOT_FOUND_ERR))
      };
      s ? window.setTimeout(a(s), 0) : g.exec(a, r, "requestFileSystem", [e])
    }
  }
  function h(e, i, o) {
    var r = function(e) {
      o && o(new t(e))
    };
    if ("string" != typeof e) return void setTimeout(function() {
      r(n(t.ENCODING_ERR))
    },
    0);
    var s = function(e) {
      var o;
      if (e) {
        if (i) {
          var s = w[e.type];
          s || (s = new f(e.fsName, e.fsRoot), w[e.type] = s),
          o = e.isDirectory ? new c(e.name, e.fullPath, s, e.remoteURL) : new a(e.name, e.fullPath, s, e.remoteURL),
          i(o)
        }
      } else r(n(t.NOT_FOUND_ERR))
    };
    g.exec(s, r, "resolveLocalFileSystemURL", [e])
  }
  function p(e) {
    return y.execSync(g.NATIVEF, "convertLocalFileSystemURL", [e])
  }
  function v(e) {
    return y.execSync(g.NATIVEF, "convertAbsoluteFileSystem", [e])
  }
  var e = e,
  y = e.bridge,
  w = (e.tools, []),
  g = {
    NATIVEF: "File",
    exec: function(e, t, n, i) {
      var o = y.callbackId(e, t);
      y.exec(g.NATIVEF, n, [o, i])
    }
  };
  t.NOT_FOUND_ERR = 1,
  t.SECURITY_ERR = 2,
  t.ABORT_ERR = 3,
  t.NOT_READABLE_ERR = 4,
  t.ENCODING_ERR = 5,
  t.NO_MODIFICATION_ALLOWED_ERR = 6,
  t.INVALID_STATE_ERR = 7,
  t.SYNTAX_ERR = 8,
  t.INVALID_MODIFICATION_ERR = 9,
  t.QUOTA_EXCEEDED_ERR = 10,
  t.TYPE_MISMATCH_ERR = 11,
  t.PATH_EXISTS_ERR = 12;
  var m = o.prototype;
  m.slice = function(e, t) {
    var n = this.size > 0 ? this.size - 1 : 0,
    i = 0,
    r = n;
    if (arguments.length && (i = 0 > e ? Math.max(n + e, 0) : Math.min(n, e)), arguments.length < 2 || (r = 0 > t ? Math.max(n + t, 0) : Math.min(t, n)), i > r) return null;
    var s = new o(this.name, this.fullPath, this.type, this.lastModifiedDate, r - i + 1);
    return s.start = i,
    s.end = r,
    s
  },
  m.close = function() {};
  var b = s.prototype;
  b.getMetadata = function(e, n, i) {
    var o = "function" != typeof e ? null: function(t) {
      var n = new r(t.lastModifiedDate);
      n.size = t.size,
      n.directoryCount = t.directoryCount,
      n.fileCount = t.fileCount,
      e(n)
    },
    s = "function" != typeof n ? null: function(e) {
      n(new t(e))
    };
    g.exec(o, s, "getMetadata", [this.fullPath, i])
  },
  b.setMetadata = function(e, t, n) {
    g.exec(e, t, "setMetadata", [this.fullPath, n])
  },
  b.moveTo = function(e, i, o, r) {
    var s = this,
    u = function(e) {
      "function" == typeof r && r(new t(e))
    };
    if (!e) return void u(n(t.NOT_FOUND_ERR));
    var l = this.fullPath,
    _ = i || this.name,
    f = function(e) {
      if (e) {
        if ("function" == typeof o) {
          var i = e.isDirectory ? new c(e.name, e.fullPath, s.fileSystem, e.remoteURL) : new a(e.name, e.fullPath, s.fileSystem, e.remoteURL);
          try {
            o(i)
          } catch(r) {}
        }
      } else u(n(t.NOT_FOUND_ERR))
    };
    g.exec(f, u, "moveTo", [l, e.fullPath, _])
  },
  b.copyTo = function(e, i, o, r) {
    var s = this,
    u = function(e) {
      "function" == typeof r && r(new t(e))
    };
    if (!e) return void u(n(t.NOT_FOUND_ERR));
    var l = this.fullPath,
    _ = i || this.name,
    f = function(e) {
      if (e) {
        if ("function" == typeof o) {
          var i = e.isDirectory ? new c(e.name, e.fullPath, e.fileSystem, s.remoteURL) : new a(e.name, e.fullPath, s.fileSystem, e.remoteURL);
          try {
            o(i)
          } catch(r) {}
        }
      } else u(n(t.NOT_FOUND_ERR))
    };
    g.exec(f, u, "copyTo", [l, e.fullPath, _])
  },
  b.remove = function(e, n) {
    var i = "function" != typeof n ? null: function(e) {
      n(new t(e))
    };
    g.exec(e, i, "remove", [this.fullPath])
  },
  b.toURL = function() {
    return this.__PURL__
  },
  b.toLocalURL = function() {
    return "file://" + this.fullPath
  },
  b.toRemoteURL = function() {
    return this.__remoteURL__
  },
  b.getParent = function(e, n) {
    var i = this,
    o = "function" != typeof e ? null: function(t) {
      var n = new c(t.name, t.fullPath, i.fileSystem, t.remoteURL);
      e(n)
    },
    r = "function" != typeof n ? null: function(e) {
      n(new t(e))
    };
    g.exec(o, r, "getParent", [this.fullPath])
  },
  a.prototype = new s,
  a.prototype.constructor = a,
  a.prototype.createWriter = function(e, i) {
    this.file(function(o) {
      var r = new _(o);
      null === r.fileName || "" === r.fileName ? "function" == typeof i && i(new t(n(t.INVALID_STATE_ERR))) : "function" == typeof e && e(r)
    },
    i)
  },
  a.prototype.file = function(e, n) {
    var i = "function" != typeof e ? null: function(t) {
      var n = new o(t.name, t.fullPath, t.type, t.lastModifiedDate, t.size);
      e(n)
    },
    r = "function" != typeof n ? null: function(e) {
      n(new t(e))
    };
    g.exec(i, r, "getFileMetadata", [this.fullPath])
  };
  var I = new s;
  c.prototype = I,
  I.constructor = c,
  I.createReader = function() {
    return new u(this.fullPath, this.fileSystem)
  },
  I.getDirectory = function(e, n, i, o) {
    var r = this,
    s = "function" != typeof i ? null: function(e) {
      var t = new c(e.name, e.fullPath, r.fileSystem, e.remoteURL);
      i(t)
    },
    a = "function" != typeof o ? null: function(e) {
      o(new t(e))
    };
    g.exec(s, a, "getDirectory", [this.fullPath, e, n])
  },
  I.removeRecursively = function(e, n) {
    var i = "function" != typeof n ? null: function(e) {
      n(new t(e))
    };
    g.exec(e, i, "removeRecursively", [this.fullPath])
  },
  I.getFile = function(e, n, i, o) {
    var r = this,
    s = "function" != typeof i ? null: function(e) {
      var t = new a(e.name, e.fullPath, r.fileSystem, e.remoteURL);
      i(t)
    },
    c = "function" != typeof o ? null: function(e) {
      o(new t(e))
    };
    g.exec(s, c, "getFile", [this.fullPath, e, n])
  },
  u.prototype.readEntries = function(e, n) {
    var i = this,
    o = "function" != typeof e ? null: function(t) {
      for (var n = [], o = 0; o < t.length; o++) {
        var r = null;
        t[o].isDirectory ? r = new c(t[o].name, t[o].fullPath, i.__fileSystem__, t[o].remoteURL) : t[o].isFile && (r = new a(t[o].name, t[o].fullPath, i.__fileSystem__, t[o].remoteURL)),
        n.push(r)
      }
      e(n)
    },
    r = "function" != typeof n ? null: function(e) {
      n(new t(e))
    };
    g.exec(o, r, "readEntries", [this.path])
  },
  l.EMPTY = 0,
  l.LOADING = 1,
  l.DONE = 2;
  var x = l.prototype;
  x.abort = function() {
    this.result = null,
    this.readyState != l.DONE && this.readyState != l.EMPTY && (this.readyState = l.DONE, "function" == typeof this.onabort && this.onabort(new i("abort", {
      target: this
    })), "function" == typeof this.onloadend && this.onloadend(new i("loadend", {
      target: this
    })))
  },
  x.readAsText = function(e, n) {
    if (this.fileName = "", this.fileName = void 0 === e.fullPath ? e: e.fullPath, this.readyState == l.LOADING) throw new t(t.INVALID_STATE_ERR);
    this.readyState = l.LOADING,
    "function" == typeof this.onloadstart && this.onloadstart(new i("loadstart", {
      target: this
    }));
    var o = n ? n: "UTF-8",
    r = this;
    g.exec(function(e) {
      r.readyState !== l.DONE && (r.result = e, "function" == typeof r.onload && r.onload(new i("load", {
        target: r
      })), r.readyState = l.DONE, "function" == typeof r.onloadend && r.onloadend(new i("loadend", {
        target: r
      })))
    },
    function(e) {
      r.readyState !== l.DONE && (r.readyState = l.DONE, r.result = null, r.error = new t(e), "function" == typeof r.onerror && r.onerror(new i("error", {
        target: r
      })), "function" == typeof r.onloadend && r.onloadend(new i("loadend", {
        target: r
      })))
    },
    "readAsText", [this.fileName, o, e.start, e.end])
  },
  x.readAsDataURL = function(e) {
    if (this.fileName = "", this.fileName = void 0 === e.fullPath ? e: e.fullPath, this.readyState == l.LOADING) throw new t(t.INVALID_STATE_ERR);
    this.readyState = l.LOADING,
    "function" == typeof this.onloadstart && this.onloadstart(new i("loadstart", {
      target: this
    }));
    var n = this;
    g.exec(function(e) {
      n.readyState !== l.DONE && (n.readyState = l.DONE, n.result = e, "function" == typeof n.onload && n.onload(new i("load", {
        target: n
      })), "function" == typeof n.onloadend && n.onloadend(new i("loadend", {
        target: n
      })))
    },
    function(e) {
      n.readyState !== l.DONE && (n.readyState = l.DONE, n.result = null, n.error = new t(e), "function" == typeof n.onerror && n.onerror(new i("error", {
        target: n
      })), "function" == typeof n.onloadend && n.onloadend(new i("loadend", {
        target: n
      })))
    },
    "readAsDataURL", [this.fileName, e.start, e.end])
  },
  x.readAsArrayBuffer = function() {},
  _.INIT = 0,
  _.WRITING = 1,
  _.DONE = 2;
  var S = _.prototype;
  S.abort = function() {
    if (this.readyState === _.DONE || this.readyState === _.INIT) throw new t(n(t.INVALID_STATE_ERR));
    this.error = new t(n(t.ABORT_ERR)),
    this.readyState = _.DONE,
    "function" == typeof this.onabort && this.onabort(new i("abort", {
      target: this
    })),
    "function" == typeof this.onwriteend && this.onwriteend(new i("writeend", {
      target: this
    }))
  },
  S.write = function(e) {
    var n = this;
    if ("string" != typeof e) throw new t(t.TYPE_MISMATCH_ERR);
    if (this.readyState === _.WRITING) throw new t(t.INVALID_STATE_ERR);
    this.readyState = _.WRITING,
    "function" == typeof n.onwritestart && n.onwritestart(new i("writestart", {
      target: n
    })),
    g.exec(function(e) {
      n.readyState !== _.DONE && (n.position += e, n.length += e, n.readyState = _.DONE, "function" == typeof n.onwrite && n.onwrite(new i("write", {
        target: n
      })), "function" == typeof n.onsuccess && n.onsuccess(new i("success", {
        target: n
      })), "function" == typeof n.onwriteend && n.onwriteend(new i("writeend", {
        target: n
      })))
    },
    function(e) {
      n.readyState !== _.DONE && (n.readyState = _.DONE, n.error = new t(e), "function" == typeof n.onerror && n.onerror(new i("error", {
        target: n
      })), "function" == typeof n.onwriteend && n.onwriteend(new i("writeend", {
        target: n
      })))
    },
    "write", [this.fileName, e, this.position])
  },
  S.seek = function(e) {
    if (this.readyState === _.WRITING) throw new t(t.INVALID_STATE_ERR); (e || 0 === e) && (this.position = 0 > e ? Math.max(e + this.length, 0) : e > this.length ? this.length: e)
  },
  S.truncate = function(e) {
    if (this.readyState === _.WRITING) throw new t(t.INVALID_STATE_ERR);
    this.readyState = _.WRITING;
    var n = this;
    "function" == typeof n.onwritestart && n.onwritestart(new i("writestart", {
      target: this
    })),
    g.exec(function(e) {
      n.readyState !== _.DONE && (n.readyState = _.DONE, n.length = e, n.position = Math.min(n.position, e), "function" == typeof n.onwrite && n.onwrite(new i("write", {
        target: n
      })), "function" == typeof n.onwriteend && n.onwriteend(new i("writeend", {
        target: n
      })))
    },
    function(e) {
      n.readyState !== _.DONE && (n.readyState = _.DONE, n.error = new t(e), "function" == typeof n.onerror && n.onerror(new i("error", {
        target: n
      })), "function" == typeof n.onwriteend && n.onwriteend(new i("writeend", {
        target: n
      })))
    },
    "truncate", [this.fileName, e, this.position])
  },
  e.io = {
    FileSystem: f,
    DirectoryEntry: c,
    DirectoryReader: u,
    FileReader: l,
    FileWriter: _,
    requestFileSystem: d,
    resolveLocalFileSystemURL: h,
    convertLocalFileSystemURL: p,
    convertAbsoluteFileSystem: v,
    PRIVATE_WWW: 1,
    PRIVATE_DOC: 2,
    PUBLIC_DOCUMENTS: 3,
    PUBLIC_DOWNLOADS: 4
  }
} (window.plus),
function(e) {
  function t(e, t, n) {
    return I.ANDROID == I.platform ? b.exec(x, S, [I.stringify([e, t, n])], null) : b.exec(x, S, [e, t, n], null)
  }
  function n(e, t, n) {
    return I.ANDROID == I.platform ? b.exec(x, U, [I.stringify([e, [t, n]])], null) : b.exec(x, U, [e, [t, n]], null)
  }
  function i(e, t, n) {
    return I.ANDROID == I.platform ? b.execSync(x, D, [I.stringify([e, [t, n]])], null) : b.execSync(x, D, [e, [t, n]], null)
  }
  function o(e, t, n) {
    return I.ANDROID == I.platform ? b.exec(x, k, [I.stringify([e, [t, n]])], null) : b.exec(x, k, [e, [t, n]], null)
  }
  function r(e) {
    var t = {
      zoom: 12,
      type: "MAPTYPE_NORMAL",
      traffic: !1,
      zoomControls: !1
    };
    return e && e.center instanceof u && (t.center = e.center),
    !e || "number" != typeof e.zoom || e.zoom > 22 || e.zoom < 1 || (t.zoom = e.zoom),
    !e || "MAPTYPE_NORMAL" != e.type && "MAPTYPE_SATELLITE" != e.type || (t.type = e.type),
    e && "boolean" == typeof e.traffic && (t.traffic = e.traffic),
    e && "boolean" == typeof e.zoomControls && (t.zoomControls = e.zoomControls),
    e && "string" == typeof e.position && (t.position = e.position),
    t
  }
  function s(i, o) {
    function s(e, t) {
      if ("click" == t.callbackType) a.onclick && a.onclick(t.payload);
      else if ("change" == t.callbackType) {
        if (a.onstatuschanged) var n = {};
        n.target = a,
        n.zoom = t.zoom,
        n.center = new u(t.center.long, t.center.lat),
        t.northease && (n.bounds = new c(new u(t.northease.long, t.northease.lat), new u(t.southwest.long, t.southwest.lat))),
        a.onstatuschanged(n)
      }
    }
    o = r(o);
    var a = this;
    this._UUID_ = I.UUID("map"),
    this._ui_div_id_ = i,
    this.__showUserLocationVisable__ = !1,
    this.center = o.center ? o.center: new e.maps.Point(116.39716, 39.91669),
    this.zoom = o.zoom,
    this.userLocation = null,
    this.mapType = o.type,
    this.zoomControlsVisable = o.zoomControls,
    this.trafficVisable = o.traffic,
    this.visable = !0,
    this.onclick = function() {},
    this.onstatuschanged = function() {},
    T.pushCallback(this._UUID_, s);
    var l = document.getElementById(this._ui_div_id_);
    e.tools.platform == e.tools.ANDROID ? document.addEventListener("plusorientationchange",
    function() {
      setTimeout(function() {
        var e = [l.offsetLeft, l.offsetTop, l.offsetWidth, l.offsetHeight];
        n(a._UUID_, "resize", e)
      },
      200)
    },
    !1) : l.addEventListener("resize",
    function() {
      var e = [l.offsetLeft, l.offsetTop, l.offsetWidth, l.offsetHeight];
      n(a._UUID_, "resize", e)
    },
    !1);
    var _ = [l.offsetLeft, l.offsetTop, l.offsetWidth, l.offsetHeight, o];
    t(this._UUID_, "mapview", _)
  }
  function a(e) {
    this._UUID_ = I.UUID("Bubble"),
    this.label = "string" == typeof e ? e: "",
    this.icon = null,
    this.marker = null,
    this.__contentImage = null,
    this.__contentImageAsDataURL = null,
    this.onclick = function() {}
  }
  function c(e, t, n, i) {
    "number" == typeof e && "number" == typeof t && "number" == typeof n && "number" == typeof i ? (this.northease = new u(e, t), this.southwest = new u(n, i)) : e instanceof u && t instanceof u && (this.northease = e, this.southwest = t)
  }
  function u(e, t) {
    this.longitude = e,
    this.latitude = t
  }
  function l() {
    this._UUID_ = null,
    this.visable = !0
  }
  function _(e) {
    function n(e, t) {
      "bubbleclick" == t.type ? i.bubble && i.bubble.onclick && i.bubble.onclick(i.bubble) : "markerclick" == t.type ? i.onclick && i.onclick(i) : "onDrag" == t.type && (i.point = t.pt, i.onDrag(i))
    }
    var i = this;
    this._UUID_ = I.UUID("marker"),
    this.point = e,
    this.icon = "",
    this.caption = "",
    this.bubble = null,
    this.canDraggable = !1,
    this.onclick = function() {},
    this.onDrag = function() {},
    T.pushCallback(this._UUID_, n),
    t(this._UUID_, "marker", [e])
  }
  function f() {
    this.strokeColor = "#FFFFFF",
    this.strokeOpacity = 1,
    this.fillColor = "#FFFFFF",
    this.fillOpacity = 1,
    this.lineWidth = 5,
    this.visable = !0
  }
  function d(e, n) {
    this.center = e,
    this.radius = n,
    this._UUID_ = I.UUID("circle"),
    t(this._UUID_, "circle", [e, n])
  }
  function h(e) {
    this.path = e,
    this._UUID_ = I.UUID("polygon"),
    t(this._UUID_, "polygon", [e])
  }
  function p(e) {
    this.path = e,
    this._UUID_ = I.UUID("polyline"),
    t(this._UUID_, "polyline", [e])
  }
  function v(e, n, i) {
    this._UUID_ = I.UUID("route"),
    this.startPoint = e,
    this.endPoint = n,
    this.pointCount = 0,
    this.pointList = [],
    this.distance = 0,
    this.routeTip = "",
    void 0 === i && t(this._UUID_, "route", [e, n, i])
  }
  function y(e) {
    this.point = e,
    this.address = "",
    this.city = "",
    this.name = "",
    this.phone = "",
    this.postcode = ""
  }
  function w() {
    this.__state__ = 0,
    this.__type__ = 1,
    this.startPosition = null,
    this.endPosition = null,
    this.routeNumber = 0,
    this.routeList = []
  }
  function g() {
    this.__state__ = 0,
    this.__type__ = 0,
    this.totalNumber = 0,
    this.currentNumber = 0,
    this.pageNumber = 0,
    this.pageIndex = 0,
    this.poiList = []
  }
  function m(e) {
    function n(e, t) {
      0 == t.__type__ ? i.onPoiSearchComplete && i.onPoiSearchComplete(t.__state__, t) : 1 == t.__type__ && i.onRouteSearchComplete && i.onRouteSearchComplete(t.__state__, t)
    }
    var i = this;
    this._UUID_ = I.UUID("search"),
    this.pageCapacity = 10,
    this.map = e,
    this.onPoiSearchComplete = function() {},
    this.onRouteSearchComplete = function() {},
    T.pushCallback(this._UUID_, n),
    t(this._UUID_, "search", [null])
  }
  var e = e,
  b = e.bridge,
  I = e.tools,
  x = "Maps",
  S = "createObject",
  U = "updateObject",
  D = "updateObjectSYNC",
  k = "execMethod",
  T = {
    callback: [],
    pushCallback: function(e, t, n) {
      this.callback[e] = {
        fun: t,
        nokeep: n
      }
    },
    execCallback: function(e, t) {
      this.callback[e] && (this.callback[e].fun && this.callback[e].fun(e, t), this.callback[e].nokeep && delete this.callback[e])
    }
  },
  R = s.prototype;
  R.centerAndZoom = function(e, t) {
    if (e instanceof u && "number" == typeof t) {
      this.center = e,
      this.zoom = t;
      var i = [e, t];
      n(this._UUID_, "centerAndZoom", i)
    }
  },
  R.setCenter = function(e) {
    if (e instanceof u) {
      this.center = e;
      var t = [e];
      n(this._UUID_, "setCenter", t)
    }
  },
  R.getCenter = function() {
    return this.center
  },
  R.setZoom = function(e) {
    "number" == typeof e && (this.zoom = e, n(this._UUID_, "setZoom", [e]))
  },
  R.resize = function() {
    var e = document.getElementById(this._ui_div_id_);
    if (e) {
      var t = [e.offsetLeft, e.offsetTop, e.offsetWidth, e.offsetHeight];
      n(this._UUID_, "resize", t)
    }
  },
  R.getZoom = function() {
    return this.zoom
  },
  R.setMapType = function(e) { ("MAPTYPE_NORMAL" == e || "MAPTYPE_SATELLITE" == e) && (this.mapType = e, n(this._UUID_, "setMapType", [e]))
  },
  R.getMapType = function() {
    return this.mapType
  },
  R.showUserLocation = function(e) {
    if ("boolean" == typeof e && this.__showUserLocationVisable__ != e) {
      this.__showUserLocationVisable__ = e;
      var t = [e];
      n(this._UUID_, "showUserLocation", t)
    }
  },
  R.isShowUserLocation = function() {
    return this.__showUserLocationVisable__
  },
  R.getUserLocation = function(e) {
    function t(t, n) {
      e && e(n.state, n.point)
    }
    if ("function" == typeof e) {
      var i = I.UUID("callback");
      T.pushCallback(i, t, !0);
      var o = [i];
      return n(this._UUID_, "getUserLocation", o),
      !0
    }
    return ! 1
  },
  R.getCurrentCenter = function(e) {
    function t(t, n) {
      e && e(n.state, n.point)
    }
    if ("function" == typeof e) {
      var i = b.callbackId(t);
      T.pushCallback(i, t, !0);
      var o = [i];
      return n(this._UUID_, "getCurrentCenter", o),
      !0
    }
    return ! 1
  },
  R.setTraffic = function(e) {
    if ("boolean" == typeof e && e != this.trafficVisable) {
      this.trafficVisable = e;
      var t = [e];
      n(this._UUID_, "setTraffic", t)
    }
  },
  R.isTraffic = function() {
    return this.trafficVisable
  },
  R.showZoomControls = function(e) {
    if ("boolean" == typeof e && e != this.zoomControlsVisable) {
      this.zoomControlsVisable = e;
      var t = [e];
      n(this._UUID_, "showZoomControls", t)
    }
  },
  R.isShowZoomControls = function() {
    return this.zoomControlsVisable
  },
  R.getBounds = function() {
    var e = i(this._UUID_, "getBounds", []),
    t = new u(e.northease.longitude, e.northease.latitude),
    n = new u(e.southwest.longitude, e.southwest.latitude);
    return new c(t, n)
  },
  R.reset = function() {
    n(this._UUID_, "reset", [null])
  },
  R.show = function() {
    if (1 != this.visable) {
      this.visable = !0;
      var e = document.getElementById(this._ui_div_id_);
      e.style.display = "";
      var t = [e.offsetLeft, e.offsetTop, e.offsetWidth, e.offsetHeight];
      n(this._UUID_, "show", t)
    }
  },
  R.hide = function() {
    0 != this.visable && (this.visable = !1, document.getElementById(this._ui_div_id_).style.display = "none", n(this._UUID_, "hide", [null]))
  },
  R.addOverlay = function(e) {
    if (e instanceof d || e instanceof h || e instanceof p || e instanceof v || e instanceof _) {
      var t = [e._UUID_];
      return n(this._UUID_, "addOverlay", t),
      !0
    }
    return ! 1
  },
  R.removeOverlay = function(e) {
    if (e instanceof d || e instanceof h || e instanceof p || e instanceof v || e instanceof _) {
      var t = [e._UUID_];
      return n(this._UUID_, "removeOverlay", t),
      !0
    }
    return ! 1
  },
  R.clearOverlays = function() {
    var e = [null];
    n(this._UUID_, "clearOverlays", e)
  },
  s.calculateDistance = function(e, t, n, i) {
    var o = b.callbackId(function(e) {
      "function" == typeof n && n({
        distance: e
      })
    },
    function(e) {
      "function" == typeof i && i(e)
    });
    b.exec(x, "calculateDistance", [e, t, o])
  },
  s.calculateArea = function(e, t, n) {
    var i = b.callbackId(function(e) {
      "function" == typeof t && t({
        area: e
      })
    },
    function(e) {
      "function" == typeof n && n(e)
    });
    b.exec(x, "calculateArea", [e, i])
  },
  s.convertCoordinates = function(e, t, n, i) {
    var o = b.callbackId(function(e) {
      if ("function" == typeof n) {
        var t = {};
        t.coord = new u(e.long, e.lat),
        t.coordType = e.type,
        n(t)
      }
    },
    function(e) {
      "function" == typeof i && i(e)
    });
    b.exec(x, "convertCoordinates", [e, t, o])
  },
  s.geocode = function(e, t, n, i) {
    var o = b.callbackId(function(e) {
      if ("function" == typeof n) {
        var t = {};
        t.coord = new u(e.long, e.lat),
        t.address = e.addr,
        t.coordType = e.type,
        n(t)
      }
    },
    function(e) {
      "function" == typeof i && i(e)
    });
    b.exec(x, "geocode", [e, t, o])
  },
  s.reverseGeocode = function(e, t, n, i) {
    var o = b.callbackId(function(e) {
      if ("function" == typeof n) {
        var t = {};
        t.coord = new u(e.long, e.lat),
        t.address = e.addr,
        t.coordType = e.type,
        n(t)
      }
    },
    function(e) {
      "function" == typeof i && i(e)
    });
    b.exec(x, "reverseGeocode", [e, t, o])
  };
  var E = a.prototype;
  E.setIcon = function(e) {
    "string" == typeof e && (this.icon = e, this.marker && n(this.marker._UUID_, "setBubbleIcon", [this.icon]))
  },
  E.loadImage = function(e) {
    this.__contentImage = e,
    this.__contentImageAsDataURL = null,
    this.marker && n(this.marker._UUID_, "loadImage", [e])
  },
  E.loadImageDataURL = function(e) {
    this.__contentImage = null,
    this.__contentImageAsDataURL = e,
    this.marker && n(this.marker._UUID_, "loadImageDataURL", [e])
  },
  E.getLabel = function() {
    return this.label
  },
  E.setLabel = function(e) {
    "string" == typeof e && (this.label = e, this.marker && n(this.marker._UUID_, "setBubbleLabel", [this.label]))
  },
  E.belongMarker = function() {
    return this.marker
  },
  c.prototype.setNorthEase = function(e) {
    e instanceof u && (this.northease = e)
  },
  c.prototype.getNorthEase = function() {
    return this.northease
  },
  c.prototype.setSouthWest = function(e) {
    e instanceof u && (this.southwest = e)
  },
  c.prototype.getSouthWest = function() {
    return this.southwest
  },
  c.prototype.contains = function(e) {
    return e instanceof u ? !(e.longitude > this.northease.longitude || e.longitude < this.southwest.longitude || e.latitude > this.northease.latitude || e.latitude < this.southwest.latitude) : !1
  },
  c.prototype.equals = function(e) {
    return e instanceof c ? this.northease.equals(e.northease) && this.southwest.equals(e.southwest) : !1
  },
  c.prototype.getCenter = function() {
    var e = (this.northease.longitude - this.southwest.longitude) / 2,
    t = (this.northease.latitude - this.southwest.latitude) / 2;
    return new u(e + this.southwest.longitude, t + this.southwest.latitude)
  };
  var N = u.prototype;
  N.setLng = function(e) {
    this.longitude = e
  },
  N.getLng = function() {
    return this.longitude
  },
  N.setLat = function(e) {
    this.latitude = e
  },
  N.getLat = function() {
    return this.latitude
  },
  N.equals = function(e) {
    return this.longitude == e.longitude && this.latitude == e.latitude
  };
  var O = l.prototype;
  O.show = function() {
    1 != this.visable && (this.visable = !0, n(this._UUID_, "show", ["true"]))
  },
  O.hide = function() {
    0 != this.visable && (this.visable = !1, n(this._UUID_, "hide", ["false"]))
  },
  O.isVisible = function() {
    return this.visable
  },
  O.bringToTop = function() {
    n(this._UUID_, "bringToTop", [])
  },
  _.prototype = new l;
  var C = _.prototype;
  C.constructor = _,
  C.setPoint = function(e) {
    if (e instanceof u) {
      this.point = e;
      var t = [e];
      n(this._UUID_, "setPoint", t)
    }
  },
  C.getPoint = function() {
    return this.point
  },
  C.setIcon = function(e) {
    "string" == typeof e && (this.icon = e, n(this._UUID_, "setIcon", [e]))
  },
  C.setLabel = function(e) {
    "string" == typeof e && (this.caption = e, n(this._UUID_, "setLabel", [e]))
  },
  C.getLabel = function() {
    return this.caption
  },
  C.setBubble = function(e, t) {
    if (e instanceof a) {
      var i = e.marker;
      if (i && i != this) {
        i.bubble = null;
        var o = [null, null, null, null, !1];
        n(i._UUID_, "setBubble", o)
      }
      e.marker = this,
      this.bubble = e;
      var o = [this.bubble.label, this.bubble.icon, this.bubble.__contentImageAsDataURL, this.bubble.__contentImage, t];
      n(this._UUID_, "setBubble", o)
    } else null == e && n(this._UUID_, "setBubble", [null, null, null, null, t])
  },
  C.hideBubble = function() {
    this.bubble && n(this._UUID_, "hideBubble", [])
  },
  C.getBubble = function() {
    return this.bubble
  },
  C.setDraggable = function(e) {
    e != this.canDraggable && (this.canDraggable = !this.canDraggable, n(this._UUID_, "setDraggable", [this.canDraggable]))
  },
  C.isDraggable = function() {
    return this.canDraggable
  },
  C.setIcons = function(e, t) {
    n(this._UUID_, "setIcons", [e, t])
  },
  f.prototype = new l;
  var A = f.prototype;
  A.constructor = f,
  A.setStrokeColor = function(e) {
    "string" == typeof e && (this.strokeColor = e, n(this._UUID_, "setStrokeColor", [e]))
  },
  A.getStrokeColor = function() {
    return this.strokeColor
  },
  A.setStrokeOpacity = function(e) {
    "number" == typeof e && (0 > e ? e = 0 : e > 1 && (e = 1), this.strokeOpacity = e, n(this._UUID_, "setStrokeOpacity", [e]))
  },
  A.getStrokeOpacity = function() {
    return this.strokeOpacity
  },
  A.setFillColor = function(e) {
    "string" == typeof e && (this.fillColor = e, n(this._UUID_, "setFillColor", [e]))
  },
  A.getFillColor = function() {
    return this.fillColor
  },
  A.setFillOpacity = function(e) {
    "number" == typeof e && (0 > e ? e = 0 : e > 1 && (e = 1), this.fillOpacity = e, n(this._UUID_, "setFillOpacity", [e]))
  },
  A.getFillOpacity = function() {
    return this.fillOpacity
  },
  A.setLineWidth = function(e) {
    "number" == typeof e && (0 > e && (e = 0), this.lineWidth = e, n(this._UUID_, "setLineWidth", [e]))
  },
  A.getLineWidth = function() {
    return this.lineWidth
  },
  d.prototype = new f;
  var L = d.prototype;
  L.constructor = d,
  L.setCenter = function(e) {
    e instanceof u && (this.center = e, n(this._UUID_, "setCenter", [e]))
  },
  L.getCenter = function() {
    return this.center
  },
  L.setRadius = function(e) {
    "number" != typeof e || 0 > e || (this.radius = e, n(this._UUID_, "setRadius", [e]))
  },
  L.getRadius = function() {
    return this.radius
  },
  h.prototype = new f;
  var P = h.prototype;
  P.constructor = h,
  P.setPath = function(e) {
    this.path = e,
    n(this._UUID_, "setPath", [e])
  },
  P.getPath = function() {
    return this.path
  },
  p.prototype = new f;
  var M = p.prototype;
  M.constructor = p,
  M.setPath = function(e) {
    this.path = e,
    n(this._UUID_, "setPath", [e])
  },
  M.getPath = function() {
    return this.path
  },
  v.prototype = new l,
  v.prototype.constructor = v,
  w.prototype.getRoute = function(e) {
    return e >= 0 && e < this.routeNumber ? this.routeList[e] : null
  },
  g.prototype.getPosition = function(e) {
    return e >= 0 && e < this.currentNumber ? this.poiList[e] : null
  };
  var H = m.prototype;
  H.setPageCapacity = function(e) {
    this.pageCapacity = e;
    var t = [e];
    n(this._UUID_, "setPageCapacity", t)
  },
  H.getPageCapacity = function() {
    return this.pageCapacity
  },
  H.poiSearchInCity = function(e, t, i) {
    if ("string" == typeof e && "string" == typeof t) {
      var o = [e, t, i];
      return n(this._UUID_, "poiSearchInCity", o),
      !0
    }
    return ! 1
  },
  H.poiSearchNearBy = function(e, t, i, o) {
    if ("string" == typeof e && t instanceof u && "number" == typeof i) {
      var r = [e, t, i, o];
      return n(this._UUID_, "poiSearchNearBy", r),
      !0
    }
    return ! 1
  },
  H.poiSearchInbounds = function(e, t, i, o) {
    if ("string" == typeof e && t instanceof u && i instanceof u) {
      var r = [e, t, i, o];
      return n(this._UUID_, "poiSearchInbounds", r),
      !0
    }
    return ! 1
  },
  H.setTransitPolicy = function(e) {
    var t = [e];
    n(this._UUID_, "setTransitPolicy", t)
  },
  H.transitSearch = function(e, t, i) {
    if ((e instanceof u || "string" == typeof e) && (t instanceof u || "string" == typeof t) && "string" == typeof i) {
      var o = [e, t, i];
      return n(this._UUID_, "transitSearch", o),
      !0
    }
    return ! 1
  },
  H.setDrivingPolicy = function(e) {
    var t = [e];
    n(this._UUID_, "setDrivingPolicy", t)
  },
  H.drivingSearch = function(e, t, i, o) {
    if ((e instanceof u || "string" == typeof e) && (i instanceof u || "string" == typeof i) && "string" == typeof t && "string" == typeof o) {
      var r = [e, t, i, o];
      return n(this._UUID_, "drivingSearch", r),
      !0
    }
    return ! 1
  },
  H.walkingSearch = function(e, t, i, o) {
    if ((e instanceof u || "string" == typeof e) && (i instanceof u || "string" == typeof i) && "string" == typeof t && "string" == typeof o) {
      var r = [e, t, i, o];
      return n(this._UUID_, "walkingSearch", r),
      !0
    }
    return ! 1
  },
  e.maps = {
    Map: s,
    openSysMap: function(e, t, n) {
      e instanceof u && n instanceof u && o("map", "openSysMap", [e, t, n])
    },
    MapType: {
      MAPTYPE_SATELLITE: "MAPTYPE_SATELLITE",
      MAPTYPE_NORMAL: "MAPTYPE_NORMAL"
    },
    Marker: _,
    Bubble: a,
    Point: u,
    Bounds: c,
    Circle: d,
    Polygon: h,
    Polyline: p,
    Position: y,
    Route: v,
    Search: m,
    SearchPolicy: {
      TRANSIT_TIME_FIRST: "TRANSIT_TIME_FIRST",
      TRANSIT_TRANSFER_FIRST: "TRANSIT_TRANSFER_FIRST",
      TRANSIT_WALK_FIRST: "TRANSIT_WALK_FIRST",
      TRANSIT_FEE_FIRST: "TRANSIT_FEE_FIRST",
      DRIVING_TIME_FIRST: "DRIVING_TIME_FIRST",
      DRIVING_NO_EXPRESSWAY: "DRIVING_NO_EXPRESSWAY",
      DRIVING_FEE_FIRST: "DRIVING_FEE_FIRST"
    },
    __SearchRouteResult__: w,
    __SearchPoiResult__: g,
    __bridge__: T
  }
} (window.plus),
function(e) {
  function t(e) {
    this.__hasPendingOperation__ = !1,
    this.to = [],
    this.cc = [],
    this.bcc = [],
    this.subject = "",
    this.body = "",
    this.bodyType = "text",
    this.silent = !1,
    this.attachment = [],
    this.type = e
  }
  var e = e,
  n = window.plus.bridge,
  i = "Messaging";
  t.prototype.addAttachment = function(e) {
    "string" == typeof e && this.attachment.push(e)
  },
  e.messaging = {
    createMessage: function(e) {
      return new t(e)
    },
    sendMessage: function(e, o, r) {
      if (e instanceof t) {
        var s = "function" != typeof o ? null: function() {
          e.__hasPendingOperation__ = !1,
          o()
        },
        a = "function" != typeof r ? null: function(t) {
          e.__hasPendingOperation__ = !1,
          r(t)
        };
        if (e.__hasPendingOperation__) return void a({
          code: 2,
          message: "sending"
        });
        e.__hasPendingOperation__ = !0;
        var c = n.callbackId(s, a);
        n.exec(i, "sendMessage", [c, e], {
          cbid: c
        })
      }
    },
    TYPE_SMS: 1,
    TYPE_MMS: 2,
    TYPE_EMAIL: 3
  }
} (window.plus),
function(e) {
  function t(e) {
    D[e.__uuid__] = e
  }
  function n(e) {
    delete D[e.__uuid__]
  }
  function i(t, n, i, o) {
    e.nativeUI.alert(t, n, i, o)
  }
  function o(t, n) {
    e.nativeUI.toast(t, n)
  }
  function r(t, n, i, o) {
    e.nativeUI.confirm(t, n, i, o)
  }
  function s(t, n, i, o, r) {
    e.nativeUI.prompt(t, n, i, o, r)
  }
  function a(t, n, i) {
    e.nativeUI.pickDate(t, n, i)
  }
  function c(t, n, i) {
    e.nativeUI.pickTime(t, n, i)
  }
  function u(t, n) {
    var i = new e.ui.NWindow(t, n);
    return i
  }
  function l(e, t) {
    k[e] = t
  }
  function _(e, t) {
    var n = new k[e](t);
    return t && (n.id = t.id),
    I.exec(x, S, [x, "createView", [window.__HtMl_Id__, [e, n.__uuid__, t, n.__callback_id__]]]),
    n
  }
  function f(e, t) {
    e && e.close(t)
  }
  function d() {
    for (var t = I.execSync(x, U, [x, "enumWindow", [window.__HtMl_Id__]]), n = [], i = {},
    o = 0; o < t.length; o++) {
      var r = t[o],
      s = D[r.uuid]; (null == s || void 0 === s) && (s = new e.ui.NWindow(null, null, !0), s.__uuid__ = r.uuid, I.exec(x, S, [x, "setcallbackid", [s.__uuid__, [s.__callback_id__]]])),
      n.push(s),
      i[s.__uuid__] = s
    }
    return D = i,
    n
  }
  function h(t) {
    var n = I.execSync(x, U, [x, "findWindowByName", [window.__HtMl_Id__, [t]]]);
    if (n) {
      var i = D[n.uuid];
      return null == i && (i = new e.ui.NWindow(null, null, !0), i.__uuid__ = n.uuid, I.exec(x, S, [x, "setcallbackid", [i.__uuid__, [i.__callback_id__]]])),
      i
    }
  }
  function p() {
    var t = D[window.__HtMl_Id__];
    return (null == t || void 0 === t) && (t = new e.ui.NWindow(null, null, !0), t.__uuid__ = window.__HtMl_Id__, D[t.__uuid__] = t, I.exec(x, S, [x, "setcallbackid", [t.__uuid__, [t.__callback_id__]]])),
    t
  }
  function v() {
    e.navigator.closeSplashscreen()
  }
  function y(t) {
    e.navigator.setFullscreen(t)
  }
  function w(e, t, n) {
    I.exec(x, S, [e.__IDENTITY__, t, [e.__uuid__, n]])
  }
  function g(e, t, n) {
    return I.execSync(x, U, [e.__IDENTITY__, t, [e.__uuid__, n]])
  }
  function m(t, n) {
    return new e.nativeUI.showWaiting(t, n)
  }
  function b() {
    return I.execSync(x, U, [x, "isFullScreen", [0]])
  }
  var e = e,
  I = e.bridge,
  x = "UI",
  S = "execMethod",
  U = "syncExecMethod",
  D = {},
  k = (e.bridge, e.tools, {});
  e.ui = {
    createWaiting: m,
    pickTime: c,
    pickDate: a,
    alert: i,
    confirm: r,
    prompt: s,
    toast: o,
    findWindowByName: h,
    closeWindow: f,
    createWindow: u,
    getSelfWindow: p,
    enumWindow: d,
    register: l,
    createView: _,
    exec: w,
    execSync: g,
    closeSplashscreen: v,
    setFullscreen: y,
    isFullscreen: b,
    __pushWindow__: t,
    __popWindow__: n,
    __nviews__: k
  }
} (window.plus),
function(e) {
  function t(t) {
    this.__IDENTITY__ = t,
    this.__uuid__ = e.tools.UUID(t),
    this.id,
    e.obj.Callback.call(this)
  }
  var e = e,
  n = e.ui,
  i = e.bridge;
  t.prototype.getMetrics = function(e) {
    var t;
    e && (t = i.callbackId(function(t) {
      e(t)
    }), n.exec(this, "getMetrics", [t, window.__HtMl_Id__]))
  },
  t.prototype.onCallback = function(e, t, n) {
    e(n)
  },
  t.prototype.addEventListener = function(t, i, o) {
    var r = e.obj.Callback.prototype.addEventListener.apply(this, [t, i, o]);
    if (r) {
      var s = [t, window.__HtMl_Id__];
      n.exec(this, "addEventListener", s)
    }
  },
  t.prototype.removeEventListener = function(t, i) {
    var o = e.obj.Callback.prototype.removeEventListener.apply(this, [t, i]);
    if (o) {
      var r = [t, window.__HtMl_Id__];
      n.exec(this, "removeEventListener", r)
    }
  },
  n.NView = t
} (window.plus),
function(e) {
  function t(e, t, o) {
    this.__view_array__ = [],
    n.NView.prototype.constructor.apply(this, [i]),
    o || (n.__pushWindow__(this), n.exec(this, i, [e, t, this.__callback_id__, window.location.href]))
  }
  var e = e,
  n = e.ui,
  i = "NWindow",
  o = e.bridge,
  r = t.prototype;
  e.tools.extend(r, n.NView.prototype),
  r.constructor = t,
  r.show = function(e, t, i) {
    n.exec(this, "show", [e, t, i])
  },
  r.close = function(t, i) {
    e.bridge.callbackFromNative(this.__callback_id__, {
      status: e.bridge.OK,
      message: {
        evt: "close"
      },
      keepCallback: !0
    }),
    n.__popWindow__(this),
    n.exec(this, "close", [t, i])
  },
  r.setOption = function(e) {
    n.exec(this, "setOption", [e])
  },
  r.setVisible = function(e) {
    n.exec(this, "setVisible", [e])
  },
  r.setPreloadJsFile = function(e) {
    n.exec(this, "setPreloadJsFile", [e])
  },
  r.appendPreloadJsFile = function(e) {
    n.exec(this, "appendPreloadJsFile", [e])
  },
  r.setContentVisible = function(e) {
    n.exec(this, "setContentVisible", [e])
  },
  r.getUrl = function() {
    return n.execSync(this, "getUrl", [])
  },
  r.getTitle = function() {
    return n.execSync(this, "getTitle", [])
  },
  r.getOption = function() {
    return n.execSync(this, "getOption")
  },
  r.load = function(e) {
    n.exec(this, "load", [e, window.location.href])
  },
  r.stop = function() {
    n.exec(this, "stop", [])
  },
  r.reload = function(e) {
    n.exec(this, "reload", [e])
  },
  r.back = function() {
    n.exec(this, "back", [])
  },
  r.forward = function() {
    n.exec(this, "forward", [])
  },
  r.canBack = function(e) {
    var t;
    e && (t = o.callbackId(function(t) {
      e(t)
    })),
    n.exec(this, "canBack", [t])
  },
  r.canForward = function(e) {
    var t;
    e && (t = o.callbackId(function(t) {
      e(t)
    })),
    n.exec(this, "canForward", [t])
  },
  r.clear = function() {
    n.exec(this, "clear", [])
  },
  r.evalJS = function(e) {
    n.exec(this, "evalJS", [e])
  },
  r.append = function(e) {
    this.__view_array__.push(e),
    n.exec(this, "append", [e.__IDENTITY__, e.__uuid__])
  },
  r.setPullToRefresh = function(t, i) {
    var o;
    i && (o = e.bridge.callbackId(i)),
    this.addEventListener("pulldownrefreshevent", i, !1),
    n.exec(this, "setPullToRefresh", [t, o])
  },
  r.endPullToRefresh = function() {
    n.exec(this, "endPullToRefresh", [])
  },
  r.findViewById = function(t) {
    for (var i = this.__view_array__.length,
    o = i - 1; o >= 0; o--) {
      var r = this.__view_array__[o];
      if (t == r.id) return r
    }
    var s = n.execSync(this, "findViewById", [t]),
    a = s.identity,
    c = s.option,
    u = (s.uuid, new e.ui.__nviews__[a](c));
    return u.__uuid__ = s.uuid,
    this.__view_array__.push(u),
    u
  },
  n.NWindow = t
} (window.plus),
function(e) {
  function t() {
    n.NView.prototype.constructor.apply(this, ["Navigator"]),
    e.obj.Callback.prototype.constructor.apply(this)
  }
  var n = e.ui,
  e = e,
  i = "Navigator";
  n.register(i, t);
  var o = t.prototype;
  o.constructor = t,
  e.tools.extend(o, n.NView.prototype),
  o.setLeft = function(e) {
    n.exec(this, "setLeft", [e])
  },
  o.setRight = function(e) {
    n.exec(this, "setRight", [e])
  },
  o.setSystemList = function(e) {
    n.exec(this, "setSystemList", [e])
  },
  o.setRight = function(e) {
    n.exec(this, "setRight", [e])
  },
  o.addNavigationListener = function(t) {
    var i = e.bridge.callbackId(t);
    n.exec(this, "addNavigationListener", [i])
  },
  o.addListItemListener = function(t) {
    var i = e.bridge.callbackId(t);
    n.exec(this, "addListItemListener", [i])
  },
  o.setTitleText = function(e) {
    n.exec(this, "setTitleText", [e])
  },
  o.setList = function(e) {
    n.exec(this, "setList", [e])
  },
  n.Navigator = t
} (window.plus),
function(e) {
  function t(e) {
    var t = _.slice(0);
    f = new d(e.alpha, e.beta, e.gamma, h, p, v);
    for (var n = 0,
    i = t.length; i > n; n++) t[n].win(f)
  }
  function n() {
    a.platform != a.ANDROID && window.addEventListener("deviceorientation", t, !1);
    var e = s.callbackId(function(e) {
      h = e.magneticHeading,
      p = e.trueHeading,
      v = e.headingAccuracy,
      a.platform == a.ANDROID && t(e)
    },
    function() {
      for (var e = _.slice(0), t = 0, n = e.length; n > t; t++);
    });
    s.exec(c, "start", [e]),
    u = !0
  }
  function i() {
    a.platform != a.ANDROID && window.removeEventListener("deviceorientation", t, !1),
    s.exec(c, "stop", []),
    u = !1
  }
  function o(e, t) {
    return {
      win: e,
      fail: t
    }
  }
  function r(e) {
    var t = _.indexOf(e);
    t > -1 && (_.splice(t, 1), 0 === _.length && i())
  }
  var e = e,
  s = e.bridge,
  a = e.tools,
  c = "Orientation",
  u = !1,
  l = {},
  _ = [],
  f = null,
  d = function(e, t, n, i, o, r) {
    this.alpha = e,
    this.beta = t,
    this.gamma = n,
    this.magneticHeading = i,
    this.trueHeading = o,
    this.headingAccuracy = r
  },
  h = void 0,
  p = void 0,
  v = void 0,
  y = {
    getCurrentOrientation: function(e, t) {
      var i, s = function(t) {
        r(i),
        e(t)
      },
      a = function(e) {
        r(i),
        t && t(e)
      };
      i = o(s, a),
      _.push(i),
      u || n()
    },
    watchOrientation: function(e, t, i) {
      var s = i && i.frequency && ("number" == typeof i.frequency || i.frequency instanceof Number) ? i.frequency: 500,
      c = a.UUID("watch"),
      d = o(function() {},
      function(e) {
        r(d),
        t && t(e)
      });
      return _.push(d),
      l[c] = {
        timer: window.setInterval(function() {
          f && e(f)
        },
        s),
        listeners: d
      },
      u ? f && e(f) : n(),
      c
    },
    clearWatch: function(e) {
      e && l[e] && (window.clearInterval(l[e].timer), r(l[e].listeners), delete l[e])
    }
  };
  e.orientation = y
} (window.plus),
function(e) {
  function t() {
    this.id = "",
    this.description = "",
    this.serviceReady = !0,
    this.installService = function() {
      i.exec(n, "installService", [this.id])
    },
    this.appStoreReceipt = function() {
      return i.execSync(n, "appStoreReceipt", [this.id])
    },
    this.restoreComplateRequest = function(e, t, o) {
      if ("appleiap" !== this.id) {
        var r = {
          errorcode: "-3"
        };
        o(r)
      }
      var s = "function" != typeof t ? null: function(e) {
        t(e)
      },
      a = "function" != typeof o ? null: function(e) {
        o(e)
      },
      c = i.callbackId(s, a);
      i.exec(n, "restoreComplateRequest", [this.id, c, e])
    },
    this.requestOrder = function(e, t, o) {
      if ("appleiap" !== this.id) {
        var r = {
          errorcode: "-3"
        };
        return void o(r)
      }
      var s = "function" != typeof t ? null: function(e) {
        t(e)
      },
      a = "function" != typeof o ? null: function(e) {
        o(e)
      },
      c = i.callbackId(s, a);
      i.exec(n, "requestOrder", [this.id, c, e])
    }
  }
  var e = e,
  n = "Payment",
  i = window.plus.bridge,
  o = {
    Channel: t,
    getChannels: function(e, t) {
      var r = "function" != typeof e ? null: function(t) {
        for (var n = [], i = t.length, r = 0; i > r; r++) {
          var s = new o.Channel;
          s.id = t[r].id,
          s.description = t[r].description,
          s.serviceReady = t[r].serviceReady,
          n[r] = s
        }
        e(n)
      },
      s = "function" != typeof t ? null: function(e) {
        t(e)
      },
      a = i.callbackId(r, s);
      i.exec(n, "getChannels", [a])
    },
    request: function(e, o, r, s) {
      var a = "function" != typeof r ? null: function(e) {
        r(e)
      },
      c = "function" != typeof s ? null: function(e) {
        s(e)
      };
      if (! (e instanceof t)) return void window.setTimeout(function() {
        c({
          code: 62e3
        })
      },
      0);
      var u = i.callbackId(a, c);
      i.exec(n, "request", [e.id, o, u])
    }
  };
  e.payment = o
} (window.plus),
__Mkey__Push__ = function() {
  var e = [],
  t = {
    pushCallback_Push: function(t, n, i) {
      e[t] = {
        fun: n,
        nokeep: i
      }
    },
    execCallback_Push: function(t, n, i) {
      e[t] && e[t].fun && e[t].fun("click" == n ? i: i)
    }
  };
  return t
} (),
function(e) {
  function t(e, t, n) {
    this.__UUID__ = null,
    this.message = e,
    this.Payload = t,
    this.options = n
  }
  var e = e,
  n = window.plus.bridge,
  i = window.plus.tools,
  o = "Push";
  e.push = {
    getClientInfo: function() {
      var e = n.execSync2(o, "getClientInfo", []);
      return e
    },
    createMessage: function(e, r, s) {
      if (i.platform == i.IOS) n.exec(o, "createMessage", [e, r, s]);
      else {
        var e = new t(e, r, s),
        a = n.execSync(o, "createMessage", [e]);
        e.__UUID__ = a
      }
    },
    clear: function() {
      n.exec(o, "clear", [])
    },
    addEventListener: function(e, t, r) {
      var s = i.UUID(e);
      __Mkey__Push__.pushCallback_Push(s, t, r),
      n.exec(o, "addEventListener", [window.__HtMl_Id__, s, e])
    },
    remove: function(e) {
      n.exec(o, "remove", [e.__UUID__])
    },
    getAllMessage: function() {
      return n.execSync(o, "getAllMessage", [])
    },
    setAutoNotification: function(e) {
      n.exec(o, "setAutoNotification", [e])
    }
  }
} (window.plus),
function(e) {
  var e = e,
  t = window.plus.bridge,
  n = "Runtime";
  e.runtime = {
    arguments: null,
    version: null,
    innerVersion: null,
    launchLoadedTime: null,
    launcher: null,
    origin: null,
    restart: function() {
      t.exec(n, "restart", [])
    },
    install: function(e, i, o, r) {
      var s = t.callbackId(o, r);
      t.exec(n, "install", [e, s, i])
    },
    getProperty: function(e, i) {
      var o = t.callbackId(i);
      t.exec(n, "getProperty", [e, o])
    },
    quit: function() {
      t.exec(n, "quit", [])
    },
    openURL: function(e, i, o) {
      var r = t.callbackId(null,
      function(e) {
        "function" == typeof i && i(e)
      });
      t.exec(n, "openURL", [e, r, o])
    },
    launchApplication: function(e, i) {
      var o = t.callbackId(null,
      function(e) {
        "function" == typeof i && i(e)
      });
      t.exec(n, "launchApplication", [e, o])
    },
    setBadgeNumber: function(e) {
      "number" == typeof e && t.exec(n, "setBadgeNumber", [e])
    },
    openFile: function(e, i, o) {
      var r = t.callbackId(null,
      function(e) {
        "function" == typeof o && o(e)
      });
      t.exec(n, "openFile", [e, i, r])
    }
  }
} (window.plus),
function(e) {
  function t(e, t, n, i) {
    this.id = e,
    this.description = t,
    this.authenticated = n,
    this.accessToken = i,
    this.nativeClient = !1
  }
  function n(t, n) {
    var s = this;
    s.__UUID__ = o.UUID("Authorize"),
    s.__componentid__ = t,
    s.display = n,
    s.onloaded = null,
    s.onauthenticated = null,
    s.onerror = null,
    s.__top__ = 0,
    s.__left__ = 0,
    s.__width__ = 0,
    s.__height__ = 0;
    var a = document.getElementById(s.__componentid__);
    a && (s.__left__ = a.offsetLeft, s.__top__ = a.offsetTop, s.__width__ = a.offsetWidth, s.__height__ = a.offsetHeight);
    var c = function(e) {
      "function" == typeof s.onerror && s.onerror(e)
    },
    u = function(t) {
      "load" == t.evt ? "function" == typeof s.onloaded && s.onloaded() : "auth" == t.evt && "function" == typeof s.onauthenticated && e.share.getServices(function(e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          if (i.id == t.type) {
            i.authenticated = t.authenticated,
            i.accessToken = t.accessToken,
            s.onauthenticated(i);
            break
          }
        }
      },
      function(e) {
        c(e)
      })
    },
    l = i.callbackId(u, c);
    i.exec(r, "create", [s.__UUID__, l, s.display, s.__left__, s.__top__, s.__width__, s.__height__])
  }
  var e = e,
  i = e.bridge,
  o = e.tools,
  r = "Share",
  s = {},
  a = t.prototype;
  a.authorize = function(e, t, n) {
    var o = this,
    s = "function" != typeof e ? null: function(t) {
      o.authenticated = t.authenticated,
      o.accessToken = t.accessToken,
      e(o)
    },
    a = "function" != typeof t ? null: function(e) {
      t(e)
    },
    c = i.callbackId(s, a);
    i.exec(r, "authorize", [c, this.id, n])
  },
  a.forbid = function() {
    this.authenticated = !1,
    this.accessToken = null,
    i.exec(r, "forbid", [this.id])
  },
  a.send = function(e, t, n) {
    var o = "function" != typeof t ? null: function() {
      t()
    },
    s = "function" != typeof n ? null: function(e) {
      n(e)
    },
    a = i.callbackId(o, s);
    i.exec(r, "send", [a, this.id, e])
  },
  n.prototype.load = function(e) {
    this.id = e,
    i.exec(r, "load", [this.__UUID__, e])
  },
  n.prototype.setVisible = function(e) {
    i.exec(r, "setVisible", [this.__UUID__, e])
  };
  var c = {
    Authorize: n,
    getServices: function(e, n) {
      var o = "function" != typeof e ? null: function(n) {
        for (var i = [], o = 0; o < n.length; o++) {
          var r = n[o];
          if (r.id) {
            var a = s[r.id];
            a || (a = new t),
            a.id = r.id,
            a.description = r.description,
            a.authenticated = r.authenticated,
            a.accessToken = r.accessToken,
            a.nativeClient = r.nativeClient,
            s[r.id] = a,
            i.push(a)
          }
        }
        e(i)
      },
      a = "function" != typeof n ? null: function(e) {
        n(e)
      },
      c = i.callbackId(o, a);
      i.exec(r, "getServices", [c])
    }
  };
  e.share = c
} (window.plus),
function(e) {
  var e = e,
  t = "Speech",
  n = window.plus.bridge,
  i = {
    startRecognize: function(e, i, o) {
      var r = "function" != typeof i ? null: function(e) {
        i(e)
      },
      s = "function" != typeof o ? null: function(e) {
        o(e)
      },
      a = n.callbackId(r, s),
      c = {};
      if (e.onstart) {
        var u = "function" != typeof e.onstart ? null: function() {
          e.onstart()
        };
        c.onstart = n.callbackId(u)
      }
      if (e.onend) {
        var l = "function" != typeof e.onend ? null: function() {
          e.onend()
        };
        c.onend = n.callbackId(l)
      }
      n.exec(t, "startRecognize", [a, e, c])
    },
    stopRecognize: function() {
      n.exec(t, "stopRecognize", [])
    }
  };
  e.speech = i
} (window.plus),
function(e) {
  var e = e,
  t = e.bridge,
  n = "Statistic";
  e.statistic = {
    eventTrig: function(e, i) {
      t.exec(n, "eventTrig", [e, i])
    },
    eventStart: function(e, i) {
      t.exec(n, "eventStart", [e, i])
    },
    eventEnd: function(e, i) {
      t.exec(n, "eventEnd", [e, i])
    },
    eventDuration: function(e, i, o) {
      t.exec(n, "eventDuration", [e, i, o])
    }
  }
} (window.plus),
function(e) {
  var e = e,
  t = window.plus.bridge,
  n = "Storage";
  e.storage = {
    getLength: function() {
      return t.execSync2(n, "getLength", [null])
    },
    getItem: function(e) {
      return "string" == typeof e ? t.execSync2(n, "getItem", [e],
      function(e) {
        var t = e.indexOf(":"),
        n = e.substr(0, t);
        return "null" === n ? null: e.substr(t + 1)
      }) : !1
    },
    setItem: function(e, i) {
      return "string" == typeof e && "string" == typeof i ? t.execSync2(n, "setItem", [e, i]) : !1
    },
    removeItem: function(e) {
      return "string" == typeof e ? t.execSync2(n, "removeItem", [e]) : !1
    },
    clear: function() {
      return t.execSync2(n, "clear", [null])
    },
    key: function(e) {
      return "number" == typeof e ? t.execSync2(n, "key", [e]) : !1
    }
  }
} (window.plus),
function(e) {
  function t(e, t, n) {
    this.type = r.getValue(e, ""),
    this.handles = [],
    this.capture = r.getValue(n, !1),
    "function" == typeof t && this.handles.push(t)
  }
  function n(e, t, n) {
    this.__UUID__ = r.UUID(),
    this.url = r.getValue(e, ""),
    this.options = t || {},
    this.uploadedSize = 0,
    this.totalSize = 0,
    this.responseText = "",
    this.method = r.getValue(this.options.method, "GET"),
    this.timeout = r.getValue(this.options.timeout, 120),
    this.retry = r.getValue(this.options.retry, 3),
    this.retryInterval = r.getValue(this.options.retryInterval, 30),
    this.priority = r.getValue(this.options.priority, 1),
    this.onCompleted = n || null,
    this.eventHandlers = {},
    this.__requestHeaders__ = {},
    this.__responseHeaders__ = {},
    this.__noParseResponseHeader__ = null,
    this.__cacheReponseHeaders__ = {}
  }
  var e = e,
  i = window.plus.bridge,
  o = window.plus.tools,
  r = {
    UUID: function() {
      return o.UUID("uploader")
    },
    server: "Uploader",
    getValue: function(e, t) {
      return void 0 === e ? t: e
    }
  };
  t.prototype.fire = function() {
    for (var e = 0; e < this.handles.length; ++e) this.handles[e].apply(this, arguments)
  },
  n.prototype.addFile = function(e, t) {
    return "string" == typeof e && "object" == typeof t ? (i.exec(r.server, "addFile", [this.__UUID__, e, t]), !0) : !1
  },
  n.prototype.addData = function(e, t) {
    return "string" == typeof e && "string" == typeof t ? (i.exec(r.server, "addData", [this.__UUID__, e, t]), !0) : !1
  },
  n.prototype.getAllResponseHeaders = function() {
    if (this.__noParseResponseHeader__) return this.__noParseResponseHeader__;
    var e = "";
    for (var t in this.__responseHeaders__) e = e + t + " : " + this.__responseHeaders__[t] + "\r\n";
    return this.__noParseResponseHeader__ = e,
    this.__noParseResponseHeader__
  },
  n.prototype.getResponseHeader = function(e) {
    if ("string" == typeof e) {
      var t = null;
      if (e = e.toLowerCase(), t = this.__cacheReponseHeaders__[e]) return t;
      for (var n in this.__responseHeaders__) {
        var i = this.__responseHeaders__[n];
        n = n.toLowerCase(),
        e === n && (t = t ? t + ", " + i: i)
      }
      return this.__cacheReponseHeaders__[e] = t,
      t
    }
    return ""
  },
  n.prototype.setRequestHeader = function(e, t) {
    if ("string" == typeof e && "string" == typeof t) {
      var n = this.__requestHeaders__[e];
      this.__requestHeaders__[e] = n ? n + ", " + t: t
    }
  },
  n.prototype.start = function() {
    i.exec(r.server, "start", [this.__UUID__, this.__requestHeaders__])
  },
  n.prototype.pause = function() {
    i.exec(r.server, "pause", [this.__UUID__])
  },
  n.prototype.resume = function() {
    i.exec(r.server, "resume", [this.__UUID__])
  },
  n.prototype.abort = function() {
    i.exec(r.server, "abort", [this.__UUID__])
  },
  n.prototype.addEventListener = function(e, n, i) {
    if ("string" == typeof e && "function" == typeof n) {
      var o = e.toLowerCase();
      void 0 === this.eventHandlers[o] ? this.eventHandlers[o] = new t(e, n, i) : this.eventHandlers[o].handles.push(n)
    }
  },
  n.prototype.__handlerEvt__ = function(e) {
    var t = this;
    t.state = r.getValue(e.state, t.state),
    t.uploadedSize = r.getValue(e.uploadedSize, t.uploadedSize),
    t.totalSize = r.getValue(e.totalSize, t.totalSize),
    t.__responseHeaders__ = r.getValue(e.headers, {}),
    4 == t.state && "function" == typeof t.onCompleted && (t.responseText = r.getValue(e.responseText, t.responseText), t.onCompleted(t, e.status || null));
    var n = this.eventHandlers.statechanged;
    n && n.fire(t, void 0 === e.status ? null: e.status)
  },
  e.uploader = {
    __taskList__: {},
    createUpload: function(e, t, o) {
      if ("string" == typeof e) {
        var s = new n(e, t, o);
        return this.__taskList__[s.__UUID__] = s,
        i.exec(r.server, "createUpload", [s]),
        s
      }
      return null
    },
    enumerate: function(e) {
      var t = this,
      o = t.__taskList__,
      s = i.callbackId(function(t) {
        for (var i = 0; i < t.length; i++) {
          var s = t[i];
          if (s && s.uuid) {
            var a = o[s.uuid];
            a || (a = new n, a.__UUID__ = s.uuid, o[a.__UUID__] = a),
            a.state = r.getValue(s.state, a.state),
            a.options = r.getValue(s.options, a.options),
            a.url = r.getValue(s.url, a.url),
            a.uploadedSize = r.getValue(s.uploadedSize, a.uploadedSize),
            a.totalSize = r.getValue(s.totalSize, a.totalSize),
            a.responseText = r.getValue(s.responseText, a.responseText),
            a.__responseHeaders__ = r.getValue(t.headers, a.__responseHeaders__)
          }
        }
        var c = [];
        for (var u in o) c.push(o[u]);
        "function" == typeof e && e(c)
      });
      i.exec(r.server, "enumerate", [s])
    },
    clear: function(e) {
      var t = 4;
      "number" == typeof e && (t = e),
      i.exec(r.server, "clear", [t])
    },
    startAll: function() {
      i.exec(r.server, "startAll", [0])
    },
    __handlerEvt__: function(e, t) {
      var n = this.__taskList__[e];
      n && n.__handlerEvt__(t)
    }
  }
} (window.plus),
function(e) {
  var e = e,
  t = (window.plus.bridge, "SUSF");
  e.widget = {
    restart: function() {
      mkey.exec(t, "restart", [])
    },
    install: function(e, n, i, o) {
      var r = mkey.helper.callbackid(i, o);
      mkey.exec(t, "install", [e, r, n])
    },
    getProperty: function(e, n) {
      var i = mkey.helper.callbackid(n);
      mkey.exec(t, "getProperty", [e, i])
    }
  }
} (window.plus),
function(e) {
  function t(e, t, n, i) {
    this.target = e,
    this.lengthComputable = t,
    this.loaded = n,
    this.total = i
  }
  function n() {}
  function i() {
    this.__init__(),
    this.__UUID__ = s.UUID("xhr")
  }
  function o(e) {
    return "string" == typeof e ? (e = e.replace(/(^\s*)|(\s*$)/g, ""), 0 == e.indexOf("http://") || 0 == e.indexOf("https://") ? e: e = 0 == e.indexOf("/") ? location.origin + e: location.origin + location.pathname + e) : ""
  }
  var e = e,
  r = e.bridge,
  s = e.tools;
  n.Timeout = 0,
  n.Other = 1,
  i.Uninitialized = 0,
  i.Open = 1,
  i.Sent = 2,
  i.Receiving = 3,
  i.Loaded = 4,
  i.__F__ = "XMLHttpRequest";
  var a = i.prototype;
  a.__init__ = function() {
    this.readyState = i.Uninitialized,
    this.responseText = "",
    this.responseXML = null,
    this.status = i.Uninitialized,
    this.statusText = null,
    this.onreadystatechange,
    this.responseType = null,
    this.response = null,
    this.withCredentials = !0,
    this.timeout = 12e4,
    this.__noParseResponseHeader__ = null,
    this.__requestHeaders__ = {},
    this.__responseHeaders__ = {},
    this.__cacheReponseHeaders__ = {},
    this.__progessEvent__ = new t(this, !1, 0, 0)
  },
  a.abort = function() {
    this.readyState > i.Uninitialized && ("function" == typeof this.onabort && this.onabort(this.__progessEvent__), this.__init__(), r.exec(i.__F__, "abort", [this.__UUID__]))
  },
  a.getAllResponseHeaders = function() {
    if (this.readyState >= i.Receiving) {
      if (this.__noParseResponseHeader__) return this.__noParseResponseHeader__;
      var e = "";
      for (var t in this.__responseHeaders__) e = e + t + " : " + this.__responseHeaders__[t] + "\r\n";
      return this.__noParseResponseHeader__ = e,
      this.__noParseResponseHeader__
    }
    return null
  },
  a.getResponseHeader = function(e) {
    if ("string" == typeof e && this.readyState >= i.Receiving) {
      var t = null;
      if (e = e.toLowerCase(), t = this.__cacheReponseHeaders__[e]) return t;
      for (var n in this.__responseHeaders__) {
        var o = this.__responseHeaders__[n];
        n = n.toLowerCase(),
        e === n && (t = t ? t + ", " + o: o)
      }
      return this.__cacheReponseHeaders__[e] = t,
      t
    }
    return null
  },
  a.setRequestHeader = function(e, t) {
    if ("string" == typeof e && "string" == typeof t && i.Open == this.readyState) {
      var n = this.__requestHeaders__[e];
      this.__requestHeaders__[e] = n ? n + ", " + t: t
    }
  },
  a.open = function(e, t, n, s) { (i.Open == this.readyState || i.Loaded == this.readyState) && this.__init__(),
    i.Uninitialized == this.readyState && (this.readyState = i.Open, r.exec(i.__F__, "open", [this.__UUID__, e, o(t), n, s, this.timeout]), "function" == typeof this.onreadystatechange && this.onreadystatechange())
  },
  a.overrideMimeType = function(e) {
    r.exec(i.__F__, "overrideMimeType", [this.__UUID__, e])
  },
  a.send = function(e) {
    var t = this;
    if (i.Open == this.readyState) {
      this.readyState = i.Sent,
      "function" == typeof this.onloadstart && this.onloadstart(t.__progessEvent__);
      var o = r.callbackId(function(e) {
        if (i.Receiving == e.readyState) i.Sent == t.readyState ? (t.readyState = i.Receiving, t.status = e.status, t.statusText = e.statusText, t.__responseHeaders__ = e.header, t.__progessEvent__.lengthComputable = e.lengthComputable, t.__progessEvent__.total = e.totalSize) : i.Receiving == t.readyState && (t.responseText = e.responseText, t.__progessEvent__.loaded = e.revSize),
        "function" == typeof t.onreadystatechange && t.onreadystatechange(),
        "function" == typeof t.onprogress && t.onprogress(t.__progessEvent__);
        else if (i.Loaded == e.readyState) {
          t.readyState = i.Loaded,
          e.status && (t.status = e.status);
          try {
            if (t.responseText) {
              var o = new DOMParser;
              t.responseXML = o.parseFromString(t.responseText, "text/xml")
            }
          } catch(r) {
            t.responseXML = null
          }
          try {
            if ("document" == t.responseType) {
              var o = new DOMParser;
              t.response = t.responseXML
            } else "json" == t.responseType && (t.response = JSON.parse(t.responseText))
          } catch(r) {
            t.response = null
          }
          "function" == typeof t.onreadystatechange && t.onreadystatechange(),
          e.error == n.Timeout ? "function" == typeof t.ontimeout && t.ontimeout(t.__progessEvent__) : e.error == n.Other ? "function" == typeof t.onerror && t.onerror(t.__progessEvent__) : "function" == typeof t.onload && t.onload(t.__progessEvent__),
          "function" == typeof t.onloadend && t.onloadend(t.__progessEvent__)
        }
      });
      return r.exec(i.__F__, "send", [this.__UUID__, o, e, this.__requestHeaders__]),
      void("function" == typeof this.onreadystatechange && this.onreadystatechange())
    }
    throw Error("XMLHttpRequest not open")
  },
  e.net = {
    XMLHttpRequest: i
  }
} (window.plus),
function(e) {
  var e = e,
  t = window.plus.bridge,
  n = "Zip";
  e.zip = {
    decompress: function(e, i, o, r) {
      var s = t.callbackId(o, r);
      t.exec(n, "decompress", [e, i, s])
    },
    compress: function(e, i, o, r) {
      var s = t.callbackId(o, r);
      t.exec(n, "compress", [e, i, s])
    },
    compressImage: function(e, i, o) {
      var r = t.callbackId(function(e) {
        if (i) {
          var t = {
            target: e.path,
            width: e.w,
            height: e.h,
            size: e.size
          };
          i(t)
        }
      },
      o);
      t.exec(n, "compressImage", [e, r])
    }
  }
} (window.plus),
function(e) {
  function t() {
    var e = r.callbackId(function(e) {
      for (var t = l.slice(0), n = 0, i = t.length; i > n; n++) t[n].win(e)
    },
    function(e) {
      for (var t = l.slice(0), n = 0, i = t.length; i > n; n++) t[n].fail(e)
    });
    r.exec(a, "start", [e]),
    c = !0
  }
  function n() {
    r.exec(a, "stop", []),
    c = !1
  }
  function i(e, t) {
    return {
      win: e,
      fail: t
    }
  }
  function o(e) {
    var t = l.indexOf(e);
    t > -1 && (l.splice(t, 1), 0 === l.length && n())
  }
  var e = e,
  r = e.bridge,
  s = e.tools,
  a = "Proximity",
  c = !1,
  u = {},
  l = [],
  _ = {
    getCurrentProximity: function(e, t) {
      var n = r.callbackId(function(t) {
        s.IOS == s.platform && (t = 0 == t ? 0 : 1 / 0),
        e && e(t)
      },
      function(e) {
        t && t(e)
      });
      r.exec(a, "getCurrentProximity", [n])
    },
    watchProximity: function(e, n) {
      var r = s.UUID("watch"),
      a = i(function(t) {
        s.IOS == s.platform && (t = 0 == t ? 0 : 1 / 0),
        e && e(t)
      },
      function(e) {
        o(a),
        n && n(e)
      });
      return l.push(a),
      u[r] = {
        listeners: a
      },
      c || t(),
      r
    },
    clearWatch: function(e) {
      e && u[e] && (o(u[e].listeners), delete u[e])
    }
  };
  e.proximity = _
} (window.plus),
function(e) {
  function t(e, t) {
    this.type = e,
    this.value = t
  }
  function n() {
    this.__TYPE__ = "JSBObject",
    this.__UUID__ = a.UUID("JSBaseObject")
  }
  function i(t, n) {
    t = r(t);
    var i = this;
    this.__UUID__ = a.UUID("JSImplements"),
    this.callback = n,
    this.callbackId = s.callbackId(function(t) {
      for (var n = t.arguments,
      o = [], r = 0; r < n.length; r++) o.push(e.ios.__Tool.New(n[r], !0));
      i.callback[t.method].apply(i, o)
    },
    null);
    var o = [];
    for (var c in n) o.push(c);
    var u = s.execSync2(_Server, "implements", [this.__UUID__, t, o, this.callbackId], null, !0);
    return e.ios.__Tool.New(u, !0)
  }
  function o() {
    this.__Tool = c,
    this.__JSBBaseObject = n
  }
  function r(e) {
    if ("string" != typeof e || a.platform == a.IOS) return e;
    var t, n;
    for (var i in _) if (0 == e.indexOf(i)) {
      t = i,
      n = _[i];
      break
    }
    return n && e ? e.replace(t, n) : e
  }
  var e = e,
  s = window.plus.bridge,
  a = window.plus.tools;
  _Server = "Invocation",
  _importHash = [],
  _frameObjHash = {},
  _currentFrameObj = null;
  var c = {},
  u = {};
  c.undefObjectHash = {};
  var l = "";
  e.tools.IOS == e.tools.platform ? l += "plus.ios.": e.tools.ANDROID == e.tools.platform && (l += "plus.android."),
  c.process = function(e) {
    for (var t = [], n = 0; n < e.length; n++) t.push(this.warp(e[n]));
    return t
  },
  c.attach = function(e, t) {
    var n = this.undefObjectHash[e];
    if (n && t) {
      for (var i = 0; i < n.length; i++) n[i].__proto__ = t.prototype;
      delete this.undefObjectHash.className
    }
  },
  c.New = function(e, i) {
    var o = null;
    if (e) {
      if ("object" == e.type) {
        var r = u.isImport(e.className);
        if (r) o = new r(i);
        else {
          if (e.superClassNames) for (var s = 0; s < e.superClassNames.length && !(r = u.isImport(e.superClassNames[s])); s++);
          if (r) o = new r(i);
          else {
            o = new n;
            var a = this.undefObjectHash[e.className];
            a || (this.undefObjectHash[e.className] = a = []),
            a.push(o)
          }
        }
        return o.className = e.className,
        o.__UUID__ = e.value,
        o
      }
      if ("struct" == e.type) return new t(e.type, e.value);
      if (e.value instanceof Array) for (var s = 0; s < e.value.length; s++) e.value[s] = c.New(e.value[s], i);
      return e.value
    }
    return null
  },
  c.handleClassName = function(e) {
    return e.replace("$", ".")
  },
  c.saveContent = function(e, t) {
    s.execSync2(_Server, "__saveContent", [e, t], null, !0)
  },
  c.warp = function(n) {
    var i = {};
    if (n && "JSBObject" == n.__TYPE__) i.type = "object",
    i.value = n.__UUID__;
    else if (n instanceof t) {
      if (i.type = n.type, i.value = n.value, 0 == n.type.indexOf("@block")) {
        i.type = n.type;
        var o = s.callbackId(function(t) {
          "function" == typeof n.value;
          for (var i = [], o = 0; o < t.length; o++) i.push(e.ios.__Tool.New(t[o], !0));
          n.value.apply(this, i)
        });
        i.value = o,
        alert(i.value)
      }
    } else if (void 0 === n || null == n) i.type = "null",
    i.value = n;
    else if ("string" == typeof n || "String" == typeof n) i.type = "string",
    i.value = n;
    else if ("number" == typeof n) i.type = "number",
    i.value = n;
    else if ("boolean" == typeof n) i.type = "boolean",
    i.value = n;
    else if ("function" == typeof n) {
      i.type = "block";
      var o = s.callbackId(function(t) {
        for (var i = [], o = 0; o < t.length; o++) i.push(e.ios.__Tool.New(t[o], !0));
        n.apply(this, i)
      });
      i.value = o
    } else i = n;
    return i
  },
  t.prototype.constructor = t,
  n.prototype.plusSetAttribute = function() {
    var e = null;
    try {
      for (var t = [], n = 1; n < arguments.length; n++) t.push(c.warp(arguments[n]));
      e = window.plus.bridge.execSync2(_Server, "__plusSetAttribute", [this.__UUID__, arguments[0], t], null, !0),
      e = c.New(e, !0)
    } catch(i) {
      throw i
    }
    return e
  },
  n.prototype.plusGetAttribute = function(t) {
    var n = null;
    try {
      n = window.plus.bridge.execSync2(_Server, "__plusGetAttribute", [this.__UUID__, t], null, !0),
      n = e.ios.__Tool.New(n, !0)
    } catch(i) {
      throw i
    }
    return n
  },
  n.prototype.plusCallMethod = function(t) {
    var n = null;
    try {
      var i = "",
      o = [],
      r = 0;
      for (var s in t) {
        if ("string" != typeof s) return;
        var a = t[s];
        if (0 == r) {
          if (i = s, void 0 === a) {
            r++;
            break
          }
          i += ":"
        } else i += s + ":";
        o.push(a),
        r++
      }
      if (0 == r) return;
      var o = window.plus.ios.__Tool.process(o);
      n = window.plus.bridge.execSync2(_Server, "__exec", [this.__UUID__, i, o], null, !0),
      n = e.ios.__Tool.New(n, !0)
    } catch(c) {
      throw c
    }
    return n
  },
  i.prototype = new n,
  i.prototype.constructor = i,
  u.hashTable = {},
  u.importClass = function(t, n) {
    var i = this.isImport(t);
    if (i) return i;
    for (var o = this.newClassDefine(t, n), r = s.execSync2(_Server, "import", [t], null, !0), a = r.ClassMethod, l = 0; l < a.length; l++) o += this.AddMethodToClass(t, a[l], !0);
    for (var _ = r.InstanceMethod,
    l = 0; l < _.length; l++) o += this.AddMethodToClass(t, _[l]);
    if (e.tools.ANDROID == e.tools.platform) for (var f = r.ClassConstKeys,
    d = r.ClassConstValues,
    l = 0; l < f.length; l++) o += this.AddStaticConstToClass(t, f[l], d[l]);
    return this.hashTable[t] = i = u.createClass(t, o),
    c.attach(t, i),
    i
  },
  u.isImport = function(e) {
    return u.hashTable[e]
  },
  u.newClassDefine = function(e, t) {
    var n = "",
    i = e;
    e = c.handleClassName(e),
    t && (t = c.handleClassName(t));
    var o, r;
    o = l + e,
    r = l + t;
    for (var s = o.split("."), a = "window", u = 0; u < s.length - 1; u++) a = a + "." + s[u],
    n += "if(!" + a + ")",
    n += a + "={};";
    return n += a + "." + s[s.length - 1] + "=",
    n += "function(nocreate) {            this.__UUID__ = window.plus.tools.UUID('JSB');            this.__TYPE__ = 'JSBObject';            var args = window.plus.ios.__Tool.process(arguments);            if ( nocreate && plus.tools.IOS == plus.tools.platform ) {} else {                window.plus.bridge.execSync2('" + _Server + "', '__Instance',[this.__UUID__, '" + i + "',args],null,true);            }        };",
    t = t ? r: "plus.ios.__JSBBaseObject",
    t && (n += o + ".prototype = new " + t + "('__super__constructor__');", n += o + ".prototype.constructor = " + o + ";"),
    n
  },
  u.createClass = function(e, t) {
    e = c.handleClassName(e);
    var n = "(function(plus){" + t + "return " + l + e + ";})(window.plus);";
    return window.eval(n)
  },
  u.AddStaticConstToClass = function(e, t, n) {
    var i;
    return e = c.handleClassName(e),
    n instanceof Array && 0 == n.length ? (i = l + e + "." + t + "=[];", i += l + e + ".prototype." + t + "=[];") : (i = l + e + "." + t + "=" + n + ";", i += l + e + ".prototype." + t + "=" + n + ";"),
    i
  },
  u.AddMethodToClass = function(t, n, i) {
    var o, r = t;
    t = c.handleClassName(t);
    var s = "";
    if (e.tools.IOS == e.tools.platform) {
      var a = n.split(":"),
      u = a.length;
      if (u > 0) for (var _ = 0; u > _; _++) s += a[_];
      else s = a
    } else s = n;
    return o = i ? l + t + "." + s: l + t + ".prototype." + s,
    o += " = function (){            var ret = null;            try {                var args = window.plus.ios.__Tool.process(arguments);",
    o += i ? "ret = window.plus.bridge.execSync2('" + _Server + "', '__execStatic', ['" + r + "', '" + n + "', args],null,true);": "ret = window.plus.bridge.execSync2('" + _Server + "', '__exec', [this.__UUID__, '" + n + "', args],null,true);",
    o += "ret = plus.ios.__Tool.New(ret, true);            } catch (e) {                throw e;            }            return ret;        };"
  },
  o.prototype.importClass = function(e) {
    e = r(e);
    var t, n;
    if (e.__TYPE__) {
      if (!e.className) return;
      n = e.__UUID__,
      t = e,
      e = e.className
    }
    var i = u.isImport(e);
    if (i) return i;
    var o = s.execSync2(_Server, "__inheritList", [e, n], null, !0);
    if (o) {
      for (var a = o.length,
      c = a - 1; c >= 0; c--) i = c == a - 1 ? u.importClass(o[c], null) : u.importClass(o[c], o[c + 1]);
      return t && (t.__proto__ = i.prototype),
      i
    }
    return null
  },
  o.prototype.invoke = function(t, n) {
    for (var i = null,
    o = [], r = 2; r < arguments.length; r++) o.push(window.plus.ios.__Tool.warp(arguments[r]));
    if ("string" == typeof t) try {
      i = window.plus.bridge.execSync2(_Server, "__execStatic", [t, n, o], null, !0)
    } catch(s) {
      throw s
    } else t && "JSBObject" == t.__TYPE__ ? i = window.plus.bridge.execSync2(_Server, "__exec", [t.__UUID__, n, o], null, !0) : null == t && "string" == typeof n && (i = window.plus.bridge.execSync2(_Server, "__execCFunction", [n, o], null, !0));
    return i = e.ios.__Tool.New(i, !0)
  },
  o.prototype.setAttribute = function(e, t, n) {
    "function" == typeof e || e && "JSBObject" == e.__TYPE__ && e.plusSetAttribute(t, n)
  },
  o.prototype.getAttribute = function(e, t) {
    if ("function" == typeof e);
    else if (e && "JSBObject" == e.__TYPE__) return e.plusGetAttribute(t);
    return null
  },
  o.prototype.load = function(e) {
    window.plus.bridge.execSync2(_Server, "__loadDylib", [e], null, !0)
  },
  o.prototype.newObject = function(n, i) {
    var o = null;
    if ("string" == typeof n) {
      for (var r = [], s = 1; s < arguments.length; s++) r.push(window.plus.ios.__Tool.warp(arguments[s]));
      o = window.plus.bridge.execSync2(_Server, "__newObject", [n, r], null, !0)
    }
    return o = e.ios.__Tool.New(o, !0),
    o ? o: new t(n, i)
  },
  o.prototype.currentWebview = function() {
    if (!_currentFrameObj) {
      var t = window.plus.bridge.execSync2(_Server, "currentWebview", [], null, !0);
      _currentFrameObj = e.ios.__Tool.New(t, !0)
    }
    return _currentFrameObj
  },
  o.prototype.getWebviewById = function(t) {
    if (t === window.__HtMl_Id__) return this.currentWebview();
    var n = _frameObjHash[t];
    return n || (n = window.plus.bridge.execSync2(_Server, "getWebviewById", [t], null, !0), n = e.ios.__Tool.New(n, !0), n && (_frameObjHash[t] = n)),
    n
  },
  o.prototype.deleteObject = function(e) {
    s.execSync2(_Server, "__release", [e.__UUID__], null, !0)
  },
  o.prototype.implements = function(e, t) {
    return new i(e, t)
  };
  var _ = {
    "io.dcloud.adapter.": "io.dcloud.common.adapter.",
    "io.dcloud.android.content.": "io.dcloud.feature.internal.reflect.",
    "io.dcloud.app.": "io.dcloud.common.app.",
    "io.dcloud.constant.": "io.dcloud.common.constant.",
    "io.dcloud.core.": "io.dcloud.common.core.",
    "io.dcloud.DHInterface.": "io.dcloud.common.DHInterface.",
    "io.dcloud.net.": "io.dcloud.common.util.net.",
    "io.dcloud.permission.": "io.dcloud.common.core.permission.",
    "io.dcloud.sdk.": "io.dcloud.feature.internal.sdk.",
    "io.dcloud.splash.": "io.dcloud.feature.internal.splash.",
    "io.dcloud.ui.": "io.dcloud.common.core.ui.",
    "io.dcloud.util.": "io.dcloud.common.util."
  };
  e.ios = e.android = new o,
  e.tools.ANDROID == e.tools.platform && (e.android.runtimeMainActivity = function() {
    var t;
    if (e.android.__runtimeMainActivity__) return e.android.__runtimeMainActivity__;
    var n = function(e) {
      t.onActivityResult && t.onActivityResult(e[0], e[1], e[2])
    },
    i = e.bridge.callbackId(n);
    t = e.bridge.execSync2(_Server, "getContext", [i], null, !0);
    var o = t.className;
    return t.superClassNames = [],
    t = e.ios.__Tool.New(t, !0),
    e.android.importClass(o),
    e.android.__runtimeMainActivity__ = t,
    t
  })
} (window.plus),
function(e) {
  function t(e, t, n, i) {
    var o, r;
    e && (r = "string" != typeof e ? "" + e: e, t && (o = w.callbackId(function(e) {
      t(e)
    })), v.exec(y, "alert", [window.__HtMl_Id__, [r, o, n, i]]))
  }
  function n(e, t) {
    var n;
    t && (n = w.callbackId(function(e) {
      var n = {};
      n.index = e,
      t(n)
    })),
    v.exec(y, "actionSheet", [window.__HtMl_Id__, [e, n]])
  }
  function i(e, t) {
    var n;
    e && (n = "string" != typeof e ? "" + e: e, v.exec(y, "toast", [window.__HtMl_Id__, [n, t]]))
  }
  function o(e, t, n) {
    if (e) {
      e.onclick && (e.__plus__onclickCallbackId = w.callbackId(e.onclick));
      var i;
      n && (i = w.callbackId(function(e) {
        var i = {};
        i.index = e.index,
        i.target = t[e.index],
        n(i)
      })),
      v.exec(y, "showMenu", [window.__HtMl_Id__, [e, t, i]])
    }
  }
  function r() {
    v.exec(y, "hideMenu", [window.__HtMl_Id__])
  }
  function s() {
    return v.execSync(y, "isTitlebarVisible", [window.__HtMl_Id__])
  }
  function a(e) {
    return v.exec(y, "setTitlebarVisible", [window.__HtMl_Id__, [e]])
  }
  function c() {
    return v.execSync(y, "getTitlebarHeight", [window.__HtMl_Id__])
  }
  function u(e, t, n, i) {
    var o, r;
    e && (r = "string" != typeof e ? "" + e: e, t && (o = w.callbackId(function(e) {
      var n = {};
      n.index = e,
      t(n)
    })), v.exec(y, "confirm", [window.__HtMl_Id__, [r, o, n, i]]))
  }
  function l(e, t, n, i, o) {
    var r;
    if (e) {
      r = "string" != typeof e ? "" + e: e;
      var s;
      t && (s = w.callbackId(function(e) {
        e.value = e.message,
        t(e)
      })),
      v.exec(y, "prompt", [window.__HtMl_Id__, [r, s, n, i, o]])
    }
  }
  function _(e, t, n) {
    if (e && "function" == typeof e) {
      var i = {};
      n && (n.minDate instanceof Date ? (i.startYear = n.minDate.getFullYear(), i.startMonth = n.minDate.getMonth(), i.startDay = n.minDate.getDate()) : g.isNumber(n.startYear) && (i.startYear = n.startYear, i.startMonth = 0, i.startDay = 1), n.maxDate instanceof Date ? (i.endYear = n.maxDate.getFullYear(), i.endMonth = n.maxDate.getMonth(), i.endDay = n.maxDate.getDate()) : g.isNumber(n.endYear) && (i.endYear = n.endYear, i.endMonth = 11, i.endDay = 31), n.date instanceof Date && (i.setYear = n.date.getFullYear(), i.setMonth = n.date.getMonth(), i.setDay = n.date.getDate()), i.popover = n.popover, i.title = n.title);
      var o = "function" != typeof e ? null: function(t) {
        var n = void 0 !== t ? new Date(t) : null,
        i = {};
        i.date = n,
        e(i)
      },
      r = "function" != typeof t ? null: function(e) {
        t(e)
      },
      s = w.callbackId(o, r);
      v.exec(y, "pickDate", [window.__HtMl_Id__, [s, i]])
    }
  }
  function f(e, t, n) {
    if (e && "function" == typeof e) {
      var i = !1;
      if ("object" == typeof n) {
        var o = n.time;
        o instanceof Date && (n.__hours = o.getHours(), n.__minutes = o.getMinutes(), i = !0)
      }
      var r = "function" != typeof e ? null: function(t) {
        var n = void 0 !== t ? new Date(t) : null,
        i = {};
        i.date = n,
        e(i)
      },
      s = "function" != typeof t ? null: function(e) {
        t(e)
      },
      a = w.callbackId(r, s);
      v.exec(y, "pickTime", [window.__HtMl_Id__, [a, n]]),
      i && (delete n.__hours, delete n.__minutes)
    }
  }
  function d(t, n) {
    this.__uuid__ = e.tools.UUID("WaitingView"),
    this.onclose = null;
    var i = this,
    o = w.callbackId(function() {
      "function" == typeof i.onclose && i.onclose()
    });
    v.exec(y, "WaitingView", [this.__uuid__, [t, n, o]])
  }
  function h(e, t) {
    return new d(e, t)
  }
  function p() {
    w.exec(y, "closeWaiting", [])
  }
  var e = e,
  v = e.bridge,
  y = "NativeUI",
  w = e.bridge,
  g = e.tools;
  d.prototype.close = function() {
    v.exec(y, "WaitingView_close", [this.__uuid__])
  },
  d.prototype.setTitle = function(e) {
    v.exec(y, "WaitingView_setTitle", [this.__uuid__, [e]])
  },
  e.nativeUI = {
    pickTime: f,
    pickDate: _,
    alert: t,
    confirm: u,
    showWaiting: h,
    prompt: l,
    toast: i,
    showMenu: o,
    hideMenu: r,
    isTitlebarVisible: s,
    setTitlebarVisible: a,
    getTitlebarHeight: c,
    actionSheet: n,
    closeWaiting: p
  }
} (window.plus),
function(e) {
  var e = e,
  t = window.plus.bridge,
  n = e.tools,
  i = "Navigator";
  e.navigator = {
    closeSplashscreen: function() {
      t.exec(i, "closeSplashscreen", [0])
    },
    updateSplashscreen: function(e) {
      t.exec(i, "updateSplashscreen", [e])
    },
    isFullscreen: function() {
      return t.execSync(i, "isFullScreen", [0])
    },
    setFullscreen: function(e) {
      t.exec(i, "setFullscreen", [e])
    },
    isImmersedStatusbar: function() {
      return t.execSync(i, "isImmersedStatusbar", [])
    },
    getStatusbarHeight: function() {
      return n.platform == n.IOS ? 20 : t.execSync(i, "getStatusbarHeight", [])
    },
    setStatusBarBackground: function(e) {
      t.exec(i, "setStatusBarBackground", [e])
    },
    getStatusBarBackground: function() {
      return t.execSync(i, "getStatusBarBackground", [])
    },
    setStatusBarStyle: function(e) {
      t.exec(i, "setStatusBarStyle", [e])
    },
    getStatusBarStyle: function() {
      return t.execSync(i, "getStatusBarStyle", [])
    },
    setUserAgent: function(e, n) {
      t.exec(i, "setUserAgent", [e, n])
    },
    getUserAgent: function() {
      return t.execSync(i, "getUserAgent", [],
      function(e) {
        try {
          var t = window.eval(e);
          return null == t ? null: e
        } catch(n) {
          return e
        }
        return e
      })
    },
    removeCookie: function(e) {
      t.exec(i, "removeCookie", [e])
    },
    removeSessionCookie: function() {
      t.exec(i, "removeSessionCookie", [])
    },
    removeAllCookie: function() {
      t.exec(i, "removeAllCookie", [])
    },
    setCookie: function(e, n) {
      t.exec(i, "setCookie", [e, n])
    },
    getCookie: function(e) {
      return t.execSync(i, "getCookie", [e],
      function(e) {
        try {
          var t = window.eval(e);
          return null == t ? null: e
        } catch(n) {
          return e
        }
        return e
      })
    },
    setLogs: function(e) {
      t.exec(i, "setLogs", [e])
    },
    isLogs: function() {
      return t.execSync(i, "isLogs", [0])
    },
    createShortcut: function(e, n, o) {
      var r = t.callbackId(n, o);
      t.exec(i, "createShortcut", [e, r])
    },
    hasShortcut: function(e, o) {
      if (n.platform != n.IOS) {
        var r = t.callbackId(o);
        t.exec(i, "hasShortcut", [e, r])
      }
    },
    checkPermission: function(e) {
      return t.execSync(i, "checkPermission", [e])
    },
    requestPermission: function(e, n) {
      var o = t.callbackId(n);
      return t.exec(i, "requestPermission", [e, o])
    },
    isBackground: function() {
      return t.execSync(i, "isBackground", [])
    }
  }
} (window.plus),
function(e) {
  var e = e,
  t = window.plus.bridge,
  n = "UI",
  i = "execMethod";
  e.key = {},
  keyEvent = {},
  keyEvent.backbutton = "back",
  keyEvent.menubutton = "menu",
  keyEvent.searchbutton = "search",
  keyEvent.volumeupbutton = "volumeup",
  keyEvent.volumedownbutton = "volumedown",
  keyEvent.keyup = "keyup",
  keyEvent.keydown = "keydown",
  keyEvent.longpressed = "longpressed",
  e.key.addEventListener = function(o, r, s) {
    function a(e) {
      var t = {};
      t.keycode = e.keyType,
      t.keyCode = e.keyCode,
      t.keyType = e.keyType,
      r(t)
    }
    if (o && r && "string" == typeof o && "function" == typeof r) {
      var c = e.webview.currentWebview(),
      u = e.obj.Callback.prototype.addEventListener.apply(c, [keyEvent[o], a, s]);
      if (u) {
        var l = [keyEvent[o], window.__HtMl_Id__];
        t.exec(n, i, [c.__IDENTITY__, "addEventListener", [c.__uuid__, l]])
      }
    }
  },
  e.key.removeEventListener = function(o, r) {
    if (o && r && "string" == typeof o && "function" == typeof r) {
      var s = e.webview.currentWebview(),
      a = e.obj.Callback.prototype.removeEventListener.apply(s, [keyEvent[o], r]);
      if (a) {
        var c = [keyEvent[o], window.__HtMl_Id__],
        s = e.webview.currentWebview();
        t.exec(n, i, [s.__IDENTITY__, "removeEventListener", [s.__uuid__, c]])
      }
    }
  }
} (window.plus),
function(e) {
  function t(e) {
    T[e.__uuid__] = e
  }
  function n(e) {
    delete T[e.__uuid__]
  }
  function i(t, n, i, o) {
    i = i || {},
    i.name = n;
    var r = new e.webview.Webview(t, i, !1, o);
    return r
  }
  function o(t, n, i) {
    var o = null;
    if ("string" == typeof t) o = l(t);
    else {
      if (! (t instanceof e.webview.Webview)) return;
      o = t
    }
    o && o.close(n, i)
  }
  function r() {
    for (var t = S.execSync(U, k, [U, "enumWindow", [window.__HtMl_Id__]]), n = [], i = {},
    o = 0; o < t.length; o++) {
      var r = t[o],
      s = T[r.uuid];
      s || (s = new e.webview.Webview(null, null, !0, r.extras), s.__uuid__ = r.uuid, s.id = r.id, S.exec(U, D, [U, "setcallbackid", [s.__uuid__, [s.__callback_id__]]])),
      n.push(s),
      i[s.__uuid__] = s
    }
    return T = i,
    n
  }
  function s() {
    var t = S.execSync(U, k, [U, "getDisplayWebview", [window.__HtMl_Id__]]),
    n = [];
    if (!t) return n;
    for (var i = {},
    o = 0; o < t.length; o++) {
      var r = t[o],
      s = T[r.uuid];
      s || (s = new e.webview.Webview(null, null, !0, r.extras), s.__uuid__ = r.uuid, s.id = r.id, S.exec(U, D, [U, "setcallbackid", [s.__uuid__, [s.__callback_id__]]])),
      n.push(s),
      i[s.__uuid__] = s
    }
    return T = i,
    n
  }
  function a() {
    return c()
  }
  function c() {
    if (E.platform == E.IOS) return ! 1;
    var e = S.execSync(U, k, [U, "defaultHardwareAccelerated", []]);
    return e
  }
  function u(t, n, i) {
    if (t && "string" == typeof t) {
      var o = T[t];
      return o || (o = new e.webview.Webview(null, null, !0, i), o.__uuid__ = t, o.id__ = n, o.id = n, S.exec(U, D, [U, "setcallbackid", [o.__uuid__, [o.__callback_id__]]]), T[t] = o),
      o
    }
  }
  function l(t) {
    if (t && "string" == typeof t) {
      var n = S.execSync(U, k, [U, "findWindowByName", [window.__HtMl_Id__, [t]]]);
      if (n) {
        var i = T[n.uuid];
        return null == i && (i = new e.webview.Webview(null, null, !0, n.extras), i.__uuid__ = n.uuid, i.id = n.id, S.exec(U, D, [U, "setcallbackid", [i.__uuid__, [i.__callback_id__]]]), T[i.__uuid__] = i),
        i
      }
      for (var o in T) {
        var r = T[o];
        if (r && r.id === t) return r
      }
      return null
    }
  }
  function _() {
    var t = T[window.__HtMl_Id__];
    if (null == t || void 0 === t) {
      var n = S.execSync2(U, k, [U, "currentWebview", [window.__HtMl_Id__]]);
      n && (t = new e.webview.Webview(null, null, !0, n.extras), t.__uuid__ = window.__HtMl_Id__, t.id = n.id, T[t.__uuid__] = t, S.exec(U, D, [U, "setcallbackid", [t.__uuid__, [t.__callback_id__]]]))
    }
    return t
  }
  function f() {
    var t = S.execSync2(U, k, [U, "getLaunchWebview", []]);
    if (t) {
      var n = T[t.uuid];
      return null == n && (n = new e.webview.Webview(null, null, !0, t.extras), n.__uuid__ = t.uuid, n.id = t.id, S.exec(U, D, [U, "setcallbackid", [n.__uuid__, [n.__callback_id__]]]), T[n.__uuid__] = n),
      n
    }
  }
  function d(t, n, i, o) {
    var r = null;
    if ("string" == typeof t) r = l(t);
    else {
      if (! (t instanceof e.webview.Webview)) return;
      r = t
    }
    r && r.hide(n, i, o)
  }
  function h(e, t, n) {
    S.exec(U, D, [e.__IDENTITY__, t, [e.__uuid__, n]])
  }
  function p(e, t, n) {
    return S.execSync(U, k, [e.__IDENTITY__, t, [e.__uuid__, n]])
  }
  function v(t, n, i, o, r, s, a) {
    var c = e.webview.create(t, n, i, a);
    return c.show(o, r, s),
    c
  }
  function y(t, n, i, o, r) {
    var s = null;
    if ("string" == typeof t) s = l(t);
    else {
      if (! (t instanceof e.webview.Webview)) return;
      s = t
    }
    s && s.show(n, i, o, r)
  }
  function w(e) {
    var t = T[e.WebviewID];
    t && ("onloading" == e.Event ? null != t.onloading && t.onloading() : "onclose" == e.Event ? (null != t.onclose && t.onclose(), delete T[e.WebviewID]) : "onerror" == e.Event ? null != t.onerror && t.onerror() : "onloaded" == e.Event && null != t.onloaded && t.onloaded())
  }
  function g() {
    "save" == arguments[0] ? S.exec(U, D, [U, "debug", [location.href, arguments]]) : S.execSync(U, D, [U, "debug", [location.href, arguments]])
  }
  function m() {
    if (E.IOS == E.platform) return null;
    var t = S.execSync(U, k, [U, "getWapLaunchWebview", []]);
    if (t) {
      var n = T[t.uuid];
      return null == n && (n = new e.webview.Webview(null, null, !0, t.extras), n.__uuid__ = t.uuid, n.id = t.id, S.exec(U, D, [U, "setcallbackid", [n.__uuid__, [n.__callback_id__]]]), T[n.__uuid__] = n),
      n
    }
    return null
  }
  function b() {
    var t = S.execSync(U, k, [U, "getTopWebview", [window.__HtMl_Id__]]);
    if (t) {
      var n = T[t.uuid];
      return null == n && (n = new e.webview.Webview(null, null, !0, t.extras), n.__uuid__ = t.uuid, n.id = t.id, S.exec(U, D, [U, "setcallbackid", [n.__uuid__, [n.__callback_id__]]]), T[n.__uuid__] = n),
      n
    }
    return null
  }
  function I(t, n, i) {
    if (t && t.view && t.styles && t.styles.toLeft && ("string" == typeof t.view || t.view instanceof e.webview.Webview)) {
      t.view instanceof e.webview.Webview && (t.view = t.view.__uuid__),
      n && n.view && ("string" == typeof n.view || n.view instanceof e.webview.Webview) && n.view instanceof e.webview.Webview && (n.view = n.view.__uuid__);
      var o, r;
      i && "function" == typeof i && (o = e.webview.currentWebview().__uuid__, r = R.callbackId(function(t) {
        t.target = e.webview._find__Window_By_UUID__(t.target.uuid),
        i(t)
      })),
      S.exec(U, D, [U, "startAnimation", [window.__HtMl_Id__, [t, n, o, r]]])
    }
  }
  function x() {
    var t = S.execSync2(U, k, [U, "getSecondWebview", []]);
    if (t) {
      var n = T[t.uuid];
      return null == n && (n = new e.webview.Webview(null, null, !0, t.extras), n.__uuid__ = t.uuid, n.id = t.id, S.exec(U, D, [U, "setcallbackid", [n.__uuid__, [n.__callback_id__]]]), T[n.__uuid__] = n),
      n
    }
  }
  var e = e,
  S = e.bridge,
  U = "UI",
  D = "execMethod",
  k = "syncExecMethod",
  T = {},
  R = e.bridge,
  E = e.tools;
  e.webview = {
    open: v,
    show: y,
    __test__: g,
    hide: d,
    createGroup: null,
    getWapLaunchWebview: m,
    getLaunchWebview: f,
    getSecondWebview: x,
    getWebviewById: l,
    getTopWebview: b,
    close: o,
    create: i,
    currentWebview: _,
    all: r,
    getDisplayWebview: s,
    defauleHardwareAccelerated: a,
    defaultHardwareAccelerated: c,
    exec: h,
    execSync: p,
    _find__Window_By_UUID__: u,
    __pushWindow__: t,
    __popWindow__: n,
    __JSON_Window_Stack: T,
    __Webview_LoadEvent_CallBack_: w,
    startAnimation: I
  }
} (window.plus),
function(e) {
  function t(t) {
    this.__IDENTITY__ = t,
    this.__uuid__ = e.tools.UUID(t),
    this.id,
    e.obj.Callback.call(this)
  }
  var e = e,
  n = e.webview,
  i = e.bridge;
  t.prototype.getMetrics = function(e) {
    var t;
    e && (t = i.callbackId(function(t) {
      var n = {};
      n.canForward = t,
      e(n)
    }), n.exec(this, "getMetrics", [t, window.__HtMl_Id__]))
  },
  t.prototype.onCallback = function(t, n, i) {
    if ("popGesture" == n) {
      var o = i.private_args,
      r = e.webview._find__Window_By_UUID__(o.uuid, o.id, o.extras),
      s = {
        target: r,
        type: i.type,
        progress: i.progress
      };
      "result" in i && (s.result = i.result),
      i = s
    }
    t(i)
  },
  t.prototype.addEventListener = function(t, i, o) {
    var r = e.obj.Callback.prototype.addEventListener.apply(this, [t, i, o]);
    if (r) {
      var s = [t, window.__HtMl_Id__];
      n.exec(this, "addEventListener", s)
    }
  },
  t.prototype.removeEventListener = function(t, i) {
    var o = e.obj.Callback.prototype.removeEventListener.apply(this, [t, i]);
    if (o) {
      var r = [t, window.__HtMl_Id__];
      n.exec(this, "removeEventListener", r)
    }
  },
  n.NView = t
} (window.plus),
function(e) {
  function t(t, i) {
    e.webview.NView.prototype.constructor.apply(this, [n]),
    this.__children = [];
    var o = [];
    if (t instanceof Array) for (var r = 0; r < t.length; r++) {
      var s = t[r];
      s.styles = s.styles || {},
      s.styles.name = s.id;
      var a = new e.webview.Webview(s.url, s.styles, !0, s.extras);
      e.webview.__pushWindow__(a),
      this.__children.push(a);
      var c = [a.__uuid__, [s.url, s.styles, a.__callback_id__, location.host + location.pathname, s.extras]];
      o.push(c)
    }
    e.webview.exec(this, "createGroup", [o, i, this.__callback_id__])
  }
  var e = e,
  n = "WebviewGroup",
  i = t.prototype;
  e.tools.extend(i, e.webview.NView.prototype),
  i.constructor = t,
  t.prototype.setSelectIndex = function(t) {
    e.webview.exec(this, "setSelectIndex", [t])
  },
  t.prototype.children = function() {
    return this.__children
  },
  e.webview.createGroup = function(e, n) {
    return new t(e, n)
  },
  e.webview.WebviewGroup = t
} (window.plus),
function(e) {
  function t() {
    return window.location.href
  }
  function n(e, n, i, s) {
    if (this.__view_array__ = [], o.NView.prototype.constructor.apply(this, [r]), this.id = null, n && n.name && (this.id = n.name), s) for (var a in s) this[a] = s[a]; ! this.id && e && (this.id = n.name = e),
    i || (o.__pushWindow__(this), o.exec(this, r, [e, n, this.__callback_id__, t(), s]))
  }
  function i() {
    window.__needNotifyNative__ && "touchmove" == this.type && (window.__needNotifyNative__ = o.execSync(e.webview.currentWebview(), "needTouchEvent", [])),
    l.oldPreventDefault.call(this)
  }
  var e = e,
  o = e.webview,
  r = "NWindow",
  s = "UI",
  a = "execMethod",
  c = e.bridge,
  u = e.tools,
  l = n.prototype;
  e.tools.extend(l, o.NView.prototype),
  l.constructor = n,
  l.show = function(e, t, n, i) {
    var r;
    n && "function" == typeof n && (r = c.callbackId(function() {
      n()
    })),
    o.exec(this, "show", [e, t, null, r, i])
  },
  l.close = function(t, n, i) {
    this === e.webview.__JSON_Window_Stack[window.__HtMl_Id__] && e.bridge.callbackFromNative(this.__callback_id__, {
      status: e.bridge.OK,
      message: {
        evt: "close"
      },
      keepCallback: !0
    }),
    o.exec(this, "close", [t, n, i])
  },
  l.setStyle = function(e) {
    e && "object" == typeof e && o.exec(this, "setOption", [e])
  },
  l.nativeInstanceObject = function() {
    var t = e.ios || e.android;
    return t && t.getWebviewById ? t.getWebviewById(this.__uuid__) : null
  },
  l.hide = function(e, t, n) {
    o.exec(this, "hide", [e, t, n])
  },
  l.setVisible = function(e) {
    o.exec(this, "setVisible", [e])
  },
  l.isVisible = function() {
    return o.execSync(this, "isVisible", [])
  },
  l.setFixBottom = function(e) {
    o.exec(this, "setFixBottom", [e])
  },
  l.getNavigationbar = function() {
    var t;
    if (u.platform == u.IOS) t = e.nativeObj.View.getViewById("_Nav_Bar_" + this.__uuid__);
    else {
      var n = o.execSync(this, "getNavigationbar", []);
      n && (t = new e.nativeObj.View(n.id, n.styles, !0), t.__uuid__ = n.uuid)
    }
    return t
  },
  window.__needNotifyNative__ = !1,
  l.__needTouchEvent__ = function() {
    Event.prototype.preventDefault !== i && (l.oldPreventDefault = Event.prototype.preventDefault, Event.prototype.preventDefault = i)
  },
  l.drag = function(t, n, i) {
    if (t && t.direction && "string" == typeof t.direction && t.moveMode && "string" == typeof t.moveMode) {
      var r = t.moveMode.toLocaleLowerCase();
      if ("followfinger" == r || "follow" == r || "silent" == r || "bounce" == r) {
        var s = t.direction.toLocaleLowerCase();
        if ("left" == s || "right" == s) {
          if (n) {
            var a = n.view;
            if (null != a && ("string" == typeof a || a instanceof e.webview.Webview || a instanceof e.nativeObj.View) && ("string" != typeof a && (n.view = a.__uuid__), n.moveMode)) {
              if ("string" != typeof n.moveMode) return;
              var u = n.moveMode.toLocaleLowerCase();
              if ("follow" != u && "silent" != u) return;
              if ("silent" == r && "silent" == u) return
            }
          }
          var l, _;
          i && "function" == typeof i && (l = e.webview.currentWebview().__uuid__, _ = c.callbackId(i)),
          o.exec(this, "drag", [t, n, l, _])
        }
      }
    }
  },
  l.setJsFile = function(e) {
    e && "string" == typeof e && o.exec(this, "setPreloadJsFile", [e])
  },
  l.appendJsFile = function(e) {
    e && "string" == typeof e && o.exec(this, "appendPreloadJsFile", [e])
  },
  l.setContentVisible = function(e) {
    o.exec(this, "setContentVisible", [e])
  },
  l.opener = function() {
    var t = o.execSync(this, "opener", []);
    return t ? e.webview._find__Window_By_UUID__(t.uuid, t.id, t.extras) : null
  },
  l.opened = function() {
    var t = o.execSync(this, "opened", []);
    if (t) {
      for (var n = [], i = {},
      r = 0; r < t.length; r++) {
        var u = t[r],
        l = e.webview.__JSON_Window_Stack[u];
        l || (l = new e.webview.Webview(null, null, !0, u.extras), l.__uuid__ = u.uuid, l.id = u.id, c.exec(s, a, [s, "setcallbackid", [l.__uuid__, [l.__callback_id__]]])),
        n.push(l),
        i[l.__uuid__] = l
      }
      return n
    }
  },
  l.remove = function(t) {
    var n;
    if ("string" == typeof t) n = t;
    else {
      if (! (t instanceof e.webview.Webview)) return t instanceof e.nativeObj.View ? void o.exec(this, "removeNativeView", [r, t.__uuid__]) : void 0;
      n = t.__uuid__
    }
    o.exec(this, "remove", [n])
  },
  l.removeFromParent = function() {
    o.exec(this, "removeFromParent", [])
  },
  l.parent = function() {
    var t = o.execSync(this, "parent", []);
    return t ? e.webview._find__Window_By_UUID__(t.uuid, t.id, t.extras) : null
  },
  l.children = function() {
    for (var t = [], n = o.execSync(this, "children", []), i = 0; i < n.length; i++) t.push(e.webview._find__Window_By_UUID__(n[i].uuid, n[i].id, n[i].extras));
    return t
  },
  l.getURL = function() {
    return o.execSync(this, "getUrl", [])
  },
  l.getTitle = function() {
    return o.execSync(this, "getTitle", [])
  },
  l.getStyle = function() {
    return o.execSync(this, "getOption")
  },
  l.loadURL = function(e) {
    e && "string" == typeof e && o.exec(this, "load", [e, t()])
  },
  l.loadData = function(e, n, i) {
    e && "string" == typeof e && o.exec(this, "loadData", [e, t(), n, i])
  },
  l.stop = function() {
    o.exec(this, "stop", [])
  },
  l.reload = function(e) {
    o.exec(this, "reload", [e])
  },
  l.draw = function(e, t, n, i) {
    if (u.platform == u.IOS) e.__captureWebview ? e.__captureWebview(this.__uuid__, t, n) : "function" == typeof n && n({
      code: -1,
      message: "\u53c2\u6570\u9519\u8bef"
    });
    else {
      var r = function(e) {
        "function" == typeof n && n(e)
      };
      if (e && e.__id__) {
        var s = c.callbackId(function() {
          "function" == typeof t && t()
        },
        r);
        o.exec(this, "draw", [e.__id__, this.__uuid__, s, i])
      } else r({
        code: -1,
        message: "\u5df2\u7ecf\u9500\u6bc1\u7684\u5bf9\u8c61"
      })
    }
  },
  l.checkRenderedContent = function(e, t, n) {
    var i = function(e) {
      "function" == typeof n && n(e)
    },
    r = c.callbackId(function(e) {
      "function" == typeof t && t(e)
    },
    i);
    o.exec(this, "checkRenderedContent", [this.__uuid__, r, e])
  },
  l.back = function() {
    o.exec(this, "back", [])
  },
  l.forward = function() {
    o.exec(this, "forward", [])
  },
  l.canBack = function(e) {
    if (e && "function" == typeof e) {
      var t;
      e && (t = c.callbackId(function(t) {
        var n = {};
        n.canBack = t,
        e(n)
      })),
      o.exec(this, "canBack", [t])
    }
  },
  l.canForward = function(e) {
    if (e && "function" == typeof e) {
      var t;
      e && (t = c.callbackId(function(t) {
        var n = {};
        n.canForward = t,
        e(n)
      })),
      o.exec(this, "canForward", [t])
    }
  },
  l.clear = function() {
    o.exec(this, "clear", [])
  },
  l.evalJS = function(e) {
    e && "string" == typeof e && o.exec(this, "evalJS", [e])
  },
  l.test = function() {
    o.exec(this, "test", [])
  },
  l.append = function(t) {
    t && (t instanceof e.webview.Webview || t instanceof e.webview.WebviewGroup ? (this.__view_array__.push(t), o.exec(this, "append", [t.__IDENTITY__, t.__uuid__])) : t instanceof e.nativeObj.View && o.exec(this, "appendNativeView", [r, t.__uuid__]))
  },
  l.setPullToRefresh = function(t, n) {
    var i;
    n && (i = e.bridge.callbackId(n)),
    this.addEventListener("pulldownrefreshevent", n, !1),
    o.exec(this, "setPullToRefresh", [t, i])
  },
  l.endPullToRefresh = function() {
    o.exec(this, "endPullToRefresh", [])
  },
  l.beginPullToRefresh = function() {
    o.exec(this, "beginPullToRefresh", [])
  },
  l.setBounce = function(e, t) {
    o.exec(this, "setBounce", [e, t])
  },
  l.resetBounce = function() {
    o.exec(this, "resetBounce", [])
  },
  l.setBlockNetworkImage = function(e) {
    o.exec(this, "setBlockNetworkImage", [e])
  },
  l.captureSnapshot = function(t, n, i) {
    var r = "function" != typeof n ? null: function() {
      n()
    },
    s = "function" != typeof i ? null: function(e) {
      i(e)
    },
    a = e.bridge.callbackId(r, s);
    e.tools.platform == e.tools.IOS ? r() : o.exec(this, "captureSnapshot", [t, a])
  },
  l.clearSnapshot = function(t) {
    e.tools.platform != e.tools.IOS && o.exec(this, "clearSnapshot", [t])
  },
  l.overrideUrlLoading = function(e, t) {
    var n = c.callbackId(function(e) {
      "function" == typeof t && t(e)
    });
    o.exec(this, "overrideUrlLoading", [e, n])
  },
  l.overrideResourceRequest = function(e) {
    o.exec(this, "overrideResourceRequest", [e])
  },
  l.isHardwareAccelerated = function() {
    return u.platform == u.IOS ? !1 : o.execSync(this, "isHardwareAccelerated", [])
  },
  l.listenResourceLoading = function(e, t) {
    var n = c.callbackId(function(e) {
      "function" == typeof t && t(e)
    });
    o.exec(this, "listenResourceLoading", [e, n])
  },
  l.setCssFile = function(e) {
    o.exec(this, "setCssFile", [e])
  },
  l.setCssText = function(e) {
    o.exec(this, "setCssText", [e])
  },
  l.showBehind = function(e) {
    o.exec(this, "showBehind", [e.__IDENTITY__, e.__uuid__])
  },
  l.animate = function(e, t) {
    var n;
    t && (n = c.callbackId(function() {
      "function" == typeof t && t()
    })),
    o.exec(this, "webview_animate", [e, n])
  },
  l.interceptTouchEvent = function(e) {
    o.exec(this, "interceptTouchEvent", [e])
  },
  l.restore = function() {
    o.exec(this, "webview_restore", null)
  },
  o.Webview = n
} (window.plus),
function(e) {
  function t() {
    this.id = "",
    this.description = "",
    this.authResult = null,
    this.userInfo = null
  }
  var e = e,
  n = "OAuth",
  i = e.bridge;
  t.prototype.login = function(e, t, o) {
    var r = this,
    s = "function" != typeof e ? null: function(t) {
      var n = {};
      n.target = r,
      r.authResult = t.authResult,
      r.userInfo = t.userInfo,
      r.extra = t.extra,
      e(n)
    },
    a = "function" != typeof t ? null: function(e) {
      t(e)
    },
    c = i.callbackId(s, a);
    i.exec(n, "login", [this.id, c, o], {
      cbid: c,
      sid: this.id
    })
  },
  t.prototype.logout = function(e, t) {
    var o = this,
    r = "function" != typeof e ? null: function(t) {
      var n = {};
      o.authResult = null,
      o.userInfo = null,
      o.extra = t.extra,
      n.target = o,
      e(n)
    },
    s = "function" != typeof t ? null: function(e) {
      t(e)
    };
    this.authResult = null,
    this.userInfo = null;
    var a = i.callbackId(r, s);
    i.exec(n, "logout", [this.id, a], {
      cbid: a,
      sid: this.id
    })
  },
  t.prototype.getUserInfo = function(e, t) {
    var o = this,
    r = "function" != typeof e ? null: function(t) {
      var n = {};
      o.authResult = t.authResult,
      o.userInfo = t.userInfo,
      o.extra = t.extra,
      n.target = o,
      e(n)
    },
    s = "function" != typeof t ? null: function(e) {
      t(e)
    },
    a = i.callbackId(r, s);
    i.exec(n, "getUserInfo", [this.id, a], {
      cbid: a,
      sid: this.id
    })
  },
  t.prototype.addPhoneNumber = function(e, t) {
    var o = this,
    r = "function" != typeof e ? null: function(t) {
      var n = {};
      o.authResult = t.authResult,
      o.userInfo = t.userInfo,
      o.extra = t.extra,
      n.target = o,
      e(n)
    },
    s = "function" != typeof t ? null: function(e) {
      t(e)
    },
    a = i.callbackId(r, s);
    i.exec(n, "addPhoneNumber", [this.id, a], {
      cbid: a,
      sid: this.id
    })
  };
  var o = {
    AuthService: t,
    getServices: function(e, t) {
      var r = "function" != typeof e ? null: function(t) {
        for (var n = [], i = t.length, r = 0; i > r; r++) {
          var s = new o.AuthService;
          s.id = t[r].id,
          s.description = t[r].description,
          s.authResult = t[r].authResult,
          s.userInfo = t[r].userInfo,
          n[r] = s
        }
        e(n)
      },
      s = "function" != typeof t ? null: function(e) {
        t(e)
      },
      a = i.callbackId(r, s);
      i.exec(n, "getServices", [a])
    }
  };
  e.oauth = o
} (window.plus),
function(e) {
  function t(e, t, n) {
    this.__id__ = r.UUID("Bitmap"),
    this.id = e,
    n || (a[this.__id__] = this, o.exec(i, "Bitmap", [this.__id__, e, t]))
  }
  function n(e, t, n, a) {
    this.__id__ = e,
    this.__uuid__ = r.UUID("NativeView"),
    a || (o.exec(i, "View", [this.__id__, this.__uuid__, t, n]), s[this.__id__] = this)
  }
  var e = e,
  i = "NativeObj",
  o = e.bridge,
  r = e.tools,
  s = {},
  a = {};
  t.prototype.clear = function() {
    o.exec(i, "clear", [this.__id__]),
    this.__id__ = void 0,
    a[this.__id__] && delete a[this.__id__]
  },
  t.prototype.recycle = function() {
    o.exec(i, "bitmapRecycle", [this.__id__])
  },
  t.prototype.load = function(e, t, n) {
    var r = function(e) {
      "function" == typeof n && n(e)
    };
    if (this.__id__) {
      var s = o.callbackId(function() {
        "function" == typeof t && t()
      },
      r);
      o.exec(i, "load", [this.__id__, e, s])
    } else r({
      code: -1,
      message: "\u5df2\u7ecf\u9500\u6bc1\u7684\u5bf9\u8c61"
    })
  },
  t.prototype.loadBase64Data = function(e, t, n) {
    var r = function(e) {
      "function" == typeof n && n(e)
    };
    if (this.__id__) {
      var s = o.callbackId(function() {
        "function" == typeof t && t()
      },
      r);
      o.exec(i, "loadBase64Data", [this.__id__, e, s])
    } else r({
      code: -1,
      message: "\u5df2\u7ecf\u9500\u6bc1\u7684\u5bf9\u8c61"
    })
  },
  t.prototype.save = function(e, t, n, r) {
    var s = function(e) {
      "function" == typeof r && r(e)
    };
    if (this.__id__) {
      var a = o.callbackId(function(e) {
        if ("function" == typeof n) {
          var t = {
            target: e.path,
            width: e.w,
            height: e.h,
            size: e.size
          };
          n(t)
        }
      },
      s);
      o.exec(i, "save", [this.__id__, e, t, a])
    } else s({
      code: -1,
      message: "\u5df2\u7ecf\u9500\u6bc1\u7684\u5bf9\u8c61"
    })
  },
  t.prototype.__captureWebview = function(e, t, n) {
    var r = function(e) {
      "function" == typeof n && n(e)
    };
    if (this.__id__) {
      var s = o.callbackId(function() {
        "function" == typeof t && t()
      },
      r);
      o.exec(i, "captureWebview", [this.__id__, e, s])
    } else r({
      code: -1,
      message: "\u5df2\u7ecf\u9500\u6bc1\u7684\u5bf9\u8c61"
    })
  },
  t.prototype.toBase64Data = function() {
    return this.__id__ ? o.execSync(i, "toBase64Data", [this.__id__]) : null
  },
  t.getItems = function() {
    for (var e = [], n = o.execSync(i, "getItems", []), r = 0; r < n.length; r++) {
      var s = n[r].__id__,
      c = a[s];
      if (!c) {
        var u = new t(n[r].id, null, !0);
        u.__id__ = s,
        a[s] = u,
        c = u
      }
      e.push(c)
    }
    return e
  },
  t.getBitmapById = function(e) {
    var n = o.execSync(i, "getBitmapById", [e]);
    if (n) {
      var r = a[n.__id__];
      if (!r) {
        var s = new t(n.id, null, !0);
        s.__id__ = n.__id__,
        a[n.__id__] = s,
        r = s
      }
      return r
    }
    return null
  },
  n.prototype.drawBitmap = function(e, t, n, r) {
    o.exec(i, "drawBitmap", [this.__id__, this.__uuid__, e, t, n, r])
  },
  n.prototype.drawText = function(e, t, n, r) {
    o.exec(i, "drawText", [this.__id__, this.__uuid__, e, t, n, r])
  },
  n.prototype.show = function() {
    o.exec(i, "show", [this.__id__, this.__uuid__])
  },
  n.prototype.setStyle = function(e) {
    o.exec(i, "setStyle", [this.__id__, this.__uuid__, e])
  },
  n.prototype.hide = function() {
    o.exec(i, "hide", [this.__id__, this.__uuid__])
  },
  n.prototype.clear = function() {
    this.close()
  },
  n.prototype.close = function() {
    o.exec(i, "view_close", [this.__id__, this.__uuid__]),
    delete s[this.__id__]
  },
  n.prototype.animate = function(e, t) {
    var n;
    t && (n = o.callbackId(function() {
      "function" == typeof t && t()
    })),
    o.exec(i, "view_animate", [this.__id__, this.__uuid__, e, n])
  },
  n.prototype.reset = function() {
    o.exec(i, "view_reset", [this.__id__, this.__uuid__])
  },
  n.prototype.restore = function() {
    o.exec(i, "view_restore", [this.__id__, this.__uuid__])
  },
  n.prototype.isVisible = function() {
    return o.execSync(i, "isVisible", [this.__id__, this.__uuid__])
  },
  n.prototype.drawRect = function(e, t, n) {
    o.exec(i, "view_drawRect", [this.__id__, this.__uuid__, e, t, n])
  },
  n.prototype.interceptTouchEvent = function(e) {
    o.exec(i, "interceptTouchEvent", [this.__id__, this.__uuid__, e])
  },
  n.prototype.addEventListener = function(e, t) {
    var n, r = this;
    if (t) {
      var s = function(e) {
        "function" == typeof t && (e.target = r, t(e))
      };
      t.callback = s,
      n = o.callbackId(s)
    }
    o.exec(i, "addEventListener", [this.__id__, this.__uuid__, e, n])
  },
  n.prototype.setTouchEventRect = function(e) {
    o.exec(i, "setTouchEventRect", [this.__id__, this.__uuid__, e])
  },
  n.getViewById = function(t) {
    var n = o.execSync(i, "getViewById", [t]);
    if (n) {
      var r = s[t];
      return r || (r = new e.nativeObj.View(n.id, n.styles, "", !0), r.__uuid__ = n.uuid, s[r.__id__] = r),
      r
    }
    return null
  },
  n.startAnimation = function(e, t, r, s) {
    if (e && t) {
      var a, c;
      c = t instanceof n ? {
        viewId: t.__id__
      }: {
        uuid: t.bitmap ? t.bitmap.__id__: null,
        texts: {
          value: t.text,
          textStyles: t.textStyles,
          textRect: t.textRect
        }
      };
      var u;
      r && (u = r instanceof n ? {
        viewId: r.__id__
      }: {
        uuid: r.bitmap ? r.bitmap.__id__: null,
        texts: {
          value: r.text,
          textStyles: r.textStyles,
          textRect: r.textRect
        }
      }),
      s && (a = o.callbackId(function() {
        "function" == typeof s && s()
      })),
      o.exec(i, "startAnimation", [e, c, u, a])
    }
  },
  n.clearAnimation = function(e) {
    e || (e = "none"),
    o.exec(i, "clearAnimation", [e])
  },
  n.prototype.clearRect = function(e, t) {
    o.exec(i, "view_clearRect", [this.__id__, this.__uuid__, e, t])
  },
  n.prototype.draw = function(e) {
    o.exec(i, "view_draw", [this.__id__, this.__uuid__, e])
  };
  var c = {
    Bitmap: t,
    View: n
  };
  e.nativeObj = c
} (plus),
function(e) {
  var e = e,
  t = window.plus.bridge,
  n = e.tools,
  i = "Stream";
  e.stream = {
    open: function(e, n, o) {
      var r = t.callbackId(n, o);
      t.exec(i, "open", [e, r])
    },
    setRestoreState: function(e) {
      t.exec(i, "setRestoreState", [e])
    },
    preload: function(e) {
      t.exec(i, "preload", [e])
    },
    list: function(e, n, o) {
      var r = t.callbackId(n, o);
      t.exec(i, "list", [e, r])
    },
    remove: function(e) {
      t.exec(i, "remove", [e])
    },
    freetrafficRequest: function(e, o, r) {
      if (n.platform == n.IOS) return void("function" == typeof r && r({
        code: -3,
        message: "\u4e0d\u652f\u6301"
      }));
      var s = t.callbackId(o, r);
      t.exec(i, "freetrafficRequest", [e, s])
    },
    freetrafficBind: function(e, o, r) {
      if (n.platform == n.IOS) return void("function" == typeof r && r({
        code: -3,
        message: "\u4e0d\u652f\u6301"
      }));
      var s = t.callbackId(o, r);
      t.exec(i, "freetrafficBind", [e, s])
    },
    freetrafficRelease: function(e, o, r) {
      if (n.platform == n.IOS) return void("function" == typeof r && r({
        code: -3,
        message: "\u4e0d\u652f\u6301"
      }));
      var s = t.callbackId(o, r);
      t.exec(i, "freetrafficRelease", [e, s])
    },
    freetrafficInfo: function(e, o) {
      if (n.platform == n.IOS) return void("function" == typeof o && o({
        code: -3,
        message: "\u4e0d\u652f\u6301"
      }));
      var r = t.callbackId(e, o);
      t.exec(i, "freetrafficInfo", [r])
    },
    freetrafficIsValid: function() {
      return n.platform == n.IOS ? void("function" == typeof errorCallback && errorCallback({
        code: -3,
        message: "\u4e0d\u652f\u6301"
      })) : t.exec(i, "freetrafficIsValid", null)
    },
    activate: function() {
      return n.platform == n.IOS ? void("function" == typeof errorCallback && errorCallback({
        code: -3,
        message: "\u4e0d\u652f\u6301"
      })) : void t.exec(i, "activate", null)
    }
  }
} (window.plus),
function(e) {
  var e = e,
  t = e.bridge;
  e.device = {
    imei: "",
    imsi: [],
    model: "",
    vendor: "",
    uuid: "",
    dial: function(e, n) {
      t.exec("Device", "dial", [e, n])
    },
    beep: function(e) {
      t.exec("Device", "beep", [e])
    },
    vibrate: function(e) {
      t.exec("Device", "vibrate", [e])
    },
    setWakelock: function(e) {
      t.execSync("Device", "setWakelock", [e])
    },
    isWakelock: function() {
      return t.execSync("Device", "isWakelock", [])
    },
    setVolume: function(e) {
      t.execSync("Device", "setVolume", [e])
    },
    getVolume: function() {
      return t.execSync("Device", "getVolume", [])
    }
  },
  e.os = {
    language: "",
    version: "",
    name: "",
    vendor: ""
  },
  e.screen = {
    resolutionHeight: 0,
    resolutionWidth: 0,
    scale: 1,
    dpiX: 0,
    dpiY: 0,
    setBrightness: function(e) {
      t.execSync("Device", "setBrightness", [e])
    },
    lockOrientation: function(e) {
      t.exec("Device", "lockOrientation", [e])
    },
    unlockOrientation: function() {
      t.exec("Device", "unlockOrientation", [])
    },
    getBrightness: function() {
      return t.execSync("Device", "getBrightness", [])
    }
  },
  e.display = {
    resolutionHeight: 0,
    resolutionWidth: 0
  },
  e.networkinfo = {
    getCurrentType: function() {
      return e.tools.IOS == e.tools.platform ? e.networkinfo.CONNECTION_TYPE: e.tools.ANDROID == e.tools.platform ? t.execSync("Device", "getCurrentType", null) : void 0
    },
    getCurrentAPN: function() {
      return t.execSync("Device", "getCurrentAPN", null)
    }
  },
  e.networkinfo.CONNECTION_TYPE = 0,
  e.networkinfo.CONNECTION_UNKNOW = 0,
  e.networkinfo.CONNECTION_NONE = 1,
  e.networkinfo.CONNECTION_ETHERNET = 2,
  e.networkinfo.CONNECTION_WIFI = 3,
  e.networkinfo.CONNECTION_CELL2G = 4,
  e.networkinfo.CONNECTION_CELL3G = 5,
  e.networkinfo.CONNECTION_CELL4G = 6
} (window.plus);