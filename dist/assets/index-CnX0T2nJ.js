function $m(e, t) {
	for (var n = 0; n < t.length; n++) {
		const r = t[n];
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const i in r)
				if (i !== 'default' && !(i in e)) {
					const o = Object.getOwnPropertyDescriptor(r, i);
					o &&
						Object.defineProperty(
							e,
							i,
							o.get ? o : { enumerable: !0, get: () => r[i] }
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
	);
}
(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
	new MutationObserver((i) => {
		for (const o of i)
			if (o.type === 'childList')
				for (const s of o.addedNodes)
					s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s);
	}).observe(document, { childList: !0, subtree: !0 });
	function n(i) {
		const o = {};
		return (
			i.integrity && (o.integrity = i.integrity),
			i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
			i.crossOrigin === 'use-credentials'
				? (o.credentials = 'include')
				: i.crossOrigin === 'anonymous'
				? (o.credentials = 'omit')
				: (o.credentials = 'same-origin'),
			o
		);
	}
	function r(i) {
		if (i.ep) return;
		i.ep = !0;
		const o = n(i);
		fetch(i.href, o);
	}
})();
function Wm(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
		? e.default
		: e;
}
var Yf = { exports: {} },
	xo = {},
	Xf = { exports: {} },
	N = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xr = Symbol.for('react.element'),
	Hm = Symbol.for('react.portal'),
	Km = Symbol.for('react.fragment'),
	Gm = Symbol.for('react.strict_mode'),
	Qm = Symbol.for('react.profiler'),
	Ym = Symbol.for('react.provider'),
	Xm = Symbol.for('react.context'),
	Zm = Symbol.for('react.forward_ref'),
	qm = Symbol.for('react.suspense'),
	Jm = Symbol.for('react.memo'),
	bm = Symbol.for('react.lazy'),
	yu = Symbol.iterator;
function eg(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (yu && e[yu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var Zf = {
		isMounted: function () {
			return !1;
		},
		enqueueForceUpdate: function () {},
		enqueueReplaceState: function () {},
		enqueueSetState: function () {},
	},
	qf = Object.assign,
	Jf = {};
function Zn(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Jf),
		(this.updater = n || Zf);
}
Zn.prototype.isReactComponent = {};
Zn.prototype.setState = function (e, t) {
	if (typeof e != 'object' && typeof e != 'function' && e != null)
		throw Error(
			'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
		);
	this.updater.enqueueSetState(this, e, t, 'setState');
};
Zn.prototype.forceUpdate = function (e) {
	this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function bf() {}
bf.prototype = Zn.prototype;
function Wl(e, t, n) {
	(this.props = e),
		(this.context = t),
		(this.refs = Jf),
		(this.updater = n || Zf);
}
var Hl = (Wl.prototype = new bf());
Hl.constructor = Wl;
qf(Hl, Zn.prototype);
Hl.isPureReactComponent = !0;
var vu = Array.isArray,
	ed = Object.prototype.hasOwnProperty,
	Kl = { current: null },
	td = { key: !0, ref: !0, __self: !0, __source: !0 };
function nd(e, t, n) {
	var r,
		i = {},
		o = null,
		s = null;
	if (t != null)
		for (r in (t.ref !== void 0 && (s = t.ref),
		t.key !== void 0 && (o = '' + t.key),
		t))
			ed.call(t, r) && !td.hasOwnProperty(r) && (i[r] = t[r]);
	var l = arguments.length - 2;
	if (l === 1) i.children = n;
	else if (1 < l) {
		for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
		i.children = a;
	}
	if (e && e.defaultProps)
		for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
	return {
		$$typeof: Xr,
		type: e,
		key: o,
		ref: s,
		props: i,
		_owner: Kl.current,
	};
}
function tg(e, t) {
	return {
		$$typeof: Xr,
		type: e.type,
		key: t,
		ref: e.ref,
		props: e.props,
		_owner: e._owner,
	};
}
function Gl(e) {
	return typeof e == 'object' && e !== null && e.$$typeof === Xr;
}
function ng(e) {
	var t = { '=': '=0', ':': '=2' };
	return (
		'$' +
		e.replace(/[=:]/g, function (n) {
			return t[n];
		})
	);
}
var wu = /\/+/g;
function Qo(e, t) {
	return typeof e == 'object' && e !== null && e.key != null
		? ng('' + e.key)
		: t.toString(36);
}
function Ei(e, t, n, r, i) {
	var o = typeof e;
	(o === 'undefined' || o === 'boolean') && (e = null);
	var s = !1;
	if (e === null) s = !0;
	else
		switch (o) {
			case 'string':
			case 'number':
				s = !0;
				break;
			case 'object':
				switch (e.$$typeof) {
					case Xr:
					case Hm:
						s = !0;
				}
		}
	if (s)
		return (
			(s = e),
			(i = i(s)),
			(e = r === '' ? '.' + Qo(s, 0) : r),
			vu(i)
				? ((n = ''),
				  e != null && (n = e.replace(wu, '$&/') + '/'),
				  Ei(i, t, n, '', function (u) {
						return u;
				  }))
				: i != null &&
				  (Gl(i) &&
						(i = tg(
							i,
							n +
								(!i.key || (s && s.key === i.key)
									? ''
									: ('' + i.key).replace(wu, '$&/') + '/') +
								e
						)),
				  t.push(i)),
			1
		);
	if (((s = 0), (r = r === '' ? '.' : r + ':'), vu(e)))
		for (var l = 0; l < e.length; l++) {
			o = e[l];
			var a = r + Qo(o, l);
			s += Ei(o, t, n, a, i);
		}
	else if (((a = eg(e)), typeof a == 'function'))
		for (e = a.call(e), l = 0; !(o = e.next()).done; )
			(o = o.value), (a = r + Qo(o, l++)), (s += Ei(o, t, n, a, i));
	else if (o === 'object')
		throw (
			((t = String(e)),
			Error(
				'Objects are not valid as a React child (found: ' +
					(t === '[object Object]'
						? 'object with keys {' + Object.keys(e).join(', ') + '}'
						: t) +
					'). If you meant to render a collection of children, use an array instead.'
			))
		);
	return s;
}
function si(e, t, n) {
	if (e == null) return e;
	var r = [],
		i = 0;
	return (
		Ei(e, r, '', '', function (o) {
			return t.call(n, o, i++);
		}),
		r
	);
}
function rg(e) {
	if (e._status === -1) {
		var t = e._result;
		(t = t()),
			t.then(
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 1), (e._result = n));
				},
				function (n) {
					(e._status === 0 || e._status === -1) &&
						((e._status = 2), (e._result = n));
				}
			),
			e._status === -1 && ((e._status = 0), (e._result = t));
	}
	if (e._status === 1) return e._result.default;
	throw e._result;
}
var ve = { current: null },
	Ri = { transition: null },
	ig = {
		ReactCurrentDispatcher: ve,
		ReactCurrentBatchConfig: Ri,
		ReactCurrentOwner: Kl,
	};
function rd() {
	throw Error('act(...) is not supported in production builds of React.');
}
N.Children = {
	map: si,
	forEach: function (e, t, n) {
		si(
			e,
			function () {
				t.apply(this, arguments);
			},
			n
		);
	},
	count: function (e) {
		var t = 0;
		return (
			si(e, function () {
				t++;
			}),
			t
		);
	},
	toArray: function (e) {
		return (
			si(e, function (t) {
				return t;
			}) || []
		);
	},
	only: function (e) {
		if (!Gl(e))
			throw Error(
				'React.Children.only expected to receive a single React element child.'
			);
		return e;
	},
};
N.Component = Zn;
N.Fragment = Km;
N.Profiler = Qm;
N.PureComponent = Wl;
N.StrictMode = Gm;
N.Suspense = qm;
N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ig;
N.act = rd;
N.cloneElement = function (e, t, n) {
	if (e == null)
		throw Error(
			'React.cloneElement(...): The argument must be a React element, but you passed ' +
				e +
				'.'
		);
	var r = qf({}, e.props),
		i = e.key,
		o = e.ref,
		s = e._owner;
	if (t != null) {
		if (
			(t.ref !== void 0 && ((o = t.ref), (s = Kl.current)),
			t.key !== void 0 && (i = '' + t.key),
			e.type && e.type.defaultProps)
		)
			var l = e.type.defaultProps;
		for (a in t)
			ed.call(t, a) &&
				!td.hasOwnProperty(a) &&
				(r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
	}
	var a = arguments.length - 2;
	if (a === 1) r.children = n;
	else if (1 < a) {
		l = Array(a);
		for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
		r.children = l;
	}
	return { $$typeof: Xr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
N.createContext = function (e) {
	return (
		(e = {
			$$typeof: Xm,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null,
			_defaultValue: null,
			_globalName: null,
		}),
		(e.Provider = { $$typeof: Ym, _context: e }),
		(e.Consumer = e)
	);
};
N.createElement = nd;
N.createFactory = function (e) {
	var t = nd.bind(null, e);
	return (t.type = e), t;
};
N.createRef = function () {
	return { current: null };
};
N.forwardRef = function (e) {
	return { $$typeof: Zm, render: e };
};
N.isValidElement = Gl;
N.lazy = function (e) {
	return { $$typeof: bm, _payload: { _status: -1, _result: e }, _init: rg };
};
N.memo = function (e, t) {
	return { $$typeof: Jm, type: e, compare: t === void 0 ? null : t };
};
N.startTransition = function (e) {
	var t = Ri.transition;
	Ri.transition = {};
	try {
		e();
	} finally {
		Ri.transition = t;
	}
};
N.unstable_act = rd;
N.useCallback = function (e, t) {
	return ve.current.useCallback(e, t);
};
N.useContext = function (e) {
	return ve.current.useContext(e);
};
N.useDebugValue = function () {};
N.useDeferredValue = function (e) {
	return ve.current.useDeferredValue(e);
};
N.useEffect = function (e, t) {
	return ve.current.useEffect(e, t);
};
N.useId = function () {
	return ve.current.useId();
};
N.useImperativeHandle = function (e, t, n) {
	return ve.current.useImperativeHandle(e, t, n);
};
N.useInsertionEffect = function (e, t) {
	return ve.current.useInsertionEffect(e, t);
};
N.useLayoutEffect = function (e, t) {
	return ve.current.useLayoutEffect(e, t);
};
N.useMemo = function (e, t) {
	return ve.current.useMemo(e, t);
};
N.useReducer = function (e, t, n) {
	return ve.current.useReducer(e, t, n);
};
N.useRef = function (e) {
	return ve.current.useRef(e);
};
N.useState = function (e) {
	return ve.current.useState(e);
};
N.useSyncExternalStore = function (e, t, n) {
	return ve.current.useSyncExternalStore(e, t, n);
};
N.useTransition = function () {
	return ve.current.useTransition();
};
N.version = '18.3.1';
Xf.exports = N;
var C = Xf.exports;
const og = Wm(C),
	sg = $m({ __proto__: null, default: og }, [C]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lg = C,
	ag = Symbol.for('react.element'),
	ug = Symbol.for('react.fragment'),
	cg = Object.prototype.hasOwnProperty,
	fg = lg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
	dg = { key: !0, ref: !0, __self: !0, __source: !0 };
function id(e, t, n) {
	var r,
		i = {},
		o = null,
		s = null;
	n !== void 0 && (o = '' + n),
		t.key !== void 0 && (o = '' + t.key),
		t.ref !== void 0 && (s = t.ref);
	for (r in t) cg.call(t, r) && !dg.hasOwnProperty(r) && (i[r] = t[r]);
	if (e && e.defaultProps)
		for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
	return {
		$$typeof: ag,
		type: e,
		key: o,
		ref: s,
		props: i,
		_owner: fg.current,
	};
}
xo.Fragment = ug;
xo.jsx = id;
xo.jsxs = id;
Yf.exports = xo;
var k = Yf.exports,
	od = { exports: {} },
	Ve = {},
	sd = { exports: {} },
	ld = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
	function t(R, D) {
		var _ = R.length;
		R.push(D);
		e: for (; 0 < _; ) {
			var Y = (_ - 1) >>> 1,
				ne = R[Y];
			if (0 < i(ne, D)) (R[Y] = D), (R[_] = ne), (_ = Y);
			else break e;
		}
	}
	function n(R) {
		return R.length === 0 ? null : R[0];
	}
	function r(R) {
		if (R.length === 0) return null;
		var D = R[0],
			_ = R.pop();
		if (_ !== D) {
			R[0] = _;
			e: for (var Y = 0, ne = R.length, ii = ne >>> 1; Y < ii; ) {
				var Kt = 2 * (Y + 1) - 1,
					Go = R[Kt],
					Gt = Kt + 1,
					oi = R[Gt];
				if (0 > i(Go, _))
					Gt < ne && 0 > i(oi, Go)
						? ((R[Y] = oi), (R[Gt] = _), (Y = Gt))
						: ((R[Y] = Go), (R[Kt] = _), (Y = Kt));
				else if (Gt < ne && 0 > i(oi, _)) (R[Y] = oi), (R[Gt] = _), (Y = Gt);
				else break e;
			}
		}
		return D;
	}
	function i(R, D) {
		var _ = R.sortIndex - D.sortIndex;
		return _ !== 0 ? _ : R.id - D.id;
	}
	if (typeof performance == 'object' && typeof performance.now == 'function') {
		var o = performance;
		e.unstable_now = function () {
			return o.now();
		};
	} else {
		var s = Date,
			l = s.now();
		e.unstable_now = function () {
			return s.now() - l;
		};
	}
	var a = [],
		u = [],
		c = 1,
		f = null,
		d = 3,
		g = !1,
		y = !1,
		v = !1,
		S = typeof setTimeout == 'function' ? setTimeout : null,
		p = typeof clearTimeout == 'function' ? clearTimeout : null,
		h = typeof setImmediate < 'u' ? setImmediate : null;
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function m(R) {
		for (var D = n(u); D !== null; ) {
			if (D.callback === null) r(u);
			else if (D.startTime <= R)
				r(u), (D.sortIndex = D.expirationTime), t(a, D);
			else break;
			D = n(u);
		}
	}
	function w(R) {
		if (((v = !1), m(R), !y))
			if (n(a) !== null) (y = !0), ri(x);
			else {
				var D = n(u);
				D !== null && J(w, D.startTime - R);
			}
	}
	function x(R, D) {
		(y = !1), v && ((v = !1), p(T), (T = -1)), (g = !0);
		var _ = d;
		try {
			for (
				m(D), f = n(a);
				f !== null && (!(f.expirationTime > D) || (R && !te()));

			) {
				var Y = f.callback;
				if (typeof Y == 'function') {
					(f.callback = null), (d = f.priorityLevel);
					var ne = Y(f.expirationTime <= D);
					(D = e.unstable_now()),
						typeof ne == 'function' ? (f.callback = ne) : f === n(a) && r(a),
						m(D);
				} else r(a);
				f = n(a);
			}
			if (f !== null) var ii = !0;
			else {
				var Kt = n(u);
				Kt !== null && J(w, Kt.startTime - D), (ii = !1);
			}
			return ii;
		} finally {
			(f = null), (d = _), (g = !1);
		}
	}
	var E = !1,
		A = null,
		T = -1,
		j = 5,
		V = -1;
	function te() {
		return !(e.unstable_now() - V < j);
	}
	function yt() {
		if (A !== null) {
			var R = e.unstable_now();
			V = R;
			var D = !0;
			try {
				D = A(!0, R);
			} finally {
				D ? Ht() : ((E = !1), (A = null));
			}
		} else E = !1;
	}
	var Ht;
	if (typeof h == 'function')
		Ht = function () {
			h(yt);
		};
	else if (typeof MessageChannel < 'u') {
		var er = new MessageChannel(),
			gu = er.port2;
		(er.port1.onmessage = yt),
			(Ht = function () {
				gu.postMessage(null);
			});
	} else
		Ht = function () {
			S(yt, 0);
		};
	function ri(R) {
		(A = R), E || ((E = !0), Ht());
	}
	function J(R, D) {
		T = S(function () {
			R(e.unstable_now());
		}, D);
	}
	(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_Profiling = null),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_cancelCallback = function (R) {
			R.callback = null;
		}),
		(e.unstable_continueExecution = function () {
			y || g || ((y = !0), ri(x));
		}),
		(e.unstable_forceFrameRate = function (R) {
			0 > R || 125 < R
				? console.error(
						'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
				  )
				: (j = 0 < R ? Math.floor(1e3 / R) : 5);
		}),
		(e.unstable_getCurrentPriorityLevel = function () {
			return d;
		}),
		(e.unstable_getFirstCallbackNode = function () {
			return n(a);
		}),
		(e.unstable_next = function (R) {
			switch (d) {
				case 1:
				case 2:
				case 3:
					var D = 3;
					break;
				default:
					D = d;
			}
			var _ = d;
			d = D;
			try {
				return R();
			} finally {
				d = _;
			}
		}),
		(e.unstable_pauseExecution = function () {}),
		(e.unstable_requestPaint = function () {}),
		(e.unstable_runWithPriority = function (R, D) {
			switch (R) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					R = 3;
			}
			var _ = d;
			d = R;
			try {
				return D();
			} finally {
				d = _;
			}
		}),
		(e.unstable_scheduleCallback = function (R, D, _) {
			var Y = e.unstable_now();
			switch (
				(typeof _ == 'object' && _ !== null
					? ((_ = _.delay), (_ = typeof _ == 'number' && 0 < _ ? Y + _ : Y))
					: (_ = Y),
				R)
			) {
				case 1:
					var ne = -1;
					break;
				case 2:
					ne = 250;
					break;
				case 5:
					ne = 1073741823;
					break;
				case 4:
					ne = 1e4;
					break;
				default:
					ne = 5e3;
			}
			return (
				(ne = _ + ne),
				(R = {
					id: c++,
					callback: D,
					priorityLevel: R,
					startTime: _,
					expirationTime: ne,
					sortIndex: -1,
				}),
				_ > Y
					? ((R.sortIndex = _),
					  t(u, R),
					  n(a) === null &&
							R === n(u) &&
							(v ? (p(T), (T = -1)) : (v = !0), J(w, _ - Y)))
					: ((R.sortIndex = ne), t(a, R), y || g || ((y = !0), ri(x))),
				R
			);
		}),
		(e.unstable_shouldYield = te),
		(e.unstable_wrapCallback = function (R) {
			var D = d;
			return function () {
				var _ = d;
				d = D;
				try {
					return R.apply(this, arguments);
				} finally {
					d = _;
				}
			};
		});
})(ld);
sd.exports = ld;
var hg = sd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pg = C,
	Le = hg;
function P(e) {
	for (
		var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
		n < arguments.length;
		n++
	)
		t += '&args[]=' + encodeURIComponent(arguments[n]);
	return (
		'Minified React error #' +
		e +
		'; visit ' +
		t +
		' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
	);
}
var ad = new Set(),
	Ar = {};
function dn(e, t) {
	zn(e, t), zn(e + 'Capture', t);
}
function zn(e, t) {
	for (Ar[e] = t, e = 0; e < t.length; e++) ad.add(t[e]);
}
var dt = !(
		typeof window > 'u' ||
		typeof window.document > 'u' ||
		typeof window.document.createElement > 'u'
	),
	Ds = Object.prototype.hasOwnProperty,
	mg =
		/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
	Su = {},
	xu = {};
function gg(e) {
	return Ds.call(xu, e)
		? !0
		: Ds.call(Su, e)
		? !1
		: mg.test(e)
		? (xu[e] = !0)
		: ((Su[e] = !0), !1);
}
function yg(e, t, n, r) {
	if (n !== null && n.type === 0) return !1;
	switch (typeof t) {
		case 'function':
		case 'symbol':
			return !0;
		case 'boolean':
			return r
				? !1
				: n !== null
				? !n.acceptsBooleans
				: ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
		default:
			return !1;
	}
}
function vg(e, t, n, r) {
	if (t === null || typeof t > 'u' || yg(e, t, n, r)) return !0;
	if (r) return !1;
	if (n !== null)
		switch (n.type) {
			case 3:
				return !t;
			case 4:
				return t === !1;
			case 5:
				return isNaN(t);
			case 6:
				return isNaN(t) || 1 > t;
		}
	return !1;
}
function we(e, t, n, r, i, o, s) {
	(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
		(this.attributeName = r),
		(this.attributeNamespace = i),
		(this.mustUseProperty = n),
		(this.propertyName = e),
		(this.type = t),
		(this.sanitizeURL = o),
		(this.removeEmptyString = s);
}
var ae = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
	.split(' ')
	.forEach(function (e) {
		ae[e] = new we(e, 0, !1, e, null, !1, !1);
	});
[
	['acceptCharset', 'accept-charset'],
	['className', 'class'],
	['htmlFor', 'for'],
	['httpEquiv', 'http-equiv'],
].forEach(function (e) {
	var t = e[0];
	ae[t] = new we(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
	ae[e] = new we(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
	'autoReverse',
	'externalResourcesRequired',
	'focusable',
	'preserveAlpha',
].forEach(function (e) {
	ae[e] = new we(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
	.split(' ')
	.forEach(function (e) {
		ae[e] = new we(e, 3, !1, e.toLowerCase(), null, !1, !1);
	});
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
	ae[e] = new we(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
	ae[e] = new we(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
	ae[e] = new we(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
	ae[e] = new we(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ql = /[\-:]([a-z])/g;
function Yl(e) {
	return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Ql, Yl);
		ae[t] = new we(t, 1, !1, e, null, !1, !1);
	});
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
	.split(' ')
	.forEach(function (e) {
		var t = e.replace(Ql, Yl);
		ae[t] = new we(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
	});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
	var t = e.replace(Ql, Yl);
	ae[t] = new we(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
	ae[e] = new we(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new we(
	'xlinkHref',
	1,
	!1,
	'xlink:href',
	'http://www.w3.org/1999/xlink',
	!0,
	!1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
	ae[e] = new we(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Xl(e, t, n, r) {
	var i = ae.hasOwnProperty(t) ? ae[t] : null;
	(i !== null
		? i.type !== 0
		: r ||
		  !(2 < t.length) ||
		  (t[0] !== 'o' && t[0] !== 'O') ||
		  (t[1] !== 'n' && t[1] !== 'N')) &&
		(vg(t, n, i, r) && (n = null),
		r || i === null
			? gg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
			: i.mustUseProperty
			? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
			: ((t = i.attributeName),
			  (r = i.attributeNamespace),
			  n === null
					? e.removeAttribute(t)
					: ((i = i.type),
					  (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
					  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var gt = pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	li = Symbol.for('react.element'),
	gn = Symbol.for('react.portal'),
	yn = Symbol.for('react.fragment'),
	Zl = Symbol.for('react.strict_mode'),
	_s = Symbol.for('react.profiler'),
	ud = Symbol.for('react.provider'),
	cd = Symbol.for('react.context'),
	ql = Symbol.for('react.forward_ref'),
	Ns = Symbol.for('react.suspense'),
	js = Symbol.for('react.suspense_list'),
	Jl = Symbol.for('react.memo'),
	St = Symbol.for('react.lazy'),
	fd = Symbol.for('react.offscreen'),
	Pu = Symbol.iterator;
function tr(e) {
	return e === null || typeof e != 'object'
		? null
		: ((e = (Pu && e[Pu]) || e['@@iterator']),
		  typeof e == 'function' ? e : null);
}
var G = Object.assign,
	Yo;
function cr(e) {
	if (Yo === void 0)
		try {
			throw Error();
		} catch (n) {
			var t = n.stack.trim().match(/\n( *(at )?)/);
			Yo = (t && t[1]) || '';
		}
	return (
		`
` +
		Yo +
		e
	);
}
var Xo = !1;
function Zo(e, t) {
	if (!e || Xo) return '';
	Xo = !0;
	var n = Error.prepareStackTrace;
	Error.prepareStackTrace = void 0;
	try {
		if (t)
			if (
				((t = function () {
					throw Error();
				}),
				Object.defineProperty(t.prototype, 'props', {
					set: function () {
						throw Error();
					},
				}),
				typeof Reflect == 'object' && Reflect.construct)
			) {
				try {
					Reflect.construct(t, []);
				} catch (u) {
					var r = u;
				}
				Reflect.construct(e, [], t);
			} else {
				try {
					t.call();
				} catch (u) {
					r = u;
				}
				e.call(t.prototype);
			}
		else {
			try {
				throw Error();
			} catch (u) {
				r = u;
			}
			e();
		}
	} catch (u) {
		if (u && r && typeof u.stack == 'string') {
			for (
				var i = u.stack.split(`
`),
					o = r.stack.split(`
`),
					s = i.length - 1,
					l = o.length - 1;
				1 <= s && 0 <= l && i[s] !== o[l];

			)
				l--;
			for (; 1 <= s && 0 <= l; s--, l--)
				if (i[s] !== o[l]) {
					if (s !== 1 || l !== 1)
						do
							if ((s--, l--, 0 > l || i[s] !== o[l])) {
								var a =
									`
` + i[s].replace(' at new ', ' at ');
								return (
									e.displayName &&
										a.includes('<anonymous>') &&
										(a = a.replace('<anonymous>', e.displayName)),
									a
								);
							}
						while (1 <= s && 0 <= l);
					break;
				}
		}
	} finally {
		(Xo = !1), (Error.prepareStackTrace = n);
	}
	return (e = e ? e.displayName || e.name : '') ? cr(e) : '';
}
function wg(e) {
	switch (e.tag) {
		case 5:
			return cr(e.type);
		case 16:
			return cr('Lazy');
		case 13:
			return cr('Suspense');
		case 19:
			return cr('SuspenseList');
		case 0:
		case 2:
		case 15:
			return (e = Zo(e.type, !1)), e;
		case 11:
			return (e = Zo(e.type.render, !1)), e;
		case 1:
			return (e = Zo(e.type, !0)), e;
		default:
			return '';
	}
}
function Fs(e) {
	if (e == null) return null;
	if (typeof e == 'function') return e.displayName || e.name || null;
	if (typeof e == 'string') return e;
	switch (e) {
		case yn:
			return 'Fragment';
		case gn:
			return 'Portal';
		case _s:
			return 'Profiler';
		case Zl:
			return 'StrictMode';
		case Ns:
			return 'Suspense';
		case js:
			return 'SuspenseList';
	}
	if (typeof e == 'object')
		switch (e.$$typeof) {
			case cd:
				return (e.displayName || 'Context') + '.Consumer';
			case ud:
				return (e._context.displayName || 'Context') + '.Provider';
			case ql:
				var t = e.render;
				return (
					(e = e.displayName),
					e ||
						((e = t.displayName || t.name || ''),
						(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
					e
				);
			case Jl:
				return (
					(t = e.displayName || null), t !== null ? t : Fs(e.type) || 'Memo'
				);
			case St:
				(t = e._payload), (e = e._init);
				try {
					return Fs(e(t));
				} catch {}
		}
	return null;
}
function Sg(e) {
	var t = e.type;
	switch (e.tag) {
		case 24:
			return 'Cache';
		case 9:
			return (t.displayName || 'Context') + '.Consumer';
		case 10:
			return (t._context.displayName || 'Context') + '.Provider';
		case 18:
			return 'DehydratedFragment';
		case 11:
			return (
				(e = t.render),
				(e = e.displayName || e.name || ''),
				t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
			);
		case 7:
			return 'Fragment';
		case 5:
			return t;
		case 4:
			return 'Portal';
		case 3:
			return 'Root';
		case 6:
			return 'Text';
		case 16:
			return Fs(t);
		case 8:
			return t === Zl ? 'StrictMode' : 'Mode';
		case 22:
			return 'Offscreen';
		case 12:
			return 'Profiler';
		case 21:
			return 'Scope';
		case 13:
			return 'Suspense';
		case 19:
			return 'SuspenseList';
		case 25:
			return 'TracingMarker';
		case 1:
		case 0:
		case 17:
		case 2:
		case 14:
		case 15:
			if (typeof t == 'function') return t.displayName || t.name || null;
			if (typeof t == 'string') return t;
	}
	return null;
}
function jt(e) {
	switch (typeof e) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'undefined':
			return e;
		case 'object':
			return e;
		default:
			return '';
	}
}
function dd(e) {
	var t = e.type;
	return (
		(e = e.nodeName) &&
		e.toLowerCase() === 'input' &&
		(t === 'checkbox' || t === 'radio')
	);
}
function xg(e) {
	var t = dd(e) ? 'checked' : 'value',
		n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
		r = '' + e[t];
	if (
		!e.hasOwnProperty(t) &&
		typeof n < 'u' &&
		typeof n.get == 'function' &&
		typeof n.set == 'function'
	) {
		var i = n.get,
			o = n.set;
		return (
			Object.defineProperty(e, t, {
				configurable: !0,
				get: function () {
					return i.call(this);
				},
				set: function (s) {
					(r = '' + s), o.call(this, s);
				},
			}),
			Object.defineProperty(e, t, { enumerable: n.enumerable }),
			{
				getValue: function () {
					return r;
				},
				setValue: function (s) {
					r = '' + s;
				},
				stopTracking: function () {
					(e._valueTracker = null), delete e[t];
				},
			}
		);
	}
}
function ai(e) {
	e._valueTracker || (e._valueTracker = xg(e));
}
function hd(e) {
	if (!e) return !1;
	var t = e._valueTracker;
	if (!t) return !0;
	var n = t.getValue(),
		r = '';
	return (
		e && (r = dd(e) ? (e.checked ? 'true' : 'false') : e.value),
		(e = r),
		e !== n ? (t.setValue(e), !0) : !1
	);
}
function Ui(e) {
	if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
		return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Os(e, t) {
	var n = t.checked;
	return G({}, t, {
		defaultChecked: void 0,
		defaultValue: void 0,
		value: void 0,
		checked: n ?? e._wrapperState.initialChecked,
	});
}
function Cu(e, t) {
	var n = t.defaultValue == null ? '' : t.defaultValue,
		r = t.checked != null ? t.checked : t.defaultChecked;
	(n = jt(t.value != null ? t.value : n)),
		(e._wrapperState = {
			initialChecked: r,
			initialValue: n,
			controlled:
				t.type === 'checkbox' || t.type === 'radio'
					? t.checked != null
					: t.value != null,
		});
}
function pd(e, t) {
	(t = t.checked), t != null && Xl(e, 'checked', t, !1);
}
function Is(e, t) {
	pd(e, t);
	var n = jt(t.value),
		r = t.type;
	if (n != null)
		r === 'number'
			? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
			: e.value !== '' + n && (e.value = '' + n);
	else if (r === 'submit' || r === 'reset') {
		e.removeAttribute('value');
		return;
	}
	t.hasOwnProperty('value')
		? Bs(e, t.type, n)
		: t.hasOwnProperty('defaultValue') && Bs(e, t.type, jt(t.defaultValue)),
		t.checked == null &&
			t.defaultChecked != null &&
			(e.defaultChecked = !!t.defaultChecked);
}
function Tu(e, t, n) {
	if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
		var r = t.type;
		if (
			!(
				(r !== 'submit' && r !== 'reset') ||
				(t.value !== void 0 && t.value !== null)
			)
		)
			return;
		(t = '' + e._wrapperState.initialValue),
			n || t === e.value || (e.value = t),
			(e.defaultValue = t);
	}
	(n = e.name),
		n !== '' && (e.name = ''),
		(e.defaultChecked = !!e._wrapperState.initialChecked),
		n !== '' && (e.name = n);
}
function Bs(e, t, n) {
	(t !== 'number' || Ui(e.ownerDocument) !== e) &&
		(n == null
			? (e.defaultValue = '' + e._wrapperState.initialValue)
			: e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var fr = Array.isArray;
function _n(e, t, n, r) {
	if (((e = e.options), t)) {
		t = {};
		for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0;
		for (n = 0; n < e.length; n++)
			(i = t.hasOwnProperty('$' + e[n].value)),
				e[n].selected !== i && (e[n].selected = i),
				i && r && (e[n].defaultSelected = !0);
	} else {
		for (n = '' + jt(n), t = null, i = 0; i < e.length; i++) {
			if (e[i].value === n) {
				(e[i].selected = !0), r && (e[i].defaultSelected = !0);
				return;
			}
			t !== null || e[i].disabled || (t = e[i]);
		}
		t !== null && (t.selected = !0);
	}
}
function zs(e, t) {
	if (t.dangerouslySetInnerHTML != null) throw Error(P(91));
	return G({}, t, {
		value: void 0,
		defaultValue: void 0,
		children: '' + e._wrapperState.initialValue,
	});
}
function ku(e, t) {
	var n = t.value;
	if (n == null) {
		if (((n = t.children), (t = t.defaultValue), n != null)) {
			if (t != null) throw Error(P(92));
			if (fr(n)) {
				if (1 < n.length) throw Error(P(93));
				n = n[0];
			}
			t = n;
		}
		t == null && (t = ''), (n = t);
	}
	e._wrapperState = { initialValue: jt(n) };
}
function md(e, t) {
	var n = jt(t.value),
		r = jt(t.defaultValue);
	n != null &&
		((n = '' + n),
		n !== e.value && (e.value = n),
		t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
		r != null && (e.defaultValue = '' + r);
}
function Eu(e) {
	var t = e.textContent;
	t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function gd(e) {
	switch (e) {
		case 'svg':
			return 'http://www.w3.org/2000/svg';
		case 'math':
			return 'http://www.w3.org/1998/Math/MathML';
		default:
			return 'http://www.w3.org/1999/xhtml';
	}
}
function Us(e, t) {
	return e == null || e === 'http://www.w3.org/1999/xhtml'
		? gd(t)
		: e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
		? 'http://www.w3.org/1999/xhtml'
		: e;
}
var ui,
	yd = (function (e) {
		return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
			? function (t, n, r, i) {
					MSApp.execUnsafeLocalFunction(function () {
						return e(t, n, r, i);
					});
			  }
			: e;
	})(function (e, t) {
		if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
			e.innerHTML = t;
		else {
			for (
				ui = ui || document.createElement('div'),
					ui.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
					t = ui.firstChild;
				e.firstChild;

			)
				e.removeChild(e.firstChild);
			for (; t.firstChild; ) e.appendChild(t.firstChild);
		}
	});
function Lr(e, t) {
	if (t) {
		var n = e.firstChild;
		if (n && n === e.lastChild && n.nodeType === 3) {
			n.nodeValue = t;
			return;
		}
	}
	e.textContent = t;
}
var gr = {
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
		strokeWidth: !0,
	},
	Pg = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(gr).forEach(function (e) {
	Pg.forEach(function (t) {
		(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (gr[t] = gr[e]);
	});
});
function vd(e, t, n) {
	return t == null || typeof t == 'boolean' || t === ''
		? ''
		: n || typeof t != 'number' || t === 0 || (gr.hasOwnProperty(e) && gr[e])
		? ('' + t).trim()
		: t + 'px';
}
function wd(e, t) {
	e = e.style;
	for (var n in t)
		if (t.hasOwnProperty(n)) {
			var r = n.indexOf('--') === 0,
				i = vd(n, t[n], r);
			n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i);
		}
}
var Cg = G(
	{ menuitem: !0 },
	{
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
		wbr: !0,
	}
);
function $s(e, t) {
	if (t) {
		if (Cg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
			throw Error(P(137, e));
		if (t.dangerouslySetInnerHTML != null) {
			if (t.children != null) throw Error(P(60));
			if (
				typeof t.dangerouslySetInnerHTML != 'object' ||
				!('__html' in t.dangerouslySetInnerHTML)
			)
				throw Error(P(61));
		}
		if (t.style != null && typeof t.style != 'object') throw Error(P(62));
	}
}
function Ws(e, t) {
	if (e.indexOf('-') === -1) return typeof t.is == 'string';
	switch (e) {
		case 'annotation-xml':
		case 'color-profile':
		case 'font-face':
		case 'font-face-src':
		case 'font-face-uri':
		case 'font-face-format':
		case 'font-face-name':
		case 'missing-glyph':
			return !1;
		default:
			return !0;
	}
}
var Hs = null;
function bl(e) {
	return (
		(e = e.target || e.srcElement || window),
		e.correspondingUseElement && (e = e.correspondingUseElement),
		e.nodeType === 3 ? e.parentNode : e
	);
}
var Ks = null,
	Nn = null,
	jn = null;
function Ru(e) {
	if ((e = Jr(e))) {
		if (typeof Ks != 'function') throw Error(P(280));
		var t = e.stateNode;
		t && ((t = Eo(t)), Ks(e.stateNode, e.type, t));
	}
}
function Sd(e) {
	Nn ? (jn ? jn.push(e) : (jn = [e])) : (Nn = e);
}
function xd() {
	if (Nn) {
		var e = Nn,
			t = jn;
		if (((jn = Nn = null), Ru(e), t)) for (e = 0; e < t.length; e++) Ru(t[e]);
	}
}
function Pd(e, t) {
	return e(t);
}
function Cd() {}
var qo = !1;
function Td(e, t, n) {
	if (qo) return e(t, n);
	qo = !0;
	try {
		return Pd(e, t, n);
	} finally {
		(qo = !1), (Nn !== null || jn !== null) && (Cd(), xd());
	}
}
function Mr(e, t) {
	var n = e.stateNode;
	if (n === null) return null;
	var r = Eo(n);
	if (r === null) return null;
	n = r[t];
	e: switch (t) {
		case 'onClick':
		case 'onClickCapture':
		case 'onDoubleClick':
		case 'onDoubleClickCapture':
		case 'onMouseDown':
		case 'onMouseDownCapture':
		case 'onMouseMove':
		case 'onMouseMoveCapture':
		case 'onMouseUp':
		case 'onMouseUpCapture':
		case 'onMouseEnter':
			(r = !r.disabled) ||
				((e = e.type),
				(r = !(
					e === 'button' ||
					e === 'input' ||
					e === 'select' ||
					e === 'textarea'
				))),
				(e = !r);
			break e;
		default:
			e = !1;
	}
	if (e) return null;
	if (n && typeof n != 'function') throw Error(P(231, t, typeof n));
	return n;
}
var Gs = !1;
if (dt)
	try {
		var nr = {};
		Object.defineProperty(nr, 'passive', {
			get: function () {
				Gs = !0;
			},
		}),
			window.addEventListener('test', nr, nr),
			window.removeEventListener('test', nr, nr);
	} catch {
		Gs = !1;
	}
function Tg(e, t, n, r, i, o, s, l, a) {
	var u = Array.prototype.slice.call(arguments, 3);
	try {
		t.apply(n, u);
	} catch (c) {
		this.onError(c);
	}
}
var yr = !1,
	$i = null,
	Wi = !1,
	Qs = null,
	kg = {
		onError: function (e) {
			(yr = !0), ($i = e);
		},
	};
function Eg(e, t, n, r, i, o, s, l, a) {
	(yr = !1), ($i = null), Tg.apply(kg, arguments);
}
function Rg(e, t, n, r, i, o, s, l, a) {
	if ((Eg.apply(this, arguments), yr)) {
		if (yr) {
			var u = $i;
			(yr = !1), ($i = null);
		} else throw Error(P(198));
		Wi || ((Wi = !0), (Qs = u));
	}
}
function hn(e) {
	var t = e,
		n = e;
	if (e.alternate) for (; t.return; ) t = t.return;
	else {
		e = t;
		do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
		while (e);
	}
	return t.tag === 3 ? n : null;
}
function kd(e) {
	if (e.tag === 13) {
		var t = e.memoizedState;
		if (
			(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
			t !== null)
		)
			return t.dehydrated;
	}
	return null;
}
function Au(e) {
	if (hn(e) !== e) throw Error(P(188));
}
function Ag(e) {
	var t = e.alternate;
	if (!t) {
		if (((t = hn(e)), t === null)) throw Error(P(188));
		return t !== e ? null : e;
	}
	for (var n = e, r = t; ; ) {
		var i = n.return;
		if (i === null) break;
		var o = i.alternate;
		if (o === null) {
			if (((r = i.return), r !== null)) {
				n = r;
				continue;
			}
			break;
		}
		if (i.child === o.child) {
			for (o = i.child; o; ) {
				if (o === n) return Au(i), e;
				if (o === r) return Au(i), t;
				o = o.sibling;
			}
			throw Error(P(188));
		}
		if (n.return !== r.return) (n = i), (r = o);
		else {
			for (var s = !1, l = i.child; l; ) {
				if (l === n) {
					(s = !0), (n = i), (r = o);
					break;
				}
				if (l === r) {
					(s = !0), (r = i), (n = o);
					break;
				}
				l = l.sibling;
			}
			if (!s) {
				for (l = o.child; l; ) {
					if (l === n) {
						(s = !0), (n = o), (r = i);
						break;
					}
					if (l === r) {
						(s = !0), (r = o), (n = i);
						break;
					}
					l = l.sibling;
				}
				if (!s) throw Error(P(189));
			}
		}
		if (n.alternate !== r) throw Error(P(190));
	}
	if (n.tag !== 3) throw Error(P(188));
	return n.stateNode.current === n ? e : t;
}
function Ed(e) {
	return (e = Ag(e)), e !== null ? Rd(e) : null;
}
function Rd(e) {
	if (e.tag === 5 || e.tag === 6) return e;
	for (e = e.child; e !== null; ) {
		var t = Rd(e);
		if (t !== null) return t;
		e = e.sibling;
	}
	return null;
}
var Ad = Le.unstable_scheduleCallback,
	Lu = Le.unstable_cancelCallback,
	Lg = Le.unstable_shouldYield,
	Mg = Le.unstable_requestPaint,
	Z = Le.unstable_now,
	Vg = Le.unstable_getCurrentPriorityLevel,
	ea = Le.unstable_ImmediatePriority,
	Ld = Le.unstable_UserBlockingPriority,
	Hi = Le.unstable_NormalPriority,
	Dg = Le.unstable_LowPriority,
	Md = Le.unstable_IdlePriority,
	Po = null,
	Je = null;
function _g(e) {
	if (Je && typeof Je.onCommitFiberRoot == 'function')
		try {
			Je.onCommitFiberRoot(Po, e, void 0, (e.current.flags & 128) === 128);
		} catch {}
}
var Ge = Math.clz32 ? Math.clz32 : Fg,
	Ng = Math.log,
	jg = Math.LN2;
function Fg(e) {
	return (e >>>= 0), e === 0 ? 32 : (31 - ((Ng(e) / jg) | 0)) | 0;
}
var ci = 64,
	fi = 4194304;
function dr(e) {
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
			return e;
	}
}
function Ki(e, t) {
	var n = e.pendingLanes;
	if (n === 0) return 0;
	var r = 0,
		i = e.suspendedLanes,
		o = e.pingedLanes,
		s = n & 268435455;
	if (s !== 0) {
		var l = s & ~i;
		l !== 0 ? (r = dr(l)) : ((o &= s), o !== 0 && (r = dr(o)));
	} else (s = n & ~i), s !== 0 ? (r = dr(s)) : o !== 0 && (r = dr(o));
	if (r === 0) return 0;
	if (
		t !== 0 &&
		t !== r &&
		!(t & i) &&
		((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
	)
		return t;
	if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
		for (e = e.entanglements, t &= r; 0 < t; )
			(n = 31 - Ge(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
	return r;
}
function Og(e, t) {
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
			return -1;
	}
}
function Ig(e, t) {
	for (
		var n = e.suspendedLanes,
			r = e.pingedLanes,
			i = e.expirationTimes,
			o = e.pendingLanes;
		0 < o;

	) {
		var s = 31 - Ge(o),
			l = 1 << s,
			a = i[s];
		a === -1
			? (!(l & n) || l & r) && (i[s] = Og(l, t))
			: a <= t && (e.expiredLanes |= l),
			(o &= ~l);
	}
}
function Ys(e) {
	return (
		(e = e.pendingLanes & -1073741825),
		e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
	);
}
function Vd() {
	var e = ci;
	return (ci <<= 1), !(ci & 4194240) && (ci = 64), e;
}
function Jo(e) {
	for (var t = [], n = 0; 31 > n; n++) t.push(e);
	return t;
}
function Zr(e, t, n) {
	(e.pendingLanes |= t),
		t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
		(e = e.eventTimes),
		(t = 31 - Ge(t)),
		(e[t] = n);
}
function Bg(e, t) {
	var n = e.pendingLanes & ~t;
	(e.pendingLanes = t),
		(e.suspendedLanes = 0),
		(e.pingedLanes = 0),
		(e.expiredLanes &= t),
		(e.mutableReadLanes &= t),
		(e.entangledLanes &= t),
		(t = e.entanglements);
	var r = e.eventTimes;
	for (e = e.expirationTimes; 0 < n; ) {
		var i = 31 - Ge(n),
			o = 1 << i;
		(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
	}
}
function ta(e, t) {
	var n = (e.entangledLanes |= t);
	for (e = e.entanglements; n; ) {
		var r = 31 - Ge(n),
			i = 1 << r;
		(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
	}
}
var O = 0;
function Dd(e) {
	return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var _d,
	na,
	Nd,
	jd,
	Fd,
	Xs = !1,
	di = [],
	Rt = null,
	At = null,
	Lt = null,
	Vr = new Map(),
	Dr = new Map(),
	Pt = [],
	zg =
		'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
			' '
		);
function Mu(e, t) {
	switch (e) {
		case 'focusin':
		case 'focusout':
			Rt = null;
			break;
		case 'dragenter':
		case 'dragleave':
			At = null;
			break;
		case 'mouseover':
		case 'mouseout':
			Lt = null;
			break;
		case 'pointerover':
		case 'pointerout':
			Vr.delete(t.pointerId);
			break;
		case 'gotpointercapture':
		case 'lostpointercapture':
			Dr.delete(t.pointerId);
	}
}
function rr(e, t, n, r, i, o) {
	return e === null || e.nativeEvent !== o
		? ((e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: o,
				targetContainers: [i],
		  }),
		  t !== null && ((t = Jr(t)), t !== null && na(t)),
		  e)
		: ((e.eventSystemFlags |= r),
		  (t = e.targetContainers),
		  i !== null && t.indexOf(i) === -1 && t.push(i),
		  e);
}
function Ug(e, t, n, r, i) {
	switch (t) {
		case 'focusin':
			return (Rt = rr(Rt, e, t, n, r, i)), !0;
		case 'dragenter':
			return (At = rr(At, e, t, n, r, i)), !0;
		case 'mouseover':
			return (Lt = rr(Lt, e, t, n, r, i)), !0;
		case 'pointerover':
			var o = i.pointerId;
			return Vr.set(o, rr(Vr.get(o) || null, e, t, n, r, i)), !0;
		case 'gotpointercapture':
			return (
				(o = i.pointerId), Dr.set(o, rr(Dr.get(o) || null, e, t, n, r, i)), !0
			);
	}
	return !1;
}
function Od(e) {
	var t = Jt(e.target);
	if (t !== null) {
		var n = hn(t);
		if (n !== null) {
			if (((t = n.tag), t === 13)) {
				if (((t = kd(n)), t !== null)) {
					(e.blockedOn = t),
						Fd(e.priority, function () {
							Nd(n);
						});
					return;
				}
			} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
				e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
				return;
			}
		}
	}
	e.blockedOn = null;
}
function Ai(e) {
	if (e.blockedOn !== null) return !1;
	for (var t = e.targetContainers; 0 < t.length; ) {
		var n = Zs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
		if (n === null) {
			n = e.nativeEvent;
			var r = new n.constructor(n.type, n);
			(Hs = r), n.target.dispatchEvent(r), (Hs = null);
		} else return (t = Jr(n)), t !== null && na(t), (e.blockedOn = n), !1;
		t.shift();
	}
	return !0;
}
function Vu(e, t, n) {
	Ai(e) && n.delete(t);
}
function $g() {
	(Xs = !1),
		Rt !== null && Ai(Rt) && (Rt = null),
		At !== null && Ai(At) && (At = null),
		Lt !== null && Ai(Lt) && (Lt = null),
		Vr.forEach(Vu),
		Dr.forEach(Vu);
}
function ir(e, t) {
	e.blockedOn === t &&
		((e.blockedOn = null),
		Xs ||
			((Xs = !0),
			Le.unstable_scheduleCallback(Le.unstable_NormalPriority, $g)));
}
function _r(e) {
	function t(i) {
		return ir(i, e);
	}
	if (0 < di.length) {
		ir(di[0], e);
		for (var n = 1; n < di.length; n++) {
			var r = di[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
	}
	for (
		Rt !== null && ir(Rt, e),
			At !== null && ir(At, e),
			Lt !== null && ir(Lt, e),
			Vr.forEach(t),
			Dr.forEach(t),
			n = 0;
		n < Pt.length;
		n++
	)
		(r = Pt[n]), r.blockedOn === e && (r.blockedOn = null);
	for (; 0 < Pt.length && ((n = Pt[0]), n.blockedOn === null); )
		Od(n), n.blockedOn === null && Pt.shift();
}
var Fn = gt.ReactCurrentBatchConfig,
	Gi = !0;
function Wg(e, t, n, r) {
	var i = O,
		o = Fn.transition;
	Fn.transition = null;
	try {
		(O = 1), ra(e, t, n, r);
	} finally {
		(O = i), (Fn.transition = o);
	}
}
function Hg(e, t, n, r) {
	var i = O,
		o = Fn.transition;
	Fn.transition = null;
	try {
		(O = 4), ra(e, t, n, r);
	} finally {
		(O = i), (Fn.transition = o);
	}
}
function ra(e, t, n, r) {
	if (Gi) {
		var i = Zs(e, t, n, r);
		if (i === null) as(e, t, r, Qi, n), Mu(e, r);
		else if (Ug(i, e, t, n, r)) r.stopPropagation();
		else if ((Mu(e, r), t & 4 && -1 < zg.indexOf(e))) {
			for (; i !== null; ) {
				var o = Jr(i);
				if (
					(o !== null && _d(o),
					(o = Zs(e, t, n, r)),
					o === null && as(e, t, r, Qi, n),
					o === i)
				)
					break;
				i = o;
			}
			i !== null && r.stopPropagation();
		} else as(e, t, r, null, n);
	}
}
var Qi = null;
function Zs(e, t, n, r) {
	if (((Qi = null), (e = bl(r)), (e = Jt(e)), e !== null))
		if (((t = hn(e)), t === null)) e = null;
		else if (((n = t.tag), n === 13)) {
			if (((e = kd(t)), e !== null)) return e;
			e = null;
		} else if (n === 3) {
			if (t.stateNode.current.memoizedState.isDehydrated)
				return t.tag === 3 ? t.stateNode.containerInfo : null;
			e = null;
		} else t !== e && (e = null);
	return (Qi = e), null;
}
function Id(e) {
	switch (e) {
		case 'cancel':
		case 'click':
		case 'close':
		case 'contextmenu':
		case 'copy':
		case 'cut':
		case 'auxclick':
		case 'dblclick':
		case 'dragend':
		case 'dragstart':
		case 'drop':
		case 'focusin':
		case 'focusout':
		case 'input':
		case 'invalid':
		case 'keydown':
		case 'keypress':
		case 'keyup':
		case 'mousedown':
		case 'mouseup':
		case 'paste':
		case 'pause':
		case 'play':
		case 'pointercancel':
		case 'pointerdown':
		case 'pointerup':
		case 'ratechange':
		case 'reset':
		case 'resize':
		case 'seeked':
		case 'submit':
		case 'touchcancel':
		case 'touchend':
		case 'touchstart':
		case 'volumechange':
		case 'change':
		case 'selectionchange':
		case 'textInput':
		case 'compositionstart':
		case 'compositionend':
		case 'compositionupdate':
		case 'beforeblur':
		case 'afterblur':
		case 'beforeinput':
		case 'blur':
		case 'fullscreenchange':
		case 'focus':
		case 'hashchange':
		case 'popstate':
		case 'select':
		case 'selectstart':
			return 1;
		case 'drag':
		case 'dragenter':
		case 'dragexit':
		case 'dragleave':
		case 'dragover':
		case 'mousemove':
		case 'mouseout':
		case 'mouseover':
		case 'pointermove':
		case 'pointerout':
		case 'pointerover':
		case 'scroll':
		case 'toggle':
		case 'touchmove':
		case 'wheel':
		case 'mouseenter':
		case 'mouseleave':
		case 'pointerenter':
		case 'pointerleave':
			return 4;
		case 'message':
			switch (Vg()) {
				case ea:
					return 1;
				case Ld:
					return 4;
				case Hi:
				case Dg:
					return 16;
				case Md:
					return 536870912;
				default:
					return 16;
			}
		default:
			return 16;
	}
}
var Tt = null,
	ia = null,
	Li = null;
function Bd() {
	if (Li) return Li;
	var e,
		t = ia,
		n = t.length,
		r,
		i = 'value' in Tt ? Tt.value : Tt.textContent,
		o = i.length;
	for (e = 0; e < n && t[e] === i[e]; e++);
	var s = n - e;
	for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
	return (Li = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Mi(e) {
	var t = e.keyCode;
	return (
		'charCode' in e
			? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
			: (e = t),
		e === 10 && (e = 13),
		32 <= e || e === 13 ? e : 0
	);
}
function hi() {
	return !0;
}
function Du() {
	return !1;
}
function De(e) {
	function t(n, r, i, o, s) {
		(this._reactName = n),
			(this._targetInst = i),
			(this.type = r),
			(this.nativeEvent = o),
			(this.target = s),
			(this.currentTarget = null);
		for (var l in e)
			e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
		return (
			(this.isDefaultPrevented = (
				o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
			)
				? hi
				: Du),
			(this.isPropagationStopped = Du),
			this
		);
	}
	return (
		G(t.prototype, {
			preventDefault: function () {
				this.defaultPrevented = !0;
				var n = this.nativeEvent;
				n &&
					(n.preventDefault
						? n.preventDefault()
						: typeof n.returnValue != 'unknown' && (n.returnValue = !1),
					(this.isDefaultPrevented = hi));
			},
			stopPropagation: function () {
				var n = this.nativeEvent;
				n &&
					(n.stopPropagation
						? n.stopPropagation()
						: typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
					(this.isPropagationStopped = hi));
			},
			persist: function () {},
			isPersistent: hi,
		}),
		t
	);
}
var qn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function (e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0,
	},
	oa = De(qn),
	qr = G({}, qn, { view: 0, detail: 0 }),
	Kg = De(qr),
	bo,
	es,
	or,
	Co = G({}, qr, {
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
		getModifierState: sa,
		button: 0,
		buttons: 0,
		relatedTarget: function (e) {
			return e.relatedTarget === void 0
				? e.fromElement === e.srcElement
					? e.toElement
					: e.fromElement
				: e.relatedTarget;
		},
		movementX: function (e) {
			return 'movementX' in e
				? e.movementX
				: (e !== or &&
						(or && e.type === 'mousemove'
							? ((bo = e.screenX - or.screenX), (es = e.screenY - or.screenY))
							: (es = bo = 0),
						(or = e)),
				  bo);
		},
		movementY: function (e) {
			return 'movementY' in e ? e.movementY : es;
		},
	}),
	_u = De(Co),
	Gg = G({}, Co, { dataTransfer: 0 }),
	Qg = De(Gg),
	Yg = G({}, qr, { relatedTarget: 0 }),
	ts = De(Yg),
	Xg = G({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
	Zg = De(Xg),
	qg = G({}, qn, {
		clipboardData: function (e) {
			return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
		},
	}),
	Jg = De(qg),
	bg = G({}, qn, { data: 0 }),
	Nu = De(bg),
	ey = {
		Esc: 'Escape',
		Spacebar: ' ',
		Left: 'ArrowLeft',
		Up: 'ArrowUp',
		Right: 'ArrowRight',
		Down: 'ArrowDown',
		Del: 'Delete',
		Win: 'OS',
		Menu: 'ContextMenu',
		Apps: 'ContextMenu',
		Scroll: 'ScrollLock',
		MozPrintableKey: 'Unidentified',
	},
	ty = {
		8: 'Backspace',
		9: 'Tab',
		12: 'Clear',
		13: 'Enter',
		16: 'Shift',
		17: 'Control',
		18: 'Alt',
		19: 'Pause',
		20: 'CapsLock',
		27: 'Escape',
		32: ' ',
		33: 'PageUp',
		34: 'PageDown',
		35: 'End',
		36: 'Home',
		37: 'ArrowLeft',
		38: 'ArrowUp',
		39: 'ArrowRight',
		40: 'ArrowDown',
		45: 'Insert',
		46: 'Delete',
		112: 'F1',
		113: 'F2',
		114: 'F3',
		115: 'F4',
		116: 'F5',
		117: 'F6',
		118: 'F7',
		119: 'F8',
		120: 'F9',
		121: 'F10',
		122: 'F11',
		123: 'F12',
		144: 'NumLock',
		145: 'ScrollLock',
		224: 'Meta',
	},
	ny = {
		Alt: 'altKey',
		Control: 'ctrlKey',
		Meta: 'metaKey',
		Shift: 'shiftKey',
	};
function ry(e) {
	var t = this.nativeEvent;
	return t.getModifierState ? t.getModifierState(e) : (e = ny[e]) ? !!t[e] : !1;
}
function sa() {
	return ry;
}
var iy = G({}, qr, {
		key: function (e) {
			if (e.key) {
				var t = ey[e.key] || e.key;
				if (t !== 'Unidentified') return t;
			}
			return e.type === 'keypress'
				? ((e = Mi(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
				: e.type === 'keydown' || e.type === 'keyup'
				? ty[e.keyCode] || 'Unidentified'
				: '';
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: sa,
		charCode: function (e) {
			return e.type === 'keypress' ? Mi(e) : 0;
		},
		keyCode: function (e) {
			return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
		},
		which: function (e) {
			return e.type === 'keypress'
				? Mi(e)
				: e.type === 'keydown' || e.type === 'keyup'
				? e.keyCode
				: 0;
		},
	}),
	oy = De(iy),
	sy = G({}, Co, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0,
	}),
	ju = De(sy),
	ly = G({}, qr, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: sa,
	}),
	ay = De(ly),
	uy = G({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
	cy = De(uy),
	fy = G({}, Co, {
		deltaX: function (e) {
			return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function (e) {
			return 'deltaY' in e
				? e.deltaY
				: 'wheelDeltaY' in e
				? -e.wheelDeltaY
				: 'wheelDelta' in e
				? -e.wheelDelta
				: 0;
		},
		deltaZ: 0,
		deltaMode: 0,
	}),
	dy = De(fy),
	hy = [9, 13, 27, 32],
	la = dt && 'CompositionEvent' in window,
	vr = null;
dt && 'documentMode' in document && (vr = document.documentMode);
var py = dt && 'TextEvent' in window && !vr,
	zd = dt && (!la || (vr && 8 < vr && 11 >= vr)),
	Fu = ' ',
	Ou = !1;
function Ud(e, t) {
	switch (e) {
		case 'keyup':
			return hy.indexOf(t.keyCode) !== -1;
		case 'keydown':
			return t.keyCode !== 229;
		case 'keypress':
		case 'mousedown':
		case 'focusout':
			return !0;
		default:
			return !1;
	}
}
function $d(e) {
	return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var vn = !1;
function my(e, t) {
	switch (e) {
		case 'compositionend':
			return $d(t);
		case 'keypress':
			return t.which !== 32 ? null : ((Ou = !0), Fu);
		case 'textInput':
			return (e = t.data), e === Fu && Ou ? null : e;
		default:
			return null;
	}
}
function gy(e, t) {
	if (vn)
		return e === 'compositionend' || (!la && Ud(e, t))
			? ((e = Bd()), (Li = ia = Tt = null), (vn = !1), e)
			: null;
	switch (e) {
		case 'paste':
			return null;
		case 'keypress':
			if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
				if (t.char && 1 < t.char.length) return t.char;
				if (t.which) return String.fromCharCode(t.which);
			}
			return null;
		case 'compositionend':
			return zd && t.locale !== 'ko' ? null : t.data;
		default:
			return null;
	}
}
var yy = {
	color: !0,
	date: !0,
	datetime: !0,
	'datetime-local': !0,
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
	week: !0,
};
function Iu(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return t === 'input' ? !!yy[e.type] : t === 'textarea';
}
function Wd(e, t, n, r) {
	Sd(r),
		(t = Yi(t, 'onChange')),
		0 < t.length &&
			((n = new oa('onChange', 'change', null, n, r)),
			e.push({ event: n, listeners: t }));
}
var wr = null,
	Nr = null;
function vy(e) {
	eh(e, 0);
}
function To(e) {
	var t = xn(e);
	if (hd(t)) return e;
}
function wy(e, t) {
	if (e === 'change') return t;
}
var Hd = !1;
if (dt) {
	var ns;
	if (dt) {
		var rs = 'oninput' in document;
		if (!rs) {
			var Bu = document.createElement('div');
			Bu.setAttribute('oninput', 'return;'),
				(rs = typeof Bu.oninput == 'function');
		}
		ns = rs;
	} else ns = !1;
	Hd = ns && (!document.documentMode || 9 < document.documentMode);
}
function zu() {
	wr && (wr.detachEvent('onpropertychange', Kd), (Nr = wr = null));
}
function Kd(e) {
	if (e.propertyName === 'value' && To(Nr)) {
		var t = [];
		Wd(t, Nr, e, bl(e)), Td(vy, t);
	}
}
function Sy(e, t, n) {
	e === 'focusin'
		? (zu(), (wr = t), (Nr = n), wr.attachEvent('onpropertychange', Kd))
		: e === 'focusout' && zu();
}
function xy(e) {
	if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
		return To(Nr);
}
function Py(e, t) {
	if (e === 'click') return To(t);
}
function Cy(e, t) {
	if (e === 'input' || e === 'change') return To(t);
}
function Ty(e, t) {
	return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ye = typeof Object.is == 'function' ? Object.is : Ty;
function jr(e, t) {
	if (Ye(e, t)) return !0;
	if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
		return !1;
	var n = Object.keys(e),
		r = Object.keys(t);
	if (n.length !== r.length) return !1;
	for (r = 0; r < n.length; r++) {
		var i = n[r];
		if (!Ds.call(t, i) || !Ye(e[i], t[i])) return !1;
	}
	return !0;
}
function Uu(e) {
	for (; e && e.firstChild; ) e = e.firstChild;
	return e;
}
function $u(e, t) {
	var n = Uu(e);
	e = 0;
	for (var r; n; ) {
		if (n.nodeType === 3) {
			if (((r = e + n.textContent.length), e <= t && r >= t))
				return { node: n, offset: t - e };
			e = r;
		}
		e: {
			for (; n; ) {
				if (n.nextSibling) {
					n = n.nextSibling;
					break e;
				}
				n = n.parentNode;
			}
			n = void 0;
		}
		n = Uu(n);
	}
}
function Gd(e, t) {
	return e && t
		? e === t
			? !0
			: e && e.nodeType === 3
			? !1
			: t && t.nodeType === 3
			? Gd(e, t.parentNode)
			: 'contains' in e
			? e.contains(t)
			: e.compareDocumentPosition
			? !!(e.compareDocumentPosition(t) & 16)
			: !1
		: !1;
}
function Qd() {
	for (var e = window, t = Ui(); t instanceof e.HTMLIFrameElement; ) {
		try {
			var n = typeof t.contentWindow.location.href == 'string';
		} catch {
			n = !1;
		}
		if (n) e = t.contentWindow;
		else break;
		t = Ui(e.document);
	}
	return t;
}
function aa(e) {
	var t = e && e.nodeName && e.nodeName.toLowerCase();
	return (
		t &&
		((t === 'input' &&
			(e.type === 'text' ||
				e.type === 'search' ||
				e.type === 'tel' ||
				e.type === 'url' ||
				e.type === 'password')) ||
			t === 'textarea' ||
			e.contentEditable === 'true')
	);
}
function ky(e) {
	var t = Qd(),
		n = e.focusedElem,
		r = e.selectionRange;
	if (
		t !== n &&
		n &&
		n.ownerDocument &&
		Gd(n.ownerDocument.documentElement, n)
	) {
		if (r !== null && aa(n)) {
			if (
				((t = r.start),
				(e = r.end),
				e === void 0 && (e = t),
				'selectionStart' in n)
			)
				(n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
			else if (
				((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
				e.getSelection)
			) {
				e = e.getSelection();
				var i = n.textContent.length,
					o = Math.min(r.start, i);
				(r = r.end === void 0 ? o : Math.min(r.end, i)),
					!e.extend && o > r && ((i = r), (r = o), (o = i)),
					(i = $u(n, o));
				var s = $u(n, r);
				i &&
					s &&
					(e.rangeCount !== 1 ||
						e.anchorNode !== i.node ||
						e.anchorOffset !== i.offset ||
						e.focusNode !== s.node ||
						e.focusOffset !== s.offset) &&
					((t = t.createRange()),
					t.setStart(i.node, i.offset),
					e.removeAllRanges(),
					o > r
						? (e.addRange(t), e.extend(s.node, s.offset))
						: (t.setEnd(s.node, s.offset), e.addRange(t)));
			}
		}
		for (t = [], e = n; (e = e.parentNode); )
			e.nodeType === 1 &&
				t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
		for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
			(e = t[n]),
				(e.element.scrollLeft = e.left),
				(e.element.scrollTop = e.top);
	}
}
var Ey = dt && 'documentMode' in document && 11 >= document.documentMode,
	wn = null,
	qs = null,
	Sr = null,
	Js = !1;
function Wu(e, t, n) {
	var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
	Js ||
		wn == null ||
		wn !== Ui(r) ||
		((r = wn),
		'selectionStart' in r && aa(r)
			? (r = { start: r.selectionStart, end: r.selectionEnd })
			: ((r = (
					(r.ownerDocument && r.ownerDocument.defaultView) ||
					window
			  ).getSelection()),
			  (r = {
					anchorNode: r.anchorNode,
					anchorOffset: r.anchorOffset,
					focusNode: r.focusNode,
					focusOffset: r.focusOffset,
			  })),
		(Sr && jr(Sr, r)) ||
			((Sr = r),
			(r = Yi(qs, 'onSelect')),
			0 < r.length &&
				((t = new oa('onSelect', 'select', null, t, n)),
				e.push({ event: t, listeners: r }),
				(t.target = wn))));
}
function pi(e, t) {
	var n = {};
	return (
		(n[e.toLowerCase()] = t.toLowerCase()),
		(n['Webkit' + e] = 'webkit' + t),
		(n['Moz' + e] = 'moz' + t),
		n
	);
}
var Sn = {
		animationend: pi('Animation', 'AnimationEnd'),
		animationiteration: pi('Animation', 'AnimationIteration'),
		animationstart: pi('Animation', 'AnimationStart'),
		transitionend: pi('Transition', 'TransitionEnd'),
	},
	is = {},
	Yd = {};
dt &&
	((Yd = document.createElement('div').style),
	'AnimationEvent' in window ||
		(delete Sn.animationend.animation,
		delete Sn.animationiteration.animation,
		delete Sn.animationstart.animation),
	'TransitionEvent' in window || delete Sn.transitionend.transition);
function ko(e) {
	if (is[e]) return is[e];
	if (!Sn[e]) return e;
	var t = Sn[e],
		n;
	for (n in t) if (t.hasOwnProperty(n) && n in Yd) return (is[e] = t[n]);
	return e;
}
var Xd = ko('animationend'),
	Zd = ko('animationiteration'),
	qd = ko('animationstart'),
	Jd = ko('transitionend'),
	bd = new Map(),
	Hu =
		'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
			' '
		);
function zt(e, t) {
	bd.set(e, t), dn(t, [e]);
}
for (var os = 0; os < Hu.length; os++) {
	var ss = Hu[os],
		Ry = ss.toLowerCase(),
		Ay = ss[0].toUpperCase() + ss.slice(1);
	zt(Ry, 'on' + Ay);
}
zt(Xd, 'onAnimationEnd');
zt(Zd, 'onAnimationIteration');
zt(qd, 'onAnimationStart');
zt('dblclick', 'onDoubleClick');
zt('focusin', 'onFocus');
zt('focusout', 'onBlur');
zt(Jd, 'onTransitionEnd');
zn('onMouseEnter', ['mouseout', 'mouseover']);
zn('onMouseLeave', ['mouseout', 'mouseover']);
zn('onPointerEnter', ['pointerout', 'pointerover']);
zn('onPointerLeave', ['pointerout', 'pointerover']);
dn(
	'onChange',
	'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
dn(
	'onSelect',
	'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
		' '
	)
);
dn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
dn(
	'onCompositionEnd',
	'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
dn(
	'onCompositionStart',
	'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
dn(
	'onCompositionUpdate',
	'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var hr =
		'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
			' '
		),
	Ly = new Set('cancel close invalid load scroll toggle'.split(' ').concat(hr));
function Ku(e, t, n) {
	var r = e.type || 'unknown-event';
	(e.currentTarget = n), Rg(r, t, void 0, e), (e.currentTarget = null);
}
function eh(e, t) {
	t = (t & 4) !== 0;
	for (var n = 0; n < e.length; n++) {
		var r = e[n],
			i = r.event;
		r = r.listeners;
		e: {
			var o = void 0;
			if (t)
				for (var s = r.length - 1; 0 <= s; s--) {
					var l = r[s],
						a = l.instance,
						u = l.currentTarget;
					if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
					Ku(i, l, u), (o = a);
				}
			else
				for (s = 0; s < r.length; s++) {
					if (
						((l = r[s]),
						(a = l.instance),
						(u = l.currentTarget),
						(l = l.listener),
						a !== o && i.isPropagationStopped())
					)
						break e;
					Ku(i, l, u), (o = a);
				}
		}
	}
	if (Wi) throw ((e = Qs), (Wi = !1), (Qs = null), e);
}
function z(e, t) {
	var n = t[rl];
	n === void 0 && (n = t[rl] = new Set());
	var r = e + '__bubble';
	n.has(r) || (th(t, e, 2, !1), n.add(r));
}
function ls(e, t, n) {
	var r = 0;
	t && (r |= 4), th(n, e, r, t);
}
var mi = '_reactListening' + Math.random().toString(36).slice(2);
function Fr(e) {
	if (!e[mi]) {
		(e[mi] = !0),
			ad.forEach(function (n) {
				n !== 'selectionchange' && (Ly.has(n) || ls(n, !1, e), ls(n, !0, e));
			});
		var t = e.nodeType === 9 ? e : e.ownerDocument;
		t === null || t[mi] || ((t[mi] = !0), ls('selectionchange', !1, t));
	}
}
function th(e, t, n, r) {
	switch (Id(t)) {
		case 1:
			var i = Wg;
			break;
		case 4:
			i = Hg;
			break;
		default:
			i = ra;
	}
	(n = i.bind(null, t, n, e)),
		(i = void 0),
		!Gs ||
			(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
			(i = !0),
		r
			? i !== void 0
				? e.addEventListener(t, n, { capture: !0, passive: i })
				: e.addEventListener(t, n, !0)
			: i !== void 0
			? e.addEventListener(t, n, { passive: i })
			: e.addEventListener(t, n, !1);
}
function as(e, t, n, r, i) {
	var o = r;
	if (!(t & 1) && !(t & 2) && r !== null)
		e: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var l = r.stateNode.containerInfo;
				if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
				if (s === 4)
					for (s = r.return; s !== null; ) {
						var a = s.tag;
						if (
							(a === 3 || a === 4) &&
							((a = s.stateNode.containerInfo),
							a === i || (a.nodeType === 8 && a.parentNode === i))
						)
							return;
						s = s.return;
					}
				for (; l !== null; ) {
					if (((s = Jt(l)), s === null)) return;
					if (((a = s.tag), a === 5 || a === 6)) {
						r = o = s;
						continue e;
					}
					l = l.parentNode;
				}
			}
			r = r.return;
		}
	Td(function () {
		var u = o,
			c = bl(n),
			f = [];
		e: {
			var d = bd.get(e);
			if (d !== void 0) {
				var g = oa,
					y = e;
				switch (e) {
					case 'keypress':
						if (Mi(n) === 0) break e;
					case 'keydown':
					case 'keyup':
						g = oy;
						break;
					case 'focusin':
						(y = 'focus'), (g = ts);
						break;
					case 'focusout':
						(y = 'blur'), (g = ts);
						break;
					case 'beforeblur':
					case 'afterblur':
						g = ts;
						break;
					case 'click':
						if (n.button === 2) break e;
					case 'auxclick':
					case 'dblclick':
					case 'mousedown':
					case 'mousemove':
					case 'mouseup':
					case 'mouseout':
					case 'mouseover':
					case 'contextmenu':
						g = _u;
						break;
					case 'drag':
					case 'dragend':
					case 'dragenter':
					case 'dragexit':
					case 'dragleave':
					case 'dragover':
					case 'dragstart':
					case 'drop':
						g = Qg;
						break;
					case 'touchcancel':
					case 'touchend':
					case 'touchmove':
					case 'touchstart':
						g = ay;
						break;
					case Xd:
					case Zd:
					case qd:
						g = Zg;
						break;
					case Jd:
						g = cy;
						break;
					case 'scroll':
						g = Kg;
						break;
					case 'wheel':
						g = dy;
						break;
					case 'copy':
					case 'cut':
					case 'paste':
						g = Jg;
						break;
					case 'gotpointercapture':
					case 'lostpointercapture':
					case 'pointercancel':
					case 'pointerdown':
					case 'pointermove':
					case 'pointerout':
					case 'pointerover':
					case 'pointerup':
						g = ju;
				}
				var v = (t & 4) !== 0,
					S = !v && e === 'scroll',
					p = v ? (d !== null ? d + 'Capture' : null) : d;
				v = [];
				for (var h = u, m; h !== null; ) {
					m = h;
					var w = m.stateNode;
					if (
						(m.tag === 5 &&
							w !== null &&
							((m = w),
							p !== null && ((w = Mr(h, p)), w != null && v.push(Or(h, w, m)))),
						S)
					)
						break;
					h = h.return;
				}
				0 < v.length &&
					((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: v }));
			}
		}
		if (!(t & 7)) {
			e: {
				if (
					((d = e === 'mouseover' || e === 'pointerover'),
					(g = e === 'mouseout' || e === 'pointerout'),
					d &&
						n !== Hs &&
						(y = n.relatedTarget || n.fromElement) &&
						(Jt(y) || y[ht]))
				)
					break e;
				if (
					(g || d) &&
					((d =
						c.window === c
							? c
							: (d = c.ownerDocument)
							? d.defaultView || d.parentWindow
							: window),
					g
						? ((y = n.relatedTarget || n.toElement),
						  (g = u),
						  (y = y ? Jt(y) : null),
						  y !== null &&
								((S = hn(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
								(y = null))
						: ((g = null), (y = u)),
					g !== y)
				) {
					if (
						((v = _u),
						(w = 'onMouseLeave'),
						(p = 'onMouseEnter'),
						(h = 'mouse'),
						(e === 'pointerout' || e === 'pointerover') &&
							((v = ju),
							(w = 'onPointerLeave'),
							(p = 'onPointerEnter'),
							(h = 'pointer')),
						(S = g == null ? d : xn(g)),
						(m = y == null ? d : xn(y)),
						(d = new v(w, h + 'leave', g, n, c)),
						(d.target = S),
						(d.relatedTarget = m),
						(w = null),
						Jt(c) === u &&
							((v = new v(p, h + 'enter', y, n, c)),
							(v.target = m),
							(v.relatedTarget = S),
							(w = v)),
						(S = w),
						g && y)
					)
						t: {
							for (v = g, p = y, h = 0, m = v; m; m = mn(m)) h++;
							for (m = 0, w = p; w; w = mn(w)) m++;
							for (; 0 < h - m; ) (v = mn(v)), h--;
							for (; 0 < m - h; ) (p = mn(p)), m--;
							for (; h--; ) {
								if (v === p || (p !== null && v === p.alternate)) break t;
								(v = mn(v)), (p = mn(p));
							}
							v = null;
						}
					else v = null;
					g !== null && Gu(f, d, g, v, !1),
						y !== null && S !== null && Gu(f, S, y, v, !0);
				}
			}
			e: {
				if (
					((d = u ? xn(u) : window),
					(g = d.nodeName && d.nodeName.toLowerCase()),
					g === 'select' || (g === 'input' && d.type === 'file'))
				)
					var x = wy;
				else if (Iu(d))
					if (Hd) x = Cy;
					else {
						x = xy;
						var E = Sy;
					}
				else
					(g = d.nodeName) &&
						g.toLowerCase() === 'input' &&
						(d.type === 'checkbox' || d.type === 'radio') &&
						(x = Py);
				if (x && (x = x(e, u))) {
					Wd(f, x, n, c);
					break e;
				}
				E && E(e, d, u),
					e === 'focusout' &&
						(E = d._wrapperState) &&
						E.controlled &&
						d.type === 'number' &&
						Bs(d, 'number', d.value);
			}
			switch (((E = u ? xn(u) : window), e)) {
				case 'focusin':
					(Iu(E) || E.contentEditable === 'true') &&
						((wn = E), (qs = u), (Sr = null));
					break;
				case 'focusout':
					Sr = qs = wn = null;
					break;
				case 'mousedown':
					Js = !0;
					break;
				case 'contextmenu':
				case 'mouseup':
				case 'dragend':
					(Js = !1), Wu(f, n, c);
					break;
				case 'selectionchange':
					if (Ey) break;
				case 'keydown':
				case 'keyup':
					Wu(f, n, c);
			}
			var A;
			if (la)
				e: {
					switch (e) {
						case 'compositionstart':
							var T = 'onCompositionStart';
							break e;
						case 'compositionend':
							T = 'onCompositionEnd';
							break e;
						case 'compositionupdate':
							T = 'onCompositionUpdate';
							break e;
					}
					T = void 0;
				}
			else
				vn
					? Ud(e, n) && (T = 'onCompositionEnd')
					: e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
			T &&
				(zd &&
					n.locale !== 'ko' &&
					(vn || T !== 'onCompositionStart'
						? T === 'onCompositionEnd' && vn && (A = Bd())
						: ((Tt = c),
						  (ia = 'value' in Tt ? Tt.value : Tt.textContent),
						  (vn = !0))),
				(E = Yi(u, T)),
				0 < E.length &&
					((T = new Nu(T, e, null, n, c)),
					f.push({ event: T, listeners: E }),
					A ? (T.data = A) : ((A = $d(n)), A !== null && (T.data = A)))),
				(A = py ? my(e, n) : gy(e, n)) &&
					((u = Yi(u, 'onBeforeInput')),
					0 < u.length &&
						((c = new Nu('onBeforeInput', 'beforeinput', null, n, c)),
						f.push({ event: c, listeners: u }),
						(c.data = A)));
		}
		eh(f, t);
	});
}
function Or(e, t, n) {
	return { instance: e, listener: t, currentTarget: n };
}
function Yi(e, t) {
	for (var n = t + 'Capture', r = []; e !== null; ) {
		var i = e,
			o = i.stateNode;
		i.tag === 5 &&
			o !== null &&
			((i = o),
			(o = Mr(e, n)),
			o != null && r.unshift(Or(e, o, i)),
			(o = Mr(e, t)),
			o != null && r.push(Or(e, o, i))),
			(e = e.return);
	}
	return r;
}
function mn(e) {
	if (e === null) return null;
	do e = e.return;
	while (e && e.tag !== 5);
	return e || null;
}
function Gu(e, t, n, r, i) {
	for (var o = t._reactName, s = []; n !== null && n !== r; ) {
		var l = n,
			a = l.alternate,
			u = l.stateNode;
		if (a !== null && a === r) break;
		l.tag === 5 &&
			u !== null &&
			((l = u),
			i
				? ((a = Mr(n, o)), a != null && s.unshift(Or(n, a, l)))
				: i || ((a = Mr(n, o)), a != null && s.push(Or(n, a, l)))),
			(n = n.return);
	}
	s.length !== 0 && e.push({ event: t, listeners: s });
}
var My = /\r\n?/g,
	Vy = /\u0000|\uFFFD/g;
function Qu(e) {
	return (typeof e == 'string' ? e : '' + e)
		.replace(
			My,
			`
`
		)
		.replace(Vy, '');
}
function gi(e, t, n) {
	if (((t = Qu(t)), Qu(e) !== t && n)) throw Error(P(425));
}
function Xi() {}
var bs = null,
	el = null;
function tl(e, t) {
	return (
		e === 'textarea' ||
		e === 'noscript' ||
		typeof t.children == 'string' ||
		typeof t.children == 'number' ||
		(typeof t.dangerouslySetInnerHTML == 'object' &&
			t.dangerouslySetInnerHTML !== null &&
			t.dangerouslySetInnerHTML.__html != null)
	);
}
var nl = typeof setTimeout == 'function' ? setTimeout : void 0,
	Dy = typeof clearTimeout == 'function' ? clearTimeout : void 0,
	Yu = typeof Promise == 'function' ? Promise : void 0,
	_y =
		typeof queueMicrotask == 'function'
			? queueMicrotask
			: typeof Yu < 'u'
			? function (e) {
					return Yu.resolve(null).then(e).catch(Ny);
			  }
			: nl;
function Ny(e) {
	setTimeout(function () {
		throw e;
	});
}
function us(e, t) {
	var n = t,
		r = 0;
	do {
		var i = n.nextSibling;
		if ((e.removeChild(n), i && i.nodeType === 8))
			if (((n = i.data), n === '/$')) {
				if (r === 0) {
					e.removeChild(i), _r(t);
					return;
				}
				r--;
			} else (n !== '$' && n !== '$?' && n !== '$!') || r++;
		n = i;
	} while (n);
	_r(t);
}
function Mt(e) {
	for (; e != null; e = e.nextSibling) {
		var t = e.nodeType;
		if (t === 1 || t === 3) break;
		if (t === 8) {
			if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
			if (t === '/$') return null;
		}
	}
	return e;
}
function Xu(e) {
	e = e.previousSibling;
	for (var t = 0; e; ) {
		if (e.nodeType === 8) {
			var n = e.data;
			if (n === '$' || n === '$!' || n === '$?') {
				if (t === 0) return e;
				t--;
			} else n === '/$' && t++;
		}
		e = e.previousSibling;
	}
	return null;
}
var Jn = Math.random().toString(36).slice(2),
	qe = '__reactFiber$' + Jn,
	Ir = '__reactProps$' + Jn,
	ht = '__reactContainer$' + Jn,
	rl = '__reactEvents$' + Jn,
	jy = '__reactListeners$' + Jn,
	Fy = '__reactHandles$' + Jn;
function Jt(e) {
	var t = e[qe];
	if (t) return t;
	for (var n = e.parentNode; n; ) {
		if ((t = n[ht] || n[qe])) {
			if (
				((n = t.alternate),
				t.child !== null || (n !== null && n.child !== null))
			)
				for (e = Xu(e); e !== null; ) {
					if ((n = e[qe])) return n;
					e = Xu(e);
				}
			return t;
		}
		(e = n), (n = e.parentNode);
	}
	return null;
}
function Jr(e) {
	return (
		(e = e[qe] || e[ht]),
		!e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
	);
}
function xn(e) {
	if (e.tag === 5 || e.tag === 6) return e.stateNode;
	throw Error(P(33));
}
function Eo(e) {
	return e[Ir] || null;
}
var il = [],
	Pn = -1;
function Ut(e) {
	return { current: e };
}
function U(e) {
	0 > Pn || ((e.current = il[Pn]), (il[Pn] = null), Pn--);
}
function B(e, t) {
	Pn++, (il[Pn] = e.current), (e.current = t);
}
var Ft = {},
	me = Ut(Ft),
	Pe = Ut(!1),
	ln = Ft;
function Un(e, t) {
	var n = e.type.contextTypes;
	if (!n) return Ft;
	var r = e.stateNode;
	if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
		return r.__reactInternalMemoizedMaskedChildContext;
	var i = {},
		o;
	for (o in n) i[o] = t[o];
	return (
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = t),
			(e.__reactInternalMemoizedMaskedChildContext = i)),
		i
	);
}
function Ce(e) {
	return (e = e.childContextTypes), e != null;
}
function Zi() {
	U(Pe), U(me);
}
function Zu(e, t, n) {
	if (me.current !== Ft) throw Error(P(168));
	B(me, t), B(Pe, n);
}
function nh(e, t, n) {
	var r = e.stateNode;
	if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
		return n;
	r = r.getChildContext();
	for (var i in r) if (!(i in t)) throw Error(P(108, Sg(e) || 'Unknown', i));
	return G({}, n, r);
}
function qi(e) {
	return (
		(e =
			((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
		(ln = me.current),
		B(me, e),
		B(Pe, Pe.current),
		!0
	);
}
function qu(e, t, n) {
	var r = e.stateNode;
	if (!r) throw Error(P(169));
	n
		? ((e = nh(e, t, ln)),
		  (r.__reactInternalMemoizedMergedChildContext = e),
		  U(Pe),
		  U(me),
		  B(me, e))
		: U(Pe),
		B(Pe, n);
}
var rt = null,
	Ro = !1,
	cs = !1;
function rh(e) {
	rt === null ? (rt = [e]) : rt.push(e);
}
function Oy(e) {
	(Ro = !0), rh(e);
}
function $t() {
	if (!cs && rt !== null) {
		cs = !0;
		var e = 0,
			t = O;
		try {
			var n = rt;
			for (O = 1; e < n.length; e++) {
				var r = n[e];
				do r = r(!0);
				while (r !== null);
			}
			(rt = null), (Ro = !1);
		} catch (i) {
			throw (rt !== null && (rt = rt.slice(e + 1)), Ad(ea, $t), i);
		} finally {
			(O = t), (cs = !1);
		}
	}
	return null;
}
var Cn = [],
	Tn = 0,
	Ji = null,
	bi = 0,
	je = [],
	Fe = 0,
	an = null,
	it = 1,
	ot = '';
function Yt(e, t) {
	(Cn[Tn++] = bi), (Cn[Tn++] = Ji), (Ji = e), (bi = t);
}
function ih(e, t, n) {
	(je[Fe++] = it), (je[Fe++] = ot), (je[Fe++] = an), (an = e);
	var r = it;
	e = ot;
	var i = 32 - Ge(r) - 1;
	(r &= ~(1 << i)), (n += 1);
	var o = 32 - Ge(t) + i;
	if (30 < o) {
		var s = i - (i % 5);
		(o = (r & ((1 << s) - 1)).toString(32)),
			(r >>= s),
			(i -= s),
			(it = (1 << (32 - Ge(t) + i)) | (n << i) | r),
			(ot = o + e);
	} else (it = (1 << o) | (n << i) | r), (ot = e);
}
function ua(e) {
	e.return !== null && (Yt(e, 1), ih(e, 1, 0));
}
function ca(e) {
	for (; e === Ji; )
		(Ji = Cn[--Tn]), (Cn[Tn] = null), (bi = Cn[--Tn]), (Cn[Tn] = null);
	for (; e === an; )
		(an = je[--Fe]),
			(je[Fe] = null),
			(ot = je[--Fe]),
			(je[Fe] = null),
			(it = je[--Fe]),
			(je[Fe] = null);
}
var Ae = null,
	Re = null,
	$ = !1,
	He = null;
function oh(e, t) {
	var n = Oe(5, null, null, 0);
	(n.elementType = 'DELETED'),
		(n.stateNode = t),
		(n.return = e),
		(t = e.deletions),
		t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ju(e, t) {
	switch (e.tag) {
		case 5:
			var n = e.type;
			return (
				(t =
					t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
						? null
						: t),
				t !== null
					? ((e.stateNode = t), (Ae = e), (Re = Mt(t.firstChild)), !0)
					: !1
			);
		case 6:
			return (
				(t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
				t !== null ? ((e.stateNode = t), (Ae = e), (Re = null), !0) : !1
			);
		case 13:
			return (
				(t = t.nodeType !== 8 ? null : t),
				t !== null
					? ((n = an !== null ? { id: it, overflow: ot } : null),
					  (e.memoizedState = {
							dehydrated: t,
							treeContext: n,
							retryLane: 1073741824,
					  }),
					  (n = Oe(18, null, null, 0)),
					  (n.stateNode = t),
					  (n.return = e),
					  (e.child = n),
					  (Ae = e),
					  (Re = null),
					  !0)
					: !1
			);
		default:
			return !1;
	}
}
function ol(e) {
	return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function sl(e) {
	if ($) {
		var t = Re;
		if (t) {
			var n = t;
			if (!Ju(e, t)) {
				if (ol(e)) throw Error(P(418));
				t = Mt(n.nextSibling);
				var r = Ae;
				t && Ju(e, t)
					? oh(r, n)
					: ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Ae = e));
			}
		} else {
			if (ol(e)) throw Error(P(418));
			(e.flags = (e.flags & -4097) | 2), ($ = !1), (Ae = e);
		}
	}
}
function bu(e) {
	for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
		e = e.return;
	Ae = e;
}
function yi(e) {
	if (e !== Ae) return !1;
	if (!$) return bu(e), ($ = !0), !1;
	var t;
	if (
		((t = e.tag !== 3) &&
			!(t = e.tag !== 5) &&
			((t = e.type),
			(t = t !== 'head' && t !== 'body' && !tl(e.type, e.memoizedProps))),
		t && (t = Re))
	) {
		if (ol(e)) throw (sh(), Error(P(418)));
		for (; t; ) oh(e, t), (t = Mt(t.nextSibling));
	}
	if ((bu(e), e.tag === 13)) {
		if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
			throw Error(P(317));
		e: {
			for (e = e.nextSibling, t = 0; e; ) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === '/$') {
						if (t === 0) {
							Re = Mt(e.nextSibling);
							break e;
						}
						t--;
					} else (n !== '$' && n !== '$!' && n !== '$?') || t++;
				}
				e = e.nextSibling;
			}
			Re = null;
		}
	} else Re = Ae ? Mt(e.stateNode.nextSibling) : null;
	return !0;
}
function sh() {
	for (var e = Re; e; ) e = Mt(e.nextSibling);
}
function $n() {
	(Re = Ae = null), ($ = !1);
}
function fa(e) {
	He === null ? (He = [e]) : He.push(e);
}
var Iy = gt.ReactCurrentBatchConfig;
function sr(e, t, n) {
	if (
		((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
	) {
		if (n._owner) {
			if (((n = n._owner), n)) {
				if (n.tag !== 1) throw Error(P(309));
				var r = n.stateNode;
			}
			if (!r) throw Error(P(147, e));
			var i = r,
				o = '' + e;
			return t !== null &&
				t.ref !== null &&
				typeof t.ref == 'function' &&
				t.ref._stringRef === o
				? t.ref
				: ((t = function (s) {
						var l = i.refs;
						s === null ? delete l[o] : (l[o] = s);
				  }),
				  (t._stringRef = o),
				  t);
		}
		if (typeof e != 'string') throw Error(P(284));
		if (!n._owner) throw Error(P(290, e));
	}
	return e;
}
function vi(e, t) {
	throw (
		((e = Object.prototype.toString.call(t)),
		Error(
			P(
				31,
				e === '[object Object]'
					? 'object with keys {' + Object.keys(t).join(', ') + '}'
					: e
			)
		))
	);
}
function ec(e) {
	var t = e._init;
	return t(e._payload);
}
function lh(e) {
	function t(p, h) {
		if (e) {
			var m = p.deletions;
			m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
		}
	}
	function n(p, h) {
		if (!e) return null;
		for (; h !== null; ) t(p, h), (h = h.sibling);
		return null;
	}
	function r(p, h) {
		for (p = new Map(); h !== null; )
			h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
		return p;
	}
	function i(p, h) {
		return (p = Nt(p, h)), (p.index = 0), (p.sibling = null), p;
	}
	function o(p, h, m) {
		return (
			(p.index = m),
			e
				? ((m = p.alternate),
				  m !== null
						? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
						: ((p.flags |= 2), h))
				: ((p.flags |= 1048576), h)
		);
	}
	function s(p) {
		return e && p.alternate === null && (p.flags |= 2), p;
	}
	function l(p, h, m, w) {
		return h === null || h.tag !== 6
			? ((h = ys(m, p.mode, w)), (h.return = p), h)
			: ((h = i(h, m)), (h.return = p), h);
	}
	function a(p, h, m, w) {
		var x = m.type;
		return x === yn
			? c(p, h, m.props.children, w, m.key)
			: h !== null &&
			  (h.elementType === x ||
					(typeof x == 'object' &&
						x !== null &&
						x.$$typeof === St &&
						ec(x) === h.type))
			? ((w = i(h, m.props)), (w.ref = sr(p, h, m)), (w.return = p), w)
			: ((w = Oi(m.type, m.key, m.props, null, p.mode, w)),
			  (w.ref = sr(p, h, m)),
			  (w.return = p),
			  w);
	}
	function u(p, h, m, w) {
		return h === null ||
			h.tag !== 4 ||
			h.stateNode.containerInfo !== m.containerInfo ||
			h.stateNode.implementation !== m.implementation
			? ((h = vs(m, p.mode, w)), (h.return = p), h)
			: ((h = i(h, m.children || [])), (h.return = p), h);
	}
	function c(p, h, m, w, x) {
		return h === null || h.tag !== 7
			? ((h = rn(m, p.mode, w, x)), (h.return = p), h)
			: ((h = i(h, m)), (h.return = p), h);
	}
	function f(p, h, m) {
		if ((typeof h == 'string' && h !== '') || typeof h == 'number')
			return (h = ys('' + h, p.mode, m)), (h.return = p), h;
		if (typeof h == 'object' && h !== null) {
			switch (h.$$typeof) {
				case li:
					return (
						(m = Oi(h.type, h.key, h.props, null, p.mode, m)),
						(m.ref = sr(p, null, h)),
						(m.return = p),
						m
					);
				case gn:
					return (h = vs(h, p.mode, m)), (h.return = p), h;
				case St:
					var w = h._init;
					return f(p, w(h._payload), m);
			}
			if (fr(h) || tr(h))
				return (h = rn(h, p.mode, m, null)), (h.return = p), h;
			vi(p, h);
		}
		return null;
	}
	function d(p, h, m, w) {
		var x = h !== null ? h.key : null;
		if ((typeof m == 'string' && m !== '') || typeof m == 'number')
			return x !== null ? null : l(p, h, '' + m, w);
		if (typeof m == 'object' && m !== null) {
			switch (m.$$typeof) {
				case li:
					return m.key === x ? a(p, h, m, w) : null;
				case gn:
					return m.key === x ? u(p, h, m, w) : null;
				case St:
					return (x = m._init), d(p, h, x(m._payload), w);
			}
			if (fr(m) || tr(m)) return x !== null ? null : c(p, h, m, w, null);
			vi(p, m);
		}
		return null;
	}
	function g(p, h, m, w, x) {
		if ((typeof w == 'string' && w !== '') || typeof w == 'number')
			return (p = p.get(m) || null), l(h, p, '' + w, x);
		if (typeof w == 'object' && w !== null) {
			switch (w.$$typeof) {
				case li:
					return (p = p.get(w.key === null ? m : w.key) || null), a(h, p, w, x);
				case gn:
					return (p = p.get(w.key === null ? m : w.key) || null), u(h, p, w, x);
				case St:
					var E = w._init;
					return g(p, h, m, E(w._payload), x);
			}
			if (fr(w) || tr(w)) return (p = p.get(m) || null), c(h, p, w, x, null);
			vi(h, w);
		}
		return null;
	}
	function y(p, h, m, w) {
		for (
			var x = null, E = null, A = h, T = (h = 0), j = null;
			A !== null && T < m.length;
			T++
		) {
			A.index > T ? ((j = A), (A = null)) : (j = A.sibling);
			var V = d(p, A, m[T], w);
			if (V === null) {
				A === null && (A = j);
				break;
			}
			e && A && V.alternate === null && t(p, A),
				(h = o(V, h, T)),
				E === null ? (x = V) : (E.sibling = V),
				(E = V),
				(A = j);
		}
		if (T === m.length) return n(p, A), $ && Yt(p, T), x;
		if (A === null) {
			for (; T < m.length; T++)
				(A = f(p, m[T], w)),
					A !== null &&
						((h = o(A, h, T)), E === null ? (x = A) : (E.sibling = A), (E = A));
			return $ && Yt(p, T), x;
		}
		for (A = r(p, A); T < m.length; T++)
			(j = g(A, p, T, m[T], w)),
				j !== null &&
					(e && j.alternate !== null && A.delete(j.key === null ? T : j.key),
					(h = o(j, h, T)),
					E === null ? (x = j) : (E.sibling = j),
					(E = j));
		return (
			e &&
				A.forEach(function (te) {
					return t(p, te);
				}),
			$ && Yt(p, T),
			x
		);
	}
	function v(p, h, m, w) {
		var x = tr(m);
		if (typeof x != 'function') throw Error(P(150));
		if (((m = x.call(m)), m == null)) throw Error(P(151));
		for (
			var E = (x = null), A = h, T = (h = 0), j = null, V = m.next();
			A !== null && !V.done;
			T++, V = m.next()
		) {
			A.index > T ? ((j = A), (A = null)) : (j = A.sibling);
			var te = d(p, A, V.value, w);
			if (te === null) {
				A === null && (A = j);
				break;
			}
			e && A && te.alternate === null && t(p, A),
				(h = o(te, h, T)),
				E === null ? (x = te) : (E.sibling = te),
				(E = te),
				(A = j);
		}
		if (V.done) return n(p, A), $ && Yt(p, T), x;
		if (A === null) {
			for (; !V.done; T++, V = m.next())
				(V = f(p, V.value, w)),
					V !== null &&
						((h = o(V, h, T)), E === null ? (x = V) : (E.sibling = V), (E = V));
			return $ && Yt(p, T), x;
		}
		for (A = r(p, A); !V.done; T++, V = m.next())
			(V = g(A, p, T, V.value, w)),
				V !== null &&
					(e && V.alternate !== null && A.delete(V.key === null ? T : V.key),
					(h = o(V, h, T)),
					E === null ? (x = V) : (E.sibling = V),
					(E = V));
		return (
			e &&
				A.forEach(function (yt) {
					return t(p, yt);
				}),
			$ && Yt(p, T),
			x
		);
	}
	function S(p, h, m, w) {
		if (
			(typeof m == 'object' &&
				m !== null &&
				m.type === yn &&
				m.key === null &&
				(m = m.props.children),
			typeof m == 'object' && m !== null)
		) {
			switch (m.$$typeof) {
				case li:
					e: {
						for (var x = m.key, E = h; E !== null; ) {
							if (E.key === x) {
								if (((x = m.type), x === yn)) {
									if (E.tag === 7) {
										n(p, E.sibling),
											(h = i(E, m.props.children)),
											(h.return = p),
											(p = h);
										break e;
									}
								} else if (
									E.elementType === x ||
									(typeof x == 'object' &&
										x !== null &&
										x.$$typeof === St &&
										ec(x) === E.type)
								) {
									n(p, E.sibling),
										(h = i(E, m.props)),
										(h.ref = sr(p, E, m)),
										(h.return = p),
										(p = h);
									break e;
								}
								n(p, E);
								break;
							} else t(p, E);
							E = E.sibling;
						}
						m.type === yn
							? ((h = rn(m.props.children, p.mode, w, m.key)),
							  (h.return = p),
							  (p = h))
							: ((w = Oi(m.type, m.key, m.props, null, p.mode, w)),
							  (w.ref = sr(p, h, m)),
							  (w.return = p),
							  (p = w));
					}
					return s(p);
				case gn:
					e: {
						for (E = m.key; h !== null; ) {
							if (h.key === E)
								if (
									h.tag === 4 &&
									h.stateNode.containerInfo === m.containerInfo &&
									h.stateNode.implementation === m.implementation
								) {
									n(p, h.sibling),
										(h = i(h, m.children || [])),
										(h.return = p),
										(p = h);
									break e;
								} else {
									n(p, h);
									break;
								}
							else t(p, h);
							h = h.sibling;
						}
						(h = vs(m, p.mode, w)), (h.return = p), (p = h);
					}
					return s(p);
				case St:
					return (E = m._init), S(p, h, E(m._payload), w);
			}
			if (fr(m)) return y(p, h, m, w);
			if (tr(m)) return v(p, h, m, w);
			vi(p, m);
		}
		return (typeof m == 'string' && m !== '') || typeof m == 'number'
			? ((m = '' + m),
			  h !== null && h.tag === 6
					? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
					: (n(p, h), (h = ys(m, p.mode, w)), (h.return = p), (p = h)),
			  s(p))
			: n(p, h);
	}
	return S;
}
var Wn = lh(!0),
	ah = lh(!1),
	eo = Ut(null),
	to = null,
	kn = null,
	da = null;
function ha() {
	da = kn = to = null;
}
function pa(e) {
	var t = eo.current;
	U(eo), (e._currentValue = t);
}
function ll(e, t, n) {
	for (; e !== null; ) {
		var r = e.alternate;
		if (
			((e.childLanes & t) !== t
				? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
				: r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
			e === n)
		)
			break;
		e = e.return;
	}
}
function On(e, t) {
	(to = e),
		(da = kn = null),
		(e = e.dependencies),
		e !== null &&
			e.firstContext !== null &&
			(e.lanes & t && (xe = !0), (e.firstContext = null));
}
function Be(e) {
	var t = e._currentValue;
	if (da !== e)
		if (((e = { context: e, memoizedValue: t, next: null }), kn === null)) {
			if (to === null) throw Error(P(308));
			(kn = e), (to.dependencies = { lanes: 0, firstContext: e });
		} else kn = kn.next = e;
	return t;
}
var bt = null;
function ma(e) {
	bt === null ? (bt = [e]) : bt.push(e);
}
function uh(e, t, n, r) {
	var i = t.interleaved;
	return (
		i === null ? ((n.next = n), ma(t)) : ((n.next = i.next), (i.next = n)),
		(t.interleaved = n),
		pt(e, r)
	);
}
function pt(e, t) {
	e.lanes |= t;
	var n = e.alternate;
	for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
		(e.childLanes |= t),
			(n = e.alternate),
			n !== null && (n.childLanes |= t),
			(n = e),
			(e = e.return);
	return n.tag === 3 ? n.stateNode : null;
}
var xt = !1;
function ga(e) {
	e.updateQueue = {
		baseState: e.memoizedState,
		firstBaseUpdate: null,
		lastBaseUpdate: null,
		shared: { pending: null, interleaved: null, lanes: 0 },
		effects: null,
	};
}
function ch(e, t) {
	(e = e.updateQueue),
		t.updateQueue === e &&
			(t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				effects: e.effects,
			});
}
function lt(e, t) {
	return {
		eventTime: e,
		lane: t,
		tag: 0,
		payload: null,
		callback: null,
		next: null,
	};
}
function Vt(e, t, n) {
	var r = e.updateQueue;
	if (r === null) return null;
	if (((r = r.shared), F & 2)) {
		var i = r.pending;
		return (
			i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
			(r.pending = t),
			pt(e, n)
		);
	}
	return (
		(i = r.interleaved),
		i === null ? ((t.next = t), ma(r)) : ((t.next = i.next), (i.next = t)),
		(r.interleaved = t),
		pt(e, n)
	);
}
function Vi(e, t, n) {
	if (
		((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
	) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), ta(e, n);
	}
}
function tc(e, t) {
	var n = e.updateQueue,
		r = e.alternate;
	if (r !== null && ((r = r.updateQueue), n === r)) {
		var i = null,
			o = null;
		if (((n = n.firstBaseUpdate), n !== null)) {
			do {
				var s = {
					eventTime: n.eventTime,
					lane: n.lane,
					tag: n.tag,
					payload: n.payload,
					callback: n.callback,
					next: null,
				};
				o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
			} while (n !== null);
			o === null ? (i = o = t) : (o = o.next = t);
		} else i = o = t;
		(n = {
			baseState: r.baseState,
			firstBaseUpdate: i,
			lastBaseUpdate: o,
			shared: r.shared,
			effects: r.effects,
		}),
			(e.updateQueue = n);
		return;
	}
	(e = n.lastBaseUpdate),
		e === null ? (n.firstBaseUpdate = t) : (e.next = t),
		(n.lastBaseUpdate = t);
}
function no(e, t, n, r) {
	var i = e.updateQueue;
	xt = !1;
	var o = i.firstBaseUpdate,
		s = i.lastBaseUpdate,
		l = i.shared.pending;
	if (l !== null) {
		i.shared.pending = null;
		var a = l,
			u = a.next;
		(a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
		var c = e.alternate;
		c !== null &&
			((c = c.updateQueue),
			(l = c.lastBaseUpdate),
			l !== s &&
				(l === null ? (c.firstBaseUpdate = u) : (l.next = u),
				(c.lastBaseUpdate = a)));
	}
	if (o !== null) {
		var f = i.baseState;
		(s = 0), (c = u = a = null), (l = o);
		do {
			var d = l.lane,
				g = l.eventTime;
			if ((r & d) === d) {
				c !== null &&
					(c = c.next =
						{
							eventTime: g,
							lane: 0,
							tag: l.tag,
							payload: l.payload,
							callback: l.callback,
							next: null,
						});
				e: {
					var y = e,
						v = l;
					switch (((d = t), (g = n), v.tag)) {
						case 1:
							if (((y = v.payload), typeof y == 'function')) {
								f = y.call(g, f, d);
								break e;
							}
							f = y;
							break e;
						case 3:
							y.flags = (y.flags & -65537) | 128;
						case 0:
							if (
								((y = v.payload),
								(d = typeof y == 'function' ? y.call(g, f, d) : y),
								d == null)
							)
								break e;
							f = G({}, f, d);
							break e;
						case 2:
							xt = !0;
					}
				}
				l.callback !== null &&
					l.lane !== 0 &&
					((e.flags |= 64),
					(d = i.effects),
					d === null ? (i.effects = [l]) : d.push(l));
			} else
				(g = {
					eventTime: g,
					lane: d,
					tag: l.tag,
					payload: l.payload,
					callback: l.callback,
					next: null,
				}),
					c === null ? ((u = c = g), (a = f)) : (c = c.next = g),
					(s |= d);
			if (((l = l.next), l === null)) {
				if (((l = i.shared.pending), l === null)) break;
				(d = l),
					(l = d.next),
					(d.next = null),
					(i.lastBaseUpdate = d),
					(i.shared.pending = null);
			}
		} while (!0);
		if (
			(c === null && (a = f),
			(i.baseState = a),
			(i.firstBaseUpdate = u),
			(i.lastBaseUpdate = c),
			(t = i.shared.interleaved),
			t !== null)
		) {
			i = t;
			do (s |= i.lane), (i = i.next);
			while (i !== t);
		} else o === null && (i.shared.lanes = 0);
		(cn |= s), (e.lanes = s), (e.memoizedState = f);
	}
}
function nc(e, t, n) {
	if (((e = t.effects), (t.effects = null), e !== null))
		for (t = 0; t < e.length; t++) {
			var r = e[t],
				i = r.callback;
			if (i !== null) {
				if (((r.callback = null), (r = n), typeof i != 'function'))
					throw Error(P(191, i));
				i.call(r);
			}
		}
}
var br = {},
	be = Ut(br),
	Br = Ut(br),
	zr = Ut(br);
function en(e) {
	if (e === br) throw Error(P(174));
	return e;
}
function ya(e, t) {
	switch ((B(zr, t), B(Br, e), B(be, br), (e = t.nodeType), e)) {
		case 9:
		case 11:
			t = (t = t.documentElement) ? t.namespaceURI : Us(null, '');
			break;
		default:
			(e = e === 8 ? t.parentNode : t),
				(t = e.namespaceURI || null),
				(e = e.tagName),
				(t = Us(t, e));
	}
	U(be), B(be, t);
}
function Hn() {
	U(be), U(Br), U(zr);
}
function fh(e) {
	en(zr.current);
	var t = en(be.current),
		n = Us(t, e.type);
	t !== n && (B(Br, e), B(be, n));
}
function va(e) {
	Br.current === e && (U(be), U(Br));
}
var W = Ut(0);
function ro(e) {
	for (var t = e; t !== null; ) {
		if (t.tag === 13) {
			var n = t.memoizedState;
			if (
				n !== null &&
				((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
			)
				return t;
		} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
			if (t.flags & 128) return t;
		} else if (t.child !== null) {
			(t.child.return = t), (t = t.child);
			continue;
		}
		if (t === e) break;
		for (; t.sibling === null; ) {
			if (t.return === null || t.return === e) return null;
			t = t.return;
		}
		(t.sibling.return = t.return), (t = t.sibling);
	}
	return null;
}
var fs = [];
function wa() {
	for (var e = 0; e < fs.length; e++)
		fs[e]._workInProgressVersionPrimary = null;
	fs.length = 0;
}
var Di = gt.ReactCurrentDispatcher,
	ds = gt.ReactCurrentBatchConfig,
	un = 0,
	K = null,
	b = null,
	re = null,
	io = !1,
	xr = !1,
	Ur = 0,
	By = 0;
function ue() {
	throw Error(P(321));
}
function Sa(e, t) {
	if (t === null) return !1;
	for (var n = 0; n < t.length && n < e.length; n++)
		if (!Ye(e[n], t[n])) return !1;
	return !0;
}
function xa(e, t, n, r, i, o) {
	if (
		((un = o),
		(K = t),
		(t.memoizedState = null),
		(t.updateQueue = null),
		(t.lanes = 0),
		(Di.current = e === null || e.memoizedState === null ? Wy : Hy),
		(e = n(r, i)),
		xr)
	) {
		o = 0;
		do {
			if (((xr = !1), (Ur = 0), 25 <= o)) throw Error(P(301));
			(o += 1),
				(re = b = null),
				(t.updateQueue = null),
				(Di.current = Ky),
				(e = n(r, i));
		} while (xr);
	}
	if (
		((Di.current = oo),
		(t = b !== null && b.next !== null),
		(un = 0),
		(re = b = K = null),
		(io = !1),
		t)
	)
		throw Error(P(300));
	return e;
}
function Pa() {
	var e = Ur !== 0;
	return (Ur = 0), e;
}
function Ze() {
	var e = {
		memoizedState: null,
		baseState: null,
		baseQueue: null,
		queue: null,
		next: null,
	};
	return re === null ? (K.memoizedState = re = e) : (re = re.next = e), re;
}
function ze() {
	if (b === null) {
		var e = K.alternate;
		e = e !== null ? e.memoizedState : null;
	} else e = b.next;
	var t = re === null ? K.memoizedState : re.next;
	if (t !== null) (re = t), (b = e);
	else {
		if (e === null) throw Error(P(310));
		(b = e),
			(e = {
				memoizedState: b.memoizedState,
				baseState: b.baseState,
				baseQueue: b.baseQueue,
				queue: b.queue,
				next: null,
			}),
			re === null ? (K.memoizedState = re = e) : (re = re.next = e);
	}
	return re;
}
function $r(e, t) {
	return typeof t == 'function' ? t(e) : t;
}
function hs(e) {
	var t = ze(),
		n = t.queue;
	if (n === null) throw Error(P(311));
	n.lastRenderedReducer = e;
	var r = b,
		i = r.baseQueue,
		o = n.pending;
	if (o !== null) {
		if (i !== null) {
			var s = i.next;
			(i.next = o.next), (o.next = s);
		}
		(r.baseQueue = i = o), (n.pending = null);
	}
	if (i !== null) {
		(o = i.next), (r = r.baseState);
		var l = (s = null),
			a = null,
			u = o;
		do {
			var c = u.lane;
			if ((un & c) === c)
				a !== null &&
					(a = a.next =
						{
							lane: 0,
							action: u.action,
							hasEagerState: u.hasEagerState,
							eagerState: u.eagerState,
							next: null,
						}),
					(r = u.hasEagerState ? u.eagerState : e(r, u.action));
			else {
				var f = {
					lane: c,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null,
				};
				a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
					(K.lanes |= c),
					(cn |= c);
			}
			u = u.next;
		} while (u !== null && u !== o);
		a === null ? (s = r) : (a.next = l),
			Ye(r, t.memoizedState) || (xe = !0),
			(t.memoizedState = r),
			(t.baseState = s),
			(t.baseQueue = a),
			(n.lastRenderedState = r);
	}
	if (((e = n.interleaved), e !== null)) {
		i = e;
		do (o = i.lane), (K.lanes |= o), (cn |= o), (i = i.next);
		while (i !== e);
	} else i === null && (n.lanes = 0);
	return [t.memoizedState, n.dispatch];
}
function ps(e) {
	var t = ze(),
		n = t.queue;
	if (n === null) throw Error(P(311));
	n.lastRenderedReducer = e;
	var r = n.dispatch,
		i = n.pending,
		o = t.memoizedState;
	if (i !== null) {
		n.pending = null;
		var s = (i = i.next);
		do (o = e(o, s.action)), (s = s.next);
		while (s !== i);
		Ye(o, t.memoizedState) || (xe = !0),
			(t.memoizedState = o),
			t.baseQueue === null && (t.baseState = o),
			(n.lastRenderedState = o);
	}
	return [o, r];
}
function dh() {}
function hh(e, t) {
	var n = K,
		r = ze(),
		i = t(),
		o = !Ye(r.memoizedState, i);
	if (
		(o && ((r.memoizedState = i), (xe = !0)),
		(r = r.queue),
		Ca(gh.bind(null, n, r, e), [e]),
		r.getSnapshot !== t || o || (re !== null && re.memoizedState.tag & 1))
	) {
		if (
			((n.flags |= 2048),
			Wr(9, mh.bind(null, n, r, i, t), void 0, null),
			ie === null)
		)
			throw Error(P(349));
		un & 30 || ph(n, t, i);
	}
	return i;
}
function ph(e, t, n) {
	(e.flags |= 16384),
		(e = { getSnapshot: t, value: n }),
		(t = K.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (K.updateQueue = t),
			  (t.stores = [e]))
			: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function mh(e, t, n, r) {
	(t.value = n), (t.getSnapshot = r), yh(t) && vh(e);
}
function gh(e, t, n) {
	return n(function () {
		yh(t) && vh(e);
	});
}
function yh(e) {
	var t = e.getSnapshot;
	e = e.value;
	try {
		var n = t();
		return !Ye(e, n);
	} catch {
		return !0;
	}
}
function vh(e) {
	var t = pt(e, 1);
	t !== null && Qe(t, e, 1, -1);
}
function rc(e) {
	var t = Ze();
	return (
		typeof e == 'function' && (e = e()),
		(t.memoizedState = t.baseState = e),
		(e = {
			pending: null,
			interleaved: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: $r,
			lastRenderedState: e,
		}),
		(t.queue = e),
		(e = e.dispatch = $y.bind(null, K, e)),
		[t.memoizedState, e]
	);
}
function Wr(e, t, n, r) {
	return (
		(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
		(t = K.updateQueue),
		t === null
			? ((t = { lastEffect: null, stores: null }),
			  (K.updateQueue = t),
			  (t.lastEffect = e.next = e))
			: ((n = t.lastEffect),
			  n === null
					? (t.lastEffect = e.next = e)
					: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
		e
	);
}
function wh() {
	return ze().memoizedState;
}
function _i(e, t, n, r) {
	var i = Ze();
	(K.flags |= e),
		(i.memoizedState = Wr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ao(e, t, n, r) {
	var i = ze();
	r = r === void 0 ? null : r;
	var o = void 0;
	if (b !== null) {
		var s = b.memoizedState;
		if (((o = s.destroy), r !== null && Sa(r, s.deps))) {
			i.memoizedState = Wr(t, n, o, r);
			return;
		}
	}
	(K.flags |= e), (i.memoizedState = Wr(1 | t, n, o, r));
}
function ic(e, t) {
	return _i(8390656, 8, e, t);
}
function Ca(e, t) {
	return Ao(2048, 8, e, t);
}
function Sh(e, t) {
	return Ao(4, 2, e, t);
}
function xh(e, t) {
	return Ao(4, 4, e, t);
}
function Ph(e, t) {
	if (typeof t == 'function')
		return (
			(e = e()),
			t(e),
			function () {
				t(null);
			}
		);
	if (t != null)
		return (
			(e = e()),
			(t.current = e),
			function () {
				t.current = null;
			}
		);
}
function Ch(e, t, n) {
	return (
		(n = n != null ? n.concat([e]) : null), Ao(4, 4, Ph.bind(null, t, e), n)
	);
}
function Ta() {}
function Th(e, t) {
	var n = ze();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Sa(t, r[1])
		? r[0]
		: ((n.memoizedState = [e, t]), e);
}
function kh(e, t) {
	var n = ze();
	t = t === void 0 ? null : t;
	var r = n.memoizedState;
	return r !== null && t !== null && Sa(t, r[1])
		? r[0]
		: ((e = e()), (n.memoizedState = [e, t]), e);
}
function Eh(e, t, n) {
	return un & 21
		? (Ye(n, t) || ((n = Vd()), (K.lanes |= n), (cn |= n), (e.baseState = !0)),
		  t)
		: (e.baseState && ((e.baseState = !1), (xe = !0)), (e.memoizedState = n));
}
function zy(e, t) {
	var n = O;
	(O = n !== 0 && 4 > n ? n : 4), e(!0);
	var r = ds.transition;
	ds.transition = {};
	try {
		e(!1), t();
	} finally {
		(O = n), (ds.transition = r);
	}
}
function Rh() {
	return ze().memoizedState;
}
function Uy(e, t, n) {
	var r = _t(e);
	if (
		((n = {
			lane: r,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
		Ah(e))
	)
		Lh(t, n);
	else if (((n = uh(e, t, n, r)), n !== null)) {
		var i = ye();
		Qe(n, e, r, i), Mh(n, t, r);
	}
}
function $y(e, t, n) {
	var r = _t(e),
		i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
	if (Ah(e)) Lh(t, i);
	else {
		var o = e.alternate;
		if (
			e.lanes === 0 &&
			(o === null || o.lanes === 0) &&
			((o = t.lastRenderedReducer), o !== null)
		)
			try {
				var s = t.lastRenderedState,
					l = o(s, n);
				if (((i.hasEagerState = !0), (i.eagerState = l), Ye(l, s))) {
					var a = t.interleaved;
					a === null
						? ((i.next = i), ma(t))
						: ((i.next = a.next), (a.next = i)),
						(t.interleaved = i);
					return;
				}
			} catch {
			} finally {
			}
		(n = uh(e, t, i, r)),
			n !== null && ((i = ye()), Qe(n, e, r, i), Mh(n, t, r));
	}
}
function Ah(e) {
	var t = e.alternate;
	return e === K || (t !== null && t === K);
}
function Lh(e, t) {
	xr = io = !0;
	var n = e.pending;
	n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
		(e.pending = t);
}
function Mh(e, t, n) {
	if (n & 4194240) {
		var r = t.lanes;
		(r &= e.pendingLanes), (n |= r), (t.lanes = n), ta(e, n);
	}
}
var oo = {
		readContext: Be,
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
		unstable_isNewReconciler: !1,
	},
	Wy = {
		readContext: Be,
		useCallback: function (e, t) {
			return (Ze().memoizedState = [e, t === void 0 ? null : t]), e;
		},
		useContext: Be,
		useEffect: ic,
		useImperativeHandle: function (e, t, n) {
			return (
				(n = n != null ? n.concat([e]) : null),
				_i(4194308, 4, Ph.bind(null, t, e), n)
			);
		},
		useLayoutEffect: function (e, t) {
			return _i(4194308, 4, e, t);
		},
		useInsertionEffect: function (e, t) {
			return _i(4, 2, e, t);
		},
		useMemo: function (e, t) {
			var n = Ze();
			return (
				(t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
			);
		},
		useReducer: function (e, t, n) {
			var r = Ze();
			return (
				(t = n !== void 0 ? n(t) : t),
				(r.memoizedState = r.baseState = t),
				(e = {
					pending: null,
					interleaved: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: e,
					lastRenderedState: t,
				}),
				(r.queue = e),
				(e = e.dispatch = Uy.bind(null, K, e)),
				[r.memoizedState, e]
			);
		},
		useRef: function (e) {
			var t = Ze();
			return (e = { current: e }), (t.memoizedState = e);
		},
		useState: rc,
		useDebugValue: Ta,
		useDeferredValue: function (e) {
			return (Ze().memoizedState = e);
		},
		useTransition: function () {
			var e = rc(!1),
				t = e[0];
			return (e = zy.bind(null, e[1])), (Ze().memoizedState = e), [t, e];
		},
		useMutableSource: function () {},
		useSyncExternalStore: function (e, t, n) {
			var r = K,
				i = Ze();
			if ($) {
				if (n === void 0) throw Error(P(407));
				n = n();
			} else {
				if (((n = t()), ie === null)) throw Error(P(349));
				un & 30 || ph(r, t, n);
			}
			i.memoizedState = n;
			var o = { value: n, getSnapshot: t };
			return (
				(i.queue = o),
				ic(gh.bind(null, r, o, e), [e]),
				(r.flags |= 2048),
				Wr(9, mh.bind(null, r, o, n, t), void 0, null),
				n
			);
		},
		useId: function () {
			var e = Ze(),
				t = ie.identifierPrefix;
			if ($) {
				var n = ot,
					r = it;
				(n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
					(t = ':' + t + 'R' + n),
					(n = Ur++),
					0 < n && (t += 'H' + n.toString(32)),
					(t += ':');
			} else (n = By++), (t = ':' + t + 'r' + n.toString(32) + ':');
			return (e.memoizedState = t);
		},
		unstable_isNewReconciler: !1,
	},
	Hy = {
		readContext: Be,
		useCallback: Th,
		useContext: Be,
		useEffect: Ca,
		useImperativeHandle: Ch,
		useInsertionEffect: Sh,
		useLayoutEffect: xh,
		useMemo: kh,
		useReducer: hs,
		useRef: wh,
		useState: function () {
			return hs($r);
		},
		useDebugValue: Ta,
		useDeferredValue: function (e) {
			var t = ze();
			return Eh(t, b.memoizedState, e);
		},
		useTransition: function () {
			var e = hs($r)[0],
				t = ze().memoizedState;
			return [e, t];
		},
		useMutableSource: dh,
		useSyncExternalStore: hh,
		useId: Rh,
		unstable_isNewReconciler: !1,
	},
	Ky = {
		readContext: Be,
		useCallback: Th,
		useContext: Be,
		useEffect: Ca,
		useImperativeHandle: Ch,
		useInsertionEffect: Sh,
		useLayoutEffect: xh,
		useMemo: kh,
		useReducer: ps,
		useRef: wh,
		useState: function () {
			return ps($r);
		},
		useDebugValue: Ta,
		useDeferredValue: function (e) {
			var t = ze();
			return b === null ? (t.memoizedState = e) : Eh(t, b.memoizedState, e);
		},
		useTransition: function () {
			var e = ps($r)[0],
				t = ze().memoizedState;
			return [e, t];
		},
		useMutableSource: dh,
		useSyncExternalStore: hh,
		useId: Rh,
		unstable_isNewReconciler: !1,
	};
function $e(e, t) {
	if (e && e.defaultProps) {
		(t = G({}, t)), (e = e.defaultProps);
		for (var n in e) t[n] === void 0 && (t[n] = e[n]);
		return t;
	}
	return t;
}
function al(e, t, n, r) {
	(t = e.memoizedState),
		(n = n(r, t)),
		(n = n == null ? t : G({}, t, n)),
		(e.memoizedState = n),
		e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Lo = {
	isMounted: function (e) {
		return (e = e._reactInternals) ? hn(e) === e : !1;
	},
	enqueueSetState: function (e, t, n) {
		e = e._reactInternals;
		var r = ye(),
			i = _t(e),
			o = lt(r, i);
		(o.payload = t),
			n != null && (o.callback = n),
			(t = Vt(e, o, i)),
			t !== null && (Qe(t, e, i, r), Vi(t, e, i));
	},
	enqueueReplaceState: function (e, t, n) {
		e = e._reactInternals;
		var r = ye(),
			i = _t(e),
			o = lt(r, i);
		(o.tag = 1),
			(o.payload = t),
			n != null && (o.callback = n),
			(t = Vt(e, o, i)),
			t !== null && (Qe(t, e, i, r), Vi(t, e, i));
	},
	enqueueForceUpdate: function (e, t) {
		e = e._reactInternals;
		var n = ye(),
			r = _t(e),
			i = lt(n, r);
		(i.tag = 2),
			t != null && (i.callback = t),
			(t = Vt(e, i, r)),
			t !== null && (Qe(t, e, r, n), Vi(t, e, r));
	},
};
function oc(e, t, n, r, i, o, s) {
	return (
		(e = e.stateNode),
		typeof e.shouldComponentUpdate == 'function'
			? e.shouldComponentUpdate(r, o, s)
			: t.prototype && t.prototype.isPureReactComponent
			? !jr(n, r) || !jr(i, o)
			: !0
	);
}
function Vh(e, t, n) {
	var r = !1,
		i = Ft,
		o = t.contextType;
	return (
		typeof o == 'object' && o !== null
			? (o = Be(o))
			: ((i = Ce(t) ? ln : me.current),
			  (r = t.contextTypes),
			  (o = (r = r != null) ? Un(e, i) : Ft)),
		(t = new t(n, o)),
		(e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
		(t.updater = Lo),
		(e.stateNode = t),
		(t._reactInternals = e),
		r &&
			((e = e.stateNode),
			(e.__reactInternalMemoizedUnmaskedChildContext = i),
			(e.__reactInternalMemoizedMaskedChildContext = o)),
		t
	);
}
function sc(e, t, n, r) {
	(e = t.state),
		typeof t.componentWillReceiveProps == 'function' &&
			t.componentWillReceiveProps(n, r),
		typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
			t.UNSAFE_componentWillReceiveProps(n, r),
		t.state !== e && Lo.enqueueReplaceState(t, t.state, null);
}
function ul(e, t, n, r) {
	var i = e.stateNode;
	(i.props = n), (i.state = e.memoizedState), (i.refs = {}), ga(e);
	var o = t.contextType;
	typeof o == 'object' && o !== null
		? (i.context = Be(o))
		: ((o = Ce(t) ? ln : me.current), (i.context = Un(e, o))),
		(i.state = e.memoizedState),
		(o = t.getDerivedStateFromProps),
		typeof o == 'function' && (al(e, t, o, n), (i.state = e.memoizedState)),
		typeof t.getDerivedStateFromProps == 'function' ||
			typeof i.getSnapshotBeforeUpdate == 'function' ||
			(typeof i.UNSAFE_componentWillMount != 'function' &&
				typeof i.componentWillMount != 'function') ||
			((t = i.state),
			typeof i.componentWillMount == 'function' && i.componentWillMount(),
			typeof i.UNSAFE_componentWillMount == 'function' &&
				i.UNSAFE_componentWillMount(),
			t !== i.state && Lo.enqueueReplaceState(i, i.state, null),
			no(e, n, i, r),
			(i.state = e.memoizedState)),
		typeof i.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Kn(e, t) {
	try {
		var n = '',
			r = t;
		do (n += wg(r)), (r = r.return);
		while (r);
		var i = n;
	} catch (o) {
		i =
			`
Error generating stack: ` +
			o.message +
			`
` +
			o.stack;
	}
	return { value: e, source: t, stack: i, digest: null };
}
function ms(e, t, n) {
	return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function cl(e, t) {
	try {
		console.error(t.value);
	} catch (n) {
		setTimeout(function () {
			throw n;
		});
	}
}
var Gy = typeof WeakMap == 'function' ? WeakMap : Map;
function Dh(e, t, n) {
	(n = lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
	var r = t.value;
	return (
		(n.callback = function () {
			lo || ((lo = !0), (Sl = r)), cl(e, t);
		}),
		n
	);
}
function _h(e, t, n) {
	(n = lt(-1, n)), (n.tag = 3);
	var r = e.type.getDerivedStateFromError;
	if (typeof r == 'function') {
		var i = t.value;
		(n.payload = function () {
			return r(i);
		}),
			(n.callback = function () {
				cl(e, t);
			});
	}
	var o = e.stateNode;
	return (
		o !== null &&
			typeof o.componentDidCatch == 'function' &&
			(n.callback = function () {
				cl(e, t),
					typeof r != 'function' &&
						(Dt === null ? (Dt = new Set([this])) : Dt.add(this));
				var s = t.stack;
				this.componentDidCatch(t.value, {
					componentStack: s !== null ? s : '',
				});
			}),
		n
	);
}
function lc(e, t, n) {
	var r = e.pingCache;
	if (r === null) {
		r = e.pingCache = new Gy();
		var i = new Set();
		r.set(t, i);
	} else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
	i.has(n) || (i.add(n), (e = sv.bind(null, e, t, n)), t.then(e, e));
}
function ac(e) {
	do {
		var t;
		if (
			((t = e.tag === 13) &&
				((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
			t)
		)
			return e;
		e = e.return;
	} while (e !== null);
	return null;
}
function uc(e, t, n, r, i) {
	return e.mode & 1
		? ((e.flags |= 65536), (e.lanes = i), e)
		: (e === t
				? (e.flags |= 65536)
				: ((e.flags |= 128),
				  (n.flags |= 131072),
				  (n.flags &= -52805),
				  n.tag === 1 &&
						(n.alternate === null
							? (n.tag = 17)
							: ((t = lt(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
				  (n.lanes |= 1)),
		  e);
}
var Qy = gt.ReactCurrentOwner,
	xe = !1;
function ge(e, t, n, r) {
	t.child = e === null ? ah(t, null, n, r) : Wn(t, e.child, n, r);
}
function cc(e, t, n, r, i) {
	n = n.render;
	var o = t.ref;
	return (
		On(t, i),
		(r = xa(e, t, n, r, o, i)),
		(n = Pa()),
		e !== null && !xe
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  mt(e, t, i))
			: ($ && n && ua(t), (t.flags |= 1), ge(e, t, r, i), t.child)
	);
}
function fc(e, t, n, r, i) {
	if (e === null) {
		var o = n.type;
		return typeof o == 'function' &&
			!Da(o) &&
			o.defaultProps === void 0 &&
			n.compare === null &&
			n.defaultProps === void 0
			? ((t.tag = 15), (t.type = o), Nh(e, t, o, r, i))
			: ((e = Oi(n.type, null, r, t, t.mode, i)),
			  (e.ref = t.ref),
			  (e.return = t),
			  (t.child = e));
	}
	if (((o = e.child), !(e.lanes & i))) {
		var s = o.memoizedProps;
		if (
			((n = n.compare), (n = n !== null ? n : jr), n(s, r) && e.ref === t.ref)
		)
			return mt(e, t, i);
	}
	return (
		(t.flags |= 1),
		(e = Nt(o, r)),
		(e.ref = t.ref),
		(e.return = t),
		(t.child = e)
	);
}
function Nh(e, t, n, r, i) {
	if (e !== null) {
		var o = e.memoizedProps;
		if (jr(o, r) && e.ref === t.ref)
			if (((xe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
				e.flags & 131072 && (xe = !0);
			else return (t.lanes = e.lanes), mt(e, t, i);
	}
	return fl(e, t, n, r, i);
}
function jh(e, t, n) {
	var r = t.pendingProps,
		i = r.children,
		o = e !== null ? e.memoizedState : null;
	if (r.mode === 'hidden')
		if (!(t.mode & 1))
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				B(Rn, Ee),
				(Ee |= n);
		else {
			if (!(n & 1073741824))
				return (
					(e = o !== null ? o.baseLanes | n : n),
					(t.lanes = t.childLanes = 1073741824),
					(t.memoizedState = {
						baseLanes: e,
						cachePool: null,
						transitions: null,
					}),
					(t.updateQueue = null),
					B(Rn, Ee),
					(Ee |= e),
					null
				);
			(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
				(r = o !== null ? o.baseLanes : n),
				B(Rn, Ee),
				(Ee |= r);
		}
	else
		o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
			B(Rn, Ee),
			(Ee |= r);
	return ge(e, t, i, n), t.child;
}
function Fh(e, t) {
	var n = t.ref;
	((e === null && n !== null) || (e !== null && e.ref !== n)) &&
		((t.flags |= 512), (t.flags |= 2097152));
}
function fl(e, t, n, r, i) {
	var o = Ce(n) ? ln : me.current;
	return (
		(o = Un(t, o)),
		On(t, i),
		(n = xa(e, t, n, r, o, i)),
		(r = Pa()),
		e !== null && !xe
			? ((t.updateQueue = e.updateQueue),
			  (t.flags &= -2053),
			  (e.lanes &= ~i),
			  mt(e, t, i))
			: ($ && r && ua(t), (t.flags |= 1), ge(e, t, n, i), t.child)
	);
}
function dc(e, t, n, r, i) {
	if (Ce(n)) {
		var o = !0;
		qi(t);
	} else o = !1;
	if ((On(t, i), t.stateNode === null))
		Ni(e, t), Vh(t, n, r), ul(t, n, r, i), (r = !0);
	else if (e === null) {
		var s = t.stateNode,
			l = t.memoizedProps;
		s.props = l;
		var a = s.context,
			u = n.contextType;
		typeof u == 'object' && u !== null
			? (u = Be(u))
			: ((u = Ce(n) ? ln : me.current), (u = Un(t, u)));
		var c = n.getDerivedStateFromProps,
			f =
				typeof c == 'function' ||
				typeof s.getSnapshotBeforeUpdate == 'function';
		f ||
			(typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof s.componentWillReceiveProps != 'function') ||
			((l !== r || a !== u) && sc(t, s, r, u)),
			(xt = !1);
		var d = t.memoizedState;
		(s.state = d),
			no(t, r, s, i),
			(a = t.memoizedState),
			l !== r || d !== a || Pe.current || xt
				? (typeof c == 'function' && (al(t, n, c, r), (a = t.memoizedState)),
				  (l = xt || oc(t, n, l, r, d, a, u))
						? (f ||
								(typeof s.UNSAFE_componentWillMount != 'function' &&
									typeof s.componentWillMount != 'function') ||
								(typeof s.componentWillMount == 'function' &&
									s.componentWillMount(),
								typeof s.UNSAFE_componentWillMount == 'function' &&
									s.UNSAFE_componentWillMount()),
						  typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
						: (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
						  (t.memoizedProps = r),
						  (t.memoizedState = a)),
				  (s.props = r),
				  (s.state = a),
				  (s.context = u),
				  (r = l))
				: (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
				  (r = !1));
	} else {
		(s = t.stateNode),
			ch(e, t),
			(l = t.memoizedProps),
			(u = t.type === t.elementType ? l : $e(t.type, l)),
			(s.props = u),
			(f = t.pendingProps),
			(d = s.context),
			(a = n.contextType),
			typeof a == 'object' && a !== null
				? (a = Be(a))
				: ((a = Ce(n) ? ln : me.current), (a = Un(t, a)));
		var g = n.getDerivedStateFromProps;
		(c =
			typeof g == 'function' ||
			typeof s.getSnapshotBeforeUpdate == 'function') ||
			(typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
				typeof s.componentWillReceiveProps != 'function') ||
			((l !== f || d !== a) && sc(t, s, r, a)),
			(xt = !1),
			(d = t.memoizedState),
			(s.state = d),
			no(t, r, s, i);
		var y = t.memoizedState;
		l !== f || d !== y || Pe.current || xt
			? (typeof g == 'function' && (al(t, n, g, r), (y = t.memoizedState)),
			  (u = xt || oc(t, n, u, r, d, y, a) || !1)
					? (c ||
							(typeof s.UNSAFE_componentWillUpdate != 'function' &&
								typeof s.componentWillUpdate != 'function') ||
							(typeof s.componentWillUpdate == 'function' &&
								s.componentWillUpdate(r, y, a),
							typeof s.UNSAFE_componentWillUpdate == 'function' &&
								s.UNSAFE_componentWillUpdate(r, y, a)),
					  typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
					: (typeof s.componentDidUpdate != 'function' ||
							(l === e.memoizedProps && d === e.memoizedState) ||
							(t.flags |= 4),
					  typeof s.getSnapshotBeforeUpdate != 'function' ||
							(l === e.memoizedProps && d === e.memoizedState) ||
							(t.flags |= 1024),
					  (t.memoizedProps = r),
					  (t.memoizedState = y)),
			  (s.props = r),
			  (s.state = y),
			  (s.context = a),
			  (r = u))
			: (typeof s.componentDidUpdate != 'function' ||
					(l === e.memoizedProps && d === e.memoizedState) ||
					(t.flags |= 4),
			  typeof s.getSnapshotBeforeUpdate != 'function' ||
					(l === e.memoizedProps && d === e.memoizedState) ||
					(t.flags |= 1024),
			  (r = !1));
	}
	return dl(e, t, n, r, o, i);
}
function dl(e, t, n, r, i, o) {
	Fh(e, t);
	var s = (t.flags & 128) !== 0;
	if (!r && !s) return i && qu(t, n, !1), mt(e, t, o);
	(r = t.stateNode), (Qy.current = t);
	var l =
		s && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
	return (
		(t.flags |= 1),
		e !== null && s
			? ((t.child = Wn(t, e.child, null, o)), (t.child = Wn(t, null, l, o)))
			: ge(e, t, l, o),
		(t.memoizedState = r.state),
		i && qu(t, n, !0),
		t.child
	);
}
function Oh(e) {
	var t = e.stateNode;
	t.pendingContext
		? Zu(e, t.pendingContext, t.pendingContext !== t.context)
		: t.context && Zu(e, t.context, !1),
		ya(e, t.containerInfo);
}
function hc(e, t, n, r, i) {
	return $n(), fa(i), (t.flags |= 256), ge(e, t, n, r), t.child;
}
var hl = { dehydrated: null, treeContext: null, retryLane: 0 };
function pl(e) {
	return { baseLanes: e, cachePool: null, transitions: null };
}
function Ih(e, t, n) {
	var r = t.pendingProps,
		i = W.current,
		o = !1,
		s = (t.flags & 128) !== 0,
		l;
	if (
		((l = s) ||
			(l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
		l
			? ((o = !0), (t.flags &= -129))
			: (e === null || e.memoizedState !== null) && (i |= 1),
		B(W, i & 1),
		e === null)
	)
		return (
			sl(t),
			(e = t.memoizedState),
			e !== null && ((e = e.dehydrated), e !== null)
				? (t.mode & 1
						? e.data === '$!'
							? (t.lanes = 8)
							: (t.lanes = 1073741824)
						: (t.lanes = 1),
				  null)
				: ((s = r.children),
				  (e = r.fallback),
				  o
						? ((r = t.mode),
						  (o = t.child),
						  (s = { mode: 'hidden', children: s }),
						  !(r & 1) && o !== null
								? ((o.childLanes = 0), (o.pendingProps = s))
								: (o = Do(s, r, 0, null)),
						  (e = rn(e, r, n, null)),
						  (o.return = t),
						  (e.return = t),
						  (o.sibling = e),
						  (t.child = o),
						  (t.child.memoizedState = pl(n)),
						  (t.memoizedState = hl),
						  e)
						: ka(t, s))
		);
	if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
		return Yy(e, t, s, r, l, i, n);
	if (o) {
		(o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
		var a = { mode: 'hidden', children: r.children };
		return (
			!(s & 1) && t.child !== i
				? ((r = t.child),
				  (r.childLanes = 0),
				  (r.pendingProps = a),
				  (t.deletions = null))
				: ((r = Nt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
			l !== null ? (o = Nt(l, o)) : ((o = rn(o, s, n, null)), (o.flags |= 2)),
			(o.return = t),
			(r.return = t),
			(r.sibling = o),
			(t.child = r),
			(r = o),
			(o = t.child),
			(s = e.child.memoizedState),
			(s =
				s === null
					? pl(n)
					: {
							baseLanes: s.baseLanes | n,
							cachePool: null,
							transitions: s.transitions,
					  }),
			(o.memoizedState = s),
			(o.childLanes = e.childLanes & ~n),
			(t.memoizedState = hl),
			r
		);
	}
	return (
		(o = e.child),
		(e = o.sibling),
		(r = Nt(o, { mode: 'visible', children: r.children })),
		!(t.mode & 1) && (r.lanes = n),
		(r.return = t),
		(r.sibling = null),
		e !== null &&
			((n = t.deletions),
			n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
		(t.child = r),
		(t.memoizedState = null),
		r
	);
}
function ka(e, t) {
	return (
		(t = Do({ mode: 'visible', children: t }, e.mode, 0, null)),
		(t.return = e),
		(e.child = t)
	);
}
function wi(e, t, n, r) {
	return (
		r !== null && fa(r),
		Wn(t, e.child, null, n),
		(e = ka(t, t.pendingProps.children)),
		(e.flags |= 2),
		(t.memoizedState = null),
		e
	);
}
function Yy(e, t, n, r, i, o, s) {
	if (n)
		return t.flags & 256
			? ((t.flags &= -257), (r = ms(Error(P(422)))), wi(e, t, s, r))
			: t.memoizedState !== null
			? ((t.child = e.child), (t.flags |= 128), null)
			: ((o = r.fallback),
			  (i = t.mode),
			  (r = Do({ mode: 'visible', children: r.children }, i, 0, null)),
			  (o = rn(o, i, s, null)),
			  (o.flags |= 2),
			  (r.return = t),
			  (o.return = t),
			  (r.sibling = o),
			  (t.child = r),
			  t.mode & 1 && Wn(t, e.child, null, s),
			  (t.child.memoizedState = pl(s)),
			  (t.memoizedState = hl),
			  o);
	if (!(t.mode & 1)) return wi(e, t, s, null);
	if (i.data === '$!') {
		if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
		return (r = l), (o = Error(P(419))), (r = ms(o, r, void 0)), wi(e, t, s, r);
	}
	if (((l = (s & e.childLanes) !== 0), xe || l)) {
		if (((r = ie), r !== null)) {
			switch (s & -s) {
				case 4:
					i = 2;
					break;
				case 16:
					i = 8;
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
					i = 32;
					break;
				case 536870912:
					i = 268435456;
					break;
				default:
					i = 0;
			}
			(i = i & (r.suspendedLanes | s) ? 0 : i),
				i !== 0 &&
					i !== o.retryLane &&
					((o.retryLane = i), pt(e, i), Qe(r, e, i, -1));
		}
		return Va(), (r = ms(Error(P(421)))), wi(e, t, s, r);
	}
	return i.data === '$?'
		? ((t.flags |= 128),
		  (t.child = e.child),
		  (t = lv.bind(null, e)),
		  (i._reactRetry = t),
		  null)
		: ((e = o.treeContext),
		  (Re = Mt(i.nextSibling)),
		  (Ae = t),
		  ($ = !0),
		  (He = null),
		  e !== null &&
				((je[Fe++] = it),
				(je[Fe++] = ot),
				(je[Fe++] = an),
				(it = e.id),
				(ot = e.overflow),
				(an = t)),
		  (t = ka(t, r.children)),
		  (t.flags |= 4096),
		  t);
}
function pc(e, t, n) {
	e.lanes |= t;
	var r = e.alternate;
	r !== null && (r.lanes |= t), ll(e.return, t, n);
}
function gs(e, t, n, r, i) {
	var o = e.memoizedState;
	o === null
		? (e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
		  })
		: ((o.isBackwards = t),
		  (o.rendering = null),
		  (o.renderingStartTime = 0),
		  (o.last = r),
		  (o.tail = n),
		  (o.tailMode = i));
}
function Bh(e, t, n) {
	var r = t.pendingProps,
		i = r.revealOrder,
		o = r.tail;
	if ((ge(e, t, r.children, n), (r = W.current), r & 2))
		(r = (r & 1) | 2), (t.flags |= 128);
	else {
		if (e !== null && e.flags & 128)
			e: for (e = t.child; e !== null; ) {
				if (e.tag === 13) e.memoizedState !== null && pc(e, n, t);
				else if (e.tag === 19) pc(e, n, t);
				else if (e.child !== null) {
					(e.child.return = e), (e = e.child);
					continue;
				}
				if (e === t) break e;
				for (; e.sibling === null; ) {
					if (e.return === null || e.return === t) break e;
					e = e.return;
				}
				(e.sibling.return = e.return), (e = e.sibling);
			}
		r &= 1;
	}
	if ((B(W, r), !(t.mode & 1))) t.memoizedState = null;
	else
		switch (i) {
			case 'forwards':
				for (n = t.child, i = null; n !== null; )
					(e = n.alternate),
						e !== null && ro(e) === null && (i = n),
						(n = n.sibling);
				(n = i),
					n === null
						? ((i = t.child), (t.child = null))
						: ((i = n.sibling), (n.sibling = null)),
					gs(t, !1, i, n, o);
				break;
			case 'backwards':
				for (n = null, i = t.child, t.child = null; i !== null; ) {
					if (((e = i.alternate), e !== null && ro(e) === null)) {
						t.child = i;
						break;
					}
					(e = i.sibling), (i.sibling = n), (n = i), (i = e);
				}
				gs(t, !0, n, null, o);
				break;
			case 'together':
				gs(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
	return t.child;
}
function Ni(e, t) {
	!(t.mode & 1) &&
		e !== null &&
		((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function mt(e, t, n) {
	if (
		(e !== null && (t.dependencies = e.dependencies),
		(cn |= t.lanes),
		!(n & t.childLanes))
	)
		return null;
	if (e !== null && t.child !== e.child) throw Error(P(153));
	if (t.child !== null) {
		for (
			e = t.child, n = Nt(e, e.pendingProps), t.child = n, n.return = t;
			e.sibling !== null;

		)
			(e = e.sibling), (n = n.sibling = Nt(e, e.pendingProps)), (n.return = t);
		n.sibling = null;
	}
	return t.child;
}
function Xy(e, t, n) {
	switch (t.tag) {
		case 3:
			Oh(t), $n();
			break;
		case 5:
			fh(t);
			break;
		case 1:
			Ce(t.type) && qi(t);
			break;
		case 4:
			ya(t, t.stateNode.containerInfo);
			break;
		case 10:
			var r = t.type._context,
				i = t.memoizedProps.value;
			B(eo, r._currentValue), (r._currentValue = i);
			break;
		case 13:
			if (((r = t.memoizedState), r !== null))
				return r.dehydrated !== null
					? (B(W, W.current & 1), (t.flags |= 128), null)
					: n & t.child.childLanes
					? Ih(e, t, n)
					: (B(W, W.current & 1),
					  (e = mt(e, t, n)),
					  e !== null ? e.sibling : null);
			B(W, W.current & 1);
			break;
		case 19:
			if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
				if (r) return Bh(e, t, n);
				t.flags |= 128;
			}
			if (
				((i = t.memoizedState),
				i !== null &&
					((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
				B(W, W.current),
				r)
			)
				break;
			return null;
		case 22:
		case 23:
			return (t.lanes = 0), jh(e, t, n);
	}
	return mt(e, t, n);
}
var zh, ml, Uh, $h;
zh = function (e, t) {
	for (var n = t.child; n !== null; ) {
		if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
		else if (n.tag !== 4 && n.child !== null) {
			(n.child.return = n), (n = n.child);
			continue;
		}
		if (n === t) break;
		for (; n.sibling === null; ) {
			if (n.return === null || n.return === t) return;
			n = n.return;
		}
		(n.sibling.return = n.return), (n = n.sibling);
	}
};
ml = function () {};
Uh = function (e, t, n, r) {
	var i = e.memoizedProps;
	if (i !== r) {
		(e = t.stateNode), en(be.current);
		var o = null;
		switch (n) {
			case 'input':
				(i = Os(e, i)), (r = Os(e, r)), (o = []);
				break;
			case 'select':
				(i = G({}, i, { value: void 0 })),
					(r = G({}, r, { value: void 0 })),
					(o = []);
				break;
			case 'textarea':
				(i = zs(e, i)), (r = zs(e, r)), (o = []);
				break;
			default:
				typeof i.onClick != 'function' &&
					typeof r.onClick == 'function' &&
					(e.onclick = Xi);
		}
		$s(n, r);
		var s;
		n = null;
		for (u in i)
			if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
				if (u === 'style') {
					var l = i[u];
					for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''));
				} else
					u !== 'dangerouslySetInnerHTML' &&
						u !== 'children' &&
						u !== 'suppressContentEditableWarning' &&
						u !== 'suppressHydrationWarning' &&
						u !== 'autoFocus' &&
						(Ar.hasOwnProperty(u)
							? o || (o = [])
							: (o = o || []).push(u, null));
		for (u in r) {
			var a = r[u];
			if (
				((l = i != null ? i[u] : void 0),
				r.hasOwnProperty(u) && a !== l && (a != null || l != null))
			)
				if (u === 'style')
					if (l) {
						for (s in l)
							!l.hasOwnProperty(s) ||
								(a && a.hasOwnProperty(s)) ||
								(n || (n = {}), (n[s] = ''));
						for (s in a)
							a.hasOwnProperty(s) &&
								l[s] !== a[s] &&
								(n || (n = {}), (n[s] = a[s]));
					} else n || (o || (o = []), o.push(u, n)), (n = a);
				else
					u === 'dangerouslySetInnerHTML'
						? ((a = a ? a.__html : void 0),
						  (l = l ? l.__html : void 0),
						  a != null && l !== a && (o = o || []).push(u, a))
						: u === 'children'
						? (typeof a != 'string' && typeof a != 'number') ||
						  (o = o || []).push(u, '' + a)
						: u !== 'suppressContentEditableWarning' &&
						  u !== 'suppressHydrationWarning' &&
						  (Ar.hasOwnProperty(u)
								? (a != null && u === 'onScroll' && z('scroll', e),
								  o || l === a || (o = []))
								: (o = o || []).push(u, a));
		}
		n && (o = o || []).push('style', n);
		var u = o;
		(t.updateQueue = u) && (t.flags |= 4);
	}
};
$h = function (e, t, n, r) {
	n !== r && (t.flags |= 4);
};
function lr(e, t) {
	if (!$)
		switch (e.tailMode) {
			case 'hidden':
				t = e.tail;
				for (var n = null; t !== null; )
					t.alternate !== null && (n = t), (t = t.sibling);
				n === null ? (e.tail = null) : (n.sibling = null);
				break;
			case 'collapsed':
				n = e.tail;
				for (var r = null; n !== null; )
					n.alternate !== null && (r = n), (n = n.sibling);
				r === null
					? t || e.tail === null
						? (e.tail = null)
						: (e.tail.sibling = null)
					: (r.sibling = null);
		}
}
function ce(e) {
	var t = e.alternate !== null && e.alternate.child === e.child,
		n = 0,
		r = 0;
	if (t)
		for (var i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags & 14680064),
				(r |= i.flags & 14680064),
				(i.return = e),
				(i = i.sibling);
	else
		for (i = e.child; i !== null; )
			(n |= i.lanes | i.childLanes),
				(r |= i.subtreeFlags),
				(r |= i.flags),
				(i.return = e),
				(i = i.sibling);
	return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Zy(e, t, n) {
	var r = t.pendingProps;
	switch ((ca(t), t.tag)) {
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
			return ce(t), null;
		case 1:
			return Ce(t.type) && Zi(), ce(t), null;
		case 3:
			return (
				(r = t.stateNode),
				Hn(),
				U(Pe),
				U(me),
				wa(),
				r.pendingContext &&
					((r.context = r.pendingContext), (r.pendingContext = null)),
				(e === null || e.child === null) &&
					(yi(t)
						? (t.flags |= 4)
						: e === null ||
						  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
						  ((t.flags |= 1024), He !== null && (Cl(He), (He = null)))),
				ml(e, t),
				ce(t),
				null
			);
		case 5:
			va(t);
			var i = en(zr.current);
			if (((n = t.type), e !== null && t.stateNode != null))
				Uh(e, t, n, r, i),
					e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
			else {
				if (!r) {
					if (t.stateNode === null) throw Error(P(166));
					return ce(t), null;
				}
				if (((e = en(be.current)), yi(t))) {
					(r = t.stateNode), (n = t.type);
					var o = t.memoizedProps;
					switch (((r[qe] = t), (r[Ir] = o), (e = (t.mode & 1) !== 0), n)) {
						case 'dialog':
							z('cancel', r), z('close', r);
							break;
						case 'iframe':
						case 'object':
						case 'embed':
							z('load', r);
							break;
						case 'video':
						case 'audio':
							for (i = 0; i < hr.length; i++) z(hr[i], r);
							break;
						case 'source':
							z('error', r);
							break;
						case 'img':
						case 'image':
						case 'link':
							z('error', r), z('load', r);
							break;
						case 'details':
							z('toggle', r);
							break;
						case 'input':
							Cu(r, o), z('invalid', r);
							break;
						case 'select':
							(r._wrapperState = { wasMultiple: !!o.multiple }),
								z('invalid', r);
							break;
						case 'textarea':
							ku(r, o), z('invalid', r);
					}
					$s(n, o), (i = null);
					for (var s in o)
						if (o.hasOwnProperty(s)) {
							var l = o[s];
							s === 'children'
								? typeof l == 'string'
									? r.textContent !== l &&
									  (o.suppressHydrationWarning !== !0 &&
											gi(r.textContent, l, e),
									  (i = ['children', l]))
									: typeof l == 'number' &&
									  r.textContent !== '' + l &&
									  (o.suppressHydrationWarning !== !0 &&
											gi(r.textContent, l, e),
									  (i = ['children', '' + l]))
								: Ar.hasOwnProperty(s) &&
								  l != null &&
								  s === 'onScroll' &&
								  z('scroll', r);
						}
					switch (n) {
						case 'input':
							ai(r), Tu(r, o, !0);
							break;
						case 'textarea':
							ai(r), Eu(r);
							break;
						case 'select':
						case 'option':
							break;
						default:
							typeof o.onClick == 'function' && (r.onclick = Xi);
					}
					(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
				} else {
					(s = i.nodeType === 9 ? i : i.ownerDocument),
						e === 'http://www.w3.org/1999/xhtml' && (e = gd(n)),
						e === 'http://www.w3.org/1999/xhtml'
							? n === 'script'
								? ((e = s.createElement('div')),
								  (e.innerHTML = '<script></script>'),
								  (e = e.removeChild(e.firstChild)))
								: typeof r.is == 'string'
								? (e = s.createElement(n, { is: r.is }))
								: ((e = s.createElement(n)),
								  n === 'select' &&
										((s = e),
										r.multiple
											? (s.multiple = !0)
											: r.size && (s.size = r.size)))
							: (e = s.createElementNS(e, n)),
						(e[qe] = t),
						(e[Ir] = r),
						zh(e, t, !1, !1),
						(t.stateNode = e);
					e: {
						switch (((s = Ws(n, r)), n)) {
							case 'dialog':
								z('cancel', e), z('close', e), (i = r);
								break;
							case 'iframe':
							case 'object':
							case 'embed':
								z('load', e), (i = r);
								break;
							case 'video':
							case 'audio':
								for (i = 0; i < hr.length; i++) z(hr[i], e);
								i = r;
								break;
							case 'source':
								z('error', e), (i = r);
								break;
							case 'img':
							case 'image':
							case 'link':
								z('error', e), z('load', e), (i = r);
								break;
							case 'details':
								z('toggle', e), (i = r);
								break;
							case 'input':
								Cu(e, r), (i = Os(e, r)), z('invalid', e);
								break;
							case 'option':
								i = r;
								break;
							case 'select':
								(e._wrapperState = { wasMultiple: !!r.multiple }),
									(i = G({}, r, { value: void 0 })),
									z('invalid', e);
								break;
							case 'textarea':
								ku(e, r), (i = zs(e, r)), z('invalid', e);
								break;
							default:
								i = r;
						}
						$s(n, i), (l = i);
						for (o in l)
							if (l.hasOwnProperty(o)) {
								var a = l[o];
								o === 'style'
									? wd(e, a)
									: o === 'dangerouslySetInnerHTML'
									? ((a = a ? a.__html : void 0), a != null && yd(e, a))
									: o === 'children'
									? typeof a == 'string'
										? (n !== 'textarea' || a !== '') && Lr(e, a)
										: typeof a == 'number' && Lr(e, '' + a)
									: o !== 'suppressContentEditableWarning' &&
									  o !== 'suppressHydrationWarning' &&
									  o !== 'autoFocus' &&
									  (Ar.hasOwnProperty(o)
											? a != null && o === 'onScroll' && z('scroll', e)
											: a != null && Xl(e, o, a, s));
							}
						switch (n) {
							case 'input':
								ai(e), Tu(e, r, !1);
								break;
							case 'textarea':
								ai(e), Eu(e);
								break;
							case 'option':
								r.value != null && e.setAttribute('value', '' + jt(r.value));
								break;
							case 'select':
								(e.multiple = !!r.multiple),
									(o = r.value),
									o != null
										? _n(e, !!r.multiple, o, !1)
										: r.defaultValue != null &&
										  _n(e, !!r.multiple, r.defaultValue, !0);
								break;
							default:
								typeof i.onClick == 'function' && (e.onclick = Xi);
						}
						switch (n) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								r = !!r.autoFocus;
								break e;
							case 'img':
								r = !0;
								break e;
							default:
								r = !1;
						}
					}
					r && (t.flags |= 4);
				}
				t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
			}
			return ce(t), null;
		case 6:
			if (e && t.stateNode != null) $h(e, t, e.memoizedProps, r);
			else {
				if (typeof r != 'string' && t.stateNode === null) throw Error(P(166));
				if (((n = en(zr.current)), en(be.current), yi(t))) {
					if (
						((r = t.stateNode),
						(n = t.memoizedProps),
						(r[qe] = t),
						(o = r.nodeValue !== n) && ((e = Ae), e !== null))
					)
						switch (e.tag) {
							case 3:
								gi(r.nodeValue, n, (e.mode & 1) !== 0);
								break;
							case 5:
								e.memoizedProps.suppressHydrationWarning !== !0 &&
									gi(r.nodeValue, n, (e.mode & 1) !== 0);
						}
					o && (t.flags |= 4);
				} else
					(r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
						(r[qe] = t),
						(t.stateNode = r);
			}
			return ce(t), null;
		case 13:
			if (
				(U(W),
				(r = t.memoizedState),
				e === null ||
					(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
			) {
				if ($ && Re !== null && t.mode & 1 && !(t.flags & 128))
					sh(), $n(), (t.flags |= 98560), (o = !1);
				else if (((o = yi(t)), r !== null && r.dehydrated !== null)) {
					if (e === null) {
						if (!o) throw Error(P(318));
						if (
							((o = t.memoizedState),
							(o = o !== null ? o.dehydrated : null),
							!o)
						)
							throw Error(P(317));
						o[qe] = t;
					} else
						$n(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
					ce(t), (o = !1);
				} else He !== null && (Cl(He), (He = null)), (o = !0);
				if (!o) return t.flags & 65536 ? t : null;
			}
			return t.flags & 128
				? ((t.lanes = n), t)
				: ((r = r !== null),
				  r !== (e !== null && e.memoizedState !== null) &&
						r &&
						((t.child.flags |= 8192),
						t.mode & 1 &&
							(e === null || W.current & 1 ? ee === 0 && (ee = 3) : Va())),
				  t.updateQueue !== null && (t.flags |= 4),
				  ce(t),
				  null);
		case 4:
			return (
				Hn(), ml(e, t), e === null && Fr(t.stateNode.containerInfo), ce(t), null
			);
		case 10:
			return pa(t.type._context), ce(t), null;
		case 17:
			return Ce(t.type) && Zi(), ce(t), null;
		case 19:
			if ((U(W), (o = t.memoizedState), o === null)) return ce(t), null;
			if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
				if (r) lr(o, !1);
				else {
					if (ee !== 0 || (e !== null && e.flags & 128))
						for (e = t.child; e !== null; ) {
							if (((s = ro(e)), s !== null)) {
								for (
									t.flags |= 128,
										lr(o, !1),
										r = s.updateQueue,
										r !== null && ((t.updateQueue = r), (t.flags |= 4)),
										t.subtreeFlags = 0,
										r = n,
										n = t.child;
									n !== null;

								)
									(o = n),
										(e = r),
										(o.flags &= 14680066),
										(s = o.alternate),
										s === null
											? ((o.childLanes = 0),
											  (o.lanes = e),
											  (o.child = null),
											  (o.subtreeFlags = 0),
											  (o.memoizedProps = null),
											  (o.memoizedState = null),
											  (o.updateQueue = null),
											  (o.dependencies = null),
											  (o.stateNode = null))
											: ((o.childLanes = s.childLanes),
											  (o.lanes = s.lanes),
											  (o.child = s.child),
											  (o.subtreeFlags = 0),
											  (o.deletions = null),
											  (o.memoizedProps = s.memoizedProps),
											  (o.memoizedState = s.memoizedState),
											  (o.updateQueue = s.updateQueue),
											  (o.type = s.type),
											  (e = s.dependencies),
											  (o.dependencies =
													e === null
														? null
														: {
																lanes: e.lanes,
																firstContext: e.firstContext,
														  })),
										(n = n.sibling);
								return B(W, (W.current & 1) | 2), t.child;
							}
							e = e.sibling;
						}
					o.tail !== null &&
						Z() > Gn &&
						((t.flags |= 128), (r = !0), lr(o, !1), (t.lanes = 4194304));
				}
			else {
				if (!r)
					if (((e = ro(s)), e !== null)) {
						if (
							((t.flags |= 128),
							(r = !0),
							(n = e.updateQueue),
							n !== null && ((t.updateQueue = n), (t.flags |= 4)),
							lr(o, !0),
							o.tail === null && o.tailMode === 'hidden' && !s.alternate && !$)
						)
							return ce(t), null;
					} else
						2 * Z() - o.renderingStartTime > Gn &&
							n !== 1073741824 &&
							((t.flags |= 128), (r = !0), lr(o, !1), (t.lanes = 4194304));
				o.isBackwards
					? ((s.sibling = t.child), (t.child = s))
					: ((n = o.last),
					  n !== null ? (n.sibling = s) : (t.child = s),
					  (o.last = s));
			}
			return o.tail !== null
				? ((t = o.tail),
				  (o.rendering = t),
				  (o.tail = t.sibling),
				  (o.renderingStartTime = Z()),
				  (t.sibling = null),
				  (n = W.current),
				  B(W, r ? (n & 1) | 2 : n & 1),
				  t)
				: (ce(t), null);
		case 22:
		case 23:
			return (
				Ma(),
				(r = t.memoizedState !== null),
				e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
				r && t.mode & 1
					? Ee & 1073741824 && (ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
					: ce(t),
				null
			);
		case 24:
			return null;
		case 25:
			return null;
	}
	throw Error(P(156, t.tag));
}
function qy(e, t) {
	switch ((ca(t), t.tag)) {
		case 1:
			return (
				Ce(t.type) && Zi(),
				(e = t.flags),
				e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 3:
			return (
				Hn(),
				U(Pe),
				U(me),
				wa(),
				(e = t.flags),
				e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 5:
			return va(t), null;
		case 13:
			if ((U(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
				if (t.alternate === null) throw Error(P(340));
				$n();
			}
			return (
				(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
			);
		case 19:
			return U(W), null;
		case 4:
			return Hn(), null;
		case 10:
			return pa(t.type._context), null;
		case 22:
		case 23:
			return Ma(), null;
		case 24:
			return null;
		default:
			return null;
	}
}
var Si = !1,
	de = !1,
	Jy = typeof WeakSet == 'function' ? WeakSet : Set,
	L = null;
function En(e, t) {
	var n = e.ref;
	if (n !== null)
		if (typeof n == 'function')
			try {
				n(null);
			} catch (r) {
				Q(e, t, r);
			}
		else n.current = null;
}
function gl(e, t, n) {
	try {
		n();
	} catch (r) {
		Q(e, t, r);
	}
}
var mc = !1;
function by(e, t) {
	if (((bs = Gi), (e = Qd()), aa(e))) {
		if ('selectionStart' in e)
			var n = { start: e.selectionStart, end: e.selectionEnd };
		else
			e: {
				n = ((n = e.ownerDocument) && n.defaultView) || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var i = r.anchorOffset,
						o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break e;
					}
					var s = 0,
						l = -1,
						a = -1,
						u = 0,
						c = 0,
						f = e,
						d = null;
					t: for (;;) {
						for (
							var g;
							f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
								f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
								f.nodeType === 3 && (s += f.nodeValue.length),
								(g = f.firstChild) !== null;

						)
							(d = f), (f = g);
						for (;;) {
							if (f === e) break t;
							if (
								(d === n && ++u === i && (l = s),
								d === o && ++c === r && (a = s),
								(g = f.nextSibling) !== null)
							)
								break;
							(f = d), (d = f.parentNode);
						}
						f = g;
					}
					n = l === -1 || a === -1 ? null : { start: l, end: a };
				} else n = null;
			}
		n = n || { start: 0, end: 0 };
	} else n = null;
	for (el = { focusedElem: e, selectionRange: n }, Gi = !1, L = t; L !== null; )
		if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
			(e.return = t), (L = e);
		else
			for (; L !== null; ) {
				t = L;
				try {
					var y = t.alternate;
					if (t.flags & 1024)
						switch (t.tag) {
							case 0:
							case 11:
							case 15:
								break;
							case 1:
								if (y !== null) {
									var v = y.memoizedProps,
										S = y.memoizedState,
										p = t.stateNode,
										h = p.getSnapshotBeforeUpdate(
											t.elementType === t.type ? v : $e(t.type, v),
											S
										);
									p.__reactInternalSnapshotBeforeUpdate = h;
								}
								break;
							case 3:
								var m = t.stateNode.containerInfo;
								m.nodeType === 1
									? (m.textContent = '')
									: m.nodeType === 9 &&
									  m.documentElement &&
									  m.removeChild(m.documentElement);
								break;
							case 5:
							case 6:
							case 4:
							case 17:
								break;
							default:
								throw Error(P(163));
						}
				} catch (w) {
					Q(t, t.return, w);
				}
				if (((e = t.sibling), e !== null)) {
					(e.return = t.return), (L = e);
					break;
				}
				L = t.return;
			}
	return (y = mc), (mc = !1), y;
}
function Pr(e, t, n) {
	var r = t.updateQueue;
	if (((r = r !== null ? r.lastEffect : null), r !== null)) {
		var i = (r = r.next);
		do {
			if ((i.tag & e) === e) {
				var o = i.destroy;
				(i.destroy = void 0), o !== void 0 && gl(t, n, o);
			}
			i = i.next;
		} while (i !== r);
	}
}
function Mo(e, t) {
	if (
		((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
	) {
		var n = (t = t.next);
		do {
			if ((n.tag & e) === e) {
				var r = n.create;
				n.destroy = r();
			}
			n = n.next;
		} while (n !== t);
	}
}
function yl(e) {
	var t = e.ref;
	if (t !== null) {
		var n = e.stateNode;
		switch (e.tag) {
			case 5:
				e = n;
				break;
			default:
				e = n;
		}
		typeof t == 'function' ? t(e) : (t.current = e);
	}
}
function Wh(e) {
	var t = e.alternate;
	t !== null && ((e.alternate = null), Wh(t)),
		(e.child = null),
		(e.deletions = null),
		(e.sibling = null),
		e.tag === 5 &&
			((t = e.stateNode),
			t !== null &&
				(delete t[qe], delete t[Ir], delete t[rl], delete t[jy], delete t[Fy])),
		(e.stateNode = null),
		(e.return = null),
		(e.dependencies = null),
		(e.memoizedProps = null),
		(e.memoizedState = null),
		(e.pendingProps = null),
		(e.stateNode = null),
		(e.updateQueue = null);
}
function Hh(e) {
	return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gc(e) {
	e: for (;;) {
		for (; e.sibling === null; ) {
			if (e.return === null || Hh(e.return)) return null;
			e = e.return;
		}
		for (
			e.sibling.return = e.return, e = e.sibling;
			e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

		) {
			if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
			(e.child.return = e), (e = e.child);
		}
		if (!(e.flags & 2)) return e.stateNode;
	}
}
function vl(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode),
			t
				? n.nodeType === 8
					? n.parentNode.insertBefore(e, t)
					: n.insertBefore(e, t)
				: (n.nodeType === 8
						? ((t = n.parentNode), t.insertBefore(e, n))
						: ((t = n), t.appendChild(e)),
				  (n = n._reactRootContainer),
				  n != null || t.onclick !== null || (t.onclick = Xi));
	else if (r !== 4 && ((e = e.child), e !== null))
		for (vl(e, t, n), e = e.sibling; e !== null; ) vl(e, t, n), (e = e.sibling);
}
function wl(e, t, n) {
	var r = e.tag;
	if (r === 5 || r === 6)
		(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
	else if (r !== 4 && ((e = e.child), e !== null))
		for (wl(e, t, n), e = e.sibling; e !== null; ) wl(e, t, n), (e = e.sibling);
}
var oe = null,
	We = !1;
function vt(e, t, n) {
	for (n = n.child; n !== null; ) Kh(e, t, n), (n = n.sibling);
}
function Kh(e, t, n) {
	if (Je && typeof Je.onCommitFiberUnmount == 'function')
		try {
			Je.onCommitFiberUnmount(Po, n);
		} catch {}
	switch (n.tag) {
		case 5:
			de || En(n, t);
		case 6:
			var r = oe,
				i = We;
			(oe = null),
				vt(e, t, n),
				(oe = r),
				(We = i),
				oe !== null &&
					(We
						? ((e = oe),
						  (n = n.stateNode),
						  e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
						: oe.removeChild(n.stateNode));
			break;
		case 18:
			oe !== null &&
				(We
					? ((e = oe),
					  (n = n.stateNode),
					  e.nodeType === 8
							? us(e.parentNode, n)
							: e.nodeType === 1 && us(e, n),
					  _r(e))
					: us(oe, n.stateNode));
			break;
		case 4:
			(r = oe),
				(i = We),
				(oe = n.stateNode.containerInfo),
				(We = !0),
				vt(e, t, n),
				(oe = r),
				(We = i);
			break;
		case 0:
		case 11:
		case 14:
		case 15:
			if (
				!de &&
				((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
			) {
				i = r = r.next;
				do {
					var o = i,
						s = o.destroy;
					(o = o.tag),
						s !== void 0 && (o & 2 || o & 4) && gl(n, t, s),
						(i = i.next);
				} while (i !== r);
			}
			vt(e, t, n);
			break;
		case 1:
			if (
				!de &&
				(En(n, t),
				(r = n.stateNode),
				typeof r.componentWillUnmount == 'function')
			)
				try {
					(r.props = n.memoizedProps),
						(r.state = n.memoizedState),
						r.componentWillUnmount();
				} catch (l) {
					Q(n, t, l);
				}
			vt(e, t, n);
			break;
		case 21:
			vt(e, t, n);
			break;
		case 22:
			n.mode & 1
				? ((de = (r = de) || n.memoizedState !== null), vt(e, t, n), (de = r))
				: vt(e, t, n);
			break;
		default:
			vt(e, t, n);
	}
}
function yc(e) {
	var t = e.updateQueue;
	if (t !== null) {
		e.updateQueue = null;
		var n = e.stateNode;
		n === null && (n = e.stateNode = new Jy()),
			t.forEach(function (r) {
				var i = av.bind(null, e, r);
				n.has(r) || (n.add(r), r.then(i, i));
			});
	}
}
function Ue(e, t) {
	var n = t.deletions;
	if (n !== null)
		for (var r = 0; r < n.length; r++) {
			var i = n[r];
			try {
				var o = e,
					s = t,
					l = s;
				e: for (; l !== null; ) {
					switch (l.tag) {
						case 5:
							(oe = l.stateNode), (We = !1);
							break e;
						case 3:
							(oe = l.stateNode.containerInfo), (We = !0);
							break e;
						case 4:
							(oe = l.stateNode.containerInfo), (We = !0);
							break e;
					}
					l = l.return;
				}
				if (oe === null) throw Error(P(160));
				Kh(o, s, i), (oe = null), (We = !1);
				var a = i.alternate;
				a !== null && (a.return = null), (i.return = null);
			} catch (u) {
				Q(i, t, u);
			}
		}
	if (t.subtreeFlags & 12854)
		for (t = t.child; t !== null; ) Gh(t, e), (t = t.sibling);
}
function Gh(e, t) {
	var n = e.alternate,
		r = e.flags;
	switch (e.tag) {
		case 0:
		case 11:
		case 14:
		case 15:
			if ((Ue(t, e), Xe(e), r & 4)) {
				try {
					Pr(3, e, e.return), Mo(3, e);
				} catch (v) {
					Q(e, e.return, v);
				}
				try {
					Pr(5, e, e.return);
				} catch (v) {
					Q(e, e.return, v);
				}
			}
			break;
		case 1:
			Ue(t, e), Xe(e), r & 512 && n !== null && En(n, n.return);
			break;
		case 5:
			if (
				(Ue(t, e),
				Xe(e),
				r & 512 && n !== null && En(n, n.return),
				e.flags & 32)
			) {
				var i = e.stateNode;
				try {
					Lr(i, '');
				} catch (v) {
					Q(e, e.return, v);
				}
			}
			if (r & 4 && ((i = e.stateNode), i != null)) {
				var o = e.memoizedProps,
					s = n !== null ? n.memoizedProps : o,
					l = e.type,
					a = e.updateQueue;
				if (((e.updateQueue = null), a !== null))
					try {
						l === 'input' && o.type === 'radio' && o.name != null && pd(i, o),
							Ws(l, s);
						var u = Ws(l, o);
						for (s = 0; s < a.length; s += 2) {
							var c = a[s],
								f = a[s + 1];
							c === 'style'
								? wd(i, f)
								: c === 'dangerouslySetInnerHTML'
								? yd(i, f)
								: c === 'children'
								? Lr(i, f)
								: Xl(i, c, f, u);
						}
						switch (l) {
							case 'input':
								Is(i, o);
								break;
							case 'textarea':
								md(i, o);
								break;
							case 'select':
								var d = i._wrapperState.wasMultiple;
								i._wrapperState.wasMultiple = !!o.multiple;
								var g = o.value;
								g != null
									? _n(i, !!o.multiple, g, !1)
									: d !== !!o.multiple &&
									  (o.defaultValue != null
											? _n(i, !!o.multiple, o.defaultValue, !0)
											: _n(i, !!o.multiple, o.multiple ? [] : '', !1));
						}
						i[Ir] = o;
					} catch (v) {
						Q(e, e.return, v);
					}
			}
			break;
		case 6:
			if ((Ue(t, e), Xe(e), r & 4)) {
				if (e.stateNode === null) throw Error(P(162));
				(i = e.stateNode), (o = e.memoizedProps);
				try {
					i.nodeValue = o;
				} catch (v) {
					Q(e, e.return, v);
				}
			}
			break;
		case 3:
			if (
				(Ue(t, e), Xe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
			)
				try {
					_r(t.containerInfo);
				} catch (v) {
					Q(e, e.return, v);
				}
			break;
		case 4:
			Ue(t, e), Xe(e);
			break;
		case 13:
			Ue(t, e),
				Xe(e),
				(i = e.child),
				i.flags & 8192 &&
					((o = i.memoizedState !== null),
					(i.stateNode.isHidden = o),
					!o ||
						(i.alternate !== null && i.alternate.memoizedState !== null) ||
						(Aa = Z())),
				r & 4 && yc(e);
			break;
		case 22:
			if (
				((c = n !== null && n.memoizedState !== null),
				e.mode & 1 ? ((de = (u = de) || c), Ue(t, e), (de = u)) : Ue(t, e),
				Xe(e),
				r & 8192)
			) {
				if (
					((u = e.memoizedState !== null),
					(e.stateNode.isHidden = u) && !c && e.mode & 1)
				)
					for (L = e, c = e.child; c !== null; ) {
						for (f = L = c; L !== null; ) {
							switch (((d = L), (g = d.child), d.tag)) {
								case 0:
								case 11:
								case 14:
								case 15:
									Pr(4, d, d.return);
									break;
								case 1:
									En(d, d.return);
									var y = d.stateNode;
									if (typeof y.componentWillUnmount == 'function') {
										(r = d), (n = d.return);
										try {
											(t = r),
												(y.props = t.memoizedProps),
												(y.state = t.memoizedState),
												y.componentWillUnmount();
										} catch (v) {
											Q(r, n, v);
										}
									}
									break;
								case 5:
									En(d, d.return);
									break;
								case 22:
									if (d.memoizedState !== null) {
										wc(f);
										continue;
									}
							}
							g !== null ? ((g.return = d), (L = g)) : wc(f);
						}
						c = c.sibling;
					}
				e: for (c = null, f = e; ; ) {
					if (f.tag === 5) {
						if (c === null) {
							c = f;
							try {
								(i = f.stateNode),
									u
										? ((o = i.style),
										  typeof o.setProperty == 'function'
												? o.setProperty('display', 'none', 'important')
												: (o.display = 'none'))
										: ((l = f.stateNode),
										  (a = f.memoizedProps.style),
										  (s =
												a != null && a.hasOwnProperty('display')
													? a.display
													: null),
										  (l.style.display = vd('display', s)));
							} catch (v) {
								Q(e, e.return, v);
							}
						}
					} else if (f.tag === 6) {
						if (c === null)
							try {
								f.stateNode.nodeValue = u ? '' : f.memoizedProps;
							} catch (v) {
								Q(e, e.return, v);
							}
					} else if (
						((f.tag !== 22 && f.tag !== 23) ||
							f.memoizedState === null ||
							f === e) &&
						f.child !== null
					) {
						(f.child.return = f), (f = f.child);
						continue;
					}
					if (f === e) break e;
					for (; f.sibling === null; ) {
						if (f.return === null || f.return === e) break e;
						c === f && (c = null), (f = f.return);
					}
					c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
				}
			}
			break;
		case 19:
			Ue(t, e), Xe(e), r & 4 && yc(e);
			break;
		case 21:
			break;
		default:
			Ue(t, e), Xe(e);
	}
}
function Xe(e) {
	var t = e.flags;
	if (t & 2) {
		try {
			e: {
				for (var n = e.return; n !== null; ) {
					if (Hh(n)) {
						var r = n;
						break e;
					}
					n = n.return;
				}
				throw Error(P(160));
			}
			switch (r.tag) {
				case 5:
					var i = r.stateNode;
					r.flags & 32 && (Lr(i, ''), (r.flags &= -33));
					var o = gc(e);
					wl(e, o, i);
					break;
				case 3:
				case 4:
					var s = r.stateNode.containerInfo,
						l = gc(e);
					vl(e, l, s);
					break;
				default:
					throw Error(P(161));
			}
		} catch (a) {
			Q(e, e.return, a);
		}
		e.flags &= -3;
	}
	t & 4096 && (e.flags &= -4097);
}
function ev(e, t, n) {
	(L = e), Qh(e);
}
function Qh(e, t, n) {
	for (var r = (e.mode & 1) !== 0; L !== null; ) {
		var i = L,
			o = i.child;
		if (i.tag === 22 && r) {
			var s = i.memoizedState !== null || Si;
			if (!s) {
				var l = i.alternate,
					a = (l !== null && l.memoizedState !== null) || de;
				l = Si;
				var u = de;
				if (((Si = s), (de = a) && !u))
					for (L = i; L !== null; )
						(s = L),
							(a = s.child),
							s.tag === 22 && s.memoizedState !== null
								? Sc(i)
								: a !== null
								? ((a.return = s), (L = a))
								: Sc(i);
				for (; o !== null; ) (L = o), Qh(o), (o = o.sibling);
				(L = i), (Si = l), (de = u);
			}
			vc(e);
		} else
			i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : vc(e);
	}
}
function vc(e) {
	for (; L !== null; ) {
		var t = L;
		if (t.flags & 8772) {
			var n = t.alternate;
			try {
				if (t.flags & 8772)
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
							de || Mo(5, t);
							break;
						case 1:
							var r = t.stateNode;
							if (t.flags & 4 && !de)
								if (n === null) r.componentDidMount();
								else {
									var i =
										t.elementType === t.type
											? n.memoizedProps
											: $e(t.type, n.memoizedProps);
									r.componentDidUpdate(
										i,
										n.memoizedState,
										r.__reactInternalSnapshotBeforeUpdate
									);
								}
							var o = t.updateQueue;
							o !== null && nc(t, o, r);
							break;
						case 3:
							var s = t.updateQueue;
							if (s !== null) {
								if (((n = null), t.child !== null))
									switch (t.child.tag) {
										case 5:
											n = t.child.stateNode;
											break;
										case 1:
											n = t.child.stateNode;
									}
								nc(t, s, n);
							}
							break;
						case 5:
							var l = t.stateNode;
							if (n === null && t.flags & 4) {
								n = l;
								var a = t.memoizedProps;
								switch (t.type) {
									case 'button':
									case 'input':
									case 'select':
									case 'textarea':
										a.autoFocus && n.focus();
										break;
									case 'img':
										a.src && (n.src = a.src);
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
								var u = t.alternate;
								if (u !== null) {
									var c = u.memoizedState;
									if (c !== null) {
										var f = c.dehydrated;
										f !== null && _r(f);
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
							throw Error(P(163));
					}
				de || (t.flags & 512 && yl(t));
			} catch (d) {
				Q(t, t.return, d);
			}
		}
		if (t === e) {
			L = null;
			break;
		}
		if (((n = t.sibling), n !== null)) {
			(n.return = t.return), (L = n);
			break;
		}
		L = t.return;
	}
}
function wc(e) {
	for (; L !== null; ) {
		var t = L;
		if (t === e) {
			L = null;
			break;
		}
		var n = t.sibling;
		if (n !== null) {
			(n.return = t.return), (L = n);
			break;
		}
		L = t.return;
	}
}
function Sc(e) {
	for (; L !== null; ) {
		var t = L;
		try {
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					var n = t.return;
					try {
						Mo(4, t);
					} catch (a) {
						Q(t, n, a);
					}
					break;
				case 1:
					var r = t.stateNode;
					if (typeof r.componentDidMount == 'function') {
						var i = t.return;
						try {
							r.componentDidMount();
						} catch (a) {
							Q(t, i, a);
						}
					}
					var o = t.return;
					try {
						yl(t);
					} catch (a) {
						Q(t, o, a);
					}
					break;
				case 5:
					var s = t.return;
					try {
						yl(t);
					} catch (a) {
						Q(t, s, a);
					}
			}
		} catch (a) {
			Q(t, t.return, a);
		}
		if (t === e) {
			L = null;
			break;
		}
		var l = t.sibling;
		if (l !== null) {
			(l.return = t.return), (L = l);
			break;
		}
		L = t.return;
	}
}
var tv = Math.ceil,
	so = gt.ReactCurrentDispatcher,
	Ea = gt.ReactCurrentOwner,
	Ie = gt.ReactCurrentBatchConfig,
	F = 0,
	ie = null,
	q = null,
	le = 0,
	Ee = 0,
	Rn = Ut(0),
	ee = 0,
	Hr = null,
	cn = 0,
	Vo = 0,
	Ra = 0,
	Cr = null,
	Se = null,
	Aa = 0,
	Gn = 1 / 0,
	nt = null,
	lo = !1,
	Sl = null,
	Dt = null,
	xi = !1,
	kt = null,
	ao = 0,
	Tr = 0,
	xl = null,
	ji = -1,
	Fi = 0;
function ye() {
	return F & 6 ? Z() : ji !== -1 ? ji : (ji = Z());
}
function _t(e) {
	return e.mode & 1
		? F & 2 && le !== 0
			? le & -le
			: Iy.transition !== null
			? (Fi === 0 && (Fi = Vd()), Fi)
			: ((e = O),
			  e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Id(e.type))),
			  e)
		: 1;
}
function Qe(e, t, n, r) {
	if (50 < Tr) throw ((Tr = 0), (xl = null), Error(P(185)));
	Zr(e, n, r),
		(!(F & 2) || e !== ie) &&
			(e === ie && (!(F & 2) && (Vo |= n), ee === 4 && Ct(e, le)),
			Te(e, r),
			n === 1 && F === 0 && !(t.mode & 1) && ((Gn = Z() + 500), Ro && $t()));
}
function Te(e, t) {
	var n = e.callbackNode;
	Ig(e, t);
	var r = Ki(e, e === ie ? le : 0);
	if (r === 0)
		n !== null && Lu(n), (e.callbackNode = null), (e.callbackPriority = 0);
	else if (((t = r & -r), e.callbackPriority !== t)) {
		if ((n != null && Lu(n), t === 1))
			e.tag === 0 ? Oy(xc.bind(null, e)) : rh(xc.bind(null, e)),
				_y(function () {
					!(F & 6) && $t();
				}),
				(n = null);
		else {
			switch (Dd(r)) {
				case 1:
					n = ea;
					break;
				case 4:
					n = Ld;
					break;
				case 16:
					n = Hi;
					break;
				case 536870912:
					n = Md;
					break;
				default:
					n = Hi;
			}
			n = tp(n, Yh.bind(null, e));
		}
		(e.callbackPriority = t), (e.callbackNode = n);
	}
}
function Yh(e, t) {
	if (((ji = -1), (Fi = 0), F & 6)) throw Error(P(327));
	var n = e.callbackNode;
	if (In() && e.callbackNode !== n) return null;
	var r = Ki(e, e === ie ? le : 0);
	if (r === 0) return null;
	if (r & 30 || r & e.expiredLanes || t) t = uo(e, r);
	else {
		t = r;
		var i = F;
		F |= 2;
		var o = Zh();
		(ie !== e || le !== t) && ((nt = null), (Gn = Z() + 500), nn(e, t));
		do
			try {
				iv();
				break;
			} catch (l) {
				Xh(e, l);
			}
		while (!0);
		ha(),
			(so.current = o),
			(F = i),
			q !== null ? (t = 0) : ((ie = null), (le = 0), (t = ee));
	}
	if (t !== 0) {
		if (
			(t === 2 && ((i = Ys(e)), i !== 0 && ((r = i), (t = Pl(e, i)))), t === 1)
		)
			throw ((n = Hr), nn(e, 0), Ct(e, r), Te(e, Z()), n);
		if (t === 6) Ct(e, r);
		else {
			if (
				((i = e.current.alternate),
				!(r & 30) &&
					!nv(i) &&
					((t = uo(e, r)),
					t === 2 && ((o = Ys(e)), o !== 0 && ((r = o), (t = Pl(e, o)))),
					t === 1))
			)
				throw ((n = Hr), nn(e, 0), Ct(e, r), Te(e, Z()), n);
			switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
				case 0:
				case 1:
					throw Error(P(345));
				case 2:
					Xt(e, Se, nt);
					break;
				case 3:
					if (
						(Ct(e, r), (r & 130023424) === r && ((t = Aa + 500 - Z()), 10 < t))
					) {
						if (Ki(e, 0) !== 0) break;
						if (((i = e.suspendedLanes), (i & r) !== r)) {
							ye(), (e.pingedLanes |= e.suspendedLanes & i);
							break;
						}
						e.timeoutHandle = nl(Xt.bind(null, e, Se, nt), t);
						break;
					}
					Xt(e, Se, nt);
					break;
				case 4:
					if ((Ct(e, r), (r & 4194240) === r)) break;
					for (t = e.eventTimes, i = -1; 0 < r; ) {
						var s = 31 - Ge(r);
						(o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
					}
					if (
						((r = i),
						(r = Z() - r),
						(r =
							(120 > r
								? 120
								: 480 > r
								? 480
								: 1080 > r
								? 1080
								: 1920 > r
								? 1920
								: 3e3 > r
								? 3e3
								: 4320 > r
								? 4320
								: 1960 * tv(r / 1960)) - r),
						10 < r)
					) {
						e.timeoutHandle = nl(Xt.bind(null, e, Se, nt), r);
						break;
					}
					Xt(e, Se, nt);
					break;
				case 5:
					Xt(e, Se, nt);
					break;
				default:
					throw Error(P(329));
			}
		}
	}
	return Te(e, Z()), e.callbackNode === n ? Yh.bind(null, e) : null;
}
function Pl(e, t) {
	var n = Cr;
	return (
		e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256),
		(e = uo(e, t)),
		e !== 2 && ((t = Se), (Se = n), t !== null && Cl(t)),
		e
	);
}
function Cl(e) {
	Se === null ? (Se = e) : Se.push.apply(Se, e);
}
function nv(e) {
	for (var t = e; ; ) {
		if (t.flags & 16384) {
			var n = t.updateQueue;
			if (n !== null && ((n = n.stores), n !== null))
				for (var r = 0; r < n.length; r++) {
					var i = n[r],
						o = i.getSnapshot;
					i = i.value;
					try {
						if (!Ye(o(), i)) return !1;
					} catch {
						return !1;
					}
				}
		}
		if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
			(n.return = t), (t = n);
		else {
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return !0;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
	}
	return !0;
}
function Ct(e, t) {
	for (
		t &= ~Ra,
			t &= ~Vo,
			e.suspendedLanes |= t,
			e.pingedLanes &= ~t,
			e = e.expirationTimes;
		0 < t;

	) {
		var n = 31 - Ge(t),
			r = 1 << n;
		(e[n] = -1), (t &= ~r);
	}
}
function xc(e) {
	if (F & 6) throw Error(P(327));
	In();
	var t = Ki(e, 0);
	if (!(t & 1)) return Te(e, Z()), null;
	var n = uo(e, t);
	if (e.tag !== 0 && n === 2) {
		var r = Ys(e);
		r !== 0 && ((t = r), (n = Pl(e, r)));
	}
	if (n === 1) throw ((n = Hr), nn(e, 0), Ct(e, t), Te(e, Z()), n);
	if (n === 6) throw Error(P(345));
	return (
		(e.finishedWork = e.current.alternate),
		(e.finishedLanes = t),
		Xt(e, Se, nt),
		Te(e, Z()),
		null
	);
}
function La(e, t) {
	var n = F;
	F |= 1;
	try {
		return e(t);
	} finally {
		(F = n), F === 0 && ((Gn = Z() + 500), Ro && $t());
	}
}
function fn(e) {
	kt !== null && kt.tag === 0 && !(F & 6) && In();
	var t = F;
	F |= 1;
	var n = Ie.transition,
		r = O;
	try {
		if (((Ie.transition = null), (O = 1), e)) return e();
	} finally {
		(O = r), (Ie.transition = n), (F = t), !(F & 6) && $t();
	}
}
function Ma() {
	(Ee = Rn.current), U(Rn);
}
function nn(e, t) {
	(e.finishedWork = null), (e.finishedLanes = 0);
	var n = e.timeoutHandle;
	if ((n !== -1 && ((e.timeoutHandle = -1), Dy(n)), q !== null))
		for (n = q.return; n !== null; ) {
			var r = n;
			switch ((ca(r), r.tag)) {
				case 1:
					(r = r.type.childContextTypes), r != null && Zi();
					break;
				case 3:
					Hn(), U(Pe), U(me), wa();
					break;
				case 5:
					va(r);
					break;
				case 4:
					Hn();
					break;
				case 13:
					U(W);
					break;
				case 19:
					U(W);
					break;
				case 10:
					pa(r.type._context);
					break;
				case 22:
				case 23:
					Ma();
			}
			n = n.return;
		}
	if (
		((ie = e),
		(q = e = Nt(e.current, null)),
		(le = Ee = t),
		(ee = 0),
		(Hr = null),
		(Ra = Vo = cn = 0),
		(Se = Cr = null),
		bt !== null)
	) {
		for (t = 0; t < bt.length; t++)
			if (((n = bt[t]), (r = n.interleaved), r !== null)) {
				n.interleaved = null;
				var i = r.next,
					o = n.pending;
				if (o !== null) {
					var s = o.next;
					(o.next = i), (r.next = s);
				}
				n.pending = r;
			}
		bt = null;
	}
	return e;
}
function Xh(e, t) {
	do {
		var n = q;
		try {
			if ((ha(), (Di.current = oo), io)) {
				for (var r = K.memoizedState; r !== null; ) {
					var i = r.queue;
					i !== null && (i.pending = null), (r = r.next);
				}
				io = !1;
			}
			if (
				((un = 0),
				(re = b = K = null),
				(xr = !1),
				(Ur = 0),
				(Ea.current = null),
				n === null || n.return === null)
			) {
				(ee = 1), (Hr = t), (q = null);
				break;
			}
			e: {
				var o = e,
					s = n.return,
					l = n,
					a = t;
				if (
					((t = le),
					(l.flags |= 32768),
					a !== null && typeof a == 'object' && typeof a.then == 'function')
				) {
					var u = a,
						c = l,
						f = c.tag;
					if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
						var d = c.alternate;
						d
							? ((c.updateQueue = d.updateQueue),
							  (c.memoizedState = d.memoizedState),
							  (c.lanes = d.lanes))
							: ((c.updateQueue = null), (c.memoizedState = null));
					}
					var g = ac(s);
					if (g !== null) {
						(g.flags &= -257),
							uc(g, s, l, o, t),
							g.mode & 1 && lc(o, u, t),
							(t = g),
							(a = u);
						var y = t.updateQueue;
						if (y === null) {
							var v = new Set();
							v.add(a), (t.updateQueue = v);
						} else y.add(a);
						break e;
					} else {
						if (!(t & 1)) {
							lc(o, u, t), Va();
							break e;
						}
						a = Error(P(426));
					}
				} else if ($ && l.mode & 1) {
					var S = ac(s);
					if (S !== null) {
						!(S.flags & 65536) && (S.flags |= 256),
							uc(S, s, l, o, t),
							fa(Kn(a, l));
						break e;
					}
				}
				(o = a = Kn(a, l)),
					ee !== 4 && (ee = 2),
					Cr === null ? (Cr = [o]) : Cr.push(o),
					(o = s);
				do {
					switch (o.tag) {
						case 3:
							(o.flags |= 65536), (t &= -t), (o.lanes |= t);
							var p = Dh(o, a, t);
							tc(o, p);
							break e;
						case 1:
							l = a;
							var h = o.type,
								m = o.stateNode;
							if (
								!(o.flags & 128) &&
								(typeof h.getDerivedStateFromError == 'function' ||
									(m !== null &&
										typeof m.componentDidCatch == 'function' &&
										(Dt === null || !Dt.has(m))))
							) {
								(o.flags |= 65536), (t &= -t), (o.lanes |= t);
								var w = _h(o, l, t);
								tc(o, w);
								break e;
							}
					}
					o = o.return;
				} while (o !== null);
			}
			Jh(n);
		} catch (x) {
			(t = x), q === n && n !== null && (q = n = n.return);
			continue;
		}
		break;
	} while (!0);
}
function Zh() {
	var e = so.current;
	return (so.current = oo), e === null ? oo : e;
}
function Va() {
	(ee === 0 || ee === 3 || ee === 2) && (ee = 4),
		ie === null || (!(cn & 268435455) && !(Vo & 268435455)) || Ct(ie, le);
}
function uo(e, t) {
	var n = F;
	F |= 2;
	var r = Zh();
	(ie !== e || le !== t) && ((nt = null), nn(e, t));
	do
		try {
			rv();
			break;
		} catch (i) {
			Xh(e, i);
		}
	while (!0);
	if ((ha(), (F = n), (so.current = r), q !== null)) throw Error(P(261));
	return (ie = null), (le = 0), ee;
}
function rv() {
	for (; q !== null; ) qh(q);
}
function iv() {
	for (; q !== null && !Lg(); ) qh(q);
}
function qh(e) {
	var t = ep(e.alternate, e, Ee);
	(e.memoizedProps = e.pendingProps),
		t === null ? Jh(e) : (q = t),
		(Ea.current = null);
}
function Jh(e) {
	var t = e;
	do {
		var n = t.alternate;
		if (((e = t.return), t.flags & 32768)) {
			if (((n = qy(n, t)), n !== null)) {
				(n.flags &= 32767), (q = n);
				return;
			}
			if (e !== null)
				(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
			else {
				(ee = 6), (q = null);
				return;
			}
		} else if (((n = Zy(n, t, Ee)), n !== null)) {
			q = n;
			return;
		}
		if (((t = t.sibling), t !== null)) {
			q = t;
			return;
		}
		q = t = e;
	} while (t !== null);
	ee === 0 && (ee = 5);
}
function Xt(e, t, n) {
	var r = O,
		i = Ie.transition;
	try {
		(Ie.transition = null), (O = 1), ov(e, t, n, r);
	} finally {
		(Ie.transition = i), (O = r);
	}
	return null;
}
function ov(e, t, n, r) {
	do In();
	while (kt !== null);
	if (F & 6) throw Error(P(327));
	n = e.finishedWork;
	var i = e.finishedLanes;
	if (n === null) return null;
	if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
		throw Error(P(177));
	(e.callbackNode = null), (e.callbackPriority = 0);
	var o = n.lanes | n.childLanes;
	if (
		(Bg(e, o),
		e === ie && ((q = ie = null), (le = 0)),
		(!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
			xi ||
			((xi = !0),
			tp(Hi, function () {
				return In(), null;
			})),
		(o = (n.flags & 15990) !== 0),
		n.subtreeFlags & 15990 || o)
	) {
		(o = Ie.transition), (Ie.transition = null);
		var s = O;
		O = 1;
		var l = F;
		(F |= 4),
			(Ea.current = null),
			by(e, n),
			Gh(n, e),
			ky(el),
			(Gi = !!bs),
			(el = bs = null),
			(e.current = n),
			ev(n),
			Mg(),
			(F = l),
			(O = s),
			(Ie.transition = o);
	} else e.current = n;
	if (
		(xi && ((xi = !1), (kt = e), (ao = i)),
		(o = e.pendingLanes),
		o === 0 && (Dt = null),
		_g(n.stateNode),
		Te(e, Z()),
		t !== null)
	)
		for (r = e.onRecoverableError, n = 0; n < t.length; n++)
			(i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
	if (lo) throw ((lo = !1), (e = Sl), (Sl = null), e);
	return (
		ao & 1 && e.tag !== 0 && In(),
		(o = e.pendingLanes),
		o & 1 ? (e === xl ? Tr++ : ((Tr = 0), (xl = e))) : (Tr = 0),
		$t(),
		null
	);
}
function In() {
	if (kt !== null) {
		var e = Dd(ao),
			t = Ie.transition,
			n = O;
		try {
			if (((Ie.transition = null), (O = 16 > e ? 16 : e), kt === null))
				var r = !1;
			else {
				if (((e = kt), (kt = null), (ao = 0), F & 6)) throw Error(P(331));
				var i = F;
				for (F |= 4, L = e.current; L !== null; ) {
					var o = L,
						s = o.child;
					if (L.flags & 16) {
						var l = o.deletions;
						if (l !== null) {
							for (var a = 0; a < l.length; a++) {
								var u = l[a];
								for (L = u; L !== null; ) {
									var c = L;
									switch (c.tag) {
										case 0:
										case 11:
										case 15:
											Pr(8, c, o);
									}
									var f = c.child;
									if (f !== null) (f.return = c), (L = f);
									else
										for (; L !== null; ) {
											c = L;
											var d = c.sibling,
												g = c.return;
											if ((Wh(c), c === u)) {
												L = null;
												break;
											}
											if (d !== null) {
												(d.return = g), (L = d);
												break;
											}
											L = g;
										}
								}
							}
							var y = o.alternate;
							if (y !== null) {
								var v = y.child;
								if (v !== null) {
									y.child = null;
									do {
										var S = v.sibling;
										(v.sibling = null), (v = S);
									} while (v !== null);
								}
							}
							L = o;
						}
					}
					if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (L = s);
					else
						e: for (; L !== null; ) {
							if (((o = L), o.flags & 2048))
								switch (o.tag) {
									case 0:
									case 11:
									case 15:
										Pr(9, o, o.return);
								}
							var p = o.sibling;
							if (p !== null) {
								(p.return = o.return), (L = p);
								break e;
							}
							L = o.return;
						}
				}
				var h = e.current;
				for (L = h; L !== null; ) {
					s = L;
					var m = s.child;
					if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (L = m);
					else
						e: for (s = h; L !== null; ) {
							if (((l = L), l.flags & 2048))
								try {
									switch (l.tag) {
										case 0:
										case 11:
										case 15:
											Mo(9, l);
									}
								} catch (x) {
									Q(l, l.return, x);
								}
							if (l === s) {
								L = null;
								break e;
							}
							var w = l.sibling;
							if (w !== null) {
								(w.return = l.return), (L = w);
								break e;
							}
							L = l.return;
						}
				}
				if (
					((F = i), $t(), Je && typeof Je.onPostCommitFiberRoot == 'function')
				)
					try {
						Je.onPostCommitFiberRoot(Po, e);
					} catch {}
				r = !0;
			}
			return r;
		} finally {
			(O = n), (Ie.transition = t);
		}
	}
	return !1;
}
function Pc(e, t, n) {
	(t = Kn(n, t)),
		(t = Dh(e, t, 1)),
		(e = Vt(e, t, 1)),
		(t = ye()),
		e !== null && (Zr(e, 1, t), Te(e, t));
}
function Q(e, t, n) {
	if (e.tag === 3) Pc(e, e, n);
	else
		for (; t !== null; ) {
			if (t.tag === 3) {
				Pc(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (
					typeof t.type.getDerivedStateFromError == 'function' ||
					(typeof r.componentDidCatch == 'function' &&
						(Dt === null || !Dt.has(r)))
				) {
					(e = Kn(n, e)),
						(e = _h(t, e, 1)),
						(t = Vt(t, e, 1)),
						(e = ye()),
						t !== null && (Zr(t, 1, e), Te(t, e));
					break;
				}
			}
			t = t.return;
		}
}
function sv(e, t, n) {
	var r = e.pingCache;
	r !== null && r.delete(t),
		(t = ye()),
		(e.pingedLanes |= e.suspendedLanes & n),
		ie === e &&
			(le & n) === n &&
			(ee === 4 || (ee === 3 && (le & 130023424) === le && 500 > Z() - Aa)
				? nn(e, 0)
				: (Ra |= n)),
		Te(e, t);
}
function bh(e, t) {
	t === 0 &&
		(e.mode & 1
			? ((t = fi), (fi <<= 1), !(fi & 130023424) && (fi = 4194304))
			: (t = 1));
	var n = ye();
	(e = pt(e, t)), e !== null && (Zr(e, t, n), Te(e, n));
}
function lv(e) {
	var t = e.memoizedState,
		n = 0;
	t !== null && (n = t.retryLane), bh(e, n);
}
function av(e, t) {
	var n = 0;
	switch (e.tag) {
		case 13:
			var r = e.stateNode,
				i = e.memoizedState;
			i !== null && (n = i.retryLane);
			break;
		case 19:
			r = e.stateNode;
			break;
		default:
			throw Error(P(314));
	}
	r !== null && r.delete(t), bh(e, n);
}
var ep;
ep = function (e, t, n) {
	if (e !== null)
		if (e.memoizedProps !== t.pendingProps || Pe.current) xe = !0;
		else {
			if (!(e.lanes & n) && !(t.flags & 128)) return (xe = !1), Xy(e, t, n);
			xe = !!(e.flags & 131072);
		}
	else (xe = !1), $ && t.flags & 1048576 && ih(t, bi, t.index);
	switch (((t.lanes = 0), t.tag)) {
		case 2:
			var r = t.type;
			Ni(e, t), (e = t.pendingProps);
			var i = Un(t, me.current);
			On(t, n), (i = xa(null, t, r, e, i, n));
			var o = Pa();
			return (
				(t.flags |= 1),
				typeof i == 'object' &&
				i !== null &&
				typeof i.render == 'function' &&
				i.$$typeof === void 0
					? ((t.tag = 1),
					  (t.memoizedState = null),
					  (t.updateQueue = null),
					  Ce(r) ? ((o = !0), qi(t)) : (o = !1),
					  (t.memoizedState =
							i.state !== null && i.state !== void 0 ? i.state : null),
					  ga(t),
					  (i.updater = Lo),
					  (t.stateNode = i),
					  (i._reactInternals = t),
					  ul(t, r, e, n),
					  (t = dl(null, t, r, !0, o, n)))
					: ((t.tag = 0), $ && o && ua(t), ge(null, t, i, n), (t = t.child)),
				t
			);
		case 16:
			r = t.elementType;
			e: {
				switch (
					(Ni(e, t),
					(e = t.pendingProps),
					(i = r._init),
					(r = i(r._payload)),
					(t.type = r),
					(i = t.tag = cv(r)),
					(e = $e(r, e)),
					i)
				) {
					case 0:
						t = fl(null, t, r, e, n);
						break e;
					case 1:
						t = dc(null, t, r, e, n);
						break e;
					case 11:
						t = cc(null, t, r, e, n);
						break e;
					case 14:
						t = fc(null, t, r, $e(r.type, e), n);
						break e;
				}
				throw Error(P(306, r, ''));
			}
			return t;
		case 0:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : $e(r, i)),
				fl(e, t, r, i, n)
			);
		case 1:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : $e(r, i)),
				dc(e, t, r, i, n)
			);
		case 3:
			e: {
				if ((Oh(t), e === null)) throw Error(P(387));
				(r = t.pendingProps),
					(o = t.memoizedState),
					(i = o.element),
					ch(e, t),
					no(t, r, null, n);
				var s = t.memoizedState;
				if (((r = s.element), o.isDehydrated))
					if (
						((o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache,
							pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
							transitions: s.transitions,
						}),
						(t.updateQueue.baseState = o),
						(t.memoizedState = o),
						t.flags & 256)
					) {
						(i = Kn(Error(P(423)), t)), (t = hc(e, t, r, n, i));
						break e;
					} else if (r !== i) {
						(i = Kn(Error(P(424)), t)), (t = hc(e, t, r, n, i));
						break e;
					} else
						for (
							Re = Mt(t.stateNode.containerInfo.firstChild),
								Ae = t,
								$ = !0,
								He = null,
								n = ah(t, null, r, n),
								t.child = n;
							n;

						)
							(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
				else {
					if (($n(), r === i)) {
						t = mt(e, t, n);
						break e;
					}
					ge(e, t, r, n);
				}
				t = t.child;
			}
			return t;
		case 5:
			return (
				fh(t),
				e === null && sl(t),
				(r = t.type),
				(i = t.pendingProps),
				(o = e !== null ? e.memoizedProps : null),
				(s = i.children),
				tl(r, i) ? (s = null) : o !== null && tl(r, o) && (t.flags |= 32),
				Fh(e, t),
				ge(e, t, s, n),
				t.child
			);
		case 6:
			return e === null && sl(t), null;
		case 13:
			return Ih(e, t, n);
		case 4:
			return (
				ya(t, t.stateNode.containerInfo),
				(r = t.pendingProps),
				e === null ? (t.child = Wn(t, null, r, n)) : ge(e, t, r, n),
				t.child
			);
		case 11:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : $e(r, i)),
				cc(e, t, r, i, n)
			);
		case 7:
			return ge(e, t, t.pendingProps, n), t.child;
		case 8:
			return ge(e, t, t.pendingProps.children, n), t.child;
		case 12:
			return ge(e, t, t.pendingProps.children, n), t.child;
		case 10:
			e: {
				if (
					((r = t.type._context),
					(i = t.pendingProps),
					(o = t.memoizedProps),
					(s = i.value),
					B(eo, r._currentValue),
					(r._currentValue = s),
					o !== null)
				)
					if (Ye(o.value, s)) {
						if (o.children === i.children && !Pe.current) {
							t = mt(e, t, n);
							break e;
						}
					} else
						for (o = t.child, o !== null && (o.return = t); o !== null; ) {
							var l = o.dependencies;
							if (l !== null) {
								s = o.child;
								for (var a = l.firstContext; a !== null; ) {
									if (a.context === r) {
										if (o.tag === 1) {
											(a = lt(-1, n & -n)), (a.tag = 2);
											var u = o.updateQueue;
											if (u !== null) {
												u = u.shared;
												var c = u.pending;
												c === null
													? (a.next = a)
													: ((a.next = c.next), (c.next = a)),
													(u.pending = a);
											}
										}
										(o.lanes |= n),
											(a = o.alternate),
											a !== null && (a.lanes |= n),
											ll(o.return, n, t),
											(l.lanes |= n);
										break;
									}
									a = a.next;
								}
							} else if (o.tag === 10) s = o.type === t.type ? null : o.child;
							else if (o.tag === 18) {
								if (((s = o.return), s === null)) throw Error(P(341));
								(s.lanes |= n),
									(l = s.alternate),
									l !== null && (l.lanes |= n),
									ll(s, n, t),
									(s = o.sibling);
							} else s = o.child;
							if (s !== null) s.return = o;
							else
								for (s = o; s !== null; ) {
									if (s === t) {
										s = null;
										break;
									}
									if (((o = s.sibling), o !== null)) {
										(o.return = s.return), (s = o);
										break;
									}
									s = s.return;
								}
							o = s;
						}
				ge(e, t, i.children, n), (t = t.child);
			}
			return t;
		case 9:
			return (
				(i = t.type),
				(r = t.pendingProps.children),
				On(t, n),
				(i = Be(i)),
				(r = r(i)),
				(t.flags |= 1),
				ge(e, t, r, n),
				t.child
			);
		case 14:
			return (
				(r = t.type),
				(i = $e(r, t.pendingProps)),
				(i = $e(r.type, i)),
				fc(e, t, r, i, n)
			);
		case 15:
			return Nh(e, t, t.type, t.pendingProps, n);
		case 17:
			return (
				(r = t.type),
				(i = t.pendingProps),
				(i = t.elementType === r ? i : $e(r, i)),
				Ni(e, t),
				(t.tag = 1),
				Ce(r) ? ((e = !0), qi(t)) : (e = !1),
				On(t, n),
				Vh(t, r, i),
				ul(t, r, i, n),
				dl(null, t, r, !0, e, n)
			);
		case 19:
			return Bh(e, t, n);
		case 22:
			return jh(e, t, n);
	}
	throw Error(P(156, t.tag));
};
function tp(e, t) {
	return Ad(e, t);
}
function uv(e, t, n, r) {
	(this.tag = e),
		(this.key = n),
		(this.sibling =
			this.child =
			this.return =
			this.stateNode =
			this.type =
			this.elementType =
				null),
		(this.index = 0),
		(this.ref = null),
		(this.pendingProps = t),
		(this.dependencies =
			this.memoizedState =
			this.updateQueue =
			this.memoizedProps =
				null),
		(this.mode = r),
		(this.subtreeFlags = this.flags = 0),
		(this.deletions = null),
		(this.childLanes = this.lanes = 0),
		(this.alternate = null);
}
function Oe(e, t, n, r) {
	return new uv(e, t, n, r);
}
function Da(e) {
	return (e = e.prototype), !(!e || !e.isReactComponent);
}
function cv(e) {
	if (typeof e == 'function') return Da(e) ? 1 : 0;
	if (e != null) {
		if (((e = e.$$typeof), e === ql)) return 11;
		if (e === Jl) return 14;
	}
	return 2;
}
function Nt(e, t) {
	var n = e.alternate;
	return (
		n === null
			? ((n = Oe(e.tag, t, e.key, e.mode)),
			  (n.elementType = e.elementType),
			  (n.type = e.type),
			  (n.stateNode = e.stateNode),
			  (n.alternate = e),
			  (e.alternate = n))
			: ((n.pendingProps = t),
			  (n.type = e.type),
			  (n.flags = 0),
			  (n.subtreeFlags = 0),
			  (n.deletions = null)),
		(n.flags = e.flags & 14680064),
		(n.childLanes = e.childLanes),
		(n.lanes = e.lanes),
		(n.child = e.child),
		(n.memoizedProps = e.memoizedProps),
		(n.memoizedState = e.memoizedState),
		(n.updateQueue = e.updateQueue),
		(t = e.dependencies),
		(n.dependencies =
			t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
		(n.sibling = e.sibling),
		(n.index = e.index),
		(n.ref = e.ref),
		n
	);
}
function Oi(e, t, n, r, i, o) {
	var s = 2;
	if (((r = e), typeof e == 'function')) Da(e) && (s = 1);
	else if (typeof e == 'string') s = 5;
	else
		e: switch (e) {
			case yn:
				return rn(n.children, i, o, t);
			case Zl:
				(s = 8), (i |= 8);
				break;
			case _s:
				return (
					(e = Oe(12, n, t, i | 2)), (e.elementType = _s), (e.lanes = o), e
				);
			case Ns:
				return (e = Oe(13, n, t, i)), (e.elementType = Ns), (e.lanes = o), e;
			case js:
				return (e = Oe(19, n, t, i)), (e.elementType = js), (e.lanes = o), e;
			case fd:
				return Do(n, i, o, t);
			default:
				if (typeof e == 'object' && e !== null)
					switch (e.$$typeof) {
						case ud:
							s = 10;
							break e;
						case cd:
							s = 9;
							break e;
						case ql:
							s = 11;
							break e;
						case Jl:
							s = 14;
							break e;
						case St:
							(s = 16), (r = null);
							break e;
					}
				throw Error(P(130, e == null ? e : typeof e, ''));
		}
	return (
		(t = Oe(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
	);
}
function rn(e, t, n, r) {
	return (e = Oe(7, e, r, t)), (e.lanes = n), e;
}
function Do(e, t, n, r) {
	return (
		(e = Oe(22, e, r, t)),
		(e.elementType = fd),
		(e.lanes = n),
		(e.stateNode = { isHidden: !1 }),
		e
	);
}
function ys(e, t, n) {
	return (e = Oe(6, e, null, t)), (e.lanes = n), e;
}
function vs(e, t, n) {
	return (
		(t = Oe(4, e.children !== null ? e.children : [], e.key, t)),
		(t.lanes = n),
		(t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation,
		}),
		t
	);
}
function fv(e, t, n, r, i) {
	(this.tag = t),
		(this.containerInfo = e),
		(this.finishedWork =
			this.pingCache =
			this.current =
			this.pendingChildren =
				null),
		(this.timeoutHandle = -1),
		(this.callbackNode = this.pendingContext = this.context = null),
		(this.callbackPriority = 0),
		(this.eventTimes = Jo(0)),
		(this.expirationTimes = Jo(-1)),
		(this.entangledLanes =
			this.finishedLanes =
			this.mutableReadLanes =
			this.expiredLanes =
			this.pingedLanes =
			this.suspendedLanes =
			this.pendingLanes =
				0),
		(this.entanglements = Jo(0)),
		(this.identifierPrefix = r),
		(this.onRecoverableError = i),
		(this.mutableSourceEagerHydrationData = null);
}
function _a(e, t, n, r, i, o, s, l, a) {
	return (
		(e = new fv(e, t, n, l, a)),
		t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
		(o = Oe(3, null, null, t)),
		(e.current = o),
		(o.stateNode = e),
		(o.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: null,
			transitions: null,
			pendingSuspenseBoundaries: null,
		}),
		ga(o),
		e
	);
}
function dv(e, t, n) {
	var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
	return {
		$$typeof: gn,
		key: r == null ? null : '' + r,
		children: e,
		containerInfo: t,
		implementation: n,
	};
}
function np(e) {
	if (!e) return Ft;
	e = e._reactInternals;
	e: {
		if (hn(e) !== e || e.tag !== 1) throw Error(P(170));
		var t = e;
		do {
			switch (t.tag) {
				case 3:
					t = t.stateNode.context;
					break e;
				case 1:
					if (Ce(t.type)) {
						t = t.stateNode.__reactInternalMemoizedMergedChildContext;
						break e;
					}
			}
			t = t.return;
		} while (t !== null);
		throw Error(P(171));
	}
	if (e.tag === 1) {
		var n = e.type;
		if (Ce(n)) return nh(e, n, t);
	}
	return t;
}
function rp(e, t, n, r, i, o, s, l, a) {
	return (
		(e = _a(n, r, !0, e, i, o, s, l, a)),
		(e.context = np(null)),
		(n = e.current),
		(r = ye()),
		(i = _t(n)),
		(o = lt(r, i)),
		(o.callback = t ?? null),
		Vt(n, o, i),
		(e.current.lanes = i),
		Zr(e, i, r),
		Te(e, r),
		e
	);
}
function _o(e, t, n, r) {
	var i = t.current,
		o = ye(),
		s = _t(i);
	return (
		(n = np(n)),
		t.context === null ? (t.context = n) : (t.pendingContext = n),
		(t = lt(o, s)),
		(t.payload = { element: e }),
		(r = r === void 0 ? null : r),
		r !== null && (t.callback = r),
		(e = Vt(i, t, s)),
		e !== null && (Qe(e, i, s, o), Vi(e, i, s)),
		s
	);
}
function co(e) {
	if (((e = e.current), !e.child)) return null;
	switch (e.child.tag) {
		case 5:
			return e.child.stateNode;
		default:
			return e.child.stateNode;
	}
}
function Cc(e, t) {
	if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
		var n = e.retryLane;
		e.retryLane = n !== 0 && n < t ? n : t;
	}
}
function Na(e, t) {
	Cc(e, t), (e = e.alternate) && Cc(e, t);
}
function hv() {
	return null;
}
var ip =
	typeof reportError == 'function'
		? reportError
		: function (e) {
				console.error(e);
		  };
function ja(e) {
	this._internalRoot = e;
}
No.prototype.render = ja.prototype.render = function (e) {
	var t = this._internalRoot;
	if (t === null) throw Error(P(409));
	_o(e, t, null, null);
};
No.prototype.unmount = ja.prototype.unmount = function () {
	var e = this._internalRoot;
	if (e !== null) {
		this._internalRoot = null;
		var t = e.containerInfo;
		fn(function () {
			_o(null, e, null, null);
		}),
			(t[ht] = null);
	}
};
function No(e) {
	this._internalRoot = e;
}
No.prototype.unstable_scheduleHydration = function (e) {
	if (e) {
		var t = jd();
		e = { blockedOn: null, target: e, priority: t };
		for (var n = 0; n < Pt.length && t !== 0 && t < Pt[n].priority; n++);
		Pt.splice(n, 0, e), n === 0 && Od(e);
	}
};
function Fa(e) {
	return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function jo(e) {
	return !(
		!e ||
		(e.nodeType !== 1 &&
			e.nodeType !== 9 &&
			e.nodeType !== 11 &&
			(e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
	);
}
function Tc() {}
function pv(e, t, n, r, i) {
	if (i) {
		if (typeof r == 'function') {
			var o = r;
			r = function () {
				var u = co(s);
				o.call(u);
			};
		}
		var s = rp(t, r, e, 0, null, !1, !1, '', Tc);
		return (
			(e._reactRootContainer = s),
			(e[ht] = s.current),
			Fr(e.nodeType === 8 ? e.parentNode : e),
			fn(),
			s
		);
	}
	for (; (i = e.lastChild); ) e.removeChild(i);
	if (typeof r == 'function') {
		var l = r;
		r = function () {
			var u = co(a);
			l.call(u);
		};
	}
	var a = _a(e, 0, !1, null, null, !1, !1, '', Tc);
	return (
		(e._reactRootContainer = a),
		(e[ht] = a.current),
		Fr(e.nodeType === 8 ? e.parentNode : e),
		fn(function () {
			_o(t, a, n, r);
		}),
		a
	);
}
function Fo(e, t, n, r, i) {
	var o = n._reactRootContainer;
	if (o) {
		var s = o;
		if (typeof i == 'function') {
			var l = i;
			i = function () {
				var a = co(s);
				l.call(a);
			};
		}
		_o(t, s, e, i);
	} else s = pv(n, t, e, i, r);
	return co(s);
}
_d = function (e) {
	switch (e.tag) {
		case 3:
			var t = e.stateNode;
			if (t.current.memoizedState.isDehydrated) {
				var n = dr(t.pendingLanes);
				n !== 0 &&
					(ta(t, n | 1), Te(t, Z()), !(F & 6) && ((Gn = Z() + 500), $t()));
			}
			break;
		case 13:
			fn(function () {
				var r = pt(e, 1);
				if (r !== null) {
					var i = ye();
					Qe(r, e, 1, i);
				}
			}),
				Na(e, 1);
	}
};
na = function (e) {
	if (e.tag === 13) {
		var t = pt(e, 134217728);
		if (t !== null) {
			var n = ye();
			Qe(t, e, 134217728, n);
		}
		Na(e, 134217728);
	}
};
Nd = function (e) {
	if (e.tag === 13) {
		var t = _t(e),
			n = pt(e, t);
		if (n !== null) {
			var r = ye();
			Qe(n, e, t, r);
		}
		Na(e, t);
	}
};
jd = function () {
	return O;
};
Fd = function (e, t) {
	var n = O;
	try {
		return (O = e), t();
	} finally {
		O = n;
	}
};
Ks = function (e, t, n) {
	switch (t) {
		case 'input':
			if ((Is(e, n), (t = n.name), n.type === 'radio' && t != null)) {
				for (n = e; n.parentNode; ) n = n.parentNode;
				for (
					n = n.querySelectorAll(
						'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
					),
						t = 0;
					t < n.length;
					t++
				) {
					var r = n[t];
					if (r !== e && r.form === e.form) {
						var i = Eo(r);
						if (!i) throw Error(P(90));
						hd(r), Is(r, i);
					}
				}
			}
			break;
		case 'textarea':
			md(e, n);
			break;
		case 'select':
			(t = n.value), t != null && _n(e, !!n.multiple, t, !1);
	}
};
Pd = La;
Cd = fn;
var mv = { usingClientEntryPoint: !1, Events: [Jr, xn, Eo, Sd, xd, La] },
	ar = {
		findFiberByHostInstance: Jt,
		bundleType: 0,
		version: '18.3.1',
		rendererPackageName: 'react-dom',
	},
	gv = {
		bundleType: ar.bundleType,
		version: ar.version,
		rendererPackageName: ar.rendererPackageName,
		rendererConfig: ar.rendererConfig,
		overrideHookState: null,
		overrideHookStateDeletePath: null,
		overrideHookStateRenamePath: null,
		overrideProps: null,
		overridePropsDeletePath: null,
		overridePropsRenamePath: null,
		setErrorHandler: null,
		setSuspenseHandler: null,
		scheduleUpdate: null,
		currentDispatcherRef: gt.ReactCurrentDispatcher,
		findHostInstanceByFiber: function (e) {
			return (e = Ed(e)), e === null ? null : e.stateNode;
		},
		findFiberByHostInstance: ar.findFiberByHostInstance || hv,
		findHostInstancesForRefresh: null,
		scheduleRefresh: null,
		scheduleRoot: null,
		setRefreshHandler: null,
		getCurrentFiber: null,
		reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
	};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
	var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	if (!Pi.isDisabled && Pi.supportsFiber)
		try {
			(Po = Pi.inject(gv)), (Je = Pi);
		} catch {}
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mv;
Ve.createPortal = function (e, t) {
	var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
	if (!Fa(t)) throw Error(P(200));
	return dv(e, t, null, n);
};
Ve.createRoot = function (e, t) {
	if (!Fa(e)) throw Error(P(299));
	var n = !1,
		r = '',
		i = ip;
	return (
		t != null &&
			(t.unstable_strictMode === !0 && (n = !0),
			t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
			t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
		(t = _a(e, 1, !1, null, null, n, !1, r, i)),
		(e[ht] = t.current),
		Fr(e.nodeType === 8 ? e.parentNode : e),
		new ja(t)
	);
};
Ve.findDOMNode = function (e) {
	if (e == null) return null;
	if (e.nodeType === 1) return e;
	var t = e._reactInternals;
	if (t === void 0)
		throw typeof e.render == 'function'
			? Error(P(188))
			: ((e = Object.keys(e).join(',')), Error(P(268, e)));
	return (e = Ed(t)), (e = e === null ? null : e.stateNode), e;
};
Ve.flushSync = function (e) {
	return fn(e);
};
Ve.hydrate = function (e, t, n) {
	if (!jo(t)) throw Error(P(200));
	return Fo(null, e, t, !0, n);
};
Ve.hydrateRoot = function (e, t, n) {
	if (!Fa(e)) throw Error(P(405));
	var r = (n != null && n.hydratedSources) || null,
		i = !1,
		o = '',
		s = ip;
	if (
		(n != null &&
			(n.unstable_strictMode === !0 && (i = !0),
			n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
			n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
		(t = rp(t, null, e, 1, n ?? null, i, !1, o, s)),
		(e[ht] = t.current),
		Fr(e),
		r)
	)
		for (e = 0; e < r.length; e++)
			(n = r[e]),
				(i = n._getVersion),
				(i = i(n._source)),
				t.mutableSourceEagerHydrationData == null
					? (t.mutableSourceEagerHydrationData = [n, i])
					: t.mutableSourceEagerHydrationData.push(n, i);
	return new No(t);
};
Ve.render = function (e, t, n) {
	if (!jo(t)) throw Error(P(200));
	return Fo(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function (e) {
	if (!jo(e)) throw Error(P(40));
	return e._reactRootContainer
		? (fn(function () {
				Fo(null, null, e, !1, function () {
					(e._reactRootContainer = null), (e[ht] = null);
				});
		  }),
		  !0)
		: !1;
};
Ve.unstable_batchedUpdates = La;
Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
	if (!jo(n)) throw Error(P(200));
	if (e == null || e._reactInternals === void 0) throw Error(P(38));
	return Fo(e, t, n, !1, r);
};
Ve.version = '18.3.1-next-f1338f8080-20240426';
function op() {
	if (
		!(
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
			typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
		)
	)
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(op);
		} catch (e) {
			console.error(e);
		}
}
op(), (od.exports = Ve);
var yv = od.exports,
	sp,
	kc = yv;
(sp = kc.createRoot), kc.hydrateRoot;
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fo() {
	return (
		(fo = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		fo.apply(this, arguments)
	);
}
var Et;
(function (e) {
	(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Et || (Et = {}));
const Ec = 'popstate';
function vv(e) {
	e === void 0 && (e = {});
	function t(r, i) {
		let { pathname: o, search: s, hash: l } = r.location;
		return Tl(
			'',
			{ pathname: o, search: s, hash: l },
			(i.state && i.state.usr) || null,
			(i.state && i.state.key) || 'default'
		);
	}
	function n(r, i) {
		return typeof i == 'string' ? i : ap(i);
	}
	return Sv(t, n, null, e);
}
function ke(e, t) {
	if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function lp(e, t) {
	if (!e) {
		typeof console < 'u' && console.warn(t);
		try {
			throw new Error(t);
		} catch {}
	}
}
function wv() {
	return Math.random().toString(36).substr(2, 8);
}
function Rc(e, t) {
	return { usr: e.state, key: e.key, idx: t };
}
function Tl(e, t, n, r) {
	return (
		n === void 0 && (n = null),
		fo(
			{ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
			typeof t == 'string' ? Oo(t) : t,
			{ state: n, key: (t && t.key) || r || wv() }
		)
	);
}
function ap(e) {
	let { pathname: t = '/', search: n = '', hash: r = '' } = e;
	return (
		n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
		r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
		t
	);
}
function Oo(e) {
	let t = {};
	if (e) {
		let n = e.indexOf('#');
		n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
		let r = e.indexOf('?');
		r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
			e && (t.pathname = e);
	}
	return t;
}
function Sv(e, t, n, r) {
	r === void 0 && (r = {});
	let { window: i = document.defaultView, v5Compat: o = !1 } = r,
		s = i.history,
		l = Et.Pop,
		a = null,
		u = c();
	u == null && ((u = 0), s.replaceState(fo({}, s.state, { idx: u }), ''));
	function c() {
		return (s.state || { idx: null }).idx;
	}
	function f() {
		l = Et.Pop;
		let S = c(),
			p = S == null ? null : S - u;
		(u = S), a && a({ action: l, location: v.location, delta: p });
	}
	function d(S, p) {
		l = Et.Push;
		let h = Tl(v.location, S, p);
		u = c() + 1;
		let m = Rc(h, u),
			w = v.createHref(h);
		try {
			s.pushState(m, '', w);
		} catch (x) {
			if (x instanceof DOMException && x.name === 'DataCloneError') throw x;
			i.location.assign(w);
		}
		o && a && a({ action: l, location: v.location, delta: 1 });
	}
	function g(S, p) {
		l = Et.Replace;
		let h = Tl(v.location, S, p);
		u = c();
		let m = Rc(h, u),
			w = v.createHref(h);
		s.replaceState(m, '', w),
			o && a && a({ action: l, location: v.location, delta: 0 });
	}
	function y(S) {
		let p = i.location.origin !== 'null' ? i.location.origin : i.location.href,
			h = typeof S == 'string' ? S : ap(S);
		return (
			(h = h.replace(/ $/, '%20')),
			ke(
				p,
				'No window.location.(origin|href) available to create URL for href: ' +
					h
			),
			new URL(h, p)
		);
	}
	let v = {
		get action() {
			return l;
		},
		get location() {
			return e(i, s);
		},
		listen(S) {
			if (a) throw new Error('A history only accepts one active listener');
			return (
				i.addEventListener(Ec, f),
				(a = S),
				() => {
					i.removeEventListener(Ec, f), (a = null);
				}
			);
		},
		createHref(S) {
			return t(i, S);
		},
		createURL: y,
		encodeLocation(S) {
			let p = y(S);
			return { pathname: p.pathname, search: p.search, hash: p.hash };
		},
		push: d,
		replace: g,
		go(S) {
			return s.go(S);
		},
	};
	return v;
}
var Ac;
(function (e) {
	(e.data = 'data'),
		(e.deferred = 'deferred'),
		(e.redirect = 'redirect'),
		(e.error = 'error');
})(Ac || (Ac = {}));
function xv(e, t, n) {
	return n === void 0 && (n = '/'), Pv(e, t, n, !1);
}
function Pv(e, t, n, r) {
	let i = typeof t == 'string' ? Oo(t) : t,
		o = fp(i.pathname || '/', n);
	if (o == null) return null;
	let s = up(e);
	Cv(s);
	let l = null;
	for (let a = 0; l == null && a < s.length; ++a) {
		let u = Nv(o);
		l = Dv(s[a], u, r);
	}
	return l;
}
function up(e, t, n, r) {
	t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
	let i = (o, s, l) => {
		let a = {
			relativePath: l === void 0 ? o.path || '' : l,
			caseSensitive: o.caseSensitive === !0,
			childrenIndex: s,
			route: o,
		};
		a.relativePath.startsWith('/') &&
			(ke(
				a.relativePath.startsWith(r),
				'Absolute route path "' +
					a.relativePath +
					'" nested under path ' +
					('"' + r + '" is not valid. An absolute child route path ') +
					'must start with the combined path of all its parent routes.'
			),
			(a.relativePath = a.relativePath.slice(r.length)));
		let u = Bn([r, a.relativePath]),
			c = n.concat(a);
		o.children &&
			o.children.length > 0 &&
			(ke(
				o.index !== !0,
				'Index routes must not have child routes. Please remove ' +
					('all child routes from route path "' + u + '".')
			),
			up(o.children, t, c, u)),
			!(o.path == null && !o.index) &&
				t.push({ path: u, score: Mv(u, o.index), routesMeta: c });
	};
	return (
		e.forEach((o, s) => {
			var l;
			if (o.path === '' || !((l = o.path) != null && l.includes('?'))) i(o, s);
			else for (let a of cp(o.path)) i(o, s, a);
		}),
		t
	);
}
function cp(e) {
	let t = e.split('/');
	if (t.length === 0) return [];
	let [n, ...r] = t,
		i = n.endsWith('?'),
		o = n.replace(/\?$/, '');
	if (r.length === 0) return i ? [o, ''] : [o];
	let s = cp(r.join('/')),
		l = [];
	return (
		l.push(...s.map((a) => (a === '' ? o : [o, a].join('/')))),
		i && l.push(...s),
		l.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
	);
}
function Cv(e) {
	e.sort((t, n) =>
		t.score !== n.score
			? n.score - t.score
			: Vv(
					t.routesMeta.map((r) => r.childrenIndex),
					n.routesMeta.map((r) => r.childrenIndex)
			  )
	);
}
const Tv = /^:[\w-]+$/,
	kv = 3,
	Ev = 2,
	Rv = 1,
	Av = 10,
	Lv = -2,
	Lc = (e) => e === '*';
function Mv(e, t) {
	let n = e.split('/'),
		r = n.length;
	return (
		n.some(Lc) && (r += Lv),
		t && (r += Ev),
		n
			.filter((i) => !Lc(i))
			.reduce((i, o) => i + (Tv.test(o) ? kv : o === '' ? Rv : Av), r)
	);
}
function Vv(e, t) {
	return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
		? e[e.length - 1] - t[t.length - 1]
		: 0;
}
function Dv(e, t, n) {
	let { routesMeta: r } = e,
		i = {},
		o = '/',
		s = [];
	for (let l = 0; l < r.length; ++l) {
		let a = r[l],
			u = l === r.length - 1,
			c = o === '/' ? t : t.slice(o.length) || '/',
			f = Mc(
				{ path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
				c
			),
			d = a.route;
		if (
			(!f &&
				u &&
				n &&
				!r[r.length - 1].route.index &&
				(f = Mc(
					{ path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
					c
				)),
			!f)
		)
			return null;
		Object.assign(i, f.params),
			s.push({
				params: i,
				pathname: Bn([o, f.pathname]),
				pathnameBase: jv(Bn([o, f.pathnameBase])),
				route: d,
			}),
			f.pathnameBase !== '/' && (o = Bn([o, f.pathnameBase]));
	}
	return s;
}
function Mc(e, t) {
	typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
	let [n, r] = _v(e.path, e.caseSensitive, e.end),
		i = t.match(n);
	if (!i) return null;
	let o = i[0],
		s = o.replace(/(.)\/+$/, '$1'),
		l = i.slice(1);
	return {
		params: r.reduce((u, c, f) => {
			let { paramName: d, isOptional: g } = c;
			if (d === '*') {
				let v = l[f] || '';
				s = o.slice(0, o.length - v.length).replace(/(.)\/+$/, '$1');
			}
			const y = l[f];
			return (
				g && !y ? (u[d] = void 0) : (u[d] = (y || '').replace(/%2F/g, '/')), u
			);
		}, {}),
		pathname: o,
		pathnameBase: s,
		pattern: e,
	};
}
function _v(e, t, n) {
	t === void 0 && (t = !1),
		n === void 0 && (n = !0),
		lp(
			e === '*' || !e.endsWith('*') || e.endsWith('/*'),
			'Route path "' +
				e +
				'" will be treated as if it were ' +
				('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
				'always follow a `/` in the pattern. To get rid of this warning, ' +
				('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
		);
	let r = [],
		i =
			'^' +
			e
				.replace(/\/*\*?$/, '')
				.replace(/^\/*/, '/')
				.replace(/[\\.*+^${}|()[\]]/g, '\\$&')
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(s, l, a) => (
						r.push({ paramName: l, isOptional: a != null }),
						a ? '/?([^\\/]+)?' : '/([^\\/]+)'
					)
				);
	return (
		e.endsWith('*')
			? (r.push({ paramName: '*' }),
			  (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
			: n
			? (i += '\\/*$')
			: e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
		[new RegExp(i, t ? void 0 : 'i'), r]
	);
}
function Nv(e) {
	try {
		return e
			.split('/')
			.map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
			.join('/');
	} catch (t) {
		return (
			lp(
				!1,
				'The URL path "' +
					e +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					('encoding (' + t + ').')
			),
			e
		);
	}
}
function fp(e, t) {
	if (t === '/') return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith('/') ? t.length - 1 : t.length,
		r = e.charAt(n);
	return r && r !== '/' ? null : e.slice(n) || '/';
}
const Bn = (e) => e.join('/').replace(/\/\/+/g, '/'),
	jv = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/');
function Fv(e) {
	return (
		e != null &&
		typeof e.status == 'number' &&
		typeof e.statusText == 'string' &&
		typeof e.internal == 'boolean' &&
		'data' in e
	);
}
const dp = ['post', 'put', 'patch', 'delete'];
new Set(dp);
const Ov = ['get', ...dp];
new Set(Ov);
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ho() {
	return (
		(ho = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
					}
					return e;
			  }),
		ho.apply(this, arguments)
	);
}
const Iv = C.createContext(null),
	Bv = C.createContext(null),
	hp = C.createContext(null),
	Io = C.createContext(null),
	Bo = C.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	pp = C.createContext(null);
function Oa() {
	return C.useContext(Io) != null;
}
function zv() {
	return Oa() || ke(!1), C.useContext(Io).location;
}
function Uv(e, t) {
	return $v(e, t);
}
function $v(e, t, n, r) {
	Oa() || ke(!1);
	let { navigator: i } = C.useContext(hp),
		{ matches: o } = C.useContext(Bo),
		s = o[o.length - 1],
		l = s ? s.params : {};
	s && s.pathname;
	let a = s ? s.pathnameBase : '/';
	s && s.route;
	let u = zv(),
		c;
	if (t) {
		var f;
		let S = typeof t == 'string' ? Oo(t) : t;
		a === '/' || ((f = S.pathname) != null && f.startsWith(a)) || ke(!1),
			(c = S);
	} else c = u;
	let d = c.pathname || '/',
		g = d;
	if (a !== '/') {
		let S = a.replace(/^\//, '').split('/');
		g = '/' + d.replace(/^\//, '').split('/').slice(S.length).join('/');
	}
	let y = xv(e, { pathname: g }),
		v = Qv(
			y &&
				y.map((S) =>
					Object.assign({}, S, {
						params: Object.assign({}, l, S.params),
						pathname: Bn([
							a,
							i.encodeLocation
								? i.encodeLocation(S.pathname).pathname
								: S.pathname,
						]),
						pathnameBase:
							S.pathnameBase === '/'
								? a
								: Bn([
										a,
										i.encodeLocation
											? i.encodeLocation(S.pathnameBase).pathname
											: S.pathnameBase,
								  ]),
					})
				),
			o,
			n,
			r
		);
	return t && v
		? C.createElement(
				Io.Provider,
				{
					value: {
						location: ho(
							{
								pathname: '/',
								search: '',
								hash: '',
								state: null,
								key: 'default',
							},
							c
						),
						navigationType: Et.Pop,
					},
				},
				v
		  )
		: v;
}
function Wv() {
	let e = qv(),
		t = Fv(e)
			? e.status + ' ' + e.statusText
			: e instanceof Error
			? e.message
			: JSON.stringify(e),
		n = e instanceof Error ? e.stack : null,
		i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
	return C.createElement(
		C.Fragment,
		null,
		C.createElement('h2', null, 'Unexpected Application Error!'),
		C.createElement('h3', { style: { fontStyle: 'italic' } }, t),
		n ? C.createElement('pre', { style: i }, n) : null,
		null
	);
}
const Hv = C.createElement(Wv, null);
class Kv extends C.Component {
	constructor(t) {
		super(t),
			(this.state = {
				location: t.location,
				revalidation: t.revalidation,
				error: t.error,
			});
	}
	static getDerivedStateFromError(t) {
		return { error: t };
	}
	static getDerivedStateFromProps(t, n) {
		return n.location !== t.location ||
			(n.revalidation !== 'idle' && t.revalidation === 'idle')
			? { error: t.error, location: t.location, revalidation: t.revalidation }
			: {
					error: t.error !== void 0 ? t.error : n.error,
					location: n.location,
					revalidation: t.revalidation || n.revalidation,
			  };
	}
	componentDidCatch(t, n) {
		console.error(
			'React Router caught the following error during render',
			t,
			n
		);
	}
	render() {
		return this.state.error !== void 0
			? C.createElement(
					Bo.Provider,
					{ value: this.props.routeContext },
					C.createElement(pp.Provider, {
						value: this.state.error,
						children: this.props.component,
					})
			  )
			: this.props.children;
	}
}
function Gv(e) {
	let { routeContext: t, match: n, children: r } = e,
		i = C.useContext(Iv);
	return (
		i &&
			i.static &&
			i.staticContext &&
			(n.route.errorElement || n.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId = n.route.id),
		C.createElement(Bo.Provider, { value: t }, r)
	);
}
function Qv(e, t, n, r) {
	var i;
	if (
		(t === void 0 && (t = []),
		n === void 0 && (n = null),
		r === void 0 && (r = null),
		e == null)
	) {
		var o;
		if (!n) return null;
		if (n.errors) e = n.matches;
		else if (
			(o = r) != null &&
			o.v7_partialHydration &&
			t.length === 0 &&
			!n.initialized &&
			n.matches.length > 0
		)
			e = n.matches;
		else return null;
	}
	let s = e,
		l = (i = n) == null ? void 0 : i.errors;
	if (l != null) {
		let c = s.findIndex(
			(f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
		);
		c >= 0 || ke(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
	}
	let a = !1,
		u = -1;
	if (n && r && r.v7_partialHydration)
		for (let c = 0; c < s.length; c++) {
			let f = s[c];
			if (
				((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
				f.route.id)
			) {
				let { loaderData: d, errors: g } = n,
					y =
						f.route.loader &&
						d[f.route.id] === void 0 &&
						(!g || g[f.route.id] === void 0);
				if (f.route.lazy || y) {
					(a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
					break;
				}
			}
		}
	return s.reduceRight((c, f, d) => {
		let g,
			y = !1,
			v = null,
			S = null;
		n &&
			((g = l && f.route.id ? l[f.route.id] : void 0),
			(v = f.route.errorElement || Hv),
			a &&
				(u < 0 && d === 0
					? ((y = !0), (S = null))
					: u === d &&
					  ((y = !0), (S = f.route.hydrateFallbackElement || null))));
		let p = t.concat(s.slice(0, d + 1)),
			h = () => {
				let m;
				return (
					g
						? (m = v)
						: y
						? (m = S)
						: f.route.Component
						? (m = C.createElement(f.route.Component, null))
						: f.route.element
						? (m = f.route.element)
						: (m = c),
					C.createElement(Gv, {
						match: f,
						routeContext: { outlet: c, matches: p, isDataRoute: n != null },
						children: m,
					})
				);
			};
		return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
			? C.createElement(Kv, {
					location: n.location,
					revalidation: n.revalidation,
					component: v,
					error: g,
					children: h(),
					routeContext: { outlet: null, matches: p, isDataRoute: !0 },
			  })
			: h();
	}, null);
}
var kl = (function (e) {
	return (
		(e.UseBlocker = 'useBlocker'),
		(e.UseLoaderData = 'useLoaderData'),
		(e.UseActionData = 'useActionData'),
		(e.UseRouteError = 'useRouteError'),
		(e.UseNavigation = 'useNavigation'),
		(e.UseRouteLoaderData = 'useRouteLoaderData'),
		(e.UseMatches = 'useMatches'),
		(e.UseRevalidator = 'useRevalidator'),
		(e.UseNavigateStable = 'useNavigate'),
		(e.UseRouteId = 'useRouteId'),
		e
	);
})(kl || {});
function Yv(e) {
	let t = C.useContext(Bv);
	return t || ke(!1), t;
}
function Xv(e) {
	let t = C.useContext(Bo);
	return t || ke(!1), t;
}
function Zv(e) {
	let t = Xv(),
		n = t.matches[t.matches.length - 1];
	return n.route.id || ke(!1), n.route.id;
}
function qv() {
	var e;
	let t = C.useContext(pp),
		n = Yv(kl.UseRouteError),
		r = Zv(kl.UseRouteError);
	return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function on(e) {
	ke(!1);
}
function Jv(e) {
	let {
		basename: t = '/',
		children: n = null,
		location: r,
		navigationType: i = Et.Pop,
		navigator: o,
		static: s = !1,
		future: l,
	} = e;
	Oa() && ke(!1);
	let a = t.replace(/^\/*/, '/'),
		u = C.useMemo(
			() => ({
				basename: a,
				navigator: o,
				static: s,
				future: ho({ v7_relativeSplatPath: !1 }, l),
			}),
			[a, l, o, s]
		);
	typeof r == 'string' && (r = Oo(r));
	let {
			pathname: c = '/',
			search: f = '',
			hash: d = '',
			state: g = null,
			key: y = 'default',
		} = r,
		v = C.useMemo(() => {
			let S = fp(c, a);
			return S == null
				? null
				: {
						location: { pathname: S, search: f, hash: d, state: g, key: y },
						navigationType: i,
				  };
		}, [a, c, f, d, g, y, i]);
	return v == null
		? null
		: C.createElement(
				hp.Provider,
				{ value: u },
				C.createElement(Io.Provider, { children: n, value: v })
		  );
}
function Ia(e) {
	let { children: t, location: n } = e;
	return Uv(El(t), n);
}
new Promise(() => {});
function El(e, t) {
	t === void 0 && (t = []);
	let n = [];
	return (
		C.Children.forEach(e, (r, i) => {
			if (!C.isValidElement(r)) return;
			let o = [...t, i];
			if (r.type === C.Fragment) {
				n.push.apply(n, El(r.props.children, o));
				return;
			}
			r.type !== on && ke(!1), !r.props.index || !r.props.children || ke(!1);
			let s = {
				id: r.props.id || o.join('-'),
				caseSensitive: r.props.caseSensitive,
				element: r.props.element,
				Component: r.props.Component,
				index: r.props.index,
				path: r.props.path,
				loader: r.props.loader,
				action: r.props.action,
				errorElement: r.props.errorElement,
				ErrorBoundary: r.props.ErrorBoundary,
				hasErrorBoundary:
					r.props.ErrorBoundary != null || r.props.errorElement != null,
				shouldRevalidate: r.props.shouldRevalidate,
				handle: r.props.handle,
				lazy: r.props.lazy,
			};
			r.props.children && (s.children = El(r.props.children, o)), n.push(s);
		}),
		n
	);
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const bv = '6';
try {
	window.__reactRouterVersion = bv;
} catch {}
const e0 = 'startTransition',
	Vc = sg[e0];
function t0(e) {
	let { basename: t, children: n, future: r, window: i } = e,
		o = C.useRef();
	o.current == null && (o.current = vv({ window: i, v5Compat: !0 }));
	let s = o.current,
		[l, a] = C.useState({ action: s.action, location: s.location }),
		{ v7_startTransition: u } = r || {},
		c = C.useCallback(
			(f) => {
				u && Vc ? Vc(() => a(f)) : a(f);
			},
			[a, u]
		);
	return (
		C.useLayoutEffect(() => s.listen(c), [s, c]),
		C.createElement(Jv, {
			basename: t,
			children: n,
			location: l.location,
			navigationType: l.action,
			navigator: s,
			future: r,
		})
	);
}
var Dc;
(function (e) {
	(e.UseScrollRestoration = 'useScrollRestoration'),
		(e.UseSubmit = 'useSubmit'),
		(e.UseSubmitFetcher = 'useSubmitFetcher'),
		(e.UseFetcher = 'useFetcher'),
		(e.useViewTransitionState = 'useViewTransitionState');
})(Dc || (Dc = {}));
var _c;
(function (e) {
	(e.UseFetcher = 'useFetcher'),
		(e.UseFetchers = 'useFetchers'),
		(e.UseScrollRestoration = 'useScrollRestoration');
})(_c || (_c = {}));
function n0(e) {
	if (typeof Proxy > 'u') return e;
	const t = new Map(),
		n = (...r) => e(...r);
	return new Proxy(n, {
		get: (r, i) =>
			i === 'create' ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
	});
}
function zo(e) {
	return e !== null && typeof e == 'object' && typeof e.start == 'function';
}
const Rl = (e) => Array.isArray(e);
function mp(e, t) {
	if (!Array.isArray(t)) return !1;
	const n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
function Kr(e) {
	return typeof e == 'string' || Array.isArray(e);
}
function Nc(e) {
	const t = [{}, {}];
	return (
		e == null ||
			e.values.forEach((n, r) => {
				(t[0][r] = n.get()), (t[1][r] = n.getVelocity());
			}),
		t
	);
}
function Ba(e, t, n, r) {
	if (typeof t == 'function') {
		const [i, o] = Nc(r);
		t = t(n !== void 0 ? n : e.custom, i, o);
	}
	if (
		(typeof t == 'string' && (t = e.variants && e.variants[t]),
		typeof t == 'function')
	) {
		const [i, o] = Nc(r);
		t = t(n !== void 0 ? n : e.custom, i, o);
	}
	return t;
}
function Uo(e, t, n) {
	const r = e.getProps();
	return Ba(r, t, n !== void 0 ? n : r.custom, e);
}
const za = [
		'animate',
		'whileInView',
		'whileFocus',
		'whileHover',
		'whileTap',
		'whileDrag',
		'exit',
	],
	Ua = ['initial', ...za],
	ei = [
		'transformPerspective',
		'x',
		'y',
		'z',
		'translateX',
		'translateY',
		'translateZ',
		'scale',
		'scaleX',
		'scaleY',
		'rotate',
		'rotateX',
		'rotateY',
		'rotateZ',
		'skew',
		'skewX',
		'skewY',
	],
	pn = new Set(ei),
	at = (e) => e * 1e3,
	ut = (e) => e / 1e3,
	r0 = { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 },
	i0 = (e) => ({
		type: 'spring',
		stiffness: 550,
		damping: e === 0 ? 2 * Math.sqrt(550) : 30,
		restSpeed: 10,
	}),
	o0 = { type: 'keyframes', duration: 0.8 },
	s0 = { type: 'keyframes', ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
	l0 = (e, { keyframes: t }) =>
		t.length > 2
			? o0
			: pn.has(e)
			? e.startsWith('scale')
				? i0(t[1])
				: r0
			: s0;
function $a(e, t) {
	return e ? e[t] || e.default || e : void 0;
}
const a0 = { skipAnimations: !1, useManualTiming: !1 },
	u0 = (e) => e !== null;
function $o(e, { repeat: t, repeatType: n = 'loop' }, r) {
	const i = e.filter(u0),
		o = t && n !== 'loop' && t % 2 === 1 ? 0 : i.length - 1;
	return !o || r === void 0 ? i[o] : r;
}
const pe = (e) => e;
function c0(e) {
	let t = new Set(),
		n = new Set(),
		r = !1,
		i = !1;
	const o = new WeakSet();
	let s = { delta: 0, timestamp: 0, isProcessing: !1 };
	function l(u) {
		o.has(u) && (a.schedule(u), e()), u(s);
	}
	const a = {
		schedule: (u, c = !1, f = !1) => {
			const g = f && r ? t : n;
			return c && o.add(u), g.has(u) || g.add(u), u;
		},
		cancel: (u) => {
			n.delete(u), o.delete(u);
		},
		process: (u) => {
			if (((s = u), r)) {
				i = !0;
				return;
			}
			(r = !0),
				([t, n] = [n, t]),
				n.clear(),
				t.forEach(l),
				(r = !1),
				i && ((i = !1), a.process(u));
		},
	};
	return a;
}
const Ci = [
		'read',
		'resolveKeyframes',
		'update',
		'preRender',
		'render',
		'postRender',
	],
	f0 = 40;
function gp(e, t) {
	let n = !1,
		r = !0;
	const i = { delta: 0, timestamp: 0, isProcessing: !1 },
		o = () => (n = !0),
		s = Ci.reduce((p, h) => ((p[h] = c0(o)), p), {}),
		{
			read: l,
			resolveKeyframes: a,
			update: u,
			preRender: c,
			render: f,
			postRender: d,
		} = s,
		g = () => {
			const p = performance.now();
			(n = !1),
				(i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, f0), 1)),
				(i.timestamp = p),
				(i.isProcessing = !0),
				l.process(i),
				a.process(i),
				u.process(i),
				c.process(i),
				f.process(i),
				d.process(i),
				(i.isProcessing = !1),
				n && t && ((r = !1), e(g));
		},
		y = () => {
			(n = !0), (r = !0), i.isProcessing || e(g);
		};
	return {
		schedule: Ci.reduce((p, h) => {
			const m = s[h];
			return (p[h] = (w, x = !1, E = !1) => (n || y(), m.schedule(w, x, E))), p;
		}, {}),
		cancel: (p) => {
			for (let h = 0; h < Ci.length; h++) s[Ci[h]].cancel(p);
		},
		state: i,
		steps: s,
	};
}
const {
		schedule: I,
		cancel: Ot,
		state: se,
		steps: ws,
	} = gp(typeof requestAnimationFrame < 'u' ? requestAnimationFrame : pe, !0),
	yp = (e, t, n) =>
		(((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
	d0 = 1e-7,
	h0 = 12;
function p0(e, t, n, r, i) {
	let o,
		s,
		l = 0;
	do (s = t + (n - t) / 2), (o = yp(s, r, i) - e), o > 0 ? (n = s) : (t = s);
	while (Math.abs(o) > d0 && ++l < h0);
	return s;
}
function ti(e, t, n, r) {
	if (e === t && n === r) return pe;
	const i = (o) => p0(o, 0, 1, e, n);
	return (o) => (o === 0 || o === 1 ? o : yp(i(o), t, r));
}
const vp = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
	wp = (e) => (t) => 1 - e(1 - t),
	Sp = ti(0.33, 1.53, 0.69, 0.99),
	Wa = wp(Sp),
	xp = vp(Wa),
	Pp = (e) =>
		(e *= 2) < 1 ? 0.5 * Wa(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
	Ha = (e) => 1 - Math.sin(Math.acos(e)),
	Cp = wp(Ha),
	Tp = vp(Ha),
	kp = (e) => /^0[^.\s]+$/u.test(e);
function m0(e) {
	return typeof e == 'number'
		? e === 0
		: e !== null
		? e === 'none' || e === '0' || kp(e)
		: !0;
}
let Al = pe;
const Ep = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
	Rp = (e) => (t) => typeof t == 'string' && t.startsWith(e),
	Ap = Rp('--'),
	g0 = Rp('var(--'),
	Ka = (e) => (g0(e) ? y0.test(e.split('/*')[0].trim()) : !1),
	y0 =
		/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
	v0 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function w0(e) {
	const t = v0.exec(e);
	if (!t) return [,];
	const [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
function Lp(e, t, n = 1) {
	const [r, i] = w0(e);
	if (!r) return;
	const o = window.getComputedStyle(t).getPropertyValue(r);
	if (o) {
		const s = o.trim();
		return Ep(s) ? parseFloat(s) : s;
	}
	return Ka(i) ? Lp(i, t, n + 1) : i;
}
const It = (e, t, n) => (n > t ? t : n < e ? e : n),
	bn = {
		test: (e) => typeof e == 'number',
		parse: parseFloat,
		transform: (e) => e,
	},
	Gr = { ...bn, transform: (e) => It(0, 1, e) },
	Ti = { ...bn, default: 1 },
	ni = (e) => ({
		test: (t) =>
			typeof t == 'string' && t.endsWith(e) && t.split(' ').length === 1,
		parse: parseFloat,
		transform: (t) => `${t}${e}`,
	}),
	wt = ni('deg'),
	et = ni('%'),
	M = ni('px'),
	S0 = ni('vh'),
	x0 = ni('vw'),
	jc = {
		...et,
		parse: (e) => et.parse(e) / 100,
		transform: (e) => et.transform(e * 100),
	},
	P0 = new Set([
		'width',
		'height',
		'top',
		'left',
		'right',
		'bottom',
		'x',
		'y',
		'translateX',
		'translateY',
	]),
	Fc = (e) => e === bn || e === M,
	Oc = (e, t) => parseFloat(e.split(', ')[t]),
	Ic =
		(e, t) =>
		(n, { transform: r }) => {
			if (r === 'none' || !r) return 0;
			const i = r.match(/^matrix3d\((.+)\)$/u);
			if (i) return Oc(i[1], t);
			{
				const o = r.match(/^matrix\((.+)\)$/u);
				return o ? Oc(o[1], e) : 0;
			}
		},
	C0 = new Set(['x', 'y', 'z']),
	T0 = ei.filter((e) => !C0.has(e));
function k0(e) {
	const t = [];
	return (
		T0.forEach((n) => {
			const r = e.getValue(n);
			r !== void 0 &&
				(t.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
		}),
		t
	);
}
const Qn = {
	width: ({ x: e }, { paddingLeft: t = '0', paddingRight: n = '0' }) =>
		e.max - e.min - parseFloat(t) - parseFloat(n),
	height: ({ y: e }, { paddingTop: t = '0', paddingBottom: n = '0' }) =>
		e.max - e.min - parseFloat(t) - parseFloat(n),
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: Ic(4, 13),
	y: Ic(5, 14),
};
Qn.translateX = Qn.x;
Qn.translateY = Qn.y;
const Mp = (e) => (t) => t.test(e),
	E0 = { test: (e) => e === 'auto', parse: (e) => e },
	Vp = [bn, M, et, wt, x0, S0, E0],
	Bc = (e) => Vp.find(Mp(e)),
	sn = new Set();
let Ll = !1,
	Ml = !1;
function Dp() {
	if (Ml) {
		const e = Array.from(sn).filter((r) => r.needsMeasurement),
			t = new Set(e.map((r) => r.element)),
			n = new Map();
		t.forEach((r) => {
			const i = k0(r);
			i.length && (n.set(r, i), r.render());
		}),
			e.forEach((r) => r.measureInitialState()),
			t.forEach((r) => {
				r.render();
				const i = n.get(r);
				i &&
					i.forEach(([o, s]) => {
						var l;
						(l = r.getValue(o)) === null || l === void 0 || l.set(s);
					});
			}),
			e.forEach((r) => r.measureEndState()),
			e.forEach((r) => {
				r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
			});
	}
	(Ml = !1), (Ll = !1), sn.forEach((e) => e.complete()), sn.clear();
}
function _p() {
	sn.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Ml = !0);
	});
}
function R0() {
	_p(), Dp();
}
class Ga {
	constructor(t, n, r, i, o, s = !1) {
		(this.isComplete = !1),
			(this.isAsync = !1),
			(this.needsMeasurement = !1),
			(this.isScheduled = !1),
			(this.unresolvedKeyframes = [...t]),
			(this.onComplete = n),
			(this.name = r),
			(this.motionValue = i),
			(this.element = o),
			(this.isAsync = s);
	}
	scheduleResolve() {
		(this.isScheduled = !0),
			this.isAsync
				? (sn.add(this), Ll || ((Ll = !0), I.read(_p), I.resolveKeyframes(Dp)))
				: (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		const {
			unresolvedKeyframes: t,
			name: n,
			element: r,
			motionValue: i,
		} = this;
		for (let o = 0; o < t.length; o++)
			if (t[o] === null)
				if (o === 0) {
					const s = i == null ? void 0 : i.get(),
						l = t[t.length - 1];
					if (s !== void 0) t[0] = s;
					else if (r && n) {
						const a = r.readValue(n, l);
						a != null && (t[0] = a);
					}
					t[0] === void 0 && (t[0] = l), i && s === void 0 && i.set(t[0]);
				} else t[o] = t[o - 1];
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete() {
		(this.isComplete = !0),
			this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
			sn.delete(this);
	}
	cancel() {
		this.isComplete || ((this.isScheduled = !1), sn.delete(this));
	}
	resume() {
		this.isComplete || this.scheduleResolve();
	}
}
const kr = (e) => Math.round(e * 1e5) / 1e5,
	Qa = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function A0(e) {
	return e == null;
}
const L0 =
		/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
	Ya = (e, t) => (n) =>
		!!(
			(typeof n == 'string' && L0.test(n) && n.startsWith(e)) ||
			(t && !A0(n) && Object.prototype.hasOwnProperty.call(n, t))
		),
	Np = (e, t, n) => (r) => {
		if (typeof r != 'string') return r;
		const [i, o, s, l] = r.match(Qa);
		return {
			[e]: parseFloat(i),
			[t]: parseFloat(o),
			[n]: parseFloat(s),
			alpha: l !== void 0 ? parseFloat(l) : 1,
		};
	},
	M0 = (e) => It(0, 255, e),
	Ss = { ...bn, transform: (e) => Math.round(M0(e)) },
	tn = {
		test: Ya('rgb', 'red'),
		parse: Np('red', 'green', 'blue'),
		transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
			'rgba(' +
			Ss.transform(e) +
			', ' +
			Ss.transform(t) +
			', ' +
			Ss.transform(n) +
			', ' +
			kr(Gr.transform(r)) +
			')',
	};
function V0(e) {
	let t = '',
		n = '',
		r = '',
		i = '';
	return (
		e.length > 5
			? ((t = e.substring(1, 3)),
			  (n = e.substring(3, 5)),
			  (r = e.substring(5, 7)),
			  (i = e.substring(7, 9)))
			: ((t = e.substring(1, 2)),
			  (n = e.substring(2, 3)),
			  (r = e.substring(3, 4)),
			  (i = e.substring(4, 5)),
			  (t += t),
			  (n += n),
			  (r += r),
			  (i += i)),
		{
			red: parseInt(t, 16),
			green: parseInt(n, 16),
			blue: parseInt(r, 16),
			alpha: i ? parseInt(i, 16) / 255 : 1,
		}
	);
}
const Vl = { test: Ya('#'), parse: V0, transform: tn.transform },
	An = {
		test: Ya('hsl', 'hue'),
		parse: Np('hue', 'saturation', 'lightness'),
		transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
			'hsla(' +
			Math.round(e) +
			', ' +
			et.transform(kr(t)) +
			', ' +
			et.transform(kr(n)) +
			', ' +
			kr(Gr.transform(r)) +
			')',
	},
	fe = {
		test: (e) => tn.test(e) || Vl.test(e) || An.test(e),
		parse: (e) =>
			tn.test(e) ? tn.parse(e) : An.test(e) ? An.parse(e) : Vl.parse(e),
		transform: (e) =>
			typeof e == 'string'
				? e
				: e.hasOwnProperty('red')
				? tn.transform(e)
				: An.transform(e),
	},
	D0 =
		/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function _0(e) {
	var t, n;
	return (
		isNaN(e) &&
		typeof e == 'string' &&
		(((t = e.match(Qa)) === null || t === void 0 ? void 0 : t.length) || 0) +
			(((n = e.match(D0)) === null || n === void 0 ? void 0 : n.length) || 0) >
			0
	);
}
const jp = 'number',
	Fp = 'color',
	N0 = 'var',
	j0 = 'var(',
	zc = '${}',
	F0 =
		/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Qr(e) {
	const t = e.toString(),
		n = [],
		r = { color: [], number: [], var: [] },
		i = [];
	let o = 0;
	const l = t
		.replace(
			F0,
			(a) => (
				fe.test(a)
					? (r.color.push(o), i.push(Fp), n.push(fe.parse(a)))
					: a.startsWith(j0)
					? (r.var.push(o), i.push(N0), n.push(a))
					: (r.number.push(o), i.push(jp), n.push(parseFloat(a))),
				++o,
				zc
			)
		)
		.split(zc);
	return { values: n, split: l, indexes: r, types: i };
}
function Op(e) {
	return Qr(e).values;
}
function Ip(e) {
	const { split: t, types: n } = Qr(e),
		r = t.length;
	return (i) => {
		let o = '';
		for (let s = 0; s < r; s++)
			if (((o += t[s]), i[s] !== void 0)) {
				const l = n[s];
				l === jp
					? (o += kr(i[s]))
					: l === Fp
					? (o += fe.transform(i[s]))
					: (o += i[s]);
			}
		return o;
	};
}
const O0 = (e) => (typeof e == 'number' ? 0 : e);
function I0(e) {
	const t = Op(e);
	return Ip(e)(t.map(O0));
}
const Bt = {
		test: _0,
		parse: Op,
		createTransformer: Ip,
		getAnimatableNone: I0,
	},
	B0 = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
function z0(e) {
	const [t, n] = e.slice(0, -1).split('(');
	if (t === 'drop-shadow') return e;
	const [r] = n.match(Qa) || [];
	if (!r) return e;
	const i = n.replace(r, '');
	let o = B0.has(t) ? 1 : 0;
	return r !== n && (o *= 100), t + '(' + o + i + ')';
}
const U0 = /\b([a-z-]*)\(.*?\)/gu,
	Dl = {
		...Bt,
		getAnimatableNone: (e) => {
			const t = e.match(U0);
			return t ? t.map(z0).join(' ') : e;
		},
	},
	$0 = {
		borderWidth: M,
		borderTopWidth: M,
		borderRightWidth: M,
		borderBottomWidth: M,
		borderLeftWidth: M,
		borderRadius: M,
		radius: M,
		borderTopLeftRadius: M,
		borderTopRightRadius: M,
		borderBottomRightRadius: M,
		borderBottomLeftRadius: M,
		width: M,
		maxWidth: M,
		height: M,
		maxHeight: M,
		top: M,
		right: M,
		bottom: M,
		left: M,
		padding: M,
		paddingTop: M,
		paddingRight: M,
		paddingBottom: M,
		paddingLeft: M,
		margin: M,
		marginTop: M,
		marginRight: M,
		marginBottom: M,
		marginLeft: M,
		backgroundPositionX: M,
		backgroundPositionY: M,
	},
	W0 = {
		rotate: wt,
		rotateX: wt,
		rotateY: wt,
		rotateZ: wt,
		scale: Ti,
		scaleX: Ti,
		scaleY: Ti,
		scaleZ: Ti,
		skew: wt,
		skewX: wt,
		skewY: wt,
		distance: M,
		translateX: M,
		translateY: M,
		translateZ: M,
		x: M,
		y: M,
		z: M,
		perspective: M,
		transformPerspective: M,
		opacity: Gr,
		originX: jc,
		originY: jc,
		originZ: M,
	},
	Uc = { ...bn, transform: Math.round },
	Xa = {
		...$0,
		...W0,
		zIndex: Uc,
		size: M,
		fillOpacity: Gr,
		strokeOpacity: Gr,
		numOctaves: Uc,
	},
	H0 = {
		...Xa,
		color: fe,
		backgroundColor: fe,
		outlineColor: fe,
		fill: fe,
		stroke: fe,
		borderColor: fe,
		borderTopColor: fe,
		borderRightColor: fe,
		borderBottomColor: fe,
		borderLeftColor: fe,
		filter: Dl,
		WebkitFilter: Dl,
	},
	Za = (e) => H0[e];
function Bp(e, t) {
	let n = Za(e);
	return (
		n !== Dl && (n = Bt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
	);
}
const K0 = new Set(['auto', 'none', '0']);
function G0(e, t, n) {
	let r = 0,
		i;
	for (; r < e.length && !i; ) {
		const o = e[r];
		typeof o == 'string' && !K0.has(o) && Qr(o).values.length && (i = e[r]),
			r++;
	}
	if (i && n) for (const o of t) e[o] = Bp(n, i);
}
class zp extends Ga {
	constructor(t, n, r, i, o) {
		super(t, n, r, i, o, !0);
	}
	readKeyframes() {
		const { unresolvedKeyframes: t, element: n, name: r } = this;
		if (!n || !n.current) return;
		super.readKeyframes();
		for (let a = 0; a < t.length; a++) {
			let u = t[a];
			if (typeof u == 'string' && ((u = u.trim()), Ka(u))) {
				const c = Lp(u, n.current);
				c !== void 0 && (t[a] = c),
					a === t.length - 1 && (this.finalKeyframe = u);
			}
		}
		if ((this.resolveNoneKeyframes(), !P0.has(r) || t.length !== 2)) return;
		const [i, o] = t,
			s = Bc(i),
			l = Bc(o);
		if (s !== l)
			if (Fc(s) && Fc(l))
				for (let a = 0; a < t.length; a++) {
					const u = t[a];
					typeof u == 'string' && (t[a] = parseFloat(u));
				}
			else this.needsMeasurement = !0;
	}
	resolveNoneKeyframes() {
		const { unresolvedKeyframes: t, name: n } = this,
			r = [];
		for (let i = 0; i < t.length; i++) m0(t[i]) && r.push(i);
		r.length && G0(t, r, n);
	}
	measureInitialState() {
		const { element: t, unresolvedKeyframes: n, name: r } = this;
		if (!t || !t.current) return;
		r === 'height' && (this.suspendedScrollY = window.pageYOffset),
			(this.measuredOrigin = Qn[r](
				t.measureViewportBox(),
				window.getComputedStyle(t.current)
			)),
			(n[0] = this.measuredOrigin);
		const i = n[n.length - 1];
		i !== void 0 && t.getValue(r, i).jump(i, !1);
	}
	measureEndState() {
		var t;
		const { element: n, name: r, unresolvedKeyframes: i } = this;
		if (!n || !n.current) return;
		const o = n.getValue(r);
		o && o.jump(this.measuredOrigin, !1);
		const s = i.length - 1,
			l = i[s];
		(i[s] = Qn[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
			l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
			!((t = this.removedTransforms) === null || t === void 0) &&
				t.length &&
				this.removedTransforms.forEach(([a, u]) => {
					n.getValue(a).set(u);
				}),
			this.resolveNoneKeyframes();
	}
}
function qa(e) {
	return typeof e == 'function';
}
let Ii;
function Q0() {
	Ii = void 0;
}
const tt = {
		now: () => (
			Ii === void 0 &&
				tt.set(
					se.isProcessing || a0.useManualTiming
						? se.timestamp
						: performance.now()
				),
			Ii
		),
		set: (e) => {
			(Ii = e), queueMicrotask(Q0);
		},
	},
	$c = (e, t) =>
		t === 'zIndex'
			? !1
			: !!(
					typeof e == 'number' ||
					Array.isArray(e) ||
					(typeof e == 'string' &&
						(Bt.test(e) || e === '0') &&
						!e.startsWith('url('))
			  );
function Y0(e) {
	const t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function X0(e, t, n, r) {
	const i = e[0];
	if (i === null) return !1;
	if (t === 'display' || t === 'visibility') return !0;
	const o = e[e.length - 1],
		s = $c(i, t),
		l = $c(o, t);
	return !s || !l ? !1 : Y0(e) || ((n === 'spring' || qa(n)) && r);
}
const Z0 = 40;
class Up {
	constructor({
		autoplay: t = !0,
		delay: n = 0,
		type: r = 'keyframes',
		repeat: i = 0,
		repeatDelay: o = 0,
		repeatType: s = 'loop',
		...l
	}) {
		(this.isStopped = !1),
			(this.hasAttemptedResolve = !1),
			(this.createdAt = tt.now()),
			(this.options = {
				autoplay: t,
				delay: n,
				type: r,
				repeat: i,
				repeatDelay: o,
				repeatType: s,
				...l,
			}),
			this.updateFinishedPromise();
	}
	calcStartTime() {
		return this.resolvedAt
			? this.resolvedAt - this.createdAt > Z0
				? this.resolvedAt
				: this.createdAt
			: this.createdAt;
	}
	get resolved() {
		return !this._resolved && !this.hasAttemptedResolve && R0(), this._resolved;
	}
	onKeyframesResolved(t, n) {
		(this.resolvedAt = tt.now()), (this.hasAttemptedResolve = !0);
		const {
			name: r,
			type: i,
			velocity: o,
			delay: s,
			onComplete: l,
			onUpdate: a,
			isGenerator: u,
		} = this.options;
		if (!u && !X0(t, r, i, o))
			if (s) this.options.duration = 0;
			else {
				a == null || a($o(t, this.options, n)),
					l == null || l(),
					this.resolveFinishedPromise();
				return;
			}
		const c = this.initPlayback(t, n);
		c !== !1 &&
			((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
			this.onPostResolved());
	}
	onPostResolved() {}
	then(t, n) {
		return this.currentFinishedPromise.then(t, n);
	}
	updateFinishedPromise() {
		this.currentFinishedPromise = new Promise((t) => {
			this.resolveFinishedPromise = t;
		});
	}
}
function $p(e, t) {
	return t ? e * (1e3 / t) : 0;
}
const q0 = 5;
function Wp(e, t, n) {
	const r = Math.max(t - q0, 0);
	return $p(n - e(r), t - r);
}
const xs = 0.001,
	J0 = 0.01,
	b0 = 10,
	e1 = 0.05,
	t1 = 1;
function n1({
	duration: e = 800,
	bounce: t = 0.25,
	velocity: n = 0,
	mass: r = 1,
}) {
	let i,
		o,
		s = 1 - t;
	(s = It(e1, t1, s)),
		(e = It(J0, b0, ut(e))),
		s < 1
			? ((i = (u) => {
					const c = u * s,
						f = c * e,
						d = c - n,
						g = _l(u, s),
						y = Math.exp(-f);
					return xs - (d / g) * y;
			  }),
			  (o = (u) => {
					const f = u * s * e,
						d = f * n + n,
						g = Math.pow(s, 2) * Math.pow(u, 2) * e,
						y = Math.exp(-f),
						v = _l(Math.pow(u, 2), s);
					return ((-i(u) + xs > 0 ? -1 : 1) * ((d - g) * y)) / v;
			  }))
			: ((i = (u) => {
					const c = Math.exp(-u * e),
						f = (u - n) * e + 1;
					return -xs + c * f;
			  }),
			  (o = (u) => {
					const c = Math.exp(-u * e),
						f = (n - u) * (e * e);
					return c * f;
			  }));
	const l = 5 / e,
		a = i1(i, o, l);
	if (((e = at(e)), isNaN(a)))
		return { stiffness: 100, damping: 10, duration: e };
	{
		const u = Math.pow(a, 2) * r;
		return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
	}
}
const r1 = 12;
function i1(e, t, n) {
	let r = n;
	for (let i = 1; i < r1; i++) r = r - e(r) / t(r);
	return r;
}
function _l(e, t) {
	return e * Math.sqrt(1 - t * t);
}
const o1 = ['duration', 'bounce'],
	s1 = ['stiffness', 'damping', 'mass'];
function Wc(e, t) {
	return t.some((n) => e[n] !== void 0);
}
function l1(e) {
	let t = {
		velocity: 0,
		stiffness: 100,
		damping: 10,
		mass: 1,
		isResolvedFromDuration: !1,
		...e,
	};
	if (!Wc(e, s1) && Wc(e, o1)) {
		const n = n1(e);
		(t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
	}
	return t;
}
function Hp({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
	const i = e[0],
		o = e[e.length - 1],
		s = { done: !1, value: i },
		{
			stiffness: l,
			damping: a,
			mass: u,
			duration: c,
			velocity: f,
			isResolvedFromDuration: d,
		} = l1({ ...r, velocity: -ut(r.velocity || 0) }),
		g = f || 0,
		y = a / (2 * Math.sqrt(l * u)),
		v = o - i,
		S = ut(Math.sqrt(l / u)),
		p = Math.abs(v) < 5;
	n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5);
	let h;
	if (y < 1) {
		const m = _l(S, y);
		h = (w) => {
			const x = Math.exp(-y * S * w);
			return (
				o - x * (((g + y * S * v) / m) * Math.sin(m * w) + v * Math.cos(m * w))
			);
		};
	} else if (y === 1) h = (m) => o - Math.exp(-S * m) * (v + (g + S * v) * m);
	else {
		const m = S * Math.sqrt(y * y - 1);
		h = (w) => {
			const x = Math.exp(-y * S * w),
				E = Math.min(m * w, 300);
			return (
				o - (x * ((g + y * S * v) * Math.sinh(E) + m * v * Math.cosh(E))) / m
			);
		};
	}
	return {
		calculatedDuration: (d && c) || null,
		next: (m) => {
			const w = h(m);
			if (d) s.done = m >= c;
			else {
				let x = 0;
				y < 1 && (x = m === 0 ? at(g) : Wp(h, m, w));
				const E = Math.abs(x) <= n,
					A = Math.abs(o - w) <= t;
				s.done = E && A;
			}
			return (s.value = s.done ? o : w), s;
		},
	};
}
function Hc({
	keyframes: e,
	velocity: t = 0,
	power: n = 0.8,
	timeConstant: r = 325,
	bounceDamping: i = 10,
	bounceStiffness: o = 500,
	modifyTarget: s,
	min: l,
	max: a,
	restDelta: u = 0.5,
	restSpeed: c,
}) {
	const f = e[0],
		d = { done: !1, value: f },
		g = (T) => (l !== void 0 && T < l) || (a !== void 0 && T > a),
		y = (T) =>
			l === void 0
				? a
				: a === void 0 || Math.abs(l - T) < Math.abs(a - T)
				? l
				: a;
	let v = n * t;
	const S = f + v,
		p = s === void 0 ? S : s(S);
	p !== S && (v = p - f);
	const h = (T) => -v * Math.exp(-T / r),
		m = (T) => p + h(T),
		w = (T) => {
			const j = h(T),
				V = m(T);
			(d.done = Math.abs(j) <= u), (d.value = d.done ? p : V);
		};
	let x, E;
	const A = (T) => {
		g(d.value) &&
			((x = T),
			(E = Hp({
				keyframes: [d.value, y(d.value)],
				velocity: Wp(m, T, d.value),
				damping: i,
				stiffness: o,
				restDelta: u,
				restSpeed: c,
			})));
	};
	return (
		A(0),
		{
			calculatedDuration: null,
			next: (T) => {
				let j = !1;
				return (
					!E && x === void 0 && ((j = !0), w(T), A(T)),
					x !== void 0 && T >= x ? E.next(T - x) : (!j && w(T), d)
				);
			},
		}
	);
}
const a1 = ti(0.42, 0, 1, 1),
	u1 = ti(0, 0, 0.58, 1),
	Kp = ti(0.42, 0, 0.58, 1),
	c1 = (e) => Array.isArray(e) && typeof e[0] != 'number',
	Ja = (e) => Array.isArray(e) && typeof e[0] == 'number',
	Kc = {
		linear: pe,
		easeIn: a1,
		easeInOut: Kp,
		easeOut: u1,
		circIn: Ha,
		circInOut: Tp,
		circOut: Cp,
		backIn: Wa,
		backInOut: xp,
		backOut: Sp,
		anticipate: Pp,
	},
	Gc = (e) => {
		if (Ja(e)) {
			Al(e.length === 4);
			const [t, n, r, i] = e;
			return ti(t, n, r, i);
		} else if (typeof e == 'string') return Al(Kc[e] !== void 0), Kc[e];
		return e;
	},
	f1 = (e, t) => (n) => t(e(n)),
	ct = (...e) => e.reduce(f1),
	Yn = (e, t, n) => {
		const r = t - e;
		return r === 0 ? 1 : (n - e) / r;
	},
	H = (e, t, n) => e + (t - e) * n;
function Ps(e, t, n) {
	return (
		n < 0 && (n += 1),
		n > 1 && (n -= 1),
		n < 1 / 6
			? e + (t - e) * 6 * n
			: n < 1 / 2
			? t
			: n < 2 / 3
			? e + (t - e) * (2 / 3 - n) * 6
			: e
	);
}
function d1({ hue: e, saturation: t, lightness: n, alpha: r }) {
	(e /= 360), (t /= 100), (n /= 100);
	let i = 0,
		o = 0,
		s = 0;
	if (!t) i = o = s = n;
	else {
		const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
			a = 2 * n - l;
		(i = Ps(a, l, e + 1 / 3)), (o = Ps(a, l, e)), (s = Ps(a, l, e - 1 / 3));
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(o * 255),
		blue: Math.round(s * 255),
		alpha: r,
	};
}
function po(e, t) {
	return (n) => (n > 0 ? t : e);
}
const Cs = (e, t, n) => {
		const r = e * e,
			i = n * (t * t - r) + r;
		return i < 0 ? 0 : Math.sqrt(i);
	},
	h1 = [Vl, tn, An],
	p1 = (e) => h1.find((t) => t.test(e));
function Qc(e) {
	const t = p1(e);
	if (!t) return !1;
	let n = t.parse(e);
	return t === An && (n = d1(n)), n;
}
const Yc = (e, t) => {
		const n = Qc(e),
			r = Qc(t);
		if (!n || !r) return po(e, t);
		const i = { ...n };
		return (o) => (
			(i.red = Cs(n.red, r.red, o)),
			(i.green = Cs(n.green, r.green, o)),
			(i.blue = Cs(n.blue, r.blue, o)),
			(i.alpha = H(n.alpha, r.alpha, o)),
			tn.transform(i)
		);
	},
	Nl = new Set(['none', 'hidden']);
function m1(e, t) {
	return Nl.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function g1(e, t) {
	return (n) => H(e, t, n);
}
function ba(e) {
	return typeof e == 'number'
		? g1
		: typeof e == 'string'
		? Ka(e)
			? po
			: fe.test(e)
			? Yc
			: w1
		: Array.isArray(e)
		? Gp
		: typeof e == 'object'
		? fe.test(e)
			? Yc
			: y1
		: po;
}
function Gp(e, t) {
	const n = [...e],
		r = n.length,
		i = e.map((o, s) => ba(o)(o, t[s]));
	return (o) => {
		for (let s = 0; s < r; s++) n[s] = i[s](o);
		return n;
	};
}
function y1(e, t) {
	const n = { ...e, ...t },
		r = {};
	for (const i in n)
		e[i] !== void 0 && t[i] !== void 0 && (r[i] = ba(e[i])(e[i], t[i]));
	return (i) => {
		for (const o in r) n[o] = r[o](i);
		return n;
	};
}
function v1(e, t) {
	var n;
	const r = [],
		i = { color: 0, var: 0, number: 0 };
	for (let o = 0; o < t.values.length; o++) {
		const s = t.types[o],
			l = e.indexes[s][i[s]],
			a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
		(r[o] = a), i[s]++;
	}
	return r;
}
const w1 = (e, t) => {
	const n = Bt.createTransformer(t),
		r = Qr(e),
		i = Qr(t);
	return r.indexes.var.length === i.indexes.var.length &&
		r.indexes.color.length === i.indexes.color.length &&
		r.indexes.number.length >= i.indexes.number.length
		? (Nl.has(e) && !i.values.length) || (Nl.has(t) && !r.values.length)
			? m1(e, t)
			: ct(Gp(v1(r, i), i.values), n)
		: po(e, t);
};
function Qp(e, t, n) {
	return typeof e == 'number' && typeof t == 'number' && typeof n == 'number'
		? H(e, t, n)
		: ba(e)(e, t);
}
function S1(e, t, n) {
	const r = [],
		i = n || Qp,
		o = e.length - 1;
	for (let s = 0; s < o; s++) {
		let l = i(e[s], e[s + 1]);
		if (t) {
			const a = Array.isArray(t) ? t[s] || pe : t;
			l = ct(a, l);
		}
		r.push(l);
	}
	return r;
}
function x1(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	const o = e.length;
	if ((Al(o === t.length), o === 1)) return () => t[0];
	if (o === 2 && e[0] === e[1]) return () => t[1];
	e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
	const s = S1(t, r, i),
		l = s.length,
		a = (u) => {
			let c = 0;
			if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
			const f = Yn(e[c], e[c + 1], u);
			return s[c](f);
		};
	return n ? (u) => a(It(e[0], e[o - 1], u)) : a;
}
function P1(e, t) {
	const n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		const i = Yn(0, t, r);
		e.push(H(n, 1, i));
	}
}
function C1(e) {
	const t = [0];
	return P1(t, e.length - 1), t;
}
function T1(e, t) {
	return e.map((n) => n * t);
}
function k1(e, t) {
	return e.map(() => t || Kp).splice(0, e.length - 1);
}
function mo({
	duration: e = 300,
	keyframes: t,
	times: n,
	ease: r = 'easeInOut',
}) {
	const i = c1(r) ? r.map(Gc) : Gc(r),
		o = { done: !1, value: t[0] },
		s = T1(n && n.length === t.length ? n : C1(t), e),
		l = x1(s, t, { ease: Array.isArray(i) ? i : k1(t, i) });
	return {
		calculatedDuration: e,
		next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
	};
}
const Xc = 2e4;
function E1(e) {
	let t = 0;
	const n = 50;
	let r = e.next(t);
	for (; !r.done && t < Xc; ) (t += n), (r = e.next(t));
	return t >= Xc ? 1 / 0 : t;
}
const R1 = (e) => {
		const t = ({ timestamp: n }) => e(n);
		return {
			start: () => I.update(t, !0),
			stop: () => Ot(t),
			now: () => (se.isProcessing ? se.timestamp : tt.now()),
		};
	},
	A1 = { decay: Hc, inertia: Hc, tween: mo, keyframes: mo, spring: Hp },
	L1 = (e) => e / 100;
class eu extends Up {
	constructor(t) {
		super(t),
			(this.holdTime = null),
			(this.cancelTime = null),
			(this.currentTime = 0),
			(this.playbackSpeed = 1),
			(this.pendingPlayState = 'running'),
			(this.startTime = null),
			(this.state = 'idle'),
			(this.stop = () => {
				if (
					(this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle')
				)
					return;
				this.teardown();
				const { onStop: a } = this.options;
				a && a();
			});
		const { name: n, motionValue: r, element: i, keyframes: o } = this.options,
			s = (i == null ? void 0 : i.KeyframeResolver) || Ga,
			l = (a, u) => this.onKeyframesResolved(a, u);
		(this.resolver = new s(o, l, n, r, i)), this.resolver.scheduleResolve();
	}
	initPlayback(t) {
		const {
				type: n = 'keyframes',
				repeat: r = 0,
				repeatDelay: i = 0,
				repeatType: o,
				velocity: s = 0,
			} = this.options,
			l = qa(n) ? n : A1[n] || mo;
		let a, u;
		l !== mo &&
			typeof t[0] != 'number' &&
			((a = ct(L1, Qp(t[0], t[1]))), (t = [0, 100]));
		const c = l({ ...this.options, keyframes: t });
		o === 'mirror' &&
			(u = l({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
			c.calculatedDuration === null && (c.calculatedDuration = E1(c));
		const { calculatedDuration: f } = c,
			d = f + i,
			g = d * (r + 1) - i;
		return {
			generator: c,
			mirroredGenerator: u,
			mapPercentToKeyframes: a,
			calculatedDuration: f,
			resolvedDuration: d,
			totalDuration: g,
		};
	}
	onPostResolved() {
		const { autoplay: t = !0 } = this.options;
		this.play(),
			this.pendingPlayState === 'paused' || !t
				? this.pause()
				: (this.state = this.pendingPlayState);
	}
	tick(t, n = !1) {
		const { resolved: r } = this;
		if (!r) {
			const { keyframes: T } = this.options;
			return { done: !0, value: T[T.length - 1] };
		}
		const {
			finalKeyframe: i,
			generator: o,
			mirroredGenerator: s,
			mapPercentToKeyframes: l,
			keyframes: a,
			calculatedDuration: u,
			totalDuration: c,
			resolvedDuration: f,
		} = r;
		if (this.startTime === null) return o.next(0);
		const {
			delay: d,
			repeat: g,
			repeatType: y,
			repeatDelay: v,
			onUpdate: S,
		} = this.options;
		this.speed > 0
			? (this.startTime = Math.min(this.startTime, t))
			: this.speed < 0 &&
			  (this.startTime = Math.min(t - c / this.speed, this.startTime)),
			n
				? (this.currentTime = t)
				: this.holdTime !== null
				? (this.currentTime = this.holdTime)
				: (this.currentTime = Math.round(t - this.startTime) * this.speed);
		const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
			h = this.speed >= 0 ? p < 0 : p > c;
		(this.currentTime = Math.max(p, 0)),
			this.state === 'finished' &&
				this.holdTime === null &&
				(this.currentTime = c);
		let m = this.currentTime,
			w = o;
		if (g) {
			const T = Math.min(this.currentTime, c) / f;
			let j = Math.floor(T),
				V = T % 1;
			!V && T >= 1 && (V = 1),
				V === 1 && j--,
				(j = Math.min(j, g + 1)),
				!!(j % 2) &&
					(y === 'reverse'
						? ((V = 1 - V), v && (V -= v / f))
						: y === 'mirror' && (w = s)),
				(m = It(0, 1, V) * f);
		}
		const x = h ? { done: !1, value: a[0] } : w.next(m);
		l && (x.value = l(x.value));
		let { done: E } = x;
		!h &&
			u !== null &&
			(E = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
		const A =
			this.holdTime === null &&
			(this.state === 'finished' || (this.state === 'running' && E));
		return (
			A && i !== void 0 && (x.value = $o(a, this.options, i)),
			S && S(x.value),
			A && this.finish(),
			x
		);
	}
	get duration() {
		const { resolved: t } = this;
		return t ? ut(t.calculatedDuration) : 0;
	}
	get time() {
		return ut(this.currentTime);
	}
	set time(t) {
		(t = at(t)),
			(this.currentTime = t),
			this.holdTime !== null || this.speed === 0
				? (this.holdTime = t)
				: this.driver && (this.startTime = this.driver.now() - t / this.speed);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(t) {
		const n = this.playbackSpeed !== t;
		(this.playbackSpeed = t), n && (this.time = ut(this.currentTime));
	}
	play() {
		if (
			(this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
		) {
			this.pendingPlayState = 'running';
			return;
		}
		if (this.isStopped) return;
		const { driver: t = R1, onPlay: n, startTime: r } = this.options;
		this.driver || (this.driver = t((o) => this.tick(o))), n && n();
		const i = this.driver.now();
		this.holdTime !== null
			? (this.startTime = i - this.holdTime)
			: this.startTime
			? this.state === 'finished' && (this.startTime = i)
			: (this.startTime = r ?? this.calcStartTime()),
			this.state === 'finished' && this.updateFinishedPromise(),
			(this.cancelTime = this.startTime),
			(this.holdTime = null),
			(this.state = 'running'),
			this.driver.start();
	}
	pause() {
		var t;
		if (!this._resolved) {
			this.pendingPlayState = 'paused';
			return;
		}
		(this.state = 'paused'),
			(this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
	}
	complete() {
		this.state !== 'running' && this.play(),
			(this.pendingPlayState = this.state = 'finished'),
			(this.holdTime = null);
	}
	finish() {
		this.teardown(), (this.state = 'finished');
		const { onComplete: t } = this.options;
		t && t();
	}
	cancel() {
		this.cancelTime !== null && this.tick(this.cancelTime),
			this.teardown(),
			this.updateFinishedPromise();
	}
	teardown() {
		(this.state = 'idle'),
			this.stopDriver(),
			this.resolveFinishedPromise(),
			this.updateFinishedPromise(),
			(this.startTime = this.cancelTime = null),
			this.resolver.cancel();
	}
	stopDriver() {
		this.driver && (this.driver.stop(), (this.driver = void 0));
	}
	sample(t) {
		return (this.startTime = 0), this.tick(t, !0);
	}
}
const M1 = new Set(['opacity', 'clipPath', 'filter', 'transform']),
	V1 = 10,
	D1 = (e, t) => {
		let n = '';
		const r = Math.max(Math.round(t / V1), 2);
		for (let i = 0; i < r; i++) n += e(Yn(0, r - 1, i)) + ', ';
		return `linear(${n.substring(0, n.length - 2)})`;
	};
function tu(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
const _1 = { linearEasing: void 0 };
function N1(e, t) {
	const n = tu(e);
	return () => {
		var r;
		return (r = _1[t]) !== null && r !== void 0 ? r : n();
	};
}
const go = N1(() => {
	try {
		document
			.createElement('div')
			.animate({ opacity: 0 }, { easing: 'linear(0, 1)' });
	} catch {
		return !1;
	}
	return !0;
}, 'linearEasing');
function Yp(e) {
	return !!(
		(typeof e == 'function' && go()) ||
		!e ||
		(typeof e == 'string' && (e in jl || go())) ||
		Ja(e) ||
		(Array.isArray(e) && e.every(Yp))
	);
}
const pr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
	jl = {
		linear: 'linear',
		ease: 'ease',
		easeIn: 'ease-in',
		easeOut: 'ease-out',
		easeInOut: 'ease-in-out',
		circIn: pr([0, 0.65, 0.55, 1]),
		circOut: pr([0.55, 0, 1, 0.45]),
		backIn: pr([0.31, 0.01, 0.66, -0.59]),
		backOut: pr([0.33, 1.53, 0.69, 0.99]),
	};
function Xp(e, t) {
	if (e)
		return typeof e == 'function' && go()
			? D1(e, t)
			: Ja(e)
			? pr(e)
			: Array.isArray(e)
			? e.map((n) => Xp(n, t) || jl.easeOut)
			: jl[e];
}
function j1(
	e,
	t,
	n,
	{
		delay: r = 0,
		duration: i = 300,
		repeat: o = 0,
		repeatType: s = 'loop',
		ease: l,
		times: a,
	} = {}
) {
	const u = { [t]: n };
	a && (u.offset = a);
	const c = Xp(l, i);
	return (
		Array.isArray(c) && (u.easing = c),
		e.animate(u, {
			delay: r,
			duration: i,
			easing: Array.isArray(c) ? 'linear' : c,
			fill: 'both',
			iterations: o + 1,
			direction: s === 'reverse' ? 'alternate' : 'normal',
		})
	);
}
function Zc(e, t) {
	(e.timeline = t), (e.onfinish = null);
}
const F1 = tu(() => Object.hasOwnProperty.call(Element.prototype, 'animate')),
	yo = 10,
	O1 = 2e4;
function I1(e) {
	return qa(e.type) || e.type === 'spring' || !Yp(e.ease);
}
function B1(e, t) {
	const n = new eu({
		...t,
		keyframes: e,
		repeat: 0,
		delay: 0,
		isGenerator: !0,
	});
	let r = { done: !1, value: e[0] };
	const i = [];
	let o = 0;
	for (; !r.done && o < O1; ) (r = n.sample(o)), i.push(r.value), (o += yo);
	return { times: void 0, keyframes: i, duration: o - yo, ease: 'linear' };
}
const Zp = { anticipate: Pp, backInOut: xp, circInOut: Tp };
function z1(e) {
	return e in Zp;
}
class qc extends Up {
	constructor(t) {
		super(t);
		const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
		(this.resolver = new zp(
			o,
			(s, l) => this.onKeyframesResolved(s, l),
			n,
			r,
			i
		)),
			this.resolver.scheduleResolve();
	}
	initPlayback(t, n) {
		var r;
		let {
			duration: i = 300,
			times: o,
			ease: s,
			type: l,
			motionValue: a,
			name: u,
			startTime: c,
		} = this.options;
		if (!(!((r = a.owner) === null || r === void 0) && r.current)) return !1;
		if (
			(typeof s == 'string' && go() && z1(s) && (s = Zp[s]), I1(this.options))
		) {
			const {
					onComplete: d,
					onUpdate: g,
					motionValue: y,
					element: v,
					...S
				} = this.options,
				p = B1(t, S);
			(t = p.keyframes),
				t.length === 1 && (t[1] = t[0]),
				(i = p.duration),
				(o = p.times),
				(s = p.ease),
				(l = 'keyframes');
		}
		const f = j1(a.owner.current, u, t, {
			...this.options,
			duration: i,
			times: o,
			ease: s,
		});
		return (
			(f.startTime = c ?? this.calcStartTime()),
			this.pendingTimeline
				? (Zc(f, this.pendingTimeline), (this.pendingTimeline = void 0))
				: (f.onfinish = () => {
						const { onComplete: d } = this.options;
						a.set($o(t, this.options, n)),
							d && d(),
							this.cancel(),
							this.resolveFinishedPromise();
				  }),
			{ animation: f, duration: i, times: o, type: l, ease: s, keyframes: t }
		);
	}
	get duration() {
		const { resolved: t } = this;
		if (!t) return 0;
		const { duration: n } = t;
		return ut(n);
	}
	get time() {
		const { resolved: t } = this;
		if (!t) return 0;
		const { animation: n } = t;
		return ut(n.currentTime || 0);
	}
	set time(t) {
		const { resolved: n } = this;
		if (!n) return;
		const { animation: r } = n;
		r.currentTime = at(t);
	}
	get speed() {
		const { resolved: t } = this;
		if (!t) return 1;
		const { animation: n } = t;
		return n.playbackRate;
	}
	set speed(t) {
		const { resolved: n } = this;
		if (!n) return;
		const { animation: r } = n;
		r.playbackRate = t;
	}
	get state() {
		const { resolved: t } = this;
		if (!t) return 'idle';
		const { animation: n } = t;
		return n.playState;
	}
	get startTime() {
		const { resolved: t } = this;
		if (!t) return null;
		const { animation: n } = t;
		return n.startTime;
	}
	attachTimeline(t) {
		if (!this._resolved) this.pendingTimeline = t;
		else {
			const { resolved: n } = this;
			if (!n) return pe;
			const { animation: r } = n;
			Zc(r, t);
		}
		return pe;
	}
	play() {
		if (this.isStopped) return;
		const { resolved: t } = this;
		if (!t) return;
		const { animation: n } = t;
		n.playState === 'finished' && this.updateFinishedPromise(), n.play();
	}
	pause() {
		const { resolved: t } = this;
		if (!t) return;
		const { animation: n } = t;
		n.pause();
	}
	stop() {
		if ((this.resolver.cancel(), (this.isStopped = !0), this.state === 'idle'))
			return;
		this.resolveFinishedPromise(), this.updateFinishedPromise();
		const { resolved: t } = this;
		if (!t) return;
		const {
			animation: n,
			keyframes: r,
			duration: i,
			type: o,
			ease: s,
			times: l,
		} = t;
		if (n.playState === 'idle' || n.playState === 'finished') return;
		if (this.time) {
			const {
					motionValue: u,
					onUpdate: c,
					onComplete: f,
					element: d,
					...g
				} = this.options,
				y = new eu({
					...g,
					keyframes: r,
					duration: i,
					type: o,
					ease: s,
					times: l,
					isGenerator: !0,
				}),
				v = at(this.time);
			u.setWithVelocity(y.sample(v - yo).value, y.sample(v).value, yo);
		}
		const { onStop: a } = this.options;
		a && a(), this.cancel();
	}
	complete() {
		const { resolved: t } = this;
		t && t.animation.finish();
	}
	cancel() {
		const { resolved: t } = this;
		t && t.animation.cancel();
	}
	static supports(t) {
		const {
			motionValue: n,
			name: r,
			repeatDelay: i,
			repeatType: o,
			damping: s,
			type: l,
		} = t;
		return (
			F1() &&
			r &&
			M1.has(r) &&
			n &&
			n.owner &&
			n.owner.current instanceof HTMLElement &&
			!n.owner.getProps().onUpdate &&
			!i &&
			o !== 'mirror' &&
			s !== 0 &&
			l !== 'inertia'
		);
	}
}
const U1 = tu(() => window.ScrollTimeline !== void 0);
class $1 {
	constructor(t) {
		(this.stop = () => this.runAll('stop')),
			(this.animations = t.filter(Boolean));
	}
	then(t, n) {
		return Promise.all(this.animations).then(t).catch(n);
	}
	getAll(t) {
		return this.animations[0][t];
	}
	setAll(t, n) {
		for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
	}
	attachTimeline(t, n) {
		const r = this.animations.map((i) =>
			U1() && i.attachTimeline ? i.attachTimeline(t) : n(i)
		);
		return () => {
			r.forEach((i, o) => {
				i && i(), this.animations[o].stop();
			});
		};
	}
	get time() {
		return this.getAll('time');
	}
	set time(t) {
		this.setAll('time', t);
	}
	get speed() {
		return this.getAll('speed');
	}
	set speed(t) {
		this.setAll('speed', t);
	}
	get startTime() {
		return this.getAll('startTime');
	}
	get duration() {
		let t = 0;
		for (let n = 0; n < this.animations.length; n++)
			t = Math.max(t, this.animations[n].duration);
		return t;
	}
	runAll(t) {
		this.animations.forEach((n) => n[t]());
	}
	play() {
		this.runAll('play');
	}
	pause() {
		this.runAll('pause');
	}
	cancel() {
		this.runAll('cancel');
	}
	complete() {
		this.runAll('complete');
	}
}
function W1({
	when: e,
	delay: t,
	delayChildren: n,
	staggerChildren: r,
	staggerDirection: i,
	repeat: o,
	repeatType: s,
	repeatDelay: l,
	from: a,
	elapsed: u,
	...c
}) {
	return !!Object.keys(c).length;
}
const nu =
		(e, t, n, r = {}, i, o) =>
		(s) => {
			const l = $a(r, e) || {},
				a = l.delay || r.delay || 0;
			let { elapsed: u = 0 } = r;
			u = u - at(a);
			let c = {
				keyframes: Array.isArray(n) ? n : [null, n],
				ease: 'easeOut',
				velocity: t.getVelocity(),
				...l,
				delay: -u,
				onUpdate: (d) => {
					t.set(d), l.onUpdate && l.onUpdate(d);
				},
				onComplete: () => {
					s(), l.onComplete && l.onComplete();
				},
				name: e,
				motionValue: t,
				element: o ? void 0 : i,
			};
			W1(l) || (c = { ...c, ...l0(e, c) }),
				c.duration && (c.duration = at(c.duration)),
				c.repeatDelay && (c.repeatDelay = at(c.repeatDelay)),
				c.from !== void 0 && (c.keyframes[0] = c.from);
			let f = !1;
			if (
				((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
					((c.duration = 0), c.delay === 0 && (f = !0)),
				f && !o && t.get() !== void 0)
			) {
				const d = $o(c.keyframes, l);
				if (d !== void 0)
					return (
						I.update(() => {
							c.onUpdate(d), c.onComplete();
						}),
						new $1([])
					);
			}
			return !o && qc.supports(c) ? new qc(c) : new eu(c);
		},
	H1 = (e) => !!(e && typeof e == 'object' && e.mix && e.toValue),
	K1 = (e) => (Rl(e) ? e[e.length - 1] || 0 : e);
function ru(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function iu(e, t) {
	const n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
class ou {
	constructor() {
		this.subscriptions = [];
	}
	add(t) {
		return ru(this.subscriptions, t), () => iu(this.subscriptions, t);
	}
	notify(t, n, r) {
		const i = this.subscriptions.length;
		if (i)
			if (i === 1) this.subscriptions[0](t, n, r);
			else
				for (let o = 0; o < i; o++) {
					const s = this.subscriptions[o];
					s && s(t, n, r);
				}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}
const Jc = 30,
	G1 = (e) => !isNaN(parseFloat(e));
class Q1 {
	constructor(t, n = {}) {
		(this.version = '11.11.11'),
			(this.canTrackVelocity = null),
			(this.events = {}),
			(this.updateAndNotify = (r, i = !0) => {
				const o = tt.now();
				this.updatedAt !== o && this.setPrevFrameValue(),
					(this.prev = this.current),
					this.setCurrent(r),
					this.current !== this.prev &&
						this.events.change &&
						this.events.change.notify(this.current),
					i &&
						this.events.renderRequest &&
						this.events.renderRequest.notify(this.current);
			}),
			(this.hasAnimated = !1),
			this.setCurrent(t),
			(this.owner = n.owner);
	}
	setCurrent(t) {
		(this.current = t),
			(this.updatedAt = tt.now()),
			this.canTrackVelocity === null &&
				t !== void 0 &&
				(this.canTrackVelocity = G1(this.current));
	}
	setPrevFrameValue(t = this.current) {
		(this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
	}
	onChange(t) {
		return this.on('change', t);
	}
	on(t, n) {
		this.events[t] || (this.events[t] = new ou());
		const r = this.events[t].add(n);
		return t === 'change'
			? () => {
					r(),
						I.read(() => {
							this.events.change.getSize() || this.stop();
						});
			  }
			: r;
	}
	clearListeners() {
		for (const t in this.events) this.events[t].clear();
	}
	attach(t, n) {
		(this.passiveEffect = t), (this.stopPassiveEffect = n);
	}
	set(t, n = !0) {
		!n || !this.passiveEffect
			? this.updateAndNotify(t, n)
			: this.passiveEffect(t, this.updateAndNotify);
	}
	setWithVelocity(t, n, r) {
		this.set(n),
			(this.prev = void 0),
			(this.prevFrameValue = t),
			(this.prevUpdatedAt = this.updatedAt - r);
	}
	jump(t, n = !0) {
		this.updateAndNotify(t),
			(this.prev = t),
			(this.prevUpdatedAt = this.prevFrameValue = void 0),
			n && this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect();
	}
	get() {
		return this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		const t = tt.now();
		if (
			!this.canTrackVelocity ||
			this.prevFrameValue === void 0 ||
			t - this.updatedAt > Jc
		)
			return 0;
		const n = Math.min(this.updatedAt - this.prevUpdatedAt, Jc);
		return $p(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
	}
	start(t) {
		return (
			this.stop(),
			new Promise((n) => {
				(this.hasAnimated = !0),
					(this.animation = t(n)),
					this.events.animationStart && this.events.animationStart.notify();
			}).then(() => {
				this.events.animationComplete && this.events.animationComplete.notify(),
					this.clearAnimation();
			})
		);
	}
	stop() {
		this.animation &&
			(this.animation.stop(),
			this.events.animationCancel && this.events.animationCancel.notify()),
			this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.clearListeners(),
			this.stop(),
			this.stopPassiveEffect && this.stopPassiveEffect();
	}
}
function Yr(e, t) {
	return new Q1(e, t);
}
function Y1(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Yr(n));
}
function X1(e, t) {
	const n = Uo(e, t);
	let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
	o = { ...o, ...r };
	for (const s in o) {
		const l = K1(o[s]);
		Y1(e, s, l);
	}
}
const su = (e) => e.replace(/([a-z])([A-Z])/gu, '$1-$2').toLowerCase(),
	Z1 = 'framerAppearId',
	qp = 'data-' + su(Z1);
function Jp(e) {
	return e.props[qp];
}
const he = (e) => !!(e && e.getVelocity);
function q1(e) {
	return !!(he(e) && e.add);
}
function Fl(e, t) {
	const n = e.getValue('willChange');
	if (q1(n)) return n.add(t);
}
function J1({ protectedKeys: e, needsAnimating: t }, n) {
	const r = e.hasOwnProperty(n) && t[n] !== !0;
	return (t[n] = !1), r;
}
function bp(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	var o;
	let { transition: s = e.getDefaultTransition(), transitionEnd: l, ...a } = t;
	r && (s = r);
	const u = [],
		c = i && e.animationState && e.animationState.getState()[i];
	for (const f in a) {
		const d = e.getValue(
				f,
				(o = e.latestValues[f]) !== null && o !== void 0 ? o : null
			),
			g = a[f];
		if (g === void 0 || (c && J1(c, f))) continue;
		const y = { delay: n, ...$a(s || {}, f) };
		let v = !1;
		if (window.MotionHandoffAnimation) {
			const p = Jp(e);
			if (p) {
				const h = window.MotionHandoffAnimation(p, f, I);
				h !== null && ((y.startTime = h), (v = !0));
			}
		}
		Fl(e, f),
			d.start(
				nu(f, d, g, e.shouldReduceMotion && pn.has(f) ? { type: !1 } : y, e, v)
			);
		const S = d.animation;
		S && u.push(S);
	}
	return (
		l &&
			Promise.all(u).then(() => {
				I.update(() => {
					l && X1(e, l);
				});
			}),
		u
	);
}
function Ol(e, t, n = {}) {
	var r;
	const i = Uo(
		e,
		t,
		n.type === 'exit'
			? (r = e.presenceContext) === null || r === void 0
				? void 0
				: r.custom
			: void 0
	);
	let { transition: o = e.getDefaultTransition() || {} } = i || {};
	n.transitionOverride && (o = n.transitionOverride);
	const s = i ? () => Promise.all(bp(e, i, n)) : () => Promise.resolve(),
		l =
			e.variantChildren && e.variantChildren.size
				? (u = 0) => {
						const {
							delayChildren: c = 0,
							staggerChildren: f,
							staggerDirection: d,
						} = o;
						return b1(e, t, c + u, f, d, n);
				  }
				: () => Promise.resolve(),
		{ when: a } = o;
	if (a) {
		const [u, c] = a === 'beforeChildren' ? [s, l] : [l, s];
		return u().then(() => c());
	} else return Promise.all([s(), l(n.delay)]);
}
function b1(e, t, n = 0, r = 0, i = 1, o) {
	const s = [],
		l = (e.variantChildren.size - 1) * r,
		a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
	return (
		Array.from(e.variantChildren)
			.sort(ew)
			.forEach((u, c) => {
				u.notify('AnimationStart', t),
					s.push(
						Ol(u, t, { ...o, delay: n + a(c) }).then(() =>
							u.notify('AnimationComplete', t)
						)
					);
			}),
		Promise.all(s)
	);
}
function ew(e, t) {
	return e.sortNodePosition(t);
}
function tw(e, t, n = {}) {
	e.notify('AnimationStart', t);
	let r;
	if (Array.isArray(t)) {
		const i = t.map((o) => Ol(e, o, n));
		r = Promise.all(i);
	} else if (typeof t == 'string') r = Ol(e, t, n);
	else {
		const i = typeof t == 'function' ? Uo(e, t, n.custom) : t;
		r = Promise.all(bp(e, i, n));
	}
	return r.then(() => {
		e.notify('AnimationComplete', t);
	});
}
const nw = Ua.length;
function em(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		const n = e.parent ? em(e.parent) || {} : {};
		return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
	}
	const t = {};
	for (let n = 0; n < nw; n++) {
		const r = Ua[n],
			i = e.props[r];
		(Kr(i) || i === !1) && (t[r] = i);
	}
	return t;
}
const rw = [...za].reverse(),
	iw = za.length;
function ow(e) {
	return (t) =>
		Promise.all(t.map(({ animation: n, options: r }) => tw(e, n, r)));
}
function sw(e) {
	let t = ow(e),
		n = bc(),
		r = !0;
	const i = (a) => (u, c) => {
		var f;
		const d = Uo(
			e,
			c,
			a === 'exit'
				? (f = e.presenceContext) === null || f === void 0
					? void 0
					: f.custom
				: void 0
		);
		if (d) {
			const { transition: g, transitionEnd: y, ...v } = d;
			u = { ...u, ...v, ...y };
		}
		return u;
	};
	function o(a) {
		t = a(e);
	}
	function s(a) {
		const { props: u } = e,
			c = em(e.parent) || {},
			f = [],
			d = new Set();
		let g = {},
			y = 1 / 0;
		for (let S = 0; S < iw; S++) {
			const p = rw[S],
				h = n[p],
				m = u[p] !== void 0 ? u[p] : c[p],
				w = Kr(m),
				x = p === a ? h.isActive : null;
			x === !1 && (y = S);
			let E = m === c[p] && m !== u[p] && w;
			if (
				(E && r && e.manuallyAnimateOnMount && (E = !1),
				(h.protectedKeys = { ...g }),
				(!h.isActive && x === null) ||
					(!m && !h.prevProp) ||
					zo(m) ||
					typeof m == 'boolean')
			)
				continue;
			const A = lw(h.prevProp, m);
			let T = A || (p === a && h.isActive && !E && w) || (S > y && w),
				j = !1;
			const V = Array.isArray(m) ? m : [m];
			let te = V.reduce(i(p), {});
			x === !1 && (te = {});
			const { prevResolvedValues: yt = {} } = h,
				Ht = { ...yt, ...te },
				er = (J) => {
					(T = !0),
						d.has(J) && ((j = !0), d.delete(J)),
						(h.needsAnimating[J] = !0);
					const R = e.getValue(J);
					R && (R.liveStyle = !1);
				};
			for (const J in Ht) {
				const R = te[J],
					D = yt[J];
				if (g.hasOwnProperty(J)) continue;
				let _ = !1;
				Rl(R) && Rl(D) ? (_ = !mp(R, D)) : (_ = R !== D),
					_
						? R != null
							? er(J)
							: d.add(J)
						: R !== void 0 && d.has(J)
						? er(J)
						: (h.protectedKeys[J] = !0);
			}
			(h.prevProp = m),
				(h.prevResolvedValues = te),
				h.isActive && (g = { ...g, ...te }),
				r && e.blockInitialAnimation && (T = !1),
				T &&
					(!(E && A) || j) &&
					f.push(...V.map((J) => ({ animation: J, options: { type: p } })));
		}
		if (d.size) {
			const S = {};
			d.forEach((p) => {
				const h = e.getBaseTarget(p),
					m = e.getValue(p);
				m && (m.liveStyle = !0), (S[p] = h ?? null);
			}),
				f.push({ animation: S });
		}
		let v = !!f.length;
		return (
			r &&
				(u.initial === !1 || u.initial === u.animate) &&
				!e.manuallyAnimateOnMount &&
				(v = !1),
			(r = !1),
			v ? t(f) : Promise.resolve()
		);
	}
	function l(a, u) {
		var c;
		if (n[a].isActive === u) return Promise.resolve();
		(c = e.variantChildren) === null ||
			c === void 0 ||
			c.forEach((d) => {
				var g;
				return (g = d.animationState) === null || g === void 0
					? void 0
					: g.setActive(a, u);
			}),
			(n[a].isActive = u);
		const f = s(a);
		for (const d in n) n[d].protectedKeys = {};
		return f;
	}
	return {
		animateChanges: s,
		setActive: l,
		setAnimateFunction: o,
		getState: () => n,
		reset: () => {
			(n = bc()), (r = !0);
		},
	};
}
function lw(e, t) {
	return typeof t == 'string' ? t !== e : Array.isArray(t) ? !mp(t, e) : !1;
}
function Qt(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {},
	};
}
function bc() {
	return {
		animate: Qt(!0),
		whileInView: Qt(),
		whileHover: Qt(),
		whileTap: Qt(),
		whileDrag: Qt(),
		whileFocus: Qt(),
		exit: Qt(),
	};
}
class Wt {
	constructor(t) {
		(this.isMounted = !1), (this.node = t);
	}
	update() {}
}
class aw extends Wt {
	constructor(t) {
		super(t), t.animationState || (t.animationState = sw(t));
	}
	updateAnimationControlsSubscription() {
		const { animate: t } = this.node.getProps();
		zo(t) && (this.unmountControls = t.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		const { animate: t } = this.node.getProps(),
			{ animate: n } = this.node.prevProps || {};
		t !== n && this.updateAnimationControlsSubscription();
	}
	unmount() {
		var t;
		this.node.animationState.reset(),
			(t = this.unmountControls) === null || t === void 0 || t.call(this);
	}
}
let uw = 0;
class cw extends Wt {
	constructor() {
		super(...arguments), (this.id = uw++);
	}
	update() {
		if (!this.node.presenceContext) return;
		const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
			{ isPresent: r } = this.node.prevPresenceContext || {};
		if (!this.node.animationState || t === r) return;
		const i = this.node.animationState.setActive('exit', !t);
		n && !t && i.then(() => n(this.id));
	}
	mount() {
		const { register: t } = this.node.presenceContext || {};
		t && (this.unmount = t(this.id));
	}
	unmount() {}
}
const fw = { animation: { Feature: aw }, exit: { Feature: cw } },
	tm = (e) =>
		e.pointerType === 'mouse'
			? typeof e.button != 'number' || e.button <= 0
			: e.isPrimary !== !1;
function Wo(e, t = 'page') {
	return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const dw = (e) => (t) => tm(t) && e(t, Wo(t));
function st(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function ft(e, t, n, r) {
	return st(e, t, dw(n), r);
}
const ef = (e, t) => Math.abs(e - t);
function hw(e, t) {
	const n = ef(e.x, t.x),
		r = ef(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
class nm {
	constructor(
		t,
		n,
		{ transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
	) {
		if (
			((this.startEvent = null),
			(this.lastMoveEvent = null),
			(this.lastMoveEventInfo = null),
			(this.handlers = {}),
			(this.contextWindow = window),
			(this.updatePoint = () => {
				if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
				const f = ks(this.lastMoveEventInfo, this.history),
					d = this.startEvent !== null,
					g = hw(f.offset, { x: 0, y: 0 }) >= 3;
				if (!d && !g) return;
				const { point: y } = f,
					{ timestamp: v } = se;
				this.history.push({ ...y, timestamp: v });
				const { onStart: S, onMove: p } = this.handlers;
				d ||
					(S && S(this.lastMoveEvent, f),
					(this.startEvent = this.lastMoveEvent)),
					p && p(this.lastMoveEvent, f);
			}),
			(this.handlePointerMove = (f, d) => {
				(this.lastMoveEvent = f),
					(this.lastMoveEventInfo = Ts(d, this.transformPagePoint)),
					I.update(this.updatePoint, !0);
			}),
			(this.handlePointerUp = (f, d) => {
				this.end();
				const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers;
				if (
					(this.dragSnapToOrigin && v && v(),
					!(this.lastMoveEvent && this.lastMoveEventInfo))
				)
					return;
				const S = ks(
					f.type === 'pointercancel'
						? this.lastMoveEventInfo
						: Ts(d, this.transformPagePoint),
					this.history
				);
				this.startEvent && g && g(f, S), y && y(f, S);
			}),
			!tm(t))
		)
			return;
		(this.dragSnapToOrigin = o),
			(this.handlers = n),
			(this.transformPagePoint = r),
			(this.contextWindow = i || window);
		const s = Wo(t),
			l = Ts(s, this.transformPagePoint),
			{ point: a } = l,
			{ timestamp: u } = se;
		this.history = [{ ...a, timestamp: u }];
		const { onSessionStart: c } = n;
		c && c(t, ks(l, this.history)),
			(this.removeListeners = ct(
				ft(this.contextWindow, 'pointermove', this.handlePointerMove),
				ft(this.contextWindow, 'pointerup', this.handlePointerUp),
				ft(this.contextWindow, 'pointercancel', this.handlePointerUp)
			));
	}
	updateHandlers(t) {
		this.handlers = t;
	}
	end() {
		this.removeListeners && this.removeListeners(), Ot(this.updatePoint);
	}
}
function Ts(e, t) {
	return t ? { point: t(e.point) } : e;
}
function tf(e, t) {
	return { x: e.x - t.x, y: e.y - t.y };
}
function ks({ point: e }, t) {
	return {
		point: e,
		delta: tf(e, rm(t)),
		offset: tf(e, pw(t)),
		velocity: mw(t, 0.1),
	};
}
function pw(e) {
	return e[0];
}
function rm(e) {
	return e[e.length - 1];
}
function mw(e, t) {
	if (e.length < 2) return { x: 0, y: 0 };
	let n = e.length - 1,
		r = null;
	const i = rm(e);
	for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > at(t))); ) n--;
	if (!r) return { x: 0, y: 0 };
	const o = ut(i.timestamp - r.timestamp);
	if (o === 0) return { x: 0, y: 0 };
	const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
	return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function im(e) {
	let t = null;
	return () => {
		const n = () => {
			t = null;
		};
		return t === null ? ((t = e), n) : !1;
	};
}
const nf = im('dragHorizontal'),
	rf = im('dragVertical');
function om(e) {
	let t = !1;
	if (e === 'y') t = rf();
	else if (e === 'x') t = nf();
	else {
		const n = nf(),
			r = rf();
		n && r
			? (t = () => {
					n(), r();
			  })
			: (n && n(), r && r());
	}
	return t;
}
function sm() {
	const e = om(!0);
	return e ? (e(), !1) : !0;
}
function Ln(e) {
	return (
		e &&
		typeof e == 'object' &&
		Object.prototype.hasOwnProperty.call(e, 'current')
	);
}
const lm = 1e-4,
	gw = 1 - lm,
	yw = 1 + lm,
	am = 0.01,
	vw = 0 - am,
	ww = 0 + am;
function Me(e) {
	return e.max - e.min;
}
function Sw(e, t, n) {
	return Math.abs(e - t) <= n;
}
function of(e, t, n, r = 0.5) {
	(e.origin = r),
		(e.originPoint = H(t.min, t.max, e.origin)),
		(e.scale = Me(n) / Me(t)),
		(e.translate = H(n.min, n.max, e.origin) - e.originPoint),
		((e.scale >= gw && e.scale <= yw) || isNaN(e.scale)) && (e.scale = 1),
		((e.translate >= vw && e.translate <= ww) || isNaN(e.translate)) &&
			(e.translate = 0);
}
function Er(e, t, n, r) {
	of(e.x, t.x, n.x, r ? r.originX : void 0),
		of(e.y, t.y, n.y, r ? r.originY : void 0);
}
function sf(e, t, n) {
	(e.min = n.min + t.min), (e.max = e.min + Me(t));
}
function xw(e, t, n) {
	sf(e.x, t.x, n.x), sf(e.y, t.y, n.y);
}
function lf(e, t, n) {
	(e.min = t.min - n.min), (e.max = e.min + Me(t));
}
function Rr(e, t, n) {
	lf(e.x, t.x, n.x), lf(e.y, t.y, n.y);
}
function Pw(e, { min: t, max: n }, r) {
	return (
		t !== void 0 && e < t
			? (e = r ? H(t, e, r.min) : Math.max(e, t))
			: n !== void 0 && e > n && (e = r ? H(n, e, r.max) : Math.min(e, n)),
		e
	);
}
function af(e, t, n) {
	return {
		min: t !== void 0 ? e.min + t : void 0,
		max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
	};
}
function Cw(e, { top: t, left: n, bottom: r, right: i }) {
	return { x: af(e.x, n, i), y: af(e.y, t, r) };
}
function uf(e, t) {
	let n = t.min - e.min,
		r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Tw(e, t) {
	return { x: uf(e.x, t.x), y: uf(e.y, t.y) };
}
function kw(e, t) {
	let n = 0.5;
	const r = Me(e),
		i = Me(t);
	return (
		i > r
			? (n = Yn(t.min, t.max - r, e.min))
			: r > i && (n = Yn(e.min, e.max - i, t.min)),
		It(0, 1, n)
	);
}
function Ew(e, t) {
	const n = {};
	return (
		t.min !== void 0 && (n.min = t.min - e.min),
		t.max !== void 0 && (n.max = t.max - e.min),
		n
	);
}
const Il = 0.35;
function Rw(e = Il) {
	return (
		e === !1 ? (e = 0) : e === !0 && (e = Il),
		{ x: cf(e, 'left', 'right'), y: cf(e, 'top', 'bottom') }
	);
}
function cf(e, t, n) {
	return { min: ff(e, t), max: ff(e, n) };
}
function ff(e, t) {
	return typeof e == 'number' ? e : e[t] || 0;
}
const df = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
	Mn = () => ({ x: df(), y: df() }),
	hf = () => ({ min: 0, max: 0 }),
	X = () => ({ x: hf(), y: hf() });
function Ne(e) {
	return [e('x'), e('y')];
}
function um({ top: e, left: t, right: n, bottom: r }) {
	return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Aw({ x: e, y: t }) {
	return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Lw(e, t) {
	if (!t) return e;
	const n = t({ x: e.left, y: e.top }),
		r = t({ x: e.right, y: e.bottom });
	return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Es(e) {
	return e === void 0 || e === 1;
}
function Bl({ scale: e, scaleX: t, scaleY: n }) {
	return !Es(e) || !Es(t) || !Es(n);
}
function Zt(e) {
	return (
		Bl(e) ||
		cm(e) ||
		e.z ||
		e.rotate ||
		e.rotateX ||
		e.rotateY ||
		e.skewX ||
		e.skewY
	);
}
function cm(e) {
	return pf(e.x) || pf(e.y);
}
function pf(e) {
	return e && e !== '0%';
}
function vo(e, t, n) {
	const r = e - n,
		i = t * r;
	return n + i;
}
function mf(e, t, n, r, i) {
	return i !== void 0 && (e = vo(e, i, r)), vo(e, n, r) + t;
}
function zl(e, t = 0, n = 1, r, i) {
	(e.min = mf(e.min, t, n, r, i)), (e.max = mf(e.max, t, n, r, i));
}
function fm(e, { x: t, y: n }) {
	zl(e.x, t.translate, t.scale, t.originPoint),
		zl(e.y, n.translate, n.scale, n.originPoint);
}
const gf = 0.999999999999,
	yf = 1.0000000000001;
function Mw(e, t, n, r = !1) {
	const i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let o, s;
	for (let l = 0; l < i; l++) {
		(o = n[l]), (s = o.projectionDelta);
		const { visualElement: a } = o.options;
		(a && a.props.style && a.props.style.display === 'contents') ||
			(r &&
				o.options.layoutScroll &&
				o.scroll &&
				o !== o.root &&
				Dn(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
			s && ((t.x *= s.x.scale), (t.y *= s.y.scale), fm(e, s)),
			r && Zt(o.latestValues) && Dn(e, o.latestValues));
	}
	t.x < yf && t.x > gf && (t.x = 1), t.y < yf && t.y > gf && (t.y = 1);
}
function Vn(e, t) {
	(e.min = e.min + t), (e.max = e.max + t);
}
function vf(e, t, n, r, i = 0.5) {
	const o = H(e.min, e.max, i);
	zl(e, t, n, o, r);
}
function Dn(e, t) {
	vf(e.x, t.x, t.scaleX, t.scale, t.originX),
		vf(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function dm(e, t) {
	return um(Lw(e.getBoundingClientRect(), t));
}
function Vw(e, t, n) {
	const r = dm(e, n),
		{ scroll: i } = t;
	return i && (Vn(r.x, i.offset.x), Vn(r.y, i.offset.y)), r;
}
const hm = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
	Dw = new WeakMap();
class _w {
	constructor(t) {
		(this.openGlobalLock = null),
			(this.isDragging = !1),
			(this.currentDirection = null),
			(this.originPoint = { x: 0, y: 0 }),
			(this.constraints = !1),
			(this.hasMutatedConstraints = !1),
			(this.elastic = X()),
			(this.visualElement = t);
	}
	start(t, { snapToCursor: n = !1 } = {}) {
		const { presenceContext: r } = this.visualElement;
		if (r && r.isPresent === !1) return;
		const i = (c) => {
				const { dragSnapToOrigin: f } = this.getProps();
				f ? this.pauseAnimation() : this.stopAnimation(),
					n && this.snapToCursor(Wo(c, 'page').point);
			},
			o = (c, f) => {
				const { drag: d, dragPropagation: g, onDragStart: y } = this.getProps();
				if (
					d &&
					!g &&
					(this.openGlobalLock && this.openGlobalLock(),
					(this.openGlobalLock = om(d)),
					!this.openGlobalLock)
				)
					return;
				(this.isDragging = !0),
					(this.currentDirection = null),
					this.resolveConstraints(),
					this.visualElement.projection &&
						((this.visualElement.projection.isAnimationBlocked = !0),
						(this.visualElement.projection.target = void 0)),
					Ne((S) => {
						let p = this.getAxisMotionValue(S).get() || 0;
						if (et.test(p)) {
							const { projection: h } = this.visualElement;
							if (h && h.layout) {
								const m = h.layout.layoutBox[S];
								m && (p = Me(m) * (parseFloat(p) / 100));
							}
						}
						this.originPoint[S] = p;
					}),
					y && I.postRender(() => y(c, f)),
					Fl(this.visualElement, 'transform');
				const { animationState: v } = this.visualElement;
				v && v.setActive('whileDrag', !0);
			},
			s = (c, f) => {
				const {
					dragPropagation: d,
					dragDirectionLock: g,
					onDirectionLock: y,
					onDrag: v,
				} = this.getProps();
				if (!d && !this.openGlobalLock) return;
				const { offset: S } = f;
				if (g && this.currentDirection === null) {
					(this.currentDirection = Nw(S)),
						this.currentDirection !== null && y && y(this.currentDirection);
					return;
				}
				this.updateAxis('x', f.point, S),
					this.updateAxis('y', f.point, S),
					this.visualElement.render(),
					v && v(c, f);
			},
			l = (c, f) => this.stop(c, f),
			a = () =>
				Ne((c) => {
					var f;
					return (
						this.getAnimationState(c) === 'paused' &&
						((f = this.getAxisMotionValue(c).animation) === null || f === void 0
							? void 0
							: f.play())
					);
				}),
			{ dragSnapToOrigin: u } = this.getProps();
		this.panSession = new nm(
			t,
			{
				onSessionStart: i,
				onStart: o,
				onMove: s,
				onSessionEnd: l,
				resumeAnimation: a,
			},
			{
				transformPagePoint: this.visualElement.getTransformPagePoint(),
				dragSnapToOrigin: u,
				contextWindow: hm(this.visualElement),
			}
		);
	}
	stop(t, n) {
		const r = this.isDragging;
		if ((this.cancel(), !r)) return;
		const { velocity: i } = n;
		this.startAnimation(i);
		const { onDragEnd: o } = this.getProps();
		o && I.postRender(() => o(t, n));
	}
	cancel() {
		this.isDragging = !1;
		const { projection: t, animationState: n } = this.visualElement;
		t && (t.isAnimationBlocked = !1),
			this.panSession && this.panSession.end(),
			(this.panSession = void 0);
		const { dragPropagation: r } = this.getProps();
		!r &&
			this.openGlobalLock &&
			(this.openGlobalLock(), (this.openGlobalLock = null)),
			n && n.setActive('whileDrag', !1);
	}
	updateAxis(t, n, r) {
		const { drag: i } = this.getProps();
		if (!r || !ki(t, i, this.currentDirection)) return;
		const o = this.getAxisMotionValue(t);
		let s = this.originPoint[t] + r[t];
		this.constraints &&
			this.constraints[t] &&
			(s = Pw(s, this.constraints[t], this.elastic[t])),
			o.set(s);
	}
	resolveConstraints() {
		var t;
		const { dragConstraints: n, dragElastic: r } = this.getProps(),
			i =
				this.visualElement.projection && !this.visualElement.projection.layout
					? this.visualElement.projection.measure(!1)
					: (t = this.visualElement.projection) === null || t === void 0
					? void 0
					: t.layout,
			o = this.constraints;
		n && Ln(n)
			? this.constraints || (this.constraints = this.resolveRefConstraints())
			: n && i
			? (this.constraints = Cw(i.layoutBox, n))
			: (this.constraints = !1),
			(this.elastic = Rw(r)),
			o !== this.constraints &&
				i &&
				this.constraints &&
				!this.hasMutatedConstraints &&
				Ne((s) => {
					this.constraints !== !1 &&
						this.getAxisMotionValue(s) &&
						(this.constraints[s] = Ew(i.layoutBox[s], this.constraints[s]));
				});
	}
	resolveRefConstraints() {
		const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
		if (!t || !Ln(t)) return !1;
		const r = t.current,
			{ projection: i } = this.visualElement;
		if (!i || !i.layout) return !1;
		const o = Vw(r, i.root, this.visualElement.getTransformPagePoint());
		let s = Tw(i.layout.layoutBox, o);
		if (n) {
			const l = n(Aw(s));
			(this.hasMutatedConstraints = !!l), l && (s = um(l));
		}
		return s;
	}
	startAnimation(t) {
		const {
				drag: n,
				dragMomentum: r,
				dragElastic: i,
				dragTransition: o,
				dragSnapToOrigin: s,
				onDragTransitionEnd: l,
			} = this.getProps(),
			a = this.constraints || {},
			u = Ne((c) => {
				if (!ki(c, n, this.currentDirection)) return;
				let f = (a && a[c]) || {};
				s && (f = { min: 0, max: 0 });
				const d = i ? 200 : 1e6,
					g = i ? 40 : 1e7,
					y = {
						type: 'inertia',
						velocity: r ? t[c] : 0,
						bounceStiffness: d,
						bounceDamping: g,
						timeConstant: 750,
						restDelta: 1,
						restSpeed: 10,
						...o,
						...f,
					};
				return this.startAxisValueAnimation(c, y);
			});
		return Promise.all(u).then(l);
	}
	startAxisValueAnimation(t, n) {
		const r = this.getAxisMotionValue(t);
		return (
			Fl(this.visualElement, t), r.start(nu(t, r, 0, n, this.visualElement, !1))
		);
	}
	stopAnimation() {
		Ne((t) => this.getAxisMotionValue(t).stop());
	}
	pauseAnimation() {
		Ne((t) => {
			var n;
			return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
				? void 0
				: n.pause();
		});
	}
	getAnimationState(t) {
		var n;
		return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
			? void 0
			: n.state;
	}
	getAxisMotionValue(t) {
		const n = `_drag${t.toUpperCase()}`,
			r = this.visualElement.getProps(),
			i = r[n];
		return (
			i ||
			this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
		);
	}
	snapToCursor(t) {
		Ne((n) => {
			const { drag: r } = this.getProps();
			if (!ki(n, r, this.currentDirection)) return;
			const { projection: i } = this.visualElement,
				o = this.getAxisMotionValue(n);
			if (i && i.layout) {
				const { min: s, max: l } = i.layout.layoutBox[n];
				o.set(t[n] - H(s, l, 0.5));
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag: t, dragConstraints: n } = this.getProps(),
			{ projection: r } = this.visualElement;
		if (!Ln(n) || !r || !this.constraints) return;
		this.stopAnimation();
		const i = { x: 0, y: 0 };
		Ne((s) => {
			const l = this.getAxisMotionValue(s);
			if (l && this.constraints !== !1) {
				const a = l.get();
				i[s] = kw({ min: a, max: a }, this.constraints[s]);
			}
		});
		const { transformTemplate: o } = this.visualElement.getProps();
		(this.visualElement.current.style.transform = o ? o({}, '') : 'none'),
			r.root && r.root.updateScroll(),
			r.updateLayout(),
			this.resolveConstraints(),
			Ne((s) => {
				if (!ki(s, t, null)) return;
				const l = this.getAxisMotionValue(s),
					{ min: a, max: u } = this.constraints[s];
				l.set(H(a, u, i[s]));
			});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		Dw.set(this.visualElement, this);
		const t = this.visualElement.current,
			n = ft(t, 'pointerdown', (a) => {
				const { drag: u, dragListener: c = !0 } = this.getProps();
				u && c && this.start(a);
			}),
			r = () => {
				const { dragConstraints: a } = this.getProps();
				Ln(a) && a.current && (this.constraints = this.resolveRefConstraints());
			},
			{ projection: i } = this.visualElement,
			o = i.addEventListener('measure', r);
		i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
			I.read(r);
		const s = st(window, 'resize', () => this.scalePositionWithinConstraints()),
			l = i.addEventListener(
				'didUpdate',
				({ delta: a, hasLayoutChanged: u }) => {
					this.isDragging &&
						u &&
						(Ne((c) => {
							const f = this.getAxisMotionValue(c);
							f &&
								((this.originPoint[c] += a[c].translate),
								f.set(f.get() + a[c].translate));
						}),
						this.visualElement.render());
				}
			);
		return () => {
			s(), n(), o(), l && l();
		};
	}
	getProps() {
		const t = this.visualElement.getProps(),
			{
				drag: n = !1,
				dragDirectionLock: r = !1,
				dragPropagation: i = !1,
				dragConstraints: o = !1,
				dragElastic: s = Il,
				dragMomentum: l = !0,
			} = t;
		return {
			...t,
			drag: n,
			dragDirectionLock: r,
			dragPropagation: i,
			dragConstraints: o,
			dragElastic: s,
			dragMomentum: l,
		};
	}
}
function ki(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function Nw(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? (n = 'y') : Math.abs(e.x) > t && (n = 'x'), n;
}
class jw extends Wt {
	constructor(t) {
		super(t),
			(this.removeGroupControls = pe),
			(this.removeListeners = pe),
			(this.controls = new _w(t));
	}
	mount() {
		const { dragControls: t } = this.node.getProps();
		t && (this.removeGroupControls = t.subscribe(this.controls)),
			(this.removeListeners = this.controls.addListeners() || pe);
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}
const wf = (e) => (t, n) => {
	e && I.postRender(() => e(t, n));
};
class Fw extends Wt {
	constructor() {
		super(...arguments), (this.removePointerDownListener = pe);
	}
	onPointerDown(t) {
		this.session = new nm(t, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: hm(this.node),
		});
	}
	createPanHandlers() {
		const {
			onPanSessionStart: t,
			onPanStart: n,
			onPan: r,
			onPanEnd: i,
		} = this.node.getProps();
		return {
			onSessionStart: wf(t),
			onStart: wf(n),
			onMove: r,
			onEnd: (o, s) => {
				delete this.session, i && I.postRender(() => i(o, s));
			},
		};
	}
	mount() {
		this.removePointerDownListener = ft(this.node.current, 'pointerdown', (t) =>
			this.onPointerDown(t)
		);
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}
const lu = C.createContext(null);
function Ow() {
	const e = C.useContext(lu);
	if (e === null) return [!0, null];
	const { isPresent: t, onExitComplete: n, register: r } = e,
		i = C.useId();
	C.useEffect(() => r(i), []);
	const o = C.useCallback(() => n && n(i), [i, n]);
	return !t && n ? [!1, o] : [!0];
}
const pm = C.createContext({}),
	mm = C.createContext({}),
	Bi = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Sf(e, t) {
	return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ur = {
		correct: (e, t) => {
			if (!t.target) return e;
			if (typeof e == 'string')
				if (M.test(e)) e = parseFloat(e);
				else return e;
			const n = Sf(e, t.target.x),
				r = Sf(e, t.target.y);
			return `${n}% ${r}%`;
		},
	},
	Iw = {
		correct: (e, { treeScale: t, projectionDelta: n }) => {
			const r = e,
				i = Bt.parse(e);
			if (i.length > 5) return r;
			const o = Bt.createTransformer(e),
				s = typeof i[0] != 'number' ? 1 : 0,
				l = n.x.scale * t.x,
				a = n.y.scale * t.y;
			(i[0 + s] /= l), (i[1 + s] /= a);
			const u = H(l, a, 0.5);
			return (
				typeof i[2 + s] == 'number' && (i[2 + s] /= u),
				typeof i[3 + s] == 'number' && (i[3 + s] /= u),
				o(i)
			);
		},
	},
	wo = {};
function Bw(e) {
	Object.assign(wo, e);
}
const { schedule: au, cancel: Dx } = gp(queueMicrotask, !1);
class zw extends C.Component {
	componentDidMount() {
		const {
				visualElement: t,
				layoutGroup: n,
				switchLayoutGroup: r,
				layoutId: i,
			} = this.props,
			{ projection: o } = t;
		Bw(Uw),
			o &&
				(n.group && n.group.add(o),
				r && r.register && i && r.register(o),
				o.root.didUpdate(),
				o.addEventListener('animationComplete', () => {
					this.safeToRemove();
				}),
				o.setOptions({
					...o.options,
					onExitComplete: () => this.safeToRemove(),
				})),
			(Bi.hasEverUpdated = !0);
	}
	getSnapshotBeforeUpdate(t) {
		const {
				layoutDependency: n,
				visualElement: r,
				drag: i,
				isPresent: o,
			} = this.props,
			s = r.projection;
		return (
			s &&
				((s.isPresent = o),
				i || t.layoutDependency !== n || n === void 0
					? s.willUpdate()
					: this.safeToRemove(),
				t.isPresent !== o &&
					(o
						? s.promote()
						: s.relegate() ||
						  I.postRender(() => {
								const l = s.getStack();
								(!l || !l.members.length) && this.safeToRemove();
						  }))),
			null
		);
	}
	componentDidUpdate() {
		const { projection: t } = this.props.visualElement;
		t &&
			(t.root.didUpdate(),
			au.postRender(() => {
				!t.currentAnimation && t.isLead() && this.safeToRemove();
			}));
	}
	componentWillUnmount() {
		const {
				visualElement: t,
				layoutGroup: n,
				switchLayoutGroup: r,
			} = this.props,
			{ projection: i } = t;
		i &&
			(i.scheduleCheckAfterUnmount(),
			n && n.group && n.group.remove(i),
			r && r.deregister && r.deregister(i));
	}
	safeToRemove() {
		const { safeToRemove: t } = this.props;
		t && t();
	}
	render() {
		return null;
	}
}
function gm(e) {
	const [t, n] = Ow(),
		r = C.useContext(pm);
	return k.jsx(zw, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: C.useContext(mm),
		isPresent: t,
		safeToRemove: n,
	});
}
const Uw = {
		borderRadius: {
			...ur,
			applyTo: [
				'borderTopLeftRadius',
				'borderTopRightRadius',
				'borderBottomLeftRadius',
				'borderBottomRightRadius',
			],
		},
		borderTopLeftRadius: ur,
		borderTopRightRadius: ur,
		borderBottomLeftRadius: ur,
		borderBottomRightRadius: ur,
		boxShadow: Iw,
	},
	ym = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
	$w = ym.length,
	xf = (e) => (typeof e == 'string' ? parseFloat(e) : e),
	Pf = (e) => typeof e == 'number' || M.test(e);
function Ww(e, t, n, r, i, o) {
	i
		? ((e.opacity = H(0, n.opacity !== void 0 ? n.opacity : 1, Hw(r))),
		  (e.opacityExit = H(t.opacity !== void 0 ? t.opacity : 1, 0, Kw(r))))
		: o &&
		  (e.opacity = H(
				t.opacity !== void 0 ? t.opacity : 1,
				n.opacity !== void 0 ? n.opacity : 1,
				r
		  ));
	for (let s = 0; s < $w; s++) {
		const l = `border${ym[s]}Radius`;
		let a = Cf(t, l),
			u = Cf(n, l);
		if (a === void 0 && u === void 0) continue;
		a || (a = 0),
			u || (u = 0),
			a === 0 || u === 0 || Pf(a) === Pf(u)
				? ((e[l] = Math.max(H(xf(a), xf(u), r), 0)),
				  (et.test(u) || et.test(a)) && (e[l] += '%'))
				: (e[l] = u);
	}
	(t.rotate || n.rotate) && (e.rotate = H(t.rotate || 0, n.rotate || 0, r));
}
function Cf(e, t) {
	return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Hw = vm(0, 0.5, Cp),
	Kw = vm(0.5, 0.95, pe);
function vm(e, t, n) {
	return (r) => (r < e ? 0 : r > t ? 1 : n(Yn(e, t, r)));
}
function Tf(e, t) {
	(e.min = t.min), (e.max = t.max);
}
function _e(e, t) {
	Tf(e.x, t.x), Tf(e.y, t.y);
}
function kf(e, t) {
	(e.translate = t.translate),
		(e.scale = t.scale),
		(e.originPoint = t.originPoint),
		(e.origin = t.origin);
}
function Ef(e, t, n, r, i) {
	return (
		(e -= t), (e = vo(e, 1 / n, r)), i !== void 0 && (e = vo(e, 1 / i, r)), e
	);
}
function Gw(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
	if (
		(et.test(t) &&
			((t = parseFloat(t)), (t = H(s.min, s.max, t / 100) - s.min)),
		typeof t != 'number')
	)
		return;
	let l = H(o.min, o.max, r);
	e === o && (l -= t),
		(e.min = Ef(e.min, t, n, l, i)),
		(e.max = Ef(e.max, t, n, l, i));
}
function Rf(e, t, [n, r, i], o, s) {
	Gw(e, t[n], t[r], t[i], t.scale, o, s);
}
const Qw = ['x', 'scaleX', 'originX'],
	Yw = ['y', 'scaleY', 'originY'];
function Af(e, t, n, r) {
	Rf(e.x, t, Qw, n ? n.x : void 0, r ? r.x : void 0),
		Rf(e.y, t, Yw, n ? n.y : void 0, r ? r.y : void 0);
}
function Lf(e) {
	return e.translate === 0 && e.scale === 1;
}
function wm(e) {
	return Lf(e.x) && Lf(e.y);
}
function Mf(e, t) {
	return e.min === t.min && e.max === t.max;
}
function Xw(e, t) {
	return Mf(e.x, t.x) && Mf(e.y, t.y);
}
function Vf(e, t) {
	return (
		Math.round(e.min) === Math.round(t.min) &&
		Math.round(e.max) === Math.round(t.max)
	);
}
function Sm(e, t) {
	return Vf(e.x, t.x) && Vf(e.y, t.y);
}
function Df(e) {
	return Me(e.x) / Me(e.y);
}
function _f(e, t) {
	return (
		e.translate === t.translate &&
		e.scale === t.scale &&
		e.originPoint === t.originPoint
	);
}
class Zw {
	constructor() {
		this.members = [];
	}
	add(t) {
		ru(this.members, t), t.scheduleRender();
	}
	remove(t) {
		if (
			(iu(this.members, t),
			t === this.prevLead && (this.prevLead = void 0),
			t === this.lead)
		) {
			const n = this.members[this.members.length - 1];
			n && this.promote(n);
		}
	}
	relegate(t) {
		const n = this.members.findIndex((i) => t === i);
		if (n === 0) return !1;
		let r;
		for (let i = n; i >= 0; i--) {
			const o = this.members[i];
			if (o.isPresent !== !1) {
				r = o;
				break;
			}
		}
		return r ? (this.promote(r), !0) : !1;
	}
	promote(t, n) {
		const r = this.lead;
		if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
			r.instance && r.scheduleRender(),
				t.scheduleRender(),
				(t.resumeFrom = r),
				n && (t.resumeFrom.preserveOpacity = !0),
				r.snapshot &&
					((t.snapshot = r.snapshot),
					(t.snapshot.latestValues = r.animationValues || r.latestValues)),
				t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
			const { crossfade: i } = t.options;
			i === !1 && r.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((t) => {
			const { options: n, resumingFrom: r } = t;
			n.onExitComplete && n.onExitComplete(),
				r && r.options.onExitComplete && r.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach((t) => {
			t.instance && t.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
}
function qw(e, t, n) {
	let r = '';
	const i = e.x.translate / t.x,
		o = e.y.translate / t.y,
		s = (n == null ? void 0 : n.z) || 0;
	if (
		((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
		(t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
		n)
	) {
		const {
			transformPerspective: u,
			rotate: c,
			rotateX: f,
			rotateY: d,
			skewX: g,
			skewY: y,
		} = n;
		u && (r = `perspective(${u}px) ${r}`),
			c && (r += `rotate(${c}deg) `),
			f && (r += `rotateX(${f}deg) `),
			d && (r += `rotateY(${d}deg) `),
			g && (r += `skewX(${g}deg) `),
			y && (r += `skewY(${y}deg) `);
	}
	const l = e.x.scale * t.x,
		a = e.y.scale * t.y;
	return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`), r || 'none';
}
const Jw = (e, t) => e.depth - t.depth;
class bw {
	constructor() {
		(this.children = []), (this.isDirty = !1);
	}
	add(t) {
		ru(this.children, t), (this.isDirty = !0);
	}
	remove(t) {
		iu(this.children, t), (this.isDirty = !0);
	}
	forEach(t) {
		this.isDirty && this.children.sort(Jw),
			(this.isDirty = !1),
			this.children.forEach(t);
	}
}
function zi(e) {
	const t = he(e) ? e.get() : e;
	return H1(t) ? t.toValue() : t;
}
function eS(e, t) {
	const n = tt.now(),
		r = ({ timestamp: i }) => {
			const o = i - n;
			o >= t && (Ot(r), e(o - t));
		};
	return I.read(r, !0), () => Ot(r);
}
function tS(e) {
	return e instanceof SVGElement && e.tagName !== 'svg';
}
function nS(e, t, n) {
	const r = he(e) ? e : Yr(e);
	return r.start(nu('', r, t, n)), r.animation;
}
const qt = {
		type: 'projectionFrame',
		totalNodes: 0,
		resolvedTargetDeltas: 0,
		recalculatedProjection: 0,
	},
	mr = typeof window < 'u' && window.MotionDebug !== void 0,
	Rs = ['', 'X', 'Y', 'Z'],
	rS = { visibility: 'hidden' },
	Nf = 1e3;
let iS = 0;
function As(e, t, n, r) {
	const { latestValues: i } = t;
	i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function xm(e) {
	if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
	const { visualElement: t } = e.options;
	if (!t) return;
	const n = Jp(t);
	if (window.MotionHasOptimisedAnimation(n, 'transform')) {
		const { layout: i, layoutId: o } = e.options;
		window.MotionCancelOptimisedAnimation(n, 'transform', I, !(i || o));
	}
	const { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && xm(r);
}
function Pm({
	attachResizeListener: e,
	defaultParent: t,
	measureScroll: n,
	checkIsScrollRoot: r,
	resetTransform: i,
}) {
	return class {
		constructor(s = {}, l = t == null ? void 0 : t()) {
			(this.id = iS++),
				(this.animationId = 0),
				(this.children = new Set()),
				(this.options = {}),
				(this.isTreeAnimating = !1),
				(this.isAnimationBlocked = !1),
				(this.isLayoutDirty = !1),
				(this.isProjectionDirty = !1),
				(this.isSharedProjectionDirty = !1),
				(this.isTransformDirty = !1),
				(this.updateManuallyBlocked = !1),
				(this.updateBlockedByResize = !1),
				(this.isUpdating = !1),
				(this.isSVG = !1),
				(this.needsReset = !1),
				(this.shouldResetTransform = !1),
				(this.hasCheckedOptimisedAppear = !1),
				(this.treeScale = { x: 1, y: 1 }),
				(this.eventHandlers = new Map()),
				(this.hasTreeAnimated = !1),
				(this.updateScheduled = !1),
				(this.scheduleUpdate = () => this.update()),
				(this.projectionUpdateScheduled = !1),
				(this.checkUpdateFailed = () => {
					this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
				}),
				(this.updateProjection = () => {
					(this.projectionUpdateScheduled = !1),
						mr &&
							(qt.totalNodes =
								qt.resolvedTargetDeltas =
								qt.recalculatedProjection =
									0),
						this.nodes.forEach(lS),
						this.nodes.forEach(dS),
						this.nodes.forEach(hS),
						this.nodes.forEach(aS),
						mr && window.MotionDebug.record(qt);
				}),
				(this.resolvedRelativeTargetAt = 0),
				(this.hasProjected = !1),
				(this.isVisible = !0),
				(this.animationProgress = 0),
				(this.sharedNodes = new Map()),
				(this.latestValues = s),
				(this.root = l ? l.root || l : this),
				(this.path = l ? [...l.path, l] : []),
				(this.parent = l),
				(this.depth = l ? l.depth + 1 : 0);
			for (let a = 0; a < this.path.length; a++)
				this.path[a].shouldResetTransform = !0;
			this.root === this && (this.nodes = new bw());
		}
		addEventListener(s, l) {
			return (
				this.eventHandlers.has(s) || this.eventHandlers.set(s, new ou()),
				this.eventHandlers.get(s).add(l)
			);
		}
		notifyListeners(s, ...l) {
			const a = this.eventHandlers.get(s);
			a && a.notify(...l);
		}
		hasListeners(s) {
			return this.eventHandlers.has(s);
		}
		mount(s, l = this.root.hasTreeAnimated) {
			if (this.instance) return;
			(this.isSVG = tS(s)), (this.instance = s);
			const { layoutId: a, layout: u, visualElement: c } = this.options;
			if (
				(c && !c.current && c.mount(s),
				this.root.nodes.add(this),
				this.parent && this.parent.children.add(this),
				l && (u || a) && (this.isLayoutDirty = !0),
				e)
			) {
				let f;
				const d = () => (this.root.updateBlockedByResize = !1);
				e(s, () => {
					(this.root.updateBlockedByResize = !0),
						f && f(),
						(f = eS(d, 250)),
						Bi.hasAnimatedSinceResize &&
							((Bi.hasAnimatedSinceResize = !1), this.nodes.forEach(Ff));
				});
			}
			a && this.root.registerSharedNode(a, this),
				this.options.animate !== !1 &&
					c &&
					(a || u) &&
					this.addEventListener(
						'didUpdate',
						({
							delta: f,
							hasLayoutChanged: d,
							hasRelativeTargetChanged: g,
							layout: y,
						}) => {
							if (this.isTreeAnimationBlocked()) {
								(this.target = void 0), (this.relativeTarget = void 0);
								return;
							}
							const v =
									this.options.transition || c.getDefaultTransition() || vS,
								{ onLayoutAnimationStart: S, onLayoutAnimationComplete: p } =
									c.getProps(),
								h = !this.targetLayout || !Sm(this.targetLayout, y) || g,
								m = !d && g;
							if (
								this.options.layoutRoot ||
								(this.resumeFrom && this.resumeFrom.instance) ||
								m ||
								(d && (h || !this.currentAnimation))
							) {
								this.resumeFrom &&
									((this.resumingFrom = this.resumeFrom),
									(this.resumingFrom.resumingFrom = void 0)),
									this.setAnimationOrigin(f, m);
								const w = { ...$a(v, 'layout'), onPlay: S, onComplete: p };
								(c.shouldReduceMotion || this.options.layoutRoot) &&
									((w.delay = 0), (w.type = !1)),
									this.startAnimation(w);
							} else
								d || Ff(this),
									this.isLead() &&
										this.options.onExitComplete &&
										this.options.onExitComplete();
							this.targetLayout = y;
						}
					);
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			const s = this.getStack();
			s && s.remove(this),
				this.parent && this.parent.children.delete(this),
				(this.instance = void 0),
				Ot(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return (
				this.isAnimationBlocked ||
				(this.parent && this.parent.isTreeAnimationBlocked()) ||
				!1
			);
		}
		startUpdate() {
			this.isUpdateBlocked() ||
				((this.isUpdating = !0),
				this.nodes && this.nodes.forEach(pS),
				this.animationId++);
		}
		getTransformTemplate() {
			const { visualElement: s } = this.options;
			return s && s.getProps().transformTemplate;
		}
		willUpdate(s = !0) {
			if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (
				(window.MotionCancelOptimisedAnimation &&
					!this.hasCheckedOptimisedAppear &&
					xm(this),
				!this.root.isUpdating && this.root.startUpdate(),
				this.isLayoutDirty)
			)
				return;
			this.isLayoutDirty = !0;
			for (let c = 0; c < this.path.length; c++) {
				const f = this.path[c];
				(f.shouldResetTransform = !0),
					f.updateScroll('snapshot'),
					f.options.layoutRoot && f.willUpdate(!1);
			}
			const { layoutId: l, layout: a } = this.options;
			if (l === void 0 && !a) return;
			const u = this.getTransformTemplate();
			(this.prevTransformTemplateValue = u ? u(this.latestValues, '') : void 0),
				this.updateSnapshot(),
				s && this.notifyListeners('willUpdate');
		}
		update() {
			if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(jf);
				return;
			}
			this.isUpdating || this.nodes.forEach(cS),
				(this.isUpdating = !1),
				this.nodes.forEach(fS),
				this.nodes.forEach(oS),
				this.nodes.forEach(sS),
				this.clearAllSnapshots();
			const l = tt.now();
			(se.delta = It(0, 1e3 / 60, l - se.timestamp)),
				(se.timestamp = l),
				(se.isProcessing = !0),
				ws.update.process(se),
				ws.preRender.process(se),
				ws.render.process(se),
				(se.isProcessing = !1);
		}
		didUpdate() {
			this.updateScheduled ||
				((this.updateScheduled = !0), au.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(uS), this.sharedNodes.forEach(mS);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled ||
				((this.projectionUpdateScheduled = !0),
				I.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			I.postRender(() => {
				this.isLayoutDirty
					? this.root.didUpdate()
					: this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure());
		}
		updateLayout() {
			if (
				!this.instance ||
				(this.updateScroll(),
				!(this.options.alwaysMeasureLayout && this.isLead()) &&
					!this.isLayoutDirty)
			)
				return;
			if (this.resumeFrom && !this.resumeFrom.instance)
				for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
			const s = this.layout;
			(this.layout = this.measure(!1)),
				(this.layoutCorrected = X()),
				(this.isLayoutDirty = !1),
				(this.projectionDelta = void 0),
				this.notifyListeners('measure', this.layout.layoutBox);
			const { visualElement: l } = this.options;
			l &&
				l.notify(
					'LayoutMeasure',
					this.layout.layoutBox,
					s ? s.layoutBox : void 0
				);
		}
		updateScroll(s = 'measure') {
			let l = !!(this.options.layoutScroll && this.instance);
			if (
				(this.scroll &&
					this.scroll.animationId === this.root.animationId &&
					this.scroll.phase === s &&
					(l = !1),
				l)
			) {
				const a = r(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: s,
					isRoot: a,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : a,
				};
			}
		}
		resetTransform() {
			if (!i) return;
			const s =
					this.isLayoutDirty ||
					this.shouldResetTransform ||
					this.options.alwaysMeasureLayout,
				l = this.projectionDelta && !wm(this.projectionDelta),
				a = this.getTransformTemplate(),
				u = a ? a(this.latestValues, '') : void 0,
				c = u !== this.prevTransformTemplateValue;
			s &&
				(l || Zt(this.latestValues) || c) &&
				(i(this.instance, u),
				(this.shouldResetTransform = !1),
				this.scheduleRender());
		}
		measure(s = !0) {
			const l = this.measurePageBox();
			let a = this.removeElementScroll(l);
			return (
				s && (a = this.removeTransform(a)),
				wS(a),
				{
					animationId: this.root.animationId,
					measuredBox: l,
					layoutBox: a,
					latestValues: {},
					source: this.id,
				}
			);
		}
		measurePageBox() {
			var s;
			const { visualElement: l } = this.options;
			if (!l) return X();
			const a = l.measureViewportBox();
			if (
				!(
					((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
					this.path.some(SS)
				)
			) {
				const { scroll: c } = this.root;
				c && (Vn(a.x, c.offset.x), Vn(a.y, c.offset.y));
			}
			return a;
		}
		removeElementScroll(s) {
			var l;
			const a = X();
			if (
				(_e(a, s), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
			)
				return a;
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u],
					{ scroll: f, options: d } = c;
				c !== this.root &&
					f &&
					d.layoutScroll &&
					(f.wasRoot && _e(a, s), Vn(a.x, f.offset.x), Vn(a.y, f.offset.y));
			}
			return a;
		}
		applyTransform(s, l = !1) {
			const a = X();
			_e(a, s);
			for (let u = 0; u < this.path.length; u++) {
				const c = this.path[u];
				!l &&
					c.options.layoutScroll &&
					c.scroll &&
					c !== c.root &&
					Dn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
					Zt(c.latestValues) && Dn(a, c.latestValues);
			}
			return Zt(this.latestValues) && Dn(a, this.latestValues), a;
		}
		removeTransform(s) {
			const l = X();
			_e(l, s);
			for (let a = 0; a < this.path.length; a++) {
				const u = this.path[a];
				if (!u.instance || !Zt(u.latestValues)) continue;
				Bl(u.latestValues) && u.updateSnapshot();
				const c = X(),
					f = u.measurePageBox();
				_e(c, f),
					Af(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
			}
			return Zt(this.latestValues) && Af(l, this.latestValues), l;
		}
		setTargetDelta(s) {
			(this.targetDelta = s),
				this.root.scheduleUpdateProjection(),
				(this.isProjectionDirty = !0);
		}
		setOptions(s) {
			this.options = {
				...this.options,
				...s,
				crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
			};
		}
		clearMeasurements() {
			(this.scroll = void 0),
				(this.layout = void 0),
				(this.snapshot = void 0),
				(this.prevTransformTemplateValue = void 0),
				(this.targetDelta = void 0),
				(this.target = void 0),
				(this.isLayoutDirty = !1);
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent &&
				this.relativeParent.resolvedRelativeTargetAt !== se.timestamp &&
				this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(s = !1) {
			var l;
			const a = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
				this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
				this.isSharedProjectionDirty ||
					(this.isSharedProjectionDirty = a.isSharedProjectionDirty);
			const u = !!this.resumingFrom || this !== a;
			if (
				!(
					s ||
					(u && this.isSharedProjectionDirty) ||
					this.isProjectionDirty ||
					(!((l = this.parent) === null || l === void 0) &&
						l.isProjectionDirty) ||
					this.attemptToResolveRelativeTarget ||
					this.root.updateBlockedByResize
				)
			)
				return;
			const { layout: f, layoutId: d } = this.options;
			if (!(!this.layout || !(f || d))) {
				if (
					((this.resolvedRelativeTargetAt = se.timestamp),
					!this.targetDelta && !this.relativeTarget)
				) {
					const g = this.getClosestProjectingParent();
					g && g.layout && this.animationProgress !== 1
						? ((this.relativeParent = g),
						  this.forceRelativeParentToResolveTarget(),
						  (this.relativeTarget = X()),
						  (this.relativeTargetOrigin = X()),
						  Rr(
								this.relativeTargetOrigin,
								this.layout.layoutBox,
								g.layout.layoutBox
						  ),
						  _e(this.relativeTarget, this.relativeTargetOrigin))
						: (this.relativeParent = this.relativeTarget = void 0);
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (
						(this.target ||
							((this.target = X()), (this.targetWithTransforms = X())),
						this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.relativeParent &&
						this.relativeParent.target
							? (this.forceRelativeParentToResolveTarget(),
							  xw(
									this.target,
									this.relativeTarget,
									this.relativeParent.target
							  ))
							: this.targetDelta
							? (this.resumingFrom
									? (this.target = this.applyTransform(this.layout.layoutBox))
									: _e(this.target, this.layout.layoutBox),
							  fm(this.target, this.targetDelta))
							: _e(this.target, this.layout.layoutBox),
						this.attemptToResolveRelativeTarget)
					) {
						this.attemptToResolveRelativeTarget = !1;
						const g = this.getClosestProjectingParent();
						g &&
						!!g.resumingFrom == !!this.resumingFrom &&
						!g.options.layoutScroll &&
						g.target &&
						this.animationProgress !== 1
							? ((this.relativeParent = g),
							  this.forceRelativeParentToResolveTarget(),
							  (this.relativeTarget = X()),
							  (this.relativeTargetOrigin = X()),
							  Rr(this.relativeTargetOrigin, this.target, g.target),
							  _e(this.relativeTarget, this.relativeTargetOrigin))
							: (this.relativeParent = this.relativeTarget = void 0);
					}
					mr && qt.resolvedTargetDeltas++;
				}
			}
		}
		getClosestProjectingParent() {
			if (
				!(
					!this.parent ||
					Bl(this.parent.latestValues) ||
					cm(this.parent.latestValues)
				)
			)
				return this.parent.isProjecting()
					? this.parent
					: this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!(
				(this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
				this.layout
			);
		}
		calcProjection() {
			var s;
			const l = this.getLead(),
				a = !!this.resumingFrom || this !== l;
			let u = !0;
			if (
				((this.isProjectionDirty ||
					(!((s = this.parent) === null || s === void 0) &&
						s.isProjectionDirty)) &&
					(u = !1),
				a &&
					(this.isSharedProjectionDirty || this.isTransformDirty) &&
					(u = !1),
				this.resolvedRelativeTargetAt === se.timestamp && (u = !1),
				u)
			)
				return;
			const { layout: c, layoutId: f } = this.options;
			if (
				((this.isTreeAnimating = !!(
					(this.parent && this.parent.isTreeAnimating) ||
					this.currentAnimation ||
					this.pendingAnimation
				)),
				this.isTreeAnimating ||
					(this.targetDelta = this.relativeTarget = void 0),
				!this.layout || !(c || f))
			)
				return;
			_e(this.layoutCorrected, this.layout.layoutBox);
			const d = this.treeScale.x,
				g = this.treeScale.y;
			Mw(this.layoutCorrected, this.treeScale, this.path, a),
				l.layout &&
					!l.target &&
					(this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
					((l.target = l.layout.layoutBox), (l.targetWithTransforms = X()));
			const { target: y } = l;
			if (!y) {
				this.prevProjectionDelta &&
					(this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta
				? this.createProjectionDeltas()
				: (kf(this.prevProjectionDelta.x, this.projectionDelta.x),
				  kf(this.prevProjectionDelta.y, this.projectionDelta.y)),
				Er(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
				(this.treeScale.x !== d ||
					this.treeScale.y !== g ||
					!_f(this.projectionDelta.x, this.prevProjectionDelta.x) ||
					!_f(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
					((this.hasProjected = !0),
					this.scheduleRender(),
					this.notifyListeners('projectionUpdate', y)),
				mr && qt.recalculatedProjection++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(s = !0) {
			var l;
			if (
				((l = this.options.visualElement) === null ||
					l === void 0 ||
					l.scheduleRender(),
				s)
			) {
				const a = this.getStack();
				a && a.scheduleRender();
			}
			this.resumingFrom &&
				!this.resumingFrom.instance &&
				(this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			(this.prevProjectionDelta = Mn()),
				(this.projectionDelta = Mn()),
				(this.projectionDeltaWithTransform = Mn());
		}
		setAnimationOrigin(s, l = !1) {
			const a = this.snapshot,
				u = a ? a.latestValues : {},
				c = { ...this.latestValues },
				f = Mn();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
				(this.relativeTarget = this.relativeTargetOrigin = void 0),
				(this.attemptToResolveRelativeTarget = !l);
			const d = X(),
				g = a ? a.source : void 0,
				y = this.layout ? this.layout.source : void 0,
				v = g !== y,
				S = this.getStack(),
				p = !S || S.members.length <= 1,
				h = !!(v && !p && this.options.crossfade === !0 && !this.path.some(yS));
			this.animationProgress = 0;
			let m;
			(this.mixTargetDelta = (w) => {
				const x = w / 1e3;
				Of(f.x, s.x, x),
					Of(f.y, s.y, x),
					this.setTargetDelta(f),
					this.relativeTarget &&
						this.relativeTargetOrigin &&
						this.layout &&
						this.relativeParent &&
						this.relativeParent.layout &&
						(Rr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
						gS(this.relativeTarget, this.relativeTargetOrigin, d, x),
						m && Xw(this.relativeTarget, m) && (this.isProjectionDirty = !1),
						m || (m = X()),
						_e(m, this.relativeTarget)),
					v &&
						((this.animationValues = c), Ww(c, u, this.latestValues, x, h, p)),
					this.root.scheduleUpdateProjection(),
					this.scheduleRender(),
					(this.animationProgress = x);
			}),
				this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(s) {
			this.notifyListeners('animationStart'),
				this.currentAnimation && this.currentAnimation.stop(),
				this.resumingFrom &&
					this.resumingFrom.currentAnimation &&
					this.resumingFrom.currentAnimation.stop(),
				this.pendingAnimation &&
					(Ot(this.pendingAnimation), (this.pendingAnimation = void 0)),
				(this.pendingAnimation = I.update(() => {
					(Bi.hasAnimatedSinceResize = !0),
						(this.currentAnimation = nS(0, Nf, {
							...s,
							onUpdate: (l) => {
								this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
							},
							onComplete: () => {
								s.onComplete && s.onComplete(), this.completeAnimation();
							},
						})),
						this.resumingFrom &&
							(this.resumingFrom.currentAnimation = this.currentAnimation),
						(this.pendingAnimation = void 0);
				}));
		}
		completeAnimation() {
			this.resumingFrom &&
				((this.resumingFrom.currentAnimation = void 0),
				(this.resumingFrom.preserveOpacity = void 0));
			const s = this.getStack();
			s && s.exitAnimationComplete(),
				(this.resumingFrom =
					this.currentAnimation =
					this.animationValues =
						void 0),
				this.notifyListeners('animationComplete');
		}
		finishAnimation() {
			this.currentAnimation &&
				(this.mixTargetDelta && this.mixTargetDelta(Nf),
				this.currentAnimation.stop()),
				this.completeAnimation();
		}
		applyTransformsToTarget() {
			const s = this.getLead();
			let {
				targetWithTransforms: l,
				target: a,
				layout: u,
				latestValues: c,
			} = s;
			if (!(!l || !a || !u)) {
				if (
					this !== s &&
					this.layout &&
					u &&
					Cm(this.options.animationType, this.layout.layoutBox, u.layoutBox)
				) {
					a = this.target || X();
					const f = Me(this.layout.layoutBox.x);
					(a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
					const d = Me(this.layout.layoutBox.y);
					(a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
				}
				_e(l, a),
					Dn(l, c),
					Er(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
			}
		}
		registerSharedNode(s, l) {
			this.sharedNodes.has(s) || this.sharedNodes.set(s, new Zw()),
				this.sharedNodes.get(s).add(l);
			const u = l.options.initialPromotionConfig;
			l.promote({
				transition: u ? u.transition : void 0,
				preserveFollowOpacity:
					u && u.shouldPreserveFollowOpacity
						? u.shouldPreserveFollowOpacity(l)
						: void 0,
			});
		}
		isLead() {
			const s = this.getStack();
			return s ? s.lead === this : !0;
		}
		getLead() {
			var s;
			const { layoutId: l } = this.options;
			return l
				? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
						this
				: this;
		}
		getPrevLead() {
			var s;
			const { layoutId: l } = this.options;
			return l
				? (s = this.getStack()) === null || s === void 0
					? void 0
					: s.prevLead
				: void 0;
		}
		getStack() {
			const { layoutId: s } = this.options;
			if (s) return this.root.sharedNodes.get(s);
		}
		promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
			const u = this.getStack();
			u && u.promote(this, a),
				s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
				l && this.setOptions({ transition: l });
		}
		relegate() {
			const s = this.getStack();
			return s ? s.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			const { visualElement: s } = this.options;
			if (!s) return;
			let l = !1;
			const { latestValues: a } = s;
			if (
				((a.z ||
					a.rotate ||
					a.rotateX ||
					a.rotateY ||
					a.rotateZ ||
					a.skewX ||
					a.skewY) &&
					(l = !0),
				!l)
			)
				return;
			const u = {};
			a.z && As('z', s, u, this.animationValues);
			for (let c = 0; c < Rs.length; c++)
				As(`rotate${Rs[c]}`, s, u, this.animationValues),
					As(`skew${Rs[c]}`, s, u, this.animationValues);
			s.render();
			for (const c in u)
				s.setStaticValue(c, u[c]),
					this.animationValues && (this.animationValues[c] = u[c]);
			s.scheduleRender();
		}
		getProjectionStyles(s) {
			var l, a;
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) return rS;
			const u = { visibility: '' },
				c = this.getTransformTemplate();
			if (this.needsReset)
				return (
					(this.needsReset = !1),
					(u.opacity = ''),
					(u.pointerEvents = zi(s == null ? void 0 : s.pointerEvents) || ''),
					(u.transform = c ? c(this.latestValues, '') : 'none'),
					u
				);
			const f = this.getLead();
			if (!this.projectionDelta || !this.layout || !f.target) {
				const v = {};
				return (
					this.options.layoutId &&
						((v.opacity =
							this.latestValues.opacity !== void 0
								? this.latestValues.opacity
								: 1),
						(v.pointerEvents = zi(s == null ? void 0 : s.pointerEvents) || '')),
					this.hasProjected &&
						!Zt(this.latestValues) &&
						((v.transform = c ? c({}, '') : 'none'), (this.hasProjected = !1)),
					v
				);
			}
			const d = f.animationValues || f.latestValues;
			this.applyTransformsToTarget(),
				(u.transform = qw(
					this.projectionDeltaWithTransform,
					this.treeScale,
					d
				)),
				c && (u.transform = c(d, u.transform));
			const { x: g, y } = this.projectionDelta;
			(u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
				f.animationValues
					? (u.opacity =
							f === this
								? (a =
										(l = d.opacity) !== null && l !== void 0
											? l
											: this.latestValues.opacity) !== null && a !== void 0
									? a
									: 1
								: this.preserveOpacity
								? this.latestValues.opacity
								: d.opacityExit)
					: (u.opacity =
							f === this
								? d.opacity !== void 0
									? d.opacity
									: ''
								: d.opacityExit !== void 0
								? d.opacityExit
								: 0);
			for (const v in wo) {
				if (d[v] === void 0) continue;
				const { correct: S, applyTo: p } = wo[v],
					h = u.transform === 'none' ? d[v] : S(d[v], f);
				if (p) {
					const m = p.length;
					for (let w = 0; w < m; w++) u[p[w]] = h;
				} else u[v] = h;
			}
			return (
				this.options.layoutId &&
					(u.pointerEvents =
						f === this
							? zi(s == null ? void 0 : s.pointerEvents) || ''
							: 'none'),
				u
			);
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((s) => {
				var l;
				return (l = s.currentAnimation) === null || l === void 0
					? void 0
					: l.stop();
			}),
				this.root.nodes.forEach(jf),
				this.root.sharedNodes.clear();
		}
	};
}
function oS(e) {
	e.updateLayout();
}
function sS(e) {
	var t;
	const n =
		((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
		e.snapshot;
	if (e.isLead() && e.layout && n && e.hasListeners('didUpdate')) {
		const { layoutBox: r, measuredBox: i } = e.layout,
			{ animationType: o } = e.options,
			s = n.source !== e.layout.source;
		o === 'size'
			? Ne((f) => {
					const d = s ? n.measuredBox[f] : n.layoutBox[f],
						g = Me(d);
					(d.min = r[f].min), (d.max = d.min + g);
			  })
			: Cm(o, n.layoutBox, r) &&
			  Ne((f) => {
					const d = s ? n.measuredBox[f] : n.layoutBox[f],
						g = Me(r[f]);
					(d.max = d.min + g),
						e.relativeTarget &&
							!e.currentAnimation &&
							((e.isProjectionDirty = !0),
							(e.relativeTarget[f].max = e.relativeTarget[f].min + g));
			  });
		const l = Mn();
		Er(l, r, n.layoutBox);
		const a = Mn();
		s ? Er(a, e.applyTransform(i, !0), n.measuredBox) : Er(a, r, n.layoutBox);
		const u = !wm(l);
		let c = !1;
		if (!e.resumeFrom) {
			const f = e.getClosestProjectingParent();
			if (f && !f.resumeFrom) {
				const { snapshot: d, layout: g } = f;
				if (d && g) {
					const y = X();
					Rr(y, n.layoutBox, d.layoutBox);
					const v = X();
					Rr(v, r, g.layoutBox),
						Sm(y, v) || (c = !0),
						f.options.layoutRoot &&
							((e.relativeTarget = v),
							(e.relativeTargetOrigin = y),
							(e.relativeParent = f));
				}
			}
		}
		e.notifyListeners('didUpdate', {
			layout: r,
			snapshot: n,
			delta: a,
			layoutDelta: l,
			hasLayoutChanged: u,
			hasRelativeTargetChanged: c,
		});
	} else if (e.isLead()) {
		const { onExitComplete: r } = e.options;
		r && r();
	}
	e.options.transition = void 0;
}
function lS(e) {
	mr && qt.totalNodes++,
		e.parent &&
			(e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
			e.isSharedProjectionDirty ||
				(e.isSharedProjectionDirty = !!(
					e.isProjectionDirty ||
					e.parent.isProjectionDirty ||
					e.parent.isSharedProjectionDirty
				)),
			e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function aS(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function uS(e) {
	e.clearSnapshot();
}
function jf(e) {
	e.clearMeasurements();
}
function cS(e) {
	e.isLayoutDirty = !1;
}
function fS(e) {
	const { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify('BeforeLayoutMeasure'),
		e.resetTransform();
}
function Ff(e) {
	e.finishAnimation(),
		(e.targetDelta = e.relativeTarget = e.target = void 0),
		(e.isProjectionDirty = !0);
}
function dS(e) {
	e.resolveTargetDelta();
}
function hS(e) {
	e.calcProjection();
}
function pS(e) {
	e.resetSkewAndRotation();
}
function mS(e) {
	e.removeLeadSnapshot();
}
function Of(e, t, n) {
	(e.translate = H(t.translate, 0, n)),
		(e.scale = H(t.scale, 1, n)),
		(e.origin = t.origin),
		(e.originPoint = t.originPoint);
}
function If(e, t, n, r) {
	(e.min = H(t.min, n.min, r)), (e.max = H(t.max, n.max, r));
}
function gS(e, t, n, r) {
	If(e.x, t.x, n.x, r), If(e.y, t.y, n.y, r);
}
function yS(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const vS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
	Bf = (e) =>
		typeof navigator < 'u' &&
		navigator.userAgent &&
		navigator.userAgent.toLowerCase().includes(e),
	zf = Bf('applewebkit/') && !Bf('chrome/') ? Math.round : pe;
function Uf(e) {
	(e.min = zf(e.min)), (e.max = zf(e.max));
}
function wS(e) {
	Uf(e.x), Uf(e.y);
}
function Cm(e, t, n) {
	return (
		e === 'position' || (e === 'preserve-aspect' && !Sw(Df(t), Df(n), 0.2))
	);
}
function SS(e) {
	var t;
	return (
		e !== e.root &&
		((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
	);
}
const xS = Pm({
		attachResizeListener: (e, t) => st(e, 'resize', t),
		measureScroll: () => ({
			x: document.documentElement.scrollLeft || document.body.scrollLeft,
			y: document.documentElement.scrollTop || document.body.scrollTop,
		}),
		checkIsScrollRoot: () => !0,
	}),
	Ls = { current: void 0 },
	Tm = Pm({
		measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
		defaultParent: () => {
			if (!Ls.current) {
				const e = new xS({});
				e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ls.current = e);
			}
			return Ls.current;
		},
		resetTransform: (e, t) => {
			e.style.transform = t !== void 0 ? t : 'none';
		},
		checkIsScrollRoot: (e) => window.getComputedStyle(e).position === 'fixed',
	}),
	PS = {
		pan: { Feature: Fw },
		drag: { Feature: jw, ProjectionNode: Tm, MeasureLayout: gm },
	};
function $f(e, t) {
	const n = t ? 'pointerenter' : 'pointerleave',
		r = t ? 'onHoverStart' : 'onHoverEnd',
		i = (o, s) => {
			if (o.pointerType === 'touch' || sm()) return;
			const l = e.getProps();
			e.animationState &&
				l.whileHover &&
				e.animationState.setActive('whileHover', t);
			const a = l[r];
			a && I.postRender(() => a(o, s));
		};
	return ft(e.current, n, i, { passive: !e.getProps()[r] });
}
class CS extends Wt {
	mount() {
		this.unmount = ct($f(this.node, !0), $f(this.node, !1));
	}
	unmount() {}
}
class TS extends Wt {
	constructor() {
		super(...arguments), (this.isActive = !1);
	}
	onFocus() {
		let t = !1;
		try {
			t = this.node.current.matches(':focus-visible');
		} catch {
			t = !0;
		}
		!t ||
			!this.node.animationState ||
			(this.node.animationState.setActive('whileFocus', !0),
			(this.isActive = !0));
	}
	onBlur() {
		!this.isActive ||
			!this.node.animationState ||
			(this.node.animationState.setActive('whileFocus', !1),
			(this.isActive = !1));
	}
	mount() {
		this.unmount = ct(
			st(this.node.current, 'focus', () => this.onFocus()),
			st(this.node.current, 'blur', () => this.onBlur())
		);
	}
	unmount() {}
}
const km = (e, t) => (t ? (e === t ? !0 : km(e, t.parentElement)) : !1);
function Ms(e, t) {
	if (!t) return;
	const n = new PointerEvent('pointer' + e);
	t(n, Wo(n));
}
class kS extends Wt {
	constructor() {
		super(...arguments),
			(this.removeStartListeners = pe),
			(this.removeEndListeners = pe),
			(this.removeAccessibleListeners = pe),
			(this.startPointerPress = (t, n) => {
				if (this.isPressing) return;
				this.removeEndListeners();
				const r = this.node.getProps(),
					o = ft(
						window,
						'pointerup',
						(l, a) => {
							if (!this.checkPressEnd()) return;
							const {
									onTap: u,
									onTapCancel: c,
									globalTapTarget: f,
								} = this.node.getProps(),
								d = !f && !km(this.node.current, l.target) ? c : u;
							d && I.update(() => d(l, a));
						},
						{ passive: !(r.onTap || r.onPointerUp) }
					),
					s = ft(window, 'pointercancel', (l, a) => this.cancelPress(l, a), {
						passive: !(r.onTapCancel || r.onPointerCancel),
					});
				(this.removeEndListeners = ct(o, s)), this.startPress(t, n);
			}),
			(this.startAccessiblePress = () => {
				const t = (o) => {
						if (o.key !== 'Enter' || this.isPressing) return;
						const s = (l) => {
							l.key !== 'Enter' ||
								!this.checkPressEnd() ||
								Ms('up', (a, u) => {
									const { onTap: c } = this.node.getProps();
									c && I.postRender(() => c(a, u));
								});
						};
						this.removeEndListeners(),
							(this.removeEndListeners = st(this.node.current, 'keyup', s)),
							Ms('down', (l, a) => {
								this.startPress(l, a);
							});
					},
					n = st(this.node.current, 'keydown', t),
					r = () => {
						this.isPressing && Ms('cancel', (o, s) => this.cancelPress(o, s));
					},
					i = st(this.node.current, 'blur', r);
				this.removeAccessibleListeners = ct(n, i);
			});
	}
	startPress(t, n) {
		this.isPressing = !0;
		const { onTapStart: r, whileTap: i } = this.node.getProps();
		i &&
			this.node.animationState &&
			this.node.animationState.setActive('whileTap', !0),
			r && I.postRender(() => r(t, n));
	}
	checkPressEnd() {
		return (
			this.removeEndListeners(),
			(this.isPressing = !1),
			this.node.getProps().whileTap &&
				this.node.animationState &&
				this.node.animationState.setActive('whileTap', !1),
			!sm()
		);
	}
	cancelPress(t, n) {
		if (!this.checkPressEnd()) return;
		const { onTapCancel: r } = this.node.getProps();
		r && I.postRender(() => r(t, n));
	}
	mount() {
		const t = this.node.getProps(),
			n = ft(
				t.globalTapTarget ? window : this.node.current,
				'pointerdown',
				this.startPointerPress,
				{ passive: !(t.onTapStart || t.onPointerStart) }
			),
			r = st(this.node.current, 'focus', this.startAccessiblePress);
		this.removeStartListeners = ct(n, r);
	}
	unmount() {
		this.removeStartListeners(),
			this.removeEndListeners(),
			this.removeAccessibleListeners();
	}
}
const Ul = new WeakMap(),
	Vs = new WeakMap(),
	ES = (e) => {
		const t = Ul.get(e.target);
		t && t(e);
	},
	RS = (e) => {
		e.forEach(ES);
	};
function AS({ root: e, ...t }) {
	const n = e || document;
	Vs.has(n) || Vs.set(n, {});
	const r = Vs.get(n),
		i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(RS, { root: e, ...t })), r[i];
}
function LS(e, t, n) {
	const r = AS(t);
	return (
		Ul.set(e, n),
		r.observe(e),
		() => {
			Ul.delete(e), r.unobserve(e);
		}
	);
}
const MS = { some: 0, all: 1 };
class VS extends Wt {
	constructor() {
		super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
	}
	startObserver() {
		this.unmount();
		const { viewport: t = {} } = this.node.getProps(),
			{ root: n, margin: r, amount: i = 'some', once: o } = t,
			s = {
				root: n ? n.current : void 0,
				rootMargin: r,
				threshold: typeof i == 'number' ? i : MS[i],
			},
			l = (a) => {
				const { isIntersecting: u } = a;
				if (
					this.isInView === u ||
					((this.isInView = u), o && !u && this.hasEnteredView)
				)
					return;
				u && (this.hasEnteredView = !0),
					this.node.animationState &&
						this.node.animationState.setActive('whileInView', u);
				const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
					d = u ? c : f;
				d && d(a);
			};
		return LS(this.node.current, s, l);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > 'u') return;
		const { props: t, prevProps: n } = this.node;
		['amount', 'margin', 'root'].some(DS(t, n)) && this.startObserver();
	}
	unmount() {}
}
function DS({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
const _S = {
		inView: { Feature: VS },
		tap: { Feature: kS },
		focus: { Feature: TS },
		hover: { Feature: CS },
	},
	NS = { layout: { ProjectionNode: Tm, MeasureLayout: gm } },
	Em = C.createContext({
		transformPagePoint: (e) => e,
		isStatic: !1,
		reducedMotion: 'never',
	}),
	Ho = C.createContext({}),
	uu = typeof window < 'u',
	jS = uu ? C.useLayoutEffect : C.useEffect,
	Rm = C.createContext({ strict: !1 });
function FS(e, t, n, r, i) {
	var o, s;
	const { visualElement: l } = C.useContext(Ho),
		a = C.useContext(Rm),
		u = C.useContext(lu),
		c = C.useContext(Em).reducedMotion,
		f = C.useRef();
	(r = r || a.renderer),
		!f.current &&
			r &&
			(f.current = r(e, {
				visualState: t,
				parent: l,
				props: n,
				presenceContext: u,
				blockInitialAnimation: u ? u.initial === !1 : !1,
				reducedMotionConfig: c,
			}));
	const d = f.current,
		g = C.useContext(mm);
	d &&
		!d.projection &&
		i &&
		(d.type === 'html' || d.type === 'svg') &&
		OS(f.current, n, i, g);
	const y = C.useRef(!1);
	C.useInsertionEffect(() => {
		d && y.current && d.update(n, u);
	});
	const v = n[qp],
		S = C.useRef(
			!!v &&
				!(
					!((o = window.MotionHandoffIsComplete) === null || o === void 0) &&
					o.call(window, v)
				) &&
				((s = window.MotionHasOptimisedAnimation) === null || s === void 0
					? void 0
					: s.call(window, v))
		);
	return (
		jS(() => {
			d &&
				((y.current = !0),
				(window.MotionIsMounted = !0),
				d.updateFeatures(),
				au.render(d.render),
				S.current && d.animationState && d.animationState.animateChanges());
		}),
		C.useEffect(() => {
			d &&
				(!S.current && d.animationState && d.animationState.animateChanges(),
				S.current &&
					(queueMicrotask(() => {
						var p;
						(p = window.MotionHandoffMarkAsComplete) === null ||
							p === void 0 ||
							p.call(window, v);
					}),
					(S.current = !1)));
		}),
		d
	);
}
function OS(e, t, n, r) {
	const {
		layoutId: i,
		layout: o,
		drag: s,
		dragConstraints: l,
		layoutScroll: a,
		layoutRoot: u,
	} = t;
	(e.projection = new n(
		e.latestValues,
		t['data-framer-portal-id'] ? void 0 : Am(e.parent)
	)),
		e.projection.setOptions({
			layoutId: i,
			layout: o,
			alwaysMeasureLayout: !!s || (l && Ln(l)),
			visualElement: e,
			animationType: typeof o == 'string' ? o : 'both',
			initialPromotionConfig: r,
			layoutScroll: a,
			layoutRoot: u,
		});
}
function Am(e) {
	if (e) return e.options.allowProjection !== !1 ? e.projection : Am(e.parent);
}
function IS(e, t, n) {
	return C.useCallback(
		(r) => {
			r && e.mount && e.mount(r),
				t && (r ? t.mount(r) : t.unmount()),
				n && (typeof n == 'function' ? n(r) : Ln(n) && (n.current = r));
		},
		[t]
	);
}
function Ko(e) {
	return zo(e.animate) || Ua.some((t) => Kr(e[t]));
}
function Lm(e) {
	return !!(Ko(e) || e.variants);
}
function BS(e, t) {
	if (Ko(e)) {
		const { initial: n, animate: r } = e;
		return {
			initial: n === !1 || Kr(n) ? n : void 0,
			animate: Kr(r) ? r : void 0,
		};
	}
	return e.inherit !== !1 ? t : {};
}
function zS(e) {
	const { initial: t, animate: n } = BS(e, C.useContext(Ho));
	return C.useMemo(() => ({ initial: t, animate: n }), [Wf(t), Wf(n)]);
}
function Wf(e) {
	return Array.isArray(e) ? e.join(' ') : e;
}
const Hf = {
		animation: [
			'animate',
			'variants',
			'whileHover',
			'whileTap',
			'exit',
			'whileInView',
			'whileFocus',
			'whileDrag',
		],
		exit: ['exit'],
		drag: ['drag', 'dragControls'],
		focus: ['whileFocus'],
		hover: ['whileHover', 'onHoverStart', 'onHoverEnd'],
		tap: ['whileTap', 'onTap', 'onTapStart', 'onTapCancel'],
		pan: ['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd'],
		inView: ['whileInView', 'onViewportEnter', 'onViewportLeave'],
		layout: ['layout', 'layoutId'],
	},
	Xn = {};
for (const e in Hf) Xn[e] = { isEnabled: (t) => Hf[e].some((n) => !!t[n]) };
function US(e) {
	for (const t in e) Xn[t] = { ...Xn[t], ...e[t] };
}
const $S = Symbol.for('motionComponentSymbol');
function WS({
	preloadedFeatures: e,
	createVisualElement: t,
	useRender: n,
	useVisualState: r,
	Component: i,
}) {
	e && US(e);
	function o(l, a) {
		let u;
		const c = { ...C.useContext(Em), ...l, layoutId: HS(l) },
			{ isStatic: f } = c,
			d = zS(l),
			g = r(l, f);
		if (!f && uu) {
			KS();
			const y = GS(c);
			(u = y.MeasureLayout),
				(d.visualElement = FS(i, g, c, t, y.ProjectionNode));
		}
		return k.jsxs(Ho.Provider, {
			value: d,
			children: [
				u && d.visualElement
					? k.jsx(u, { visualElement: d.visualElement, ...c })
					: null,
				n(i, l, IS(g, d.visualElement, a), g, f, d.visualElement),
			],
		});
	}
	const s = C.forwardRef(o);
	return (s[$S] = i), s;
}
function HS({ layoutId: e }) {
	const t = C.useContext(pm).id;
	return t && e !== void 0 ? t + '-' + e : e;
}
function KS(e, t) {
	C.useContext(Rm).strict;
}
function GS(e) {
	const { drag: t, layout: n } = Xn;
	if (!t && !n) return {};
	const r = { ...t, ...n };
	return {
		MeasureLayout:
			(t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
				? r.MeasureLayout
				: void 0,
		ProjectionNode: r.ProjectionNode,
	};
}
const QS = [
	'animate',
	'circle',
	'defs',
	'desc',
	'ellipse',
	'g',
	'image',
	'line',
	'filter',
	'marker',
	'mask',
	'metadata',
	'path',
	'pattern',
	'polygon',
	'polyline',
	'rect',
	'stop',
	'switch',
	'symbol',
	'svg',
	'text',
	'tspan',
	'use',
	'view',
];
function cu(e) {
	return typeof e != 'string' || e.includes('-')
		? !1
		: !!(QS.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Mm(e, { style: t, vars: n }, r, i) {
	Object.assign(e.style, t, i && i.getProjectionStyles(r));
	for (const o in n) e.style.setProperty(o, n[o]);
}
const Vm = new Set([
	'baseFrequency',
	'diffuseConstant',
	'kernelMatrix',
	'kernelUnitLength',
	'keySplines',
	'keyTimes',
	'limitingConeAngle',
	'markerHeight',
	'markerWidth',
	'numOctaves',
	'targetX',
	'targetY',
	'surfaceScale',
	'specularConstant',
	'specularExponent',
	'stdDeviation',
	'tableValues',
	'viewBox',
	'gradientTransform',
	'pathLength',
	'startOffset',
	'textLength',
	'lengthAdjust',
]);
function Dm(e, t, n, r) {
	Mm(e, t, void 0, r);
	for (const i in t.attrs) e.setAttribute(Vm.has(i) ? i : su(i), t.attrs[i]);
}
function _m(e, { layout: t, layoutId: n }) {
	return (
		pn.has(e) ||
		e.startsWith('origin') ||
		((t || n !== void 0) && (!!wo[e] || e === 'opacity'))
	);
}
function fu(e, t, n) {
	var r;
	const { style: i } = e,
		o = {};
	for (const s in i)
		(he(i[s]) ||
			(t.style && he(t.style[s])) ||
			_m(s, e) ||
			((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
				? void 0
				: r.liveStyle) !== void 0) &&
			(o[s] = i[s]);
	return o;
}
function Nm(e, t, n) {
	const r = fu(e, t, n);
	for (const i in e)
		if (he(e[i]) || he(t[i])) {
			const o =
				ei.indexOf(i) !== -1
					? 'attr' + i.charAt(0).toUpperCase() + i.substring(1)
					: i;
			r[o] = e[i];
		}
	return r;
}
function YS(e) {
	const t = C.useRef(null);
	return t.current === null && (t.current = e()), t.current;
}
function XS(
	{ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
	r,
	i,
	o
) {
	const s = { latestValues: ZS(r, i, o, e), renderState: t() };
	return n && (s.mount = (l) => n(r, l, s)), s;
}
const jm = (e) => (t, n) => {
	const r = C.useContext(Ho),
		i = C.useContext(lu),
		o = () => XS(e, t, r, i);
	return n ? o() : YS(o);
};
function ZS(e, t, n, r) {
	const i = {},
		o = r(e, {});
	for (const d in o) i[d] = zi(o[d]);
	let { initial: s, animate: l } = e;
	const a = Ko(e),
		u = Lm(e);
	t &&
		u &&
		!a &&
		e.inherit !== !1 &&
		(s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
	let c = n ? n.initial === !1 : !1;
	c = c || s === !1;
	const f = c ? l : s;
	if (f && typeof f != 'boolean' && !zo(f)) {
		const d = Array.isArray(f) ? f : [f];
		for (let g = 0; g < d.length; g++) {
			const y = Ba(e, d[g]);
			if (y) {
				const { transitionEnd: v, transition: S, ...p } = y;
				for (const h in p) {
					let m = p[h];
					if (Array.isArray(m)) {
						const w = c ? m.length - 1 : 0;
						m = m[w];
					}
					m !== null && (i[h] = m);
				}
				for (const h in v) i[h] = v[h];
			}
		}
	}
	return i;
}
const du = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
	Fm = () => ({ ...du(), attrs: {} }),
	Om = (e, t) => (t && typeof e == 'number' ? t.transform(e) : e),
	qS = {
		x: 'translateX',
		y: 'translateY',
		z: 'translateZ',
		transformPerspective: 'perspective',
	},
	JS = ei.length;
function bS(e, t, n) {
	let r = '',
		i = !0;
	for (let o = 0; o < JS; o++) {
		const s = ei[o],
			l = e[s];
		if (l === void 0) continue;
		let a = !0;
		if (
			(typeof l == 'number'
				? (a = l === (s.startsWith('scale') ? 1 : 0))
				: (a = parseFloat(l) === 0),
			!a || n)
		) {
			const u = Om(l, Xa[s]);
			if (!a) {
				i = !1;
				const c = qS[s] || s;
				r += `${c}(${u}) `;
			}
			n && (t[s] = u);
		}
	}
	return (r = r.trim()), n ? (r = n(t, i ? '' : r)) : i && (r = 'none'), r;
}
function hu(e, t, n) {
	const { style: r, vars: i, transformOrigin: o } = e;
	let s = !1,
		l = !1;
	for (const a in t) {
		const u = t[a];
		if (pn.has(a)) {
			s = !0;
			continue;
		} else if (Ap(a)) {
			i[a] = u;
			continue;
		} else {
			const c = Om(u, Xa[a]);
			a.startsWith('origin') ? ((l = !0), (o[a] = c)) : (r[a] = c);
		}
	}
	if (
		(t.transform ||
			(s || n
				? (r.transform = bS(t, e.transform, n))
				: r.transform && (r.transform = 'none')),
		l)
	) {
		const { originX: a = '50%', originY: u = '50%', originZ: c = 0 } = o;
		r.transformOrigin = `${a} ${u} ${c}`;
	}
}
function Kf(e, t, n) {
	return typeof e == 'string' ? e : M.transform(t + n * e);
}
function ex(e, t, n) {
	const r = Kf(t, e.x, e.width),
		i = Kf(n, e.y, e.height);
	return `${r} ${i}`;
}
const tx = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' },
	nx = { offset: 'strokeDashoffset', array: 'strokeDasharray' };
function rx(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	const o = i ? tx : nx;
	e[o.offset] = M.transform(-r);
	const s = M.transform(t),
		l = M.transform(n);
	e[o.array] = `${s} ${l}`;
}
function pu(
	e,
	{
		attrX: t,
		attrY: n,
		attrScale: r,
		originX: i,
		originY: o,
		pathLength: s,
		pathSpacing: l = 1,
		pathOffset: a = 0,
		...u
	},
	c,
	f
) {
	if ((hu(e, u, f), c)) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	(e.attrs = e.style), (e.style = {});
	const { attrs: d, style: g, dimensions: y } = e;
	d.transform && (y && (g.transform = d.transform), delete d.transform),
		y &&
			(i !== void 0 || o !== void 0 || g.transform) &&
			(g.transformOrigin = ex(
				y,
				i !== void 0 ? i : 0.5,
				o !== void 0 ? o : 0.5
			)),
		t !== void 0 && (d.x = t),
		n !== void 0 && (d.y = n),
		r !== void 0 && (d.scale = r),
		s !== void 0 && rx(d, s, l, a, !1);
}
const mu = (e) => typeof e == 'string' && e.toLowerCase() === 'svg',
	ix = {
		useVisualState: jm({
			scrapeMotionValuesFromProps: Nm,
			createRenderState: Fm,
			onMount: (e, t, { renderState: n, latestValues: r }) => {
				I.read(() => {
					try {
						n.dimensions =
							typeof t.getBBox == 'function'
								? t.getBBox()
								: t.getBoundingClientRect();
					} catch {
						n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
					}
				}),
					I.render(() => {
						pu(n, r, mu(t.tagName), e.transformTemplate), Dm(t, n);
					});
			},
		}),
	},
	ox = {
		useVisualState: jm({
			scrapeMotionValuesFromProps: fu,
			createRenderState: du,
		}),
	};
function Im(e, t, n) {
	for (const r in t) !he(t[r]) && !_m(r, n) && (e[r] = t[r]);
}
function sx({ transformTemplate: e }, t) {
	return C.useMemo(() => {
		const n = du();
		return hu(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function lx(e, t) {
	const n = e.style || {},
		r = {};
	return Im(r, n, e), Object.assign(r, sx(e, t)), r;
}
function ax(e, t) {
	const n = {},
		r = lx(e, t);
	return (
		e.drag &&
			e.dragListener !== !1 &&
			((n.draggable = !1),
			(r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = 'none'),
			(r.touchAction =
				e.drag === !0 ? 'none' : `pan-${e.drag === 'x' ? 'y' : 'x'}`)),
		e.tabIndex === void 0 &&
			(e.onTap || e.onTapStart || e.whileTap) &&
			(n.tabIndex = 0),
		(n.style = r),
		n
	);
}
const ux = new Set([
	'animate',
	'exit',
	'variants',
	'initial',
	'style',
	'values',
	'variants',
	'transition',
	'transformTemplate',
	'custom',
	'inherit',
	'onBeforeLayoutMeasure',
	'onAnimationStart',
	'onAnimationComplete',
	'onUpdate',
	'onDragStart',
	'onDrag',
	'onDragEnd',
	'onMeasureDragConstraints',
	'onDirectionLock',
	'onDragTransitionEnd',
	'_dragX',
	'_dragY',
	'onHoverStart',
	'onHoverEnd',
	'onViewportEnter',
	'onViewportLeave',
	'globalTapTarget',
	'ignoreStrict',
	'viewport',
]);
function So(e) {
	return (
		e.startsWith('while') ||
		(e.startsWith('drag') && e !== 'draggable') ||
		e.startsWith('layout') ||
		e.startsWith('onTap') ||
		e.startsWith('onPan') ||
		e.startsWith('onLayout') ||
		ux.has(e)
	);
}
let Bm = (e) => !So(e);
function cx(e) {
	e && (Bm = (t) => (t.startsWith('on') ? !So(t) : e(t)));
}
try {
	cx(require('@emotion/is-prop-valid').default);
} catch {}
function fx(e, t, n) {
	const r = {};
	for (const i in e)
		(i === 'values' && typeof e.values == 'object') ||
			((Bm(i) ||
				(n === !0 && So(i)) ||
				(!t && !So(i)) ||
				(e.draggable && i.startsWith('onDrag'))) &&
				(r[i] = e[i]));
	return r;
}
function dx(e, t, n, r) {
	const i = C.useMemo(() => {
		const o = Fm();
		return (
			pu(o, t, mu(r), e.transformTemplate),
			{ ...o.attrs, style: { ...o.style } }
		);
	}, [t]);
	if (e.style) {
		const o = {};
		Im(o, e.style, e), (i.style = { ...o, ...i.style });
	}
	return i;
}
function hx(e = !1) {
	return (n, r, i, { latestValues: o }, s) => {
		const a = (cu(n) ? dx : ax)(r, o, s, n),
			u = fx(r, typeof n == 'string', e),
			c = n !== C.Fragment ? { ...u, ...a, ref: i } : {},
			{ children: f } = r,
			d = C.useMemo(() => (he(f) ? f.get() : f), [f]);
		return C.createElement(n, { ...c, children: d });
	};
}
function px(e, t) {
	return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
		const s = {
			...(cu(r) ? ix : ox),
			preloadedFeatures: e,
			useRender: hx(i),
			createVisualElement: t,
			Component: r,
		};
		return WS(s);
	};
}
const $l = { current: null },
	zm = { current: !1 };
function mx() {
	if (((zm.current = !0), !!uu))
		if (window.matchMedia) {
			const e = window.matchMedia('(prefers-reduced-motion)'),
				t = () => ($l.current = e.matches);
			e.addListener(t), t();
		} else $l.current = !1;
}
function gx(e, t, n) {
	for (const r in t) {
		const i = t[r],
			o = n[r];
		if (he(i)) e.addValue(r, i);
		else if (he(o)) e.addValue(r, Yr(i, { owner: e }));
		else if (o !== i)
			if (e.hasValue(r)) {
				const s = e.getValue(r);
				s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
			} else {
				const s = e.getStaticValue(r);
				e.addValue(r, Yr(s !== void 0 ? s : i, { owner: e }));
			}
	}
	for (const r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
const Gf = new WeakMap(),
	yx = [...Vp, fe, Bt],
	vx = (e) => yx.find(Mp(e)),
	Qf = [
		'AnimationStart',
		'AnimationComplete',
		'Update',
		'BeforeLayoutMeasure',
		'LayoutMeasure',
		'LayoutAnimationStart',
		'LayoutAnimationComplete',
	];
class wx {
	scrapeMotionValuesFromProps(t, n, r) {
		return {};
	}
	constructor(
		{
			parent: t,
			props: n,
			presenceContext: r,
			reducedMotionConfig: i,
			blockInitialAnimation: o,
			visualState: s,
		},
		l = {}
	) {
		(this.current = null),
			(this.children = new Set()),
			(this.isVariantNode = !1),
			(this.isControllingVariants = !1),
			(this.shouldReduceMotion = null),
			(this.values = new Map()),
			(this.KeyframeResolver = Ga),
			(this.features = {}),
			(this.valueSubscriptions = new Map()),
			(this.prevMotionValues = {}),
			(this.events = {}),
			(this.propEventSubscriptions = {}),
			(this.notifyUpdate = () => this.notify('Update', this.latestValues)),
			(this.render = () => {
				this.current &&
					(this.triggerBuild(),
					this.renderInstance(
						this.current,
						this.renderState,
						this.props.style,
						this.projection
					));
			}),
			(this.renderScheduledAt = 0),
			(this.scheduleRender = () => {
				const d = tt.now();
				this.renderScheduledAt < d &&
					((this.renderScheduledAt = d), I.render(this.render, !1, !0));
			});
		const { latestValues: a, renderState: u } = s;
		(this.latestValues = a),
			(this.baseTarget = { ...a }),
			(this.initialValues = n.initial ? { ...a } : {}),
			(this.renderState = u),
			(this.parent = t),
			(this.props = n),
			(this.presenceContext = r),
			(this.depth = t ? t.depth + 1 : 0),
			(this.reducedMotionConfig = i),
			(this.options = l),
			(this.blockInitialAnimation = !!o),
			(this.isControllingVariants = Ko(n)),
			(this.isVariantNode = Lm(n)),
			this.isVariantNode && (this.variantChildren = new Set()),
			(this.manuallyAnimateOnMount = !!(t && t.current));
		const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
			n,
			{},
			this
		);
		for (const d in f) {
			const g = f[d];
			a[d] !== void 0 && he(g) && g.set(a[d], !1);
		}
	}
	mount(t) {
		(this.current = t),
			Gf.set(t, this),
			this.projection && !this.projection.instance && this.projection.mount(t),
			this.parent &&
				this.isVariantNode &&
				!this.isControllingVariants &&
				(this.removeFromVariantTree = this.parent.addVariantChild(this)),
			this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
			zm.current || mx(),
			(this.shouldReduceMotion =
				this.reducedMotionConfig === 'never'
					? !1
					: this.reducedMotionConfig === 'always'
					? !0
					: $l.current),
			this.parent && this.parent.children.add(this),
			this.update(this.props, this.presenceContext);
	}
	unmount() {
		Gf.delete(this.current),
			this.projection && this.projection.unmount(),
			Ot(this.notifyUpdate),
			Ot(this.render),
			this.valueSubscriptions.forEach((t) => t()),
			this.valueSubscriptions.clear(),
			this.removeFromVariantTree && this.removeFromVariantTree(),
			this.parent && this.parent.children.delete(this);
		for (const t in this.events) this.events[t].clear();
		for (const t in this.features) {
			const n = this.features[t];
			n && (n.unmount(), (n.isMounted = !1));
		}
		this.current = null;
	}
	bindToMotionValue(t, n) {
		this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
		const r = pn.has(t),
			i = n.on('change', (l) => {
				(this.latestValues[t] = l),
					this.props.onUpdate && I.preRender(this.notifyUpdate),
					r && this.projection && (this.projection.isTransformDirty = !0);
			}),
			o = n.on('renderRequest', this.scheduleRender);
		let s;
		window.MotionCheckAppearSync &&
			(s = window.MotionCheckAppearSync(this, t, n)),
			this.valueSubscriptions.set(t, () => {
				i(), o(), s && s(), n.owner && n.stop();
			});
	}
	sortNodePosition(t) {
		return !this.current ||
			!this.sortInstanceNodePosition ||
			this.type !== t.type
			? 0
			: this.sortInstanceNodePosition(this.current, t.current);
	}
	updateFeatures() {
		let t = 'animation';
		for (t in Xn) {
			const n = Xn[t];
			if (!n) continue;
			const { isEnabled: r, Feature: i } = n;
			if (
				(!this.features[t] &&
					i &&
					r(this.props) &&
					(this.features[t] = new i(this)),
				this.features[t])
			) {
				const o = this.features[t];
				o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current
			? this.measureInstanceViewportBox(this.current, this.props)
			: X();
	}
	getStaticValue(t) {
		return this.latestValues[t];
	}
	setStaticValue(t, n) {
		this.latestValues[t] = n;
	}
	update(t, n) {
		(t.transformTemplate || this.props.transformTemplate) &&
			this.scheduleRender(),
			(this.prevProps = this.props),
			(this.props = t),
			(this.prevPresenceContext = this.presenceContext),
			(this.presenceContext = n);
		for (let r = 0; r < Qf.length; r++) {
			const i = Qf[r];
			this.propEventSubscriptions[i] &&
				(this.propEventSubscriptions[i](),
				delete this.propEventSubscriptions[i]);
			const o = 'on' + i,
				s = t[o];
			s && (this.propEventSubscriptions[i] = this.on(i, s));
		}
		(this.prevMotionValues = gx(
			this,
			this.scrapeMotionValuesFromProps(t, this.prevProps, this),
			this.prevMotionValues
		)),
			this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(t) {
		return this.props.variants ? this.props.variants[t] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode
			? this
			: this.parent
			? this.parent.getClosestVariantNode()
			: void 0;
	}
	addVariantChild(t) {
		const n = this.getClosestVariantNode();
		if (n)
			return (
				n.variantChildren && n.variantChildren.add(t),
				() => n.variantChildren.delete(t)
			);
	}
	addValue(t, n) {
		const r = this.values.get(t);
		n !== r &&
			(r && this.removeValue(t),
			this.bindToMotionValue(t, n),
			this.values.set(t, n),
			(this.latestValues[t] = n.get()));
	}
	removeValue(t) {
		this.values.delete(t);
		const n = this.valueSubscriptions.get(t);
		n && (n(), this.valueSubscriptions.delete(t)),
			delete this.latestValues[t],
			this.removeValueFromRenderState(t, this.renderState);
	}
	hasValue(t) {
		return this.values.has(t);
	}
	getValue(t, n) {
		if (this.props.values && this.props.values[t]) return this.props.values[t];
		let r = this.values.get(t);
		return (
			r === void 0 &&
				n !== void 0 &&
				((r = Yr(n === null ? void 0 : n, { owner: this })),
				this.addValue(t, r)),
			r
		);
	}
	readValue(t, n) {
		var r;
		let i =
			this.latestValues[t] !== void 0 || !this.current
				? this.latestValues[t]
				: (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
				  r !== void 0
				? r
				: this.readValueFromInstance(this.current, t, this.options);
		return (
			i != null &&
				(typeof i == 'string' && (Ep(i) || kp(i))
					? (i = parseFloat(i))
					: !vx(i) && Bt.test(n) && (i = Bp(t, n)),
				this.setBaseTarget(t, he(i) ? i.get() : i)),
			he(i) ? i.get() : i
		);
	}
	setBaseTarget(t, n) {
		this.baseTarget[t] = n;
	}
	getBaseTarget(t) {
		var n;
		const { initial: r } = this.props;
		let i;
		if (typeof r == 'string' || typeof r == 'object') {
			const s = Ba(
				this.props,
				r,
				(n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
			);
			s && (i = s[t]);
		}
		if (r && i !== void 0) return i;
		const o = this.getBaseTargetFromProps(this.props, t);
		return o !== void 0 && !he(o)
			? o
			: this.initialValues[t] !== void 0 && i === void 0
			? void 0
			: this.baseTarget[t];
	}
	on(t, n) {
		return this.events[t] || (this.events[t] = new ou()), this.events[t].add(n);
	}
	notify(t, ...n) {
		this.events[t] && this.events[t].notify(...n);
	}
}
class Um extends wx {
	constructor() {
		super(...arguments), (this.KeyframeResolver = zp);
	}
	sortInstanceNodePosition(t, n) {
		return t.compareDocumentPosition(n) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(t, n) {
		return t.style ? t.style[n] : void 0;
	}
	removeValueFromRenderState(t, { vars: n, style: r }) {
		delete n[t], delete r[t];
	}
}
function Sx(e) {
	return window.getComputedStyle(e);
}
class xx extends Um {
	constructor() {
		super(...arguments), (this.type = 'html'), (this.renderInstance = Mm);
	}
	readValueFromInstance(t, n) {
		if (pn.has(n)) {
			const r = Za(n);
			return (r && r.default) || 0;
		} else {
			const r = Sx(t),
				i = (Ap(n) ? r.getPropertyValue(n) : r[n]) || 0;
			return typeof i == 'string' ? i.trim() : i;
		}
	}
	measureInstanceViewportBox(t, { transformPagePoint: n }) {
		return dm(t, n);
	}
	build(t, n, r) {
		hu(t, n, r.transformTemplate);
	}
	scrapeMotionValuesFromProps(t, n, r) {
		return fu(t, n, r);
	}
	handleChildMotionValue() {
		this.childSubscription &&
			(this.childSubscription(), delete this.childSubscription);
		const { children: t } = this.props;
		he(t) &&
			(this.childSubscription = t.on('change', (n) => {
				this.current && (this.current.textContent = `${n}`);
			}));
	}
}
class Px extends Um {
	constructor() {
		super(...arguments),
			(this.type = 'svg'),
			(this.isSVGTag = !1),
			(this.measureInstanceViewportBox = X);
	}
	getBaseTargetFromProps(t, n) {
		return t[n];
	}
	readValueFromInstance(t, n) {
		if (pn.has(n)) {
			const r = Za(n);
			return (r && r.default) || 0;
		}
		return (n = Vm.has(n) ? n : su(n)), t.getAttribute(n);
	}
	scrapeMotionValuesFromProps(t, n, r) {
		return Nm(t, n, r);
	}
	build(t, n, r) {
		pu(t, n, this.isSVGTag, r.transformTemplate);
	}
	renderInstance(t, n, r, i) {
		Dm(t, n, r, i);
	}
	mount(t) {
		(this.isSVGTag = mu(t.tagName)), super.mount(t);
	}
}
const Cx = (e, t) =>
		cu(e) ? new Px(t) : new xx(t, { allowProjection: e !== C.Fragment }),
	Tx = px({ ...fw, ..._S, ...PS, ...NS }, Cx),
	Ke = n0(Tx);
function kx() {
	return k.jsxs(
		Ke.div,
		{
			initial: { y: '-200px', opacity: 0 },
			animate: { y: 0, opacity: 1 },
			exit: { y: '-200px', opacity: 0 },
			transition: { type: 'spring', stiffness: 120 },
			className: 'home',
			children: [
				k.jsx(Ke.img, {
					initial: { y: '-100px' },
					src: '/logo-gdg.svg',
					alt: '',
				}),
				k.jsx('h1', { children: 'Congratulations' }),
				k.jsx(Ke.p, {
					initial: { y: '100px', opacity: 0 },
					animate: { y: 0, opacity: 1 },
					exit: { y: '100px', opacity: 0 },
					transition: { type: 'spring', stiffness: 180 },
					children:
						'A huge round of applause for your achievements. You have successfully completed the challenges and earned the badges. Keep up the good work.',
				}),
				k.jsx(Ke.a, {
					href: '/certificate',
					initial: { y: '100px', opacity: 0 },
					animate: { y: 0, opacity: 1 },
					exit: { y: '100px', opacity: 0 },
					whileHover: { x: '20px' },
					transition: { type: 'spring', stiffness: 180 },
					children:
						"Follow This Link to enter your Google Cloud's Skillboost id",
				}),
			],
		},
		1
	);
}
function Ex({ setProfileURL: e }) {
	const t = (n) => {
		n.preventDefault();
		const i = new FormData(n.target).get('ProfileURL');
		e(i);
	};
	return k.jsxs(Ke.div, {
		initial: { x: '-200px', opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: '-200px', opacity: 0 },
		transition: { type: 'spring', stiffness: 120 },
		className: 'certificate',
		children: [
			k.jsx(Ke.img, {
				initial: { y: '-100px' },
				src: '/logo-gdg.svg',
				alt: '',
			}),
			k.jsx('h1', { children: 'Enter Certificate Details' }),
			k.jsxs('form', {
				onSubmit: t,
				children: [
					k.jsx('label', {
						htmlFor: 'ProfileURL',
						children: 'Enter Profile URL',
					}),
					k.jsx(Ke.input, {
						autoComplete: 'off',
						autoCorrect: 'off',
						type: 'text',
						id: 'ProfileURL',
						name: 'ProfileURL',
						required: !0,
					}),
					k.jsx('button', { type: 'submit', children: 'Submit' }),
				],
			}),
		],
	});
}
function Rx() {
	var e = JSON.parse(localStorage.getItem('data')),
		t = void 0;
	console.log(t),
		e ||
			((t = window.location.href.split('?data=')[1]),
			(t = JSON.parse(t.replaceAll('%22', '"').replaceAll('%20', ' '))),
			t || (window.location.href = '/certificate'),
			(e = t),
			console.log(e));
	const n = window.location.href.split('/')[2];
	console.log(n);
	const r = () => {
		let i = window.open('', 'PRINT', 'height=1080,width=1920');
		i.document.write('<html><head><title>GDG SRMCEM Certificate</title>'),
			i.document.write(
				'<link rel="stylesheet" href="http://' + n + '/style.css">'
			),
			i.document.write('</head><body>'),
			i.document.write(document.querySelector('.pbody').innerHTML),
			i.document.write('</body></html>'),
			i.document.close(),
			i.focus(),
			i.print();
	};
	return k.jsxs(k.Fragment, {
		children: [
			k.jsxs('div', {
				className: 'printbar',
				children: [
					k.jsxs('div', {
						children: [
							k.jsx('h1', {
								children: 'Click this button to print your certificate',
							}),
							k.jsxs('p', {
								children: [
									k.jsx('b', { children: 'NOTE:' }),
									"set the page size as A4, and margin as none if it isn't in 1 page",
								],
							}),
						],
					}),
					k.jsx('button', {
						onClick: () => {
							r();
						},
						children: 'Print',
					}),
				],
			}),
			k.jsx(Ke.main, {
				initial: { opacity: 0, scale: 0.5 },
				animate: { opacity: 1, scale: 1 },
				transition: { type: 'spring', stiffness: 50 },
				children: k.jsxs('div', {
					className: 'container',
					children: [
						k.jsxs('div', {
							className: 'logo',
							children: [
								k.jsx('img', {
									className: 'logo-gdg',
									src: '/logo-gdg.png',
									alt: '',
								}),
								k.jsx('img', {
									className: 'logo-srmcem',
									src: '/logo-srmcem.png',
									alt: '',
								}),
							],
						}),
						k.jsxs('div', {
							className: 'certificate',
							children: [
								k.jsxs('h1', {
									children: [
										'Certificate ',
										k.jsx('span', { id: 'sp1', children: 'of' }),
										' ',
										k.jsx('span', { id: 'sp2', children: 'Achievement' }),
									],
								}),
								k.jsx('h2', { children: e.name }),
								k.jsx('p', {
									children:
										'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque officiis illo molestias aperiam dicta voluptas. Vero, recusandae. Dolor atque libero quas animi neque id fugit quo et error quae? Eius.',
								}),
							],
						}),
						k.jsx('div', {
							className: 'badges',
							children: e.links.badges.map((i, o) =>
								o === 0
									? k.jsxs(
											'a',
											{
												className: 'badge',
												href: i,
												children: [
													k.jsx('img', {
														className: 'badge-img',
														src: e.links.images[o],
														alt: 'badge',
													}),
													k.jsx('img', {
														className: 'badge-bg',
														src: e.links.images[o],
														alt: 'badge',
													}),
												],
											},
											o
									  )
									: k.jsxs(
											'a',
											{
												className: 'badge',
												href: i,
												children: [
													k.jsx('img', {
														className: 'badge-img',
														src: e.links.images[o],
														alt: 'badge',
													}),
													k.jsx('img', {
														className: 'badge-bg',
														src: '/badge-bg.png',
														alt: 'badge',
													}),
												],
											},
											o
									  )
							),
						}),
					],
				}),
			}),
			k.jsx(Ax, { data: e }),
		],
	});
}
function Ax({ data: e }) {
	return k.jsx('div', {
		className: 'pbody',
		children: k.jsxs('div', {
			className: 'container',
			children: [
				k.jsxs('div', {
					className: 'logo',
					children: [
						k.jsx('img', {
							className: 'logo-gdg',
							src: '/logo-gdg.png',
							alt: '',
						}),
						k.jsx('img', {
							className: 'logo-srmcem',
							src: '/logo-srmcem.png',
							alt: '',
						}),
					],
				}),
				k.jsxs('div', {
					className: 'certificate',
					children: [
						k.jsxs('h1', {
							children: [
								'Certificate ',
								k.jsx('span', { id: 'sp1', children: 'of' }),
								' ',
								k.jsx('span', { id: 'sp2', children: 'Achievement' }),
							],
						}),
						k.jsx('h2', { children: e.name }),
						k.jsx('p', {
							children:
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque officiis illo molestias aperiam dicta voluptas. Vero, recusandae. Dolor atque libero quas animi neque id fugit quo et error quae? Eius.',
						}),
					],
				}),
				k.jsx('div', {
					className: 'badges',
					children: e.links.badges.map((t, n) =>
						n === 0
							? k.jsxs(
									'a',
									{
										className: 'badge',
										href: t,
										children: [
											k.jsx('img', {
												className: 'badge-img',
												src: e.links.images[n],
												alt: 'badge',
											}),
											k.jsx('img', {
												className: 'badge-bg',
												src: e.links.images[n],
												alt: 'badge',
											}),
										],
									},
									n
							  )
							: k.jsxs(
									'a',
									{
										className: 'badge',
										href: t,
										children: [
											k.jsx('img', {
												className: 'badge-img',
												src: e.links.images[n],
												alt: 'badge',
											}),
											k.jsx('img', {
												className: 'badge-bg',
												src: '/badge-bg.png',
												alt: 'badge',
											}),
										],
									},
									n
							  )
					),
				}),
			],
		}),
	});
}
function Lx() {
	const [e, t] = C.useState();
	window.location.href.split('/')[2].split(':')[0].replace('3000', '8080'),
		C.useEffect(() => {
			e
				? n(e).then((i) => {
						i ? r(i) : (window.location.href = '/error');
				  })
				: console.log('waiting for user input');
		}, [e]);
	const n = async (i) => {
			console.log('fetching data started');
			try {
				const u = await fetch('http://167.71.225.221:8080/' + i, {
					method: 'GET',
				});
				if (!u.ok)
					throw new Error('You might have entered an invalid or wrong URL');
				const c = await u.text();
				for (
					var o = [],
						s = [],
						l = [
							'Badge for Level 3: Google Cloud Adventures',
							'Badge for Get Started with Google Workspace Tools',
							'Badge for Get Started with Dataplex',
							'Badge for Get Started with Looker',
							'Badge for Cloud Functions: 3 Ways',
							'Badge for Monitoring in Google Cloud',
							'Badge for Prompt Design in Vertex AI',
							'Badge for Develop GenAI Apps with Gemini and Streamlit',
							'Badge for Get Started with Pub/Sub',
							'Badge for Analyze Images with the Cloud Vision API',
							'Badge for Cloud Speech API: 3 Ways',
							'Badge for Networking Fundamentals on Google Cloud',
							'Badge for App Engine: 3 Ways',
							'Badge for Get Started with API Gateway',
							'Badge for Get Started with Cloud Storage',
							'Badge for The Basics of Google Cloud Compute',
						],
						a = 0;
					a < l.length;
					a++
				)
					o.push(
						c
							.split('"><img alt="' + l[a] + '" src="')[0]
							.split('<a class="badge-image" href="')[1]
					),
						s.push(c.split('"><img alt="' + l[a] + '" src="')[1].split('"')[0]);
				return {
					name: c.split('<title>')[1].split('|')[0],
					links: { badges: o, images: s },
				};
			} catch (u) {
				console.error(u);
				return;
			}
		},
		r = (i) => {
			console.log('fetched data'),
				localStorage.setItem('data', JSON.stringify(i));
			// var o = JSON.stringify(i);
			window.location.href = '/certificate/view' + o;
		};
	return k.jsx(k.Fragment, {
		children: k.jsxs(Ia, {
			children: [
				k.jsx(on, { path: '/', element: k.jsx(Ex, { setProfileURL: t }) }),
				k.jsx(on, { path: '/view', element: k.jsx(Rx, {}) }),
			],
		}),
	});
}
function Mx() {
	return k.jsxs(Ke.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: { type: 'spring', bounceStiffness: 50 },
		className: 'certificate',
		children: [
			k.jsx(Ke.h1, {
				initial: { y: -100 },
				animate: { y: 0 },
				transition: { type: 'spring', stiffness: 50 },
				children: 'You might have entered an invalid or wrong URL',
			}),
			k.jsx(Ke.a, {
				initial: { y: 100 },
				animate: { y: 0 },
				transition: { type: 'spring', stiffness: 50 },
				href: '/certificate',
				children: k.jsx('h3', {
					children: 'Click This link to head back to try again',
				}),
			}),
		],
	});
}
function Vx() {
	return k.jsx(k.Fragment, {
		children: k.jsxs(Ia, {
			children: [
				k.jsx(on, { path: '/', element: k.jsx(kx, {}) }),
				k.jsx(on, { path: '/certificate/*', element: k.jsx(Lx, {}) }),
				k.jsx(on, { path: '/error', element: k.jsx(Mx, {}) }),
			],
		}),
	});
}
sp(document.getElementById('root')).render(
	k.jsx(t0, {
		children: k.jsx(Ia, {
			children: k.jsx(on, { path: '*', element: k.jsx(Vx, {}) }),
		}),
	})
);
