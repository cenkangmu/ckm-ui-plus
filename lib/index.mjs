import { openBlock as l, createElementBlock as n, normalizeClass as C, normalizeStyle as f, renderSlot as j, createElementVNode as i, Fragment as K, renderList as L, ref as w, onMounted as D, watch as M, unref as g, onBeforeUnmount as J, resolveComponent as Q, createVNode as Y, createTextVNode as E, toDisplayString as h, createCommentVNode as v, computed as z, isRef as I, withModifiers as R, pushScopeId as N, popScopeId as W, withDirectives as Z, vModelText as ee } from "vue";
const k = (e, u) => {
  const t = e.__vccOpts || e;
  for (const [s, a] of u)
    t[s] = a;
  return t;
}, te = {
  name: "c-button"
}, le = /* @__PURE__ */ Object.assign(te, {
  props: {
    height: { type: String },
    width: { type: String },
    background: { type: String },
    color: { type: String },
    fontSize: { type: String },
    type: { type: String, default: "default" },
    radius: { type: String, default: "5px" },
    showType: { type: String, default: "background" },
    disable: { type: Boolean }
  },
  setup(e) {
    return (u, t) => (l(), n("div", {
      class: C(["c-button", "c-button-" + e.type + "-" + e.showType + (e.disable ? " c-disable" : "")]),
      style: f({
        height: e.height,
        width: e.width,
        borderRadius: e.radius,
        background: e.background,
        color: e.color,
        fontSize: e.fontSize
      })
    }, [
      j(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ne = /* @__PURE__ */ k(le, [["__scopeId", "data-v-c4a66179"]]), ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ne
}, Symbol.toStringTag, { value: "Module" }));
const ce = { class: "c-dividing-line" }, ie = {
  name: "c-dividing-line"
}, oe = /* @__PURE__ */ Object.assign(ie, {
  props: {
    lineHeight: { type: String, default: "1px" },
    lineColor: { type: String },
    textColor: { type: String },
    fontSize: { type: String }
  },
  setup(e) {
    return (u, t) => (l(), n("div", ce, [
      i("div", {
        class: "c-line",
        style: f({
          background: e.lineColor,
          height: e.lineHeight
        })
      }, null, 4),
      i("div", {
        class: "c-text",
        style: f({
          color: e.textColor,
          fontSize: e.fontSize
        })
      }, [
        j(u.$slots, "default", {}, void 0, !0)
      ], 4),
      i("div", {
        class: "c-line",
        style: f({
          background: e.lineColor,
          height: e.lineHeight
        })
      }, null, 4)
    ]));
  }
}), se = /* @__PURE__ */ k(oe, [["__scopeId", "data-v-be1409d7"]]), ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: se
}, Symbol.toStringTag, { value: "Module" }));
const de = {
  name: "c-load-icon",
  props: {
    color: {
      default: "#ccc"
    },
    lineNum: {
      default: 8
    },
    size: {
      default: "16px"
    },
    lineWidth: {
      default: "2px"
    }
  }
};
function re(e, u, t, s, a, c) {
  return l(), n("div", {
    class: "loadingBox",
    style: f({
      width: t.size,
      height: t.size
    })
  }, [
    (l(!0), n(K, null, L(t.lineNum, (o) => (l(), n("div", {
      class: "loadingItem",
      style: f({
        width: t.lineWidth,
        transformOrigin: "50% 50%",
        transform: `translate(-50%, -50%) rotate(calc(360deg / 8 * ${o}))`
      })
    }, [
      i("div", {
        style: f({ background: t.color })
      }, null, 4)
    ], 4))), 256))
  ], 4);
}
const fe = /* @__PURE__ */ k(de, [["render", re], ["__scopeId", "data-v-d625f505"]]), ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fe
}, Symbol.toStringTag, { value: "Module" }));
const he = {
  name: "c-progress-loop"
}, ve = /* @__PURE__ */ Object.assign(he, {
  props: {
    value: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    size: { type: String, default: "50px" },
    fontSize: { type: String, default: "12px" },
    color: { type: String, default: "#333" },
    lineColor: { type: String, default: "#eee" },
    activeColor: { type: String, default: "#999" },
    lineWidth: { type: Number, default: 3 }
  },
  setup(e) {
    const u = e;
    let t = w(), s, a, c = 0, o = u.size.replace("px", ""), b;
    D(() => {
      t.value.width = o, t.value.height = o, s = t.value.getContext("2d"), M(() => u.value, (y) => {
        $();
      }, { immediate: !0 }), M(() => u.max, (y) => {
        $();
      }, { immediate: !0 });
    });
    function $() {
      a = Math.round(u.value / u.max * 100), clearInterval(b), b = setInterval(() => {
        c === a && clearInterval(b), c < a && c++, c > a && c--, c > 100 && (c = 100), c < 0 && (c = 0), T();
      }, 1e3 / 60);
    }
    function T() {
      s.clearRect(0, 0, o, o), S(c + "%"), m(u.lineColor, 100), m(u.activeColor, c);
    }
    function S(y) {
      s.font = u.fontSize + " \u5FAE\u8F6F\u96C5\u9ED1", s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = u.color, s.fillText(y, o / 2, o / 2 + 2);
    }
    function m(y, _) {
      let d = _ / 100 * 4 - 1;
      s.beginPath(), s.strokeStyle = y, s.lineWidth = u.lineWidth, s.lineCap = "round", s.arc(
        o / 2,
        o / 2,
        o / 2 - u.lineWidth / 2,
        -Math.PI / 2,
        Math.PI / 2 * d,
        !1
      ), s.stroke();
    }
    return (y, _) => (l(), n("div", {
      class: "c-progress-bar",
      style: f({
        width: g(o),
        height: g(o)
      })
    }, [
      i("canvas", {
        ref_key: "canvas",
        ref: t
      }, null, 512)
    ], 4));
  }
}), ye = /* @__PURE__ */ k(ve, [["__scopeId", "data-v-e15fe53d"]]), _e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ye
}, Symbol.toStringTag, { value: "Module" }));
const be = { key: 0 }, me = {
  key: 1,
  class: "c-pull-load-info"
}, pe = { key: 1 }, Se = {
  key: 1,
  class: "c-pull-load-info"
}, ke = {
  name: "c-pull-load"
}, $e = /* @__PURE__ */ Object.assign(ke, {
  props: {
    width: String,
    height: String,
    onLoad: Function,
    loadText: { type: String, default: "\u52A0\u8F7D\u4E2D" },
    allText: { type: String, default: "\u5DF2\u7ECF\u5230\u5E95\u4E86" },
    modelValue: Boolean,
    isAll: Boolean
  },
  setup(e, { emit: u }) {
    const t = e, s = w();
    return D(() => {
      let a = s.value;
      a.onscroll = () => {
        if (!t.isAll && a.clientHeight + a.scrollTop + 2 >= a.scrollHeight) {
          if (t.modelValue)
            return;
          u("update:modelValue", !0), typeof t.onLoad == "function" && t.onLoad();
        }
      };
    }), J(() => s.value.onscroll = null), (a, c) => {
      const o = Q("c-load-icon");
      return l(), n("div", {
        class: "c-pull-load",
        ref_key: "scrollBox",
        ref: s,
        style: f({
          width: e.width,
          height: e.height
        })
      }, [
        j(a.$slots, "default", {}, void 0, !0),
        !e.isAll && e.modelValue ? (l(), n("div", be, [
          a.$slots.load ? j(a.$slots, "load", { key: 0 }, void 0, !0) : (l(), n("div", me, [
            Y(o, { style: { "margin-right": "10px" } }),
            E(" " + h(e.loadText), 1)
          ]))
        ])) : v("", !0),
        e.isAll ? (l(), n("div", pe, [
          a.$slots.all ? j(a.$slots, "all", { key: 0 }, void 0, !0) : (l(), n("div", Se, h(e.allText), 1))
        ])) : v("", !0)
      ], 4);
    };
  }
}), xe = /* @__PURE__ */ k($e, [["__scopeId", "data-v-0eaa8a2b"]]), we = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xe
}, Symbol.toStringTag, { value: "Module" }));
const Ce = {
  name: "c-sticky"
}, Ve = /* @__PURE__ */ Object.assign(Ce, {
  props: {
    direction: { type: String, default: "top" },
    position: { type: String, default: "0" }
  },
  setup(e) {
    return (u, t) => (l(), n("div", {
      class: "c-sticky",
      style: f(`${e.direction}:${e.position}`)
    }, [
      j(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Oe = /* @__PURE__ */ k(Ve, [["__scopeId", "data-v-1b471052"]]), je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oe
}, Symbol.toStringTag, { value: "Module" }));
const Ke = { class: "c-tag c-iconfont" }, Te = {
  name: "c-tag"
}, Ae = /* @__PURE__ */ Object.assign(Te, {
  props: {
    height: { type: String },
    width: { type: String },
    background: { type: String },
    color: { type: String },
    fontSize: { type: String },
    type: { type: String, default: "default" },
    radius: { type: String, default: "0" },
    showType: { type: String, default: "background" },
    showClose: { type: Boolean },
    disable: { type: Boolean }
  },
  setup(e, { emit: u }) {
    function t() {
      u("close");
    }
    return (s, a) => (l(), n("div", Ke, [
      i("div", {
        class: C(["c-tag-box", "c-tag-" + e.type + "-" + e.showType + (e.disable ? " c-disable" : "")]),
        style: f({
          height: e.height,
          width: e.width,
          borderRadius: e.radius,
          background: e.background,
          color: e.color,
          fontSize: e.fontSize
        })
      }, [
        j(s.$slots, "default", {}, void 0, !0),
        e.showClose ? (l(), n("span", {
          key: 0,
          class: "c-tag-close",
          onClick: t
        }, "\uE647")) : v("", !0)
      ], 6)
    ]));
  }
}), Ie = /* @__PURE__ */ k(Ae, [["__scopeId", "data-v-102a8cc3"]]), ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ie
}, Symbol.toStringTag, { value: "Module" }));
const U = (e) => (N("data-v-7972f1ea"), e = e(), W(), e), Be = { key: 0 }, Le = {
  key: 1,
  class: "no-text"
}, Me = /* @__PURE__ */ U(() => /* @__PURE__ */ i("div", { class: "c-chain-icon" }, "\uE646", -1)), Pe = {
  key: 0,
  class: "c-mark c-iconfont"
}, Ne = { class: "c-main" }, We = /* @__PURE__ */ U(() => /* @__PURE__ */ i("div", null, "\u8BF7\u9009\u62E9", -1)), Fe = { class: "c-main-result" }, Ee = ["onClick"], Re = { key: 0 }, He = { key: 0 }, De = { key: 0 }, Ue = /* @__PURE__ */ E("\u8BF7\u9009\u62E9 "), Xe = { class: "c-chain-list" }, qe = ["onClick"], Ge = {
  name: "c-chain"
}, Je = /* @__PURE__ */ Object.assign(Ge, {
  props: {
    data: Array,
    modelValue: null,
    labelKey: { default: "label" },
    valueKey: { default: "value" },
    childrenKey: { default: "children" },
    label: null,
    labelWidth: { type: String, default: "5em" },
    labelAlign: String,
    inputAlign: { type: String, default: "right" },
    placeholder: null,
    separator: { type: String, default: "/" },
    showLast: Boolean,
    disable: Boolean,
    showClear: Boolean,
    change: Function,
    close: Function,
    cancel: Function
  },
  setup(e, { emit: u }) {
    const t = e;
    let s = w([]), a = w(!1), c = w(0), o = z(() => {
      let { value: d } = s, { data: r, valueKey: p, childrenKey: x } = t;
      return c.value = 0, d.length && d.forEach((A) => {
        for (let V in r)
          r[V][p] === A && r[V][x] && (c.value++, r = r[V][x]);
      }), r;
    });
    const b = z(() => {
      let { data: d, valueKey: r, labelKey: p, childrenKey: x, separator: A, modelValue: V, showLast: F } = t, O = [];
      return V.length && V.forEach((G) => {
        for (let P in d)
          d[P][r] === G && (O.push(d[P][p]), d[P][x] && (d = d[P][x]));
      }), F ? O[O.length - 1] : O.join(A);
    }), $ = z(() => {
      let { value: d } = s, { data: r, valueKey: p, labelKey: x, childrenKey: A } = t, V = [];
      return d.length && d.forEach((F) => {
        for (let O in r)
          r[O][p] === F && (V.push(r[O][x]), r[O][A] && (r = r[O][A]));
      }), V;
    });
    M(a, (d) => {
      s.value = [], d && s.value.push(...t.modelValue);
    });
    function T(d) {
      c.value < s.value.length ? s.value.splice(c.value, 1, d[t.valueKey]) : s.value.push(d[t.valueKey]);
    }
    function S(d) {
      s.value.splice(d, s.value.length);
    }
    function m() {
      u("update:modelValue", s.value), typeof t.change == "function" && t.change(s.value), y();
    }
    function y() {
      a.value = !1, typeof t.close == "function" && t.close();
    }
    function _() {
      typeof t.cancel == "function" && t.cancel(), y();
    }
    return (d, r) => (l(), n(K, null, [
      i("div", {
        class: C(["c-chain c-iconfont", e.disable ? "c-disable" : ""]),
        onClick: r[1] || (r[1] = (p) => I(a) ? a.value = !0 : a = !0)
      }, [
        i("div", {
          class: "c-chain-label",
          style: f({
            width: e.labelWidth,
            textAlign: e.labelAlign
          })
        }, h(e.label), 5),
        i("div", {
          class: "c-chain-text",
          style: f({ textAlign: e.inputAlign })
        }, [
          e.modelValue.length ? (l(), n("span", Be, h(g(b)), 1)) : (l(), n("span", Le, "\u8BF7\u9009\u62E9")),
          e.showClear && e.modelValue ? (l(), n("div", {
            key: 2,
            class: "c-input-clear",
            onClick: r[0] || (r[0] = R((p) => u("update:modelValue", ""), ["stop"]))
          }, "\uE647 ")) : v("", !0)
        ], 4),
        Me
      ], 2),
      g(a) ? (l(), n("div", Pe, [
        i("div", Ne, [
          i("div", { class: "c-main-btn" }, [
            i("div", { onClick: _ }, "\u53D6\u6D88"),
            We,
            i("div", { onClick: m }, "\u786E\u5B9A")
          ]),
          i("div", Fe, [
            (l(!0), n(K, null, L(g($), (p, x) => (l(), n("span", {
              style: { color: "#0090ff" },
              onClick: (A) => S(x)
            }, [
              g($).length > 1 && x !== 0 ? (l(), n("span", Re, " / ")) : v("", !0),
              E(h(p), 1)
            ], 8, Ee))), 256)),
            g(s).length === g(c) ? (l(), n("span", He, [
              g($).length !== 0 ? (l(), n("span", De, " / ")) : v("", !0),
              Ue
            ])) : v("", !0)
          ]),
          i("div", Xe, [
            (l(!0), n(K, null, L(g(o), (p) => (l(), n("div", {
              class: C(["c-chain-item", g(s).indexOf(p[e.valueKey]) > -1 ? "c-chain-active" : ""]),
              onClick: (x) => T(p),
              key: p[e.valueKey]
            }, [
              i("div", null, h(p[e.labelKey]), 1)
            ], 10, qe))), 128))
          ])
        ])
      ])) : v("", !0)
    ], 64));
  }
}), Qe = /* @__PURE__ */ k(Je, [["__scopeId", "data-v-7972f1ea"]]), Ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qe
}, Symbol.toStringTag, { value: "Module" }));
const Ze = { class: "c-input c-iconfont" }, et = ["placeholder", "type", "value"], tt = {
  name: "c-input"
}, lt = /* @__PURE__ */ Object.assign(tt, {
  props: {
    modelValue: null,
    type: { type: String },
    label: null,
    labelWidth: { type: String, default: "4em" },
    labelAlign: null,
    inputAlign: String,
    placeholder: null,
    maxLength: Number,
    max: Number,
    min: Number,
    showClear: Boolean
  },
  setup(e, { emit: u }) {
    const t = e;
    function s(c) {
      let o = c.target.value;
      (!t.type || t.type === "text") && t.maxLength && o.length > t.maxLength && (o = c.target.value = o.substr(0, t.maxLength)), t.type === "number" && (t.max && o > t.max && (o = c.target.value = c.target.value = t.max), t.min && o < t.min && (o = c.target.value = t.min)), a(o);
    }
    function a(c) {
      t.type === "number" ? u("update:modelValue", Number(c)) : u("update:modelValue", c);
    }
    return (c, o) => (l(), n("div", Ze, [
      i("div", {
        class: "c-input-label",
        style: f({
          width: e.labelWidth,
          textAlign: e.labelAlign
        })
      }, h(e.label), 5),
      i("input", {
        placeholder: e.placeholder,
        type: e.type,
        value: e.modelValue,
        onInput: o[0] || (o[0] = (b) => s(b)),
        style: f({ textAlign: e.inputAlign })
      }, null, 44, et),
      e.maxLength ? (l(), n("div", {
        key: 0,
        class: C(["c-input-max", String(e.modelValue).length === e.maxLength ? "max-reached" : ""])
      }, h(String(e.modelValue).length) + "/" + h(e.maxLength), 3)) : v("", !0),
      e.showClear && String(e.modelValue).length ? (l(), n("div", {
        key: 1,
        class: "c-input-clear",
        onClick: o[1] || (o[1] = R((b) => a(""), ["stop"]))
      }, "\uE647 ")) : v("", !0)
    ]));
  }
}), nt = /* @__PURE__ */ k(lt, [["__scopeId", "data-v-2fcb422d"]]), at = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nt
}, Symbol.toStringTag, { value: "Module" }));
const X = (e) => (N("data-v-7ff74569"), e = e(), W(), e), ct = { key: 0 }, it = {
  key: 1,
  class: "no-text"
}, ot = {
  key: 2,
  class: "c-multiple-choice-count"
}, st = /* @__PURE__ */ X(() => /* @__PURE__ */ i("div", { class: "c-multiple-choice-icon" }, "\uE646", -1)), ut = {
  key: 0,
  class: "c-mark c-iconfont"
}, dt = { class: "c-main" }, rt = { class: "c-main-label" }, ft = { key: 0 }, gt = { key: 1 }, ht = /* @__PURE__ */ X(() => /* @__PURE__ */ i("div", { style: { "margin-left": "5px" } }, "\u5168\u9009", -1)), vt = { style: { flex: "1", "text-align": "center" } }, yt = { class: "c-multiple-choice-list" }, _t = ["onClick"], bt = { key: 0 }, mt = { key: 1 }, pt = {
  name: "c-multiple-choice"
}, St = /* @__PURE__ */ Object.assign(pt, {
  props: {
    data: Array,
    modelValue: null,
    labelKey: { default: "label" },
    valueKey: { default: "value" },
    label: null,
    labelWidth: { type: String, default: "5em" },
    labelAlign: String,
    inputAlign: { type: String, default: "right" },
    placeholder: null,
    disable: Boolean,
    change: Function,
    close: Function,
    cancel: Function,
    separator: { type: String, default: "\u3001" },
    showOne: Boolean
  },
  setup(e, { emit: u }) {
    const t = e, s = z(() => {
      let _ = [];
      return t.data.forEach((d) => {
        t.modelValue.includes(d[t.valueKey]) && _.push(d[t.labelKey]);
      }), _.length ? t.showOne ? _[0] : _.join(t.separator) : "";
    });
    let a = w([]), c = w(!1), o = w(!1);
    M(c, (_) => {
      a.value = [], _ && a.value.push(...t.modelValue), $();
    });
    function b() {
      o.value = !o.value, a.value = [], o.value && (a.value = t.data.map((_) => _[t.valueKey]));
    }
    function $() {
      o.value = t.data.length && a.value.length === t.data.length;
    }
    function T(_) {
      let d = a.value.indexOf(_[t.valueKey]);
      d === -1 ? a.value.push(_[t.valueKey]) : a.value.splice(d, 1), $();
    }
    function S() {
      u("update:modelValue", a.value), typeof t.change == "function" && t.change(a.value), m();
    }
    function m() {
      c.value = !1, typeof t.close == "function" && t.close();
    }
    function y() {
      typeof t.cancel == "function" && t.cancel(), m();
    }
    return (_, d) => (l(), n(K, null, [
      i("div", {
        class: C(["c-multiple-choice c-iconfont", e.disable ? "c-disable" : ""]),
        onClick: d[0] || (d[0] = (r) => I(c) ? c.value = !0 : c = !0)
      }, [
        i("div", {
          class: "c-multiple-choice-label",
          style: f({
            width: e.labelWidth,
            textAlign: e.labelAlign
          })
        }, h(e.label), 5),
        i("div", {
          class: "c-multiple-choice-text",
          style: f({ textAlign: e.inputAlign })
        }, [
          e.modelValue.length ? (l(), n("span", ct, h(g(s)), 1)) : (l(), n("span", it, "\u8BF7\u9009\u62E9")),
          e.modelValue.length ? (l(), n("span", ot, h(e.modelValue.length), 1)) : v("", !0)
        ], 4),
        st
      ], 2),
      g(c) ? (l(), n("div", ut, [
        i("div", dt, [
          i("div", rt, [
            i("div", {
              style: f([{ display: "flex", "align-items": "center" }, { color: g(o) ? "#0090ff" : "#666" }]),
              onClick: b
            }, [
              g(o) ? (l(), n("div", ft, "\uE630")) : (l(), n("div", gt, "\uE696")),
              ht
            ], 4),
            i("div", vt, h(e.label), 1),
            i("div", {
              style: { "padding-left": "15px", color: "#0090ff" },
              onClick: d[1] || (d[1] = (r) => {
                I(a) ? a.value = [] : a = [], I(o) ? o.value = !1 : o = !1;
              })
            }, "\u6E05\u9664")
          ]),
          i("div", yt, [
            (l(!0), n(K, null, L(e.data, (r) => (l(), n("div", {
              class: C(["c-multiple-choice-item", g(a).indexOf(r[e.valueKey]) !== -1 ? "c-multiple-choice-active" : ""]),
              onClick: (p) => T(r),
              key: r[e.valueKey]
            }, [
              g(a).indexOf(r[e.valueKey]) !== -1 ? (l(), n("div", bt, "\uE630")) : (l(), n("div", mt, "\uE696")),
              i("div", null, h(r[e.labelKey]), 1)
            ], 10, _t))), 128))
          ]),
          i("div", { class: "c-multiple-choice-btn" }, [
            i("div", { onClick: y }, "\u53D6\u6D88"),
            i("div", { onClick: S }, "\u786E\u5B9A")
          ])
        ])
      ])) : v("", !0)
    ], 64));
  }
}), kt = /* @__PURE__ */ k(St, [["__scopeId", "data-v-7ff74569"]]), $t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kt
}, Symbol.toStringTag, { value: "Module" }));
const xt = (e) => (N("data-v-cccdc874"), e = e(), W(), e), wt = { key: 0 }, Ct = {
  key: 1,
  class: "no-text"
}, Vt = /* @__PURE__ */ xt(() => /* @__PURE__ */ i("div", { class: "c-single-choice-icon" }, "\uE646", -1)), Ot = {
  key: 0,
  class: "c-mark c-iconfont"
}, jt = { class: "c-main" }, Kt = { class: "c-main-label" }, Tt = { class: "c-single-choice-list" }, At = ["onClick"], It = { key: 0 }, zt = { key: 1 }, Bt = {
  name: "c-single-choice"
}, Lt = /* @__PURE__ */ Object.assign(Bt, {
  props: {
    data: Array,
    modelValue: null,
    labelKey: { default: "label" },
    valueKey: { default: "value" },
    label: null,
    labelWidth: { type: String, default: "5em" },
    labelAlign: String,
    inputAlign: { type: String, default: "right" },
    placeholder: null,
    disable: Boolean,
    showClear: Boolean,
    change: Function,
    close: Function,
    cancel: Function
  },
  setup(e, { emit: u }) {
    const t = e, s = z(() => {
      let S = "";
      return t.data.forEach((m) => {
        m[t.valueKey] === t.modelValue && (S = m[t.labelKey]);
      }), S;
    });
    let a = w(), c = w(!1);
    M(c, (S) => {
      S && (a.value = t.modelValue);
    });
    function o(S) {
      a.value = S[t.valueKey];
    }
    function b() {
      u("update:modelValue", a.value), typeof t.change == "function" && t.change(a.value), $();
    }
    function $() {
      c.value = !1, typeof t.close == "function" && t.close();
    }
    function T() {
      typeof t.cancel == "function" && t.cancel(), $();
    }
    return (S, m) => (l(), n(K, null, [
      i("div", {
        class: C(["c-single-choice c-iconfont", e.disable ? "c-disable" : ""]),
        onClick: m[1] || (m[1] = (y) => I(c) ? c.value = !0 : c = !0)
      }, [
        i("div", {
          class: "c-single-choice-label",
          style: f({
            width: e.labelWidth,
            textAlign: e.labelAlign
          })
        }, h(e.label), 5),
        i("div", {
          class: "c-single-choice-text",
          style: f({ textAlign: e.inputAlign })
        }, [
          e.modelValue ? (l(), n("span", wt, h(g(s)), 1)) : (l(), n("span", Ct, "\u8BF7\u9009\u62E9")),
          e.showClear && e.modelValue ? (l(), n("div", {
            key: 2,
            class: "c-input-clear",
            onClick: m[0] || (m[0] = R((y) => u("update:modelValue", ""), ["stop"]))
          }, "\uE647 ")) : v("", !0)
        ], 4),
        Vt
      ], 2),
      g(c) ? (l(), n("div", Ot, [
        i("div", jt, [
          i("div", Kt, h(e.label), 1),
          i("div", Tt, [
            (l(!0), n(K, null, L(e.data, (y) => (l(), n("div", {
              class: C(["c-single-choice-item", g(a) === y[e.valueKey] ? "c-single-choice-active" : ""]),
              onClick: (_) => o(y),
              key: y[e.valueKey]
            }, [
              g(a) === y[e.valueKey] ? (l(), n("div", It, "\uE642")) : (l(), n("div", zt, "\uE6A6")),
              i("div", null, h(y[e.labelKey]), 1)
            ], 10, At))), 128))
          ]),
          i("div", { class: "c-single-choice-btn" }, [
            i("div", { onClick: T }, "\u53D6\u6D88"),
            i("div", { onClick: b }, "\u786E\u5B9A")
          ])
        ])
      ])) : v("", !0)
    ], 64));
  }
}), Mt = /* @__PURE__ */ k(Lt, [["__scopeId", "data-v-cccdc874"]]), Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mt
}, Symbol.toStringTag, { value: "Module" }));
const Nt = {
  name: "c-switch"
}, Wt = /* @__PURE__ */ Object.assign(Nt, {
  props: {
    width: { type: String, default: "60px" },
    height: { type: String, default: "30px" },
    background: { type: String, default: "#eee" },
    openBackground: { type: String, default: "#00ef72" },
    color: { type: String, default: "#fff" },
    openColor: { type: String, default: "#fff" },
    modelValue: Boolean,
    disable: Boolean
  },
  setup(e, { emit: u }) {
    const t = e;
    function s() {
      t.disable || u("update:modelValue", !t.modelValue);
    }
    return (a, c) => (l(), n("div", {
      class: C(["c-switch", e.disable ? "c-disable" : ""]),
      style: f({
        width: e.width,
        height: e.height,
        background: e.modelValue ? e.openBackground : e.background
      }),
      onClick: s
    }, [
      i("div", {
        class: "c-switch-circular",
        style: f({
          background: e.modelValue ? e.openColor : e.color,
          width: `calc(${e.height}  - 6px)`,
          height: `calc(${e.height}  - 6px)`,
          transform: `translateX(${e.modelValue ? `calc(${e.width} - ${e.height})` : "0"})`
        })
      }, null, 4)
    ], 6));
  }
}), Ft = /* @__PURE__ */ k(Wt, [["__scopeId", "data-v-49cb18a6"]]), Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ft
}, Symbol.toStringTag, { value: "Module" }));
const q = (e) => (N("data-v-62492c6d"), e = e(), W(), e), Rt = {
  key: 0,
  class: "c-navbar-left"
}, Ht = /* @__PURE__ */ q(() => /* @__PURE__ */ i("span", null, "\uE601", -1)), Dt = { class: "c-navbar-title" }, Ut = {
  key: 0,
  class: "c-navbar-search"
}, Xt = /* @__PURE__ */ q(() => /* @__PURE__ */ i("div", { class: "c-search-icon" }, "\uE741", -1)), qt = ["placeholder"], Gt = { key: 1 }, Jt = {
  key: 1,
  class: "c-navbar-right"
}, Qt = {
  name: "c-navbar"
}, Yt = /* @__PURE__ */ Object.assign(Qt, {
  props: {
    title: String,
    width: { type: String },
    height: { type: String, default: "50px" },
    background: { type: String, default: "#fff" },
    backText: { type: String },
    rightText: { type: String },
    borderColor: { type: String },
    color: { type: String },
    showSearch: Boolean,
    placeholder: { type: String, default: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u641C\u7D22" },
    modelValue: String
  },
  setup(e, { emit: u }) {
    function t() {
      u("back");
    }
    function s(c) {
      u("update:modelValue", c.target.value);
    }
    function a() {
      u("tapRight");
    }
    return (c, o) => (l(), n("div", {
      class: "c-navbar c-iconfont",
      style: f({
        width: e.width,
        height: e.height,
        background: e.background,
        borderColor: e.borderColor,
        color: e.color
      })
    }, [
      !e.showSearch || c.$slots.left || e.backText ? (l(), n("div", Rt, [
        c.$slots.left ? j(c.$slots, "left", { key: 0 }, void 0, !0) : v("", !0),
        !c.$slots.left && e.backText ? (l(), n("div", {
          key: 1,
          class: "c-navbar-back",
          onClick: t
        }, [
          Ht,
          i("span", null, h(e.backText), 1)
        ])) : v("", !0)
      ])) : v("", !0),
      i("div", Dt, [
        e.showSearch ? (l(), n("div", Ut, [
          Xt,
          Z(i("input", {
            "onUpdate:modelValue": o[0] || (o[0] = (b) => I(modelValue) ? modelValue.value = b : null),
            onInput: o[1] || (o[1] = (b) => s(b)),
            placeholder: e.placeholder
          }, null, 40, qt), [
            [ee, e.modelValue]
          ])
        ])) : (l(), n("div", Gt, h(e.title), 1))
      ]),
      !e.showSearch || c.$slots.right || e.rightText ? (l(), n("div", Jt, [
        c.$slots.right ? j(c.$slots, "right", { key: 0 }, void 0, !0) : v("", !0),
        !c.$slots.right && e.rightText ? (l(), n("div", {
          key: 1,
          class: "c-navbar-right-default",
          onClick: a
        }, h(e.rightText), 1)) : v("", !0)
      ])) : v("", !0)
    ], 4));
  }
}), Zt = /* @__PURE__ */ k(Yt, [["__scopeId", "data-v-62492c6d"]]), el = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zt
}, Symbol.toStringTag, { value: "Module" }));
import("./iconfont.fc20e726.mjs");
const H = Object.assign({ "/src/components/base/c-button.vue": ae, "/src/components/base/c-dividing-line.vue": ue, "/src/components/base/c-load-icon.vue": ge, "/src/components/base/c-progress-loop.vue": _e, "/src/components/base/c-pull-load.vue": we, "/src/components/base/c-sticky.vue": je, "/src/components/base/c-tag.vue": ze, "/src/components/form/c-chain.vue": Ye, "/src/components/form/c-input.vue": at, "/src/components/form/c-multiple-choice.vue": $t, "/src/components/form/c-single-choice.vue": Pt, "/src/components/form/c-switch.vue": Et, "/src/components/nav/c-navbar.vue": el });
let B = {};
Object.keys(H).forEach((e) => {
  B[e.replace(/(\.\/|\.vue)/g, "").replace("/src/components/", "")] = H[e].default;
});
let tl = (e) => {
  e = e || window.Vue;
  for (let u in B)
    e.component(B[u].name, B[u]);
};
const nl = {
  install: tl,
  components: B
};
export {
  nl as default
};
