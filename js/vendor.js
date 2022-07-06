function datepickerThLocale(t) {
    t.fn.datepicker.dates.th = {
        days: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"],
        daysShort: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"],
        daysMin: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"],
        months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
        monthsShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
        today: "วันนี้",
        format: "yyyyปีmmเดือนddวัน",
        weekStart: 1,
        clear: "ชัดเจน"
    }
}

function datepickerIdLocale(t) {
    t.fn.datepicker.dates.id = {
        days: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
        daysShort: ["Mgu", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
        daysMin: ["Mg", "Sn", "Sl", "Ra", "Ka", "Ju", "Sa"],
        months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"],
        today: "Hari Ini",
        format: "yyyytahunmmbulanddhari",
        weekStart: 1,
        clear: "Kosongkan"
    }
}

function datepickerViLocale(t) {
    t.fn.datepicker.dates.vi = {
        days: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
        daysShort: ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
        daysMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        monthsShort: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
        today: "Hôm nay",
        format: "dd/mm/yyyy",
        weekStart: 1,
        clear: "Xóa"
    }
}

function datepickerZhLocale(t) {
    t.fn.datepicker.dates["zh-hans"] = {
        days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
        daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        daysMin: ["日", "一", "二", "三", "四", "五", "六"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        today: "今日",
        format: "yyyy年mm月dd日",
        weekStart: 1,
        clear: "清空"
    }
}

function datepickerKoLocale(t) {
    t.fn.datepicker.dates.ko = {
        days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
        daysShort: ["일", "월", "화", "수", "목", "금", "토"],
        daysMin: ["일", "월", "화", "수", "목", "금", "토"],
        months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        monthsShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
        today: "오늘",
        clear: "삭제",
        format: "yyyy년mm월",
        titleFormat: "yyyy년mm월",
        weekStart: 1,
        clear: "명확한"
    }
}

function datepickerJaLocale(t) {
    t.fn.datepicker.dates.ja = {
        days: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"],
        daysShort: ["日", "月", "火", "水", "木", "金", "土"],
        daysMin: ["日", "月", "火", "水", "木", "金", "土"],
        months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
        today: "今日",
        format: "yyyy/mm/dd",
        titleFormat: "yyyy年mm月",
        clear: "クリア"
    }
}
if (function(t, e) {
        function n(t) {
            var e = t.length,
                n = ct.type(t);
            return !ct.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)))
        }

        function i(t) {
            var e = kt[t] = {};
            return ct.each(t.match(ht) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function r(t, n, i, r) {
            if (ct.acceptData(t)) {
                var o, s, a = ct.expando,
                    l = t.nodeType,
                    u = l ? ct.cache : t,
                    c = l ? t[a] : t[a] && a;
                if (c && u[c] && (r || u[c].data) || i !== e || "string" != typeof n) return c || (c = l ? t[a] = et.pop() || ct.guid++ : a), u[c] || (u[c] = l ? {} : {
                    toJSON: ct.noop
                }), ("object" == typeof n || "function" == typeof n) && (r ? u[c] = ct.extend(u[c], n) : u[c].data = ct.extend(u[c].data, n)), s = u[c], r || (s.data || (s.data = {}), s = s.data), i !== e && (s[ct.camelCase(n)] = i), "string" == typeof n ? (o = s[n], null == o && (o = s[ct.camelCase(n)])) : o = s, o
            }
        }

        function o(t, e, n) {
            if (ct.acceptData(t)) {
                var i, r, o = t.nodeType,
                    s = o ? ct.cache : t,
                    l = o ? t[ct.expando] : ct.expando;
                if (s[l]) {
                    if (e && (i = n ? s[l] : s[l].data)) {
                        ct.isArray(e) ? e = e.concat(ct.map(e, ct.camelCase)) : e in i ? e = [e] : (e = ct.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                        for (; r--;) delete i[e[r]];
                        if (n ? !a(i) : !ct.isEmptyObject(i)) return
                    }(n || (delete s[l].data, a(s[l]))) && (o ? ct.cleanData([t], !0) : ct.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
                }
            }
        }

        function s(t, n, i) {
            if (i === e && 1 === t.nodeType) {
                var r = "data-" + n.replace(Dt, "-$1").toLowerCase();
                if (i = t.getAttribute(r), "string" == typeof i) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Ct.test(i) ? ct.parseJSON(i) : i)
                    } catch (o) {}
                    ct.data(t, n, i)
                } else i = e
            }
            return i
        }

        function a(t) {
            var e;
            for (e in t)
                if (("data" !== e || !ct.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function l() {
            return !0
        }

        function u() {
            return !1
        }

        function c() {
            try {
                return Q.activeElement
            } catch (t) {}
        }

        function d(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function h(t, e, n) {
            if (ct.isFunction(e)) return ct.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return ct.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (Wt.test(e)) return ct.filter(e, t, n);
                e = ct.filter(e, t)
            }
            return ct.grep(t, function(t) {
                return ct.inArray(t, e) >= 0 !== n
            })
        }

        function p(t) {
            var e = zt.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement)
                for (; e.length;) n.createElement(e.pop());
            return n
        }

        function f(t, e) {
            return ct.nodeName(t, "table") && ct.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function g(t) {
            return t.type = (null !== ct.find.attr(t, "type")) + "/" + t.type, t
        }

        function m(t) {
            var e = re.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function v(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) ct._data(n, "globalEval", !e || ct._data(e[i], "globalEval"))
        }

        function y(t, e) {
            if (1 === e.nodeType && ct.hasData(t)) {
                var n, i, r, o = ct._data(t),
                    s = ct._data(e, o),
                    a = o.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)
                        for (i = 0, r = a[n].length; r > i; i++) ct.event.add(e, n, a[n][i])
                }
                s.data && (s.data = ct.extend({}, s.data))
            }
        }

        function b(t, e) {
            var n, i, r;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !ct.support.noCloneEvent && e[ct.expando]) {
                    r = ct._data(e);
                    for (i in r.events) ct.removeEvent(e, i, r.handle);
                    e.removeAttribute(ct.expando)
                }
                "script" === n && e.text !== t.text ? (g(e).text = t.text, m(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ct.support.html5Clone && t.innerHTML && !ct.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && ee.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }

        function w(t, n) {
            var i, r, o = 0,
                s = typeof t.getElementsByTagName !== G ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== G ? t.querySelectorAll(n || "*") : e;
            if (!s)
                for (s = [], i = t.childNodes || t; null != (r = i[o]); o++) !n || ct.nodeName(r, n) ? s.push(r) : ct.merge(s, w(r, n));
            return n === e || n && ct.nodeName(t, n) ? ct.merge([t], s) : s
        }

        function S(t) {
            ee.test(t.type) && (t.defaultChecked = t.checked)
        }

        function _(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = xe.length; r--;)
                if (e = xe[r] + n, e in t) return e;
            return i
        }

        function T(t, e) {
            return t = e || t, "none" === ct.css(t, "display") || !ct.contains(t.ownerDocument, t)
        }

        function x(t, e) {
            for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = ct._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && T(i) && (o[s] = ct._data(i, "olddisplay", A(i.nodeName)))) : o[s] || (r = T(i), (n && "none" !== n || !r) && ct._data(i, "olddisplay", r ? n : ct.css(i, "display"))));
            for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
            return t
        }

        function k(t, e, n) {
            var i = ve.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function C(t, e, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += ct.css(t, n + Te[o], !0, r)), i ? ("content" === n && (s -= ct.css(t, "padding" + Te[o], !0, r)), "margin" !== n && (s -= ct.css(t, "border" + Te[o] + "Width", !0, r))) : (s += ct.css(t, "padding" + Te[o], !0, r), "padding" !== n && (s += ct.css(t, "border" + Te[o] + "Width", !0, r)));
            return s
        }

        function D(t, e, n) {
            var i = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = ce(t),
                s = ct.support.boxSizing && "border-box" === ct.css(t, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = de(t, e, o), (0 > r || null == r) && (r = t.style[e]), ye.test(r)) return r;
                i = s && (ct.support.boxSizingReliable || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + C(t, e, n || (s ? "border" : "content"), i, o) + "px"
        }

        function A(t) {
            var e = Q,
                n = we[t];
            return n || (n = $(t, e), "none" !== n && n || (ue = (ue || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (ue[0].contentWindow || ue[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = $(t, e), ue.detach()), we[t] = n), n
        }

        function $(t, e) {
            var n = ct(e.createElement(t)).appendTo(e.body),
                i = ct.css(n[0], "display");
            return n.remove(), i
        }

        function M(t, e, n, i) {
            var r;
            if (ct.isArray(e)) ct.each(e, function(e, r) {
                n || Ce.test(t) ? i(t, r) : M(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
            });
            else if (n || "object" !== ct.type(e)) i(t, e);
            else
                for (r in e) M(t + "[" + r + "]", e[r], n, i)
        }

        function E(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    o = e.toLowerCase().match(ht) || [];
                if (ct.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function O(t, n, i, r) {
            function o(l) {
                var u;
                return s[l] = !0, ct.each(t[l] || [], function(t, l) {
                    var c = l(n, i, r);
                    return "string" != typeof c || a || s[c] ? a ? !(u = c) : e : (n.dataTypes.unshift(c), o(c), !1)
                }), u
            }
            var s = {},
                a = t === qe;
            return o(n.dataTypes[0]) || !s["*"] && o("*")
        }

        function P(t, n) {
            var i, r, o = ct.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== e && ((o[r] ? t : i || (i = {}))[r] = n[r]);
            return i && ct.extend(!0, t, i), t
        }

        function I(t, n, i) {
            for (var r, o, s, a, l = t.contents, u = t.dataTypes;
                "*" === u[0];) u.shift(), o === e && (o = t.mimeType || n.getResponseHeader("Content-Type"));
            if (o)
                for (a in l)
                    if (l[a] && l[a].test(o)) {
                        u.unshift(a);
                        break
                    }
            if (u[0] in i) s = u[0];
            else {
                for (a in i) {
                    if (!u[0] || t.converters[a + " " + u[0]]) {
                        s = a;
                        break
                    }
                    r || (r = a)
                }
                s = s || r
            }
            return s ? (s !== u[0] && u.unshift(s), i[s]) : e
        }

        function F(t, e, n, i) {
            var r, o, s, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
            for (o = c.shift(); o;)
                if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (s = u[l + " " + o] || u["* " + o], !s)
                    for (r in u)
                        if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                            s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                            break
                        }
                if (s !== !0)
                    if (s && t["throws"]) e = s(e);
                    else try {
                        e = s(e)
                    } catch (d) {
                        return {
                            state: "parsererror",
                            error: s ? d : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function j() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function L() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function N() {
            return setTimeout(function() {
                Ke = e
            }), Ke = ct.now()
        }

        function R(t, e, n) {
            for (var i, r = (on[e] || []).concat(on["*"]), o = 0, s = r.length; s > o; o++)
                if (i = r[o].call(n, e, t)) return i
        }

        function H(t, e, n) {
            var i, r, o = 0,
                s = rn.length,
                a = ct.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = Ke || N(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
                    return a.notifyWith(t, [u, o, n]), 1 > o && l ? n : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: ct.extend({}, e),
                    opts: ct.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Ke || N(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = ct.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) u.tweens[n].run(1);
                        return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (U(c, u.opts.specialEasing); s > o; o++)
                if (i = rn[o].call(u, t, c, u.opts)) return i;
            return ct.map(c, R, u), ct.isFunction(u.opts.start) && u.opts.start.call(t, u), ct.fx.timer(ct.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function U(t, e) {
            var n, i, r, o, s;
            for (n in t)
                if (i = ct.camelCase(n), r = e[i], o = t[n], ct.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = ct.cssHooks[i], s && "expand" in s) {
                    o = s.expand(o), delete t[i];
                    for (n in o) n in t || (t[n] = o[n], e[n] = r)
                } else e[i] = r
        }

        function W(t, e, n) {
            var i, r, o, s, a, l, u = this,
                c = {},
                d = t.style,
                h = t.nodeType && T(t),
                p = ct._data(t, "fxshow");
            n.queue || (a = ct._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, u.always(function() {
                u.always(function() {
                    a.unqueued--, ct.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ct.css(t, "display") && "none" === ct.css(t, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== A(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ct.support.shrinkWrapBlocks || u.always(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (r = e[i], tn.exec(r)) {
                    if (delete e[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) continue;
                    c[i] = p && p[i] || ct.style(t, i)
                }
            if (!ct.isEmptyObject(c)) {
                p ? "hidden" in p && (h = p.hidden) : p = ct._data(t, "fxshow", {}), o && (p.hidden = !h), h ? ct(t).show() : u.done(function() {
                    ct(t).hide()
                }), u.done(function() {
                    var e;
                    ct._removeData(t, "fxshow");
                    for (e in c) ct.style(t, e, c[e])
                });
                for (i in c) s = R(h ? p[i] : 0, i, u), i in p || (p[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function q(t, e, n, i, r) {
            return new q.prototype.init(t, e, n, i, r)
        }

        function Y(t, e) {
            var n, i = {
                    height: t
                },
                r = 0;
            for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Te[r], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function B(t) {
            return ct.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }
        var z, V, G = typeof e,
            X = t.location,
            Q = t.document,
            J = Q.documentElement,
            K = t.jQuery,
            Z = t.$,
            tt = {},
            et = [],
            nt = "1.10.2",
            it = et.concat,
            rt = et.push,
            ot = et.slice,
            st = et.indexOf,
            at = tt.toString,
            lt = tt.hasOwnProperty,
            ut = nt.trim,
            ct = function(t, e) {
                return new ct.fn.init(t, e, V)
            },
            dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ht = /\S+/g,
            pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ft = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            gt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            mt = /^[\],:{}\s]*$/,
            vt = /(?:^|:|,)(?:\s*\[)+/g,
            yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            wt = /^-ms-/,
            St = /-([\da-z])/gi,
            _t = function(t, e) {
                return e.toUpperCase()
            },
            Tt = function(t) {
                (Q.addEventListener || "load" === t.type || "complete" === Q.readyState) && (xt(), ct.ready())
            },
            xt = function() {
                Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", Tt, !1), t.removeEventListener("load", Tt, !1)) : (Q.detachEvent("onreadystatechange", Tt), t.detachEvent("onload", Tt))
            };
        ct.fn = ct.prototype = {
                jquery: nt,
                constructor: ct,
                init: function(t, n, i) {
                    var r, o;
                    if (!t) return this;
                    if ("string" == typeof t) {
                        if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ft.exec(t), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
                        if (r[1]) {
                            if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : Q, !0)), gt.test(r[1]) && ct.isPlainObject(n))
                                for (r in n) ct.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
                            return this
                        }
                        if (o = Q.getElementById(r[2]), o && o.parentNode) {
                            if (o.id !== r[2]) return i.find(t);
                            this.length = 1, this[0] = o
                        }
                        return this.context = Q, this.selector = t, this
                    }
                    return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ct.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ct.makeArray(t, this))
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return ot.call(this)
                },
                get: function(t) {
                    return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
                },
                pushStack: function(t) {
                    var e = ct.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                },
                each: function(t, e) {
                    return ct.each(this, t, e)
                },
                ready: function(t) {
                    return ct.ready.promise().done(t), this
                },
                slice: function() {
                    return this.pushStack(ot.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(t) {
                    var e = this.length,
                        n = +t + (0 > t ? e : 0);
                    return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
                },
                map: function(t) {
                    return this.pushStack(ct.map(this, function(e, n) {
                        return t.call(e, n, e)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: rt,
                sort: [].sort,
                splice: [].splice
            }, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function() {
                var t, n, i, r, o, s, a = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ct.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)
                    if (null != (o = arguments[l]))
                        for (r in o) t = a[r], i = o[r], a !== i && (c && i && (ct.isPlainObject(i) || (n = ct.isArray(i))) ? (n ? (n = !1, s = t && ct.isArray(t) ? t : []) : s = t && ct.isPlainObject(t) ? t : {}, a[r] = ct.extend(c, s, i)) : i !== e && (a[r] = i));
                return a
            }, ct.extend({
                expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
                noConflict: function(e) {
                    return t.$ === ct && (t.$ = Z), e && t.jQuery === ct && (t.jQuery = K), ct
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(t) {
                    t ? ct.readyWait++ : ct.ready(!0)
                },
                ready: function(t) {
                    if (t === !0 ? !--ct.readyWait : !ct.isReady) {
                        if (!Q.body) return setTimeout(ct.ready);
                        ct.isReady = !0, t !== !0 && --ct.readyWait > 0 || (z.resolveWith(Q, [ct]), ct.fn.trigger && ct(Q).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(t) {
                    return "function" === ct.type(t)
                },
                isArray: Array.isArray || function(t) {
                    return "array" === ct.type(t)
                },
                isWindow: function(t) {
                    return null != t && t == t.window
                },
                isNumeric: function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                },
                type: function(t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[at.call(t)] || "object" : typeof t
                },
                isPlainObject: function(t) {
                    var n;
                    if (!t || "object" !== ct.type(t) || t.nodeType || ct.isWindow(t)) return !1;
                    try {
                        if (t.constructor && !lt.call(t, "constructor") && !lt.call(t.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (i) {
                        return !1
                    }
                    if (ct.support.ownLast)
                        for (n in t) return lt.call(t, n);
                    for (n in t);
                    return n === e || lt.call(t, n)
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                error: function(t) {
                    throw Error(t)
                },
                parseHTML: function(t, e, n) {
                    if (!t || "string" != typeof t) return null;
                    "boolean" == typeof e && (n = e, e = !1), e = e || Q;
                    var i = gt.exec(t),
                        r = !n && [];
                    return i ? [e.createElement(i[1])] : (i = ct.buildFragment([t], e, r), r && ct(r).remove(), ct.merge([], i.childNodes))
                },
                parseJSON: function(n) {
                    return t.JSON && t.JSON.parse ? t.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ct.trim(n), n && mt.test(n.replace(yt, "@").replace(bt, "]").replace(vt, ""))) ? Function("return " + n)() : (ct.error("Invalid JSON: " + n), e)
                },
                parseXML: function(n) {
                    var i, r;
                    if (!n || "string" != typeof n) return null;
                    try {
                        t.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch (o) {
                        i = e
                    }
                    return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n), i
                },
                noop: function() {},
                globalEval: function(e) {
                    e && ct.trim(e) && (t.execScript || function(e) {
                        t.eval.call(t, e)
                    })(e)
                },
                camelCase: function(t) {
                    return t.replace(wt, "ms-").replace(St, _t)
                },
                nodeName: function(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function(t, e, i) {
                    var r, o = 0,
                        s = t.length,
                        a = n(t);
                    if (i) {
                        if (a)
                            for (; s > o && (r = e.apply(t[o], i), r !== !1); o++);
                        else
                            for (o in t)
                                if (r = e.apply(t[o], i), r === !1) break
                    } else if (a)
                        for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
                    else
                        for (o in t)
                            if (r = e.call(t[o], o, t[o]), r === !1) break;
                    return t
                },
                trim: ut && !ut.call("\ufeff ") ? function(t) {
                    return null == t ? "" : ut.call(t)
                } : function(t) {
                    return null == t ? "" : (t + "").replace(pt, "")
                },
                makeArray: function(t, e) {
                    var i = e || [];
                    return null != t && (n(Object(t)) ? ct.merge(i, "string" == typeof t ? [t] : t) : rt.call(i, t)), i
                },
                inArray: function(t, e, n) {
                    var i;
                    if (e) {
                        if (st) return st.call(e, t, n);
                        for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                            if (n in e && e[n] === t) return n
                    }
                    return -1
                },
                merge: function(t, n) {
                    var i = n.length,
                        r = t.length,
                        o = 0;
                    if ("number" == typeof i)
                        for (; i > o; o++) t[r++] = n[o];
                    else
                        for (; n[o] !== e;) t[r++] = n[o++];
                    return t.length = r, t
                },
                grep: function(t, e, n) {
                    var i, r = [],
                        o = 0,
                        s = t.length;
                    for (n = !!n; s > o; o++) i = !!e(t[o], o), n !== i && r.push(t[o]);
                    return r
                },
                map: function(t, e, i) {
                    var r, o = 0,
                        s = t.length,
                        a = n(t),
                        l = [];
                    if (a)
                        for (; s > o; o++) r = e(t[o], o, i), null != r && (l[l.length] = r);
                    else
                        for (o in t) r = e(t[o], o, i), null != r && (l[l.length] = r);
                    return it.apply([], l)
                },
                guid: 1,
                proxy: function(t, n) {
                    var i, r, o;
                    return "string" == typeof n && (o = t[n], n = t, t = o), ct.isFunction(t) ? (i = ot.call(arguments, 2), r = function() {
                        return t.apply(n || this, i.concat(ot.call(arguments)))
                    }, r.guid = t.guid = t.guid || ct.guid++, r) : e
                },
                access: function(t, n, i, r, o, s, a) {
                    var l = 0,
                        u = t.length,
                        c = null == i;
                    if ("object" === ct.type(i)) {
                        o = !0;
                        for (l in i) ct.access(t, n, l, i[l], !0, s, a)
                    } else if (r !== e && (o = !0, ct.isFunction(r) || (a = !0), c && (a ? (n.call(t, r), n = null) : (c = n, n = function(t, e, n) {
                            return c.call(ct(t), n)
                        })), n))
                        for (; u > l; l++) n(t[l], i, a ? r : r.call(t[l], l, n(t[l], i)));
                    return o ? t : c ? n.call(t) : u ? n(t[0], i) : s
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(t, e, n, i) {
                    var r, o, s = {};
                    for (o in e) s[o] = t.style[o], t.style[o] = e[o];
                    r = n.apply(t, i || []);
                    for (o in e) t.style[o] = s[o];
                    return r
                }
            }), ct.ready.promise = function(e) {
                if (!z)
                    if (z = ct.Deferred(), "complete" === Q.readyState) setTimeout(ct.ready);
                    else if (Q.addEventListener) Q.addEventListener("DOMContentLoaded", Tt, !1), t.addEventListener("load", Tt, !1);
                else {
                    Q.attachEvent("onreadystatechange", Tt), t.attachEvent("onload", Tt);
                    var n = !1;
                    try {
                        n = null == t.frameElement && Q.documentElement
                    } catch (i) {}
                    n && n.doScroll && function r() {
                        if (!ct.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (t) {
                                return setTimeout(r, 50)
                            }
                            xt(), ct.ready()
                        }
                    }()
                }
                return z.promise(e)
            }, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
                tt["[object " + e + "]"] = e.toLowerCase()
            }), V = ct(Q),
            function(t, e) {
                function n(t, e, n, i) {
                    var r, o, s, a, l, u, c, d, f, g;
                    if ((e ? e.ownerDocument || e : H) !== O && E(e), e = e || O, n = n || [], !t || "string" != typeof t) return n;
                    if (1 !== (a = e.nodeType) && 9 !== a) return [];
                    if (I && !i) {
                        if (r = bt.exec(t))
                            if (s = r[1]) {
                                if (9 === a) {
                                    if (o = e.getElementById(s), !o || !o.parentNode) return n;
                                    if (o.id === s) return n.push(o), n
                                } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && N(e, o) && o.id === s) return n.push(o), n
                            } else {
                                if (r[2]) return tt.apply(n, e.getElementsByTagName(t)), n;
                                if ((s = r[3]) && T.getElementsByClassName && e.getElementsByClassName) return tt.apply(n, e.getElementsByClassName(s)), n
                            }
                        if (T.qsa && (!F || !F.test(t))) {
                            if (d = c = R, f = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                                for (u = h(t), (c = e.getAttribute("id")) ? d = c.replace(_t, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + p(u[l]);
                                f = pt.test(t) && e.parentNode || e, g = u.join(",")
                            }
                            if (g) try {
                                return tt.apply(n, f.querySelectorAll(g)), n
                            } catch (m) {} finally {
                                c || e.removeAttribute("id")
                            }
                        }
                    }
                    return S(t.replace(ut, "$1"), e, n, i)
                }

                function i() {
                    function t(n, i) {
                        return e.push(n += " ") > k.cacheLength && delete t[e.shift()], t[n] = i
                    }
                    var e = [];
                    return t
                }

                function r(t) {
                    return t[R] = !0, t
                }

                function o(t) {
                    var e = O.createElement("div");
                    try {
                        return !!t(e)
                    } catch (n) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function s(t, e) {
                    for (var n = t.split("|"), i = t.length; i--;) k.attrHandle[n[i]] = e
                }

                function a(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }

                function l(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }

                function u(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function c(t) {
                    return r(function(e) {
                        return e = +e, r(function(n, i) {
                            for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function d() {}

                function h(t, e) {
                    var i, r, o, s, a, l, u, c = Y[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (a = t, l = [], u = k.preFilter; a;) {
                        (!i || (r = dt.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ht.exec(a)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(ut, " ")
                        }), a = a.slice(i.length));
                        for (s in k.filter) !(r = vt[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                            value: i,
                            type: s,
                            matches: r
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return e ? a.length : a ? n.error(t) : Y(t, l).slice(0)
                }

                function p(t) {
                    for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                    return i
                }

                function f(t, e, n) {
                    var i = e.dir,
                        r = n && "parentNode" === i,
                        o = W++;
                    return e.first ? function(e, n, o) {
                        for (; e = e[i];)
                            if (1 === e.nodeType || r) return t(e, n, o)
                    } : function(e, n, s) {
                        var a, l, u, c = U + " " + o;
                        if (s) {
                            for (; e = e[i];)
                                if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                        } else
                            for (; e = e[i];)
                                if (1 === e.nodeType || r)
                                    if (u = e[R] || (e[R] = {}), (l = u[i]) && l[0] === c) {
                                        if ((a = l[1]) === !0 || a === x) return a === !0
                                    } else if (l = u[i] = [c], l[1] = t(e, n, s) || x, l[1] === !0) return !0
                    }
                }

                function g(t) {
                    return t.length > 1 ? function(e, n, i) {
                        for (var r = t.length; r--;)
                            if (!t[r](e, n, i)) return !1;
                        return !0
                    } : t[0]
                }

                function m(t, e, n, i, r) {
                    for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), u && e.push(a));
                    return s
                }

                function v(t, e, n, i, o, s) {
                    return i && !i[R] && (i = v(i)), o && !o[R] && (o = v(o, s)), r(function(r, s, a, l) {
                        var u, c, d, h = [],
                            p = [],
                            f = s.length,
                            g = r || w(e || "*", a.nodeType ? [a] : a, []),
                            v = !t || !r && e ? g : m(g, h, t, a, l),
                            y = n ? o || (r ? t : f || i) ? [] : s : v;
                        if (n && n(v, y, a, l), i)
                            for (u = m(y, p), i(u, [], a, l), c = u.length; c--;)(d = u[c]) && (y[p[c]] = !(v[p[c]] = d));
                        if (r) {
                            if (o || t) {
                                if (o) {
                                    for (u = [], c = y.length; c--;)(d = y[c]) && u.push(v[c] = d);
                                    o(null, y = [], u, l)
                                }
                                for (c = y.length; c--;)(d = y[c]) && (u = o ? nt.call(r, d) : h[c]) > -1 && (r[u] = !(s[u] = d))
                            }
                        } else y = m(y === s ? y.splice(f, y.length) : y), o ? o(null, s, y, l) : tt.apply(s, y)
                    })
                }

                function y(t) {
                    for (var e, n, i, r = t.length, o = k.relative[t[0].type], s = o || k.relative[" "], a = o ? 1 : 0, l = f(function(t) {
                            return t === e
                        }, s, !0), u = f(function(t) {
                            return nt.call(e, t) > -1
                        }, s, !0), c = [function(t, n, i) {
                            return !o && (i || n !== $) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
                        }]; r > a; a++)
                        if (n = k.relative[t[a].type]) c = [f(g(c), n)];
                        else {
                            if (n = k.filter[t[a].type].apply(null, t[a].matches), n[R]) {
                                for (i = ++a; r > i && !k.relative[t[i].type]; i++);
                                return v(a > 1 && g(c), a > 1 && p(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(ut, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && p(t))
                            }
                            c.push(n)
                        }
                    return g(c)
                }

                function b(t, e) {
                    var i = 0,
                        o = e.length > 0,
                        s = t.length > 0,
                        a = function(r, a, l, u, c) {
                            var d, h, p, f = [],
                                g = 0,
                                v = "0",
                                y = r && [],
                                b = null != c,
                                w = $,
                                S = r || s && k.find.TAG("*", c && a.parentNode || a),
                                _ = U += null == w ? 1 : Math.random() || .1;
                            for (b && ($ = a !== O && a, x = i); null != (d = S[v]); v++) {
                                if (s && d) {
                                    for (h = 0; p = t[h++];)
                                        if (p(d, a, l)) {
                                            u.push(d);
                                            break
                                        }
                                    b && (U = _, x = ++i)
                                }
                                o && ((d = !p && d) && g--, r && y.push(d))
                            }
                            if (g += v, o && v !== g) {
                                for (h = 0; p = e[h++];) p(y, f, a, l);
                                if (r) {
                                    if (g > 0)
                                        for (; v--;) y[v] || f[v] || (f[v] = K.call(u));
                                    f = m(f)
                                }
                                tt.apply(u, f), b && !r && f.length > 0 && g + e.length > 1 && n.uniqueSort(u)
                            }
                            return b && (U = _, $ = w), y
                        };
                    return o ? r(a) : a
                }

                function w(t, e, i) {
                    for (var r = 0, o = e.length; o > r; r++) n(t, e[r], i);
                    return i
                }

                function S(t, e, n, i) {
                    var r, o, s, a, l, u = h(t);
                    if (!i && 1 === u.length) {
                        if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && T.getById && 9 === e.nodeType && I && k.relative[o[1].type]) {
                            if (e = (k.find.ID(s.matches[0].replace(Tt, xt), e) || [])[0], !e) return n;
                            t = t.slice(o.shift().value.length)
                        }
                        for (r = vt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !k.relative[a = s.type]);)
                            if ((l = k.find[a]) && (i = l(s.matches[0].replace(Tt, xt), pt.test(o[0].type) && e.parentNode || e))) {
                                if (o.splice(r, 1), t = i.length && p(o), !t) return tt.apply(n, i), n;
                                break
                            }
                    }
                    return A(t, u)(i, e, !I, n, pt.test(t)), n
                }
                var _, T, x, k, C, D, A, $, M, E, O, P, I, F, j, L, N, R = "sizzle" + -new Date,
                    H = t.document,
                    U = 0,
                    W = 0,
                    q = i(),
                    Y = i(),
                    B = i(),
                    z = !1,
                    V = function(t, e) {
                        return t === e ? (z = !0, 0) : 0
                    },
                    G = typeof e,
                    X = 1 << 31,
                    Q = {}.hasOwnProperty,
                    J = [],
                    K = J.pop,
                    Z = J.push,
                    tt = J.push,
                    et = J.slice,
                    nt = J.indexOf || function(t) {
                        for (var e = 0, n = this.length; n > e; e++)
                            if (this[e] === t) return e;
                        return -1
                    },
                    it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    rt = "[\\x20\\t\\r\\n\\f]",
                    ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    st = ot.replace("w", "w#"),
                    at = "\\[" + rt + "*(" + ot + ")" + rt + "*(?:([*^$|!~]?=)" + rt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + st + ")|)|)" + rt + "*\\]",
                    lt = ":(" + ot + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)",
                    ut = RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
                    dt = RegExp("^" + rt + "*," + rt + "*"),
                    ht = RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
                    pt = RegExp(rt + "*[+~]"),
                    ft = RegExp("=" + rt + "*([^\\]'\"]*)" + rt + "*\\]", "g"),
                    gt = RegExp(lt),
                    mt = RegExp("^" + st + "$"),
                    vt = {
                        ID: RegExp("^#(" + ot + ")"),
                        CLASS: RegExp("^\\.(" + ot + ")"),
                        TAG: RegExp("^(" + ot.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + at),
                        PSEUDO: RegExp("^" + lt),
                        CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                        bool: RegExp("^(?:" + it + ")$", "i"),
                        needsContext: RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    yt = /^[^{]+\{\s*\[native \w/,
                    bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    wt = /^(?:input|select|textarea|button)$/i,
                    St = /^h\d$/i,
                    _t = /'|\\/g,
                    Tt = RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
                    xt = function(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                    };
                try {
                    tt.apply(J = et.call(H.childNodes), H.childNodes), J[H.childNodes.length].nodeType
                } catch (kt) {
                    tt = {
                        apply: J.length ? function(t, e) {
                            Z.apply(t, et.call(e))
                        } : function(t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }
                D = n.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, T = n.support = {}, E = n.setDocument = function(t) {
                    var n = t ? t.ownerDocument || t : H,
                        i = n.defaultView;
                    return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, P = n.documentElement, I = !D(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                        E()
                    }), T.attributes = o(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), T.getElementsByTagName = o(function(t) {
                        return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
                    }), T.getElementsByClassName = o(function(t) {
                        return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                    }), T.getById = o(function(t) {
                        return P.appendChild(t).id = R, !n.getElementsByName || !n.getElementsByName(R).length
                    }), T.getById ? (k.find.ID = function(t, e) {
                        if (typeof e.getElementById !== G && I) {
                            var n = e.getElementById(t);
                            return n && n.parentNode ? [n] : []
                        }
                    }, k.filter.ID = function(t) {
                        var e = t.replace(Tt, xt);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete k.find.ID, k.filter.ID = function(t) {
                        var e = t.replace(Tt, xt);
                        return function(t) {
                            var n = typeof t.getAttributeNode !== G && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), k.find.TAG = T.getElementsByTagName ? function(t, n) {
                        return typeof n.getElementsByTagName !== G ? n.getElementsByTagName(t) : e
                    } : function(t, e) {
                        var n, i = [],
                            r = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, k.find.CLASS = T.getElementsByClassName && function(t, n) {
                        return typeof n.getElementsByClassName !== G && I ? n.getElementsByClassName(t) : e
                    }, j = [], F = [], (T.qsa = yt.test(n.querySelectorAll)) && (o(function(t) {
                        t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || F.push("\\[" + rt + "*(?:value|" + it + ")"), t.querySelectorAll(":checked").length || F.push(":checked")
                    }), o(function(t) {
                        var e = n.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && F.push("[*^$]=" + rt + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), F.push(",.*:")
                    })), (T.matchesSelector = yt.test(L = P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(t) {
                        T.disconnectedMatch = L.call(t, "div"), L.call(t, "[s!='']:x"), j.push("!=", lt)
                    }), F = F.length && RegExp(F.join("|")), j = j.length && RegExp(j.join("|")), N = yt.test(P.contains) || P.compareDocumentPosition ? function(t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            i = e && e.parentNode;
                        return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, V = P.compareDocumentPosition ? function(t, e) {
                        if (t === e) return z = !0, 0;
                        var i = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e);
                        return i ? 1 & i || !T.sortDetached && e.compareDocumentPosition(t) === i ? t === n || N(H, t) ? -1 : e === n || N(H, e) ? 1 : M ? nt.call(M, t) - nt.call(M, e) : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                    } : function(t, e) {
                        var i, r = 0,
                            o = t.parentNode,
                            s = e.parentNode,
                            l = [t],
                            u = [e];
                        if (t === e) return z = !0, 0;
                        if (!o || !s) return t === n ? -1 : e === n ? 1 : o ? -1 : s ? 1 : M ? nt.call(M, t) - nt.call(M, e) : 0;
                        if (o === s) return a(t, e);
                        for (i = t; i = i.parentNode;) l.unshift(i);
                        for (i = e; i = i.parentNode;) u.unshift(i);
                        for (; l[r] === u[r];) r++;
                        return r ? a(l[r], u[r]) : l[r] === H ? -1 : u[r] === H ? 1 : 0
                    }, n) : O
                }, n.matches = function(t, e) {
                    return n(t, null, null, e)
                }, n.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== O && E(t), e = e.replace(ft, "='$1']"), !(!T.matchesSelector || !I || j && j.test(e) || F && F.test(e))) try {
                        var i = L.call(t, e);
                        if (i || T.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (r) {}
                    return n(e, O, null, [t]).length > 0
                }, n.contains = function(t, e) {
                    return (t.ownerDocument || t) !== O && E(t), N(t, e)
                }, n.attr = function(t, n) {
                    (t.ownerDocument || t) !== O && E(t);
                    var i = k.attrHandle[n.toLowerCase()],
                        r = i && Q.call(k.attrHandle, n.toLowerCase()) ? i(t, n, !I) : e;
                    return r === e ? T.attributes || !I ? t.getAttribute(n) : (r = t.getAttributeNode(n)) && r.specified ? r.value : null : r
                }, n.error = function(t) {
                    throw Error("Syntax error, unrecognized expression: " + t)
                }, n.uniqueSort = function(t) {
                    var e, n = [],
                        i = 0,
                        r = 0;
                    if (z = !T.detectDuplicates, M = !T.sortStable && t.slice(0), t.sort(V), z) {
                        for (; e = t[r++];) e === t[r] && (i = n.push(r));
                        for (; i--;) t.splice(n[i], 1)
                    }
                    return t
                }, C = n.getText = function(t) {
                    var e, n = "",
                        i = 0,
                        r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                        } else if (3 === r || 4 === r) return t.nodeValue
                    } else
                        for (; e = t[i]; i++) n += C(e);
                    return n
                }, k = n.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: vt,
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
                        ATTR: function(t) {
                            return t[1] = t[1].replace(Tt, xt), t[3] = (t[4] || t[5] || "").replace(Tt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || n.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && n.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var n, i = !t[5] && t[2];
                            return vt.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : i && gt.test(i) && (n = h(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (t[0] = t[0].slice(0, n), t[2] = i.slice(0, n)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(Tt, xt).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = q[t + " "];
                            return e || (e = RegExp("(^|" + rt + ")" + t + "(" + rt + "|$)")) && q(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== G && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, e, i) {
                            return function(r) {
                                var o = n.attr(r, t);
                                return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? (" " + o + " ").indexOf(i) > -1 : "|=" === e && (o === i || o.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(t, e, n, i, r) {
                            var o = "nth" !== t.slice(0, 3),
                                s = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === i && 0 === r ? function(t) {
                                return !!t.parentNode
                            } : function(e, n, l) {
                                var u, c, d, h, p, f, g = o !== s ? "nextSibling" : "previousSibling",
                                    m = e.parentNode,
                                    v = a && e.nodeName.toLowerCase(),
                                    y = !l && !a;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (d = e; d = d[g];)
                                                if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            f = g = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [s ? m.firstChild : m.lastChild], s && y) {
                                        for (c = m[R] || (m[R] = {}), u = c[t] || [], p = u[0] === U && u[1], h = u[0] === U && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (h = p = 0) || f.pop();)
                                            if (1 === d.nodeType && ++h && d === e) {
                                                c[t] = [U, p, h];
                                                break
                                            }
                                    } else if (y && (u = (e[R] || (e[R] = {}))[t]) && u[0] === U) h = u[1];
                                    else
                                        for (;
                                            (d = ++p && d && d[g] || (h = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[R] || (d[R] = {}))[t] = [U, h]), d !== e)););
                                    return h -= r, h === i || 0 === h % i && h / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, e) {
                            var i, o = k.pseudos[t] || k.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
                            return o[R] ? o(e) : o.length > 1 ? (i = [t, t, "", e], k.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function(t, n) {
                                for (var i, r = o(t, e), s = r.length; s--;) i = nt.call(t, r[s]), t[i] = !(n[i] = r[s])
                            }) : function(t) {
                                return o(t, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: r(function(t) {
                            var e = [],
                                n = [],
                                i = A(t.replace(ut, "$1"));
                            return i[R] ? r(function(t, e, n, r) {
                                for (var o, s = i(t, null, r, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                            }) : function(t, r, o) {
                                return e[0] = t, i(e, null, o, n), !n.pop()
                            }
                        }),
                        has: r(function(t) {
                            return function(e) {
                                return n(t, e).length > 0
                            }
                        }),
                        contains: r(function(t) {
                            return function(e) {
                                return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                            }
                        }),
                        lang: r(function(t) {
                            return mt.test(t || "") || n.error("unsupported lang: " + t), t = t.replace(Tt, xt).toLowerCase(),
                                function(e) {
                                    var n;
                                    do
                                        if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === P
                        },
                        focus: function(t) {
                            return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return t.disabled === !1
                        },
                        disabled: function(t) {
                            return t.disabled === !0
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !k.pseudos.empty(t)
                        },
                        header: function(t) {
                            return St.test(t.nodeName)
                        },
                        input: function(t) {
                            return wt.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(t, e) {
                            return [e - 1]
                        }),
                        eq: c(function(t, e, n) {
                            return [0 > n ? n + e : n]
                        }),
                        even: c(function(t, e) {
                            for (var n = 0; e > n; n += 2) t.push(n);
                            return t
                        }),
                        odd: c(function(t, e) {
                            for (var n = 1; e > n; n += 2) t.push(n);
                            return t
                        }),
                        lt: c(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                            return t
                        }),
                        gt: c(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; e > ++i;) t.push(i);
                            return t
                        })
                    }
                }, k.pseudos.nth = k.pseudos.eq;
                for (_ in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) k.pseudos[_] = l(_);
                for (_ in {
                        submit: !0,
                        reset: !0
                    }) k.pseudos[_] = u(_);
                d.prototype = k.filters = k.pseudos, k.setFilters = new d, A = n.compile = function(t, e) {
                    var n, i = [],
                        r = [],
                        o = B[t + " "];
                    if (!o) {
                        for (e || (e = h(t)), n = e.length; n--;) o = y(e[n]), o[R] ? i.push(o) : r.push(o);
                        o = B(t, b(r, i))
                    }
                    return o
                }, T.sortStable = R.split("").sort(V).join("") === R, T.detectDuplicates = z, E(), T.sortDetached = o(function(t) {
                    return 1 & t.compareDocumentPosition(O.createElement("div"))
                }), o(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || s("type|href|height|width", function(t, n, i) {
                    return i ? e : t.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
                }), T.attributes && o(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || s("value", function(t, n, i) {
                    return i || "input" !== t.nodeName.toLowerCase() ? e : t.defaultValue
                }), o(function(t) {
                    return null == t.getAttribute("disabled")
                }) || s(it, function(t, n, i) {
                    var r;
                    return i ? e : (r = t.getAttributeNode(n)) && r.specified ? r.value : t[n] === !0 ? n.toLowerCase() : null
                }), ct.find = n, ct.expr = n.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = n.uniqueSort, ct.text = n.getText, ct.isXMLDoc = n.isXML, ct.contains = n.contains
            }(t);
        var kt = {};
        ct.Callbacks = function(t) {
            t = "string" == typeof t ? kt[t] || i(t) : ct.extend({}, t);
            var n, r, o, s, a, l, u = [],
                c = !t.once && [],
                d = function(e) {
                    for (r = t.memory && e, o = !0, a = l || 0, l = 0, s = u.length, n = !0; u && s > a; a++)
                        if (u[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                            r = !1;
                            break
                        }
                    n = !1, u && (c ? c.length && d(c.shift()) : r ? u = [] : h.disable())
                },
                h = {
                    add: function() {
                        if (u) {
                            var e = u.length;
                            ! function i(e) {
                                ct.each(e, function(e, n) {
                                    var r = ct.type(n);
                                    "function" === r ? t.unique && h.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                                })
                            }(arguments), n ? s = u.length : r && (l = e, d(r))
                        }
                        return this
                    },
                    remove: function() {
                        return u && ct.each(arguments, function(t, e) {
                            for (var i;
                                (i = ct.inArray(e, u, i)) > -1;) u.splice(i, 1), n && (s >= i && s--, a >= i && a--)
                        }), this
                    },
                    has: function(t) {
                        return t ? ct.inArray(t, u) > -1 : !(!u || !u.length)
                    },
                    empty: function() {
                        return u = [], s = 0, this
                    },
                    disable: function() {
                        return u = c = r = e, this
                    },
                    disabled: function() {
                        return !u
                    },
                    lock: function() {
                        return c = e, r || h.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(t, e) {
                        return !u || o && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? c.push(e) : d(e)), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!o
                    }
                };
            return h
        }, ct.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", ct.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ct.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ct.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return ct.Deferred(function(n) {
                                ct.each(e, function(e, o) {
                                    var s = o[0],
                                        a = ct.isFunction(t[e]) && t[e];
                                    r[o[1]](function() {
                                        var t = a && a.apply(this, arguments);
                                        t && ct.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ct.extend(t, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, ct.each(e, function(t, o) {
                    var s = o[2],
                        a = o[3];
                    i[o[1]] = s.add, a && s.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), i.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, n, i, r = 0,
                    o = ot.call(arguments),
                    s = o.length,
                    a = 1 !== s || t && ct.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : ct.Deferred(),
                    u = function(t, n, i) {
                        return function(r) {
                            n[t] = this, i[t] = arguments.length > 1 ? ot.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (e = Array(s), n = Array(s), i = Array(s); s > r; r++) o[r] && ct.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, e)) : --a;
                return a || l.resolveWith(i, o), l.promise()
            }
        }), ct.support = function(e) {
            var n, i, r, o, s, a, l, u, c, d = Q.createElement("div");
            if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], i = d.getElementsByTagName("a")[0], !i || !i.style || !n.length) return e;
            o = Q.createElement("select"), a = o.appendChild(Q.createElement("option")), r = d.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== d.className, e.leadingWhitespace = 3 === d.firstChild.nodeType, e.tbody = !d.getElementsByTagName("tbody").length, e.htmlSerialize = !!d.getElementsByTagName("link").length, e.style = /top/.test(i.getAttribute("style")), e.hrefNormalized = "/a" === i.getAttribute("href"), e.opacity = /^0.5/.test(i.style.opacity), e.cssFloat = !!i.style.cssFloat, e.checkOn = !!r.value, e.optSelected = a.selected, e.enctype = !!Q.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== Q.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, r.checked = !0, e.noCloneChecked = r.cloneNode(!0).checked, o.disabled = !0, e.optDisabled = !a.disabled;
            try {
                delete d.test
            } catch (h) {
                e.deleteExpando = !1
            }
            r = Q.createElement("input"), r.setAttribute("value", ""), e.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), e.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), s = Q.createDocumentFragment(), s.appendChild(r), e.appendChecked = r.checked, e.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
                e.noCloneEvent = !1
            }), d.cloneNode(!0).click());
            for (c in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) d.setAttribute(l = "on" + c, "t"), e[c + "Bubbles"] = l in t || d.attributes[l].expando === !1;
            d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === d.style.backgroundClip;
            for (c in ct(e)) break;
            return e.ownLast = "0" !== c, ct(function() {
                var n, i, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    s = Q.getElementsByTagName("body")[0];
                s && (n = Q.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = d.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", e.reliableHiddenOffsets = u && 0 === r[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(s, null != s.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    e.boxSizing = 4 === d.offsetWidth
                }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(d, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(d, null) || {
                    width: "4px"
                }).width, i = d.appendChild(Q.createElement("div")), i.style.cssText = d.style.cssText = o, i.style.marginRight = i.style.width = "0", d.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== G && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== d.offsetWidth, e.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = d = r = i = null)
            }), n = o = s = a = i = r = null, e
        }({});
        var Ct = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Dt = /([A-Z])/g;
        ct.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? ct.cache[t[ct.expando]] : t[ct.expando], !!t && !a(t)
            },
            data: function(t, e, n) {
                return r(t, e, n)
            },
            removeData: function(t, e) {
                return o(t, e)
            },
            _data: function(t, e, n) {
                return r(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return o(t, e, !0)
            },
            acceptData: function(t) {
                if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
                var e = t.nodeName && ct.noData[t.nodeName.toLowerCase()];
                return !e || e !== !0 && t.getAttribute("classid") === e
            }
        }), ct.fn.extend({
            data: function(t, n) {
                var i, r, o = null,
                    a = 0,
                    l = this[0];
                if (t === e) {
                    if (this.length && (o = ct.data(l), 1 === l.nodeType && !ct._data(l, "parsedAttrs"))) {
                        for (i = l.attributes; i.length > a; a++) r = i[a].name, 0 === r.indexOf("data-") && (r = ct.camelCase(r.slice(5)), s(l, r, o[r]));
                        ct._data(l, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    ct.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    ct.data(this, t, n)
                }) : l ? s(l, t, ct.data(l, t)) : null
            },
            removeData: function(t) {
                return this.each(function() {
                    ct.removeData(this, t)
                })
            }
        }), ct.extend({
            queue: function(t, n, i) {
                var r;
                return t ? (n = (n || "fx") + "queue", r = ct._data(t, n), i && (!r || ct.isArray(i) ? r = ct._data(t, n, ct.makeArray(i)) : r.push(i)), r || []) : e
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = ct.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    o = ct._queueHooks(t, e),
                    s = function() {
                        ct.dequeue(t, e)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return ct._data(t, n) || ct._data(t, n, {
                    empty: ct.Callbacks("once memory").add(function() {
                        ct._removeData(t, e + "queue"), ct._removeData(t, n)
                    })
                })
            }
        }), ct.fn.extend({
            queue: function(t, n) {
                var i = 2;
                return "string" != typeof t && (n = t, t = "fx", i--), i > arguments.length ? ct.queue(this[0], t) : n === e ? this : this.each(function() {
                    var e = ct.queue(this, t, n);
                    ct._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ct.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ct.dequeue(this, t)
                })
            },
            delay: function(t, e) {
                return t = ct.fx ? ct.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, n) {
                var i, r = 1,
                    o = ct.Deferred(),
                    s = this,
                    a = this.length,
                    l = function() {
                        --r || o.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (n = t, t = e), t = t || "fx"; a--;) i = ct._data(s[a], t + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
                return l(), o.promise(n)
            }
        });
        var At, $t, Mt = /[\t\r\n\f]/g,
            Et = /\r/g,
            Ot = /^(?:input|select|textarea|button|object)$/i,
            Pt = /^(?:a|area)$/i,
            It = /^(?:checked|selected)$/i,
            Ft = ct.support.getSetAttribute,
            jt = ct.support.input;
        ct.fn.extend({
            attr: function(t, e) {
                return ct.access(this, ct.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    ct.removeAttr(this, t)
                })
            },
            prop: function(t, e) {
                return ct.access(this, ct.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = ct.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = e, delete this[t]
                    } catch (n) {}
                })
            },
            addClass: function(t) {
                var e, n, i, r, o, s = 0,
                    a = this.length,
                    l = "string" == typeof t && t;
                if (ct.isFunction(t)) return this.each(function(e) {
                    ct(this).addClass(t.call(this, e, this.className))
                });
                if (l)
                    for (e = (t || "").match(ht) || []; a > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Mt, " ") : " ")) {
                            for (o = 0; r = e[o++];) 0 > i.indexOf(" " + r + " ") && (i += r + " ");
                            n.className = ct.trim(i)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, r, o, s = 0,
                    a = this.length,
                    l = 0 === arguments.length || "string" == typeof t && t;
                if (ct.isFunction(t)) return this.each(function(e) {
                    ct(this).removeClass(t.call(this, e, this.className))
                });
                if (l)
                    for (e = (t || "").match(ht) || []; a > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Mt, " ") : "")) {
                            for (o = 0; r = e[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            n.className = t ? ct.trim(i) : ""
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ct.isFunction(t) ? this.each(function(n) {
                    ct(this).toggleClass(t.call(this, n, this.className, e), e)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var e, i = 0, r = ct(this), o = t.match(ht) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else(n === G || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ct._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Mt, " ").indexOf(e) >= 0) return !0;
                return !1
            },
            val: function(t) {
                var n, i, r, o = this[0];
                return arguments.length ? (r = ct.isFunction(t), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = r ? t.call(this, n, ct(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ct.isArray(o) && (o = ct.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), i = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== e || (this.value = o))
                })) : o ? (i = ct.valHooks[o.type] || ct.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (n = i.get(o, "value")) !== e ? n : (n = o.value, "string" == typeof n ? n.replace(Et, "") : null == n ? "" : n)) : void 0
            }
        }), ct.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = ct.find.attr(t, "value");
                        return null != e ? e : t.text
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                            if (n = i[l], !(!n.selected && l !== r || (ct.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
                                if (e = ct(n).val(), o) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, r = t.options, o = ct.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = ct.inArray(ct(i).val(), o) >= 0) && (n = !0);
                        return n || (t.selectedIndex = -1), o
                    }
                }
            },
            attr: function(t, n, i) {
                var r, o, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === G ? ct.prop(t, n, i) : (1 === s && ct.isXMLDoc(t) || (n = n.toLowerCase(), r = ct.attrHooks[n] || (ct.expr.match.bool.test(n) ? $t : At)), i === e ? r && "get" in r && null !== (o = r.get(t, n)) ? o : (o = ct.find.attr(t, n), null == o ? e : o) : null !== i ? r && "set" in r && (o = r.set(t, i, n)) !== e ? o : (t.setAttribute(n, i + ""), i) : (ct.removeAttr(t, n), e))
            },
            removeAttr: function(t, e) {
                var n, i, r = 0,
                    o = e && e.match(ht);
                if (o && 1 === t.nodeType)
                    for (; n = o[r++];) i = ct.propFix[n] || n, ct.expr.match.bool.test(n) ? jt && Ft || !It.test(n) ? t[i] = !1 : t[ct.camelCase("default-" + n)] = t[i] = !1 : ct.attr(t, n, ""), t.removeAttribute(Ft ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!ct.support.radioValue && "radio" === e && ct.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, n, i) {
                var r, o, s, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !ct.isXMLDoc(t), s && (n = ct.propFix[n] || n, o = ct.propHooks[n]), i !== e ? o && "set" in o && (r = o.set(t, i, n)) !== e ? r : t[n] = i : o && "get" in o && null !== (r = o.get(t, n)) ? r : t[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = ct.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Ot.test(t.nodeName) || Pt.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), $t = {
            set: function(t, e, n) {
                return e === !1 ? ct.removeAttr(t, n) : jt && Ft || !It.test(n) ? t.setAttribute(!Ft && ct.propFix[n] || n, n) : t[ct.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, ct.each(ct.expr.match.bool.source.match(/\w+/g), function(t, n) {
            var i = ct.expr.attrHandle[n] || ct.find.attr;
            ct.expr.attrHandle[n] = jt && Ft || !It.test(n) ? function(t, n, r) {
                var o = ct.expr.attrHandle[n],
                    s = r ? e : (ct.expr.attrHandle[n] = e) != i(t, n, r) ? n.toLowerCase() : null;
                return ct.expr.attrHandle[n] = o, s
            } : function(t, n, i) {
                return i ? e : t[ct.camelCase("default-" + n)] ? n.toLowerCase() : null
            }
        }), jt && Ft || (ct.attrHooks.value = {
            set: function(t, n, i) {
                return ct.nodeName(t, "input") ? (t.defaultValue = n, e) : At && At.set(t, n, i)
            }
        }), Ft || (At = {
            set: function(t, n, i) {
                var r = t.getAttributeNode(i);
                return r || t.setAttributeNode(r = t.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === t.getAttribute(i) ? n : e
            }
        }, ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function(t, n, i) {
            var r;
            return i ? e : (r = t.getAttributeNode(n)) && "" !== r.value ? r.value : null
        }, ct.valHooks.button = {
            get: function(t, n) {
                var i = t.getAttributeNode(n);
                return i && i.specified ? i.value : e
            },
            set: At.set
        }, ct.attrHooks.contenteditable = {
            set: function(t, e, n) {
                At.set(t, "" !== e && e, n)
            }
        }, ct.each(["width", "height"], function(t, n) {
            ct.attrHooks[n] = {
                set: function(t, i) {
                    return "" === i ? (t.setAttribute(n, "auto"), i) : e
                }
            }
        })), ct.support.hrefNormalized || ct.each(["href", "src"], function(t, e) {
            ct.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), ct.support.style || (ct.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || e
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        }), ct.support.optSelected || (ct.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ct.propFix[this.toLowerCase()] = this
        }), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.each(["radio", "checkbox"], function() {
            ct.valHooks[this] = {
                set: function(t, n) {
                    return ct.isArray(n) ? t.checked = ct.inArray(ct(t).val(), n) >= 0 : e
                }
            }, ct.support.checkOn || (ct.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Lt = /^(?:input|select|textarea)$/i,
            Nt = /^key/,
            Rt = /^(?:mouse|contextmenu)|click/,
            Ht = /^(?:focusinfocus|focusoutblur)$/,
            Ut = /^([^.]*)(?:\.(.+)|)$/;
        ct.event = {
            global: {},
            add: function(t, n, i, r, o) {
                var s, a, l, u, c, d, h, p, f, g, m, v = ct._data(t);
                if (v) {
                    for (i.handler && (u = i, i = u.handler, o = u.selector), i.guid || (i.guid = ct.guid++), (a = v.events) || (a = v.events = {}), (d = v.handle) || (d = v.handle = function(t) {
                            return typeof ct === G || t && ct.event.triggered === t.type ? e : ct.event.dispatch.apply(d.elem, arguments)
                        }, d.elem = t), n = (n || "").match(ht) || [""], l = n.length; l--;) s = Ut.exec(n[l]) || [], f = m = s[1], g = (s[2] || "").split(".").sort(), f && (c = ct.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = ct.event.special[f] || {}, h = ct.extend({
                        type: f,
                        origType: m,
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && ct.expr.match.needsContext.test(o),
                        namespace: g.join(".")
                    }, u), (p = a[f]) || (p = a[f] = [], p.delegateCount = 0, c.setup && c.setup.call(t, r, g, d) !== !1 || (t.addEventListener ? t.addEventListener(f, d, !1) : t.attachEvent && t.attachEvent("on" + f, d))), c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, h) : p.push(h), ct.event.global[f] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, r) {
                var o, s, a, l, u, c, d, h, p, f, g, m = ct.hasData(t) && ct._data(t);
                if (m && (c = m.events)) {
                    for (e = (e || "").match(ht) || [""], u = e.length; u--;)
                        if (a = Ut.exec(e[u]) || [], p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                            for (d = ct.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = c[p] || [], a = a[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) s = h[o], !r && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(o, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(t, s));
                            l && !h.length && (d.teardown && d.teardown.call(t, f, m.handle) !== !1 || ct.removeEvent(t, p, m.handle), delete c[p])
                        } else
                            for (p in c) ct.event.remove(t, p + e[u], n, i, !0);
                    ct.isEmptyObject(c) && (delete m.handle, ct._removeData(t, "events"))
                }
            },
            trigger: function(n, i, r, o) {
                var s, a, l, u, c, d, h, p = [r || Q],
                    f = lt.call(n, "type") ? n.type : n,
                    g = lt.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = d = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !Ht.test(f + ct.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), a = 0 > f.indexOf(":") && "on" + f, n = n[ct.expando] ? n : new ct.Event(f, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = r), i = null == i ? [n] : ct.makeArray(i, [n]), c = ct.event.special[f] || {}, o || !c.trigger || c.trigger.apply(r, i) !== !1)) {
                    if (!o && !c.noBubble && !ct.isWindow(r)) {
                        for (u = c.delegateType || f, Ht.test(u + f) || (l = l.parentNode); l; l = l.parentNode) p.push(l), d = l;
                        d === (r.ownerDocument || Q) && p.push(d.defaultView || d.parentWindow || t)
                    }
                    for (h = 0;
                        (l = p[h++]) && !n.isPropagationStopped();) n.type = h > 1 ? u : c.bindType || f, s = (ct._data(l, "events") || {})[n.type] && ct._data(l, "handle"), s && s.apply(l, i), s = a && l[a], s && ct.acceptData(l) && s.apply && s.apply(l, i) === !1 && n.preventDefault();
                    if (n.type = f, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), i) === !1) && ct.acceptData(r) && a && r[f] && !ct.isWindow(r)) {
                        d = r[a], d && (r[a] = null), ct.event.triggered = f;
                        try {
                            r[f]()
                        } catch (m) {}
                        ct.event.triggered = e, d && (r[a] = d)
                    }
                    return n.result
                }
            },
            dispatch: function(t) {
                t = ct.event.fix(t);
                var n, i, r, o, s, a = [],
                    l = ot.call(arguments),
                    u = (ct._data(this, "events") || {})[t.type] || [],
                    c = ct.event.special[t.type] || {};
                if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (a = ct.event.handlers.call(this, t, u), n = 0;
                        (o = a[n++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, s = 0;
                            (r = o.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, i = ((ct.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), i !== e && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, n) {
                var i, r, o, s, a = [],
                    l = n.delegateCount,
                    u = t.target;
                if (l && u.nodeType && (!t.button || "click" !== t.type))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== t.type)) {
                            for (o = [], s = 0; l > s; s++) r = n[s], i = r.selector + " ", o[i] === e && (o[i] = r.needsContext ? ct(i, this).index(u) >= 0 : ct.find(i, this, null, [u]).length), o[i] && o.push(r);
                            o.length && a.push({
                                elem: u,
                                handlers: o
                            })
                        }
                return n.length > l && a.push({
                    elem: this,
                    handlers: n.slice(l)
                }), a
            },
            fix: function(t) {
                if (t[ct.expando]) return t;
                var e, n, i, r = t.type,
                    o = t,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Rt.test(r) ? this.mouseHooks : Nt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ct.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
                return t.target || (t.target = o.srcElement || Q), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, n) {
                    var i, r, o, s = n.button,
                        a = n.fromElement;
                    return null == t.pageX && null != n.clientX && (r = t.target.ownerDocument || Q, o = r.documentElement, i = r.body, t.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), t.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? n.toElement : a), t.which || s === e || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== c() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === c() && this.blur ? (this.blur(), !1) : e
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : e
                    },
                    _default: function(t) {
                        return ct.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        t.result !== e && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var r = ct.extend(new ct.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ct.event.trigger(r, null, e) : ct.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, ct.removeEvent = Q.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === G && (t[i] = null), t.detachEvent(i, n))
        }, ct.Event = function(t, n) {
            return this instanceof ct.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : u) : this.type = t, n && ct.extend(this, n), this.timeStamp = t && t.timeStamp || ct.now(), this[ct.expando] = !0, e) : new ct.Event(t, n)
        }, ct.Event.prototype = {
            isDefaultPrevented: u,
            isPropagationStopped: u,
            isImmediatePropagationStopped: u,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = l, this.stopPropagation()
            }
        }, ct.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(t, e) {
            ct.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        r = t.relatedTarget,
                        o = t.handleObj;
                    return (!r || r !== i && !ct.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ct.support.submitBubbles || (ct.event.special.submit = {
            setup: function() {
                return !ct.nodeName(this, "form") && (ct.event.add(this, "click._submit keypress._submit", function(t) {
                    var n = t.target,
                        i = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form : e;
                    i && !ct._data(i, "submitBubbles") && (ct.event.add(i, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), ct._data(i, "submitBubbles", !0))
                }), e)
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ct.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return !ct.nodeName(this, "form") && (ct.event.remove(this, "._submit"), e)
            }
        }), ct.support.changeBubbles || (ct.event.special.change = {
            setup: function() {
                return Lt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), ct.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, t, !0)
                })), !1) : (ct.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Lt.test(e.nodeName) && !ct._data(e, "changeBubbles") && (ct.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || ct.event.simulate("change", this.parentNode, t, !0)
                    }), ct._data(e, "changeBubbles", !0))
                }), e)
            },
            handle: function(t) {
                var n = t.target;
                return this !== n || t.isSimulated || t.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? t.handleObj.handler.apply(this, arguments) : e
            },
            teardown: function() {
                return ct.event.remove(this, "._change"), !Lt.test(this.nodeName)
            }
        }), ct.support.focusinBubbles || ct.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = 0,
                i = function(t) {
                    ct.event.simulate(e, t.target, ct.event.fix(t), !0)
                };
            ct.event.special[e] = {
                setup: function() {
                    0 === n++ && Q.addEventListener(t, i, !0)
                },
                teardown: function() {
                    0 === --n && Q.removeEventListener(t, i, !0)
                }
            }
        }), ct.fn.extend({
            on: function(t, n, i, r, o) {
                var s, a;
                if ("object" == typeof t) {
                    "string" != typeof n && (i = i || n, n = e);
                    for (s in t) this.on(s, n, i, t[s], o);
                    return this
                }
                if (null == i && null == r ? (r = n, i = n = e) : null == r && ("string" == typeof n ? (r = i, i = e) : (r = i, i = n, n = e)), r === !1) r = u;
                else if (!r) return this;
                return 1 === o && (a = r, r = function(t) {
                    return ct().off(t), a.apply(this, arguments)
                }, r.guid = a.guid || (a.guid = ct.guid++)), this.each(function() {
                    ct.event.add(this, t, r, i, n)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, n, i) {
                var r, o;
                if (t && t.preventDefault && t.handleObj) return r = t.handleObj, ct(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, n, t[o]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (i = n, n = e), i === !1 && (i = u), this.each(function() {
                    ct.event.remove(this, t, i, n)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    ct.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, n) {
                var i = this[0];
                return i ? ct.event.trigger(t, n, i, !0) : e
            }
        });
        var Wt = /^.[^:#\[\.,]*$/,
            qt = /^(?:parents|prev(?:Until|All))/,
            Yt = ct.expr.match.needsContext,
            Bt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ct.fn.extend({
            find: function(t) {
                var e, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof t) return this.pushStack(ct(t).filter(function() {
                    for (e = 0; r > e; e++)
                        if (ct.contains(i[e], this)) return !0
                }));
                for (e = 0; r > e; e++) ct.find(t, i[e], n);
                return n = this.pushStack(r > 1 ? ct.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            has: function(t) {
                var e, n = ct(t, this),
                    i = n.length;
                return this.filter(function() {
                    for (e = 0; i > e; e++)
                        if (ct.contains(this, n[e])) return !0
                })
            },
            not: function(t) {
                return this.pushStack(h(this, t || [], !0))
            },
            filter: function(t) {
                return this.pushStack(h(this, t || [], !1))
            },
            is: function(t) {
                return !!h(this, "string" == typeof t && Yt.test(t) ? ct(t) : t || [], !1).length
            },
            closest: function(t, e) {
                for (var n, i = 0, r = this.length, o = [], s = Yt.test(t) || "string" != typeof t ? ct(t, e || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && ct.find.matchesSelector(n, t))) {
                            n = o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? ct.unique(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? ct.inArray(this[0], ct(t)) : ct.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                var n = "string" == typeof t ? ct(t, e) : ct.makeArray(t && t.nodeType ? [t] : t),
                    i = ct.merge(this.get(), n);
                return this.pushStack(ct.unique(i))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ct.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return ct.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return ct.dir(t, "parentNode", n)
            },
            next: function(t) {
                return d(t, "nextSibling")
            },
            prev: function(t) {
                return d(t, "previousSibling")
            },
            nextAll: function(t) {
                return ct.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return ct.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return ct.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return ct.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return ct.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return ct.sibling(t.firstChild)
            },
            contents: function(t) {
                return ct.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ct.merge([], t.childNodes)
            }
        }, function(t, e) {
            ct.fn[t] = function(n, i) {
                var r = ct.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ct.filter(i, r)), this.length > 1 && (Bt[t] || (r = ct.unique(r)), qt.test(t) && (r = r.reverse())), this.pushStack(r)
            }
        }), ct.extend({
            filter: function(t, e, n) {
                var i = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ct.find.matchesSelector(i, t) ? [i] : [] : ct.find.matches(t, ct.grep(e, function(t) {
                    return 1 === t.nodeType
                }))
            },
            dir: function(t, n, i) {
                for (var r = [], o = t[n]; o && 9 !== o.nodeType && (i === e || 1 !== o.nodeType || !ct(o).is(i));) 1 === o.nodeType && r.push(o), o = o[n];
                return r
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        });
        var zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Vt = / jQuery\d+="(?:null|\d+)"/g,
            Gt = RegExp("<(?:" + zt + ")[\\s/>]", "i"),
            Xt = /^\s+/,
            Qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Jt = /<([\w:]+)/,
            Kt = /<tbody/i,
            Zt = /<|&#?\w+;/,
            te = /<(?:script|style|link)/i,
            ee = /^(?:checkbox|radio)$/i,
            ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ie = /^$|\/(?:java|ecma)script/i,
            re = /^true\/(.*)/,
            oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            se = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            ae = p(Q),
            le = ae.appendChild(Q.createElement("div"));
        se.optgroup = se.option, se.tbody = se.tfoot = se.colgroup = se.caption = se.thead, se.th = se.td, ct.fn.extend({
            text: function(t) {
                return ct.access(this, function(t) {
                    return t === e ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = f(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = f(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = t ? ct.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || ct.cleanData(w(n)), n.parentNode && (e && ct.contains(n.ownerDocument, n) && v(w(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && ct.cleanData(w(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && ct.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return ct.clone(this, t, e)
                })
            },
            html: function(t) {
                return ct.access(this, function(t) {
                    var n = this[0] || {},
                        i = 0,
                        r = this.length;
                    if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(Vt, "") : e;
                    if (!("string" != typeof t || te.test(t) || !ct.support.htmlSerialize && Gt.test(t) || !ct.support.leadingWhitespace && Xt.test(t) || se[(Jt.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(Qt, "<$1></$2>");
                        try {
                            for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (ct.cleanData(w(n, !1)), n.innerHTML = t);
                            n = 0
                        } catch (o) {}
                    }
                    n && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = ct.map(this, function(t) {
                        return [t.nextSibling, t.parentNode]
                    }),
                    e = 0;
                return this.domManip(arguments, function(n) {
                    var i = t[e++],
                        r = t[e++];
                    r && (i && i.parentNode !== r && (i = this.nextSibling), ct(this).remove(), r.insertBefore(n, i))
                }, !0), e ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e, n) {
                t = it.apply([], t);
                var i, r, o, s, a, l, u = 0,
                    c = this.length,
                    d = this,
                    h = c - 1,
                    p = t[0],
                    f = ct.isFunction(p);
                if (f || !(1 >= c || "string" != typeof p || ct.support.checkClone) && ne.test(p)) return this.each(function(i) {
                    var r = d.eq(i);
                    f && (t[0] = p.call(this, i, r.html())), r.domManip(t, e, n)
                });
                if (c && (l = ct.buildFragment(t, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                    for (s = ct.map(w(l, "script"), g), o = s.length; c > u; u++) r = l, u !== h && (r = ct.clone(r, !0, !0), o && ct.merge(s, w(r, "script"))), e.call(this[u], r, u);
                    if (o)
                        for (a = s[s.length - 1].ownerDocument, ct.map(s, m), u = 0; o > u; u++) r = s[u], ie.test(r.type || "") && !ct._data(r, "globalEval") && ct.contains(a, r) && (r.src ? ct._evalUrl(r.src) : ct.globalEval((r.text || r.textContent || r.innerHTML || "").replace(oe, "")));
                    l = i = null
                }
                return this
            }
        }), ct.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            ct.fn[t] = function(t) {
                for (var n, i = 0, r = [], o = ct(t), s = o.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), ct(o[i])[e](n), rt.apply(r, n.get());
                return this.pushStack(r)
            }
        }), ct.extend({
            clone: function(t, e, n) {
                var i, r, o, s, a, l = ct.contains(t.ownerDocument, t);
                if (ct.support.html5Clone || ct.isXMLDoc(t) || !Gt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (le.innerHTML = t.outerHTML, le.removeChild(o = le.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ct.isXMLDoc(t)))
                    for (i = w(o), a = w(t), s = 0; null != (r = a[s]); ++s) i[s] && b(r, i[s]);
                if (e)
                    if (n)
                        for (a = a || w(t), i = i || w(o), s = 0; null != (r = a[s]); s++) y(r, i[s]);
                    else y(t, o);
                return i = w(o, "script"), i.length > 0 && v(i, !l && w(t, "script")), i = a = r = null, o
            },
            buildFragment: function(t, e, n, i) {
                for (var r, o, s, a, l, u, c, d = t.length, h = p(e), f = [], g = 0; d > g; g++)
                    if (o = t[g], o || 0 === o)
                        if ("object" === ct.type(o)) ct.merge(f, o.nodeType ? [o] : o);
                        else if (Zt.test(o)) {
                    for (a = a || h.appendChild(e.createElement("div")), l = (Jt.exec(o) || ["", ""])[1].toLowerCase(), c = se[l] || se._default, a.innerHTML = c[1] + o.replace(Qt, "<$1></$2>") + c[2], r = c[0]; r--;) a = a.lastChild;
                    if (!ct.support.leadingWhitespace && Xt.test(o) && f.push(e.createTextNode(Xt.exec(o)[0])), !ct.support.tbody)
                        for (o = "table" !== l || Kt.test(o) ? "<table>" !== c[1] || Kt.test(o) ? 0 : a : a.firstChild, r = o && o.childNodes.length; r--;) ct.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u);
                    for (ct.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = h.lastChild
                } else f.push(e.createTextNode(o));
                for (a && h.removeChild(a), ct.support.appendChecked || ct.grep(w(f, "input"), S), g = 0; o = f[g++];)
                    if ((!i || -1 === ct.inArray(o, i)) && (s = ct.contains(o.ownerDocument, o), a = w(h.appendChild(o), "script"), s && v(a), n))
                        for (r = 0; o = a[r++];) ie.test(o.type || "") && n.push(o);
                return a = null, h
            },
            cleanData: function(t, e) {
                for (var n, i, r, o, s = 0, a = ct.expando, l = ct.cache, u = ct.support.deleteExpando, c = ct.event.special; null != (n = t[s]); s++)
                    if ((e || ct.acceptData(n)) && (r = n[a], o = r && l[r])) {
                        if (o.events)
                            for (i in o.events) c[i] ? ct.event.remove(n, i) : ct.removeEvent(n, i, o.handle);
                        l[r] && (delete l[r], u ? delete n[a] : typeof n.removeAttribute !== G ? n.removeAttribute(a) : n[a] = null, et.push(r))
                    }
            },
            _evalUrl: function(t) {
                return ct.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }), ct.fn.extend({
            wrapAll: function(t) {
                if (ct.isFunction(t)) return this.each(function(e) {
                    ct(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = ct(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return ct.isFunction(t) ? this.each(function(e) {
                    ct(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = ct(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = ct.isFunction(t);
                return this.each(function(n) {
                    ct(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var ue, ce, de, he = /alpha\([^)]*\)/i,
            pe = /opacity\s*=\s*([^)]*)/,
            fe = /^(top|right|bottom|left)$/,
            ge = /^(none|table(?!-c[ea]).+)/,
            me = /^margin/,
            ve = RegExp("^(" + dt + ")(.*)$", "i"),
            ye = RegExp("^(" + dt + ")(?!px)[a-z%]+$", "i"),
            be = RegExp("^([+-])=(" + dt + ")", "i"),
            we = {
                BODY: "block"
            },
            Se = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            _e = {
                letterSpacing: 0,
                fontWeight: 400
            },
            Te = ["Top", "Right", "Bottom", "Left"],
            xe = ["Webkit", "O", "Moz", "ms"];
        ct.fn.extend({
            css: function(t, n) {
                return ct.access(this, function(t, n, i) {
                    var r, o, s = {},
                        a = 0;
                    if (ct.isArray(n)) {
                        for (o = ce(t), r = n.length; r > a; a++) s[n[a]] = ct.css(t, n[a], !1, o);
                        return s
                    }
                    return i !== e ? ct.style(t, n, i) : ct.css(t, n)
                }, t, n, arguments.length > 1)
            },
            show: function() {
                return x(this, !0)
            },
            hide: function() {
                return x(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    T(this) ? ct(this).show() : ct(this).hide()
                })
            }
        }), ct.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = de(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ct.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, n, i, r) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, s, a, l = ct.camelCase(n),
                        u = t.style;
                    if (n = ct.cssProps[l] || (ct.cssProps[l] = _(u, l)), a = ct.cssHooks[n] || ct.cssHooks[l], i === e) return a && "get" in a && (o = a.get(t, !1, r)) !== e ? o : u[n];
                    if (s = typeof i, "string" === s && (o = be.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ct.css(t, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || ct.cssNumber[l] || (i += "px"), ct.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (u[n] = "inherit"), a && "set" in a && (i = a.set(t, i, r)) === e))) try {
                        u[n] = i
                    } catch (c) {}
                }
            },
            css: function(t, n, i, r) {
                var o, s, a, l = ct.camelCase(n);
                return n = ct.cssProps[l] || (ct.cssProps[l] = _(t.style, l)), a = ct.cssHooks[n] || ct.cssHooks[l], a && "get" in a && (s = a.get(t, !0, i)), s === e && (s = de(t, n, r)), "normal" === s && n in _e && (s = _e[n]), "" === i || i ? (o = parseFloat(s), i === !0 || ct.isNumeric(o) ? o || 0 : s) : s
            }
        }), t.getComputedStyle ? (ce = function(e) {
            return t.getComputedStyle(e, null)
        }, de = function(t, n, i) {
            var r, o, s, a = i || ce(t),
                l = a ? a.getPropertyValue(n) || a[n] : e,
                u = t.style;
            return a && ("" !== l || ct.contains(t.ownerDocument, t) || (l = ct.style(t, n)), ye.test(l) && me.test(n) && (r = u.width, o = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = r, u.minWidth = o, u.maxWidth = s)), l
        }) : Q.documentElement.currentStyle && (ce = function(t) {
            return t.currentStyle
        }, de = function(t, n, i) {
            var r, o, s, a = i || ce(t),
                l = a ? a[n] : e,
                u = t.style;
            return null == l && u && u[n] && (l = u[n]), ye.test(l) && !fe.test(n) && (r = u.left, o = t.runtimeStyle, s = o && o.left, s && (o.left = t.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = r, s && (o.left = s)), "" === l ? "auto" : l
        }), ct.each(["height", "width"], function(t, n) {
            ct.cssHooks[n] = {
                get: function(t, i, r) {
                    return i ? 0 === t.offsetWidth && ge.test(ct.css(t, "display")) ? ct.swap(t, Se, function() {
                        return D(t, n, r)
                    }) : D(t, n, r) : e
                },
                set: function(t, e, i) {
                    var r = i && ce(t);
                    return k(t, e, i ? C(t, n, i, ct.support.boxSizing && "border-box" === ct.css(t, "boxSizing", !1, r), r) : 0)
                }
            }
        }), ct.support.opacity || (ct.cssHooks.opacity = {
            get: function(t, e) {
                return pe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    r = ct.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === ct.trim(o.replace(he, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = he.test(o) ? o.replace(he, r) : o + " " + r)
            }
        }), ct(function() {
            ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
                get: function(t, n) {
                    return n ? ct.swap(t, {
                        display: "inline-block"
                    }, de, [t, "marginRight"]) : e
                }
            }), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function(t, n) {
                ct.cssHooks[n] = {
                    get: function(t, i) {
                        return i ? (i = de(t, n), ye.test(i) ? ct(t).position()[n] + "px" : i) : e
                    }
                }
            })
        }), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function(t) {
            return 0 >= t.offsetWidth && 0 >= t.offsetHeight || !ct.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ct.css(t, "display"))
        }, ct.expr.filters.visible = function(t) {
            return !ct.expr.filters.hidden(t)
        }), ct.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            ct.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Te[i] + e] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, me.test(t) || (ct.cssHooks[t + e].set = k)
        });
        var ke = /%20/g,
            Ce = /\[\]$/,
            De = /\r?\n/g,
            Ae = /^(?:submit|button|image|reset|file)$/i,
            $e = /^(?:input|select|textarea|keygen)/i;
        ct.fn.extend({
            serialize: function() {
                return ct.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = ct.prop(this, "elements");
                    return t ? ct.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !ct(this).is(":disabled") && $e.test(this.nodeName) && !Ae.test(t) && (this.checked || !ee.test(t))
                }).map(function(t, e) {
                    var n = ct(this).val();
                    return null == n ? null : ct.isArray(n) ? ct.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(De, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(De, "\r\n")
                    }
                }).get()
            }
        }), ct.param = function(t, n) {
            var i, r = [],
                o = function(t, e) {
                    e = ct.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (n === e && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(t) || t.jquery && !ct.isPlainObject(t)) ct.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (i in t) M(i, t[i], n, o);
            return r.join("&").replace(ke, "+")
        }, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            ct.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ct.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var Me, Ee, Oe = ct.now(),
            Pe = /\?/,
            Ie = /#.*$/,
            Fe = /([?&])_=[^&]*/,
            je = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Le = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ne = /^(?:GET|HEAD)$/,
            Re = /^\/\//,
            He = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Ue = ct.fn.load,
            We = {},
            qe = {},
            Ye = "*/".concat("*");
        try {
            Ee = X.href
        } catch (Be) {
            Ee = Q.createElement("a"), Ee.href = "", Ee = Ee.href
        }
        Me = He.exec(Ee.toLowerCase()) || [], ct.fn.load = function(t, n, i) {
            if ("string" != typeof t && Ue) return Ue.apply(this, arguments);
            var r, o, s, a = this,
                l = t.indexOf(" ");
            return l >= 0 && (r = t.slice(l, t.length), t = t.slice(0, l)), ct.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (s = "POST"), a.length > 0 && ct.ajax({
                url: t,
                type: s,
                dataType: "html",
                data: n
            }).done(function(t) {
                o = arguments, a.html(r ? ct("<div>").append(ct.parseHTML(t)).find(r) : t)
            }).complete(i && function(t, e) {
                a.each(i, o || [t.responseText, e, t])
            }), this
        }, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ct.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ct.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ee,
                type: "GET",
                isLocal: Le.test(Me[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ye,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ct.parseJSON,
                    "text xml": ct.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? P(P(t, ct.ajaxSettings), e) : P(ct.ajaxSettings, t)
            },
            ajaxPrefilter: E(We),
            ajaxTransport: E(qe),
            ajax: function(t, n) {
                function i(t, n, i, r) {
                    var o, d, y, b, S, T = n;
                    2 !== w && (w = 2, l && clearTimeout(l), c = e, a = r || "", _.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, i && (b = I(h, _, i)), b = F(h, b, _, o), o ? (h.ifModified && (S = _.getResponseHeader("Last-Modified"), S && (ct.lastModified[s] = S), S = _.getResponseHeader("etag"), S && (ct.etag[s] = S)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, d = b.data, y = b.error, o = !y)) : (y = T, (t || !T) && (T = "error", 0 > t && (t = 0))), _.status = t, _.statusText = (n || T) + "", o ? g.resolveWith(p, [d, T, _]) : g.rejectWith(p, [_, T, y]), _.statusCode(v), v = e, u && f.trigger(o ? "ajaxSuccess" : "ajaxError", [_, h, o ? d : y]), m.fireWith(p, [_, T]), u && (f.trigger("ajaxComplete", [_, h]), --ct.active || ct.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (n = t, t = e), n = n || {};
                var r, o, s, a, l, u, c, d, h = ct.ajaxSetup({}, n),
                    p = h.context || h,
                    f = h.context && (p.nodeType || p.jquery) ? ct(p) : ct.event,
                    g = ct.Deferred(),
                    m = ct.Callbacks("once memory"),
                    v = h.statusCode || {},
                    y = {},
                    b = {},
                    w = 0,
                    S = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === w) {
                                if (!d)
                                    for (d = {}; e = je.exec(a);) d[e[1].toLowerCase()] = e[2];
                                e = d[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return w || (t = b[n] = b[n] || t, y[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return w || (h.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > w)
                                    for (e in t) v[e] = [v[e], t[e]];
                                else _.always(t[_.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || S;
                            return c && c.abort(e), i(0, e), this
                        }
                    };
                if (g.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, h.url = ((t || h.url || Ee) + "").replace(Ie, "").replace(Re, Me[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = ct.trim(h.dataType || "*").toLowerCase().match(ht) || [""], null == h.crossDomain && (r = He.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === Me[1] && r[2] === Me[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Me[3] || ("http:" === Me[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = ct.param(h.data, h.traditional)), O(We, h, n, _), 2 === w) return _;
                u = h.global, u && 0 === ct.active++ && ct.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ne.test(h.type), s = h.url, h.hasContent || (h.data && (s = h.url += (Pe.test(s) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Fe.test(s) ? s.replace(Fe, "$1_=" + Oe++) : s + (Pe.test(s) ? "&" : "?") + "_=" + Oe++)), h.ifModified && (ct.lastModified[s] && _.setRequestHeader("If-Modified-Since", ct.lastModified[s]), ct.etag[s] && _.setRequestHeader("If-None-Match", ct.etag[s])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", h.contentType), _.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ye + "; q=0.01" : "") : h.accepts["*"]);
                for (o in h.headers) _.setRequestHeader(o, h.headers[o]);
                if (h.beforeSend && (h.beforeSend.call(p, _, h) === !1 || 2 === w)) return _.abort();
                S = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) _[o](h[o]);
                if (c = O(qe, h, n, _)) {
                    _.readyState = 1, u && f.trigger("ajaxSend", [_, h]), h.async && h.timeout > 0 && (l = setTimeout(function() {
                        _.abort("timeout")
                    }, h.timeout));
                    try {
                        w = 1, c.send(y, i)
                    } catch (T) {
                        if (!(2 > w)) throw T;
                        i(-1, T)
                    }
                } else i(-1, "No Transport");
                return _
            },
            getJSON: function(t, e, n) {
                return ct.get(t, e, n, "json")
            },
            getScript: function(t, n) {
                return ct.get(t, e, n, "script")
            }
        }), ct.each(["get", "post"], function(t, n) {
            ct[n] = function(t, i, r, o) {
                return ct.isFunction(i) && (o = o || r, r = i, i = e), ct.ajax({
                    url: t,
                    type: n,
                    dataType: o,
                    data: i,
                    success: r
                })
            }
        }), ct.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return ct.globalEval(t), t
                }
            }
        }), ct.ajaxPrefilter("script", function(t) {
            t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), ct.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var n, i = Q.head || ct("head")[0] || Q.documentElement;
                return {
                    send: function(e, r) {
                        n = Q.createElement("script"), n.async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function(t, e) {
                            (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || r(200, "success"))
                        }, i.insertBefore(n, i.firstChild)
                    },
                    abort: function() {
                        n && n.onload(e, !0)
                    }
                }
            }
        });
        var ze = [],
            Ve = /(=)\?(?=&|$)|\?\?/;
        ct.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = ze.pop() || ct.expando + "_" + Oe++;
                return this[t] = !0, t
            }
        }), ct.ajaxPrefilter("json jsonp", function(n, i, r) {
            var o, s, a, l = n.jsonp !== !1 && (Ve.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(n.data) && "data");
            return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Ve, "$1" + o) : n.jsonp !== !1 && (n.url += (Pe.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
                return a || ct.error(o + " was not called"), a[0]
            }, n.dataTypes[0] = "json", s = t[o], t[o] = function() {
                a = arguments
            }, r.always(function() {
                t[o] = s, n[o] && (n.jsonpCallback = i.jsonpCallback, ze.push(o)), a && ct.isFunction(s) && s(a[0]), a = s = e
            }), "script") : e
        });
        var Ge, Xe, Qe = 0,
            Je = t.ActiveXObject && function() {
                var t;
                for (t in Ge) Ge[t](e, !0)
            };
        ct.ajaxSettings.xhr = t.ActiveXObject ? function() {
            return !this.isLocal && j() || L()
        } : j, Xe = ct.ajaxSettings.xhr(), ct.support.cors = !!Xe && "withCredentials" in Xe, Xe = ct.support.ajax = !!Xe, Xe && ct.ajaxTransport(function(n) {
            if (!n.crossDomain || ct.support.cors) {
                var i;
                return {
                    send: function(r, o) {
                        var s, a, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (a in n.xhrFields) l[a] = n.xhrFields[a];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (a in r) l.setRequestHeader(a, r[a])
                        } catch (u) {}
                        l.send(n.hasContent && n.data || null), i = function(t, r) {
                            var a, u, c, d;
                            try {
                                if (i && (r || 4 === l.readyState))
                                    if (i = e, s && (l.onreadystatechange = ct.noop, Je && delete Ge[s]), r) 4 !== l.readyState && l.abort();
                                    else {
                                        d = {}, a = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
                                        try {
                                            c = l.statusText
                                        } catch (h) {
                                            c = ""
                                        }
                                        a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
                                    }
                            } catch (p) {
                                r || o(-1, p)
                            }
                            d && o(a, c, d, u)
                        }, n.async ? 4 === l.readyState ? setTimeout(i) : (s = ++Qe, Je && (Ge || (Ge = {}, ct(t).unload(Je)), Ge[s] = i), l.onreadystatechange = i) : i()
                    },
                    abort: function() {
                        i && i(e, !0)
                    }
                }
            }
        });
        var Ke, Ze, tn = /^(?:toggle|show|hide)$/,
            en = RegExp("^(?:([+-])=|)(" + dt + ")([a-z%]*)$", "i"),
            nn = /queueHooks$/,
            rn = [W],
            on = {
                "*": [function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        r = en.exec(e),
                        o = r && r[3] || (ct.cssNumber[t] ? "" : "px"),
                        s = (ct.cssNumber[t] || "px" !== o && +i) && en.exec(ct.css(n.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== o) {
                        o = o || s[3], r = r || [], s = +i || 1;
                        do a = a || ".5", s /= a, ct.style(n.elem, t, s + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        ct.Animation = ct.extend(H, {
            tweener: function(t, e) {
                ct.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, r = t.length; r > i; i++) n = t[i], on[n] = on[n] || [], on[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? rn.unshift(t) : rn.push(t)
            }
        }), ct.Tween = q, q.prototype = {
            constructor: q,
            init: function(t, e, n, i, r, o) {
                this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ct.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = q.propHooks[this.prop];
                return t && t.get ? t.get(this) : q.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = q.propHooks[this.prop];
                return this.pos = e = this.options.duration ? ct.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
            }
        }, q.prototype.init.prototype = q.prototype, q.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ct.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    ct.fx.step[t.prop] ? ct.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ct.cssProps[t.prop]] || ct.cssHooks[t.prop]) ? ct.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ct.each(["toggle", "show", "hide"], function(t, e) {
            var n = ct.fn[e];
            ct.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(Y(e, !0), t, i, r)
            }
        }), ct.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(T).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = ct.isEmptyObject(t),
                    o = ct.speed(e, n, i),
                    s = function() {
                        var e = H(this, ct.extend({}, t), o);
                        (r || ct._data(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, n, i) {
                var r = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        n = null != t && t + "queueHooks",
                        o = ct.timers,
                        s = ct._data(this);
                    if (n) s[n] && s[n].stop && r(s[n]);
                    else
                        for (n in s) s[n] && s[n].stop && nn.test(n) && r(s[n]);
                    for (n = o.length; n--;) o[n].elem !== this || null != t && o[n].queue !== t || (o[n].anim.stop(i), e = !1, o.splice(n, 1));
                    (e || !i) && ct.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = ct._data(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = ct.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, ct.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ct.each({
            slideDown: Y("show"),
            slideUp: Y("hide"),
            slideToggle: Y("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            ct.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), ct.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? ct.extend({}, t) : {
                complete: n || !n && e || ct.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ct.isFunction(e) && e
            };
            return i.duration = ct.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ct.fx.speeds ? ct.fx.speeds[i.duration] : ct.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ct.isFunction(i.old) && i.old.call(this), i.queue && ct.dequeue(this, i.queue)
            }, i
        }, ct.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, ct.timers = [], ct.fx = q.prototype.init, ct.fx.tick = function() {
            var t, n = ct.timers,
                i = 0;
            for (Ke = ct.now(); n.length > i; i++) t = n[i], t() || n[i] !== t || n.splice(i--, 1);
            n.length || ct.fx.stop(), Ke = e
        }, ct.fx.timer = function(t) {
            t() && ct.timers.push(t) && ct.fx.start()
        }, ct.fx.interval = 13, ct.fx.start = function() {
            Ze || (Ze = setInterval(ct.fx.tick, ct.fx.interval))
        }, ct.fx.stop = function() {
            clearInterval(Ze), Ze = null
        }, ct.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function(t) {
            return ct.grep(ct.timers, function(e) {
                return t === e.elem
            }).length
        }), ct.fn.offset = function(t) {
            if (arguments.length) return t === e ? this : this.each(function(e) {
                ct.offset.setOffset(this, t, e)
            });
            var n, i, r = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                s = o && o.ownerDocument;
            return s ? (n = s.documentElement, ct.contains(n, o) ? (typeof o.getBoundingClientRect !== G && (r = o.getBoundingClientRect()), i = B(s), {
                top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : r) : void 0
        }, ct.offset = {
            setOffset: function(t, e, n) {
                var i = ct.css(t, "position");
                "static" === i && (t.style.position = "relative");
                var r, o, s = ct(t),
                    a = s.offset(),
                    l = ct.css(t, "top"),
                    u = ct.css(t, "left"),
                    c = ("absolute" === i || "fixed" === i) && ct.inArray("auto", [l, u]) > -1,
                    d = {},
                    h = {};
                c ? (h = s.position(), r = h.top, o = h.left) : (r = parseFloat(l) || 0, o = parseFloat(u) || 0), ct.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : s.css(d)
            }
        }, ct.fn.extend({
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ct.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ct.nodeName(t[0], "html") || (n = t.offset()), n.top += ct.css(t[0], "borderTopWidth", !0), n.left += ct.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - ct.css(i, "marginTop", !0),
                        left: e.left - n.left - ct.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || J; t && !ct.nodeName(t, "html") && "static" === ct.css(t, "position");) t = t.offsetParent;
                    return t || J
                })
            }
        }), ct.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, n) {
            var i = /Y/.test(n);
            ct.fn[t] = function(r) {
                return ct.access(this, function(t, r, o) {
                    var s = B(t);
                    return o === e ? s ? n in s ? s[n] : s.document.documentElement[r] : t[r] : (s ? s.scrollTo(i ? ct(s).scrollLeft() : o, i ? o : ct(s).scrollTop()) : t[r] = o, e)
                }, t, r, arguments.length, null)
            }
        }), ct.each({
            Height: "height",
            Width: "width"
        }, function(t, n) {
            ct.each({
                padding: "inner" + t,
                content: n,
                "": "outer" + t
            }, function(i, r) {
                ct.fn[r] = function(r, o) {
                    var s = arguments.length && (i || "boolean" != typeof r),
                        a = i || (r === !0 || o === !0 ? "margin" : "border");
                    return ct.access(this, function(n, i, r) {
                        var o;
                        return ct.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + t], o["scroll" + t], n.body["offset" + t], o["offset" + t], o["client" + t])) : r === e ? ct.css(n, i, a) : ct.style(n, i, r, a);
                    }, n, s ? r : e, s, null)
                }
            })
        }), ct.fn.size = function() {
            return this.length
        }, ct.fn.andSelf = ct.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (t.jQuery = t.$ = ct, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ct
        }))
    }(window), function() {
        var t = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || this || {},
            e = t._,
            n = Array.prototype,
            i = Object.prototype,
            r = "undefined" != typeof Symbol ? Symbol.prototype : null,
            o = n.push,
            s = n.slice,
            a = i.toString,
            l = i.hasOwnProperty,
            u = Array.isArray,
            c = Object.keys,
            d = Object.create,
            h = function() {},
            p = function(t) {
                return t instanceof p ? t : this instanceof p ? void(this._wrapped = t) : new p(t)
            };
        "undefined" == typeof exports || exports.nodeType ? t._ = p : ("undefined" != typeof module && !module.nodeType && module.exports && (exports = module.exports = p), exports._ = p), p.VERSION = "1.9.0";
        var f, g = function(t, e, n) {
                if (void 0 === e) return t;
                switch (null == n ? 3 : n) {
                    case 1:
                        return function(n) {
                            return t.call(e, n)
                        };
                    case 3:
                        return function(n, i, r) {
                            return t.call(e, n, i, r)
                        };
                    case 4:
                        return function(n, i, r, o) {
                            return t.call(e, n, i, r, o)
                        }
                }
                return function() {
                    return t.apply(e, arguments)
                }
            },
            m = function(t, e, n) {
                return p.iteratee !== f ? p.iteratee(t, e) : null == t ? p.identity : p.isFunction(t) ? g(t, e, n) : p.isObject(t) && !p.isArray(t) ? p.matcher(t) : p.property(t)
            };
        p.iteratee = f = function(t, e) {
            return m(t, e, 1 / 0)
        };
        var v = function(t, e) {
                return e = null == e ? t.length - 1 : +e,
                    function() {
                        for (var n = Math.max(arguments.length - e, 0), i = Array(n), r = 0; r < n; r++) i[r] = arguments[r + e];
                        switch (e) {
                            case 0:
                                return t.call(this, i);
                            case 1:
                                return t.call(this, arguments[0], i);
                            case 2:
                                return t.call(this, arguments[0], arguments[1], i)
                        }
                        var o = Array(e + 1);
                        for (r = 0; r < e; r++) o[r] = arguments[r];
                        return o[e] = i, t.apply(this, o)
                    }
            },
            y = function(t) {
                if (!p.isObject(t)) return {};
                if (d) return d(t);
                h.prototype = t;
                var e = new h;
                return h.prototype = null, e
            },
            b = function(t) {
                return function(e) {
                    return null == e ? void 0 : e[t]
                }
            },
            w = function(t, e) {
                for (var n = e.length, i = 0; i < n; i++) {
                    if (null == t) return;
                    t = t[e[i]]
                }
                return n ? t : void 0
            },
            S = Math.pow(2, 53) - 1,
            _ = b("length"),
            T = function(t) {
                var e = _(t);
                return "number" == typeof e && e >= 0 && e <= S
            };
        p.each = p.forEach = function(t, e, n) {
            e = g(e, n);
            var i, r;
            if (T(t))
                for (i = 0, r = t.length; i < r; i++) e(t[i], i, t);
            else {
                var o = p.keys(t);
                for (i = 0, r = o.length; i < r; i++) e(t[o[i]], o[i], t)
            }
            return t
        }, p.map = p.collect = function(t, e, n) {
            e = m(e, n);
            for (var i = !T(t) && p.keys(t), r = (i || t).length, o = Array(r), s = 0; s < r; s++) {
                var a = i ? i[s] : s;
                o[s] = e(t[a], a, t)
            }
            return o
        };
        var x = function(t) {
            var e = function(e, n, i, r) {
                var o = !T(e) && p.keys(e),
                    s = (o || e).length,
                    a = t > 0 ? 0 : s - 1;
                for (r || (i = e[o ? o[a] : a], a += t); a >= 0 && a < s; a += t) {
                    var l = o ? o[a] : a;
                    i = n(i, e[l], l, e)
                }
                return i
            };
            return function(t, n, i, r) {
                var o = arguments.length >= 3;
                return e(t, g(n, r, 4), i, o)
            }
        };
        p.reduce = p.foldl = p.inject = x(1), p.reduceRight = p.foldr = x(-1), p.find = p.detect = function(t, e, n) {
            var i = T(t) ? p.findIndex : p.findKey,
                r = i(t, e, n);
            if (void 0 !== r && r !== -1) return t[r]
        }, p.filter = p.select = function(t, e, n) {
            var i = [];
            return e = m(e, n), p.each(t, function(t, n, r) {
                e(t, n, r) && i.push(t)
            }), i
        }, p.reject = function(t, e, n) {
            return p.filter(t, p.negate(m(e)), n)
        }, p.every = p.all = function(t, e, n) {
            e = m(e, n);
            for (var i = !T(t) && p.keys(t), r = (i || t).length, o = 0; o < r; o++) {
                var s = i ? i[o] : o;
                if (!e(t[s], s, t)) return !1
            }
            return !0
        }, p.some = p.any = function(t, e, n) {
            e = m(e, n);
            for (var i = !T(t) && p.keys(t), r = (i || t).length, o = 0; o < r; o++) {
                var s = i ? i[o] : o;
                if (e(t[s], s, t)) return !0
            }
            return !1
        }, p.contains = p.includes = p.include = function(t, e, n, i) {
            return T(t) || (t = p.values(t)), ("number" != typeof n || i) && (n = 0), p.indexOf(t, e, n) >= 0
        }, p.invoke = v(function(t, e, n) {
            var i, r;
            return p.isFunction(e) ? r = e : p.isArray(e) && (i = e.slice(0, -1), e = e[e.length - 1]), p.map(t, function(t) {
                var o = r;
                if (!o) {
                    if (i && i.length && (t = w(t, i)), null == t) return;
                    o = t[e]
                }
                return null == o ? o : o.apply(t, n)
            })
        }), p.pluck = function(t, e) {
            return p.map(t, p.property(e))
        }, p.where = function(t, e) {
            return p.filter(t, p.matcher(e))
        }, p.findWhere = function(t, e) {
            return p.find(t, p.matcher(e))
        }, p.max = function(t, e, n) {
            var i, r, o = -(1 / 0),
                s = -(1 / 0);
            if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) {
                t = T(t) ? t : p.values(t);
                for (var a = 0, l = t.length; a < l; a++) i = t[a], null != i && i > o && (o = i)
            } else e = m(e, n), p.each(t, function(t, n, i) {
                r = e(t, n, i), (r > s || r === -(1 / 0) && o === -(1 / 0)) && (o = t, s = r)
            });
            return o
        }, p.min = function(t, e, n) {
            var i, r, o = 1 / 0,
                s = 1 / 0;
            if (null == e || "number" == typeof e && "object" != typeof t[0] && null != t) {
                t = T(t) ? t : p.values(t);
                for (var a = 0, l = t.length; a < l; a++) i = t[a], null != i && i < o && (o = i)
            } else e = m(e, n), p.each(t, function(t, n, i) {
                r = e(t, n, i), (r < s || r === 1 / 0 && o === 1 / 0) && (o = t, s = r)
            });
            return o
        }, p.shuffle = function(t) {
            return p.sample(t, 1 / 0)
        }, p.sample = function(t, e, n) {
            if (null == e || n) return T(t) || (t = p.values(t)), t[p.random(t.length - 1)];
            var i = T(t) ? p.clone(t) : p.values(t),
                r = _(i);
            e = Math.max(Math.min(e, r), 0);
            for (var o = r - 1, s = 0; s < e; s++) {
                var a = p.random(s, o),
                    l = i[s];
                i[s] = i[a], i[a] = l
            }
            return i.slice(0, e)
        }, p.sortBy = function(t, e, n) {
            var i = 0;
            return e = m(e, n), p.pluck(p.map(t, function(t, n, r) {
                return {
                    value: t,
                    index: i++,
                    criteria: e(t, n, r)
                }
            }).sort(function(t, e) {
                var n = t.criteria,
                    i = e.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (n < i || void 0 === i) return -1
                }
                return t.index - e.index
            }), "value")
        };
        var k = function(t, e) {
            return function(n, i, r) {
                var o = e ? [
                    [],
                    []
                ] : {};
                return i = m(i, r), p.each(n, function(e, r) {
                    var s = i(e, r, n);
                    t(o, e, s)
                }), o
            }
        };
        p.groupBy = k(function(t, e, n) {
            p.has(t, n) ? t[n].push(e) : t[n] = [e]
        }), p.indexBy = k(function(t, e, n) {
            t[n] = e
        }), p.countBy = k(function(t, e, n) {
            p.has(t, n) ? t[n]++ : t[n] = 1
        });
        var C = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
        p.toArray = function(t) {
            return t ? p.isArray(t) ? s.call(t) : p.isString(t) ? t.match(C) : T(t) ? p.map(t, p.identity) : p.values(t) : []
        }, p.size = function(t) {
            return null == t ? 0 : T(t) ? t.length : p.keys(t).length
        }, p.partition = k(function(t, e, n) {
            t[n ? 0 : 1].push(e)
        }, !0), p.first = p.head = p.take = function(t, e, n) {
            if (!(null == t || t.length < 1)) return null == e || n ? t[0] : p.initial(t, t.length - e)
        }, p.initial = function(t, e, n) {
            return s.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
        }, p.last = function(t, e, n) {
            if (!(null == t || t.length < 1)) return null == e || n ? t[t.length - 1] : p.rest(t, Math.max(0, t.length - e))
        }, p.rest = p.tail = p.drop = function(t, e, n) {
            return s.call(t, null == e || n ? 1 : e)
        }, p.compact = function(t) {
            return p.filter(t, Boolean)
        };
        var D = function(t, e, n, i) {
            i = i || [];
            for (var r = i.length, o = 0, s = _(t); o < s; o++) {
                var a = t[o];
                if (T(a) && (p.isArray(a) || p.isArguments(a)))
                    if (e)
                        for (var l = 0, u = a.length; l < u;) i[r++] = a[l++];
                    else D(a, e, n, i), r = i.length;
                else n || (i[r++] = a)
            }
            return i
        };
        p.flatten = function(t, e) {
            return D(t, e, !1)
        }, p.without = v(function(t, e) {
            return p.difference(t, e)
        }), p.uniq = p.unique = function(t, e, n, i) {
            p.isBoolean(e) || (i = n, n = e, e = !1), null != n && (n = m(n, i));
            for (var r = [], o = [], s = 0, a = _(t); s < a; s++) {
                var l = t[s],
                    u = n ? n(l, s, t) : l;
                e && !n ? (s && o === u || r.push(l), o = u) : n ? p.contains(o, u) || (o.push(u), r.push(l)) : p.contains(r, l) || r.push(l)
            }
            return r
        }, p.union = v(function(t) {
            return p.uniq(D(t, !0, !0))
        }), p.intersection = function(t) {
            for (var e = [], n = arguments.length, i = 0, r = _(t); i < r; i++) {
                var o = t[i];
                if (!p.contains(e, o)) {
                    var s;
                    for (s = 1; s < n && p.contains(arguments[s], o); s++);
                    s === n && e.push(o)
                }
            }
            return e
        }, p.difference = v(function(t, e) {
            return e = D(e, !0, !0), p.filter(t, function(t) {
                return !p.contains(e, t)
            })
        }), p.unzip = function(t) {
            for (var e = t && p.max(t, _).length || 0, n = Array(e), i = 0; i < e; i++) n[i] = p.pluck(t, i);
            return n
        }, p.zip = v(p.unzip), p.object = function(t, e) {
            for (var n = {}, i = 0, r = _(t); i < r; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
            return n
        };
        var A = function(t) {
            return function(e, n, i) {
                n = m(n, i);
                for (var r = _(e), o = t > 0 ? 0 : r - 1; o >= 0 && o < r; o += t)
                    if (n(e[o], o, e)) return o;
                return -1
            }
        };
        p.findIndex = A(1), p.findLastIndex = A(-1), p.sortedIndex = function(t, e, n, i) {
            n = m(n, i, 1);
            for (var r = n(e), o = 0, s = _(t); o < s;) {
                var a = Math.floor((o + s) / 2);
                n(t[a]) < r ? o = a + 1 : s = a
            }
            return o
        };
        var $ = function(t, e, n) {
            return function(i, r, o) {
                var a = 0,
                    l = _(i);
                if ("number" == typeof o) t > 0 ? a = o >= 0 ? o : Math.max(o + l, a) : l = o >= 0 ? Math.min(o + 1, l) : o + l + 1;
                else if (n && o && l) return o = n(i, r), i[o] === r ? o : -1;
                if (r !== r) return o = e(s.call(i, a, l), p.isNaN), o >= 0 ? o + a : -1;
                for (o = t > 0 ? a : l - 1; o >= 0 && o < l; o += t)
                    if (i[o] === r) return o;
                return -1
            }
        };
        p.indexOf = $(1, p.findIndex, p.sortedIndex), p.lastIndexOf = $(-1, p.findLastIndex), p.range = function(t, e, n) {
            null == e && (e = t || 0, t = 0), n || (n = e < t ? -1 : 1);
            for (var i = Math.max(Math.ceil((e - t) / n), 0), r = Array(i), o = 0; o < i; o++, t += n) r[o] = t;
            return r
        }, p.chunk = function(t, e) {
            if (null == e || e < 1) return [];
            for (var n = [], i = 0, r = t.length; i < r;) n.push(s.call(t, i, i += e));
            return n
        };
        var M = function(t, e, n, i, r) {
            if (!(i instanceof e)) return t.apply(n, r);
            var o = y(t.prototype),
                s = t.apply(o, r);
            return p.isObject(s) ? s : o
        };
        p.bind = v(function(t, e, n) {
            if (!p.isFunction(t)) throw new TypeError("Bind must be called on a function");
            var i = v(function(r) {
                return M(t, i, e, this, n.concat(r))
            });
            return i
        }), p.partial = v(function(t, e) {
            var n = p.partial.placeholder,
                i = function() {
                    for (var r = 0, o = e.length, s = Array(o), a = 0; a < o; a++) s[a] = e[a] === n ? arguments[r++] : e[a];
                    for (; r < arguments.length;) s.push(arguments[r++]);
                    return M(t, i, this, this, s)
                };
            return i
        }), p.partial.placeholder = p, p.bindAll = v(function(t, e) {
            e = D(e, !1, !1);
            var n = e.length;
            if (n < 1) throw new Error("bindAll must be passed function names");
            for (; n--;) {
                var i = e[n];
                t[i] = p.bind(t[i], t)
            }
        }), p.memoize = function(t, e) {
            var n = function(i) {
                var r = n.cache,
                    o = "" + (e ? e.apply(this, arguments) : i);
                return p.has(r, o) || (r[o] = t.apply(this, arguments)), r[o]
            };
            return n.cache = {}, n
        }, p.delay = v(function(t, e, n) {
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        }), p.defer = p.partial(p.delay, p, 1), p.throttle = function(t, e, n) {
            var i, r, o, s, a = 0;
            n || (n = {});
            var l = function() {
                    a = n.leading === !1 ? 0 : p.now(), i = null, s = t.apply(r, o), i || (r = o = null)
                },
                u = function() {
                    var u = p.now();
                    a || n.leading !== !1 || (a = u);
                    var c = e - (u - a);
                    return r = this, o = arguments, c <= 0 || c > e ? (i && (clearTimeout(i), i = null), a = u, s = t.apply(r, o), i || (r = o = null)) : i || n.trailing === !1 || (i = setTimeout(l, c)), s
                };
            return u.cancel = function() {
                clearTimeout(i), a = 0, i = r = o = null
            }, u
        }, p.debounce = function(t, e, n) {
            var i, r, o = function(e, n) {
                    i = null, n && (r = t.apply(e, n))
                },
                s = v(function(s) {
                    if (i && clearTimeout(i), n) {
                        var a = !i;
                        i = setTimeout(o, e), a && (r = t.apply(this, s))
                    } else i = p.delay(o, e, this, s);
                    return r
                });
            return s.cancel = function() {
                clearTimeout(i), i = null
            }, s
        }, p.wrap = function(t, e) {
            return p.partial(e, t)
        }, p.negate = function(t) {
            return function() {
                return !t.apply(this, arguments)
            }
        }, p.compose = function() {
            var t = arguments,
                e = t.length - 1;
            return function() {
                for (var n = e, i = t[e].apply(this, arguments); n--;) i = t[n].call(this, i);
                return i
            }
        }, p.after = function(t, e) {
            return function() {
                if (--t < 1) return e.apply(this, arguments)
            }
        }, p.before = function(t, e) {
            var n;
            return function() {
                return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = null), n
            }
        }, p.once = p.partial(p.before, 2), p.restArguments = v;
        var E = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            O = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
            P = function(t, e) {
                var n = O.length,
                    r = t.constructor,
                    o = p.isFunction(r) && r.prototype || i,
                    s = "constructor";
                for (p.has(t, s) && !p.contains(e, s) && e.push(s); n--;) s = O[n], s in t && t[s] !== o[s] && !p.contains(e, s) && e.push(s)
            };
        p.keys = function(t) {
            if (!p.isObject(t)) return [];
            if (c) return c(t);
            var e = [];
            for (var n in t) p.has(t, n) && e.push(n);
            return E && P(t, e), e
        }, p.allKeys = function(t) {
            if (!p.isObject(t)) return [];
            var e = [];
            for (var n in t) e.push(n);
            return E && P(t, e), e
        }, p.values = function(t) {
            for (var e = p.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++) i[r] = t[e[r]];
            return i
        }, p.mapObject = function(t, e, n) {
            e = m(e, n);
            for (var i = p.keys(t), r = i.length, o = {}, s = 0; s < r; s++) {
                var a = i[s];
                o[a] = e(t[a], a, t)
            }
            return o
        }, p.pairs = function(t) {
            for (var e = p.keys(t), n = e.length, i = Array(n), r = 0; r < n; r++) i[r] = [e[r], t[e[r]]];
            return i
        }, p.invert = function(t) {
            for (var e = {}, n = p.keys(t), i = 0, r = n.length; i < r; i++) e[t[n[i]]] = n[i];
            return e
        }, p.functions = p.methods = function(t) {
            var e = [];
            for (var n in t) p.isFunction(t[n]) && e.push(n);
            return e.sort()
        };
        var I = function(t, e) {
            return function(n) {
                var i = arguments.length;
                if (e && (n = Object(n)), i < 2 || null == n) return n;
                for (var r = 1; r < i; r++)
                    for (var o = arguments[r], s = t(o), a = s.length, l = 0; l < a; l++) {
                        var u = s[l];
                        e && void 0 !== n[u] || (n[u] = o[u])
                    }
                return n
            }
        };
        p.extend = I(p.allKeys), p.extendOwn = p.assign = I(p.keys), p.findKey = function(t, e, n) {
            e = m(e, n);
            for (var i, r = p.keys(t), o = 0, s = r.length; o < s; o++)
                if (i = r[o], e(t[i], i, t)) return i
        };
        var F = function(t, e, n) {
            return e in n
        };
        p.pick = v(function(t, e) {
            var n = {},
                i = e[0];
            if (null == t) return n;
            p.isFunction(i) ? (e.length > 1 && (i = g(i, e[1])), e = p.allKeys(t)) : (i = F, e = D(e, !1, !1), t = Object(t));
            for (var r = 0, o = e.length; r < o; r++) {
                var s = e[r],
                    a = t[s];
                i(a, s, t) && (n[s] = a)
            }
            return n
        }), p.omit = v(function(t, e) {
            var n, i = e[0];
            return p.isFunction(i) ? (i = p.negate(i), e.length > 1 && (n = e[1])) : (e = p.map(D(e, !1, !1), String), i = function(t, n) {
                return !p.contains(e, n)
            }), p.pick(t, i, n)
        }), p.defaults = I(p.allKeys, !0), p.create = function(t, e) {
            var n = y(t);
            return e && p.extendOwn(n, e), n
        }, p.clone = function(t) {
            return p.isObject(t) ? p.isArray(t) ? t.slice() : p.extend({}, t) : t
        }, p.tap = function(t, e) {
            return e(t), t
        }, p.isMatch = function(t, e) {
            var n = p.keys(e),
                i = n.length;
            if (null == t) return !i;
            for (var r = Object(t), o = 0; o < i; o++) {
                var s = n[o];
                if (e[s] !== r[s] || !(s in r)) return !1
            }
            return !0
        };
        var j, L;
        j = function(t, e, n, i) {
            if (t === e) return 0 !== t || 1 / t === 1 / e;
            if (null == t || null == e) return !1;
            if (t !== t) return e !== e;
            var r = typeof t;
            return ("function" === r || "object" === r || "object" == typeof e) && L(t, e, n, i)
        }, L = function(t, e, n, i) {
            t instanceof p && (t = t._wrapped), e instanceof p && (e = e._wrapped);
            var o = a.call(t);
            if (o !== a.call(e)) return !1;
            switch (o) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + t == "" + e;
                case "[object Number]":
                    return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
                case "[object Date]":
                case "[object Boolean]":
                    return +t === +e;
                case "[object Symbol]":
                    return r.valueOf.call(t) === r.valueOf.call(e)
            }
            var s = "[object Array]" === o;
            if (!s) {
                if ("object" != typeof t || "object" != typeof e) return !1;
                var l = t.constructor,
                    u = e.constructor;
                if (l !== u && !(p.isFunction(l) && l instanceof l && p.isFunction(u) && u instanceof u) && "constructor" in t && "constructor" in e) return !1
            }
            n = n || [], i = i || [];
            for (var c = n.length; c--;)
                if (n[c] === t) return i[c] === e;
            if (n.push(t), i.push(e), s) {
                if (c = t.length, c !== e.length) return !1;
                for (; c--;)
                    if (!j(t[c], e[c], n, i)) return !1
            } else {
                var d, h = p.keys(t);
                if (c = h.length, p.keys(e).length !== c) return !1;
                for (; c--;)
                    if (d = h[c], !p.has(e, d) || !j(t[d], e[d], n, i)) return !1
            }
            return n.pop(), i.pop(), !0
        }, p.isEqual = function(t, e) {
            return j(t, e)
        }, p.isEmpty = function(t) {
            return null == t || (T(t) && (p.isArray(t) || p.isString(t) || p.isArguments(t)) ? 0 === t.length : 0 === p.keys(t).length)
        }, p.isElement = function(t) {
            return !(!t || 1 !== t.nodeType)
        }, p.isArray = u || function(t) {
            return "[object Array]" === a.call(t)
        }, p.isObject = function(t) {
            var e = typeof t;
            return "function" === e || "object" === e && !!t
        }, p.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], function(t) {
            p["is" + t] = function(e) {
                return a.call(e) === "[object " + t + "]"
            }
        }), p.isArguments(arguments) || (p.isArguments = function(t) {
            return p.has(t, "callee")
        });
        var N = t.document && t.document.childNodes;
        "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof N && (p.isFunction = function(t) {
            return "function" == typeof t || !1
        }), p.isFinite = function(t) {
            return !p.isSymbol(t) && isFinite(t) && !isNaN(parseFloat(t))
        }, p.isNaN = function(t) {
            return p.isNumber(t) && isNaN(t)
        }, p.isBoolean = function(t) {
            return t === !0 || t === !1 || "[object Boolean]" === a.call(t)
        }, p.isNull = function(t) {
            return null === t
        }, p.isUndefined = function(t) {
            return void 0 === t
        }, p.has = function(t, e) {
            if (!p.isArray(e)) return null != t && l.call(t, e);
            for (var n = e.length, i = 0; i < n; i++) {
                var r = e[i];
                if (null == t || !l.call(t, r)) return !1;
                t = t[r]
            }
            return !!n
        }, p.noConflict = function() {
            return t._ = e, this
        }, p.identity = function(t) {
            return t
        }, p.constant = function(t) {
            return function() {
                return t
            }
        }, p.noop = function() {}, p.property = function(t) {
            return p.isArray(t) ? function(e) {
                return w(e, t)
            } : b(t)
        }, p.propertyOf = function(t) {
            return null == t ? function() {} : function(e) {
                return p.isArray(e) ? w(t, e) : t[e]
            }
        }, p.matcher = p.matches = function(t) {
            return t = p.extendOwn({}, t),
                function(e) {
                    return p.isMatch(e, t)
                }
        }, p.times = function(t, e, n) {
            var i = Array(Math.max(0, t));
            e = g(e, n, 1);
            for (var r = 0; r < t; r++) i[r] = e(r);
            return i
        }, p.random = function(t, e) {
            return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
        }, p.now = Date.now || function() {
            return (new Date).getTime()
        };
        var R = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            H = p.invert(R),
            U = function(t) {
                var e = function(e) {
                        return t[e]
                    },
                    n = "(?:" + p.keys(t).join("|") + ")",
                    i = RegExp(n),
                    r = RegExp(n, "g");
                return function(t) {
                    return t = null == t ? "" : "" + t, i.test(t) ? t.replace(r, e) : t
                }
            };
        p.escape = U(R), p.unescape = U(H), p.result = function(t, e, n) {
            p.isArray(e) || (e = [e]);
            var i = e.length;
            if (!i) return p.isFunction(n) ? n.call(t) : n;
            for (var r = 0; r < i; r++) {
                var o = null == t ? void 0 : t[e[r]];
                void 0 === o && (o = n, r = i), t = p.isFunction(o) ? o.call(t) : o
            }
            return t
        };
        var W = 0;
        p.uniqueId = function(t) {
            var e = ++W + "";
            return t ? t + e : e
        }, p.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var q = /(.)^/,
            Y = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            B = /\\|'|\r|\n|\u2028|\u2029/g,
            z = function(t) {
                return "\\" + Y[t]
            };
        p.template = function(t, e, n) {
            !e && n && (e = n), e = p.defaults({}, e, p.templateSettings);
            var i = RegExp([(e.escape || q).source, (e.interpolate || q).source, (e.evaluate || q).source].join("|") + "|$", "g"),
                r = 0,
                o = "__p+='";
            t.replace(i, function(e, n, i, s, a) {
                return o += t.slice(r, a).replace(B, z), r = a + e.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), e
            }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            var s;
            try {
                s = new Function(e.variable || "obj", "_", o)
            } catch (a) {
                throw a.source = o, a
            }
            var l = function(t) {
                    return s.call(this, t, p)
                },
                u = e.variable || "obj";
            return l.source = "function(" + u + "){\n" + o + "}", l
        }, p.chain = function(t) {
            var e = p(t);
            return e._chain = !0, e
        };
        var V = function(t, e) {
            return t._chain ? p(e).chain() : e
        };
        p.mixin = function(t) {
            return p.each(p.functions(t), function(e) {
                var n = p[e] = t[e];
                p.prototype[e] = function() {
                    var t = [this._wrapped];
                    return o.apply(t, arguments), V(this, n.apply(p, t))
                }
            }), p
        }, p.mixin(p), p.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
            var e = n[t];
            p.prototype[t] = function() {
                var n = this._wrapped;
                return e.apply(n, arguments), "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0], V(this, n)
            }
        }), p.each(["concat", "join", "slice"], function(t) {
            var e = n[t];
            p.prototype[t] = function() {
                return V(this, e.apply(this._wrapped, arguments))
            }
        }), p.prototype.value = function() {
            return this._wrapped
        }, p.prototype.valueOf = p.prototype.toJSON = p.prototype.value, p.prototype.toString = function() {
            return String(this._wrapped)
        }, "function" == typeof define && define.amd && define("underscore", [], function() {
            return p
        })
    }(), function(t) {
        var e = /iPhone/i,
            n = /iPod/i,
            i = /iPad/i,
            r = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
            o = /Android/i,
            s = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
            a = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
            l = /IEMobile/i,
            u = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
            c = /BlackBerry/i,
            d = /BB10/i,
            h = /Opera Mini/i,
            p = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
            f = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
            g = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
            m = function(t, e) {
                return t.test(e)
            },
            v = function(t) {
                var v = t || navigator.userAgent,
                    y = v.split("[FBAN");
                if ("undefined" != typeof y[1] && (v = y[0]), this.apple = {
                        phone: m(e, v),
                        ipod: m(n, v),
                        tablet: !m(e, v) && m(i, v),
                        device: m(e, v) || m(n, v) || m(i, v)
                    }, this.amazon = {
                        phone: m(s, v),
                        tablet: !m(s, v) && m(a, v),
                        device: m(s, v) || m(a, v)
                    }, this.android = {
                        phone: m(s, v) || m(r, v),
                        tablet: !m(s, v) && !m(r, v) && (m(a, v) || m(o, v)),
                        device: m(s, v) || m(a, v) || m(r, v) || m(o, v)
                    }, this.windows = {
                        phone: m(l, v),
                        tablet: m(u, v),
                        device: m(l, v) || m(u, v)
                    }, this.other = {
                        blackberry: m(c, v),
                        blackberry10: m(d, v),
                        opera: m(h, v),
                        firefox: m(f, v),
                        chrome: m(p, v),
                        device: m(c, v) || m(d, v) || m(h, v) || m(f, v) || m(p, v)
                    }, this.seven_inch = m(g, v), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window) return this
            },
            y = function() {
                var t = new v;
                return t.Class = v, t
            };
        t._isMobileDevice = y()
    }(this), ! function(t) {
        function e(e) {
            "use strict";
            var n = this;
            return this.events = {}, this.state = null, this.options = e || {}, this.options.env = this.options.env || (0 === Object.keys(t).length && process && process.browser !== !0 ? "server" : "client"), this.options.mode = this.options.mode || ("server" !== this.options.env && this.options.pushState && t.history && t.history.pushState ? "pushState" : "hashchange"), this.version = "0.6.3", "function" == typeof t.addEventListener && (t.addEventListener("hashchange", function() {
                n.trigger("hashchange")
            }), t.addEventListener("popstate", function(t) {
                return (!n.state || null !== n.state.previousState) && void n.trigger("navigate")
            })), this
        }

        function n(t, e) {
            this.stack = n.global.slice(0), this.router = t, this.runCallback = !0, this.callbackRan = !1, this.propagateEvent = !0, this.value = t.path();
            for (var i in e) this[i] = e[i];
            return this
        }

        function i(t) {
            this.route = t, this.keys = [], this.regex = e.regexRoute(t, this.keys)
        }
        e.regexRoute = function(t, e, n, i) {
            return t instanceof RegExp ? t : (t instanceof Array && (t = "(" + t.join("|") + ")"), t = t.concat(i ? "" : "/?").replace(/\/\(/g, "(?:/").replace(/\+/g, "__plus__").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function(t, n, i, r, o, s) {
                return e.push({
                    name: r,
                    optional: !!s
                }), n = n || "", "" + (s ? "" : n) + "(?:" + (s ? n : "") + (i || "") + (o || i && "([^/.]+?)" || "([^/]+?)") + ")" + (s || "")
            }).replace(/([\/.])/g, "\\$1").replace(/__plus__/g, "(.+)").replace(/\*/g, "(.*)"), new RegExp("^" + t + "$", n ? "" : "i"))
        }, e._forEach = function(t, e) {
            return "function" == typeof Array.prototype.forEach ? Array.prototype.forEach.call(t, e) : function(t, e) {
                for (var n = 0, i = this.length; n < i; ++n) t.call(e, this[n], n, this)
            }.call(t, e)
        }, e.prototype.get = e.prototype.add = function(t) {
            var e = this,
                r = Array.prototype.slice.call(arguments, 1, -1),
                o = Array.prototype.slice.call(arguments, -1)[0],
                s = new i(t),
                a = function() {
                    var i = s.parse(e.path());
                    if (i.match) {
                        var a = {
                                route: t,
                                params: i.params,
                                req: i,
                                regex: i.match
                            },
                            l = new n(e, a).enqueue(r.concat(o));
                        if (e.trigger("match", l, i), !l.runCallback) return e;
                        if (l.previousState = e.state, e.state = l, l.parent() && l.parent().propagateEvent === !1) return l.propagateEvent = !1, e;
                        l.callback()
                    }
                    return e
                },
                l = "pushState" !== e.options.mode && "server" !== e.options.env ? "hashchange" : "navigate";
            return a().on(l, a)
        }, e.prototype.trigger = function(t) {
            var n = this,
                i = Array.prototype.slice.call(arguments, 1);
            return this.events[t] && e._forEach(this.events[t], function(t) {
                t.apply(n, i)
            }), this
        }, e.prototype.on = e.prototype.bind = function(t, n) {
            var i = this,
                r = t.split(" ");
            return e._forEach(r, function(t) {
                i.events[t] ? i.events[t].push(n) : i.events[t] = [n]
            }), this
        }, e.prototype.once = function(t, e) {
            var n = !1;
            return this.on(t, function() {
                return !n && (n = !0, e.apply(this, arguments), e = null, !0)
            })
        }, e.prototype.context = function(t) {
            var e = this,
                n = Array.prototype.slice.call(arguments, 1);
            return function() {
                var i = arguments[0],
                    r = arguments.length > 2 ? Array.prototype.slice.call(arguments, 1, -1) : [],
                    o = Array.prototype.slice.call(arguments, -1)[0],
                    s = "/" !== t.slice(-1) && "/" !== i && "" !== i ? t + "/" : t,
                    a = "/" !== i.substr(0, 1) ? i : i.substr(1),
                    l = s + a;
                return e.add.apply(e, [l].concat(n).concat(r).concat([o]))
            }
        }, e.prototype.navigate = function(t) {
            return this.path(t).trigger("navigate")
        }, e.prototype.path = function(e) {
            var n, i = this;
            return "string" == typeof e ? ("pushState" === i.options.mode ? (n = i.options.root ? i.options.root + e : e, t.history.pushState({}, null, n)) : t.location ? t.location.hash = (i.options.hashBang ? "!" : "") + e : t._pathname = e || "", this) : "undefined" == typeof e ? n = "pushState" === i.options.mode ? t.location.pathname.replace(i.options.root, "") : "pushState" !== i.options.mode && t.location ? t.location.hash ? t.location.hash.split(i.options.hashBang ? "#!" : "#")[1] : "" : t._pathname || "" : e === !1 ? ("pushState" === i.options.mode ? t.history.pushState({}, null, i.options.root || "/") : t.location && (t.location.hash = i.options.hashBang ? "!" : ""), i) : void 0
        }, e.listen = function() {
            var t, n;
            return arguments[0] && arguments[1] ? (t = arguments[0], n = arguments[1]) : n = arguments[0],
                function() {
                    for (var t in n) this.add.call(this, t, n[t]);
                    return this
                }.call(new e(t || {}))
        }, n.global = [], n.prototype.preventDefault = function() {
            this.runCallback = !1
        }, n.prototype.stopPropagation = function() {
            this.propagateEvent = !1
        }, n.prototype.parent = function() {
            var t = !(!this.previousState || !this.previousState.value || this.previousState.value != this.value);
            return !!t && this.previousState
        }, n.prototype.callback = function() {
            this.callbackRan = !0, this.timeStamp = Date.now(), this.next()
        }, n.prototype.enqueue = function(t, e) {
            for (var n = Array.isArray(t) ? e < t.length ? t.reverse() : t : [t]; n.length;) this.stack.splice(e || this.stack.length + 1, 0, n.shift());
            return this
        }, n.prototype.next = function() {
            var t = this;
            return this.stack.shift().call(this.router, this.req, this, function() {
                t.next.call(t)
            })
        }, i.prototype.parse = function(t) {
            var n = t.match(this.regex),
                i = this,
                r = {
                    params: {},
                    keys: this.keys,
                    matches: (n || []).slice(1),
                    match: n
                };
            return e._forEach(r.matches, function(t, e) {
                var n = i.keys[e] && i.keys[e].name ? i.keys[e].name : e;
                r.params[n] = t ? decodeURIComponent(t) : void 0
            }), r
        }, e.CallStack = n, e.Request = i, "function" != typeof t.define || t.define.amd.grapnel ? "object" == typeof module && "object" == typeof module.exports ? module.exports = exports = e : t.Grapnel = e : t.define(function(n, i, r) {
            return t.define.amd.grapnel = !0, e
        })
    }.call({}, "object" == typeof window ? window : this), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var r = function() {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.alert");
            r || n.data("bs.alert", r = new i(this)), "string" == typeof e && r[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function n() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var r = t(this),
            o = r.attr("data-target");
        o || (o = r.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t("#" === o ? [] : o);
        e && e.preventDefault(), s.length || (s = r.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var r = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
        return t.fn.alert = r, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.button"),
                o = "object" == typeof e && e;
            r || i.data("bs.button", r = new n(this, o)), "toggle" == e ? r.toggle() : e && r.setState(e)
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            r = i.is("input") ? "val" : "html",
            o = i.data();
        e += "Text", null == o.resetText && i.data("resetText", i[r]()), setTimeout(t.proxy(function() {
            i[r](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.carousel"),
                o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : o.slide;
            r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof e ? r.to(e) : s ? r[s]() : o.interval && r.pause().cycle()
        })
    }
    var n = function(e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e),
            i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap) return e;
        var r = "prev" == t ? -1 : 1,
            o = (n + r) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, n.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function(e, i) {
        var r = this.$element.find(".item.active"),
            o = i || this.getItemForDirection(e, r),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var u = o[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(o)]);
                d && d.addClass("active")
            }
            var h = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, r.addClass(a), o.addClass(a), r.one("bsTransitionEnd", function() {
                o.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (r.removeClass("active"), o.addClass("active"),
                this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = i, this
    };
    var r = function(n) {
        var i, r = t(this),
            o = t(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var s = t.extend({}, o.data(), r.data()),
                a = r.attr("data-slide-to");
            a && (s.interval = !1), e.call(o, s), a && o.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.collapse"),
                o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !r && o.toggle && /show|hide/.test(e) && (o.toggle = !1), r || n.data("bs.collapse", r = new i(this, o)), "string" == typeof e && r[e]()
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (e = r.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    r && r.length && (n.call(r, "hide"), e || r.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : r.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var r = t(i);
            this.addAriaAndCollapsedClass(e(r), r)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var r = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = r, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var r = t(this);
        r.attr("data-target") || i.preventDefault();
        var o = e(r),
            s = o.data("bs.collapse"),
            a = s ? "toggle" : r.data();
        n.call(o, a)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(r).remove(), t(o).each(function() {
            var i = t(this),
                r = e(i),
                o = {
                    relatedTarget: this
                };
            r.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(r[0], n.target) || (r.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), r.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
        }))
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var r = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.7", s.prototype.toggle = function(i) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var o = e(r),
                s = o.hasClass("open");
            if (n(), !s) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var r = e(i),
                    s = r.hasClass("open");
                if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && r.find(o).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = r.find(".dropdown-menu" + a);
                if (l.length) {
                    var u = l.index(n.target);
                    38 == n.which && u > 0 && u--, 40 == n.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var r = t(this),
                o = r.data("bs.modal"),
                s = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
            o || r.data("bs.modal", o = new n(this, s)), "string" == typeof e ? o[e](i) : s.show && o.show(i)
        })
    }
    var n = function(e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function(e) {
        var i = this,
            r = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var r = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), r && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            r ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(e) {
        var i = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && r;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            r = i.attr("href"),
            o = t(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            s = o.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(r) && r
            }, o.data(), i.data());
        i.is("a") && n.preventDefault(), o.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(o, s, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.tooltip"),
                o = "object" == typeof e && e;
            !r && /destroy|hide/.test(e) || (r || i.data("bs.tooltip", r = new n(this, o)), "string" == typeof e && r[e]())
        })
    }
    var n = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
            var s = r[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function(e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide()
    }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var r = this,
                o = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                u = l.test(a);
            u && (a = a.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                d = o[0].offsetWidth,
                h = o[0].offsetHeight;
            if (u) {
                var p = a,
                    f = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + h > f.bottom ? "top" : "top" == a && c.top - h < f.top ? "bottom" : "right" == a && c.right + d > f.width ? "left" : "left" == a && c.left - d < f.left ? "right" : a, o.removeClass(p).addClass(a)
            }
            var g = this.getCalculatedOffset(a, c, d, h);
            this.applyPlacement(g, a);
            var m = function() {
                var t = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            r = i[0].offsetWidth,
            o = i[0].offsetHeight,
            s = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != o && (e.top = e.top + o - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var d = /top|bottom/.test(n),
            h = d ? 2 * c.left - r + l : 2 * c.top - o + u,
            p = d ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(h, i[0][p], d)
    }, n.prototype.replaceArrow = function(t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(e) {
        function i() {
            "in" != r.hoverState && o.detach(), r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e()
        }
        var r = this,
            o = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(s), !s.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            r = n.getBoundingClientRect();
        null == r.width && (r = t.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var o = window.SVGElement && n instanceof window.SVGElement,
            s = i ? {
                top: 0,
                left: 0
            } : o ? null : e.offset(),
            a = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, r, a, l, s)
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - s.scroll,
                l = e.top + o - s.scroll + i;
            a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
        } else {
            var u = e.left - o,
                c = e.left + o + n;
            u < s.left ? r.left = s.left - u : c > s.right && (r.left = s.left + s.width - c)
        }
        return r
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.popover"),
                o = "object" == typeof e && e;
            !r && /destroy|hide/.test(e) || (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof e && r[e]())
        })
    }
    var n = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            r || i.data("bs.scrollspy", r = new e(this, o)), "string" == typeof n && r[n]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                r = e.data("target") || e.attr("href"),
                o = /^#./.test(r) && t(r);
            return o && o.length && o.is(":visible") && [
                [o[n]().top + i, r]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            r = this.offsets,
            o = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = o[o.length - 1]) && this.activate(t);
        if (s && e < r[0]) return this.activeTarget = null, this.clear();
        for (t = r.length; t--;) s != o[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.tab");
            r || i.data("bs.tab", r = new n(this)), "string" == typeof e && r[e]()
        })
    }
    var n = function(e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = n.find(".active:last a"),
                o = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            if (r.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(e, i, r) {
        function o() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }
        var s = i.find("> .active"),
            a = r && t.support.transition && (s.length && s.hasClass("fade") || !!i.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), s.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
        return t.fn.tab = i, this
    };
    var r = function(n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.affix"),
                o = "object" == typeof e && e;
            r || i.data("bs.affix", r = new n(this, o)), "string" == typeof e && r[e]()
        })
    }
    var n = function(e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(t, e, n, i) {
        var r = this.$target.scrollTop(),
            o = this.$element.offset(),
            s = this.$target.height();
        if (null != n && "top" == this.affixed) return r < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(r + this.unpin <= o.top) && "bottom" : !(r + s <= t - i) && "bottom";
        var a = null == this.affixed,
            l = a ? r : o.top,
            u = a ? s : e;
        return null != n && r <= n ? "top" : null != i && l + u >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                r = i.top,
                o = i.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (o = r = i), "function" == typeof r && (r = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
            var a = this.getState(s, e, r, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - o
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
        return t.fn.affix = i, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery),
function() {
    "use strict";
    var t, e, n, i = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    t = jQuery, e = function() {
        function t() {}
        return t.transitions = {
            webkitTransition: "webkitTransitionEnd",
            mozTransition: "mozTransitionEnd",
            oTransition: "oTransitionEnd",
            transition: "transitionend"
        }, t.transition = function(t) {
            var e, n, i, r;
            e = t[0], n = this.transitions;
            for (r in n)
                if (i = n[r], null != e.style[r]) return i
        }, t
    }(), n = function() {
        function n(e) {
            null == e && (e = {}), this.container = i(this.container, this), this.content = i(this.content, this), this.html = i(this.html, this), this.$growl = i(this.$growl, this), this.$growls = i(this.$growls, this), this.animate = i(this.animate, this), this.remove = i(this.remove, this), this.dismiss = i(this.dismiss, this), this.present = i(this.present, this), this.cycle = i(this.cycle, this), this.close = i(this.close, this), this.click = i(this.click, this), this.unbind = i(this.unbind, this), this.bind = i(this.bind, this), this.render = i(this.render, this), this.settings = t.extend({}, n.settings, e), this.$growls().attr("class", this.settings.location), this.render()
        }
        return n.settings = {
            namespace: "growl",
            duration: 3200,
            close: "&#215;",
            location: "default",
            style: "default",
            size: "large"
        }, n.growl = function(t) {
            return null == t && (t = {}), this.initialize(), new n(t)
        }, n.initialize = function() {
            return t("body:not(:has(#growls))").append('<div id="growls" />')
        }, n.prototype.render = function() {
            var t;
            t = this.$growl(), this.$growls().append(t), this.settings.fixed ? this.present() : this.cycle()
        }, n.prototype.bind = function(t) {
            return null == t && (t = this.$growl()), t.on("click", this.click), t.on("contextmenu", this.close).find("." + this.settings.namespace + "-close").on("click", this.close)
        }, n.prototype.unbind = function(t) {
            return null == t && (t = this.$growl()), t.off("click", this.click), t.off("contextmenu", this.close).find("." + this.settings.namespace + "-close").off("click", this.close)
        }, n.prototype.click = function(t) {
            if (null != this.settings.url) return t.preventDefault(), t.stopPropagation(), window.open(this.settings.url)
        }, n.prototype.close = function(t) {
            var e;
            return t.preventDefault(), t.stopPropagation(), e = this.$growl(), e.stop().queue(this.dismiss).queue(this.remove)
        }, n.prototype.cycle = function() {
            var t;
            return t = this.$growl(), t.queue(this.present).delay(this.settings.duration).queue(this.dismiss).queue(this.remove)
        }, n.prototype.present = function(t) {
            var e;
            return e = this.$growl(), this.bind(e), this.animate(e, this.settings.namespace + "-incoming", "out", t);
        }, n.prototype.dismiss = function(t) {
            var e;
            return e = this.$growl(), this.unbind(e), this.animate(e, this.settings.namespace + "-outgoing", "in", t)
        }, n.prototype.remove = function(t) {
            return this.$growl().remove(), t()
        }, n.prototype.animate = function(t, n, i, r) {
            var o;
            null == i && (i = "in"), o = e.transition(t), t["in" === i ? "removeClass" : "addClass"](n), t.offset().position, t["in" === i ? "addClass" : "removeClass"](n), null != r && (null != o ? t.one(o, r) : r())
        }, n.prototype.$growls = function() {
            return null != this.$_growls ? this.$_growls : this.$_growls = t("#growls")
        }, n.prototype.$growl = function() {
            return null != this.$_growl ? this.$_growl : this.$_growl = t(this.html())
        }, n.prototype.html = function() {
            return this.container(this.content())
        }, n.prototype.content = function() {
            return "<div class='" + this.settings.namespace + "-close'>" + this.settings.close + "</div>\n<div class='" + this.settings.namespace + "-title'>" + this.settings.title + "</div>\n<div class='" + this.settings.namespace + "-message'>" + this.settings.message + "</div>"
        }, n.prototype.container = function(t) {
            return "<div class='" + this.settings.namespace + " " + this.settings.namespace + "-" + this.settings.style + " " + this.settings.namespace + "-" + this.settings.size + "'>\n  " + t + "\n</div>"
        }, n
    }(), this.Growl = n, t.growl = function(t) {
        return null == t && (t = {}), n.growl(t)
    }, t.growl.error = function(e) {
        var n;
        return null == e && (e = {}), n = {
            title: "Error!",
            style: "error"
        }, t.growl(t.extend(n, e))
    }, t.growl.notice = function(e) {
        var n;
        return null == e && (e = {}), n = {
            title: "Notice!",
            style: "notice"
        }, t.growl(t.extend(n, e))
    }, t.growl.warning = function(e) {
        var n;
        return null == e && (e = {}), n = {
            title: "Warning!",
            style: "warning"
        }, t.growl(t.extend(n, e))
    }
}.call(this),
    function(t) {
        if ("function" == typeof define && define.amd) define(t);
        else if ("object" == typeof exports) module.exports = t();
        else {
            var e = window.Cookies,
                n = window.Cookies = t();
            n.noConflict = function() {
                return window.Cookies = e, n
            }
        }
    }(function() {
        function t() {
            for (var t = 0, e = {}; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) e[i] = n[i]
            }
            return e
        }

        function e(n) {
            function i(e, r, o) {
                var s;
                if (arguments.length > 1) {
                    if (o = t({
                            path: "/"
                        }, i.defaults, o), "number" == typeof o.expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * o.expires), o.expires = a
                    }
                    try {
                        s = JSON.stringify(r), /^[\{\[]/.test(s) && (r = s)
                    } catch (l) {}
                    return r = encodeURIComponent(String(r)), r = r.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)), e = e.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), e = e.replace(/[\(\)]/g, escape), document.cookie = [e, "=", r, o.expires && "; expires=" + o.expires.toUTCString(), o.path && "; path=" + o.path, o.domain && "; domain=" + o.domain, o.secure ? "; secure" : ""].join("")
                }
                e || (s = {});
                for (var u = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, d = 0; d < u.length; d++) {
                    var h = u[d].split("="),
                        p = h[0].replace(c, decodeURIComponent),
                        f = h.slice(1).join("=");
                    '"' === f.charAt(0) && (f = f.slice(1, -1));
                    try {
                        if (f = n && n(f, p) || f.replace(c, decodeURIComponent), this.json) try {
                            f = JSON.parse(f)
                        } catch (l) {}
                        if (e === p) {
                            s = f;
                            break
                        }
                        e || (s[p] = f)
                    } catch (l) {}
                }
                return s
            }
            return i.get = i.set = i, i.getJSON = function() {
                return i.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, i.defaults = {}, i.remove = function(e, n) {
                i(e, "", t(n, {
                    expires: -1
                }))
            }, i.withConverter = e, i
        }
        return e()
    }), ! function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
    }(this, function() {
        "use strict";

        function t() {
            return bi.apply(null, arguments)
        }

        function e(t) {
            bi = t
        }

        function n(t) {
            return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
        }

        function i(t) {
            return null != t && "[object Object]" === Object.prototype.toString.call(t)
        }

        function r(t) {
            var e;
            for (e in t) return !1;
            return !0
        }

        function o(t) {
            return void 0 === t
        }

        function s(t) {
            return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
        }

        function a(t) {
            return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
        }

        function l(t, e) {
            var n, i = [];
            for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
            return i
        }

        function u(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }

        function c(t, e) {
            for (var n in e) u(e, n) && (t[n] = e[n]);
            return u(e, "toString") && (t.toString = e.toString), u(e, "valueOf") && (t.valueOf = e.valueOf), t
        }

        function d(t, e, n, i) {
            return ye(t, e, n, i, !0).utc()
        }

        function h() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1
            }
        }

        function p(t) {
            return null == t._pf && (t._pf = h()), t._pf
        }

        function f(t) {
            if (null == t._isValid) {
                var e = p(t),
                    n = Si.call(e.parsedDateParts, function(t) {
                        return null != t
                    }),
                    i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
                if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return i;
                t._isValid = i
            }
            return t._isValid
        }

        function g(t) {
            var e = d(NaN);
            return null != t ? c(p(e), t) : p(e).userInvalidated = !0, e
        }

        function m(t, e) {
            var n, i, r;
            if (o(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), o(e._i) || (t._i = e._i), o(e._f) || (t._f = e._f), o(e._l) || (t._l = e._l), o(e._strict) || (t._strict = e._strict), o(e._tzm) || (t._tzm = e._tzm), o(e._isUTC) || (t._isUTC = e._isUTC), o(e._offset) || (t._offset = e._offset), o(e._pf) || (t._pf = p(e)), o(e._locale) || (t._locale = e._locale), _i.length > 0)
                for (n = 0; n < _i.length; n++) i = _i[n], r = e[i], o(r) || (t[i] = r);
            return t
        }

        function v(e) {
            m(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), Ti === !1 && (Ti = !0, t.updateOffset(this), Ti = !1)
        }

        function y(t) {
            return t instanceof v || null != t && null != t._isAMomentObject
        }

        function b(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
        }

        function w(t) {
            var e = +t,
                n = 0;
            return 0 !== e && isFinite(e) && (n = b(e)), n
        }

        function S(t, e, n) {
            var i, r = Math.min(t.length, e.length),
                o = Math.abs(t.length - e.length),
                s = 0;
            for (i = 0; i < r; i++)(n && t[i] !== e[i] || !n && w(t[i]) !== w(e[i])) && s++;
            return s + o
        }

        function _(e) {
            t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && void 0
        }

        function T(e, n) {
            var i = !0;
            return c(function() {
                if (null != t.deprecationHandler && t.deprecationHandler(null, e), i) {
                    for (var r, o = [], s = 0; s < arguments.length; s++) {
                        if (r = "", "object" == typeof arguments[s]) {
                            r += "\n[" + s + "] ";
                            for (var a in arguments[0]) r += a + ": " + arguments[0][a] + ", ";
                            r = r.slice(0, -2)
                        } else r = arguments[s];
                        o.push(r)
                    }
                    _(e + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), i = !1
                }
                return n.apply(this, arguments)
            }, n)
        }

        function x(e, n) {
            null != t.deprecationHandler && t.deprecationHandler(e, n), xi[e] || (_(n), xi[e] = !0)
        }

        function k(t) {
            return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
        }

        function C(t) {
            var e, n;
            for (n in t) e = t[n], k(e) ? this[n] = e : this["_" + n] = e;
            this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }

        function D(t, e) {
            var n, r = c({}, t);
            for (n in e) u(e, n) && (i(t[n]) && i(e[n]) ? (r[n] = {}, c(r[n], t[n]), c(r[n], e[n])) : null != e[n] ? r[n] = e[n] : delete r[n]);
            for (n in t) u(t, n) && !u(e, n) && i(t[n]) && (r[n] = c({}, r[n]));
            return r
        }

        function A(t) {
            null != t && this.set(t)
        }

        function $(t, e, n) {
            var i = this._calendar[t] || this._calendar.sameElse;
            return k(i) ? i.call(e, n) : i
        }

        function M(t) {
            var e = this._longDateFormat[t],
                n = this._longDateFormat[t.toUpperCase()];
            return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
                return t.slice(1)
            }), this._longDateFormat[t])
        }

        function E() {
            return this._invalidDate
        }

        function O(t) {
            return this._ordinal.replace("%d", t)
        }

        function P(t, e, n, i) {
            var r = this._relativeTime[n];
            return k(r) ? r(t, e, n, i) : r.replace(/%d/i, t)
        }

        function I(t, e) {
            var n = this._relativeTime[t > 0 ? "future" : "past"];
            return k(n) ? n(e) : n.replace(/%s/i, e)
        }

        function F(t, e) {
            var n = t.toLowerCase();
            Ii[n] = Ii[n + "s"] = Ii[e] = t
        }

        function j(t) {
            return "string" == typeof t ? Ii[t] || Ii[t.toLowerCase()] : void 0
        }

        function L(t) {
            var e, n, i = {};
            for (n in t) u(t, n) && (e = j(n), e && (i[e] = t[n]));
            return i
        }

        function N(t, e) {
            Fi[t] = e
        }

        function R(t) {
            var e = [];
            for (var n in t) e.push({
                unit: n,
                priority: Fi[n]
            });
            return e.sort(function(t, e) {
                return t.priority - e.priority
            }), e
        }

        function H(e, n) {
            return function(i) {
                return null != i ? (W(this, e, i), t.updateOffset(this, n), this) : U(this, e)
            }
        }

        function U(t, e) {
            return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
        }

        function W(t, e, n) {
            t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
        }

        function q(t) {
            return t = j(t), k(this[t]) ? this[t]() : this
        }

        function Y(t, e) {
            if ("object" == typeof t) {
                t = L(t);
                for (var n = R(t), i = 0; i < n.length; i++) this[n[i].unit](t[n[i].unit])
            } else if (t = j(t), k(this[t])) return this[t](e);
            return this
        }

        function B(t, e, n) {
            var i = "" + Math.abs(t),
                r = e - i.length,
                o = t >= 0;
            return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
        }

        function z(t, e, n, i) {
            var r = i;
            "string" == typeof i && (r = function() {
                return this[i]()
            }), t && (Ri[t] = r), e && (Ri[e[0]] = function() {
                return B(r.apply(this, arguments), e[1], e[2])
            }), n && (Ri[n] = function() {
                return this.localeData().ordinal(r.apply(this, arguments), t)
            })
        }

        function V(t) {
            return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
        }

        function G(t) {
            var e, n, i = t.match(ji);
            for (e = 0, n = i.length; e < n; e++) Ri[i[e]] ? i[e] = Ri[i[e]] : i[e] = V(i[e]);
            return function(e) {
                var r, o = "";
                for (r = 0; r < n; r++) o += k(i[r]) ? i[r].call(e, t) : i[r];
                return o
            }
        }

        function X(t, e) {
            return t.isValid() ? (e = Q(e, t.localeData()), Ni[e] = Ni[e] || G(e), Ni[e](t)) : t.localeData().invalidDate()
        }

        function Q(t, e) {
            function n(t) {
                return e.longDateFormat(t) || t
            }
            var i = 5;
            for (Li.lastIndex = 0; i >= 0 && Li.test(t);) t = t.replace(Li, n), Li.lastIndex = 0, i -= 1;
            return t
        }

        function J(t, e, n) {
            ir[t] = k(e) ? e : function(t, i) {
                return t && n ? n : e
            }
        }

        function K(t, e) {
            return u(ir, t) ? ir[t](e._strict, e._locale) : new RegExp(Z(t))
        }

        function Z(t) {
            return tt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, r) {
                return e || n || i || r
            }))
        }

        function tt(t) {
            return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function et(t, e) {
            var n, i = e;
            for ("string" == typeof t && (t = [t]), s(e) && (i = function(t, n) {
                    n[e] = w(t)
                }), n = 0; n < t.length; n++) rr[t[n]] = i
        }

        function nt(t, e) {
            et(t, function(t, n, i, r) {
                i._w = i._w || {}, e(t, i._w, i, r)
            })
        }

        function it(t, e, n) {
            null != e && u(rr, t) && rr[t](e, n._a, n, t)
        }

        function rt(t, e) {
            return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
        }

        function ot(t, e) {
            return t ? n(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || gr).test(e) ? "format" : "standalone"][t.month()] : n(this._months) ? this._months : this._months.standalone
        }

        function st(t, e) {
            return t ? n(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[gr.test(e) ? "format" : "standalone"][t.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }

        function at(t, e, n) {
            var i, r, o, s = t.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) o = d([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
            return n ? "MMM" === e ? (r = fr.call(this._shortMonthsParse, s), r !== -1 ? r : null) : (r = fr.call(this._longMonthsParse, s), r !== -1 ? r : null) : "MMM" === e ? (r = fr.call(this._shortMonthsParse, s), r !== -1 ? r : (r = fr.call(this._longMonthsParse, s), r !== -1 ? r : null)) : (r = fr.call(this._longMonthsParse, s), r !== -1 ? r : (r = fr.call(this._shortMonthsParse, s), r !== -1 ? r : null))
        }

        function lt(t, e, n) {
            var i, r, o;
            if (this._monthsParseExact) return at.call(this, t, e, n);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                if (r = d([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
                if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
                if (!n && this._monthsParse[i].test(t)) return i
            }
        }

        function ut(t, e) {
            var n;
            if (!t.isValid()) return t;
            if ("string" == typeof e)
                if (/^\d+$/.test(e)) e = w(e);
                else if (e = t.localeData().monthsParse(e), !s(e)) return t;
            return n = Math.min(t.date(), rt(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
        }

        function ct(e) {
            return null != e ? (ut(this, e), t.updateOffset(this, !0), this) : U(this, "Month")
        }

        function dt() {
            return rt(this.year(), this.month())
        }

        function ht(t) {
            return this._monthsParseExact ? (u(this, "_monthsRegex") || ft.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = yr), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }

        function pt(t) {
            return this._monthsParseExact ? (u(this, "_monthsRegex") || ft.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = br), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
        }

        function ft() {
            function t(t, e) {
                return e.length - t.length
            }
            var e, n, i = [],
                r = [],
                o = [];
            for (e = 0; e < 12; e++) n = d([2e3, e]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
            for (i.sort(t), r.sort(t), o.sort(t), e = 0; e < 12; e++) i[e] = tt(i[e]), r[e] = tt(r[e]);
            for (e = 0; e < 24; e++) o[e] = tt(o[e]);
            this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
        }

        function gt(t) {
            return mt(t) ? 366 : 365
        }

        function mt(t) {
            return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
        }

        function vt() {
            return mt(this.year())
        }

        function yt(t, e, n, i, r, o, s) {
            var a = new Date(t, e, n, i, r, o, s);
            return t < 100 && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a
        }

        function bt(t) {
            var e = new Date(Date.UTC.apply(null, arguments));
            return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
        }

        function wt(t, e, n) {
            var i = 7 + e - n,
                r = (7 + bt(t, 0, i).getUTCDay() - e) % 7;
            return -r + i - 1
        }

        function St(t, e, n, i, r) {
            var o, s, a = (7 + n - i) % 7,
                l = wt(t, i, r),
                u = 1 + 7 * (e - 1) + a + l;
            return u <= 0 ? (o = t - 1, s = gt(o) + u) : u > gt(t) ? (o = t + 1, s = u - gt(t)) : (o = t, s = u), {
                year: o,
                dayOfYear: s
            }
        }

        function _t(t, e, n) {
            var i, r, o = wt(t.year(), e, n),
                s = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
            return s < 1 ? (r = t.year() - 1, i = s + Tt(r, e, n)) : s > Tt(t.year(), e, n) ? (i = s - Tt(t.year(), e, n), r = t.year() + 1) : (r = t.year(), i = s), {
                week: i,
                year: r
            }
        }

        function Tt(t, e, n) {
            var i = wt(t, e, n),
                r = wt(t + 1, e, n);
            return (gt(t) - i + r) / 7
        }

        function xt(t) {
            return _t(t, this._week.dow, this._week.doy).week
        }

        function kt() {
            return this._week.dow
        }

        function Ct() {
            return this._week.doy
        }

        function Dt(t) {
            var e = this.localeData().week(this);
            return null == t ? e : this.add(7 * (t - e), "d")
        }

        function At(t) {
            var e = _t(this, 1, 4).week;
            return null == t ? e : this.add(7 * (t - e), "d")
        }

        function $t(t, e) {
            return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
        }

        function Mt(t, e) {
            return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
        }

        function Et(t, e) {
            return t ? n(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : n(this._weekdays) ? this._weekdays : this._weekdays.standalone
        }

        function Ot(t) {
            return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
        }

        function Pt(t) {
            return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
        }

        function It(t, e, n) {
            var i, r, o, s = t.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) o = d([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
            return n ? "dddd" === e ? (r = fr.call(this._weekdaysParse, s), r !== -1 ? r : null) : "ddd" === e ? (r = fr.call(this._shortWeekdaysParse, s), r !== -1 ? r : null) : (r = fr.call(this._minWeekdaysParse, s), r !== -1 ? r : null) : "dddd" === e ? (r = fr.call(this._weekdaysParse, s), r !== -1 ? r : (r = fr.call(this._shortWeekdaysParse, s), r !== -1 ? r : (r = fr.call(this._minWeekdaysParse, s), r !== -1 ? r : null))) : "ddd" === e ? (r = fr.call(this._shortWeekdaysParse, s), r !== -1 ? r : (r = fr.call(this._weekdaysParse, s), r !== -1 ? r : (r = fr.call(this._minWeekdaysParse, s), r !== -1 ? r : null))) : (r = fr.call(this._minWeekdaysParse, s), r !== -1 ? r : (r = fr.call(this._weekdaysParse, s), r !== -1 ? r : (r = fr.call(this._shortWeekdaysParse, s), r !== -1 ? r : null)))
        }

        function Ft(t, e, n) {
            var i, r, o;
            if (this._weekdaysParseExact) return It.call(this, t, e, n);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
                if (r = d([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
                if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
                if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
                if (!n && this._weekdaysParse[i].test(t)) return i
            }
        }

        function jt(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? (t = $t(t, this.localeData()), this.add(t - e, "d")) : e
        }

        function Lt(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? e : this.add(t - e, "d")
        }

        function Nt(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
                var e = Mt(t, this.localeData());
                return this.day(this.day() % 7 ? e : e - 7)
            }
            return this.day() || 7
        }

        function Rt(t) {
            return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Wt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = kr), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }

        function Ht(t) {
            return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Wt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Cr), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }

        function Ut(t) {
            return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Wt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Dr), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }

        function Wt() {
            function t(t, e) {
                return e.length - t.length
            }
            var e, n, i, r, o, s = [],
                a = [],
                l = [],
                u = [];
            for (e = 0; e < 7; e++) n = d([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), s.push(i), a.push(r), l.push(o), u.push(i), u.push(r), u.push(o);
            for (s.sort(t), a.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++) a[e] = tt(a[e]), l[e] = tt(l[e]), u[e] = tt(u[e]);
            this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
        }

        function qt() {
            return this.hours() % 12 || 12
        }

        function Yt() {
            return this.hours() || 24
        }

        function Bt(t, e) {
            z(t, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), e)
            })
        }

        function zt(t, e) {
            return e._meridiemParse
        }

        function Vt(t) {
            return "p" === (t + "").toLowerCase().charAt(0)
        }

        function Gt(t, e, n) {
            return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        }

        function Xt(t) {
            return t ? t.toLowerCase().replace("_", "-") : t
        }

        function Qt(t) {
            for (var e, n, i, r, o = 0; o < t.length;) {
                for (r = Xt(t[o]).split("-"), e = r.length, n = Xt(t[o + 1]), n = n ? n.split("-") : null; e > 0;) {
                    if (i = Jt(r.slice(0, e).join("-"))) return i;
                    if (n && n.length >= e && S(r, n, !0) >= e - 1) break;
                    e--
                }
                o++
            }
            return null
        }

        function Jt(t) {
            var e = null;
            if (!Or[t] && "undefined" != typeof module && module && module.exports) try {
                e = Ar._abbr, require("./locale/" + t), Kt(e)
            } catch (t) {}
            return Or[t]
        }

        function Kt(t, e) {
            var n;
            return t && (n = o(e) ? ee(t) : Zt(t, e), n && (Ar = n)), Ar._abbr
        }

        function Zt(t, e) {
            if (null !== e) {
                var n = Er;
                if (e.abbr = t, null != Or[t]) x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Or[t]._config;
                else if (null != e.parentLocale) {
                    if (null == Or[e.parentLocale]) return Pr[e.parentLocale] || (Pr[e.parentLocale] = []), Pr[e.parentLocale].push({
                        name: t,
                        config: e
                    }), null;
                    n = Or[e.parentLocale]._config
                }
                return Or[t] = new A(D(n, e)), Pr[t] && Pr[t].forEach(function(t) {
                    Zt(t.name, t.config)
                }), Kt(t), Or[t]
            }
            return delete Or[t], null
        }

        function te(t, e) {
            if (null != e) {
                var n, i = Er;
                null != Or[t] && (i = Or[t]._config), e = D(i, e), n = new A(e), n.parentLocale = Or[t], Or[t] = n, Kt(t)
            } else null != Or[t] && (null != Or[t].parentLocale ? Or[t] = Or[t].parentLocale : null != Or[t] && delete Or[t]);
            return Or[t]
        }

        function ee(t) {
            var e;
            if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Ar;
            if (!n(t)) {
                if (e = Jt(t)) return e;
                t = [t]
            }
            return Qt(t)
        }

        function ne() {
            return Di(Or)
        }

        function ie(t) {
            var e, n = t._a;
            return n && p(t).overflow === -2 && (e = n[sr] < 0 || n[sr] > 11 ? sr : n[ar] < 1 || n[ar] > rt(n[or], n[sr]) ? ar : n[lr] < 0 || n[lr] > 24 || 24 === n[lr] && (0 !== n[ur] || 0 !== n[cr] || 0 !== n[dr]) ? lr : n[ur] < 0 || n[ur] > 59 ? ur : n[cr] < 0 || n[cr] > 59 ? cr : n[dr] < 0 || n[dr] > 999 ? dr : -1, p(t)._overflowDayOfYear && (e < or || e > ar) && (e = ar), p(t)._overflowWeeks && e === -1 && (e = hr), p(t)._overflowWeekday && e === -1 && (e = pr), p(t).overflow = e), t
        }

        function re(t) {
            var e, n, i, r, o, s, a = t._i,
                l = Ir.exec(a) || Fr.exec(a);
            if (l) {
                for (p(t).iso = !0, e = 0, n = Lr.length; e < n; e++)
                    if (Lr[e][1].exec(l[1])) {
                        r = Lr[e][0], i = Lr[e][2] !== !1;
                        break
                    }
                if (null == r) return void(t._isValid = !1);
                if (l[3]) {
                    for (e = 0, n = Nr.length; e < n; e++)
                        if (Nr[e][1].exec(l[3])) {
                            o = (l[2] || " ") + Nr[e][0];
                            break
                        }
                    if (null == o) return void(t._isValid = !1)
                }
                if (!i && null != o) return void(t._isValid = !1);
                if (l[4]) {
                    if (!jr.exec(l[4])) return void(t._isValid = !1);
                    s = "Z"
                }
                t._f = r + (o || "") + (s || ""), de(t)
            } else t._isValid = !1
        }

        function oe(t) {
            var e, n, i, r, o, s, a, l, u = {
                    " GMT": " +0000",
                    " EDT": " -0400",
                    " EST": " -0500",
                    " CDT": " -0500",
                    " CST": " -0600",
                    " MDT": " -0600",
                    " MST": " -0700",
                    " PDT": " -0700",
                    " PST": " -0800"
                },
                c = "YXWVUTSRQPONZABCDEFGHIKLM";
            if (e = t._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), n = Hr.exec(e)) {
                if (i = n[1] ? "ddd" + (5 === n[1].length ? ", " : " ") : "", r = "D MMM " + (n[2].length > 10 ? "YYYY " : "YY "), o = "HH:mm" + (n[4] ? ":ss" : ""), n[1]) {
                    var d = new Date(n[2]),
                        h = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][d.getDay()];
                    if (n[1].substr(0, 3) !== h) return p(t).weekdayMismatch = !0, void(t._isValid = !1)
                }
                switch (n[5].length) {
                    case 2:
                        0 === l ? a = " +0000" : (l = c.indexOf(n[5][1].toUpperCase()) - 12, a = (l < 0 ? " -" : " +") + ("" + l).replace(/^-?/, "0").match(/..$/)[0] + "00");
                        break;
                    case 4:
                        a = u[n[5]];
                        break;
                    default:
                        a = u[" GMT"]
                }
                n[5] = a, t._i = n.splice(1).join(""), s = " ZZ", t._f = i + r + o + s, de(t), p(t).rfc2822 = !0
            } else t._isValid = !1
        }

        function se(e) {
            var n = Rr.exec(e._i);
            return null !== n ? void(e._d = new Date((+n[1]))) : (re(e), void(e._isValid === !1 && (delete e._isValid, oe(e), e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e)))))
        }

        function ae(t, e, n) {
            return null != t ? t : null != e ? e : n
        }

        function le(e) {
            var n = new Date(t.now());
            return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
        }

        function ue(t) {
            var e, n, i, r, o = [];
            if (!t._d) {
                for (i = le(t), t._w && null == t._a[ar] && null == t._a[sr] && ce(t), null != t._dayOfYear && (r = ae(t._a[or], i[or]), (t._dayOfYear > gt(r) || 0 === t._dayOfYear) && (p(t)._overflowDayOfYear = !0), n = bt(r, 0, t._dayOfYear), t._a[sr] = n.getUTCMonth(), t._a[ar] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = o[e] = i[e];
                for (; e < 7; e++) t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                24 === t._a[lr] && 0 === t._a[ur] && 0 === t._a[cr] && 0 === t._a[dr] && (t._nextDay = !0, t._a[lr] = 0), t._d = (t._useUTC ? bt : yt).apply(null, o), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[lr] = 24)
            }
        }

        function ce(t) {
            var e, n, i, r, o, s, a, l;
            if (e = t._w, null != e.GG || null != e.W || null != e.E) o = 1, s = 4, n = ae(e.GG, t._a[or], _t(be(), 1, 4).year), i = ae(e.W, 1), r = ae(e.E, 1), (r < 1 || r > 7) && (l = !0);
            else {
                o = t._locale._week.dow, s = t._locale._week.doy;
                var u = _t(be(), o, s);
                n = ae(e.gg, t._a[or], u.year), i = ae(e.w, u.week), null != e.d ? (r = e.d, (r < 0 || r > 6) && (l = !0)) : null != e.e ? (r = e.e + o, (e.e < 0 || e.e > 6) && (l = !0)) : r = o
            }
            i < 1 || i > Tt(n, o, s) ? p(t)._overflowWeeks = !0 : null != l ? p(t)._overflowWeekday = !0 : (a = St(n, i, r, o, s), t._a[or] = a.year, t._dayOfYear = a.dayOfYear)
        }

        function de(e) {
            if (e._f === t.ISO_8601) return void re(e);
            if (e._f === t.RFC_2822) return void oe(e);
            e._a = [], p(e).empty = !0;
            var n, i, r, o, s, a = "" + e._i,
                l = a.length,
                u = 0;
            for (r = Q(e._f, e._locale).match(ji) || [], n = 0; n < r.length; n++) o = r[n], i = (a.match(K(o, e)) || [])[0], i && (s = a.substr(0, a.indexOf(i)), s.length > 0 && p(e).unusedInput.push(s), a = a.slice(a.indexOf(i) + i.length), u += i.length), Ri[o] ? (i ? p(e).empty = !1 : p(e).unusedTokens.push(o), it(o, i, e)) : e._strict && !i && p(e).unusedTokens.push(o);
            p(e).charsLeftOver = l - u, a.length > 0 && p(e).unusedInput.push(a), e._a[lr] <= 12 && p(e).bigHour === !0 && e._a[lr] > 0 && (p(e).bigHour = void 0), p(e).parsedDateParts = e._a.slice(0), p(e).meridiem = e._meridiem, e._a[lr] = he(e._locale, e._a[lr], e._meridiem), ue(e), ie(e)
        }

        function he(t, e, n) {
            var i;
            return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && e < 12 && (e += 12), i || 12 !== e || (e = 0), e) : e
        }

        function pe(t) {
            var e, n, i, r, o;
            if (0 === t._f.length) return p(t).invalidFormat = !0, void(t._d = new Date(NaN));
            for (r = 0; r < t._f.length; r++) o = 0, e = m({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], de(e), f(e) && (o += p(e).charsLeftOver, o += 10 * p(e).unusedTokens.length, p(e).score = o, (null == i || o < i) && (i = o, n = e));
            c(t, n || e)
        }

        function fe(t) {
            if (!t._d) {
                var e = L(t._i);
                t._a = l([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                    return t && parseInt(t, 10)
                }), ue(t)
            }
        }

        function ge(t) {
            var e = new v(ie(me(t)));
            return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
        }

        function me(t) {
            var e = t._i,
                i = t._f;
            return t._locale = t._locale || ee(t._l), null === e || void 0 === i && "" === e ? g({
                nullInput: !0
            }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), y(e) ? new v(ie(e)) : (a(e) ? t._d = e : n(i) ? pe(t) : i ? de(t) : ve(t), f(t) || (t._d = null), t))
        }

        function ve(e) {
            var r = e._i;
            o(r) ? e._d = new Date(t.now()) : a(r) ? e._d = new Date(r.valueOf()) : "string" == typeof r ? se(e) : n(r) ? (e._a = l(r.slice(0), function(t) {
                return parseInt(t, 10)
            }), ue(e)) : i(r) ? fe(e) : s(r) ? e._d = new Date(r) : t.createFromInputFallback(e)
        }

        function ye(t, e, o, s, a) {
            var l = {};
            return o !== !0 && o !== !1 || (s = o, o = void 0), (i(t) && r(t) || n(t) && 0 === t.length) && (t = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = o, l._i = t, l._f = e, l._strict = s, ge(l)
        }

        function be(t, e, n, i) {
            return ye(t, e, n, i, !1)
        }

        function we(t, e) {
            var i, r;
            if (1 === e.length && n(e[0]) && (e = e[0]), !e.length) return be();
            for (i = e[0], r = 1; r < e.length; ++r) e[r].isValid() && !e[r][t](i) || (i = e[r]);
            return i
        }

        function Se() {
            var t = [].slice.call(arguments, 0);
            return we("isBefore", t)
        }

        function _e() {
            var t = [].slice.call(arguments, 0);
            return we("isAfter", t)
        }

        function Te(t) {
            for (var e in t)
                if (Yr.indexOf(e) === -1 || null != t[e] && isNaN(t[e])) return !1;
            for (var n = !1, i = 0; i < Yr.length; ++i)
                if (t[Yr[i]]) {
                    if (n) return !1;
                    parseFloat(t[Yr[i]]) !== w(t[Yr[i]]) && (n = !0)
                }
            return !0
        }

        function xe() {
            return this._isValid
        }

        function ke() {
            return Ye(NaN)
        }

        function Ce(t) {
            var e = L(t),
                n = e.year || 0,
                i = e.quarter || 0,
                r = e.month || 0,
                o = e.week || 0,
                s = e.day || 0,
                a = e.hour || 0,
                l = e.minute || 0,
                u = e.second || 0,
                c = e.millisecond || 0;
            this._isValid = Te(e), this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60, this._days = +s + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = ee(), this._bubble()
        }

        function De(t) {
            return t instanceof Ce
        }

        function Ae(t) {
            return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t)
        }

        function $e(t, e) {
            z(t, 0, 0, function() {
                var t = this.utcOffset(),
                    n = "+";
                return t < 0 && (t = -t, n = "-"), n + B(~~(t / 60), 2) + e + B(~~t % 60, 2)
            })
        }

        function Me(t, e) {
            var n = (e || "").match(t);
            if (null === n) return null;
            var i = n[n.length - 1] || [],
                r = (i + "").match(Br) || ["-", 0, 0],
                o = +(60 * r[1]) + w(r[2]);
            return 0 === o ? 0 : "+" === r[0] ? o : -o
        }

        function Ee(e, n) {
            var i, r;
            return n._isUTC ? (i = n.clone(), r = (y(e) || a(e) ? e.valueOf() : be(e).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + r), t.updateOffset(i, !1), i) : be(e).local()
        }

        function Oe(t) {
            return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
        }

        function Pe(e, n, i) {
            var r, o = this._offset || 0;
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
                if ("string" == typeof e) {
                    if (e = Me(tr, e), null === e) return this
                } else Math.abs(e) < 16 && !i && (e = 60 * e);
                return !this._isUTC && n && (r = Oe(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), o !== e && (!n || this._changeInProgress ? Xe(this, Ye(e - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
            }
            return this._isUTC ? o : Oe(this)
        }

        function Ie(t, e) {
            return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
        }

        function Fe(t) {
            return this.utcOffset(0, t)
        }

        function je(t) {
            return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Oe(this), "m")), this
        }

        function Le() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
                var t = Me(Zi, this._i);
                null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
            }
            return this
        }

        function Ne(t) {
            return !!this.isValid() && (t = t ? be(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0)
        }

        function Re() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function He() {
            if (!o(this._isDSTShifted)) return this._isDSTShifted;
            var t = {};
            if (m(t, this), t = me(t), t._a) {
                var e = t._isUTC ? d(t._a) : be(t._a);
                this._isDSTShifted = this.isValid() && S(t._a, e.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        }

        function Ue() {
            return !!this.isValid() && !this._isUTC
        }

        function We() {
            return !!this.isValid() && this._isUTC
        }

        function qe() {
            return !!this.isValid() && this._isUTC && 0 === this._offset
        }

        function Ye(t, e) {
            var n, i, r, o = t,
                a = null;
            return De(t) ? o = {
                ms: t._milliseconds,
                d: t._days,
                M: t._months
            } : s(t) ? (o = {}, e ? o[e] = t : o.milliseconds = t) : (a = zr.exec(t)) ? (n = "-" === a[1] ? -1 : 1, o = {
                y: 0,
                d: w(a[ar]) * n,
                h: w(a[lr]) * n,
                m: w(a[ur]) * n,
                s: w(a[cr]) * n,
                ms: w(Ae(1e3 * a[dr])) * n
            }) : (a = Vr.exec(t)) ? (n = "-" === a[1] ? -1 : 1, o = {
                y: Be(a[2], n),
                M: Be(a[3], n),
                w: Be(a[4], n),
                d: Be(a[5], n),
                h: Be(a[6], n),
                m: Be(a[7], n),
                s: Be(a[8], n)
            }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (r = Ve(be(o.from), be(o.to)), o = {}, o.ms = r.milliseconds, o.M = r.months), i = new Ce(o), De(t) && u(t, "_locale") && (i._locale = t._locale), i
        }

        function Be(t, e) {
            var n = t && parseFloat(t.replace(",", "."));
            return (isNaN(n) ? 0 : n) * e
        }

        function ze(t, e) {
            var n = {
                milliseconds: 0,
                months: 0
            };
            return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
        }

        function Ve(t, e) {
            var n;
            return t.isValid() && e.isValid() ? (e = Ee(e, t), t.isBefore(e) ? n = ze(t, e) : (n = ze(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                milliseconds: 0,
                months: 0
            }
        }

        function Ge(t, e) {
            return function(n, i) {
                var r, o;
                return null === i || isNaN(+i) || (x(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = n, n = i, i = o), n = "string" == typeof n ? +n : n, r = Ye(n, i), Xe(this, r, t), this
            }
        }

        function Xe(e, n, i, r) {
            var o = n._milliseconds,
                s = Ae(n._days),
                a = Ae(n._months);
            e.isValid() && (r = null == r || r, o && e._d.setTime(e._d.valueOf() + o * i), s && W(e, "Date", U(e, "Date") + s * i), a && ut(e, U(e, "Month") + a * i), r && t.updateOffset(e, s || a))
        }

        function Qe(t, e) {
            var n = t.diff(e, "days", !0);
            return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
        }

        function Je(e, n) {
            var i = e || be(),
                r = Ee(i, this).startOf("day"),
                o = t.calendarFormat(this, r) || "sameElse",
                s = n && (k(n[o]) ? n[o].call(this, i) : n[o]);
            return this.format(s || this.localeData().calendar(o, this, be(i)))
        }

        function Ke() {
            return new v(this)
        }

        function Ze(t, e) {
            var n = y(t) ? t : be(t);
            return !(!this.isValid() || !n.isValid()) && (e = j(o(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
        }

        function tn(t, e) {
            var n = y(t) ? t : be(t);
            return !(!this.isValid() || !n.isValid()) && (e = j(o(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
        }

        function en(t, e, n, i) {
            return i = i || "()", ("(" === i[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
        }

        function nn(t, e) {
            var n, i = y(t) ? t : be(t);
            return !(!this.isValid() || !i.isValid()) && (e = j(e || "millisecond"), "millisecond" === e ? this.valueOf() === i.valueOf() : (n = i.valueOf(),
                this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
        }

        function rn(t, e) {
            return this.isSame(t, e) || this.isAfter(t, e)
        }

        function on(t, e) {
            return this.isSame(t, e) || this.isBefore(t, e)
        }

        function sn(t, e, n) {
            var i, r, o, s;
            return this.isValid() ? (i = Ee(t, this), i.isValid() ? (r = 6e4 * (i.utcOffset() - this.utcOffset()), e = j(e), "year" === e || "month" === e || "quarter" === e ? (s = an(this, i), "quarter" === e ? s /= 3 : "year" === e && (s /= 12)) : (o = this - i, s = "second" === e ? o / 1e3 : "minute" === e ? o / 6e4 : "hour" === e ? o / 36e5 : "day" === e ? (o - r) / 864e5 : "week" === e ? (o - r) / 6048e5 : o), n ? s : b(s)) : NaN) : NaN
        }

        function an(t, e) {
            var n, i, r = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                o = t.clone().add(r, "months");
            return e - o < 0 ? (n = t.clone().add(r - 1, "months"), i = (e - o) / (o - n)) : (n = t.clone().add(r + 1, "months"), i = (e - o) / (n - o)), -(r + i) || 0
        }

        function ln() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function un() {
            if (!this.isValid()) return null;
            var t = this.clone().utc();
            return t.year() < 0 || t.year() > 9999 ? X(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : k(Date.prototype.toISOString) ? this.toDate().toISOString() : X(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }

        function cn() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var t = "moment",
                e = "";
            this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
            var n = "[" + t + '("]',
                i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                r = "-MM-DD[T]HH:mm:ss.SSS",
                o = e + '[")]';
            return this.format(n + i + r + o)
        }

        function dn(e) {
            e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
            var n = X(this, e);
            return this.localeData().postformat(n)
        }

        function hn(t, e) {
            return this.isValid() && (y(t) && t.isValid() || be(t).isValid()) ? Ye({
                to: this,
                from: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }

        function pn(t) {
            return this.from(be(), t)
        }

        function fn(t, e) {
            return this.isValid() && (y(t) && t.isValid() || be(t).isValid()) ? Ye({
                from: this,
                to: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }

        function gn(t) {
            return this.to(be(), t)
        }

        function mn(t) {
            var e;
            return void 0 === t ? this._locale._abbr : (e = ee(t), null != e && (this._locale = e), this)
        }

        function vn() {
            return this._locale
        }

        function yn(t) {
            switch (t = j(t)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
        }

        function bn(t) {
            return t = j(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
        }

        function wn() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }

        function Sn() {
            return Math.floor(this.valueOf() / 1e3)
        }

        function _n() {
            return new Date(this.valueOf())
        }

        function Tn() {
            var t = this;
            return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
        }

        function xn() {
            var t = this;
            return {
                years: t.year(),
                months: t.month(),
                date: t.date(),
                hours: t.hours(),
                minutes: t.minutes(),
                seconds: t.seconds(),
                milliseconds: t.milliseconds()
            }
        }

        function kn() {
            return this.isValid() ? this.toISOString() : null
        }

        function Cn() {
            return f(this)
        }

        function Dn() {
            return c({}, p(this))
        }

        function An() {
            return p(this).overflow
        }

        function $n() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }

        function Mn(t, e) {
            z(0, [t, t.length], 0, e)
        }

        function En(t) {
            return Fn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }

        function On(t) {
            return Fn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
        }

        function Pn() {
            return Tt(this.year(), 1, 4)
        }

        function In() {
            var t = this.localeData()._week;
            return Tt(this.year(), t.dow, t.doy)
        }

        function Fn(t, e, n, i, r) {
            var o;
            return null == t ? _t(this, i, r).year : (o = Tt(t, i, r), e > o && (e = o), jn.call(this, t, e, n, i, r))
        }

        function jn(t, e, n, i, r) {
            var o = St(t, e, n, i, r),
                s = bt(o.year, 0, o.dayOfYear);
            return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
        }

        function Ln(t) {
            return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
        }

        function Nn(t) {
            var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add(t - e, "d")
        }

        function Rn(t, e) {
            e[dr] = w(1e3 * ("0." + t))
        }

        function Hn() {
            return this._isUTC ? "UTC" : ""
        }

        function Un() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function Wn(t) {
            return be(1e3 * t)
        }

        function qn() {
            return be.apply(null, arguments).parseZone()
        }

        function Yn(t) {
            return t
        }

        function Bn(t, e, n, i) {
            var r = ee(),
                o = d().set(i, e);
            return r[n](o, t)
        }

        function zn(t, e, n) {
            if (s(t) && (e = t, t = void 0), t = t || "", null != e) return Bn(t, e, n, "month");
            var i, r = [];
            for (i = 0; i < 12; i++) r[i] = Bn(t, i, n, "month");
            return r
        }

        function Vn(t, e, n, i) {
            "boolean" == typeof t ? (s(e) && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, s(e) && (n = e, e = void 0), e = e || "");
            var r = ee(),
                o = t ? r._week.dow : 0;
            if (null != n) return Bn(e, (n + o) % 7, i, "day");
            var a, l = [];
            for (a = 0; a < 7; a++) l[a] = Bn(e, (a + o) % 7, i, "day");
            return l
        }

        function Gn(t, e) {
            return zn(t, e, "months")
        }

        function Xn(t, e) {
            return zn(t, e, "monthsShort")
        }

        function Qn(t, e, n) {
            return Vn(t, e, n, "weekdays")
        }

        function Jn(t, e, n) {
            return Vn(t, e, n, "weekdaysShort")
        }

        function Kn(t, e, n) {
            return Vn(t, e, n, "weekdaysMin")
        }

        function Zn() {
            var t = this._data;
            return this._milliseconds = ro(this._milliseconds), this._days = ro(this._days), this._months = ro(this._months), t.milliseconds = ro(t.milliseconds), t.seconds = ro(t.seconds), t.minutes = ro(t.minutes), t.hours = ro(t.hours), t.months = ro(t.months), t.years = ro(t.years), this
        }

        function ti(t, e, n, i) {
            var r = Ye(e, n);
            return t._milliseconds += i * r._milliseconds, t._days += i * r._days, t._months += i * r._months, t._bubble()
        }

        function ei(t, e) {
            return ti(this, t, e, 1)
        }

        function ni(t, e) {
            return ti(this, t, e, -1)
        }

        function ii(t) {
            return t < 0 ? Math.floor(t) : Math.ceil(t)
        }

        function ri() {
            var t, e, n, i, r, o = this._milliseconds,
                s = this._days,
                a = this._months,
                l = this._data;
            return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * ii(si(a) + s), s = 0, a = 0), l.milliseconds = o % 1e3, t = b(o / 1e3), l.seconds = t % 60, e = b(t / 60), l.minutes = e % 60, n = b(e / 60), l.hours = n % 24, s += b(n / 24), r = b(oi(s)), a += r, s -= ii(si(r)), i = b(a / 12), a %= 12, l.days = s, l.months = a, l.years = i, this
        }

        function oi(t) {
            return 4800 * t / 146097
        }

        function si(t) {
            return 146097 * t / 4800
        }

        function ai(t) {
            if (!this.isValid()) return NaN;
            var e, n, i = this._milliseconds;
            if (t = j(t), "month" === t || "year" === t) return e = this._days + i / 864e5, n = this._months + oi(e), "month" === t ? n : n / 12;
            switch (e = this._days + Math.round(si(this._months)), t) {
                case "week":
                    return e / 7 + i / 6048e5;
                case "day":
                    return e + i / 864e5;
                case "hour":
                    return 24 * e + i / 36e5;
                case "minute":
                    return 1440 * e + i / 6e4;
                case "second":
                    return 86400 * e + i / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * e) + i;
                default:
                    throw new Error("Unknown unit " + t)
            }
        }

        function li() {
            return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) : NaN
        }

        function ui(t) {
            return function() {
                return this.as(t)
            }
        }

        function ci(t) {
            return t = j(t), this.isValid() ? this[t + "s"]() : NaN
        }

        function di(t) {
            return function() {
                return this.isValid() ? this._data[t] : NaN
            }
        }

        function hi() {
            return b(this.days() / 7)
        }

        function pi(t, e, n, i, r) {
            return r.relativeTime(e || 1, !!n, t, i)
        }

        function fi(t, e, n) {
            var i = Ye(t).abs(),
                r = So(i.as("s")),
                o = So(i.as("m")),
                s = So(i.as("h")),
                a = So(i.as("d")),
                l = So(i.as("M")),
                u = So(i.as("y")),
                c = r <= _o.ss && ["s", r] || r < _o.s && ["ss", r] || o <= 1 && ["m"] || o < _o.m && ["mm", o] || s <= 1 && ["h"] || s < _o.h && ["hh", s] || a <= 1 && ["d"] || a < _o.d && ["dd", a] || l <= 1 && ["M"] || l < _o.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u];
            return c[2] = e, c[3] = +t > 0, c[4] = n, pi.apply(null, c)
        }

        function gi(t) {
            return void 0 === t ? So : "function" == typeof t && (So = t, !0)
        }

        function mi(t, e) {
            return void 0 !== _o[t] && (void 0 === e ? _o[t] : (_o[t] = e, "s" === t && (_o.ss = e - 1), !0))
        }

        function vi(t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e = this.localeData(),
                n = fi(this, !t, e);
            return t && (n = e.pastFuture(+this, n)), e.postformat(n)
        }

        function yi() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t, e, n, i = To(this._milliseconds) / 1e3,
                r = To(this._days),
                o = To(this._months);
            t = b(i / 60), e = b(t / 60), i %= 60, t %= 60, n = b(o / 12), o %= 12;
            var s = n,
                a = o,
                l = r,
                u = e,
                c = t,
                d = i,
                h = this.asSeconds();
            return h ? (h < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (a ? a + "M" : "") + (l ? l + "D" : "") + (u || c || d ? "T" : "") + (u ? u + "H" : "") + (c ? c + "M" : "") + (d ? d + "S" : "") : "P0D"
        }
        var bi, wi;
        wi = Array.prototype.some ? Array.prototype.some : function(t) {
            for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)
                if (i in e && t.call(this, e[i], i, e)) return !0;
            return !1
        };
        var Si = wi,
            _i = t.momentProperties = [],
            Ti = !1,
            xi = {};
        t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
        var ki;
        ki = Object.keys ? Object.keys : function(t) {
            var e, n = [];
            for (e in t) u(t, e) && n.push(e);
            return n
        };
        var Ci, Di = ki,
            Ai = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            $i = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            Mi = "Invalid date",
            Ei = "%d",
            Oi = /\d{1,2}/,
            Pi = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            Ii = {},
            Fi = {},
            ji = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            Li = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Ni = {},
            Ri = {},
            Hi = /\d/,
            Ui = /\d\d/,
            Wi = /\d{3}/,
            qi = /\d{4}/,
            Yi = /[+-]?\d{6}/,
            Bi = /\d\d?/,
            zi = /\d\d\d\d?/,
            Vi = /\d\d\d\d\d\d?/,
            Gi = /\d{1,3}/,
            Xi = /\d{1,4}/,
            Qi = /[+-]?\d{1,6}/,
            Ji = /\d+/,
            Ki = /[+-]?\d+/,
            Zi = /Z|[+-]\d\d:?\d\d/gi,
            tr = /Z|[+-]\d\d(?::?\d\d)?/gi,
            er = /[+-]?\d+(\.\d{1,3})?/,
            nr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            ir = {},
            rr = {},
            or = 0,
            sr = 1,
            ar = 2,
            lr = 3,
            ur = 4,
            cr = 5,
            dr = 6,
            hr = 7,
            pr = 8;
        Ci = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
            var e;
            for (e = 0; e < this.length; ++e)
                if (this[e] === t) return e;
            return -1
        };
        var fr = Ci;
        z("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), z("MMM", 0, 0, function(t) {
            return this.localeData().monthsShort(this, t)
        }), z("MMMM", 0, 0, function(t) {
            return this.localeData().months(this, t)
        }), F("month", "M"), N("month", 8), J("M", Bi), J("MM", Bi, Ui), J("MMM", function(t, e) {
            return e.monthsShortRegex(t)
        }), J("MMMM", function(t, e) {
            return e.monthsRegex(t)
        }), et(["M", "MM"], function(t, e) {
            e[sr] = w(t) - 1
        }), et(["MMM", "MMMM"], function(t, e, n, i) {
            var r = n._locale.monthsParse(t, i, n._strict);
            null != r ? e[sr] = r : p(n).invalidMonth = t
        });
        var gr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            mr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            vr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            yr = nr,
            br = nr;
        z("Y", 0, 0, function() {
            var t = this.year();
            return t <= 9999 ? "" + t : "+" + t
        }), z(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), z(0, ["YYYY", 4], 0, "year"), z(0, ["YYYYY", 5], 0, "year"), z(0, ["YYYYYY", 6, !0], 0, "year"), F("year", "y"), N("year", 1), J("Y", Ki), J("YY", Bi, Ui), J("YYYY", Xi, qi), J("YYYYY", Qi, Yi), J("YYYYYY", Qi, Yi), et(["YYYYY", "YYYYYY"], or), et("YYYY", function(e, n) {
            n[or] = 2 === e.length ? t.parseTwoDigitYear(e) : w(e)
        }), et("YY", function(e, n) {
            n[or] = t.parseTwoDigitYear(e)
        }), et("Y", function(t, e) {
            e[or] = parseInt(t, 10)
        }), t.parseTwoDigitYear = function(t) {
            return w(t) + (w(t) > 68 ? 1900 : 2e3)
        };
        var wr = H("FullYear", !0);
        z("w", ["ww", 2], "wo", "week"), z("W", ["WW", 2], "Wo", "isoWeek"), F("week", "w"), F("isoWeek", "W"), N("week", 5), N("isoWeek", 5), J("w", Bi), J("ww", Bi, Ui), J("W", Bi), J("WW", Bi, Ui), nt(["w", "ww", "W", "WW"], function(t, e, n, i) {
            e[i.substr(0, 1)] = w(t)
        });
        var Sr = {
            dow: 0,
            doy: 6
        };
        z("d", 0, "do", "day"), z("dd", 0, 0, function(t) {
            return this.localeData().weekdaysMin(this, t)
        }), z("ddd", 0, 0, function(t) {
            return this.localeData().weekdaysShort(this, t)
        }), z("dddd", 0, 0, function(t) {
            return this.localeData().weekdays(this, t)
        }), z("e", 0, 0, "weekday"), z("E", 0, 0, "isoWeekday"), F("day", "d"), F("weekday", "e"), F("isoWeekday", "E"), N("day", 11), N("weekday", 11), N("isoWeekday", 11), J("d", Bi), J("e", Bi), J("E", Bi), J("dd", function(t, e) {
            return e.weekdaysMinRegex(t)
        }), J("ddd", function(t, e) {
            return e.weekdaysShortRegex(t)
        }), J("dddd", function(t, e) {
            return e.weekdaysRegex(t)
        }), nt(["dd", "ddd", "dddd"], function(t, e, n, i) {
            var r = n._locale.weekdaysParse(t, i, n._strict);
            null != r ? e.d = r : p(n).invalidWeekday = t
        }), nt(["d", "e", "E"], function(t, e, n, i) {
            e[i] = w(t)
        });
        var _r = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            Tr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            xr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            kr = nr,
            Cr = nr,
            Dr = nr;
        z("H", ["HH", 2], 0, "hour"), z("h", ["hh", 2], 0, qt), z("k", ["kk", 2], 0, Yt), z("hmm", 0, 0, function() {
            return "" + qt.apply(this) + B(this.minutes(), 2)
        }), z("hmmss", 0, 0, function() {
            return "" + qt.apply(this) + B(this.minutes(), 2) + B(this.seconds(), 2)
        }), z("Hmm", 0, 0, function() {
            return "" + this.hours() + B(this.minutes(), 2)
        }), z("Hmmss", 0, 0, function() {
            return "" + this.hours() + B(this.minutes(), 2) + B(this.seconds(), 2)
        }), Bt("a", !0), Bt("A", !1), F("hour", "h"), N("hour", 13), J("a", zt), J("A", zt), J("H", Bi), J("h", Bi), J("k", Bi), J("HH", Bi, Ui), J("hh", Bi, Ui), J("kk", Bi, Ui), J("hmm", zi), J("hmmss", Vi), J("Hmm", zi), J("Hmmss", Vi), et(["H", "HH"], lr), et(["k", "kk"], function(t, e, n) {
            var i = w(t);
            e[lr] = 24 === i ? 0 : i
        }), et(["a", "A"], function(t, e, n) {
            n._isPm = n._locale.isPM(t), n._meridiem = t
        }), et(["h", "hh"], function(t, e, n) {
            e[lr] = w(t), p(n).bigHour = !0
        }), et("hmm", function(t, e, n) {
            var i = t.length - 2;
            e[lr] = w(t.substr(0, i)), e[ur] = w(t.substr(i)), p(n).bigHour = !0
        }), et("hmmss", function(t, e, n) {
            var i = t.length - 4,
                r = t.length - 2;
            e[lr] = w(t.substr(0, i)), e[ur] = w(t.substr(i, 2)), e[cr] = w(t.substr(r)), p(n).bigHour = !0
        }), et("Hmm", function(t, e, n) {
            var i = t.length - 2;
            e[lr] = w(t.substr(0, i)), e[ur] = w(t.substr(i))
        }), et("Hmmss", function(t, e, n) {
            var i = t.length - 4,
                r = t.length - 2;
            e[lr] = w(t.substr(0, i)), e[ur] = w(t.substr(i, 2)), e[cr] = w(t.substr(r))
        });
        var Ar, $r = /[ap]\.?m?\.?/i,
            Mr = H("Hours", !0),
            Er = {
                calendar: Ai,
                longDateFormat: $i,
                invalidDate: Mi,
                ordinal: Ei,
                dayOfMonthOrdinalParse: Oi,
                relativeTime: Pi,
                months: mr,
                monthsShort: vr,
                week: Sr,
                weekdays: _r,
                weekdaysMin: xr,
                weekdaysShort: Tr,
                meridiemParse: $r
            },
            Or = {},
            Pr = {},
            Ir = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Fr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            jr = /Z|[+-]\d\d(?::?\d\d)?/,
            Lr = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            Nr = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            Rr = /^\/?Date\((\-?\d+)/i,
            Hr = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
        t.createFromInputFallback = T("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
            t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
        }), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
        var Ur = T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var t = be.apply(null, arguments);
                return this.isValid() && t.isValid() ? t < this ? this : t : g()
            }),
            Wr = T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var t = be.apply(null, arguments);
                return this.isValid() && t.isValid() ? t > this ? this : t : g()
            }),
            qr = function() {
                return Date.now ? Date.now() : +new Date
            },
            Yr = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
        $e("Z", ":"), $e("ZZ", ""), J("Z", tr), J("ZZ", tr), et(["Z", "ZZ"], function(t, e, n) {
            n._useUTC = !0, n._tzm = Me(tr, t)
        });
        var Br = /([\+\-]|\d\d)/gi;
        t.updateOffset = function() {};
        var zr = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Vr = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
        Ye.fn = Ce.prototype, Ye.invalid = ke;
        var Gr = Ge(1, "add"),
            Xr = Ge(-1, "subtract");
        t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var Qr = T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
            return void 0 === t ? this.localeData() : this.locale(t)
        });
        z(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), z(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), Mn("gggg", "weekYear"), Mn("ggggg", "weekYear"), Mn("GGGG", "isoWeekYear"), Mn("GGGGG", "isoWeekYear"), F("weekYear", "gg"), F("isoWeekYear", "GG"), N("weekYear", 1), N("isoWeekYear", 1), J("G", Ki), J("g", Ki), J("GG", Bi, Ui), J("gg", Bi, Ui), J("GGGG", Xi, qi), J("gggg", Xi, qi), J("GGGGG", Qi, Yi), J("ggggg", Qi, Yi), nt(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
            e[i.substr(0, 2)] = w(t)
        }), nt(["gg", "GG"], function(e, n, i, r) {
            n[r] = t.parseTwoDigitYear(e)
        }), z("Q", 0, "Qo", "quarter"), F("quarter", "Q"), N("quarter", 7), J("Q", Hi), et("Q", function(t, e) {
            e[sr] = 3 * (w(t) - 1)
        }), z("D", ["DD", 2], "Do", "date"), F("date", "D"), N("date", 9), J("D", Bi), J("DD", Bi, Ui), J("Do", function(t, e) {
            return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
        }), et(["D", "DD"], ar), et("Do", function(t, e) {
            e[ar] = w(t.match(Bi)[0], 10)
        });
        var Jr = H("Date", !0);
        z("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), F("dayOfYear", "DDD"), N("dayOfYear", 4), J("DDD", Gi), J("DDDD", Wi), et(["DDD", "DDDD"], function(t, e, n) {
            n._dayOfYear = w(t)
        }), z("m", ["mm", 2], 0, "minute"), F("minute", "m"), N("minute", 14), J("m", Bi), J("mm", Bi, Ui), et(["m", "mm"], ur);
        var Kr = H("Minutes", !1);
        z("s", ["ss", 2], 0, "second"), F("second", "s"), N("second", 15), J("s", Bi), J("ss", Bi, Ui), et(["s", "ss"], cr);
        var Zr = H("Seconds", !1);
        z("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), z(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), z(0, ["SSS", 3], 0, "millisecond"), z(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), z(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), z(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), z(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), z(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), z(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), F("millisecond", "ms"), N("millisecond", 16), J("S", Gi, Hi), J("SS", Gi, Ui), J("SSS", Gi, Wi);
        var to;
        for (to = "SSSS"; to.length <= 9; to += "S") J(to, Ji);
        for (to = "S"; to.length <= 9; to += "S") et(to, Rn);
        var eo = H("Milliseconds", !1);
        z("z", 0, 0, "zoneAbbr"), z("zz", 0, 0, "zoneName");
        var no = v.prototype;
        no.add = Gr, no.calendar = Je, no.clone = Ke, no.diff = sn, no.endOf = bn, no.format = dn, no.from = hn, no.fromNow = pn, no.to = fn, no.toNow = gn, no.get = q, no.invalidAt = An, no.isAfter = Ze, no.isBefore = tn, no.isBetween = en, no.isSame = nn, no.isSameOrAfter = rn, no.isSameOrBefore = on, no.isValid = Cn, no.lang = Qr, no.locale = mn, no.localeData = vn, no.max = Wr, no.min = Ur, no.parsingFlags = Dn, no.set = Y, no.startOf = yn, no.subtract = Xr, no.toArray = Tn, no.toObject = xn, no.toDate = _n, no.toISOString = un, no.inspect = cn, no.toJSON = kn, no.toString = ln, no.unix = Sn, no.valueOf = wn, no.creationData = $n, no.year = wr, no.isLeapYear = vt, no.weekYear = En, no.isoWeekYear = On, no.quarter = no.quarters = Ln, no.month = ct, no.daysInMonth = dt, no.week = no.weeks = Dt, no.isoWeek = no.isoWeeks = At, no.weeksInYear = In, no.isoWeeksInYear = Pn, no.date = Jr, no.day = no.days = jt, no.weekday = Lt, no.isoWeekday = Nt, no.dayOfYear = Nn, no.hour = no.hours = Mr, no.minute = no.minutes = Kr, no.second = no.seconds = Zr, no.millisecond = no.milliseconds = eo, no.utcOffset = Pe, no.utc = Fe, no.local = je, no.parseZone = Le, no.hasAlignedHourOffset = Ne, no.isDST = Re, no.isLocal = Ue, no.isUtcOffset = We, no.isUtc = qe, no.isUTC = qe, no.zoneAbbr = Hn, no.zoneName = Un, no.dates = T("dates accessor is deprecated. Use date instead.", Jr), no.months = T("months accessor is deprecated. Use month instead", ct), no.years = T("years accessor is deprecated. Use year instead", wr), no.zone = T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ie), no.isDSTShifted = T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", He);
        var io = A.prototype;
        io.calendar = $, io.longDateFormat = M, io.invalidDate = E, io.ordinal = O, io.preparse = Yn, io.postformat = Yn, io.relativeTime = P, io.pastFuture = I, io.set = C, io.months = ot, io.monthsShort = st, io.monthsParse = lt, io.monthsRegex = pt, io.monthsShortRegex = ht, io.week = xt, io.firstDayOfYear = Ct, io.firstDayOfWeek = kt, io.weekdays = Et, io.weekdaysMin = Pt, io.weekdaysShort = Ot, io.weekdaysParse = Ft, io.weekdaysRegex = Rt, io.weekdaysShortRegex = Ht, io.weekdaysMinRegex = Ut, io.isPM = Vt, io.meridiem = Gt, Kt("en", {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(t) {
                var e = t % 10,
                    n = 1 === w(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                return t + n
            }
        }), t.lang = T("moment.lang is deprecated. Use moment.locale instead.", Kt), t.langData = T("moment.langData is deprecated. Use moment.localeData instead.", ee);
        var ro = Math.abs,
            oo = ui("ms"),
            so = ui("s"),
            ao = ui("m"),
            lo = ui("h"),
            uo = ui("d"),
            co = ui("w"),
            ho = ui("M"),
            po = ui("y"),
            fo = di("milliseconds"),
            go = di("seconds"),
            mo = di("minutes"),
            vo = di("hours"),
            yo = di("days"),
            bo = di("months"),
            wo = di("years"),
            So = Math.round,
            _o = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            To = Math.abs,
            xo = Ce.prototype;
        return xo.isValid = xe, xo.abs = Zn, xo.add = ei, xo.subtract = ni, xo.as = ai, xo.asMilliseconds = oo, xo.asSeconds = so, xo.asMinutes = ao, xo.asHours = lo, xo.asDays = uo, xo.asWeeks = co, xo.asMonths = ho, xo.asYears = po, xo.valueOf = li, xo._bubble = ri, xo.get = ci, xo.milliseconds = fo, xo.seconds = go, xo.minutes = mo, xo.hours = vo, xo.days = yo, xo.weeks = hi, xo.months = bo, xo.years = wo, xo.humanize = vi, xo.toISOString = yi, xo.toString = yi, xo.toJSON = yi, xo.locale = mn, xo.localeData = vn, xo.toIsoString = T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", yi), xo.lang = Qr, z("X", 0, 0, "unix"), z("x", 0, 0, "valueOf"), J("x", Ki), J("X", er), et("X", function(t, e, n) {
            n._d = new Date(1e3 * parseFloat(t, 10))
        }), et("x", function(t, e, n) {
            n._d = new Date(w(t))
        }), t.version = "2.18.1", e(be), t.fn = no, t.min = Se, t.max = _e, t.now = qr, t.utc = d, t.unix = Wn, t.months = Gn, t.isDate = a, t.locale = Kt, t.invalid = g, t.duration = Ye, t.isMoment = y, t.weekdays = Qn, t.parseZone = qn, t.localeData = ee, t.isDuration = De, t.monthsShort = Xn, t.weekdaysMin = Kn, t.defineLocale = Zt, t.updateLocale = te, t.locales = ne, t.weekdaysShort = Jn, t.normalizeUnits = j, t.relativeTimeRounding = gi, t.relativeTimeThreshold = mi, t.calendarFormat = Qe, t.prototype = no, t
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        t.extend(t.fn, {
            validate: function(e) {
                if (!this.length) return void(e && e.debug && window.console);
                var n = t.data(this[0], "validator");
                return n ? n : (this.attr("novalidate", "novalidate"), n = new t.validator(e, this[0]), t.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                    n.settings.submitHandler && (n.submitButton = e.target), t(e.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (n.cancelSubmit = !0)
                }), this.submit(function(e) {
                    function i() {
                        var i, r;
                        return !n.settings.submitHandler || (n.submitButton && (i = t("<input type='hidden'/>").attr("name", n.submitButton.name).val(t(n.submitButton).val()).appendTo(n.currentForm)), r = n.settings.submitHandler.call(n, n.currentForm, e), n.submitButton && i.remove(), void 0 !== r && r)
                    }
                    return n.settings.debug && e.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
                })), n)
            },
            valid: function() {
                var e, n;
                return t(this[0]).is("form") ? e = this.validate().form() : (e = !0, n = t(this[0].form).validate(), this.each(function() {
                    e = n.element(this) && e
                })), e
            },
            removeAttrs: function(e) {
                var n = {},
                    i = this;
                return t.each(e.split(/\s/), function(t, e) {
                    n[e] = i.attr(e), i.removeAttr(e)
                }), n
            },
            rules: function(e, n) {
                var i, r, o, s, a, l, u = this[0];
                if (e) switch (i = t.data(u.form, "validator").settings, r = i.rules, o = t.validator.staticRules(u), e) {
                    case "add":
                        t.extend(o, t.validator.normalizeRule(n)), delete o.messages, r[u.name] = o, n.messages && (i.messages[u.name] = t.extend(i.messages[u.name], n.messages));
                        break;
                    case "remove":
                        return n ? (l = {}, t.each(n.split(/\s/), function(e, n) {
                            l[n] = o[n], delete o[n], "required" === n && t(u).removeAttr("aria-required")
                        }), l) : (delete r[u.name], o)
                }
                return s = t.validator.normalizeRules(t.extend({}, t.validator.classRules(u), t.validator.attributeRules(u), t.validator.dataRules(u), t.validator.staticRules(u)), u), s.required && (a = s.required, delete s.required, s = t.extend({
                    required: a
                }, s), t(u).attr("aria-required", "true")), s.remote && (a = s.remote, delete s.remote, s = t.extend(s, {
                    remote: a
                })), s
            }
        }), t.extend(t.expr[":"], {
            blank: function(e) {
                return !t.trim("" + t(e).val())
            },
            filled: function(e) {
                return !!t.trim("" + t(e).val())
            },
            unchecked: function(e) {
                return !t(e).prop("checked")
            }
        }), t.validator = function(e, n) {
            this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = n, this.init()
        }, t.validator.format = function(e, n) {
            return 1 === arguments.length ? function() {
                var n = t.makeArray(arguments);
                return n.unshift(e), t.validator.format.apply(this, n)
            } : (arguments.length > 2 && n.constructor !== Array && (n = t.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), t.each(n, function(t, n) {
                e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                    return n
                })
            }), e)
        }, t.extend(t.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: t([]),
                errorLabelContainer: t([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(t) {
                    this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
                },
                onfocusout: function(t) {
                    this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
                },
                onkeyup: function(t, e) {
                    9 === e.which && "" === this.elementValue(t) || (t.name in this.submitted || t === this.lastElement) && this.element(t)
                },
                onclick: function(t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function(e, n, i) {
                    "radio" === e.type ? this.findByName(e.name).addClass(n).removeClass(i) : t(e).addClass(n).removeClass(i)
                },
                unhighlight: function(e, n, i) {
                    "radio" === e.type ? this.findByName(e.name).removeClass(n).addClass(i) : t(e).removeClass(n).addClass(i)
                }
            },
            setDefaults: function(e) {
                t.extend(t.validator.defaults, e)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: t.validator.format("Please enter no more than {0} characters."),
                minlength: t.validator.format("Please enter at least {0} characters."),
                rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
                range: t.validator.format("Please enter a value between {0} and {1}."),
                max: t.validator.format("Please enter a value less than or equal to {0}."),
                min: t.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function e(e) {
                        var n = t.data(this[0].form, "validator"),
                            i = "on" + e.type.replace(/^validate/, ""),
                            r = n.settings;
                        r[i] && !this.is(r.ignore) && r[i].call(n, this[0], e)
                    }
                    this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var n, i = this.groups = {};
                    t.each(this.settings.groups, function(e, n) {
                        "string" == typeof n && (n = n.split(/\s/)), t.each(n, function(t, n) {
                            i[n] = e
                        })
                    }), n = this.settings.rules, t.each(n, function(e, i) {
                        n[e] = t.validator.normalizeRule(i)
                    }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", e).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function() {
                    return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function(e) {
                    var n = this.clean(e),
                        i = this.validationTargetFor(n),
                        r = !0;
                    return this.lastElement = i, void 0 === i ? delete this.invalid[n.name] : (this.prepareElement(i), this.currentElements = t(i), r = this.check(i) !== !1, r ? delete this.invalid[i.name] : this.invalid[i.name] = !0), t(e).attr("aria-invalid", !r), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r
                },
                showErrors: function(e) {
                    if (e) {
                        t.extend(this.errorMap, e), this.errorList = [];
                        for (var n in e) this.errorList.push({
                            message: e[n],
                            element: this.findByName(n)[0]
                        });
                        this.successList = t.grep(this.successList, function(t) {
                            return !(t.name in e)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(t) {
                    var e, n = 0;
                    for (e in t) n++;
                    return n
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(t) {
                    t.not(this.containers).text(""), this.addWrapper(t).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
                },
                findLastActive: function() {
                    var e = this.lastActive;
                    return e && 1 === t.grep(this.errorList, function(t) {
                        return t.element.name === e.name
                    }).length && e
                },
                elements: function() {
                    var e = this,
                        n = {};
                    return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function() {
                        return !this.name && e.settings.debug && window.console, !(this.name in n || !e.objectLength(t(this).rules())) && (n[this.name] = !0, !0)
                    })
                },
                clean: function(e) {
                    return t(e)[0]
                },
                errors: function() {
                    var e = this.settings.errorClass.split(" ").join(".");
                    return t(this.settings.errorElement + "." + e, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                elementValue: function(e) {
                    var n, i = t(e),
                        r = e.type;
                    return "radio" === r || "checkbox" === r ? t("input[name='" + e.name + "']:checked").val() : "number" === r && "undefined" != typeof e.validity ? !e.validity.badInput && i.val() : (n = i.val(), "string" == typeof n ? n.replace(/\r/g, "") : n)
                },
                check: function(e) {
                    e = this.validationTargetFor(this.clean(e));
                    var n, i, r, o = t(e).rules(),
                        s = t.map(o, function(t, e) {
                            return e
                        }).length,
                        a = !1,
                        l = this.elementValue(e);
                    for (i in o) {
                        r = {
                            method: i,
                            parameters: o[i]
                        };
                        try {
                            if (n = t.validator.methods[i].call(this, l, e, r.parameters), "dependency-mismatch" === n && 1 === s) {
                                a = !0;
                                continue
                            }
                            if (a = !1,
                                "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!n) return this.formatAndAdd(e, r), !1
                        } catch (u) {
                            throw this.settings.debug && window.console, u
                        }
                    }
                    if (!a) return this.objectLength(o) && this.successList.push(e), !0
                },
                customDataMessage: function(e, n) {
                    return t(e).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || t(e).data("msg")
                },
                customMessage: function(t, e) {
                    var n = this.settings.messages[t];
                    return n && (n.constructor === String ? n : n[e])
                },
                findDefined: function() {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t]
                },
                defaultMessage: function(e, n) {
                    return this.findDefined(this.customMessage(e.name, n), this.customDataMessage(e, n), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[n], "<strong>Warning: No message defined for " + e.name + "</strong>")
                },
                formatAndAdd: function(e, n) {
                    var i = this.defaultMessage(e, n.method),
                        r = /\$?\{(\d+)\}/g;
                    "function" == typeof i ? i = i.call(this, n.parameters, e) : r.test(i) && (i = t.validator.format(i.replace(r, "{$1}"), n.parameters)), this.errorList.push({
                        message: i,
                        element: e,
                        method: n.method
                    }), this.errorMap[e.name] = i, this.submitted[e.name] = i
                },
                addWrapper: function(t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function() {
                    var t, e, n;
                    for (t = 0; this.errorList[t]; t++) n = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return t(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(e, n) {
                    var i, r, o, s = this.errorsFor(e),
                        a = this.idOrName(e),
                        l = t(e).attr("aria-describedby");
                    s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(n)) : (s = t("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(n || ""), i = s, this.settings.wrapper && (i = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement(i, t(e)) : i.insertAfter(e), s.is("label") ? s.attr("for", a) : 0 === s.parents("label[for='" + a + "']").length && (o = s.attr("id").replace(/(:|\.|\[|\])/g, "\\$1"), l ? l.match(new RegExp("\\b" + o + "\\b")) || (l += " " + o) : l = o, t(e).attr("aria-describedby", l), r = this.groups[e.name], r && t.each(this.groups, function(e, n) {
                        n === r && t("[name='" + e + "']", this.currentForm).attr("aria-describedby", s.attr("id"))
                    }))), !n && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
                },
                errorsFor: function(e) {
                    var n = this.idOrName(e),
                        i = t(e).attr("aria-describedby"),
                        r = "label[for='" + n + "'], label[for='" + n + "'] *";
                    return i && (r = r + ", #" + i.replace(/\s+/g, ", #")), this.errors().filter(r)
                },
                idOrName: function(t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                },
                validationTargetFor: function(e) {
                    return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
                },
                checkable: function(t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function(e) {
                    return t(this.currentForm).find("[name='" + e + "']")
                },
                getLength: function(e, n) {
                    switch (n.nodeName.toLowerCase()) {
                        case "select":
                            return t("option:selected", n).length;
                        case "input":
                            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                    }
                    return e.length
                },
                depend: function(t, e) {
                    return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
                },
                dependTypes: {
                    "boolean": function(t) {
                        return t
                    },
                    string: function(e, n) {
                        return !!t(e, n.form).length
                    },
                    "function": function(t, e) {
                        return t(e)
                    }
                },
                optional: function(e) {
                    var n = this.elementValue(e);
                    return !t.validator.methods.required.call(this, n, e) && "dependency-mismatch"
                },
                startRequest: function(t) {
                    this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
                },
                stopRequest: function(e, n) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(e) {
                    return t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(e, n) {
                e.constructor === String ? this.classRuleSettings[e] = n : t.extend(this.classRuleSettings, e)
            },
            classRules: function(e) {
                var n = {},
                    i = t(e).attr("class");
                return i && t.each(i.split(" "), function() {
                    this in t.validator.classRuleSettings && t.extend(n, t.validator.classRuleSettings[this])
                }), n
            },
            attributeRules: function(e) {
                var n, i, r = {},
                    o = t(e),
                    s = e.getAttribute("type");
                for (n in t.validator.methods) "required" === n ? (i = e.getAttribute(n), "" === i && (i = !0), i = !!i) : i = o.attr(n), /min|max/.test(n) && (null === s || /number|range|text/.test(s)) && (i = Number(i)), i || 0 === i ? r[n] = i : s === n && "range" !== s && (r[n] = !0);
                return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
            },
            dataRules: function(e) {
                var n, i, r = {},
                    o = t(e);
                for (n in t.validator.methods) i = o.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()), void 0 !== i && (r[n] = i);
                return r
            },
            staticRules: function(e) {
                var n = {},
                    i = t.data(e.form, "validator");
                return i.settings.rules && (n = t.validator.normalizeRule(i.settings.rules[e.name]) || {}), n
            },
            normalizeRules: function(e, n) {
                return t.each(e, function(i, r) {
                    if (r === !1) return void delete e[i];
                    if (r.param || r.depends) {
                        var o = !0;
                        switch (typeof r.depends) {
                            case "string":
                                o = !!t(r.depends, n.form).length;
                                break;
                            case "function":
                                o = r.depends.call(n, n)
                        }
                        o ? e[i] = void 0 === r.param || r.param : delete e[i]
                    }
                }), t.each(e, function(i, r) {
                    e[i] = t.isFunction(r) ? r(n) : r
                }), t.each(["minlength", "maxlength"], function() {
                    e[this] && (e[this] = Number(e[this]))
                }), t.each(["rangelength", "range"], function() {
                    var n;
                    e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (n = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(n[0]), Number(n[1])]))
                }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
            },
            normalizeRule: function(e) {
                if ("string" == typeof e) {
                    var n = {};
                    t.each(e.split(/\s/), function() {
                        n[this] = !0
                    }), e = n
                }
                return e
            },
            addMethod: function(e, n, i) {
                t.validator.methods[e] = n, t.validator.messages[e] = void 0 !== i ? i : t.validator.messages[e], n.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
            },
            methods: {
                required: function(e, n, i) {
                    if (!this.depend(i, n)) return "dependency-mismatch";
                    if ("select" === n.nodeName.toLowerCase()) {
                        var r = t(n).val();
                        return r && r.length > 0
                    }
                    return this.checkable(n) ? this.getLength(e, n) > 0 : t.trim(e).length > 0
                },
                email: function(t, e) {
                    return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
                },
                url: function(t, e) {
                    return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
                },
                date: function(t, e) {
                    return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
                },
                dateISO: function(t, e) {
                    return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
                },
                number: function(t, e) {
                    return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                },
                digits: function(t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                creditcard: function(t, e) {
                    if (this.optional(e)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(t)) return !1;
                    var n, i, r = 0,
                        o = 0,
                        s = !1;
                    if (t = t.replace(/\D/g, ""), t.length < 13 || t.length > 19) return !1;
                    for (n = t.length - 1; n >= 0; n--) i = t.charAt(n), o = parseInt(i, 10), s && (o *= 2) > 9 && (o -= 9), r += o, s = !s;
                    return r % 10 === 0
                },
                minlength: function(e, n, i) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, n);
                    return this.optional(n) || r >= i
                },
                maxlength: function(e, n, i) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, n);
                    return this.optional(n) || r <= i
                },
                rangelength: function(e, n, i) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, n);
                    return this.optional(n) || r >= i[0] && r <= i[1]
                },
                min: function(t, e, n) {
                    return this.optional(e) || t >= n
                },
                max: function(t, e, n) {
                    return this.optional(e) || t <= n
                },
                range: function(t, e, n) {
                    return this.optional(e) || t >= n[0] && t <= n[1]
                },
                equalTo: function(e, n, i) {
                    var r = t(i);
                    return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        t(n).valid()
                    }), e === r.val()
                },
                remote: function(e, n, i) {
                    if (this.optional(n)) return "dependency-mismatch";
                    var r, o, s = this.previousValue(n);
                    return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), s.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = s.message, i = "string" == typeof i && {
                        url: i
                    } || i, s.old === e ? s.valid : (s.old = e, r = this, this.startRequest(n), o = {}, o[n.name] = e, t.ajax(t.extend(!0, {
                        url: i,
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: o,
                        context: r.currentForm,
                        success: function(i) {
                            var o, a, l, u = i === !0 || "true" === i;
                            r.settings.messages[n.name].remote = s.originalMessage, u ? (l = r.formSubmitted, r.prepareElement(n), r.formSubmitted = l, r.successList.push(n), delete r.invalid[n.name], r.showErrors()) : (o = {}, a = i || r.defaultMessage(n, "remote"), o[n.name] = s.message = t.isFunction(a) ? a(e) : a, r.invalid[n.name] = !0, r.showErrors(o)), s.valid = u, r.stopRequest(n, u)
                        }
                    }, i)), "pending")
                }
            }
        }), t.format = function() {
            throw "$.format has been deprecated. Please use $.validator.format instead."
        };
        var e, n = {};
        t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, i) {
            var r = t.port;
            "abort" === t.mode && (n[r] && n[r].abort(), n[r] = i)
        }) : (e = t.ajax, t.ajax = function(i) {
            var r = ("mode" in i ? i : t.ajaxSettings).mode,
                o = ("port" in i ? i : t.ajaxSettings).port;
            return "abort" === r ? (n[o] && n[o].abort(), n[o] = e.apply(this, arguments), n[o]) : e.apply(this, arguments)
        }), t.extend(t.fn, {
            validateDelegate: function(e, n, i) {
                return this.bind(n, function(n) {
                    var r = t(n.target);
                    if (r.is(e)) return i.apply(r, arguments)
                })
            }
        })
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(e) : "undefined" != typeof exports ? module.exports = e() : t.simpleStorage = e()
    }(this, function() {
        "use strict";

        function t() {
            g = u(), i(), s(), e(), "addEventListener" in window && window.addEventListener("pageshow", function(t) {
                t.persisted && n()
            }, !1), g = !0
        }

        function e() {
            "addEventListener" in window ? window.addEventListener("storage", n, !1) : document.attachEvent("onstorage", n)
        }

        function n() {
            try {
                i()
            } catch (t) {
                return void(g = !1)
            }
            s()
        }

        function i() {
            var t = localStorage.getItem("simpleStorage");
            try {
                p = JSON.parse(t) || {}
            } catch (e) {
                p = {}
            }
            f = o()
        }

        function r() {
            try {
                localStorage.setItem("simpleStorage", JSON.stringify(p)), f = o()
            } catch (t) {
                return c(t)
            }
            return !0
        }

        function o() {
            var t = localStorage.getItem("simpleStorage");
            return t ? String(t).length : 0
        }

        function s() {
            var t, e, n, i, o, a = 1 / 0,
                u = 0;
            if (clearTimeout(m), p && p.__simpleStorage_meta && p.__simpleStorage_meta.TTL) {
                for (t = +new Date, o = p.__simpleStorage_meta.TTL.keys || [], i = p.__simpleStorage_meta.TTL.expire || {}, e = 0, n = o.length; e < n; e++) {
                    if (!(i[o[e]] <= t)) {
                        i[o[e]] < a && (a = i[o[e]]);
                        break
                    }
                    u++, delete p[o[e]], delete i[o[e]]
                }
                a !== 1 / 0 && (m = setTimeout(s, Math.min(a - t, 2147483647))), u && (o.splice(0, u), l(), r())
            }
        }

        function a(t, e) {
            var n, i, r = +new Date,
                o = !1;
            if (e = Number(e) || 0, 0 !== e) {
                if (!p.hasOwnProperty(t)) return !1;
                if (p.__simpleStorage_meta || (p.__simpleStorage_meta = {}), p.__simpleStorage_meta.TTL || (p.__simpleStorage_meta.TTL = {
                        expire: {},
                        keys: []
                    }), p.__simpleStorage_meta.TTL.expire[t] = r + e, p.__simpleStorage_meta.TTL.expire.hasOwnProperty(t))
                    for (n = 0, i = p.__simpleStorage_meta.TTL.keys.length; n < i; n++) p.__simpleStorage_meta.TTL.keys[n] === t && p.__simpleStorage_meta.TTL.keys.splice(n);
                for (n = 0, i = p.__simpleStorage_meta.TTL.keys.length; n < i; n++)
                    if (p.__simpleStorage_meta.TTL.expire[p.__simpleStorage_meta.TTL.keys[n]] > r + e) {
                        p.__simpleStorage_meta.TTL.keys.splice(n, 0, t), o = !0;
                        break
                    }
                o || p.__simpleStorage_meta.TTL.keys.push(t)
            } else if (p && p.__simpleStorage_meta && p.__simpleStorage_meta.TTL) {
                if (p.__simpleStorage_meta.TTL.expire.hasOwnProperty(t))
                    for (delete p.__simpleStorage_meta.TTL.expire[t], n = 0, i = p.__simpleStorage_meta.TTL.keys.length; n < i; n++)
                        if (p.__simpleStorage_meta.TTL.keys[n] === t) {
                            p.__simpleStorage_meta.TTL.keys.splice(n, 1);
                            break
                        }
                l()
            }
            return clearTimeout(m), p && p.__simpleStorage_meta && p.__simpleStorage_meta.TTL && p.__simpleStorage_meta.TTL.keys.length && (m = setTimeout(s, Math.min(Math.max(p.__simpleStorage_meta.TTL.expire[p.__simpleStorage_meta.TTL.keys[0]] - r, 0), 2147483647))), !0
        }

        function l() {
            var t, e = !1,
                n = !1;
            if (!p || !p.__simpleStorage_meta) return e;
            p.__simpleStorage_meta.TTL && !p.__simpleStorage_meta.TTL.keys.length && (delete p.__simpleStorage_meta.TTL, e = !0);
            for (t in p.__simpleStorage_meta)
                if (p.__simpleStorage_meta.hasOwnProperty(t)) {
                    n = !0;
                    break
                }
            return n || (delete p.__simpleStorage_meta, e = !0), e
        }

        function u() {
            var t, e = 0;
            if (null === window.localStorage || "unknown" == typeof window.localStorage) throw t = new Error("localStorage is disabled"), t.code = b, t;
            if (!window.localStorage) throw t = new Error("localStorage not supported"), t.code = y, t;
            try {
                e = window.localStorage.length
            } catch (n) {
                throw c(n)
            }
            try {
                window.localStorage.setItem("__simpleStorageInitTest", (+new Date).toString(16)), window.localStorage.removeItem("__simpleStorageInitTest")
            } catch (n) {
                throw e ? c(n) : (t = new Error("localStorage is disabled"), t.code = b, t)
            }
            return !0
        }

        function c(t) {
            var e;
            return 22 === t.code || 1014 === t.code || [-2147024882, -2146828281, -21474675259].indexOf(t.number) > 0 ? (e = new Error("localStorage quota exceeded"), e.code = w, e) : 18 === t.code || 1e3 === t.code ? (e = new Error("localStorage is disabled"), e.code = b, e) : "TypeError" === t.name ? (e = new Error("localStorage is disabled"), e.code = b, e) : t
        }

        function d(t) {
            if (!t) return v = "OK", t;
            switch (t.code) {
                case y:
                case b:
                case w:
                    v = t.code;
                    break;
                default:
                    v = t.code || t.number || t.message || t.name
            }
            return t
        }
        var h = "0.2.1",
            p = !1,
            f = 0,
            g = !1,
            m = null,
            v = "OK",
            y = "LS_NOT_AVAILABLE",
            b = "LS_DISABLED",
            w = "LS_QUOTA_EXCEEDED";
        try {
            t()
        } catch (S) {
            d(S)
        }
        return {
            version: h,
            status: v,
            canUse: function() {
                return "OK" === v && !!g
            },
            set: function(t, e, n) {
                if ("__simpleStorage_meta" === t) return !1;
                if (!p) return !1;
                if ("undefined" == typeof e) return this.deleteKey(t);
                n = n || {};
                try {
                    e = JSON.parse(JSON.stringify(e))
                } catch (i) {
                    return c(i)
                }
                return p[t] = e, a(t, n.TTL || 0), r()
            },
            hasKey: function(t) {
                return !!this.get(t)
            },
            get: function(t) {
                return !!p && (p.hasOwnProperty(t) && "__simpleStorage_meta" !== t && this.getTTL(t) ? p[t] : void 0)
            },
            deleteKey: function(t) {
                return !!p && (t in p && (delete p[t], a(t, 0), r()))
            },
            setTTL: function(t, e) {
                return !!p && (a(t, e), r())
            },
            getTTL: function(t) {
                var e;
                return !!p && (!!p.hasOwnProperty(t) && (p.__simpleStorage_meta && p.__simpleStorage_meta.TTL && p.__simpleStorage_meta.TTL.expire && p.__simpleStorage_meta.TTL.expire.hasOwnProperty(t) ? (e = Math.max(p.__simpleStorage_meta.TTL.expire[t] - +new Date || 0, 0), e || !1) : 1 / 0))
            },
            flush: function() {
                if (!p) return !1;
                p = {};
                try {
                    return localStorage.removeItem("simpleStorage"), !0
                } catch (t) {
                    return c(t)
                }
            },
            index: function() {
                if (!p) return !1;
                var t, e = [];
                for (t in p) p.hasOwnProperty(t) && "__simpleStorage_meta" !== t && e.push(t);
                return e
            },
            storageSize: function() {
                return f
            }
        }
    }),
    function(t) {
        "use strict";
        if ("function" == typeof bootstrap) bootstrap("promise", t);
        else if ("object" == typeof exports && "object" == typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define(t);
        else if ("undefined" != typeof ses) {
            if (!ses.ok()) return;
            ses.makeQ = t
        } else {
            if ("undefined" == typeof window && "undefined" == typeof self) throw new Error("This environment was not anticipated by Q. Please file a bug.");
            var e = "undefined" != typeof window ? window : self,
                n = e.Q;
            e.Q = t(), e.Q.noConflict = function() {
                return e.Q = n, this
            }
        }
    }(function() {
        "use strict";

        function t(t) {
            return function() {
                return G.apply(t, arguments)
            }
        }

        function e(t) {
            return t === Object(t)
        }

        function n(t) {
            return "[object StopIteration]" === nt(t) || t instanceof Y
        }

        function i(t, e) {
            if (U && e.stack && "object" == typeof t && null !== t && t.stack && t.stack.indexOf(it) === -1) {
                for (var n = [], i = e; i; i = i.source) i.stack && n.unshift(i.stack);
                n.unshift(t.stack);
                var o = n.join("\n" + it + "\n");
                t.stack = r(o)
            }
        }

        function r(t) {
            for (var e = t.split("\n"), n = [], i = 0; i < e.length; ++i) {
                var r = e[i];
                a(r) || o(r) || !r || n.push(r)
            }
            return n.join("\n")
        }

        function o(t) {
            return t.indexOf("(module.js:") !== -1 || t.indexOf("(node.js:") !== -1
        }

        function s(t) {
            var e = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
            if (e) return [e[1], Number(e[2])];
            var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
            if (n) return [n[1], Number(n[2])];
            var i = /.*@(.+):(\d+)$/.exec(t);
            return i ? [i[1], Number(i[2])] : void 0
        }

        function a(t) {
            var e = s(t);
            if (!e) return !1;
            var n = e[0],
                i = e[1];
            return n === q && i >= B && i <= lt
        }

        function l() {
            if (U) try {
                throw new Error
            } catch (t) {
                var e = t.stack.split("\n"),
                    n = e[0].indexOf("@") > 0 ? e[1] : e[2],
                    i = s(n);
                if (!i) return;
                return q = i[0], i[1]
            }
        }

        function u(t, e, n) {
            return function() {
                return "undefined" != typeof console && "function" == typeof console.warn, t.apply(t, arguments)
            }
        }

        function c(t) {
            return t instanceof f ? t : y(t) ? D(t) : C(t)
        }

        function d() {
            function t(t) {
                e = t, o.source = t, Q(n, function(e, n) {
                    c.nextTick(function() {
                        t.promiseDispatch.apply(t, n)
                    })
                }, void 0), n = void 0, i = void 0
            }
            var e, n = [],
                i = [],
                r = Z(d.prototype),
                o = Z(f.prototype);
            if (o.promiseDispatch = function(t, r, o) {
                    var s = X(arguments);
                    n ? (n.push(s), "when" === r && o[1] && i.push(o[1])) : c.nextTick(function() {
                        e.promiseDispatch.apply(e, s)
                    })
                }, o.valueOf = function() {
                    if (n) return o;
                    var t = m(e);
                    return v(t) && (e = t), t
                }, o.inspect = function() {
                    return e ? e.inspect() : {
                        state: "pending"
                    }
                }, c.longStackSupport && U) try {
                throw new Error
            } catch (s) {
                o.stack = s.stack.substring(s.stack.indexOf("\n") + 1)
            }
            return r.promise = o, r.resolve = function(n) {
                e || t(c(n))
            }, r.fulfill = function(n) {
                e || t(C(n))
            }, r.reject = function(n) {
                e || t(k(n))
            }, r.notify = function(t) {
                e || Q(i, function(e, n) {
                    c.nextTick(function() {
                        n(t)
                    })
                }, void 0)
            }, r
        }

        function h(t) {
            if ("function" != typeof t) throw new TypeError("resolver must be a function.");
            var e = d();
            try {
                t(e.resolve, e.reject, e.notify)
            } catch (n) {
                e.reject(n)
            }
            return e.promise
        }

        function p(t) {
            return h(function(e, n) {
                for (var i = 0, r = t.length; i < r; i++) c(t[i]).then(e, n)
            })
        }

        function f(t, e, n) {
            void 0 === e && (e = function(t) {
                return k(new Error("Promise does not support operation: " + t))
            }), void 0 === n && (n = function() {
                return {
                    state: "unknown"
                }
            });
            var i = Z(f.prototype);
            if (i.promiseDispatch = function(n, r, o) {
                    var s;
                    try {
                        s = t[r] ? t[r].apply(i, o) : e.call(i, r, o)
                    } catch (a) {
                        s = k(a)
                    }
                    n && n(s)
                }, i.inspect = n, n) {
                var r = n();
                "rejected" === r.state && (i.exception = r.reason), i.valueOf = function() {
                    var t = n();
                    return "pending" === t.state || "rejected" === t.state ? i : t.value
                }
            }
            return i
        }

        function g(t, e, n, i) {
            return c(t).then(e, n, i)
        }

        function m(t) {
            if (v(t)) {
                var e = t.inspect();
                if ("fulfilled" === e.state) return e.value
            }
            return t
        }

        function v(t) {
            return t instanceof f
        }

        function y(t) {
            return e(t) && "function" == typeof t.then
        }

        function b(t) {
            return v(t) && "pending" === t.inspect().state
        }

        function w(t) {
            return !v(t) || "fulfilled" === t.inspect().state
        }

        function S(t) {
            return v(t) && "rejected" === t.inspect().state
        }

        function _() {
            rt.length = 0, ot.length = 0, at || (at = !0)
        }

        function T(t, e) {
            at && ("object" == typeof process && "function" == typeof process.emit && c.nextTick.runAfter(function() {
                J(ot, t) !== -1 && (process.emit("unhandledRejection", e, t), st.push(t))
            }), ot.push(t), e && "undefined" != typeof e.stack ? rt.push(e.stack) : rt.push("(no stack) " + e))
        }

        function x(t) {
            if (at) {
                var e = J(ot, t);
                e !== -1 && ("object" == typeof process && "function" == typeof process.emit && c.nextTick.runAfter(function() {
                    var n = J(st, t);
                    n !== -1 && (process.emit("rejectionHandled", rt[e], t), st.splice(n, 1))
                }), ot.splice(e, 1), rt.splice(e, 1))
            }
        }

        function k(t) {
            var e = f({
                when: function(e) {
                    return e && x(this), e ? e(t) : this
                }
            }, function() {
                return this
            }, function() {
                return {
                    state: "rejected",
                    reason: t
                }
            });
            return T(e, t), e
        }

        function C(t) {
            return f({
                when: function() {
                    return t
                },
                get: function(e) {
                    return t[e]
                },
                set: function(e, n) {
                    t[e] = n
                },
                "delete": function(e) {
                    delete t[e]
                },
                post: function(e, n) {
                    return null === e || void 0 === e ? t.apply(void 0, n) : t[e].apply(t, n)
                },
                apply: function(e, n) {
                    return t.apply(e, n)
                },
                keys: function() {
                    return et(t)
                }
            }, void 0, function() {
                return {
                    state: "fulfilled",
                    value: t
                }
            })
        }

        function D(t) {
            var e = d();
            return c.nextTick(function() {
                try {
                    t.then(e.resolve, e.reject, e.notify)
                } catch (n) {
                    e.reject(n)
                }
            }), e.promise
        }

        function A(t) {
            return f({
                isDef: function() {}
            }, function(e, n) {
                return I(t, e, n)
            }, function() {
                return c(t).inspect()
            })
        }

        function $(t, e, n) {
            return c(t).spread(e, n)
        }

        function M(t) {
            return function() {
                function e(t, e) {
                    var s;
                    if ("undefined" == typeof StopIteration) {
                        try {
                            s = i[t](e)
                        } catch (a) {
                            return k(a)
                        }
                        return s.done ? c(s.value) : g(s.value, r, o)
                    }
                    try {
                        s = i[t](e)
                    } catch (a) {
                        return n(a) ? c(a.value) : k(a)
                    }
                    return g(s, r, o)
                }
                var i = t.apply(this, arguments),
                    r = e.bind(e, "next"),
                    o = e.bind(e, "throw");
                return r()
            }
        }

        function E(t) {
            c.done(c.async(t)())
        }

        function O(t) {
            throw new Y(t)
        }

        function P(t) {
            return function() {
                return $([this, F(arguments)], function(e, n) {
                    return t.apply(e, n)
                })
            }
        }

        function I(t, e, n) {
            return c(t).dispatch(e, n)
        }

        function F(t) {
            return g(t, function(t) {
                var e = 0,
                    n = d();
                return Q(t, function(i, r, o) {
                    var s;
                    v(r) && "fulfilled" === (s = r.inspect()).state ? t[o] = s.value : (++e, g(r, function(i) {
                        t[o] = i, 0 === --e && n.resolve(t)
                    }, n.reject, function(t) {
                        n.notify({
                            index: o,
                            value: t
                        })
                    }))
                }, void 0), 0 === e && n.resolve(t), n.promise
            })
        }

        function j(t) {
            if (0 === t.length) return c.resolve();
            var e = c.defer(),
                n = 0;
            return Q(t, function(i, r, o) {
                function s(t) {
                    e.resolve(t)
                }

                function a() {
                    n--, 0 === n && e.reject(new Error("Can't get fulfillment value from any promise, all promises were rejected."))
                }

                function l(t) {
                    e.notify({
                        index: o,
                        value: t
                    })
                }
                var u = t[o];
                n++, g(u, s, a, l)
            }, void 0), e.promise
        }

        function L(t) {
            return g(t, function(t) {
                return t = K(t, c), g(F(K(t, function(t) {
                    return g(t, z, z)
                })), function() {
                    return t
                })
            })
        }

        function N(t) {
            return c(t).allSettled()
        }

        function R(t, e) {
            return c(t).then(void 0, void 0, e)
        }

        function H(t, e) {
            return c(t).nodeify(e)
        }
        var U = !1;
        try {
            throw new Error
        } catch (W) {
            U = !!W.stack
        }
        var q, Y, B = l(),
            z = function() {},
            V = function() {
                function t() {
                    for (var t, i; n.next;) n = n.next, t = n.task, n.task = void 0, i = n.domain, i && (n.domain = void 0, i.enter()), e(t, i);
                    for (; a.length;) t = a.pop(), e(t);
                    r = !1
                }

                function e(e, n) {
                    try {
                        e()
                    } catch (i) {
                        if (s) throw n && n.exit(), setTimeout(t, 0), n && n.enter(), i;
                        setTimeout(function() {
                            throw i
                        }, 0)
                    }
                    n && n.exit()
                }
                var n = {
                        task: void 0,
                        next: null
                    },
                    i = n,
                    r = !1,
                    o = void 0,
                    s = !1,
                    a = [];
                if (V = function(t) {
                        i = i.next = {
                            task: t,
                            domain: s && process.domain,
                            next: null
                        }, r || (r = !0, o())
                    }, "object" == typeof process && "[object process]" === process.toString() && process.nextTick) s = !0, o = function() {
                    process.nextTick(t)
                };
                else if ("function" == typeof setImmediate) o = "undefined" != typeof window ? setImmediate.bind(window, t) : function() {
                    setImmediate(t)
                };
                else if ("undefined" != typeof MessageChannel) {
                    var l = new MessageChannel;
                    l.port1.onmessage = function() {
                        o = u, l.port1.onmessage = t, t()
                    };
                    var u = function() {
                        l.port2.postMessage(0)
                    };
                    o = function() {
                        setTimeout(t, 0), u()
                    }
                } else o = function() {
                    setTimeout(t, 0)
                };
                return V.runAfter = function(t) {
                    a.push(t), r || (r = !0, o())
                }, V
            }(),
            G = Function.call,
            X = t(Array.prototype.slice),
            Q = t(Array.prototype.reduce || function(t, e) {
                var n = 0,
                    i = this.length;
                if (1 === arguments.length)
                    for (;;) {
                        if (n in this) {
                            e = this[n++];
                            break
                        }
                        if (++n >= i) throw new TypeError
                    }
                for (; n < i; n++) n in this && (e = t(e, this[n], n));
                return e
            }),
            J = t(Array.prototype.indexOf || function(t) {
                for (var e = 0; e < this.length; e++)
                    if (this[e] === t) return e;
                return -1
            }),
            K = t(Array.prototype.map || function(t, e) {
                var n = this,
                    i = [];
                return Q(n, function(r, o, s) {
                    i.push(t.call(e, o, s, n))
                }, void 0), i
            }),
            Z = Object.create || function(t) {
                function e() {}
                return e.prototype = t, new e
            },
            tt = t(Object.prototype.hasOwnProperty),
            et = Object.keys || function(t) {
                var e = [];
                for (var n in t) tt(t, n) && e.push(n);
                return e
            },
            nt = t(Object.prototype.toString);
        Y = "undefined" != typeof ReturnValue ? ReturnValue : function(t) {
            this.value = t
        };
        var it = "From previous event:";
        c.resolve = c, c.nextTick = V, c.longStackSupport = !1, "object" == typeof process && process && process.env && process.env.Q_DEBUG && (c.longStackSupport = !0), c.defer = d, d.prototype.makeNodeResolver = function() {
            var t = this;
            return function(e, n) {
                e ? t.reject(e) : arguments.length > 2 ? t.resolve(X(arguments, 1)) : t.resolve(n)
            }
        }, c.Promise = h, c.promise = h, h.race = p, h.all = F, h.reject = k, h.resolve = c, c.passByCopy = function(t) {
            return t
        }, f.prototype.passByCopy = function() {
            return this
        }, c.join = function(t, e) {
            return c(t).join(e)
        }, f.prototype.join = function(t) {
            return c([this, t]).spread(function(t, e) {
                if (t === e) return t;
                throw new Error("Can't join: not the same: " + t + " " + e)
            })
        }, c.race = p, f.prototype.race = function() {
            return this.then(c.race)
        }, c.makePromise = f, f.prototype.toString = function() {
            return "[object Promise]"
        }, f.prototype.then = function(t, e, n) {
            function r(e) {
                try {
                    return "function" == typeof t ? t(e) : e
                } catch (n) {
                    return k(n)
                }
            }

            function o(t) {
                if ("function" == typeof e) {
                    i(t, a);
                    try {
                        return e(t)
                    } catch (n) {
                        return k(n)
                    }
                }
                return k(t)
            }

            function s(t) {
                return "function" == typeof n ? n(t) : t
            }
            var a = this,
                l = d(),
                u = !1;
            return c.nextTick(function() {
                a.promiseDispatch(function(t) {
                    u || (u = !0, l.resolve(r(t)))
                }, "when", [function(t) {
                    u || (u = !0, l.resolve(o(t)))
                }])
            }), a.promiseDispatch(void 0, "when", [void 0, function(t) {
                var e, n = !1;
                try {
                    e = s(t)
                } catch (i) {
                    if (n = !0, !c.onerror) throw i;
                    c.onerror(i)
                }
                n || l.notify(e)
            }]), l.promise
        }, c.tap = function(t, e) {
            return c(t).tap(e)
        }, f.prototype.tap = function(t) {
            return t = c(t), this.then(function(e) {
                return t.fcall(e).thenResolve(e)
            })
        }, c.when = g, f.prototype.thenResolve = function(t) {
            return this.then(function() {
                return t
            })
        }, c.thenResolve = function(t, e) {
            return c(t).thenResolve(e)
        }, f.prototype.thenReject = function(t) {
            return this.then(function() {
                throw t
            })
        }, c.thenReject = function(t, e) {
            return c(t).thenReject(e)
        }, c.nearer = m, c.isPromise = v, c.isPromiseAlike = y, c.isPending = b, f.prototype.isPending = function() {
            return "pending" === this.inspect().state
        }, c.isFulfilled = w, f.prototype.isFulfilled = function() {
            return "fulfilled" === this.inspect().state
        }, c.isRejected = S, f.prototype.isRejected = function() {
            return "rejected" === this.inspect().state
        };
        var rt = [],
            ot = [],
            st = [],
            at = !0;
        c.resetUnhandledRejections = _, c.getUnhandledReasons = function() {
            return rt.slice()
        }, c.stopUnhandledRejectionTracking = function() {
            _(), at = !1
        }, _(), c.reject = k, c.fulfill = C, c.master = A, c.spread = $, f.prototype.spread = function(t, e) {
            return this.all().then(function(e) {
                return t.apply(void 0, e)
            }, e)
        }, c.async = M, c.spawn = E, c["return"] = O, c.promised = P, c.dispatch = I, f.prototype.dispatch = function(t, e) {
            var n = this,
                i = d();
            return c.nextTick(function() {
                n.promiseDispatch(i.resolve, t, e)
            }), i.promise
        }, c.get = function(t, e) {
            return c(t).dispatch("get", [e])
        }, f.prototype.get = function(t) {
            return this.dispatch("get", [t])
        }, c.set = function(t, e, n) {
            return c(t).dispatch("set", [e, n])
        }, f.prototype.set = function(t, e) {
            return this.dispatch("set", [t, e])
        }, c.del = c["delete"] = function(t, e) {
            return c(t).dispatch("delete", [e])
        }, f.prototype.del = f.prototype["delete"] = function(t) {
            return this.dispatch("delete", [t])
        }, c.mapply = c.post = function(t, e, n) {
            return c(t).dispatch("post", [e, n])
        }, f.prototype.mapply = f.prototype.post = function(t, e) {
            return this.dispatch("post", [t, e])
        }, c.send = c.mcall = c.invoke = function(t, e) {
            return c(t).dispatch("post", [e, X(arguments, 2)])
        }, f.prototype.send = f.prototype.mcall = f.prototype.invoke = function(t) {
            return this.dispatch("post", [t, X(arguments, 1)])
        }, c.fapply = function(t, e) {
            return c(t).dispatch("apply", [void 0, e])
        }, f.prototype.fapply = function(t) {
            return this.dispatch("apply", [void 0, t])
        }, c["try"] = c.fcall = function(t) {
            return c(t).dispatch("apply", [void 0, X(arguments, 1)])
        }, f.prototype.fcall = function() {
            return this.dispatch("apply", [void 0, X(arguments)])
        }, c.fbind = function(t) {
            var e = c(t),
                n = X(arguments, 1);
            return function() {
                return e.dispatch("apply", [this, n.concat(X(arguments))])
            }
        }, f.prototype.fbind = function() {
            var t = this,
                e = X(arguments);
            return function() {
                return t.dispatch("apply", [this, e.concat(X(arguments))])
            }
        }, c.keys = function(t) {
            return c(t).dispatch("keys", [])
        }, f.prototype.keys = function() {
            return this.dispatch("keys", [])
        }, c.all = F, f.prototype.all = function() {
            return F(this)
        }, c.any = j, f.prototype.any = function() {
            return j(this)
        }, c.allResolved = u(L, "allResolved", "allSettled"), f.prototype.allResolved = function() {
            return L(this)
        }, c.allSettled = N, f.prototype.allSettled = function() {
            return this.then(function(t) {
                return F(K(t, function(t) {
                    function e() {
                        return t.inspect()
                    }
                    return t = c(t), t.then(e, e)
                }))
            })
        }, c.fail = c["catch"] = function(t, e) {
            return c(t).then(void 0, e)
        }, f.prototype.fail = f.prototype["catch"] = function(t) {
            return this.then(void 0, t)
        }, c.progress = R, f.prototype.progress = function(t) {
            return this.then(void 0, void 0, t)
        }, c.fin = c["finally"] = function(t, e) {
            return c(t)["finally"](e)
        }, f.prototype.fin = f.prototype["finally"] = function(t) {
            return t = c(t), this.then(function(e) {
                return t.fcall().then(function() {
                    return e
                })
            }, function(e) {
                return t.fcall().then(function() {
                    throw e
                })
            })
        }, c.done = function(t, e, n, i) {
            return c(t).done(e, n, i)
        }, f.prototype.done = function(t, e, n) {
            var r = function(t) {
                    c.nextTick(function() {
                        if (i(t, o), !c.onerror) throw t;
                        c.onerror(t)
                    })
                },
                o = t || e || n ? this.then(t, e, n) : this;
            "object" == typeof process && process && process.domain && (r = process.domain.bind(r)), o.then(void 0, r)
        }, c.timeout = function(t, e, n) {
            return c(t).timeout(e, n)
        }, f.prototype.timeout = function(t, e) {
            var n = d(),
                i = setTimeout(function() {
                    e && "string" != typeof e || (e = new Error(e || "Timed out after " + t + " ms"), e.code = "ETIMEDOUT"), n.reject(e)
                }, t);
            return this.then(function(t) {
                clearTimeout(i), n.resolve(t)
            }, function(t) {
                clearTimeout(i), n.reject(t)
            }, n.notify), n.promise
        }, c.delay = function(t, e) {
            return void 0 === e && (e = t, t = void 0), c(t).delay(e)
        }, f.prototype.delay = function(t) {
            return this.then(function(e) {
                var n = d();
                return setTimeout(function() {
                    n.resolve(e)
                }, t), n.promise
            })
        }, c.nfapply = function(t, e) {
            return c(t).nfapply(e)
        }, f.prototype.nfapply = function(t) {
            var e = d(),
                n = X(t);
            return n.push(e.makeNodeResolver()), this.fapply(n).fail(e.reject), e.promise
        }, c.nfcall = function(t) {
            var e = X(arguments, 1);
            return c(t).nfapply(e)
        }, f.prototype.nfcall = function() {
            var t = X(arguments),
                e = d();
            return t.push(e.makeNodeResolver()), this.fapply(t).fail(e.reject), e.promise
        }, c.nfbind = c.denodeify = function(t) {
            var e = X(arguments, 1);
            return function() {
                var n = e.concat(X(arguments)),
                    i = d();
                return n.push(i.makeNodeResolver()), c(t).fapply(n).fail(i.reject), i.promise
            }
        }, f.prototype.nfbind = f.prototype.denodeify = function() {
            var t = X(arguments);
            return t.unshift(this), c.denodeify.apply(void 0, t)
        }, c.nbind = function(t, e) {
            var n = X(arguments, 2);
            return function() {
                function i() {
                    return t.apply(e, arguments)
                }
                var r = n.concat(X(arguments)),
                    o = d();
                return r.push(o.makeNodeResolver()), c(i).fapply(r).fail(o.reject), o.promise
            }
        }, f.prototype.nbind = function() {
            var t = X(arguments, 0);
            return t.unshift(this), c.nbind.apply(void 0, t)
        }, c.nmapply = c.npost = function(t, e, n) {
            return c(t).npost(e, n)
        }, f.prototype.nmapply = f.prototype.npost = function(t, e) {
            var n = X(e || []),
                i = d();
            return n.push(i.makeNodeResolver()), this.dispatch("post", [t, n]).fail(i.reject), i.promise
        }, c.nsend = c.nmcall = c.ninvoke = function(t, e) {
            var n = X(arguments, 2),
                i = d();
            return n.push(i.makeNodeResolver()), c(t).dispatch("post", [e, n]).fail(i.reject), i.promise
        }, f.prototype.nsend = f.prototype.nmcall = f.prototype.ninvoke = function(t) {
            var e = X(arguments, 1),
                n = d();
            return e.push(n.makeNodeResolver()), this.dispatch("post", [t, e]).fail(n.reject),
                n.promise
        }, c.nodeify = H, f.prototype.nodeify = function(t) {
            return t ? void this.then(function(e) {
                c.nextTick(function() {
                    t(null, e)
                })
            }, function(e) {
                c.nextTick(function() {
                    t(e)
                })
            }) : this
        }, c.noConflict = function() {
            throw new Error("Q.noConflict only works when Q is used as a global")
        };
        var lt = l();
        return c
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.NProgress = e()
    }(this, function() {
        function t(t, e, n) {
            return t < e ? e : t > n ? n : t
        }

        function e(t) {
            return 100 * (-1 + t)
        }

        function n(t, n, i) {
            var r;
            return r = "translate3d" === u.positionUsing ? {
                transform: "translate3d(" + e(t) + "%,0,0)"
            } : "translate" === u.positionUsing ? {
                transform: "translate(" + e(t) + "%,0)"
            } : {
                "margin-left": e(t) + "%"
            }, r.transition = "all " + n + "ms " + i, r
        }

        function i(t, e) {
            var n = "string" == typeof t ? t : s(t);
            return n.indexOf(" " + e + " ") >= 0
        }

        function r(t, e) {
            var n = s(t),
                r = n + e;
            i(n, e) || (t.className = r.substring(1))
        }

        function o(t, e) {
            var n, r = s(t);
            i(t, e) && (n = r.replace(" " + e + " ", " "), t.className = n.substring(1, n.length - 1))
        }

        function s(t) {
            return (" " + (t.className || "") + " ").replace(/\s+/gi, " ")
        }

        function a(t) {
            t && t.parentNode && t.parentNode.removeChild(t)
        }
        var l = {};
        l.version = "0.2.0";
        var u = l.settings = {
            minimum: .08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: .02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        };
        l.configure = function(t) {
                var e, n;
                for (e in t) n = t[e], void 0 !== n && t.hasOwnProperty(e) && (u[e] = n);
                return this
            }, l.status = null, l.set = function(e) {
                var i = l.isStarted();
                e = t(e, u.minimum, 1), l.status = 1 === e ? null : e;
                var r = l.render(!i),
                    o = r.querySelector(u.barSelector),
                    s = u.speed,
                    a = u.easing;
                return r.offsetWidth, c(function(t) {
                    "" === u.positionUsing && (u.positionUsing = l.getPositioningCSS()), d(o, n(e, s, a)), 1 === e ? (d(r, {
                        transition: "none",
                        opacity: 1
                    }), r.offsetWidth, setTimeout(function() {
                        d(r, {
                            transition: "all " + s + "ms linear",
                            opacity: 0
                        }), setTimeout(function() {
                            l.remove(), t()
                        }, s)
                    }, s)) : setTimeout(t, s)
                }), this
            }, l.isStarted = function() {
                return "number" == typeof l.status
            }, l.start = function() {
                l.status || l.set(0);
                var t = function() {
                    setTimeout(function() {
                        l.status && (l.trickle(), t())
                    }, u.trickleSpeed)
                };
                return u.trickle && t(), this
            }, l.done = function(t) {
                return t || l.status ? l.inc(.3 + .5 * Math.random()).set(1) : this
            }, l.inc = function(e) {
                var n = l.status;
                return n ? ("number" != typeof e && (e = (1 - n) * t(Math.random() * n, .1, .95)), n = t(n + e, 0, .994), l.set(n)) : l.start()
            }, l.trickle = function() {
                return l.inc(Math.random() * u.trickleRate)
            },
            function() {
                var t = 0,
                    e = 0;
                l.promise = function(n) {
                    return n && "resolved" !== n.state() ? (0 === e && l.start(), t++, e++, n.always(function() {
                        e--, 0 === e ? (t = 0, l.done()) : l.set((t - e) / t)
                    }), this) : this
                }
            }(), l.render = function(t) {
                if (l.isRendered()) return document.getElementById("nprogress");
                r(document.documentElement, "nprogress-busy");
                var n = document.createElement("div");
                n.id = "nprogress", n.innerHTML = u.template;
                var i, o = n.querySelector(u.barSelector),
                    s = t ? "-100" : e(l.status || 0),
                    c = document.querySelector(u.parent);
                return d(o, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + s + "%,0,0)"
                }), u.showSpinner || (i = n.querySelector(u.spinnerSelector), i && a(i)), c != document.body && r(c, "nprogress-custom-parent"), c.appendChild(n), n
            }, l.remove = function() {
                o(document.documentElement, "nprogress-busy"), o(document.querySelector(u.parent), "nprogress-custom-parent");
                var t = document.getElementById("nprogress");
                t && a(t)
            }, l.isRendered = function() {
                return !!document.getElementById("nprogress")
            }, l.getPositioningCSS = function() {
                var t = document.body.style,
                    e = "WebkitTransform" in t ? "Webkit" : "MozTransform" in t ? "Moz" : "msTransform" in t ? "ms" : "OTransform" in t ? "O" : "";
                return e + "Perspective" in t ? "translate3d" : e + "Transform" in t ? "translate" : "margin"
            };
        var c = function() {
                function t() {
                    var n = e.shift();
                    n && n(t)
                }
                var e = [];
                return function(n) {
                    e.push(n), 1 == e.length && t()
                }
            }(),
            d = function() {
                function t(t) {
                    return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(t, e) {
                        return e.toUpperCase()
                    })
                }

                function e(t) {
                    var e = document.body.style;
                    if (t in e) return t;
                    for (var n, i = r.length, o = t.charAt(0).toUpperCase() + t.slice(1); i--;)
                        if (n = r[i] + o, n in e) return n;
                    return t
                }

                function n(n) {
                    return n = t(n), o[n] || (o[n] = e(n))
                }

                function i(t, e, i) {
                    e = n(e), t.style[e] = i
                }
                var r = ["Webkit", "O", "Moz", "ms"],
                    o = {};
                return function(t, e) {
                    var n, r, o = arguments;
                    if (2 == o.length)
                        for (n in e) r = e[n], void 0 !== r && e.hasOwnProperty(n) && i(t, n, r);
                    else i(t, o[1], o[2])
                }
            }();
        return l
    }), ! function(t, e, n) {
        "use strict";
        var i = function(e, n) {
            this.widget = "", this.$element = t(e), this.defaultTime = n.defaultTime, this.disableFocus = n.disableFocus, this.disableMousewheel = n.disableMousewheel, this.isOpen = n.isOpen, this.minuteStep = n.minuteStep, this.modalBackdrop = n.modalBackdrop, this.orientation = n.orientation, this.secondStep = n.secondStep, this.showInputs = n.showInputs, this.showMeridian = n.showMeridian, this.showSeconds = n.showSeconds, this.template = n.template, this.appendWidgetTo = n.appendWidgetTo, this.showWidgetOnAddonClick = n.showWidgetOnAddonClick, this._init()
        };
        i.prototype = {
            constructor: i,
            _init: function() {
                var e = this;
                this.showWidgetOnAddonClick && (this.$element.parent().hasClass("input-append") || this.$element.parent().hasClass("input-prepend")) ? (this.$element.parent(".input-append, .input-prepend").find(".add-on").on({
                    "click.timepicker": t.proxy(this.showWidget, this)
                }), this.$element.on({
                    "focus.timepicker": t.proxy(this.highlightUnit, this),
                    "click.timepicker": t.proxy(this.highlightUnit, this),
                    "keydown.timepicker": t.proxy(this.elementKeydown, this),
                    "blur.timepicker": t.proxy(this.blurElement, this),
                    "mousewheel.timepicker DOMMouseScroll.timepicker": t.proxy(this.mousewheel, this)
                })) : this.template ? this.$element.on({
                    "focus.timepicker": t.proxy(this.showWidget, this),
                    "click.timepicker": t.proxy(this.showWidget, this),
                    "blur.timepicker": t.proxy(this.blurElement, this),
                    "mousewheel.timepicker DOMMouseScroll.timepicker": t.proxy(this.mousewheel, this)
                }) : this.$element.on({
                    "focus.timepicker": t.proxy(this.highlightUnit, this),
                    "click.timepicker": t.proxy(this.highlightUnit, this),
                    "keydown.timepicker": t.proxy(this.elementKeydown, this),
                    "blur.timepicker": t.proxy(this.blurElement, this),
                    "mousewheel.timepicker DOMMouseScroll.timepicker": t.proxy(this.mousewheel, this)
                }), this.$widget = this.template !== !1 && t(this.getTemplate()).on("click", t.proxy(this.widgetClick, this)), this.showInputs && this.$widget !== !1 && this.$widget.find("input").each(function() {
                    t(this).on({
                        "click.timepicker": function() {
                            t(this).select()
                        },
                        "keydown.timepicker": t.proxy(e.widgetKeydown, e),
                        "keyup.timepicker": t.proxy(e.widgetKeyup, e)
                    })
                }), this.setDefaultTime(this.defaultTime)
            },
            blurElement: function() {
                this.highlightedUnit = null, this.updateFromElementVal()
            },
            clear: function() {
                this.hour = "", this.minute = "", this.second = "", this.meridian = "", this.$element.val("")
            },
            decrementHour: function() {
                if (this.showMeridian)
                    if (1 === this.hour) this.hour = 12;
                    else {
                        if (12 === this.hour) return this.hour--, this.toggleMeridian();
                        if (0 === this.hour) return this.hour = 11, this.toggleMeridian();
                        this.hour--
                    }
                else this.hour <= 0 ? this.hour = 23 : this.hour--
            },
            decrementMinute: function(t) {
                var e;
                e = t ? this.minute - t : this.minute - this.minuteStep, 0 > e ? (this.decrementHour(), this.minute = e + 60) : this.minute = e
            },
            decrementSecond: function() {
                var t = this.second - this.secondStep;
                0 > t ? (this.decrementMinute(!0), this.second = t + 60) : this.second = t
            },
            elementKeydown: function(t) {
                switch (t.keyCode) {
                    case 9:
                    case 27:
                        this.updateFromElementVal();
                        break;
                    case 37:
                        t.preventDefault(), this.highlightPrevUnit();
                        break;
                    case 38:
                        switch (t.preventDefault(), this.highlightedUnit) {
                            case "hour":
                                this.incrementHour(), this.highlightHour();
                                break;
                            case "minute":
                                this.incrementMinute(), this.highlightMinute();
                                break;
                            case "second":
                                this.incrementSecond(), this.highlightSecond();
                                break;
                            case "meridian":
                                this.toggleMeridian(), this.highlightMeridian()
                        }
                        this.update();
                        break;
                    case 39:
                        t.preventDefault(), this.highlightNextUnit();
                        break;
                    case 40:
                        switch (t.preventDefault(), this.highlightedUnit) {
                            case "hour":
                                this.decrementHour(), this.highlightHour();
                                break;
                            case "minute":
                                this.decrementMinute(), this.highlightMinute();
                                break;
                            case "second":
                                this.decrementSecond(), this.highlightSecond();
                                break;
                            case "meridian":
                                this.toggleMeridian(), this.highlightMeridian()
                        }
                        this.update()
                }
            },
            getCursorPosition: function() {
                var t = this.$element.get(0);
                if ("selectionStart" in t) return t.selectionStart;
                if (n.selection) {
                    t.focus();
                    var e = n.selection.createRange(),
                        i = n.selection.createRange().text.length;
                    return e.moveStart("character", -t.value.length), e.text.length - i
                }
            },
            getTemplate: function() {
                var t, e, n, i, r, o;
                switch (this.showInputs ? (e = '<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>', n = '<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>', i = '<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>', r = '<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>') : (e = '<span class="bootstrap-timepicker-hour"></span>', n = '<span class="bootstrap-timepicker-minute"></span>', i = '<span class="bootstrap-timepicker-second"></span>', r = '<span class="bootstrap-timepicker-meridian"></span>'), o = '<table><tr><td><a href="#" data-action="incrementHour"><i class="icon-chevron-up"></i></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><i class="icon-chevron-up"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><i class="icon-chevron-up"></i></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="icon-chevron-up"></i></a></td>' : "") + "</tr><tr><td>" + e + '</td> <td class="separator">:</td><td>' + n + "</td> " + (this.showSeconds ? '<td class="separator">:</td><td>' + i + "</td>" : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td>' + r + "</td>" : "") + '</tr><tr><td><a href="#" data-action="decrementHour"><i class="icon-chevron-down"></i></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><i class="icon-chevron-down"></i></a></td>' + (this.showSeconds ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><i class="icon-chevron-down"></i></a></td>' : "") + (this.showMeridian ? '<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><i class="icon-chevron-down"></i></a></td>' : "") + "</tr></table>", this.template) {
                    case "modal":
                        t = '<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="' + (this.modalBackdrop ? "true" : "false") + '"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">×</a><h3>Pick a Time</h3></div><div class="modal-content">' + o + '</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';
                        break;
                    case "dropdown":
                        t = '<div class="bootstrap-timepicker-widget dropdown-menu">' + o + "</div>"
                }
                return t
            },
            getTime: function() {
                return this.hour || this.minute || this.second ? this.hour + ":" + (1 === this.minute.toString().length ? "0" + this.minute : this.minute) + (this.showSeconds ? ":" + (1 === this.second.toString().length ? "0" + this.second : this.second) : "") + (this.showMeridian ? " " + this.meridian : "") : ""
            },
            hideWidget: function() {
                this.isOpen !== !1 && (this.$element.trigger({
                    type: "hide.timepicker",
                    time: {
                        value: this.getTime(),
                        hours: this.hour,
                        minutes: this.minute,
                        seconds: this.second,
                        meridian: this.meridian
                    }
                }), "modal" === this.template && this.$widget.modal ? this.$widget.modal("hide") : this.$widget.removeClass("open"), t(n).off("mousedown.timepicker, touchend.timepicker"), this.isOpen = !1, this.$widget.detach())
            },
            highlightUnit: function() {
                this.position = this.getCursorPosition(), this.position >= 0 && this.position <= 2 ? this.highlightHour() : this.position >= 3 && this.position <= 5 ? this.highlightMinute() : this.position >= 6 && this.position <= 8 ? this.showSeconds ? this.highlightSecond() : this.highlightMeridian() : this.position >= 9 && this.position <= 11 && this.highlightMeridian()
            },
            highlightNextUnit: function() {
                switch (this.highlightedUnit) {
                    case "hour":
                        this.highlightMinute();
                        break;
                    case "minute":
                        this.showSeconds ? this.highlightSecond() : this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                        break;
                    case "second":
                        this.showMeridian ? this.highlightMeridian() : this.highlightHour();
                        break;
                    case "meridian":
                        this.highlightHour()
                }
            },
            highlightPrevUnit: function() {
                switch (this.highlightedUnit) {
                    case "hour":
                        this.showMeridian ? this.highlightMeridian() : this.showSeconds ? this.highlightSecond() : this.highlightMinute();
                        break;
                    case "minute":
                        this.highlightHour();
                        break;
                    case "second":
                        this.highlightMinute();
                        break;
                    case "meridian":
                        this.showSeconds ? this.highlightSecond() : this.highlightMinute()
                }
            },
            highlightHour: function() {
                var t = this.$element.get(0),
                    e = this;
                this.highlightedUnit = "hour", t.setSelectionRange && setTimeout(function() {
                    e.hour < 10 ? t.setSelectionRange(0, 1) : t.setSelectionRange(0, 2)
                }, 0)
            },
            highlightMinute: function() {
                var t = this.$element.get(0),
                    e = this;
                this.highlightedUnit = "minute", t.setSelectionRange && setTimeout(function() {
                    e.hour < 10 ? t.setSelectionRange(2, 4) : t.setSelectionRange(3, 5)
                }, 0)
            },
            highlightSecond: function() {
                var t = this.$element.get(0),
                    e = this;
                this.highlightedUnit = "second", t.setSelectionRange && setTimeout(function() {
                    e.hour < 10 ? t.setSelectionRange(5, 7) : t.setSelectionRange(6, 8)
                }, 0)
            },
            highlightMeridian: function() {
                var t = this.$element.get(0),
                    e = this;
                this.highlightedUnit = "meridian", t.setSelectionRange && (this.showSeconds ? setTimeout(function() {
                    e.hour < 10 ? t.setSelectionRange(8, 10) : t.setSelectionRange(9, 11)
                }, 0) : setTimeout(function() {
                    e.hour < 10 ? t.setSelectionRange(5, 7) : t.setSelectionRange(6, 8)
                }, 0))
            },
            incrementHour: function() {
                if (this.showMeridian) {
                    if (11 === this.hour) return this.hour++, this.toggleMeridian();
                    12 === this.hour && (this.hour = 0)
                }
                return 23 === this.hour ? void(this.hour = 0) : void this.hour++
            },
            incrementMinute: function(t) {
                var e;
                e = t ? this.minute + t : this.minute + this.minuteStep - this.minute % this.minuteStep, e > 59 ? (this.incrementHour(), this.minute = e - 60) : this.minute = e
            },
            incrementSecond: function() {
                var t = this.second + this.secondStep - this.second % this.secondStep;
                t > 59 ? (this.incrementMinute(!0), this.second = t - 60) : this.second = t
            },
            mousewheel: function(e) {
                if (!this.disableMousewheel) {
                    e.preventDefault(), e.stopPropagation();
                    var n = e.originalEvent.wheelDelta || -e.originalEvent.detail,
                        i = null;
                    switch ("mousewheel" === e.type ? i = -1 * e.originalEvent.wheelDelta : "DOMMouseScroll" === e.type && (i = 40 * e.originalEvent.detail), i && (e.preventDefault(), t(this).scrollTop(i + t(this).scrollTop())), this.highlightedUnit) {
                        case "minute":
                            n > 0 ? this.incrementMinute() : this.decrementMinute(), this.highlightMinute();
                            break;
                        case "second":
                            n > 0 ? this.incrementSecond() : this.decrementSecond(), this.highlightSecond();
                            break;
                        case "meridian":
                            this.toggleMeridian(), this.highlightMeridian();
                            break;
                        default:
                            n > 0 ? this.incrementHour() : this.decrementHour(), this.highlightHour()
                    }
                    return !1
                }
            },
            place: function() {
                if (!this.isInline) {
                    var n = this.$widget.outerWidth(),
                        i = this.$widget.outerHeight(),
                        r = 10,
                        o = t(e).width(),
                        s = t(e).height(),
                        a = t(e).scrollTop(),
                        l = parseInt(this.$element.parents().filter(function() {}).first().css("z-index"), 10) + 10,
                        u = this.component ? this.component.parent().offset() : this.$element.offset(),
                        c = this.component ? this.component.outerHeight(!0) : this.$element.outerHeight(!1),
                        d = this.component ? this.component.outerWidth(!0) : this.$element.outerWidth(!1),
                        h = u.left,
                        p = u.top;
                    this.$widget.removeClass("timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left"), "auto" !== this.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.orientation.x), "right" === this.orientation.x && (h -= n - d)) : (this.$widget.addClass("timepicker-orient-left"), u.left < 0 ? h -= u.left - r : u.left + n > o && (h = o - n - r));
                    var f, g, m = this.orientation.y;
                    "auto" === m && (f = -a + u.top - i, g = a + s - (u.top + c + i), m = Math.max(f, g) === g ? "top" : "bottom"), this.$widget.addClass("timepicker-orient-" + m), "top" === m ? p += c : p -= i + parseInt(this.$widget.css("padding-top"), 10), this.$widget.css({
                        top: p,
                        left: h,
                        zIndex: l
                    })
                }
            },
            remove: function() {
                t("document").off(".timepicker"), this.$widget && this.$widget.remove(), delete this.$element.data().timepicker
            },
            setDefaultTime: function(t) {
                if (this.$element.val()) this.updateFromElementVal();
                else if ("current" === t) {
                    var e = new Date,
                        n = e.getHours(),
                        i = e.getMinutes(),
                        r = e.getSeconds(),
                        o = "AM";
                    0 !== r && (r = Math.ceil(e.getSeconds() / this.secondStep) * this.secondStep, 60 === r && (i += 1, r = 0)), 0 !== i && (i = Math.ceil(e.getMinutes() / this.minuteStep) * this.minuteStep, 60 === i && (n += 1, i = 0)), this.showMeridian && (0 === n ? n = 12 : n >= 12 ? (n > 12 && (n -= 12), o = "PM") : o = "AM"), this.hour = n, this.minute = i, this.second = r, this.meridian = o, this.update()
                } else t === !1 ? (this.hour = 0, this.minute = 0, this.second = 0, this.meridian = "AM") : this.setTime(t)
            },
            setTime: function(t, e) {
                if (!t) return void this.clear();
                var n, i, r, o, s;
                "object" == typeof t && t.getMonth ? (i = t.getHours(), r = t.getMinutes(), o = t.getSeconds(), this.showMeridian && (s = "AM", i > 12 && (s = "PM", i %= 12), 12 === i && (s = "PM"))) : (s = null !== t.match(/p/i) ? "PM" : "AM", t = t.replace(/[^0-9\:]/g, ""), n = t.split(":"), i = n[0] ? n[0].toString() : n.toString(), r = n[1] ? n[1].toString() : "", o = n[2] ? n[2].toString() : "", i.length > 4 && (o = i.substr(4, 2)), i.length > 2 && (r = i.substr(2, 2), i = i.substr(0, 2)), r.length > 2 && (o = r.substr(2, 2), r = r.substr(0, 2)), o.length > 2 && (o = o.substr(2, 2)), i = parseInt(i, 10), r = parseInt(r, 10), o = parseInt(o, 10), isNaN(i) && (i = 0), isNaN(r) && (r = 0), isNaN(o) && (o = 0), this.showMeridian ? 1 > i ? i = 1 : i > 12 && (i = 12) : (i >= 24 ? i = 23 : 0 > i && (i = 0), 13 > i && "PM" === s && (i += 12)), 0 > r ? r = 0 : r >= 60 && (r = 59), this.showSeconds && (isNaN(o) ? o = 0 : 0 > o ? o = 0 : o >= 60 && (o = 59))), this.hour = i, this.minute = r, this.second = o, this.meridian = s, this.update(e)
            },
            showWidget: function() {
                if (!this.isOpen && !this.$element.is(":disabled")) {
                    this.$widget.appendTo(this.appendWidgetTo);
                    var e = this;
                    t(n).on("mousedown.timepicker, touchend.timepicker", function(t) {
                        e.$element.parent().find(t.target).length || e.$widget.is(t.target) || e.$widget.find(t.target).length || e.hideWidget()
                    }), this.$element.trigger({
                        type: "show.timepicker",
                        time: {
                            value: this.getTime(),
                            hours: this.hour,
                            minutes: this.minute,
                            seconds: this.second,
                            meridian: this.meridian
                        }
                    }), this.place(), this.disableFocus && this.$element.blur(), this.hour || (this.defaultTime ? this.setDefaultTime(this.defaultTime) : this.setTime("0:0:0")), "modal" === this.template && this.$widget.modal ? this.$widget.modal("show").on("hidden", t.proxy(this.hideWidget, this)) : this.isOpen === !1 && this.$widget.addClass("open"), this.isOpen = !0
                }
            },
            toggleMeridian: function() {
                this.meridian = "AM" === this.meridian ? "PM" : "AM"
            },
            update: function(t) {
                this.updateElement(), t || this.updateWidget(), this.$element.trigger({
                    type: "changeTime.timepicker",
                    time: {
                        value: this.getTime(),
                        hours: this.hour,
                        minutes: this.minute,
                        seconds: this.second,
                        meridian: this.meridian
                    }
                })
            },
            updateElement: function() {
                this.$element.val(this.getTime()).change()
            },
            updateFromElementVal: function() {
                this.setTime(this.$element.val())
            },
            updateWidget: function() {
                if (this.$widget !== !1) {
                    var t = this.hour,
                        e = 1 === this.minute.toString().length ? "0" + this.minute : this.minute,
                        n = 1 === this.second.toString().length ? "0" + this.second : this.second;
                    this.showInputs ? (this.$widget.find("input.bootstrap-timepicker-hour").val(t), this.$widget.find("input.bootstrap-timepicker-minute").val(e), this.showSeconds && this.$widget.find("input.bootstrap-timepicker-second").val(n), this.showMeridian && this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)) : (this.$widget.find("span.bootstrap-timepicker-hour").text(t), this.$widget.find("span.bootstrap-timepicker-minute").text(e), this.showSeconds && this.$widget.find("span.bootstrap-timepicker-second").text(n), this.showMeridian && this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian))
                }
            },
            updateFromWidgetInputs: function() {
                if (this.$widget !== !1) {
                    var t = this.$widget.find("input.bootstrap-timepicker-hour").val() + ":" + this.$widget.find("input.bootstrap-timepicker-minute").val() + (this.showSeconds ? ":" + this.$widget.find("input.bootstrap-timepicker-second").val() : "") + (this.showMeridian ? this.$widget.find("input.bootstrap-timepicker-meridian").val() : "");
                    this.setTime(t, !0)
                }
            },
            widgetClick: function(e) {
                e.stopPropagation(), e.preventDefault();
                var n = t(e.target),
                    i = n.closest("a").data("action");
                i && this[i](), this.update(), n.is("input") && n.get(0).setSelectionRange(0, 2)
            },
            widgetKeydown: function(e) {
                var n = t(e.target),
                    i = n.attr("class").replace("bootstrap-timepicker-", "");
                switch (e.keyCode) {
                    case 9:
                        if (this.showMeridian && "meridian" === i || this.showSeconds && "second" === i || !this.showMeridian && !this.showSeconds && "minute" === i) return this.hideWidget();
                        break;
                    case 27:
                        this.hideWidget();
                        break;
                    case 38:
                        switch (e.preventDefault(), i) {
                            case "hour":
                                this.incrementHour();
                                break;
                            case "minute":
                                this.incrementMinute();
                                break;
                            case "second":
                                this.incrementSecond();
                                break;
                            case "meridian":
                                this.toggleMeridian()
                        }
                        this.setTime(this.getTime()), n.get(0).setSelectionRange(0, 2);
                        break;
                    case 40:
                        switch (e.preventDefault(), i) {
                            case "hour":
                                this.decrementHour();
                                break;
                            case "minute":
                                this.decrementMinute();
                                break;
                            case "second":
                                this.decrementSecond();
                                break;
                            case "meridian":
                                this.toggleMeridian()
                        }
                        this.setTime(this.getTime()), n.get(0).setSelectionRange(0, 2)
                }
            },
            widgetKeyup: function(t) {
                (65 === t.keyCode || 77 === t.keyCode || 80 === t.keyCode || 46 === t.keyCode || 8 === t.keyCode || t.keyCode >= 46 && t.keyCode <= 57) && this.updateFromWidgetInputs()
            }
        }, t.fn.timepicker = function(e) {
            var n = Array.apply(null, arguments);
            return n.shift(), this.each(function() {
                var r = t(this),
                    o = r.data("timepicker"),
                    s = "object" == typeof e && e;
                o || r.data("timepicker", o = new i(this, t.extend({}, t.fn.timepicker.defaults, s, t(this).data()))), "string" == typeof e && o[e].apply(o, n)
            })
        }, t.fn.timepicker.defaults = {
            defaultTime: "current",
            disableFocus: !1,
            disableMousewheel: !1,
            isOpen: !1,
            minuteStep: 15,
            modalBackdrop: !1,
            orientation: {
                x: "auto",
                y: "auto"
            },
            secondStep: 15,
            showSeconds: !1,
            showInputs: !0,
            showMeridian: !0,
            template: "dropdown",
            appendWidgetTo: "body",
            showWidgetOnAddonClick: !0
        }, t.fn.timepicker.Constructor = i
    }(jQuery, window, document),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = window.Slick || {};
        e = function() {
            function e(e, i) {
                var r, o = this;
                o.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(t, e) {
                        return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (e + 1) + "</button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !1,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, o.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.hidden = "hidden", o.paused = !1, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(e), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, r = t(e).data("slick") || {}, o.options = t.extend({}, o.defaults, r, i), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, "undefined" != typeof document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.instanceUid = n++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0), o.checkResponsive(!0)
            }
            var n = 0;
            return e
        }(), e.prototype.addSlide = e.prototype.slickAdd = function(e, n, i) {
            var r = this;
            if ("boolean" == typeof n) i = n, n = null;
            else if (n < 0 || n >= r.slideCount) return !1;
            r.unload(), "number" == typeof n ? 0 === n && 0 === r.$slides.length ? t(e).appendTo(r.$slideTrack) : i ? t(e).insertBefore(r.$slides.eq(n)) : t(e).insertAfter(r.$slides.eq(n)) : i === !0 ? t(e).prependTo(r.$slideTrack) : t(e).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(e, n) {
                t(n).attr("data-slick-index", e)
            }), r.$slidesCache = r.$slides, r.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, n) {
            var i = {},
                r = this;
            r.animateHeight(), r.options.rtl === !0 && r.options.vertical === !1 && (e = -e), r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
                left: e
            }, r.options.speed, r.options.easing, n) : r.$slideTrack.animate({
                top: e
            }, r.options.speed, r.options.easing, n) : r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), t({
                animStart: r.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: r.options.speed,
                easing: r.options.easing,
                step: function(t) {
                    t = Math.ceil(t), r.options.vertical === !1 ? (i[r.animType] = "translate(" + t + "px, 0px)", r.$slideTrack.css(i)) : (i[r.animType] = "translate(0px," + t + "px)", r.$slideTrack.css(i))
                },
                complete: function() {
                    n && n.call()
                }
            })) : (r.applyTransition(), e = Math.ceil(e), r.options.vertical === !1 ? i[r.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[r.animType] = "translate3d(0px," + e + "px, 0px)", r.$slideTrack.css(i), n && setTimeout(function() {
                r.disableTransition(), n.call()
            }, r.options.speed))
        }, e.prototype.asNavFor = function(e) {
            var n = this,
                i = n.options.asNavFor;
            i && null !== i && (i = t(i).not(n.$slider)), null !== i && "object" == typeof i && i.each(function() {
                var n = t(this).slick("getSlick");
                n.unslicked || n.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                n = {};
            e.options.fade === !1 ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && t.paused !== !0 && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var t = this;
            t.options.infinite === !1 ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (t.currentSlide - 1 === 0 && (t.direction = 1), t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
        }, e.prototype.buildArrows = function() {
            var e = this;
            e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function() {
            var e, n, i = this;
            if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
                for (n = '<ul class="' + i.options.dotsClass + '">', e = 0; e <= i.getDotCount(); e += 1) n += "<li>" + i.options.customPaging.call(this, i, e) + "</li>";
                n += "</ul>", i.$dots = t(n).appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, n) {
                t(n).attr("data-slick-index", e).data("originalStyling", t(n).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var t, e, n, i, r, o, s, a = this;
            if (i = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
                for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), t = 0; t < r; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var u = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                            var c = t * s + (e * a.options.slidesPerRow + n);
                            o.get(c) && u.appendChild(o.get(c))
                        }
                        l.appendChild(u)
                    }
                    i.appendChild(l)
                }
                a.$slider.html(i), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function(e, n) {
            var i, r, o, s = this,
                a = !1,
                l = s.$slider.width(),
                u = window.innerWidth || t(window).width();
            if ("window" === s.respondTo ? o = u : "slider" === s.respondTo ? o = l : "min" === s.respondTo && (o = Math.min(u, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                r = null;
                for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (s.originalSettings.mobileFirst === !1 ? o < s.breakpoints[i] && (r = s.breakpoints[i]) : o > s.breakpoints[i] && (r = s.breakpoints[i]));
                null !== r ? null !== s.activeBreakpoint ? (r !== s.activeBreakpoint || n) && (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = r) : (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]), e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = r) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, e === !0 && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = r), e || a === !1 || s.$slider.trigger("breakpoint", [s, a])
            }
        }, e.prototype.changeSlide = function(e, n) {
            var i, r, o, s = this,
                a = t(e.target);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), o = s.slideCount % s.options.slidesToScroll !== 0, i = o ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
                case "previous":
                    r = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, n);
                    break;
                case "next":
                    r = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, n);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, n, i = this;
            if (e = i.getNavigableIndexes(), n = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var r in e) {
                    if (t < e[r]) {
                        t = n;
                        break
                    }
                    n = e[r]
                }
            return t
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide), e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).off("mouseenter.slick", t.proxy(e.setPaused, e, !0)).off("mouseleave.slick", t.proxy(e.setPaused, e, !1))), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.$list.off("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.setPaused, e, !1)), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.html(t))
        }, e.prototype.clickHandler = function(t) {
            var e = this;
            e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function(e) {
            var n = this;
            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), t(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                t(this).attr("style", t(this).data("originalStyling"))
            }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.unslicked = !0, e || n.$slider.trigger("destroy", [n])
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                n = {};
            n[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
        }, e.prototype.fadeSlide = function(t, e) {
            var n = this;
            n.cssTransitions === !1 ? (n.$slides.eq(t).css({
                zIndex: n.options.zIndex
            }), n.$slides.eq(t).animate({
                opacity: 1
            }, n.options.speed, n.options.easing, e)) : (n.applyTransition(t), n.$slides.eq(t).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), e && setTimeout(function() {
                n.disableTransition(t), e.call()
            }, n.options.speed))
        }, e.prototype.fadeSlideOut = function(t) {
            var e = this;
            e.cssTransitions === !1 ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            var t = this;
            return t.currentSlide
        }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                n = 0,
                i = 0;
            if (t.options.infinite === !0)
                for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (t.options.centerMode === !0) i = t.slideCount;
            else
                for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return i - 1
        }, e.prototype.getLeft = function(t) {
            var e, n, i, r = this,
                o = 0;
            return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = n * r.options.slidesToShow * -1), r.slideCount % r.options.slidesToScroll !== 0 && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1, o = (r.options.slidesToShow - (t - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, o = r.slideCount % r.options.slidesToScroll * n * -1))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth, o = (t + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, o = 0), r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : r.options.centerMode === !0 && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), e = r.options.vertical === !1 ? t * r.slideWidth * -1 + r.slideOffset : t * n * -1 + o, r.options.variableWidth === !0 && (i = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow), e = r.options.rtl === !0 ? i[0] ? (r.$slideTrack.width() - i[0].offsetLeft - i.width()) * -1 : 0 : i[0] ? i[0].offsetLeft * -1 : 0, r.options.centerMode === !0 && (i = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1), e = r.options.rtl === !0 ? i[0] ? (r.$slideTrack.width() - i[0].offsetLeft - i.width()) * -1 : 0 : i[0] ? i[0].offsetLeft * -1 : 0, e += (r.$list.width() - i.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
            var e = this;
            return e.options[t]
        }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                n = 0,
                i = 0,
                r = [];
            for (e.options.infinite === !1 ? t = e.slideCount : (n = e.options.slidesToScroll * -1, i = e.options.slidesToScroll * -1, t = 2 * e.slideCount); n < t;) r.push(n), n = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return r
        }, e.prototype.getSlick = function() {
            return this
        }, e.prototype.getSlideCount = function() {
            var e, n, i, r = this;
            return i = r.options.centerMode === !0 ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) : 0, r.options.swipeToSlide === !0 ? (r.$slideTrack.find(".slick-slide").each(function(e, o) {
                if (o.offsetLeft - i + t(o).outerWidth() / 2 > r.swipeLeft * -1) return n = o, !1
            }), e = Math.abs(t(n).attr("data-slick-index") - r.currentSlide) || 1) : r.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
            var n = this;
            n.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function(e) {
            var n = this;
            t(n.$slider).hasClass("slick-initialized") || (t(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots()), e && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA()
        }, e.prototype.initArrowEvents = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, e.prototype.initDotEvents = function() {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.setPaused, e, !0)).on("mouseleave.slick", t.proxy(e.setPaused, e, !1))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.$list.on("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.setPaused, e, !1)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.initUI = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show(), t.options.autoplay === !0 && t.autoPlay()
        }, e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
                data: {
                    message: "next"
                }
            }))
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        n = t(this).attr("data-lazy"),
                        i = document.createElement("img");
                    i.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            e.attr("src", n).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            })
                        })
                    }, i.src = n
                })
            }
            var n, i, r, o, s = this;
            s.options.centerMode === !0 ? s.options.infinite === !0 ? (r = s.currentSlide + (s.options.slidesToShow / 2 + 1), o = r + s.options.slidesToShow + 2) : (r = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (r = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = r + s.options.slidesToShow, s.options.fade === !0 && (r > 0 && r--, o <= s.slideCount && o++)), n = s.$slider.find(".slick-slide").slice(r, o), e(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), e(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), e(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(s.options.slidesToShow * -1), e(i))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function() {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.paused = !1, t.autoPlay()
        }, e.prototype.postSlide = function(t) {
            var e = this;
            e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay === !0 && e.paused === !1 && e.autoPlay(), e.options.accessibility === !0 && e.initADA()
        }, e.prototype.prev = e.prototype.slickPrev = function() {
            var t = this;
            t.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function(t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function() {
            var e, n, i = this;
            e = t("img[data-lazy]", i.$slider).length, e > 0 && (n = t("img[data-lazy]", i.$slider).first(), n.attr("src", null), n.attr("src", n.attr("data-lazy")).removeClass("slick-loading").load(function() {
                n.removeAttr("data-lazy"), i.progressiveLazyLoad(), i.options.adaptiveHeight === !0 && i.setPosition()
            }).error(function() {
                n.removeAttr("data-lazy"), i.progressiveLazyLoad()
            }))
        }, e.prototype.refresh = function(e) {
            var n, i, r = this;
            i = r.slideCount - r.options.slidesToShow, r.options.infinite || (r.slideCount <= r.options.slidesToShow ? r.currentSlide = 0 : r.currentSlide > i && (r.currentSlide = i)), n = r.currentSlide, r.destroy(!0), t.extend(r, r.initials, {
                currentSlide: n
            }), r.init(), e || r.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, n, i, r = this,
                o = r.options.responsive || null;
            if ("array" === t.type(o) && o.length) {
                r.respondTo = r.options.respondTo || "window";
                for (e in o)
                    if (i = r.breakpoints.length - 1, n = o[e].breakpoint, o.hasOwnProperty(e)) {
                        for (; i >= 0;) r.breakpoints[i] && r.breakpoints[i] === n && r.breakpoints.splice(i, 1), i--;
                        r.breakpoints.push(n), r.breakpointSettings[n] = o[e].settings
                    }
                r.breakpoints.sort(function(t, e) {
                    return r.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses(0), e.setPosition(), e.$slider.trigger("reInit", [e]), e.options.autoplay === !0 && e.focusHandler()
        }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, n) {
            var i = this;
            return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : i.slideCount - 1) : t = e === !0 ? --t : t, !(i.slideCount < 1 || t < 0 || t > i.slideCount - 1) && (i.unload(), n === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
        }, e.prototype.setCSS = function(t) {
            var e, n, i = this,
                r = {};
            i.options.rtl === !0 && (t = -t), e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px", r[i.positionProp] = t, i.transformsEnabled === !1 ? i.$slideTrack.css(r) : (r = {}, i.cssTransitions === !1 ? (r[i.animType] = "translate(" + e + ", " + n + ")", i.$slideTrack.css(r)) : (r[i.animType] = "translate3d(" + e + ", " + n + ", 0px)", i.$slideTrack.css(r)))
        }, e.prototype.setDimensions = function() {
            var t = this;
            t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function() {
            var e, n = this;
            n.$slides.each(function(i, r) {
                e = n.slideWidth * i * -1, n.options.rtl === !0 ? t(r).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : t(r).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function(e, n, i) {
            var r, o, s = this;
            if ("responsive" === e && "array" === t.type(n))
                for (o in n)
                    if ("array" !== t.type(s.options.responsive)) s.options.responsive = [n[o]];
                    else {
                        for (r = s.options.responsive.length - 1; r >= 0;) s.options.responsive[r].breakpoint === n[o].breakpoint && s.options.responsive.splice(r, 1), r--;
                        s.options.responsive.push(n[o])
                    }
            else s.options[e] = n;
            i === !0 && (s.unload(), s.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
        }, e.prototype.setSlideClasses = function(t) {
            var e, n, i, r, o = this;
            n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), o.options.centerMode === !0 ? (e = Math.floor(o.options.slidesToShow / 2), o.options.infinite === !0 && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = o.options.slidesToShow + t, n.slice(i - e + 1, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= o.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow, i = o.options.infinite === !0 ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? n.slice(i - (o.options.slidesToShow - r), i + r).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, n, i, r = this;
            if (r.options.fade === !0 && (r.options.centerMode = !1), r.options.infinite === !0 && r.options.fade === !1 && (n = null, r.slideCount > r.options.slidesToShow)) {
                for (i = r.options.centerMode === !0 ? r.options.slidesToShow + 1 : r.options.slidesToShow, e = r.slideCount; e > r.slideCount - i; e -= 1) n = e - 1, t(r.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < i; e += 1) n = e, t(r.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
                r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.setPaused = function(t) {
            var e = this;
            e.options.autoplay === !0 && e.options.pauseOnHover === !0 && (e.paused = t, t ? e.autoPlayClear() : e.autoPlay())
        }, e.prototype.selectHandler = function(e) {
            var n = this,
                i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                r = parseInt(i.attr("data-slick-index"));
            return r || (r = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(r), void n.asNavFor(r)) : void n.slideHandler(r)
        }, e.prototype.slideHandler = function(t, e, n) {
            var i, r, o, s, a = null,
                l = this;
            if (e = e || !1, (l.animating !== !0 || l.options.waitForAnimate !== !0) && !(l.options.fade === !0 && l.currentSlide === t || l.slideCount <= l.options.slidesToShow)) return e === !1 && l.asNavFor(t), i = t, a = l.getLeft(i), s = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (t < 0 || t > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (i = l.currentSlide, n !== !0 ? l.animateSlide(s, function() {
                l.postSlide(i)
            }) : l.postSlide(i))) : l.options.infinite === !1 && l.options.centerMode === !0 && (t < 0 || t > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (i = l.currentSlide, n !== !0 ? l.animateSlide(s, function() {
                l.postSlide(i)
            }) : l.postSlide(i))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), r = i < 0 ? l.slideCount % l.options.slidesToScroll !== 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + i : i >= l.slideCount ? l.slideCount % l.options.slidesToScroll !== 0 ? 0 : i - l.slideCount : i, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, r]), o = l.currentSlide, l.currentSlide = r, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (n !== !0 ? (l.fadeSlideOut(o), l.fadeSlide(r, function() {
                l.postSlide(r)
            })) : l.postSlide(r), void l.animateHeight()) : void(n !== !0 ? l.animateSlide(a, function() {
                l.postSlide(r)
            }) : l.postSlide(r)))
        }, e.prototype.startLoad = function() {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function() {
            var t, e, n, i, r = this;
            return t = r.touchObject.startX - r.touchObject.curX, e = r.touchObject.startY - r.touchObject.curY, n = Math.atan2(e, t), i = Math.round(180 * n / Math.PI), i < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? r.options.rtl === !1 ? "left" : "right" : i <= 360 && i >= 315 ? r.options.rtl === !1 ? "left" : "right" : i >= 135 && i <= 225 ? r.options.rtl === !1 ? "right" : "left" : r.options.verticalSwiping === !0 ? i >= 35 && i <= 135 ? "left" : "right" : "vertical"
        }, e.prototype.swipeEnd = function(t) {
            var e, n = this;
            if (n.dragging = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) switch (n.swipeDirection()) {
                case "left":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.slideHandler(e), n.currentDirection = 0, n.touchObject = {}, n.$slider.trigger("swipe", [n, "left"]);
                    break;
                case "right":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.slideHandler(e), n.currentDirection = 1, n.touchObject = {}, n.$slider.trigger("swipe", [n, "right"])
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && t.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) {
            var e, n, i, r, o, s = this;
            return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!s.dragging || o && 1 !== o.length) && (e = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, s.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), n = s.swipeDirection(), "vertical" !== n ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(), r = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), s.options.verticalSwiping === !0 && (r = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, s.options.infinite === !1 && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), s.options.vertical === !1 ? s.swipeLeft = e + i * r : s.swipeLeft = e + i * (s.$list.height() / s.listWidth) * r, s.options.verticalSwiping === !0 && (s.swipeLeft = e + i * r), s.options.fade !== !0 && s.options.touchMove !== !1 && (s.animating === !0 ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
        }, e.prototype.swipeStart = function(t) {
            var e, n = this;
            return 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(n.dragging = !0))
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function() {
            var t, e = this;
            t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, e.prototype.visibility = function() {
            var t = this;
            document[t.hidden] ? (t.paused = !0, t.autoPlayClear()) : t.options.autoplay === !0 && (t.paused = !1, t.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(n) {
                t(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + e.instanceUid + n
                })
            }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(n) {
                t(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + n,
                    id: "slick-slide" + e.instanceUid + n
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, e.prototype.activateADA = function() {
            var t = this;
            t.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.on("focus.slick blur.slick", "*", function(n) {
                n.stopImmediatePropagation();
                var i = t(this);
                setTimeout(function() {
                    e.isPlay && (i.is(":focus") ? (e.autoPlayClear(), e.paused = !0) : (e.paused = !1, e.autoPlay()))
                }, 0)
            })
        }, t.fn.slick = function() {
            var t, n, i = this,
                r = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                s = i.length;
            for (t = 0; t < s; t++)
                if ("object" == typeof r || "undefined" == typeof r ? i[t].slick = new e(i[t], r) : n = i[t].slick[r].apply(i[t].slick, o), "undefined" != typeof n) return n;
            return i
        }
    }), ! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof module && module.exports ? require("jquery") : jQuery)
    }(function(t) {
        function e(e) {
            var n = {},
                i = /^jQuery\d+$/;
            return t.each(e.attributes, function(t, e) {
                e.specified && !i.test(e.name) && (n[e.name] = e.value)
            }), n
        }

        function n(e, n) {
            var i = this,
                o = t(i);
            if (i.value === o.attr("placeholder") && o.hasClass(h.customClass))
                if (i.value = "", o.removeClass(h.customClass), o.data("placeholder-password")) {
                    if (o = o.hide().nextAll('input[type="password"]:first').show().attr("id", o.removeAttr("id").data("placeholder-id")), e === !0) return o[0].value = n, n;
                    o.focus()
                } else i == r() && i.select()
        }

        function i(i) {
            var r, o = this,
                s = t(o),
                a = o.id;
            if (i && "blur" === i.type) {
                if (s.hasClass(h.customClass)) return;
                if ("password" === o.type && (r = s.prevAll('input[type="text"]:first'), r.length > 0 && r.is(":visible"))) return
            }
            if ("" === o.value) {
                if ("password" === o.type) {
                    if (!s.data("placeholder-textinput")) {
                        try {
                            r = s.clone().prop({
                                type: "text"
                            })
                        } catch (l) {
                            r = t("<input>").attr(t.extend(e(this), {
                                type: "text"
                            }))
                        }
                        r.removeAttr("name").data({
                            "placeholder-enabled": !0,
                            "placeholder-password": s,
                            "placeholder-id": a
                        }).bind("focus.placeholder", n), s.data({
                            "placeholder-textinput": r,
                            "placeholder-id": a
                        }).before(r)
                    }
                    o.value = "", s = s.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", s.data("placeholder-id")).show()
                } else {
                    var u = s.data("placeholder-password");
                    u && (u[0].value = "", s.attr("id", s.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
                }
                s.addClass(h.customClass), s[0].value = s.attr("placeholder")
            } else s.removeClass(h.customClass)
        }

        function r() {
            try {
                return document.activeElement
            } catch (t) {}
        }
        var o, s, a = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
            l = "placeholder" in document.createElement("input") && !a,
            u = "placeholder" in document.createElement("textarea") && !a,
            c = t.valHooks,
            d = t.propHooks,
            h = {};
        l && u ? (s = t.fn.placeholder = function() {
            return this
        }, s.input = !0, s.textarea = !0) : (s = t.fn.placeholder = function(e) {
            var r = {
                customClass: "placeholder"
            };
            return h = t.extend({}, r, e), this.filter((l ? "textarea" : ":input") + "[placeholder]").not("." + h.customClass).bind({
                "focus.placeholder": n,
                "blur.placeholder": i
            }).data("placeholder-enabled", !0).trigger("blur.placeholder")
        }, s.input = l, s.textarea = u, o = {
            get: function(e) {
                var n = t(e),
                    i = n.data("placeholder-password");
                return i ? i[0].value : n.data("placeholder-enabled") && n.hasClass(h.customClass) ? "" : e.value
            },
            set: function(e, o) {
                var s, a, l = t(e);
                return "" !== o && (s = l.data("placeholder-textinput"), a = l.data("placeholder-password"), s ? (n.call(s[0], !0, o) || (e.value = o), s[0].value = o) : a && (n.call(e, !0, o) || (a[0].value = o),
                    e.value = o)), l.data("placeholder-enabled") ? ("" === o ? (e.value = o, e != r() && i.call(e)) : (l.hasClass(h.customClass) && n.call(e), e.value = o), l) : (e.value = o, l)
            }
        }, l || (c.input = o, d.value = o), u || (c.textarea = o, d.value = o), t(function() {
            t(document).delegate("form", "submit.placeholder", function() {
                var e = t("." + h.customClass, this).each(function() {
                    n.call(this, !0, "")
                });
                setTimeout(function() {
                    e.each(i)
                }, 10)
            })
        }), t(window).bind("beforeunload.placeholder", function() {
            t("." + h.customClass).each(function() {
                this.value = ""
            })
        }))
    }), ! function(t) {
        t.slidebars = function(e) {
            function n() {
                !u.disableOver || "number" == typeof u.disableOver && u.disableOver >= _ ? (S = !0, t("html").addClass("sb-init"), u.hideControlClasses && T.removeClass("sb-hide"), i()) : "number" == typeof u.disableOver && u.disableOver < _ && (S = !1, t("html").removeClass("sb-init"), u.hideControlClasses && T.addClass("sb-hide"), m.css("minHeight", ""), (y || w) && s())
            }

            function i() {
                m.css("minHeight", "");
                var e = parseInt(m.css("height"), 10),
                    n = parseInt(t("html").css("height"), 10);
                n > e && m.css("minHeight", t("html").css("height")), v && v.hasClass("sb-width-custom") && v.css("width", v.attr("data-sb-width")), b && b.hasClass("sb-width-custom") && b.css("width", b.attr("data-sb-width")), v && (v.hasClass("sb-style-push") || v.hasClass("sb-style-overlay")) && v.css("marginLeft", "-" + v.css("width")), b && (b.hasClass("sb-style-push") || b.hasClass("sb-style-overlay")) && b.css("marginRight", "-" + b.css("width")), u.scrollLock && t("html").addClass("sb-scroll-lock")
            }

            function r(t, e, n) {
                function r() {
                    o.removeAttr("style"), i()
                }
                var o;
                if (o = t.hasClass("sb-style-push") ? m.add(t).add(x) : t.hasClass("sb-style-overlay") ? t : m.add(x), "translate" === k) "0px" === e ? r() : o.css("transform", "translate( " + e + " )");
                else if ("side" === k) "0px" === e ? r() : ("-" === e[0] && (e = e.substr(1)), o.css(n, "0px"), setTimeout(function() {
                    o.css(n, e)
                }, 1));
                else if ("jQuery" === k) {
                    "-" === e[0] && (e = e.substr(1));
                    var s = {};
                    s[n] = e, o.stop().animate(s, 400)
                }
            }

            function o(e) {
                function n() {
                    S && "left" === e && v ? (t("html").addClass("sb-active sb-active-left"), v.addClass("sb-active"), r(v, v.css("width"), "left"), setTimeout(function() {
                        y = !0
                    }, 400)) : S && "right" === e && b && (t("html").addClass("sb-active sb-active-right"), b.addClass("sb-active"), r(b, "-" + b.css("width"), "right"), setTimeout(function() {
                        w = !0
                    }, 400))
                }
                "left" === e && v && w || "right" === e && b && y ? (s(), setTimeout(n, 400)) : n()
            }

            function s(e, n) {
                (y || w) && (y && (r(v, "0px", "left"), y = !1), w && (r(b, "0px", "right"), w = !1), setTimeout(function() {
                    t("html").removeClass("sb-active sb-active-left sb-active-right"), v && v.removeClass("sb-active"), b && b.removeClass("sb-active"), "undefined" != typeof e && (void 0 === typeof n && (n = "_self"), window.open(e, n))
                }, 400))
            }

            function a(t) {
                "left" === t && v && (y ? s() : o("left")), "right" === t && b && (w ? s() : o("right"))
            }

            function l(t, e) {
                t.stopPropagation(), t.preventDefault(), "touchend" === t.type && e.off("click")
            }
            var u = t.extend({
                    siteClose: !0,
                    scrollLock: !1,
                    disableOver: !1,
                    hideControlClasses: !1
                }, e),
                c = document.createElement("div").style,
                d = !1,
                h = !1;
            ("" === c.MozTransition || "" === c.WebkitTransition || "" === c.OTransition || "" === c.transition) && (d = !0), ("" === c.MozTransform || "" === c.WebkitTransform || "" === c.OTransform || "" === c.transform) && (h = !0);
            var p = navigator.userAgent,
                f = !1,
                g = !1;
            /Android/.test(p) ? f = p.substr(p.indexOf("Android") + 8, 3) : /(iPhone|iPod|iPad)/.test(p) && (g = p.substr(p.indexOf("OS ") + 3, 3).replace("_", ".")), (f && 3 > f || g && 5 > g) && t("html").addClass("sb-static");
            var m = t("#sb-site, .sb-site-container");
            if (t(".sb-left").length) var v = t(".sb-left"),
                y = !1;
            if (t(".sb-right").length) var b = t(".sb-right"),
                w = !1;
            var S = !1,
                _ = t(window).width(),
                T = t(".sb-toggle-left, .sb-toggle-right, .sb-open-left, .sb-open-right, .sb-close"),
                x = t(".sb-slide");
            n(), t(window).resize(function() {
                var e = t(window).width();
                _ !== e && (_ = e, n(), y && o("left"), w && o("right"))
            });
            var k;
            d && h ? (k = "translate", f && 4.4 > f && (k = "side")) : k = "jQuery", this.slidebars = {
                open: o,
                close: s,
                toggle: a,
                init: function() {
                    return S
                },
                active: function(t) {
                    return "left" === t && v ? y : "right" === t && b ? w : void 0
                },
                destroy: function(t) {
                    "left" === t && v && (y && s(), setTimeout(function() {
                        v.remove(), v = !1
                    }, 400)), "right" === t && b && (w && s(), setTimeout(function() {
                        b.remove(), b = !1
                    }, 400))
                }
            }, t(".sb-toggle-left").on("touchend click", function(e) {
                l(e, t(this)), a("left")
            }), t(".sb-toggle-right").on("touchend click", function(e) {
                l(e, t(this)), a("right")
            }), t(".sb-open-left").on("touchend click", function(e) {
                l(e, t(this)), o("left")
            }), t(".sb-open-right").on("touchend click", function(e) {
                l(e, t(this)), o("right")
            }), t(".sb-close").on("touchend click", function(e) {
                if (t(this).is("a") || t(this).children().is("a")) {
                    if ("click" === e.type) {
                        e.stopPropagation(), e.preventDefault();
                        var n = t(this).is("a") ? t(this) : t(this).find("a"),
                            i = n.attr("href"),
                            r = n.attr("target") ? n.attr("target") : "_self";
                        s(i, r)
                    }
                } else l(e, t(this)), s()
            }), m.on("touchend click", function(e) {
                u.siteClose && (y || w) && (l(e, t(this)), s())
            })
        }
    }(jQuery),
    function(t) {
        function e() {
            function e(e, n) {
                try {
                    var r = i();
                    !t.isEmpty(r) && t.isFunction(r.trackGoal) && r.trackGoal(e, n)
                } catch (o) {}
            }

            function n(e, n, r) {
                try {
                    var o = i();
                    !t.isEmpty(o) && t.isFunction(o.trackEvent) && o.trackEvent(e, n, r)
                } catch (s) {}
            }

            function i() {
                return "undefined" != typeof Piwik ? Piwik.getAsyncTracker() : {}
            }
            var r = {
                    SIGN_UP_SUCCESS: 1,
                    LOG_IN_SUCCESS: 2,
                    DEPOSIT_SUBMIT: 3,
                    WITHDRAWAL_SUBMIT: 5,
                    SIGN_UP_FAIL: 7,
                    LOG_IN_FAIL: 8
                },
                o = {
                    MEMBER_ACTIONS: "Member Actions",
                    PAYMENT_ACTIONS: "Payment Actions"
                },
                s = {
                    SIGN_UP_FAIL: "Sign Up Fail",
                    LOG_IN_FAIL: "Log In Fail",
                    LOG_IN_SUCCESS: "Log In Success",
                    WITHDRAWAL_SUCCESS: "Withdrawal Success",
                    WITHDRAWAL_FAIL: ":gateway: - Withdrawal Fail"
                };
            return {
                goalMap: r,
                eventMap: o,
                actionMap: s,
                trackGoal: e,
                trackEvent: n
            }
        }
        window.Pt = window.Pt || {}, Pt.Managers = Pt.Managers || {}, Pt.Managers.TrackingManager = new e
    }(_),
    function(t, e) {
        function n() {
            return new Date(Date.UTC.apply(Date, arguments))
        }

        function i() {
            var t = new Date;
            return n(t.getFullYear(), t.getMonth(), t.getDate())
        }

        function r(t, e) {
            return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate()
        }

        function o(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }

        function s(e, n) {
            function i(t, e) {
                return e.toLowerCase()
            }
            var r, o = t(e).data(),
                s = {},
                a = new RegExp("^" + n.toLowerCase() + "([A-Z])");
            n = new RegExp("^" + n.toLowerCase());
            for (var l in o) n.test(l) && (r = l.replace(a, i), s[r] = o[l]);
            return s
        }

        function a(e) {
            var n = {};
            if (g[e] || (e = e.split("-")[0], g[e])) {
                var i = g[e];
                return t.each(f, function(t, e) {
                    e in i && (n[e] = i[e])
                }), n
            }
        }
        var l = function() {
                var e = {
                    get: function(t) {
                        return this.slice(t)[0]
                    },
                    contains: function(t) {
                        for (var e = t && t.valueOf(), n = 0, i = this.length; n < i; n++)
                            if (this[n].valueOf() === e) return n;
                        return -1
                    },
                    remove: function(t) {
                        this.splice(t, 1)
                    },
                    replace: function(e) {
                        e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
                    },
                    clear: function() {
                        this.length = 0
                    },
                    copy: function() {
                        var t = new l;
                        return t.replace(this), t
                    }
                };
                return function() {
                    var n = [];
                    return n.push.apply(n, arguments), t.extend(n, e), n
                }
            }(),
            u = function(e, n) {
                this._process_options(n), this.dates = new l, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = t(e), this.isInline = !1, this.isInput = this.element.is("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(m.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot .today, tfoot .clear").attr("colspan", function(t, e) {
                    return parseInt(e) + 1
                }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDatesDisabled(this.o.datesDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
            };
        u.prototype = {
            constructor: u,
            _process_options: function(r) {
                this._o = t.extend({}, this._o, r);
                var o = this.o = t.extend({}, this._o),
                    s = o.language;
                switch (g[s] || (s = s.split("-")[0], g[s] || (s = p.language)), o.language = s, o.startView) {
                    case 2:
                    case "decade":
                        o.startView = 2;
                        break;
                    case 1:
                    case "year":
                        o.startView = 1;
                        break;
                    default:
                        o.startView = 0
                }
                switch (o.minViewMode) {
                    case 1:
                    case "months":
                        o.minViewMode = 1;
                        break;
                    case 2:
                    case "years":
                        o.minViewMode = 2;
                        break;
                    default:
                        o.minViewMode = 0
                }
                o.startView = Math.max(o.startView, o.minViewMode), o.multidate !== !0 && (o.multidate = Number(o.multidate) || !1, o.multidate !== !1 && (o.multidate = Math.max(0, o.multidate))), o.multidateSeparator = String(o.multidateSeparator), o.weekStart %= 7, o.weekEnd = (o.weekStart + 6) % 7;
                var a = m.parseFormat(o.format);
                if (o.startDate !== -(1 / 0) && (o.startDate ? o.startDate instanceof Date ? o.startDate = this._local_to_utc(this._zero_time(o.startDate)) : o.startDate = m.parseDate(o.startDate, a, o.language) : o.startDate = -(1 / 0)), o.endDate !== 1 / 0 && (o.endDate ? o.endDate instanceof Date ? o.endDate = this._local_to_utc(this._zero_time(o.endDate)) : o.endDate = m.parseDate(o.endDate, a, o.language) : o.endDate = 1 / 0), o.daysOfWeekDisabled = o.daysOfWeekDisabled || [], t.isArray(o.daysOfWeekDisabled) || (o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/)), o.daysOfWeekDisabled = t.map(o.daysOfWeekDisabled, function(t) {
                        return parseInt(t, 10)
                    }), o.datesDisabled = o.datesDisabled || [], !t.isArray(o.datesDisabled)) {
                    var l = [];
                    l.push(m.parseDate(o.datesDisabled, a, o.language)), o.datesDisabled = l
                }
                o.datesDisabled = t.map(o.datesDisabled, function(t) {
                    return m.parseDate(t, a, o.language)
                });
                var u = String(o.orientation).toLowerCase().split(/\s+/g),
                    c = o.orientation.toLowerCase();
                if (u = t.grep(u, function(t) {
                        return /^auto|left|right|top|bottom$/.test(t)
                    }), o.orientation = {
                        x: "auto",
                        y: "auto"
                    }, c && "auto" !== c)
                    if (1 === u.length) switch (u[0]) {
                        case "top":
                        case "bottom":
                            o.orientation.y = u[0];
                            break;
                        case "left":
                        case "right":
                            o.orientation.x = u[0]
                    } else c = t.grep(u, function(t) {
                        return /^left|right$/.test(t)
                    }), o.orientation.x = c[0] || "auto", c = t.grep(u, function(t) {
                        return /^top|bottom$/.test(t)
                    }), o.orientation.y = c[0] || "auto";
                    else;
                if (o.defaultViewDate) {
                    var d = o.defaultViewDate.year || (new Date).getFullYear(),
                        h = o.defaultViewDate.month || 0,
                        f = o.defaultViewDate.day || 1;
                    o.defaultViewDate = n(d, h, f)
                } else o.defaultViewDate = i();
                o.showOnFocus = o.showOnFocus === e || o.showOnFocus
            },
            _events: [],
            _secondaryEvents: [],
            _applyEvents: function(t) {
                for (var n, i, r, o = 0; o < t.length; o++) n = t[o][0], 2 === t[o].length ? (i = e, r = t[o][1]) : 3 === t[o].length && (i = t[o][1], r = t[o][2]), n.on(r, i)
            },
            _unapplyEvents: function(t) {
                for (var n, i, r, o = 0; o < t.length; o++) n = t[o][0], 2 === t[o].length ? (r = e, i = t[o][1]) : 3 === t[o].length && (r = t[o][1], i = t[o][2]), n.off(i, r)
            },
            _buildEvents: function() {
                var e = {
                    keyup: t.proxy(function(e) {
                        t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1 && this.update()
                    }, this),
                    keydown: t.proxy(this.keydown, this)
                };
                this.o.showOnFocus === !0 && (e.focus = t.proxy(this.show, this)), this.isInput ? this._events = [
                    [this.element, e]
                ] : this.component && this.hasInput ? this._events = [
                    [this.element.find("input"), e],
                    [this.component, {
                        click: t.proxy(this.show, this)
                    }]
                ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                    [this.element, {
                        click: t.proxy(this.show, this)
                    }]
                ], this._events.push([this.element, "*", {
                    blur: t.proxy(function(t) {
                        this._focused_from = t.target
                    }, this)
                }], [this.element, {
                    blur: t.proxy(function(t) {
                        this._focused_from = t.target
                    }, this)
                }]), this._secondaryEvents = [
                    [this.picker, {
                        click: t.proxy(this.click, this)
                    }],
                    [t(window), {
                        resize: t.proxy(this.place, this)
                    }],
                    [t(document), {
                        "mousedown touchstart": t.proxy(function(t) {
                            this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.hide()
                        }, this)
                    }]
                ]
            },
            _attachEvents: function() {
                this._detachEvents(), this._applyEvents(this._events)
            },
            _detachEvents: function() {
                this._unapplyEvents(this._events)
            },
            _attachSecondaryEvents: function() {
                this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
            },
            _detachSecondaryEvents: function() {
                this._unapplyEvents(this._secondaryEvents)
            },
            _trigger: function(e, n) {
                var i = n || this.dates.get(-1),
                    r = this._utc_to_local(i);
                this.element.trigger({
                    type: e,
                    date: r,
                    dates: t.map(this.dates, this._utc_to_local),
                    format: t.proxy(function(t, e) {
                        0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
                        var n = this.dates.get(t);
                        return m.formatDate(n, e, this.o.language)
                    }, this)
                })
            },
            show: function() {
                if (!this.element.attr("readonly") || this.o.enableOnReadonly !== !1) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && t(this.element).blur(), this
            },
            hide: function() {
                return this.isInline ? this : this.picker.is(":visible") ? (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"), this) : this
            },
            remove: function() {
                return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
            },
            _utc_to_local: function(t) {
                return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
            },
            _local_to_utc: function(t) {
                return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
            },
            _zero_time: function(t) {
                return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
            },
            _zero_utc_time: function(t) {
                return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
            },
            getDates: function() {
                return t.map(this.dates, this._utc_to_local)
            },
            getUTCDates: function() {
                return t.map(this.dates, function(t) {
                    return new Date(t)
                })
            },
            getDate: function() {
                return this._utc_to_local(this.getUTCDate())
            },
            getUTCDate: function() {
                var t = this.dates.get(-1);
                return "undefined" != typeof t ? new Date(t) : null
            },
            clearDates: function() {
                var t;
                this.isInput ? t = this.element : this.component && (t = this.element.find("input")), t && t.val("").change(), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
            },
            setDates: function() {
                var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, e), this._trigger("changeDate"), this.setValue(), this
            },
            setUTCDates: function() {
                var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, t.map(e, this._utc_to_local)), this._trigger("changeDate"), this.setValue(), this
            },
            setDate: o("setDates"),
            setUTCDate: o("setUTCDates"),
            setValue: function() {
                var t = this.getFormattedDate();
                return this.isInput ? this.element.val(t).change() : this.component && this.element.find("input").val(t).change(), this
            },
            getFormattedDate: function(n) {
                n === e && (n = this.o.format);
                var i = this.o.language;
                return t.map(this.dates, function(t) {
                    return m.formatDate(t, n, i)
                }).join(this.o.multidateSeparator)
            },
            setStartDate: function(t) {
                return this._process_options({
                    startDate: t
                }), this.update(), this.updateNavArrows(), this
            },
            setEndDate: function(t) {
                return this._process_options({
                    endDate: t
                }), this.update(), this.updateNavArrows(), this
            },
            setDaysOfWeekDisabled: function(t) {
                return this._process_options({
                    daysOfWeekDisabled: t
                }), this.update(), this.updateNavArrows(), this
            },
            setDatesDisabled: function(t) {
                this._process_options({
                    datesDisabled: t
                }), this.update(), this.updateNavArrows()
            },
            place: function() {
                if (this.isInline) return this;
                var e = this.picker.outerWidth(),
                    n = this.picker.outerHeight(),
                    i = 10,
                    r = t(this.o.container).width(),
                    o = t(this.o.container).height(),
                    s = t(this.o.container).scrollTop(),
                    a = t(this.o.container).offset(),
                    l = [];
                this.element.parents().each(function() {
                    var e = t(this).css("z-index");
                    "auto" !== e && 0 !== e && l.push(parseInt(e))
                });
                var u = Math.max.apply(Math, l) + 10,
                    c = this.component ? this.component.parent().offset() : this.element.offset(),
                    d = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    h = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    p = c.left - a.left,
                    f = c.top - a.top;
                this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (p -= e - h)) : c.left < 0 ? (this.picker.addClass("datepicker-orient-left"), p -= c.left - i) : p + e > r ? (this.picker.addClass("datepicker-orient-right"), p = c.left + h - e) : this.picker.addClass("datepicker-orient-left");
                var g, m, v = this.o.orientation.y;
                if ("auto" === v && (g = -s + f - n, m = s + o - (f + d + n), v = Math.max(g, m) === m ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + v), "top" === v ? f += d : f -= n + parseInt(this.picker.css("padding-top")), this.o.rtl) {
                    var y = r - (p + h);
                    this.picker.css({
                        top: f,
                        right: y,
                        zIndex: u
                    })
                } else this.picker.css({
                    top: f,
                    left: p,
                    zIndex: u
                });
                return this
            },
            _allow_update: !0,
            update: function() {
                if (!this._allow_update) return this;
                var e = this.dates.copy(),
                    n = [],
                    i = !1;
                return arguments.length ? (t.each(arguments, t.proxy(function(t, e) {
                    e instanceof Date && (e = this._local_to_utc(e)), n.push(e)
                }, this)), i = !0) : (n = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), n = n && this.o.multidate ? n.split(this.o.multidateSeparator) : [n], delete this.element.data().date), n = t.map(n, t.proxy(function(t) {
                    return m.parseDate(t, this.o.format, this.o.language)
                }, this)), n = t.grep(n, t.proxy(function(t) {
                    return t < this.o.startDate || t > this.o.endDate || !t
                }, this), !0), this.dates.replace(n), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)), i ? this.setValue() : n.length && String(e) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && e.length && this._trigger("clearDate"), this.fill(), this
            },
            fillDow: function() {
                var t = this.o.weekStart,
                    e = "<tr>";
                if (this.o.calendarWeeks) {
                    this.picker.find(".datepicker-days thead tr:first-child .datepicker-switch").attr("colspan", function(t, e) {
                        return parseInt(e) + 1
                    });
                    var n = '<th class="cw">&#160;</th>';
                    e += n
                }
                for (; t < this.o.weekStart + 7;) e += '<th class="dow">' + g[this.o.language].daysMin[t++ % 7] + "</th>";
                e += "</tr>", this.picker.find(".datepicker-days thead").append(e)
            },
            fillMonths: function() {
                for (var t = "", e = 0; e < 12;) t += '<span class="month">' + g[this.o.language].monthsShort[e++] + "</span>";
                this.picker.find(".datepicker-months td").html(t)
            },
            setRange: function(e) {
                e && e.length ? this.range = t.map(e, function(t) {
                    return t.valueOf()
                }) : delete this.range, this.fill()
            },
            getClassNames: function(e) {
                var n = [],
                    i = this.viewDate.getUTCFullYear(),
                    o = this.viewDate.getUTCMonth(),
                    s = new Date;
                return e.getUTCFullYear() < i || e.getUTCFullYear() === i && e.getUTCMonth() < o ? n.push("old") : (e.getUTCFullYear() > i || e.getUTCFullYear() === i && e.getUTCMonth() > o) && n.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && n.push("focused"), this.o.todayHighlight && e.getUTCFullYear() === s.getFullYear() && e.getUTCMonth() === s.getMonth() && e.getUTCDate() === s.getDate() && n.push("today"), this.dates.contains(e) !== -1 && n.push("active"), (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) && n.push("disabled"), this.o.datesDisabled.length > 0 && t.grep(this.o.datesDisabled, function(t) {
                    return r(e, t)
                }).length > 0 && n.push("disabled", "disabled-date"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && n.push("range"), t.inArray(e.valueOf(), this.range) !== -1 && n.push("selected")), n
            },
            fill: function() {
                var i, r = new Date(this.viewDate),
                    o = r.getUTCFullYear(),
                    s = r.getUTCMonth(),
                    a = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
                    l = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
                    u = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                    c = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                    d = g[this.o.language].today || g.en.today || "",
                    h = g[this.o.language].clear || g.en.clear || "";
                if (!isNaN(o) && !isNaN(s)) {
                    this.picker.find(".datepicker-days thead .datepicker-switch").text(g[this.o.language].months[s] + " " + o), this.picker.find("tfoot .today").text(d).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot .clear").text(h).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths();
                    var p = n(o, s - 1, 28),
                        f = m.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
                    p.setUTCDate(f), p.setUTCDate(f - (p.getUTCDay() - this.o.weekStart + 7) % 7);
                    var v = new Date(p);
                    v.setUTCDate(v.getUTCDate() + 42), v = v.valueOf();
                    for (var y, b = []; p.valueOf() < v;) {
                        if (p.getUTCDay() === this.o.weekStart && (b.push("<tr>"), this.o.calendarWeeks)) {
                            var w = new Date(+p + (this.o.weekStart - p.getUTCDay() - 7) % 7 * 864e5),
                                S = new Date(Number(w) + (11 - w.getUTCDay()) % 7 * 864e5),
                                _ = new Date(Number(_ = n(S.getUTCFullYear(), 0, 1)) + (11 - _.getUTCDay()) % 7 * 864e5),
                                T = (S - _) / 864e5 / 7 + 1;
                            b.push('<td class="cw">' + T + "</td>")
                        }
                        if (y = this.getClassNames(p), y.push("day"), this.o.beforeShowDay !== t.noop) {
                            var x = this.o.beforeShowDay(this._utc_to_local(p));
                            x === e ? x = {} : "boolean" == typeof x ? x = {
                                enabled: x
                            } : "string" == typeof x && (x = {
                                classes: x
                            }), x.enabled === !1 && y.push("disabled"), x.classes && (y = y.concat(x.classes.split(/\s+/))), x.tooltip && (i = x.tooltip)
                        }
                        y = t.unique(y), b.push('<td class="' + y.join(" ") + '"' + (i ? ' title="' + i + '"' : "") + ">" + p.getUTCDate() + "</td>"), i = null, p.getUTCDay() === this.o.weekEnd && b.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1)
                    }
                    this.picker.find(".datepicker-days tbody").empty().append(b.join(""));
                    var k = this.picker.find(".datepicker-months").find("th:eq(1)").text(o).end().find("span").removeClass("active");
                    if (t.each(this.dates, function(t, e) {
                            e.getUTCFullYear() === o && k.eq(e.getUTCMonth()).addClass("active")
                        }), (o < a || o > u) && k.addClass("disabled"), o === a && k.slice(0, l).addClass("disabled"), o === u && k.slice(c + 1).addClass("disabled"), this.o.beforeShowMonth !== t.noop) {
                        var C = this;
                        t.each(k, function(e, n) {
                            if (!t(n).hasClass("disabled")) {
                                var i = new Date(o, e, 1),
                                    r = C.o.beforeShowMonth(i);
                                r === !1 && t(n).addClass("disabled")
                            }
                        })
                    }
                    b = "", o = 10 * parseInt(o / 10, 10);
                    var D = this.picker.find(".datepicker-years").find("th:eq(1)").text(o + "-" + (o + 9)).end().find("td");
                    o -= 1;
                    for (var A, $ = t.map(this.dates, function(t) {
                            return t.getUTCFullYear()
                        }), M = -1; M < 11; M++) A = ["year"], M === -1 ? A.push("old") : 10 === M && A.push("new"), t.inArray(o, $) !== -1 && A.push("active"), (o < a || o > u) && A.push("disabled"), b += '<span class="' + A.join(" ") + '">' + o + "</span>", o += 1;
                    D.html(b)
                }
            },
            updateNavArrows: function() {
                if (this._allow_update) {
                    var t = new Date(this.viewDate),
                        e = t.getUTCFullYear(),
                        n = t.getUTCMonth();
                    switch (this.viewMode) {
                        case 0:
                            this.o.startDate !== -(1 / 0) && e <= this.o.startDate.getUTCFullYear() && n <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                                visibility: "hidden"
                            }) : this.picker.find(".prev").css({
                                visibility: "visible"
                            }), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() && n >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                                visibility: "hidden"
                            }) : this.picker.find(".next").css({
                                visibility: "visible"
                            });
                            break;
                        case 1:
                        case 2:
                            this.o.startDate !== -(1 / 0) && e <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                                visibility: "hidden"
                            }) : this.picker.find(".prev").css({
                                visibility: "visible"
                            }), this.o.endDate !== 1 / 0 && e >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                                visibility: "hidden"
                            }) : this.picker.find(".next").css({
                                visibility: "visible"
                            })
                    }
                }
            },
            click: function(e) {
                e.preventDefault();
                var i, r, o, s = t(e.target).closest("span, td, th");
                if (1 === s.length) switch (s[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (s[0].className) {
                            case "datepicker-switch":
                                this.showMode(1);
                                break;
                            case "prev":
                            case "next":
                                var a = m.modes[this.viewMode].navStep * ("prev" === s[0].className ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, a), this._trigger("changeMonth", this.viewDate);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, a), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                                }
                                this.fill();
                                break;
                            case "today":
                                var l = new Date;
                                l = n(l.getFullYear(), l.getMonth(), l.getDate(), 0, 0, 0), this.showMode(-2);
                                var u = "linked" === this.o.todayBtn ? null : "view";
                                this._setDate(l, u);
                                break;
                            case "clear":
                                this.clearDates()
                        }
                        break;
                    case "span":
                        s.hasClass("disabled") || (this.viewDate.setUTCDate(1), s.hasClass("month") ? (o = 1, r = s.parent().find("span").index(s), i = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(r), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(n(i, r, o))) : (o = 1, r = 0, i = parseInt(s.text(), 10) || 0, this.viewDate.setUTCFullYear(i), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(n(i, r, o))), this.showMode(-1), this.fill());
                        break;
                    case "td":
                        s.hasClass("day") && !s.hasClass("disabled") && (o = parseInt(s.text(), 10) || 1, i = this.viewDate.getUTCFullYear(), r = this.viewDate.getUTCMonth(), s.hasClass("old") ? 0 === r ? (r = 11, i -= 1) : r -= 1 : s.hasClass("new") && (11 === r ? (r = 0, i += 1) : r += 1), this._setDate(n(i, r, o)))
                }
                this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(), delete this._focused_from
            },
            _toggle_multidate: function(t) {
                var e = this.dates.contains(t);
                if (t || this.dates.clear(), e !== -1 ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(t)) : this.dates.push(t), "number" == typeof this.o.multidate)
                    for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
            },
            _setDate: function(t, e) {
                e && "date" !== e || this._toggle_multidate(t && new Date(t)), e && "view" !== e || (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), e && "view" === e || this._trigger("changeDate");
                var n;
                this.isInput ? n = this.element : this.component && (n = this.element.find("input")), n && n.change(), !this.o.autoclose || e && "date" !== e || this.hide()
            },
            moveMonth: function(t, n) {
                if (!t) return e;
                if (!n) return t;
                var i, r, o = new Date(t.valueOf()),
                    s = o.getUTCDate(),
                    a = o.getUTCMonth(),
                    l = Math.abs(n);
                if (n = n > 0 ? 1 : -1, 1 === l) r = n === -1 ? function() {
                    return o.getUTCMonth() === a
                } : function() {
                    return o.getUTCMonth() !== i
                }, i = a + n, o.setUTCMonth(i), (i < 0 || i > 11) && (i = (i + 12) % 12);
                else {
                    for (var u = 0; u < l; u++) o = this.moveMonth(o, n);
                    i = o.getUTCMonth(), o.setUTCDate(s), r = function() {
                        return i !== o.getUTCMonth()
                    }
                }
                for (; r();) o.setUTCDate(--s), o.setUTCMonth(i);
                return o
            },
            moveYear: function(t, e) {
                return this.moveMonth(t, 12 * e)
            },
            dateWithinRange: function(t) {
                return t >= this.o.startDate && t <= this.o.endDate
            },
            keydown: function(t) {
                if (!this.picker.is(":visible")) return void(27 === t.keyCode && this.show());
                var e, n, r, o = !1,
                    s = this.focusDate || this.viewDate;
                switch (t.keyCode) {
                    case 27:
                        this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault();
                        break;
                    case 37:
                    case 39:
                        if (!this.o.keyboardNavigation) break;
                        e = 37 === t.keyCode ? -1 : 1, t.ctrlKey ? (n = this.moveYear(this.dates.get(-1) || i(), e), r = this.moveYear(s, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (n = this.moveMonth(this.dates.get(-1) || i(), e), r = this.moveMonth(s, e), this._trigger("changeMonth", this.viewDate)) : (n = new Date(this.dates.get(-1) || i()), n.setUTCDate(n.getUTCDate() + e), r = new Date(s), r.setUTCDate(s.getUTCDate() + e)), this.dateWithinRange(r) && (this.focusDate = this.viewDate = r, this.setValue(), this.fill(), t.preventDefault());
                        break;
                    case 38:
                    case 40:
                        if (!this.o.keyboardNavigation) break;
                        e = 38 === t.keyCode ? -1 : 1, t.ctrlKey ? (n = this.moveYear(this.dates.get(-1) || i(), e), r = this.moveYear(s, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (n = this.moveMonth(this.dates.get(-1) || i(), e), r = this.moveMonth(s, e), this._trigger("changeMonth", this.viewDate)) : (n = new Date(this.dates.get(-1) || i()), n.setUTCDate(n.getUTCDate() + 7 * e), r = new Date(s), r.setUTCDate(s.getUTCDate() + 7 * e)), this.dateWithinRange(r) && (this.focusDate = this.viewDate = r, this.setValue(), this.fill(), t.preventDefault());
                        break;
                    case 32:
                        break;
                    case 13:
                        s = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(s), o = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), "function" == typeof t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, this.o.autoclose && this.hide());
                        break;
                    case 9:
                        this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
                }
                if (o) {
                    this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate");
                    var a;
                    this.isInput ? a = this.element : this.component && (a = this.element.find("input")), a && a.change()
                }
            },
            showMode: function(t) {
                t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))), this.picker.children("div").hide().filter(".datepicker-" + m.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
            }
        };
        var c = function(e, n) {
            this.element = t(e), this.inputs = t.map(n.inputs, function(t) {
                return t.jquery ? t[0] : t
            }), delete n.inputs, h.call(t(this.inputs), n).bind("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function(e) {
                return t(e).data("datepicker")
            }), this.updateDates()
        };
        c.prototype = {
            updateDates: function() {
                this.dates = t.map(this.pickers, function(t) {
                    return t.getUTCDate()
                }), this.updateRanges()
            },
            updateRanges: function() {
                var e = t.map(this.dates, function(t) {
                    return t.valueOf()
                });
                t.each(this.pickers, function(t, n) {
                    n.setRange(e)
                })
            },
            dateUpdated: function(e) {
                if (!this.updating) {
                    this.updating = !0;
                    var n = t(e.target).data("datepicker"),
                        i = n.getUTCDate(),
                        r = t.inArray(e.target, this.inputs),
                        o = r - 1,
                        s = r + 1,
                        a = this.inputs.length;
                    if (r !== -1) {
                        if (t.each(this.pickers, function(t, e) {
                                e.getUTCDate() || e.setUTCDate(i)
                            }), i < this.dates[o])
                            for (; o >= 0 && i < this.dates[o];) this.pickers[o--].setUTCDate(i);
                        else if (i > this.dates[s])
                            for (; s < a && i > this.dates[s];) this.pickers[s++].setUTCDate(i);
                        this.updateDates(), delete this.updating
                    }
                }
            },
            remove: function() {
                t.map(this.pickers, function(t) {
                    t.remove()
                }), delete this.element.data().datepicker
            }
        };
        var d = t.fn.datepicker,
            h = function(n) {
                var i = Array.apply(null, arguments);
                i.shift();
                var r;
                return this.each(function() {
                    var o = t(this),
                        l = o.data("datepicker"),
                        d = "object" == typeof n && n;
                    if (!l) {
                        var h = s(this, "date"),
                            f = t.extend({}, p, h, d),
                            g = a(f.language),
                            m = t.extend({}, p, g, h, d);
                        if (o.hasClass("input-daterange") || m.inputs) {
                            var v = {
                                inputs: m.inputs || o.find("input").toArray()
                            };
                            o.data("datepicker", l = new c(this, t.extend(m, v)))
                        } else o.data("datepicker", l = new u(this, m))
                    }
                    if ("string" == typeof n && "function" == typeof l[n] && (r = l[n].apply(l, i), r !== e)) return !1
                }), r !== e ? r : this
            };
        t.fn.datepicker = h;
        var p = t.fn.datepicker.defaults = {
                autoclose: !1,
                beforeShowDay: t.noop,
                beforeShowMonth: t.noop,
                calendarWeeks: !1,
                clearBtn: !1,
                toggleActive: !1,
                daysOfWeekDisabled: [],
                datesDisabled: [],
                endDate: 1 / 0,
                forceParse: !0,
                format: "mm/dd/yyyy",
                keyboardNavigation: !0,
                language: "en",
                minViewMode: 0,
                multidate: !1,
                multidateSeparator: ",",
                orientation: "auto",
                rtl: !1,
                startDate: -(1 / 0),
                startView: 0,
                todayBtn: !1,
                todayHighlight: !1,
                weekStart: 0,
                disableTouchKeyboard: !1,
                enableOnReadonly: !0,
                container: "body"
            },
            f = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
        t.fn.datepicker.Constructor = u;
        var g = t.fn.datepicker.dates = {
                en: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    today: "Today",
                    clear: "Clear"
                }
            },
            m = {
                modes: [{
                    clsName: "days",
                    navFnc: "Month",
                    navStep: 1
                }, {
                    clsName: "months",
                    navFnc: "FullYear",
                    navStep: 1
                }, {
                    clsName: "years",
                    navFnc: "FullYear",
                    navStep: 10
                }],
                isLeapYear: function(t) {
                    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
                },
                getDaysInMonth: function(t, e) {
                    return [31, m.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
                },
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
                parseFormat: function(t) {
                    var e = t.replace(this.validParts, "\0").split("\0"),
                        n = t.match(this.validParts);
                    if (!e || !e.length || !n || 0 === n.length) throw new Error("Invalid date format.");
                    return {
                        separators: e,
                        parts: n
                    }
                },
                parseDate: function(i, r, o) {
                    function s() {
                        var t = this.slice(0, h[c].length),
                            e = h[c].slice(0, t.length);
                        return t.toLowerCase() === e.toLowerCase()
                    }
                    if (!i) return e;
                    if (i instanceof Date) return i;
                    "string" == typeof r && (r = m.parseFormat(r));
                    var a, l, c, d = /([\-+]\d+)([dmwy])/,
                        h = i.match(/([\-+]\d+)([dmwy])/g);
                    if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(i)) {
                        for (i = new Date, c = 0; c < h.length; c++) switch (a = d.exec(h[c]), l = parseInt(a[1]), a[2]) {
                            case "d":
                                i.setUTCDate(i.getUTCDate() + l);
                                break;
                            case "m":
                                i = u.prototype.moveMonth.call(u.prototype, i, l);
                                break;
                            case "w":
                                i.setUTCDate(i.getUTCDate() + 7 * l);
                                break;
                            case "y":
                                i = u.prototype.moveYear.call(u.prototype, i, l)
                        }
                        return n(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate(), 0, 0, 0)
                    }
                    h = i && i.match(this.nonpunctuation) || [],
                        i = new Date;
                    var p, f, v = {},
                        y = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                        b = {
                            yyyy: function(t, e) {
                                return t.setUTCFullYear(e)
                            },
                            yy: function(t, e) {
                                return t.setUTCFullYear(2e3 + e)
                            },
                            m: function(t, e) {
                                if (isNaN(t)) return t;
                                for (e -= 1; e < 0;) e += 12;
                                for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                                return t
                            },
                            d: function(t, e) {
                                return t.setUTCDate(e)
                            }
                        };
                    b.M = b.MM = b.mm = b.m, b.dd = b.d, i = n(i.getFullYear(), i.getMonth(), i.getDate(), 0, 0, 0);
                    var w = r.parts.slice();
                    if (h.length !== w.length && (w = t(w).filter(function(e, n) {
                            return t.inArray(n, y) !== -1
                        }).toArray()), h.length === w.length) {
                        var S;
                        for (c = 0, S = w.length; c < S; c++) {
                            if (p = parseInt(h[c], 10), a = w[c], isNaN(p)) switch (a) {
                                case "MM":
                                    f = t(g[o].months).filter(s), p = t.inArray(f[0], g[o].months) + 1;
                                    break;
                                case "M":
                                    f = t(g[o].monthsShort).filter(s), p = t.inArray(f[0], g[o].monthsShort) + 1
                            }
                            v[a] = p
                        }
                        var _, T;
                        for (c = 0; c < y.length; c++) T = y[c], T in v && !isNaN(v[T]) && (_ = new Date(i), b[T](_, v[T]), isNaN(_) || (i = _))
                    }
                    return i
                },
                formatDate: function(e, n, i) {
                    if (!e) return "";
                    "string" == typeof n && (n = m.parseFormat(n));
                    var r = {
                        d: e.getUTCDate(),
                        D: g[i].daysShort[e.getUTCDay()],
                        DD: g[i].days[e.getUTCDay()],
                        m: e.getUTCMonth() + 1,
                        M: g[i].monthsShort[e.getUTCMonth()],
                        MM: g[i].months[e.getUTCMonth()],
                        yy: e.getUTCFullYear().toString().substring(2),
                        yyyy: e.getUTCFullYear()
                    };
                    r.dd = (r.d < 10 ? "0" : "") + r.d, r.mm = (r.m < 10 ? "0" : "") + r.m, e = [];
                    for (var o = t.extend([], n.separators), s = 0, a = n.parts.length; s <= a; s++) o.length && e.push(o.shift()), e.push(r[n.parts[s]]);
                    return e.join("")
                },
                headTemplate: '<thead><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',
                contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
                footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
            };
        m.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + m.headTemplate + "<tbody></tbody>" + m.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + m.headTemplate + m.contTemplate + m.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + m.headTemplate + m.contTemplate + m.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = m, t.fn.datepicker.noConflict = function() {
            return t.fn.datepicker = d, this
        }, t.fn.datepicker.version = "1.4.0", t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(e) {
            var n = t(this);
            n.data("datepicker") || (e.preventDefault(), h.call(n, "show"))
        }), t(function() {
            h.call(t('[data-provide="datepicker-inline"]'))
        })
    }(window.jQuery),
    function(t) {
        var e = {
            nodiff: "",
            year: "year",
            years: "years",
            month: "month",
            months: "months",
            day: "day",
            days: "days",
            hour: "hour",
            hours: "hours",
            minute: "minute",
            minutes: "minutes",
            second: "second",
            seconds: "seconds",
            delimiter: " "
        };
        t.fn.preciseDiff = function(e) {
            return t.preciseDiff(this, e)
        }, t.preciseDiff = function(n, i) {
            var r = t(n),
                o = t(i);
            if (r.isSame(o)) return e.nodiff;
            if (r.isAfter(o)) {
                var s = r;
                r = o, o = s
            }
            var a = o.year() - r.year(),
                l = o.month() - r.month(),
                u = o.date() - r.date(),
                c = o.hour() - r.hour(),
                d = o.minute() - r.minute(),
                h = o.second() - r.second();
            if (h < 0 && (h = 60 + h, d--), d < 0 && (d = 60 + d, c--), c < 0 && (c = 24 + c, u--), u < 0) {
                var p = t(o.year() + "-" + (o.month() + 1), "YYYY-MM").subtract(1, "M").daysInMonth();
                u = p < r.date() ? p + u + (r.date() - p) : p + u, l--
            }
            return l < 0 && (l = 12 + l, a--), {
                yDiff: a,
                mDiff: l,
                dDiff: u,
                hourDiff: c,
                minDiff: d,
                secDiff: h
            }
        }
    }(moment), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, n, i, r) {
            return jQuery.easing[jQuery.easing.def](t, e, n, i, r)
        },
        easeInQuad: function(t, e, n, i, r) {
            return i * (e /= r) * e + n
        },
        easeOutQuad: function(t, e, n, i, r) {
            return -i * (e /= r) * (e - 2) + n
        },
        easeInOutQuad: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
        },
        easeInCubic: function(t, e, n, i, r) {
            return i * (e /= r) * e * e + n
        },
        easeOutCubic: function(t, e, n, i, r) {
            return i * ((e = e / r - 1) * e * e + 1) + n
        },
        easeInOutCubic: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
        },
        easeInQuart: function(t, e, n, i, r) {
            return i * (e /= r) * e * e * e + n
        },
        easeOutQuart: function(t, e, n, i, r) {
            return -i * ((e = e / r - 1) * e * e * e - 1) + n
        },
        easeInOutQuart: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e * e + n : -i / 2 * ((e -= 2) * e * e * e - 2) + n
        },
        easeInQuint: function(t, e, n, i, r) {
            return i * (e /= r) * e * e * e * e + n
        },
        easeOutQuint: function(t, e, n, i, r) {
            return i * ((e = e / r - 1) * e * e * e * e + 1) + n
        },
        easeInOutQuint: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? i / 2 * e * e * e * e * e + n : i / 2 * ((e -= 2) * e * e * e * e + 2) + n
        },
        easeInSine: function(t, e, n, i, r) {
            return -i * Math.cos(e / r * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(t, e, n, i, r) {
            return i * Math.sin(e / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function(t, e, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * e / r) - 1) + n
        },
        easeInExpo: function(t, e, n, i, r) {
            return 0 == e ? n : i * Math.pow(2, 10 * (e / r - 1)) + n
        },
        easeOutExpo: function(t, e, n, i, r) {
            return e == r ? n + i : i * (-Math.pow(2, -10 * e / r) + 1) + n
        },
        easeInOutExpo: function(t, e, n, i, r) {
            return 0 == e ? n : e == r ? n + i : (e /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + n : i / 2 * (-Math.pow(2, -10 * --e) + 2) + n
        },
        easeInCirc: function(t, e, n, i, r) {
            return -i * (Math.sqrt(1 - (e /= r) * e) - 1) + n
        },
        easeOutCirc: function(t, e, n, i, r) {
            return i * Math.sqrt(1 - (e = e / r - 1) * e) + n
        },
        easeInOutCirc: function(t, e, n, i, r) {
            return (e /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + n : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
        },
        easeInElastic: function(t, e, n, i, r) {
            var o = 1.70158,
                s = 0,
                a = i;
            if (0 == e) return n;
            if (1 == (e /= r)) return n + i;
            if (s || (s = .3 * r), a < Math.abs(i)) {
                a = i;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(i / a);
            return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / s)) + n
        },
        easeOutElastic: function(t, e, n, i, r) {
            var o = 1.70158,
                s = 0,
                a = i;
            if (0 == e) return n;
            if (1 == (e /= r)) return n + i;
            if (s || (s = .3 * r), a < Math.abs(i)) {
                a = i;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(i / a);
            return a * Math.pow(2, -10 * e) * Math.sin((e * r - o) * (2 * Math.PI) / s) + i + n
        },
        easeInOutElastic: function(t, e, n, i, r) {
            var o = 1.70158,
                s = 0,
                a = i;
            if (0 == e) return n;
            if (2 == (e /= r / 2)) return n + i;
            if (s || (s = r * (.3 * 1.5)), a < Math.abs(i)) {
                a = i;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(i / a);
            return e < 1 ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / s)) + n : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - o) * (2 * Math.PI) / s) * .5 + i + n
        },
        easeInBack: function(t, e, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * (e /= r) * e * ((o + 1) * e - o) + n
        },
        easeOutBack: function(t, e, n, i, r, o) {
            return void 0 == o && (o = 1.70158), i * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + n
        },
        easeInOutBack: function(t, e, n, i, r, o) {
            return void 0 == o && (o = 1.70158), (e /= r / 2) < 1 ? i / 2 * (e * e * (((o *= 1.525) + 1) * e - o)) + n : i / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + n
        },
        easeInBounce: function(t, e, n, i, r) {
            return i - jQuery.easing.easeOutBounce(t, r - e, 0, i, r) + n
        },
        easeOutBounce: function(t, e, n, i, r) {
            return (e /= r) < 1 / 2.75 ? i * (7.5625 * e * e) + n : e < 2 / 2.75 ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
        },
        easeInOutBounce: function(t, e, n, i, r) {
            return e < r / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, i, r) + .5 * i + n
        }
    }),
    function() {
        var t, e, n, i, r, o, s, a, l, u, c, d, h, p, f, g, m, v, y, b, w, S, _, T, x, k, C, D, A, $, M, E, O = [].slice;
        m = '<span class="odometer-value"></span>', p = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + m + "</span></span>", i = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + p + "</span></span>", s = '<span class="odometer-formatting-mark"></span>', n = "(,ddd).dd", a = /^\(?([^)]*)\)?(?:(.)(d+))?$/, l = 30, o = 2e3, t = 20, u = 2, r = .5, c = 1e3 / l, e = 1e3 / t, f = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", x = document.createElement("div").style, g = null != x.transition || null != x.webkitTransition || null != x.mozTransition || null != x.oTransition, _ = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, y = function(t) {
            var e;
            return e = document.createElement("div"), e.innerHTML = t, e.children[0]
        }, S = function(t, e) {
            return t.className = t.className.replace(new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"), " ")
        }, v = function(t, e) {
            return S(t, e), t.className += " " + e
        }, k = function(t, e) {
            var n;
            return null != document.createEvent ? (n = document.createEvent("HTMLEvents"), n.initEvent(e, !0, !0), t.dispatchEvent(n)) : void 0
        }, w = function() {
            var t, e;
            return null != (t = null != (e = window.performance) && "function" == typeof e.now ? e.now() : void 0) ? t : +new Date
        }, T = function(t, e) {
            return null == e && (e = 0), e ? (t *= Math.pow(10, e), t += .5, t = Math.floor(t), t /= Math.pow(10, e)) : Math.round(t)
        }, C = function(t) {
            return 0 > t ? Math.ceil(t) : Math.floor(t)
        }, b = function(t) {
            return t - T(t)
        }, A = !1, (D = function() {
            var t, e, n, i, r;
            if (!A && null != window.jQuery) {
                for (A = !0, i = ["html", "text"], r = [], e = 0, n = i.length; n > e; e++) t = i[e], r.push(function(t) {
                    var e;
                    return e = window.jQuery.fn[t], window.jQuery.fn[t] = function(t) {
                        var n;
                        return null == t || null == (null != (n = this[0]) ? n.odometer : void 0) ? e.apply(this, arguments) : this[0].odometer.update(t)
                    }
                }(t));
                return r
            }
        })(), setTimeout(D, 0), h = function() {
            function t(e) {
                var n, i, r, s, a, l, d, h, p, f, g = this;
                if (this.options = e, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
                this.el.odometer = this, h = t.options;
                for (i in h) s = h[i], null == this.options[i] && (this.options[i] = s);
                null == (a = this.options).duration && (a.duration = o), this.MAX_VALUES = this.options.duration / c / u | 0, this.resetFormat(), this.value = this.cleanValue(null != (p = this.options.value) ? p : ""), this.renderInside(), this.render();
                try {
                    for (f = ["innerHTML", "innerText", "textContent"], l = 0, d = f.length; d > l; l++) r = f[l], null != this.el[r] && ! function(t) {
                        return Object.defineProperty(g.el, t, {
                            get: function() {
                                var e;
                                return "innerHTML" === t ? g.inside.outerHTML : null != (e = g.inside.innerText) ? e : g.inside.textContent
                            },
                            set: function(t) {
                                return g.update(t)
                            }
                        })
                    }(r)
                } catch (m) {
                    n = m, this.watchForMutations()
                }
            }
            return t.prototype.renderInside = function() {
                return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
            }, t.prototype.watchForMutations = function() {
                var t, e = this;
                if (null != d) try {
                    return null == this.observer && (this.observer = new d(function() {
                        var t;
                        return t = e.el.innerText, e.renderInside(), e.render(e.value), e.update(t)
                    })), this.watchMutations = !0, this.startWatchingMutations()
                } catch (n) {
                    t = n
                }
            }, t.prototype.startWatchingMutations = function() {
                return this.watchMutations ? this.observer.observe(this.el, {
                    childList: !0
                }) : void 0
            }, t.prototype.stopWatchingMutations = function() {
                var t;
                return null != (t = this.observer) ? t.disconnect() : void 0
            }, t.prototype.cleanValue = function(t) {
                var e;
                return "string" == typeof t && (t = t.replace(null != (e = this.format.radix) ? e : ".", "<radix>"), t = t.replace(/[.,]/g, ""), t = t.replace("<radix>", "."), t = parseFloat(t, 10) || 0), T(t, this.format.precision)
            }, t.prototype.bindTransitionEnd = function() {
                var t, e, n, i, r, o, s = this;
                if (!this.transitionEndBound) {
                    for (this.transitionEndBound = !0, e = !1, r = f.split(" "), o = [], n = 0, i = r.length; i > n; n++) t = r[n], o.push(this.el.addEventListener(t, function() {
                        return !!e || (e = !0, setTimeout(function() {
                            return s.render(), e = !1, k(s.el, "odometerdone")
                        }, 0), !0)
                    }, !1));
                    return o
                }
            }, t.prototype.resetFormat = function() {
                var t, e, i, r, o, s, l, u;
                if (t = null != (l = this.options.format) ? l : n, t || (t = "d"), i = a.exec(t), !i) throw new Error("Odometer: Unparsable digit format");
                return u = i.slice(1, 4), s = u[0], o = u[1], e = u[2], r = (null != e ? e.length : void 0) || 0, this.format = {
                    repeating: s,
                    radix: o,
                    precision: r
                }
            }, t.prototype.render = function(t) {
                var e, n, i, r, o, s, a, l, u, c, d, h;
                for (null == t && (t = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", s = this.options.theme, e = this.el.className.split(" "), o = [], l = 0, c = e.length; c > l; l++) n = e[l], n.length && ((r = /^odometer-theme-(.+)$/.exec(n)) ? s = r[1] : /^odometer(-|$)/.test(n) || o.push(n));
                for (o.push("odometer"), g || o.push("odometer-no-transitions"), o.push(s ? "odometer-theme-" + s : "odometer-auto-theme"), this.el.className = o.join(" "), this.ribbons = {}, this.digits = [], a = !this.format.precision || !b(t) || !1, h = t.toString().split("").reverse(), u = 0, d = h.length; d > u; u++) i = h[u], "." === i && (a = !0), this.addDigit(i, a);
                return this.startWatchingMutations()
            }, t.prototype.update = function(t) {
                var e, n = this;
                return t = this.cleanValue(t), (e = t - this.value) ? (S(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), e > 0 ? v(this.el, "odometer-animating-up") : v(this.el, "odometer-animating-down"), this.stopWatchingMutations(), this.animate(t), this.startWatchingMutations(), setTimeout(function() {
                    return n.el.offsetHeight, v(n.el, "odometer-animating")
                }, 0), this.value = t) : void 0
            }, t.prototype.renderDigit = function() {
                return y(i)
            }, t.prototype.insertDigit = function(t, e) {
                return null != e ? this.inside.insertBefore(t, e) : this.inside.children.length ? this.inside.insertBefore(t, this.inside.children[0]) : this.inside.appendChild(t)
            }, t.prototype.addSpacer = function(t, e, n) {
                var i;
                return i = y(s), i.innerHTML = t, n && v(i, n), this.insertDigit(i, e)
            }, t.prototype.addDigit = function(t, e) {
                var n, i, r, o;
                if (null == e && (e = !0), "-" === t) return this.addSpacer(t, null, "odometer-negation-mark");
                if ("." === t) return this.addSpacer(null != (o = this.format.radix) ? o : ".", null, "odometer-radix-mark");
                if (e)
                    for (r = !1;;) {
                        if (!this.format.repeating.length) {
                            if (r) throw new Error("Bad odometer format without digits");
                            this.resetFormat(), r = !0
                        }
                        if (n = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === n) break;
                        this.addSpacer(n)
                    }
                return i = this.renderDigit(), i.querySelector(".odometer-value").innerHTML = t, this.digits.push(i), this.insertDigit(i)
            }, t.prototype.animate = function(t) {
                return g && "count" !== this.options.animation ? this.animateSlide(t) : this.animateCount(t)
            }, t.prototype.animateCount = function(t) {
                var n, i, r, o, s, a = this;
                if (i = +t - this.value) return o = r = w(), n = this.value, (s = function() {
                    var l, u, c;
                    return w() - o > a.options.duration ? (a.value = t, a.render(), void k(a.el, "odometerdone")) : (l = w() - r, l > e && (r = w(), c = l / a.options.duration, u = i * c, n += u, a.render(Math.round(n))), null != _ ? _(s) : setTimeout(s, e))
                })()
            }, t.prototype.getDigitCount = function() {
                var t, e, n, i, r, o;
                for (i = 1 <= arguments.length ? O.call(arguments, 0) : [], t = r = 0, o = i.length; o > r; t = ++r) n = i[t], i[t] = Math.abs(n);
                return e = Math.max.apply(Math, i), Math.ceil(Math.log(e + 1) / Math.log(10))
            }, t.prototype.getFractionalDigitCount = function() {
                var t, e, n, i, r, o, s;
                for (r = 1 <= arguments.length ? O.call(arguments, 0) : [], e = /^\-?\d*\.(\d*?)0*$/, t = o = 0, s = r.length; s > o; t = ++o) i = r[t], r[t] = i.toString(), n = e.exec(r[t]), r[t] = null == n ? 0 : n[1].length;
                return Math.max.apply(Math, r)
            }, t.prototype.resetDigits = function() {
                return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
            }, t.prototype.animateSlide = function(t) {
                var e, n, i, o, s, a, l, u, c, d, h, p, f, g, m, y, b, w, S, _, T, x, k, D, A, $, M;
                if (y = this.value, u = this.getFractionalDigitCount(y, t), u && (t *= Math.pow(10, u), y *= Math.pow(10, u)), i = t - y) {
                    for (this.bindTransitionEnd(), o = this.getDigitCount(y, t), s = [], e = 0, h = S = 0; o >= 0 ? o > S : S > o; h = o >= 0 ? ++S : --S) {
                        if (b = C(y / Math.pow(10, o - h - 1)), l = C(t / Math.pow(10, o - h - 1)), a = l - b, Math.abs(a) > this.MAX_VALUES) {
                            for (d = [], p = a / (this.MAX_VALUES + this.MAX_VALUES * e * r), n = b; a > 0 && l > n || 0 > a && n > l;) d.push(Math.round(n)), n += p;
                            d[d.length - 1] !== l && d.push(l), e++
                        } else d = function() {
                            M = [];
                            for (var t = b; l >= b ? l >= t : t >= l; l >= b ? t++ : t--) M.push(t);
                            return M
                        }.apply(this);
                        for (h = _ = 0, x = d.length; x > _; h = ++_) c = d[h], d[h] = Math.abs(c % 10);
                        s.push(d)
                    }
                    for (this.resetDigits(), $ = s.reverse(), h = T = 0, k = $.length; k > T; h = ++T)
                        for (d = $[h], this.digits[h] || this.addDigit(" ", h >= u), null == (w = this.ribbons)[h] && (w[h] = this.digits[h].querySelector(".odometer-ribbon-inner")), this.ribbons[h].innerHTML = "", 0 > i && (d = d.reverse()), f = A = 0, D = d.length; D > A; f = ++A) c = d[f], m = document.createElement("div"), m.className = "odometer-value", m.innerHTML = c, this.ribbons[h].appendChild(m), f === d.length - 1 && v(m, "odometer-last-value"), 0 === f && v(m, "odometer-first-value");
                    return 0 > b && this.addDigit("-"), g = this.inside.querySelector(".odometer-radix-mark"), null != g && g.parent.removeChild(g), u ? this.addSpacer(this.format.radix, this.digits[u - 1], "odometer-radix-mark") : void 0
                }
            }, t
        }(), h.options = null != (M = window.odometerOptions) ? M : {}, setTimeout(function() {
            var t, e, n, i, r;
            if (window.odometerOptions) {
                i = window.odometerOptions, r = [];
                for (t in i) e = i[t], r.push(null != (n = h.options)[t] ? (n = h.options)[t] : n[t] = e);
                return r
            }
        }, 0), h.init = function() {
            var t, e, n, i, r, o;
            if (null != document.querySelectorAll) {
                for (e = document.querySelectorAll(h.options.selector || ".odometer"), o = [], n = 0, i = e.length; i > n; n++) t = e[n], o.push(t.odometer = new h({
                    el: t,
                    value: null != (r = t.innerText) ? r : t.textContent
                }));
                return o
            }
        }, null != (null != (E = document.documentElement) ? E.doScroll : void 0) && null != document.createEventObject ? ($ = document.onreadystatechange, document.onreadystatechange = function() {
            return "complete" === document.readyState && h.options.auto !== !1 && h.init(), null != $ ? $.apply(this, arguments) : void 0
        }) : document.addEventListener("DOMContentLoaded", function() {
            return h.options.auto !== !1 ? h.init() : void 0
        }, !1), "function" == typeof define && define.amd ? define(["jquery"], function() {
            return h
        }) : typeof exports === !1 ? module.exports = h : window.Odometer = h
    }.call(this),
    function(t) {
        t.fn.confirm = function(e) {
            return "undefined" == typeof e && (e = {}), this.click(function(n) {
                n.preventDefault();
                var i = t.extend({
                    button: t(this)
                }, e);
                t.confirm(i, n)
            }), this
        }, t.confirm = function(e, n) {
            if ("undefined" != typeof e && !(t(".confirmation-modal").length > 0)) {
                var i = {};
                if (e.button) {
                    var r = {
                        title: "title",
                        text: "text",
                        "confirm-button": "confirmButton",
                        "submit-form": "submitForm",
                        "cancel-button": "cancelButton",
                        "confirm-button-class": "confirmButtonClass",
                        "cancel-button-class": "cancelButtonClass",
                        "dialog-class": "dialogClass",
                        "modal-options-backdrop": "modalOptionsBackdrop",
                        "modal-options-keyboard": "modalOptionsKeyboard",
                        content: "content",
                        keyboard: "keyboard",
                        "static": "static"
                    };
                    t.each(r, function(t, n) {
                        var r = e.button.data(t);
                        "undefined" != typeof r && (i[n] = r)
                    })
                }
                var o = t.extend({}, t.confirm.options, {
                        confirm: function() {
                            if (i.submitForm || "undefined" == typeof i.submitForm && e.submitForm || "undefined" == typeof i.submitForm && "undefined" == typeof e.submitForm && t.confirm.options.submitForm) n.target.closest("form").submit();
                            else {
                                var r = n && ("string" == typeof n && n || n.currentTarget && n.currentTarget.attributes.href.value);
                                if (r)
                                    if (e.post) {
                                        var o = t('<form method="post" class="hide" action="' + r + '"></form>');
                                        t("body").append(o), o.submit()
                                    } else window.location = r
                            }
                        },
                        cancel: function(t) {},
                        button: null
                    }, e, i),
                    s = "";
                "" !== o.title && (s = '<div class="modal-header">', o["static"] || (s += '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'), s += '<h4 class="modal-title">' + o.title + "</h4></div>");
                var a = "";
                o.cancelButton && (a = '<button class="cancel btn ' + o.cancelButtonClass + '" type="button" data-dismiss="modal">' + o.cancelButton + "</button>");
                var l = '<div class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog ' + o.dialogClass + ("" !== o.title ? "" : " no-header") + '"><div class="modal-content">' + s + '<div class="modal-body">' + (o.content.length > 0 ? o.content : o.text) + '</div><div class="modal-footer">' + a + '<button class="confirm btn ' + o.confirmButtonClass + '" type="button" data-dismiss="modal">' + o.confirmButton + "</button></div></div></div></div>",
                    u = t(l);
                "undefined" == typeof o.modalOptionsBackdrop && "undefined" == typeof o.modalOptionsKeyboard || u.modal({
                    backdrop: o.modalOptionsBackdrop,
                    keyboard: o.modalOptionsKeyboard
                }), o["static"] && (u.data("bs.modal").options.backdrop = "static"), u.on("shown.bs.modal", function() {
                    u.find(".btn-primary:first").focus()
                }), u.on("hidden.bs.modal", function() {
                    u.remove()
                }), u.find(".confirm").click(function() {
                    o.confirm(o.button)
                }), u.find(".cancel").click(function() {
                    o.cancel(o.button)
                }), t("body").append(u), u.modal("show")
            }
        }, t.confirm.options = {
            text: "Are you sure?",
            title: "",
            confirmButton: "Yes",
            cancelButton: "Cancel",
            post: !1,
            submitForm: !1,
            confirmButtonClass: "btn-primary",
            cancelButtonClass: "btn-default",
            dialogClass: "modal-dialog",
            modalOptionsBackdrop: !0,
            modalOptionsKeyboard: !1,
            "static": !1,
            keyboard: !1,
            content: ""
        }
    }(jQuery),
    function() {
        function t() {
            function t(t) {
                s.timberbar.animate({
                    width: "100%"
                }, t.options.autoplaySpeed, function() {
                    s.timberbar.css({
                        width: "0px"
                    })
                })
            }

            function e(t) {
                s.el = t, n()
            }

            function n() {
                s.el.on("init", o), s.el.on("reInit", r), s.el.on("beforeChange", function() {
                    r(!0)
                }), s.el.on("afterChange", i), $("body").on("mouseleave", ".slick-slider", function() {
                    s.timberbar.animate({
                        width: "100%"
                    }, s.remaining)
                }), $("body").on("mouseenter", ".slick-slider", function() {
                    r(!1)
                })
            }

            function i(t, e, n) {
                s.timberbar.css({
                    width: "0px"
                }), s.timberbar.animate({
                    width: "100%"
                }, {
                    duration: e.options.autoplaySpeed,
                    progress: function(t, n) {
                        s.remaining = e.options.autoplaySpeed - n * e.options.autoplaySpeed
                    }
                }, function() {
                    s.timberbar.css({
                        width: "0px"
                    })
                })
            }

            function r(t) {
                s.timberbar.clearQueue(), s.timberbar.stop(), t && s.timberbar.css({
                    width: "0px"
                })
            }

            function o(e, n, i) {
                s.el.append('<div class="slick-timer-wrapper"><div class="timer-bar"></div></div>'), s.timberbar = $(".timer-bar"), t(n)
            }
            var s = {
                remaining: 0
            };
            return {
                attachTimer: e
            }
        }
        window.Pt = window.Pt || {}, Pt.Plugins = Pt.Plugins || {}, Pt.Plugins.SlickExtension = t
    }(),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e, window, document)
        }) : "object" == typeof exports ? module.exports = function(e, n) {
            return e || (e = window), n || (n = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(n, e, e.document)
        } : t(jQuery, window, document)
    }(function(t, e, n, i) {
        "use strict";

        function r(e) {
            var n, i, o = "a aa ai ao as b fn i m o s ",
                s = {};
            t.each(e, function(t, a) {
                n = t.match(/^([^A-Z]+?)([A-Z])/), n && o.indexOf(n[1] + " ") !== -1 && (i = t.replace(n[0], n[2].toLowerCase()), s[i] = t, "o" === n[1] && r(e[t]))
            }), e._hungarianMap = s
        }

        function o(e, n, s) {
            e._hungarianMap || r(e);
            var a;
            t.each(n, function(r, l) {
                a = e._hungarianMap[r], a === i || !s && n[a] !== i || ("o" === a.charAt(0) ? (n[a] || (n[a] = {}), t.extend(!0, n[a], n[r]), o(e[a], n[a], s)) : n[a] = n[r])
            })
        }

        function s(t) {
            var e = Gt.defaults.oLanguage,
                n = t.sZeroRecords;
            !t.sEmptyTable && n && "No data available in table" === e.sEmptyTable && Pt(t, t, "sZeroRecords", "sEmptyTable"), !t.sLoadingRecords && n && "Loading..." === e.sLoadingRecords && Pt(t, t, "sZeroRecords", "sLoadingRecords"), t.sInfoThousands && (t.sThousands = t.sInfoThousands);
            var i = t.sDecimal;
            i && Wt(i)
        }

        function a(t) {
            fe(t, "ordering", "bSort"), fe(t, "orderMulti", "bSortMulti"), fe(t, "orderClasses", "bSortClasses"), fe(t, "orderCellsTop", "bSortCellsTop"), fe(t, "order", "aaSorting"), fe(t, "orderFixed", "aaSortingFixed"), fe(t, "paging", "bPaginate"), fe(t, "pagingType", "sPaginationType"), fe(t, "pageLength", "iDisplayLength"), fe(t, "searching", "bFilter"), "boolean" == typeof t.sScrollX && (t.sScrollX = t.sScrollX ? "100%" : ""), "boolean" == typeof t.scrollX && (t.scrollX = t.scrollX ? "100%" : "");
            var e = t.aoSearchCols;
            if (e)
                for (var n = 0, i = e.length; n < i; n++) e[n] && o(Gt.models.oSearch, e[n])
        }

        function l(e) {
            fe(e, "orderable", "bSortable"), fe(e, "orderData", "aDataSort"), fe(e, "orderSequence", "asSorting"), fe(e, "orderDataType", "sortDataType");
            var n = e.aDataSort;
            "number" != typeof n || t.isArray(n) || (e.aDataSort = [n])
        }

        function u(n) {
            if (!Gt.__browser) {
                var i = {};
                Gt.__browser = i;
                var r = t("<div/>").css({
                        position: "fixed",
                        top: 0,
                        left: t(e).scrollLeft() * -1,
                        height: 1,
                        width: 1,
                        overflow: "hidden"
                    }).append(t("<div/>").css({
                        position: "absolute",
                        top: 1,
                        left: 1,
                        width: 100,
                        overflow: "scroll"
                    }).append(t("<div/>").css({
                        width: "100%",
                        height: 10
                    }))).appendTo("body"),
                    o = r.children(),
                    s = o.children();
                i.barWidth = o[0].offsetWidth - o[0].clientWidth, i.bScrollOversize = 100 === s[0].offsetWidth && 100 !== o[0].clientWidth, i.bScrollbarLeft = 1 !== Math.round(s.offset().left), i.bBounding = !!r[0].getBoundingClientRect().width, r.remove()
            }
            t.extend(n.oBrowser, Gt.__browser), n.oScroll.iBarWidth = Gt.__browser.barWidth
        }

        function c(t, e, n, r, o, s) {
            var a, l = r,
                u = !1;
            for (n !== i && (a = n, u = !0); l !== o;) t.hasOwnProperty(l) && (a = u ? e(a, t[l], l, t) : t[l], u = !0, l += s);
            return a
        }

        function d(e, i) {
            var r = Gt.defaults.column,
                o = e.aoColumns.length,
                s = t.extend({}, Gt.models.oColumn, r, {
                    nTh: i ? i : n.createElement("th"),
                    sTitle: r.sTitle ? r.sTitle : i ? i.innerHTML : "",
                    aDataSort: r.aDataSort ? r.aDataSort : [o],
                    mData: r.mData ? r.mData : o,
                    idx: o
                });
            e.aoColumns.push(s);
            var a = e.aoPreSearchCols;
            a[o] = t.extend({}, Gt.models.oSearch, a[o]), h(e, o, t(i).data())
        }

        function h(e, n, r) {
            var s = e.aoColumns[n],
                a = e.oClasses,
                u = t(s.nTh);
            if (!s.sWidthOrig) {
                s.sWidthOrig = u.attr("width") || null;
                var c = (u.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                c && (s.sWidthOrig = c[1])
            }
            r !== i && null !== r && (l(r), o(Gt.defaults.column, r), r.mDataProp === i || r.mData || (r.mData = r.mDataProp), r.sType && (s._sManualType = r.sType), r.className && !r.sClass && (r.sClass = r.className), r.sClass && u.addClass(r.sClass), t.extend(s, r), Pt(s, r, "sWidth", "sWidthOrig"), r.iDataSort !== i && (s.aDataSort = [r.iDataSort]), Pt(s, r, "aDataSort"));
            var d = s.mData,
                h = D(d),
                p = s.mRender ? D(s.mRender) : null,
                f = function(t) {
                    return "string" == typeof t && t.indexOf("@") !== -1
                };
            s._bAttrSrc = t.isPlainObject(d) && (f(d.sort) || f(d.type) || f(d.filter)), s._setter = null, s.fnGetData = function(t, e, n) {
                var r = h(t, e, i, n);
                return p && e ? p(r, e, t, n) : r
            }, s.fnSetData = function(t, e, n) {
                return A(d)(t, e, n)
            }, "number" != typeof d && (e._rowReadObject = !0), e.oFeatures.bSort || (s.bSortable = !1, u.addClass(a.sSortableNone));
            var g = t.inArray("asc", s.asSorting) !== -1,
                m = t.inArray("desc", s.asSorting) !== -1;
            s.bSortable && (g || m) ? g && !m ? (s.sSortingClass = a.sSortableAsc, s.sSortingClassJUI = a.sSortJUIAscAllowed) : !g && m ? (s.sSortingClass = a.sSortableDesc, s.sSortingClassJUI = a.sSortJUIDescAllowed) : (s.sSortingClass = a.sSortable, s.sSortingClassJUI = a.sSortJUI) : (s.sSortingClass = a.sSortableNone, s.sSortingClassJUI = "")
        }

        function p(t) {
            if (t.oFeatures.bAutoWidth !== !1) {
                var e = t.aoColumns;
                vt(t);
                for (var n = 0, i = e.length; n < i; n++) e[n].nTh.style.width = e[n].sWidth
            }
            var r = t.oScroll;
            "" === r.sY && "" === r.sX || gt(t), Lt(t, null, "column-sizing", [t])
        }

        function f(t, e) {
            var n = v(t, "bVisible");
            return "number" == typeof n[e] ? n[e] : null
        }

        function g(e, n) {
            var i = v(e, "bVisible"),
                r = t.inArray(n, i);
            return r !== -1 ? r : null
        }

        function m(e) {
            var n = 0;
            return t.each(e.aoColumns, function(e, i) {
                i.bVisible && "none" !== t(i.nTh).css("display") && n++
            }), n
        }

        function v(e, n) {
            var i = [];
            return t.map(e.aoColumns, function(t, e) {
                t[n] && i.push(e)
            }), i
        }

        function y(t) {
            var e, n, r, o, s, a, l, u, c, d = t.aoColumns,
                h = t.aoData,
                p = Gt.ext.type.detect;
            for (e = 0, n = d.length; e < n; e++)
                if (l = d[e], c = [], !l.sType && l._sManualType) l.sType = l._sManualType;
                else if (!l.sType) {
                for (r = 0, o = p.length; r < o; r++) {
                    for (s = 0, a = h.length; s < a && (c[s] === i && (c[s] = x(t, s, e, "type")), u = p[r](c[s], t), u || r === p.length - 1) && "html" !== u; s++);
                    if (u) {
                        l.sType = u;
                        break
                    }
                }
                l.sType || (l.sType = "string")
            }
        }

        function b(e, n, r, o) {
            var s, a, l, u, c, h, p, f = e.aoColumns;
            if (n)
                for (s = n.length - 1; s >= 0; s--) {
                    p = n[s];
                    var g = p.targets !== i ? p.targets : p.aTargets;
                    for (t.isArray(g) || (g = [g]), l = 0, u = g.length; l < u; l++)
                        if ("number" == typeof g[l] && g[l] >= 0) {
                            for (; f.length <= g[l];) d(e);
                            o(g[l], p)
                        } else if ("number" == typeof g[l] && g[l] < 0) o(f.length + g[l], p);
                    else if ("string" == typeof g[l])
                        for (c = 0, h = f.length; c < h; c++)("_all" == g[l] || t(f[c].nTh).hasClass(g[l])) && o(c, p)
                }
            if (r)
                for (s = 0, a = r.length; s < a; s++) o(s, r[s])
        }

        function w(e, n, r, o) {
            var s = e.aoData.length,
                a = t.extend(!0, {}, Gt.models.oRow, {
                    src: r ? "dom" : "data",
                    idx: s
                });
            a._aData = n, e.aoData.push(a);
            for (var l = e.aoColumns, u = 0, c = l.length; u < c; u++) l[u].sType = null;
            e.aiDisplayMaster.push(s);
            var d = e.rowIdFn(n);
            return d !== i && (e.aIds[d] = a), !r && e.oFeatures.bDeferRender || I(e, s, r, o), s
        }

        function S(e, n) {
            var i;
            return n instanceof t || (n = t(n)), n.map(function(t, n) {
                return i = P(e, n), w(e, i.data, n, i.cells)
            })
        }

        function _(t, e) {
            return e._DT_RowIndex !== i ? e._DT_RowIndex : null
        }

        function T(e, n, i) {
            return t.inArray(i, e.aoData[n].anCells)
        }

        function x(t, e, n, r) {
            var o = t.iDraw,
                s = t.aoColumns[n],
                a = t.aoData[e]._aData,
                l = s.sDefaultContent,
                u = s.fnGetData(a, r, {
                    settings: t,
                    row: e,
                    col: n
                });
            if (u === i) return t.iDrawError != o && null === l && (Ot(t, 0, "Requested unknown parameter " + ("function" == typeof s.mData ? "{function}" : "'" + s.mData + "'") + " for row " + e + ", column " + n, 4), t.iDrawError = o), l;
            if (u !== a && null !== u || null === l || r === i) {
                if ("function" == typeof u) return u.call(a)
            } else u = l;
            return null === u && "display" == r ? "" : u
        }

        function k(t, e, n, i) {
            var r = t.aoColumns[n],
                o = t.aoData[e]._aData;
            r.fnSetData(o, i, {
                settings: t,
                row: e,
                col: n
            })
        }

        function C(e) {
            return t.map(e.match(/(\\.|[^\.])+/g) || [""], function(t) {
                return t.replace(/\\\./g, ".")
            })
        }

        function D(e) {
            if (t.isPlainObject(e)) {
                var n = {};
                return t.each(e, function(t, e) {
                        e && (n[t] = D(e))
                    }),
                    function(t, e, r, o) {
                        var s = n[e] || n._;
                        return s !== i ? s(t, e, r, o) : t
                    }
            }
            if (null === e) return function(t) {
                return t
            };
            if ("function" == typeof e) return function(t, n, i, r) {
                return e(t, n, i, r)
            };
            if ("string" != typeof e || e.indexOf(".") === -1 && e.indexOf("[") === -1 && e.indexOf("(") === -1) return function(t, n) {
                return t[e]
            };
            var r = function(e, n, o) {
                var s, a, l, u;
                if ("" !== o)
                    for (var c = C(o), d = 0, h = c.length; d < h; d++) {
                        if (s = c[d].match(ge), a = c[d].match(me), s) {
                            if (c[d] = c[d].replace(ge, ""), "" !== c[d] && (e = e[c[d]]), l = [], c.splice(0, d + 1), u = c.join("."), t.isArray(e))
                                for (var p = 0, f = e.length; p < f; p++) l.push(r(e[p], n, u));
                            var g = s[0].substring(1, s[0].length - 1);
                            e = "" === g ? l : l.join(g);
                            break
                        }
                        if (a) c[d] = c[d].replace(me, ""), e = e[c[d]]();
                        else {
                            if (null === e || e[c[d]] === i) return i;
                            e = e[c[d]]
                        }
                    }
                return e
            };
            return function(t, n) {
                return r(t, n, e)
            }
        }

        function A(e) {
            if (t.isPlainObject(e)) return A(e._);
            if (null === e) return function() {};
            if ("function" == typeof e) return function(t, n, i) {
                e(t, "set", n, i)
            };
            if ("string" != typeof e || e.indexOf(".") === -1 && e.indexOf("[") === -1 && e.indexOf("(") === -1) return function(t, n) {
                t[e] = n
            };
            var n = function(e, r, o) {
                for (var s, a, l, u, c, d = C(o), h = d[d.length - 1], p = 0, f = d.length - 1; p < f; p++) {
                    if (a = d[p].match(ge), l = d[p].match(me), a) {
                        if (d[p] = d[p].replace(ge, ""), e[d[p]] = [], s = d.slice(), s.splice(0, p + 1), c = s.join("."), t.isArray(r))
                            for (var g = 0, m = r.length; g < m; g++) u = {}, n(u, r[g], c), e[d[p]].push(u);
                        else e[d[p]] = r;
                        return
                    }
                    l && (d[p] = d[p].replace(me, ""), e = e[d[p]](r)), null !== e[d[p]] && e[d[p]] !== i || (e[d[p]] = {}), e = e[d[p]]
                }
                h.match(me) ? e = e[h.replace(me, "")](r) : e[h.replace(ge, "")] = r
            };
            return function(t, i) {
                return n(t, i, e)
            }
        }

        function $(t) {
            return ae(t.aoData, "_aData")
        }

        function M(t) {
            t.aoData.length = 0, t.aiDisplayMaster.length = 0, t.aiDisplay.length = 0, t.aIds = {}
        }

        function E(t, e, n) {
            for (var r = -1, o = 0, s = t.length; o < s; o++) t[o] == e ? r = o : t[o] > e && t[o]--;
            r != -1 && n === i && t.splice(r, 1)
        }

        function O(t, e, n, r) {
            var o, s, a = t.aoData[e],
                l = function(n, i) {
                    for (; n.childNodes.length;) n.removeChild(n.firstChild);
                    n.innerHTML = x(t, e, i, "display")
                };
            if ("dom" !== n && (n && "auto" !== n || "dom" !== a.src)) {
                var u = a.anCells;
                if (u)
                    if (r !== i) l(u[r], r);
                    else
                        for (o = 0, s = u.length; o < s; o++) l(u[o], o)
            } else a._aData = P(t, a, r, r === i ? i : a._aData).data;
            a._aSortData = null, a._aFilterData = null;
            var c = t.aoColumns;
            if (r !== i) c[r].sType = null;
            else {
                for (o = 0, s = c.length; o < s; o++) c[o].sType = null;
                F(t, a)
            }
        }

        function P(e, n, r, o) {
            var s, a, l, u = [],
                c = n.firstChild,
                d = 0,
                h = e.aoColumns,
                p = e._rowReadObject;
            o = o !== i ? o : p ? {} : [];
            var f = function(t, e) {
                    if ("string" == typeof t) {
                        var n = t.indexOf("@");
                        if (n !== -1) {
                            var i = t.substring(n + 1),
                                r = A(t);
                            r(o, e.getAttribute(i))
                        }
                    }
                },
                g = function(e) {
                    if (r === i || r === d)
                        if (a = h[d], l = t.trim(e.innerHTML), a && a._bAttrSrc) {
                            var n = A(a.mData._);
                            n(o, l), f(a.mData.sort, e), f(a.mData.type, e), f(a.mData.filter, e)
                        } else p ? (a._setter || (a._setter = A(a.mData)), a._setter(o, l)) : o[d] = l;
                    d++
                };
            if (c)
                for (; c;) s = c.nodeName.toUpperCase(), "TD" != s && "TH" != s || (g(c), u.push(c)), c = c.nextSibling;
            else {
                u = n.anCells;
                for (var m = 0, v = u.length; m < v; m++) g(u[m])
            }
            var y = n.firstChild ? n : n.nTr;
            if (y) {
                var b = y.getAttribute("id");
                b && A(e.rowId)(o, b)
            }
            return {
                data: o,
                cells: u
            }
        }

        function I(e, i, r, o) {
            var s, a, l, u, c, d = e.aoData[i],
                h = d._aData,
                p = [];
            if (null === d.nTr) {
                for (s = r || n.createElement("tr"), d.nTr = s, d.anCells = p, s._DT_RowIndex = i, F(e, d), u = 0, c = e.aoColumns.length; u < c; u++) l = e.aoColumns[u], a = r ? o[u] : n.createElement(l.sCellType), a._DT_CellIndex = {
                    row: i,
                    column: u
                }, p.push(a), r && !l.mRender && l.mData === u || t.isPlainObject(l.mData) && l.mData._ === u + ".display" || (a.innerHTML = x(e, i, u, "display")), l.sClass && (a.className += " " + l.sClass), l.bVisible && !r ? s.appendChild(a) : !l.bVisible && r && a.parentNode.removeChild(a), l.fnCreatedCell && l.fnCreatedCell.call(e.oInstance, a, x(e, i, u), h, i, u);
                Lt(e, "aoRowCreatedCallback", null, [s, h, i])
            }
            d.nTr.setAttribute("role", "row")
        }

        function F(e, n) {
            var i = n.nTr,
                r = n._aData;
            if (i) {
                var o = e.rowIdFn(r);
                if (o && (i.id = o), r.DT_RowClass) {
                    var s = r.DT_RowClass.split(" ");
                    n.__rowc = n.__rowc ? pe(n.__rowc.concat(s)) : s, t(i).removeClass(n.__rowc.join(" ")).addClass(r.DT_RowClass)
                }
                r.DT_RowAttr && t(i).attr(r.DT_RowAttr), r.DT_RowData && t(i).data(r.DT_RowData)
            }
        }

        function j(e) {
            var n, i, r, o, s, a = e.nTHead,
                l = e.nTFoot,
                u = 0 === t("th, td", a).length,
                c = e.oClasses,
                d = e.aoColumns;
            for (u && (o = t("<tr/>").appendTo(a)), n = 0, i = d.length; n < i; n++) s = d[n], r = t(s.nTh).addClass(s.sClass), u && r.appendTo(o), e.oFeatures.bSort && (r.addClass(s.sSortingClass), s.bSortable !== !1 && (r.attr("tabindex", e.iTabIndex).attr("aria-controls", e.sTableId), Ct(e, s.nTh, n))), s.sTitle != r[0].innerHTML && r.html(s.sTitle), Rt(e, "header")(e, r, s, c);
            if (u && U(e.aoHeader, a), t(a).find(">tr").attr("role", "row"), t(a).find(">tr>th, >tr>td").addClass(c.sHeaderTH), t(l).find(">tr>th, >tr>td").addClass(c.sFooterTH), null !== l) {
                var h = e.aoFooter[0];
                for (n = 0, i = h.length; n < i; n++) s = d[n],
                    s.nTf = h[n].cell, s.sClass && t(s.nTf).addClass(s.sClass)
            }
        }

        function L(e, n, r) {
            var o, s, a, l, u, c, d, h, p, f = [],
                g = [],
                m = e.aoColumns.length;
            if (n) {
                for (r === i && (r = !1), o = 0, s = n.length; o < s; o++) {
                    for (f[o] = n[o].slice(), f[o].nTr = n[o].nTr, a = m - 1; a >= 0; a--) e.aoColumns[a].bVisible || r || f[o].splice(a, 1);
                    g.push([])
                }
                for (o = 0, s = f.length; o < s; o++) {
                    if (d = f[o].nTr)
                        for (; c = d.firstChild;) d.removeChild(c);
                    for (a = 0, l = f[o].length; a < l; a++)
                        if (h = 1, p = 1, g[o][a] === i) {
                            for (d.appendChild(f[o][a].cell), g[o][a] = 1; f[o + h] !== i && f[o][a].cell == f[o + h][a].cell;) g[o + h][a] = 1, h++;
                            for (; f[o][a + p] !== i && f[o][a].cell == f[o][a + p].cell;) {
                                for (u = 0; u < h; u++) g[o + u][a + p] = 1;
                                p++
                            }
                            t(f[o][a].cell).attr("rowspan", h).attr("colspan", p)
                        }
                }
            }
        }

        function N(e) {
            var n = Lt(e, "aoPreDrawCallback", "preDraw", [e]);
            if (t.inArray(!1, n) !== -1) return void pt(e, !1);
            var r = [],
                o = 0,
                s = e.asStripeClasses,
                a = s.length,
                l = (e.aoOpenRows.length, e.oLanguage),
                u = e.iInitDisplayStart,
                c = "ssp" == Ht(e),
                d = e.aiDisplay;
            e.bDrawing = !0, u !== i && u !== -1 && (e._iDisplayStart = c ? u : u >= e.fnRecordsDisplay() ? 0 : u, e.iInitDisplayStart = -1);
            var h = e._iDisplayStart,
                p = e.fnDisplayEnd();
            if (e.bDeferLoading) e.bDeferLoading = !1, e.iDraw++, pt(e, !1);
            else if (c) {
                if (!e.bDestroying && !Y(e)) return
            } else e.iDraw++;
            if (0 !== d.length)
                for (var f = c ? 0 : h, g = c ? e.aoData.length : p, v = f; v < g; v++) {
                    var y = d[v],
                        b = e.aoData[y];
                    null === b.nTr && I(e, y);
                    var w = b.nTr;
                    if (0 !== a) {
                        var S = s[o % a];
                        b._sRowStripe != S && (t(w).removeClass(b._sRowStripe).addClass(S), b._sRowStripe = S)
                    }
                    Lt(e, "aoRowCallback", null, [w, b._aData, o, v]), r.push(w), o++
                } else {
                    var _ = l.sZeroRecords;
                    1 == e.iDraw && "ajax" == Ht(e) ? _ = l.sLoadingRecords : l.sEmptyTable && 0 === e.fnRecordsTotal() && (_ = l.sEmptyTable), r[0] = t("<tr/>", {
                        "class": a ? s[0] : ""
                    }).append(t("<td />", {
                        valign: "top",
                        colSpan: m(e),
                        "class": e.oClasses.sRowEmpty
                    }).html(_))[0]
                }
            Lt(e, "aoHeaderCallback", "header", [t(e.nTHead).children("tr")[0], $(e), h, p, d]), Lt(e, "aoFooterCallback", "footer", [t(e.nTFoot).children("tr")[0], $(e), h, p, d]);
            var T = t(e.nTBody);
            T.children().detach(), T.append(t(r)), Lt(e, "aoDrawCallback", "draw", [e]), e.bSorted = !1, e.bFiltered = !1, e.bDrawing = !1
        }

        function R(t, e) {
            var n = t.oFeatures,
                i = n.bSort,
                r = n.bFilter;
            i && Tt(t), r ? X(t, t.oPreviousSearch) : t.aiDisplay = t.aiDisplayMaster.slice(), e !== !0 && (t._iDisplayStart = 0), t._drawHold = e, N(t), t._drawHold = !1
        }

        function H(e) {
            var n = e.oClasses,
                i = t(e.nTable),
                r = t("<div/>").insertBefore(i),
                o = e.oFeatures,
                s = t("<div/>", {
                    id: e.sTableId + "_wrapper",
                    "class": n.sWrapper + (e.nTFoot ? "" : " " + n.sNoFooter)
                });
            e.nHolding = r[0], e.nTableWrapper = s[0], e.nTableReinsertBefore = e.nTable.nextSibling;
            for (var a, l, u, c, d, h, p = e.sDom.split(""), f = 0; f < p.length; f++) {
                if (a = null, l = p[f], "<" == l) {
                    if (u = t("<div/>")[0], c = p[f + 1], "'" == c || '"' == c) {
                        for (d = "", h = 2; p[f + h] != c;) d += p[f + h], h++;
                        if ("H" == d ? d = n.sJUIHeader : "F" == d && (d = n.sJUIFooter), d.indexOf(".") != -1) {
                            var g = d.split(".");
                            u.id = g[0].substr(1, g[0].length - 1), u.className = g[1]
                        } else "#" == d.charAt(0) ? u.id = d.substr(1, d.length - 1) : u.className = d;
                        f += h
                    }
                    s.append(u), s = t(u)
                } else if (">" == l) s = s.parent();
                else if ("l" == l && o.bPaginate && o.bLengthChange) a = ut(e);
                else if ("f" == l && o.bFilter) a = G(e);
                else if ("r" == l && o.bProcessing) a = ht(e);
                else if ("t" == l) a = ft(e);
                else if ("i" == l && o.bInfo) a = it(e);
                else if ("p" == l && o.bPaginate) a = ct(e);
                else if (0 !== Gt.ext.feature.length)
                    for (var m = Gt.ext.feature, v = 0, y = m.length; v < y; v++)
                        if (l == m[v].cFeature) {
                            a = m[v].fnInit(e);
                            break
                        }
                if (a) {
                    var b = e.aanFeatures;
                    b[l] || (b[l] = []), b[l].push(a), s.append(a)
                }
            }
            r.replaceWith(s), e.nHolding = null
        }

        function U(e, n) {
            var i, r, o, s, a, l, u, c, d, h, p, f = t(n).children("tr"),
                g = function(t, e, n) {
                    for (var i = t[e]; i[n];) n++;
                    return n
                };
            for (e.splice(0, e.length), o = 0, l = f.length; o < l; o++) e.push([]);
            for (o = 0, l = f.length; o < l; o++)
                for (i = f[o], c = 0, r = i.firstChild; r;) {
                    if ("TD" == r.nodeName.toUpperCase() || "TH" == r.nodeName.toUpperCase())
                        for (d = 1 * r.getAttribute("colspan"), h = 1 * r.getAttribute("rowspan"), d = d && 0 !== d && 1 !== d ? d : 1, h = h && 0 !== h && 1 !== h ? h : 1, u = g(e, o, c), p = 1 === d, a = 0; a < d; a++)
                            for (s = 0; s < h; s++) e[o + s][u + a] = {
                                cell: r,
                                unique: p
                            }, e[o + s].nTr = i;
                    r = r.nextSibling
                }
        }

        function W(t, e, n) {
            var i = [];
            n || (n = t.aoHeader, e && (n = [], U(n, e)));
            for (var r = 0, o = n.length; r < o; r++)
                for (var s = 0, a = n[r].length; s < a; s++) !n[r][s].unique || i[s] && t.bSortCellsTop || (i[s] = n[r][s].cell);
            return i
        }

        function q(e, n, i) {
            if (Lt(e, "aoServerParams", "serverParams", [n]), n && t.isArray(n)) {
                var r = {},
                    o = /(.*?)\[\]$/;
                t.each(n, function(t, e) {
                    var n = e.name.match(o);
                    if (n) {
                        var i = n[0];
                        r[i] || (r[i] = []), r[i].push(e.value)
                    } else r[e.name] = e.value
                }), n = r
            }
            var s, a = e.ajax,
                l = e.oInstance,
                u = function(t) {
                    Lt(e, null, "xhr", [e, t, e.jqXHR]), i(t)
                };
            if (t.isPlainObject(a) && a.data) {
                s = a.data;
                var c = t.isFunction(s) ? s(n, e) : s;
                n = t.isFunction(s) && c ? c : t.extend(!0, n, c), delete a.data
            }
            var d = {
                data: n,
                success: function(t) {
                    var n = t.error || t.sError;
                    n && Ot(e, 0, n), e.json = t, u(t)
                },
                dataType: "json",
                cache: !1,
                type: e.sServerMethod,
                error: function(n, i, r) {
                    var o = Lt(e, null, "xhr", [e, null, e.jqXHR]);
                    t.inArray(!0, o) === -1 && ("parsererror" == i ? Ot(e, 0, "Invalid JSON response", 1) : 4 === n.readyState && Ot(e, 0, "Ajax error", 7)), pt(e, !1)
                }
            };
            e.oAjaxData = n, Lt(e, null, "preXhr", [e, n]), e.fnServerData ? e.fnServerData.call(l, e.sAjaxSource, t.map(n, function(t, e) {
                return {
                    name: e,
                    value: t
                }
            }), u, e) : e.sAjaxSource || "string" == typeof a ? e.jqXHR = t.ajax(t.extend(d, {
                url: a || e.sAjaxSource
            })) : t.isFunction(a) ? e.jqXHR = a.call(l, n, u, e) : (e.jqXHR = t.ajax(t.extend(d, a)), a.data = s)
        }

        function Y(t) {
            return !t.bAjaxDataGet || (t.iDraw++, pt(t, !0), q(t, B(t), function(e) {
                z(t, e)
            }), !1)
        }

        function B(e) {
            var n, i, r, o, s = e.aoColumns,
                a = s.length,
                l = e.oFeatures,
                u = e.oPreviousSearch,
                c = e.aoPreSearchCols,
                d = [],
                h = _t(e),
                p = e._iDisplayStart,
                f = l.bPaginate !== !1 ? e._iDisplayLength : -1,
                g = function(t, e) {
                    d.push({
                        name: t,
                        value: e
                    })
                };
            g("sEcho", e.iDraw), g("iColumns", a), g("sColumns", ae(s, "sName").join(",")), g("iDisplayStart", p), g("iDisplayLength", f);
            var m = {
                draw: e.iDraw,
                columns: [],
                order: [],
                start: p,
                length: f,
                search: {
                    value: u.sSearch,
                    regex: u.bRegex
                }
            };
            for (n = 0; n < a; n++) r = s[n], o = c[n], i = "function" == typeof r.mData ? "function" : r.mData, m.columns.push({
                data: i,
                name: r.sName,
                searchable: r.bSearchable,
                orderable: r.bSortable,
                search: {
                    value: o.sSearch,
                    regex: o.bRegex
                }
            }), g("mDataProp_" + n, i), l.bFilter && (g("sSearch_" + n, o.sSearch), g("bRegex_" + n, o.bRegex), g("bSearchable_" + n, r.bSearchable)), l.bSort && g("bSortable_" + n, r.bSortable);
            l.bFilter && (g("sSearch", u.sSearch), g("bRegex", u.bRegex)), l.bSort && (t.each(h, function(t, e) {
                m.order.push({
                    column: e.col,
                    dir: e.dir
                }), g("iSortCol_" + t, e.col), g("sSortDir_" + t, e.dir)
            }), g("iSortingCols", h.length));
            var v = Gt.ext.legacy.ajax;
            return null === v ? e.sAjaxSource ? d : m : v ? d : m
        }

        function z(t, e) {
            var n = function(t, n) {
                    return e[t] !== i ? e[t] : e[n]
                },
                r = V(t, e),
                o = n("sEcho", "draw"),
                s = n("iTotalRecords", "recordsTotal"),
                a = n("iTotalDisplayRecords", "recordsFiltered");
            if (o) {
                if (1 * o < t.iDraw) return;
                t.iDraw = 1 * o
            }
            M(t), t._iRecordsTotal = parseInt(s, 10), t._iRecordsDisplay = parseInt(a, 10);
            for (var l = 0, u = r.length; l < u; l++) w(t, r[l]);
            t.aiDisplay = t.aiDisplayMaster.slice(), t.bAjaxDataGet = !1, N(t), t._bInitComplete || at(t, e), t.bAjaxDataGet = !0, pt(t, !1)
        }

        function V(e, n) {
            var r = t.isPlainObject(e.ajax) && e.ajax.dataSrc !== i ? e.ajax.dataSrc : e.sAjaxDataProp;
            return "data" === r ? n.aaData || n[r] : "" !== r ? D(r)(n) : n
        }

        function G(e) {
            var i = e.oClasses,
                r = e.sTableId,
                o = e.oLanguage,
                s = e.oPreviousSearch,
                a = e.aanFeatures,
                l = '<input type="search" class="' + i.sFilterInput + '"/>',
                u = o.sSearch;
            u = u.match(/_INPUT_/) ? u.replace("_INPUT_", l) : u + l;
            var c = t("<div/>", {
                    id: a.f ? null : r + "_filter",
                    "class": i.sFilter
                }).append(t("<label/>").append(u)),
                d = function() {
                    var t = (a.f, this.value ? this.value : "");
                    t != s.sSearch && (X(e, {
                        sSearch: t,
                        bRegex: s.bRegex,
                        bSmart: s.bSmart,
                        bCaseInsensitive: s.bCaseInsensitive
                    }), e._iDisplayStart = 0, N(e))
                },
                h = null !== e.searchDelay ? e.searchDelay : "ssp" === Ht(e) ? 400 : 0,
                p = t("input", c).val(s.sSearch).attr("placeholder", o.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", h ? Se(d, h) : d).on("keypress.DT", function(t) {
                    if (13 == t.keyCode) return !1
                }).attr("aria-controls", r);
            return t(e.nTable).on("search.dt.DT", function(t, i) {
                if (e === i) try {
                    p[0] !== n.activeElement && p.val(s.sSearch)
                } catch (r) {}
            }), c[0]
        }

        function X(t, e, n) {
            var r = t.oPreviousSearch,
                o = t.aoPreSearchCols,
                s = function(t) {
                    r.sSearch = t.sSearch, r.bRegex = t.bRegex, r.bSmart = t.bSmart, r.bCaseInsensitive = t.bCaseInsensitive
                },
                a = function(t) {
                    return t.bEscapeRegex !== i ? !t.bEscapeRegex : t.bRegex
                };
            if (y(t), "ssp" != Ht(t)) {
                K(t, e.sSearch, n, a(e), e.bSmart, e.bCaseInsensitive), s(e);
                for (var l = 0; l < o.length; l++) J(t, o[l].sSearch, l, a(o[l]), o[l].bSmart, o[l].bCaseInsensitive);
                Q(t)
            } else s(e);
            t.bFiltered = !0, Lt(t, null, "search", [t])
        }

        function Q(e) {
            for (var n, i, r = Gt.ext.search, o = e.aiDisplay, s = 0, a = r.length; s < a; s++) {
                for (var l = [], u = 0, c = o.length; u < c; u++) i = o[u], n = e.aoData[i], r[s](e, n._aFilterData, i, n._aData, u) && l.push(i);
                o.length = 0, t.merge(o, l)
            }
        }

        function J(t, e, n, i, r, o) {
            if ("" !== e) {
                for (var s, a = [], l = t.aiDisplay, u = Z(e, i, r, o), c = 0; c < l.length; c++) s = t.aoData[l[c]]._aFilterData[n], u.test(s) && a.push(l[c]);
                t.aiDisplay = a
            }
        }

        function K(t, e, n, i, r, o) {
            var s, a, l, u = Z(e, i, r, o),
                c = t.oPreviousSearch.sSearch,
                d = t.aiDisplayMaster,
                h = [];
            if (0 !== Gt.ext.search.length && (n = !0), a = tt(t), e.length <= 0) t.aiDisplay = d.slice();
            else {
                for ((a || n || c.length > e.length || 0 !== e.indexOf(c) || t.bSorted) && (t.aiDisplay = d.slice()), s = t.aiDisplay, l = 0; l < s.length; l++) u.test(t.aoData[s[l]]._sFilterRow) && h.push(s[l]);
                t.aiDisplay = h
            }
        }

        function Z(e, n, i, r) {
            if (e = n ? e : ve(e), i) {
                var o = t.map(e.match(/"[^"]+"|[^ ]+/g) || [""], function(t) {
                    if ('"' === t.charAt(0)) {
                        var e = t.match(/^"(.*)"$/);
                        t = e ? e[1] : t
                    }
                    return t.replace('"', "")
                });
                e = "^(?=.*?" + o.join(")(?=.*?") + ").*$"
            }
            return new RegExp(e, r ? "i" : "")
        }

        function tt(t) {
            var e, n, i, r, o, s, a, l, u = t.aoColumns,
                c = Gt.ext.type.search,
                d = !1;
            for (n = 0, r = t.aoData.length; n < r; n++)
                if (l = t.aoData[n], !l._aFilterData) {
                    for (s = [], i = 0, o = u.length; i < o; i++) e = u[i], e.bSearchable ? (a = x(t, n, i, "filter"), c[e.sType] && (a = c[e.sType](a)), null === a && (a = ""), "string" != typeof a && a.toString && (a = a.toString())) : a = "", a.indexOf && a.indexOf("&") !== -1 && (ye.innerHTML = a, a = be ? ye.textContent : ye.innerText), a.replace && (a = a.replace(/[\r\n]/g, "")), s.push(a);
                    l._aFilterData = s, l._sFilterRow = s.join("  "), d = !0
                }
            return d
        }

        function et(t) {
            return {
                search: t.sSearch,
                smart: t.bSmart,
                regex: t.bRegex,
                caseInsensitive: t.bCaseInsensitive
            }
        }

        function nt(t) {
            return {
                sSearch: t.search,
                bSmart: t.smart,
                bRegex: t.regex,
                bCaseInsensitive: t.caseInsensitive
            }
        }

        function it(e) {
            var n = e.sTableId,
                i = e.aanFeatures.i,
                r = t("<div/>", {
                    "class": e.oClasses.sInfo,
                    id: i ? null : n + "_info"
                });
            return i || (e.aoDrawCallback.push({
                fn: rt,
                sName: "information"
            }), r.attr("role", "status").attr("aria-live", "polite"), t(e.nTable).attr("aria-describedby", n + "_info")), r[0]
        }

        function rt(e) {
            var n = e.aanFeatures.i;
            if (0 !== n.length) {
                var i = e.oLanguage,
                    r = e._iDisplayStart + 1,
                    o = e.fnDisplayEnd(),
                    s = e.fnRecordsTotal(),
                    a = e.fnRecordsDisplay(),
                    l = a ? i.sInfo : i.sInfoEmpty;
                a !== s && (l += " " + i.sInfoFiltered), l += i.sInfoPostFix, l = ot(e, l);
                var u = i.fnInfoCallback;
                null !== u && (l = u.call(e.oInstance, e, r, o, s, a, l)), t(n).html(l)
            }
        }

        function ot(t, e) {
            var n = t.fnFormatNumber,
                i = t._iDisplayStart + 1,
                r = t._iDisplayLength,
                o = t.fnRecordsDisplay(),
                s = r === -1;
            return e.replace(/_START_/g, n.call(t, i)).replace(/_END_/g, n.call(t, t.fnDisplayEnd())).replace(/_MAX_/g, n.call(t, t.fnRecordsTotal())).replace(/_TOTAL_/g, n.call(t, o)).replace(/_PAGE_/g, n.call(t, s ? 1 : Math.ceil(i / r))).replace(/_PAGES_/g, n.call(t, s ? 1 : Math.ceil(o / r)))
        }

        function st(t) {
            var e, n, i, r = t.iInitDisplayStart,
                o = t.aoColumns,
                s = t.oFeatures,
                a = t.bDeferLoading;
            if (!t.bInitialised) return void setTimeout(function() {
                st(t)
            }, 200);
            for (H(t), j(t), L(t, t.aoHeader), L(t, t.aoFooter), pt(t, !0), s.bAutoWidth && vt(t), e = 0, n = o.length; e < n; e++) i = o[e], i.sWidth && (i.nTh.style.width = St(i.sWidth));
            Lt(t, null, "preInit", [t]), R(t);
            var l = Ht(t);
            ("ssp" != l || a) && ("ajax" == l ? q(t, [], function(n) {
                var i = V(t, n);
                for (e = 0; e < i.length; e++) w(t, i[e]);
                t.iInitDisplayStart = r, R(t), pt(t, !1), at(t, n)
            }, t) : (pt(t, !1), at(t)))
        }

        function at(t, e) {
            t._bInitComplete = !0, (e || t.oInit.aaData) && p(t), Lt(t, null, "plugin-init", [t, e]), Lt(t, "aoInitComplete", "init", [t, e])
        }

        function lt(t, e) {
            var n = parseInt(e, 10);
            t._iDisplayLength = n, Nt(t), Lt(t, null, "length", [t, n])
        }

        function ut(e) {
            for (var n = e.oClasses, i = e.sTableId, r = e.aLengthMenu, o = t.isArray(r[0]), s = o ? r[0] : r, a = o ? r[1] : r, l = t("<select/>", {
                    name: i + "_length",
                    "aria-controls": i,
                    "class": n.sLengthSelect
                }), u = 0, c = s.length; u < c; u++) l[0][u] = new Option("number" == typeof a[u] ? e.fnFormatNumber(a[u]) : a[u], s[u]);
            var d = t("<div><label/></div>").addClass(n.sLength);
            return e.aanFeatures.l || (d[0].id = i + "_length"), d.children().append(e.oLanguage.sLengthMenu.replace("_MENU_", l[0].outerHTML)), t("select", d).val(e._iDisplayLength).on("change.DT", function(n) {
                lt(e, t(this).val()), N(e)
            }), t(e.nTable).on("length.dt.DT", function(n, i, r) {
                e === i && t("select", d).val(r)
            }), d[0]
        }

        function ct(e) {
            var n = e.sPaginationType,
                i = Gt.ext.pager[n],
                r = "function" == typeof i,
                o = function(t) {
                    N(t)
                },
                s = t("<div/>").addClass(e.oClasses.sPaging + n)[0],
                a = e.aanFeatures;
            return r || i.fnInit(e, s, o), a.p || (s.id = e.sTableId + "_paginate", e.aoDrawCallback.push({
                fn: function(t) {
                    if (r) {
                        var e, n, s = t._iDisplayStart,
                            l = t._iDisplayLength,
                            u = t.fnRecordsDisplay(),
                            c = l === -1,
                            d = c ? 0 : Math.ceil(s / l),
                            h = c ? 1 : Math.ceil(u / l),
                            p = i(d, h);
                        for (e = 0, n = a.p.length; e < n; e++) Rt(t, "pageButton")(t, a.p[e], e, p, d, h)
                    } else i.fnUpdate(t, o)
                },
                sName: "pagination"
            })), s
        }

        function dt(t, e, n) {
            var i = t._iDisplayStart,
                r = t._iDisplayLength,
                o = t.fnRecordsDisplay();
            0 === o || r === -1 ? i = 0 : "number" == typeof e ? (i = e * r, i > o && (i = 0)) : "first" == e ? i = 0 : "previous" == e ? (i = r >= 0 ? i - r : 0, i < 0 && (i = 0)) : "next" == e ? i + r < o && (i += r) : "last" == e ? i = Math.floor((o - 1) / r) * r : Ot(t, 0, "Unknown paging action: " + e, 5);
            var s = t._iDisplayStart !== i;
            return t._iDisplayStart = i, s && (Lt(t, null, "page", [t]), n && N(t)), s
        }

        function ht(e) {
            return t("<div/>", {
                id: e.aanFeatures.r ? null : e.sTableId + "_processing",
                "class": e.oClasses.sProcessing
            }).html(e.oLanguage.sProcessing).insertBefore(e.nTable)[0]
        }

        function pt(e, n) {
            e.oFeatures.bProcessing && t(e.aanFeatures.r).css("display", n ? "block" : "none"), Lt(e, null, "processing", [e, n])
        }

        function ft(e) {
            var n = t(e.nTable);
            n.attr("role", "grid");
            var i = e.oScroll;
            if ("" === i.sX && "" === i.sY) return e.nTable;
            var r = i.sX,
                o = i.sY,
                s = e.oClasses,
                a = n.children("caption"),
                l = a.length ? a[0]._captionSide : null,
                u = t(n[0].cloneNode(!1)),
                c = t(n[0].cloneNode(!1)),
                d = n.children("tfoot"),
                h = "<div/>",
                p = function(t) {
                    return t ? St(t) : null
                };
            d.length || (d = null);
            var f = t(h, {
                "class": s.sScrollWrapper
            }).append(t(h, {
                "class": s.sScrollHead
            }).css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: r ? p(r) : "100%"
            }).append(t(h, {
                "class": s.sScrollHeadInner
            }).css({
                "box-sizing": "content-box",
                width: i.sXInner || "100%"
            }).append(u.removeAttr("id").css("margin-left", 0).append("top" === l ? a : null).append(n.children("thead"))))).append(t(h, {
                "class": s.sScrollBody
            }).css({
                position: "relative",
                overflow: "auto",
                width: p(r)
            }).append(n));
            d && f.append(t(h, {
                "class": s.sScrollFoot
            }).css({
                overflow: "hidden",
                border: 0,
                width: r ? p(r) : "100%"
            }).append(t(h, {
                "class": s.sScrollFootInner
            }).append(c.removeAttr("id").css("margin-left", 0).append("bottom" === l ? a : null).append(n.children("tfoot")))));
            var g = f.children(),
                m = g[0],
                v = g[1],
                y = d ? g[2] : null;
            return r && t(v).on("scroll.DT", function(t) {
                var e = this.scrollLeft;
                m.scrollLeft = e, d && (y.scrollLeft = e)
            }), t(v).css(o && i.bCollapse ? "max-height" : "height", o), e.nScrollHead = m, e.nScrollBody = v, e.nScrollFoot = y, e.aoDrawCallback.push({
                fn: gt,
                sName: "scrolling"
            }), f[0]
        }

        function gt(e) {
            var n, r, o, s, a, l, u, c, d, h = e.oScroll,
                g = h.sX,
                m = h.sXInner,
                v = h.sY,
                y = h.iBarWidth,
                b = t(e.nScrollHead),
                w = b[0].style,
                S = b.children("div"),
                _ = S[0].style,
                T = S.children("table"),
                x = e.nScrollBody,
                k = t(x),
                C = x.style,
                D = t(e.nScrollFoot),
                A = D.children("div"),
                $ = A.children("table"),
                M = t(e.nTHead),
                E = t(e.nTable),
                O = E[0],
                P = O.style,
                I = e.nTFoot ? t(e.nTFoot) : null,
                F = e.oBrowser,
                j = F.bScrollOversize,
                L = ae(e.aoColumns, "nTh"),
                N = [],
                R = [],
                H = [],
                U = [],
                q = function(t) {
                    var e = t.style;
                    e.paddingTop = "0", e.paddingBottom = "0", e.borderTopWidth = "0", e.borderBottomWidth = "0", e.height = 0
                },
                Y = x.scrollHeight > x.clientHeight;
            if (e.scrollBarVis !== Y && e.scrollBarVis !== i) return e.scrollBarVis = Y, void p(e);
            e.scrollBarVis = Y, E.children("thead, tfoot").remove(), I && (l = I.clone().prependTo(E), r = I.find("tr"), s = l.find("tr")), a = M.clone().prependTo(E), n = M.find("tr"), o = a.find("tr"), a.find("th, td").removeAttr("tabindex"), g || (C.width = "100%", b[0].style.width = "100%"), t.each(W(e, a), function(t, n) {
                u = f(e, t), n.style.width = e.aoColumns[u].sWidth
            }), I && mt(function(t) {
                t.style.width = ""
            }, s), d = E.outerWidth(), "" === g ? (P.width = "100%", j && (E.find("tbody").height() > x.offsetHeight || "scroll" == k.css("overflow-y")) && (P.width = St(E.outerWidth() - y)), d = E.outerWidth()) : "" !== m && (P.width = St(m), d = E.outerWidth()), mt(q, o), mt(function(e) {
                H.push(e.innerHTML), N.push(St(t(e).css("width")))
            }, o), mt(function(e, n) {
                t.inArray(e, L) !== -1 && (e.style.width = N[n])
            }, n), t(o).height(0), I && (mt(q, s), mt(function(e) {
                U.push(e.innerHTML), R.push(St(t(e).css("width")))
            }, s), mt(function(t, e) {
                t.style.width = R[e]
            }, r), t(s).height(0)), mt(function(t, e) {
                t.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + H[e] + "</div>", t.style.width = N[e]
            }, o), I && mt(function(t, e) {
                t.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + U[e] + "</div>", t.style.width = R[e]
            }, s), E.outerWidth() < d ? (c = x.scrollHeight > x.offsetHeight || "scroll" == k.css("overflow-y") ? d + y : d, j && (x.scrollHeight > x.offsetHeight || "scroll" == k.css("overflow-y")) && (P.width = St(c - y)), "" !== g && "" === m || Ot(e, 1, "Possible column misalignment", 6)) : c = "100%", C.width = St(c), w.width = St(c), I && (e.nScrollFoot.style.width = St(c)), v || j && (C.height = St(O.offsetHeight + y));
            var B = E.outerWidth();
            T[0].style.width = St(B), _.width = St(B);
            var z = E.height() > x.clientHeight || "scroll" == k.css("overflow-y"),
                V = "padding" + (F.bScrollbarLeft ? "Left" : "Right");
            _[V] = z ? y + "px" : "0px", I && ($[0].style.width = St(B), A[0].style.width = St(B), A[0].style[V] = z ? y + "px" : "0px"), E.children("colgroup").insertBefore(E.children("thead")), k.scroll(), !e.bSorted && !e.bFiltered || e._drawHold || (x.scrollTop = 0)
        }

        function mt(t, e, n) {
            for (var i, r, o = 0, s = 0, a = e.length; s < a;) {
                for (i = e[s].firstChild, r = n ? n[s].firstChild : null; i;) 1 === i.nodeType && (n ? t(i, r, o) : t(i, o), o++), i = i.nextSibling, r = n ? r.nextSibling : null;
                s++
            }
        }

        function vt(n) {
            var i, r, o, s = n.nTable,
                a = n.aoColumns,
                l = n.oScroll,
                u = l.sY,
                c = l.sX,
                d = l.sXInner,
                h = a.length,
                g = v(n, "bVisible"),
                y = t("th", n.nTHead),
                b = s.getAttribute("width"),
                w = s.parentNode,
                S = !1,
                _ = n.oBrowser,
                T = _.bScrollOversize,
                x = s.style.width;
            for (x && x.indexOf("%") !== -1 && (b = x), i = 0; i < g.length; i++) r = a[g[i]], null !== r.sWidth && (r.sWidth = yt(r.sWidthOrig, w), S = !0);
            if (T || !S && !c && !u && h == m(n) && h == y.length)
                for (i = 0; i < h; i++) {
                    var k = f(n, i);
                    null !== k && (a[k].sWidth = St(y.eq(i).width()))
                } else {
                    var C = t(s).clone().css("visibility", "hidden").removeAttr("id");
                    C.find("tbody tr").remove();
                    var D = t("<tr/>").appendTo(C.find("tbody"));
                    for (C.find("thead, tfoot").remove(), C.append(t(n.nTHead).clone()).append(t(n.nTFoot).clone()), C.find("tfoot th, tfoot td").css("width", ""), y = W(n, C.find("thead")[0]), i = 0; i < g.length; i++) r = a[g[i]], y[i].style.width = null !== r.sWidthOrig && "" !== r.sWidthOrig ? St(r.sWidthOrig) : "", r.sWidthOrig && c && t(y[i]).append(t("<div/>").css({
                        width: r.sWidthOrig,
                        margin: 0,
                        padding: 0,
                        border: 0,
                        height: 1
                    }));
                    if (n.aoData.length)
                        for (i = 0; i < g.length; i++) o = g[i], r = a[o], t(bt(n, o)).clone(!1).append(r.sContentPadding).appendTo(D);
                    t("[name]", C).removeAttr("name");
                    var A = t("<div/>").css(c || u ? {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: 1,
                        right: 0,
                        overflow: "hidden"
                    } : {}).append(C).appendTo(w);
                    c && d ? C.width(d) : c ? (C.css("width", "auto"), C.removeAttr("width"), C.width() < w.clientWidth && b && C.width(w.clientWidth)) : u ? C.width(w.clientWidth) : b && C.width(b);
                    var $ = 0;
                    for (i = 0; i < g.length; i++) {
                        var M = t(y[i]),
                            E = M.outerWidth() - M.width(),
                            O = _.bBounding ? Math.ceil(y[i].getBoundingClientRect().width) : M.outerWidth();
                        $ += O, a[g[i]].sWidth = St(O - E)
                    }
                    s.style.width = St($), A.remove()
                }
            if (b && (s.style.width = St(b)), (b || c) && !n._reszEvt) {
                var P = function() {
                    t(e).on("resize.DT-" + n.sInstance, Se(function() {
                        p(n)
                    }))
                };
                T ? setTimeout(P, 1e3) : P(), n._reszEvt = !0
            }
        }

        function yt(e, i) {
            if (!e) return 0;
            var r = t("<div/>").css("width", St(e)).appendTo(i || n.body),
                o = r[0].offsetWidth;
            return r.remove(), o
        }

        function bt(e, n) {
            var i = wt(e, n);
            if (i < 0) return null;
            var r = e.aoData[i];
            return r.nTr ? r.anCells[n] : t("<td/>").html(x(e, i, n, "display"))[0]
        }

        function wt(t, e) {
            for (var n, i = -1, r = -1, o = 0, s = t.aoData.length; o < s; o++) n = x(t, o, e, "display") + "", n = n.replace(we, ""), n = n.replace(/&nbsp;/g, " "), n.length > i && (i = n.length, r = o);
            return r
        }

        function St(t) {
            return null === t ? "0px" : "number" == typeof t ? t < 0 ? "0px" : t + "px" : t.match(/\d$/) ? t + "px" : t
        }

        function _t(e) {
            var n, r, o, s, a, l, u, c = [],
                d = e.aoColumns,
                h = e.aaSortingFixed,
                p = t.isPlainObject(h),
                f = [],
                g = function(e) {
                    e.length && !t.isArray(e[0]) ? f.push(e) : t.merge(f, e)
                };
            for (t.isArray(h) && g(h), p && h.pre && g(h.pre), g(e.aaSorting), p && h.post && g(h.post), n = 0; n < f.length; n++)
                for (u = f[n][0], s = d[u].aDataSort, r = 0, o = s.length; r < o; r++) a = s[r], l = d[a].sType || "string", f[n]._idx === i && (f[n]._idx = t.inArray(f[n][1], d[a].asSorting)), c.push({
                    src: u,
                    col: a,
                    dir: f[n][1],
                    index: f[n]._idx,
                    type: l,
                    formatter: Gt.ext.type.order[l + "-pre"]
                });
            return c
        }

        function Tt(t) {
            var e, n, i, r, o, s = [],
                a = Gt.ext.type.order,
                l = t.aoData,
                u = (t.aoColumns, 0),
                c = t.aiDisplayMaster;
            for (y(t), o = _t(t), e = 0, n = o.length; e < n; e++) r = o[e], r.formatter && u++, At(t, r.col);
            if ("ssp" != Ht(t) && 0 !== o.length) {
                for (e = 0, i = c.length; e < i; e++) s[c[e]] = e;
                u === o.length ? c.sort(function(t, e) {
                    var n, i, r, a, u, c = o.length,
                        d = l[t]._aSortData,
                        h = l[e]._aSortData;
                    for (r = 0; r < c; r++)
                        if (u = o[r], n = d[u.col], i = h[u.col], a = n < i ? -1 : n > i ? 1 : 0, 0 !== a) return "asc" === u.dir ? a : -a;
                    return n = s[t], i = s[e], n < i ? -1 : n > i ? 1 : 0
                }) : c.sort(function(t, e) {
                    var n, i, r, u, c, d, h = o.length,
                        p = l[t]._aSortData,
                        f = l[e]._aSortData;
                    for (r = 0; r < h; r++)
                        if (c = o[r], n = p[c.col], i = f[c.col], d = a[c.type + "-" + c.dir] || a["string-" + c.dir], u = d(n, i), 0 !== u) return u;
                    return n = s[t], i = s[e], n < i ? -1 : n > i ? 1 : 0
                })
            }
            t.bSorted = !0
        }

        function xt(t) {
            for (var e, n, i = t.aoColumns, r = _t(t), o = t.oLanguage.oAria, s = 0, a = i.length; s < a; s++) {
                var l = i[s],
                    u = l.asSorting,
                    c = l.sTitle.replace(/<.*?>/g, ""),
                    d = l.nTh;
                d.removeAttribute("aria-sort"), l.bSortable ? (r.length > 0 && r[0].col == s ? (d.setAttribute("aria-sort", "asc" == r[0].dir ? "ascending" : "descending"), n = u[r[0].index + 1] || u[0]) : n = u[0], e = c + ("asc" === n ? o.sSortAscending : o.sSortDescending)) : e = c, d.setAttribute("aria-label", e)
            }
        }

        function kt(e, n, r, o) {
            var s, a = e.aoColumns[n],
                l = e.aaSorting,
                u = a.asSorting,
                c = function(e, n) {
                    var r = e._idx;
                    return r === i && (r = t.inArray(e[1], u)), r + 1 < u.length ? r + 1 : n ? null : 0
                };
            if ("number" == typeof l[0] && (l = e.aaSorting = [l]), r && e.oFeatures.bSortMulti) {
                var d = t.inArray(n, ae(l, "0"));
                d !== -1 ? (s = c(l[d], !0), null === s && 1 === l.length && (s = 0), null === s ? l.splice(d, 1) : (l[d][1] = u[s], l[d]._idx = s)) : (l.push([n, u[0], 0]), l[l.length - 1]._idx = 0)
            } else l.length && l[0][0] == n ? (s = c(l[0]), l.length = 1, l[0][1] = u[s], l[0]._idx = s) : (l.length = 0, l.push([n, u[0]]), l[0]._idx = 0);
            R(e), "function" == typeof o && o(e)
        }

        function Ct(t, e, n, i) {
            var r = t.aoColumns[n];
            Ft(e, {}, function(e) {
                r.bSortable !== !1 && (t.oFeatures.bProcessing ? (pt(t, !0), setTimeout(function() {
                    kt(t, n, e.shiftKey, i), "ssp" !== Ht(t) && pt(t, !1)
                }, 0)) : kt(t, n, e.shiftKey, i))
            })
        }

        function Dt(e) {
            var n, i, r, o = e.aLastSort,
                s = e.oClasses.sSortColumn,
                a = _t(e),
                l = e.oFeatures;
            if (l.bSort && l.bSortClasses) {
                for (n = 0, i = o.length; n < i; n++) r = o[n].src, t(ae(e.aoData, "anCells", r)).removeClass(s + (n < 2 ? n + 1 : 3));
                for (n = 0, i = a.length; n < i; n++) r = a[n].src, t(ae(e.aoData, "anCells", r)).addClass(s + (n < 2 ? n + 1 : 3))
            }
            e.aLastSort = a
        }

        function At(t, e) {
            var n, i = t.aoColumns[e],
                r = Gt.ext.order[i.sSortDataType];
            r && (n = r.call(t.oInstance, t, e, g(t, e)));
            for (var o, s, a = Gt.ext.type.order[i.sType + "-pre"], l = 0, u = t.aoData.length; l < u; l++) o = t.aoData[l], o._aSortData || (o._aSortData = []), o._aSortData[e] && !r || (s = r ? n[l] : x(t, l, e, "sort"), o._aSortData[e] = a ? a(s) : s)
        }

        function $t(e) {
            if (e.oFeatures.bStateSave && !e.bDestroying) {
                var n = {
                    time: +new Date,
                    start: e._iDisplayStart,
                    length: e._iDisplayLength,
                    order: t.extend(!0, [], e.aaSorting),
                    search: et(e.oPreviousSearch),
                    columns: t.map(e.aoColumns, function(t, n) {
                        return {
                            visible: t.bVisible,
                            search: et(e.aoPreSearchCols[n])
                        }
                    })
                };
                Lt(e, "aoStateSaveParams", "stateSaveParams", [e, n]), e.oSavedState = n, e.fnStateSaveCallback.call(e.oInstance, e, n)
            }
        }

        function Mt(e, n, r) {
            var o, s, a = e.aoColumns,
                l = function(n) {
                    if (!n || !n.time) return void r();
                    var l = Lt(e, "aoStateLoadParams", "stateLoadParams", [e, n]);
                    if (t.inArray(!1, l) !== -1) return void r();
                    var u = e.iStateDuration;
                    if (u > 0 && n.time < +new Date - 1e3 * u) return void r();
                    if (n.columns && a.length !== n.columns.length) return void r();
                    if (e.oLoadedState = t.extend(!0, {}, n), n.start !== i && (e._iDisplayStart = n.start, e.iInitDisplayStart = n.start), n.length !== i && (e._iDisplayLength = n.length), n.order !== i && (e.aaSorting = [], t.each(n.order, function(t, n) {
                            e.aaSorting.push(n[0] >= a.length ? [0, n[1]] : n)
                        })), n.search !== i && t.extend(e.oPreviousSearch, nt(n.search)), n.columns)
                        for (o = 0, s = n.columns.length; o < s; o++) {
                            var c = n.columns[o];
                            c.visible !== i && (a[o].bVisible = c.visible), c.search !== i && t.extend(e.aoPreSearchCols[o], nt(c.search))
                        }
                    Lt(e, "aoStateLoaded", "stateLoaded", [e, n]), r()
                };
            if (!e.oFeatures.bStateSave) return void r();
            var u = e.fnStateLoadCallback.call(e.oInstance, e, l);
            u !== i && l(u)
        }

        function Et(e) {
            var n = Gt.settings,
                i = t.inArray(e, ae(n, "nTable"));
            return i !== -1 ? n[i] : null
        }

        function Ot(t, n, i, r) {
            if (i = "DataTables warning: " + (t ? "table id=" + t.sTableId + " - " : "") + i, r && (i += ". For more information about this error, please see http://datatables.net/tn/" + r), n) e.console && console.log;
            else {
                var o = Gt.ext,
                    s = o.sErrMode || o.errMode;
                if (t && Lt(t, null, "error", [t, r, i]), "alert" == s);
                else {
                    if ("throw" == s) throw new Error(i);
                    "function" == typeof s && s(t, r, i)
                }
            }
        }

        function Pt(e, n, r, o) {
            return t.isArray(r) ? void t.each(r, function(i, r) {
                t.isArray(r) ? Pt(e, n, r[0], r[1]) : Pt(e, n, r)
            }) : (o === i && (o = r), void(n[r] !== i && (e[o] = n[r])))
        }

        function It(e, n, i) {
            var r;
            for (var o in n) n.hasOwnProperty(o) && (r = n[o], t.isPlainObject(r) ? (t.isPlainObject(e[o]) || (e[o] = {}), t.extend(!0, e[o], r)) : i && "data" !== o && "aaData" !== o && t.isArray(r) ? e[o] = r.slice() : e[o] = r);
            return e
        }

        function Ft(e, n, i) {
            t(e).on("click.DT", n, function(t) {
                e.blur(), i(t)
            }).on("keypress.DT", n, function(t) {
                13 === t.which && (t.preventDefault(), i(t))
            }).on("selectstart.DT", function() {
                return !1
            })
        }

        function jt(t, e, n, i) {
            n && t[e].push({
                fn: n,
                sName: i
            })
        }

        function Lt(e, n, i, r) {
            var o = [];
            if (n && (o = t.map(e[n].slice().reverse(), function(t, n) {
                    return t.fn.apply(e.oInstance, r)
                })), null !== i) {
                var s = t.Event(i + ".dt");
                t(e.nTable).trigger(s, r), o.push(s.result)
            }
            return o
        }

        function Nt(t) {
            var e = t._iDisplayStart,
                n = t.fnDisplayEnd(),
                i = t._iDisplayLength;
            e >= n && (e = n - i), e -= e % i, (i === -1 || e < 0) && (e = 0), t._iDisplayStart = e
        }

        function Rt(e, n) {
            var i = e.renderer,
                r = Gt.ext.renderer[n];
            return t.isPlainObject(i) && i[n] ? r[i[n]] || r._ : "string" == typeof i ? r[i] || r._ : r._
        }

        function Ht(t) {
            return t.oFeatures.bServerSide ? "ssp" : t.ajax || t.sAjaxSource ? "ajax" : "dom"
        }

        function Ut(t, e) {
            var n = [],
                i = Ye.numbers_length,
                r = Math.floor(i / 2);
            return e <= i ? n = ue(0, e) : t <= r ? (n = ue(0, i - 2), n.push("ellipsis"), n.push(e - 1)) : t >= e - 1 - r ? (n = ue(e - (i - 2), e), n.splice(0, 0, "ellipsis"), n.splice(0, 0, 0)) : (n = ue(t - r + 2, t + r - 1), n.push("ellipsis"), n.push(e - 1), n.splice(0, 0, "ellipsis"), n.splice(0, 0, 0)), n.DT_el = "span", n
        }

        function Wt(e) {
            t.each({
                num: function(t) {
                    return Be(t, e)
                },
                "num-fmt": function(t) {
                    return Be(t, e, te)
                },
                "html-num": function(t) {
                    return Be(t, e, Jt)
                },
                "html-num-fmt": function(t) {
                    return Be(t, e, Jt, te)
                }
            }, function(t, n) {
                Yt.type.order[t + e + "-pre"] = n, t.match(/^html\-/) && (Yt.type.search[t + e] = Yt.type.search.html)
            })
        }

        function qt(t) {
            return function() {
                var e = [Et(this[Gt.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                return Gt.ext.internal[t].apply(this, e)
            }
        }
        var Yt, Bt, zt, Vt, Gt = function(e) {
                this.$ = function(t, e) {
                    return this.api(!0).$(t, e)
                }, this._ = function(t, e) {
                    return this.api(!0).rows(t, e).data()
                }, this.api = function(t) {
                    return new Bt(t ? Et(this[Yt.iApiIndex]) : this)
                }, this.fnAddData = function(e, n) {
                    var r = this.api(!0),
                        o = t.isArray(e) && (t.isArray(e[0]) || t.isPlainObject(e[0])) ? r.rows.add(e) : r.row.add(e);
                    return (n === i || n) && r.draw(), o.flatten().toArray()
                }, this.fnAdjustColumnSizing = function(t) {
                    var e = this.api(!0).columns.adjust(),
                        n = e.settings()[0],
                        r = n.oScroll;
                    t === i || t ? e.draw(!1) : "" === r.sX && "" === r.sY || gt(n)
                }, this.fnClearTable = function(t) {
                    var e = this.api(!0).clear();
                    (t === i || t) && e.draw()
                }, this.fnClose = function(t) {
                    this.api(!0).row(t).child.hide()
                }, this.fnDeleteRow = function(t, e, n) {
                    var r = this.api(!0),
                        o = r.rows(t),
                        s = o.settings()[0],
                        a = s.aoData[o[0][0]];
                    return o.remove(), e && e.call(this, s, a), (n === i || n) && r.draw(), a
                }, this.fnDestroy = function(t) {
                    this.api(!0).destroy(t)
                }, this.fnDraw = function(t) {
                    this.api(!0).draw(t)
                }, this.fnFilter = function(t, e, n, r, o, s) {
                    var a = this.api(!0);
                    null === e || e === i ? a.search(t, n, r, s) : a.column(e).search(t, n, r, s), a.draw()
                }, this.fnGetData = function(t, e) {
                    var n = this.api(!0);
                    if (t !== i) {
                        var r = t.nodeName ? t.nodeName.toLowerCase() : "";
                        return e !== i || "td" == r || "th" == r ? n.cell(t, e).data() : n.row(t).data() || null
                    }
                    return n.data().toArray()
                }, this.fnGetNodes = function(t) {
                    var e = this.api(!0);
                    return t !== i ? e.row(t).node() : e.rows().nodes().flatten().toArray()
                }, this.fnGetPosition = function(t) {
                    var e = this.api(!0),
                        n = t.nodeName.toUpperCase();
                    if ("TR" == n) return e.row(t).index();
                    if ("TD" == n || "TH" == n) {
                        var i = e.cell(t).index();
                        return [i.row, i.columnVisible, i.column]
                    }
                    return null
                }, this.fnIsOpen = function(t) {
                    return this.api(!0).row(t).child.isShown()
                }, this.fnOpen = function(t, e, n) {
                    return this.api(!0).row(t).child(e, n).show().child()[0]
                }, this.fnPageChange = function(t, e) {
                    var n = this.api(!0).page(t);
                    (e === i || e) && n.draw(!1)
                }, this.fnSetColumnVis = function(t, e, n) {
                    var r = this.api(!0).column(t).visible(e);
                    (n === i || n) && r.columns.adjust().draw()
                }, this.fnSettings = function() {
                    return Et(this[Yt.iApiIndex])
                }, this.fnSort = function(t) {
                    this.api(!0).order(t).draw()
                }, this.fnSortListener = function(t, e, n) {
                    this.api(!0).order.listener(t, e, n)
                }, this.fnUpdate = function(t, e, n, r, o) {
                    var s = this.api(!0);
                    return n === i || null === n ? s.row(e).data(t) : s.cell(e, n).data(t), (o === i || o) && s.columns.adjust(), (r === i || r) && s.draw(), 0
                }, this.fnVersionCheck = Yt.fnVersionCheck;
                var n = this,
                    r = e === i,
                    c = this.length;
                r && (e = {}), this.oApi = this.internal = Yt.internal;
                for (var p in Gt.ext.internal) p && (this[p] = qt(p));
                return this.each(function() {
                    var p, f = {},
                        g = c > 1 ? It(f, e, !0) : e,
                        m = 0,
                        v = this.getAttribute("id"),
                        y = !1,
                        _ = Gt.defaults,
                        T = t(this);
                    if ("table" != this.nodeName.toLowerCase()) return void Ot(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                    a(_), l(_.column), o(_, _, !0), o(_.column, _.column, !0), o(_, t.extend(g, T.data()));
                    var x = Gt.settings;
                    for (m = 0, p = x.length; m < p; m++) {
                        var k = x[m];
                        if (k.nTable == this || k.nTHead.parentNode == this || k.nTFoot && k.nTFoot.parentNode == this) {
                            var C = g.bRetrieve !== i ? g.bRetrieve : _.bRetrieve,
                                A = g.bDestroy !== i ? g.bDestroy : _.bDestroy;
                            if (r || C) return k.oInstance;
                            if (A) {
                                k.oInstance.fnDestroy();
                                break
                            }
                            return void Ot(k, 0, "Cannot reinitialise DataTable", 3)
                        }
                        if (k.sTableId == this.id) {
                            x.splice(m, 1);
                            break
                        }
                    }
                    null !== v && "" !== v || (v = "DataTables_Table_" + Gt.ext._unique++, this.id = v);
                    var $ = t.extend(!0, {}, Gt.models.oSettings, {
                        sDestroyWidth: T[0].style.width,
                        sInstance: v,
                        sTableId: v
                    });
                    $.nTable = this, $.oApi = n.internal, $.oInit = g, x.push($), $.oInstance = 1 === n.length ? n : T.dataTable(), a(g), g.oLanguage && s(g.oLanguage), g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = t.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]), g = It(t.extend(!0, {}, _), g), Pt($.oFeatures, g, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]), Pt($, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                        ["oSearch", "oPreviousSearch"],
                        ["aoSearchCols", "aoPreSearchCols"],
                        ["iDisplayLength", "_iDisplayLength"]
                    ]), Pt($.oScroll, g, [
                        ["sScrollX", "sX"],
                        ["sScrollXInner", "sXInner"],
                        ["sScrollY", "sY"],
                        ["bScrollCollapse", "bCollapse"]
                    ]), Pt($.oLanguage, g, "fnInfoCallback"), jt($, "aoDrawCallback", g.fnDrawCallback, "user"), jt($, "aoServerParams", g.fnServerParams, "user"), jt($, "aoStateSaveParams", g.fnStateSaveParams, "user"), jt($, "aoStateLoadParams", g.fnStateLoadParams, "user"), jt($, "aoStateLoaded", g.fnStateLoaded, "user"), jt($, "aoRowCallback", g.fnRowCallback, "user"), jt($, "aoRowCreatedCallback", g.fnCreatedRow, "user"), jt($, "aoHeaderCallback", g.fnHeaderCallback, "user"), jt($, "aoFooterCallback", g.fnFooterCallback, "user"), jt($, "aoInitComplete", g.fnInitComplete, "user"), jt($, "aoPreDrawCallback", g.fnPreDrawCallback, "user"), $.rowIdFn = D(g.rowId), u($);
                    var M = $.oClasses;
                    if (t.extend(M, Gt.ext.classes, g.oClasses), T.addClass(M.sTable), $.iInitDisplayStart === i && ($.iInitDisplayStart = g.iDisplayStart, $._iDisplayStart = g.iDisplayStart), null !== g.iDeferLoading) {
                        $.bDeferLoading = !0;
                        var E = t.isArray(g.iDeferLoading);
                        $._iRecordsDisplay = E ? g.iDeferLoading[0] : g.iDeferLoading, $._iRecordsTotal = E ? g.iDeferLoading[1] : g.iDeferLoading
                    }
                    var O = $.oLanguage;
                    t.extend(!0, O, g.oLanguage), O.sUrl && (t.ajax({
                        dataType: "json",
                        url: O.sUrl,
                        success: function(e) {
                            s(e), o(_.oLanguage, e), t.extend(!0, O, e), st($)
                        },
                        error: function() {
                            st($)
                        }
                    }), y = !0), null === g.asStripeClasses && ($.asStripeClasses = [M.sStripeOdd, M.sStripeEven]);
                    var P = $.asStripeClasses,
                        I = T.children("tbody").find("tr").eq(0);
                    t.inArray(!0, t.map(P, function(t, e) {
                        return I.hasClass(t)
                    })) !== -1 && (t("tbody tr", this).removeClass(P.join(" ")), $.asDestroyStripes = P.slice());
                    var F, j = [],
                        L = this.getElementsByTagName("thead");
                    if (0 !== L.length && (U($.aoHeader, L[0]), j = W($)), null === g.aoColumns)
                        for (F = [], m = 0, p = j.length; m < p; m++) F.push(null);
                    else F = g.aoColumns;
                    for (m = 0, p = F.length; m < p; m++) d($, j ? j[m] : null);
                    if (b($, g.aoColumnDefs, F, function(t, e) {
                            h($, t, e)
                        }), I.length) {
                        var N = function(t, e) {
                            return null !== t.getAttribute("data-" + e) ? e : null
                        };
                        t(I[0]).children("th, td").each(function(t, e) {
                            var n = $.aoColumns[t];
                            if (n.mData === t) {
                                var r = N(e, "sort") || N(e, "order"),
                                    o = N(e, "filter") || N(e, "search");
                                null === r && null === o || (n.mData = {
                                    _: t + ".display",
                                    sort: null !== r ? t + ".@data-" + r : i,
                                    type: null !== r ? t + ".@data-" + r : i,
                                    filter: null !== o ? t + ".@data-" + o : i
                                }, h($, t))
                            }
                        })
                    }
                    var R = $.oFeatures,
                        H = function() {
                            if (g.aaSorting === i) {
                                var e = $.aaSorting;
                                for (m = 0, p = e.length; m < p; m++) e[m][1] = $.aoColumns[m].asSorting[0]
                            }
                            Dt($), R.bSort && jt($, "aoDrawCallback", function() {
                                if ($.bSorted) {
                                    var e = _t($),
                                        n = {};
                                    t.each(e, function(t, e) {
                                        n[e.src] = e.dir
                                    }), Lt($, null, "order", [$, e, n]), xt($)
                                }
                            }), jt($, "aoDrawCallback", function() {
                                ($.bSorted || "ssp" === Ht($) || R.bDeferRender) && Dt($)
                            }, "sc");
                            var n = T.children("caption").each(function() {
                                    this._captionSide = t(this).css("caption-side")
                                }),
                                r = T.children("thead");
                            0 === r.length && (r = t("<thead/>").appendTo(T)), $.nTHead = r[0];
                            var o = T.children("tbody");
                            0 === o.length && (o = t("<tbody/>").appendTo(T)), $.nTBody = o[0];
                            var s = T.children("tfoot");
                            if (0 === s.length && n.length > 0 && ("" !== $.oScroll.sX || "" !== $.oScroll.sY) && (s = t("<tfoot/>").appendTo(T)), 0 === s.length || 0 === s.children().length ? T.addClass(M.sNoFooter) : s.length > 0 && ($.nTFoot = s[0], U($.aoFooter, $.nTFoot)), g.aaData)
                                for (m = 0; m < g.aaData.length; m++) w($, g.aaData[m]);
                            else($.bDeferLoading || "dom" == Ht($)) && S($, t($.nTBody).children("tr"));
                            $.aiDisplay = $.aiDisplayMaster.slice(), $.bInitialised = !0, y === !1 && st($)
                        };
                    g.bStateSave ? (R.bStateSave = !0, jt($, "aoDrawCallback", $t, "state_save"), Mt($, g, H)) : H()
                }), n = null, this
            },
            Xt = {},
            Qt = /[\r\n]/g,
            Jt = /<.*?>/g,
            Kt = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
            Zt = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"),
            te = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
            ee = function(t) {
                return !t || t === !0 || "-" === t
            },
            ne = function(t) {
                var e = parseInt(t, 10);
                return !isNaN(e) && isFinite(t) ? e : null
            },
            ie = function(t, e) {
                return Xt[e] || (Xt[e] = new RegExp(ve(e), "g")), "string" == typeof t && "." !== e ? t.replace(/\./g, "").replace(Xt[e], ".") : t
            },
            re = function(t, e, n) {
                var i = "string" == typeof t;
                return !!ee(t) || (e && i && (t = ie(t, e)), n && i && (t = t.replace(te, "")), !isNaN(parseFloat(t)) && isFinite(t))
            },
            oe = function(t) {
                return ee(t) || "string" == typeof t
            },
            se = function(t, e, n) {
                if (ee(t)) return !0;
                var i = oe(t);
                return i ? !!re(de(t), e, n) || null : null
            },
            ae = function(t, e, n) {
                var r = [],
                    o = 0,
                    s = t.length;
                if (n !== i)
                    for (; o < s; o++) t[o] && t[o][e] && r.push(t[o][e][n]);
                else
                    for (; o < s; o++) t[o] && r.push(t[o][e]);
                return r
            },
            le = function(t, e, n, r) {
                var o = [],
                    s = 0,
                    a = e.length;
                if (r !== i)
                    for (; s < a; s++) t[e[s]][n] && o.push(t[e[s]][n][r]);
                else
                    for (; s < a; s++) o.push(t[e[s]][n]);
                return o
            },
            ue = function(t, e) {
                var n, r = [];
                e === i ? (e = 0, n = t) : (n = e, e = t);
                for (var o = e; o < n; o++) r.push(o);
                return r
            },
            ce = function(t) {
                for (var e = [], n = 0, i = t.length; n < i; n++) t[n] && e.push(t[n]);
                return e
            },
            de = function(t) {
                return t.replace(Jt, "")
            },
            he = function(t) {
                if (t.length < 2) return !0;
                for (var e = t.slice().sort(), n = e[0], i = 1, r = e.length; i < r; i++) {
                    if (e[i] === n) return !1;
                    n = e[i]
                }
                return !0
            },
            pe = function(t) {
                if (he(t)) return t.slice();
                var e, n, i, r = [],
                    o = t.length,
                    s = 0;
                t: for (n = 0; n < o; n++) {
                    for (e = t[n], i = 0; i < s; i++)
                        if (r[i] === e) continue t;
                    r.push(e), s++
                }
                return r
            };
        Gt.util = {
            throttle: function(t, e) {
                var n, r, o = e !== i ? e : 200;
                return function() {
                    var e = this,
                        s = +new Date,
                        a = arguments;
                    n && s < n + o ? (clearTimeout(r), r = setTimeout(function() {
                        n = i, t.apply(e, a)
                    }, o)) : (n = s, t.apply(e, a))
                }
            },
            escapeRegex: function(t) {
                return t.replace(Zt, "\\$1")
            }
        };
        var fe = function(t, e, n) {
                t[e] !== i && (t[n] = t[e])
            },
            ge = /\[.*?\]$/,
            me = /\(\)$/,
            ve = Gt.util.escapeRegex,
            ye = t("<div>")[0],
            be = ye.textContent !== i,
            we = /<.*?>/g,
            Se = Gt.util.throttle,
            _e = [],
            Te = Array.prototype,
            xe = function(e) {
                var n, i, r = Gt.settings,
                    o = t.map(r, function(t, e) {
                        return t.nTable
                    });
                return e ? e.nTable && e.oApi ? [e] : e.nodeName && "table" === e.nodeName.toLowerCase() ? (n = t.inArray(e, o), n !== -1 ? [r[n]] : null) : e && "function" == typeof e.settings ? e.settings().toArray() : ("string" == typeof e ? i = t(e) : e instanceof t && (i = e), i ? i.map(function(e) {
                    return n = t.inArray(this, o), n !== -1 ? r[n] : null
                }).toArray() : void 0) : []
            };
        Bt = function(e, n) {
            if (!(this instanceof Bt)) return new Bt(e, n);
            var i = [],
                r = function(t) {
                    var e = xe(t);
                    e && (i = i.concat(e))
                };
            if (t.isArray(e))
                for (var o = 0, s = e.length; o < s; o++) r(e[o]);
            else r(e);
            this.context = pe(i), n && t.merge(this, n), this.selector = {
                rows: null,
                cols: null,
                opts: null
            }, Bt.extend(this, this, _e)
        }, Gt.Api = Bt, t.extend(Bt.prototype, {
            any: function() {
                return 0 !== this.count()
            },
            concat: Te.concat,
            context: [],
            count: function() {
                return this.flatten().length
            },
            each: function(t) {
                for (var e = 0, n = this.length; e < n; e++) t.call(this, this[e], e, this);
                return this
            },
            eq: function(t) {
                var e = this.context;
                return e.length > t ? new Bt(e[t], this[t]) : null
            },
            filter: function(t) {
                var e = [];
                if (Te.filter) e = Te.filter.call(this, t, this);
                else
                    for (var n = 0, i = this.length; n < i; n++) t.call(this, this[n], n, this) && e.push(this[n]);
                return new Bt(this.context, e)
            },
            flatten: function() {
                var t = [];
                return new Bt(this.context, t.concat.apply(t, this.toArray()))
            },
            join: Te.join,
            indexOf: Te.indexOf || function(t, e) {
                for (var n = e || 0, i = this.length; n < i; n++)
                    if (this[n] === t) return n;
                return -1
            },
            iterator: function(t, e, n, r) {
                var o, s, a, l, u, c, d, h, p = [],
                    f = this.context,
                    g = this.selector;
                for ("string" == typeof t && (r = n, n = e, e = t, t = !1), s = 0, a = f.length; s < a; s++) {
                    var m = new Bt(f[s]);
                    if ("table" === e) o = n.call(m, f[s], s), o !== i && p.push(o);
                    else if ("columns" === e || "rows" === e) o = n.call(m, f[s], this[s], s), o !== i && p.push(o);
                    else if ("column" === e || "column-rows" === e || "row" === e || "cell" === e)
                        for (d = this[s], "column-rows" === e && (c = Me(f[s], g.opts)), l = 0, u = d.length; l < u; l++) h = d[l], o = "cell" === e ? n.call(m, f[s], h.row, h.column, s, l) : n.call(m, f[s], h, s, l, c), o !== i && p.push(o)
                }
                if (p.length || r) {
                    var v = new Bt(f, t ? p.concat.apply([], p) : p),
                        y = v.selector;
                    return y.rows = g.rows, y.cols = g.cols, y.opts = g.opts, v
                }
                return this
            },
            lastIndexOf: Te.lastIndexOf || function(t, e) {
                return this.indexOf.apply(this.toArray.reverse(), arguments)
            },
            length: 0,
            map: function(t) {
                var e = [];
                if (Te.map) e = Te.map.call(this, t, this);
                else
                    for (var n = 0, i = this.length; n < i; n++) e.push(t.call(this, this[n], n));
                return new Bt(this.context, e)
            },
            pluck: function(t) {
                return this.map(function(e) {
                    return e[t]
                })
            },
            pop: Te.pop,
            push: Te.push,
            reduce: Te.reduce || function(t, e) {
                return c(this, t, e, 0, this.length, 1)
            },
            reduceRight: Te.reduceRight || function(t, e) {
                return c(this, t, e, this.length - 1, -1, -1)
            },
            reverse: Te.reverse,
            selector: null,
            shift: Te.shift,
            slice: function() {
                return new Bt(this.context, this)
            },
            sort: Te.sort,
            splice: Te.splice,
            toArray: function() {
                return Te.slice.call(this)
            },
            to$: function() {
                return t(this)
            },
            toJQuery: function() {
                return t(this)
            },
            unique: function() {
                return new Bt(this.context, pe(this))
            },
            unshift: Te.unshift
        }), Bt.extend = function(e, n, i) {
            if (i.length && n && (n instanceof Bt || n.__dt_wrapper)) {
                var r, o, s, a = function(t, e, n) {
                    return function() {
                        var i = e.apply(t, arguments);
                        return Bt.extend(i, i, n.methodExt), i
                    }
                };
                for (r = 0, o = i.length; r < o; r++) s = i[r], n[s.name] = "function" == typeof s.val ? a(e, s.val, s) : t.isPlainObject(s.val) ? {} : s.val, n[s.name].__dt_wrapper = !0, Bt.extend(e, n[s.name], s.propExt)
            }
        }, Bt.register = zt = function(e, n) {
            if (t.isArray(e))
                for (var i = 0, r = e.length; i < r; i++) Bt.register(e[i], n);
            else {
                var o, s, a, l, u = e.split("."),
                    c = _e,
                    d = function(t, e) {
                        for (var n = 0, i = t.length; n < i; n++)
                            if (t[n].name === e) return t[n];
                        return null
                    };
                for (o = 0, s = u.length; o < s; o++) {
                    l = u[o].indexOf("()") !== -1, a = l ? u[o].replace("()", "") : u[o];
                    var h = d(c, a);
                    h || (h = {
                        name: a,
                        val: {},
                        methodExt: [],
                        propExt: []
                    }, c.push(h)), o === s - 1 ? h.val = n : c = l ? h.methodExt : h.propExt
                }
            }
        }, Bt.registerPlural = Vt = function(e, n, r) {
            Bt.register(e, r), Bt.register(n, function() {
                var e = r.apply(this, arguments);
                return e === this ? this : e instanceof Bt ? e.length ? t.isArray(e[0]) ? new Bt(e.context, e[0]) : e[0] : i : e
            })
        };
        var ke = function(e, n) {
            if ("number" == typeof e) return [n[e]];
            var i = t.map(n, function(t, e) {
                return t.nTable
            });
            return t(i).filter(e).map(function(e) {
                var r = t.inArray(this, i);
                return n[r]
            }).toArray()
        };
        zt("tables()", function(t) {
            return t ? new Bt(ke(t, this.context)) : this
        }), zt("table()", function(t) {
            var e = this.tables(t),
                n = e.context;
            return n.length ? new Bt(n[0]) : e
        }), Vt("tables().nodes()", "table().node()", function() {
            return this.iterator("table", function(t) {
                return t.nTable
            }, 1)
        }), Vt("tables().body()", "table().body()", function() {
            return this.iterator("table", function(t) {
                return t.nTBody
            }, 1)
        }), Vt("tables().header()", "table().header()", function() {
            return this.iterator("table", function(t) {
                return t.nTHead
            }, 1)
        }), Vt("tables().footer()", "table().footer()", function() {
            return this.iterator("table", function(t) {
                return t.nTFoot
            }, 1)
        }), Vt("tables().containers()", "table().container()", function() {
            return this.iterator("table", function(t) {
                return t.nTableWrapper
            }, 1)
        }), zt("draw()", function(t) {
            return this.iterator("table", function(e) {
                "page" === t ? N(e) : ("string" == typeof t && (t = "full-hold" !== t), R(e, t === !1))
            })
        }), zt("page()", function(t) {
            return t === i ? this.page.info().page : this.iterator("table", function(e) {
                dt(e, t)
            })
        }), zt("page.info()", function(t) {
            if (0 === this.context.length) return i;
            var e = this.context[0],
                n = e._iDisplayStart,
                r = e.oFeatures.bPaginate ? e._iDisplayLength : -1,
                o = e.fnRecordsDisplay(),
                s = r === -1;
            return {
                page: s ? 0 : Math.floor(n / r),
                pages: s ? 1 : Math.ceil(o / r),
                start: n,
                end: e.fnDisplayEnd(),
                length: r,
                recordsTotal: e.fnRecordsTotal(),
                recordsDisplay: o,
                serverSide: "ssp" === Ht(e)
            }
        }), zt("page.len()", function(t) {
            return t === i ? 0 !== this.context.length ? this.context[0]._iDisplayLength : i : this.iterator("table", function(e) {
                lt(e, t)
            })
        });
        var Ce = function(t, e, n) {
            if (n) {
                var i = new Bt(t);
                i.one("draw", function() {
                    n(i.ajax.json())
                })
            }
            if ("ssp" == Ht(t)) R(t, e);
            else {
                pt(t, !0);
                var r = t.jqXHR;
                r && 4 !== r.readyState && r.abort(), q(t, [], function(n) {
                    M(t);
                    for (var i = V(t, n), r = 0, o = i.length; r < o; r++) w(t, i[r]);
                    R(t, e), pt(t, !1)
                })
            }
        };
        zt("ajax.json()", function() {
            var t = this.context;
            if (t.length > 0) return t[0].json
        }), zt("ajax.params()", function() {
            var t = this.context;
            if (t.length > 0) return t[0].oAjaxData
        }), zt("ajax.reload()", function(t, e) {
            return this.iterator("table", function(n) {
                Ce(n, e === !1, t)
            })
        }), zt("ajax.url()", function(e) {
            var n = this.context;
            return e === i ? 0 === n.length ? i : (n = n[0], n.ajax ? t.isPlainObject(n.ajax) ? n.ajax.url : n.ajax : n.sAjaxSource) : this.iterator("table", function(n) {
                t.isPlainObject(n.ajax) ? n.ajax.url = e : n.ajax = e
            })
        }), zt("ajax.url().load()", function(t, e) {
            return this.iterator("table", function(n) {
                Ce(n, e === !1, t)
            })
        });
        var De = function(e, n, r, o, s) {
                var a, l, u, c, d, h, p = [],
                    f = typeof n;
                for (n && "string" !== f && "function" !== f && n.length !== i || (n = [n]), u = 0, c = n.length; u < c; u++)
                    for (l = n[u] && n[u].split && !n[u].match(/[\[\(:]/) ? n[u].split(",") : [n[u]], d = 0, h = l.length; d < h; d++) a = r("string" == typeof l[d] ? t.trim(l[d]) : l[d]), a && a.length && (p = p.concat(a));
                var g = Yt.selector[e];
                if (g.length)
                    for (u = 0, c = g.length; u < c; u++) p = g[u](o, s, p);
                return pe(p)
            },
            Ae = function(e) {
                return e || (e = {}), e.filter && e.search === i && (e.search = e.filter), t.extend({
                    search: "none",
                    order: "current",
                    page: "all"
                }, e)
            },
            $e = function(t) {
                for (var e = 0, n = t.length; e < n; e++)
                    if (t[e].length > 0) return t[0] = t[e], t[0].length = 1, t.length = 1, t.context = [t.context[e]], t;
                return t.length = 0, t
            },
            Me = function(e, n) {
                var i, r, o, s = [],
                    a = e.aiDisplay,
                    l = e.aiDisplayMaster,
                    u = n.search,
                    c = n.order,
                    d = n.page;
                if ("ssp" == Ht(e)) return "removed" === u ? [] : ue(0, l.length);
                if ("current" == d)
                    for (i = e._iDisplayStart, r = e.fnDisplayEnd(); i < r; i++) s.push(a[i]);
                else if ("current" == c || "applied" == c) s = "none" == u ? l.slice() : "applied" == u ? a.slice() : t.map(l, function(e, n) {
                    return t.inArray(e, a) === -1 ? e : null
                });
                else if ("index" == c || "original" == c)
                    for (i = 0, r = e.aoData.length; i < r; i++) "none" == u ? s.push(i) : (o = t.inArray(i, a), (o === -1 && "removed" == u || o >= 0 && "applied" == u) && s.push(i));
                return s
            },
            Ee = function(e, n, r) {
                var o, s = function(n) {
                    var s = ne(n);
                    if (null !== s && !r) return [s];
                    if (o || (o = Me(e, r)), null !== s && t.inArray(s, o) !== -1) return [s];
                    if (null === n || n === i || "" === n) return o;
                    if ("function" == typeof n) return t.map(o, function(t) {
                        var i = e.aoData[t];
                        return n(t, i._aData, i.nTr) ? t : null
                    });
                    var a = ce(le(e.aoData, o, "nTr"));
                    if (n.nodeName) {
                        if (n._DT_RowIndex !== i) return [n._DT_RowIndex];
                        if (n._DT_CellIndex) return [n._DT_CellIndex.row];
                        var l = t(n).closest("*[data-dt-row]");
                        return l.length ? [l.data("dt-row")] : []
                    }
                    if ("string" == typeof n && "#" === n.charAt(0)) {
                        var u = e.aIds[n.replace(/^#/, "")];
                        if (u !== i) return [u.idx]
                    }
                    return t(a).filter(n).map(function() {
                        return this._DT_RowIndex
                    }).toArray()
                };
                return De("row", n, s, e, r)
            };
        zt("rows()", function(e, n) {
            e === i ? e = "" : t.isPlainObject(e) && (n = e, e = ""), n = Ae(n);
            var r = this.iterator("table", function(t) {
                return Ee(t, e, n)
            }, 1);
            return r.selector.rows = e, r.selector.opts = n, r
        }), zt("rows().nodes()", function() {
            return this.iterator("row", function(t, e) {
                return t.aoData[e].nTr || i
            }, 1)
        }), zt("rows().data()", function() {
            return this.iterator(!0, "rows", function(t, e) {
                return le(t.aoData, e, "_aData")
            }, 1)
        }), Vt("rows().cache()", "row().cache()", function(t) {
            return this.iterator("row", function(e, n) {
                var i = e.aoData[n];
                return "search" === t ? i._aFilterData : i._aSortData
            }, 1)
        }), Vt("rows().invalidate()", "row().invalidate()", function(t) {
            return this.iterator("row", function(e, n) {
                O(e, n, t)
            })
        }), Vt("rows().indexes()", "row().index()", function() {
            return this.iterator("row", function(t, e) {
                return e
            }, 1)
        }), Vt("rows().ids()", "row().id()", function(t) {
            for (var e = [], n = this.context, i = 0, r = n.length; i < r; i++)
                for (var o = 0, s = this[i].length; o < s; o++) {
                    var a = n[i].rowIdFn(n[i].aoData[this[i][o]]._aData);
                    e.push((t === !0 ? "#" : "") + a)
                }
            return new Bt(n, e)
        }), Vt("rows().remove()", "row().remove()", function() {
            var t = this;
            return this.iterator("row", function(e, n, r) {
                var o, s, a, l, u, c, d = e.aoData,
                    h = d[n];
                for (d.splice(n, 1), o = 0, s = d.length; o < s; o++)
                    if (u = d[o], c = u.anCells, null !== u.nTr && (u.nTr._DT_RowIndex = o), null !== c)
                        for (a = 0, l = c.length; a < l; a++) c[a]._DT_CellIndex.row = o;
                E(e.aiDisplayMaster, n), E(e.aiDisplay, n), E(t[r], n, !1), e._iRecordsDisplay > 0 && e._iRecordsDisplay--, Nt(e);
                var p = e.rowIdFn(h._aData);
                p !== i && delete e.aIds[p]
            }), this.iterator("table", function(t) {
                for (var e = 0, n = t.aoData.length; e < n; e++) t.aoData[e].idx = e
            }), this
        }), zt("rows.add()", function(e) {
            var n = this.iterator("table", function(t) {
                    var n, i, r, o = [];
                    for (i = 0, r = e.length; i < r; i++) n = e[i], n.nodeName && "TR" === n.nodeName.toUpperCase() ? o.push(S(t, n)[0]) : o.push(w(t, n));
                    return o
                }, 1),
                i = this.rows(-1);
            return i.pop(), t.merge(i, n), i
        }), zt("row()", function(t, e) {
            return $e(this.rows(t, e))
        }), zt("row().data()", function(t) {
            var e = this.context;
            return t === i ? e.length && this.length ? e[0].aoData[this[0]]._aData : i : (e[0].aoData[this[0]]._aData = t, O(e[0], this[0], "data"), this)
        }), zt("row().node()", function() {
            var t = this.context;
            return t.length && this.length ? t[0].aoData[this[0]].nTr || null : null
        }), zt("row.add()", function(e) {
            e instanceof t && e.length && (e = e[0]);
            var n = this.iterator("table", function(t) {
                return e.nodeName && "TR" === e.nodeName.toUpperCase() ? S(t, e)[0] : w(t, e)
            });
            return this.row(n[0])
        });
        var Oe = function(e, n, i, r) {
                var o = [],
                    s = function(n, i) {
                        if (t.isArray(n) || n instanceof t)
                            for (var r = 0, a = n.length; r < a; r++) s(n[r], i);
                        else if (n.nodeName && "tr" === n.nodeName.toLowerCase()) o.push(n);
                        else {
                            var l = t("<tr><td/></tr>").addClass(i);
                            t("td", l).addClass(i).html(n)[0].colSpan = m(e), o.push(l[0])
                        }
                    };
                s(i, r), n._details && n._details.detach(), n._details = t(o), n._detailsShow && n._details.insertAfter(n.nTr)
            },
            Pe = function(t, e) {
                var n = t.context;
                if (n.length) {
                    var r = n[0].aoData[e !== i ? e : t[0]];
                    r && r._details && (r._details.remove(), r._detailsShow = i, r._details = i)
                }
            },
            Ie = function(t, e) {
                var n = t.context;
                if (n.length && t.length) {
                    var i = n[0].aoData[t[0]];
                    i._details && (i._detailsShow = e, e ? i._details.insertAfter(i.nTr) : i._details.detach(), Fe(n[0]))
                }
            },
            Fe = function(t) {
                var e = new Bt(t),
                    n = ".dt.DT_details",
                    i = "draw" + n,
                    r = "column-visibility" + n,
                    o = "destroy" + n,
                    s = t.aoData;
                e.off(i + " " + r + " " + o), ae(s, "_details").length > 0 && (e.on(i, function(n, i) {
                    t === i && e.rows({
                        page: "current"
                    }).eq(0).each(function(t) {
                        var e = s[t];
                        e._detailsShow && e._details.insertAfter(e.nTr)
                    })
                }), e.on(r, function(e, n, i, r) {
                    if (t === n)
                        for (var o, a = m(n), l = 0, u = s.length; l < u; l++) o = s[l], o._details && o._details.children("td[colspan]").attr("colspan", a)
                }), e.on(o, function(n, i) {
                    if (t === i)
                        for (var r = 0, o = s.length; r < o; r++) s[r]._details && Pe(e, r)
                }))
            },
            je = "",
            Le = je + "row().child",
            Ne = Le + "()";
        zt(Ne, function(t, e) {
            var n = this.context;
            return t === i ? n.length && this.length ? n[0].aoData[this[0]]._details : i : (t === !0 ? this.child.show() : t === !1 ? Pe(this) : n.length && this.length && Oe(n[0], n[0].aoData[this[0]], t, e), this)
        }), zt([Le + ".show()", Ne + ".show()"], function(t) {
            return Ie(this, !0), this
        }), zt([Le + ".hide()", Ne + ".hide()"], function() {
            return Ie(this, !1), this
        }), zt([Le + ".remove()", Ne + ".remove()"], function() {
            return Pe(this), this
        }), zt(Le + ".isShown()", function() {
            var t = this.context;
            return !(!t.length || !this.length) && (t[0].aoData[this[0]]._detailsShow || !1)
        });
        var Re = /^([^:]+):(name|visIdx|visible)$/,
            He = function(t, e, n, i, r) {
                for (var o = [], s = 0, a = r.length; s < a; s++) o.push(x(t, r[s], e));
                return o
            },
            Ue = function(e, n, i) {
                var r = e.aoColumns,
                    o = ae(r, "sName"),
                    s = ae(r, "nTh"),
                    a = function(n) {
                        var a = ne(n);
                        if ("" === n) return ue(r.length);
                        if (null !== a) return [a >= 0 ? a : r.length + a];
                        if ("function" == typeof n) {
                            var l = Me(e, i);
                            return t.map(r, function(t, i) {
                                return n(i, He(e, i, 0, 0, l), s[i]) ? i : null
                            })
                        }
                        var u = "string" == typeof n ? n.match(Re) : "";
                        if (u) switch (u[2]) {
                            case "visIdx":
                            case "visible":
                                var c = parseInt(u[1], 10);
                                if (c < 0) {
                                    var d = t.map(r, function(t, e) {
                                        return t.bVisible ? e : null
                                    });
                                    return [d[d.length + c]]
                                }
                                return [f(e, c)];
                            case "name":
                                return t.map(o, function(t, e) {
                                    return t === u[1] ? e : null
                                });
                            default:
                                return []
                        }
                        if (n.nodeName && n._DT_CellIndex) return [n._DT_CellIndex.column];
                        var h = t(s).filter(n).map(function() {
                            return t.inArray(this, s)
                        }).toArray();
                        if (h.length || !n.nodeName) return h;
                        var p = t(n).closest("*[data-dt-column]");
                        return p.length ? [p.data("dt-column")] : []
                    };
                return De("column", n, a, e, i)
            },
            We = function(e, n, r) {
                var o, s, a, l, u = e.aoColumns,
                    c = u[n],
                    d = e.aoData;
                if (r === i) return c.bVisible;
                if (c.bVisible !== r) {
                    if (r) {
                        var h = t.inArray(!0, ae(u, "bVisible"), n + 1);
                        for (s = 0, a = d.length; s < a; s++) l = d[s].nTr, o = d[s].anCells, l && l.insertBefore(o[n], o[h] || null)
                    } else t(ae(e.aoData, "anCells", n)).detach();
                    c.bVisible = r, L(e, e.aoHeader), L(e, e.aoFooter), $t(e)
                }
            };
        zt("columns()", function(e, n) {
            e === i ? e = "" : t.isPlainObject(e) && (n = e, e = ""), n = Ae(n);
            var r = this.iterator("table", function(t) {
                return Ue(t, e, n)
            }, 1);
            return r.selector.cols = e, r.selector.opts = n, r
        }), Vt("columns().header()", "column().header()", function(t, e) {
            return this.iterator("column", function(t, e) {
                return t.aoColumns[e].nTh
            }, 1)
        }), Vt("columns().footer()", "column().footer()", function(t, e) {
            return this.iterator("column", function(t, e) {
                return t.aoColumns[e].nTf
            }, 1)
        }), Vt("columns().data()", "column().data()", function() {
            return this.iterator("column-rows", He, 1)
        }), Vt("columns().dataSrc()", "column().dataSrc()", function() {
            return this.iterator("column", function(t, e) {
                return t.aoColumns[e].mData
            }, 1)
        }), Vt("columns().cache()", "column().cache()", function(t) {
            return this.iterator("column-rows", function(e, n, i, r, o) {
                return le(e.aoData, o, "search" === t ? "_aFilterData" : "_aSortData", n)
            }, 1)
        }), Vt("columns().nodes()", "column().nodes()", function() {
            return this.iterator("column-rows", function(t, e, n, i, r) {
                return le(t.aoData, r, "anCells", e)
            }, 1)
        }), Vt("columns().visible()", "column().visible()", function(t, e) {
            var n = this.iterator("column", function(e, n) {
                return t === i ? e.aoColumns[n].bVisible : void We(e, n, t)
            });
            return t !== i && (this.iterator("column", function(n, i) {
                Lt(n, null, "column-visibility", [n, i, t, e])
            }), (e === i || e) && this.columns.adjust()), n
        }), Vt("columns().indexes()", "column().index()", function(t) {
            return this.iterator("column", function(e, n) {
                return "visible" === t ? g(e, n) : n
            }, 1)
        }), zt("columns.adjust()", function() {
            return this.iterator("table", function(t) {
                p(t)
            }, 1)
        }), zt("column.index()", function(t, e) {
            if (0 !== this.context.length) {
                var n = this.context[0];
                if ("fromVisible" === t || "toData" === t) return f(n, e);
                if ("fromData" === t || "toVisible" === t) return g(n, e)
            }
        }), zt("column()", function(t, e) {
            return $e(this.columns(t, e))
        });
        var qe = function(e, n, r) {
            var o, s, a, l, u, c, d, h = e.aoData,
                p = Me(e, r),
                f = ce(le(h, p, "anCells")),
                g = t([].concat.apply([], f)),
                m = e.aoColumns.length,
                v = function(n) {
                    var r = "function" == typeof n;
                    if (null === n || n === i || r) {
                        for (s = [], a = 0, l = p.length; a < l; a++)
                            for (o = p[a], u = 0; u < m; u++) c = {
                                row: o,
                                column: u
                            }, r ? (d = h[o], n(c, x(e, o, u), d.anCells ? d.anCells[u] : null) && s.push(c)) : s.push(c);
                        return s
                    }
                    if (t.isPlainObject(n)) return [n];
                    var f = g.filter(n).map(function(t, e) {
                        return {
                            row: e._DT_CellIndex.row,
                            column: e._DT_CellIndex.column
                        }
                    }).toArray();
                    return f.length || !n.nodeName ? f : (d = t(n).closest("*[data-dt-row]"), d.length ? [{
                        row: d.data("dt-row"),
                        column: d.data("dt-column")
                    }] : [])
                };
            return De("cell", n, v, e, r)
        };
        zt("cells()", function(e, n, r) {
            if (t.isPlainObject(e) && (e.row === i ? (r = e, e = null) : (r = n, n = null)), t.isPlainObject(n) && (r = n, n = null), null === n || n === i) return this.iterator("table", function(t) {
                return qe(t, e, Ae(r))
            });
            var o, s, a, l, u, c = this.columns(n, r),
                d = this.rows(e, r),
                h = this.iterator("table", function(t, e) {
                    for (o = [], s = 0, a = d[e].length; s < a; s++)
                        for (l = 0, u = c[e].length; l < u; l++) o.push({
                            row: d[e][s],
                            column: c[e][l]
                        });
                    return o
                }, 1);
            return t.extend(h.selector, {
                cols: n,
                rows: e,
                opts: r
            }), h
        }), Vt("cells().nodes()", "cell().node()", function() {
            return this.iterator("cell", function(t, e, n) {
                var r = t.aoData[e];
                return r && r.anCells ? r.anCells[n] : i
            }, 1)
        }), zt("cells().data()", function() {
            return this.iterator("cell", function(t, e, n) {
                return x(t, e, n)
            }, 1)
        }), Vt("cells().cache()", "cell().cache()", function(t) {
            return t = "search" === t ? "_aFilterData" : "_aSortData", this.iterator("cell", function(e, n, i) {
                return e.aoData[n][t][i]
            }, 1)
        }), Vt("cells().render()", "cell().render()", function(t) {
            return this.iterator("cell", function(e, n, i) {
                return x(e, n, i, t)
            }, 1)
        }), Vt("cells().indexes()", "cell().index()", function() {
            return this.iterator("cell", function(t, e, n) {
                return {
                    row: e,
                    column: n,
                    columnVisible: g(t, n)
                }
            }, 1)
        }), Vt("cells().invalidate()", "cell().invalidate()", function(t) {
            return this.iterator("cell", function(e, n, i) {
                O(e, n, t, i)
            })
        }), zt("cell()", function(t, e, n) {
            return $e(this.cells(t, e, n))
        }), zt("cell().data()", function(t) {
            var e = this.context,
                n = this[0];
            return t === i ? e.length && n.length ? x(e[0], n[0].row, n[0].column) : i : (k(e[0], n[0].row, n[0].column, t), O(e[0], n[0].row, "data", n[0].column), this)
        }), zt("order()", function(e, n) {
            var r = this.context;
            return e === i ? 0 !== r.length ? r[0].aaSorting : i : ("number" == typeof e ? e = [
                [e, n]
            ] : e.length && !t.isArray(e[0]) && (e = Array.prototype.slice.call(arguments)), this.iterator("table", function(t) {
                t.aaSorting = e.slice()
            }))
        }), zt("order.listener()", function(t, e, n) {
            return this.iterator("table", function(i) {
                Ct(i, t, e, n)
            })
        }), zt("order.fixed()", function(e) {
            if (!e) {
                var n = this.context,
                    r = n.length ? n[0].aaSortingFixed : i;
                return t.isArray(r) ? {
                    pre: r
                } : r
            }
            return this.iterator("table", function(n) {
                n.aaSortingFixed = t.extend(!0, {}, e)
            })
        }), zt(["columns().order()", "column().order()"], function(e) {
            var n = this;
            return this.iterator("table", function(i, r) {
                var o = [];
                t.each(n[r], function(t, n) {
                    o.push([n, e])
                }), i.aaSorting = o
            })
        }), zt("search()", function(e, n, r, o) {
            var s = this.context;
            return e === i ? 0 !== s.length ? s[0].oPreviousSearch.sSearch : i : this.iterator("table", function(i) {
                i.oFeatures.bFilter && X(i, t.extend({}, i.oPreviousSearch, {
                    sSearch: e + "",
                    bRegex: null !== n && n,
                    bSmart: null === r || r,
                    bCaseInsensitive: null === o || o
                }), 1)
            })
        }), Vt("columns().search()", "column().search()", function(e, n, r, o) {
            return this.iterator("column", function(s, a) {
                var l = s.aoPreSearchCols;
                return e === i ? l[a].sSearch : void(s.oFeatures.bFilter && (t.extend(l[a], {
                    sSearch: e + "",
                    bRegex: null !== n && n,
                    bSmart: null === r || r,
                    bCaseInsensitive: null === o || o
                }), X(s, s.oPreviousSearch, 1)))
            })
        }), zt("state()", function() {
            return this.context.length ? this.context[0].oSavedState : null
        }), zt("state.clear()", function() {
            return this.iterator("table", function(t) {
                t.fnStateSaveCallback.call(t.oInstance, t, {})
            })
        }), zt("state.loaded()", function() {
            return this.context.length ? this.context[0].oLoadedState : null
        }), zt("state.save()", function() {
            return this.iterator("table", function(t) {
                $t(t)
            })
        }), Gt.versionCheck = Gt.fnVersionCheck = function(t) {
            for (var e, n, i = Gt.version.split("."), r = t.split("."), o = 0, s = r.length; o < s; o++)
                if (e = parseInt(i[o], 10) || 0, n = parseInt(r[o], 10) || 0, e !== n) return e > n;
            return !0
        }, Gt.isDataTable = Gt.fnIsDataTable = function(e) {
            var n = t(e).get(0),
                i = !1;
            return e instanceof Gt.Api || (t.each(Gt.settings, function(e, r) {
                var o = r.nScrollHead ? t("table", r.nScrollHead)[0] : null,
                    s = r.nScrollFoot ? t("table", r.nScrollFoot)[0] : null;
                r.nTable !== n && o !== n && s !== n || (i = !0)
            }), i)
        }, Gt.tables = Gt.fnTables = function(e) {
            var n = !1;
            t.isPlainObject(e) && (n = e.api, e = e.visible);
            var i = t.map(Gt.settings, function(n) {
                if (!e || e && t(n.nTable).is(":visible")) return n.nTable
            });
            return n ? new Bt(i) : i
        }, Gt.camelToHungarian = o, zt("$()", function(e, n) {
            var i = this.rows(n).nodes(),
                r = t(i);
            return t([].concat(r.filter(e).toArray(), r.find(e).toArray()))
        }), t.each(["on", "one", "off"], function(e, n) {
            zt(n + "()", function() {
                var e = Array.prototype.slice.call(arguments);
                e[0] = t.map(e[0].split(/\s/), function(t) {
                    return t.match(/\.dt\b/) ? t : t + ".dt"
                }).join(" ");
                var i = t(this.tables().nodes());
                return i[n].apply(i, e), this
            })
        }), zt("clear()", function() {
            return this.iterator("table", function(t) {
                M(t)
            })
        }), zt("settings()", function() {
            return new Bt(this.context, this.context)
        }), zt("init()", function() {
            var t = this.context;
            return t.length ? t[0].oInit : null
        }), zt("data()", function() {
            return this.iterator("table", function(t) {
                return ae(t.aoData, "_aData")
            }).flatten()
        }), zt("destroy()", function(n) {
            return n = n || !1, this.iterator("table", function(i) {
                var r, o = i.nTableWrapper.parentNode,
                    s = i.oClasses,
                    a = i.nTable,
                    l = i.nTBody,
                    u = i.nTHead,
                    c = i.nTFoot,
                    d = t(a),
                    h = t(l),
                    p = t(i.nTableWrapper),
                    f = t.map(i.aoData, function(t) {
                        return t.nTr
                    });
                i.bDestroying = !0, Lt(i, "aoDestroyCallback", "destroy", [i]), n || new Bt(i).columns().visible(!0), p.off(".DT").find(":not(tbody *)").off(".DT"), t(e).off(".DT-" + i.sInstance), a != u.parentNode && (d.children("thead").detach(), d.append(u)), c && a != c.parentNode && (d.children("tfoot").detach(), d.append(c)), i.aaSorting = [], i.aaSortingFixed = [], Dt(i), t(f).removeClass(i.asStripeClasses.join(" ")), t("th, td", u).removeClass(s.sSortable + " " + s.sSortableAsc + " " + s.sSortableDesc + " " + s.sSortableNone), h.children().detach(), h.append(f);
                var g = n ? "remove" : "detach";
                d[g](), p[g](), !n && o && (o.insertBefore(a, i.nTableReinsertBefore), d.css("width", i.sDestroyWidth).removeClass(s.sTable), r = i.asDestroyStripes.length, r && h.children().each(function(e) {
                    t(this).addClass(i.asDestroyStripes[e % r])
                }));
                var m = t.inArray(i, Gt.settings);
                m !== -1 && Gt.settings.splice(m, 1)
            })
        }), t.each(["column", "row", "cell"], function(t, e) {
            zt(e + "s().every()", function(t) {
                var n = this.selector.opts,
                    r = this;
                return this.iterator(e, function(o, s, a, l, u) {
                    t.call(r[e](s, "cell" === e ? a : n, "cell" === e ? n : i), s, a, l, u)
                })
            })
        }), zt("i18n()", function(e, n, r) {
            var o = this.context[0],
                s = D(e)(o.oLanguage);
            return s === i && (s = n), r !== i && t.isPlainObject(s) && (s = s[r] !== i ? s[r] : s._), s.replace("%d", r)
        }), Gt.version = "1.10.16", Gt.settings = [], Gt.models = {}, Gt.models.oSearch = {
            bCaseInsensitive: !0,
            sSearch: "",
            bRegex: !1,
            bSmart: !0
        }, Gt.models.oRow = {
            nTr: null,
            anCells: null,
            _aData: [],
            _aSortData: null,
            _aFilterData: null,
            _sFilterRow: null,
            _sRowStripe: "",
            src: null,
            idx: -1
        }, Gt.models.oColumn = {
            idx: null,
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bVisible: null,
            _sManualType: null,
            _bAttrSrc: !1,
            fnCreatedCell: null,
            fnGetData: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null
        }, Gt.defaults = {
            aaData: null,
            aaSorting: [
                [0, "asc"]
            ],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [10, 25, 50, 100],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollCollapse: !1,
            bServerSide: !1,
            bSort: !0,
            bSortMulti: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function(t) {
                return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
            },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function(t) {
                try {
                    return JSON.parse((t.iStateDuration === -1 ? sessionStorage : localStorage).getItem("DataTables_" + t.sInstance + "_" + location.pathname))
                } catch (e) {}
            },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function(t, e) {
                try {
                    (t.iStateDuration === -1 ? sessionStorage : localStorage).setItem("DataTables_" + t.sInstance + "_" + location.pathname, JSON.stringify(e))
                } catch (n) {}
            },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: {
                oAria: {
                    sSortAscending: ": activate to sort column ascending",
                    sSortDescending: ": activate to sort column descending"
                },
                oPaginate: {
                    sFirst: "First",
                    sLast: "Last",
                    sNext: "Next",
                    sPrevious: "Previous"
                },
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu: "Show _MENU_ entries",
                sLoadingRecords: "Loading...",
                sProcessing: "Processing...",
                sSearch: "Search:",
                sSearchPlaceholder: "",
                sUrl: "",
                sZeroRecords: "No matching records found"
            },
            oSearch: t.extend({}, Gt.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            searchDelay: null,
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null,
            rowId: "DT_RowId"
        }, r(Gt.defaults), Gt.defaults.column = {
            aDataSort: null,
            iDataSort: -1,
            asSorting: ["asc", "desc"],
            bSearchable: !0,
            bSortable: !0,
            bVisible: !0,
            fnCreatedCell: null,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null
        }, r(Gt.defaults.column), Gt.models.oSettings = {
            oFeatures: {
                bAutoWidth: null,
                bDeferRender: null,
                bFilter: null,
                bInfo: null,
                bLengthChange: null,
                bPaginate: null,
                bProcessing: null,
                bServerSide: null,
                bSort: null,
                bSortMulti: null,
                bSortClasses: null,
                bStateSave: null
            },
            oScroll: {
                bCollapse: null,
                iBarWidth: 0,
                sX: null,
                sXInner: null,
                sY: null
            },
            oLanguage: {
                fnInfoCallback: null
            },
            oBrowser: {
                bScrollOversize: !1,
                bScrollbarLeft: !1,
                bBounding: !1,
                barWidth: 0
            },
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aIds: {},
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            searchDelay: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oSavedState: null,
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            json: i,
            oAjaxData: i,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function() {
                return "ssp" == Ht(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
            },
            fnRecordsDisplay: function() {
                return "ssp" == Ht(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
            },
            fnDisplayEnd: function() {
                var t = this._iDisplayLength,
                    e = this._iDisplayStart,
                    n = e + t,
                    i = this.aiDisplay.length,
                    r = this.oFeatures,
                    o = r.bPaginate;
                return r.bServerSide ? o === !1 || t === -1 ? e + i : Math.min(e + t, this._iRecordsDisplay) : !o || n > i || t === -1 ? i : n
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {},
            rowIdFn: null,
            rowId: null
        }, Gt.ext = Yt = {
            buttons: {},
            classes: {},
            builder: "-source-",
            errMode: "alert",
            feature: [],
            search: [],
            selector: {
                cell: [],
                column: [],
                row: []
            },
            internal: {},
            legacy: {
                ajax: null
            },
            pager: {},
            renderer: {
                pageButton: {},
                header: {}
            },
            order: {},
            type: {
                detect: [],
                search: {},
                order: {}
            },
            _unique: 0,
            fnVersionCheck: Gt.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: Gt.version
        }, t.extend(Yt, {
            afnFiltering: Yt.search,
            aTypes: Yt.type.detect,
            ofnSearch: Yt.type.search,
            oSort: Yt.type.order,
            afnSortData: Yt.order,
            aoFeatures: Yt.feature,
            oApi: Yt.internal,
            oStdClasses: Yt.classes,
            oPagination: Yt.pager
        }), t.extend(Gt.ext.classes, {
            sTable: "dataTable",
            sNoFooter: "no-footer",
            sPageButton: "paginate_button",
            sPageButtonActive: "current",
            sPageButtonDisabled: "disabled",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_asc_disabled",
            sSortableDesc: "sorting_desc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sFilterInput: "",
            sLengthSelect: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sHeaderTH: "",
            sFooterTH: "",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sJUIHeader: "",
            sJUIFooter: ""
        });
        var Ye = Gt.ext.pager;
        t.extend(Ye, {
            simple: function(t, e) {
                return ["previous", "next"]
            },
            full: function(t, e) {
                return ["first", "previous", "next", "last"]
            },
            numbers: function(t, e) {
                return [Ut(t, e)]
            },
            simple_numbers: function(t, e) {
                return ["previous", Ut(t, e), "next"]
            },
            full_numbers: function(t, e) {
                return ["first", "previous", Ut(t, e), "next", "last"]
            },
            first_last_numbers: function(t, e) {
                return ["first", Ut(t, e), "last"]
            },
            _numbers: Ut,
            numbers_length: 7
        }), t.extend(!0, Gt.ext.renderer, {
            pageButton: {
                _: function(e, r, o, s, a, l) {
                    var u, c, d, h = e.oClasses,
                        p = e.oLanguage.oPaginate,
                        f = e.oLanguage.oAria.paginate || {},
                        g = 0,
                        m = function(n, i) {
                            var r, s, d, v, y = function(t) {
                                dt(e, t.data.action, !0)
                            };
                            for (r = 0, s = i.length; r < s; r++)
                                if (v = i[r], t.isArray(v)) {
                                    var b = t("<" + (v.DT_el || "div") + "/>").appendTo(n);
                                    m(b, v)
                                } else {
                                    switch (u = null, c = "", v) {
                                        case "ellipsis":
                                            n.append('<span class="ellipsis">&#x2026;</span>');
                                            break;
                                        case "first":
                                            u = p.sFirst, c = v + (a > 0 ? "" : " " + h.sPageButtonDisabled);
                                            break;
                                        case "previous":
                                            u = p.sPrevious, c = v + (a > 0 ? "" : " " + h.sPageButtonDisabled);
                                            break;
                                        case "next":
                                            u = p.sNext, c = v + (a < l - 1 ? "" : " " + h.sPageButtonDisabled);
                                            break;
                                        case "last":
                                            u = p.sLast, c = v + (a < l - 1 ? "" : " " + h.sPageButtonDisabled);
                                            break;
                                        default:
                                            u = v + 1, c = a === v ? h.sPageButtonActive : ""
                                    }
                                    null !== u && (d = t("<a>", {
                                        "class": h.sPageButton + " " + c,
                                        "aria-controls": e.sTableId,
                                        "aria-label": f[v],
                                        "data-dt-idx": g,
                                        tabindex: e.iTabIndex,
                                        id: 0 === o && "string" == typeof v ? e.sTableId + "_" + v : null
                                    }).html(u).appendTo(n), Ft(d, {
                                        action: v
                                    }, y), g++)
                                }
                        };
                    try {
                        d = t(r).find(n.activeElement).data("dt-idx")
                    } catch (v) {}
                    m(t(r).empty(), s), d !== i && t(r).find("[data-dt-idx=" + d + "]").focus()
                }
            }
        }), t.extend(Gt.ext.type.detect, [function(t, e) {
            var n = e.oLanguage.sDecimal;
            return re(t, n) ? "num" + n : null
        }, function(t, e) {
            if (t && !(t instanceof Date) && !Kt.test(t)) return null;
            var n = Date.parse(t);
            return null !== n && !isNaN(n) || ee(t) ? "date" : null
        }, function(t, e) {
            var n = e.oLanguage.sDecimal;
            return re(t, n, !0) ? "num-fmt" + n : null
        }, function(t, e) {
            var n = e.oLanguage.sDecimal;
            return se(t, n) ? "html-num" + n : null
        }, function(t, e) {
            var n = e.oLanguage.sDecimal;
            return se(t, n, !0) ? "html-num-fmt" + n : null
        }, function(t, e) {
            return ee(t) || "string" == typeof t && t.indexOf("<") !== -1 ? "html" : null
        }]), t.extend(Gt.ext.type.search, {
            html: function(t) {
                return ee(t) ? t : "string" == typeof t ? t.replace(Qt, " ").replace(Jt, "") : ""
            },
            string: function(t) {
                return ee(t) ? t : "string" == typeof t ? t.replace(Qt, " ") : t
            }
        });
        var Be = function(t, e, n, i) {
            return 0 === t || t && "-" !== t ? (e && (t = ie(t, e)), t.replace && (n && (t = t.replace(n, "")), i && (t = t.replace(i, ""))), 1 * t) : -(1 / 0)
        };
        t.extend(Yt.type.order, {
            "date-pre": function(t) {
                return Date.parse(t) || -(1 / 0)
            },
            "html-pre": function(t) {
                return ee(t) ? "" : t.replace ? t.replace(/<.*?>/g, "").toLowerCase() : t + ""
            },
            "string-pre": function(t) {
                return ee(t) ? "" : "string" == typeof t ? t.toLowerCase() : t.toString ? t.toString() : ""
            },
            "string-asc": function(t, e) {
                return t < e ? -1 : t > e ? 1 : 0
            },
            "string-desc": function(t, e) {
                return t < e ? 1 : t > e ? -1 : 0
            }
        }), Wt(""), t.extend(!0, Gt.ext.renderer, {
            header: {
                _: function(e, n, i, r) {
                    t(e.nTable).on("order.dt.DT", function(t, o, s, a) {
                        if (e === o) {
                            var l = i.idx;
                            n.removeClass(i.sSortingClass + " " + r.sSortAsc + " " + r.sSortDesc).addClass("asc" == a[l] ? r.sSortAsc : "desc" == a[l] ? r.sSortDesc : i.sSortingClass)
                        }
                    })
                },
                jqueryui: function(e, n, i, r) {
                    t("<div/>").addClass(r.sSortJUIWrapper).append(n.contents()).append(t("<span/>").addClass(r.sSortIcon + " " + i.sSortingClassJUI)).appendTo(n), t(e.nTable).on("order.dt.DT", function(t, o, s, a) {
                        if (e === o) {
                            var l = i.idx;
                            n.removeClass(r.sSortAsc + " " + r.sSortDesc).addClass("asc" == a[l] ? r.sSortAsc : "desc" == a[l] ? r.sSortDesc : i.sSortingClass), n.find("span." + r.sSortIcon).removeClass(r.sSortJUIAsc + " " + r.sSortJUIDesc + " " + r.sSortJUI + " " + r.sSortJUIAscAllowed + " " + r.sSortJUIDescAllowed).addClass("asc" == a[l] ? r.sSortJUIAsc : "desc" == a[l] ? r.sSortJUIDesc : i.sSortingClassJUI)
                        }
                    })
                }
            }
        });
        var ze = function(t) {
            return "string" == typeof t ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t
        };
        return Gt.render = {
            number: function(t, e, n, i, r) {
                return {
                    display: function(o) {
                        if ("number" != typeof o && "string" != typeof o) return o;
                        var s = o < 0 ? "-" : "",
                            a = parseFloat(o);
                        if (isNaN(a)) return ze(o);
                        a = a.toFixed(n), o = Math.abs(a);
                        var l = parseInt(o, 10),
                            u = n ? e + (o - l).toFixed(n).substring(2) : "";
                        return s + (i || "") + l.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t) + u + (r || "")
                    }
                }
            },
            text: function() {
                return {
                    display: ze
                }
            }
        }, t.extend(Gt.ext.internal, {
            _fnExternApiFunc: qt,
            _fnBuildAjax: q,
            _fnAjaxUpdate: Y,
            _fnAjaxParameters: B,
            _fnAjaxUpdateDraw: z,
            _fnAjaxDataSrc: V,
            _fnAddColumn: d,
            _fnColumnOptions: h,
            _fnAdjustColumnSizing: p,
            _fnVisibleToColumnIndex: f,
            _fnColumnIndexToVisible: g,
            _fnVisbleColumns: m,
            _fnGetColumns: v,
            _fnColumnTypes: y,
            _fnApplyColumnDefs: b,
            _fnHungarianMap: r,
            _fnCamelToHungarian: o,
            _fnLanguageCompat: s,
            _fnBrowserDetect: u,
            _fnAddData: w,
            _fnAddTr: S,
            _fnNodeToDataIndex: _,
            _fnNodeToColumnIndex: T,
            _fnGetCellData: x,
            _fnSetCellData: k,
            _fnSplitObjNotation: C,
            _fnGetObjectDataFn: D,
            _fnSetObjectDataFn: A,
            _fnGetDataMaster: $,
            _fnClearTable: M,
            _fnDeleteIndex: E,
            _fnInvalidate: O,
            _fnGetRowElements: P,
            _fnCreateTr: I,
            _fnBuildHead: j,
            _fnDrawHead: L,
            _fnDraw: N,
            _fnReDraw: R,
            _fnAddOptionsHtml: H,
            _fnDetectHeader: U,
            _fnGetUniqueThs: W,
            _fnFeatureHtmlFilter: G,
            _fnFilterComplete: X,
            _fnFilterCustom: Q,
            _fnFilterColumn: J,
            _fnFilter: K,
            _fnFilterCreateSearch: Z,
            _fnEscapeRegex: ve,
            _fnFilterData: tt,
            _fnFeatureHtmlInfo: it,
            _fnUpdateInfo: rt,
            _fnInfoMacros: ot,
            _fnInitialise: st,
            _fnInitComplete: at,
            _fnLengthChange: lt,
            _fnFeatureHtmlLength: ut,
            _fnFeatureHtmlPaginate: ct,
            _fnPageChange: dt,
            _fnFeatureHtmlProcessing: ht,
            _fnProcessingDisplay: pt,
            _fnFeatureHtmlTable: ft,
            _fnScrollDraw: gt,
            _fnApplyToChildren: mt,
            _fnCalculateColumnWidths: vt,
            _fnThrottle: Se,
            _fnConvertToWidth: yt,
            _fnGetWidestNode: bt,
            _fnGetMaxLenString: wt,
            _fnStringToCss: St,
            _fnSortFlatten: _t,
            _fnSort: Tt,
            _fnSortAria: xt,
            _fnSortListener: kt,
            _fnSortAttachListener: Ct,
            _fnSortingClasses: Dt,
            _fnSortData: At,
            _fnSaveState: $t,
            _fnLoadState: Mt,
            _fnSettingsFromNode: Et,
            _fnLog: Ot,
            _fnMap: Pt,
            _fnBindAction: Ft,
            _fnCallbackReg: jt,
            _fnCallbackFire: Lt,
            _fnLengthOverflow: Nt,
            _fnRenderer: Rt,
            _fnDataSource: Ht,
            _fnRowAttributes: F,
            _fnCalculateEnd: function() {}
        }), t.fn.dataTable = Gt, Gt.$ = t, t.fn.dataTableSettings = Gt.settings, t.fn.dataTableExt = Gt.ext, t.fn.DataTable = function(e) {
            return t(this).dataTable(e).api()
        }, t.each(Gt, function(e, n) {
            t.fn.DataTable[e] = n
        }), t.fn.dataTable
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function(e) {
            return t(e, window, document)
        }) : "object" == typeof exports ? module.exports = function(e, n) {
            return e || (e = window), n && n.fn.dataTable || (n = require("datatables.net")(e, n).$), t(n, e, e.document)
        } : t(jQuery, window, document)
    }(function(t, e, n, i) {
        "use strict";
        var r = t.fn.dataTable;
        return t.extend(!0, r.defaults, {
            dom: "<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",
            renderer: "bootstrap"
        }), t.extend(r.ext.classes, {
            sWrapper: "dataTables_wrapper form-inline dt-bootstrap",
            sFilterInput: "form-control input-sm",
            sLengthSelect: "form-control input-sm",
            sProcessing: "dataTables_processing panel panel-default"
        }), r.ext.renderer.pageButton.bootstrap = function(e, o, s, a, l, u) {
            var c, d, h, p = new r.Api(e),
                f = e.oClasses,
                g = e.oLanguage.oPaginate,
                m = e.oLanguage.oAria.paginate || {},
                v = 0,
                y = function(n, i) {
                    var r, o, a, h, b = function(e) {
                        e.preventDefault(), t(e.currentTarget).hasClass("disabled") || p.page() == e.data.action || p.page(e.data.action).draw("page")
                    };
                    for (r = 0, o = i.length; r < o; r++)
                        if (h = i[r], t.isArray(h)) y(n, h);
                        else {
                            switch (c = "", d = "", h) {
                                case "ellipsis":
                                    c = "&#x2026;", d = "disabled";
                                    break;
                                case "first":
                                    c = g.sFirst, d = h + (l > 0 ? "" : " disabled");
                                    break;
                                case "previous":
                                    c = g.sPrevious, d = h + (l > 0 ? "" : " disabled");
                                    break;
                                case "next":
                                    c = g.sNext, d = h + (l < u - 1 ? "" : " disabled");
                                    break;
                                case "last":
                                    c = g.sLast, d = h + (l < u - 1 ? "" : " disabled");
                                    break;
                                default:
                                    c = h + 1, d = l === h ? "active" : ""
                            }
                            c && (a = t("<li>", {
                                "class": f.sPageButton + " " + d,
                                id: 0 === s && "string" == typeof h ? e.sTableId + "_" + h : null
                            }).append(t("<a>", {
                                href: "#",
                                "aria-controls": e.sTableId,
                                "aria-label": m[h],
                                "data-dt-idx": v,
                                tabindex: e.iTabIndex
                            }).html(c)).appendTo(n), e.oApi._fnBindAction(a, {
                                action: h
                            }, b), v++)
                        }
                };
            try {
                h = t(o).find(n.activeElement).data("dt-idx")
            } catch (b) {}
            y(t(o).empty().html('<ul class="pagination"/>').children("ul"), a), h !== i && t(o).find("[data-dt-idx=" + h + "]").focus()
        }, r
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        "use strict";

        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    i = n[t] = n[t] || [];
                return i.indexOf(e) == -1 && i.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {},
                    i = n[t] = n[t] || {};
                return i[e] = !0, this
            }
        }, e.off = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = n.indexOf(e);
                return i != -1 && n.splice(i, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                n = n.slice(0), e = e || [];
                for (var i = this._onceEvents && this._onceEvents[t], r = 0; r < n.length; r++) {
                    var o = n[r],
                        s = i && i[o];
                    s && (this.off(t, o), delete i[o]), o.apply(this, e)
                }
                return this
            }
        }, e.allOff = function() {
            delete this._events, delete this._onceEvents
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(n) {
            return e(t, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }("undefined" != typeof window ? window : this, function(t, e) {
        "use strict";

        function n(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function i(t) {
            if (Array.isArray(t)) return t;
            var e = "object" == typeof t && "number" == typeof t.length;
            return e ? u.call(t) : [t]
        }

        function r(t, e, o) {
            if (!(this instanceof r)) return new r(t, e, o);
            var s = t;
            "string" == typeof t && (s = document.querySelectorAll(t)), s && (this.elements = i(s), this.options = n({}, this.options), "function" == typeof e ? o = e : n(this.options, e), o && this.on("always", o), this.getImages(), a && (this.jqDeferred = new a.Deferred), setTimeout(this.check.bind(this)))
        }

        function o(t) {
            this.img = t
        }

        function s(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var a = t.jQuery,
            l = t.console,
            u = Array.prototype.slice;
        r.prototype = Object.create(e.prototype), r.prototype.options = {}, r.prototype.getImages = function() {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, r.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && c[e]) {
                for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
                    var r = n[i];
                    this.addImage(r)
                }
                if ("string" == typeof this.options.background) {
                    var o = t.querySelectorAll(this.options.background);
                    for (i = 0; i < o.length; i++) {
                        var s = o[i];
                        this.addElementBackgroundImages(s)
                    }
                }
            }
        };
        var c = {
            1: !0,
            9: !0,
            11: !0
        };
        return r.prototype.addElementBackgroundImages = function(t) {
            var e = getComputedStyle(t);
            if (e)
                for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(e.backgroundImage); null !== i;) {
                    var r = i && i[2];
                    r && this.addBackground(r, t), i = n.exec(e.backgroundImage)
                }
        }, r.prototype.addImage = function(t) {
            var e = new o(t);
            this.images.push(e)
        }, r.prototype.addBackground = function(t, e) {
            var n = new s(t, e);
            this.images.push(n)
        }, r.prototype.check = function() {
            function t(t, n, i) {
                setTimeout(function() {
                    e.progress(t, n, i)
                })
            }
            var e = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
                e.once("progress", t), e.check()
            }) : void this.complete()
        }, r.prototype.progress = function(t, e, n) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && l
        }, r.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, o.prototype = Object.create(e.prototype), o.prototype.check = function() {
            var t = this.getIsImageComplete();
            return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, o.prototype.getIsImageComplete = function() {
            return this.img.complete && this.img.naturalWidth
        }, o.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, o.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, o.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, o.prototype.unbindEvents = function() {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype = Object.create(o.prototype), s.prototype.check = function() {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var t = this.getIsImageComplete();
            t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, s.prototype.unbindEvents = function() {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, r.makeJQueryPlugin = function(e) {
            e = e || t.jQuery, e && (a = e, a.fn.imagesLoaded = function(t, e) {
                var n = new r(this, t, e);
                return n.jqDeferred.promise(a(this))
            })
        }, r.makeJQueryPlugin(), r
    }),
    function(t, e, n, i) {
        "use strict";
        var r = t.fn.twbsPagination,
            o = function(e, n) {
                if (this.$element = t(e), this.options = t.extend({}, t.fn.twbsPagination.defaults, n), this.options.startPage < 1 || this.options.startPage > this.options.totalPages) throw new Error("Start page option is incorrect");
                if (this.options.totalPages = parseInt(this.options.totalPages), isNaN(this.options.totalPages)) throw new Error("Total pages option is not correct!");
                if (this.options.visiblePages = parseInt(this.options.visiblePages), isNaN(this.options.visiblePages)) throw new Error("Visible pages option is not correct!");
                if (this.options.onPageClick instanceof Function && this.$element.first().on("page", this.options.onPageClick), this.options.hideOnlyOnePage && 1 == this.options.totalPages) return this.$element.trigger("page", 1), this;
                this.options.totalPages < this.options.visiblePages && (this.options.visiblePages = this.options.totalPages), this.options.href && (this.options.startPage = this.getPageFromQueryString(), this.options.startPage || (this.options.startPage = 1));
                var i = "function" == typeof this.$element.prop ? this.$element.prop("tagName") : this.$element.attr("tagName");
                return "UL" === i ? this.$listContainer = this.$element : this.$listContainer = t("<ul></ul>"), this.$listContainer.addClass(this.options.paginationClass), "UL" !== i && this.$element.append(this.$listContainer), this.options.initiateStartPageClick ? this.show(this.options.startPage) : (this.currentPage = this.options.startPage, this.render(this.getPages(this.options.startPage)), this.setupEvents()), this
            };
        o.prototype = {
            constructor: o,
            destroy: function() {
                return this.$element.empty(), this.$element.removeData("twbs-pagination"), this.$element.off("page"), this
            },
            show: function(t) {
                if (t < 1 || t > this.options.totalPages) throw new Error("Page is incorrect.");
                return this.currentPage = t, this.render(this.getPages(t)), this.setupEvents(), this.$element.trigger("page", t), this
            },
            enable: function() {
                this.show(this.currentPage)
            },
            disable: function() {
                var e = this;
                this.$listContainer.off("click").on("click", "li", function(t) {
                    t.preventDefault()
                }), this.$listContainer.children().each(function() {
                    var n = t(this);
                    n.hasClass(e.options.activeClass) || t(this).addClass(e.options.disabledClass)
                })
            },
            buildListItems: function(t) {
                var e = [];
                if (this.options.first && e.push(this.buildItem("first", 1)), this.options.prev) {
                    var n = t.currentPage > 1 ? t.currentPage - 1 : this.options.loop ? this.options.totalPages : 1;
                    e.push(this.buildItem("prev", n))
                }
                for (var i = 0; i < t.numeric.length; i++) e.push(this.buildItem("page", t.numeric[i]));
                if (this.options.next) {
                    var r = t.currentPage < this.options.totalPages ? t.currentPage + 1 : this.options.loop ? 1 : this.options.totalPages;
                    e.push(this.buildItem("next", r))
                }
                return this.options.last && e.push(this.buildItem("last", this.options.totalPages)), e
            },
            buildItem: function(e, n) {
                var i = t("<li></li>"),
                    r = t("<a></a>"),
                    o = this.options[e] ? this.makeText(this.options[e], n) : n;
                return i.addClass(this.options[e + "Class"]), i.data("page", n), i.data("page-type", e), i.append(r.attr("href", this.makeHref(n)).addClass(this.options.anchorClass).html(o)), i
            },
            getPages: function(t) {
                var e = [],
                    n = Math.floor(this.options.visiblePages / 2),
                    i = t - n + 1 - this.options.visiblePages % 2,
                    r = t + n;
                i <= 0 && (i = 1, r = this.options.visiblePages), r > this.options.totalPages && (i = this.options.totalPages - this.options.visiblePages + 1, r = this.options.totalPages);
                for (var o = i; o <= r;) e.push(o), o++;
                return {
                    currentPage: t,
                    numeric: e
                }
            },
            render: function(e) {
                var n = this;
                this.$listContainer.children().remove();
                var i = this.buildListItems(e);
                t.each(i, function(t, e) {
                    n.$listContainer.append(e)
                }), this.$listContainer.children().each(function() {
                    var i = t(this),
                        r = i.data("page-type");
                    switch (r) {
                        case "page":
                            i.data("page") === e.currentPage && i.addClass(n.options.activeClass);
                            break;
                        case "first":
                            i.toggleClass(n.options.disabledClass, 1 === e.currentPage);
                            break;
                        case "last":
                            i.toggleClass(n.options.disabledClass, e.currentPage === n.options.totalPages);
                            break;
                        case "prev":
                            i.toggleClass(n.options.disabledClass, !n.options.loop && 1 === e.currentPage);
                            break;
                        case "next":
                            i.toggleClass(n.options.disabledClass, !n.options.loop && e.currentPage === n.options.totalPages)
                    }
                })
            },
            setupEvents: function() {
                var e = this;
                this.$listContainer.off("click").on("click", "li", function(n) {
                    var i = t(this);
                    return !i.hasClass(e.options.disabledClass) && !i.hasClass(e.options.activeClass) && (!e.options.href && n.preventDefault(), void e.show(parseInt(i.data("page"))))
                })
            },
            makeHref: function(t) {
                return this.options.href ? this.generateQueryString(t) : "#"
            },
            makeText: function(t, e) {
                return t.replace(this.options.pageVariable, e).replace(this.options.totalPagesVariable, this.options.totalPages)
            },
            getPageFromQueryString: function(t) {
                var e = this.getSearchString(t),
                    n = new RegExp(this.options.pageVariable + "(=([^&#]*)|&|#|$)"),
                    i = n.exec(e);
                return i && i[2] ? (i = decodeURIComponent(i[2]), i = parseInt(i), isNaN(i) ? null : i) : null
            },
            generateQueryString: function(t, e) {
                var n = this.getSearchString(e),
                    i = new RegExp(this.options.pageVariable + "=*[^&#]*");
                return n ? "?" + n.replace(i, this.options.pageVariable + "=" + t) : ""
            },
            getSearchString: function(t) {
                var n = t || e.location.search;
                return "" === n ? null : (0 === n.indexOf("?") && (n = n.substr(1)), n)
            },
            getCurrentPage: function() {
                return this.currentPage
            }
        }, t.fn.twbsPagination = function(e) {
            var n, r = Array.prototype.slice.call(arguments, 1),
                s = t(this),
                a = s.data("twbs-pagination"),
                l = "object" == typeof e ? e : {};
            return a || s.data("twbs-pagination", a = new o(this, l)), "string" == typeof e && (n = a[e].apply(a, r)), n === i ? s : n
        }, t.fn.twbsPagination.defaults = {
            totalPages: 1,
            startPage: 1,
            visiblePages: 5,
            initiateStartPageClick: !0,
            hideOnlyOnePage: !1,
            href: !1,
            pageVariable: "{{page}}",
            totalPagesVariable: "{{total_pages}}",
            page: null,
            first: "First",
            prev: "Previous",
            next: "Next",
            last: "Last",
            loop: !1,
            onPageClick: null,
            paginationClass: "pagination",
            nextClass: "page-item next",
            prevClass: "page-item prev",
            lastClass: "page-item last",
            firstClass: "page-item first",
            pageClass: "page-item",
            activeClass: "active",
            disabledClass: "disabled",
            anchorClass: "page-link"
        }, t.fn.twbsPagination.Constructor = o, t.fn.twbsPagination.noConflict = function() {
            return t.fn.twbsPagination = r, this
        }, t.fn.twbsPagination.version = "1.4.1"
    }(window.jQuery, window, document),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(t) : "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = t() : window.Sortable = t()
    }(function() {
        "use strict";

        function t(t, e) {
            if (!t || !t.nodeType || 1 !== t.nodeType) throw "Sortable: `el` must be HTMLElement, and not " + {}.toString.call(t);
            this.el = t, this.options = e = b({}, e), t[B] = this;
            var n = {
                group: Math.random(),
                sort: !0,
                disabled: !1,
                store: null,
                handle: null,
                scroll: !0,
                scrollSensitivity: 30,
                scrollSpeed: 10,
                draggable: /[uo]l/i.test(t.nodeName) ? "li" : ">*",
                ghostClass: "sortable-ghost",
                chosenClass: "sortable-chosen",
                dragClass: "sortable-drag",
                ignore: "a, img",
                filter: null,
                preventOnFilter: !0,
                animation: 0,
                setData: function(t, e) {
                    t.setData("Text", e.textContent)
                },
                dropBubble: !1,
                dragoverBubble: !1,
                dataIdAttr: "data-id",
                delay: 0,
                forceFallback: !1,
                fallbackClass: "sortable-fallback",
                fallbackOnBody: !1,
                fallbackTolerance: 0,
                fallbackOffset: {
                    x: 0,
                    y: 0
                }
            };
            for (var i in n) !(i in e) && (e[i] = n[i]);
            st(e);
            for (var r in this) "_" === r.charAt(0) && "function" == typeof this[r] && (this[r] = this[r].bind(this));
            this.nativeDraggable = !e.forceFallback && K, o(t, "mousedown", this._onTapStart), o(t, "touchstart", this._onTapStart), o(t, "pointerdown", this._onTapStart), this.nativeDraggable && (o(t, "dragover", this), o(t, "dragenter", this)), rt.push(this._onDragOver), e.store && this.sort(e.store.get(this))
        }

        function e(t, e) {
            "clone" !== t.lastPullMode && (e = !0), k && k.state !== e && (l(k, "display", e ? "none" : ""), e || k.state && (t.options.group.revertClone ? (C.insertBefore(k, D), t._animate(_, k)) : C.insertBefore(k, _)), k.state = e)
        }

        function n(t, e, n) {
            if (t) {
                n = n || V;
                do
                    if (">*" === e && t.parentNode === n || v(t, e)) return t; while (t = i(t))
            }
            return null
        }

        function i(t) {
            var e = t.host;
            return e && e.nodeType ? e : t.parentNode
        }

        function r(t) {
            t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.preventDefault()
        }

        function o(t, e, n) {
            t.addEventListener(e, n, J)
        }

        function s(t, e, n) {
            t.removeEventListener(e, n, J)
        }

        function a(t, e, n) {
            if (t)
                if (t.classList) t.classList[n ? "add" : "remove"](e);
                else {
                    var i = (" " + t.className + " ").replace(q, " ").replace(" " + e + " ", " ");
                    t.className = (i + (n ? " " + e : "")).replace(q, " ")
                }
        }

        function l(t, e, n) {
            var i = t && t.style;
            if (i) {
                if (void 0 === n) return V.defaultView && V.defaultView.getComputedStyle ? n = V.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e];
                e in i || (e = "-webkit-" + e), i[e] = n + ("string" == typeof n ? "" : "px")
            }
        }

        function u(t, e, n) {
            if (t) {
                var i = t.getElementsByTagName(e),
                    r = 0,
                    o = i.length;
                if (n)
                    for (; r < o; r++) n(i[r], r);
                return i
            }
            return []
        }

        function c(t, e, n, i, r, o, s) {
            t = t || e[B];
            var a = V.createEvent("Event"),
                l = t.options,
                u = "on" + n.charAt(0).toUpperCase() + n.substr(1);
            a.initEvent(n, !0, !0), a.to = e, a.from = r || e, a.item = i || e, a.clone = k, a.oldIndex = o, a.newIndex = s, e.dispatchEvent(a), l[u] && l[u].call(t, a)
        }

        function d(t, e, n, i, r, o, s, a) {
            var l, u, c = t[B],
                d = c.options.onMove;
            return l = V.createEvent("Event"), l.initEvent("move", !0, !0), l.to = e, l.from = t, l.dragged = n, l.draggedRect = i, l.related = r || e, l.relatedRect = o || e.getBoundingClientRect(), l.willInsertAfter = a, t.dispatchEvent(l), d && (u = d.call(c, l, s)), u
        }

        function h(t) {
            t.draggable = !1
        }

        function p() {
            tt = !1
        }

        function f(t, e) {
            var n = t.lastElementChild,
                i = n.getBoundingClientRect();
            return e.clientY - (i.top + i.height) > 5 || e.clientX - (i.left + i.width) > 5
        }

        function g(t) {
            for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--;) i += e.charCodeAt(n);
            return i.toString(36)
        }

        function m(t, e) {
            var n = 0;
            if (!t || !t.parentNode) return -1;
            for (; t && (t = t.previousElementSibling);) "TEMPLATE" === t.nodeName.toUpperCase() || ">*" !== e && !v(t, e) || n++;
            return n
        }

        function v(t, e) {
            if (t) {
                e = e.split(".");
                var n = e.shift().toUpperCase(),
                    i = new RegExp("\\s(" + e.join("|") + ")(?=\\s)", "g");
                return !("" !== n && t.nodeName.toUpperCase() != n || e.length && ((" " + t.className + " ").match(i) || []).length != e.length)
            }
            return !1
        }

        function y(t, e) {
            var n, i;
            return function() {
                void 0 === n && (n = arguments, i = this, setTimeout(function() {
                    1 === n.length ? t.call(i, n[0]) : t.apply(i, n), n = void 0
                }, e))
            }
        }

        function b(t, e) {
            if (t && e)
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }

        function w(t) {
            return X ? X(t).clone(!0)[0] : Q && Q.dom ? Q.dom(t).cloneNode(!0) : t.cloneNode(!0)
        }

        function S(t) {
            for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
                var i = e[n];
                i.checked && it.push(i)
            }
        }
        if ("undefined" == typeof window || !window.document) return function() {
            throw new Error("Sortable.js requires a window with a document")
        };
        var _, T, x, k, C, D, A, $, M, E, O, P, I, F, j, L, N, R, H, U, W = {},
            q = /\s+/g,
            Y = /left|right|inline/,
            B = "Sortable" + (new Date).getTime(),
            z = window,
            V = z.document,
            G = z.parseInt,
            X = z.jQuery || z.Zepto,
            Q = z.Polymer,
            J = !1,
            K = !!("draggable" in V.createElement("div")),
            Z = function(t) {
                return !navigator.userAgent.match(/Trident.*rv[ :]?11\./) && (t = V.createElement("x"), t.style.cssText = "pointer-events:auto", "auto" === t.style.pointerEvents)
            }(),
            tt = !1,
            et = Math.abs,
            nt = Math.min,
            it = [],
            rt = [],
            ot = y(function(t, e, n) {
                if (n && e.scroll) {
                    var i, r, o, s, a, l, u = n[B],
                        c = e.scrollSensitivity,
                        d = e.scrollSpeed,
                        h = t.clientX,
                        p = t.clientY,
                        f = window.innerWidth,
                        g = window.innerHeight;
                    if (M !== n && ($ = e.scroll, M = n, E = e.scrollFn, $ === !0)) {
                        $ = n;
                        do
                            if ($.offsetWidth < $.scrollWidth || $.offsetHeight < $.scrollHeight) break; while ($ = $.parentNode)
                    }
                    $ && (i = $, r = $.getBoundingClientRect(), o = (et(r.right - h) <= c) - (et(r.left - h) <= c), s = (et(r.bottom - p) <= c) - (et(r.top - p) <= c)), o || s || (o = (f - h <= c) - (h <= c), s = (g - p <= c) - (p <= c), (o || s) && (i = z)), W.vx === o && W.vy === s && W.el === i || (W.el = i, W.vx = o, W.vy = s, clearInterval(W.pid), i && (W.pid = setInterval(function() {
                        return l = s ? s * d : 0, a = o ? o * d : 0, "function" == typeof E ? E.call(u, a, l, t) : void(i === z ? z.scrollTo(z.pageXOffset + a, z.pageYOffset + l) : (i.scrollTop += l, i.scrollLeft += a))
                    }, 24)))
                }
            }, 30),
            st = function(t) {
                function e(t, e) {
                    return void 0 !== t && t !== !0 || (t = n.name), "function" == typeof t ? t : function(n, i) {
                        var r = i.options.group.name;
                        return e ? t : t && (t.join ? t.indexOf(r) > -1 : r == t)
                    }
                }
                var n = {},
                    i = t.group;
                i && "object" == typeof i || (i = {
                    name: i
                }), n.name = i.name, n.checkPull = e(i.pull, !0), n.checkPut = e(i.put), n.revertClone = i.revertClone, t.group = n
            };
        t.prototype = {
            constructor: t,
            _onTapStart: function(t) {
                var e, i = this,
                    r = this.el,
                    o = this.options,
                    s = o.preventOnFilter,
                    a = t.type,
                    l = t.touches && t.touches[0],
                    u = (l || t).target,
                    d = t.target.shadowRoot && t.path[0] || u,
                    h = o.filter;
                if (S(r), !_ && !("mousedown" === a && 0 !== t.button || o.disabled) && (u = n(u, o.draggable, r), u && A !== u)) {
                    if (e = m(u, o.draggable), "function" == typeof h) {
                        if (h.call(this, t, u, this)) return c(i, d, "filter", u, r, e), void(s && t.preventDefault())
                    } else if (h && (h = h.split(",").some(function(t) {
                            if (t = n(d, t.trim(), r)) return c(i, t, "filter", u, r, e), !0
                        }))) return void(s && t.preventDefault());
                    o.handle && !n(d, o.handle, r) || this._prepareDragStart(t, l, u, e)
                }
            },
            _prepareDragStart: function(t, e, n, i) {
                var r, s = this,
                    l = s.el,
                    d = s.options,
                    p = l.ownerDocument;
                n && !_ && n.parentNode === l && (R = t, C = l, _ = n, T = _.parentNode, D = _.nextSibling, A = n, L = d.group, F = i, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, _.style["will-change"] = "transform", r = function() {
                    s._disableDelayedDrag(), _.draggable = s.nativeDraggable, a(_, d.chosenClass, !0), s._triggerDragStart(t, e), c(s, C, "choose", _, C, F)
                }, d.ignore.split(",").forEach(function(t) {
                    u(_, t.trim(), h)
                }), o(p, "mouseup", s._onDrop), o(p, "touchend", s._onDrop), o(p, "touchcancel", s._onDrop), o(p, "pointercancel", s._onDrop), o(p, "selectstart", s), d.delay ? (o(p, "mouseup", s._disableDelayedDrag), o(p, "touchend", s._disableDelayedDrag), o(p, "touchcancel", s._disableDelayedDrag), o(p, "mousemove", s._disableDelayedDrag), o(p, "touchmove", s._disableDelayedDrag), o(p, "pointermove", s._disableDelayedDrag), s._dragStartTimer = setTimeout(r, d.delay)) : r())
            },
            _disableDelayedDrag: function() {
                var t = this.el.ownerDocument;
                clearTimeout(this._dragStartTimer), s(t, "mouseup", this._disableDelayedDrag), s(t, "touchend", this._disableDelayedDrag), s(t, "touchcancel", this._disableDelayedDrag), s(t, "mousemove", this._disableDelayedDrag), s(t, "touchmove", this._disableDelayedDrag), s(t, "pointermove", this._disableDelayedDrag)
            },
            _triggerDragStart: function(t, e) {
                e = e || ("touch" == t.pointerType ? t : null), e ? (R = {
                    target: _,
                    clientX: e.clientX,
                    clientY: e.clientY
                }, this._onDragStart(R, "touch")) : this.nativeDraggable ? (o(_, "dragend", this), o(C, "dragstart", this._onDragStart)) : this._onDragStart(R, !0);
                try {
                    V.selection ? setTimeout(function() {
                        V.selection.empty()
                    }) : window.getSelection().removeAllRanges()
                } catch (n) {}
            },
            _dragStarted: function() {
                if (C && _) {
                    var e = this.options;
                    a(_, e.ghostClass, !0), a(_, e.dragClass, !1), t.active = this, c(this, C, "start", _, C, F)
                } else this._nulling()
            },
            _emulateDragOver: function() {
                if (H) {
                    if (this._lastX === H.clientX && this._lastY === H.clientY) return;
                    this._lastX = H.clientX, this._lastY = H.clientY, Z || l(x, "display", "none");
                    var t = V.elementFromPoint(H.clientX, H.clientY),
                        e = t,
                        n = rt.length;
                    if (e)
                        do {
                            if (e[B]) {
                                for (; n--;) rt[n]({
                                    clientX: H.clientX,
                                    clientY: H.clientY,
                                    target: t,
                                    rootEl: e
                                });
                                break
                            }
                            t = e
                        } while (e = e.parentNode);
                    Z || l(x, "display", "")
                }
            },
            _onTouchMove: function(e) {
                if (R) {
                    var n = this.options,
                        i = n.fallbackTolerance,
                        r = n.fallbackOffset,
                        o = e.touches ? e.touches[0] : e,
                        s = o.clientX - R.clientX + r.x,
                        a = o.clientY - R.clientY + r.y,
                        u = e.touches ? "translate3d(" + s + "px," + a + "px,0)" : "translate(" + s + "px," + a + "px)";
                    if (!t.active) {
                        if (i && nt(et(o.clientX - this._lastX), et(o.clientY - this._lastY)) < i) return;
                        this._dragStarted()
                    }
                    this._appendGhost(), U = !0, H = o, l(x, "webkitTransform", u), l(x, "mozTransform", u), l(x, "msTransform", u), l(x, "transform", u), e.preventDefault()
                }
            },
            _appendGhost: function() {
                if (!x) {
                    var t, e = _.getBoundingClientRect(),
                        n = l(_),
                        i = this.options;
                    x = _.cloneNode(!0), a(x, i.ghostClass, !1), a(x, i.fallbackClass, !0), a(x, i.dragClass, !0), l(x, "top", e.top - G(n.marginTop, 10)), l(x, "left", e.left - G(n.marginLeft, 10)), l(x, "width", e.width), l(x, "height", e.height), l(x, "opacity", "0.8"), l(x, "position", "fixed"), l(x, "zIndex", "100000"), l(x, "pointerEvents", "none"), i.fallbackOnBody && V.body.appendChild(x) || C.appendChild(x), t = x.getBoundingClientRect(), l(x, "width", 2 * e.width - t.width), l(x, "height", 2 * e.height - t.height)
                }
            },
            _onDragStart: function(t, e) {
                var n = t.dataTransfer,
                    i = this.options;
                this._offUpEvents(), L.checkPull(this, this, _, t) && (k = w(_), k.draggable = !1, k.style["will-change"] = "", l(k, "display", "none"), a(k, this.options.chosenClass, !1), C.insertBefore(k, _), c(this, C, "clone", _)), a(_, i.dragClass, !0), e ? ("touch" === e ? (o(V, "touchmove", this._onTouchMove), o(V, "touchend", this._onDrop), o(V, "touchcancel", this._onDrop), o(V, "pointermove", this._onTouchMove), o(V, "pointerup", this._onDrop)) : (o(V, "mousemove", this._onTouchMove), o(V, "mouseup", this._onDrop)), this._loopId = setInterval(this._emulateDragOver, 50)) : (n && (n.effectAllowed = "move", i.setData && i.setData.call(this, n, _)), o(V, "drop", this), setTimeout(this._dragStarted, 0))
            },
            _onDragOver: function(i) {
                var r, o, s, a, u = this.el,
                    c = this.options,
                    h = c.group,
                    g = t.active,
                    m = L === h,
                    v = !1,
                    y = c.sort;
                if (void 0 !== i.preventDefault && (i.preventDefault(), !c.dragoverBubble && i.stopPropagation()), !_.animated && (U = !0, g && !c.disabled && (m ? y || (a = !C.contains(_)) : N === this || (g.lastPullMode = L.checkPull(this, g, _, i)) && h.checkPut(this, g, _, i)) && (void 0 === i.rootEl || i.rootEl === this.el))) {
                    if (ot(i, c, this.el), tt) return;
                    if (r = n(i.target, c.draggable, u), o = _.getBoundingClientRect(), N !== this && (N = this, v = !0), a) return e(g, !0), T = C, void(k || D ? C.insertBefore(_, k || D) : y || C.appendChild(_));
                    if (0 === u.children.length || u.children[0] === x || u === i.target && f(u, i)) {
                        if (0 !== u.children.length && u.children[0] !== x && u === i.target && (r = u.lastElementChild), r) {
                            if (r.animated) return;
                            s = r.getBoundingClientRect()
                        }
                        e(g, m), d(C, u, _, o, r, s, i) !== !1 && (_.contains(u) || (u.appendChild(_), T = u), this._animate(o, _), r && this._animate(s, r))
                    } else if (r && !r.animated && r !== _ && void 0 !== r.parentNode[B]) {
                        O !== r && (O = r, P = l(r), I = l(r.parentNode)), s = r.getBoundingClientRect();
                        var b = s.right - s.left,
                            w = s.bottom - s.top,
                            S = Y.test(P.cssFloat + P.display) || "flex" == I.display && 0 === I["flex-direction"].indexOf("row"),
                            A = r.offsetWidth > _.offsetWidth,
                            $ = r.offsetHeight > _.offsetHeight,
                            M = (S ? (i.clientX - s.left) / b : (i.clientY - s.top) / w) > .5,
                            E = r.nextElementSibling,
                            F = !1;
                        if (S) {
                            var j = _.offsetTop,
                                R = r.offsetTop;
                            F = j === R ? r.previousElementSibling === _ && !A || M && A : r.previousElementSibling === _ || _.previousElementSibling === r ? (i.clientY - s.top) / w > .5 : R > j
                        } else v || (F = E !== _ && !$ || M && $);
                        var H = d(C, u, _, o, r, s, i, F);
                        H !== !1 && (1 !== H && H !== -1 || (F = 1 === H), tt = !0, setTimeout(p, 30), e(g, m), _.contains(u) || (F && !E ? u.appendChild(_) : r.parentNode.insertBefore(_, F ? E : r)), T = _.parentNode,
                            this._animate(o, _), this._animate(s, r))
                    }
                }
            },
            _animate: function(t, e) {
                var n = this.options.animation;
                if (n) {
                    var i = e.getBoundingClientRect();
                    1 === t.nodeType && (t = t.getBoundingClientRect()), l(e, "transition", "none"), l(e, "transform", "translate3d(" + (t.left - i.left) + "px," + (t.top - i.top) + "px,0)"), e.offsetWidth, l(e, "transition", "all " + n + "ms"), l(e, "transform", "translate3d(0,0,0)"), clearTimeout(e.animated), e.animated = setTimeout(function() {
                        l(e, "transition", ""), l(e, "transform", ""), e.animated = !1
                    }, n)
                }
            },
            _offUpEvents: function() {
                var t = this.el.ownerDocument;
                s(V, "touchmove", this._onTouchMove), s(V, "pointermove", this._onTouchMove), s(t, "mouseup", this._onDrop), s(t, "touchend", this._onDrop), s(t, "pointerup", this._onDrop), s(t, "touchcancel", this._onDrop), s(t, "pointercancel", this._onDrop), s(t, "selectstart", this)
            },
            _onDrop: function(e) {
                var n = this.el,
                    i = this.options;
                clearInterval(this._loopId), clearInterval(W.pid), clearTimeout(this._dragStartTimer), s(V, "mousemove", this._onTouchMove), this.nativeDraggable && (s(V, "drop", this), s(n, "dragstart", this._onDragStart)), this._offUpEvents(), e && (U && (e.preventDefault(), !i.dropBubble && e.stopPropagation()), x && x.parentNode && x.parentNode.removeChild(x), C !== T && "clone" === t.active.lastPullMode || k && k.parentNode && k.parentNode.removeChild(k), _ && (this.nativeDraggable && s(_, "dragend", this), h(_), _.style["will-change"] = "", a(_, this.options.ghostClass, !1), a(_, this.options.chosenClass, !1), c(this, C, "unchoose", _, C, F), C !== T ? (j = m(_, i.draggable), j >= 0 && (c(null, T, "add", _, C, F, j), c(this, C, "remove", _, C, F, j), c(null, T, "sort", _, C, F, j), c(this, C, "sort", _, C, F, j))) : _.nextSibling !== D && (j = m(_, i.draggable), j >= 0 && (c(this, C, "update", _, C, F, j), c(this, C, "sort", _, C, F, j))), t.active && (null != j && j !== -1 || (j = F), c(this, C, "end", _, C, F, j), this.save()))), this._nulling()
            },
            _nulling: function() {
                C = _ = T = x = D = k = A = $ = M = R = H = U = j = O = P = N = L = t.active = null, it.forEach(function(t) {
                    t.checked = !0
                }), it.length = 0
            },
            handleEvent: function(t) {
                switch (t.type) {
                    case "drop":
                    case "dragend":
                        this._onDrop(t);
                        break;
                    case "dragover":
                    case "dragenter":
                        _ && (this._onDragOver(t), r(t));
                        break;
                    case "selectstart":
                        t.preventDefault()
                }
            },
            toArray: function() {
                for (var t, e = [], i = this.el.children, r = 0, o = i.length, s = this.options; r < o; r++) t = i[r], n(t, s.draggable, this.el) && e.push(t.getAttribute(s.dataIdAttr) || g(t));
                return e
            },
            sort: function(t) {
                var e = {},
                    i = this.el;
                this.toArray().forEach(function(t, r) {
                    var o = i.children[r];
                    n(o, this.options.draggable, i) && (e[t] = o)
                }, this), t.forEach(function(t) {
                    e[t] && (i.removeChild(e[t]), i.appendChild(e[t]))
                })
            },
            save: function() {
                var t = this.options.store;
                t && t.set(this)
            },
            closest: function(t, e) {
                return n(t, e || this.options.draggable, this.el)
            },
            option: function(t, e) {
                var n = this.options;
                return void 0 === e ? n[t] : (n[t] = e, void("group" === t && st(n)))
            },
            destroy: function() {
                var t = this.el;
                t[B] = null, s(t, "mousedown", this._onTapStart), s(t, "touchstart", this._onTapStart), s(t, "pointerdown", this._onTapStart), this.nativeDraggable && (s(t, "dragover", this), s(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(t) {
                    t.removeAttribute("draggable")
                }), rt.splice(rt.indexOf(this._onDragOver), 1), this._onDrop(), this.el = t = null
            }
        }, o(V, "touchmove", function(e) {
            t.active && e.preventDefault()
        });
        try {
            window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                get: function() {
                    J = {
                        capture: !1,
                        passive: !1
                    }
                }
            }))
        } catch (at) {}
        return t.utils = {
            on: o,
            off: s,
            css: l,
            find: u,
            is: function(t, e) {
                return !!n(t, e, t)
            },
            extend: b,
            throttle: y,
            closest: n,
            toggleClass: a,
            clone: w,
            index: m
        }, t.create = function(e, n) {
            return new t(e, n)
        }, t.version = "1.6.0", t
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function(e, n) {
            return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(n), n
        } : t(jQuery)
    }(function(t) {
        var e = function() {
                if (t && t.fn && t.fn.select2 && t.fn.select2.amd) var e = t.fn.select2.amd;
                var e;
                return function() {
                        if (!e || !e.requirejs) {
                            e ? n = e : e = {};
                            var t, n, i;
                            ! function(e) {
                                function r(t, e) {
                                    return S.call(t, e)
                                }

                                function o(t, e) {
                                    var n, i, r, o, s, a, l, u, c, d, h, p, f = e && e.split("/"),
                                        g = b.map,
                                        m = g && g["*"] || {};
                                    if (t) {
                                        for (t = t.split("/"), s = t.length - 1, b.nodeIdCompat && T.test(t[s]) && (t[s] = t[s].replace(T, "")), "." === t[0].charAt(0) && f && (p = f.slice(0, f.length - 1), t = p.concat(t)), c = 0; c < t.length; c++)
                                            if (h = t[c], "." === h) t.splice(c, 1), c -= 1;
                                            else if (".." === h) {
                                            if (0 === c || 1 === c && ".." === t[2] || ".." === t[c - 1]) continue;
                                            c > 0 && (t.splice(c - 1, 2), c -= 2)
                                        }
                                        t = t.join("/")
                                    }
                                    if ((f || m) && g) {
                                        for (n = t.split("/"), c = n.length; c > 0; c -= 1) {
                                            if (i = n.slice(0, c).join("/"), f)
                                                for (d = f.length; d > 0; d -= 1)
                                                    if (r = g[f.slice(0, d).join("/")], r && (r = r[i])) {
                                                        o = r, a = c;
                                                        break
                                                    }
                                            if (o) break;
                                            !l && m && m[i] && (l = m[i], u = c)
                                        }!o && l && (o = l, a = u), o && (n.splice(0, a, o), t = n.join("/"))
                                    }
                                    return t
                                }

                                function s(t, n) {
                                    return function() {
                                        var i = _.call(arguments, 0);
                                        return "string" != typeof i[0] && 1 === i.length && i.push(null), f.apply(e, i.concat([t, n]))
                                    }
                                }

                                function a(t) {
                                    return function(e) {
                                        return o(e, t)
                                    }
                                }

                                function l(t) {
                                    return function(e) {
                                        v[t] = e
                                    }
                                }

                                function u(t) {
                                    if (r(y, t)) {
                                        var n = y[t];
                                        delete y[t], w[t] = !0, p.apply(e, n)
                                    }
                                    if (!r(v, t) && !r(w, t)) throw new Error("No " + t);
                                    return v[t]
                                }

                                function c(t) {
                                    var e, n = t ? t.indexOf("!") : -1;
                                    return n > -1 && (e = t.substring(0, n), t = t.substring(n + 1, t.length)), [e, t]
                                }

                                function d(t) {
                                    return t ? c(t) : []
                                }

                                function h(t) {
                                    return function() {
                                        return b && b.config && b.config[t] || {}
                                    }
                                }
                                var p, f, g, m, v = {},
                                    y = {},
                                    b = {},
                                    w = {},
                                    S = Object.prototype.hasOwnProperty,
                                    _ = [].slice,
                                    T = /\.js$/;
                                g = function(t, e) {
                                    var n, i = c(t),
                                        r = i[0],
                                        s = e[1];
                                    return t = i[1], r && (r = o(r, s), n = u(r)), r ? t = n && n.normalize ? n.normalize(t, a(s)) : o(t, s) : (t = o(t, s), i = c(t), r = i[0], t = i[1], r && (n = u(r))), {
                                        f: r ? r + "!" + t : t,
                                        n: t,
                                        pr: r,
                                        p: n
                                    }
                                }, m = {
                                    require: function(t) {
                                        return s(t)
                                    },
                                    exports: function(t) {
                                        var e = v[t];
                                        return "undefined" != typeof e ? e : v[t] = {}
                                    },
                                    module: function(t) {
                                        return {
                                            id: t,
                                            uri: "",
                                            exports: v[t],
                                            config: h(t)
                                        }
                                    }
                                }, p = function(t, n, i, o) {
                                    var a, c, h, p, f, b, S, _ = [],
                                        T = typeof i;
                                    if (o = o || t, b = d(o), "undefined" === T || "function" === T) {
                                        for (n = !n.length && i.length ? ["require", "exports", "module"] : n, f = 0; f < n.length; f += 1)
                                            if (p = g(n[f], b), c = p.f, "require" === c) _[f] = m.require(t);
                                            else if ("exports" === c) _[f] = m.exports(t), S = !0;
                                        else if ("module" === c) a = _[f] = m.module(t);
                                        else if (r(v, c) || r(y, c) || r(w, c)) _[f] = u(c);
                                        else {
                                            if (!p.p) throw new Error(t + " missing " + c);
                                            p.p.load(p.n, s(o, !0), l(c), {}), _[f] = v[c]
                                        }
                                        h = i ? i.apply(v[t], _) : void 0, t && (a && a.exports !== e && a.exports !== v[t] ? v[t] = a.exports : h === e && S || (v[t] = h))
                                    } else t && (v[t] = i)
                                }, t = n = f = function(t, n, i, r, o) {
                                    if ("string" == typeof t) return m[t] ? m[t](n) : u(g(t, d(n)).f);
                                    if (!t.splice) {
                                        if (b = t, b.deps && f(b.deps, b.callback), !n) return;
                                        n.splice ? (t = n, n = i, i = null) : t = e
                                    }
                                    return n = n || function() {}, "function" == typeof i && (i = r, r = o), r ? p(e, t, n, i) : setTimeout(function() {
                                        p(e, t, n, i)
                                    }, 4), f
                                }, f.config = function(t) {
                                    return f(t)
                                }, t._defined = v, i = function(t, e, n) {
                                    if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
                                    e.splice || (n = e, e = []), r(v, t) || r(y, t) || (y[t] = [t, e, n])
                                }, i.amd = {
                                    jQuery: !0
                                }
                            }(), e.requirejs = t, e.require = n, e.define = i
                        }
                    }(), e.define("almond", function() {}), e.define("jquery", [], function() {
                        var e = t || $;
                        return null == e && console && console.error, e
                    }), e.define("select2/utils", ["jquery"], function(t) {
                        function e(t) {
                            var e = t.prototype,
                                n = [];
                            for (var i in e) {
                                var r = e[i];
                                "function" == typeof r && "constructor" !== i && n.push(i)
                            }
                            return n
                        }
                        var n = {};
                        n.Extend = function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            var i = {}.hasOwnProperty;
                            for (var r in e) i.call(e, r) && (t[r] = e[r]);
                            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                        }, n.Decorate = function(t, n) {
                            function i() {
                                var e = Array.prototype.unshift,
                                    i = n.prototype.constructor.length,
                                    r = t.prototype.constructor;
                                i > 0 && (e.call(arguments, t.prototype.constructor), r = n.prototype.constructor), r.apply(this, arguments)
                            }

                            function r() {
                                this.constructor = i
                            }
                            var o = e(n),
                                s = e(t);
                            n.displayName = t.displayName, i.prototype = new r;
                            for (var a = 0; a < s.length; a++) {
                                var l = s[a];
                                i.prototype[l] = t.prototype[l]
                            }
                            for (var u = (function(t) {
                                    var e = function() {};
                                    t in i.prototype && (e = i.prototype[t]);
                                    var r = n.prototype[t];
                                    return function() {
                                        var t = Array.prototype.unshift;
                                        return t.call(arguments, e), r.apply(this, arguments)
                                    }
                                }), c = 0; c < o.length; c++) {
                                var d = o[c];
                                i.prototype[d] = u(d)
                            }
                            return i
                        };
                        var i = function() {
                            this.listeners = {}
                        };
                        return i.prototype.on = function(t, e) {
                            this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e]
                        }, i.prototype.trigger = function(t) {
                            var e = Array.prototype.slice,
                                n = e.call(arguments, 1);
                            this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = t, t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                        }, i.prototype.invoke = function(t, e) {
                            for (var n = 0, i = t.length; n < i; n++) t[n].apply(this, e)
                        }, n.Observable = i, n.generateChars = function(t) {
                            for (var e = "", n = 0; n < t; n++) {
                                var i = Math.floor(36 * Math.random());
                                e += i.toString(36)
                            }
                            return e
                        }, n.bind = function(t, e) {
                            return function() {
                                t.apply(e, arguments)
                            }
                        }, n._convertData = function(t) {
                            for (var e in t) {
                                var n = e.split("-"),
                                    i = t;
                                if (1 !== n.length) {
                                    for (var r = 0; r < n.length; r++) {
                                        var o = n[r];
                                        o = o.substring(0, 1).toLowerCase() + o.substring(1), o in i || (i[o] = {}), r == n.length - 1 && (i[o] = t[e]), i = i[o]
                                    }
                                    delete t[e]
                                }
                            }
                            return t
                        }, n.hasScroll = function(e, n) {
                            var i = t(n),
                                r = n.style.overflowX,
                                o = n.style.overflowY;
                            return (r !== o || "hidden" !== o && "visible" !== o) && ("scroll" === r || "scroll" === o || (i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth))
                        }, n.escapeMarkup = function(t) {
                            var e = {
                                "\\": "&#92;",
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;",
                                "/": "&#47;"
                            };
                            return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, function(t) {
                                return e[t]
                            })
                        }, n.appendMany = function(e, n) {
                            if ("1.7" === t.fn.jquery.substr(0, 3)) {
                                var i = t();
                                t.map(n, function(t) {
                                    i = i.add(t)
                                }), n = i
                            }
                            e.append(n)
                        }, n
                    }), e.define("select2/results", ["jquery", "./utils"], function(t, e) {
                        function n(t, e, i) {
                            this.$element = t, this.data = i, this.options = e, n.__super__.constructor.call(this)
                        }
                        return e.Extend(n, e.Observable), n.prototype.render = function() {
                            var e = t('<ul class="select2-results__options" role="tree"></ul>');
                            return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e, e
                        }, n.prototype.clear = function() {
                            this.$results.empty()
                        }, n.prototype.displayMessage = function(e) {
                            var n = this.options.get("escapeMarkup");
                            this.clear(), this.hideLoading();
                            var i = t('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                                r = this.options.get("translations").get(e.message);
                            i.append(n(r(e.args))), i[0].className += " select2-results__message", this.$results.append(i)
                        }, n.prototype.hideMessages = function() {
                            this.$results.find(".select2-results__message").remove()
                        }, n.prototype.append = function(t) {
                            this.hideLoading();
                            var e = [];
                            if (null == t.results || 0 === t.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                                message: "noResults"
                            }));
                            t.results = this.sort(t.results);
                            for (var n = 0; n < t.results.length; n++) {
                                var i = t.results[n],
                                    r = this.option(i);
                                e.push(r)
                            }
                            this.$results.append(e)
                        }, n.prototype.position = function(t, e) {
                            var n = e.find(".select2-results");
                            n.append(t)
                        }, n.prototype.sort = function(t) {
                            var e = this.options.get("sorter");
                            return e(t)
                        }, n.prototype.highlightFirstItem = function() {
                            var t = this.$results.find(".select2-results__option[aria-selected]"),
                                e = t.filter("[aria-selected=true]");
                            e.length > 0 ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"), this.ensureHighlightVisible()
                        }, n.prototype.setClasses = function() {
                            var e = this;
                            this.data.current(function(n) {
                                var i = t.map(n, function(t) {
                                        return t.id.toString()
                                    }),
                                    r = e.$results.find(".select2-results__option[aria-selected]");
                                r.each(function() {
                                    var e = t(this),
                                        n = t.data(this, "data"),
                                        r = "" + n.id;
                                    null != n.element && n.element.selected || null == n.element && t.inArray(r, i) > -1 ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
                                })
                            })
                        }, n.prototype.showLoading = function(t) {
                            this.hideLoading();
                            var e = this.options.get("translations").get("searching"),
                                n = {
                                    disabled: !0,
                                    loading: !0,
                                    text: e(t)
                                },
                                i = this.option(n);
                            i.className += " loading-results", this.$results.prepend(i)
                        }, n.prototype.hideLoading = function() {
                            this.$results.find(".loading-results").remove()
                        }, n.prototype.option = function(e) {
                            var n = document.createElement("li");
                            n.className = "select2-results__option";
                            var i = {
                                role: "treeitem",
                                "aria-selected": "false"
                            };
                            e.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == e.id && delete i["aria-selected"], null != e._resultId && (n.id = e._resultId), e.title && (n.title = e.title), e.children && (i.role = "group", i["aria-label"] = e.text, delete i["aria-selected"]);
                            for (var r in i) {
                                var o = i[r];
                                n.setAttribute(r, o)
                            }
                            if (e.children) {
                                var s = t(n),
                                    a = document.createElement("strong");
                                a.className = "select2-results__group";
                                t(a);
                                this.template(e, a);
                                for (var l = [], u = 0; u < e.children.length; u++) {
                                    var c = e.children[u],
                                        d = this.option(c);
                                    l.push(d)
                                }
                                var h = t("<ul></ul>", {
                                    "class": "select2-results__options select2-results__options--nested"
                                });
                                h.append(l), s.append(a), s.append(h)
                            } else this.template(e, n);
                            return t.data(n, "data", e), n
                        }, n.prototype.bind = function(e, n) {
                            var i = this,
                                r = e.id + "-results";
                            this.$results.attr("id", r), e.on("results:all", function(t) {
                                i.clear(), i.append(t.data), e.isOpen() && (i.setClasses(), i.highlightFirstItem())
                            }), e.on("results:append", function(t) {
                                i.append(t.data), e.isOpen() && i.setClasses()
                            }), e.on("query", function(t) {
                                i.hideMessages(), i.showLoading(t)
                            }), e.on("select", function() {
                                e.isOpen() && (i.setClasses(), i.highlightFirstItem())
                            }), e.on("unselect", function() {
                                e.isOpen() && (i.setClasses(), i.highlightFirstItem())
                            }), e.on("open", function() {
                                i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible()
                            }), e.on("close", function() {
                                i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant")
                            }), e.on("results:toggle", function() {
                                var t = i.getHighlightedResults();
                                0 !== t.length && t.trigger("mouseup")
                            }), e.on("results:select", function() {
                                var t = i.getHighlightedResults();
                                if (0 !== t.length) {
                                    var e = t.data("data");
                                    "true" == t.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", {
                                        data: e
                                    })
                                }
                            }), e.on("results:previous", function() {
                                var t = i.getHighlightedResults(),
                                    e = i.$results.find("[aria-selected]"),
                                    n = e.index(t);
                                if (0 !== n) {
                                    var r = n - 1;
                                    0 === t.length && (r = 0);
                                    var o = e.eq(r);
                                    o.trigger("mouseenter");
                                    var s = i.$results.offset().top,
                                        a = o.offset().top,
                                        l = i.$results.scrollTop() + (a - s);
                                    0 === r ? i.$results.scrollTop(0) : a - s < 0 && i.$results.scrollTop(l)
                                }
                            }), e.on("results:next", function() {
                                var t = i.getHighlightedResults(),
                                    e = i.$results.find("[aria-selected]"),
                                    n = e.index(t),
                                    r = n + 1;
                                if (!(r >= e.length)) {
                                    var o = e.eq(r);
                                    o.trigger("mouseenter");
                                    var s = i.$results.offset().top + i.$results.outerHeight(!1),
                                        a = o.offset().top + o.outerHeight(!1),
                                        l = i.$results.scrollTop() + a - s;
                                    0 === r ? i.$results.scrollTop(0) : a > s && i.$results.scrollTop(l)
                                }
                            }), e.on("results:focus", function(t) {
                                t.element.addClass("select2-results__option--highlighted")
                            }), e.on("results:message", function(t) {
                                i.displayMessage(t)
                            }), t.fn.mousewheel && this.$results.on("mousewheel", function(t) {
                                var e = i.$results.scrollTop(),
                                    n = i.$results.get(0).scrollHeight - e + t.deltaY,
                                    r = t.deltaY > 0 && e - t.deltaY <= 0,
                                    o = t.deltaY < 0 && n <= i.$results.height();
                                r ? (i.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : o && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), t.preventDefault(), t.stopPropagation())
                            }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(e) {
                                var n = t(this),
                                    r = n.data("data");
                                return "true" === n.attr("aria-selected") ? void(i.options.get("multiple") ? i.trigger("unselect", {
                                    originalEvent: e,
                                    data: r
                                }) : i.trigger("close", {})) : void i.trigger("select", {
                                    originalEvent: e,
                                    data: r
                                })
                            }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function(e) {
                                var n = t(this).data("data");
                                i.getHighlightedResults().removeClass("select2-results__option--highlighted"), i.trigger("results:focus", {
                                    data: n,
                                    element: t(this)
                                })
                            })
                        }, n.prototype.getHighlightedResults = function() {
                            var t = this.$results.find(".select2-results__option--highlighted");
                            return t
                        }, n.prototype.destroy = function() {
                            this.$results.remove()
                        }, n.prototype.ensureHighlightVisible = function() {
                            var t = this.getHighlightedResults();
                            if (0 !== t.length) {
                                var e = this.$results.find("[aria-selected]"),
                                    n = e.index(t),
                                    i = this.$results.offset().top,
                                    r = t.offset().top,
                                    o = this.$results.scrollTop() + (r - i),
                                    s = r - i;
                                o -= 2 * t.outerHeight(!1), n <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(o)
                            }
                        }, n.prototype.template = function(e, n) {
                            var i = this.options.get("templateResult"),
                                r = this.options.get("escapeMarkup"),
                                o = i(e, n);
                            null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = r(o) : t(n).append(o)
                        }, n
                    }), e.define("select2/keys", [], function() {
                        var t = {
                            BACKSPACE: 8,
                            TAB: 9,
                            ENTER: 13,
                            SHIFT: 16,
                            CTRL: 17,
                            ALT: 18,
                            ESC: 27,
                            SPACE: 32,
                            PAGE_UP: 33,
                            PAGE_DOWN: 34,
                            END: 35,
                            HOME: 36,
                            LEFT: 37,
                            UP: 38,
                            RIGHT: 39,
                            DOWN: 40,
                            DELETE: 46
                        };
                        return t
                    }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(t, e, n) {
                        function i(t, e) {
                            this.$element = t, this.options = e, i.__super__.constructor.call(this)
                        }
                        return e.Extend(i, e.Observable), i.prototype.render = function() {
                            var e = t('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                            return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e, e
                        }, i.prototype.bind = function(t, e) {
                            var i = this,
                                r = (t.id + "-container", t.id + "-results");
                            this.container = t, this.$selection.on("focus", function(t) {
                                i.trigger("focus", t)
                            }), this.$selection.on("blur", function(t) {
                                i._handleBlur(t)
                            }), this.$selection.on("keydown", function(t) {
                                i.trigger("keypress", t), t.which === n.SPACE && t.preventDefault()
                            }), t.on("results:focus", function(t) {
                                i.$selection.attr("aria-activedescendant", t.data._resultId)
                            }), t.on("selection:update", function(t) {
                                i.update(t.data)
                            }), t.on("open", function() {
                                i.$selection.attr("aria-expanded", "true"), i.$selection.attr("aria-owns", r), i._attachCloseHandler(t)
                            }), t.on("close", function() {
                                i.$selection.attr("aria-expanded", "false"), i.$selection.removeAttr("aria-activedescendant"), i.$selection.removeAttr("aria-owns"), i.$selection.focus(), i._detachCloseHandler(t)
                            }), t.on("enable", function() {
                                i.$selection.attr("tabindex", i._tabindex)
                            }), t.on("disable", function() {
                                i.$selection.attr("tabindex", "-1")
                            })
                        }, i.prototype._handleBlur = function(e) {
                            var n = this;
                            window.setTimeout(function() {
                                document.activeElement == n.$selection[0] || t.contains(n.$selection[0], document.activeElement) || n.trigger("blur", e)
                            }, 1)
                        }, i.prototype._attachCloseHandler = function(e) {
                            t(document.body).on("mousedown.select2." + e.id, function(e) {
                                var n = t(e.target),
                                    i = n.closest(".select2"),
                                    r = t(".select2.select2-container--open");
                                r.each(function() {
                                    var e = t(this);
                                    if (this != i[0]) {
                                        var n = e.data("element");
                                        n.select2("close")
                                    }
                                })
                            })
                        }, i.prototype._detachCloseHandler = function(e) {
                            t(document.body).off("mousedown.select2." + e.id)
                        }, i.prototype.position = function(t, e) {
                            var n = e.find(".selection");
                            n.append(t)
                        }, i.prototype.destroy = function() {
                            this._detachCloseHandler(this.container)
                        }, i.prototype.update = function(t) {
                            throw new Error("The `update` method must be defined in child classes.")
                        }, i
                    }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(t, e, n, i) {
                        function r() {
                            r.__super__.constructor.apply(this, arguments)
                        }
                        return n.Extend(r, e), r.prototype.render = function() {
                            var t = r.__super__.render.call(this);
                            return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t
                        }, r.prototype.bind = function(t, e) {
                            var n = this;
                            r.__super__.bind.apply(this, arguments);
                            var i = t.id + "-container";
                            this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function(t) {
                                1 === t.which && n.trigger("toggle", {
                                    originalEvent: t
                                })
                            }), this.$selection.on("focus", function(t) {}), this.$selection.on("blur", function(t) {}), t.on("focus", function(e) {
                                t.isOpen() || n.$selection.focus()
                            }), t.on("selection:update", function(t) {
                                n.update(t.data)
                            })
                        }, r.prototype.clear = function() {
                            this.$selection.find(".select2-selection__rendered").empty()
                        }, r.prototype.display = function(t, e) {
                            var n = this.options.get("templateSelection"),
                                i = this.options.get("escapeMarkup");
                            return i(n(t, e))
                        }, r.prototype.selectionContainer = function() {
                            return t("<span></span>")
                        }, r.prototype.update = function(t) {
                            if (0 === t.length) return void this.clear();
                            var e = t[0],
                                n = this.$selection.find(".select2-selection__rendered"),
                                i = this.display(e, n);
                            n.empty().append(i), n.prop("title", e.title || e.text)
                        }, r
                    }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(t, e, n) {
                        function i(t, e) {
                            i.__super__.constructor.apply(this, arguments)
                        }
                        return n.Extend(i, e), i.prototype.render = function() {
                            var t = i.__super__.render.call(this);
                            return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t
                        }, i.prototype.bind = function(e, n) {
                            var r = this;
                            i.__super__.bind.apply(this, arguments), this.$selection.on("click", function(t) {
                                r.trigger("toggle", {
                                    originalEvent: t
                                })
                            }), this.$selection.on("click", ".select2-selection__choice__remove", function(e) {
                                if (!r.options.get("disabled")) {
                                    var n = t(this),
                                        i = n.parent(),
                                        o = i.data("data");
                                    r.trigger("unselect", {
                                        originalEvent: e,
                                        data: o
                                    })
                                }
                            })
                        }, i.prototype.clear = function() {
                            this.$selection.find(".select2-selection__rendered").empty()
                        }, i.prototype.display = function(t, e) {
                            var n = this.options.get("templateSelection"),
                                i = this.options.get("escapeMarkup");
                            return i(n(t, e))
                        }, i.prototype.selectionContainer = function() {
                            var e = t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                            return e
                        }, i.prototype.update = function(t) {
                            if (this.clear(), 0 !== t.length) {
                                for (var e = [], i = 0; i < t.length; i++) {
                                    var r = t[i],
                                        o = this.selectionContainer(),
                                        s = this.display(r, o);
                                    o.append(s), o.prop("title", r.title || r.text), o.data("data", r), e.push(o)
                                }
                                var a = this.$selection.find(".select2-selection__rendered");
                                n.appendMany(a, e)
                            }
                        }, i
                    }), e.define("select2/selection/placeholder", ["../utils"], function(t) {
                        function e(t, e, n) {
                            this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n)
                        }
                        return e.prototype.normalizePlaceholder = function(t, e) {
                            return "string" == typeof e && (e = {
                                id: "",
                                text: e
                            }), e
                        }, e.prototype.createPlaceholder = function(t, e) {
                            var n = this.selectionContainer();
                            return n.html(this.display(e)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                        }, e.prototype.update = function(t, e) {
                            var n = 1 == e.length && e[0].id != this.placeholder.id,
                                i = e.length > 1;
                            if (i || n) return t.call(this, e);
                            this.clear();
                            var r = this.createPlaceholder(this.placeholder);
                            this.$selection.find(".select2-selection__rendered").append(r)
                        }, e
                    }), e.define("select2/selection/allowClear", ["jquery", "../keys"], function(t, e) {
                        function n() {}
                        return n.prototype.bind = function(t, e, n) {
                            var i = this;
                            t.call(this, e, n), null == this.placeholder && this.options.get("debug") && window.console && console.error, this.$selection.on("mousedown", ".select2-selection__clear", function(t) {
                                i._handleClear(t)
                            }), e.on("keypress", function(t) {
                                i._handleKeyboardClear(t, e)
                            })
                        }, n.prototype._handleClear = function(t, e) {
                            if (!this.options.get("disabled")) {
                                var n = this.$selection.find(".select2-selection__clear");
                                if (0 !== n.length) {
                                    e.stopPropagation();
                                    for (var i = n.data("data"), r = 0; r < i.length; r++) {
                                        var o = {
                                            data: i[r]
                                        };
                                        if (this.trigger("unselect", o), o.prevented) return
                                    }
                                    this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                                }
                            }
                        }, n.prototype._handleKeyboardClear = function(t, n, i) {
                            i.isOpen() || n.which != e.DELETE && n.which != e.BACKSPACE || this._handleClear(n)
                        }, n.prototype.update = function(e, n) {
                            if (e.call(this, n), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                                var i = t('<span class="select2-selection__clear">&times;</span>');
                                i.data("data", n), this.$selection.find(".select2-selection__rendered").prepend(i)
                            }
                        }, n
                    }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(t, e, n) {
                        function i(t, e, n) {
                            t.call(this, e, n)
                        }
                        return i.prototype.render = function(e) {
                            var n = t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                            this.$searchContainer = n, this.$search = n.find("input");
                            var i = e.call(this);
                            return this._transferTabIndex(), i
                        }, i.prototype.bind = function(t, e, i) {
                            var r = this;
                            t.call(this, e, i), e.on("open", function() {
                                r.$search.trigger("focus")
                            }), e.on("close", function() {
                                r.$search.val(""), r.$search.removeAttr("aria-activedescendant"), r.$search.trigger("focus")
                            }), e.on("enable", function() {
                                r.$search.prop("disabled", !1), r._transferTabIndex()
                            }), e.on("disable", function() {
                                r.$search.prop("disabled", !0)
                            }), e.on("focus", function(t) {
                                r.$search.trigger("focus")
                            }), e.on("results:focus", function(t) {
                                r.$search.attr("aria-activedescendant", t.id)
                            }), this.$selection.on("focusin", ".select2-search--inline", function(t) {
                                r.trigger("focus", t)
                            }), this.$selection.on("focusout", ".select2-search--inline", function(t) {
                                r._handleBlur(t)
                            }), this.$selection.on("keydown", ".select2-search--inline", function(t) {
                                t.stopPropagation(), r.trigger("keypress", t), r._keyUpPrevented = t.isDefaultPrevented();
                                var e = t.which;
                                if (e === n.BACKSPACE && "" === r.$search.val()) {
                                    var i = r.$searchContainer.prev(".select2-selection__choice");
                                    if (i.length > 0) {
                                        var o = i.data("data");
                                        r.searchRemoveChoice(o), t.preventDefault()
                                    }
                                }
                            });
                            var o = document.documentMode,
                                s = o && o <= 11;
                            this.$selection.on("input.searchcheck", ".select2-search--inline", function(t) {
                                return s ? void r.$selection.off("input.search input.searchcheck") : void r.$selection.off("keyup.search")
                            }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(t) {
                                if (s && "input" === t.type) return void r.$selection.off("input.search input.searchcheck");
                                var e = t.which;
                                e != n.SHIFT && e != n.CTRL && e != n.ALT && e != n.TAB && r.handleSearch(t)
                            })
                        }, i.prototype._transferTabIndex = function(t) {
                            this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                        }, i.prototype.createPlaceholder = function(t, e) {
                            this.$search.attr("placeholder", e.text)
                        }, i.prototype.update = function(t, e) {
                            var n = this.$search[0] == document.activeElement;
                            this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
                        }, i.prototype.handleSearch = function() {
                            if (this.resizeSearch(), !this._keyUpPrevented) {
                                var t = this.$search.val();
                                this.trigger("query", {
                                    term: t
                                })
                            }
                            this._keyUpPrevented = !1
                        }, i.prototype.searchRemoveChoice = function(t, e) {
                            this.trigger("unselect", {
                                data: e
                            }), this.$search.val(e.text), this.handleSearch()
                        }, i.prototype.resizeSearch = function() {
                            this.$search.css("width", "25px");
                            var t = "";
                            if ("" !== this.$search.attr("placeholder")) t = this.$selection.find(".select2-selection__rendered").innerWidth();
                            else {
                                var e = this.$search.val().length + 1;
                                t = .75 * e + "em"
                            }
                            this.$search.css("width", t)
                        }, i
                    }), e.define("select2/selection/eventRelay", ["jquery"], function(t) {
                        function e() {}
                        return e.prototype.bind = function(e, n, i) {
                            var r = this,
                                o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                                s = ["opening", "closing", "selecting", "unselecting"];
                            e.call(this, n, i), n.on("*", function(e, n) {
                                if (t.inArray(e, o) !== -1) {
                                    n = n || {};
                                    var i = t.Event("select2:" + e, {
                                        params: n
                                    });
                                    r.$element.trigger(i), t.inArray(e, s) !== -1 && (n.prevented = i.isDefaultPrevented())
                                }
                            })
                        }, e
                    }), e.define("select2/translation", ["jquery", "require"], function(t, e) {
                        function n(t) {
                            this.dict = t || {}
                        }
                        return n.prototype.all = function() {
                            return this.dict
                        }, n.prototype.get = function(t) {
                            return this.dict[t]
                        }, n.prototype.extend = function(e) {
                            this.dict = t.extend({}, e.all(), this.dict)
                        }, n._cache = {}, n.loadPath = function(t) {
                            if (!(t in n._cache)) {
                                var i = e(t);
                                n._cache[t] = i
                            }
                            return new n(n._cache[t])
                        }, n
                    }), e.define("select2/diacritics", [], function() {
                        var t = {
                            "Ⓐ": "A",
                            "Ａ": "A",
                            "À": "A",
                            "Á": "A",
                            "Â": "A",
                            "Ầ": "A",
                            "Ấ": "A",
                            "Ẫ": "A",
                            "Ẩ": "A",
                            "Ã": "A",
                            "Ā": "A",
                            "Ă": "A",
                            "Ằ": "A",
                            "Ắ": "A",
                            "Ẵ": "A",
                            "Ẳ": "A",
                            "Ȧ": "A",
                            "Ǡ": "A",
                            "Ä": "A",
                            "Ǟ": "A",
                            "Ả": "A",
                            "Å": "A",
                            "Ǻ": "A",
                            "Ǎ": "A",
                            "Ȁ": "A",
                            "Ȃ": "A",
                            "Ạ": "A",
                            "Ậ": "A",
                            "Ặ": "A",
                            "Ḁ": "A",
                            "Ą": "A",
                            "Ⱥ": "A",
                            "Ɐ": "A",
                            "Ꜳ": "AA",
                            "Æ": "AE",
                            "Ǽ": "AE",
                            "Ǣ": "AE",
                            "Ꜵ": "AO",
                            "Ꜷ": "AU",
                            "Ꜹ": "AV",
                            "Ꜻ": "AV",
                            "Ꜽ": "AY",
                            "Ⓑ": "B",
                            "Ｂ": "B",
                            "Ḃ": "B",
                            "Ḅ": "B",
                            "Ḇ": "B",
                            "Ƀ": "B",
                            "Ƃ": "B",
                            "Ɓ": "B",
                            "Ⓒ": "C",
                            "Ｃ": "C",
                            "Ć": "C",
                            "Ĉ": "C",
                            "Ċ": "C",
                            "Č": "C",
                            "Ç": "C",
                            "Ḉ": "C",
                            "Ƈ": "C",
                            "Ȼ": "C",
                            "Ꜿ": "C",
                            "Ⓓ": "D",
                            "Ｄ": "D",
                            "Ḋ": "D",
                            "Ď": "D",
                            "Ḍ": "D",
                            "Ḑ": "D",
                            "Ḓ": "D",
                            "Ḏ": "D",
                            "Đ": "D",
                            "Ƌ": "D",
                            "Ɗ": "D",
                            "Ɖ": "D",
                            "Ꝺ": "D",
                            "Ǳ": "DZ",
                            "Ǆ": "DZ",
                            "ǲ": "Dz",
                            "ǅ": "Dz",
                            "Ⓔ": "E",
                            "Ｅ": "E",
                            "È": "E",
                            "É": "E",
                            "Ê": "E",
                            "Ề": "E",
                            "Ế": "E",
                            "Ễ": "E",
                            "Ể": "E",
                            "Ẽ": "E",
                            "Ē": "E",
                            "Ḕ": "E",
                            "Ḗ": "E",
                            "Ĕ": "E",
                            "Ė": "E",
                            "Ë": "E",
                            "Ẻ": "E",
                            "Ě": "E",
                            "Ȅ": "E",
                            "Ȇ": "E",
                            "Ẹ": "E",
                            "Ệ": "E",
                            "Ȩ": "E",
                            "Ḝ": "E",
                            "Ę": "E",
                            "Ḙ": "E",
                            "Ḛ": "E",
                            "Ɛ": "E",
                            "Ǝ": "E",
                            "Ⓕ": "F",
                            "Ｆ": "F",
                            "Ḟ": "F",
                            "Ƒ": "F",
                            "Ꝼ": "F",
                            "Ⓖ": "G",
                            "Ｇ": "G",
                            "Ǵ": "G",
                            "Ĝ": "G",
                            "Ḡ": "G",
                            "Ğ": "G",
                            "Ġ": "G",
                            "Ǧ": "G",
                            "Ģ": "G",
                            "Ǥ": "G",
                            "Ɠ": "G",
                            "Ꞡ": "G",
                            "Ᵹ": "G",
                            "Ꝿ": "G",
                            "Ⓗ": "H",
                            "Ｈ": "H",
                            "Ĥ": "H",
                            "Ḣ": "H",
                            "Ḧ": "H",
                            "Ȟ": "H",
                            "Ḥ": "H",
                            "Ḩ": "H",
                            "Ḫ": "H",
                            "Ħ": "H",
                            "Ⱨ": "H",
                            "Ⱶ": "H",
                            "Ɥ": "H",
                            "Ⓘ": "I",
                            "Ｉ": "I",
                            "Ì": "I",
                            "Í": "I",
                            "Î": "I",
                            "Ĩ": "I",
                            "Ī": "I",
                            "Ĭ": "I",
                            "İ": "I",
                            "Ï": "I",
                            "Ḯ": "I",
                            "Ỉ": "I",
                            "Ǐ": "I",
                            "Ȉ": "I",
                            "Ȋ": "I",
                            "Ị": "I",
                            "Į": "I",
                            "Ḭ": "I",
                            "Ɨ": "I",
                            "Ⓙ": "J",
                            "Ｊ": "J",
                            "Ĵ": "J",
                            "Ɉ": "J",
                            "Ⓚ": "K",
                            "Ｋ": "K",
                            "Ḱ": "K",
                            "Ǩ": "K",
                            "Ḳ": "K",
                            "Ķ": "K",
                            "Ḵ": "K",
                            "Ƙ": "K",
                            "Ⱪ": "K",
                            "Ꝁ": "K",
                            "Ꝃ": "K",
                            "Ꝅ": "K",
                            "Ꞣ": "K",
                            "Ⓛ": "L",
                            "Ｌ": "L",
                            "Ŀ": "L",
                            "Ĺ": "L",
                            "Ľ": "L",
                            "Ḷ": "L",
                            "Ḹ": "L",
                            "Ļ": "L",
                            "Ḽ": "L",
                            "Ḻ": "L",
                            "Ł": "L",
                            "Ƚ": "L",
                            "Ɫ": "L",
                            "Ⱡ": "L",
                            "Ꝉ": "L",
                            "Ꝇ": "L",
                            "Ꞁ": "L",
                            "Ǉ": "LJ",
                            "ǈ": "Lj",
                            "Ⓜ": "M",
                            "Ｍ": "M",
                            "Ḿ": "M",
                            "Ṁ": "M",
                            "Ṃ": "M",
                            "Ɱ": "M",
                            "Ɯ": "M",
                            "Ⓝ": "N",
                            "Ｎ": "N",
                            "Ǹ": "N",
                            "Ń": "N",
                            "Ñ": "N",
                            "Ṅ": "N",
                            "Ň": "N",
                            "Ṇ": "N",
                            "Ņ": "N",
                            "Ṋ": "N",
                            "Ṉ": "N",
                            "Ƞ": "N",
                            "Ɲ": "N",
                            "Ꞑ": "N",
                            "Ꞥ": "N",
                            "Ǌ": "NJ",
                            "ǋ": "Nj",
                            "Ⓞ": "O",
                            "Ｏ": "O",
                            "Ò": "O",
                            "Ó": "O",
                            "Ô": "O",
                            "Ồ": "O",
                            "Ố": "O",
                            "Ỗ": "O",
                            "Ổ": "O",
                            "Õ": "O",
                            "Ṍ": "O",
                            "Ȭ": "O",
                            "Ṏ": "O",
                            "Ō": "O",
                            "Ṑ": "O",
                            "Ṓ": "O",
                            "Ŏ": "O",
                            "Ȯ": "O",
                            "Ȱ": "O",
                            "Ö": "O",
                            "Ȫ": "O",
                            "Ỏ": "O",
                            "Ő": "O",
                            "Ǒ": "O",
                            "Ȍ": "O",
                            "Ȏ": "O",
                            "Ơ": "O",
                            "Ờ": "O",
                            "Ớ": "O",
                            "Ỡ": "O",
                            "Ở": "O",
                            "Ợ": "O",
                            "Ọ": "O",
                            "Ộ": "O",
                            "Ǫ": "O",
                            "Ǭ": "O",
                            "Ø": "O",
                            "Ǿ": "O",
                            "Ɔ": "O",
                            "Ɵ": "O",
                            "Ꝋ": "O",
                            "Ꝍ": "O",
                            "Ƣ": "OI",
                            "Ꝏ": "OO",
                            "Ȣ": "OU",
                            "Ⓟ": "P",
                            "Ｐ": "P",
                            "Ṕ": "P",
                            "Ṗ": "P",
                            "Ƥ": "P",
                            "Ᵽ": "P",
                            "Ꝑ": "P",
                            "Ꝓ": "P",
                            "Ꝕ": "P",
                            "Ⓠ": "Q",
                            "Ｑ": "Q",
                            "Ꝗ": "Q",
                            "Ꝙ": "Q",
                            "Ɋ": "Q",
                            "Ⓡ": "R",
                            "Ｒ": "R",
                            "Ŕ": "R",
                            "Ṙ": "R",
                            "Ř": "R",
                            "Ȑ": "R",
                            "Ȓ": "R",
                            "Ṛ": "R",
                            "Ṝ": "R",
                            "Ŗ": "R",
                            "Ṟ": "R",
                            "Ɍ": "R",
                            "Ɽ": "R",
                            "Ꝛ": "R",
                            "Ꞧ": "R",
                            "Ꞃ": "R",
                            "Ⓢ": "S",
                            "Ｓ": "S",
                            "ẞ": "S",
                            "Ś": "S",
                            "Ṥ": "S",
                            "Ŝ": "S",
                            "Ṡ": "S",
                            "Š": "S",
                            "Ṧ": "S",
                            "Ṣ": "S",
                            "Ṩ": "S",
                            "Ș": "S",
                            "Ş": "S",
                            "Ȿ": "S",
                            "Ꞩ": "S",
                            "Ꞅ": "S",
                            "Ⓣ": "T",
                            "Ｔ": "T",
                            "Ṫ": "T",
                            "Ť": "T",
                            "Ṭ": "T",
                            "Ț": "T",
                            "Ţ": "T",
                            "Ṱ": "T",
                            "Ṯ": "T",
                            "Ŧ": "T",
                            "Ƭ": "T",
                            "Ʈ": "T",
                            "Ⱦ": "T",
                            "Ꞇ": "T",
                            "Ꜩ": "TZ",
                            "Ⓤ": "U",
                            "Ｕ": "U",
                            "Ù": "U",
                            "Ú": "U",
                            "Û": "U",
                            "Ũ": "U",
                            "Ṹ": "U",
                            "Ū": "U",
                            "Ṻ": "U",
                            "Ŭ": "U",
                            "Ü": "U",
                            "Ǜ": "U",
                            "Ǘ": "U",
                            "Ǖ": "U",
                            "Ǚ": "U",
                            "Ủ": "U",
                            "Ů": "U",
                            "Ű": "U",
                            "Ǔ": "U",
                            "Ȕ": "U",
                            "Ȗ": "U",
                            "Ư": "U",
                            "Ừ": "U",
                            "Ứ": "U",
                            "Ữ": "U",
                            "Ử": "U",
                            "Ự": "U",
                            "Ụ": "U",
                            "Ṳ": "U",
                            "Ų": "U",
                            "Ṷ": "U",
                            "Ṵ": "U",
                            "Ʉ": "U",
                            "Ⓥ": "V",
                            "Ｖ": "V",
                            "Ṽ": "V",
                            "Ṿ": "V",
                            "Ʋ": "V",
                            "Ꝟ": "V",
                            "Ʌ": "V",
                            "Ꝡ": "VY",
                            "Ⓦ": "W",
                            "Ｗ": "W",
                            "Ẁ": "W",
                            "Ẃ": "W",
                            "Ŵ": "W",
                            "Ẇ": "W",
                            "Ẅ": "W",
                            "Ẉ": "W",
                            "Ⱳ": "W",
                            "Ⓧ": "X",
                            "Ｘ": "X",
                            "Ẋ": "X",
                            "Ẍ": "X",
                            "Ⓨ": "Y",
                            "Ｙ": "Y",
                            "Ỳ": "Y",
                            "Ý": "Y",
                            "Ŷ": "Y",
                            "Ỹ": "Y",
                            "Ȳ": "Y",
                            "Ẏ": "Y",
                            "Ÿ": "Y",
                            "Ỷ": "Y",
                            "Ỵ": "Y",
                            "Ƴ": "Y",
                            "Ɏ": "Y",
                            "Ỿ": "Y",
                            "Ⓩ": "Z",
                            "Ｚ": "Z",
                            "Ź": "Z",
                            "Ẑ": "Z",
                            "Ż": "Z",
                            "Ž": "Z",
                            "Ẓ": "Z",
                            "Ẕ": "Z",
                            "Ƶ": "Z",
                            "Ȥ": "Z",
                            "Ɀ": "Z",
                            "Ⱬ": "Z",
                            "Ꝣ": "Z",
                            "ⓐ": "a",
                            "ａ": "a",
                            "ẚ": "a",
                            "à": "a",
                            "á": "a",
                            "â": "a",
                            "ầ": "a",
                            "ấ": "a",
                            "ẫ": "a",
                            "ẩ": "a",
                            "ã": "a",
                            "ā": "a",
                            "ă": "a",
                            "ằ": "a",
                            "ắ": "a",
                            "ẵ": "a",
                            "ẳ": "a",
                            "ȧ": "a",
                            "ǡ": "a",
                            "ä": "a",
                            "ǟ": "a",
                            "ả": "a",
                            "å": "a",
                            "ǻ": "a",
                            "ǎ": "a",
                            "ȁ": "a",
                            "ȃ": "a",
                            "ạ": "a",
                            "ậ": "a",
                            "ặ": "a",
                            "ḁ": "a",
                            "ą": "a",
                            "ⱥ": "a",
                            "ɐ": "a",
                            "ꜳ": "aa",
                            "æ": "ae",
                            "ǽ": "ae",
                            "ǣ": "ae",
                            "ꜵ": "ao",
                            "ꜷ": "au",
                            "ꜹ": "av",
                            "ꜻ": "av",
                            "ꜽ": "ay",
                            "ⓑ": "b",
                            "ｂ": "b",
                            "ḃ": "b",
                            "ḅ": "b",
                            "ḇ": "b",
                            "ƀ": "b",
                            "ƃ": "b",
                            "ɓ": "b",
                            "ⓒ": "c",
                            "ｃ": "c",
                            "ć": "c",
                            "ĉ": "c",
                            "ċ": "c",
                            "č": "c",
                            "ç": "c",
                            "ḉ": "c",
                            "ƈ": "c",
                            "ȼ": "c",
                            "ꜿ": "c",
                            "ↄ": "c",
                            "ⓓ": "d",
                            "ｄ": "d",
                            "ḋ": "d",
                            "ď": "d",
                            "ḍ": "d",
                            "ḑ": "d",
                            "ḓ": "d",
                            "ḏ": "d",
                            "đ": "d",
                            "ƌ": "d",
                            "ɖ": "d",
                            "ɗ": "d",
                            "ꝺ": "d",
                            "ǳ": "dz",
                            "ǆ": "dz",
                            "ⓔ": "e",
                            "ｅ": "e",
                            "è": "e",
                            "é": "e",
                            "ê": "e",
                            "ề": "e",
                            "ế": "e",
                            "ễ": "e",
                            "ể": "e",
                            "ẽ": "e",
                            "ē": "e",
                            "ḕ": "e",
                            "ḗ": "e",
                            "ĕ": "e",
                            "ė": "e",
                            "ë": "e",
                            "ẻ": "e",
                            "ě": "e",
                            "ȅ": "e",
                            "ȇ": "e",
                            "ẹ": "e",
                            "ệ": "e",
                            "ȩ": "e",
                            "ḝ": "e",
                            "ę": "e",
                            "ḙ": "e",
                            "ḛ": "e",
                            "ɇ": "e",
                            "ɛ": "e",
                            "ǝ": "e",
                            "ⓕ": "f",
                            "ｆ": "f",
                            "ḟ": "f",
                            "ƒ": "f",
                            "ꝼ": "f",
                            "ⓖ": "g",
                            "ｇ": "g",
                            "ǵ": "g",
                            "ĝ": "g",
                            "ḡ": "g",
                            "ğ": "g",
                            "ġ": "g",
                            "ǧ": "g",
                            "ģ": "g",
                            "ǥ": "g",
                            "ɠ": "g",
                            "ꞡ": "g",
                            "ᵹ": "g",
                            "ꝿ": "g",
                            "ⓗ": "h",
                            "ｈ": "h",
                            "ĥ": "h",
                            "ḣ": "h",
                            "ḧ": "h",
                            "ȟ": "h",
                            "ḥ": "h",
                            "ḩ": "h",
                            "ḫ": "h",
                            "ẖ": "h",
                            "ħ": "h",
                            "ⱨ": "h",
                            "ⱶ": "h",
                            "ɥ": "h",
                            "ƕ": "hv",
                            "ⓘ": "i",
                            "ｉ": "i",
                            "ì": "i",
                            "í": "i",
                            "î": "i",
                            "ĩ": "i",
                            "ī": "i",
                            "ĭ": "i",
                            "ï": "i",
                            "ḯ": "i",
                            "ỉ": "i",
                            "ǐ": "i",
                            "ȉ": "i",
                            "ȋ": "i",
                            "ị": "i",
                            "į": "i",
                            "ḭ": "i",
                            "ɨ": "i",
                            "ı": "i",
                            "ⓙ": "j",
                            "ｊ": "j",
                            "ĵ": "j",
                            "ǰ": "j",
                            "ɉ": "j",
                            "ⓚ": "k",
                            "ｋ": "k",
                            "ḱ": "k",
                            "ǩ": "k",
                            "ḳ": "k",
                            "ķ": "k",
                            "ḵ": "k",
                            "ƙ": "k",
                            "ⱪ": "k",
                            "ꝁ": "k",
                            "ꝃ": "k",
                            "ꝅ": "k",
                            "ꞣ": "k",
                            "ⓛ": "l",
                            "ｌ": "l",
                            "ŀ": "l",
                            "ĺ": "l",
                            "ľ": "l",
                            "ḷ": "l",
                            "ḹ": "l",
                            "ļ": "l",
                            "ḽ": "l",
                            "ḻ": "l",
                            "ſ": "l",
                            "ł": "l",
                            "ƚ": "l",
                            "ɫ": "l",
                            "ⱡ": "l",
                            "ꝉ": "l",
                            "ꞁ": "l",
                            "ꝇ": "l",
                            "ǉ": "lj",
                            "ⓜ": "m",
                            "ｍ": "m",
                            "ḿ": "m",
                            "ṁ": "m",
                            "ṃ": "m",
                            "ɱ": "m",
                            "ɯ": "m",
                            "ⓝ": "n",
                            "ｎ": "n",
                            "ǹ": "n",
                            "ń": "n",
                            "ñ": "n",
                            "ṅ": "n",
                            "ň": "n",
                            "ṇ": "n",
                            "ņ": "n",
                            "ṋ": "n",
                            "ṉ": "n",
                            "ƞ": "n",
                            "ɲ": "n",
                            "ŉ": "n",
                            "ꞑ": "n",
                            "ꞥ": "n",
                            "ǌ": "nj",
                            "ⓞ": "o",
                            "ｏ": "o",
                            "ò": "o",
                            "ó": "o",
                            "ô": "o",
                            "ồ": "o",
                            "ố": "o",
                            "ỗ": "o",
                            "ổ": "o",
                            "õ": "o",
                            "ṍ": "o",
                            "ȭ": "o",
                            "ṏ": "o",
                            "ō": "o",
                            "ṑ": "o",
                            "ṓ": "o",
                            "ŏ": "o",
                            "ȯ": "o",
                            "ȱ": "o",
                            "ö": "o",
                            "ȫ": "o",
                            "ỏ": "o",
                            "ő": "o",
                            "ǒ": "o",
                            "ȍ": "o",
                            "ȏ": "o",
                            "ơ": "o",
                            "ờ": "o",
                            "ớ": "o",
                            "ỡ": "o",
                            "ở": "o",
                            "ợ": "o",
                            "ọ": "o",
                            "ộ": "o",
                            "ǫ": "o",
                            "ǭ": "o",
                            "ø": "o",
                            "ǿ": "o",
                            "ɔ": "o",
                            "ꝋ": "o",
                            "ꝍ": "o",
                            "ɵ": "o",
                            "ƣ": "oi",
                            "ȣ": "ou",
                            "ꝏ": "oo",
                            "ⓟ": "p",
                            "ｐ": "p",
                            "ṕ": "p",
                            "ṗ": "p",
                            "ƥ": "p",
                            "ᵽ": "p",
                            "ꝑ": "p",
                            "ꝓ": "p",
                            "ꝕ": "p",
                            "ⓠ": "q",
                            "ｑ": "q",
                            "ɋ": "q",
                            "ꝗ": "q",
                            "ꝙ": "q",
                            "ⓡ": "r",
                            "ｒ": "r",
                            "ŕ": "r",
                            "ṙ": "r",
                            "ř": "r",
                            "ȑ": "r",
                            "ȓ": "r",
                            "ṛ": "r",
                            "ṝ": "r",
                            "ŗ": "r",
                            "ṟ": "r",
                            "ɍ": "r",
                            "ɽ": "r",
                            "ꝛ": "r",
                            "ꞧ": "r",
                            "ꞃ": "r",
                            "ⓢ": "s",
                            "ｓ": "s",
                            "ß": "s",
                            "ś": "s",
                            "ṥ": "s",
                            "ŝ": "s",
                            "ṡ": "s",
                            "š": "s",
                            "ṧ": "s",
                            "ṣ": "s",
                            "ṩ": "s",
                            "ș": "s",
                            "ş": "s",
                            "ȿ": "s",
                            "ꞩ": "s",
                            "ꞅ": "s",
                            "ẛ": "s",
                            "ⓣ": "t",
                            "ｔ": "t",
                            "ṫ": "t",
                            "ẗ": "t",
                            "ť": "t",
                            "ṭ": "t",
                            "ț": "t",
                            "ţ": "t",
                            "ṱ": "t",
                            "ṯ": "t",
                            "ŧ": "t",
                            "ƭ": "t",
                            "ʈ": "t",
                            "ⱦ": "t",
                            "ꞇ": "t",
                            "ꜩ": "tz",
                            "ⓤ": "u",
                            "ｕ": "u",
                            "ù": "u",
                            "ú": "u",
                            "û": "u",
                            "ũ": "u",
                            "ṹ": "u",
                            "ū": "u",
                            "ṻ": "u",
                            "ŭ": "u",
                            "ü": "u",
                            "ǜ": "u",
                            "ǘ": "u",
                            "ǖ": "u",
                            "ǚ": "u",
                            "ủ": "u",
                            "ů": "u",
                            "ű": "u",
                            "ǔ": "u",
                            "ȕ": "u",
                            "ȗ": "u",
                            "ư": "u",
                            "ừ": "u",
                            "ứ": "u",
                            "ữ": "u",
                            "ử": "u",
                            "ự": "u",
                            "ụ": "u",
                            "ṳ": "u",
                            "ų": "u",
                            "ṷ": "u",
                            "ṵ": "u",
                            "ʉ": "u",
                            "ⓥ": "v",
                            "ｖ": "v",
                            "ṽ": "v",
                            "ṿ": "v",
                            "ʋ": "v",
                            "ꝟ": "v",
                            "ʌ": "v",
                            "ꝡ": "vy",
                            "ⓦ": "w",
                            "ｗ": "w",
                            "ẁ": "w",
                            "ẃ": "w",
                            "ŵ": "w",
                            "ẇ": "w",
                            "ẅ": "w",
                            "ẘ": "w",
                            "ẉ": "w",
                            "ⱳ": "w",
                            "ⓧ": "x",
                            "ｘ": "x",
                            "ẋ": "x",
                            "ẍ": "x",
                            "ⓨ": "y",
                            "ｙ": "y",
                            "ỳ": "y",
                            "ý": "y",
                            "ŷ": "y",
                            "ỹ": "y",
                            "ȳ": "y",
                            "ẏ": "y",
                            "ÿ": "y",
                            "ỷ": "y",
                            "ẙ": "y",
                            "ỵ": "y",
                            "ƴ": "y",
                            "ɏ": "y",
                            "ỿ": "y",
                            "ⓩ": "z",
                            "ｚ": "z",
                            "ź": "z",
                            "ẑ": "z",
                            "ż": "z",
                            "ž": "z",
                            "ẓ": "z",
                            "ẕ": "z",
                            "ƶ": "z",
                            "ȥ": "z",
                            "ɀ": "z",
                            "ⱬ": "z",
                            "ꝣ": "z",
                            "Ά": "Α",
                            "Έ": "Ε",
                            "Ή": "Η",
                            "Ί": "Ι",
                            "Ϊ": "Ι",
                            "Ό": "Ο",
                            "Ύ": "Υ",
                            "Ϋ": "Υ",
                            "Ώ": "Ω",
                            "ά": "α",
                            "έ": "ε",
                            "ή": "η",
                            "ί": "ι",
                            "ϊ": "ι",
                            "ΐ": "ι",
                            "ό": "ο",
                            "ύ": "υ",
                            "ϋ": "υ",
                            "ΰ": "υ",
                            "ω": "ω",
                            "ς": "σ"
                        };
                        return t
                    }), e.define("select2/data/base", ["../utils"], function(t) {
                        function e(t, n) {
                            e.__super__.constructor.call(this)
                        }
                        return t.Extend(e, t.Observable), e.prototype.current = function(t) {
                            throw new Error("The `current` method must be defined in child classes.")
                        }, e.prototype.query = function(t, e) {
                            throw new Error("The `query` method must be defined in child classes.")
                        }, e.prototype.bind = function(t, e) {}, e.prototype.destroy = function() {}, e.prototype.generateResultId = function(e, n) {
                            var i = e.id + "-result-";
                            return i += t.generateChars(4), i += null != n.id ? "-" + n.id.toString() : "-" + t.generateChars(4)
                        }, e
                    }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function(t, e, n) {
                        function i(t, e) {
                            this.$element = t, this.options = e, i.__super__.constructor.call(this)
                        }
                        return e.Extend(i, t), i.prototype.current = function(t) {
                            var e = [],
                                i = this;
                            this.$element.find(":selected").each(function() {
                                var t = n(this),
                                    r = i.item(t);
                                e.push(r)
                            }), t(e)
                        }, i.prototype.select = function(t) {
                            var e = this;
                            if (t.selected = !0, n(t.element).is("option")) return t.element.selected = !0, void this.$element.trigger("change");
                            if (this.$element.prop("multiple")) this.current(function(i) {
                                var r = [];
                                t = [t], t.push.apply(t, i);
                                for (var o = 0; o < t.length; o++) {
                                    var s = t[o].id;
                                    n.inArray(s, r) === -1 && r.push(s)
                                }
                                e.$element.val(r), e.$element.trigger("change")
                            });
                            else {
                                var i = t.id;
                                this.$element.val(i), this.$element.trigger("change")
                            }
                        }, i.prototype.unselect = function(t) {
                            var e = this;
                            if (this.$element.prop("multiple")) return t.selected = !1, n(t.element).is("option") ? (t.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(i) {
                                for (var r = [], o = 0; o < i.length; o++) {
                                    var s = i[o].id;
                                    s !== t.id && n.inArray(s, r) === -1 && r.push(s)
                                }
                                e.$element.val(r), e.$element.trigger("change")
                            })
                        }, i.prototype.bind = function(t, e) {
                            var n = this;
                            this.container = t, t.on("select", function(t) {
                                n.select(t.data)
                            }), t.on("unselect", function(t) {
                                n.unselect(t.data)
                            })
                        }, i.prototype.destroy = function() {
                            this.$element.find("*").each(function() {
                                n.removeData(this, "data")
                            })
                        }, i.prototype.query = function(t, e) {
                            var i = [],
                                r = this,
                                o = this.$element.children();
                            o.each(function() {
                                var e = n(this);
                                if (e.is("option") || e.is("optgroup")) {
                                    var o = r.item(e),
                                        s = r.matches(t, o);
                                    null !== s && i.push(s)
                                }
                            }), e({
                                results: i
                            })
                        }, i.prototype.addOptions = function(t) {
                            e.appendMany(this.$element, t)
                        }, i.prototype.option = function(t) {
                            var e;
                            t.children ? (e = document.createElement("optgroup"), e.label = t.text) : (e = document.createElement("option"), void 0 !== e.textContent ? e.textContent = t.text : e.innerText = t.text), void 0 !== t.id && (e.value = t.id), t.disabled && (e.disabled = !0), t.selected && (e.selected = !0), t.title && (e.title = t.title);
                            var i = n(e),
                                r = this._normalizeItem(t);
                            return r.element = e, n.data(e, "data", r), i
                        }, i.prototype.item = function(t) {
                            var e = {};
                            if (e = n.data(t[0], "data"), null != e) return e;
                            if (t.is("option")) e = {
                                id: t.val(),
                                text: t.text(),
                                disabled: t.prop("disabled"),
                                selected: t.prop("selected"),
                                title: t.prop("title")
                            };
                            else if (t.is("optgroup")) {
                                e = {
                                    text: t.prop("label"),
                                    children: [],
                                    title: t.prop("title")
                                };
                                for (var i = t.children("option"), r = [], o = 0; o < i.length; o++) {
                                    var s = n(i[o]),
                                        a = this.item(s);
                                    r.push(a)
                                }
                                e.children = r
                            }
                            return e = this._normalizeItem(e), e.element = t[0], n.data(t[0], "data", e), e
                        }, i.prototype._normalizeItem = function(t) {
                            n.isPlainObject(t) || (t = {
                                id: t,
                                text: t
                            }), t = n.extend({}, {
                                text: ""
                            }, t);
                            var e = {
                                selected: !1,
                                disabled: !1
                            };
                            return null != t.id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), n.extend({}, e, t)
                        }, i.prototype.matches = function(t, e) {
                            var n = this.options.get("matcher");
                            return n(t, e)
                        }, i
                    }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function(t, e, n) {
                        function i(t, e) {
                            var n = e.get("data") || [];
                            i.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(n))
                        }
                        return e.Extend(i, t), i.prototype.select = function(t) {
                            var e = this.$element.find("option").filter(function(e, n) {
                                return n.value == t.id.toString()
                            });
                            0 === e.length && (e = this.option(t), this.addOptions(e)), i.__super__.select.call(this, t)
                        }, i.prototype.convertToOptions = function(t) {
                            function i(t) {
                                return function() {
                                    return n(this).val() == t.id
                                }
                            }
                            for (var r = this, o = this.$element.find("option"), s = o.map(function() {
                                    return r.item(n(this)).id
                                }).get(), a = [], l = 0; l < t.length; l++) {
                                var u = this._normalizeItem(t[l]);
                                if (n.inArray(u.id, s) >= 0) {
                                    var c = o.filter(i(u)),
                                        d = this.item(c),
                                        h = n.extend(!0, {}, u, d),
                                        p = this.option(h);
                                    c.replaceWith(p)
                                } else {
                                    var f = this.option(u);
                                    if (u.children) {
                                        var g = this.convertToOptions(u.children);
                                        e.appendMany(f, g)
                                    }
                                    a.push(f)
                                }
                            }
                            return a
                        }, i
                    }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(t, e, n) {
                        function i(t, e) {
                            this.ajaxOptions = this._applyDefaults(e.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, t, e)
                        }
                        return e.Extend(i, t), i.prototype._applyDefaults = function(t) {
                            var e = {
                                data: function(t) {
                                    return n.extend({}, t, {
                                        q: t.term
                                    })
                                },
                                transport: function(t, e, i) {
                                    var r = n.ajax(t);
                                    return r.then(e), r.fail(i), r
                                }
                            };
                            return n.extend({}, e, t, !0)
                        }, i.prototype.processResults = function(t) {
                            return t
                        }, i.prototype.query = function(t, e) {
                            function i() {
                                var i = o.transport(o, function(i) {
                                    var o = r.processResults(i, t);
                                    r.options.get("debug") && window.console && console.error && (!o || !o.results || !n.isArray(o.results)), e(o)
                                }, function() {
                                    i.status && "0" === i.status || r.trigger("results:message", {
                                        message: "errorLoading"
                                    })
                                });
                                r._request = i
                            }
                            var r = this;
                            null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                            var o = n.extend({
                                type: "GET"
                            }, this.ajaxOptions);
                            "function" == typeof o.url && (o.url = o.url.call(this.$element, t)), "function" == typeof o.data && (o.data = o.data.call(this.$element, t)), this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
                        }, i
                    }), e.define("select2/data/tags", ["jquery"], function(t) {
                        function e(e, n, i) {
                            var r = i.get("tags"),
                                o = i.get("createTag");
                            void 0 !== o && (this.createTag = o);
                            var s = i.get("insertTag");
                            if (void 0 !== s && (this.insertTag = s), e.call(this, n, i), t.isArray(r))
                                for (var a = 0; a < r.length; a++) {
                                    var l = r[a],
                                        u = this._normalizeItem(l),
                                        c = this.option(u);
                                    this.$element.append(c)
                                }
                        }
                        return e.prototype.query = function(t, e, n) {
                            function i(t, o) {
                                for (var s = t.results, a = 0; a < s.length; a++) {
                                    var l = s[a],
                                        u = null != l.children && !i({
                                            results: l.children
                                        }, !0),
                                        c = (l.text || "").toUpperCase(),
                                        d = (e.term || "").toUpperCase(),
                                        h = c === d;
                                    if (h || u) return !o && (t.data = s, void n(t))
                                }
                                if (o) return !0;
                                var p = r.createTag(e);
                                if (null != p) {
                                    var f = r.option(p);
                                    f.attr("data-select2-tag", !0), r.addOptions([f]), r.insertTag(s, p)
                                }
                                t.results = s, n(t)
                            }
                            var r = this;
                            return this._removeOldTags(), null == e.term || null != e.page ? void t.call(this, e, n) : void t.call(this, e, i)
                        }, e.prototype.createTag = function(e, n) {
                            var i = t.trim(n.term);
                            return "" === i ? null : {
                                id: i,
                                text: i
                            }
                        }, e.prototype.insertTag = function(t, e, n) {
                            e.unshift(n)
                        }, e.prototype._removeOldTags = function(e) {
                            var n = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                            n.each(function() {
                                this.selected || t(this).remove()
                            })
                        }, e
                    }), e.define("select2/data/tokenizer", ["jquery"], function(t) {
                        function e(t, e, n) {
                            var i = n.get("tokenizer");
                            void 0 !== i && (this.tokenizer = i), t.call(this, e, n)
                        }
                        return e.prototype.bind = function(t, e, n) {
                            t.call(this, e, n), this.$search = e.dropdown.$search || e.selection.$search || n.find(".select2-search__field")
                        }, e.prototype.query = function(e, n, i) {
                            function r(e) {
                                var n = s._normalizeItem(e),
                                    i = s.$element.find("option").filter(function() {
                                        return t(this).val() === n.id
                                    });
                                if (!i.length) {
                                    var r = s.option(n);
                                    r.attr("data-select2-tag", !0), s._removeOldTags(), s.addOptions([r])
                                }
                                o(n)
                            }

                            function o(t) {
                                s.trigger("select", {
                                    data: t
                                })
                            }
                            var s = this;
                            n.term = n.term || "";
                            var a = this.tokenizer(n, this.options, r);
                            a.term !== n.term && (this.$search.length && (this.$search.val(a.term), this.$search.focus()), n.term = a.term), e.call(this, n, i)
                        }, e.prototype.tokenizer = function(e, n, i, r) {
                            for (var o = i.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function(t) {
                                    return {
                                        id: t.term,
                                        text: t.term
                                    }
                                }; a < s.length;) {
                                var u = s[a];
                                if (t.inArray(u, o) !== -1) {
                                    var c = s.substr(0, a),
                                        d = t.extend({}, n, {
                                            term: c
                                        }),
                                        h = l(d);
                                    null != h ? (r(h), s = s.substr(a + 1) || "", a = 0) : a++
                                } else a++
                            }
                            return {
                                term: s
                            }
                        }, e
                    }), e.define("select2/data/minimumInputLength", [], function() {
                        function t(t, e, n) {
                            this.minimumInputLength = n.get("minimumInputLength"), t.call(this, e, n)
                        }
                        return t.prototype.query = function(t, e, n) {
                            return e.term = e.term || "", e.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                                message: "inputTooShort",
                                args: {
                                    minimum: this.minimumInputLength,
                                    input: e.term,
                                    params: e
                                }
                            }) : void t.call(this, e, n)
                        }, t
                    }), e.define("select2/data/maximumInputLength", [], function() {
                        function t(t, e, n) {
                            this.maximumInputLength = n.get("maximumInputLength"), t.call(this, e, n)
                        }
                        return t.prototype.query = function(t, e, n) {
                            return e.term = e.term || "", this.maximumInputLength > 0 && e.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                                message: "inputTooLong",
                                args: {
                                    maximum: this.maximumInputLength,
                                    input: e.term,
                                    params: e
                                }
                            }) : void t.call(this, e, n)
                        }, t
                    }), e.define("select2/data/maximumSelectionLength", [], function() {
                        function t(t, e, n) {
                            this.maximumSelectionLength = n.get("maximumSelectionLength"), t.call(this, e, n)
                        }
                        return t.prototype.query = function(t, e, n) {
                            var i = this;
                            this.current(function(r) {
                                var o = null != r ? r.length : 0;
                                return i.maximumSelectionLength > 0 && o >= i.maximumSelectionLength ? void i.trigger("results:message", {
                                    message: "maximumSelected",
                                    args: {
                                        maximum: i.maximumSelectionLength
                                    }
                                }) : void t.call(i, e, n)
                            })
                        }, t
                    }), e.define("select2/dropdown", ["jquery", "./utils"], function(t, e) {
                        function n(t, e) {
                            this.$element = t, this.options = e, n.__super__.constructor.call(this)
                        }
                        return e.Extend(n, e.Observable), n.prototype.render = function() {
                            var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                            return e.attr("dir", this.options.get("dir")), this.$dropdown = e, e
                        }, n.prototype.bind = function() {}, n.prototype.position = function(t, e) {}, n.prototype.destroy = function() {
                            this.$dropdown.remove()
                        }, n
                    }), e.define("select2/dropdown/search", ["jquery", "../utils"], function(t, e) {
                        function n() {}
                        return n.prototype.render = function(e) {
                            var n = e.call(this),
                                i = t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');
                            return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
                        }, n.prototype.bind = function(e, n, i) {
                            var r = this;
                            e.call(this, n, i), this.$search.on("keydown", function(t) {
                                r.trigger("keypress", t), r._keyUpPrevented = t.isDefaultPrevented()
                            }), this.$search.on("input", function(e) {
                                t(this).off("keyup")
                            }), this.$search.on("keyup input", function(t) {
                                r.handleSearch(t)
                            }), n.on("open", function() {
                                r.$search.attr("tabindex", 0), r.$search.focus(), window.setTimeout(function() {
                                    r.$search.focus()
                                }, 0)
                            }), n.on("close", function() {
                                r.$search.attr("tabindex", -1), r.$search.val("")
                            }), n.on("focus", function() {
                                n.isOpen() || r.$search.focus()
                            }), n.on("results:all", function(t) {
                                if (null == t.query.term || "" === t.query.term) {
                                    var e = r.showSearch(t);
                                    e ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide")
                                }
                            })
                        }, n.prototype.handleSearch = function(t) {
                            if (!this._keyUpPrevented) {
                                var e = this.$search.val();
                                this.trigger("query", {
                                    term: e
                                })
                            }
                            this._keyUpPrevented = !1
                        }, n.prototype.showSearch = function(t, e) {
                            return !0
                        }, n
                    }), e.define("select2/dropdown/hidePlaceholder", [], function() {
                        function t(t, e, n, i) {
                            this.placeholder = this.normalizePlaceholder(n.get("placeholder")), t.call(this, e, n, i)
                        }
                        return t.prototype.append = function(t, e) {
                            e.results = this.removePlaceholder(e.results), t.call(this, e)
                        }, t.prototype.normalizePlaceholder = function(t, e) {
                            return "string" == typeof e && (e = {
                                id: "",
                                text: e
                            }), e
                        }, t.prototype.removePlaceholder = function(t, e) {
                            for (var n = e.slice(0), i = e.length - 1; i >= 0; i--) {
                                var r = e[i];
                                this.placeholder.id === r.id && n.splice(i, 1)
                            }
                            return n
                        }, t
                    }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function(t) {
                        function e(t, e, n, i) {
                            this.lastParams = {}, t.call(this, e, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                        }
                        return e.prototype.append = function(t, e) {
                            this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore)
                        }, e.prototype.bind = function(e, n, i) {
                            var r = this;
                            e.call(this, n, i), n.on("query", function(t) {
                                r.lastParams = t, r.loading = !0
                            }), n.on("query:append", function(t) {
                                r.lastParams = t, r.loading = !0
                            }), this.$results.on("scroll", function() {
                                var e = t.contains(document.documentElement, r.$loadingMore[0]);
                                if (!r.loading && e) {
                                    var n = r.$results.offset().top + r.$results.outerHeight(!1),
                                        i = r.$loadingMore.offset().top + r.$loadingMore.outerHeight(!1);
                                    n + 50 >= i && r.loadMore()
                                }
                            })
                        }, e.prototype.loadMore = function() {
                            this.loading = !0;
                            var e = t.extend({}, {
                                page: 1
                            }, this.lastParams);
                            e.page++, this.trigger("query:append", e)
                        }, e.prototype.showLoadingMore = function(t, e) {
                            return e.pagination && e.pagination.more
                        }, e.prototype.createLoadingMore = function() {
                            var e = t('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                                n = this.options.get("translations").get("loadingMore");
                            return e.html(n(this.lastParams)), e
                        }, e
                    }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(t, e) {
                        function n(e, n, i) {
                            this.$dropdownParent = i.get("dropdownParent") || t(document.body), e.call(this, n, i)
                        }
                        return n.prototype.bind = function(t, e, n) {
                            var i = this,
                                r = !1;
                            t.call(this, e, n), e.on("open", function() {
                                i._showDropdown(), i._attachPositioningHandler(e), r || (r = !0, e.on("results:all", function() {
                                    i._positionDropdown(), i._resizeDropdown()
                                }), e.on("results:append", function() {
                                    i._positionDropdown(), i._resizeDropdown()
                                }))
                            }), e.on("close", function() {
                                i._hideDropdown(), i._detachPositioningHandler(e)
                            }), this.$dropdownContainer.on("mousedown", function(t) {
                                t.stopPropagation()
                            })
                        }, n.prototype.destroy = function(t) {
                            t.call(this), this.$dropdownContainer.remove()
                        }, n.prototype.position = function(t, e, n) {
                            e.attr("class", n.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({
                                position: "absolute",
                                top: -999999
                            }), this.$container = n
                        }, n.prototype.render = function(e) {
                            var n = t("<span></span>"),
                                i = e.call(this);
                            return n.append(i), this.$dropdownContainer = n, n
                        }, n.prototype._hideDropdown = function(t) {
                            this.$dropdownContainer.detach()
                        }, n.prototype._attachPositioningHandler = function(n, i) {
                            var r = this,
                                o = "scroll.select2." + i.id,
                                s = "resize.select2." + i.id,
                                a = "orientationchange.select2." + i.id,
                                l = this.$container.parents().filter(e.hasScroll);
                            l.each(function() {
                                t(this).data("select2-scroll-position", {
                                    x: t(this).scrollLeft(),
                                    y: t(this).scrollTop()
                                })
                            }), l.on(o, function(e) {
                                var n = t(this).data("select2-scroll-position");
                                t(this).scrollTop(n.y)
                            }), t(window).on(o + " " + s + " " + a, function(t) {
                                r._positionDropdown(), r._resizeDropdown()
                            })
                        }, n.prototype._detachPositioningHandler = function(n, i) {
                            var r = "scroll.select2." + i.id,
                                o = "resize.select2." + i.id,
                                s = "orientationchange.select2." + i.id,
                                a = this.$container.parents().filter(e.hasScroll);
                            a.off(r), t(window).off(r + " " + o + " " + s)
                        }, n.prototype._positionDropdown = function() {
                            var e = t(window),
                                n = this.$dropdown.hasClass("select2-dropdown--above"),
                                i = this.$dropdown.hasClass("select2-dropdown--below"),
                                r = null,
                                o = this.$container.offset();
                            o.bottom = o.top + this.$container.outerHeight(!1);
                            var s = {
                                height: this.$container.outerHeight(!1)
                            };
                            s.top = o.top, s.bottom = o.top + s.height;
                            var a = {
                                    height: this.$dropdown.outerHeight(!1)
                                },
                                l = {
                                    top: e.scrollTop(),
                                    bottom: e.scrollTop() + e.height()
                                },
                                u = l.top < o.top - a.height,
                                c = l.bottom > o.bottom + a.height,
                                d = {
                                    left: o.left,
                                    top: s.bottom
                                },
                                h = this.$dropdownParent;
                            "static" === h.css("position") && (h = h.offsetParent());
                            var p = h.offset();
                            d.top -= p.top, d.left -= p.left, n || i || (r = "below"), c || !u || n ? !u && c && n && (r = "below") : r = "above", ("above" == r || n && "below" !== r) && (d.top = s.top - p.top - a.height), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(d)
                        }, n.prototype._resizeDropdown = function() {
                            var t = {
                                width: this.$container.outerWidth(!1) + "px"
                            };
                            this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.position = "relative", t.width = "auto"), this.$dropdown.css(t)
                        }, n.prototype._showDropdown = function(t) {
                            this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                        }, n
                    }), e.define("select2/dropdown/minimumResultsForSearch", [], function() {
                        function t(e) {
                            for (var n = 0, i = 0; i < e.length; i++) {
                                var r = e[i];
                                r.children ? n += t(r.children) : n++
                            }
                            return n
                        }

                        function e(t, e, n, i) {
                            this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, n, i)
                        }
                        return e.prototype.showSearch = function(e, n) {
                            return !(t(n.data.results) < this.minimumResultsForSearch) && e.call(this, n)
                        }, e
                    }), e.define("select2/dropdown/selectOnClose", [], function() {
                        function t() {}
                        return t.prototype.bind = function(t, e, n) {
                            var i = this;
                            t.call(this, e, n), e.on("close", function(t) {
                                i._handleSelectOnClose(t)
                            })
                        }, t.prototype._handleSelectOnClose = function(t, e) {
                            if (e && null != e.originalSelect2Event) {
                                var n = e.originalSelect2Event;
                                if ("select" === n._type || "unselect" === n._type) return
                            }
                            var i = this.getHighlightedResults();
                            if (!(i.length < 1)) {
                                var r = i.data("data");
                                null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
                                    data: r
                                })
                            }
                        }, t
                    }), e.define("select2/dropdown/closeOnSelect", [], function() {
                        function t() {}
                        return t.prototype.bind = function(t, e, n) {
                            var i = this;
                            t.call(this, e, n), e.on("select", function(t) {
                                i._selectTriggered(t)
                            }), e.on("unselect", function(t) {
                                i._selectTriggered(t)
                            })
                        }, t.prototype._selectTriggered = function(t, e) {
                            var n = e.originalEvent;
                            n && n.ctrlKey || this.trigger("close", {
                                originalEvent: n,
                                originalSelect2Event: e
                            })
                        }, t
                    }), e.define("select2/i18n/en", [], function() {
                        return {
                            errorLoading: function() {
                                return "The results could not be loaded."
                            },
                            inputTooLong: function(t) {
                                var e = t.input.length - t.maximum,
                                    n = "Please delete " + e + " character";
                                return 1 != e && (n += "s"), n
                            },
                            inputTooShort: function(t) {
                                var e = t.minimum - t.input.length,
                                    n = "Please enter " + e + " or more characters";
                                return n
                            },
                            loadingMore: function() {
                                return "Loading more results…"
                            },
                            maximumSelected: function(t) {
                                var e = "You can only select " + t.maximum + " item";
                                return 1 != t.maximum && (e += "s"), e
                            },
                            noResults: function() {
                                return "No results found"
                            },
                            searching: function() {
                                return "Searching…"
                            }
                        }
                    }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(t, e, n, i, r, o, s, a, l, u, c, d, h, p, f, g, m, v, y, b, w, S, _, T, x, k, C, D, A) {
                        function $() {
                            this.reset()
                        }
                        $.prototype.apply = function(d) {
                            if (d = t.extend(!0, {}, this.defaults, d), null == d.dataAdapter) {
                                if (null != d.ajax ? d.dataAdapter = f : null != d.data ? d.dataAdapter = p : d.dataAdapter = h, d.minimumInputLength > 0 && (d.dataAdapter = u.Decorate(d.dataAdapter, v)), d.maximumInputLength > 0 && (d.dataAdapter = u.Decorate(d.dataAdapter, y)), d.maximumSelectionLength > 0 && (d.dataAdapter = u.Decorate(d.dataAdapter, b)), d.tags && (d.dataAdapter = u.Decorate(d.dataAdapter, g)), null == d.tokenSeparators && null == d.tokenizer || (d.dataAdapter = u.Decorate(d.dataAdapter, m)), null != d.query) {
                                    var A = e(d.amdBase + "compat/query");
                                    d.dataAdapter = u.Decorate(d.dataAdapter, A)
                                }
                                if (null != d.initSelection) {
                                    var $ = e(d.amdBase + "compat/initSelection");
                                    d.dataAdapter = u.Decorate(d.dataAdapter, $)
                                }
                            }
                            if (null == d.resultsAdapter && (d.resultsAdapter = n, null != d.ajax && (d.resultsAdapter = u.Decorate(d.resultsAdapter, T)), null != d.placeholder && (d.resultsAdapter = u.Decorate(d.resultsAdapter, _)), d.selectOnClose && (d.resultsAdapter = u.Decorate(d.resultsAdapter, C))), null == d.dropdownAdapter) {
                                if (d.multiple) d.dropdownAdapter = w;
                                else {
                                    var M = u.Decorate(w, S);
                                    d.dropdownAdapter = M
                                }
                                if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = u.Decorate(d.dropdownAdapter, k)), d.closeOnSelect && (d.dropdownAdapter = u.Decorate(d.dropdownAdapter, D)), null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                                    var E = e(d.amdBase + "compat/dropdownCss");
                                    d.dropdownAdapter = u.Decorate(d.dropdownAdapter, E)
                                }
                                d.dropdownAdapter = u.Decorate(d.dropdownAdapter, x)
                            }
                            if (null == d.selectionAdapter) {
                                if (d.multiple ? d.selectionAdapter = r : d.selectionAdapter = i, null != d.placeholder && (d.selectionAdapter = u.Decorate(d.selectionAdapter, o)), d.allowClear && (d.selectionAdapter = u.Decorate(d.selectionAdapter, s)), d.multiple && (d.selectionAdapter = u.Decorate(d.selectionAdapter, a)), null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                                    var O = e(d.amdBase + "compat/containerCss");
                                    d.selectionAdapter = u.Decorate(d.selectionAdapter, O)
                                }
                                d.selectionAdapter = u.Decorate(d.selectionAdapter, l)
                            }
                            if ("string" == typeof d.language)
                                if (d.language.indexOf("-") > 0) {
                                    var P = d.language.split("-"),
                                        I = P[0];
                                    d.language = [d.language, I]
                                } else d.language = [d.language];
                            if (t.isArray(d.language)) {
                                var F = new c;
                                d.language.push("en");
                                for (var j = d.language, L = 0; L < j.length; L++) {
                                    var N = j[L],
                                        R = {};
                                    try {
                                        R = c.loadPath(N)
                                    } catch (H) {
                                        try {
                                            N = this.defaults.amdLanguageBase + N, R = c.loadPath(N)
                                        } catch (U) {
                                            d.debug && window.console && console.warn;
                                            continue
                                        }
                                    }
                                    F.extend(R)
                                }
                                d.translations = F
                            } else {
                                var W = c.loadPath(this.defaults.amdLanguageBase + "en"),
                                    q = new c(d.language);
                                q.extend(W), d.translations = q
                            }
                            return d
                        }, $.prototype.reset = function() {
                            function e(t) {
                                function e(t) {
                                    return d[t] || t
                                }
                                return t.replace(/[^\u0000-\u007E]/g, e)
                            }

                            function n(i, r) {
                                if ("" === t.trim(i.term)) return r;
                                if (r.children && r.children.length > 0) {
                                    for (var o = t.extend(!0, {}, r), s = r.children.length - 1; s >= 0; s--) {
                                        var a = r.children[s],
                                            l = n(i, a);
                                        null == l && o.children.splice(s, 1)
                                    }
                                    return o.children.length > 0 ? o : n(i, o)
                                }
                                var u = e(r.text).toUpperCase(),
                                    c = e(i.term).toUpperCase();
                                return u.indexOf(c) > -1 ? r : null
                            }
                            this.defaults = {
                                amdBase: "./",
                                amdLanguageBase: "./i18n/",
                                closeOnSelect: !0,
                                debug: !1,
                                dropdownAutoWidth: !1,
                                escapeMarkup: u.escapeMarkup,
                                language: A,
                                matcher: n,
                                minimumInputLength: 0,
                                maximumInputLength: 0,
                                maximumSelectionLength: 0,
                                minimumResultsForSearch: 0,
                                selectOnClose: !1,
                                sorter: function(t) {
                                    return t
                                },
                                templateResult: function(t) {
                                    return t.text
                                },
                                templateSelection: function(t) {
                                    return t.text
                                },
                                theme: "default",
                                width: "resolve"
                            }
                        }, $.prototype.set = function(e, n) {
                            var i = t.camelCase(e),
                                r = {};
                            r[i] = n;
                            var o = u._convertData(r);
                            t.extend(this.defaults, o)
                        };
                        var M = new $;
                        return M
                    }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(t, e, n, i) {
                        function r(e, r) {
                            if (this.options = e, null != r && this.fromElement(r), this.options = n.apply(this.options), r && r.is("input")) {
                                var o = t(this.get("amdBase") + "compat/inputData");
                                this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o)
                            }
                        }
                        return r.prototype.fromElement = function(t) {
                            var n = ["select2"];
                            null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.language && (t.prop("lang") ? this.options.language = t.prop("lang").toLowerCase() : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), t.data("select2Tags") && (this.options.debug && window.console && console.warn, t.data("data", t.data("select2Tags")), t.data("tags", !0)), t.data("ajaxUrl") && (this.options.debug && window.console && console.warn, t.attr("ajax--url", t.data("ajaxUrl")), t.data("ajax--url", t.data("ajaxUrl")));
                            var r = {};
                            r = e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset ? e.extend(!0, {}, t[0].dataset, t.data()) : t.data();
                            var o = e.extend(!0, {}, r);
                            o = i._convertData(o);
                            for (var s in o) e.inArray(s, n) > -1 || (e.isPlainObject(this.options[s]) ? e.extend(this.options[s], o[s]) : this.options[s] = o[s]);
                            return this
                        }, r.prototype.get = function(t) {
                            return this.options[t]
                        }, r.prototype.set = function(t, e) {
                            this.options[t] = e
                        }, r
                    }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(t, e, n, i) {
                        var r = function(t, n) {
                            null != t.data("select2") && t.data("select2").destroy(), this.$element = t, this.id = this._generateId(t), n = n || {}, this.options = new e(n, t), r.__super__.constructor.call(this);
                            var i = t.attr("tabindex") || 0;
                            t.data("old-tabindex", i), t.attr("tabindex", "-1");
                            var o = this.options.get("dataAdapter");
                            this.dataAdapter = new o(t, this.options);
                            var s = this.render();
                            this._placeContainer(s);
                            var a = this.options.get("selectionAdapter");
                            this.selection = new a(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, s);
                            var l = this.options.get("dropdownAdapter");
                            this.dropdown = new l(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, s);
                            var u = this.options.get("resultsAdapter");
                            this.results = new u(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                            var c = this;
                            this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(t) {
                                c.trigger("selection:update", {
                                    data: t
                                })
                            }), t.addClass("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), t.data("select2", this)
                        };
                        return n.Extend(r, n.Observable), r.prototype._generateId = function(t) {
                            var e = "";
                            return e = null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + n.generateChars(2) : n.generateChars(4), e = e.replace(/(:|\.|\[|\]|,)/g, ""), e = "select2-" + e
                        }, r.prototype._placeContainer = function(t) {
                            t.insertAfter(this.$element);
                            var e = this._resolveWidth(this.$element, this.options.get("width"));
                            null != e && t.css("width", e)
                        }, r.prototype._resolveWidth = function(t, e) {
                            var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                            if ("resolve" == e) {
                                var i = this._resolveWidth(t, "style");
                                return null != i ? i : this._resolveWidth(t, "element")
                            }
                            if ("element" == e) {
                                var r = t.outerWidth(!1);
                                return r <= 0 ? "auto" : r + "px"
                            }
                            if ("style" == e) {
                                var o = t.attr("style");
                                if ("string" != typeof o) return null;
                                for (var s = o.split(";"), a = 0, l = s.length; a < l; a += 1) {
                                    var u = s[a].replace(/\s/g, ""),
                                        c = u.match(n);
                                    if (null !== c && c.length >= 1) return c[1]
                                }
                                return null
                            }
                            return e
                        }, r.prototype._bindAdapters = function() {
                            this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                        }, r.prototype._registerDomEvents = function() {
                            var e = this;
                            this.$element.on("change.select2", function() {
                                e.dataAdapter.current(function(t) {
                                    e.trigger("selection:update", {
                                        data: t
                                    })
                                })
                            }), this.$element.on("focus.select2", function(t) {
                                e.trigger("focus", t)
                            }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                            var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                            null != i ? (this._observer = new i(function(n) {
                                t.each(n, e._syncA), t.each(n, e._syncS)
                            }), this._observer.observe(this.$element[0], {
                                attributes: !0,
                                childList: !0,
                                subtree: !1
                            })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", e._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", e._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", e._syncS, !1))
                        }, r.prototype._registerDataEvents = function() {
                            var t = this;
                            this.dataAdapter.on("*", function(e, n) {
                                t.trigger(e, n)
                            })
                        }, r.prototype._registerSelectionEvents = function() {
                            var e = this,
                                n = ["toggle", "focus"];
                            this.selection.on("toggle", function() {
                                e.toggleDropdown()
                            }), this.selection.on("focus", function(t) {
                                e.focus(t)
                            }), this.selection.on("*", function(i, r) {
                                t.inArray(i, n) === -1 && e.trigger(i, r)
                            })
                        }, r.prototype._registerDropdownEvents = function() {
                            var t = this;
                            this.dropdown.on("*", function(e, n) {
                                t.trigger(e, n)
                            })
                        }, r.prototype._registerResultsEvents = function() {
                            var t = this;
                            this.results.on("*", function(e, n) {
                                t.trigger(e, n)
                            })
                        }, r.prototype._registerEvents = function() {
                            var t = this;
                            this.on("open", function() {
                                t.$container.addClass("select2-container--open")
                            }), this.on("close", function() {
                                t.$container.removeClass("select2-container--open")
                            }), this.on("enable", function() {
                                t.$container.removeClass("select2-container--disabled")
                            }), this.on("disable", function() {
                                t.$container.addClass("select2-container--disabled")
                            }), this.on("blur", function() {
                                t.$container.removeClass("select2-container--focus")
                            }), this.on("query", function(e) {
                                t.isOpen() || t.trigger("open", {}), this.dataAdapter.query(e, function(n) {
                                    t.trigger("results:all", {
                                        data: n,
                                        query: e
                                    })
                                })
                            }), this.on("query:append", function(e) {
                                this.dataAdapter.query(e, function(n) {
                                    t.trigger("results:append", {
                                        data: n,
                                        query: e
                                    })
                                })
                            }), this.on("keypress", function(e) {
                                var n = e.which;
                                t.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && e.altKey ? (t.close(), e.preventDefault()) : n === i.ENTER ? (t.trigger("results:select", {}), e.preventDefault()) : n === i.SPACE && e.ctrlKey ? (t.trigger("results:toggle", {}), e.preventDefault()) : n === i.UP ? (t.trigger("results:previous", {}), e.preventDefault()) : n === i.DOWN && (t.trigger("results:next", {}), e.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && e.altKey) && (t.open(), e.preventDefault())
                            })
                        }, r.prototype._syncAttributes = function() {
                            this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                        }, r.prototype._syncSubtree = function(t, e) {
                            var n = !1,
                                i = this;
                            if (!t || !t.target || "OPTION" === t.target.nodeName || "OPTGROUP" === t.target.nodeName) {
                                if (e)
                                    if (e.addedNodes && e.addedNodes.length > 0)
                                        for (var r = 0; r < e.addedNodes.length; r++) {
                                            var o = e.addedNodes[r];
                                            o.selected && (n = !0)
                                        } else e.removedNodes && e.removedNodes.length > 0 && (n = !0);
                                    else n = !0;
                                n && this.dataAdapter.current(function(t) {
                                    i.trigger("selection:update", {
                                        data: t
                                    })
                                })
                            }
                        }, r.prototype.trigger = function(t, e) {
                            var n = r.__super__.trigger,
                                i = {
                                    open: "opening",
                                    close: "closing",
                                    select: "selecting",
                                    unselect: "unselecting"
                                };
                            if (void 0 === e && (e = {}), t in i) {
                                var o = i[t],
                                    s = {
                                        prevented: !1,
                                        name: t,
                                        args: e
                                    };
                                if (n.call(this, o, s), s.prevented) return void(e.prevented = !0)
                            }
                            n.call(this, t, e)
                        }, r.prototype.toggleDropdown = function() {
                            this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                        }, r.prototype.open = function() {
                            this.isOpen() || this.trigger("query", {})
                        }, r.prototype.close = function() {
                            this.isOpen() && this.trigger("close", {})
                        }, r.prototype.isOpen = function() {
                            return this.$container.hasClass("select2-container--open")
                        }, r.prototype.hasFocus = function() {
                            return this.$container.hasClass("select2-container--focus")
                        }, r.prototype.focus = function(t) {
                            this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                        }, r.prototype.enable = function(t) {
                            this.options.get("debug") && window.console && console.warn, null != t && 0 !== t.length || (t = [!0]);
                            var e = !t[0];
                            this.$element.prop("disabled", e)
                        }, r.prototype.data = function() {
                            this.options.get("debug") && arguments.length > 0 && window.console && console.warn;
                            var t = [];
                            return this.dataAdapter.current(function(e) {
                                t = e
                            }), t
                        }, r.prototype.val = function(e) {
                            if (this.options.get("debug") && window.console && console.warn, null == e || 0 === e.length) return this.$element.val();
                            var n = e[0];
                            t.isArray(n) && (n = t.map(n, function(t) {
                                return t.toString()
                            })), this.$element.val(n).trigger("change")
                        }, r.prototype.destroy = function() {
                            this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                        }, r.prototype.render = function() {
                            var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                            return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
                        }, r
                    }), e.define("select2/compat/utils", ["jquery"], function(t) {
                        function e(e, n, i) {
                            var r, o, s = [];
                            r = t.trim(e.attr("class")), r && (r = "" + r, t(r.split(/\s+/)).each(function() {
                                0 === this.indexOf("select2-") && s.push(this)
                            })), r = t.trim(n.attr("class")), r && (r = "" + r, t(r.split(/\s+/)).each(function() {
                                0 !== this.indexOf("select2-") && (o = i(this), null != o && s.push(o))
                            })), e.attr("class", s.join(" "))
                        }
                        return {
                            syncCssClasses: e
                        }
                    }), e.define("select2/compat/containerCss", ["jquery", "./utils"], function(t, e) {
                        function n(t) {
                            return null
                        }

                        function i() {}
                        return i.prototype.render = function(i) {
                            var r = i.call(this),
                                o = this.options.get("containerCssClass") || "";
                            t.isFunction(o) && (o = o(this.$element));
                            var s = this.options.get("adaptContainerCssClass");
                            if (s = s || n, o.indexOf(":all:") !== -1) {
                                o = o.replace(":all:", "");
                                var a = s;
                                s = function(t) {
                                    var e = a(t);
                                    return null != e ? e + " " + t : t
                                }
                            }
                            var l = this.options.get("containerCss") || {};
                            return t.isFunction(l) && (l = l(this.$element)), e.syncCssClasses(r, this.$element, s), r.css(l), r.addClass(o), r
                        }, i
                    }), e.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(t, e) {
                        function n(t) {
                            return null
                        }

                        function i() {}
                        return i.prototype.render = function(i) {
                            var r = i.call(this),
                                o = this.options.get("dropdownCssClass") || "";
                            t.isFunction(o) && (o = o(this.$element));
                            var s = this.options.get("adaptDropdownCssClass");
                            if (s = s || n, o.indexOf(":all:") !== -1) {
                                o = o.replace(":all:", "");
                                var a = s;
                                s = function(t) {
                                    var e = a(t);
                                    return null != e ? e + " " + t : t
                                }
                            }
                            var l = this.options.get("dropdownCss") || {};
                            return t.isFunction(l) && (l = l(this.$element)), e.syncCssClasses(r, this.$element, s), r.css(l), r.addClass(o), r
                        }, i
                    }), e.define("select2/compat/initSelection", ["jquery"], function(t) {
                        function e(t, e, n) {
                            n.get("debug") && window.console && console.warn, this.initSelection = n.get("initSelection"), this._isInitialized = !1, t.call(this, e, n)
                        }
                        return e.prototype.current = function(e, n) {
                            var i = this;
                            return this._isInitialized ? void e.call(this, n) : void this.initSelection.call(null, this.$element, function(e) {
                                i._isInitialized = !0, t.isArray(e) || (e = [e]), n(e)
                            })
                        }, e
                    }), e.define("select2/compat/inputData", ["jquery"], function(t) {
                        function e(t, e, n) {
                            this._currentData = [], this._valueSeparator = n.get("valueSeparator") || ",", "hidden" === e.prop("type") && n.get("debug") && console && console.warn, t.call(this, e, n)
                        }
                        return e.prototype.current = function(e, n) {
                            function i(e, n) {
                                var r = [];
                                return e.selected || t.inArray(e.id, n) !== -1 ? (e.selected = !0, r.push(e)) : e.selected = !1, e.children && r.push.apply(r, i(e.children, n)), r
                            }
                            for (var r = [], o = 0; o < this._currentData.length; o++) {
                                var s = this._currentData[o];
                                r.push.apply(r, i(s, this.$element.val().split(this._valueSeparator)))
                            }
                            n(r)
                        }, e.prototype.select = function(e, n) {
                            if (this.options.get("multiple")) {
                                var i = this.$element.val();
                                i += this._valueSeparator + n.id, this.$element.val(i), this.$element.trigger("change")
                            } else this.current(function(e) {
                                t.map(e, function(t) {
                                    t.selected = !1
                                })
                            }), this.$element.val(n.id), this.$element.trigger("change")
                        }, e.prototype.unselect = function(t, e) {
                            var n = this;
                            e.selected = !1, this.current(function(t) {
                                for (var i = [], r = 0; r < t.length; r++) {
                                    var o = t[r];
                                    e.id != o.id && i.push(o.id)
                                }
                                n.$element.val(i.join(n._valueSeparator)), n.$element.trigger("change")
                            })
                        }, e.prototype.query = function(t, e, n) {
                            for (var i = [], r = 0; r < this._currentData.length; r++) {
                                var o = this._currentData[r],
                                    s = this.matches(e, o);
                                null !== s && i.push(s)
                            }
                            n({
                                results: i
                            })
                        }, e.prototype.addOptions = function(e, n) {
                            var i = t.map(n, function(e) {
                                return t.data(e[0], "data")
                            });
                            this._currentData.push.apply(this._currentData, i)
                        }, e
                    }), e.define("select2/compat/matcher", ["jquery"], function(t) {
                        function e(e) {
                            function n(n, i) {
                                var r = t.extend(!0, {}, i);
                                if (null == n.term || "" === t.trim(n.term)) return r;
                                if (i.children) {
                                    for (var o = i.children.length - 1; o >= 0; o--) {
                                        var s = i.children[o],
                                            a = e(n.term, s.text, s);
                                        a || r.children.splice(o, 1)
                                    }
                                    if (r.children.length > 0) return r
                                }
                                return e(n.term, i.text, i) ? r : null
                            }
                            return n
                        }
                        return e
                    }), e.define("select2/compat/query", [], function() {
                        function t(t, e, n) {
                            n.get("debug") && window.console && console.warn, t.call(this, e, n)
                        }
                        return t.prototype.query = function(t, e, n) {
                            e.callback = n;
                            var i = this.options.get("query");
                            i.call(null, e)
                        }, t
                    }), e.define("select2/dropdown/attachContainer", [], function() {
                        function t(t, e, n) {
                            t.call(this, e, n)
                        }
                        return t.prototype.position = function(t, e, n) {
                            var i = n.find(".dropdown-wrapper");
                            i.append(e), e.addClass("select2-dropdown--below"), n.addClass("select2-container--below")
                        }, t
                    }), e.define("select2/dropdown/stopPropagation", [], function() {
                        function t() {}
                        return t.prototype.bind = function(t, e, n) {
                            t.call(this, e, n);
                            var i = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                            this.$dropdown.on(i.join(" "), function(t) {
                                t.stopPropagation()
                            })
                        }, t
                    }), e.define("select2/selection/stopPropagation", [], function() {
                        function t() {}
                        return t.prototype.bind = function(t, e, n) {
                            t.call(this, e, n);
                            var i = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                            this.$selection.on(i.join(" "), function(t) {
                                t.stopPropagation()
                            })
                        }, t
                    }),
                    function(n) {
                        "function" == typeof e.define && e.define.amd ? e.define("jquery-mousewheel", ["jquery"], n) : "object" == typeof exports ? module.exports = n : n(t)
                    }(function(t) {
                        function e(e) {
                            var s = e || window.event,
                                a = l.call(arguments, 1),
                                u = 0,
                                d = 0,
                                h = 0,
                                p = 0,
                                f = 0,
                                g = 0;
                            if (e = t.event.fix(s), e.type = "mousewheel", "detail" in s && (h = s.detail * -1), "wheelDelta" in s && (h = s.wheelDelta), "wheelDeltaY" in s && (h = s.wheelDeltaY), "wheelDeltaX" in s && (d = s.wheelDeltaX * -1), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (d = h * -1, h = 0), u = 0 === h ? d : h, "deltaY" in s && (h = s.deltaY * -1, u = h), "deltaX" in s && (d = s.deltaX, 0 === h && (u = d * -1)), 0 !== h || 0 !== d) {
                                if (1 === s.deltaMode) {
                                    var m = t.data(this, "mousewheel-line-height");
                                    u *= m, h *= m, d *= m
                                } else if (2 === s.deltaMode) {
                                    var v = t.data(this, "mousewheel-page-height");
                                    u *= v, h *= v, d *= v
                                }
                                if (p = Math.max(Math.abs(h), Math.abs(d)), (!o || p < o) && (o = p, i(s, p) && (o /= 40)), i(s, p) && (u /= 40, d /= 40, h /= 40), u = Math[u >= 1 ? "floor" : "ceil"](u / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), h = Math[h >= 1 ? "floor" : "ceil"](h / o), c.settings.normalizeOffset && this.getBoundingClientRect) {
                                    var y = this.getBoundingClientRect();
                                    f = e.clientX - y.left, g = e.clientY - y.top
                                }
                                return e.deltaX = d, e.deltaY = h, e.deltaFactor = o, e.offsetX = f, e.offsetY = g, e.deltaMode = 0, a.unshift(e, u, d, h), r && clearTimeout(r), r = setTimeout(n, 200), (t.event.dispatch || t.event.handle).apply(this, a)
                            }
                        }

                        function n() {
                            o = null
                        }

                        function i(t, e) {
                            return c.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
                        }
                        var r, o, s = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                            l = Array.prototype.slice;
                        if (t.event.fixHooks)
                            for (var u = s.length; u;) t.event.fixHooks[s[--u]] = t.event.mouseHooks;
                        var c = t.event.special.mousewheel = {
                            version: "3.1.12",
                            setup: function() {
                                if (this.addEventListener)
                                    for (var n = a.length; n;) this.addEventListener(a[--n], e, !1);
                                else this.onmousewheel = e;
                                t.data(this, "mousewheel-line-height", c.getLineHeight(this)), t.data(this, "mousewheel-page-height", c.getPageHeight(this))
                            },
                            teardown: function() {
                                if (this.removeEventListener)
                                    for (var n = a.length; n;) this.removeEventListener(a[--n], e, !1);
                                else this.onmousewheel = null;
                                t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
                            },
                            getLineHeight: function(e) {
                                var n = t(e),
                                    i = n["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                                return i.length || (i = t("body")), parseInt(i.css("fontSize"), 10) || parseInt(n.css("fontSize"), 10) || 16
                            },
                            getPageHeight: function(e) {
                                return t(e).height()
                            },
                            settings: {
                                adjustOldDeltas: !0,
                                normalizeOffset: !0
                            }
                        };
                        t.fn.extend({
                            mousewheel: function(t) {
                                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
                            },
                            unmousewheel: function(t) {
                                return this.unbind("mousewheel", t)
                            }
                        })
                    }), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(t, e, n, i) {
                        if (null == t.fn.select2) {
                            var r = ["open", "close", "destroy"];
                            t.fn.select2 = function(e) {
                                if (e = e || {}, "object" == typeof e) return this.each(function() {
                                    var i = t.extend(!0, {}, e);
                                    new n(t(this), i)
                                }), this;
                                if ("string" == typeof e) {
                                    var i, o = Array.prototype.slice.call(arguments, 1);
                                    return this.each(function() {
                                        var n = t(this).data("select2");
                                        null == n && window.console && console.error, i = n[e].apply(n, o)
                                    }), t.inArray(e, r) > -1 ? this : i
                                }
                                throw new Error("Invalid arguments for Select2: " + e)
                            }
                        }
                        return null == t.fn.select2.defaults && (t.fn.select2.defaults = i), n
                    }), {
                        define: e.define,
                        require: e.require
                    }
            }(),
            n = e.require("jquery.select2");
        return t.fn.select2.amd = e, n
    }),
    function() {
        if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var t = jQuery.fn.select2.amd;
        return t.define("select2/i18n/zh-CN", [], function() {
            return {
                errorLoading: function() {
                    return "无法载入结果。"
                },
                inputTooLong: function(t) {
                    var e = t.input.length - t.maximum,
                        n = "请删除" + e + "个字符";
                    return n
                },
                inputTooShort: function(t) {
                    var e = t.minimum - t.input.length,
                        n = "请再输入至少" + e + "个字符";
                    return n
                },
                loadingMore: function() {
                    return "载入更多结果…"
                },
                maximumSelected: function(t) {
                    var e = "最多只能选择" + t.maximum + "个项目";
                    return e
                },
                noResults: function() {
                    return "未找到结果"
                },
                searching: function() {
                    return "搜索中…"
                }
            }
        }), {
            define: t.define,
            require: t.require
        }
    }(),
    function() {
        if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) var t = jQuery.fn.select2.amd;
        return t.define("select2/i18n/en", [], function() {
            return {
                errorLoading: function() {
                    return "The results could not be loaded."
                },
                inputTooLong: function(t) {
                    var e = t.input.length - t.maximum,
                        n = "Please delete " + e + " character";
                    return 1 != e && (n += "s"), n
                },
                inputTooShort: function(t) {
                    var e = t.minimum - t.input.length,
                        n = "Please enter " + e + " or more characters";
                    return n
                },
                loadingMore: function() {
                    return "Loading more results…"
                },
                maximumSelected: function(t) {
                    var e = "You can only select " + t.maximum + " item";
                    return 1 != t.maximum && (e += "s"), e
                },
                noResults: function() {
                    return "No results found"
                },
                searching: function() {
                    return "Searching…"
                }
            }
        }), {
            define: t.define,
            require: t.require
        }
    }(),
    function(t) {
        var e = {
                dataSelector: '[data-js=":selector:"]',
                jqlite: !0,
                cacheLimit: 10
            },
            n = function() {
                this.cache = [], this.options = e, this.query = function(t) {
                    return this.selector = t, this.boot().execute()
                }, this.getFromCache = function(t) {
                    return isNaN(t) ? this.cache[t + 1] : this.cache
                }
            };
        n.prototype = {
            constructor: n,
            boot: function() {
                return this.dataSelector = e.dataSelector.replace(/:selector:/gi, this.selector), this
            },
            execute: function() {
                return "function" != typeof document.querySelectorAll || this.options.jqlite ? (this.currentElement = t(this.dataSelector), this.currentElement.length && this.manageCache()) : (this.currentElement = document.querySelectorAll(this.dataSelector), this.currentElement && this.manageCache()), this.currentElement
            },
            manageCache: function() {
                this.cache.push(this.currentElement), this.cache.length > this.options.cacheLimit && this.cache.splice(this.cache.length - 1, 1)
            }
        };
        var i = new n;
        t.fn.js = function(t) {
            return i.query(t)
        }, t.fn.js.options = e, t.fn.js.get = function(t) {
            return i.getFromCache(t)
        }
    }(jQuery);
//# sourceMappingURL=vendor.js.map