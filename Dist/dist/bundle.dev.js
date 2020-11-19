"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function r(o) {
    if (e[o]) return e[o].exports;
    var n = e[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return t[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
  }

  r.m = t, r.c = e, r.d = function (t, e, o) {
    r.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: o
    });
  }, r.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var o = Object.create(null);
    if (r.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var n in t) {
      r.d(o, n, function (e) {
        return t[e];
      }.bind(null, n));
    }
    return o;
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return r.d(e, "a", e), e;
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, r.p = "", r(r.s = 11);
}([function (t, e, r) {
  "use strict";

  t.exports = function (t) {
    var e = [];
    return e.toString = function () {
      return this.map(function (e) {
        var r = function (t, e) {
          var r = t[1] || "",
              o = t[3];
          if (!o) return r;

          if (e && "function" == typeof btoa) {
            var n = (a = o, l = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l), "/*# ".concat(s, " */")),
                i = o.sources.map(function (t) {
              return "/*# sourceURL=".concat(o.sourceRoot || "").concat(t, " */");
            });
            return [r].concat(i).concat([n]).join("\n");
          }

          var a, l, s;
          return [r].join("\n");
        }(e, t);

        return e[2] ? "@media ".concat(e[2], " {").concat(r, "}") : r;
      }).join("");
    }, e.i = function (t, r, o) {
      "string" == typeof t && (t = [[null, t, ""]]);
      var n = {};
      if (o) for (var i = 0; i < this.length; i++) {
        var a = this[i][0];
        null != a && (n[a] = !0);
      }

      for (var l = 0; l < t.length; l++) {
        var s = [].concat(t[l]);
        o && n[s[0]] || (r && (s[2] ? s[2] = "".concat(r, " and ").concat(s[2]) : s[2] = r), e.push(s));
      }
    }, e;
  };
}, function (t, e, r) {
  (function (t) {
    var r;

    function o(t) {
      return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */


    !function (e, r) {
      "use strict";

      "object" === o(t) && "object" === o(t.exports) ? t.exports = e.document ? r(e, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return r(t);
      } : r(e);
    }("undefined" != typeof window ? window : this, function (n, i) {
      "use strict";

      var a = [],
          l = Object.getPrototypeOf,
          s = a.slice,
          d = a.flat ? function (t) {
        return a.flat.call(t);
      } : function (t) {
        return a.concat.apply([], t);
      },
          c = a.push,
          m = a.indexOf,
          p = {},
          f = p.toString,
          u = p.hasOwnProperty,
          g = u.toString,
          h = g.call(Object),
          b = {},
          x = function x(t) {
        return "function" == typeof t && "number" != typeof t.nodeType;
      },
          v = function v(t) {
        return null != t && t === t.window;
      },
          y = n.document,
          w = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };

      function k(t, e, r) {
        var o,
            n,
            i = (r = r || y).createElement("script");
        if (i.text = t, e) for (o in w) {
          (n = e[o] || e.getAttribute && e.getAttribute(o)) && i.setAttribute(o, n);
        }
        r.head.appendChild(i).parentNode.removeChild(i);
      }

      function _(t) {
        return null == t ? t + "" : "object" === o(t) || "function" == typeof t ? p[f.call(t)] || "object" : o(t);
      }

      var E = function t(e, r) {
        return new t.fn.init(e, r);
      };

      function T(t) {
        var e = !!t && "length" in t && t.length,
            r = _(t);

        return !x(t) && !v(t) && ("array" === r || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
      }

      E.fn = E.prototype = {
        jquery: "3.5.1",
        constructor: E,
        length: 0,
        toArray: function toArray() {
          return s.call(this);
        },
        get: function get(t) {
          return null == t ? s.call(this) : t < 0 ? this[t + this.length] : this[t];
        },
        pushStack: function pushStack(t) {
          var e = E.merge(this.constructor(), t);
          return e.prevObject = this, e;
        },
        each: function each(t) {
          return E.each(this, t);
        },
        map: function map(t) {
          return this.pushStack(E.map(this, function (e, r) {
            return t.call(e, r, e);
          }));
        },
        slice: function slice() {
          return this.pushStack(s.apply(this, arguments));
        },
        first: function first() {
          return this.eq(0);
        },
        last: function last() {
          return this.eq(-1);
        },
        even: function even() {
          return this.pushStack(E.grep(this, function (t, e) {
            return (e + 1) % 2;
          }));
        },
        odd: function odd() {
          return this.pushStack(E.grep(this, function (t, e) {
            return e % 2;
          }));
        },
        eq: function eq(t) {
          var e = this.length,
              r = +t + (t < 0 ? e : 0);
          return this.pushStack(r >= 0 && r < e ? [this[r]] : []);
        },
        end: function end() {
          return this.prevObject || this.constructor();
        },
        push: c,
        sort: a.sort,
        splice: a.splice
      }, E.extend = E.fn.extend = function () {
        var t,
            e,
            r,
            n,
            i,
            a,
            l = arguments[0] || {},
            s = 1,
            d = arguments.length,
            c = !1;

        for ("boolean" == typeof l && (c = l, l = arguments[s] || {}, s++), "object" === o(l) || x(l) || (l = {}), s === d && (l = this, s--); s < d; s++) {
          if (null != (t = arguments[s])) for (e in t) {
            n = t[e], "__proto__" !== e && l !== n && (c && n && (E.isPlainObject(n) || (i = Array.isArray(n))) ? (r = l[e], a = i && !Array.isArray(r) ? [] : i || E.isPlainObject(r) ? r : {}, i = !1, l[e] = E.extend(c, a, n)) : void 0 !== n && (l[e] = n));
          }
        }

        return l;
      }, E.extend({
        expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function error(t) {
          throw new Error(t);
        },
        noop: function noop() {},
        isPlainObject: function isPlainObject(t) {
          var e, r;
          return !(!t || "[object Object]" !== f.call(t)) && (!(e = l(t)) || "function" == typeof (r = u.call(e, "constructor") && e.constructor) && g.call(r) === h);
        },
        isEmptyObject: function isEmptyObject(t) {
          var e;

          for (e in t) {
            return !1;
          }

          return !0;
        },
        globalEval: function globalEval(t, e, r) {
          k(t, {
            nonce: e && e.nonce
          }, r);
        },
        each: function each(t, e) {
          var r,
              o = 0;
          if (T(t)) for (r = t.length; o < r && !1 !== e.call(t[o], o, t[o]); o++) {
            ;
          } else for (o in t) {
            if (!1 === e.call(t[o], o, t[o])) break;
          }
          return t;
        },
        makeArray: function makeArray(t, e) {
          var r = e || [];
          return null != t && (T(Object(t)) ? E.merge(r, "string" == typeof t ? [t] : t) : c.call(r, t)), r;
        },
        inArray: function inArray(t, e, r) {
          return null == e ? -1 : m.call(e, t, r);
        },
        merge: function merge(t, e) {
          for (var r = +e.length, o = 0, n = t.length; o < r; o++) {
            t[n++] = e[o];
          }

          return t.length = n, t;
        },
        grep: function grep(t, e, r) {
          for (var o = [], n = 0, i = t.length, a = !r; n < i; n++) {
            !e(t[n], n) !== a && o.push(t[n]);
          }

          return o;
        },
        map: function map(t, e, r) {
          var o,
              n,
              i = 0,
              a = [];
          if (T(t)) for (o = t.length; i < o; i++) {
            null != (n = e(t[i], i, r)) && a.push(n);
          } else for (i in t) {
            null != (n = e(t[i], i, r)) && a.push(n);
          }
          return d(a);
        },
        guid: 1,
        support: b
      }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = a[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        p["[object " + e + "]"] = e.toLowerCase();
      });

      var C =
      /*!
         * Sizzle CSS Selector Engine v2.3.5
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2020-03-14
         */
      function (t) {
        var e,
            r,
            o,
            n,
            i,
            a,
            l,
            s,
            d,
            c,
            m,
            p,
            f,
            u,
            g,
            h,
            b,
            x,
            v,
            y = "sizzle" + 1 * new Date(),
            w = t.document,
            k = 0,
            _ = 0,
            E = st(),
            T = st(),
            C = st(),
            S = st(),
            j = function j(t, e) {
          return t === e && (m = !0), 0;
        },
            D = {}.hasOwnProperty,
            A = [],
            N = A.pop,
            L = A.push,
            O = A.push,
            I = A.slice,
            z = function z(t, e) {
          for (var r = 0, o = t.length; r < o; r++) {
            if (t[r] === e) return r;
          }

          return -1;
        },
            M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            q = "[\\x20\\t\\r\\n\\f]",
            P = "(?:\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            H = "\\[" + q + "*(" + P + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + q + "*\\]",
            R = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
            F = new RegExp(q + "+", "g"),
            B = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
            W = new RegExp("^" + q + "*," + q + "*"),
            U = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
            Q = new RegExp(q + "|>"),
            $ = new RegExp(R),
            X = new RegExp("^" + P + "$"),
            V = {
          ID: new RegExp("^#(" + P + ")"),
          CLASS: new RegExp("^\\.(" + P + ")"),
          TAG: new RegExp("^(" + P + "|[*])"),
          ATTR: new RegExp("^" + H),
          PSEUDO: new RegExp("^" + R),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + M + ")$", "i"),
          needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
        },
            Y = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            tt = /[+~]/,
            et = new RegExp("\\\\[\\da-fA-F]{1,6}" + q + "?|\\\\([^\\r\\n\\f])", "g"),
            rt = function rt(t, e) {
          var r = "0x" + t.slice(1) - 65536;
          return e || (r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320));
        },
            ot = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            nt = function nt(t, e) {
          return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
        },
            it = function it() {
          p();
        },
            at = yt(function (t) {
          return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
        }, {
          dir: "parentNode",
          next: "legend"
        });

        try {
          O.apply(A = I.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
        } catch (t) {
          O = {
            apply: A.length ? function (t, e) {
              L.apply(t, I.call(e));
            } : function (t, e) {
              for (var r = t.length, o = 0; t[r++] = e[o++];) {
                ;
              }

              t.length = r - 1;
            }
          };
        }

        function lt(t, e, o, n) {
          var i,
              l,
              d,
              c,
              m,
              u,
              b,
              x = e && e.ownerDocument,
              w = e ? e.nodeType : 9;
          if (o = o || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return o;

          if (!n && (p(e), e = e || f, g)) {
            if (11 !== w && (m = Z.exec(t))) if (i = m[1]) {
              if (9 === w) {
                if (!(d = e.getElementById(i))) return o;
                if (d.id === i) return o.push(d), o;
              } else if (x && (d = x.getElementById(i)) && v(e, d) && d.id === i) return o.push(d), o;
            } else {
              if (m[2]) return O.apply(o, e.getElementsByTagName(t)), o;
              if ((i = m[3]) && r.getElementsByClassName && e.getElementsByClassName) return O.apply(o, e.getElementsByClassName(i)), o;
            }

            if (r.qsa && !S[t + " "] && (!h || !h.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
              if (b = t, x = e, 1 === w && (Q.test(t) || U.test(t))) {
                for ((x = tt.test(t) && bt(e.parentNode) || e) === e && r.scope || ((c = e.getAttribute("id")) ? c = c.replace(ot, nt) : e.setAttribute("id", c = y)), l = (u = a(t)).length; l--;) {
                  u[l] = (c ? "#" + c : ":scope") + " " + vt(u[l]);
                }

                b = u.join(",");
              }

              try {
                return O.apply(o, x.querySelectorAll(b)), o;
              } catch (e) {
                S(t, !0);
              } finally {
                c === y && e.removeAttribute("id");
              }
            }
          }

          return s(t.replace(B, "$1"), e, o, n);
        }

        function st() {
          var t = [];
          return function e(r, n) {
            return t.push(r + " ") > o.cacheLength && delete e[t.shift()], e[r + " "] = n;
          };
        }

        function dt(t) {
          return t[y] = !0, t;
        }

        function ct(t) {
          var e = f.createElement("fieldset");

          try {
            return !!t(e);
          } catch (t) {
            return !1;
          } finally {
            e.parentNode && e.parentNode.removeChild(e), e = null;
          }
        }

        function mt(t, e) {
          for (var r = t.split("|"), n = r.length; n--;) {
            o.attrHandle[r[n]] = e;
          }
        }

        function pt(t, e) {
          var r = e && t,
              o = r && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
          if (o) return o;
          if (r) for (; r = r.nextSibling;) {
            if (r === e) return -1;
          }
          return t ? 1 : -1;
        }

        function ft(t) {
          return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
        }

        function ut(t) {
          return function (e) {
            var r = e.nodeName.toLowerCase();
            return ("input" === r || "button" === r) && e.type === t;
          };
        }

        function gt(t) {
          return function (e) {
            return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && at(e) === t : e.disabled === t : "label" in e && e.disabled === t;
          };
        }

        function ht(t) {
          return dt(function (e) {
            return e = +e, dt(function (r, o) {
              for (var n, i = t([], r.length, e), a = i.length; a--;) {
                r[n = i[a]] && (r[n] = !(o[n] = r[n]));
              }
            });
          });
        }

        function bt(t) {
          return t && void 0 !== t.getElementsByTagName && t;
        }

        for (e in r = lt.support = {}, i = lt.isXML = function (t) {
          var e = t.namespaceURI,
              r = (t.ownerDocument || t).documentElement;
          return !Y.test(e || r && r.nodeName || "HTML");
        }, p = lt.setDocument = function (t) {
          var e,
              n,
              a = t ? t.ownerDocument || t : w;
          return a != f && 9 === a.nodeType && a.documentElement ? (u = (f = a).documentElement, g = !i(f), w != f && (n = f.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", it, !1) : n.attachEvent && n.attachEvent("onunload", it)), r.scope = ct(function (t) {
            return u.appendChild(t).appendChild(f.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length;
          }), r.attributes = ct(function (t) {
            return t.className = "i", !t.getAttribute("className");
          }), r.getElementsByTagName = ct(function (t) {
            return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length;
          }), r.getElementsByClassName = J.test(f.getElementsByClassName), r.getById = ct(function (t) {
            return u.appendChild(t).id = y, !f.getElementsByName || !f.getElementsByName(y).length;
          }), r.getById ? (o.filter.ID = function (t) {
            var e = t.replace(et, rt);
            return function (t) {
              return t.getAttribute("id") === e;
            };
          }, o.find.ID = function (t, e) {
            if (void 0 !== e.getElementById && g) {
              var r = e.getElementById(t);
              return r ? [r] : [];
            }
          }) : (o.filter.ID = function (t) {
            var e = t.replace(et, rt);
            return function (t) {
              var r = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
              return r && r.value === e;
            };
          }, o.find.ID = function (t, e) {
            if (void 0 !== e.getElementById && g) {
              var r,
                  o,
                  n,
                  i = e.getElementById(t);

              if (i) {
                if ((r = i.getAttributeNode("id")) && r.value === t) return [i];

                for (n = e.getElementsByName(t), o = 0; i = n[o++];) {
                  if ((r = i.getAttributeNode("id")) && r.value === t) return [i];
                }
              }

              return [];
            }
          }), o.find.TAG = r.getElementsByTagName ? function (t, e) {
            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : r.qsa ? e.querySelectorAll(t) : void 0;
          } : function (t, e) {
            var r,
                o = [],
                n = 0,
                i = e.getElementsByTagName(t);

            if ("*" === t) {
              for (; r = i[n++];) {
                1 === r.nodeType && o.push(r);
              }

              return o;
            }

            return i;
          }, o.find.CLASS = r.getElementsByClassName && function (t, e) {
            if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t);
          }, b = [], h = [], (r.qsa = J.test(f.querySelectorAll)) && (ct(function (t) {
            var e;
            u.appendChild(t).innerHTML = "<a id='" + y + "'></a><select id='" + y + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && h.push("[*^$]=" + q + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || h.push("\\[" + q + "*(?:value|" + M + ")"), t.querySelectorAll("[id~=" + y + "-]").length || h.push("~="), (e = f.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || h.push("\\[" + q + "*name" + q + "*=" + q + "*(?:''|\"\")"), t.querySelectorAll(":checked").length || h.push(":checked"), t.querySelectorAll("a#" + y + "+*").length || h.push(".#.+[+~]"), t.querySelectorAll("\\\f"), h.push("[\\r\\n\\f]");
          }), ct(function (t) {
            t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var e = f.createElement("input");
            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && h.push("name" + q + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && h.push(":enabled", ":disabled"), u.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && h.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), h.push(",.*:");
          })), (r.matchesSelector = J.test(x = u.matches || u.webkitMatchesSelector || u.mozMatchesSelector || u.oMatchesSelector || u.msMatchesSelector)) && ct(function (t) {
            r.disconnectedMatch = x.call(t, "*"), x.call(t, "[s!='']:x"), b.push("!=", R);
          }), h = h.length && new RegExp(h.join("|")), b = b.length && new RegExp(b.join("|")), e = J.test(u.compareDocumentPosition), v = e || J.test(u.contains) ? function (t, e) {
            var r = 9 === t.nodeType ? t.documentElement : t,
                o = e && e.parentNode;
            return t === o || !(!o || 1 !== o.nodeType || !(r.contains ? r.contains(o) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(o)));
          } : function (t, e) {
            if (e) for (; e = e.parentNode;) {
              if (e === t) return !0;
            }
            return !1;
          }, j = e ? function (t, e) {
            if (t === e) return m = !0, 0;
            var o = !t.compareDocumentPosition - !e.compareDocumentPosition;
            return o || (1 & (o = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !r.sortDetached && e.compareDocumentPosition(t) === o ? t == f || t.ownerDocument == w && v(w, t) ? -1 : e == f || e.ownerDocument == w && v(w, e) ? 1 : c ? z(c, t) - z(c, e) : 0 : 4 & o ? -1 : 1);
          } : function (t, e) {
            if (t === e) return m = !0, 0;
            var r,
                o = 0,
                n = t.parentNode,
                i = e.parentNode,
                a = [t],
                l = [e];
            if (!n || !i) return t == f ? -1 : e == f ? 1 : n ? -1 : i ? 1 : c ? z(c, t) - z(c, e) : 0;
            if (n === i) return pt(t, e);

            for (r = t; r = r.parentNode;) {
              a.unshift(r);
            }

            for (r = e; r = r.parentNode;) {
              l.unshift(r);
            }

            for (; a[o] === l[o];) {
              o++;
            }

            return o ? pt(a[o], l[o]) : a[o] == w ? -1 : l[o] == w ? 1 : 0;
          }, f) : f;
        }, lt.matches = function (t, e) {
          return lt(t, null, null, e);
        }, lt.matchesSelector = function (t, e) {
          if (p(t), r.matchesSelector && g && !S[e + " "] && (!b || !b.test(e)) && (!h || !h.test(e))) try {
            var o = x.call(t, e);
            if (o || r.disconnectedMatch || t.document && 11 !== t.document.nodeType) return o;
          } catch (t) {
            S(e, !0);
          }
          return lt(e, f, null, [t]).length > 0;
        }, lt.contains = function (t, e) {
          return (t.ownerDocument || t) != f && p(t), v(t, e);
        }, lt.attr = function (t, e) {
          (t.ownerDocument || t) != f && p(t);
          var n = o.attrHandle[e.toLowerCase()],
              i = n && D.call(o.attrHandle, e.toLowerCase()) ? n(t, e, !g) : void 0;
          return void 0 !== i ? i : r.attributes || !g ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
        }, lt.escape = function (t) {
          return (t + "").replace(ot, nt);
        }, lt.error = function (t) {
          throw new Error("Syntax error, unrecognized expression: " + t);
        }, lt.uniqueSort = function (t) {
          var e,
              o = [],
              n = 0,
              i = 0;

          if (m = !r.detectDuplicates, c = !r.sortStable && t.slice(0), t.sort(j), m) {
            for (; e = t[i++];) {
              e === t[i] && (n = o.push(i));
            }

            for (; n--;) {
              t.splice(o[n], 1);
            }
          }

          return c = null, t;
        }, n = lt.getText = function (t) {
          var e,
              r = "",
              o = 0,
              i = t.nodeType;

          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof t.textContent) return t.textContent;

              for (t = t.firstChild; t; t = t.nextSibling) {
                r += n(t);
              }
            } else if (3 === i || 4 === i) return t.nodeValue;
          } else for (; e = t[o++];) {
            r += n(e);
          }

          return r;
        }, (o = lt.selectors = {
          cacheLength: 50,
          createPseudo: dt,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function ATTR(t) {
              return t[1] = t[1].replace(et, rt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, rt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
            },
            CHILD: function CHILD(t) {
              return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || lt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && lt.error(t[0]), t;
            },
            PSEUDO: function PSEUDO(t) {
              var e,
                  r = !t[6] && t[2];
              return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : r && $.test(r) && (e = a(r, !0)) && (e = r.indexOf(")", r.length - e) - r.length) && (t[0] = t[0].slice(0, e), t[2] = r.slice(0, e)), t.slice(0, 3));
            }
          },
          filter: {
            TAG: function TAG(t) {
              var e = t.replace(et, rt).toLowerCase();
              return "*" === t ? function () {
                return !0;
              } : function (t) {
                return t.nodeName && t.nodeName.toLowerCase() === e;
              };
            },
            CLASS: function CLASS(t) {
              var e = E[t + " "];
              return e || (e = new RegExp("(^|" + q + ")" + t + "(" + q + "|$)")) && E(t, function (t) {
                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
              });
            },
            ATTR: function ATTR(t, e, r) {
              return function (o) {
                var n = lt.attr(o, t);
                return null == n ? "!=" === e : !e || (n += "", "=" === e ? n === r : "!=" === e ? n !== r : "^=" === e ? r && 0 === n.indexOf(r) : "*=" === e ? r && n.indexOf(r) > -1 : "$=" === e ? r && n.slice(-r.length) === r : "~=" === e ? (" " + n.replace(F, " ") + " ").indexOf(r) > -1 : "|=" === e && (n === r || n.slice(0, r.length + 1) === r + "-"));
              };
            },
            CHILD: function CHILD(t, e, r, o, n) {
              var i = "nth" !== t.slice(0, 3),
                  a = "last" !== t.slice(-4),
                  l = "of-type" === e;
              return 1 === o && 0 === n ? function (t) {
                return !!t.parentNode;
              } : function (e, r, s) {
                var d,
                    c,
                    m,
                    p,
                    f,
                    u,
                    g = i !== a ? "nextSibling" : "previousSibling",
                    h = e.parentNode,
                    b = l && e.nodeName.toLowerCase(),
                    x = !s && !l,
                    v = !1;

                if (h) {
                  if (i) {
                    for (; g;) {
                      for (p = e; p = p[g];) {
                        if (l ? p.nodeName.toLowerCase() === b : 1 === p.nodeType) return !1;
                      }

                      u = g = "only" === t && !u && "nextSibling";
                    }

                    return !0;
                  }

                  if (u = [a ? h.firstChild : h.lastChild], a && x) {
                    for (v = (f = (d = (c = (m = (p = h)[y] || (p[y] = {}))[p.uniqueID] || (m[p.uniqueID] = {}))[t] || [])[0] === k && d[1]) && d[2], p = f && h.childNodes[f]; p = ++f && p && p[g] || (v = f = 0) || u.pop();) {
                      if (1 === p.nodeType && ++v && p === e) {
                        c[t] = [k, f, v];
                        break;
                      }
                    }
                  } else if (x && (v = f = (d = (c = (m = (p = e)[y] || (p[y] = {}))[p.uniqueID] || (m[p.uniqueID] = {}))[t] || [])[0] === k && d[1]), !1 === v) for (; (p = ++f && p && p[g] || (v = f = 0) || u.pop()) && ((l ? p.nodeName.toLowerCase() !== b : 1 !== p.nodeType) || !++v || (x && ((c = (m = p[y] || (p[y] = {}))[p.uniqueID] || (m[p.uniqueID] = {}))[t] = [k, v]), p !== e));) {
                    ;
                  }

                  return (v -= n) === o || v % o == 0 && v / o >= 0;
                }
              };
            },
            PSEUDO: function PSEUDO(t, e) {
              var r,
                  n = o.pseudos[t] || o.setFilters[t.toLowerCase()] || lt.error("unsupported pseudo: " + t);
              return n[y] ? n(e) : n.length > 1 ? (r = [t, t, "", e], o.setFilters.hasOwnProperty(t.toLowerCase()) ? dt(function (t, r) {
                for (var o, i = n(t, e), a = i.length; a--;) {
                  t[o = z(t, i[a])] = !(r[o] = i[a]);
                }
              }) : function (t) {
                return n(t, 0, r);
              }) : n;
            }
          },
          pseudos: {
            not: dt(function (t) {
              var e = [],
                  r = [],
                  o = l(t.replace(B, "$1"));
              return o[y] ? dt(function (t, e, r, n) {
                for (var i, a = o(t, null, n, []), l = t.length; l--;) {
                  (i = a[l]) && (t[l] = !(e[l] = i));
                }
              }) : function (t, n, i) {
                return e[0] = t, o(e, null, i, r), e[0] = null, !r.pop();
              };
            }),
            has: dt(function (t) {
              return function (e) {
                return lt(t, e).length > 0;
              };
            }),
            contains: dt(function (t) {
              return t = t.replace(et, rt), function (e) {
                return (e.textContent || n(e)).indexOf(t) > -1;
              };
            }),
            lang: dt(function (t) {
              return X.test(t || "") || lt.error("unsupported lang: " + t), t = t.replace(et, rt).toLowerCase(), function (e) {
                var r;

                do {
                  if (r = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (r = r.toLowerCase()) === t || 0 === r.indexOf(t + "-");
                } while ((e = e.parentNode) && 1 === e.nodeType);

                return !1;
              };
            }),
            target: function target(e) {
              var r = t.location && t.location.hash;
              return r && r.slice(1) === e.id;
            },
            root: function root(t) {
              return t === u;
            },
            focus: function focus(t) {
              return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
            },
            enabled: gt(!1),
            disabled: gt(!0),
            checked: function checked(t) {
              var e = t.nodeName.toLowerCase();
              return "input" === e && !!t.checked || "option" === e && !!t.selected;
            },
            selected: function selected(t) {
              return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
            },
            empty: function empty(t) {
              for (t = t.firstChild; t; t = t.nextSibling) {
                if (t.nodeType < 6) return !1;
              }

              return !0;
            },
            parent: function parent(t) {
              return !o.pseudos.empty(t);
            },
            header: function header(t) {
              return G.test(t.nodeName);
            },
            input: function input(t) {
              return K.test(t.nodeName);
            },
            button: function button(t) {
              var e = t.nodeName.toLowerCase();
              return "input" === e && "button" === t.type || "button" === e;
            },
            text: function text(t) {
              var e;
              return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
            },
            first: ht(function () {
              return [0];
            }),
            last: ht(function (t, e) {
              return [e - 1];
            }),
            eq: ht(function (t, e, r) {
              return [r < 0 ? r + e : r];
            }),
            even: ht(function (t, e) {
              for (var r = 0; r < e; r += 2) {
                t.push(r);
              }

              return t;
            }),
            odd: ht(function (t, e) {
              for (var r = 1; r < e; r += 2) {
                t.push(r);
              }

              return t;
            }),
            lt: ht(function (t, e, r) {
              for (var o = r < 0 ? r + e : r > e ? e : r; --o >= 0;) {
                t.push(o);
              }

              return t;
            }),
            gt: ht(function (t, e, r) {
              for (var o = r < 0 ? r + e : r; ++o < e;) {
                t.push(o);
              }

              return t;
            })
          }
        }).pseudos.nth = o.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) {
          o.pseudos[e] = ft(e);
        }

        for (e in {
          submit: !0,
          reset: !0
        }) {
          o.pseudos[e] = ut(e);
        }

        function xt() {}

        function vt(t) {
          for (var e = 0, r = t.length, o = ""; e < r; e++) {
            o += t[e].value;
          }

          return o;
        }

        function yt(t, e, r) {
          var o = e.dir,
              n = e.next,
              i = n || o,
              a = r && "parentNode" === i,
              l = _++;
          return e.first ? function (e, r, n) {
            for (; e = e[o];) {
              if (1 === e.nodeType || a) return t(e, r, n);
            }

            return !1;
          } : function (e, r, s) {
            var d,
                c,
                m,
                p = [k, l];

            if (s) {
              for (; e = e[o];) {
                if ((1 === e.nodeType || a) && t(e, r, s)) return !0;
              }
            } else for (; e = e[o];) {
              if (1 === e.nodeType || a) if (c = (m = e[y] || (e[y] = {}))[e.uniqueID] || (m[e.uniqueID] = {}), n && n === e.nodeName.toLowerCase()) e = e[o] || e;else {
                if ((d = c[i]) && d[0] === k && d[1] === l) return p[2] = d[2];
                if (c[i] = p, p[2] = t(e, r, s)) return !0;
              }
            }

            return !1;
          };
        }

        function wt(t) {
          return t.length > 1 ? function (e, r, o) {
            for (var n = t.length; n--;) {
              if (!t[n](e, r, o)) return !1;
            }

            return !0;
          } : t[0];
        }

        function kt(t, e, r, o, n) {
          for (var i, a = [], l = 0, s = t.length, d = null != e; l < s; l++) {
            (i = t[l]) && (r && !r(i, o, n) || (a.push(i), d && e.push(l)));
          }

          return a;
        }

        function _t(t, e, r, o, n, i) {
          return o && !o[y] && (o = _t(o)), n && !n[y] && (n = _t(n, i)), dt(function (i, a, l, s) {
            var d,
                c,
                m,
                p = [],
                f = [],
                u = a.length,
                g = i || function (t, e, r) {
              for (var o = 0, n = e.length; o < n; o++) {
                lt(t, e[o], r);
              }

              return r;
            }(e || "*", l.nodeType ? [l] : l, []),
                h = !t || !i && e ? g : kt(g, p, t, l, s),
                b = r ? n || (i ? t : u || o) ? [] : a : h;

            if (r && r(h, b, l, s), o) for (d = kt(b, f), o(d, [], l, s), c = d.length; c--;) {
              (m = d[c]) && (b[f[c]] = !(h[f[c]] = m));
            }

            if (i) {
              if (n || t) {
                if (n) {
                  for (d = [], c = b.length; c--;) {
                    (m = b[c]) && d.push(h[c] = m);
                  }

                  n(null, b = [], d, s);
                }

                for (c = b.length; c--;) {
                  (m = b[c]) && (d = n ? z(i, m) : p[c]) > -1 && (i[d] = !(a[d] = m));
                }
              }
            } else b = kt(b === a ? b.splice(u, b.length) : b), n ? n(null, a, b, s) : O.apply(a, b);
          });
        }

        function Et(t) {
          for (var e, r, n, i = t.length, a = o.relative[t[0].type], l = a || o.relative[" "], s = a ? 1 : 0, c = yt(function (t) {
            return t === e;
          }, l, !0), m = yt(function (t) {
            return z(e, t) > -1;
          }, l, !0), p = [function (t, r, o) {
            var n = !a && (o || r !== d) || ((e = r).nodeType ? c(t, r, o) : m(t, r, o));
            return e = null, n;
          }]; s < i; s++) {
            if (r = o.relative[t[s].type]) p = [yt(wt(p), r)];else {
              if ((r = o.filter[t[s].type].apply(null, t[s].matches))[y]) {
                for (n = ++s; n < i && !o.relative[t[n].type]; n++) {
                  ;
                }

                return _t(s > 1 && wt(p), s > 1 && vt(t.slice(0, s - 1).concat({
                  value: " " === t[s - 2].type ? "*" : ""
                })).replace(B, "$1"), r, s < n && Et(t.slice(s, n)), n < i && Et(t = t.slice(n)), n < i && vt(t));
              }

              p.push(r);
            }
          }

          return wt(p);
        }

        return xt.prototype = o.filters = o.pseudos, o.setFilters = new xt(), a = lt.tokenize = function (t, e) {
          var r,
              n,
              i,
              a,
              l,
              s,
              d,
              c = T[t + " "];
          if (c) return e ? 0 : c.slice(0);

          for (l = t, s = [], d = o.preFilter; l;) {
            for (a in r && !(n = W.exec(l)) || (n && (l = l.slice(n[0].length) || l), s.push(i = [])), r = !1, (n = U.exec(l)) && (r = n.shift(), i.push({
              value: r,
              type: n[0].replace(B, " ")
            }), l = l.slice(r.length)), o.filter) {
              !(n = V[a].exec(l)) || d[a] && !(n = d[a](n)) || (r = n.shift(), i.push({
                value: r,
                type: a,
                matches: n
              }), l = l.slice(r.length));
            }

            if (!r) break;
          }

          return e ? l.length : l ? lt.error(t) : T(t, s).slice(0);
        }, l = lt.compile = function (t, e) {
          var r,
              n = [],
              i = [],
              l = C[t + " "];

          if (!l) {
            for (e || (e = a(t)), r = e.length; r--;) {
              (l = Et(e[r]))[y] ? n.push(l) : i.push(l);
            }

            (l = C(t, function (t, e) {
              var r = e.length > 0,
                  n = t.length > 0,
                  i = function i(_i, a, l, s, c) {
                var m,
                    u,
                    h,
                    b = 0,
                    x = "0",
                    v = _i && [],
                    y = [],
                    w = d,
                    _ = _i || n && o.find.TAG("*", c),
                    E = k += null == w ? 1 : Math.random() || .1,
                    T = _.length;

                for (c && (d = a == f || a || c); x !== T && null != (m = _[x]); x++) {
                  if (n && m) {
                    for (u = 0, a || m.ownerDocument == f || (p(m), l = !g); h = t[u++];) {
                      if (h(m, a || f, l)) {
                        s.push(m);
                        break;
                      }
                    }

                    c && (k = E);
                  }

                  r && ((m = !h && m) && b--, _i && v.push(m));
                }

                if (b += x, r && x !== b) {
                  for (u = 0; h = e[u++];) {
                    h(v, y, a, l);
                  }

                  if (_i) {
                    if (b > 0) for (; x--;) {
                      v[x] || y[x] || (y[x] = N.call(s));
                    }
                    y = kt(y);
                  }

                  O.apply(s, y), c && !_i && y.length > 0 && b + e.length > 1 && lt.uniqueSort(s);
                }

                return c && (k = E, d = w), v;
              };

              return r ? dt(i) : i;
            }(i, n))).selector = t;
          }

          return l;
        }, s = lt.select = function (t, e, r, n) {
          var i,
              s,
              d,
              c,
              m,
              p = "function" == typeof t && t,
              f = !n && a(t = p.selector || t);

          if (r = r || [], 1 === f.length) {
            if ((s = f[0] = f[0].slice(0)).length > 2 && "ID" === (d = s[0]).type && 9 === e.nodeType && g && o.relative[s[1].type]) {
              if (!(e = (o.find.ID(d.matches[0].replace(et, rt), e) || [])[0])) return r;
              p && (e = e.parentNode), t = t.slice(s.shift().value.length);
            }

            for (i = V.needsContext.test(t) ? 0 : s.length; i-- && (d = s[i], !o.relative[c = d.type]);) {
              if ((m = o.find[c]) && (n = m(d.matches[0].replace(et, rt), tt.test(s[0].type) && bt(e.parentNode) || e))) {
                if (s.splice(i, 1), !(t = n.length && vt(s))) return O.apply(r, n), r;
                break;
              }
            }
          }

          return (p || l(t, f))(n, e, !g, r, !e || tt.test(t) && bt(e.parentNode) || e), r;
        }, r.sortStable = y.split("").sort(j).join("") === y, r.detectDuplicates = !!m, p(), r.sortDetached = ct(function (t) {
          return 1 & t.compareDocumentPosition(f.createElement("fieldset"));
        }), ct(function (t) {
          return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
        }) || mt("type|href|height|width", function (t, e, r) {
          if (!r) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }), r.attributes && ct(function (t) {
          return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
        }) || mt("value", function (t, e, r) {
          if (!r && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
        }), ct(function (t) {
          return null == t.getAttribute("disabled");
        }) || mt(M, function (t, e, r) {
          var o;
          if (!r) return !0 === t[e] ? e.toLowerCase() : (o = t.getAttributeNode(e)) && o.specified ? o.value : null;
        }), lt;
      }(n);

      E.find = C, (E.expr = C.selectors)[":"] = E.expr.pseudos, E.uniqueSort = E.unique = C.uniqueSort, E.text = C.getText, E.isXMLDoc = C.isXML, E.contains = C.contains, E.escapeSelector = C.escape;

      var S = function S(t, e, r) {
        for (var o = [], n = void 0 !== r; (t = t[e]) && 9 !== t.nodeType;) {
          if (1 === t.nodeType) {
            if (n && E(t).is(r)) break;
            o.push(t);
          }
        }

        return o;
      },
          j = function j(t, e) {
        for (var r = []; t; t = t.nextSibling) {
          1 === t.nodeType && t !== e && r.push(t);
        }

        return r;
      },
          D = E.expr.match.needsContext;

      function A(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      }

      var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function L(t, e, r) {
        return x(e) ? E.grep(t, function (t, o) {
          return !!e.call(t, o, t) !== r;
        }) : e.nodeType ? E.grep(t, function (t) {
          return t === e !== r;
        }) : "string" != typeof e ? E.grep(t, function (t) {
          return m.call(e, t) > -1 !== r;
        }) : E.filter(e, t, r);
      }

      E.filter = function (t, e, r) {
        var o = e[0];
        return r && (t = ":not(" + t + ")"), 1 === e.length && 1 === o.nodeType ? E.find.matchesSelector(o, t) ? [o] : [] : E.find.matches(t, E.grep(e, function (t) {
          return 1 === t.nodeType;
        }));
      }, E.fn.extend({
        find: function find(t) {
          var e,
              r,
              o = this.length,
              n = this;
          if ("string" != typeof t) return this.pushStack(E(t).filter(function () {
            for (e = 0; e < o; e++) {
              if (E.contains(n[e], this)) return !0;
            }
          }));

          for (r = this.pushStack([]), e = 0; e < o; e++) {
            E.find(t, n[e], r);
          }

          return o > 1 ? E.uniqueSort(r) : r;
        },
        filter: function filter(t) {
          return this.pushStack(L(this, t || [], !1));
        },
        not: function not(t) {
          return this.pushStack(L(this, t || [], !0));
        },
        is: function is(t) {
          return !!L(this, "string" == typeof t && D.test(t) ? E(t) : t || [], !1).length;
        }
      });
      var O,
          I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (E.fn.init = function (t, e, r) {
        var o, n;
        if (!t) return this;

        if (r = r || O, "string" == typeof t) {
          if (!(o = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : I.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || r).find(t) : this.constructor(e).find(t);

          if (o[1]) {
            if (e = e instanceof E ? e[0] : e, E.merge(this, E.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : y, !0)), N.test(o[1]) && E.isPlainObject(e)) for (o in e) {
              x(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
            }
            return this;
          }

          return (n = y.getElementById(o[2])) && (this[0] = n, this.length = 1), this;
        }

        return t.nodeType ? (this[0] = t, this.length = 1, this) : x(t) ? void 0 !== r.ready ? r.ready(t) : t(E) : E.makeArray(t, this);
      }).prototype = E.fn, O = E(y);
      var z = /^(?:parents|prev(?:Until|All))/,
          M = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };

      function q(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType;) {
          ;
        }

        return t;
      }

      E.fn.extend({
        has: function has(t) {
          var e = E(t, this),
              r = e.length;
          return this.filter(function () {
            for (var t = 0; t < r; t++) {
              if (E.contains(this, e[t])) return !0;
            }
          });
        },
        closest: function closest(t, e) {
          var r,
              o = 0,
              n = this.length,
              i = [],
              a = "string" != typeof t && E(t);
          if (!D.test(t)) for (; o < n; o++) {
            for (r = this[o]; r && r !== e; r = r.parentNode) {
              if (r.nodeType < 11 && (a ? a.index(r) > -1 : 1 === r.nodeType && E.find.matchesSelector(r, t))) {
                i.push(r);
                break;
              }
            }
          }
          return this.pushStack(i.length > 1 ? E.uniqueSort(i) : i);
        },
        index: function index(t) {
          return t ? "string" == typeof t ? m.call(E(t), this[0]) : m.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function add(t, e) {
          return this.pushStack(E.uniqueSort(E.merge(this.get(), E(t, e))));
        },
        addBack: function addBack(t) {
          return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }
      }), E.each({
        parent: function parent(t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function parents(t) {
          return S(t, "parentNode");
        },
        parentsUntil: function parentsUntil(t, e, r) {
          return S(t, "parentNode", r);
        },
        next: function next(t) {
          return q(t, "nextSibling");
        },
        prev: function prev(t) {
          return q(t, "previousSibling");
        },
        nextAll: function nextAll(t) {
          return S(t, "nextSibling");
        },
        prevAll: function prevAll(t) {
          return S(t, "previousSibling");
        },
        nextUntil: function nextUntil(t, e, r) {
          return S(t, "nextSibling", r);
        },
        prevUntil: function prevUntil(t, e, r) {
          return S(t, "previousSibling", r);
        },
        siblings: function siblings(t) {
          return j((t.parentNode || {}).firstChild, t);
        },
        children: function children(t) {
          return j(t.firstChild);
        },
        contents: function contents(t) {
          return null != t.contentDocument && l(t.contentDocument) ? t.contentDocument : (A(t, "template") && (t = t.content || t), E.merge([], t.childNodes));
        }
      }, function (t, e) {
        E.fn[t] = function (r, o) {
          var n = E.map(this, e, r);
          return "Until" !== t.slice(-5) && (o = r), o && "string" == typeof o && (n = E.filter(o, n)), this.length > 1 && (M[t] || E.uniqueSort(n), z.test(t) && n.reverse()), this.pushStack(n);
        };
      });
      var P = /[^\x20\t\r\n\f]+/g;

      function H(t) {
        return t;
      }

      function R(t) {
        throw t;
      }

      function F(t, e, r, o) {
        var n;

        try {
          t && x(n = t.promise) ? n.call(t).done(e).fail(r) : t && x(n = t.then) ? n.call(t, e, r) : e.apply(void 0, [t].slice(o));
        } catch (t) {
          r.apply(void 0, [t]);
        }
      }

      E.Callbacks = function (t) {
        t = "string" == typeof t ? function (t) {
          var e = {};
          return E.each(t.match(P) || [], function (t, r) {
            e[r] = !0;
          }), e;
        }(t) : E.extend({}, t);

        var e,
            r,
            o,
            n,
            i = [],
            a = [],
            l = -1,
            s = function s() {
          for (n = n || t.once, o = e = !0; a.length; l = -1) {
            for (r = a.shift(); ++l < i.length;) {
              !1 === i[l].apply(r[0], r[1]) && t.stopOnFalse && (l = i.length, r = !1);
            }
          }

          t.memory || (r = !1), e = !1, n && (i = r ? [] : "");
        },
            d = {
          add: function add() {
            return i && (r && !e && (l = i.length - 1, a.push(r)), function e(r) {
              E.each(r, function (r, o) {
                x(o) ? t.unique && d.has(o) || i.push(o) : o && o.length && "string" !== _(o) && e(o);
              });
            }(arguments), r && !e && s()), this;
          },
          remove: function remove() {
            return E.each(arguments, function (t, e) {
              for (var r; (r = E.inArray(e, i, r)) > -1;) {
                i.splice(r, 1), r <= l && l--;
              }
            }), this;
          },
          has: function has(t) {
            return t ? E.inArray(t, i) > -1 : i.length > 0;
          },
          empty: function empty() {
            return i && (i = []), this;
          },
          disable: function disable() {
            return n = a = [], i = r = "", this;
          },
          disabled: function disabled() {
            return !i;
          },
          lock: function lock() {
            return n = a = [], r || e || (i = r = ""), this;
          },
          locked: function locked() {
            return !!n;
          },
          fireWith: function fireWith(t, r) {
            return n || (r = [t, (r = r || []).slice ? r.slice() : r], a.push(r), e || s()), this;
          },
          fire: function fire() {
            return d.fireWith(this, arguments), this;
          },
          fired: function fired() {
            return !!o;
          }
        };

        return d;
      }, E.extend({
        Deferred: function Deferred(t) {
          var e = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]],
              r = "pending",
              i = {
            state: function state() {
              return r;
            },
            always: function always() {
              return a.done(arguments).fail(arguments), this;
            },
            "catch": function _catch(t) {
              return i.then(null, t);
            },
            pipe: function pipe() {
              var t = arguments;
              return E.Deferred(function (r) {
                E.each(e, function (e, o) {
                  var n = x(t[o[4]]) && t[o[4]];
                  a[o[1]](function () {
                    var t = n && n.apply(this, arguments);
                    t && x(t.promise) ? t.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[o[0] + "With"](this, n ? [t] : arguments);
                  });
                }), t = null;
              }).promise();
            },
            then: function then(t, r, i) {
              var a = 0;

              function l(t, e, r, i) {
                return function () {
                  var s = this,
                      d = arguments,
                      c = function c() {
                    var n, c;

                    if (!(t < a)) {
                      if ((n = r.apply(s, d)) === e.promise()) throw new TypeError("Thenable self-resolution");
                      c = n && ("object" === o(n) || "function" == typeof n) && n.then, x(c) ? i ? c.call(n, l(a, e, H, i), l(a, e, R, i)) : (a++, c.call(n, l(a, e, H, i), l(a, e, R, i), l(a, e, H, e.notifyWith))) : (r !== H && (s = void 0, d = [n]), (i || e.resolveWith)(s, d));
                    }
                  },
                      m = i ? c : function () {
                    try {
                      c();
                    } catch (o) {
                      E.Deferred.exceptionHook && E.Deferred.exceptionHook(o, m.stackTrace), t + 1 >= a && (r !== R && (s = void 0, d = [o]), e.rejectWith(s, d));
                    }
                  };

                  t ? m() : (E.Deferred.getStackHook && (m.stackTrace = E.Deferred.getStackHook()), n.setTimeout(m));
                };
              }

              return E.Deferred(function (o) {
                e[0][3].add(l(0, o, x(i) ? i : H, o.notifyWith)), e[1][3].add(l(0, o, x(t) ? t : H)), e[2][3].add(l(0, o, x(r) ? r : R));
              }).promise();
            },
            promise: function promise(t) {
              return null != t ? E.extend(t, i) : i;
            }
          },
              a = {};
          return E.each(e, function (t, o) {
            var n = o[2],
                l = o[5];
            i[o[1]] = n.add, l && n.add(function () {
              r = l;
            }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), n.add(o[3].fire), a[o[0]] = function () {
              return a[o[0] + "With"](this === a ? void 0 : this, arguments), this;
            }, a[o[0] + "With"] = n.fireWith;
          }), i.promise(a), t && t.call(a, a), a;
        },
        when: function when(t) {
          var e = arguments.length,
              r = e,
              o = Array(r),
              n = s.call(arguments),
              i = E.Deferred(),
              a = function a(t) {
            return function (r) {
              o[t] = this, n[t] = arguments.length > 1 ? s.call(arguments) : r, --e || i.resolveWith(o, n);
            };
          };

          if (e <= 1 && (F(t, i.done(a(r)).resolve, i.reject, !e), "pending" === i.state() || x(n[r] && n[r].then))) return i.then();

          for (; r--;) {
            F(n[r], a(r), i.reject);
          }

          return i.promise();
        }
      });
      var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      E.Deferred.exceptionHook = function (t, e) {
        n.console && n.console.warn && t && B.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
      }, E.readyException = function (t) {
        n.setTimeout(function () {
          throw t;
        });
      };
      var W = E.Deferred();

      function U() {
        y.removeEventListener("DOMContentLoaded", U), n.removeEventListener("load", U), E.ready();
      }

      E.fn.ready = function (t) {
        return W.then(t)["catch"](function (t) {
          E.readyException(t);
        }), this;
      }, E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function ready(t) {
          (!0 === t ? --E.readyWait : E.isReady) || (E.isReady = !0, !0 !== t && --E.readyWait > 0 || W.resolveWith(y, [E]));
        }
      }), E.ready.then = W.then, "complete" === y.readyState || "loading" !== y.readyState && !y.documentElement.doScroll ? n.setTimeout(E.ready) : (y.addEventListener("DOMContentLoaded", U), n.addEventListener("load", U));

      var Q = function t(e, r, o, n, i, a, l) {
        var s = 0,
            d = e.length,
            c = null == o;
        if ("object" === _(o)) for (s in i = !0, o) {
          t(e, r, s, o[s], !0, a, l);
        } else if (void 0 !== n && (i = !0, x(n) || (l = !0), c && (l ? (r.call(e, n), r = null) : (c = r, r = function r(t, e, _r) {
          return c.call(E(t), _r);
        })), r)) for (; s < d; s++) {
          r(e[s], o, l ? n : n.call(e[s], s, r(e[s], o)));
        }
        return i ? e : c ? r.call(e) : d ? r(e[0], o) : a;
      },
          $ = /^-ms-/,
          X = /-([a-z])/g;

      function V(t, e) {
        return e.toUpperCase();
      }

      function Y(t) {
        return t.replace($, "ms-").replace(X, V);
      }

      var K = function K(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
      };

      function G() {
        this.expando = E.expando + G.uid++;
      }

      G.uid = 1, G.prototype = {
        cache: function cache(t) {
          var e = t[this.expando];
          return e || (e = {}, K(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
            value: e,
            configurable: !0
          }))), e;
        },
        set: function set(t, e, r) {
          var o,
              n = this.cache(t);
          if ("string" == typeof e) n[Y(e)] = r;else for (o in e) {
            n[Y(o)] = e[o];
          }
          return n;
        },
        get: function get(t, e) {
          return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)];
        },
        access: function access(t, e, r) {
          return void 0 === e || e && "string" == typeof e && void 0 === r ? this.get(t, e) : (this.set(t, e, r), void 0 !== r ? r : e);
        },
        remove: function remove(t, e) {
          var r,
              o = t[this.expando];

          if (void 0 !== o) {
            if (void 0 !== e) {
              r = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in o ? [e] : e.match(P) || []).length;

              for (; r--;) {
                delete o[e[r]];
              }
            }

            (void 0 === e || E.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
          }
        },
        hasData: function hasData(t) {
          var e = t[this.expando];
          return void 0 !== e && !E.isEmptyObject(e);
        }
      };
      var J = new G(),
          Z = new G(),
          tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          et = /[A-Z]/g;

      function rt(t, e, r) {
        var o;
        if (void 0 === r && 1 === t.nodeType) if (o = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof (r = t.getAttribute(o))) {
          try {
            r = function (t) {
              return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t);
            }(r);
          } catch (t) {}

          Z.set(t, e, r);
        } else r = void 0;
        return r;
      }

      E.extend({
        hasData: function hasData(t) {
          return Z.hasData(t) || J.hasData(t);
        },
        data: function data(t, e, r) {
          return Z.access(t, e, r);
        },
        removeData: function removeData(t, e) {
          Z.remove(t, e);
        },
        _data: function _data(t, e, r) {
          return J.access(t, e, r);
        },
        _removeData: function _removeData(t, e) {
          J.remove(t, e);
        }
      }), E.fn.extend({
        data: function data(t, e) {
          var r,
              n,
              i,
              a = this[0],
              l = a && a.attributes;

          if (void 0 === t) {
            if (this.length && (i = Z.get(a), 1 === a.nodeType && !J.get(a, "hasDataAttrs"))) {
              for (r = l.length; r--;) {
                l[r] && 0 === (n = l[r].name).indexOf("data-") && (n = Y(n.slice(5)), rt(a, n, i[n]));
              }

              J.set(a, "hasDataAttrs", !0);
            }

            return i;
          }

          return "object" === o(t) ? this.each(function () {
            Z.set(this, t);
          }) : Q(this, function (e) {
            var r;
            if (a && void 0 === e) return void 0 !== (r = Z.get(a, t)) || void 0 !== (r = rt(a, t)) ? r : void 0;
            this.each(function () {
              Z.set(this, t, e);
            });
          }, null, e, arguments.length > 1, null, !0);
        },
        removeData: function removeData(t) {
          return this.each(function () {
            Z.remove(this, t);
          });
        }
      }), E.extend({
        queue: function queue(t, e, r) {
          var o;
          if (t) return e = (e || "fx") + "queue", o = J.get(t, e), r && (!o || Array.isArray(r) ? o = J.access(t, e, E.makeArray(r)) : o.push(r)), o || [];
        },
        dequeue: function dequeue(t, e) {
          var r = E.queue(t, e = e || "fx"),
              o = r.length,
              n = r.shift(),
              i = E._queueHooks(t, e);

          "inprogress" === n && (n = r.shift(), o--), n && ("fx" === e && r.unshift("inprogress"), delete i.stop, n.call(t, function () {
            E.dequeue(t, e);
          }, i)), !o && i && i.empty.fire();
        },
        _queueHooks: function _queueHooks(t, e) {
          var r = e + "queueHooks";
          return J.get(t, r) || J.access(t, r, {
            empty: E.Callbacks("once memory").add(function () {
              J.remove(t, [e + "queue", r]);
            })
          });
        }
      }), E.fn.extend({
        queue: function queue(t, e) {
          var r = 2;
          return "string" != typeof t && (e = t, t = "fx", r--), arguments.length < r ? E.queue(this[0], t) : void 0 === e ? this : this.each(function () {
            var r = E.queue(this, t, e);
            E._queueHooks(this, t), "fx" === t && "inprogress" !== r[0] && E.dequeue(this, t);
          });
        },
        dequeue: function dequeue(t) {
          return this.each(function () {
            E.dequeue(this, t);
          });
        },
        clearQueue: function clearQueue(t) {
          return this.queue(t || "fx", []);
        },
        promise: function promise(t, e) {
          var r,
              o = 1,
              n = E.Deferred(),
              i = this,
              a = this.length,
              l = function l() {
            --o || n.resolveWith(i, [i]);
          };

          for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) {
            (r = J.get(i[a], t + "queueHooks")) && r.empty && (o++, r.empty.add(l));
          }

          return l(), n.promise(e);
        }
      });

      var ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          nt = new RegExp("^(?:([+-])=|)(" + ot + ")([a-z%]*)$", "i"),
          it = ["Top", "Right", "Bottom", "Left"],
          at = y.documentElement,
          lt = function lt(t) {
        return E.contains(t.ownerDocument, t);
      },
          st = {
        composed: !0
      };

      at.getRootNode && (lt = function lt(t) {
        return E.contains(t.ownerDocument, t) || t.getRootNode(st) === t.ownerDocument;
      });

      var dt = function dt(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && lt(t) && "none" === E.css(t, "display");
      };

      function ct(t, e, r, o) {
        var n,
            i,
            a = 20,
            l = o ? function () {
          return o.cur();
        } : function () {
          return E.css(t, e, "");
        },
            s = l(),
            d = r && r[3] || (E.cssNumber[e] ? "" : "px"),
            c = t.nodeType && (E.cssNumber[e] || "px" !== d && +s) && nt.exec(E.css(t, e));

        if (c && c[3] !== d) {
          for (s /= 2, d = d || c[3], c = +s || 1; a--;) {
            E.style(t, e, c + d), (1 - i) * (1 - (i = l() / s || .5)) <= 0 && (a = 0), c /= i;
          }

          E.style(t, e, (c *= 2) + d), r = r || [];
        }

        return r && (c = +c || +s || 0, n = r[1] ? c + (r[1] + 1) * r[2] : +r[2], o && (o.unit = d, o.start = c, o.end = n)), n;
      }

      var mt = {};

      function pt(t) {
        var e,
            r = t.ownerDocument,
            o = t.nodeName,
            n = mt[o];
        return n || (e = r.body.appendChild(r.createElement(o)), n = E.css(e, "display"), e.parentNode.removeChild(e), "none" === n && (n = "block"), mt[o] = n, n);
      }

      function ft(t, e) {
        for (var r, o, n = [], i = 0, a = t.length; i < a; i++) {
          (o = t[i]).style && (r = o.style.display, e ? ("none" === r && (n[i] = J.get(o, "display") || null, n[i] || (o.style.display = "")), "" === o.style.display && dt(o) && (n[i] = pt(o))) : "none" !== r && (n[i] = "none", J.set(o, "display", r)));
        }

        for (i = 0; i < a; i++) {
          null != n[i] && (t[i].style.display = n[i]);
        }

        return t;
      }

      E.fn.extend({
        show: function show() {
          return ft(this, !0);
        },
        hide: function hide() {
          return ft(this);
        },
        toggle: function toggle(t) {
          return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
            dt(this) ? E(this).show() : E(this).hide();
          });
        }
      });
      var ut,
          gt,
          ht = /^(?:checkbox|radio)$/i,
          bt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          xt = /^$|^module$|\/(?:java|ecma)script/i;
      ut = y.createDocumentFragment().appendChild(y.createElement("div")), (gt = y.createElement("input")).setAttribute("type", "radio"), gt.setAttribute("checked", "checked"), gt.setAttribute("name", "t"), ut.appendChild(gt), b.checkClone = ut.cloneNode(!0).cloneNode(!0).lastChild.checked, ut.innerHTML = "<textarea>x</textarea>", b.noCloneChecked = !!ut.cloneNode(!0).lastChild.defaultValue, ut.innerHTML = "<option></option>", b.option = !!ut.lastChild;
      var vt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

      function yt(t, e) {
        var r;
        return r = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && A(t, e) ? E.merge([t], r) : r;
      }

      function wt(t, e) {
        for (var r = 0, o = t.length; r < o; r++) {
          J.set(t[r], "globalEval", !e || J.get(e[r], "globalEval"));
        }
      }

      vt.tbody = vt.tfoot = vt.colgroup = vt.caption = vt.thead, vt.th = vt.td, b.option || (vt.optgroup = vt.option = [1, "<select multiple='multiple'>", "</select>"]);
      var kt = /<|&#?\w+;/;

      function _t(t, e, r, o, n) {
        for (var i, a, l, s, d, c, m = e.createDocumentFragment(), p = [], f = 0, u = t.length; f < u; f++) {
          if ((i = t[f]) || 0 === i) if ("object" === _(i)) E.merge(p, i.nodeType ? [i] : i);else if (kt.test(i)) {
            for (a = a || m.appendChild(e.createElement("div")), l = (bt.exec(i) || ["", ""])[1].toLowerCase(), s = vt[l] || vt._default, a.innerHTML = s[1] + E.htmlPrefilter(i) + s[2], c = s[0]; c--;) {
              a = a.lastChild;
            }

            E.merge(p, a.childNodes), (a = m.firstChild).textContent = "";
          } else p.push(e.createTextNode(i));
        }

        for (m.textContent = "", f = 0; i = p[f++];) {
          if (o && E.inArray(i, o) > -1) n && n.push(i);else if (d = lt(i), a = yt(m.appendChild(i), "script"), d && wt(a), r) for (c = 0; i = a[c++];) {
            xt.test(i.type || "") && r.push(i);
          }
        }

        return m;
      }

      var Et = /^key/,
          Tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          Ct = /^([^.]*)(?:\.(.+)|)/;

      function St() {
        return !0;
      }

      function jt() {
        return !1;
      }

      function Dt(t, e) {
        return t === function () {
          try {
            return y.activeElement;
          } catch (t) {}
        }() == ("focus" === e);
      }

      function At(t, e, r, n, i, a) {
        var l, s;

        if ("object" === o(e)) {
          for (s in "string" != typeof r && (n = n || r, r = void 0), e) {
            At(t, s, r, n, e[s], a);
          }

          return t;
        }

        if (null == n && null == i ? (i = r, n = r = void 0) : null == i && ("string" == typeof r ? (i = n, n = void 0) : (i = n, n = r, r = void 0)), !1 === i) i = jt;else if (!i) return t;
        return 1 === a && (l = i, (i = function i(t) {
          return E().off(t), l.apply(this, arguments);
        }).guid = l.guid || (l.guid = E.guid++)), t.each(function () {
          E.event.add(this, e, i, n, r);
        });
      }

      function Nt(t, e, r) {
        r ? (J.set(t, e, !1), E.event.add(t, e, {
          namespace: !1,
          handler: function handler(t) {
            var o,
                n,
                i = J.get(this, e);

            if (1 & t.isTrigger && this[e]) {
              if (i.length) (E.event.special[e] || {}).delegateType && t.stopPropagation();else if (i = s.call(arguments), J.set(this, e, i), o = r(this, e), this[e](), i !== (n = J.get(this, e)) || o ? J.set(this, e, !1) : n = {}, i !== n) return t.stopImmediatePropagation(), t.preventDefault(), n.value;
            } else i.length && (J.set(this, e, {
              value: E.event.trigger(E.extend(i[0], E.Event.prototype), i.slice(1), this)
            }), t.stopImmediatePropagation());
          }
        })) : void 0 === J.get(t, e) && E.event.add(t, e, St);
      }

      E.event = {
        global: {},
        add: function add(t, e, r, o, n) {
          var i,
              a,
              l,
              s,
              d,
              c,
              m,
              p,
              f,
              u,
              g,
              h = J.get(t);
          if (K(t)) for (r.handler && (r = (i = r).handler, n = i.selector), n && E.find.matchesSelector(at, n), r.guid || (r.guid = E.guid++), (s = h.events) || (s = h.events = Object.create(null)), (a = h.handle) || (a = h.handle = function (e) {
            return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0;
          }), d = (e = (e || "").match(P) || [""]).length; d--;) {
            f = g = (l = Ct.exec(e[d]) || [])[1], u = (l[2] || "").split(".").sort(), f && (m = E.event.special[f] || {}, f = (n ? m.delegateType : m.bindType) || f, m = E.event.special[f] || {}, c = E.extend({
              type: f,
              origType: g,
              data: o,
              handler: r,
              guid: r.guid,
              selector: n,
              needsContext: n && E.expr.match.needsContext.test(n),
              namespace: u.join(".")
            }, i), (p = s[f]) || ((p = s[f] = []).delegateCount = 0, m.setup && !1 !== m.setup.call(t, o, u, a) || t.addEventListener && t.addEventListener(f, a)), m.add && (m.add.call(t, c), c.handler.guid || (c.handler.guid = r.guid)), n ? p.splice(p.delegateCount++, 0, c) : p.push(c), E.event.global[f] = !0);
          }
        },
        remove: function remove(t, e, r, o, n) {
          var i,
              a,
              l,
              s,
              d,
              c,
              m,
              p,
              f,
              u,
              g,
              h = J.hasData(t) && J.get(t);

          if (h && (s = h.events)) {
            for (d = (e = (e || "").match(P) || [""]).length; d--;) {
              if (f = g = (l = Ct.exec(e[d]) || [])[1], u = (l[2] || "").split(".").sort(), f) {
                for (m = E.event.special[f] || {}, p = s[f = (o ? m.delegateType : m.bindType) || f] || [], l = l[2] && new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--;) {
                  c = p[i], !n && g !== c.origType || r && r.guid !== c.guid || l && !l.test(c.namespace) || o && o !== c.selector && ("**" !== o || !c.selector) || (p.splice(i, 1), c.selector && p.delegateCount--, m.remove && m.remove.call(t, c));
                }

                a && !p.length && (m.teardown && !1 !== m.teardown.call(t, u, h.handle) || E.removeEvent(t, f, h.handle), delete s[f]);
              } else for (f in s) {
                E.event.remove(t, f + e[d], r, o, !0);
              }
            }

            E.isEmptyObject(s) && J.remove(t, "handle events");
          }
        },
        dispatch: function dispatch(t) {
          var e,
              r,
              o,
              n,
              i,
              a,
              l = new Array(arguments.length),
              s = E.event.fix(t),
              d = (J.get(this, "events") || Object.create(null))[s.type] || [],
              c = E.event.special[s.type] || {};

          for (l[0] = s, e = 1; e < arguments.length; e++) {
            l[e] = arguments[e];
          }

          if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
            for (a = E.event.handlers.call(this, s, d), e = 0; (n = a[e++]) && !s.isPropagationStopped();) {
              for (s.currentTarget = n.elem, r = 0; (i = n.handlers[r++]) && !s.isImmediatePropagationStopped();) {
                s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (o = ((E.event.special[i.origType] || {}).handle || i.handler).apply(n.elem, l)) && !1 === (s.result = o) && (s.preventDefault(), s.stopPropagation()));
              }
            }

            return c.postDispatch && c.postDispatch.call(this, s), s.result;
          }
        },
        handlers: function handlers(t, e) {
          var r,
              o,
              n,
              i,
              a,
              l = [],
              s = e.delegateCount,
              d = t.target;
          if (s && d.nodeType && !("click" === t.type && t.button >= 1)) for (; d !== this; d = d.parentNode || this) {
            if (1 === d.nodeType && ("click" !== t.type || !0 !== d.disabled)) {
              for (i = [], a = {}, r = 0; r < s; r++) {
                void 0 === a[n = (o = e[r]).selector + " "] && (a[n] = o.needsContext ? E(n, this).index(d) > -1 : E.find(n, this, null, [d]).length), a[n] && i.push(o);
              }

              i.length && l.push({
                elem: d,
                handlers: i
              });
            }
          }
          return d = this, s < e.length && l.push({
            elem: d,
            handlers: e.slice(s)
          }), l;
        },
        addProp: function addProp(t, e) {
          Object.defineProperty(E.Event.prototype, t, {
            enumerable: !0,
            configurable: !0,
            get: x(e) ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            } : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
            set: function set(e) {
              Object.defineProperty(this, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: e
              });
            }
          });
        },
        fix: function fix(t) {
          return t[E.expando] ? t : new E.Event(t);
        },
        special: {
          load: {
            noBubble: !0
          },
          click: {
            setup: function setup(t) {
              var e = this || t;
              return ht.test(e.type) && e.click && A(e, "input") && Nt(e, "click", St), !1;
            },
            trigger: function trigger(t) {
              var e = this || t;
              return ht.test(e.type) && e.click && A(e, "input") && Nt(e, "click"), !0;
            },
            _default: function _default(t) {
              var e = t.target;
              return ht.test(e.type) && e.click && A(e, "input") && J.get(e, "click") || A(e, "a");
            }
          },
          beforeunload: {
            postDispatch: function postDispatch(t) {
              void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
            }
          }
        }
      }, E.removeEvent = function (t, e, r) {
        t.removeEventListener && t.removeEventListener(e, r);
      }, (E.Event = function (t, e) {
        if (!(this instanceof E.Event)) return new E.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? St : jt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && E.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[E.expando] = !0;
      }).prototype = {
        constructor: E.Event,
        isDefaultPrevented: jt,
        isPropagationStopped: jt,
        isImmediatePropagationStopped: jt,
        isSimulated: !1,
        preventDefault: function preventDefault() {
          var t = this.originalEvent;
          this.isDefaultPrevented = St, t && !this.isSimulated && t.preventDefault();
        },
        stopPropagation: function stopPropagation() {
          var t = this.originalEvent;
          this.isPropagationStopped = St, t && !this.isSimulated && t.stopPropagation();
        },
        stopImmediatePropagation: function stopImmediatePropagation() {
          var t = this.originalEvent;
          this.isImmediatePropagationStopped = St, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
        }
      }, E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function which(t) {
          var e = t.button;
          return null == t.which && Et.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Tt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
        }
      }, E.event.addProp), E.each({
        focus: "focusin",
        blur: "focusout"
      }, function (t, e) {
        E.event.special[t] = {
          setup: function setup() {
            return Nt(this, t, Dt), !1;
          },
          trigger: function trigger() {
            return Nt(this, t), !0;
          },
          delegateType: e
        };
      }), E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (t, e) {
        E.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function handle(t) {
            var r,
                o = this,
                n = t.relatedTarget,
                i = t.handleObj;
            return n && (n === o || E.contains(o, n)) || (t.type = i.origType, r = i.handler.apply(this, arguments), t.type = e), r;
          }
        };
      }), E.fn.extend({
        on: function on(t, e, r, o) {
          return At(this, t, e, r, o);
        },
        one: function one(t, e, r, o) {
          return At(this, t, e, r, o, 1);
        },
        off: function off(t, e, r) {
          var n, i;
          if (t && t.preventDefault && t.handleObj) return n = t.handleObj, E(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;

          if ("object" === o(t)) {
            for (i in t) {
              this.off(i, e, t[i]);
            }

            return this;
          }

          return !1 !== e && "function" != typeof e || (r = e, e = void 0), !1 === r && (r = jt), this.each(function () {
            E.event.remove(this, t, r, e);
          });
        }
      });
      var Lt = /<script|<style|<link/i,
          Ot = /checked\s*(?:[^=]|=\s*.checked.)/i,
          It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function zt(t, e) {
        return A(t, "table") && A(11 !== e.nodeType ? e : e.firstChild, "tr") && E(t).children("tbody")[0] || t;
      }

      function Mt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
      }

      function qt(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t;
      }

      function Pt(t, e) {
        var r, o, n, i, a, l;

        if (1 === e.nodeType) {
          if (J.hasData(t) && (l = J.get(t).events)) for (n in J.remove(e, "handle events"), l) {
            for (r = 0, o = l[n].length; r < o; r++) {
              E.event.add(e, n, l[n][r]);
            }
          }
          Z.hasData(t) && (i = Z.access(t), a = E.extend({}, i), Z.set(e, a));
        }
      }

      function Ht(t, e) {
        var r = e.nodeName.toLowerCase();
        "input" === r && ht.test(t.type) ? e.checked = t.checked : "input" !== r && "textarea" !== r || (e.defaultValue = t.defaultValue);
      }

      function Rt(t, e, r, o) {
        e = d(e);
        var n,
            i,
            a,
            l,
            s,
            c,
            m = 0,
            p = t.length,
            f = p - 1,
            u = e[0],
            g = x(u);
        if (g || p > 1 && "string" == typeof u && !b.checkClone && Ot.test(u)) return t.each(function (n) {
          var i = t.eq(n);
          g && (e[0] = u.call(this, n, i.html())), Rt(i, e, r, o);
        });

        if (p && (i = (n = _t(e, t[0].ownerDocument, !1, t, o)).firstChild, 1 === n.childNodes.length && (n = i), i || o)) {
          for (l = (a = E.map(yt(n, "script"), Mt)).length; m < p; m++) {
            s = n, m !== f && (s = E.clone(s, !0, !0), l && E.merge(a, yt(s, "script"))), r.call(t[m], s, m);
          }

          if (l) for (c = a[a.length - 1].ownerDocument, E.map(a, qt), m = 0; m < l; m++) {
            s = a[m], xt.test(s.type || "") && !J.access(s, "globalEval") && E.contains(c, s) && (s.src && "module" !== (s.type || "").toLowerCase() ? E._evalUrl && !s.noModule && E._evalUrl(s.src, {
              nonce: s.nonce || s.getAttribute("nonce")
            }, c) : k(s.textContent.replace(It, ""), s, c));
          }
        }

        return t;
      }

      function Ft(t, e, r) {
        for (var o, n = e ? E.filter(e, t) : t, i = 0; null != (o = n[i]); i++) {
          r || 1 !== o.nodeType || E.cleanData(yt(o)), o.parentNode && (r && lt(o) && wt(yt(o, "script")), o.parentNode.removeChild(o));
        }

        return t;
      }

      E.extend({
        htmlPrefilter: function htmlPrefilter(t) {
          return t;
        },
        clone: function clone(t, e, r) {
          var o,
              n,
              i,
              a,
              l = t.cloneNode(!0),
              s = lt(t);
          if (!(b.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || E.isXMLDoc(t))) for (a = yt(l), o = 0, n = (i = yt(t)).length; o < n; o++) {
            Ht(i[o], a[o]);
          }
          if (e) if (r) for (i = i || yt(t), a = a || yt(l), o = 0, n = i.length; o < n; o++) {
            Pt(i[o], a[o]);
          } else Pt(t, l);
          return (a = yt(l, "script")).length > 0 && wt(a, !s && yt(t, "script")), l;
        },
        cleanData: function cleanData(t) {
          for (var e, r, o, n = E.event.special, i = 0; void 0 !== (r = t[i]); i++) {
            if (K(r)) {
              if (e = r[J.expando]) {
                if (e.events) for (o in e.events) {
                  n[o] ? E.event.remove(r, o) : E.removeEvent(r, o, e.handle);
                }
                r[J.expando] = void 0;
              }

              r[Z.expando] && (r[Z.expando] = void 0);
            }
          }
        }
      }), E.fn.extend({
        detach: function detach(t) {
          return Ft(this, t, !0);
        },
        remove: function remove(t) {
          return Ft(this, t);
        },
        text: function text(t) {
          return Q(this, function (t) {
            return void 0 === t ? E.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
            });
          }, null, t, arguments.length);
        },
        append: function append() {
          return Rt(this, arguments, function (t) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || zt(this, t).appendChild(t);
          });
        },
        prepend: function prepend() {
          return Rt(this, arguments, function (t) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var e = zt(this, t);
              e.insertBefore(t, e.firstChild);
            }
          });
        },
        before: function before() {
          return Rt(this, arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this);
          });
        },
        after: function after() {
          return Rt(this, arguments, function (t) {
            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
          });
        },
        empty: function empty() {
          for (var t, e = 0; null != (t = this[e]); e++) {
            1 === t.nodeType && (E.cleanData(yt(t, !1)), t.textContent = "");
          }

          return this;
        },
        clone: function clone(t, e) {
          return t = null != t && t, e = null == e ? t : e, this.map(function () {
            return E.clone(this, t, e);
          });
        },
        html: function html(t) {
          return Q(this, function (t) {
            var e = this[0] || {},
                r = 0,
                o = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;

            if ("string" == typeof t && !Lt.test(t) && !vt[(bt.exec(t) || ["", ""])[1].toLowerCase()]) {
              t = E.htmlPrefilter(t);

              try {
                for (; r < o; r++) {
                  1 === (e = this[r] || {}).nodeType && (E.cleanData(yt(e, !1)), e.innerHTML = t);
                }

                e = 0;
              } catch (t) {}
            }

            e && this.empty().append(t);
          }, null, t, arguments.length);
        },
        replaceWith: function replaceWith() {
          var t = [];
          return Rt(this, arguments, function (e) {
            var r = this.parentNode;
            E.inArray(this, t) < 0 && (E.cleanData(yt(this)), r && r.replaceChild(e, this));
          }, t);
        }
      }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (t, e) {
        E.fn[t] = function (t) {
          for (var r, o = [], n = E(t), i = n.length - 1, a = 0; a <= i; a++) {
            r = a === i ? this : this.clone(!0), E(n[a])[e](r), c.apply(o, r.get());
          }

          return this.pushStack(o);
        };
      });

      var Bt = new RegExp("^(" + ot + ")(?!px)[a-z%]+$", "i"),
          Wt = function Wt(t) {
        var e = t.ownerDocument.defaultView;
        return e && e.opener || (e = n), e.getComputedStyle(t);
      },
          Ut = function Ut(t, e, r) {
        var o,
            n,
            i = {};

        for (n in e) {
          i[n] = t.style[n], t.style[n] = e[n];
        }

        for (n in o = r.call(t), e) {
          t.style[n] = i[n];
        }

        return o;
      },
          Qt = new RegExp(it.join("|"), "i");

      function $t(t, e, r) {
        var o,
            n,
            i,
            a,
            l = t.style;
        return (r = r || Wt(t)) && ("" !== (a = r.getPropertyValue(e) || r[e]) || lt(t) || (a = E.style(t, e)), !b.pixelBoxStyles() && Bt.test(a) && Qt.test(e) && (o = l.width, n = l.minWidth, i = l.maxWidth, l.minWidth = l.maxWidth = l.width = a, a = r.width, l.width = o, l.minWidth = n, l.maxWidth = i)), void 0 !== a ? a + "" : a;
      }

      function Xt(t, e) {
        return {
          get: function get() {
            if (!t()) return (this.get = e).apply(this, arguments);
            delete this.get;
          }
        };
      }

      !function () {
        function t() {
          if (c) {
            d.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", at.appendChild(d).appendChild(c);
            var t = n.getComputedStyle(c);
            r = "1%" !== t.top, s = 12 === e(t.marginLeft), c.style.right = "60%", a = 36 === e(t.right), o = 36 === e(t.width), c.style.position = "absolute", i = 12 === e(c.offsetWidth / 3), at.removeChild(d), c = null;
          }
        }

        function e(t) {
          return Math.round(parseFloat(t));
        }

        var r,
            o,
            i,
            a,
            l,
            s,
            d = y.createElement("div"),
            c = y.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === c.style.backgroundClip, E.extend(b, {
          boxSizingReliable: function boxSizingReliable() {
            return t(), o;
          },
          pixelBoxStyles: function pixelBoxStyles() {
            return t(), a;
          },
          pixelPosition: function pixelPosition() {
            return t(), r;
          },
          reliableMarginLeft: function reliableMarginLeft() {
            return t(), s;
          },
          scrollboxSize: function scrollboxSize() {
            return t(), i;
          },
          reliableTrDimensions: function reliableTrDimensions() {
            var t, e, r, o;
            return null == l && (t = y.createElement("table"), e = y.createElement("tr"), r = y.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", e.style.height = "1px", r.style.height = "9px", at.appendChild(t).appendChild(e).appendChild(r), o = n.getComputedStyle(e), l = parseInt(o.height) > 3, at.removeChild(t)), l;
          }
        }));
      }();
      var Vt = ["Webkit", "Moz", "ms"],
          Yt = y.createElement("div").style,
          Kt = {};

      function Gt(t) {
        var e = E.cssProps[t] || Kt[t];
        return e || (t in Yt ? t : Kt[t] = function (t) {
          for (var e = t[0].toUpperCase() + t.slice(1), r = Vt.length; r--;) {
            if ((t = Vt[r] + e) in Yt) return t;
          }
        }(t) || t);
      }

      var Jt = /^(none|table(?!-c[ea]).+)/,
          Zt = /^--/,
          te = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
          ee = {
        letterSpacing: "0",
        fontWeight: "400"
      };

      function re(t, e, r) {
        var o = nt.exec(e);
        return o ? Math.max(0, o[2] - (r || 0)) + (o[3] || "px") : e;
      }

      function oe(t, e, r, o, n, i) {
        var a = "width" === e ? 1 : 0,
            l = 0,
            s = 0;
        if (r === (o ? "border" : "content")) return 0;

        for (; a < 4; a += 2) {
          "margin" === r && (s += E.css(t, r + it[a], !0, n)), o ? ("content" === r && (s -= E.css(t, "padding" + it[a], !0, n)), "margin" !== r && (s -= E.css(t, "border" + it[a] + "Width", !0, n))) : (s += E.css(t, "padding" + it[a], !0, n), "padding" !== r ? s += E.css(t, "border" + it[a] + "Width", !0, n) : l += E.css(t, "border" + it[a] + "Width", !0, n));
        }

        return !o && i >= 0 && (s += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - i - s - l - .5)) || 0), s;
      }

      function ne(t, e, r) {
        var o = Wt(t),
            n = (!b.boxSizingReliable() || r) && "border-box" === E.css(t, "boxSizing", !1, o),
            i = n,
            a = $t(t, e, o),
            l = "offset" + e[0].toUpperCase() + e.slice(1);

        if (Bt.test(a)) {
          if (!r) return a;
          a = "auto";
        }

        return (!b.boxSizingReliable() && n || !b.reliableTrDimensions() && A(t, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(t, "display", !1, o)) && t.getClientRects().length && (n = "border-box" === E.css(t, "boxSizing", !1, o), (i = l in t) && (a = t[l])), (a = parseFloat(a) || 0) + oe(t, e, r || (n ? "border" : "content"), i, o, a) + "px";
      }

      function ie(t, e, r, o, n) {
        return new ie.prototype.init(t, e, r, o, n);
      }

      E.extend({
        cssHooks: {
          opacity: {
            get: function get(t, e) {
              if (e) {
                var r = $t(t, "opacity");
                return "" === r ? "1" : r;
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function style(t, e, r, n) {
          if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
            var i,
                a,
                l,
                s = Y(e),
                d = Zt.test(e),
                c = t.style;
            if (d || (e = Gt(s)), l = E.cssHooks[e] || E.cssHooks[s], void 0 === r) return l && "get" in l && void 0 !== (i = l.get(t, !1, n)) ? i : c[e];
            "string" === (a = o(r)) && (i = nt.exec(r)) && i[1] && (r = ct(t, e, i), a = "number"), null != r && r == r && ("number" !== a || d || (r += i && i[3] || (E.cssNumber[s] ? "" : "px")), b.clearCloneStyle || "" !== r || 0 !== e.indexOf("background") || (c[e] = "inherit"), l && "set" in l && void 0 === (r = l.set(t, r, n)) || (d ? c.setProperty(e, r) : c[e] = r));
          }
        },
        css: function css(t, e, r, o) {
          var n,
              i,
              a,
              l = Y(e);
          return Zt.test(e) || (e = Gt(l)), (a = E.cssHooks[e] || E.cssHooks[l]) && "get" in a && (n = a.get(t, !0, r)), void 0 === n && (n = $t(t, e, o)), "normal" === n && e in ee && (n = ee[e]), "" === r || r ? (i = parseFloat(n), !0 === r || isFinite(i) ? i || 0 : n) : n;
        }
      }), E.each(["height", "width"], function (t, e) {
        E.cssHooks[e] = {
          get: function get(t, r, o) {
            if (r) return !Jt.test(E.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ne(t, e, o) : Ut(t, te, function () {
              return ne(t, e, o);
            });
          },
          set: function set(t, r, o) {
            var n,
                i = Wt(t),
                a = !b.scrollboxSize() && "absolute" === i.position,
                l = (a || o) && "border-box" === E.css(t, "boxSizing", !1, i),
                s = o ? oe(t, e, o, l, i) : 0;
            return l && a && (s -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(i[e]) - oe(t, e, "border", !1, i) - .5)), s && (n = nt.exec(r)) && "px" !== (n[3] || "px") && (t.style[e] = r, r = E.css(t, e)), re(0, r, s);
          }
        };
      }), E.cssHooks.marginLeft = Xt(b.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat($t(t, "marginLeft")) || t.getBoundingClientRect().left - Ut(t, {
          marginLeft: 0
        }, function () {
          return t.getBoundingClientRect().left;
        })) + "px";
      }), E.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function (t, e) {
        E.cssHooks[t + e] = {
          expand: function expand(r) {
            for (var o = 0, n = {}, i = "string" == typeof r ? r.split(" ") : [r]; o < 4; o++) {
              n[t + it[o] + e] = i[o] || i[o - 2] || i[0];
            }

            return n;
          }
        }, "margin" !== t && (E.cssHooks[t + e].set = re);
      }), E.fn.extend({
        css: function css(t, e) {
          return Q(this, function (t, e, r) {
            var o,
                n,
                i = {},
                a = 0;

            if (Array.isArray(e)) {
              for (o = Wt(t), n = e.length; a < n; a++) {
                i[e[a]] = E.css(t, e[a], !1, o);
              }

              return i;
            }

            return void 0 !== r ? E.style(t, e, r) : E.css(t, e);
          }, t, e, arguments.length > 1);
        }
      }), E.Tween = ie, ie.prototype = {
        constructor: ie,
        init: function init(t, e, r, o, n, i) {
          this.elem = t, this.prop = r, this.easing = n || E.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = o, this.unit = i || (E.cssNumber[r] ? "" : "px");
        },
        cur: function cur() {
          var t = ie.propHooks[this.prop];
          return t && t.get ? t.get(this) : ie.propHooks._default.get(this);
        },
        run: function run(t) {
          var e,
              r = ie.propHooks[this.prop];
          return this.options.duration ? this.pos = e = E.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : ie.propHooks._default.set(this), this;
        }
      }, ie.prototype.init.prototype = ie.prototype, ie.propHooks = {
        _default: {
          get: function get(t) {
            var e;
            return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = E.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
          },
          set: function set(t) {
            E.fx.step[t.prop] ? E.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !E.cssHooks[t.prop] && null == t.elem.style[Gt(t.prop)] ? t.elem[t.prop] = t.now : E.style(t.elem, t.prop, t.now + t.unit);
          }
        }
      }, ie.propHooks.scrollTop = ie.propHooks.scrollLeft = {
        set: function set(t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        }
      }, E.easing = {
        linear: function linear(t) {
          return t;
        },
        swing: function swing(t) {
          return .5 - Math.cos(t * Math.PI) / 2;
        },
        _default: "swing"
      }, (E.fx = ie.prototype.init).step = {};
      var ae,
          le,
          se = /^(?:toggle|show|hide)$/,
          de = /queueHooks$/;

      function ce() {
        le && (!1 === y.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ce) : n.setTimeout(ce, E.fx.interval), E.fx.tick());
      }

      function me() {
        return n.setTimeout(function () {
          ae = void 0;
        }), ae = Date.now();
      }

      function pe(t, e) {
        var r,
            o = 0,
            n = {
          height: t
        };

        for (e = e ? 1 : 0; o < 4; o += 2 - e) {
          n["margin" + (r = it[o])] = n["padding" + r] = t;
        }

        return e && (n.opacity = n.width = t), n;
      }

      function fe(t, e, r) {
        for (var o, n = (ue.tweeners[e] || []).concat(ue.tweeners["*"]), i = 0, a = n.length; i < a; i++) {
          if (o = n[i].call(r, e, t)) return o;
        }
      }

      function ue(t, e, r) {
        var o,
            n,
            i = 0,
            a = ue.prefilters.length,
            l = E.Deferred().always(function () {
          delete s.elem;
        }),
            s = function s() {
          if (n) return !1;

          for (var e = ae || me(), r = Math.max(0, d.startTime + d.duration - e), o = 1 - (r / d.duration || 0), i = 0, a = d.tweens.length; i < a; i++) {
            d.tweens[i].run(o);
          }

          return l.notifyWith(t, [d, o, r]), o < 1 && a ? r : (a || l.notifyWith(t, [d, 1, 0]), l.resolveWith(t, [d]), !1);
        },
            d = l.promise({
          elem: t,
          props: E.extend({}, e),
          opts: E.extend(!0, {
            specialEasing: {},
            easing: E.easing._default
          }, r),
          originalProperties: e,
          originalOptions: r,
          startTime: ae || me(),
          duration: r.duration,
          tweens: [],
          createTween: function createTween(e, r) {
            var o = E.Tween(t, d.opts, e, r, d.opts.specialEasing[e] || d.opts.easing);
            return d.tweens.push(o), o;
          },
          stop: function stop(e) {
            var r = 0,
                o = e ? d.tweens.length : 0;
            if (n) return this;

            for (n = !0; r < o; r++) {
              d.tweens[r].run(1);
            }

            return e ? (l.notifyWith(t, [d, 1, 0]), l.resolveWith(t, [d, e])) : l.rejectWith(t, [d, e]), this;
          }
        }),
            c = d.props;

        for (!function (t, e) {
          var r, o, n, i, a;

          for (r in t) {
            if (n = e[o = Y(r)], i = t[r], Array.isArray(i) && (n = i[1], i = t[r] = i[0]), r !== o && (t[o] = i, delete t[r]), (a = E.cssHooks[o]) && ("expand" in a)) for (r in i = a.expand(i), delete t[o], i) {
              (r in t) || (t[r] = i[r], e[r] = n);
            } else e[o] = n;
          }
        }(c, d.opts.specialEasing); i < a; i++) {
          if (o = ue.prefilters[i].call(d, t, c, d.opts)) return x(o.stop) && (E._queueHooks(d.elem, d.opts.queue).stop = o.stop.bind(o)), o;
        }

        return E.map(c, fe, d), x(d.opts.start) && d.opts.start.call(t, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), E.fx.timer(E.extend(s, {
          elem: t,
          anim: d,
          queue: d.opts.queue
        })), d;
      }

      E.Animation = E.extend(ue, {
        tweeners: {
          "*": [function (t, e) {
            var r = this.createTween(t, e);
            return ct(r.elem, t, nt.exec(e), r), r;
          }]
        },
        tweener: function tweener(t, e) {
          x(t) ? (e = t, t = ["*"]) : t = t.match(P);

          for (var r, o = 0, n = t.length; o < n; o++) {
            r = t[o], ue.tweeners[r] = ue.tweeners[r] || [], ue.tweeners[r].unshift(e);
          }
        },
        prefilters: [function (t, e, r) {
          var o,
              n,
              i,
              a,
              l,
              s,
              d,
              c,
              m = "width" in e || "height" in e,
              p = this,
              f = {},
              u = t.style,
              g = t.nodeType && dt(t),
              h = J.get(t, "fxshow");

          for (o in r.queue || (null == (a = E._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l();
          }), a.unqueued++, p.always(function () {
            p.always(function () {
              a.unqueued--, E.queue(t, "fx").length || a.empty.fire();
            });
          })), e) {
            if (n = e[o], se.test(n)) {
              if (delete e[o], i = i || "toggle" === n, n === (g ? "hide" : "show")) {
                if ("show" !== n || !h || void 0 === h[o]) continue;
                g = !0;
              }

              f[o] = h && h[o] || E.style(t, o);
            }
          }

          if ((s = !E.isEmptyObject(e)) || !E.isEmptyObject(f)) for (o in m && 1 === t.nodeType && (r.overflow = [u.overflow, u.overflowX, u.overflowY], null == (d = h && h.display) && (d = J.get(t, "display")), "none" === (c = E.css(t, "display")) && (d ? c = d : (ft([t], !0), d = t.style.display || d, c = E.css(t, "display"), ft([t]))), ("inline" === c || "inline-block" === c && null != d) && "none" === E.css(t, "float") && (s || (p.done(function () {
            u.display = d;
          }), null == d && (c = u.display, d = "none" === c ? "" : c)), u.display = "inline-block")), r.overflow && (u.overflow = "hidden", p.always(function () {
            u.overflow = r.overflow[0], u.overflowX = r.overflow[1], u.overflowY = r.overflow[2];
          })), s = !1, f) {
            s || (h ? "hidden" in h && (g = h.hidden) : h = J.access(t, "fxshow", {
              display: d
            }), i && (h.hidden = !g), g && ft([t], !0), p.done(function () {
              for (o in g || ft([t]), J.remove(t, "fxshow"), f) {
                E.style(t, o, f[o]);
              }
            })), s = fe(g ? h[o] : 0, o, p), o in h || (h[o] = s.start, g && (s.end = s.start, s.start = 0));
          }
        }],
        prefilter: function prefilter(t, e) {
          e ? ue.prefilters.unshift(t) : ue.prefilters.push(t);
        }
      }), E.speed = function (t, e, r) {
        var n = t && "object" === o(t) ? E.extend({}, t) : {
          complete: r || !r && e || x(t) && t,
          duration: t,
          easing: r && e || e && !x(e) && e
        };
        return E.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in E.fx.speeds ? n.duration = E.fx.speeds[n.duration] : n.duration = E.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
          x(n.old) && n.old.call(this), n.queue && E.dequeue(this, n.queue);
        }, n;
      }, E.fn.extend({
        fadeTo: function fadeTo(t, e, r, o) {
          return this.filter(dt).css("opacity", 0).show().end().animate({
            opacity: e
          }, t, r, o);
        },
        animate: function animate(t, e, r, o) {
          var n = E.isEmptyObject(t),
              i = E.speed(e, r, o),
              a = function a() {
            var e = ue(this, E.extend({}, t), i);
            (n || J.get(this, "finish")) && e.stop(!0);
          };

          return a.finish = a, n || !1 === i.queue ? this.each(a) : this.queue(i.queue, a);
        },
        stop: function stop(t, e, r) {
          var o = function o(t) {
            var e = t.stop;
            delete t.stop, e(r);
          };

          return "string" != typeof t && (r = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each(function () {
            var e = !0,
                n = null != t && t + "queueHooks",
                i = E.timers,
                a = J.get(this);
            if (n) a[n] && a[n].stop && o(a[n]);else for (n in a) {
              a[n] && a[n].stop && de.test(n) && o(a[n]);
            }

            for (n = i.length; n--;) {
              i[n].elem !== this || null != t && i[n].queue !== t || (i[n].anim.stop(r), e = !1, i.splice(n, 1));
            }

            !e && r || E.dequeue(this, t);
          });
        },
        finish: function finish(t) {
          return !1 !== t && (t = t || "fx"), this.each(function () {
            var e,
                r = J.get(this),
                o = r[t + "queue"],
                n = r[t + "queueHooks"],
                i = E.timers,
                a = o ? o.length : 0;

            for (r.finish = !0, E.queue(this, t, []), n && n.stop && n.stop.call(this, !0), e = i.length; e--;) {
              i[e].elem === this && i[e].queue === t && (i[e].anim.stop(!0), i.splice(e, 1));
            }

            for (e = 0; e < a; e++) {
              o[e] && o[e].finish && o[e].finish.call(this);
            }

            delete r.finish;
          });
        }
      }), E.each(["toggle", "show", "hide"], function (t, e) {
        var r = E.fn[e];

        E.fn[e] = function (t, o, n) {
          return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(pe(e, !0), t, o, n);
        };
      }), E.each({
        slideDown: pe("show"),
        slideUp: pe("hide"),
        slideToggle: pe("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function (t, e) {
        E.fn[t] = function (t, r, o) {
          return this.animate(e, t, r, o);
        };
      }), E.timers = [], E.fx.tick = function () {
        var t,
            e = 0,
            r = E.timers;

        for (ae = Date.now(); e < r.length; e++) {
          (t = r[e])() || r[e] !== t || r.splice(e--, 1);
        }

        r.length || E.fx.stop(), ae = void 0;
      }, E.fx.timer = function (t) {
        E.timers.push(t), E.fx.start();
      }, E.fx.interval = 13, E.fx.start = function () {
        le || (le = !0, ce());
      }, E.fx.stop = function () {
        le = null;
      }, E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, E.fn.delay = function (t, e) {
        return t = E.fx && E.fx.speeds[t] || t, e = e || "fx", this.queue(e, function (e, r) {
          var o = n.setTimeout(e, t);

          r.stop = function () {
            n.clearTimeout(o);
          };
        });
      }, function () {
        var t = y.createElement("input"),
            e = y.createElement("select").appendChild(y.createElement("option"));
        t.type = "checkbox", b.checkOn = "" !== t.value, b.optSelected = e.selected, (t = y.createElement("input")).value = "t", t.type = "radio", b.radioValue = "t" === t.value;
      }();
      var ge,
          he = E.expr.attrHandle;
      E.fn.extend({
        attr: function attr(t, e) {
          return Q(this, E.attr, t, e, arguments.length > 1);
        },
        removeAttr: function removeAttr(t) {
          return this.each(function () {
            E.removeAttr(this, t);
          });
        }
      }), E.extend({
        attr: function attr(t, e, r) {
          var o,
              n,
              i = t.nodeType;
          if (3 !== i && 8 !== i && 2 !== i) return void 0 === t.getAttribute ? E.prop(t, e, r) : (1 === i && E.isXMLDoc(t) || (n = E.attrHooks[e.toLowerCase()] || (E.expr.match.bool.test(e) ? ge : void 0)), void 0 !== r ? null === r ? void E.removeAttr(t, e) : n && "set" in n && void 0 !== (o = n.set(t, r, e)) ? o : (t.setAttribute(e, r + ""), r) : n && "get" in n && null !== (o = n.get(t, e)) ? o : null == (o = E.find.attr(t, e)) ? void 0 : o);
        },
        attrHooks: {
          type: {
            set: function set(t, e) {
              if (!b.radioValue && "radio" === e && A(t, "input")) {
                var r = t.value;
                return t.setAttribute("type", e), r && (t.value = r), e;
              }
            }
          }
        },
        removeAttr: function removeAttr(t, e) {
          var r,
              o = 0,
              n = e && e.match(P);
          if (n && 1 === t.nodeType) for (; r = n[o++];) {
            t.removeAttribute(r);
          }
        }
      }), ge = {
        set: function set(t, e, r) {
          return !1 === e ? E.removeAttr(t, r) : t.setAttribute(r, r), r;
        }
      }, E.each(E.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var r = he[e] || E.find.attr;

        he[e] = function (t, e, o) {
          var n,
              i,
              a = e.toLowerCase();
          return o || (i = he[a], he[a] = n, n = null != r(t, e, o) ? a : null, he[a] = i), n;
        };
      });
      var be = /^(?:input|select|textarea|button)$/i,
          xe = /^(?:a|area)$/i;

      function ve(t) {
        return (t.match(P) || []).join(" ");
      }

      function ye(t) {
        return t.getAttribute && t.getAttribute("class") || "";
      }

      function we(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(P) || [];
      }

      E.fn.extend({
        prop: function prop(t, e) {
          return Q(this, E.prop, t, e, arguments.length > 1);
        },
        removeProp: function removeProp(t) {
          return this.each(function () {
            delete this[E.propFix[t] || t];
          });
        }
      }), E.extend({
        prop: function prop(t, e, r) {
          var o,
              n,
              i = t.nodeType;
          if (3 !== i && 8 !== i && 2 !== i) return 1 === i && E.isXMLDoc(t) || (e = E.propFix[e] || e, n = E.propHooks[e]), void 0 !== r ? n && "set" in n && void 0 !== (o = n.set(t, r, e)) ? o : t[e] = r : n && "get" in n && null !== (o = n.get(t, e)) ? o : t[e];
        },
        propHooks: {
          tabIndex: {
            get: function get(t) {
              var e = E.find.attr(t, "tabindex");
              return e ? parseInt(e, 10) : be.test(t.nodeName) || xe.test(t.nodeName) && t.href ? 0 : -1;
            }
          }
        },
        propFix: {
          "for": "htmlFor",
          "class": "className"
        }
      }), b.optSelected || (E.propHooks.selected = {
        get: function get(t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function set(t) {
          var e = t.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        }
      }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        E.propFix[this.toLowerCase()] = this;
      }), E.fn.extend({
        addClass: function addClass(t) {
          var e,
              r,
              o,
              n,
              i,
              a,
              l,
              s = 0;
          if (x(t)) return this.each(function (e) {
            E(this).addClass(t.call(this, e, ye(this)));
          });
          if ((e = we(t)).length) for (; r = this[s++];) {
            if (n = ye(r), o = 1 === r.nodeType && " " + ve(n) + " ") {
              for (a = 0; i = e[a++];) {
                o.indexOf(" " + i + " ") < 0 && (o += i + " ");
              }

              n !== (l = ve(o)) && r.setAttribute("class", l);
            }
          }
          return this;
        },
        removeClass: function removeClass(t) {
          var e,
              r,
              o,
              n,
              i,
              a,
              l,
              s = 0;
          if (x(t)) return this.each(function (e) {
            E(this).removeClass(t.call(this, e, ye(this)));
          });
          if (!arguments.length) return this.attr("class", "");
          if ((e = we(t)).length) for (; r = this[s++];) {
            if (n = ye(r), o = 1 === r.nodeType && " " + ve(n) + " ") {
              for (a = 0; i = e[a++];) {
                for (; o.indexOf(" " + i + " ") > -1;) {
                  o = o.replace(" " + i + " ", " ");
                }
              }

              n !== (l = ve(o)) && r.setAttribute("class", l);
            }
          }
          return this;
        },
        toggleClass: function toggleClass(t, e) {
          var r = o(t),
              n = "string" === r || Array.isArray(t);
          return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : x(t) ? this.each(function (r) {
            E(this).toggleClass(t.call(this, r, ye(this), e), e);
          }) : this.each(function () {
            var e, o, i, a;
            if (n) for (o = 0, i = E(this), a = we(t); e = a[o++];) {
              i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
            } else void 0 !== t && "boolean" !== r || ((e = ye(this)) && J.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : J.get(this, "__className__") || ""));
          });
        },
        hasClass: function hasClass(t) {
          var e,
              r,
              o = 0;

          for (e = " " + t + " "; r = this[o++];) {
            if (1 === r.nodeType && (" " + ve(ye(r)) + " ").indexOf(e) > -1) return !0;
          }

          return !1;
        }
      });
      var ke = /\r/g;
      E.fn.extend({
        val: function val(t) {
          var e,
              r,
              o,
              n = this[0];
          return arguments.length ? (o = x(t), this.each(function (r) {
            var n;
            1 === this.nodeType && (null == (n = o ? t.call(this, r, E(this).val()) : t) ? n = "" : "number" == typeof n ? n += "" : Array.isArray(n) && (n = E.map(n, function (t) {
              return null == t ? "" : t + "";
            })), (e = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, n, "value") || (this.value = n));
          })) : n ? (e = E.valHooks[n.type] || E.valHooks[n.nodeName.toLowerCase()]) && "get" in e && void 0 !== (r = e.get(n, "value")) ? r : "string" == typeof (r = n.value) ? r.replace(ke, "") : null == r ? "" : r : void 0;
        }
      }), E.extend({
        valHooks: {
          option: {
            get: function get(t) {
              var e = E.find.attr(t, "value");
              return null != e ? e : ve(E.text(t));
            }
          },
          select: {
            get: function get(t) {
              var e,
                  r,
                  o,
                  n = t.options,
                  i = t.selectedIndex,
                  a = "select-one" === t.type,
                  l = a ? null : [],
                  s = a ? i + 1 : n.length;

              for (o = i < 0 ? s : a ? i : 0; o < s; o++) {
                if (((r = n[o]).selected || o === i) && !r.disabled && (!r.parentNode.disabled || !A(r.parentNode, "optgroup"))) {
                  if (e = E(r).val(), a) return e;
                  l.push(e);
                }
              }

              return l;
            },
            set: function set(t, e) {
              for (var r, o, n = t.options, i = E.makeArray(e), a = n.length; a--;) {
                ((o = n[a]).selected = E.inArray(E.valHooks.option.get(o), i) > -1) && (r = !0);
              }

              return r || (t.selectedIndex = -1), i;
            }
          }
        }
      }), E.each(["radio", "checkbox"], function () {
        E.valHooks[this] = {
          set: function set(t, e) {
            if (Array.isArray(e)) return t.checked = E.inArray(E(t).val(), e) > -1;
          }
        }, b.checkOn || (E.valHooks[this].get = function (t) {
          return null === t.getAttribute("value") ? "on" : t.value;
        });
      }), b.focusin = "onfocusin" in n;

      var _e = /^(?:focusinfocus|focusoutblur)$/,
          Ee = function Ee(t) {
        t.stopPropagation();
      };

      E.extend(E.event, {
        trigger: function trigger(t, e, r, i) {
          var a,
              l,
              s,
              d,
              c,
              m,
              p,
              f,
              g = [r || y],
              h = u.call(t, "type") ? t.type : t,
              b = u.call(t, "namespace") ? t.namespace.split(".") : [];

          if (l = f = s = r = r || y, 3 !== r.nodeType && 8 !== r.nodeType && !_e.test(h + E.event.triggered) && (h.indexOf(".") > -1 && (b = h.split("."), h = b.shift(), b.sort()), c = h.indexOf(":") < 0 && "on" + h, (t = t[E.expando] ? t : new E.Event(h, "object" === o(t) && t)).isTrigger = i ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), e = null == e ? [t] : E.makeArray(e, [t]), p = E.event.special[h] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, e))) {
            if (!i && !p.noBubble && !v(r)) {
              for (d = p.delegateType || h, _e.test(d + h) || (l = l.parentNode); l; l = l.parentNode) {
                g.push(l), s = l;
              }

              s === (r.ownerDocument || y) && g.push(s.defaultView || s.parentWindow || n);
            }

            for (a = 0; (l = g[a++]) && !t.isPropagationStopped();) {
              f = l, t.type = a > 1 ? d : p.bindType || h, (m = (J.get(l, "events") || Object.create(null))[t.type] && J.get(l, "handle")) && m.apply(l, e), (m = c && l[c]) && m.apply && K(l) && (t.result = m.apply(l, e), !1 === t.result && t.preventDefault());
            }

            return t.type = h, i || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), e) || !K(r) || c && x(r[h]) && !v(r) && ((s = r[c]) && (r[c] = null), E.event.triggered = h, t.isPropagationStopped() && f.addEventListener(h, Ee), r[h](), t.isPropagationStopped() && f.removeEventListener(h, Ee), E.event.triggered = void 0, s && (r[c] = s)), t.result;
          }
        },
        simulate: function simulate(t, e, r) {
          var o = E.extend(new E.Event(), r, {
            type: t,
            isSimulated: !0
          });
          E.event.trigger(o, null, e);
        }
      }), E.fn.extend({
        trigger: function trigger(t, e) {
          return this.each(function () {
            E.event.trigger(t, e, this);
          });
        },
        triggerHandler: function triggerHandler(t, e) {
          var r = this[0];
          if (r) return E.event.trigger(t, e, r, !0);
        }
      }), b.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
      }, function (t, e) {
        var r = function r(t) {
          E.event.simulate(e, t.target, E.event.fix(t));
        };

        E.event.special[e] = {
          setup: function setup() {
            var o = this.ownerDocument || this.document || this,
                n = J.access(o, e);
            n || o.addEventListener(t, r, !0), J.access(o, e, (n || 0) + 1);
          },
          teardown: function teardown() {
            var o = this.ownerDocument || this.document || this,
                n = J.access(o, e) - 1;
            n ? J.access(o, e, n) : (o.removeEventListener(t, r, !0), J.remove(o, e));
          }
        };
      });
      var Te = n.location,
          Ce = {
        guid: Date.now()
      },
          Se = /\?/;

      E.parseXML = function (t) {
        var e;
        if (!t || "string" != typeof t) return null;

        try {
          e = new n.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
          e = void 0;
        }

        return e && !e.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + t), e;
      };

      var je = /\[\]$/,
          De = /\r?\n/g,
          Ae = /^(?:submit|button|image|reset|file)$/i,
          Ne = /^(?:input|select|textarea|keygen)/i;

      function Le(t, e, r, n) {
        var i;
        if (Array.isArray(e)) E.each(e, function (e, i) {
          r || je.test(t) ? n(t, i) : Le(t + "[" + ("object" === o(i) && null != i ? e : "") + "]", i, r, n);
        });else if (r || "object" !== _(e)) n(t, e);else for (i in e) {
          Le(t + "[" + i + "]", e[i], r, n);
        }
      }

      E.param = function (t, e) {
        var r,
            o = [],
            n = function n(t, e) {
          var r = x(e) ? e() : e;
          o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == r ? "" : r);
        };

        if (null == t) return "";
        if (Array.isArray(t) || t.jquery && !E.isPlainObject(t)) E.each(t, function () {
          n(this.name, this.value);
        });else for (r in t) {
          Le(r, t[r], e, n);
        }
        return o.join("&");
      }, E.fn.extend({
        serialize: function serialize() {
          return E.param(this.serializeArray());
        },
        serializeArray: function serializeArray() {
          return this.map(function () {
            var t = E.prop(this, "elements");
            return t ? E.makeArray(t) : this;
          }).filter(function () {
            var t = this.type;
            return this.name && !E(this).is(":disabled") && Ne.test(this.nodeName) && !Ae.test(t) && (this.checked || !ht.test(t));
          }).map(function (t, e) {
            var r = E(this).val();
            return null == r ? null : Array.isArray(r) ? E.map(r, function (t) {
              return {
                name: e.name,
                value: t.replace(De, "\r\n")
              };
            }) : {
              name: e.name,
              value: r.replace(De, "\r\n")
            };
          }).get();
        }
      });
      var Oe = /%20/g,
          Ie = /#.*$/,
          ze = /([?&])_=[^&]*/,
          Me = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          qe = /^(?:GET|HEAD)$/,
          Pe = /^\/\//,
          He = {},
          Re = {},
          Fe = "*/".concat("*"),
          Be = y.createElement("a");

      function We(t) {
        return function (e, r) {
          "string" != typeof e && (r = e, e = "*");
          var o,
              n = 0,
              i = e.toLowerCase().match(P) || [];
          if (x(r)) for (; o = i[n++];) {
            "+" === o[0] ? (o = o.slice(1) || "*", (t[o] = t[o] || []).unshift(r)) : (t[o] = t[o] || []).push(r);
          }
        };
      }

      function Ue(t, e, r, o) {
        var n = {},
            i = t === Re;

        function a(l) {
          var s;
          return n[l] = !0, E.each(t[l] || [], function (t, l) {
            var d = l(e, r, o);
            return "string" != typeof d || i || n[d] ? i ? !(s = d) : void 0 : (e.dataTypes.unshift(d), a(d), !1);
          }), s;
        }

        return a(e.dataTypes[0]) || !n["*"] && a("*");
      }

      function Qe(t, e) {
        var r,
            o,
            n = E.ajaxSettings.flatOptions || {};

        for (r in e) {
          void 0 !== e[r] && ((n[r] ? t : o || (o = {}))[r] = e[r]);
        }

        return o && E.extend(!0, t, o), t;
      }

      Be.href = Te.href, E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Te.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Te.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Fe,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": E.parseXML
          },
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        ajaxSetup: function ajaxSetup(t, e) {
          return e ? Qe(Qe(t, E.ajaxSettings), e) : Qe(E.ajaxSettings, t);
        },
        ajaxPrefilter: We(He),
        ajaxTransport: We(Re),
        ajax: function ajax(t, e) {
          "object" === o(t) && (e = t, t = void 0);
          var r,
              i,
              a,
              l,
              s,
              d,
              c,
              m,
              p,
              f,
              u = E.ajaxSetup({}, e = e || {}),
              g = u.context || u,
              h = u.context && (g.nodeType || g.jquery) ? E(g) : E.event,
              b = E.Deferred(),
              x = E.Callbacks("once memory"),
              v = u.statusCode || {},
              w = {},
              k = {},
              _ = "canceled",
              T = {
            readyState: 0,
            getResponseHeader: function getResponseHeader(t) {
              var e;

              if (c) {
                if (!l) for (l = {}; e = Me.exec(a);) {
                  l[e[1].toLowerCase() + " "] = (l[e[1].toLowerCase() + " "] || []).concat(e[2]);
                }
                e = l[t.toLowerCase() + " "];
              }

              return null == e ? null : e.join(", ");
            },
            getAllResponseHeaders: function getAllResponseHeaders() {
              return c ? a : null;
            },
            setRequestHeader: function setRequestHeader(t, e) {
              return null == c && (t = k[t.toLowerCase()] = k[t.toLowerCase()] || t, w[t] = e), this;
            },
            overrideMimeType: function overrideMimeType(t) {
              return null == c && (u.mimeType = t), this;
            },
            statusCode: function statusCode(t) {
              var e;
              if (t) if (c) T.always(t[T.status]);else for (e in t) {
                v[e] = [v[e], t[e]];
              }
              return this;
            },
            abort: function abort(t) {
              var e = t || _;
              return r && r.abort(e), C(0, e), this;
            }
          };

          if (b.promise(T), u.url = ((t || u.url || Te.href) + "").replace(Pe, Te.protocol + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = (u.dataType || "*").toLowerCase().match(P) || [""], null == u.crossDomain) {
            d = y.createElement("a");

            try {
              d.href = u.url, d.href = d.href, u.crossDomain = Be.protocol + "//" + Be.host != d.protocol + "//" + d.host;
            } catch (t) {
              u.crossDomain = !0;
            }
          }

          if (u.data && u.processData && "string" != typeof u.data && (u.data = E.param(u.data, u.traditional)), Ue(He, u, e, T), c) return T;

          for (p in (m = E.event && u.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !qe.test(u.type), i = u.url.replace(Ie, ""), u.hasContent ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(Oe, "+")) : (f = u.url.slice(i.length), u.data && (u.processData || "string" == typeof u.data) && (i += (Se.test(i) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (i = i.replace(ze, "$1"), f = (Se.test(i) ? "&" : "?") + "_=" + Ce.guid++ + f), u.url = i + f), u.ifModified && (E.lastModified[i] && T.setRequestHeader("If-Modified-Since", E.lastModified[i]), E.etag[i] && T.setRequestHeader("If-None-Match", E.etag[i])), (u.data && u.hasContent && !1 !== u.contentType || e.contentType) && T.setRequestHeader("Content-Type", u.contentType), T.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Fe + "; q=0.01" : "") : u.accepts["*"]), u.headers) {
            T.setRequestHeader(p, u.headers[p]);
          }

          if (u.beforeSend && (!1 === u.beforeSend.call(g, T, u) || c)) return T.abort();

          if (_ = "abort", x.add(u.complete), T.done(u.success), T.fail(u.error), r = Ue(Re, u, e, T)) {
            if (T.readyState = 1, m && h.trigger("ajaxSend", [T, u]), c) return T;
            u.async && u.timeout > 0 && (s = n.setTimeout(function () {
              T.abort("timeout");
            }, u.timeout));

            try {
              c = !1, r.send(w, C);
            } catch (t) {
              if (c) throw t;
              C(-1, t);
            }
          } else C(-1, "No Transport");

          function C(t, e, o, l) {
            var d,
                p,
                f,
                y,
                w,
                k = e;
            c || (c = !0, s && n.clearTimeout(s), r = void 0, a = l || "", T.readyState = t > 0 ? 4 : 0, d = t >= 200 && t < 300 || 304 === t, o && (y = function (t, e, r) {
              for (var o, n, i, a, l = t.contents, s = t.dataTypes; "*" === s[0];) {
                s.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
              }

              if (o) for (n in l) {
                if (l[n] && l[n].test(o)) {
                  s.unshift(n);
                  break;
                }
              }
              if (s[0] in r) i = s[0];else {
                for (n in r) {
                  if (!s[0] || t.converters[n + " " + s[0]]) {
                    i = n;
                    break;
                  }

                  a || (a = n);
                }

                i = i || a;
              }
              if (i) return i !== s[0] && s.unshift(i), r[i];
            }(u, T, o)), !d && E.inArray("script", u.dataTypes) > -1 && (u.converters["text script"] = function () {}), y = function (t, e, r, o) {
              var n,
                  i,
                  a,
                  l,
                  s,
                  d = {},
                  c = t.dataTypes.slice();
              if (c[1]) for (a in t.converters) {
                d[a.toLowerCase()] = t.converters[a];
              }

              for (i = c.shift(); i;) {
                if (t.responseFields[i] && (r[t.responseFields[i]] = e), !s && o && t.dataFilter && (e = t.dataFilter(e, t.dataType)), s = i, i = c.shift()) if ("*" === i) i = s;else if ("*" !== s && s !== i) {
                  if (!(a = d[s + " " + i] || d["* " + i])) for (n in d) {
                    if ((l = n.split(" "))[1] === i && (a = d[s + " " + l[0]] || d["* " + l[0]])) {
                      !0 === a ? a = d[n] : !0 !== d[n] && (i = l[0], c.unshift(l[1]));
                      break;
                    }
                  }
                  if (!0 !== a) if (a && t["throws"]) e = a(e);else try {
                    e = a(e);
                  } catch (t) {
                    return {
                      state: "parsererror",
                      error: a ? t : "No conversion from " + s + " to " + i
                    };
                  }
                }
              }

              return {
                state: "success",
                data: e
              };
            }(u, y, T, d), d ? (u.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (E.lastModified[i] = w), (w = T.getResponseHeader("etag")) && (E.etag[i] = w)), 204 === t || "HEAD" === u.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = y.state, p = y.data, d = !(f = y.error))) : (f = k, !t && k || (k = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (e || k) + "", d ? b.resolveWith(g, [p, k, T]) : b.rejectWith(g, [T, k, f]), T.statusCode(v), v = void 0, m && h.trigger(d ? "ajaxSuccess" : "ajaxError", [T, u, d ? p : f]), x.fireWith(g, [T, k]), m && (h.trigger("ajaxComplete", [T, u]), --E.active || E.event.trigger("ajaxStop")));
          }

          return T;
        },
        getJSON: function getJSON(t, e, r) {
          return E.get(t, e, r, "json");
        },
        getScript: function getScript(t, e) {
          return E.get(t, void 0, e, "script");
        }
      }), E.each(["get", "post"], function (t, e) {
        E[e] = function (t, r, o, n) {
          return x(r) && (n = n || o, o = r, r = void 0), E.ajax(E.extend({
            url: t,
            type: e,
            dataType: n,
            data: r,
            success: o
          }, E.isPlainObject(t) && t));
        };
      }), E.ajaxPrefilter(function (t) {
        var e;

        for (e in t.headers) {
          "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "");
        }
      }), E._evalUrl = function (t, e, r) {
        return E.ajax({
          url: t,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: {
            "text script": function textScript() {}
          },
          dataFilter: function dataFilter(t) {
            E.globalEval(t, e, r);
          }
        });
      }, E.fn.extend({
        wrapAll: function wrapAll(t) {
          var e;
          return this[0] && (x(t) && (t = t.call(this[0])), e = E(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
            for (var t = this; t.firstElementChild;) {
              t = t.firstElementChild;
            }

            return t;
          }).append(this)), this;
        },
        wrapInner: function wrapInner(t) {
          return x(t) ? this.each(function (e) {
            E(this).wrapInner(t.call(this, e));
          }) : this.each(function () {
            var e = E(this),
                r = e.contents();
            r.length ? r.wrapAll(t) : e.append(t);
          });
        },
        wrap: function wrap(t) {
          var e = x(t);
          return this.each(function (r) {
            E(this).wrapAll(e ? t.call(this, r) : t);
          });
        },
        unwrap: function unwrap(t) {
          return this.parent(t).not("body").each(function () {
            E(this).replaceWith(this.childNodes);
          }), this;
        }
      }), E.expr.pseudos.hidden = function (t) {
        return !E.expr.pseudos.visible(t);
      }, E.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
      }, E.ajaxSettings.xhr = function () {
        try {
          return new n.XMLHttpRequest();
        } catch (t) {}
      };
      var $e = {
        0: 200,
        1223: 204
      },
          Xe = E.ajaxSettings.xhr();
      b.cors = !!Xe && "withCredentials" in Xe, b.ajax = Xe = !!Xe, E.ajaxTransport(function (t) {
        var _e2, r;

        if (b.cors || Xe && !t.crossDomain) return {
          send: function send(o, i) {
            var a,
                l = t.xhr();
            if (l.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
              l[a] = t.xhrFields[a];
            }

            for (a in t.mimeType && l.overrideMimeType && l.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) {
              l.setRequestHeader(a, o[a]);
            }

            _e2 = function e(t) {
              return function () {
                _e2 && (_e2 = r = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null, "abort" === t ? l.abort() : "error" === t ? "number" != typeof l.status ? i(0, "error") : i(l.status, l.statusText) : i($e[l.status] || l.status, l.statusText, "text" !== (l.responseType || "text") || "string" != typeof l.responseText ? {
                  binary: l.response
                } : {
                  text: l.responseText
                }, l.getAllResponseHeaders()));
              };
            }, l.onload = _e2(), r = l.onerror = l.ontimeout = _e2("error"), void 0 !== l.onabort ? l.onabort = r : l.onreadystatechange = function () {
              4 === l.readyState && n.setTimeout(function () {
                _e2 && r();
              });
            }, _e2 = _e2("abort");

            try {
              l.send(t.hasContent && t.data || null);
            } catch (t) {
              if (_e2) throw t;
            }
          },
          abort: function abort() {
            _e2 && _e2();
          }
        };
      }), E.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1);
      }), E.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function textScript(t) {
            return E.globalEval(t), t;
          }
        }
      }), E.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
      }), E.ajaxTransport("script", function (t) {
        var e, _r2;

        if (t.crossDomain || t.scriptAttrs) return {
          send: function send(o, n) {
            e = E("<script>").attr(t.scriptAttrs || {}).prop({
              charset: t.scriptCharset,
              src: t.url
            }).on("load error", _r2 = function r(t) {
              e.remove(), _r2 = null, t && n("error" === t.type ? 404 : 200, t.type);
            }), y.head.appendChild(e[0]);
          },
          abort: function abort() {
            _r2 && _r2();
          }
        };
      });
      var Ve,
          Ye = [],
          Ke = /(=)\?(?=&|$)|\?\?/;
      E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function jsonpCallback() {
          var t = Ye.pop() || E.expando + "_" + Ce.guid++;
          return this[t] = !0, t;
        }
      }), E.ajaxPrefilter("json jsonp", function (t, e, r) {
        var o,
            i,
            a,
            l = !1 !== t.jsonp && (Ke.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ke.test(t.data) && "data");
        if (l || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = x(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, l ? t[l] = t[l].replace(Ke, "$1" + o) : !1 !== t.jsonp && (t.url += (Se.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
          return a || E.error(o + " was not called"), a[0];
        }, t.dataTypes[0] = "json", i = n[o], n[o] = function () {
          a = arguments;
        }, r.always(function () {
          void 0 === i ? E(n).removeProp(o) : n[o] = i, t[o] && (t.jsonpCallback = e.jsonpCallback, Ye.push(o)), a && x(i) && i(a[0]), a = i = void 0;
        }), "script";
      }), b.createHTMLDocument = ((Ve = y.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ve.childNodes.length), E.parseHTML = function (t, e, r) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (r = e, e = !1), e || (b.createHTMLDocument ? ((o = (e = y.implementation.createHTMLDocument("")).createElement("base")).href = y.location.href, e.head.appendChild(o)) : e = y), i = !r && [], (n = N.exec(t)) ? [e.createElement(n[1])] : (n = _t([t], e, i), i && i.length && E(i).remove(), E.merge([], n.childNodes)));
        var o, n, i;
      }, E.fn.load = function (t, e, r) {
        var n,
            i,
            a,
            l = this,
            s = t.indexOf(" ");
        return s > -1 && (n = ve(t.slice(s)), t = t.slice(0, s)), x(e) ? (r = e, e = void 0) : e && "object" === o(e) && (i = "POST"), l.length > 0 && E.ajax({
          url: t,
          type: i || "GET",
          dataType: "html",
          data: e
        }).done(function (t) {
          a = arguments, l.html(n ? E("<div>").append(E.parseHTML(t)).find(n) : t);
        }).always(r && function (t, e) {
          l.each(function () {
            r.apply(this, a || [t.responseText, e, t]);
          });
        }), this;
      }, E.expr.pseudos.animated = function (t) {
        return E.grep(E.timers, function (e) {
          return t === e.elem;
        }).length;
      }, E.offset = {
        setOffset: function setOffset(t, e, r) {
          var o,
              n,
              i,
              a,
              l,
              s,
              d = E.css(t, "position"),
              c = E(t),
              m = {};
          "static" === d && (t.style.position = "relative"), l = c.offset(), i = E.css(t, "top"), s = E.css(t, "left"), ("absolute" === d || "fixed" === d) && (i + s).indexOf("auto") > -1 ? (a = (o = c.position()).top, n = o.left) : (a = parseFloat(i) || 0, n = parseFloat(s) || 0), x(e) && (e = e.call(t, r, E.extend({}, l))), null != e.top && (m.top = e.top - l.top + a), null != e.left && (m.left = e.left - l.left + n), "using" in e ? e.using.call(t, m) : ("number" == typeof m.top && (m.top += "px"), "number" == typeof m.left && (m.left += "px"), c.css(m));
        }
      }, E.fn.extend({
        offset: function offset(t) {
          if (arguments.length) return void 0 === t ? this : this.each(function (e) {
            E.offset.setOffset(this, t, e);
          });
          var e,
              r,
              o = this[0];
          return o ? o.getClientRects().length ? (e = o.getBoundingClientRect(), r = o.ownerDocument.defaultView, {
            top: e.top + r.pageYOffset,
            left: e.left + r.pageXOffset
          }) : {
            top: 0,
            left: 0
          } : void 0;
        },
        position: function position() {
          if (this[0]) {
            var t,
                e,
                r,
                o = this[0],
                n = {
              top: 0,
              left: 0
            };
            if ("fixed" === E.css(o, "position")) e = o.getBoundingClientRect();else {
              for (e = this.offset(), r = o.ownerDocument, t = o.offsetParent || r.documentElement; t && (t === r.body || t === r.documentElement) && "static" === E.css(t, "position");) {
                t = t.parentNode;
              }

              t && t !== o && 1 === t.nodeType && ((n = E(t).offset()).top += E.css(t, "borderTopWidth", !0), n.left += E.css(t, "borderLeftWidth", !0));
            }
            return {
              top: e.top - n.top - E.css(o, "marginTop", !0),
              left: e.left - n.left - E.css(o, "marginLeft", !0)
            };
          }
        },
        offsetParent: function offsetParent() {
          return this.map(function () {
            for (var t = this.offsetParent; t && "static" === E.css(t, "position");) {
              t = t.offsetParent;
            }

            return t || at;
          });
        }
      }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
      }, function (t, e) {
        var r = "pageYOffset" === e;

        E.fn[t] = function (o) {
          return Q(this, function (t, o, n) {
            var i;
            if (v(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === n) return i ? i[e] : t[o];
            i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : t[o] = n;
          }, t, o, arguments.length);
        };
      }), E.each(["top", "left"], function (t, e) {
        E.cssHooks[e] = Xt(b.pixelPosition, function (t, r) {
          if (r) return r = $t(t, e), Bt.test(r) ? E(t).position()[e] + "px" : r;
        });
      }), E.each({
        Height: "height",
        Width: "width"
      }, function (t, e) {
        E.each({
          padding: "inner" + t,
          content: e,
          "": "outer" + t
        }, function (r, o) {
          E.fn[o] = function (n, i) {
            var a = arguments.length && (r || "boolean" != typeof n),
                l = r || (!0 === n || !0 === i ? "margin" : "border");
            return Q(this, function (e, r, n) {
              var i;
              return v(e) ? 0 === o.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === n ? E.css(e, r, l) : E.style(e, r, n, l);
            }, e, a ? n : void 0, a);
          };
        });
      }), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        E.fn[e] = function (t) {
          return this.on(e, t);
        };
      }), E.fn.extend({
        bind: function bind(t, e, r) {
          return this.on(t, null, e, r);
        },
        unbind: function unbind(t, e) {
          return this.off(t, null, e);
        },
        delegate: function delegate(t, e, r, o) {
          return this.on(e, t, r, o);
        },
        undelegate: function undelegate(t, e, r) {
          return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", r);
        },
        hover: function hover(t, e) {
          return this.mouseenter(t).mouseleave(e || t);
        }
      }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        E.fn[e] = function (t, r) {
          return arguments.length > 0 ? this.on(e, null, t, r) : this.trigger(e);
        };
      });
      var Ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      E.proxy = function (t, e) {
        var r, o, n;
        if ("string" == typeof e && (r = t[e], e = t, t = r), x(t)) return o = s.call(arguments, 2), (n = function n() {
          return t.apply(e || this, o.concat(s.call(arguments)));
        }).guid = t.guid = t.guid || E.guid++, n;
      }, E.holdReady = function (t) {
        t ? E.readyWait++ : E.ready(!0);
      }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = A, E.isFunction = x, E.isWindow = v, E.camelCase = Y, E.type = _, E.now = Date.now, E.isNumeric = function (t) {
        var e = E.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
      }, E.trim = function (t) {
        return null == t ? "" : (t + "").replace(Ge, "");
      }, void 0 === (r = function () {
        return E;
      }.apply(e, [])) || (t.exports = r);
      var Je = n.jQuery,
          Ze = n.$;
      return E.noConflict = function (t) {
        return n.$ === E && (n.$ = Ze), t && n.jQuery === E && (n.jQuery = Je), E;
      }, void 0 === i && (n.jQuery = n.$ = E), E;
    });
  }).call(this, r(12)(t));
}, function (t, e, r) {
  "use strict";

  r.r(e), function (t) {
    /**!
     * @fileOverview Kickass library to create and place poppers near their reference elements.
     * @version 1.16.1
     * @license
     * Copyright (c) 2016 Federico Zivolo and contributors
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     */
    var r = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        o = function () {
      for (var t = ["Edge", "Trident", "Firefox"], e = 0; e < t.length; e += 1) {
        if (r && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
      }

      return 0;
    }();

    var n = r && window.Promise ? function (t) {
      var e = !1;
      return function () {
        e || (e = !0, window.Promise.resolve().then(function () {
          e = !1, t();
        }));
      };
    } : function (t) {
      var e = !1;
      return function () {
        e || (e = !0, setTimeout(function () {
          e = !1, t();
        }, o));
      };
    };

    function i(t) {
      return t && "[object Function]" === {}.toString.call(t);
    }

    function a(t, e) {
      if (1 !== t.nodeType) return [];
      var r = t.ownerDocument.defaultView.getComputedStyle(t, null);
      return e ? r[e] : r;
    }

    function l(t) {
      return "HTML" === t.nodeName ? t : t.parentNode || t.host;
    }

    function s(t) {
      if (!t) return document.body;

      switch (t.nodeName) {
        case "HTML":
        case "BODY":
          return t.ownerDocument.body;

        case "#document":
          return t.body;
      }

      var e = a(t),
          r = e.overflow,
          o = e.overflowX,
          n = e.overflowY;
      return /(auto|scroll|overlay)/.test(r + n + o) ? t : s(l(t));
    }

    function d(t) {
      return t && t.referenceNode ? t.referenceNode : t;
    }

    var c = r && !(!window.MSInputMethodContext || !document.documentMode),
        m = r && /MSIE 10/.test(navigator.userAgent);

    function p(t) {
      return 11 === t ? c : 10 === t ? m : c || m;
    }

    function f(t) {
      if (!t) return document.documentElement;

      for (var e = p(10) ? document.body : null, r = t.offsetParent || null; r === e && t.nextElementSibling;) {
        r = (t = t.nextElementSibling).offsetParent;
      }

      var o = r && r.nodeName;
      return o && "BODY" !== o && "HTML" !== o ? -1 !== ["TH", "TD", "TABLE"].indexOf(r.nodeName) && "static" === a(r, "position") ? f(r) : r : t ? t.ownerDocument.documentElement : document.documentElement;
    }

    function u(t) {
      return null !== t.parentNode ? u(t.parentNode) : t;
    }

    function g(t, e) {
      if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
      var r = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
          o = r ? t : e,
          n = r ? e : t,
          i = document.createRange();
      i.setStart(o, 0), i.setEnd(n, 0);
      var a,
          l,
          s = i.commonAncestorContainer;
      if (t !== s && e !== s || o.contains(n)) return "BODY" === (l = (a = s).nodeName) || "HTML" !== l && f(a.firstElementChild) !== a ? f(s) : s;
      var d = u(t);
      return d.host ? g(d.host, e) : g(t, u(e).host);
    }

    function h(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
          r = "top" === e ? "scrollTop" : "scrollLeft",
          o = t.nodeName;

      if ("BODY" === o || "HTML" === o) {
        var n = t.ownerDocument.documentElement,
            i = t.ownerDocument.scrollingElement || n;
        return i[r];
      }

      return t[r];
    }

    function b(t, e) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o = h(e, "top"),
          n = h(e, "left"),
          i = r ? -1 : 1;
      return t.top += o * i, t.bottom += o * i, t.left += n * i, t.right += n * i, t;
    }

    function x(t, e) {
      var r = "x" === e ? "Left" : "Top",
          o = "Left" === r ? "Right" : "Bottom";
      return parseFloat(t["border" + r + "Width"]) + parseFloat(t["border" + o + "Width"]);
    }

    function v(t, e, r, o) {
      return Math.max(e["offset" + t], e["scroll" + t], r["client" + t], r["offset" + t], r["scroll" + t], p(10) ? parseInt(r["offset" + t]) + parseInt(o["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(o["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0);
    }

    function y(t) {
      var e = t.body,
          r = t.documentElement,
          o = p(10) && getComputedStyle(r);
      return {
        height: v("Height", e, r, o),
        width: v("Width", e, r, o)
      };
    }

    var w = function w(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    },
        k = function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var o = e[r];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      return function (e, r, o) {
        return r && t(e.prototype, r), o && t(e, o), e;
      };
    }(),
        _ = function _(t, e, r) {
      return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = r, t;
    },
        E = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];

        for (var o in r) {
          Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
      }

      return t;
    };

    function T(t) {
      return E({}, t, {
        right: t.left + t.width,
        bottom: t.top + t.height
      });
    }

    function C(t) {
      var e = {};

      try {
        if (p(10)) {
          e = t.getBoundingClientRect();
          var r = h(t, "top"),
              o = h(t, "left");
          e.top += r, e.left += o, e.bottom += r, e.right += o;
        } else e = t.getBoundingClientRect();
      } catch (t) {}

      var n = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top
      },
          i = "HTML" === t.nodeName ? y(t.ownerDocument) : {},
          l = i.width || t.clientWidth || n.width,
          s = i.height || t.clientHeight || n.height,
          d = t.offsetWidth - l,
          c = t.offsetHeight - s;

      if (d || c) {
        var m = a(t);
        d -= x(m, "x"), c -= x(m, "y"), n.width -= d, n.height -= c;
      }

      return T(n);
    }

    function S(t, e) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o = p(10),
          n = "HTML" === e.nodeName,
          i = C(t),
          l = C(e),
          d = s(t),
          c = a(e),
          m = parseFloat(c.borderTopWidth),
          f = parseFloat(c.borderLeftWidth);
      r && n && (l.top = Math.max(l.top, 0), l.left = Math.max(l.left, 0));
      var u = T({
        top: i.top - l.top - m,
        left: i.left - l.left - f,
        width: i.width,
        height: i.height
      });

      if (u.marginTop = 0, u.marginLeft = 0, !o && n) {
        var g = parseFloat(c.marginTop),
            h = parseFloat(c.marginLeft);
        u.top -= m - g, u.bottom -= m - g, u.left -= f - h, u.right -= f - h, u.marginTop = g, u.marginLeft = h;
      }

      return (o && !r ? e.contains(d) : e === d && "BODY" !== d.nodeName) && (u = b(u, e)), u;
    }

    function j(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = t.ownerDocument.documentElement,
          o = S(t, r),
          n = Math.max(r.clientWidth, window.innerWidth || 0),
          i = Math.max(r.clientHeight, window.innerHeight || 0),
          a = e ? 0 : h(r),
          l = e ? 0 : h(r, "left"),
          s = {
        top: a - o.top + o.marginTop,
        left: l - o.left + o.marginLeft,
        width: n,
        height: i
      };
      return T(s);
    }

    function D(t) {
      var e = t.nodeName;
      if ("BODY" === e || "HTML" === e) return !1;
      if ("fixed" === a(t, "position")) return !0;
      var r = l(t);
      return !!r && D(r);
    }

    function A(t) {
      if (!t || !t.parentElement || p()) return document.documentElement;

      for (var e = t.parentElement; e && "none" === a(e, "transform");) {
        e = e.parentElement;
      }

      return e || document.documentElement;
    }

    function N(t, e, r, o) {
      var n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          i = {
        top: 0,
        left: 0
      },
          a = n ? A(t) : g(t, d(e));
      if ("viewport" === o) i = j(a, n);else {
        var c = void 0;
        "scrollParent" === o ? "BODY" === (c = s(l(e))).nodeName && (c = t.ownerDocument.documentElement) : c = "window" === o ? t.ownerDocument.documentElement : o;
        var m = S(c, a, n);
        if ("HTML" !== c.nodeName || D(a)) i = m;else {
          var p = y(t.ownerDocument),
              f = p.height,
              u = p.width;
          i.top += m.top - m.marginTop, i.bottom = f + m.top, i.left += m.left - m.marginLeft, i.right = u + m.left;
        }
      }
      var h = "number" == typeof (r = r || 0);
      return i.left += h ? r : r.left || 0, i.top += h ? r : r.top || 0, i.right -= h ? r : r.right || 0, i.bottom -= h ? r : r.bottom || 0, i;
    }

    function L(t) {
      return t.width * t.height;
    }

    function O(t, e, r, o, n) {
      var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === t.indexOf("auto")) return t;
      var a = N(r, o, i, n),
          l = {
        top: {
          width: a.width,
          height: e.top - a.top
        },
        right: {
          width: a.right - e.right,
          height: a.height
        },
        bottom: {
          width: a.width,
          height: a.bottom - e.bottom
        },
        left: {
          width: e.left - a.left,
          height: a.height
        }
      },
          s = Object.keys(l).map(function (t) {
        return E({
          key: t
        }, l[t], {
          area: L(l[t])
        });
      }).sort(function (t, e) {
        return e.area - t.area;
      }),
          d = s.filter(function (t) {
        var e = t.width,
            o = t.height;
        return e >= r.clientWidth && o >= r.clientHeight;
      }),
          c = d.length > 0 ? d[0].key : s[0].key,
          m = t.split("-")[1];
      return c + (m ? "-" + m : "");
    }

    function I(t, e, r) {
      var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          n = o ? A(e) : g(e, d(r));
      return S(r, n, o);
    }

    function z(t) {
      var e = t.ownerDocument.defaultView.getComputedStyle(t),
          r = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
          o = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
      return {
        width: t.offsetWidth + o,
        height: t.offsetHeight + r
      };
    }

    function M(t) {
      var e = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      return t.replace(/left|right|bottom|top/g, function (t) {
        return e[t];
      });
    }

    function q(t, e, r) {
      r = r.split("-")[0];
      var o = z(t),
          n = {
        width: o.width,
        height: o.height
      },
          i = -1 !== ["right", "left"].indexOf(r),
          a = i ? "top" : "left",
          l = i ? "left" : "top",
          s = i ? "height" : "width",
          d = i ? "width" : "height";
      return n[a] = e[a] + e[s] / 2 - o[s] / 2, n[l] = r === l ? e[l] - o[d] : e[M(l)], n;
    }

    function P(t, e) {
      return Array.prototype.find ? t.find(e) : t.filter(e)[0];
    }

    function H(t, e, r) {
      return (void 0 === r ? t : t.slice(0, function (t, e, r) {
        if (Array.prototype.findIndex) return t.findIndex(function (t) {
          return t[e] === r;
        });
        var o = P(t, function (t) {
          return t[e] === r;
        });
        return t.indexOf(o);
      }(t, "name", r))).forEach(function (t) {
        t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var r = t["function"] || t.fn;
        t.enabled && i(r) && (e.offsets.popper = T(e.offsets.popper), e.offsets.reference = T(e.offsets.reference), e = r(e, t));
      }), e;
    }

    function R() {
      if (!this.state.isDestroyed) {
        var t = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: !1,
          offsets: {}
        };
        t.offsets.reference = I(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = O(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = q(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = H(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t));
      }
    }

    function F(t, e) {
      return t.some(function (t) {
        var r = t.name;
        return t.enabled && r === e;
      });
    }

    function B(t) {
      for (var e = [!1, "ms", "Webkit", "Moz", "O"], r = t.charAt(0).toUpperCase() + t.slice(1), o = 0; o < e.length; o++) {
        var n = e[o],
            i = n ? "" + n + r : t;
        if (void 0 !== document.body.style[i]) return i;
      }

      return null;
    }

    function W() {
      return this.state.isDestroyed = !0, F(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[B("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
    }

    function U(t) {
      var e = t.ownerDocument;
      return e ? e.defaultView : window;
    }

    function Q(t, e, r, o) {
      r.updateBound = o, U(t).addEventListener("resize", r.updateBound, {
        passive: !0
      });
      var n = s(t);
      return function t(e, r, o, n) {
        var i = "BODY" === e.nodeName,
            a = i ? e.ownerDocument.defaultView : e;
        a.addEventListener(r, o, {
          passive: !0
        }), i || t(s(a.parentNode), r, o, n), n.push(a);
      }(n, "scroll", r.updateBound, r.scrollParents), r.scrollElement = n, r.eventsEnabled = !0, r;
    }

    function $() {
      this.state.eventsEnabled || (this.state = Q(this.reference, this.options, this.state, this.scheduleUpdate));
    }

    function X() {
      var t, e;
      this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, U(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
        t.removeEventListener("scroll", e.updateBound);
      }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e));
    }

    function V(t) {
      return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
    }

    function Y(t, e) {
      Object.keys(e).forEach(function (r) {
        var o = "";
        -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(r) && V(e[r]) && (o = "px"), t.style[r] = e[r] + o;
      });
    }

    var K = r && /Firefox/i.test(navigator.userAgent);

    function G(t, e, r) {
      var o = P(t, function (t) {
        return t.name === e;
      }),
          n = !!o && t.some(function (t) {
        return t.name === r && t.enabled && t.order < o.order;
      });

      if (!n) {
        var i = "`" + e + "`",
            a = "`" + r + "`";
        console.warn(a + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!");
      }

      return n;
    }

    var J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Z = J.slice(3);

    function tt(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = Z.indexOf(t),
          o = Z.slice(r + 1).concat(Z.slice(0, r));
      return e ? o.reverse() : o;
    }

    var et = "flip",
        rt = "clockwise",
        ot = "counterclockwise";

    function nt(t, e, r, o) {
      var n = [0, 0],
          i = -1 !== ["right", "left"].indexOf(o),
          a = t.split(/(\+|\-)/).map(function (t) {
        return t.trim();
      }),
          l = a.indexOf(P(a, function (t) {
        return -1 !== t.search(/,|\s/);
      }));
      a[l] && -1 === a[l].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
      var s = /\s*,\s*|\s+/,
          d = -1 !== l ? [a.slice(0, l).concat([a[l].split(s)[0]]), [a[l].split(s)[1]].concat(a.slice(l + 1))] : [a];
      return (d = d.map(function (t, o) {
        var n = (1 === o ? !i : i) ? "height" : "width",
            a = !1;
        return t.reduce(function (t, e) {
          return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e);
        }, []).map(function (t) {
          return function (t, e, r, o) {
            var n = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                i = +n[1],
                a = n[2];
            if (!i) return t;

            if (0 === a.indexOf("%")) {
              var l = void 0;

              switch (a) {
                case "%p":
                  l = r;
                  break;

                case "%":
                case "%r":
                default:
                  l = o;
              }

              return T(l)[e] / 100 * i;
            }

            if ("vh" === a || "vw" === a) {
              return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i;
            }

            return i;
          }(t, n, e, r);
        });
      })).forEach(function (t, e) {
        t.forEach(function (r, o) {
          V(r) && (n[e] += r * ("-" === t[o - 1] ? -1 : 1));
        });
      }), n;
    }

    var it = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function onCreate() {},
      onUpdate: function onUpdate() {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function fn(t) {
            var e = t.placement,
                r = e.split("-")[0],
                o = e.split("-")[1];

            if (o) {
              var n = t.offsets,
                  i = n.reference,
                  a = n.popper,
                  l = -1 !== ["bottom", "top"].indexOf(r),
                  s = l ? "left" : "top",
                  d = l ? "width" : "height",
                  c = {
                start: _({}, s, i[s]),
                end: _({}, s, i[s] + i[d] - a[d])
              };
              t.offsets.popper = E({}, a, c[o]);
            }

            return t;
          }
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function fn(t, e) {
            var r = e.offset,
                o = t.placement,
                n = t.offsets,
                i = n.popper,
                a = n.reference,
                l = o.split("-")[0],
                s = void 0;
            return s = V(+r) ? [+r, 0] : nt(r, i, a, l), "left" === l ? (i.top += s[0], i.left -= s[1]) : "right" === l ? (i.top += s[0], i.left += s[1]) : "top" === l ? (i.left += s[0], i.top -= s[1]) : "bottom" === l && (i.left += s[0], i.top += s[1]), t.popper = i, t;
          },
          offset: 0
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function fn(t, e) {
            var r = e.boundariesElement || f(t.instance.popper);
            t.instance.reference === r && (r = f(r));
            var o = B("transform"),
                n = t.instance.popper.style,
                i = n.top,
                a = n.left,
                l = n[o];
            n.top = "", n.left = "", n[o] = "";
            var s = N(t.instance.popper, t.instance.reference, e.padding, r, t.positionFixed);
            n.top = i, n.left = a, n[o] = l, e.boundaries = s;
            var d = e.priority,
                c = t.offsets.popper,
                m = {
              primary: function primary(t) {
                var r = c[t];
                return c[t] < s[t] && !e.escapeWithReference && (r = Math.max(c[t], s[t])), _({}, t, r);
              },
              secondary: function secondary(t) {
                var r = "right" === t ? "left" : "top",
                    o = c[r];
                return c[t] > s[t] && !e.escapeWithReference && (o = Math.min(c[r], s[t] - ("right" === t ? c.width : c.height))), _({}, r, o);
              }
            };
            return d.forEach(function (t) {
              var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
              c = E({}, c, m[e](t));
            }), t.offsets.popper = c, t;
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent"
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function fn(t) {
            var e = t.offsets,
                r = e.popper,
                o = e.reference,
                n = t.placement.split("-")[0],
                i = Math.floor,
                a = -1 !== ["top", "bottom"].indexOf(n),
                l = a ? "right" : "bottom",
                s = a ? "left" : "top",
                d = a ? "width" : "height";
            return r[l] < i(o[s]) && (t.offsets.popper[s] = i(o[s]) - r[d]), r[s] > i(o[l]) && (t.offsets.popper[s] = i(o[l])), t;
          }
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function fn(t, e) {
            var r;
            if (!G(t.instance.modifiers, "arrow", "keepTogether")) return t;
            var o = e.element;

            if ("string" == typeof o) {
              if (!(o = t.instance.popper.querySelector(o))) return t;
            } else if (!t.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;

            var n = t.placement.split("-")[0],
                i = t.offsets,
                l = i.popper,
                s = i.reference,
                d = -1 !== ["left", "right"].indexOf(n),
                c = d ? "height" : "width",
                m = d ? "Top" : "Left",
                p = m.toLowerCase(),
                f = d ? "left" : "top",
                u = d ? "bottom" : "right",
                g = z(o)[c];
            s[u] - g < l[p] && (t.offsets.popper[p] -= l[p] - (s[u] - g)), s[p] + g > l[u] && (t.offsets.popper[p] += s[p] + g - l[u]), t.offsets.popper = T(t.offsets.popper);
            var h = s[p] + s[c] / 2 - g / 2,
                b = a(t.instance.popper),
                x = parseFloat(b["margin" + m]),
                v = parseFloat(b["border" + m + "Width"]),
                y = h - t.offsets.popper[p] - x - v;
            return y = Math.max(Math.min(l[c] - g, y), 0), t.arrowElement = o, t.offsets.arrow = (_(r = {}, p, Math.round(y)), _(r, f, ""), r), t;
          },
          element: "[x-arrow]"
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function fn(t, e) {
            if (F(t.instance.modifiers, "inner")) return t;
            if (t.flipped && t.placement === t.originalPlacement) return t;
            var r = N(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                o = t.placement.split("-")[0],
                n = M(o),
                i = t.placement.split("-")[1] || "",
                a = [];

            switch (e.behavior) {
              case et:
                a = [o, n];
                break;

              case rt:
                a = tt(o);
                break;

              case ot:
                a = tt(o, !0);
                break;

              default:
                a = e.behavior;
            }

            return a.forEach(function (l, s) {
              if (o !== l || a.length === s + 1) return t;
              o = t.placement.split("-")[0], n = M(o);
              var d = t.offsets.popper,
                  c = t.offsets.reference,
                  m = Math.floor,
                  p = "left" === o && m(d.right) > m(c.left) || "right" === o && m(d.left) < m(c.right) || "top" === o && m(d.bottom) > m(c.top) || "bottom" === o && m(d.top) < m(c.bottom),
                  f = m(d.left) < m(r.left),
                  u = m(d.right) > m(r.right),
                  g = m(d.top) < m(r.top),
                  h = m(d.bottom) > m(r.bottom),
                  b = "left" === o && f || "right" === o && u || "top" === o && g || "bottom" === o && h,
                  x = -1 !== ["top", "bottom"].indexOf(o),
                  v = !!e.flipVariations && (x && "start" === i && f || x && "end" === i && u || !x && "start" === i && g || !x && "end" === i && h),
                  y = !!e.flipVariationsByContent && (x && "start" === i && u || x && "end" === i && f || !x && "start" === i && h || !x && "end" === i && g),
                  w = v || y;
              (p || b || w) && (t.flipped = !0, (p || b) && (o = a[s + 1]), w && (i = function (t) {
                return "end" === t ? "start" : "start" === t ? "end" : t;
              }(i)), t.placement = o + (i ? "-" + i : ""), t.offsets.popper = E({}, t.offsets.popper, q(t.instance.popper, t.offsets.reference, t.placement)), t = H(t.instance.modifiers, t, "flip"));
            }), t;
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
          flipVariations: !1,
          flipVariationsByContent: !1
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function fn(t) {
            var e = t.placement,
                r = e.split("-")[0],
                o = t.offsets,
                n = o.popper,
                i = o.reference,
                a = -1 !== ["left", "right"].indexOf(r),
                l = -1 === ["top", "left"].indexOf(r);
            return n[a ? "left" : "top"] = i[r] - (l ? n[a ? "width" : "height"] : 0), t.placement = M(e), t.offsets.popper = T(n), t;
          }
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function fn(t) {
            if (!G(t.instance.modifiers, "hide", "preventOverflow")) return t;
            var e = t.offsets.reference,
                r = P(t.instance.modifiers, function (t) {
              return "preventOverflow" === t.name;
            }).boundaries;

            if (e.bottom < r.top || e.left > r.right || e.top > r.bottom || e.right < r.left) {
              if (!0 === t.hide) return t;
              t.hide = !0, t.attributes["x-out-of-boundaries"] = "";
            } else {
              if (!1 === t.hide) return t;
              t.hide = !1, t.attributes["x-out-of-boundaries"] = !1;
            }

            return t;
          }
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function fn(t, e) {
            var r = e.x,
                o = e.y,
                n = t.offsets.popper,
                i = P(t.instance.modifiers, function (t) {
              return "applyStyle" === t.name;
            }).gpuAcceleration;
            void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");

            var a = void 0 !== i ? i : e.gpuAcceleration,
                l = f(t.instance.popper),
                s = C(l),
                d = {
              position: n.position
            },
                c = function (t, e) {
              var r = t.offsets,
                  o = r.popper,
                  n = r.reference,
                  i = Math.round,
                  a = Math.floor,
                  l = function l(t) {
                return t;
              },
                  s = i(n.width),
                  d = i(o.width),
                  c = -1 !== ["left", "right"].indexOf(t.placement),
                  m = -1 !== t.placement.indexOf("-"),
                  p = e ? c || m || s % 2 == d % 2 ? i : a : l,
                  f = e ? i : l;

              return {
                left: p(s % 2 == 1 && d % 2 == 1 && !m && e ? o.left - 1 : o.left),
                top: f(o.top),
                bottom: f(o.bottom),
                right: p(o.right)
              };
            }(t, window.devicePixelRatio < 2 || !K),
                m = "bottom" === r ? "top" : "bottom",
                p = "right" === o ? "left" : "right",
                u = B("transform"),
                g = void 0,
                h = void 0;

            if (h = "bottom" === m ? "HTML" === l.nodeName ? -l.clientHeight + c.bottom : -s.height + c.bottom : c.top, g = "right" === p ? "HTML" === l.nodeName ? -l.clientWidth + c.right : -s.width + c.right : c.left, a && u) d[u] = "translate3d(" + g + "px, " + h + "px, 0)", d[m] = 0, d[p] = 0, d.willChange = "transform";else {
              var b = "bottom" === m ? -1 : 1,
                  x = "right" === p ? -1 : 1;
              d[m] = h * b, d[p] = g * x, d.willChange = m + ", " + p;
            }
            var v = {
              "x-placement": t.placement
            };
            return t.attributes = E({}, v, t.attributes), t.styles = E({}, d, t.styles), t.arrowStyles = E({}, t.offsets.arrow, t.arrowStyles), t;
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right"
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function fn(t) {
            var e, r;
            return Y(t.instance.popper, t.styles), e = t.instance.popper, r = t.attributes, Object.keys(r).forEach(function (t) {
              !1 !== r[t] ? e.setAttribute(t, r[t]) : e.removeAttribute(t);
            }), t.arrowElement && Object.keys(t.arrowStyles).length && Y(t.arrowElement, t.arrowStyles), t;
          },
          onLoad: function onLoad(t, e, r, o, n) {
            var i = I(n, e, t, r.positionFixed),
                a = O(r.placement, i, e, t, r.modifiers.flip.boundariesElement, r.modifiers.flip.padding);
            return e.setAttribute("x-placement", a), Y(e, {
              position: r.positionFixed ? "fixed" : "absolute"
            }), r;
          },
          gpuAcceleration: void 0
        }
      }
    },
        at = function () {
      function t(e, r) {
        var o = this,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        w(this, t), this.scheduleUpdate = function () {
          return requestAnimationFrame(o.update);
        }, this.update = n(this.update.bind(this)), this.options = E({}, t.Defaults, a), this.state = {
          isDestroyed: !1,
          isCreated: !1,
          scrollParents: []
        }, this.reference = e && e.jquery ? e[0] : e, this.popper = r && r.jquery ? r[0] : r, this.options.modifiers = {}, Object.keys(E({}, t.Defaults.modifiers, a.modifiers)).forEach(function (e) {
          o.options.modifiers[e] = E({}, t.Defaults.modifiers[e] || {}, a.modifiers ? a.modifiers[e] : {});
        }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
          return E({
            name: t
          }, o.options.modifiers[t]);
        }).sort(function (t, e) {
          return t.order - e.order;
        }), this.modifiers.forEach(function (t) {
          t.enabled && i(t.onLoad) && t.onLoad(o.reference, o.popper, o.options, t, o.state);
        }), this.update();
        var l = this.options.eventsEnabled;
        l && this.enableEventListeners(), this.state.eventsEnabled = l;
      }

      return k(t, [{
        key: "update",
        value: function value() {
          return R.call(this);
        }
      }, {
        key: "destroy",
        value: function value() {
          return W.call(this);
        }
      }, {
        key: "enableEventListeners",
        value: function value() {
          return $.call(this);
        }
      }, {
        key: "disableEventListeners",
        value: function value() {
          return X.call(this);
        }
      }]), t;
    }();

    at.Utils = ("undefined" != typeof window ? window : t).PopperUtils, at.placements = J, at.Defaults = it, e["default"] = at;
  }.call(this, r(3));
}, function (t, e) {
  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }

  var o;

  o = function () {
    return this;
  }();

  try {
    o = o || new Function("return this")();
  } catch (t) {
    "object" === ("undefined" == typeof window ? "undefined" : r(window)) && (o = window);
  }

  t.exports = o;
}, function (t, e, r) {
  "use strict";

  var o,
      n = function n() {
    return void 0 === o && (o = Boolean(window && document && document.all && !window.atob)), o;
  },
      i = function () {
    var t = {};
    return function (e) {
      if (void 0 === t[e]) {
        var r = document.querySelector(e);
        if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
          r = r.contentDocument.head;
        } catch (t) {
          r = null;
        }
        t[e] = r;
      }

      return t[e];
    };
  }(),
      a = [];

  function l(t) {
    for (var e = -1, r = 0; r < a.length; r++) {
      if (a[r].identifier === t) {
        e = r;
        break;
      }
    }

    return e;
  }

  function s(t, e) {
    for (var r = {}, o = [], n = 0; n < t.length; n++) {
      var i = t[n],
          s = e.base ? i[0] + e.base : i[0],
          d = r[s] || 0,
          c = "".concat(s, " ").concat(d);
      r[s] = d + 1;
      var m = l(c),
          p = {
        css: i[1],
        media: i[2],
        sourceMap: i[3]
      };
      -1 !== m ? (a[m].references++, a[m].updater(p)) : a.push({
        identifier: c,
        updater: h(p, e),
        references: 1
      }), o.push(c);
    }

    return o;
  }

  function d(t) {
    var e = document.createElement("style"),
        o = t.attributes || {};

    if (void 0 === o.nonce) {
      var n = r.nc;
      n && (o.nonce = n);
    }

    if (Object.keys(o).forEach(function (t) {
      e.setAttribute(t, o[t]);
    }), "function" == typeof t.insert) t.insert(e);else {
      var a = i(t.insert || "head");
      if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
      a.appendChild(e);
    }
    return e;
  }

  var c,
      m = (c = [], function (t, e) {
    return c[t] = e, c.filter(Boolean).join("\n");
  });

  function p(t, e, r, o) {
    var n = r ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
    if (t.styleSheet) t.styleSheet.cssText = m(e, n);else {
      var i = document.createTextNode(n),
          a = t.childNodes;
      a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
    }
  }

  function f(t, e, r) {
    var o = r.css,
        n = r.media,
        i = r.sourceMap;
    if (n ? t.setAttribute("media", n) : t.removeAttribute("media"), i && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleSheet) t.styleSheet.cssText = o;else {
      for (; t.firstChild;) {
        t.removeChild(t.firstChild);
      }

      t.appendChild(document.createTextNode(o));
    }
  }

  var u = null,
      g = 0;

  function h(t, e) {
    var r, o, n;

    if (e.singleton) {
      var i = g++;
      r = u || (u = d(e)), o = p.bind(null, r, i, !1), n = p.bind(null, r, i, !0);
    } else r = d(e), o = f.bind(null, r, e), n = function n() {
      !function (t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
      }(r);
    };

    return o(t), function (e) {
      if (e) {
        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
        o(t = e);
      } else n();
    };
  }

  t.exports = function (t, e) {
    (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = n());
    var r = s(t = t || [], e);
    return function (t) {
      if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
        for (var o = 0; o < r.length; o++) {
          var n = l(r[o]);
          a[n].references--;
        }

        for (var i = s(t, e), d = 0; d < r.length; d++) {
          var c = l(r[d]);
          0 === a[c].references && (a[c].updater(), a.splice(c, 1));
        }

        r = i;
      }
    };
  };
}, function (t, e, r) {
  "use strict";

  var o = r(0),
      n = r.n(o)()(!1);
  n.push([t.i, '.left {\r\n\tposition: relative;\r\n\twidth: 70%;\r\n\tbackground-color: white;\r\n\ttransition: 0.2s ease-in;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n.left .top-section {\r\n\tdisplay: grid !important;\r\n\tplace-items: center;\r\n\tgrid-template-columns: repeat(3, 1fr);\r\n\tgrid-template-areas: "ket-guru judul-program tanggal";\r\n\twidth: 100%;\r\n\tbackground: var(--blue-gradient-reverse);\r\n}\r\n\r\n.left .ket-guru {\r\n\tgrid-area: ket-guru;\r\n}\r\n.left .col:nth-child(2) {\r\n\tgrid-area: judul-program;\r\n}\r\n.left .col:nth-child(3) {\r\n\tgrid-area: tanggal;\r\n}\r\n\r\n.left img {\r\n\twidth: 50px;\r\n\theight: 50px;\r\n\tborder-radius: 50%;\r\n\tmargin-right: 10px;\r\n\tfilter: drop-shadow(1px 1px 5px #7070707c);\r\n}\r\n\r\n.left .ket-guru p {\r\n\tfont-size: 13px;\r\n}\r\n\r\n.left .top-section p.date {\r\n\tfont-size: 13px;\r\n}\r\n\r\n.left .top-section h1 {\r\n\tfont-weight: 600;\r\n\tfont-size: 24px;\r\n}\r\n', ""]), e.a = n;
}, function (t, e, r) {
  "use strict";

  var o = r(0),
      n = r.n(o)()(!1);
  n.push([t.i, ".right {\r\n\twidth: 30%;\r\n\tbackground: var(--blue-gradient);\r\n\tpadding: 20px;\r\n\ttransition: 0.2s ease-in;\r\n\toverflow: auto;\r\n}\r\n\r\n.right .siswa-pada-kelas {\r\n\tbackground-color: white;\r\n\theight: 45px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin-bottom: 30px;\r\n\tfont-weight: 600;\r\n\tborder-radius: 7px;\r\n\tbox-shadow: 1px 1px 5px #3b3b3b7c;\r\n\ttext-transform: uppercase;\r\n\ttransition: 0.2s ease-in-out;\r\n}\r\n.right .siswa-pada-kelas span {\r\n\tmargin-left: 5px;\r\n}\r\n\r\n.right button span {\r\n\tposition: absolute;\r\n\tdisplay: grid;\r\n\tplace-content: center;\r\n\tcolor: white;\r\n}\r\n.right button span.absen {\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 40px;\r\n\theight: 100%;\r\n\tbackground-color: #383838;\r\n\tfont-weight: 500;\r\n\tborder-radius: 7px;\r\n}\r\n\r\n.right button input {\r\n\tdisplay: none;\r\n\tborder: none;\r\n\toutline: none;\r\n\tfont-weight: 500;\r\n\tcolor: var(--default-black-color);\r\n\twidth: 100%;\r\n\ttransform: translateX(-2px);\r\n\tletter-spacing: 1px;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.right button input.active {\r\n\tdisplay: unset;\r\n}\r\n\r\n.right button span.method {\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tborder-radius: 50%;\r\n\tfont-size: 13px;\r\n\tfont-weight: 700;\r\n\ttransform: translate(-50%, 150%);\r\n\tbox-shadow: 1px 1px 5px #3b3b3b7c;\r\n\ttransition: 0.2s ease-in-out;\r\n\tcolor: #222222;\r\n}\r\n\r\n.right button span.method.active {\r\n\ttransform: translate(-50%, 0);\r\n}\r\n\r\n.right button span.fitur {\r\n\twidth: 25px;\r\n\theight: 25px;\r\n\tborder-radius: 50%;\r\n\tfont-size: 13px;\r\n\tfont-weight: 700;\r\n\ttransform: translate(-50%, 150%);\r\n\tbox-shadow: 1px 1px 5px #3b3b3b7c;\r\n\ttransition: 0.2s ease-in-out;\r\n\tcolor: #222222;\r\n}\r\n\r\n.right button span.fitur.active {\r\n\ttransform: translate(-50%, 0);\r\n}\r\n\r\n.right button span.siswa-hapus {\r\n\tbackground-color: #fa4f4f;\r\n\tleft: 45%;\r\n}\r\n\r\n.right button span.siswa-rename {\r\n\tbackground-color: orange;\r\n\tleft: 55%;\r\n}\r\n\r\n.right button span.method.sakit {\r\n\tbackground-color: #fce566;\r\n\tleft: 50%;\r\n\ttransition-delay: 0.1s;\r\n}\r\n.right button span.method.izin {\r\n\tbackground-color: #469e2f;\r\n\tleft: 40%;\r\n\ttransition-delay: 0.05s;\r\n}\r\n.right button span.method.bolos {\r\n\tbackground-color: #fa4f4f;\r\n\tleft: 60%;\r\n\ttransition-delay: 0.15s;\r\n}\r\n\r\n.right button.siswa {\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 40px;\r\n\tborder: none;\r\n\tmargin-bottom: 6px;\r\n\tpadding: 2px;\r\n\tfont-weight: 500;\r\n\tbackground-color: white;\r\n\tcolor: var(--default-black-color);\r\n\tletter-spacing: 1px;\r\n\tborder-radius: 7px;\r\n\toverflow: hidden;\r\n\ttext-transform: uppercase;\r\n\tbox-shadow: 1px 1px 5px #3b3b3b7c;\r\n\ttext-align: left;\r\n\tpadding-left: 50px;\r\n\toverflow: hidden;\r\n\ttransition: 0.2s ease-in-out;\r\n}\r\n.right button.siswa.active {\r\n\tbackground-color: #464646c0 !important;\r\n}\r\n.right button.siswa.siswa-izin {\r\n\tbackground-color: #459e2fab;\r\n}\r\n.right button.siswa.siswa-sakit {\r\n\tbackground-color: #fce566b9;\r\n}\r\n.right button.siswa.siswa-bolos {\r\n\tbackground-color: #fa4f4fb9;\r\n}\r\n", ""]), e.a = n;
}, function (t, e, r) {
  "use strict";

  var o = r(0),
      n = r.n(o)()(!1);
  n.push([t.i, ".onDarkMode {\r\n\tbackground-color: #0b1d27 !important;\r\n}\r\n\r\n.onDarkMode .container-fluid {\r\n\tbackground-color: #0b1d27 !important;\r\n\tbox-shadow: 2px 1px 10px #0a5ebe;\r\n}\r\n\r\n.onDarkMode .left {\r\n\tbackground-color: #0b1d27 !important;\r\n}\r\n\r\n.onDarkMode .siswa-pada-kelas {\r\n\tbackground-color: #0b1d27 !important;\r\n\tcolor: white;\r\n}\r\n\r\n.onDarkMode button.siswa {\r\n\tbackground-color: #0b1d27;\r\n\tcolor: white;\r\n}\r\n\r\n.onDarkMode button.siswa.active {\r\n\tbackground-color: #162636ef !important;\r\n}\r\n\r\n.onDarkMode .right button input {\r\n\tcolor: white;\r\n}\r\n\r\n.onDarkMode button span.absen {\r\n\tbackground-color: #192c3b !important;\r\n}\r\n\r\n.onDarkMode .burger span {\r\n\tbackground-color: #0b1d27 !important;\r\n}\r\n\r\n.onDarkMode .blue-btn {\r\n\tbox-shadow: 1px 1px 5px #0a5ebecb;\r\n}\r\n\r\n.onDarkMode .blue-btn:hover {\r\n\ttransform: scale(0.98);\r\n}\r\n.onDarkMode button.kelas-siswa:active {\r\n\ttransform: scale(0.99);\r\n\tborder: 2px solid #0a5ebe;\r\n}\r\n.onDarkMode button.kelas-siswa.active {\r\n\ttransform: scale(0.99);\r\n\tborder: 2px solid #0a5ebe;\r\n}\r\n", ""]), e.a = n;
}, function (t, e, r) {
  "use strict";

  var o = r(0),
      n = r.n(o)()(!1);
  n.push([t.i, ".swal2-modal {\r\n\twidth: 430px !important;\r\n\theight: 330px !important;\r\n}\r\n\r\n.swal2-title {\r\n\tfont-size: 22px;\r\n}\r\n.swal2-content {\r\n\tfont-size: 16px;\r\n}\r\n\r\n.swal2-icon {\r\n\tmargin: 0 0 20px 0 !important;\r\n}\r\n\r\n.mark-line-left {\r\n\theight: 10px !important;\r\n}\r\n", ""]), e.a = n;
}, function (t, e, r) {
  "use strict";

  var o = r(0),
      n = r.n(o)()(!1);
  n.push([t.i, ".modal .modal-header {\r\n\tbackground: var(--blue-gradient);\r\n}\r\n.modal .modal-body {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n.modal .modal-body label {\r\n\twidth: 20%;\r\n}\r\n\r\n.modal .modal-body input {\r\n\twidth: 80%;\r\n}\r\n.modal .modal-footer button#btn-tambah {\r\n\tbackground: var(--blue-gradient);\r\n}\r\n", ""]), e.a = n;
}, function (t, e, r) {
  "use strict";

  var o = function o() {
    var t = document.querySelector("ul li.darkmode"),
        e = localStorage.getItem("isDark") ? localStorage.getItem("isDark") : "false";
    t.addEventListener("click", function () {
      "true" == e ? (t.classList.remove("active"), localStorage.removeItem("mode"), document.body.classList.remove("onDarkMode"), e = "false") : (t.classList.add("active"), localStorage.setItem("mode", "darkmode"), document.body.classList.add("onDarkMode"), e = "true"), localStorage.setItem("isDark", e);
    }), "darkmode" == localStorage.getItem("mode") ? (document.body.classList.add("onDarkMode"), t.classList.add("active")) : t.classList.remove("active");
  },
      n = function n(t, e, r, o) {
    Swal.fire({
      title: t,
      text: e,
      icon: r,
      confirmButtonText: o,
      position: "top"
    });
  },
      i = {},
      a = {},
      l = function l(t, e) {
    switch (t) {
      case "ADD":
        i[e] = [e];
        break;

      case "DELETE":
        delete i[e];
    }

    localStorage.setItem("STORAGE KELAS", JSON.stringify(i));
  },
      s = function s(t, e, r, o) {
    var n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "hadir";

    switch (t) {
      case "ADD":
      case "UPDATE":
        a[e] = [e, r, o, n];
        break;

      case "DELETE":
        delete a[e];
    }

    localStorage.setItem("STORAGE SISWA", JSON.stringify(a));
  };

  function d(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var r = [],
          o = !0,
          n = !1,
          i = void 0;

      try {
        for (var a, l = t[Symbol.iterator](); !(o = (a = l.next()).done) && (r.push(a.value), !e || r.length !== e); o = !0) {
          ;
        }
      } catch (t) {
        n = !0, i = t;
      } finally {
        try {
          o || null == l["return"] || l["return"]();
        } finally {
          if (n) throw i;
        }
      }

      return r;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return c(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === r && t.constructor && (r = t.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(t);
      if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function c(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var r = 0, o = new Array(e); r < e; r++) {
      o[r] = t[r];
    }

    return o;
  }

  e.a = function () {
    var t = document.querySelector(".container-fluid"),
        e = document.querySelector(".nama-kelas"),
        r = document.querySelector(".right .isi-siswa"),
        i = document.getElementById("nama-kelas-siswa"),
        a = document.getElementById("nama"),
        c = document.getElementById("kelas"),
        m = document.getElementById("jurusan"),
        p = document.querySelector("#btn-tambah"),
        f = [],
        u = [];
    o(), p.addEventListener("click", function () {
      _(k), i.textContent = c.value, g(), o(), a.value = "", c.value = "", m.value = "";
    });

    var g = function g() {
      var t = function (t) {
        return f.filter(function (e) {
          return e.kelas == t;
        });
      }(i.textContent.length > 1 ? i.textContent : c.value).sort(function (t, e) {
        var r = t.nama,
            o = e.nama;
        return r < o ? -1 : r > o ? 1 : 0;
      });

      r.innerHTML = "", function (t) {
        t.map(function (t, e) {
          var o = function (t, e) {
            return '<button class="siswa '.concat(t.kehadiran, '">\n\t\t\t\t\t\t<span class="absen">').concat(++e, '</span>\n\t\t\t\t\t\t<span class="sakit method">S</span>\n\t\t\t\t\t\t<span class="izin method">I</span>\n\t\t\t\t\t\t<span class="bolos method">B</span>\n\t\t\t\t\t\t<span class="siswa-hapus fitur">D</span>\n\t\t\t\t\t\t<span class="siswa-rename fitur">R</span>\n\t\t\t\t\t\t<input type="text">').concat(t.nama, "\n\t\t\t\t\t</button>");
          }(t, e);

          r.insertAdjacentHTML("beforeend", o);
        });
      }(t);
    };

    function h(t, e, r) {
      var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "hadir";
      this.nama = t, this.kelas = e, this.jurusan = r, this.kehadiran = o;
    }

    function b(t) {
      this.kelas = t;
    }

    e.addEventListener("click", function (t) {
      var e = t.target;
      e.classList.contains("kelas-siswa") && (function (t) {
        document.querySelectorAll(".kelas-siswa").forEach(function (t) {
          return t.classList.remove("active");
        }), t.classList.add("active");
      }(e), i.textContent = e.textContent, g());
    });

    var x,
        v,
        y,
        w = function w() {
      document.querySelectorAll(".kelas-siswa").forEach(function (t) {
        return t.remove();
      }), function (t) {
        t.map(function (t) {
          var r = '<button class="kelas blue-btn kelas-siswa '.concat(t, '">').concat(t, "</button>");
          e.insertAdjacentHTML("beforeend", r);
        });
      }(u.map(function (t) {
        return t.kelas;
      }).sort());
    },
        k = function k(t, e, r, o) {
      if (u.find(function (t) {
        return t.kelas == e;
      })) return f.push(new h(t, e, r)), s("ADD", t, e, r, o), C(), void S(".alert-success", t, e);
      f.push(new h(t, e, r)), u.push(new b(e)), w(), s("ADD", t, e, r), l("ADD", e), C();
    },
        _ = function _(t) {
      var e = f.find(function (t) {
        return t.nama == a.value.toUpperCase();
      });
      "" == a.value || "" == c.value || "" == m.value ? (C(), S(".alert-warning")) : e ? (C(), S(".alert-warning", a.value)) : t(a.value.toUpperCase(), c.value, m.value);
    };

    x = function x() {
      [document.querySelectorAll("span.method"), document.querySelectorAll("span.fitur"), document.querySelectorAll("button.siswa")].map(function (t) {
        return t.forEach(function (t) {
          return t.classList.remove("active");
        });
      });
    }, v = function v(t, e) {
      var r = t.parentElement.classList.toggle(e);
      y(t, r ? e : "hadir"), x();
    }, y = function y(t, e) {
      var r = t.parentElement.lastChild.textContent.trim(),
          o = f.find(function (t) {
        return t.nama == r;
      }),
          n = o.nama,
          i = o.kelas,
          a = o.jurusan;
      f.find(function (t) {
        t.nama == r && (t.kehadiran = e);
      }), s("UPDATE", n, i, a, e);
    }, t.addEventListener("click", function (t) {
      if (t.target.classList.contains("siswa")) {
        var e = t.target,
            r = [e.children[1], e.children[2], e.children[3]];
        [e.children[4], e.children[5]].map(function (t) {
          return t.classList.remove("active");
        }), r.map(function (t) {
          return t.classList.toggle("active");
        }), r[0].classList.contains("active") ? e.classList.add("active") : e.classList.remove("active");
      } else t.target.classList.contains("izin") ? (t.target.parentElement.classList.remove("siswa-sakit", "siswa-bolos", "hadir"), v(t.target, "siswa-izin")) : t.target.classList.contains("sakit") ? (t.target.parentElement.classList.remove("siswa-izin", "siswa-bolos", "hadir"), v(t.target, "siswa-sakit")) : t.target.classList.contains("bolos") ? (t.target.parentElement.classList.remove("siswa-izin", "siswa-sakit", "hadir"), v(t.target, "siswa-bolos")) : x();
    });
    t.addEventListener("dblclick", function (t) {
      if (t.target.classList.contains("siswa")) {
        var e = t.target,
            r = [e.children[1], e.children[2], e.children[3]],
            o = [e.children[4], e.children[5]];
        r.map(function (t) {
          return t.classList.remove("active");
        }), o.map(function (t) {
          return t.classList.toggle("active");
        }), o[0].classList.contains("active") ? e.classList.add("active") : e.classList.remove("active");
      }
    }), t.addEventListener("click", function (t) {
      if (t.target.classList.contains("siswa-hapus")) {
        var e = document.getElementById("nama-kelas-siswa").textContent.trim();
        !function (t) {
          var e = [];
          f.filter(function (r) {
            return r.nama != t ? e.push(r) : e = e;
          }), f = e, s("DELETE", t);
        }(t.target.parentElement.lastChild.textContent.trim()), a = e, d = f.filter(function (t) {
          return t.kelas == a;
        }), c = [], 0 == d.length && (u.filter(function (t) {
          return t.kelas != a ? c.push(t) : c = c;
        }), u = c, l("DELETE", a)), 0 == u.length && (i.textContent = ""), w(), g();
      } else if (t.target.classList.contains("siswa-rename")) {
        var r = t.target,
            o = r.parentElement.lastChild.textContent.trim(),
            n = r.nextElementSibling;
        n.classList.add("active"), n.focus(), n.value = o, r.parentElement.lastChild.textContent = "", n.addEventListener("keyup", function (t) {
          13 === t.keyCode && (function (t, e, r) {
            f.find(function (o) {
              if (o.nama == t) {
                o.nama = e, r.parentElement.lastChild.textContent = e;
                var n = o.kelas,
                    i = o.jurusan,
                    a = o.kehadiran;
                s("DELETE", t), s("UPDATE", e, n, i, a);
              }
            });
          }(o, n.value, r), n.classList.remove("active"));
        });
      }

      var a, d, c;
    }), document.querySelectorAll("input").forEach(function (t) {
      t.addEventListener("input", function () {
        t.style.textTransform = "uppercase";
      });
    });

    var E,
        T,
        C = function C() {
      var t = document.querySelector(".modal"),
          e = document.querySelector(".modal-backdrop");
      document.body.removeAttribute("class"), t.classList.toggle("show"), t.style.display = "none", t.setAttribute("aria-hidden", "true"), t.removeAttribute("aria-modal"), t.removeAttribute("role"), e.remove();
    },
        S = function S(t, e, r) {
      ".alert-warning" === t ? null != e ? n("INFO", "".concat(e.toUpperCase(), " Sudah Terdaftar"), "info", "OK") : n("WARNING", "Semua Data Harus Diisi", "warning", "OK") : ".alert-success" === t && null != e && null != r && n("SUCCES", "".concat(e.toUpperCase(), " Berhasil Ditambah Pada Kelas ").concat(r), "success", "OK");
    };

    E = document.querySelector("p.date"), T = new Date(), E.textContent = T.toDateString();
    var j = localStorage.getItem("STORAGE KELAS"),
        D = localStorage.getItem("STORAGE SISWA");

    if (j) {
      var A = JSON.parse(j),
          N = [],
          L = [];

      for (var O in A) {
        N.push(O), L = N.sort();
      }

      L.map(function (t) {
        var r = '<button class="kelas kelas-siswa blue-btn '.concat(t, '">').concat(t, "</button>");
        e.insertAdjacentHTML("beforeend", r), u.push(new b(t)), l("ADD", t);
      });
    }

    if (D) {
      var I = JSON.parse(D);

      for (var z in I) {
        var M = d(I[z], 4),
            q = M[0],
            P = M[1],
            H = M[2],
            R = M[3];
        f.push(new h(q, P, H, R)), s("ADD", q, P, H, R);
      }

      24 == new Date().getHours() && f.map(function (t) {
        return t.kehadiran = "hadir";
      });
    }
  };
}, function (t, e, r) {
  "use strict";

  r.r(e), function (t) {
    r(1), r(14), r(16);
    var e = r(10);
    t.jQuery = r(1), r(13), document.addEventListener("DOMContentLoaded", e.a);
  }.call(this, r(3));
}, function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
      enumerable: !0,
      get: function get() {
        return t.l;
      }
    }), Object.defineProperty(t, "id", {
      enumerable: !0,
      get: function get() {
        return t.i;
      }
    }), t.webpackPolyfill = 1), t;
  };
}, function (t, e, r) {
  var o, n, i, a;

  function l(t) {
    return (l = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    })(t);
  }
  /*!
    * Bootstrap v4.5.2 (https://getbootstrap.com/)
    * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    */


  a = function a(t, e, r) {
    "use strict";

    function o(t, e) {
      for (var r = 0; r < e.length; r++) {
        var o = e[r];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    function n(t, e, r) {
      return e && o(t.prototype, e), r && o(t, r), t;
    }

    function i() {
      return (i = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];

          for (var o in r) {
            Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
          }
        }

        return t;
      }).apply(this, arguments);
    }

    function a(t) {
      var r = this,
          o = !1;
      return e(this).one(s.TRANSITION_END, function () {
        o = !0;
      }), setTimeout(function () {
        o || s.triggerTransitionEnd(r);
      }, t), this;
    }

    e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e, r = r && Object.prototype.hasOwnProperty.call(r, "default") ? r["default"] : r;
    var s = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function getUID(t) {
        do {
          t += ~~(1e6 * Math.random());
        } while (document.getElementById(t));

        return t;
      },
      getSelectorFromElement: function getSelectorFromElement(t) {
        var e = t.getAttribute("data-target");

        if (!e || "#" === e) {
          var r = t.getAttribute("href");
          e = r && "#" !== r ? r.trim() : "";
        }

        try {
          return document.querySelector(e) ? e : null;
        } catch (t) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
        if (!t) return 0;
        var r = e(t).css("transition-duration"),
            o = e(t).css("transition-delay"),
            n = parseFloat(r),
            i = parseFloat(o);
        return n || i ? (r = r.split(",")[0], o = o.split(",")[0], 1e3 * (parseFloat(r) + parseFloat(o))) : 0;
      },
      reflow: function reflow(t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(t) {
        e(t).trigger("transitionend");
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean("transitionend");
      },
      isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(t, e, r) {
        for (var o in r) {
          if (Object.prototype.hasOwnProperty.call(r, o)) {
            var n = r[o],
                i = e[o],
                a = i && s.isElement(i) ? "element" : null == (l = i) ? "" + l : {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!new RegExp(n).test(a)) throw new Error(t.toUpperCase() + ': Option "' + o + '" provided type "' + a + '" but expected type "' + n + '".');
          }
        }

        var l;
      },
      findShadowRoot: function findShadowRoot(t) {
        if (!document.documentElement.attachShadow) return null;

        if ("function" == typeof t.getRootNode) {
          var e = t.getRootNode();
          return e instanceof ShadowRoot ? e : null;
        }

        return t instanceof ShadowRoot ? t : t.parentNode ? s.findShadowRoot(t.parentNode) : null;
      },
      jQueryDetection: function jQueryDetection() {
        if (void 0 === e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
      }
    };
    s.jQueryDetection(), e.fn.emulateTransitionEnd = a, e.event.special[s.TRANSITION_END] = {
      bindType: "transitionend",
      delegateType: "transitionend",
      handle: function handle(t) {
        if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      }
    };

    var d = "alert",
        c = e.fn[d],
        m = function () {
      function t(t) {
        this._element = t;
      }

      var r = t.prototype;
      return r.close = function (t) {
        var e = this._element;
        t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
      }, r.dispose = function () {
        e.removeData(this._element, "bs.alert"), this._element = null;
      }, r._getRootElement = function (t) {
        var r = s.getSelectorFromElement(t),
            o = !1;
        return r && (o = document.querySelector(r)), o || (o = e(t).closest(".alert")[0]), o;
      }, r._triggerCloseEvent = function (t) {
        var r = e.Event("close.bs.alert");
        return e(t).trigger(r), r;
      }, r._removeElement = function (t) {
        var r = this;

        if (e(t).removeClass("show"), e(t).hasClass("fade")) {
          var o = s.getTransitionDurationFromElement(t);
          e(t).one(s.TRANSITION_END, function (e) {
            return r._destroyElement(t, e);
          }).emulateTransitionEnd(o);
        } else this._destroyElement(t);
      }, r._destroyElement = function (t) {
        e(t).detach().trigger("closed.bs.alert").remove();
      }, t._jQueryInterface = function (r) {
        return this.each(function () {
          var o = e(this),
              n = o.data("bs.alert");
          n || (n = new t(this), o.data("bs.alert", n)), "close" === r && n[r](this);
        });
      }, t._handleDismiss = function (t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }, n(t, null, [{
        key: "VERSION",
        get: function get() {
          return "4.5.2";
        }
      }]), t;
    }();

    e(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', m._handleDismiss(new m())), e.fn[d] = m._jQueryInterface, e.fn[d].Constructor = m, e.fn[d].noConflict = function () {
      return e.fn[d] = c, m._jQueryInterface;
    };

    var p = e.fn.button,
        f = function () {
      function t(t) {
        this._element = t;
      }

      var r = t.prototype;
      return r.toggle = function () {
        var t = !0,
            r = !0,
            o = e(this._element).closest('[data-toggle="buttons"]')[0];

        if (o) {
          var n = this._element.querySelector('input:not([type="hidden"])');

          if (n) {
            if ("radio" === n.type) if (n.checked && this._element.classList.contains("active")) t = !1;else {
              var i = o.querySelector(".active");
              i && e(i).removeClass("active");
            }
            t && ("checkbox" !== n.type && "radio" !== n.type || (n.checked = !this._element.classList.contains("active")), e(n).trigger("change")), n.focus(), r = !1;
          }
        }

        this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (r && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && e(this._element).toggleClass("active"));
      }, r.dispose = function () {
        e.removeData(this._element, "bs.button"), this._element = null;
      }, t._jQueryInterface = function (r) {
        return this.each(function () {
          var o = e(this).data("bs.button");
          o || (o = new t(this), e(this).data("bs.button", o)), "toggle" === r && o[r]();
        });
      }, n(t, null, [{
        key: "VERSION",
        get: function get() {
          return "4.5.2";
        }
      }]), t;
    }();

    e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
      var r = t.target,
          o = r;
      if (e(r).hasClass("btn") || (r = e(r).closest(".btn")[0]), !r || r.hasAttribute("disabled") || r.classList.contains("disabled")) t.preventDefault();else {
        var n = r.querySelector('input:not([type="hidden"])');
        if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled"))) return void t.preventDefault();
        ("LABEL" !== o.tagName || n && "checkbox" !== n.type) && f._jQueryInterface.call(e(r), "toggle");
      }
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
      var r = e(t.target).closest(".btn")[0];
      e(r).toggleClass("focus", /^focus(in)?$/.test(t.type));
    }), e(window).on("load.bs.button.data-api", function () {
      for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, r = t.length; e < r; e++) {
        var o = t[e],
            n = o.querySelector('input:not([type="hidden"])');
        n.checked || n.hasAttribute("checked") ? o.classList.add("active") : o.classList.remove("active");
      }

      for (var i = 0, a = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; i < a; i++) {
        var l = t[i];
        "true" === l.getAttribute("aria-pressed") ? l.classList.add("active") : l.classList.remove("active");
      }
    }), e.fn.button = f._jQueryInterface, e.fn.button.Constructor = f, e.fn.button.noConflict = function () {
      return e.fn.button = p, f._jQueryInterface;
    };

    var u = "carousel",
        g = ".bs.carousel",
        h = e.fn[u],
        b = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0
    },
        x = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean"
    },
        v = {
      TOUCH: "touch",
      PEN: "pen"
    },
        y = function () {
      function t(t, e) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
      }

      var r = t.prototype;
      return r.next = function () {
        this._isSliding || this._slide("next");
      }, r.nextWhenVisible = function () {
        !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next();
      }, r.prev = function () {
        this._isSliding || this._slide("prev");
      }, r.pause = function (t) {
        t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (s.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, r.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, r.to = function (t) {
        var r = this;
        this._activeElement = this._element.querySelector(".active.carousel-item");

        var o = this._getItemIndex(this._activeElement);

        if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) e(this._element).one("slid.bs.carousel", function () {
          return r.to(t);
        });else {
          if (o === t) return this.pause(), void this.cycle();
          var n = t > o ? "next" : "prev";

          this._slide(n, this._items[t]);
        }
      }, r.dispose = function () {
        e(this._element).off(g), e.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, r._getConfig = function (t) {
        return t = i({}, b, t), s.typeCheckConfig(u, t, x), t;
      }, r._handleSwipe = function () {
        var t = Math.abs(this.touchDeltaX);

        if (!(t <= 40)) {
          var e = t / this.touchDeltaX;
          this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next();
        }
      }, r._addEventListeners = function () {
        var t = this;
        this._config.keyboard && e(this._element).on("keydown.bs.carousel", function (e) {
          return t._keydown(e);
        }), "hover" === this._config.pause && e(this._element).on("mouseenter.bs.carousel", function (e) {
          return t.pause(e);
        }).on("mouseleave.bs.carousel", function (e) {
          return t.cycle(e);
        }), this._config.touch && this._addTouchEventListeners();
      }, r._addTouchEventListeners = function () {
        var t = this;

        if (this._touchSupported) {
          var r = function r(e) {
            t._pointerEvent && v[e.originalEvent.pointerType.toUpperCase()] ? t.touchStartX = e.originalEvent.clientX : t._pointerEvent || (t.touchStartX = e.originalEvent.touches[0].clientX);
          },
              o = function o(e) {
            t._pointerEvent && v[e.originalEvent.pointerType.toUpperCase()] && (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
              return t.cycle(e);
            }, 500 + t._config.interval));
          };

          e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          }), this._pointerEvent ? (e(this._element).on("pointerdown.bs.carousel", function (t) {
            return r(t);
          }), e(this._element).on("pointerup.bs.carousel", function (t) {
            return o(t);
          }), this._element.classList.add("pointer-event")) : (e(this._element).on("touchstart.bs.carousel", function (t) {
            return r(t);
          }), e(this._element).on("touchmove.bs.carousel", function (e) {
            return function (e) {
              e.originalEvent.touches && e.originalEvent.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.originalEvent.touches[0].clientX - t.touchStartX;
            }(e);
          }), e(this._element).on("touchend.bs.carousel", function (t) {
            return o(t);
          }));
        }
      }, r._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
          case 37:
            t.preventDefault(), this.prev();
            break;

          case 39:
            t.preventDefault(), this.next();
        }
      }, r._getItemIndex = function (t) {
        return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t);
      }, r._getItemByDirection = function (t, e) {
        var r = "next" === t,
            o = "prev" === t,
            n = this._getItemIndex(e),
            i = this._items.length - 1;

        if ((o && 0 === n || r && n === i) && !this._config.wrap) return e;
        var a = (n + ("prev" === t ? -1 : 1)) % this._items.length;
        return -1 === a ? this._items[this._items.length - 1] : this._items[a];
      }, r._triggerSlideEvent = function (t, r) {
        var o = this._getItemIndex(t),
            n = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
            i = e.Event("slide.bs.carousel", {
          relatedTarget: t,
          direction: r,
          from: n,
          to: o
        });

        return e(this._element).trigger(i), i;
      }, r._setActiveIndicatorElement = function (t) {
        if (this._indicatorsElement) {
          var r = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
          e(r).removeClass("active");

          var o = this._indicatorsElement.children[this._getItemIndex(t)];

          o && e(o).addClass("active");
        }
      }, r._slide = function (t, r) {
        var o,
            n,
            i,
            a = this,
            l = this._element.querySelector(".active.carousel-item"),
            d = this._getItemIndex(l),
            c = r || l && this._getItemByDirection(t, l),
            m = this._getItemIndex(c),
            p = Boolean(this._interval);

        if ("next" === t ? (o = "carousel-item-left", n = "carousel-item-next", i = "left") : (o = "carousel-item-right", n = "carousel-item-prev", i = "right"), c && e(c).hasClass("active")) this._isSliding = !1;else if (!this._triggerSlideEvent(c, i).isDefaultPrevented() && l && c) {
          this._isSliding = !0, p && this.pause(), this._setActiveIndicatorElement(c);
          var f = e.Event("slid.bs.carousel", {
            relatedTarget: c,
            direction: i,
            from: d,
            to: m
          });

          if (e(this._element).hasClass("slide")) {
            e(c).addClass(n), s.reflow(c), e(l).addClass(o), e(c).addClass(o);
            var u = parseInt(c.getAttribute("data-interval"), 10);
            u ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = u) : this._config.interval = this._config.defaultInterval || this._config.interval;
            var g = s.getTransitionDurationFromElement(l);
            e(l).one(s.TRANSITION_END, function () {
              e(c).removeClass(o + " " + n).addClass("active"), e(l).removeClass("active " + n + " " + o), a._isSliding = !1, setTimeout(function () {
                return e(a._element).trigger(f);
              }, 0);
            }).emulateTransitionEnd(g);
          } else e(l).removeClass("active"), e(c).addClass("active"), this._isSliding = !1, e(this._element).trigger(f);

          p && this.cycle();
        }
      }, t._jQueryInterface = function (r) {
        return this.each(function () {
          var o = e(this).data("bs.carousel"),
              n = i({}, b, e(this).data());
          "object" === l(r) && (n = i({}, n, r));
          var a = "string" == typeof r ? r : n.slide;
          if (o || (o = new t(this, n), e(this).data("bs.carousel", o)), "number" == typeof r) o.to(r);else if ("string" == typeof a) {
            if (void 0 === o[a]) throw new TypeError('No method named "' + a + '"');
            o[a]();
          } else n.interval && n.ride && (o.pause(), o.cycle());
        });
      }, t._dataApiClickHandler = function (r) {
        var o = s.getSelectorFromElement(this);

        if (o) {
          var n = e(o)[0];

          if (n && e(n).hasClass("carousel")) {
            var a = i({}, e(n).data(), e(this).data()),
                l = this.getAttribute("data-slide-to");
            l && (a.interval = !1), t._jQueryInterface.call(e(n), a), l && e(n).data("bs.carousel").to(l), r.preventDefault();
          }
        }
      }, n(t, null, [{
        key: "VERSION",
        get: function get() {
          return "4.5.2";
        }
      }, {
        key: "Default",
        get: function get() {
          return b;
        }
      }]), t;
    }();

    e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", y._dataApiClickHandler), e(window).on("load.bs.carousel.data-api", function () {
      for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), r = 0, o = t.length; r < o; r++) {
        var n = e(t[r]);

        y._jQueryInterface.call(n, n.data());
      }
    }), e.fn[u] = y._jQueryInterface, e.fn[u].Constructor = y, e.fn[u].noConflict = function () {
      return e.fn[u] = h, y._jQueryInterface;
    };

    var w = "collapse",
        k = e.fn[w],
        _ = {
      toggle: !0,
      parent: ""
    },
        E = {
      toggle: "boolean",
      parent: "(string|element)"
    },
        T = function () {
      function t(t, e) {
        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));

        for (var r = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), o = 0, n = r.length; o < n; o++) {
          var i = r[o],
              a = s.getSelectorFromElement(i),
              l = [].slice.call(document.querySelectorAll(a)).filter(function (e) {
            return e === t;
          });
          null !== a && l.length > 0 && (this._selector = a, this._triggerArray.push(i));
        }

        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }

      var r = t.prototype;
      return r.toggle = function () {
        e(this._element).hasClass("show") ? this.hide() : this.show();
      }, r.show = function () {
        var r,
            o,
            n = this;

        if (!(this._isTransitioning || e(this._element).hasClass("show") || (this._parent && 0 === (r = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (t) {
          return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains("collapse");
        })).length && (r = null), r && (o = e(r).not(this._selector).data("bs.collapse")) && o._isTransitioning))) {
          var i = e.Event("show.bs.collapse");

          if (e(this._element).trigger(i), !i.isDefaultPrevented()) {
            r && (t._jQueryInterface.call(e(r).not(this._selector), "hide"), o || e(r).data("bs.collapse", null));

            var a = this._getDimension();

            e(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[a] = 0, this._triggerArray.length && e(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
            var l = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                d = s.getTransitionDurationFromElement(this._element);
            e(this._element).one(s.TRANSITION_END, function () {
              e(n._element).removeClass("collapsing").addClass("collapse show"), n._element.style[a] = "", n.setTransitioning(!1), e(n._element).trigger("shown.bs.collapse");
            }).emulateTransitionEnd(d), this._element.style[a] = this._element[l] + "px";
          }
        }
      }, r.hide = function () {
        var t = this;

        if (!this._isTransitioning && e(this._element).hasClass("show")) {
          var r = e.Event("hide.bs.collapse");

          if (e(this._element).trigger(r), !r.isDefaultPrevented()) {
            var o = this._getDimension();

            this._element.style[o] = this._element.getBoundingClientRect()[o] + "px", s.reflow(this._element), e(this._element).addClass("collapsing").removeClass("collapse show");
            var n = this._triggerArray.length;
            if (n > 0) for (var i = 0; i < n; i++) {
              var a = this._triggerArray[i],
                  l = s.getSelectorFromElement(a);
              null !== l && (e([].slice.call(document.querySelectorAll(l))).hasClass("show") || e(a).addClass("collapsed").attr("aria-expanded", !1));
            }
            this.setTransitioning(!0), this._element.style[o] = "";
            var d = s.getTransitionDurationFromElement(this._element);
            e(this._element).one(s.TRANSITION_END, function () {
              t.setTransitioning(!1), e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
            }).emulateTransitionEnd(d);
          }
        }
      }, r.setTransitioning = function (t) {
        this._isTransitioning = t;
      }, r.dispose = function () {
        e.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, r._getConfig = function (t) {
        return (t = i({}, _, t)).toggle = Boolean(t.toggle), s.typeCheckConfig(w, t, E), t;
      }, r._getDimension = function () {
        return e(this._element).hasClass("width") ? "width" : "height";
      }, r._getParent = function () {
        var r,
            o = this;
        s.isElement(this._config.parent) ? (r = this._config.parent, void 0 !== this._config.parent.jquery && (r = this._config.parent[0])) : r = document.querySelector(this._config.parent);
        var n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
            i = [].slice.call(r.querySelectorAll(n));
        return e(i).each(function (e, r) {
          o._addAriaAndCollapsedClass(t._getTargetFromElement(r), [r]);
        }), r;
      }, r._addAriaAndCollapsedClass = function (t, r) {
        var o = e(t).hasClass("show");
        r.length && e(r).toggleClass("collapsed", !o).attr("aria-expanded", o);
      }, t._getTargetFromElement = function (t) {
        var e = s.getSelectorFromElement(t);
        return e ? document.querySelector(e) : null;
      }, t._jQueryInterface = function (r) {
        return this.each(function () {
          var o = e(this),
              n = o.data("bs.collapse"),
              a = i({}, _, o.data(), "object" === l(r) && r ? r : {});

          if (!n && a.toggle && "string" == typeof r && /show|hide/.test(r) && (a.toggle = !1), n || (n = new t(this, a), o.data("bs.collapse", n)), "string" == typeof r) {
            if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');
            n[r]();
          }
        });
      }, n(t, null, [{
        key: "VERSION",
        get: function get() {
          return "4.5.2";
        }
      }, {
        key: "Default",
        get: function get() {
          return _;
        }
      }]), t;
    }();

    e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
      "A" === t.currentTarget.tagName && t.preventDefault();
      var r = e(this),
          o = s.getSelectorFromElement(this),
          n = [].slice.call(document.querySelectorAll(o));
      e(n).each(function () {
        var t = e(this),
            o = t.data("bs.collapse") ? "toggle" : r.data();

        T._jQueryInterface.call(t, o);
      });
    }), e.fn[w] = T._jQueryInterface, e.fn[w].Constructor = T, e.fn[w].noConflict = function () {
      return e.fn[w] = k, T._jQueryInterface;
    };

    var C = "dropdown",
        S = e.fn[C],
        j = new RegExp("38|40|27"),
        D = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null
    },
        A = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)"
    },
        N = function () {
      function t(t, e) {
        this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
      }

      var o = t.prototype;
      return o.toggle = function () {
        if (!this._element.disabled && !e(this._element).hasClass("disabled")) {
          var r = e(this._menu).hasClass("show");
          t._clearMenus(), r || this.show(!0);
        }
      }, o.show = function (o) {
        if (void 0 === o && (o = !1), !(this._element.disabled || e(this._element).hasClass("disabled") || e(this._menu).hasClass("show"))) {
          var n = {
            relatedTarget: this._element
          },
              i = e.Event("show.bs.dropdown", n),
              a = t._getParentFromElement(this._element);

          if (e(a).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar && o) {
              if (void 0 === r) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
              var l = this._element;
              "parent" === this._config.reference ? l = a : s.isElement(this._config.reference) && (l = this._config.reference, void 0 !== this._config.reference.jquery && (l = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(a).addClass("position-static"), this._popper = new r(l, this._menu, this._getPopperConfig());
            }

            "ontouchstart" in document.documentElement && 0 === e(a).closest(".navbar-nav").length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass("show"), e(a).toggleClass("show").trigger(e.Event("shown.bs.dropdown", n));
          }
        }
      }, o.hide = function () {
        if (!this._element.disabled && !e(this._element).hasClass("disabled") && e(this._menu).hasClass("show")) {
          var r = {
            relatedTarget: this._element
          },
              o = e.Event("hide.bs.dropdown", r),
              n = t._getParentFromElement(this._element);

          e(n).trigger(o), o.isDefaultPrevented() || (this._popper && this._popper.destroy(), e(this._menu).toggleClass("show"), e(n).toggleClass("show").trigger(e.Event("hidden.bs.dropdown", r)));
        }
      }, o.dispose = function () {
        e.removeData(this._element, "bs.dropdown"), e(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
      }, o.update = function () {
        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
      }, o._addEventListeners = function () {
        var t = this;
        e(this._element).on("click.bs.dropdown", function (e) {
          e.preventDefault(), e.stopPropagation(), t.toggle();
        });
      }, o._getConfig = function (t) {
        return t = i({}, this.constructor.Default, e(this._element).data(), t), s.typeCheckConfig(C, t, this.constructor.DefaultType), t;
      }, o._getMenuElement = function () {
        if (!this._menu) {
          var e = t._getParentFromElement(this._element);

          e && (this._menu = e.querySelector(".dropdown-menu"));
        }

        return this._menu;
      }, o._getPlacement = function () {
        var t = e(this._element.parentNode),
            r = "bottom-start";
        return t.hasClass("dropup") ? r = e(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? r = "right-start" : t.hasClass("dropleft") ? r = "left-start" : e(this._menu).hasClass("dropdown-menu-right") && (r = "bottom-end"), r;
      }, o._detectNavbar = function () {
        return e(this._element).closest(".navbar").length > 0;
      }, o._getOffset = function () {
        var t = this,
            e = {};
        return "function" == typeof this._config.offset ? e.fn = function (e) {
          return e.offsets = i({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e;
        } : e.offset = this._config.offset, e;
      }, o._getPopperConfig = function () {
        var t = {
          placement: this._getPlacement(),
          modifiers: {
            offset: this._getOffset(),
            flip: {
              enabled: this._config.flip
            },
            preventOverflow: {
              boundariesElement: this._config.boundary
            }
          }
        };
        return "static" === this._config.display && (t.modifiers.applyStyle = {
          enabled: !1
        }), i({}, t, this._config.popperConfig);
      }, t._jQueryInterface = function (r) {
        return this.each(function () {
          var o = e(this).data("bs.dropdown"),
              n = "object" === l(r) ? r : null;

          if (o || (o = new t(this, n), e(this).data("bs.dropdown", o)), "string" == typeof r) {
            if (void 0 === o[r]) throw new TypeError('No method named "' + r + '"');
            o[r]();
          }
        });
      }, t._clearMenus = function (r) {
        if (!r || 3 !== r.which && ("keyup" !== r.type || 9 === r.which)) for (var o = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), n = 0, i = o.length; n < i; n++) {
          var a = t._getParentFromElement(o[n]),
              l = e(o[n]).data("bs.dropdown"),
              s = {
            relatedTarget: o[n]
          };

          if (r && "click" === r.type && (s.clickEvent = r), l) {
            var d = l._menu;

            if (e(a).hasClass("show") && !(r && ("click" === r.type && /input|textarea/i.test(r.target.tagName) || "keyup" === r.type && 9 === r.which) && e.contains(a, r.target))) {
              var c = e.Event("hide.bs.dropdown", s);
              e(a).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), o[n].setAttribute("aria-expanded", "false"), l._popper && l._popper.destroy(), e(d).removeClass("show"), e(a).removeClass("show").trigger(e.Event("hidden.bs.dropdown", s)));
            }
          }
        }
      }, t._getParentFromElement = function (t) {
        var e,
            r = s.getSelectorFromElement(t);
        return r && (e = document.querySelector(r)), e || t.parentNode;
      }, t._dataApiKeydownHandler = function (r) {
        if (!(/input|textarea/i.test(r.target.tagName) ? 32 === r.which || 27 !== r.which && (40 !== r.which && 38 !== r.which || e(r.target).closest(".dropdown-menu").length) : !j.test(r.which)) && !this.disabled && !e(this).hasClass("disabled")) {
          var o = t._getParentFromElement(this),
              n = e(o).hasClass("show");

          if (n || 27 !== r.which) {
            if (r.preventDefault(), r.stopPropagation(), !n || n && (27 === r.which || 32 === r.which)) return 27 === r.which && e(o.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void e(this).trigger("click");
            var i = [].slice.call(o.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (t) {
              return e(t).is(":visible");
            });

            if (0 !== i.length) {
              var a = i.indexOf(r.target);
              38 === r.which && a > 0 && a--, 40 === r.which && a < i.length - 1 && a++, a < 0 && (a = 0), i[a].focus();
            }
          }
        }
      }, n(t, null, [{
        key: "VERSION",
        get: function get() {
          return "4.5.2";
        }
      }, {
        key: "Default",
        get: function get() {
          return D;
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return A;
        }
      }]), t;
    }();

    e(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', N._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", N._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", N._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
      t.preventDefault(), t.stopPropagation(), N._jQueryInterface.call(e(this), "toggle");
    }).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
      t.stopPropagation();
    }), e.fn[C] = N._jQueryInterface, e.fn[C].Constructor = N, e.fn[C].noConflict = function () {
      return e.fn[C] = S, N._jQueryInterface;
    };

    var L = e.fn.modal,
        O = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0
    },
        I = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean"
    },
        z = function () {
      function t(t, e) {
        this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
      }

      var r = t.prototype;
      return r.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }, r.show = function (t) {
        var r = this;

        if (!this._isShown && !this._isTransitioning) {
          e(this._element).hasClass("fade") && (this._isTransitioning = !0);
          var o = e.Event("show.bs.modal", {
            relatedTarget: t
          });
          e(this._element).trigger(o), this._isShown || o.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (t) {
            return r.hide(t);
          }), e(this._dialog).on("mousedown.dismiss.bs.modal", function () {
            e(r._element).one("mouseup.dismiss.bs.modal", function (t) {
              e(t.target).is(r._element) && (r._ignoreBackdropClick = !0);
            });
          }), this._showBackdrop(function () {
            return r._showElement(t);
          }));
        }
      }, r.hide = function (t) {
        var r = this;

        if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
          var o = e.Event("hide.bs.modal");

          if (e(this._element).trigger(o), this._isShown && !o.isDefaultPrevented()) {
            this._isShown = !1;
            var n = e(this._element).hasClass("fade");

            if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off("focusin.bs.modal"), e(this._element).removeClass("show"), e(this._element).off("click.dismiss.bs.modal"), e(this._dialog).off("mousedown.dismiss.bs.modal"), n) {
              var i = s.getTransitionDurationFromElement(this._element);
              e(this._element).one(s.TRANSITION_END, function (t) {
                return r._hideModal(t);
              }).emulateTransitionEnd(i);
            } else this._hideModal();
          }
        }
      }, r.dispose = function () {
        [window, this._element, this._dialog].forEach(function (t) {
          return e(t).off(".bs.modal");
        }), e(document).off("focusin.bs.modal"), e.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
      }, r.handleUpdate = function () {
        this._adjustDialog();
      }, r._getConfig = function (t) {
        return t = i({}, O, t), s.typeCheckConfig("modal", t, I), t;
      }, r._triggerBackdropTransition = function () {
        var t = this;

        if ("static" === this._config.backdrop) {
          var r = e.Event("hidePrevented.bs.modal");
          if (e(this._element).trigger(r), r.defaultPrevented) return;
          var o = this._element.scrollHeight > document.documentElement.clientHeight;
          o || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
          var n = s.getTransitionDurationFromElement(this._dialog);
          e(this._element).off(s.TRANSITION_END), e(this._element).one(s.TRANSITION_END, function () {
            t._element.classList.remove("modal-static"), o || e(t._element).one(s.TRANSITION_END, function () {
              t._element.style.overflowY = "";
            }).emulateTransitionEnd(t._element, n);
          }).emulateTransitionEnd(n), this._element.focus();
        } else this.hide();
      }, r._showElement = function (t) {
        var r = this,
            o = e(this._element).hasClass("fade"),
            n = this._dialog ? this._dialog.querySelector(".modal-body") : null;
        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), e(this._dialog).hasClass("modal-dialog-scrollable") && n ? n.scrollTop = 0 : this._element.scrollTop = 0, o && s.reflow(this._element), e(this._element).addClass("show"), this._config.focus && this._enforceFocus();

        var i = e.Event("shown.bs.modal", {
          relatedTarget: t
        }),
            a = function a() {
          r._config.focus && r._element.focus(), r._isTransitioning = !1, e(r._element).trigger(i);
        };

        if (o) {
          var l = s.getTransitionDurationFromElement(this._dialog);
          e(this._dialog).one(s.TRANSITION_END, a).emulateTransitionEnd(l);
        } else a();
      }, r._enforceFocus = function () {
        var t = this;
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", function (r) {
          document !== r.target && t._element !== r.target && 0 === e(t._element).has(r.target).length && t._element.focus();
        });
      }, r._setEscapeEvent = function () {
        var t = this;
        this._isShown ? e(this._element).on("keydown.dismiss.bs.modal", function (e) {
          t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition();
        }) : this._isShown || e(this._element).off("keydown.dismiss.bs.modal");
      }, r._setResizeEvent = function () {
        var t = this;
        this._isShown ? e(window).on("resize.bs.modal", function (e) {
          return t.handleUpdate(e);
        }) : e(window).off("resize.bs.modal");
      }, r._hideModal = function () {
        var t = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
          e(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger("hidden.bs.modal");
        });
      }, r._removeBackdrop = function () {
        this._backdrop && (e(this._backdrop).remove(), this._backdrop = null);
      }, r._showBackdrop = function (t) {
        var r = this,
            o = e(this._element).hasClass("fade") ? "fade" : "";

        if (this._isShown && this._config.backdrop) {
          if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", o && this._backdrop.classList.add(o), e(this._backdrop).appendTo(document.body), e(this._element).on("click.dismiss.bs.modal", function (t) {
            r._ignoreBackdropClick ? r._ignoreBackdropClick = !1 : t.target === t.currentTarget && r._triggerBackdropTransition();
          }), o && s.reflow(this._backdrop), e(this._backdrop).addClass("show"), !t) return;
          if (!o) return void t();
          var n = s.getTransitionDurationFromElement(this._backdrop);
          e(this._backdrop).one(s.TRANSITION_END, t).emulateTransitionEnd(n);
        } else if (!this._isShown && this._backdrop) {
          e(this._backdrop).removeClass("show");

          var i = function i() {
            r._removeBackdrop(), t && t();
          };

          if (e(this._element).hasClass("fade")) {
            var a = s.getTransitionDurationFromElement(this._backdrop);
            e(this._backdrop).one(s.TRANSITION_END, i).emulateTransitionEnd(a);
          } else i();
        } else t && t();
      }, r._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, r._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, r._checkScrollbar = function () {
        var t = document.body.getBoundingClientRect();
        this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, r._setScrollbar = function () {
        var t = this;

        if (this._isBodyOverflowing) {
          var r = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
              o = [].slice.call(document.querySelectorAll(".sticky-top"));
          e(r).each(function (r, o) {
            var n = o.style.paddingRight,
                i = e(o).css("padding-right");
            e(o).data("padding-right", n).css("padding-right", parseFloat(i) + t._scrollbarWidth + "px");
          }), e(o).each(function (r, o) {
            var n = o.style.marginRight,
                i = e(o).css("margin-right");
            e(o).data("margin-right", n).css("margin-right", parseFloat(i) - t._scrollbarWidth + "px");
          });
          var n = document.body.style.paddingRight,
              i = e(document.body).css("padding-right");
          e(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
        }

        e(document.body).addClass("modal-open");
      }, r._resetScrollbar = function () {
        var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
        e(t).each(function (t, r) {
          var o = e(r).data("padding-right");
          e(r).removeData("padding-right"), r.style.paddingRight = o || "";
        });
        var r = [].slice.call(document.querySelectorAll(".sticky-top"));
        e(r).each(function (t, r) {
          var o = e(r).data("margin-right");
          void 0 !== o && e(r).css("margin-right", o).removeData("margin-right");
        });
        var o = e(document.body).data("padding-right");
        e(document.body).removeData("padding-right"), document.body.style.paddingRight = o || "";
      }, r._getScrollbarWidth = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", document.body.appendChild(t);
        var e = t.getBoundingClientRect().width - t.clientWidth;
        return document.body.removeChild(t), e;
      }, t._jQueryInterface = function (r, o) {
        return this.each(function () {
          var n = e(this).data("bs.modal"),
              a = i({}, O, e(this).data(), "object" === l(r) && r ? r : {});

          if (n || (n = new t(this, a), e(this).data("bs.modal", n)), "string" == typeof r) {
            if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');
            n[r](o);
          } else a.show && n.show(o);
        });
      }, n(t, null, [{
        key: "VERSION",
        get: function get() {
          return "4.5.2";
        }
      }, {
        key: "Default",
        get: function get() {
          return O;
        }
      }]), t;
    }();

    e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
      var r,
          o = this,
          n = s.getSelectorFromElement(this);
      n && (r = document.querySelector(n));
      var a = e(r).data("bs.modal") ? "toggle" : i({}, e(r).data(), e(this).data());
      "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
      var l = e(r).one("show.bs.modal", function (t) {
        t.isDefaultPrevented() || l.one("hidden.bs.modal", function () {
          e(o).is(":visible") && o.focus();
        });
      });

      z._jQueryInterface.call(e(r), a, this);
    }), e.fn.modal = z._jQueryInterface, e.fn.modal.Constructor = z, e.fn.modal.noConflict = function () {
      return e.fn.modal = L, z._jQueryInterface;
    };
    var M = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        q = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
        P = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        H = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

    function R(t, e, r) {
      if (0 === t.length) return t;
      if (r && "function" == typeof r) return r(t);

      for (var o = new window.DOMParser().parseFromString(t, "text/html"), n = Object.keys(e), i = [].slice.call(o.body.querySelectorAll("*")), a = function a(t, r) {
        var o = i[t],
            a = o.nodeName.toLowerCase();
        if (-1 === n.indexOf(o.nodeName.toLowerCase())) return o.parentNode.removeChild(o), "continue";
        var l = [].slice.call(o.attributes),
            s = [].concat(e["*"] || [], e[a] || []);
        l.forEach(function (t) {
          (function (t, e) {
            var r = t.nodeName.toLowerCase();
            if (-1 !== e.indexOf(r)) return -1 === M.indexOf(r) || Boolean(t.nodeValue.match(P) || t.nodeValue.match(H));

            for (var o = e.filter(function (t) {
              return t instanceof RegExp;
            }), n = 0, i = o.length; n < i; n++) {
              if (r.match(o[n])) return !0;
            }

            return !1;
          })(t, s) || o.removeAttribute(t.nodeName);
        });
      }, l = 0, s = i.length; l < s; l++) {
        a(l);
      }

      return o.body.innerHTML;
    }

    var F = "tooltip",
        B = e.fn[F],
        W = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        U = ["sanitize", "whiteList", "sanitizeFn"],
        Q = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)"
    },
        $ = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    },
        X = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: q,
      popperConfig: null
    },
        V = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip"
    },
        Y = function () {
      function t(t, e) {
        if (void 0 === r) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
      }

      var o = t.prototype;
      return o.enable = function () {
        this._isEnabled = !0;
      }, o.disable = function () {
        this._isEnabled = !1;
      }, o.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, o.toggle = function (t) {
        if (this._isEnabled) if (t) {
          var r = this.constructor.DATA_KEY,
              o = e(t.currentTarget).data(r);
          o || (o = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(r, o)), o._activeTrigger.click = !o._activeTrigger.click, o._isWithActiveTrigger() ? o._enter(null, o) : o._leave(null, o);
        } else {
          if (e(this.getTipElement()).hasClass("show")) return void this._leave(null, this);

          this._enter(null, this);
        }
      }, o.dispose = function () {
        clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
      }, o.show = function () {
        var t = this;
        if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
        var o = e.Event(this.constructor.Event.SHOW);

        if (this.isWithContent() && this._isEnabled) {
          e(this.element).trigger(o);
          var n = s.findShadowRoot(this.element),
              i = e.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
          if (o.isDefaultPrevented() || !i) return;
          var a = this.getTipElement(),
              l = s.getUID(this.constructor.NAME);
          a.setAttribute("id", l), this.element.setAttribute("aria-describedby", l), this.setContent(), this.config.animation && e(a).addClass("fade");

          var d = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
              c = this._getAttachment(d);

          this.addAttachmentClass(c);

          var m = this._getContainer();

          e(a).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(a).appendTo(m), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new r(this.element, a, this._getPopperConfig(c)), e(a).addClass("show"), "ontouchstart" in document.documentElement && e(document.body).children().on("mouseover", null, e.noop);

          var p = function p() {
            t.config.animation && t._fixTransition();
            var r = t._hoverState;
            t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), "out" === r && t._leave(null, t);
          };

          if (e(this.tip).hasClass("fade")) {
            var f = s.getTransitionDurationFromElement(this.tip);
            e(this.tip).one(s.TRANSITION_END, p).emulateTransitionEnd(f);
          } else p();
        }
      }, o.hide = function (t) {
        var r = this,
            o = this.getTipElement(),
            n = e.Event(this.constructor.Event.HIDE),
            i = function i() {
          "show" !== r._hoverState && o.parentNode && o.parentNode.removeChild(o), r._cleanTipClass(), r.element.removeAttribute("aria-describedby"), e(r.element).trigger(r.constructor.Event.HIDDEN), null !== r._popper && r._popper.destroy(), t && t();
        };

        if (e(this.element).trigger(n), !n.isDefaultPrevented()) {
          if (e(o).removeClass("show"), "ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, e(this.tip).hasClass("fade")) {
            var a = s.getTransitionDurationFromElement(o);
            e(o).one(s.TRANSITION_END, i).emulateTransitionEnd(a);
          } else i();

          this._hoverState = "";
        }
      }, o.update = function () {
        null !== this._popper && this._popper.scheduleUpdate();
      }, o.isWithContent = function () {
        return Boolean(this.getTitle());
      }, o.addAttachmentClass = function (t) {
        e(this.getTipElement()).addClass("bs-tooltip-" + t);
      }, o.getTipElement = function () {
        return this.tip = this.tip || e(this.config.template)[0], this.tip;
      }, o.setContent = function () {
        var t = this.getTipElement();
        this.setElementContent(e(t.querySelectorAll(".tooltip-inner")), this.getTitle()), e(t).removeClass("fade show");
      }, o.setElementContent = function (t, r) {
        "object" !== l(r) || !r.nodeType && !r.jquery ? this.config.html ? (this.config.sanitize && (r = R(r, this.config.whiteList, this.config.sanitizeFn)), t.html(r)) : t.text(r) : this.config.html ? e(r).parent().is(t) || t.empty().append(r) : t.text(e(r).text());
      }, o.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");
        return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
      }, o._getPopperConfig = function (t) {
        var e = this;
        return i({}, {
          placement: t,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: ".arrow"
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          },
          onUpdate: function onUpdate(t) {
            return e._handlePopperPlacementChange(t);
          }
        }, this.config.popperConfig);
      }, o._getOffset = function () {
        var t = this,
            e = {};
        return "function" == typeof this.config.offset ? e.fn = function (e) {
          return e.offsets = i({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e;
        } : e.offset = this.config.offset, e;
      }, o._getContainer = function () {
        return !1 === this.config.container ? document.body : s.isElement(this.config.container) ? e(this.config.container) : e(document).find(this.config.container);
      }, o._getAttachment = function (t) {
        return $[t.toUpperCase()];
      }, o._setListeners = function () {
        var t = this;
        this.config.trigger.split(" ").forEach(function (r) {
          if ("click" === r) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
            return t.toggle(e);
          });else if ("manual" !== r) {
            var o = "hover" === r ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                n = "hover" === r ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
            e(t.element).on(o, t.config.selector, function (e) {
              return t._enter(e);
            }).on(n, t.config.selector, function (e) {
              return t._leave(e);
            });
          }
        }), this._hideModalHandler = function () {
          t.element && t.hide();
        }, e(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = i({}, this.config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }, o._fixTitle = function () {
        var t = l(this.element.getAttribute("data-original-title"));
        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, o._enter = function (t, r) {
        var o = this.constructor.DATA_KEY;
        (r = r || e(t.currentTarget).data(o)) || (r = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(o, r)), t && (r._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e(r.getTipElement()).hasClass("show") || "show" === r._hoverState ? r._hoverState = "show" : (clearTimeout(r._timeout), r._hoverState = "show", r.config.delay && r.config.delay.show ? r._timeout = setTimeout(function () {
          "show" === r._hoverState && r.show();
        }, r.config.delay.show) : r.show());
      }, o._leave = function (t, r) {
        var o = this.constructor.DATA_KEY;
        (r = r || e(t.currentTarget).data(o)) || (r = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(o, r)), t && (r._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), r._isWithActiveTrigger() || (clearTimeout(r._timeout), r._hoverState = "out", r.config.delay && r.config.delay.hide ? r._timeout = setTimeout(function () {
          "out" === r._hoverState && r.hide();
        }, r.config.delay.hide) : r.hide());
      }, o._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) {
          if (this._activeTrigger[t]) return !0;
        }

        return !1;
      }, o._getConfig = function (t) {
        var r = e(this.element).data();
        return Object.keys(r).forEach(function (t) {
          -1 !== U.indexOf(t) && delete r[t];
        }), "number" == typeof (t = i({}, this.constructor.Default, r, "object" === l(t) && t ? t : {})).delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), s.typeCheckConfig(F, t, this.constructor.DefaultType), t.sanitize && (t.template = R(t.template, t.whiteList, t.sanitizeFn)), t;
      }, o._getDelegateConfig = function () {
        var t = {};
        if (this.config) for (var e in this.config) {
          this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        }
        return t;
      }, o._cleanTipClass = function () {
        var t = e(this.getTipElement()),
            r = t.attr("class").match(W);
        null !== r && r.length && t.removeClass(r.join(""));
      }, o._handlePopperPlacementChange = function (t) {
        this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
      }, o._fixTransition = function () {
        var t = this.getTipElement(),
            r = this.config.animation;
        null === t.getAttribute("x-placement") && (e(t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = r);
      }, t._jQueryInterface = function (r) {
        return this.each(function () {
          var o = e(this).data("bs.tooltip"),
              n = "object" === l(r) && r;

          if ((o || !/dispose|hide/.test(r)) && (o || (o = new t(this, n), e(this).data("bs.tooltip", o)), "string" == typeof r)) {
            if (void 0 === o[r]) throw new TypeError('No method named "' + r + '"');
            o[r]();
          }
        });
      }, n(t, null, [{
        key: "VERSION",
        get: function get() {
          return "4.5.2";
        }
      }, {
        key: "Default",
        get: function get() {
          return X;
        }
      }, {
        key: "NAME",
        get: function get() {
          return F;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return "bs.tooltip";
        }
      }, {
        key: "Event",
        get: function get() {
          return V;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return ".bs.tooltip";
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return Q;
        }
      }]), t;
    }();

    e.fn[F] = Y._jQueryInterface, e.fn[F].Constructor = Y, e.fn[F].noConflict = function () {
      return e.fn[F] = B, Y._jQueryInterface;
    };

    var K = "popover",
        G = e.fn[K],
        J = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        Z = i({}, Y.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
        tt = i({}, Y.DefaultType, {
      content: "(string|element|function)"
    }),
        et = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover"
    },
        rt = function (t) {
      var r, o;

      function i() {
        return t.apply(this, arguments) || this;
      }

      o = t, (r = i).prototype = Object.create(o.prototype), r.prototype.constructor = r, r.__proto__ = o;
      var a = i.prototype;
      return a.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, a.addAttachmentClass = function (t) {
        e(this.getTipElement()).addClass("bs-popover-" + t);
      }, a.getTipElement = function () {
        return this.tip = this.tip || e(this.config.template)[0], this.tip;
      }, a.setContent = function () {
        var t = e(this.getTipElement());
        this.setElementContent(t.find(".popover-header"), this.getTitle());

        var r = this._getContent();

        "function" == typeof r && (r = r.call(this.element)), this.setElementContent(t.find(".popover-body"), r), t.removeClass("fade show");
      }, a._getContent = function () {
        return this.element.getAttribute("data-content") || this.config.content;
      }, a._cleanTipClass = function () {
        var t = e(this.getTipElement()),
            r = t.attr("class").match(J);
        null !== r && r.length > 0 && t.removeClass(r.join(""));
      }, i._jQueryInterface = function (t) {
        return this.each(function () {
          var r = e(this).data("bs.popover"),
              o = "object" === l(t) ? t : null;

          if ((r || !/dispose|hide/.test(t)) && (r || (r = new i(this, o), e(this).data("bs.popover", r)), "string" == typeof t)) {
            if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
            r[t]();
          }
        });
      }, n(i, null, [{
        key: "VERSION",
        get: function get() {
          return "4.5.2";
        }
      }, {
        key: "Default",
        get: function get() {
          return Z;
        }
      }, {
        key: "NAME",
        get: function get() {
          return K;
        }
      }, {
        key: "DATA_KEY",
        get: function get() {
          return "bs.popover";
        }
      }, {
        key: "Event",
        get: function get() {
          return et;
        }
      }, {
        key: "EVENT_KEY",
        get: function get() {
          return ".bs.popover";
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return tt;
        }
      }]), i;
    }(Y);

    e.fn[K] = rt._jQueryInterface, e.fn[K].Constructor = rt, e.fn[K].noConflict = function () {
      return e.fn[K] = G, rt._jQueryInterface;
    };

    var ot = "scrollspy",
        nt = e.fn[ot],
        it = {
      offset: 10,
      method: "auto",
      target: ""
    },
        at = {
      offset: "number",
      method: "string",
      target: "(string|element)"
    },
        lt = function () {
      function t(t, r) {
        var o = this;
        this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(r), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on("scroll.bs.scrollspy", function (t) {
          return o._process(t);
        }), this.refresh(), this._process();
      }

      var r = t.prototype;
      return r.refresh = function () {
        var t = this,
            r = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            o = "auto" === this._config.method ? r : this._config.method,
            n = "position" === o ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
          var r,
              i = s.getSelectorFromElement(t);

          if (i && (r = document.querySelector(i)), r) {
            var a = r.getBoundingClientRect();
            if (a.width || a.height) return [e(r)[o]().top + n, i];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (e) {
          t._offsets.push(e[0]), t._targets.push(e[1]);
        });
      }, r.dispose = function () {
        e.removeData(this._element, "bs.scrollspy"), e(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, r._getConfig = function (t) {
        if ("string" != typeof (t = i({}, it, "object" === l(t) && t ? t : {})).target && s.isElement(t.target)) {
          var r = e(t.target).attr("id");
          r || (r = s.getUID(ot), e(t.target).attr("id", r)), t.target = "#" + r;
        }

        return s.typeCheckConfig(ot, t, at), t;
      }, r._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, r._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, r._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
      }, r._process = function () {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            r = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= r) {
          var o = this._targets[this._targets.length - 1];
          this._activeTarget !== o && this._activate(o);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var n = this._offsets.length; n--;) {
            this._activeTarget !== this._targets[n] && t >= this._offsets[n] && (void 0 === this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n]);
          }
        }
      }, r._activate = function (t) {
        this._activeTarget = t, this._clear();

        var r = this._selector.split(",").map(function (e) {
          return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
        }),
            o = e([].slice.call(document.querySelectorAll(r.join(","))));

        o.hasClass("dropdown-item") ? (o.closest(".dropdown").find(".dropdown-toggle").addClass("active"), o.addClass("active")) : (o.addClass("active"), o.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), o.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), e(this._scrollElement).trigger("activate.bs.scrollspy", {
          relatedTarget: t
        });
      }, r._clear = function () {
        [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
          return t.classList.contains("active");
        }).forEach(function (t) {
          return t.classList.remove("active");
        });
      }, t._jQueryInterface = function (r) {
        return this.each(function () {
          var o = e(this).data("bs.scrollspy"),
              n = "object" === l(r) && r;

          if (o || (o = new t(this, n), e(this).data("bs.scrollspy", o)), "string" == typeof r) {
            if (void 0 === o[r]) throw new TypeError('No method named "' + r + '"');
            o[r]();
          }
        });
      }, n(t, null, [{
        key: "VERSION",
        get: function get() {
          return "4.5.2";
        }
      }, {
        key: "Default",
        get: function get() {
          return it;
        }
      }]), t;
    }();

    e(window).on("load.bs.scrollspy.data-api", function () {
      for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), r = t.length; r--;) {
        var o = e(t[r]);

        lt._jQueryInterface.call(o, o.data());
      }
    }), e.fn[ot] = lt._jQueryInterface, e.fn[ot].Constructor = lt, e.fn[ot].noConflict = function () {
      return e.fn[ot] = nt, lt._jQueryInterface;
    };

    var st = e.fn.tab,
        dt = function () {
      function t(t) {
        this._element = t;
      }

      var r = t.prototype;
      return r.show = function () {
        var t = this;

        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass("active") || e(this._element).hasClass("disabled"))) {
          var r,
              o,
              n = e(this._element).closest(".nav, .list-group")[0],
              i = s.getSelectorFromElement(this._element);

          if (n) {
            var a = "UL" === n.nodeName || "OL" === n.nodeName ? "> li > .active" : ".active";
            o = (o = e.makeArray(e(n).find(a)))[o.length - 1];
          }

          var l = e.Event("hide.bs.tab", {
            relatedTarget: this._element
          }),
              d = e.Event("show.bs.tab", {
            relatedTarget: o
          });

          if (o && e(o).trigger(l), e(this._element).trigger(d), !d.isDefaultPrevented() && !l.isDefaultPrevented()) {
            i && (r = document.querySelector(i)), this._activate(this._element, n);

            var c = function c() {
              var r = e.Event("hidden.bs.tab", {
                relatedTarget: t._element
              }),
                  n = e.Event("shown.bs.tab", {
                relatedTarget: o
              });
              e(o).trigger(r), e(t._element).trigger(n);
            };

            r ? this._activate(r, r.parentNode, c) : c();
          }
        }
      }, r.dispose = function () {
        e.removeData(this._element, "bs.tab"), this._element = null;
      }, r._activate = function (t, r, o) {
        var n = this,
            i = (!r || "UL" !== r.nodeName && "OL" !== r.nodeName ? e(r).children(".active") : e(r).find("> li > .active"))[0],
            a = o && i && e(i).hasClass("fade"),
            l = function l() {
          return n._transitionComplete(t, i, o);
        };

        if (i && a) {
          var d = s.getTransitionDurationFromElement(i);
          e(i).removeClass("show").one(s.TRANSITION_END, l).emulateTransitionEnd(d);
        } else l();
      }, r._transitionComplete = function (t, r, o) {
        if (r) {
          e(r).removeClass("active");
          var n = e(r.parentNode).find("> .dropdown-menu .active")[0];
          n && e(n).removeClass("active"), "tab" === r.getAttribute("role") && r.setAttribute("aria-selected", !1);
        }

        if (e(t).addClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), s.reflow(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && e(t.parentNode).hasClass("dropdown-menu")) {
          var i = e(t).closest(".dropdown")[0];

          if (i) {
            var a = [].slice.call(i.querySelectorAll(".dropdown-toggle"));
            e(a).addClass("active");
          }

          t.setAttribute("aria-expanded", !0);
        }

        o && o();
      }, t._jQueryInterface = function (r) {
        return this.each(function () {
          var o = e(this),
              n = o.data("bs.tab");

          if (n || (n = new t(this), o.data("bs.tab", n)), "string" == typeof r) {
            if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');
            n[r]();
          }
        });
      }, n(t, null, [{
        key: "VERSION",
        get: function get() {
          return "4.5.2";
        }
      }]), t;
    }();

    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
      t.preventDefault(), dt._jQueryInterface.call(e(this), "show");
    }), e.fn.tab = dt._jQueryInterface, e.fn.tab.Constructor = dt, e.fn.tab.noConflict = function () {
      return e.fn.tab = st, dt._jQueryInterface;
    };

    var ct = e.fn.toast,
        mt = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    },
        pt = {
      animation: !0,
      autohide: !0,
      delay: 500
    },
        ft = function () {
      function t(t, e) {
        this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
      }

      var r = t.prototype;
      return r.show = function () {
        var t = this,
            r = e.Event("show.bs.toast");

        if (e(this._element).trigger(r), !r.isDefaultPrevented()) {
          this._clearTimeout(), this._config.animation && this._element.classList.add("fade");

          var o = function o() {
            t._element.classList.remove("showing"), t._element.classList.add("show"), e(t._element).trigger("shown.bs.toast"), t._config.autohide && (t._timeout = setTimeout(function () {
              t.hide();
            }, t._config.delay));
          };

          if (this._element.classList.remove("hide"), s.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
            var n = s.getTransitionDurationFromElement(this._element);
            e(this._element).one(s.TRANSITION_END, o).emulateTransitionEnd(n);
          } else o();
        }
      }, r.hide = function () {
        if (this._element.classList.contains("show")) {
          var t = e.Event("hide.bs.toast");
          e(this._element).trigger(t), t.isDefaultPrevented() || this._close();
        }
      }, r.dispose = function () {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), e(this._element).off("click.dismiss.bs.toast"), e.removeData(this._element, "bs.toast"), this._element = null, this._config = null;
      }, r._getConfig = function (t) {
        return t = i({}, pt, e(this._element).data(), "object" === l(t) && t ? t : {}), s.typeCheckConfig("toast", t, this.constructor.DefaultType), t;
      }, r._setListeners = function () {
        var t = this;
        e(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
          return t.hide();
        });
      }, r._close = function () {
        var t = this,
            r = function r() {
          t._element.classList.add("hide"), e(t._element).trigger("hidden.bs.toast");
        };

        if (this._element.classList.remove("show"), this._config.animation) {
          var o = s.getTransitionDurationFromElement(this._element);
          e(this._element).one(s.TRANSITION_END, r).emulateTransitionEnd(o);
        } else r();
      }, r._clearTimeout = function () {
        clearTimeout(this._timeout), this._timeout = null;
      }, t._jQueryInterface = function (r) {
        return this.each(function () {
          var o = e(this),
              n = o.data("bs.toast"),
              i = "object" === l(r) && r;

          if (n || (n = new t(this, i), o.data("bs.toast", n)), "string" == typeof r) {
            if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');
            n[r](this);
          }
        });
      }, n(t, null, [{
        key: "VERSION",
        get: function get() {
          return "4.5.2";
        }
      }, {
        key: "DefaultType",
        get: function get() {
          return mt;
        }
      }, {
        key: "Default",
        get: function get() {
          return pt;
        }
      }]), t;
    }();

    e.fn.toast = ft._jQueryInterface, e.fn.toast.Constructor = ft, e.fn.toast.noConflict = function () {
      return e.fn.toast = ct, ft._jQueryInterface;
    }, t.Alert = m, t.Button = f, t.Carousel = y, t.Collapse = T, t.Dropdown = N, t.Modal = z, t.Popover = rt, t.Scrollspy = lt, t.Tab = dt, t.Toast = ft, t.Tooltip = Y, t.Util = s, Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, "object" === l(e) && void 0 !== t ? a(e, r(1), r(2)) : (n = [e, r(1), r(2)], void 0 === (i = "function" == typeof (o = a) ? o.apply(e, n) : o) || (t.exports = i));
}, function (t, e, r) {
  var o = r(4),
      n = r(15);
  "string" == typeof (n = n.__esModule ? n["default"] : n) && (n = [[t.i, n, ""]]);
  var i = {
    insert: "head",
    singleton: !1
  };
  o(n, i);
  t.exports = n.locals || {};
}, function (t, e, r) {
  "use strict";

  r.r(e);
  var o = r(0),
      n = r.n(o)()(!1);
  n.push([t.i, "/*!\r\n * Bootstrap v4.3.1 (https://getbootstrap.com/)\r\n * Copyright 2011-2019 The Bootstrap Authors\r\n * Copyright 2011-2019 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\r\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus{outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer::before{content:\"\\2014\\00A0\"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-break:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-first{-ms-flex-order:-1;order:-1}.order-last{-ms-flex-order:13;order:13}.order-0{-ms-flex-order:0;order:0}.order-1{-ms-flex-order:1;order:1}.order-2{-ms-flex-order:2;order:2}.order-3{-ms-flex-order:3;order:3}.order-4{-ms-flex-order:4;order:4}.order-5{-ms-flex-order:5;order:5}.order-6{-ms-flex-order:6;order:6}.order-7{-ms-flex-order:7;order:7}.order-8{-ms-flex-order:8;order:8}.order-9{-ms-flex-order:9;order:9}.order-10{-ms-flex-order:10;order:10}.order-11{-ms-flex-order:11;order:11}.order-12{-ms-flex-order:12;order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-sm-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-sm-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-sm-first{-ms-flex-order:-1;order:-1}.order-sm-last{-ms-flex-order:13;order:13}.order-sm-0{-ms-flex-order:0;order:0}.order-sm-1{-ms-flex-order:1;order:1}.order-sm-2{-ms-flex-order:2;order:2}.order-sm-3{-ms-flex-order:3;order:3}.order-sm-4{-ms-flex-order:4;order:4}.order-sm-5{-ms-flex-order:5;order:5}.order-sm-6{-ms-flex-order:6;order:6}.order-sm-7{-ms-flex-order:7;order:7}.order-sm-8{-ms-flex-order:8;order:8}.order-sm-9{-ms-flex-order:9;order:9}.order-sm-10{-ms-flex-order:10;order:10}.order-sm-11{-ms-flex-order:11;order:11}.order-sm-12{-ms-flex-order:12;order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-md-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-md-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-md-first{-ms-flex-order:-1;order:-1}.order-md-last{-ms-flex-order:13;order:13}.order-md-0{-ms-flex-order:0;order:0}.order-md-1{-ms-flex-order:1;order:1}.order-md-2{-ms-flex-order:2;order:2}.order-md-3{-ms-flex-order:3;order:3}.order-md-4{-ms-flex-order:4;order:4}.order-md-5{-ms-flex-order:5;order:5}.order-md-6{-ms-flex-order:6;order:6}.order-md-7{-ms-flex-order:7;order:7}.order-md-8{-ms-flex-order:8;order:8}.order-md-9{-ms-flex-order:9;order:9}.order-md-10{-ms-flex-order:10;order:10}.order-md-11{-ms-flex-order:11;order:11}.order-md-12{-ms-flex-order:12;order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-lg-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-lg-first{-ms-flex-order:-1;order:-1}.order-lg-last{-ms-flex-order:13;order:13}.order-lg-0{-ms-flex-order:0;order:0}.order-lg-1{-ms-flex-order:1;order:1}.order-lg-2{-ms-flex-order:2;order:2}.order-lg-3{-ms-flex-order:3;order:3}.order-lg-4{-ms-flex-order:4;order:4}.order-lg-5{-ms-flex-order:5;order:5}.order-lg-6{-ms-flex-order:6;order:6}.order-lg-7{-ms-flex-order:7;order:7}.order-lg-8{-ms-flex-order:8;order:8}.order-lg-9{-ms-flex-order:9;order:9}.order-lg-10{-ms-flex-order:10;order:10}.order-lg-11{-ms-flex-order:11;order:11}.order-lg-12{-ms-flex-order:12;order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-xl-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-xl-first{-ms-flex-order:-1;order:-1}.order-xl-last{-ms-flex-order:13;order:13}.order-xl-0{-ms-flex-order:0;order:0}.order-xl-1{-ms-flex-order:1;order:1}.order-xl-2{-ms-flex-order:2;order:2}.order-xl-3{-ms-flex-order:3;order:3}.order-xl-4{-ms-flex-order:4;order:4}.order-xl-5{-ms-flex-order:5;order:5}.order-xl-6{-ms-flex-order:6;order:6}.order-xl-7{-ms-flex-order:7;order:7}.order-xl-8{-ms-flex-order:8;order:8}.order-xl-9{-ms-flex-order:9;order:9}.order-xl-10{-ms-flex-order:10;order:10}.order-xl-11{-ms-flex-order:11;order:11}.order-xl-12{-ms-flex-order:12;order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;margin-bottom:1rem;color:#212529}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th{border-color:#7abaff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th{border-color:#b3b7bb}.table-hover .table-secondary:hover{background-color:#c8cbcf}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th{border-color:#8fd19e}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th{border-color:#86cfda}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th{border-color:#ffdf7e}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th{border-color:#ed969e}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th{border-color:#fbfcfc}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#95999c}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#343a40;border-color:#454d55}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#343a40}.table-dark td,.table-dark th,.table-dark thead th{border-color:#454d55}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{color:#fff;background-color:rgba(255,255,255,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding-top:.375rem;padding-bottom:.375rem;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.form-control[multiple],select.form-control[size]{height:auto}textarea.form-control{height:auto}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem}.form-control.is-valid,.was-validated .form-control:valid{border-color:#28a745;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.form-control.is-valid~.valid-feedback,.form-control.is-valid~.valid-tooltip,.was-validated .form-control:valid~.valid-feedback,.was-validated .form-control:valid~.valid-tooltip{display:block}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-valid,.was-validated .custom-select:valid{border-color:#28a745;padding-right:calc((1em + .75rem) * 3 / 4 + 1.75rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-select.is-valid~.valid-feedback,.custom-select.is-valid~.valid-tooltip,.was-validated .custom-select:valid~.valid-feedback,.was-validated .custom-select:valid~.valid-tooltip{display:block}.form-control-file.is-valid~.valid-feedback,.form-control-file.is-valid~.valid-tooltip,.was-validated .form-control-file:valid~.valid-feedback,.was-validated .form-control-file:valid~.valid-tooltip{display:block}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745}.custom-control-input.is-valid~.custom-control-label::before,.was-validated .custom-control-input:valid~.custom-control-label::before{border-color:#28a745}.custom-control-input.is-valid~.valid-feedback,.custom-control-input.is-valid~.valid-tooltip,.was-validated .custom-control-input:valid~.valid-feedback,.was-validated .custom-control-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid:checked~.custom-control-label::before,.was-validated .custom-control-input:valid:checked~.custom-control-label::before{border-color:#34ce57;background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label::before,.was-validated .custom-control-input:valid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before{border-color:#28a745}.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}.custom-file-input.is-valid~.valid-feedback,.custom-file-input.is-valid~.valid-tooltip,.was-validated .custom-file-input:valid~.valid-feedback,.was-validated .custom-file-input:valid~.valid-tooltip{display:block}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E\");background-repeat:no-repeat;background-position:center right calc(.375em + .1875rem);background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip{display:block}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.custom-select.is-invalid,.was-validated .custom-select:invalid{border-color:#dc3545;padding-right:calc((1em + .75rem) * 3 / 4 + 1.75rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip{display:block}.form-control-file.is-invalid~.invalid-feedback,.form-control-file.is-invalid~.invalid-tooltip,.was-validated .form-control-file:invalid~.invalid-feedback,.was-validated .form-control-file:invalid~.invalid-tooltip{display:block}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label::before,.was-validated .custom-control-input:invalid~.custom-control-label::before{border-color:#dc3545}.custom-control-input.is-invalid~.invalid-feedback,.custom-control-input.is-invalid~.invalid-tooltip,.was-validated .custom-control-input:invalid~.invalid-feedback,.was-validated .custom-control-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid:checked~.custom-control-label::before,.was-validated .custom-control-input:invalid:checked~.custom-control-label::before{border-color:#e4606d;background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before{border-color:#dc3545}.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid~.invalid-feedback,.custom-file-input.is-invalid~.invalid-tooltip,.was-validated .custom-file-input:invalid~.invalid-feedback,.was-validated .custom-file-input:invalid~.invalid-tooltip{display:block}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;-ms-flex-negative:0;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529;text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.btn-outline-primary{color:#007bff;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-success{color:#28a745;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff;text-decoration:none}.btn-link:hover{color:#0056b3;text-decoration:underline}.btn-link.focus,.btn-link:focus{text-decoration:underline;box-shadow:none}.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-left{right:auto;left:0}.dropdown-menu-right{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-left{right:auto;left:0}.dropdown-menu-sm-right{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-left{right:auto;left:0}.dropdown-menu-md-right{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-left{right:auto;left:0}.dropdown-menu-lg-right{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-left{right:auto;left:0}.dropdown-menu-xl-right{right:0;left:auto}}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:1}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:1}.btn-toolbar{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:stretch;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext{position:relative;-ms-flex:1 1 auto;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control{margin-left:-1px}.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file .custom-file-input:focus{z-index:4}.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-append,.input-group-prepend{display:-ms-flexbox;display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn:focus,.input-group-prepend .btn:focus{z-index:3}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea){height:calc(1.5em + 1rem + 2px)}.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea){height:calc(1.5em + .5rem + 2px)}.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-lg>.custom-select,.input-group-sm>.custom-select{padding-right:1.75rem}.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.custom-control-inline{display:-ms-inline-flexbox;display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked~.custom-control-label::before{color:#fff;border-color:#007bff;background-color:#007bff}.custom-control-input:focus~.custom-control-label::before{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label::before{border-color:#80bdff}.custom-control-input:not(:disabled):active~.custom-control-label::before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.custom-control-input:disabled~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label::before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0;vertical-align:top}.custom-control-label::before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:\"\";background-color:#fff;border:#adb5bd solid 1px}.custom-control-label::after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\";background:no-repeat 50%/50% 50%}.custom-checkbox .custom-control-label::before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before{border-color:#007bff;background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-switch{padding-left:2.25rem}.custom-switch .custom-control-label::before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.custom-switch .custom-control-label::after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-switch .custom-control-label::after{transition:none}}.custom-switch .custom-control-input:checked~.custom-control-label::after{background-color:#fff;-webkit-transform:translateX(.75rem);transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-select{display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{display:none}.custom-select-sm{height:calc(1.5em + .5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.custom-select-lg{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.custom-file{position:relative;display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(1.5em + .75rem + 2px);margin:0;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input:disabled~.custom-file-label{background-color:#e9ecef}.custom-file-input:lang(en)~.custom-file-label::after{content:\"Browse\"}.custom-file-input~.custom-file-label[data-browse]::after{content:attr(data-browse)}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(1.5em + .75rem);padding:.375rem .75rem;line-height:1.5;color:#495057;content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;height:calc(1rem + .4rem);padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-webkit-slider-thumb{transition:none}}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-moz-range-thumb{transition:none}}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion:reduce){.custom-range::-ms-thumb{transition:none}}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}.custom-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.custom-range:disabled::-webkit-slider-runnable-track{cursor:default}.custom-range:disabled::-moz-range-thumb{background-color:#adb5bd}.custom-range:disabled::-moz-range-track{cursor:default}.custom-range:disabled::-ms-thumb{background-color:#adb5bd}.custom-control-label::before,.custom-file-label,.custom-select{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.custom-control-label::before,.custom-file-label,.custom-select{transition:none}}.nav{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{-ms-flex:1 1 auto;flex:1 1 auto;text-align:center}.nav-justified .nav-item{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:.5rem 1rem}.navbar>.container,.navbar>.container-fluid{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat center center;background-size:100% 100%}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-sm .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-md .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-lg .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-xl .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,.9)}.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.5)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{-ms-flex-flow:row wrap;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{display:-ms-flexbox;display:flex;-ms-flex:1 0 0%;flex:1 0 0%;-ms-flex-direction:column;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{-ms-flex-flow:row wrap;flex-flow:row wrap}.card-group>.card{-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion>.card{overflow:hidden}.accordion>.card:not(:first-of-type) .card-header:first-child{border-radius:0}.accordion>.card:not(:first-of-type):not(:last-of-type){border-bottom:0;border-radius:0}.accordion>.card:first-of-type{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:last-of-type{border-top-left-radius:0;border-top-right-radius:0}.accordion>.card .card-header{margin-bottom:-1px}.breadcrumb{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;color:#6c757d;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:-ms-flexbox;display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:2;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:1;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.badge{transition:none}}a.badge:focus,a.badge:hover{text-decoration:none}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}a.badge-primary:focus,a.badge-primary:hover{color:#fff;background-color:#0062cc}a.badge-primary.focus,a.badge-primary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.badge-secondary{color:#fff;background-color:#6c757d}a.badge-secondary:focus,a.badge-secondary:hover{color:#fff;background-color:#545b62}a.badge-secondary.focus,a.badge-secondary:focus{outline:0;box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.badge-success{color:#fff;background-color:#28a745}a.badge-success:focus,a.badge-success:hover{color:#fff;background-color:#1e7e34}a.badge-success.focus,a.badge-success:focus{outline:0;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.badge-info{color:#fff;background-color:#17a2b8}a.badge-info:focus,a.badge-info:hover{color:#fff;background-color:#117a8b}a.badge-info.focus,a.badge-info:focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.badge-warning{color:#212529;background-color:#ffc107}a.badge-warning:focus,a.badge-warning:hover{color:#212529;background-color:#d39e00}a.badge-warning.focus,a.badge-warning:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.badge-danger{color:#fff;background-color:#dc3545}a.badge-danger:focus,a.badge-danger:hover{color:#fff;background-color:#bd2130}a.badge-danger.focus,a.badge-danger:focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.badge-light{color:#212529;background-color:#f8f9fa}a.badge-light:focus,a.badge-light:hover{color:#212529;background-color:#dae0e5}a.badge-light.focus,a.badge-light:focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.badge-dark{color:#fff;background-color:#343a40}a.badge-dark:focus,a.badge-dark:hover{color:#fff;background-color:#1d2124}a.badge-dark.focus,a.badge-dark:focus{outline:0;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:-ms-flexbox;display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.media{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.media-body{-ms-flex:1;flex:1}.list-group{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-horizontal{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}@media (min-width:576px){.list-group-horizontal-sm{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-sm .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-sm .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width:768px){.list-group-horizontal-md{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-md .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-md .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width:992px){.list-group-horizontal-lg{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-lg .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-lg .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}@media (min-width:1200px){.list-group-horizontal-xl{-ms-flex-direction:row;flex-direction:row}.list-group-horizontal-xl .list-group-item{margin-right:-1px;margin-bottom:0}.list-group-horizontal-xl .list-group-item:first-child{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl .list-group-item:last-child{margin-right:0;border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;border-bottom-left-radius:0}}.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.list-group-flush .list-group-item:last-child{margin-bottom:-1px}.list-group-flush:first-child .list-group-item:first-child{border-top:0}.list-group-flush:last-child .list-group-item:last-child{margin-bottom:0;border-bottom:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover{opacity:.75}button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}a.close.disabled{pointer-events:none}.toast{max-width:350px;overflow:hidden;font-size:.875rem;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0;border-radius:.25rem}.toast:not(:last-child){margin-bottom:.75rem}.toast.showing{opacity:1}.toast.show{display:block;opacity:1}.toast.hide{display:none}.toast-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05)}.toast-body{padding:.75rem}.modal-open{overflow:hidden}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translate(0,-50px);transform:translate(0,-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{-webkit-transform:none;transform:none}.modal-dialog-scrollable{display:-ms-flexbox;display:flex;max-height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 1rem);overflow:hidden}.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header{-ms-flex-negative:0;flex-shrink:0}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);content:\"\"}.modal-dialog-centered.modal-dialog-scrollable{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.modal-dialog-centered.modal-dialog-scrollable .modal-content{max-height:none}.modal-dialog-centered.modal-dialog-scrollable::before{content:none}.modal-content{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:justify;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:.3rem;border-top-right-radius:.3rem}.modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;-ms-flex:1 1 auto;flex:1 1 auto;padding:1rem}.modal-footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding:1rem;border-top:1px solid #dee2e6;border-bottom-right-radius:.3rem;border-bottom-left-radius:.3rem}.modal-footer>:not(:first-child){margin-left:.25rem}.modal-footer>:not(:last-child){margin-right:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{max-height:calc(100% - 3.5rem)}.modal-dialog-scrollable .modal-content{max-height:calc(100vh - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered::before{height:calc(100vh - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::after,.popover .arrow::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow{bottom:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=top]>.arrow::before,.bs-popover-top>.arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top]>.arrow::after,.bs-popover-top>.arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow{left:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right]>.arrow::before,.bs-popover-right>.arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right]>.arrow::after,.bs-popover-right>.arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow{top:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=bottom]>.arrow::before,.bs-popover-bottom>.arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom]>.arrow::after,.bs-popover-bottom>.arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow{right:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left]>.arrow::before,.bs-popover-left>.arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left]>.arrow::after,.bs-popover-left>.arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{-ms-touch-action:pan-y;touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left){-webkit-transform:translateX(100%);transform:translateX(100%)}.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right){-webkit-transform:translateX(-100%);transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;-webkit-transform:none;transform:none}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{z-index:0;opacity:0;transition:0s .6s opacity}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:no-repeat 50%/100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{box-sizing:content-box;-ms-flex:0 1 auto;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators li{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:spinner-border .75s linear infinite;animation:spinner-border .75s linear infinite}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}@keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:spinner-grow .75s linear infinite;animation:spinner-grow .75s linear infinite}.spinner-grow-sm{width:1rem;height:1rem}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#6c757d!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded-sm{border-radius:.2rem!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-right{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-lg{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-0{border-radius:0!important}.clearfix::after{display:block;clear:both;content:\"\"}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:-ms-flexbox!important;display:flex!important}.d-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:-ms-flexbox!important;display:flex!important}.d-sm-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:-ms-flexbox!important;display:flex!important}.d-md-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:-ms-flexbox!important;display:flex!important}.d-lg-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:-ms-flexbox!important;display:flex!important}.d-xl-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:-ms-flexbox!important;display:flex!important}.d-print-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:\"\"}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.857143%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-center{-ms-flex-align:center!important;align-items:center!important}.align-items-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}@media (min-width:576px){.flex-sm-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-sm-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-sm-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-sm-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-sm-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-sm-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-sm-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-sm-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-sm-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-sm-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-sm-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-sm-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-sm-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-sm-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-sm-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-sm-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-sm-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-sm-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-sm-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-sm-center{-ms-flex-align:center!important;align-items:center!important}.align-items-sm-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-sm-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-sm-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-sm-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-sm-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-sm-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-sm-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-sm-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-sm-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-sm-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-sm-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-sm-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-sm-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-sm-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:768px){.flex-md-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-md-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-md-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-md-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-md-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-md-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-md-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-md-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-md-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-md-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-md-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-md-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-md-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-md-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-md-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-md-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-md-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-md-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-md-center{-ms-flex-align:center!important;align-items:center!important}.align-items-md-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-md-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-md-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-md-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-md-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-md-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-md-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-md-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-md-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-md-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-md-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-md-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-md-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-md-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-lg-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-lg-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-lg-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-lg-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-lg-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-lg-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-lg-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-lg-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-lg-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-lg-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-lg-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-lg-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-lg-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-lg-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-lg-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-lg-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-lg-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-lg-center{-ms-flex-align:center!important;align-items:center!important}.align-items-lg-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-lg-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-lg-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-lg-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-lg-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-lg-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-lg-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-lg-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-lg-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-lg-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-lg-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-lg-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-lg-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-lg-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-xl-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-xl-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-xl-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xl-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-xl-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-xl-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-xl-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-xl-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-xl-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-xl-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-xl-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-xl-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-xl-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-xl-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-xl-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-xl-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-xl-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-xl-center{-ms-flex-align:center!important;align-items:center!important}.align-items-xl-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-xl-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-xl-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-xl-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-xl-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-xl-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-xl-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-xl-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-xl-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-xl-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-xl-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-xl-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-xl-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-xl-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports ((position:-webkit-sticky) or (position:sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.min-vw-100{min-width:100vw!important}.min-vh-100{min-height:100vh!important}.vw-100{width:100vw!important}.vh-100{height:100vh!important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:rgba(0,0,0,0)}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important}.text-justify{text-align:justify!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-lighter{font-weight:lighter!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-weight-bolder{font-weight:bolder!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0056b3!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#494f54!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#19692c!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#0f6674!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#ba8b00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#a71d2a!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#cbd3da!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#121416!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:rgba(255,255,255,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.text-decoration-none{text-decoration:none!important}.text-break{word-break:break-word!important;overflow-wrap:break-word!important}.text-reset{color:inherit!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,::after,::before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px!important}.container{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}", ""]), e["default"] = n;
}, function (t, e, r) {
  var o = r(4),
      n = r(17);
  "string" == typeof (n = n.__esModule ? n["default"] : n) && (n = [[t.i, n, ""]]);
  var i = {
    insert: "head",
    singleton: !1
  };
  o(n, i);
  t.exports = n.locals || {};
}, function (t, e, r) {
  "use strict";

  r.r(e);
  var o = r(0),
      n = r.n(o),
      i = r(5),
      a = r(6),
      l = r(7),
      s = r(8),
      d = r(9),
      c = n()(!1);
  c.i(i.a), c.i(a.a), c.i(l.a), c.i(s.a), c.i(d.a), c.push([t.i, 'html body {\r\n\tfont-family: "Poppins", sans-serif;\r\n\theight: 100vh;\r\n\tuser-select: none;\r\n}\r\n\r\n:root {\r\n\t--default-black-color: #222222;\r\n\t--default-blue-color: #0a5ebe;\r\n\t--blue-gradient: linear-gradient(to bottom right, #42abf1, #0a5ebe);\r\n\t--blue-gradient-reverse: linear-gradient(to right, #2097e6, #42abf1);\r\n}\r\n\r\nbutton:focus {\r\n\toutline: none;\r\n\tborder: none;\r\n}\r\ninput {\r\n\tborder: 1px solid #858585;\r\n}\r\ninput:focus {\r\n\toutline: none;\r\n\tborder: 1px solid #363636;\r\n}\r\n\r\n.container-fluid {\r\n\theight: 100vh;\r\n\tdisplay: flex;\r\n\tposition: relative;\r\n\tbox-shadow: 3px 3px 15px #cccccc;\r\n\tborder-radius: 5px;\r\n\ttransition: 0.2s ease-in;\r\n\toverflow: hidden;\r\n}\r\n\r\n.side-bar {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 300px;\r\n\theight: 100%;\r\n\tbackground: var(--blue-gradient);\r\n\tz-index: 99;\r\n\tpadding: 30px;\r\n\tfilter: drop-shadow(2px 1px 5px #3f3f3f7c);\r\n\ttransition: 0.2s ease-in-out;\r\n\ttransform: translateX(-110%);\r\n}\r\n\r\n.side-bar.active {\r\n\ttransform: translateX(0);\r\n}\r\n\r\n.side-bar img {\r\n\twidth: 50px;\r\n\tposition: absolute;\r\n\ttop: 15px;\r\n\tright: 15px;\r\n\theight: 50px;\r\n\tborder-radius: 50%;\r\n\tmargin-right: 10px;\r\n\tfilter: drop-shadow(1px 1px 5px #7070707c);\r\n}\r\n\r\n.side-bar ul:last-child {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\twidth: 70%;\r\n}\r\n\r\n.side-bar ul li {\r\n\tlist-style-type: none;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tmargin-bottom: 5px;\r\n\tpadding: 3px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.side-bar ul li.darkmode {\r\n\tposition: relative;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.side-bar ul li.darkmode::before {\r\n\tcontent: "Switch To Darkmode";\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 3px;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.side-bar ul li.darkmode.active::before {\r\n\tcontent: "Switch To Lightmode";\r\n}\r\n.side-bar ul li a {\r\n\tcolor: white;\r\n}\r\n\r\n.burger {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: space-between;\r\n\twidth: 25px;\r\n\theight: 16px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.burger span {\r\n\twidth: 100%;\r\n\theight: 3px;\r\n\tbackground-color: white;\r\n\tborder-radius: 10px;\r\n}\r\n\r\n.side-bar .burger span:first-child,\r\n.side-bar .burger span:last-child {\r\n\ttransform-origin: left;\r\n}\r\n\r\n.side-bar .burger span:first-child {\r\n\ttransform: rotate(45deg) translate(0px, -3px);\r\n}\r\n\r\n.side-bar .burger span:last-child {\r\n\ttransform: rotate(-45deg) translate(0px, 3px);\r\n}\r\n\r\n.blue-btn {\r\n\tbackground: var(--blue-gradient);\r\n\twidth: 120px;\r\n\theight: 120px;\r\n\tmargin: 10px;\r\n\tborder-radius: 10px;\r\n\tfont-size: 14px;\r\n\tfont-weight: 600;\r\n\tcolor: whitesmoke;\r\n\tborder: none;\r\n\ttext-transform: uppercase;\r\n\tborder: none;\r\n\tbox-shadow: 1px 1px 5px #3b3b3b7c;\r\n\ttransition: 0.1s ease-in;\r\n}\r\n\r\n.blue-btn:hover {\r\n\ttransform: scale(0.98);\r\n}\r\nbutton.kelas-siswa:active {\r\n\ttransform: scale(0.99);\r\n\tborder: 2px solid whitesmoke;\r\n}\r\nbutton.kelas-siswa.active {\r\n\ttransform: scale(0.99);\r\n\tborder: 2px solid whitesmoke;\r\n}\r\n\r\n.alert {\r\n\tposition: absolute;\r\n\ttop: 20px;\r\n\tleft: 50%;\r\n\ttransform: translateX(-50%);\r\n\tpadding: 0;\r\n\ttop: -20%;\r\n\tdisplay: grid;\r\n\tplace-items: center;\r\n\ttransition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n}\r\n.alert.active {\r\n\ttop: 40px;\r\n}\r\n.alert p {\r\n\tmargin: 10px 0;\r\n\ttext-align: center;\r\n}\r\n\r\n/*? BREAKPOINT */\r\n\r\n@media screen and (max-width: 1100px) {\r\n\t.left .top-section h1 {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.right {\r\n\t\twidth: 40% !important;\r\n\t}\r\n}\r\n@media screen and (max-width: 897px) {\r\n\t.left .top-section {\r\n\t\tgrid-template-columns: 1fr;\r\n\t\tgrid-template-areas:\r\n\t\t\t"judul-program judul-program"\r\n\t\t\t"ket-guru tanggal";\r\n\t}\r\n\t.left .col:nth-child(2) {\r\n\t\tgrid-area: judul-program;\r\n\t\tmargin-bottom: 10px;\r\n\t}\r\n\r\n\t.blue-btn {\r\n\t\twidth: 100px;\r\n\t\theight: 100px;\r\n\t\tmargin: 8px;\r\n\t}\r\n\t.right {\r\n\t\twidth: 50% !important;\r\n\t}\r\n\t.right button span {\r\n\t\tfont-size: 14px;\r\n\t}\r\n\r\n\t.right button.siswa {\r\n\t\tfont-size: 14px;\r\n\t}\r\n}\r\n@media screen and (max-width: 810px) {\r\n\t.container-fluid {\r\n\t\tflex-direction: column;\r\n\t}\r\n\t.left,\r\n\t.right {\r\n\t\twidth: 100% !important;\r\n\t}\r\n\t.right {\r\n\t\theight: 100%;\r\n\t}\r\n\t.right button span {\r\n\t\tfont-size: 16px;\r\n\t}\r\n\r\n\t.right button.siswa {\r\n\t\tfont-size: 16px;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 576px) {\r\n\t.left .ket-guru p {\r\n\t\tfont-size: 13px;\r\n\t\tdisplay: none;\r\n\t\tvisibility: hidden;\r\n\t}\r\n\t.alert-warning {\r\n\t\twidth: 400px !important;\r\n\t}\r\n\t.alert-success {\r\n\t\twidth: 450px !important;\r\n\t}\r\n}\r\n', ""]), e["default"] = c;
}]);