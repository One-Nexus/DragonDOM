module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Module", function() { return /* reexport */ components_module; });
__webpack_require__.d(__webpack_exports__, "Wrapper", function() { return /* reexport */ wrapper_Wrapper; });
__webpack_require__.d(__webpack_exports__, "Group", function() { return /* reexport */ Group; });
__webpack_require__.d(__webpack_exports__, "Component", function() { return /* reexport */ Component; });
__webpack_require__.d(__webpack_exports__, "SubComponent", function() { return /* reexport */ SubComponent; });
__webpack_require__.d(__webpack_exports__, "useModuleContext", function() { return /* reexport */ useModuleContext; });

// CONCATENATED MODULE: ./src/utilities/getModifiersFromProps.js
function getModifiersFromProps(props) {
  var blacklist = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var modifiers = [];

  for (var prop in props) {
    var _ref = [prop, props[prop]],
        key = _ref[0],
        value = _ref[1];
    var firstLetter = prop[0];

    if (prop === 'subComponent') {
      continue;
    } // @TODO add these (with above subComponent) to whitelist array instead


    if (prop === 'permeable') {
      continue;
    }

    if (blacklist.indexOf(key) < 0) {
      // assume prop to be name of module
      if (firstLetter === firstLetter.toUpperCase()) {
        modifiers.push(key);
      }

      if (typeof value === 'boolean' && value) {
        modifiers.push(key);
      }
    }
  }

  return modifiers;
}
// CONCATENATED MODULE: ./src/utilities/generateElementClasses.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function generateElementClasses(props, _ref) {
  var _MODIFIERS;

  var namespace = _ref.namespace,
      modifierGlue = _ref.modifierGlue,
      _ref$singleClass = _ref.singleClass,
      singleClass = _ref$singleClass === void 0 ? true : _ref$singleClass;
  var CLASSES = props.className ? props.className + ' ' : '',
      MODIFIERS = [];
  props.modifiers && (_MODIFIERS = MODIFIERS).push.apply(_MODIFIERS, _toConsumableArray(props.modifiers));
  MODIFIERS = MODIFIERS.concat(getModifiersFromProps(props));
  MODIFIERS = MODIFIERS.filter(function (item, pos) {
    return MODIFIERS.indexOf(item) === pos;
  });
  MODIFIERS = MODIFIERS.filter(Boolean);

  if (singleClass) {
    namespace += MODIFIERS.length ? modifierGlue + MODIFIERS.join(modifierGlue) : '';
  } else {
    MODIFIERS.forEach(function (MODIFIER) {
      return CLASSES += namespace + modifierGlue + MODIFIER + ' ';
    });
  }

  CLASSES += namespace;
  return CLASSES;
}
// CONCATENATED MODULE: ./src/components/context.jsx
if (typeof context_React === 'undefined') {
  var context_React = __webpack_require__(0);
}

/* harmony default export */ var components_context = (context_React.createContext({}));
// CONCATENATED MODULE: ./src/components/module.jsx
var _excluded = ["children", "name", "render", "attributes"],
    _excluded2 = ["isComponent", "host", "style", "as", "tag"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function module_toConsumableArray(arr) { return module_arrayWithoutHoles(arr) || module_iterableToArray(arr) || module_unsupportedIterableToArray(arr) || module_nonIterableSpread(); }

function module_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function module_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function module_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return module_arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || module_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function module_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return module_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return module_arrayLikeToArray(o, minLen); }

function module_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var module_modifierGlue = '--';
var componentGlue = '__';

var module_Module = function Module(props) {
  var _objectSpread2;

  var children = props.children,
      name = props.name,
      render = props.render,
      attributes = props.attributes,
      meta = _objectWithoutProperties(props, _excluded);

  var isComponent = meta.isComponent,
      host = meta.host,
      style = meta.style,
      as = meta.as,
      tag = meta.tag,
      rest = _objectWithoutProperties(meta, _excluded2);

  var prevContext = React.useContext(components_context);
  var ref = host || React.useRef();

  var _React$useState = React.useState({
    Tag: getTag(props)
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      Tag = _React$useState2[0].Tag,
      setTag = _React$useState2[1];

  var namespace = name || tag;
  var fullNamespace = "".concat(prevContext.fullNamespace || prevContext.namespace).concat(componentGlue).concat(namespace);
  /** */

  React.useEffect(function () {
    if (isComponent && prevContext.namespace === namespace && prevContext.owner) {
      prevContext[namespace].setTag({
        Tag: React.Fragment
      });
    }
  }, []);
  /** */

  var nextContext = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
    group: null,
    wrapper: null
  }, prevContext), !props.permeable && {
    namespace: typeof props.as === 'string' ? prevContext.namespace : namespace
  }), isComponent && {
    fullNamespace: fullNamespace
  }), !isComponent && props.as && {
    owner: namespace
  }), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, namespace, {
    setTag: setTag
  }), _defineProperty(_objectSpread2, "isFusion", isFunctionComponent(props.as) && !isComponent), _objectSpread2));
  /** */


  var ATTRIBUTES = Tag !== React.Fragment && _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, attributes), getEventHandlers(rest)), getWhitelistAttributes(rest)), !isFunctionComponent(Tag) && {
    ref: ref
  }), Tag.name === 'Component' && props.as && _objectSpread({
    name: props.as.name || props.as
  }, rest)), {}, {
    className: generateElementClasses(rest, {
      namespace: isComponent ? fullNamespace : namespace,
      modifierGlue: module_modifierGlue
    }),
    style: style
  });
  /** */


  return /*#__PURE__*/React.createElement(components_context.Provider, {
    value: nextContext
  }, /*#__PURE__*/React.createElement(Tag, ATTRIBUTES, render || children));
};

