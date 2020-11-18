(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react-formutil'), require('react'), require('prop-types'), require('antd')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react-formutil', 'react', 'prop-types', 'antd'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactAntdFormutil = {}, global.ReactFormutil, global.React, global.PropTypes, global.antd));
}(this, (function (exports, reactFormutil, React, PropTypes, antd) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  function _toPrimitive(input, hint) {
    if (_typeof_1(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof_1(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  var toPrimitive = _toPrimitive;

  function _toPropertyKey(arg) {
    var key = toPrimitive(arg, "string");
    return _typeof_1(key) === "symbol" ? key : String(key);
  }

  var toPropertyKey = _toPropertyKey;

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  var objectWithoutProperties = _objectWithoutProperties;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  var isNativeReflectConstruct = _isNativeReflectConstruct;

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return possibleConstructorReturn(this, result);
    };
  }

  var createSuper = _createSuper;

  var reactIs_development = createCommonjsModule(function (module, exports) {

  {
    (function() {

  // ATTENTION
  // When adding new symbols to this file,
  // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var REACT_ELEMENT_TYPE = 0xeac7;
  var REACT_PORTAL_TYPE = 0xeaca;
  var REACT_FRAGMENT_TYPE = 0xeacb;
  var REACT_STRICT_MODE_TYPE = 0xeacc;
  var REACT_PROFILER_TYPE = 0xead2;
  var REACT_PROVIDER_TYPE = 0xeacd;
  var REACT_CONTEXT_TYPE = 0xeace;
  var REACT_FORWARD_REF_TYPE = 0xead0;
  var REACT_SUSPENSE_TYPE = 0xead1;
  var REACT_SUSPENSE_LIST_TYPE = 0xead8;
  var REACT_MEMO_TYPE = 0xead3;
  var REACT_LAZY_TYPE = 0xead4;
  var REACT_BLOCK_TYPE = 0xead9;
  var REACT_SERVER_BLOCK_TYPE = 0xeada;
  var REACT_FUNDAMENTAL_TYPE = 0xead5;
  var REACT_SCOPE_TYPE = 0xead7;
  var REACT_OPAQUE_ID_TYPE = 0xeae0;
  var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
  var REACT_OFFSCREEN_TYPE = 0xeae2;
  var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

  if (typeof Symbol === 'function' && Symbol.for) {
    var symbolFor = Symbol.for;
    REACT_ELEMENT_TYPE = symbolFor('react.element');
    REACT_PORTAL_TYPE = symbolFor('react.portal');
    REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
    REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
    REACT_PROFILER_TYPE = symbolFor('react.profiler');
    REACT_PROVIDER_TYPE = symbolFor('react.provider');
    REACT_CONTEXT_TYPE = symbolFor('react.context');
    REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
    REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
    REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
    REACT_MEMO_TYPE = symbolFor('react.memo');
    REACT_LAZY_TYPE = symbolFor('react.lazy');
    REACT_BLOCK_TYPE = symbolFor('react.block');
    REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
    REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
    REACT_SCOPE_TYPE = symbolFor('react.scope');
    REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
    REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
    REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
    REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
  }

  // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

  var enableScopeAPI = false; // Experimental Create Event Handle API.

  function isValidElementType(type) {
    if (typeof type === 'string' || typeof type === 'function') {
      return true;
    } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


    if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
      return true;
    }

    if (typeof type === 'object' && type !== null) {
      if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
        return true;
      }
    }

    return false;
  }

  function typeOf(object) {
    if (typeof object === 'object' && object !== null) {
      var $$typeof = object.$$typeof;

      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          var type = object.type;

          switch (type) {
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
            case REACT_SUSPENSE_LIST_TYPE:
              return type;

            default:
              var $$typeofType = type && type.$$typeof;

              switch ($$typeofType) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                case REACT_PROVIDER_TYPE:
                  return $$typeofType;

                default:
                  return $$typeof;
              }

          }

        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }

    return undefined;
  }
  var ContextConsumer = REACT_CONTEXT_TYPE;
  var ContextProvider = REACT_PROVIDER_TYPE;
  var Element = REACT_ELEMENT_TYPE;
  var ForwardRef = REACT_FORWARD_REF_TYPE;
  var Fragment = REACT_FRAGMENT_TYPE;
  var Lazy = REACT_LAZY_TYPE;
  var Memo = REACT_MEMO_TYPE;
  var Portal = REACT_PORTAL_TYPE;
  var Profiler = REACT_PROFILER_TYPE;
  var StrictMode = REACT_STRICT_MODE_TYPE;
  var Suspense = REACT_SUSPENSE_TYPE;
  var hasWarnedAboutDeprecatedIsAsyncMode = false;
  var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

  function isAsyncMode(object) {
    {
      if (!hasWarnedAboutDeprecatedIsAsyncMode) {
        hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

        console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
      }
    }

    return false;
  }
  function isConcurrentMode(object) {
    {
      if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
        hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

        console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
      }
    }

    return false;
  }
  function isContextConsumer(object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  }
  function isContextProvider(object) {
    return typeOf(object) === REACT_PROVIDER_TYPE;
  }
  function isElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
  function isForwardRef(object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  }
  function isFragment(object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  }
  function isLazy(object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  }
  function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  }
  function isPortal(object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  }
  function isProfiler(object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  }
  function isStrictMode(object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  }
  function isSuspense(object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  }

  exports.ContextConsumer = ContextConsumer;
  exports.ContextProvider = ContextProvider;
  exports.Element = Element;
  exports.ForwardRef = ForwardRef;
  exports.Fragment = Fragment;
  exports.Lazy = Lazy;
  exports.Memo = Memo;
  exports.Portal = Portal;
  exports.Profiler = Profiler;
  exports.StrictMode = StrictMode;
  exports.Suspense = Suspense;
  exports.isAsyncMode = isAsyncMode;
  exports.isConcurrentMode = isConcurrentMode;
  exports.isContextConsumer = isContextConsumer;
  exports.isContextProvider = isContextProvider;
  exports.isElement = isElement;
  exports.isForwardRef = isForwardRef;
  exports.isFragment = isFragment;
  exports.isLazy = isLazy;
  exports.isMemo = isMemo;
  exports.isPortal = isPortal;
  exports.isProfiler = isProfiler;
  exports.isStrictMode = isStrictMode;
  exports.isSuspense = isSuspense;
  exports.isValidElementType = isValidElementType;
  exports.typeOf = typeOf;
    })();
  }
  });
  var reactIs_development_1 = reactIs_development.ContextConsumer;
  var reactIs_development_2 = reactIs_development.ContextProvider;
  var reactIs_development_3 = reactIs_development.Element;
  var reactIs_development_4 = reactIs_development.ForwardRef;
  var reactIs_development_5 = reactIs_development.Fragment;
  var reactIs_development_6 = reactIs_development.Lazy;
  var reactIs_development_7 = reactIs_development.Memo;
  var reactIs_development_8 = reactIs_development.Portal;
  var reactIs_development_9 = reactIs_development.Profiler;
  var reactIs_development_10 = reactIs_development.StrictMode;
  var reactIs_development_11 = reactIs_development.Suspense;
  var reactIs_development_12 = reactIs_development.isAsyncMode;
  var reactIs_development_13 = reactIs_development.isConcurrentMode;
  var reactIs_development_14 = reactIs_development.isContextConsumer;
  var reactIs_development_15 = reactIs_development.isContextProvider;
  var reactIs_development_16 = reactIs_development.isElement;
  var reactIs_development_17 = reactIs_development.isForwardRef;
  var reactIs_development_18 = reactIs_development.isFragment;
  var reactIs_development_19 = reactIs_development.isLazy;
  var reactIs_development_20 = reactIs_development.isMemo;
  var reactIs_development_21 = reactIs_development.isPortal;
  var reactIs_development_22 = reactIs_development.isProfiler;
  var reactIs_development_23 = reactIs_development.isStrictMode;
  var reactIs_development_24 = reactIs_development.isSuspense;
  var reactIs_development_25 = reactIs_development.isValidElementType;
  var reactIs_development_26 = reactIs_development.typeOf;

  var _reactIs_17_0_1_reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_development;
  }
  });

  /* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

  var hasElementType = typeof Element !== 'undefined';
  var hasMap = typeof Map === 'function';
  var hasSet = typeof Set === 'function';
  var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

  // Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

  function equal(a, b) {
    // START: fast-deep-equal es6/index.js 3.1.1
    if (a === b) return true;

    if (a && b && typeof a == 'object' && typeof b == 'object') {
      if (a.constructor !== b.constructor) return false;

      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (!equal(a[i], b[i])) return false;
        return true;
      }

      // START: Modifications:
      // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
      //    to co-exist with es5.
      // 2. Replace `for of` with es5 compliant iteration using `for`.
      //    Basically, take:
      //
      //    ```js
      //    for (i of a.entries())
      //      if (!b.has(i[0])) return false;
      //    ```
      //
      //    ... and convert to:
      //
      //    ```js
      //    it = a.entries();
      //    while (!(i = it.next()).done)
      //      if (!b.has(i.value[0])) return false;
      //    ```
      //
      //    **Note**: `i` access switches to `i.value`.
      var it;
      if (hasMap && (a instanceof Map) && (b instanceof Map)) {
        if (a.size !== b.size) return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!b.has(i.value[0])) return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!equal(i.value[1], b.get(i.value[0]))) return false;
        return true;
      }

      if (hasSet && (a instanceof Set) && (b instanceof Set)) {
        if (a.size !== b.size) return false;
        it = a.entries();
        while (!(i = it.next()).done)
          if (!b.has(i.value[0])) return false;
        return true;
      }
      // END: Modifications

      if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (a[i] !== b[i]) return false;
        return true;
      }

      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;

      for (i = length; i-- !== 0;)
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      // END: fast-deep-equal

      // START: react-fast-compare
      // custom handling for DOM elements
      if (hasElementType && a instanceof Element) return false;

      // custom handling for React/Preact
      for (i = length; i-- !== 0;) {
        if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
          // React-specific: avoid traversing React elements' _owner
          // Preact-specific: avoid traversing Preact elements' __v and __o
          //    __v = $_original / $_vnode
          //    __o = $_owner
          // These properties contain circular references and are not needed when
          // comparing the actual elements (and not their owners)
          // .$$typeof and ._store on just reasonable markers of elements

          continue;
        }

        // all other properties should be traversed as usual
        if (!equal(a[keys[i]], b[keys[i]])) return false;
      }
      // END: react-fast-compare

      // START: fast-deep-equal
      return true;
    }

    return a !== a && b !== b;
  }
  // end fast-deep-equal

  var _reactFastCompare_3_2_0_reactFastCompare = function isEqual(a, b) {
    try {
      return equal(a, b);
    } catch (error) {
      if (((error.message || '').match(/stack|recursion/i))) {
        // warn on circular references, don't crash
        // browsers give this different errors name and messages:
        // chrome/safari: "RangeError", "Maximum call stack size exceeded"
        // firefox: "InternalError", too much recursion"
        // edge: "Error", "Out of stack space"
        console.warn('react-fast-compare cannot handle circular refs');
        return false;
      }
      // some other error. we should definitely know about these
      throw error;
    }
  };

  var isValidElementType = _reactIs_17_0_1_reactIs.isValidElementType;

  var _createContext = /*#__PURE__*/React.createContext(),
      Consumer = _createContext.Consumer,
      Provider = _createContext.Provider;

  var errorLevelGlobal = 1;
  /**
   * 0 dirty & invalid & touched
   * 1 dirty & invalid
   * 2 invalid
   */

  var setErrorLevel = function setErrorLevel(level) {
    errorLevelGlobal = level;
  };
  var isUglify = antd.Checkbox.name !== 'Checkbox';

  var _Switch = isUglify ? antd.Switch : 'Switch';

  var _Checkbox = isUglify ? antd.Checkbox : 'Checkbox';

  var _Radio = isUglify ? antd.Radio : 'Radio';

  var _Transfer = isUglify ? antd.Transfer : 'Transfer';

  var _Pagination = isUglify ? antd.Pagination : 'Pagination';

  var _Upload = isUglify ? antd.Upload : 'Upload';

  var _Select = isUglify ? antd.Select : 'Select';
  /* // just for debug
   * console.log(
   *     Switch.name || Switch.displayName,
   *     Checkbox.name || Checkbox.displayName,
   *     Radio.name || Radio.displayName,
   *     Transfer.name || Transfer.displayName,
   *     Select.name || Select.displayName,
   *     Upload.name || Upload.displayName,
   *     Pagination.name || Pagination.displayName
   * ); */


  function getChildComponent(children) {
    if (children) {
      var childrenType = children.type;

      if (isValidElementType(childrenType)) {
        // SomeComponent.formutiType = xx
        if (childrenType.formutilType) {
          return childrenType.formutilType;
        } // <input type="checkbox" />


        if (typeof childrenType === 'string' && children.props.type) {
          return children.props.type;
        }

        if (!isUglify) {
          var _childrenType$render;

          var name = childrenType.displayName || childrenType.name;

          if (name) {
            return name;
          }

          if (((_childrenType$render = childrenType.render) === null || _childrenType$render === void 0 ? void 0 : _childrenType$render.name) === 'InternalSelect') {
            return 'Select';
          }

          return childrenType;
        }
      }

      return childrenType || children;
    }
  }

  var FormItem = /*#__PURE__*/function (_Component) {
    inherits(FormItem, _Component);

    var _super = createSuper(FormItem);

    function FormItem() {
      var _this;

      classCallCheck(this, FormItem);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.fields = {};

      _this.registerField = function (name, $fieldutil) {
        return $fieldutil ? _this.fields[name] = $fieldutil : delete _this.fields[name];
      };

      _this.latestValidationProps = null;

      _this.checkHasError = function (errorLevel, $invalid, $dirty, $touched, $focused) {
        switch (errorLevel) {
          case 0:
            return $invalid && $dirty && $touched;

          case 1:
            return $invalid && $dirty;

          case 2:
            return $invalid;

          default:
            return false;
        }
      };

      _this.fetchCurrentValidationProps = function (errorLevel) {
        var allFieldutils = Object.keys(_this.fields).map(function (name) {
          return _this.fields[name].$new();
        });
        var errFieldutils = allFieldutils.filter(function ($fieldutil) {
          return $fieldutil.$invalid;
        });
        var $invalid = errFieldutils.length > 0;
        var $dirty = allFieldutils.some(function ($fieldutil) {
          return $fieldutil.$dirty;
        });
        var $touched = allFieldutils.some(function ($fieldutil) {
          return $fieldutil.$touched;
        });
        var $focused = allFieldutils.some(function ($fieldutil) {
          return $fieldutil.$focused;
        });
        var $errors = errFieldutils.map(function ($fieldutil) {
          return $fieldutil.$getFirstError();
        });
        return _this.getValidationProps(errorLevel, $invalid, $dirty, $touched, $focused, $errors);
      };

      _this.getValidationProps = function (errorLevel, $invalid, $dirty, $touched, $focused, $errors) {
        var hasError = _this.checkHasError(errorLevel, $invalid, $dirty, $touched, $focused);

        var validationProps = {
          className: [_this.props.className, hasError && 'has-error', $invalid ? 'is-invalid' : 'is-valid', $dirty ? 'is-dirty' : 'is-pristine', $touched ? 'is-touched' : 'is-untouched', $focused ? 'is-focused' : 'is-unfocused'].filter(Boolean).join(' ')
        };

        if (hasError) {
          Object.assign(validationProps, {
            validateStatus: 'error',
            help: $errors
          });
        }

        return validationProps;
      };

      return _this;
    }

    createClass(FormItem, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$registerAncesto;

        // eslint-disable-next-line
        (_this$registerAncesto = this.registerAncestorField) === null || _this$registerAncesto === void 0 ? void 0 : _this$registerAncesto.call(this, this.props.name, this.$fieldutil);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this$registerAncesto2;

        // eslint-disable-next-line
        (_this$registerAncesto2 = this.registerAncestorField) === null || _this$registerAncesto2 === void 0 ? void 0 : _this$registerAncesto2.call(this, this.props.name, null);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var props = this.props;

        var childList = props.children,
            itemProps = props.itemProps,
            _props$errorLevel = props.errorLevel,
            errorLevel = _props$errorLevel === void 0 ? errorLevelGlobal : _props$errorLevel,
            noStyle = props.noStyle,
            fieldProps = objectWithoutProperties(props, ["children", "itemProps", "errorLevel", "noStyle"]);

        if (!props.name) {
          var validationProps = this.latestValidationProps = this.fetchCurrentValidationProps(errorLevel);
          /**
           * 检查下最新的校验状态和当前是否一致，不一致的话需要强制刷新下
           */

          Promise.resolve().then(function () {
            if (!_reactFastCompare_3_2_0_reactFastCompare(_this2.latestValidationProps, _this2.fetchCurrentValidationProps(errorLevel))) {
              _this2.forceUpdate();
            }
          });
          return /*#__PURE__*/React__default['default'].createElement(Provider, {
            value: this.registerField
          }, /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, Object.assign({}, fieldProps, validationProps), typeof childList === 'function' ? childList() : childList));
        } // If $memo is true, pass the children to Field for SCU diffing.


        if (props.$memo === true) {
          fieldProps.__DIFF__ = childList;
        }

        var children = typeof childList === 'function' ? childList : React.Children.only(childList);
        var component = getChildComponent(children);

        switch (component) {
          case _Switch:
          case _Checkbox:
          case _Radio:
            fieldProps.__TYPE__ = 'checked';
            break;

          case _Pagination:
            if (!('$defaultValue' in fieldProps)) {
              fieldProps.$defaultValue = 1;
            }

            break;

          case 'checked':
          case 'array':
          case 'object':
          case 'number':
          case 'empty':
            fieldProps.__TYPE__ = component;
            break;

          default:
            fieldProps.__TYPE__ = 'empty';
            break;
        }

        return /*#__PURE__*/React__default['default'].createElement(reactFormutil.EasyField, Object.assign({}, fieldProps, {
          passUtil: "$fieldutil",
          render: function render($handleProps) {
            var _value$fileList, _childProps, _Object$assign;

            var _props$valuePropName = props.valuePropName,
                valuePropName = _props$valuePropName === void 0 ? 'value' : _props$valuePropName,
                _props$changePropName = props.changePropName,
                changePropName = _props$changePropName === void 0 ? 'onChange' : _props$changePropName,
                _props$focusPropName = props.focusPropName,
                focusPropName = _props$focusPropName === void 0 ? 'onFocus' : _props$focusPropName,
                _props$blurPropName = props.blurPropName,
                blurPropName = _props$blurPropName === void 0 ? 'onBlur' : _props$blurPropName;

            var $fieldutil = $handleProps.$fieldutil,
                _onChange = $handleProps[changePropName],
                onFocus = $handleProps[focusPropName],
                onBlur = $handleProps[blurPropName],
                value = $handleProps[valuePropName],
                restProps = objectWithoutProperties($handleProps, ["$fieldutil", changePropName, focusPropName, blurPropName, valuePropName].map(toPropertyKey));

            var $invalid = $fieldutil.$invalid,
                $dirty = $fieldutil.$dirty,
                $touched = $fieldutil.$touched,
                $focused = $fieldutil.$focused,
                $getFirstError = $fieldutil.$getFirstError;
            var childProps;

            switch (component) {
              case _Switch:
              case _Checkbox:
              case _Radio:
              case 'checked':
                var _props$checked = props.checked,
                    checked = _props$checked === void 0 ? true : _props$checked,
                    _props$unchecked = props.unchecked,
                    unchecked = _props$unchecked === void 0 ? false : _props$unchecked;
                childProps = {
                  checked: value === checked,
                  onChange: function onChange(ev) {
                    var newValue = ev && ev.target ? ev.target.checked : ev;

                    _onChange(newValue ? checked : unchecked, ev);
                  }
                };
                break;

              case _Transfer:
                childProps = {
                  targetKeys: value,
                  onChange: _onChange
                };
                break;

              case _Pagination:
                childProps = {
                  current: value,
                  onChange: _onChange
                };
                break;

              case _Upload:
                childProps = {
                  fileList: (_value$fileList = value === null || value === void 0 ? void 0 : value.fileList) !== null && _value$fileList !== void 0 ? _value$fileList : value,
                  onChange: _onChange
                };
                break;

              default:
                childProps = (_childProps = {
                  onCompositionEnd: function onCompositionEnd(ev) {
                    _this2.isComposition = false;
                    delete _this2.compositionValue;

                    _onChange(ev);
                  },
                  onCompositionStart: function onCompositionStart() {
                    return _this2.isComposition = true;
                  }
                }, defineProperty(_childProps, changePropName, function (ev) {
                  if (_this2.isComposition) {
                    var _ev$target$valuePropN, _ev$target;

                    _this2.compositionValue = (_ev$target$valuePropN = (_ev$target = ev.target) === null || _ev$target === void 0 ? void 0 : _ev$target[valuePropName]) !== null && _ev$target$valuePropN !== void 0 ? _ev$target$valuePropN : ev;

                    _this2.forceUpdate();
                  } else {
                    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                      rest[_key2 - 1] = arguments[_key2];
                    }

                    _onChange.apply(void 0, [ev].concat(rest));
                  }
                }), defineProperty(_childProps, valuePropName, 'compositionValue' in _this2 ? _this2.compositionValue : value), defineProperty(_childProps, blurPropName, function () {
                  if (_this2.isComposition) {
                    _this2.isComposition = false;
                    delete _this2.compositionValue;

                    _onChange.apply(void 0, arguments);
                  }

                  return onBlur.apply(void 0, arguments);
                }), _childProps);
                break;
            }
            /**
             * Select组件移除composition相关事件
             */


            if (component === _Select) {
              delete childProps.onCompositionStart;
              delete childProps.onCompositionEnd;
            }

            childProps = Object.assign((_Object$assign = {}, defineProperty(_Object$assign, focusPropName, onFocus), defineProperty(_Object$assign, blurPropName, onBlur), _Object$assign), childProps); // ansure 'required' could pass to Form.Item

            if (!restProps.required && fieldProps.required && (!itemProps || !('required' in itemProps))) {
              restProps.required = true;
            }

            var fieldInstance = typeof children === 'function' ? children(childProps) : /*#__PURE__*/React.cloneElement(children, childProps);
            return /*#__PURE__*/React__default['default'].createElement(Consumer, null, function (registerField) {
              if (noStyle) {
                _this2.$fieldutil = $fieldutil;
                _this2.registerAncestorField = registerField;
                return fieldInstance;
              }

              var validationProps = _this2.getValidationProps(errorLevel, $invalid, $dirty, $touched, $focused, $getFirstError());

              return /*#__PURE__*/React__default['default'].createElement(antd.Form.Item, Object.assign({}, restProps, itemProps, validationProps), fieldInstance);
            });
          }
        }));
      }
    }]);

    return FormItem;
  }(React.Component);

  FormItem.propTypes = {
    children: function children(props) {
      var _PropTypes$node;

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      if ('name' in props) {
        var _PropTypes$oneOfType;

        return (_PropTypes$oneOfType = PropTypes__default['default'].oneOfType([PropTypes__default['default'].element, PropTypes__default['default'].func])).isRequired.apply(_PropTypes$oneOfType, [props].concat(args));
      }

      return (_PropTypes$node = PropTypes__default['default'].node).isRequired.apply(_PropTypes$node, [props].concat(args));
    },
    itemProps: PropTypes__default['default'].object,
    //传递给antd的Form.Item的属性
    errorLevel: PropTypes__default['default'].oneOf([0, 1, 2, 'off']),
    noStyle: PropTypes__default['default'].bool //$parser $formatter checked unchecked $validators validMessage等传递给 EasyField 组件的额外参数

  };

  Object.keys(reactFormutil).forEach(function (k) {
    if (k !== 'default') Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () {
        return reactFormutil[k];
      }
    });
  });
  exports.FormItem = FormItem;
  exports.setErrorLevel = setErrorLevel;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
