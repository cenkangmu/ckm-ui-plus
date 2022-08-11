import { openBlock as n, createElementBlock as a, normalizeClass as x, normalizeStyle as f, renderSlot as C, createElementVNode as i, Fragment as A, renderList as I, ref as V, onMounted as D, watch as L, unref as h, onBeforeUnmount as J, resolveComponent as Q, createVNode as Y, createTextVNode as E, toDisplayString as v, createCommentVNode as _, computed as B, isRef as K, withModifiers as R, pushScopeId as N, popScopeId as W, withDirectives as Z, vModelText as ee } from "vue";
const k = (e, u) => {
  const t = e.__vccOpts || e;
  for (const [s, c] of u)
    t[s] = c;
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
    return (u, t) => (n(), a("div", {
      class: x(["c-button", "c-button-" + e.type + "-" + e.showType + (e.disable ? " c-disable" : "")]),
      style: f({
        height: e.height,
        width: e.width,
        borderRadius: e.radius,
        background: e.background,
        color: e.color,
        fontSize: e.fontSize
      })
    }, [
      C(u.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ne = /* @__PURE__ */ k(le, [["__scopeId", "data-v-c4a66179"]]), ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ne
}, Symbol.toStringTag, { value: "Module" }));
const ce = { class: "c-dividing-line" }, oe = {
  name: "c-dividing-line"
}, ie = /* @__PURE__ */ Object.assign(oe, {
  props: {
    lineHeight: { type: String, default: "1px" },
    lineColor: { type: String },
    textColor: { type: String },
    fontSize: { type: String }
  },
  setup(e) {
    return (u, t) => (n(), a("div", ce, [
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
        C(u.$slots, "default", {}, void 0, !0)
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
}), se = /* @__PURE__ */ k(ie, [["__scopeId", "data-v-be1409d7"]]), ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
function re(e, u, t, s, c, l) {
  return n(), a("div", {
    class: "loadingBox",
    style: f({
      width: t.size,
      height: t.size
    })
  }, [
    (n(!0), a(A, null, I(t.lineNum, (o) => (n(), a("div", {
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
    let t = V(), s, c, l = 0, o = u.size.replace("px", ""), g;
    D(() => {
      t.value.width = o, t.value.height = o, s = t.value.getContext("2d"), L(() => u.value, (b) => {
        y();
      }, { immediate: !0 }), L(() => u.max, (b) => {
        y();
      }, { immediate: !0 });
    });
    function y() {
      c = Math.round(u.value / u.max * 100), clearInterval(g), g = setInterval(() => {
        l === c && clearInterval(g), l < c && l++, l > c && l--, l > 100 && (l = 100), l < 0 && (l = 0), T();
      }, 1e3 / 60);
    }
    function T() {
      s.clearRect(0, 0, o, o), $(l + "%"), p(u.lineColor, 100), p(u.activeColor, l);
    }
    function $(b) {
      s.font = u.fontSize + " \u5FAE\u8F6F\u96C5\u9ED1", s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = u.color, s.fillText(b, o / 2, o / 2 + 2);
    }
    function p(b, m) {
      let d = m / 100 * 4 - 1;
      s.beginPath(), s.strokeStyle = b, s.lineWidth = u.lineWidth, s.lineCap = "round", s.arc(
        o / 2,
        o / 2,
        o / 2 - u.lineWidth / 2,
        -Math.PI / 2,
        Math.PI / 2 * d,
        !1
      ), s.stroke();
    }
    return (b, m) => (n(), a("div", {
      class: "c-progress-bar",
      style: f({
        width: h(o),
        height: h(o)
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
    const t = e, s = V();
    return D(() => {
      let c = s.value;
      c.onscroll = () => {
        if (!t.isAll && c.clientHeight + c.scrollTop + 2 >= c.scrollHeight) {
          if (t.modelValue)
            return;
          u("update:modelValue", !0), typeof t.onLoad == "function" && t.onLoad();
        }
      };
    }), J(() => s.value.onscroll = null), (c, l) => {
      const o = Q("c-load-icon");
      return n(), a("div", {
        class: "c-pull-load",
        ref_key: "scrollBox",
        ref: s,
        style: f({
          width: e.width,
          height: e.height
        })
      }, [
        C(c.$slots, "default", {}, void 0, !0),
        !e.isAll && e.modelValue ? (n(), a("div", be, [
          c.$slots.load ? C(c.$slots, "load", { key: 0 }, void 0, !0) : (n(), a("div", me, [
            Y(o, { style: { "margin-right": "10px" } }),
            E(" " + v(e.loadText), 1)
          ]))
        ])) : _("", !0),
        e.isAll ? (n(), a("div", pe, [
          c.$slots.all ? C(c.$slots, "all", { key: 0 }, void 0, !0) : (n(), a("div", Se, v(e.allText), 1))
        ])) : _("", !0)
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
    return (u, t) => (n(), a("div", {
      class: "c-sticky",
      style: f(`${e.direction}:${e.position}`)
    }, [
      C(u.$slots, "default", {}, void 0, !0)
    ], 4));
  }
}), Oe = /* @__PURE__ */ k(Ve, [["__scopeId", "data-v-803bee31"]]), je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oe
}, Symbol.toStringTag, { value: "Module" }));
const Ae = { class: "c-tag c-iconfont" }, Te = {
  name: "c-tag"
}, ze = /* @__PURE__ */ Object.assign(Te, {
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
    return (s, c) => (n(), a("div", Ae, [
      i("div", {
        class: x(["c-tag-box", "c-tag-" + e.type + "-" + e.showType + (e.disable ? " c-disable" : "")]),
        style: f({
          height: e.height,
          width: e.width,
          borderRadius: e.radius,
          background: e.background,
          color: e.color,
          fontSize: e.fontSize
        })
      }, [
        C(s.$slots, "default", {}, void 0, !0),
        e.showClose ? (n(), a("span", {
          key: 0,
          class: "c-tag-close",
          onClick: t
        }, "\uE647")) : _("", !0)
      ], 6)
    ]));
  }
}), Ke = /* @__PURE__ */ k(ze, [["__scopeId", "data-v-5a95ff5c"]]), Ie = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ke
}, Symbol.toStringTag, { value: "Module" }));
const U = (e) => (N("data-v-138a93e4"), e = e(), W(), e), Be = { key: 0 }, Me = {
  key: 1,
  class: "no-text"
}, Le = /* @__PURE__ */ U(() => /* @__PURE__ */ i("div", { class: "c-chain-icon" }, "\uE646", -1)), Pe = {
  key: 0,
  class: "c-mark c-iconfont"
}, Ne = { class: "c-main" }, We = /* @__PURE__ */ U(() => /* @__PURE__ */ i("div", null, "\u8BF7\u9009\u62E9", -1)), Fe = { class: "c-main-result" }, Ee = ["onClick"], Re = { key: 0 }, He = { key: 0 }, De = { key: 0 }, Ue = /* @__PURE__ */ E("\u8BF7\u9009\u62E9 "), Xe = { class: "c-chain-list" }, qe = ["onClick"], Ge = {
  name: "c-chain"
}, Je = /* @__PURE__ */ Object.assign(Ge, {
  props: {
    data: Array,
    modelValue: Array,
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
    let s = V([]), c = V(!1), l = V(0), o = B(() => {
      let { value: d } = s, { data: r, valueKey: S, childrenKey: w } = t;
      return l.value = 0, d.length && d.forEach((z) => {
        for (let O in r)
          r[O][S] === z && r[O][w] && (l.value++, r = r[O][w]);
      }), r;
    });
    const g = B(() => {
      let { data: d, valueKey: r, labelKey: S, childrenKey: w, separator: z, modelValue: O, showLast: F } = t, j = [];
      return O.length && O.forEach((G) => {
        for (let P in d)
          d[P][r] === G && (j.push(d[P][S]), d[P][w] && (d = d[P][w]));
      }), F ? j[j.length - 1] : j.join(z);
    }), y = B(() => {
      let { value: d } = s, { data: r, valueKey: S, labelKey: w, childrenKey: z } = t, O = [];
      return d.length && d.forEach((F) => {
        for (let j in r)
          r[j][S] === F && (O.push(r[j][w]), r[j][z] && (r = r[j][z]));
      }), O;
    });
    L(c, (d) => {
      s.value = [], d && s.value.push(...t.modelValue);
    });
    function T(d) {
      l.value < s.value.length ? s.value.splice(l.value, 1, d[t.valueKey]) : s.value.push(d[t.valueKey]);
    }
    function $(d) {
      s.value.splice(d, s.value.length);
    }
    function p() {
      u("update:modelValue", s.value), typeof t.change == "function" && t.change(s.value), b();
    }
    function b() {
      c.value = !1, typeof t.close == "function" && t.close();
    }
    function m() {
      typeof t.cancel == "function" && t.cancel(), b();
    }
    return (d, r) => (n(), a(A, null, [
      i("div", {
        class: x(["c-chain c-iconfont", e.disable ? "c-disable" : ""]),
        onClick: r[1] || (r[1] = (S) => K(c) ? c.value = !0 : c = !0)
      }, [
        i("div", {
          class: "c-chain-label",
          style: f({
            width: e.labelWidth,
            textAlign: e.labelAlign
          })
        }, v(e.label), 5),
        i("div", {
          class: "c-chain-text",
          style: f({ textAlign: e.inputAlign })
        }, [
          e.modelValue.length ? (n(), a("span", Be, v(h(g)), 1)) : (n(), a("span", Me, "\u8BF7\u9009\u62E9")),
          e.showClear && e.modelValue ? (n(), a("div", {
            key: 2,
            class: "c-input-clear",
            onClick: r[0] || (r[0] = R((S) => u("update:modelValue", ""), ["stop"]))
          }, "\uE647 ")) : _("", !0)
        ], 4),
        Le
      ], 2),
      h(c) ? (n(), a("div", Pe, [
        i("div", Ne, [
          i("div", { class: "c-main-btn" }, [
            i("div", { onClick: m }, "\u53D6\u6D88"),
            We,
            i("div", { onClick: p }, "\u786E\u5B9A")
          ]),
          i("div", Fe, [
            (n(!0), a(A, null, I(h(y), (S, w) => (n(), a("span", {
              style: { color: "#0090ff" },
              onClick: (z) => $(w)
            }, [
              h(y).length > 1 && w !== 0 ? (n(), a("span", Re, " / ")) : _("", !0),
              E(v(S), 1)
            ], 8, Ee))), 256)),
            h(s).length === h(l) ? (n(), a("span", He, [
              h(y).length !== 0 ? (n(), a("span", De, " / ")) : _("", !0),
              Ue
            ])) : _("", !0)
          ]),
          i("div", Xe, [
            (n(!0), a(A, null, I(h(o), (S) => (n(), a("div", {
              class: x(["c-chain-item", h(s).indexOf(S[e.valueKey]) > -1 ? "c-chain-active" : ""]),
              onClick: (w) => T(S),
              key: S[e.valueKey]
            }, [
              i("div", null, v(S[e.labelKey]), 1)
            ], 10, qe))), 128))
          ])
        ])
      ])) : _("", !0)
    ], 64));
  }
}), Qe = /* @__PURE__ */ k(Je, [["__scopeId", "data-v-138a93e4"]]), Ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qe
}, Symbol.toStringTag, { value: "Module" }));
const Ze = ["placeholder", "type", "value"], et = {
  name: "c-input"
}, tt = /* @__PURE__ */ Object.assign(et, {
  props: {
    modelValue: null,
    type: { type: String },
    label: null,
    labelWidth: { type: String, default: "4em" },
    labelAlign: String,
    inputAlign: String,
    placeholder: null,
    maxLength: Number,
    max: Number,
    min: Number,
    showClear: Boolean,
    disable: Boolean
  },
  setup(e, { emit: u }) {
    const t = e;
    function s(l) {
      let o = l.target.value;
      (!t.type || t.type === "text") && t.maxLength && o.length > t.maxLength && (o = l.target.value = o.substr(0, t.maxLength)), t.type === "number" && (t.max && o > t.max && (o = l.target.value = l.target.value = t.max), t.min && o < t.min && (o = l.target.value = t.min)), c(o);
    }
    function c(l) {
      t.type === "number" ? u("update:modelValue", Number(l)) : u("update:modelValue", l);
    }
    return (l, o) => (n(), a("div", {
      class: x(["c-input c-iconfont", e.disable ? "c-disable" : ""])
    }, [
      i("div", {
        class: "c-input-label",
        style: f({
          width: e.labelWidth,
          textAlign: e.labelAlign
        })
      }, v(e.label), 5),
      i("input", {
        placeholder: e.placeholder,
        type: e.type,
        value: e.modelValue,
        onInput: o[0] || (o[0] = (g) => s(g)),
        style: f({ textAlign: e.inputAlign })
      }, null, 44, Ze),
      e.maxLength ? (n(), a("div", {
        key: 0,
        class: x(["c-input-max", String(e.modelValue).length === e.maxLength ? "max-reached" : ""])
      }, v(String(e.modelValue).length) + "/" + v(e.maxLength), 3)) : _("", !0),
      e.showClear && String(e.modelValue).length ? (n(), a("div", {
        key: 1,
        class: "c-input-clear",
        onClick: o[1] || (o[1] = R((g) => c(""), ["stop"]))
      }, "\uE647 ")) : _("", !0)
    ], 2));
  }
}), lt = /* @__PURE__ */ k(tt, [["__scopeId", "data-v-2840b4f0"]]), nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lt
}, Symbol.toStringTag, { value: "Module" }));
const X = (e) => (N("data-v-c7ffc876"), e = e(), W(), e), at = { key: 0 }, ct = {
  key: 1,
  class: "no-text"
}, ot = {
  key: 2,
  class: "c-multiple-choice-count"
}, it = /* @__PURE__ */ X(() => /* @__PURE__ */ i("div", { class: "c-multiple-choice-icon" }, "\uE646", -1)), st = {
  key: 0,
  class: "c-mark c-iconfont"
}, ut = { class: "c-main" }, dt = { class: "c-main-label" }, rt = { key: 0 }, ft = { key: 1 }, gt = /* @__PURE__ */ X(() => /* @__PURE__ */ i("div", { style: { "margin-left": "5px" } }, "\u5168\u9009", -1)), ht = { style: { flex: "1", "text-align": "center" } }, vt = { class: "c-multiple-choice-list" }, yt = ["onClick"], _t = { key: 0 }, bt = { key: 1 }, mt = {
  name: "c-multiple-choice"
}, pt = /* @__PURE__ */ Object.assign(mt, {
  props: {
    data: Array,
    modelValue: Array,
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
    const t = e, s = B(() => {
      let m = [];
      return t.data.forEach((d) => {
        t.modelValue.includes(d[t.valueKey]) && m.push(d[t.labelKey]);
      }), m.length ? t.showOne ? m[0] : m.join(t.separator) : "";
    });
    let c = V([]), l = V(!1), o = V(!1);
    L(l, (m) => {
      c.value = [], m && c.value.push(...t.modelValue), y();
    });
    function g() {
      o.value = !o.value, c.value = [], o.value && (c.value = t.data.map((m) => m[t.valueKey]));
    }
    function y() {
      o.value = t.data.length && c.value.length === t.data.length;
    }
    function T(m) {
      let d = c.value.indexOf(m[t.valueKey]);
      d === -1 ? c.value.push(m[t.valueKey]) : c.value.splice(d, 1), y();
    }
    function $() {
      u("update:modelValue", c.value), typeof t.change == "function" && t.change(c.value), p();
    }
    function p() {
      l.value = !1, typeof t.close == "function" && t.close();
    }
    function b() {
      typeof t.cancel == "function" && t.cancel(), p();
    }
    return (m, d) => (n(), a(A, null, [
      i("div", {
        class: x(["c-multiple-choice c-iconfont", e.disable ? "c-disable" : ""]),
        onClick: d[0] || (d[0] = (r) => K(l) ? l.value = !0 : l = !0)
      }, [
        i("div", {
          class: "c-multiple-choice-label",
          style: f({
            width: e.labelWidth,
            textAlign: e.labelAlign
          })
        }, v(e.label), 5),
        i("div", {
          class: "c-multiple-choice-text",
          style: f({ textAlign: e.inputAlign })
        }, [
          e.modelValue.length ? (n(), a("span", at, v(h(s)), 1)) : (n(), a("span", ct, "\u8BF7\u9009\u62E9")),
          e.modelValue.length ? (n(), a("span", ot, v(e.modelValue.length), 1)) : _("", !0)
        ], 4),
        it
      ], 2),
      h(l) ? (n(), a("div", st, [
        i("div", ut, [
          i("div", dt, [
            i("div", {
              style: f([{ display: "flex", "align-items": "center" }, { color: h(o) ? "#0090ff" : "#666" }]),
              onClick: g
            }, [
              h(o) ? (n(), a("div", rt, "\uE630")) : (n(), a("div", ft, "\uE696")),
              gt
            ], 4),
            i("div", ht, v(e.label), 1),
            i("div", {
              style: { "padding-left": "15px", color: "#0090ff" },
              onClick: d[1] || (d[1] = (r) => {
                K(c) ? c.value = [] : c = [], K(o) ? o.value = !1 : o = !1;
              })
            }, "\u6E05\u9664")
          ]),
          i("div", vt, [
            (n(!0), a(A, null, I(e.data, (r) => (n(), a("div", {
              class: x(["c-multiple-choice-item", h(c).indexOf(r[e.valueKey]) !== -1 ? "c-multiple-choice-active" : ""]),
              onClick: (S) => T(r),
              key: r[e.valueKey]
            }, [
              h(c).indexOf(r[e.valueKey]) !== -1 ? (n(), a("div", _t, "\uE630")) : (n(), a("div", bt, "\uE696")),
              i("div", null, v(r[e.labelKey]), 1)
            ], 10, yt))), 128))
          ]),
          i("div", { class: "c-multiple-choice-btn" }, [
            i("div", { onClick: b }, "\u53D6\u6D88"),
            i("div", { onClick: $ }, "\u786E\u5B9A")
          ])
        ])
      ])) : _("", !0)
    ], 64));
  }
}), St = /* @__PURE__ */ k(pt, [["__scopeId", "data-v-c7ffc876"]]), kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: St
}, Symbol.toStringTag, { value: "Module" }));
const $t = ["onClick"], xt = { key: 0 }, wt = { key: 1 }, Ct = { key: 1 }, Vt = { key: 1 }, Ot = {
  name: "c-score"
}, jt = /* @__PURE__ */ Object.assign(Ot, {
  props: {
    modelValue: { type: Number, default: 0 },
    max: { type: Number, default: 5 },
    number: { type: Number, default: 5 },
    size: { type: String, default: "16px" },
    color: { type: String, default: "#ff8c00" },
    margin: { type: String, default: "5px" },
    disable: { type: Boolean }
  },
  setup(e, { emit: u }) {
    const t = e;
    function s(l) {
      let { modelValue: o, max: g, number: y } = t;
      return l <= Math.round(o / g * y);
    }
    function c(l) {
      let { max: o, number: g } = t, y = l / g * o;
      String(y).split(".").length === 2 && (y = y.toFixed(2)), u("update:modelValue", y);
    }
    return (l, o) => (n(), a("div", {
      class: x(["c-score c-iconfont", e.disable ? "c-disable" : ""])
    }, [
      (n(!0), a(A, null, I(e.number, (g) => (n(), a("div", {
        class: "c-score-item",
        style: f({
          margin: "0 " + e.margin,
          color: e.color,
          fontSize: e.size
        }),
        onClick: (y) => c(g)
      }, [
        s(g) ? (n(), a("div", xt, [
          l.$slots.select ? C(l.$slots, "select", { key: 0 }, void 0, !0) : (n(), a("div", wt, "\uE62B"))
        ])) : (n(), a("div", Ct, [
          l.$slots.noSelect ? C(l.$slots, "noSelect", { key: 0 }, void 0, !0) : (n(), a("div", Vt, "\uE648"))
        ]))
      ], 12, $t))), 256))
    ], 2));
  }
}), At = /* @__PURE__ */ k(jt, [["__scopeId", "data-v-99f688fd"]]), Tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: At
}, Symbol.toStringTag, { value: "Module" }));
const zt = (e) => (N("data-v-68a37c01"), e = e(), W(), e), Kt = { key: 0 }, It = {
  key: 1,
  class: "no-text"
}, Bt = /* @__PURE__ */ zt(() => /* @__PURE__ */ i("div", { class: "c-single-choice-icon" }, "\uE646", -1)), Mt = {
  key: 0,
  class: "c-mark c-iconfont"
}, Lt = { class: "c-main" }, Pt = { class: "c-main-label" }, Nt = { class: "c-single-choice-list" }, Wt = ["onClick"], Ft = { key: 0 }, Et = { key: 1 }, Rt = {
  name: "c-single-choice"
}, Ht = /* @__PURE__ */ Object.assign(Rt, {
  props: {
    data: Array,
    modelValue: null,
    labelKey: { type: String, default: "label" },
    valueKey: { type: String, default: "value" },
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
    const t = e, s = B(() => {
      let $ = "";
      return t.data.forEach((p) => {
        p[t.valueKey] === t.modelValue && ($ = p[t.labelKey]);
      }), $;
    });
    let c = V(), l = V(!1);
    L(l, ($) => {
      $ && (c.value = t.modelValue);
    });
    function o($) {
      c.value = $[t.valueKey];
    }
    function g() {
      u("update:modelValue", c.value), typeof t.change == "function" && t.change(c.value), y();
    }
    function y() {
      l.value = !1, typeof t.close == "function" && t.close();
    }
    function T() {
      typeof t.cancel == "function" && t.cancel(), y();
    }
    return ($, p) => (n(), a(A, null, [
      i("div", {
        class: x(["c-single-choice c-iconfont", e.disable ? "c-disable" : ""]),
        onClick: p[1] || (p[1] = (b) => K(l) ? l.value = !0 : l = !0)
      }, [
        i("div", {
          class: "c-single-choice-label",
          style: f({
            width: e.labelWidth,
            textAlign: e.labelAlign
          })
        }, v(e.label), 5),
        i("div", {
          class: "c-single-choice-text",
          style: f({ textAlign: e.inputAlign })
        }, [
          e.modelValue ? (n(), a("span", Kt, v(h(s)), 1)) : (n(), a("span", It, "\u8BF7\u9009\u62E9")),
          e.showClear && e.modelValue ? (n(), a("div", {
            key: 2,
            class: "c-input-clear",
            onClick: p[0] || (p[0] = R((b) => u("update:modelValue", ""), ["stop"]))
          }, "\uE647 ")) : _("", !0)
        ], 4),
        Bt
      ], 2),
      h(l) ? (n(), a("div", Mt, [
        i("div", Lt, [
          i("div", Pt, v(e.label), 1),
          i("div", Nt, [
            (n(!0), a(A, null, I(e.data, (b) => (n(), a("div", {
              class: x(["c-single-choice-item", h(c) === b[e.valueKey] ? "c-single-choice-active" : ""]),
              onClick: (m) => o(b),
              key: b[e.valueKey]
            }, [
              h(c) === b[e.valueKey] ? (n(), a("div", Ft, "\uE642")) : (n(), a("div", Et, "\uE6A6")),
              i("div", null, v(b[e.labelKey]), 1)
            ], 10, Wt))), 128))
          ]),
          i("div", { class: "c-single-choice-btn" }, [
            i("div", { onClick: T }, "\u53D6\u6D88"),
            i("div", { onClick: g }, "\u786E\u5B9A")
          ])
        ])
      ])) : _("", !0)
    ], 64));
  }
}), Dt = /* @__PURE__ */ k(Ht, [["__scopeId", "data-v-68a37c01"]]), Ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dt
}, Symbol.toStringTag, { value: "Module" }));
const Xt = {
  name: "c-switch"
}, qt = /* @__PURE__ */ Object.assign(Xt, {
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
    return (c, l) => (n(), a("div", {
      class: x(["c-switch", e.disable ? "c-disable" : ""]),
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
}), Gt = /* @__PURE__ */ k(qt, [["__scopeId", "data-v-49cb18a6"]]), Jt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gt
}, Symbol.toStringTag, { value: "Module" }));
const q = (e) => (N("data-v-2996a262"), e = e(), W(), e), Qt = {
  key: 0,
  class: "c-navbar-left"
}, Yt = /* @__PURE__ */ q(() => /* @__PURE__ */ i("span", null, "\uE601", -1)), Zt = { class: "c-navbar-title" }, el = {
  key: 0,
  class: "c-navbar-search"
}, tl = /* @__PURE__ */ q(() => /* @__PURE__ */ i("div", { class: "c-search-icon" }, "\uE741", -1)), ll = ["placeholder"], nl = { key: 1 }, al = {
  key: 1,
  class: "c-navbar-right"
}, cl = {
  name: "c-navbar"
}, ol = /* @__PURE__ */ Object.assign(cl, {
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
    function s(l) {
      u("update:modelValue", l.target.value);
    }
    function c() {
      u("tapRight");
    }
    return (l, o) => (n(), a("div", {
      class: "c-navbar c-iconfont",
      style: f({
        width: e.width,
        height: e.height,
        background: e.background,
        borderColor: e.borderColor,
        color: e.color
      })
    }, [
      !e.showSearch || l.$slots.left || e.backText ? (n(), a("div", Qt, [
        l.$slots.left ? C(l.$slots, "left", { key: 0 }, void 0, !0) : _("", !0),
        !l.$slots.left && e.backText ? (n(), a("div", {
          key: 1,
          class: "c-navbar-back",
          onClick: t
        }, [
          Yt,
          i("span", null, v(e.backText), 1)
        ])) : _("", !0)
      ])) : _("", !0),
      i("div", Zt, [
        e.showSearch ? (n(), a("div", el, [
          tl,
          Z(i("input", {
            "onUpdate:modelValue": o[0] || (o[0] = (g) => K(modelValue) ? modelValue.value = g : null),
            onInput: o[1] || (o[1] = (g) => s(g)),
            placeholder: e.placeholder
          }, null, 40, ll), [
            [ee, e.modelValue]
          ])
        ])) : (n(), a("div", nl, v(e.title), 1))
      ]),
      !e.showSearch || l.$slots.right || e.rightText ? (n(), a("div", al, [
        l.$slots.right ? C(l.$slots, "right", { key: 0 }, void 0, !0) : _("", !0),
        !l.$slots.right && e.rightText ? (n(), a("div", {
          key: 1,
          class: "c-navbar-right-default",
          onClick: c
        }, v(e.rightText), 1)) : _("", !0)
      ])) : _("", !0)
    ], 4));
  }
}), il = /* @__PURE__ */ k(ol, [["__scopeId", "data-v-2996a262"]]), sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: il
}, Symbol.toStringTag, { value: "Module" }));
import("./iconfont.fc20e726.mjs");
const H = Object.assign({ "/src/components/base/c-button.vue": ae, "/src/components/base/c-dividing-line.vue": ue, "/src/components/base/c-load-icon.vue": ge, "/src/components/base/c-progress-loop.vue": _e, "/src/components/base/c-pull-load.vue": we, "/src/components/base/c-sticky.vue": je, "/src/components/base/c-tag.vue": Ie, "/src/components/form/c-chain.vue": Ye, "/src/components/form/c-input.vue": nt, "/src/components/form/c-multiple-choice.vue": kt, "/src/components/form/c-score.vue": Tt, "/src/components/form/c-single-choice.vue": Ut, "/src/components/form/c-switch.vue": Jt, "/src/components/nav/c-navbar.vue": sl });
let M = {};
Object.keys(H).forEach((e) => {
  M[e.replace(/(\.\/|\.vue)/g, "").replace("/src/components/", "")] = H[e].default;
});
let ul = (e) => {
  e = e || window.Vue;
  for (let u in M)
    e.component(M[u].name, M[u]);
};
const rl = {
  install: ul,
  components: M
};
export {
  rl as default
};