module_Module.modifiers = function (props) {
  return [].concat(module_toConsumableArray(Object.keys(props)), module_toConsumableArray(props.modifiers || []));
};

/* harmony default export */ var components_module = (module_Module);
/** */

var Component = function Component(props) {
  return /*#__PURE__*/React.createElement(module_Module, _extends({
    isComponent: true
  }, props));
};
var SubComponent = function SubComponent(props) {
  return /*#__PURE__*/React.createElement(module_Module, _extends({
    isComponent: true
  }, props));
};
/** */

function getEventHandlers(props) {
  return Object.keys(props).filter(function (key) {
    return isEventHandler(key);
  }).reduce(function (accumulator, key) {
    accumulator[key] = props[key];
    return accumulator;
  }, {});
}
/** */


function getWhitelistAttributes(props) {
  var inputAttributes = {};
  var whitelist = ['type', 'value', 'readonly', 'disabled', 'size', 'maxlength', 'autocomplete', 'autofocus', 'min', 'max', 'multiple', 'pattern', 'placeholder', 'selected', 'required', 'step', 'src'];

  for (var prop in props) {
    if (whitelist.includes(prop)) {
      inputAttributes[prop] = props[prop];
    }

    if (prop === 'group') {
      inputAttributes.name = props[prop];
    }
  }

  return inputAttributes;
}
/** */


function isEventHandler(key) {
  return key.startsWith('on') && key[2] === key[2].toUpperCase();
}
/** */


function getTag(props) {
  var _props$as, _props$as$prototype;

  if (typeof props.as === 'function' && props.as.name[0] === props.as.name[0].toUpperCase()) {
    return props.as;
  }

  if (typeof props.as === 'function' && (_props$as = props.as) !== null && _props$as !== void 0 && (_props$as$prototype = _props$as.prototype) !== null && _props$as$prototype !== void 0 && _props$as$prototype.isReactComponent) {
    return props.as;
  }

  if (props.component) {
    return props.component;
  }

  if (typeof props.as === 'string') {
    return Component;
  }

  if (props.tag) {
    return props.tag;
  }

  return 'div';
}
/** */


function isFunctionComponent(component) {
  return typeof component === 'function' && component.name[0] === component.name[0].toUpperCase();
}
// CONCATENATED MODULE: ./src/components/wrapper.jsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function wrapper_extends() { wrapper_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return wrapper_extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



if (typeof wrapper_React === 'undefined') {
  var wrapper_React = __webpack_require__(0);
}

var wrapper_Wrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(Wrapper, _React$Component);

  var _super = _createSuper(Wrapper);

  function Wrapper(props) {
    _classCallCheck(this, Wrapper);

    return _super.call(this, props);
  }

  _createClass(Wrapper, [{
    key: "render",
    value: function render() {
      var NAMESPACE = this.props.name || 'wrapper';
      var CHILD = this.props.children.length ? this.props.children[0] : this.props.children;
      var MODULE = this.props.module || CHILD.props.name || CHILD.type.name;
      var PROPS = {
        modifiers: [MODULE],
        permeable: true
      };
      return /*#__PURE__*/wrapper_React.createElement(components_module, wrapper_extends({
        name: NAMESPACE
      }, this.props, PROPS), this.props.children);
    }
  }]);

  return Wrapper;
}(wrapper_React.Component);


var Group = function Group(props) {
  return /*#__PURE__*/wrapper_React.createElement(wrapper_Wrapper, wrapper_extends({
    name: "group"
  }, props), props.children);
};
// CONCATENATED MODULE: ./src/hooks/useModuleContext.js

/* harmony default export */ var useModuleContext = (function () {
  var _React$useContext = React.useContext(components_context),
      context = _React$useContext.context;

  return context;
});
// CONCATENATED MODULE: ./src/index.js





/***/ })
/******/ ]);