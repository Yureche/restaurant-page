(() => {
  var e = {
      426: (e, n, t) => {
        "use strict";
        t.d(n, { Z: () => v });
        var r = t(81),
          o = t.n(r),
          a = t(645),
          i = t.n(a),
          s = t(667),
          c = t.n(s),
          l = new URL(t(16), t.b),
          d = new URL(t(476), t.b),
          p = new URL(t(495), t.b),
          u = i()(o()),
          f = c()(l),
          m = c()(d),
          h = c()(p);
        u.push([
          e.id,
          '@font-face {\n  font-family: "Fuzzy";\n  src: url(' +
            f +
            ');\n  font-weight: 600;\n  font-style: normal;\n}\n@font-face {\n  font-family: "Outfit";\n  src: url(' +
            m +
            ');\n  font-weight: 400;\n  font-style: normal;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #f0e9d2;\n}\nheader {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  margin: 0 15px;\n  position: sticky;\n  z-index: 100;\n}\n\n.logo {\n  font-size: 60px;\n  margin: 5px 0 15px;\n  color: #678983;\n  font-family: "Fuzzy", sans-serif;\n}\n\n.navbar {\n  display: flex;\n  flex-direction: row;\n  font-size: 25px;\n  font-family: "Outfit";\n}\n\n.navbar_item {\n  margin: 7px;\n  transition: 0.3s;\n  color: #678983;\n}\n\n.navbar_item::after {\n  content: "";\n  width: 0;\n  height: 2px;\n  display: block;\n  background: #678983;\n  transition: 300ms;\n}\n\n.navbar_item:hover::after {\n  width: 100%;\n}\n\n@media screen and (max-width: 500px) {\n  .logo {\n    font-size: 48px;\n  }\n  .navbar {\n    font-size: 17.5px;\n  }\n  .menu {\n    flex-wrap: wrap;\n  }\n}\n\n#content {\n  /* background-color: #fff; */\n  width: 100%;\n  margin: 0;\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: 7rem;\n}\n\nselect {\n  padding: 8px 12px;\n  color: #333;\n  background-color: #eee;\n  border: 1px solid #ddd;\n  cursor: pointer;\n  border-radius: 5px;\n  transition: 0.2s;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url(' +
            h +
            ');\n  background-position: right 10px top 50%;\n  background-repeat: no-repeat;\n  background-size: 10px;\n  padding-right: 30px;\n  font-family: "Helvetica Neue", "Helvetica";\n  font-size: 15px;\n  display: none;\n}\n\nselect:focus,\nselect:hover {\n  outline: none;\n  border: 1px solid #bbb;\n}\n\n.home {\n  /* border: 1px solid black; */\n  width: 90%;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.home_image {\n  border-radius: 100%;\n  border: 2px solid #fff;\n}\n\n.home_description {\n  font-size: 25px;\n  font-family: "Helvetica Neue", "Helvetica";\n}\n',
          "",
        ]);
        const v = u;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var d = [].concat(e[l]);
                (r && i[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  n.push(d));
              }
            }),
            n
          );
        };
      },
      667: (e) => {
        "use strict";
        e.exports = function (e, n) {
          return (
            n || (n = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                n.hash && (e += n.hash),
                /["'() \t\n]|(%20)/.test(e) || n.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : e)
              : e
          );
        };
      },
      81: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        "use strict";
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var c = e[s],
              l = r.base ? c[0] + r.base : c[0],
              d = a[l] || 0,
              p = "".concat(l, " ").concat(d);
            a[l] = d + 1;
            var u = t(p),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== u) n[u].references++, n[u].updater(f);
            else {
              var m = o(f, r);
              (r.byIndex = s),
                n.splice(s, 0, { identifier: p, updater: m, references: 1 });
            }
            i.push(p);
          }
          return i;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var s = t(a[i]);
              n[s].references--;
            }
            for (var c = r(e, o), l = 0; l < a.length; l++) {
              var d = t(a[l]);
              0 === n[d].references && (n[d].updater(), n.splice(d, 1));
            }
            a = c;
          };
        };
      },
      569: (e) => {
        "use strict";
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      565: (e, n, t) => {
        "use strict";
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
      239: () => {
        const e = document.createElement("header");
        document.body.appendChild(e);
        const n = document.createElement("h1");
        (n.textContent = "Restaurant"),
          n.classList.add("logo"),
          e.appendChild(n);
        const t = document.createElement("div");
        t.classList.add("navbar"), e.appendChild(t);
        const r = document.createElement("p"),
          o = document.createElement("p");
        (r.textContent = "Home"),
          r.classList.add("navbar_item", "navbar_home"),
          (o.textContent = "Menu"),
          o.classList.add("navbar_item", "navbar_menu"),
          t.append(r, o);
      },
      83: () => {
        const e = document.querySelector("#content"),
          n = document.createElement("select");
        n.classList.add("select");
        const t = document.createElement("option");
        (t.disabled = !0),
          (t.selected = !0),
          (t.text = "Choose meal"),
          n.appendChild(t);
        const r = ["Pizza", "Hamburger", "Coke", "Ice Cream"];
        for (let e = 0; e <= 3; ++e) {
          const t = document.createElement("option");
          (t.text = r[e]), n.appendChild(t);
        }
        e.appendChild(n);
      },
      495: (e) => {
        "use strict";
        e.exports =
          'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50"> <polygon points="0,0 100,0 50, 50" style="fill:%23666"/></svg>';
      },
      16: (e, n, t) => {
        "use strict";
        e.exports = t.p + "df2baea520e509e74cbf.ttf";
      },
      476: (e, n, t) => {
        "use strict";
        e.exports = t.p + "7d17abd5c1a78120ae80.ttf";
      },
      948: (e, n, t) => {
        "use strict";
        e.exports = t.p + "6415c7826f02854f060e.jpeg";
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.m = e),
    (t.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return t.d(n, { a: n }), n;
    }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + "");
      var n = t.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var r = n.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = e);
    })(),
    (t.b = document.baseURI || self.location.href),
    (() => {
      "use strict";
      t(239), t(83);
      var e = t(948);
      const n = document.getElementById("content"),
        r = document.createElement("div");
      r.classList.add("home"), n.appendChild(r);
      const o = new Image(250, 250);
      o.classList.add("home_image"), (o.src = e), r.appendChild(o);
      const a = document.createElement("p");
      (a.textContent = "Welcome to my restaurant!"),
        a.classList.add("home_description"),
        r.appendChild(a);
      var i = t(379),
        s = t.n(i),
        c = t(795),
        l = t.n(c),
        d = t(569),
        p = t.n(d),
        u = t(565),
        f = t.n(u),
        m = t(216),
        h = t.n(m),
        v = t(589),
        g = t.n(v),
        b = t(426),
        y = {};
      (y.styleTagTransform = g()),
        (y.setAttributes = f()),
        (y.insert = p().bind(null, "head")),
        (y.domAPI = l()),
        (y.insertStyleElement = h()),
        s()(b.Z, y),
        b.Z && b.Z.locals && b.Z.locals;
      const x = document.querySelector(".navbar_menu"),
        w = document.querySelector("select");
      x.addEventListener("click", () => {
        (w.style.display = "block"), (E.style.display = "none");
      });
      const C = document.querySelector(".navbar_home"),
        E = document.querySelector(".home");
      C.addEventListener("click", () => {
        (E.style.display = "flex"), (w.style.display = "none");
      });
    })();
})();
