(function(global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define([ "exports" ], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, 
    factory(global.auth0 = {}));
})(this, (function(exports) {
    "use strict";
    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
    }
    var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    function unwrapExports(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
    }
    function createCommonjsModule(fn, module) {
        return module = {
            exports: {}
        }, fn(module, module.exports), module.exports;
    }
    var processLock = createCommonjsModule((function(module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var ProcessLocking = function() {
            function ProcessLocking() {
                var _this = this;
                this.locked = new Map;
                this.addToLocked = function(key, toAdd) {
                    var callbacks = _this.locked.get(key);
                    if (callbacks === undefined) {
                        if (toAdd === undefined) {
                            _this.locked.set(key, []);
                        } else {
                            _this.locked.set(key, [ toAdd ]);
                        }
                    } else {
                        if (toAdd !== undefined) {
                            callbacks.unshift(toAdd);
                            _this.locked.set(key, callbacks);
                        }
                    }
                };
                this.isLocked = function(key) {
                    return _this.locked.has(key);
                };
                this.lock = function(key) {
                    return new Promise((function(resolve, reject) {
                        if (_this.isLocked(key)) {
                            _this.addToLocked(key, resolve);
                        } else {
                            _this.addToLocked(key);
                            resolve();
                        }
                    }));
                };
                this.unlock = function(key) {
                    var callbacks = _this.locked.get(key);
                    if (callbacks === undefined || callbacks.length === 0) {
                        _this.locked.delete(key);
                        return;
                    }
                    var toCall = callbacks.pop();
                    _this.locked.set(key, callbacks);
                    if (toCall !== undefined) {
                        setTimeout(toCall, 0);
                    }
                };
            }
            ProcessLocking.getInstance = function() {
                if (ProcessLocking.instance === undefined) {
                    ProcessLocking.instance = new ProcessLocking;
                }
                return ProcessLocking.instance;
            };
            return ProcessLocking;
        }();
        function getLock() {
            return ProcessLocking.getInstance();
        }
        exports.default = getLock;
    }));
    unwrapExports(processLock);
    var browserTabsLock = createCommonjsModule((function(module, exports) {
        var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))((function(resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator["throw"](value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    result.done ? resolve(result.value) : new P((function(resolve) {
                        resolve(result.value);
                    })).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
            }));
        };
        var __generator = commonjsGlobal && commonjsGlobal.__generator || function(thisArg, body) {
            var _ = {
                label: 0,
                sent: function() {
                    if (t[0] & 1) throw t[1];
                    return t[1];
                },
                trys: [],
                ops: []
            }, f, y, t, g;
            return g = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
                return this;
            }), g;
            function verb(n) {
                return function(v) {
                    return step([ n, v ]);
                };
            }
            function step(op) {
                if (f) throw new TypeError("Generator is already executing.");
                while (_) try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
                    0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                    if (y = 0, t) op = [ op[0] & 2, t.value ];
                    switch (op[0]) {
                      case 0:
                      case 1:
                        t = op;
                        break;

                      case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false
                        };

                      case 5:
                        _.label++;
                        y = op[1];
                        op = [ 0 ];
                        continue;

                      case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;

                      default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [ 6, e ];
                    y = 0;
                } finally {
                    f = t = 0;
                }
                if (op[0] & 5) throw op[1];
                return {
                    value: op[0] ? op[1] : void 0,
                    done: true
                };
            }
        };
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var LOCK_STORAGE_KEY = "browser-tabs-lock-key";
        function delay(milliseconds) {
            return new Promise((function(resolve) {
                return setTimeout(resolve, milliseconds);
            }));
        }
        function generateRandomString(length) {
            var CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
            var randomstring = "";
            for (var i = 0; i < length; i++) {
                var INDEX = Math.floor(Math.random() * CHARS.length);
                randomstring += CHARS[INDEX];
            }
            return randomstring;
        }
        function getLockId() {
            return Date.now().toString() + generateRandomString(15);
        }
        var SuperTokensLock = function() {
            function SuperTokensLock() {
                this.acquiredIatSet = new Set;
                this.id = getLockId();
                this.acquireLock = this.acquireLock.bind(this);
                this.releaseLock = this.releaseLock.bind(this);
                this.releaseLock__private__ = this.releaseLock__private__.bind(this);
                this.waitForSomethingToChange = this.waitForSomethingToChange.bind(this);
                this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(this);
                if (SuperTokensLock.waiters === undefined) {
                    SuperTokensLock.waiters = [];
                }
            }
            SuperTokensLock.prototype.acquireLock = function(lockKey, timeout) {
                if (timeout === void 0) {
                    timeout = 5e3;
                }
                return __awaiter(this, void 0, void 0, (function() {
                    var iat, MAX_TIME, STORAGE_KEY, STORAGE, lockObj, TIMEOUT_KEY, lockObjPostDelay;
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            iat = Date.now() + generateRandomString(4);
                            MAX_TIME = Date.now() + timeout;
                            STORAGE_KEY = LOCK_STORAGE_KEY + "-" + lockKey;
                            STORAGE = window.localStorage;
                            _a.label = 1;

                          case 1:
                            if (!(Date.now() < MAX_TIME)) return [ 3, 8 ];
                            return [ 4, delay(30) ];

                          case 2:
                            _a.sent();
                            lockObj = STORAGE.getItem(STORAGE_KEY);
                            if (!(lockObj === null)) return [ 3, 5 ];
                            TIMEOUT_KEY = this.id + "-" + lockKey + "-" + iat;
                            return [ 4, delay(Math.floor(Math.random() * 25)) ];

                          case 3:
                            _a.sent();
                            STORAGE.setItem(STORAGE_KEY, JSON.stringify({
                                id: this.id,
                                iat: iat,
                                timeoutKey: TIMEOUT_KEY,
                                timeAcquired: Date.now(),
                                timeRefreshed: Date.now()
                            }));
                            return [ 4, delay(30) ];

                          case 4:
                            _a.sent();
                            lockObjPostDelay = STORAGE.getItem(STORAGE_KEY);
                            if (lockObjPostDelay !== null) {
                                lockObjPostDelay = JSON.parse(lockObjPostDelay);
                                if (lockObjPostDelay.id === this.id && lockObjPostDelay.iat === iat) {
                                    this.acquiredIatSet.add(iat);
                                    this.refreshLockWhileAcquired(STORAGE_KEY, iat);
                                    return [ 2, true ];
                                }
                            }
                            return [ 3, 7 ];

                          case 5:
                            SuperTokensLock.lockCorrector();
                            return [ 4, this.waitForSomethingToChange(MAX_TIME) ];

                          case 6:
                            _a.sent();
                            _a.label = 7;

                          case 7:
                            iat = Date.now() + generateRandomString(4);
                            return [ 3, 1 ];

                          case 8:
                            return [ 2, false ];
                        }
                    }));
                }));
            };
            SuperTokensLock.prototype.refreshLockWhileAcquired = function(storageKey, iat) {
                return __awaiter(this, void 0, void 0, (function() {
                    var _this = this;
                    return __generator(this, (function(_a) {
                        setTimeout((function() {
                            return __awaiter(_this, void 0, void 0, (function() {
                                var STORAGE, lockObj;
                                return __generator(this, (function(_a) {
                                    switch (_a.label) {
                                      case 0:
                                        return [ 4, processLock.default().lock(iat) ];

                                      case 1:
                                        _a.sent();
                                        if (!this.acquiredIatSet.has(iat)) {
                                            processLock.default().unlock(iat);
                                            return [ 2 ];
                                        }
                                        STORAGE = window.localStorage;
                                        lockObj = STORAGE.getItem(storageKey);
                                        if (lockObj !== null) {
                                            lockObj = JSON.parse(lockObj);
                                            lockObj.timeRefreshed = Date.now();
                                            STORAGE.setItem(storageKey, JSON.stringify(lockObj));
                                            processLock.default().unlock(iat);
                                        } else {
                                            processLock.default().unlock(iat);
                                            return [ 2 ];
                                        }
                                        this.refreshLockWhileAcquired(storageKey, iat);
                                        return [ 2 ];
                                    }
                                }));
                            }));
                        }), 1e3);
                        return [ 2 ];
                    }));
                }));
            };
            SuperTokensLock.prototype.waitForSomethingToChange = function(MAX_TIME) {
                return __awaiter(this, void 0, void 0, (function() {
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            return [ 4, new Promise((function(resolve) {
                                var resolvedCalled = false;
                                var startedAt = Date.now();
                                var MIN_TIME_TO_WAIT = 50;
                                var removedListeners = false;
                                function stopWaiting() {
                                    if (!removedListeners) {
                                        window.removeEventListener("storage", stopWaiting);
                                        SuperTokensLock.removeFromWaiting(stopWaiting);
                                        clearTimeout(timeOutId);
                                        removedListeners = true;
                                    }
                                    if (!resolvedCalled) {
                                        resolvedCalled = true;
                                        var timeToWait = MIN_TIME_TO_WAIT - (Date.now() - startedAt);
                                        if (timeToWait > 0) {
                                            setTimeout(resolve, timeToWait);
                                        } else {
                                            resolve();
                                        }
                                    }
                                }
                                window.addEventListener("storage", stopWaiting);
                                SuperTokensLock.addToWaiting(stopWaiting);
                                var timeOutId = setTimeout(stopWaiting, Math.max(0, MAX_TIME - Date.now()));
                            })) ];

                          case 1:
                            _a.sent();
                            return [ 2 ];
                        }
                    }));
                }));
            };
            SuperTokensLock.addToWaiting = function(func) {
                this.removeFromWaiting(func);
                if (SuperTokensLock.waiters === undefined) {
                    return;
                }
                SuperTokensLock.waiters.push(func);
            };
            SuperTokensLock.removeFromWaiting = function(func) {
                if (SuperTokensLock.waiters === undefined) {
                    return;
                }
                SuperTokensLock.waiters = SuperTokensLock.waiters.filter((function(i) {
                    return i !== func;
                }));
            };
            SuperTokensLock.notifyWaiters = function() {
                if (SuperTokensLock.waiters === undefined) {
                    return;
                }
                var waiters = SuperTokensLock.waiters.slice();
                waiters.forEach((function(i) {
                    return i();
                }));
            };
            SuperTokensLock.prototype.releaseLock = function(lockKey) {
                return __awaiter(this, void 0, void 0, (function() {
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            return [ 4, this.releaseLock__private__(lockKey) ];

                          case 1:
                            return [ 2, _a.sent() ];
                        }
                    }));
                }));
            };
            SuperTokensLock.prototype.releaseLock__private__ = function(lockKey) {
                return __awaiter(this, void 0, void 0, (function() {
                    var STORAGE, STORAGE_KEY, lockObj;
                    return __generator(this, (function(_a) {
                        switch (_a.label) {
                          case 0:
                            STORAGE = window.localStorage;
                            STORAGE_KEY = LOCK_STORAGE_KEY + "-" + lockKey;
                            lockObj = STORAGE.getItem(STORAGE_KEY);
                            if (lockObj === null) {
                                return [ 2 ];
                            }
                            lockObj = JSON.parse(lockObj);
                            if (!(lockObj.id === this.id)) return [ 3, 2 ];
                            return [ 4, processLock.default().lock(lockObj.iat) ];

                          case 1:
                            _a.sent();
                            this.acquiredIatSet.delete(lockObj.iat);
                            STORAGE.removeItem(STORAGE_KEY);
                            processLock.default().unlock(lockObj.iat);
                            SuperTokensLock.notifyWaiters();
                            _a.label = 2;

                          case 2:
                            return [ 2 ];
                        }
                    }));
                }));
            };
            SuperTokensLock.lockCorrector = function() {
                var MIN_ALLOWED_TIME = Date.now() - 5e3;
                var STORAGE = window.localStorage;
                var KEYS = Object.keys(STORAGE);
                var notifyWaiters = false;
                for (var i = 0; i < KEYS.length; i++) {
                    var LOCK_KEY = KEYS[i];
                    if (LOCK_KEY.includes(LOCK_STORAGE_KEY)) {
                        var lockObj = STORAGE.getItem(LOCK_KEY);
                        if (lockObj !== null) {
                            lockObj = JSON.parse(lockObj);
                            if (lockObj.timeRefreshed === undefined && lockObj.timeAcquired < MIN_ALLOWED_TIME || lockObj.timeRefreshed !== undefined && lockObj.timeRefreshed < MIN_ALLOWED_TIME) {
                                STORAGE.removeItem(LOCK_KEY);
                                notifyWaiters = true;
                            }
                        }
                    }
                }
                if (notifyWaiters) {
                    SuperTokensLock.notifyWaiters();
                }
            };
            SuperTokensLock.waiters = undefined;
            return SuperTokensLock;
        }();
        exports.default = SuperTokensLock;
    }));
    var Lock = unwrapExports(browserTabsLock);
    var version = "2.1.2";
    const DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS = 60;
    const DEFAULT_POPUP_CONFIG_OPTIONS = {
        timeoutInSeconds: DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS
    };
    const DEFAULT_SILENT_TOKEN_RETRY_COUNT = 3;
    const CLEANUP_IFRAME_TIMEOUT_IN_SECONDS = 2;
    const DEFAULT_FETCH_TIMEOUT_MS = 1e4;
    const CACHE_LOCATION_MEMORY = "memory";
    const MISSING_REFRESH_TOKEN_ERROR_MESSAGE = "Missing Refresh Token";
    const INVALID_REFRESH_TOKEN_ERROR_MESSAGE = "invalid refresh token";
    const DEFAULT_SCOPE = "openid profile email";
    const DEFAULT_SESSION_CHECK_EXPIRY_DAYS = 1;
    const DEFAULT_AUTH0_CLIENT = {
        name: "auth0-spa-js",
        version: version
    };
    const DEFAULT_NOW_PROVIDER = () => Date.now();
    class GenericError extends Error {
        constructor(error, error_description) {
            super(error_description);
            this.error = error;
            this.error_description = error_description;
            Object.setPrototypeOf(this, GenericError.prototype);
        }
        static fromPayload({error: error, error_description: error_description}) {
            return new GenericError(error, error_description);
        }
    }
    class AuthenticationError extends GenericError {
        constructor(error, error_description, state, appState = null) {
            super(error, error_description);
            this.state = state;
            this.appState = appState;
            Object.setPrototypeOf(this, AuthenticationError.prototype);
        }
    }
    class TimeoutError extends GenericError {
        constructor() {
            super("timeout", "Timeout");
            Object.setPrototypeOf(this, TimeoutError.prototype);
        }
    }
    class PopupTimeoutError extends TimeoutError {
        constructor(popup) {
            super();
            this.popup = popup;
            Object.setPrototypeOf(this, PopupTimeoutError.prototype);
        }
    }
    class PopupCancelledError extends GenericError {
        constructor(popup) {
            super("cancelled", "Popup closed");
            this.popup = popup;
            Object.setPrototypeOf(this, PopupCancelledError.prototype);
        }
    }
    class MfaRequiredError extends GenericError {
        constructor(error, error_description, mfa_token) {
            super(error, error_description);
            this.mfa_token = mfa_token;
            Object.setPrototypeOf(this, MfaRequiredError.prototype);
        }
    }
    class MissingRefreshTokenError extends GenericError {
        constructor(audience, scope) {
            super("missing_refresh_token", `Missing Refresh Token (audience: '${valueOrEmptyString(audience, [ "default" ])}', scope: '${valueOrEmptyString(scope)}')`);
            this.audience = audience;
            this.scope = scope;
            Object.setPrototypeOf(this, MissingRefreshTokenError.prototype);
        }
    }
    function valueOrEmptyString(value, exclude = []) {
        return value && !exclude.includes(value) ? value : "";
    }
    const parseAuthenticationResult = queryString => {
        if (queryString.indexOf("#") > -1) {
            queryString = queryString.substring(0, queryString.indexOf("#"));
        }
        const searchParams = new URLSearchParams(queryString);
        return {
            state: searchParams.get("state"),
            code: searchParams.get("code") || undefined,
            error: searchParams.get("error") || undefined,
            error_description: searchParams.get("error_description") || undefined
        };
    };
    const runIframe = (authorizeUrl, eventOrigin, timeoutInSeconds = DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS) => new Promise(((res, rej) => {
        const iframe = window.document.createElement("iframe");
        iframe.setAttribute("width", "0");
        iframe.setAttribute("height", "0");
        iframe.style.display = "none";
        const removeIframe = () => {
            if (window.document.body.contains(iframe)) {
                window.document.body.removeChild(iframe);
                window.removeEventListener("message", iframeEventHandler, false);
            }
        };
        let iframeEventHandler;
        const timeoutSetTimeoutId = setTimeout((() => {
            rej(new TimeoutError);
            removeIframe();
        }), timeoutInSeconds * 1e3);
        iframeEventHandler = function(e) {
            if (e.origin != eventOrigin) return;
            if (!e.data || e.data.type !== "authorization_response") return;
            const eventSource = e.source;
            if (eventSource) {
                eventSource.close();
            }
            e.data.response.error ? rej(GenericError.fromPayload(e.data.response)) : res(e.data.response);
            clearTimeout(timeoutSetTimeoutId);
            window.removeEventListener("message", iframeEventHandler, false);
            setTimeout(removeIframe, CLEANUP_IFRAME_TIMEOUT_IN_SECONDS * 1e3);
        };
        window.addEventListener("message", iframeEventHandler, false);
        window.document.body.appendChild(iframe);
        iframe.setAttribute("src", authorizeUrl);
    }));
    const openPopup = url => {
        const width = 400;
        const height = 600;
        const left = window.screenX + (window.innerWidth - width) / 2;
        const top = window.screenY + (window.innerHeight - height) / 2;
        return window.open(url, "auth0:authorize:popup", `left=${left},top=${top},width=${width},height=${height},resizable,scrollbars=yes,status=1`);
    };
    const runPopup = config => new Promise(((resolve, reject) => {
        let popupEventListener;
        const popupTimer = setInterval((() => {
            if (config.popup && config.popup.closed) {
                clearInterval(popupTimer);
                clearTimeout(timeoutId);
                window.removeEventListener("message", popupEventListener, false);
                reject(new PopupCancelledError(config.popup));
            }
        }), 1e3);
        const timeoutId = setTimeout((() => {
            clearInterval(popupTimer);
            reject(new PopupTimeoutError(config.popup));
            window.removeEventListener("message", popupEventListener, false);
        }), (config.timeoutInSeconds || DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS) * 1e3);
        popupEventListener = function(e) {
            if (!e.data || e.data.type !== "authorization_response") {
                return;
            }
            clearTimeout(timeoutId);
            clearInterval(popupTimer);
            window.removeEventListener("message", popupEventListener, false);
            config.popup.close();
            if (e.data.response.error) {
                return reject(GenericError.fromPayload(e.data.response));
            }
            resolve(e.data.response);
        };
        window.addEventListener("message", popupEventListener);
    }));
    const getCrypto = () => window.crypto;
    const createRandomString = () => {
        const charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";
        let random = "";
        const randomValues = Array.from(getCrypto().getRandomValues(new Uint8Array(43)));
        randomValues.forEach((v => random += charset[v % charset.length]));
        return random;
    };
    const encode = value => btoa(value);
    const stripUndefined = params => Object.keys(params).filter((k => typeof params[k] !== "undefined")).reduce(((acc, key) => Object.assign(Object.assign({}, acc), {
        [key]: params[key]
    })), {});
    const createQueryParams = _a => {
        var {clientId: client_id} = _a, params = __rest(_a, [ "clientId" ]);
        return new URLSearchParams(stripUndefined(Object.assign({
            client_id: client_id
        }, params))).toString();
    };
    const sha256 = async s => {
        const digestOp = getCrypto().subtle.digest({
            name: "SHA-256"
        }, (new TextEncoder).encode(s));
        return await digestOp;
    };
    const urlEncodeB64 = input => {
        const b64Chars = {
            "+": "-",
            "/": "_",
            "=": ""
        };
        return input.replace(/[+/=]/g, (m => b64Chars[m]));
    };
    const decodeB64 = input => decodeURIComponent(atob(input).split("").map((c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))).join(""));
    const urlDecodeB64 = input => decodeB64(input.replace(/_/g, "/").replace(/-/g, "+"));
    const bufferToBase64UrlEncoded = input => {
        const ie11SafeInput = new Uint8Array(input);
        return urlEncodeB64(window.btoa(String.fromCharCode(...Array.from(ie11SafeInput))));
    };
    const validateCrypto = () => {
        if (!getCrypto()) {
            throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");
        }
        if (typeof getCrypto().subtle === "undefined") {
            throw new Error(`\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    `);
        }
    };
    const getDomain = domainUrl => {
        if (!/^https?:\/\//.test(domainUrl)) {
            return `https://${domainUrl}`;
        }
        return domainUrl;
    };
    const getTokenIssuer = (issuer, domainUrl) => {
        if (issuer) {
            return issuer.startsWith("https://") ? issuer : `https://${issuer}/`;
        }
        return `${domainUrl}/`;
    };
    const parseNumber = value => {
        if (typeof value !== "string") {
            return value;
        }
        return parseInt(value, 10) || undefined;
    };
    const sendMessage = (message, to) => new Promise((function(resolve, reject) {
        const messageChannel = new MessageChannel;
        messageChannel.port1.onmessage = function(event) {
            if (event.data.error) {
                reject(new Error(event.data.error));
            } else {
                resolve(event.data);
            }
            messageChannel.port1.close();
        };
        to.postMessage(message, [ messageChannel.port2 ]);
    }));
    const createAbortController = () => new AbortController;
    const dofetch = async (fetchUrl, fetchOptions) => {
        const response = await fetch(fetchUrl, fetchOptions);
        return {
            ok: response.ok,
            json: await response.json()
        };
    };
    const fetchWithoutWorker = async (fetchUrl, fetchOptions, timeout) => {
        const controller = createAbortController();
        fetchOptions.signal = controller.signal;
        let timeoutId;
        return Promise.race([ dofetch(fetchUrl, fetchOptions), new Promise(((_, reject) => {
            timeoutId = setTimeout((() => {
                controller.abort();
                reject(new Error("Timeout when executing 'fetch'"));
            }), timeout);
        })) ]).finally((() => {
            clearTimeout(timeoutId);
        }));
    };
    const fetchWithWorker = async (fetchUrl, audience, scope, fetchOptions, timeout, worker, useFormData) => sendMessage({
        auth: {
            audience: audience,
            scope: scope
        },
        timeout: timeout,
        fetchUrl: fetchUrl,
        fetchOptions: fetchOptions,
        useFormData: useFormData
    }, worker);
    const switchFetch = async (fetchUrl, audience, scope, fetchOptions, worker, useFormData, timeout = DEFAULT_FETCH_TIMEOUT_MS) => {
        if (worker) {
            return fetchWithWorker(fetchUrl, audience, scope, fetchOptions, timeout, worker, useFormData);
        } else {
            return fetchWithoutWorker(fetchUrl, fetchOptions, timeout);
        }
    };
    async function getJSON(url, timeout, audience, scope, options, worker, useFormData) {
        let fetchError = null;
        let response;
        for (let i = 0; i < DEFAULT_SILENT_TOKEN_RETRY_COUNT; i++) {
            try {
                response = await switchFetch(url, audience, scope, options, worker, useFormData, timeout);
                fetchError = null;
                break;
            } catch (e) {
                fetchError = e;
            }
        }
        if (fetchError) {
            throw fetchError;
        }
        const _a = response.json, {error: error, error_description: error_description} = _a, data = __rest(_a, [ "error", "error_description" ]), {ok: ok} = response;
        if (!ok) {
            const errorMessage = error_description || `HTTP error. Unable to fetch ${url}`;
            if (error === "mfa_required") {
                throw new MfaRequiredError(error, errorMessage, data.mfa_token);
            }
            if (error === "missing_refresh_token") {
                throw new MissingRefreshTokenError(audience, scope);
            }
            throw new GenericError(error || "request_error", errorMessage);
        }
        return data;
    }
    async function oauthToken(_a, worker) {
        var {baseUrl: baseUrl, timeout: timeout, audience: audience, scope: scope, auth0Client: auth0Client, useFormData: useFormData} = _a, options = __rest(_a, [ "baseUrl", "timeout", "audience", "scope", "auth0Client", "useFormData" ]);
        const body = useFormData ? createQueryParams(options) : JSON.stringify(options);
        return await getJSON(`${baseUrl}/oauth/token`, timeout, audience || "default", scope, {
            method: "POST",
            body: body,
            headers: {
                "Content-Type": useFormData ? "application/x-www-form-urlencoded" : "application/json",
                "Auth0-Client": btoa(JSON.stringify(auth0Client || DEFAULT_AUTH0_CLIENT))
            }
        }, worker, useFormData);
    }
    const dedupe = arr => Array.from(new Set(arr));
    const getUniqueScopes = (...scopes) => dedupe(scopes.filter(Boolean).join(" ").trim().split(/\s+/)).join(" ");
    const CACHE_KEY_PREFIX = "@@auth0spajs@@";
    const CACHE_KEY_ID_TOKEN_SUFFIX = "@@user@@";
    class CacheKey {
        constructor(data, prefix = CACHE_KEY_PREFIX, suffix) {
            this.prefix = prefix;
            this.suffix = suffix;
            this.clientId = data.clientId;
            this.scope = data.scope;
            this.audience = data.audience;
        }
        toKey() {
            return [ this.prefix, this.clientId, this.audience, this.scope, this.suffix ].filter(Boolean).join("::");
        }
        static fromKey(key) {
            const [prefix, clientId, audience, scope] = key.split("::");
            return new CacheKey({
                clientId: clientId,
                scope: scope,
                audience: audience
            }, prefix);
        }
        static fromCacheEntry(entry) {
            const {scope: scope, audience: audience, client_id: clientId} = entry;
            return new CacheKey({
                scope: scope,
                audience: audience,
                clientId: clientId
            });
        }
    }
    class LocalStorageCache {
        set(key, entry) {
            localStorage.setItem(key, JSON.stringify(entry));
        }
        get(key) {
            const json = window.localStorage.getItem(key);
            if (!json) return;
            try {
                const payload = JSON.parse(json);
                return payload;
            } catch (e) {
                return;
            }
        }
        remove(key) {
            localStorage.removeItem(key);
        }
        allKeys() {
            return Object.keys(window.localStorage).filter((key => key.startsWith(CACHE_KEY_PREFIX)));
        }
    }
    class InMemoryCache {
        constructor() {
            this.enclosedCache = function() {
                let cache = {};
                return {
                    set(key, entry) {
                        cache[key] = entry;
                    },
                    get(key) {
                        const cacheEntry = cache[key];
                        if (!cacheEntry) {
                            return;
                        }
                        return cacheEntry;
                    },
                    remove(key) {
                        delete cache[key];
                    },
                    allKeys() {
                        return Object.keys(cache);
                    }
                };
            }();
        }
    }
    const DEFAULT_EXPIRY_ADJUSTMENT_SECONDS = 0;
    class CacheManager {
        constructor(cache, keyManifest, nowProvider) {
            this.cache = cache;
            this.keyManifest = keyManifest;
            this.nowProvider = nowProvider || DEFAULT_NOW_PROVIDER;
        }
        async setIdToken(clientId, idToken, decodedToken) {
            var _a;
            const cacheKey = this.getIdTokenCacheKey(clientId);
            await this.cache.set(cacheKey, {
                id_token: idToken,
                decodedToken: decodedToken
            });
            await ((_a = this.keyManifest) === null || _a === void 0 ? void 0 : _a.add(cacheKey));
        }
        async getIdToken(cacheKey) {
            const entry = await this.cache.get(this.getIdTokenCacheKey(cacheKey.clientId));
            if (!entry && cacheKey.scope && cacheKey.audience) {
                const entryByScope = await this.get(cacheKey);
                if (!entryByScope) {
                    return;
                }
                if (!entryByScope.id_token || !entryByScope.decodedToken) {
                    return;
                }
                return {
                    id_token: entryByScope.id_token,
                    decodedToken: entryByScope.decodedToken
                };
            }
            if (!entry) {
                return;
            }
            return {
                id_token: entry.id_token,
                decodedToken: entry.decodedToken
            };
        }
        async get(cacheKey, expiryAdjustmentSeconds = DEFAULT_EXPIRY_ADJUSTMENT_SECONDS) {
            var _a;
            let wrappedEntry = await this.cache.get(cacheKey.toKey());
            if (!wrappedEntry) {
                const keys = await this.getCacheKeys();
                if (!keys) return;
                const matchedKey = this.matchExistingCacheKey(cacheKey, keys);
                if (matchedKey) {
                    wrappedEntry = await this.cache.get(matchedKey);
                }
            }
            if (!wrappedEntry) {
                return;
            }
            const now = await this.nowProvider();
            const nowSeconds = Math.floor(now / 1e3);
            if (wrappedEntry.expiresAt - expiryAdjustmentSeconds < nowSeconds) {
                if (wrappedEntry.body.refresh_token) {
                    wrappedEntry.body = {
                        refresh_token: wrappedEntry.body.refresh_token
                    };
                    await this.cache.set(cacheKey.toKey(), wrappedEntry);
                    return wrappedEntry.body;
                }
                await this.cache.remove(cacheKey.toKey());
                await ((_a = this.keyManifest) === null || _a === void 0 ? void 0 : _a.remove(cacheKey.toKey()));
                return;
            }
            return wrappedEntry.body;
        }
        async set(entry) {
            var _a;
            const cacheKey = new CacheKey({
                clientId: entry.client_id,
                scope: entry.scope,
                audience: entry.audience
            });
            const wrappedEntry = await this.wrapCacheEntry(entry);
            await this.cache.set(cacheKey.toKey(), wrappedEntry);
            await ((_a = this.keyManifest) === null || _a === void 0 ? void 0 : _a.add(cacheKey.toKey()));
        }
        async clear(clientId) {
            var _a;
            const keys = await this.getCacheKeys();
            if (!keys) return;
            await keys.filter((key => clientId ? key.includes(clientId) : true)).reduce((async (memo, key) => {
                await memo;
                await this.cache.remove(key);
            }), Promise.resolve());
            await ((_a = this.keyManifest) === null || _a === void 0 ? void 0 : _a.clear());
        }
        async wrapCacheEntry(entry) {
            const now = await this.nowProvider();
            const expiresInTime = Math.floor(now / 1e3) + entry.expires_in;
            return {
                body: entry,
                expiresAt: expiresInTime
            };
        }
        async getCacheKeys() {
            var _a;
            if (this.keyManifest) {
                return (_a = await this.keyManifest.get()) === null || _a === void 0 ? void 0 : _a.keys;
            } else if (this.cache.allKeys) {
                return this.cache.allKeys();
            }
        }
        getIdTokenCacheKey(clientId) {
            return new CacheKey({
                clientId: clientId
            }, CACHE_KEY_PREFIX, CACHE_KEY_ID_TOKEN_SUFFIX).toKey();
        }
        matchExistingCacheKey(keyToMatch, allKeys) {
            return allKeys.filter((key => {
                var _a;
                const cacheKey = CacheKey.fromKey(key);
                const scopeSet = new Set(cacheKey.scope && cacheKey.scope.split(" "));
                const scopesToMatch = ((_a = keyToMatch.scope) === null || _a === void 0 ? void 0 : _a.split(" ")) || [];
                const hasAllScopes = cacheKey.scope && scopesToMatch.reduce(((acc, current) => acc && scopeSet.has(current)), true);
                return cacheKey.prefix === CACHE_KEY_PREFIX && cacheKey.clientId === keyToMatch.clientId && cacheKey.audience === keyToMatch.audience && hasAllScopes;
            }))[0];
        }
    }
    const TRANSACTION_STORAGE_KEY_PREFIX = "a0.spajs.txs";
    class TransactionManager {
        constructor(storage, clientId, cookieDomain) {
            this.storage = storage;
            this.clientId = clientId;
            this.cookieDomain = cookieDomain;
            this.storageKey = `${TRANSACTION_STORAGE_KEY_PREFIX}.${this.clientId}`;
        }
        create(transaction) {
            this.storage.save(this.storageKey, transaction, {
                daysUntilExpire: 1,
                cookieDomain: this.cookieDomain
            });
        }
        get() {
            return this.storage.get(this.storageKey);
        }
        remove() {
            this.storage.remove(this.storageKey, {
                cookieDomain: this.cookieDomain
            });
        }
    }
    const isNumber = n => typeof n === "number";
    const idTokendecoded = [ "iss", "aud", "exp", "nbf", "iat", "jti", "azp", "nonce", "auth_time", "at_hash", "c_hash", "acr", "amr", "sub_jwk", "cnf", "sip_from_tag", "sip_date", "sip_callid", "sip_cseq_num", "sip_via_branch", "orig", "dest", "mky", "events", "toe", "txn", "rph", "sid", "vot", "vtm" ];
    const decode = token => {
        const parts = token.split(".");
        const [header, payload, signature] = parts;
        if (parts.length !== 3 || !header || !payload || !signature) {
            throw new Error("ID token could not be decoded");
        }
        const payloadJSON = JSON.parse(urlDecodeB64(payload));
        const claims = {
            __raw: token
        };
        const user = {};
        Object.keys(payloadJSON).forEach((k => {
            claims[k] = payloadJSON[k];
            if (!idTokendecoded.includes(k)) {
                user[k] = payloadJSON[k];
            }
        }));
        return {
            encoded: {
                header: header,
                payload: payload,
                signature: signature
            },
            header: JSON.parse(urlDecodeB64(header)),
            claims: claims,
            user: user
        };
    };
    const verify = options => {
        if (!options.id_token) {
            throw new Error("ID token is required but missing");
        }
        const decoded = decode(options.id_token);
        if (!decoded.claims.iss) {
            throw new Error("Issuer (iss) claim must be a string present in the ID token");
        }
        if (decoded.claims.iss !== options.iss) {
            throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${options.iss}", found "${decoded.claims.iss}"`);
        }
        if (!decoded.user.sub) {
            throw new Error("Subject (sub) claim must be a string present in the ID token");
        }
        if (decoded.header.alg !== "RS256") {
            throw new Error(`Signature algorithm of "${decoded.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);
        }
        if (!decoded.claims.aud || !(typeof decoded.claims.aud === "string" || Array.isArray(decoded.claims.aud))) {
            throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");
        }
        if (Array.isArray(decoded.claims.aud)) {
            if (!decoded.claims.aud.includes(options.aud)) {
                throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${options.aud}" but was not one of "${decoded.claims.aud.join(", ")}"`);
            }
            if (decoded.claims.aud.length > 1) {
                if (!decoded.claims.azp) {
                    throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");
                }
                if (decoded.claims.azp !== options.aud) {
                    throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${options.aud}", found "${decoded.claims.azp}"`);
                }
            }
        } else if (decoded.claims.aud !== options.aud) {
            throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${options.aud}" but found "${decoded.claims.aud}"`);
        }
        if (options.nonce) {
            if (!decoded.claims.nonce) {
                throw new Error("Nonce (nonce) claim must be a string present in the ID token");
            }
            if (decoded.claims.nonce !== options.nonce) {
                throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${options.nonce}", found "${decoded.claims.nonce}"`);
            }
        }
        if (options.max_age && !isNumber(decoded.claims.auth_time)) {
            throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");
        }
        if (decoded.claims.exp == null || !isNumber(decoded.claims.exp)) {
            throw new Error("Expiration Time (exp) claim must be a number present in the ID token");
        }
        if (!isNumber(decoded.claims.iat)) {
            throw new Error("Issued At (iat) claim must be a number present in the ID token");
        }
        const leeway = options.leeway || 60;
        const now = new Date(options.now || Date.now());
        const expDate = new Date(0);
        expDate.setUTCSeconds(decoded.claims.exp + leeway);
        if (now > expDate) {
            throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${now}) is after expiration time (${expDate})`);
        }
        if (decoded.claims.nbf != null && isNumber(decoded.claims.nbf)) {
            const nbfDate = new Date(0);
            nbfDate.setUTCSeconds(decoded.claims.nbf - leeway);
            if (now < nbfDate) {
                throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${now}) is before ${nbfDate}`);
            }
        }
        if (decoded.claims.auth_time != null && isNumber(decoded.claims.auth_time)) {
            const authTimeDate = new Date(0);
            authTimeDate.setUTCSeconds(parseInt(decoded.claims.auth_time) + options.max_age + leeway);
            if (now > authTimeDate) {
                throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${now}) is after last auth at ${authTimeDate}`);
            }
        }
        if (options.organization) {
            const org = options.organization.trim();
            if (org.startsWith("org_")) {
                const orgId = org;
                if (!decoded.claims.org_id) {
                    throw new Error("Organization ID (org_id) claim must be a string present in the ID token");
                } else if (orgId !== decoded.claims.org_id) {
                    throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${orgId}", found "${decoded.claims.org_id}"`);
                }
            } else {
                const orgName = org.toLowerCase();
                if (!decoded.claims.org_name) {
                    throw new Error("Organization Name (org_name) claim must be a string present in the ID token");
                } else if (orgName !== decoded.claims.org_name) {
                    throw new Error(`Organization Name (org_name) claim mismatch in the ID token; expected "${orgName}", found "${decoded.claims.org_name}"`);
                }
            }
        }
        return decoded;
    };
    var esCookie = createCommonjsModule((function(module, exports) {
        var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
            __assign = Object.assign || function(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        exports.__esModule = true;
        function stringifyAttribute(name, value) {
            if (!value) {
                return "";
            }
            var stringified = "; " + name;
            if (value === true) {
                return stringified;
            }
            return stringified + "=" + value;
        }
        function stringifyAttributes(attributes) {
            if (typeof attributes.expires === "number") {
                var expires = new Date;
                expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e5);
                attributes.expires = expires;
            }
            return stringifyAttribute("Expires", attributes.expires ? attributes.expires.toUTCString() : "") + stringifyAttribute("Domain", attributes.domain) + stringifyAttribute("Path", attributes.path) + stringifyAttribute("Secure", attributes.secure) + stringifyAttribute("SameSite", attributes.sameSite);
        }
        function encode(name, value, attributes) {
            return encodeURIComponent(name).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\(/g, "%28").replace(/\)/g, "%29") + "=" + encodeURIComponent(value).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + stringifyAttributes(attributes);
        }
        exports.encode = encode;
        function parse(cookieString) {
            var result = {};
            var cookies = cookieString ? cookieString.split("; ") : [];
            var rdecode = /(%[\dA-F]{2})+/gi;
            for (var i = 0; i < cookies.length; i++) {
                var parts = cookies[i].split("=");
                var cookie = parts.slice(1).join("=");
                if (cookie.charAt(0) === '"') {
                    cookie = cookie.slice(1, -1);
                }
                try {
                    var name_1 = parts[0].replace(rdecode, decodeURIComponent);
                    result[name_1] = cookie.replace(rdecode, decodeURIComponent);
                } catch (e) {}
            }
            return result;
        }
        exports.parse = parse;
        function getAll() {
            return parse(document.cookie);
        }
        exports.getAll = getAll;
        function get(name) {
            return getAll()[name];
        }
        exports.get = get;
        function set(name, value, attributes) {
            document.cookie = encode(name, value, __assign({
                path: "/"
            }, attributes));
        }
        exports.set = set;
        function remove(name, attributes) {
            set(name, "", __assign(__assign({}, attributes), {
                expires: -1
            }));
        }
        exports.remove = remove;
    }));
    unwrapExports(esCookie);
    esCookie.encode;
    esCookie.parse;
    esCookie.getAll;
    var esCookie_4 = esCookie.get;
    var esCookie_5 = esCookie.set;
    var esCookie_6 = esCookie.remove;
    const CookieStorage = {
        get(key) {
            const value = esCookie_4(key);
            if (typeof value === "undefined") {
                return;
            }
            return JSON.parse(value);
        },
        save(key, value, options) {
            let cookieAttributes = {};
            if ("https:" === window.location.protocol) {
                cookieAttributes = {
                    secure: true,
                    sameSite: "none"
                };
            }
            if (options === null || options === void 0 ? void 0 : options.daysUntilExpire) {
                cookieAttributes.expires = options.daysUntilExpire;
            }
            if (options === null || options === void 0 ? void 0 : options.cookieDomain) {
                cookieAttributes.domain = options.cookieDomain;
            }
            esCookie_5(key, JSON.stringify(value), cookieAttributes);
        },
        remove(key, options) {
            let cookieAttributes = {};
            if (options === null || options === void 0 ? void 0 : options.cookieDomain) {
                cookieAttributes.domain = options.cookieDomain;
            }
            esCookie_6(key, cookieAttributes);
        }
    };
    const LEGACY_PREFIX = "_legacy_";
    const CookieStorageWithLegacySameSite = {
        get(key) {
            const value = CookieStorage.get(key);
            if (value) {
                return value;
            }
            return CookieStorage.get(`${LEGACY_PREFIX}${key}`);
        },
        save(key, value, options) {
            let cookieAttributes = {};
            if ("https:" === window.location.protocol) {
                cookieAttributes = {
                    secure: true
                };
            }
            if (options === null || options === void 0 ? void 0 : options.daysUntilExpire) {
                cookieAttributes.expires = options.daysUntilExpire;
            }
            if (options === null || options === void 0 ? void 0 : options.cookieDomain) {
                cookieAttributes.domain = options.cookieDomain;
            }
            esCookie_5(`${LEGACY_PREFIX}${key}`, JSON.stringify(value), cookieAttributes);
            CookieStorage.save(key, value, options);
        },
        remove(key, options) {
            let cookieAttributes = {};
            if (options === null || options === void 0 ? void 0 : options.cookieDomain) {
                cookieAttributes.domain = options.cookieDomain;
            }
            esCookie_6(key, cookieAttributes);
            CookieStorage.remove(key, options);
            CookieStorage.remove(`${LEGACY_PREFIX}${key}`, options);
        }
    };
    const SessionStorage = {
        get(key) {
            if (typeof sessionStorage === "undefined") {
                return;
            }
            const value = sessionStorage.getItem(key);
            if (value == null) {
                return;
            }
            return JSON.parse(value);
        },
        save(key, value) {
            sessionStorage.setItem(key, JSON.stringify(value));
        },
        remove(key) {
            sessionStorage.removeItem(key);
        }
    };
    function decodeBase64(base64, enableUnicode) {
        var binaryString = atob(base64);
        if (enableUnicode) {
            var binaryView = new Uint8Array(binaryString.length);
            for (var i = 0, n = binaryString.length; i < n; ++i) {
                binaryView[i] = binaryString.charCodeAt(i);
            }
            return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
        }
        return binaryString;
    }
    function createURL(base64, sourcemapArg, enableUnicodeArg) {
        var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
        var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
        var source = decodeBase64(base64, enableUnicode);
        var start = source.indexOf("\n", 10) + 1;
        var body = source.substring(start) + (sourcemap ? "//# sourceMappingURL=" + sourcemap : "");
        var blob = new Blob([ body ], {
            type: "application/javascript"
        });
        return URL.createObjectURL(blob);
    }
    function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
        var url;
        return function WorkerFactory(options) {
            url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
            return new Worker(url, options);
        };
    }
    var WorkerFactory = createBase64WorkerFactory("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24oKSB7CiAgICAidXNlIHN0cmljdCI7CiAgICBjbGFzcyBHZW5lcmljRXJyb3IgZXh0ZW5kcyBFcnJvciB7CiAgICAgICAgY29uc3RydWN0b3IoZXJyb3IsIGVycm9yX2Rlc2NyaXB0aW9uKSB7CiAgICAgICAgICAgIHN1cGVyKGVycm9yX2Rlc2NyaXB0aW9uKTsKICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yOwogICAgICAgICAgICB0aGlzLmVycm9yX2Rlc2NyaXB0aW9uID0gZXJyb3JfZGVzY3JpcHRpb247CiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBHZW5lcmljRXJyb3IucHJvdG90eXBlKTsKICAgICAgICB9CiAgICAgICAgc3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjogZXJyb3IsIGVycm9yX2Rlc2NyaXB0aW9uOiBlcnJvcl9kZXNjcmlwdGlvbn0pIHsKICAgICAgICAgICAgcmV0dXJuIG5ldyBHZW5lcmljRXJyb3IoZXJyb3IsIGVycm9yX2Rlc2NyaXB0aW9uKTsKICAgICAgICB9CiAgICB9CiAgICBjbGFzcyBNaXNzaW5nUmVmcmVzaFRva2VuRXJyb3IgZXh0ZW5kcyBHZW5lcmljRXJyb3IgewogICAgICAgIGNvbnN0cnVjdG9yKGF1ZGllbmNlLCBzY29wZSkgewogICAgICAgICAgICBzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIiwgYE1pc3NpbmcgUmVmcmVzaCBUb2tlbiAoYXVkaWVuY2U6ICcke3ZhbHVlT3JFbXB0eVN0cmluZyhhdWRpZW5jZSwgWyAiZGVmYXVsdCIgXSl9Jywgc2NvcGU6ICcke3ZhbHVlT3JFbXB0eVN0cmluZyhzY29wZSl9JylgKTsKICAgICAgICAgICAgdGhpcy5hdWRpZW5jZSA9IGF1ZGllbmNlOwogICAgICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7CiAgICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBNaXNzaW5nUmVmcmVzaFRva2VuRXJyb3IucHJvdG90eXBlKTsKICAgICAgICB9CiAgICB9CiAgICBmdW5jdGlvbiB2YWx1ZU9yRW1wdHlTdHJpbmcodmFsdWUsIGV4Y2x1ZGUgPSBbXSkgewogICAgICAgIHJldHVybiB2YWx1ZSAmJiAhZXhjbHVkZS5pbmNsdWRlcyh2YWx1ZSkgPyB2YWx1ZSA6ICIiOwogICAgfQogICAgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHsKICAgICAgICB2YXIgdCA9IHt9OwogICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTsKICAgICAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAiZnVuY3Rpb24iKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7CiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07CiAgICAgICAgfQogICAgICAgIHJldHVybiB0OwogICAgfQogICAgY29uc3Qgc3RyaXBVbmRlZmluZWQgPSBwYXJhbXMgPT4gT2JqZWN0LmtleXMocGFyYW1zKS5maWx0ZXIoKGsgPT4gdHlwZW9mIHBhcmFtc1trXSAhPT0gInVuZGVmaW5lZCIpKS5yZWR1Y2UoKChhY2MsIGtleSkgPT4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBhY2MpLCB7CiAgICAgICAgW2tleV06IHBhcmFtc1trZXldCiAgICB9KSksIHt9KTsKICAgIGNvbnN0IGNyZWF0ZVF1ZXJ5UGFyYW1zID0gX2EgPT4gewogICAgICAgIHZhciB7Y2xpZW50SWQ6IGNsaWVudF9pZH0gPSBfYSwgcGFyYW1zID0gX19yZXN0KF9hLCBbICJjbGllbnRJZCIgXSk7CiAgICAgICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoc3RyaXBVbmRlZmluZWQoT2JqZWN0LmFzc2lnbih7CiAgICAgICAgICAgIGNsaWVudF9pZDogY2xpZW50X2lkCiAgICAgICAgfSwgcGFyYW1zKSkpLnRvU3RyaW5nKCk7CiAgICB9OwogICAgbGV0IHJlZnJlc2hUb2tlbnMgPSB7fTsKICAgIGNvbnN0IGNhY2hlS2V5ID0gKGF1ZGllbmNlLCBzY29wZSkgPT4gYCR7YXVkaWVuY2V9fCR7c2NvcGV9YDsKICAgIGNvbnN0IGdldFJlZnJlc2hUb2tlbiA9IChhdWRpZW5jZSwgc2NvcGUpID0+IHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV07CiAgICBjb25zdCBzZXRSZWZyZXNoVG9rZW4gPSAocmVmcmVzaFRva2VuLCBhdWRpZW5jZSwgc2NvcGUpID0+IHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV0gPSByZWZyZXNoVG9rZW47CiAgICBjb25zdCBkZWxldGVSZWZyZXNoVG9rZW4gPSAoYXVkaWVuY2UsIHNjb3BlKSA9PiBkZWxldGUgcmVmcmVzaFRva2Vuc1tjYWNoZUtleShhdWRpZW5jZSwgc2NvcGUpXTsKICAgIGNvbnN0IHdhaXQgPSB0aW1lID0+IG5ldyBQcm9taXNlKChyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSkpKTsKICAgIGNvbnN0IGZvcm1EYXRhVG9PYmplY3QgPSBmb3JtRGF0YSA9PiB7CiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGZvcm1EYXRhKTsKICAgICAgICBjb25zdCBwYXJzZWRRdWVyeSA9IHt9OwogICAgICAgIHF1ZXJ5UGFyYW1zLmZvckVhY2goKCh2YWwsIGtleSkgPT4gewogICAgICAgICAgICBwYXJzZWRRdWVyeVtrZXldID0gdmFsOwogICAgICAgIH0pKTsKICAgICAgICByZXR1cm4gcGFyc2VkUXVlcnk7CiAgICB9OwogICAgY29uc3QgbWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoe2RhdGE6IHt0aW1lb3V0OiB0aW1lb3V0LCBhdXRoOiBhdXRoLCBmZXRjaFVybDogZmV0Y2hVcmwsIGZldGNoT3B0aW9uczogZmV0Y2hPcHRpb25zLCB1c2VGb3JtRGF0YTogdXNlRm9ybURhdGF9LCBwb3J0czogW3BvcnRdfSkgPT4gewogICAgICAgIGxldCBqc29uOwogICAgICAgIGNvbnN0IHthdWRpZW5jZTogYXVkaWVuY2UsIHNjb3BlOiBzY29wZX0gPSBhdXRoIHx8IHt9OwogICAgICAgIHRyeSB7CiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB1c2VGb3JtRGF0YSA/IGZvcm1EYXRhVG9PYmplY3QoZmV0Y2hPcHRpb25zLmJvZHkpIDogSlNPTi5wYXJzZShmZXRjaE9wdGlvbnMuYm9keSk7CiAgICAgICAgICAgIGlmICghYm9keS5yZWZyZXNoX3Rva2VuICYmIGJvZHkuZ3JhbnRfdHlwZSA9PT0gInJlZnJlc2hfdG9rZW4iKSB7CiAgICAgICAgICAgICAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBnZXRSZWZyZXNoVG9rZW4oYXVkaWVuY2UsIHNjb3BlKTsKICAgICAgICAgICAgICAgIGlmICghcmVmcmVzaFRva2VuKSB7CiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IE1pc3NpbmdSZWZyZXNoVG9rZW5FcnJvcihhdWRpZW5jZSwgc2NvcGUpOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmJvZHkgPSB1c2VGb3JtRGF0YSA/IGNyZWF0ZVF1ZXJ5UGFyYW1zKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYm9keSksIHsKICAgICAgICAgICAgICAgICAgICByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4KICAgICAgICAgICAgICAgIH0pKSA6IEpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYm9keSksIHsKICAgICAgICAgICAgICAgICAgICByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4KICAgICAgICAgICAgICAgIH0pKTsKICAgICAgICAgICAgfQogICAgICAgICAgICBsZXQgYWJvcnRDb250cm9sbGVyOwogICAgICAgICAgICBpZiAodHlwZW9mIEFib3J0Q29udHJvbGxlciA9PT0gImZ1bmN0aW9uIikgewogICAgICAgICAgICAgICAgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcjsKICAgICAgICAgICAgICAgIGZldGNoT3B0aW9ucy5zaWduYWwgPSBhYm9ydENvbnRyb2xsZXIuc2lnbmFsOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGxldCByZXNwb25zZTsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgUHJvbWlzZS5yYWNlKFsgd2FpdCh0aW1lb3V0KSwgZmV0Y2goZmV0Y2hVcmwsIE9iamVjdC5hc3NpZ24oe30sIGZldGNoT3B0aW9ucykpIF0pOwogICAgICAgICAgICB9IGNhdGNoIChlcnJvcikgewogICAgICAgICAgICAgICAgcG9ydC5wb3N0TWVzc2FnZSh7CiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgICAgcmV0dXJuOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlmICghcmVzcG9uc2UpIHsKICAgICAgICAgICAgICAgIGlmIChhYm9ydENvbnRyb2xsZXIpIGFib3J0Q29udHJvbGxlci5hYm9ydCgpOwogICAgICAgICAgICAgICAgcG9ydC5wb3N0TWVzc2FnZSh7CiAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICJUaW1lb3V0IHdoZW4gZXhlY3V0aW5nICdmZXRjaCciCiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgfQogICAgICAgICAgICBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOwogICAgICAgICAgICBpZiAoanNvbi5yZWZyZXNoX3Rva2VuKSB7CiAgICAgICAgICAgICAgICBzZXRSZWZyZXNoVG9rZW4oanNvbi5yZWZyZXNoX3Rva2VuLCBhdWRpZW5jZSwgc2NvcGUpOwogICAgICAgICAgICAgICAgZGVsZXRlIGpzb24ucmVmcmVzaF90b2tlbjsKICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGRlbGV0ZVJlZnJlc2hUb2tlbihhdWRpZW5jZSwgc2NvcGUpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2UoewogICAgICAgICAgICAgICAgb2s6IHJlc3BvbnNlLm9rLAogICAgICAgICAgICAgICAganNvbjoganNvbgogICAgICAgICAgICB9KTsKICAgICAgICB9IGNhdGNoIChlcnJvcikgewogICAgICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKHsKICAgICAgICAgICAgICAgIG9rOiBmYWxzZSwKICAgICAgICAgICAgICAgIGpzb246IHsKICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IuZXJyb3IsCiAgICAgICAgICAgICAgICAgICAgZXJyb3JfZGVzY3JpcHRpb246IGVycm9yLm1lc3NhZ2UKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfSk7CiAgICAgICAgfQogICAgfTsKICAgIHsKICAgICAgICBhZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgbWVzc2FnZUhhbmRsZXIpOwogICAgfQp9KSgpOwoK", null, false);
    const singlePromiseMap = {};
    const singlePromise = (cb, key) => {
        let promise = singlePromiseMap[key];
        if (!promise) {
            promise = cb().finally((() => {
                delete singlePromiseMap[key];
                promise = null;
            }));
            singlePromiseMap[key] = promise;
        }
        return promise;
    };
    const retryPromise = async (cb, maxNumberOfRetries = 3) => {
        for (let i = 0; i < maxNumberOfRetries; i++) {
            if (await cb()) {
                return true;
            }
        }
        return false;
    };
    class CacheKeyManifest {
        constructor(cache, clientId) {
            this.cache = cache;
            this.clientId = clientId;
            this.manifestKey = this.createManifestKeyFrom(this.clientId);
        }
        async add(key) {
            var _a;
            const keys = new Set(((_a = await this.cache.get(this.manifestKey)) === null || _a === void 0 ? void 0 : _a.keys) || []);
            keys.add(key);
            await this.cache.set(this.manifestKey, {
                keys: [ ...keys ]
            });
        }
        async remove(key) {
            const entry = await this.cache.get(this.manifestKey);
            if (entry) {
                const keys = new Set(entry.keys);
                keys.delete(key);
                if (keys.size > 0) {
                    return await this.cache.set(this.manifestKey, {
                        keys: [ ...keys ]
                    });
                }
                return await this.cache.remove(this.manifestKey);
            }
        }
        get() {
            return this.cache.get(this.manifestKey);
        }
        clear() {
            return this.cache.remove(this.manifestKey);
        }
        createManifestKeyFrom(clientId) {
            return `${CACHE_KEY_PREFIX}::${clientId}`;
        }
    }
    const GET_TOKEN_SILENTLY_LOCK_KEY = "auth0.lock.getTokenSilently";
    const buildOrganizationHintCookieName = clientId => `auth0.${clientId}.organization_hint`;
    const OLD_IS_AUTHENTICATED_COOKIE_NAME = "auth0.is.authenticated";
    const buildIsAuthenticatedCookieName = clientId => `auth0.${clientId}.is.authenticated`;
    const cacheLocationBuilders = {
        memory: () => (new InMemoryCache).enclosedCache,
        localstorage: () => new LocalStorageCache
    };
    const cacheFactory = location => cacheLocationBuilders[location];
    const getAuthorizeParams = (clientOptions, scope, authorizationParams, state, nonce, code_challenge, redirect_uri, response_mode) => Object.assign(Object.assign(Object.assign({
        client_id: clientOptions.clientId
    }, clientOptions.authorizationParams), authorizationParams), {
        scope: getUniqueScopes(scope, authorizationParams.scope),
        response_type: "code",
        response_mode: response_mode || "query",
        state: state,
        nonce: nonce,
        redirect_uri: redirect_uri || clientOptions.authorizationParams.redirect_uri,
        code_challenge: code_challenge,
        code_challenge_method: "S256"
    });
    const patchOpenUrlWithOnRedirect = options => {
        const {openUrl: openUrl, onRedirect: onRedirect} = options, originalOptions = __rest(options, [ "openUrl", "onRedirect" ]);
        const result = Object.assign(Object.assign({}, originalOptions), {
            openUrl: openUrl === false || openUrl ? openUrl : onRedirect
        });
        return result;
    };
    const lock = new Lock;
    class Auth0Client {
        constructor(options) {
            this.userCache = (new InMemoryCache).enclosedCache;
            this.defaultOptions = {
                authorizationParams: {
                    scope: DEFAULT_SCOPE
                },
                useRefreshTokensFallback: false,
                useFormData: true
            };
            this._releaseLockOnPageHide = async () => {
                await lock.releaseLock(GET_TOKEN_SILENTLY_LOCK_KEY);
                window.removeEventListener("pagehide", this._releaseLockOnPageHide);
            };
            this.options = Object.assign(Object.assign(Object.assign({}, this.defaultOptions), options), {
                authorizationParams: Object.assign(Object.assign({}, this.defaultOptions.authorizationParams), options.authorizationParams)
            });
            typeof window !== "undefined" && validateCrypto();
            if (options.cache && options.cacheLocation) {
                console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`.");
            }
            let cacheLocation;
            let cache;
            if (options.cache) {
                cache = options.cache;
            } else {
                cacheLocation = options.cacheLocation || CACHE_LOCATION_MEMORY;
                if (!cacheFactory(cacheLocation)) {
                    throw new Error(`Invalid cache location "${cacheLocation}"`);
                }
                cache = cacheFactory(cacheLocation)();
            }
            this.httpTimeoutMs = options.httpTimeoutInSeconds ? options.httpTimeoutInSeconds * 1e3 : DEFAULT_FETCH_TIMEOUT_MS;
            this.cookieStorage = options.legacySameSiteCookie === false ? CookieStorage : CookieStorageWithLegacySameSite;
            this.orgHintCookieName = buildOrganizationHintCookieName(this.options.clientId);
            this.isAuthenticatedCookieName = buildIsAuthenticatedCookieName(this.options.clientId);
            this.sessionCheckExpiryDays = options.sessionCheckExpiryDays || DEFAULT_SESSION_CHECK_EXPIRY_DAYS;
            const transactionStorage = options.useCookiesForTransactions ? this.cookieStorage : SessionStorage;
            this.scope = getUniqueScopes("openid", this.options.authorizationParams.scope, this.options.useRefreshTokens ? "offline_access" : "");
            this.transactionManager = new TransactionManager(transactionStorage, this.options.clientId, this.options.cookieDomain);
            this.nowProvider = this.options.nowProvider || DEFAULT_NOW_PROVIDER;
            this.cacheManager = new CacheManager(cache, !cache.allKeys ? new CacheKeyManifest(cache, this.options.clientId) : undefined, this.nowProvider);
            this.domainUrl = getDomain(this.options.domain);
            this.tokenIssuer = getTokenIssuer(this.options.issuer, this.domainUrl);
            if (typeof window !== "undefined" && window.Worker && this.options.useRefreshTokens && cacheLocation === CACHE_LOCATION_MEMORY) {
                this.worker = new WorkerFactory;
            }
        }
        _url(path) {
            const auth0Client = encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client || DEFAULT_AUTH0_CLIENT)));
            return `${this.domainUrl}${path}&auth0Client=${auth0Client}`;
        }
        _authorizeUrl(authorizeOptions) {
            return this._url(`/authorize?${createQueryParams(authorizeOptions)}`);
        }
        async _verifyIdToken(id_token, nonce, organization) {
            const now = await this.nowProvider();
            return verify({
                iss: this.tokenIssuer,
                aud: this.options.clientId,
                id_token: id_token,
                nonce: nonce,
                organization: organization,
                leeway: this.options.leeway,
                max_age: parseNumber(this.options.authorizationParams.max_age),
                now: now
            });
        }
        _processOrgHint(organization) {
            if (organization) {
                this.cookieStorage.save(this.orgHintCookieName, organization, {
                    daysUntilExpire: this.sessionCheckExpiryDays,
                    cookieDomain: this.options.cookieDomain
                });
            } else {
                this.cookieStorage.remove(this.orgHintCookieName, {
                    cookieDomain: this.options.cookieDomain
                });
            }
        }
        async _prepareAuthorizeUrl(authorizationParams, authorizeOptions, fallbackRedirectUri) {
            const state = encode(createRandomString());
            const nonce = encode(createRandomString());
            const code_verifier = createRandomString();
            const code_challengeBuffer = await sha256(code_verifier);
            const code_challenge = bufferToBase64UrlEncoded(code_challengeBuffer);
            const params = getAuthorizeParams(this.options, this.scope, authorizationParams, state, nonce, code_challenge, authorizationParams.redirect_uri || this.options.authorizationParams.redirect_uri || fallbackRedirectUri, authorizeOptions === null || authorizeOptions === void 0 ? void 0 : authorizeOptions.response_mode);
            const url = this._authorizeUrl(params);
            return {
                nonce: nonce,
                code_verifier: code_verifier,
                scope: params.scope,
                audience: params.audience || "default",
                redirect_uri: params.redirect_uri,
                state: state,
                url: url
            };
        }
        async loginWithPopup(options, config) {
            var _a;
            options = options || {};
            config = config || {};
            if (!config.popup) {
                config.popup = openPopup("");
                if (!config.popup) {
                    throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");
                }
            }
            const params = await this._prepareAuthorizeUrl(options.authorizationParams || {}, {
                response_mode: "web_message"
            }, window.location.origin);
            config.popup.location.href = params.url;
            const codeResult = await runPopup(Object.assign(Object.assign({}, config), {
                timeoutInSeconds: config.timeoutInSeconds || this.options.authorizeTimeoutInSeconds || DEFAULT_AUTHORIZE_TIMEOUT_IN_SECONDS
            }));
            if (params.state !== codeResult.state) {
                throw new GenericError("state_mismatch", "Invalid state");
            }
            const organization = ((_a = options.authorizationParams) === null || _a === void 0 ? void 0 : _a.organization) || this.options.authorizationParams.organization;
            await this._requestToken({
                audience: params.audience,
                scope: params.scope,
                code_verifier: params.code_verifier,
                grant_type: "authorization_code",
                code: codeResult.code,
                redirect_uri: params.redirect_uri
            }, {
                nonceIn: params.nonce,
                organization: organization
            });
        }
        async getUser() {
            var _a;
            const cache = await this._getIdTokenFromCache();
            return (_a = cache === null || cache === void 0 ? void 0 : cache.decodedToken) === null || _a === void 0 ? void 0 : _a.user;
        }
        async getIdTokenClaims() {
            var _a;
            const cache = await this._getIdTokenFromCache();
            return (_a = cache === null || cache === void 0 ? void 0 : cache.decodedToken) === null || _a === void 0 ? void 0 : _a.claims;
        }
        async loginWithRedirect(options = {}) {
            var _a;
            const _b = patchOpenUrlWithOnRedirect(options), {openUrl: openUrl, fragment: fragment, appState: appState} = _b, urlOptions = __rest(_b, [ "openUrl", "fragment", "appState" ]);
            const organization = ((_a = urlOptions.authorizationParams) === null || _a === void 0 ? void 0 : _a.organization) || this.options.authorizationParams.organization;
            const _c = await this._prepareAuthorizeUrl(urlOptions.authorizationParams || {}), {url: url} = _c, transaction = __rest(_c, [ "url" ]);
            this.transactionManager.create(Object.assign(Object.assign(Object.assign({}, transaction), {
                appState: appState
            }), organization && {
                organization: organization
            }));
            const urlWithFragment = fragment ? `${url}#${fragment}` : url;
            if (openUrl) {
                await openUrl(urlWithFragment);
            } else {
                window.location.assign(urlWithFragment);
            }
        }
        async handleRedirectCallback(url = window.location.href) {
            const queryStringFragments = url.split("?").slice(1);
            if (queryStringFragments.length === 0) {
                throw new Error("There are no query params available for parsing.");
            }
            const {state: state, code: code, error: error, error_description: error_description} = parseAuthenticationResult(queryStringFragments.join(""));
            const transaction = this.transactionManager.get();
            if (!transaction) {
                throw new GenericError("missing_transaction", "Invalid state");
            }
            this.transactionManager.remove();
            if (error) {
                throw new AuthenticationError(error, error_description || error, state, transaction.appState);
            }
            if (!transaction.code_verifier || transaction.state && transaction.state !== state) {
                throw new GenericError("state_mismatch", "Invalid state");
            }
            const organization = transaction.organization;
            const nonceIn = transaction.nonce;
            const redirect_uri = transaction.redirect_uri;
            await this._requestToken(Object.assign({
                audience: transaction.audience,
                scope: transaction.scope,
                code_verifier: transaction.code_verifier,
                grant_type: "authorization_code",
                code: code
            }, redirect_uri ? {
                redirect_uri: redirect_uri
            } : {}), {
                nonceIn: nonceIn,
                organization: organization
            });
            return {
                appState: transaction.appState
            };
        }
        async checkSession(options) {
            if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
                if (!this.cookieStorage.get(OLD_IS_AUTHENTICATED_COOKIE_NAME)) {
                    return;
                } else {
                    this.cookieStorage.save(this.isAuthenticatedCookieName, true, {
                        daysUntilExpire: this.sessionCheckExpiryDays,
                        cookieDomain: this.options.cookieDomain
                    });
                    this.cookieStorage.remove(OLD_IS_AUTHENTICATED_COOKIE_NAME);
                }
            }
            try {
                await this.getTokenSilently(options);
            } catch (_) {}
        }
        async getTokenSilently(options = {}) {
            var _a;
            const localOptions = Object.assign(Object.assign({
                cacheMode: "on"
            }, options), {
                authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), options.authorizationParams), {
                    scope: getUniqueScopes(this.scope, (_a = options.authorizationParams) === null || _a === void 0 ? void 0 : _a.scope)
                })
            });
            const result = await singlePromise((() => this._getTokenSilently(localOptions)), `${this.options.clientId}::${localOptions.authorizationParams.audience}::${localOptions.authorizationParams.scope}`);
            return options.detailedResponse ? result : result === null || result === void 0 ? void 0 : result.access_token;
        }
        async _getTokenSilently(options) {
            const {cacheMode: cacheMode} = options, getTokenOptions = __rest(options, [ "cacheMode" ]);
            if (cacheMode !== "off") {
                const entry = await this._getEntryFromCache({
                    scope: getTokenOptions.authorizationParams.scope,
                    audience: getTokenOptions.authorizationParams.audience || "default",
                    clientId: this.options.clientId
                });
                if (entry) {
                    return entry;
                }
            }
            if (cacheMode === "cache-only") {
                return;
            }
            if (await retryPromise((() => lock.acquireLock(GET_TOKEN_SILENTLY_LOCK_KEY, 5e3)), 10)) {
                try {
                    window.addEventListener("pagehide", this._releaseLockOnPageHide);
                    if (cacheMode !== "off") {
                        const entry = await this._getEntryFromCache({
                            scope: getTokenOptions.authorizationParams.scope,
                            audience: getTokenOptions.authorizationParams.audience || "default",
                            clientId: this.options.clientId
                        });
                        if (entry) {
                            return entry;
                        }
                    }
                    const authResult = this.options.useRefreshTokens ? await this._getTokenUsingRefreshToken(getTokenOptions) : await this._getTokenFromIFrame(getTokenOptions);
                    const {id_token: id_token, access_token: access_token, oauthTokenScope: oauthTokenScope, expires_in: expires_in} = authResult;
                    return Object.assign(Object.assign({
                        id_token: id_token,
                        access_token: access_token
                    }, oauthTokenScope ? {
                        scope: oauthTokenScope
                    } : null), {
                        expires_in: expires_in
                    });
                } finally {
                    await lock.releaseLock(GET_TOKEN_SILENTLY_LOCK_KEY);
                    window.removeEventListener("pagehide", this._releaseLockOnPageHide);
                }
            } else {
                throw new TimeoutError;
            }
        }
        async getTokenWithPopup(options = {}, config = {}) {
            var _a;
            const localOptions = Object.assign(Object.assign({}, options), {
                authorizationParams: Object.assign(Object.assign(Object.assign({}, this.options.authorizationParams), options.authorizationParams), {
                    scope: getUniqueScopes(this.scope, (_a = options.authorizationParams) === null || _a === void 0 ? void 0 : _a.scope)
                })
            });
            config = Object.assign(Object.assign({}, DEFAULT_POPUP_CONFIG_OPTIONS), config);
            await this.loginWithPopup(localOptions, config);
            const cache = await this.cacheManager.get(new CacheKey({
                scope: localOptions.authorizationParams.scope,
                audience: localOptions.authorizationParams.audience || "default",
                clientId: this.options.clientId
            }));
            return cache.access_token;
        }
        async isAuthenticated() {
            const user = await this.getUser();
            return !!user;
        }
        _buildLogoutUrl(options) {
            if (options.clientId !== null) {
                options.clientId = options.clientId || this.options.clientId;
            } else {
                delete options.clientId;
            }
            const _a = options.logoutParams || {}, {federated: federated} = _a, logoutOptions = __rest(_a, [ "federated" ]);
            const federatedQuery = federated ? `&federated` : "";
            const url = this._url(`/v2/logout?${createQueryParams(Object.assign({
                clientId: options.clientId
            }, logoutOptions))}`);
            return url + federatedQuery;
        }
        async logout(options = {}) {
            const _a = patchOpenUrlWithOnRedirect(options), {openUrl: openUrl} = _a, logoutOptions = __rest(_a, [ "openUrl" ]);
            if (options.clientId === null) {
                await this.cacheManager.clear();
            } else {
                await this.cacheManager.clear(options.clientId || this.options.clientId);
            }
            this.cookieStorage.remove(this.orgHintCookieName, {
                cookieDomain: this.options.cookieDomain
            });
            this.cookieStorage.remove(this.isAuthenticatedCookieName, {
                cookieDomain: this.options.cookieDomain
            });
            this.userCache.remove(CACHE_KEY_ID_TOKEN_SUFFIX);
            const url = this._buildLogoutUrl(logoutOptions);
            if (openUrl) {
                await openUrl(url);
            } else if (openUrl !== false) {
                window.location.assign(url);
            }
        }
        async _getTokenFromIFrame(options) {
            const params = Object.assign(Object.assign({}, options.authorizationParams), {
                prompt: "none"
            });
            const orgHint = this.cookieStorage.get(this.orgHintCookieName);
            if (orgHint && !params.organization) {
                params.organization = orgHint;
            }
            const {url: url, state: stateIn, nonce: nonceIn, code_verifier: code_verifier, redirect_uri: redirect_uri, scope: scope, audience: audience} = await this._prepareAuthorizeUrl(params, {
                response_mode: "web_message"
            }, window.location.origin);
            try {
                if (window.crossOriginIsolated) {
                    throw new GenericError("login_required", "The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");
                }
                const authorizeTimeout = options.timeoutInSeconds || this.options.authorizeTimeoutInSeconds;
                const codeResult = await runIframe(url, this.domainUrl, authorizeTimeout);
                if (stateIn !== codeResult.state) {
                    throw new GenericError("state_mismatch", "Invalid state");
                }
                const tokenResult = await this._requestToken(Object.assign(Object.assign({}, options.authorizationParams), {
                    code_verifier: code_verifier,
                    code: codeResult.code,
                    grant_type: "authorization_code",
                    redirect_uri: redirect_uri,
                    timeout: options.authorizationParams.timeout || this.httpTimeoutMs
                }), {
                    nonceIn: nonceIn,
                    organization: params.organization
                });
                return Object.assign(Object.assign({}, tokenResult), {
                    scope: scope,
                    oauthTokenScope: tokenResult.scope,
                    audience: audience
                });
            } catch (e) {
                if (e.error === "login_required") {
                    this.logout({
                        openUrl: false
                    });
                }
                throw e;
            }
        }
        async _getTokenUsingRefreshToken(options) {
            const cache = await this.cacheManager.get(new CacheKey({
                scope: options.authorizationParams.scope,
                audience: options.authorizationParams.audience || "default",
                clientId: this.options.clientId
            }));
            if ((!cache || !cache.refresh_token) && !this.worker) {
                if (this.options.useRefreshTokensFallback) {
                    return await this._getTokenFromIFrame(options);
                }
                throw new MissingRefreshTokenError(options.authorizationParams.audience || "default", options.authorizationParams.scope);
            }
            const redirect_uri = options.authorizationParams.redirect_uri || this.options.authorizationParams.redirect_uri || window.location.origin;
            const timeout = typeof options.timeoutInSeconds === "number" ? options.timeoutInSeconds * 1e3 : null;
            try {
                const tokenResult = await this._requestToken(Object.assign(Object.assign(Object.assign({}, options.authorizationParams), {
                    grant_type: "refresh_token",
                    refresh_token: cache && cache.refresh_token,
                    redirect_uri: redirect_uri
                }), timeout && {
                    timeout: timeout
                }));
                return Object.assign(Object.assign({}, tokenResult), {
                    scope: options.authorizationParams.scope,
                    oauthTokenScope: tokenResult.scope,
                    audience: options.authorizationParams.audience || "default"
                });
            } catch (e) {
                if ((e.message.indexOf(MISSING_REFRESH_TOKEN_ERROR_MESSAGE) > -1 || e.message && e.message.indexOf(INVALID_REFRESH_TOKEN_ERROR_MESSAGE) > -1) && this.options.useRefreshTokensFallback) {
                    return await this._getTokenFromIFrame(options);
                }
                throw e;
            }
        }
        async _saveEntryInCache(entry) {
            const {id_token: id_token, decodedToken: decodedToken} = entry, entryWithoutIdToken = __rest(entry, [ "id_token", "decodedToken" ]);
            this.userCache.set(CACHE_KEY_ID_TOKEN_SUFFIX, {
                id_token: id_token,
                decodedToken: decodedToken
            });
            await this.cacheManager.setIdToken(this.options.clientId, entry.id_token, entry.decodedToken);
            await this.cacheManager.set(entryWithoutIdToken);
        }
        async _getIdTokenFromCache() {
            const audience = this.options.authorizationParams.audience || "default";
            const cache = await this.cacheManager.getIdToken(new CacheKey({
                clientId: this.options.clientId,
                audience: audience,
                scope: this.scope
            }));
            const currentCache = this.userCache.get(CACHE_KEY_ID_TOKEN_SUFFIX);
            if (cache && cache.id_token === (currentCache === null || currentCache === void 0 ? void 0 : currentCache.id_token)) {
                return currentCache;
            }
            this.userCache.set(CACHE_KEY_ID_TOKEN_SUFFIX, cache);
            return cache;
        }
        async _getEntryFromCache({scope: scope, audience: audience, clientId: clientId}) {
            const entry = await this.cacheManager.get(new CacheKey({
                scope: scope,
                audience: audience,
                clientId: clientId
            }), 60);
            if (entry && entry.access_token) {
                const {access_token: access_token, oauthTokenScope: oauthTokenScope, expires_in: expires_in} = entry;
                const cache = await this._getIdTokenFromCache();
                return cache && Object.assign(Object.assign({
                    id_token: cache.id_token,
                    access_token: access_token
                }, oauthTokenScope ? {
                    scope: oauthTokenScope
                } : null), {
                    expires_in: expires_in
                });
            }
        }
        async _requestToken(options, additionalParameters) {
            const {nonceIn: nonceIn, organization: organization} = additionalParameters || {};
            const authResult = await oauthToken(Object.assign({
                baseUrl: this.domainUrl,
                client_id: this.options.clientId,
                auth0Client: this.options.auth0Client,
                useFormData: this.options.useFormData,
                timeout: this.httpTimeoutMs
            }, options), this.worker);
            const decodedToken = await this._verifyIdToken(authResult.id_token, nonceIn, organization);
            await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({}, authResult), {
                decodedToken: decodedToken,
                scope: options.scope,
                audience: options.audience || "default"
            }), authResult.scope ? {
                oauthTokenScope: authResult.scope
            } : null), {
                client_id: this.options.clientId
            }));
            this.cookieStorage.save(this.isAuthenticatedCookieName, true, {
                daysUntilExpire: this.sessionCheckExpiryDays,
                cookieDomain: this.options.cookieDomain
            });
            this._processOrgHint(organization || decodedToken.claims.org_id);
            return Object.assign(Object.assign({}, authResult), {
                decodedToken: decodedToken
            });
        }
    }
    class User {}
    async function createAuth0Client(options) {
        const auth0 = new Auth0Client(options);
        await auth0.checkSession();
        return auth0;
    }
    exports.Auth0Client = Auth0Client;
    exports.AuthenticationError = AuthenticationError;
    exports.CacheKey = CacheKey;
    exports.GenericError = GenericError;
    exports.InMemoryCache = InMemoryCache;
    exports.LocalStorageCache = LocalStorageCache;
    exports.MfaRequiredError = MfaRequiredError;
    exports.MissingRefreshTokenError = MissingRefreshTokenError;
    exports.PopupCancelledError = PopupCancelledError;
    exports.PopupTimeoutError = PopupTimeoutError;
    exports.TimeoutError = TimeoutError;
    exports.User = User;
    exports.createAuth0Client = createAuth0Client;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
}));
//# sourceMappingURL=auth0-spa-js.development.js.map
