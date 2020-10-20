
!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/dist/"),
    n((n.s = 1));
})([
  function (e, t, n) {},
  function (e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var o = (function () {
      function e(t) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.coords = [10, 10, 150, 100]),
          (this.animationDir = 1),
          (this.fillColor = "green"),
          (this.canvas = document.createElement("canvas")),
          (this.canvas.width = 0.75 * window.innerWidth),
          (this.canvas.height = this.canvas.width / 2),
          (this.ctx = this.canvas.getContext("2d"));
      }
      var t, n, o;
      return (
        (t = e),
        (n = [
          {
            key: "createCanvas",
            value: function () {
              document.body.append(this.canvas);
            },
          },
          {
            key: "clearCanvas",
            value: function () {
              this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            },
          },
          {
            key: "setColor",
            value: function (e) {
              (this.fillColor = e),
                (document.body.style.backgroundColor = e),
                (document.body.style.filter = "brightness(150%)");
            },
          },
        ]) && r(t.prototype, n),
        o && r(t, o),
        e
      );
    })();
    function i(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return a(e);
        })(e) ||
        (function (e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return a(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return a(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function c(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var l = (function () {
      function e(t, n) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "green";
        c(this, e),
          (this.ctx = t),
          (this.coords = n),
          (this.color = r),
          (this.animationDir = 1);
      }
      var t, n, r;
      return (
        (t = e),
        (n = [
          {
            key: "drawSquare",
            value: function () {
              var e;
              (this.ctx.fillStyle = this.color),
                (e = this.ctx).fillRect.apply(e, i(this.coords));
            },
          },
          {
            key: "updateSquare",
            value: function (e) {
              var t = this;
              (this.color = e),
                (this.coords = this.coords.map(function (e) {
                  return e + 1 * t.animationDir;
                }));
            },
          },
          {
            key: "reverseAnimation",
            value: function () {
              this.animationDir *= -1;
            },
          },
        ]) && u(t.prototype, n),
        r && u(t, r),
        e
      );
    })();
    function s(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return y(e);
        })(e) ||
        (function (e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        })(e) ||
        f(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function d(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
            return;
          var n = [],
            r = !0,
            o = !1,
            i = void 0;
          try {
            for (
              var a, c = e[Symbol.iterator]();
              !(r = (a = c.next()).done) &&
              (n.push(a.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (o = !0), (i = e);
          } finally {
            try {
              r || null == c.return || c.return();
            } finally {
              if (o) throw i;
            }
          }
          return n;
        })(e, t) ||
        f(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function f(e, t) {
      if (e) {
        if ("string" == typeof e) return y(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? y(e, t)
            : void 0
        );
      }
    }
    function y(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    var m = { currentExample: null, currentEventListeners: [] };
    function v() {
      for (; m.currentEventListeners.length; ) {
        var e = d(m.currentEventListeners.pop(), 3),
          t = e[0],
          n = e[1],
          r = e[2];
        "window" === t
          ? (window.removeEventListener(n, r), console.log(r))
          : document.querySelector(t).removeEventListener(n, r);
      }
    }
    function h() {
      "CANVASDEMO" === m.currentExample &&
        document.body.removeChild(document.querySelector("canvas")),
        "DOMDEMO" === m.currentExample &&
          s(document.querySelectorAll(".card")).forEach(function (e) {
            return document.body.removeChild(e);
          });
    }
    document
      .querySelector("#canvas-demo")
      .addEventListener("click", function () {
        h(), v(), (m.currentExample = "CANVASDEMO");
        var e = new o();
        e.createCanvas();
        var t = [new l(e.ctx, e.coords, e.fillColor)];
        function n(n) {
          32 === n.which &&
            (n.preventDefault(),
            t.forEach(function (e) {
              return e.reverseAnimation();
            }),
            e.setColor(
              "#".concat(Math.floor(16777215 * Math.random()).toString(16))
            ));
        }
        function r(n) {
          n.preventDefault(),
            t.push(
              new l(
                e.ctx,
                e.coords.map(function (e) {
                  return e + 25;
                }),
                e.fillColor
              )
            );
        }
        window.requestAnimationFrame(function n() {
          e.clearCanvas(),
            t.forEach(function (t) {
              return t.updateSquare(e.fillColor);
            }),
            t.forEach(function (e) {
              return e.drawSquare();
            }),
            window.requestAnimationFrame(n),
            t.forEach(function (e) {
              e.coords[0] + e.coords[2] > window.innerWidth &&
                e.reverseAnimation(),
                e.coords[0] < 0 && e.reverseAnimation();
            });
        }),
          window.addEventListener("keydown", n),
          m.currentEventListeners.push(["window", "keydown", n]),
          window.addEventListener("mousedown", r),
          m.currentEventListeners.push(["window", "mousedown", r]);
      }),
      document
        .querySelector("#DOM-demo")
        .addEventListener("click", function () {
          v(),
            h(),
            (m.currentExample = "DOMDEMO"),
            (function () {
              var e,
                t = { key1: "hi", key2: { key3: "Hello" } },
                n =
                  (null == t || null === (e = t.key2) || void 0 === e
                    ? void 0
                    : e.key3) || t.key1;
              document.body.classList.add("center");
              var r = document.createElement("div");
              r.classList.add("card", "center"),
                (r.innerHTML = "<h2>".concat(n, " World!</h2>")),
                document.body.append(r);
              var o = document.createElement("div");
              o.classList.add("card", "center", "image-card"),
                document.body.appendChild(o);
              var i = document.createElement("img");
              (i.src = "./dist/".concat("images/yoda-stitch.jpg")),
                i.classList.add("card", "center"),
                (i.style.objectFit = "cover"),
                (i.style.filter = "grayscale(80%)"),
                document.body.appendChild(i);
            })();
        });
  },
]);
//# sourceMappingURL=main.js.map
