var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["gui"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/index.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/index.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody,\n.index_app_3Qs6X {\n    /* probably unecessary, transitional until layout is refactored */\n    width: 100%; \n    height: 100%;\n    margin: 0;\n\n    /* Setting min height/width makes the UI scroll below those sizes */\n    min-width: 1024px;\n    min-height: 640px; /* Min height to fit sprite/backdrop button */\n}\n\n/* @todo: move globally? Safe / side FX, for blocks particularly? */\n\n* { -webkit-box-sizing: border-box; box-sizing: border-box; }\n", ""]);

// exports
exports.locals = {
	"app": "index_app_3Qs6X"
};

/***/ }),

/***/ "./src/playground/index.css":
/*!**********************************!*\
  !*** ./src/playground/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/index.jsx":
/*!**********************************!*\
  !*** ./src/playground/index.jsx ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-object-assign/auto */ "./node_modules/es6-object-assign/auto.js");
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! intl */ "./node_modules/intl/index.js");
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/browser-modal/browser-modal.jsx */ "./src/components/browser-modal/browser-modal.jsx");
/* harmony import */ var _lib_supported_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/supported-browser */ "./src/lib/supported-browser.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.css */ "./src/playground/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__);
// Polyfills



 // For Safari 9







var appTarget = document.createElement('div');
appTarget.className = _index_css__WEBPACK_IMPORTED_MODULE_9___default.a.app;
document.body.appendChild(appTarget);
if (Object(_lib_supported_browser__WEBPACK_IMPORTED_MODULE_8__["default"])()) {
  // require needed here to avoid importing unsupported browser-crashing code
  // at the top level
  __webpack_require__(/*! ./render-gui.jsx */ "./src/playground/render-gui.jsx").default(appTarget);
} else {
  _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_7__["default"].setAppElement(appTarget);
  var WrappedBrowserModalComponent = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__["default"])(_components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], true /* localesOnly */);
  var handleBack = function handleBack() {};
  // eslint-disable-next-line react/jsx-no-bind
  react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WrappedBrowserModalComponent, {
    onBack: handleBack
  }), appTarget);
}
__webpack_require__(/*! ./userscripts */ "./src/playground/userscripts/index.js");

/***/ }),

/***/ "./src/playground/render-gui.jsx":
/*!***************************************!*\
  !*** ./src/playground/render-gui.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_log_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/log.js */ "./src/lib/log.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







var onClickLogo = function onClickLogo() {
  window.location = 'https://scratch.mit.edu';
};
var handleTelemetryModalCancel = function handleTelemetryModalCancel() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User canceled telemetry modal');
};
var handleTelemetryModalOptIn = function handleTelemetryModalOptIn() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User opted into telemetry');
};
var handleTelemetryModalOptOut = function handleTelemetryModalOptOut() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User opted out of telemetry');
};

/*
 * Render the GUI playground. This is a separate function because importing anything
 * that instantiates the VM causes unsupported browsers to crash
 * {object} appTarget - the DOM element to render to
 */
/* harmony default export */ __webpack_exports__["default"] = (function (appTarget) {
  _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].setAppElement(appTarget);

  // note that redux's 'compose' function is just being used as a general utility to make
  // the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
  // ability to compose reducers.
  var WrappedGui = Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]);

  // TODO a hack for testing the backpack, allow backpack host to be set by url param
  var backpackHostMatches = window.location.href.match(/[?&]backpack_host=([^&]*)&?/);
  var backpackHost = backpackHostMatches ? backpackHostMatches[1] : null;
  var scratchDesktopMatches = window.location.href.match(/[?&]isScratchDesktop=([^&]+)/);
  var simulateScratchDesktop;
  if (scratchDesktopMatches) {
    try {
      // parse 'true' into `true`, 'false' into `false`, etc.
      simulateScratchDesktop = JSON.parse(scratchDesktopMatches[1]);
    } catch (_unused) {
      // it's not JSON so just use the string
      // note that a typo like "falsy" will be treated as true
      simulateScratchDesktop = scratchDesktopMatches[1];
    }
  }
  if (false) {}
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(
  // important: this is checking whether `simulateScratchDesktop` is truthy, not just defined!
  simulateScratchDesktop ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    canEditTitle: true,
    isScratchDesktop: true,
    showTelemetryModal: true,
    canSave: false,
    onTelemetryModalCancel: handleTelemetryModalCancel,
    onTelemetryModalOptIn: handleTelemetryModalOptIn,
    onTelemetryModalOptOut: handleTelemetryModalOptOut
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    canEditTitle: true,
    backpackVisible: true,
    showComingSoon: true,
    backpackHost: backpackHost,
    canSave: false,
    onClickLogo: onClickLogo
  }), appTarget);
});

/***/ }),

/***/ "./src/playground/userscripts/blocks2image.js":
/*!****************************************************!*\
  !*** ./src/playground/userscripts/blocks2image.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
module.exports = {
  func: function func(createBlockContextMenu) {
    function makeStyle() {
      var style = document.createElement("style");
      style.textContent = "\n        .blocklyText {\n            fill: #fff;\n            font-family: \"Helvetica Neue\", Helvetica, sans-serif;\n            font-size: 12pt;\n            font-weight: 500;\n        }\n        .blocklyNonEditableText>text, .blocklyEditableText>text {\n            fill: #575E75;\n        }\n        .blocklyDropdownText {\n            fill: #fff !important;\n        }\n        ";
      var _iterator = _createForOfIteratorHelper(document.querySelectorAll(".scratch-addons-style[data-addon-id='editor-theme3']")),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var userstyle = _step.value;
          if (userstyle.disabled) continue;
          style.textContent += userstyle.textContent;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return style;
    }
    function setCSSVars(element) {
      var _iterator2 = _createForOfIteratorHelper(document.documentElement.style),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var property = _step2.value;
          if (property.startsWith("--editorTheme3-")) element.style.setProperty(property, document.documentElement.style.getPropertyValue(property));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    if (localStorage.getItem("blocks2image") === "true") {
      var _exSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      _exSVG.setAttribute("xmlns:html", "http://www.w3.org/1999/xhtml");
      _exSVG.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
      _exSVG.setAttribute("version", "1.1");
      var _blocksMedia = new Map();
      _blocksMedia.set("repeat.svg", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9InJlcGVhdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNDRjhCMTc7fQoJLnN0MXtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8dGl0bGU+cmVwZWF0PC90aXRsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjMsMTFjLTAuMywwLjYtMC45LDEtMS41LDFoLTEuNmMtMC4xLDEuMy0wLjUsMi41LTEuMSwzLjZjLTAuOSwxLjctMi4zLDMuMi00LjEsNC4xCgljLTEuNywwLjktMy42LDEuMi01LjUsMC45Yy0xLjgtMC4zLTMuNS0xLjEtNC45LTIuM2MtMC43LTAuNy0wLjctMS45LDAtMi42YzAuNi0wLjYsMS42LTAuNywyLjMtMC4ySDdjMC45LDAuNiwxLjksMC45LDIuOSwwLjkKCXMxLjktMC4zLDIuNy0wLjljMS4xLTAuOCwxLjgtMi4xLDEuOC0zLjVoLTEuNWMtMC45LDAtMS43LTAuNy0xLjctMS43YzAtMC40LDAuMi0wLjksMC41LTEuMmw0LjQtNC40YzAuNy0wLjYsMS43LTAuNiwyLjQsMEwyMyw5LjIKCUMyMy41LDkuNywyMy42LDEwLjQsMjMuMywxMXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTIxLjgsMTFoLTIuNmMwLDEuNS0wLjMsMi45LTEsNC4yYy0wLjgsMS42LTIuMSwyLjgtMy43LDMuNmMtMS41LDAuOC0zLjMsMS4xLTQuOSwwLjhjLTEuNi0wLjItMy4yLTEtNC40LTIuMQoJYy0wLjQtMC4zLTAuNC0wLjktMC4xLTEuMmMwLjMtMC40LDAuOS0wLjQsMS4yLTAuMWwwLDBjMSwwLjcsMi4yLDEuMSwzLjQsMS4xczIuMy0wLjMsMy4zLTFjMC45LTAuNiwxLjYtMS41LDItMi42CgljMC4zLTAuOSwwLjQtMS44LDAuMi0yLjhoLTIuNGMtMC40LDAtMC43LTAuMy0wLjctMC43YzAtMC4yLDAuMS0wLjMsMC4yLTAuNGw0LjQtNC40YzAuMy0wLjMsMC43LTAuMywwLjksMEwyMiw5LjgKCWMwLjMsMC4zLDAuNCwwLjYsMC4zLDAuOVMyMiwxMSwyMS44LDExeiIvPgo8L3N2Zz4K");
      _blocksMedia.set("green-flag.svg", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImdyZWVuZmxhZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0NTk5M0Q7fQoJLnN0MXtmaWxsOiM0Q0JGNTY7fQo8L3N0eWxlPgo8dGl0bGU+Z3JlZW5mbGFnPC90aXRsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwLjgsMy43Yy0wLjQtMC4yLTAuOS0wLjEtMS4yLDAuMmMtMiwxLjYtNC44LDEuNi02LjgsMGMtMi4zLTEuOS01LjYtMi4zLTguMy0xVjIuNWMwLTAuNi0wLjUtMS0xLTEKCXMtMSwwLjQtMSwxdjE4LjhjMCwwLjUsMC41LDEsMSwxaDAuMWMwLjUsMCwxLTAuNSwxLTF2LTYuNGMxLTAuNywyLjEtMS4yLDMuNC0xLjNjMS4yLDAsMi40LDAuNCwzLjQsMS4yYzIuOSwyLjMsNywyLjMsOS44LDAKCWMwLjMtMC4yLDAuNC0wLjUsMC40LTAuOVY0LjdDMjEuNiw0LjIsMjEuMywzLjgsMjAuOCwzLjd6IE0yMC41LDEzLjlDMjAuNSwxMy45LDIwLjUsMTMuOSwyMC41LDEzLjlDMTgsMTYsMTQuNCwxNiwxMS45LDE0CgljLTEuMS0wLjktMi41LTEuNC00LTEuNGMtMS4yLDAuMS0yLjMsMC41LTMuNCwxLjFWNEM3LDIuNiwxMCwyLjksMTIuMiw0LjZjMi40LDEuOSw1LjcsMS45LDguMSwwYzAuMSwwLDAuMSwwLDAuMiwwCgljMCwwLDAuMSwwLjEsMC4xLDAuMUwyMC41LDEzLjl6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMC42LDQuOGwtMC4xLDkuMWMwLDAsMCwwLjEsMCwwLjFjLTIuNSwyLTYuMSwyLTguNiwwYy0xLjEtMC45LTIuNS0xLjQtNC0xLjRjLTEuMiwwLjEtMi4zLDAuNS0zLjQsMS4xVjQKCUM3LDIuNiwxMCwyLjksMTIuMiw0LjZjMi40LDEuOSw1LjcsMS45LDguMSwwYzAuMSwwLDAuMSwwLDAuMiwwQzIwLjUsNC43LDIwLjYsNC43LDIwLjYsNC44eiIvPgo8L3N2Zz4K");
      _blocksMedia.set("rotate-left.svg", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIGlkPSJyb3RhdGUtY2xvY2t3aXNlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHN0eWxlPi5jbHMtMXtmaWxsOiMzZDc5Y2M7fS5jbHMtMntmaWxsOiNmZmY7fTwvc3R5bGU+PHRpdGxlPnJvdGF0ZS1jbG9ja3dpc2U8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTIwLjM0LDE4LjIxYTEwLjI0LDEwLjI0LDAsMCwxLTguMSw0LjIyLDIuMjYsMi4yNiwwLDAsMS0uMTYtNC41MmgwYTUuNTgsNS41OCwwLDAsMCw0LjI1LTIuNTMsNS4wNiw1LjA2LDAsMCwwLC41NC00LjYyQTQuMjUsNC4yNSwwLDAsMCwxNS41NSw5YTQuMzEsNC4zMSwwLDAsMC0yLS44QTQuODIsNC44MiwwLDAsMCwxMC40LDlsMS4xMiwxLjQxQTEuNTksMS41OSwwLDAsMSwxMC4zNiwxM0gyLjY3YTEuNTYsMS41NiwwLDAsMS0xLjI2LS42M0ExLjU0LDEuNTQsMCwwLDEsMS4xMywxMUwyLjg1LDMuNTdBMS41OSwxLjU5LDAsMCwxLDQuMzgsMi40LDEuNTcsMS41NywwLDAsMSw1LjYyLDNMNi43LDQuMzVhMTAuNjYsMTAuNjYsMCwwLDEsNy43Mi0xLjY4QTkuODgsOS44OCwwLDAsMSwxOSw0LjgxLDkuNjEsOS42MSwwLDAsMSwyMS44Myw5LDEwLjA4LDEwLjA4LDAsMCwxLDIwLjM0LDE4LjIxWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE5LjU2LDE3LjY1YTkuMjksOS4yOSwwLDAsMS03LjM1LDMuODMsMS4zMSwxLjMxLDAsMCwxLS4wOC0yLjYyLDYuNTMsNi41MywwLDAsMCw1LTIuOTIsNi4wNSw2LjA1LDAsMCwwLC42Ny01LjUxLDUuMzIsNS4zMiwwLDAsMC0xLjY0LTIuMTYsNS4yMSw1LjIxLDAsMCwwLTIuNDgtMUE1Ljg2LDUuODYsMCwwLDAsOSw4Ljg0TDEwLjc0LDExYS41OS41OSwwLDAsMS0uNDMsMUgyLjdhLjYuNiwwLDAsMS0uNi0uNzVMMy44MSwzLjgzYS41OS41OSwwLDAsMSwxLS4yMWwxLjY3LDIuMWE5LjcxLDkuNzEsMCwwLDEsNy43NS0yLjA3LDguODQsOC44NCwwLDAsMSw0LjEyLDEuOTIsOC42OCw4LjY4LDAsMCwxLDIuNTQsMy43MkE5LjE0LDkuMTQsMCwwLDEsMTkuNTYsMTcuNjVaIi8+PC9zdmc+");
      _blocksMedia.set("rotate-right.svg", "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIGlkPSJyb3RhdGUtY291bnRlci1jbG9ja3dpc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzNkNzljYzt9LmNscy0ye2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPnJvdGF0ZS1jb3VudGVyLWNsb2Nrd2lzZTwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjIuNjgsMTIuMmExLjYsMS42LDAsMCwxLTEuMjcuNjNIMTMuNzJhMS41OSwxLjU5LDAsMCwxLTEuMTYtMi41OGwxLjEyLTEuNDFhNC44Miw0LjgyLDAsMCwwLTMuMTQtLjc3LDQuMzEsNC4zMSwwLDAsMC0yLC44LDQuMjUsNC4yNSwwLDAsMC0xLjM0LDEuNzMsNS4wNiw1LjA2LDAsMCwwLC41NCw0LjYyQTUuNTgsNS41OCwwLDAsMCwxMiwxNy43NGgwYTIuMjYsMi4yNiwwLDAsMS0uMTYsNC41MkExMC4yNSwxMC4yNSwwLDAsMSwzLjc0LDE4LDEwLjE0LDEwLjE0LDAsMCwxLDIuMjUsOC43OCw5LjcsOS43LDAsMCwxLDUuMDgsNC42NCw5LjkyLDkuOTIsMCwwLDEsOS42NiwyLjVhMTAuNjYsMTAuNjYsMCwwLDEsNy43MiwxLjY4bDEuMDgtMS4zNWExLjU3LDEuNTcsMCwwLDEsMS4yNC0uNiwxLjYsMS42LDAsMCwxLDEuNTQsMS4yMWwxLjcsNy4zN0ExLjU3LDEuNTcsMCwwLDEsMjIuNjgsMTIuMloiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yMS4zOCwxMS44M0gxMy43N2EuNTkuNTksMCwwLDEtLjQzLTFsMS43NS0yLjE5YTUuOSw1LjksMCwwLDAtNC43LTEuNTgsNS4wNyw1LjA3LDAsMCwwLTQuMTEsMy4xN0E2LDYsMCwwLDAsNywxNS43N2E2LjUxLDYuNTEsMCwwLDAsNSwyLjkyLDEuMzEsMS4zMSwwLDAsMS0uMDgsMi42Miw5LjMsOS4zLDAsMCwxLTcuMzUtMy44MkE5LjE2LDkuMTYsMCwwLDEsMy4xNyw5LjEyLDguNTEsOC41MSwwLDAsMSw1LjcxLDUuNCw4Ljc2LDguNzYsMCwwLDEsOS44MiwzLjQ4YTkuNzEsOS43MSwwLDAsMSw3Ljc1LDIuMDdsMS42Ny0yLjFhLjU5LjU5LDAsMCwxLDEsLjIxTDIyLDExLjA4QS41OS41OSwwLDAsMSwyMS4zOCwxMS44M1oiLz48L3N2Zz4=");
      _blocksMedia.set("dropdown-arrow.svg", "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=");
      createBlockContextMenu(function (items) {
        var _svgchild$childNodes, _svgchild$childNodes2;
        var svgchild = document.querySelector("svg.blocklySvg g.blocklyBlockCanvas");
        var pasteItemIndex = items.findIndex(function (obj) {
          return obj._isDevtoolsFirstItem;
        });
        var insertBeforeIndex = pasteItemIndex !== -1 ?
        // If "paste" button exists, add own items before it
        pasteItemIndex :
        // If there's no such button, insert at end
        items.length;
        items.splice(insertBeforeIndex, 0, {
          enabled: !!(svgchild !== null && svgchild !== void 0 && (_svgchild$childNodes = svgchild.childNodes) !== null && _svgchild$childNodes !== void 0 && _svgchild$childNodes.length),
          text: "Export All to SVG",
          callback: function callback() {
            exportBlock(false);
          },
          separator: true
        }, {
          enabled: !!(svgchild !== null && svgchild !== void 0 && (_svgchild$childNodes2 = svgchild.childNodes) !== null && _svgchild$childNodes2 !== void 0 && _svgchild$childNodes2.length),
          text: "Export All to PNG",
          callback: function callback() {
            exportBlock(true);
          },
          separator: false
        });
        return items;
      }, {
        workspace: true
      });
      createBlockContextMenu(function (items, block) {
        var makeSpaceItemIndex = items.findIndex(function (obj) {
          return obj._isDevtoolsFirstItem;
        });
        var insertBeforeIndex = makeSpaceItemIndex !== -1 ?
        // If "make space" button exists, add own items before it
        makeSpaceItemIndex :
        // If there's no such button, insert at end
        items.length;
        items.splice(insertBeforeIndex, 0, {
          enabled: true,
          text: "Export Selected Block to SVG",
          callback: function callback() {
            exportBlock(false, block);
          },
          separator: true
        }, {
          enabled: true,
          text: "Export Selected Block to PNG",
          callback: function callback() {
            exportBlock(true, block);
          },
          separator: false
        });
        return items;
      }, {
        blocks: true
      });
    }
    function exportBlock(isExportPNG, block) {
      var svg;
      if (block) {
        svg = selectedBlocks(isExportPNG, block);
      } else {
        svg = allBlocks(isExportPNG);
      }
      // resolve nbsp whitespace
      svg.querySelectorAll("text").forEach(function (text) {
        text.innerHTML = text.innerHTML.replace(/&nbsp;/g, " ");
      });
      // resolve image path
      var scratchURL = window.location.origin;
      svg.querySelectorAll("image").forEach(function (item) {
        var builtinSvgData = blocksMedia.get(item.getAttribute("xlink:href").substring(item.getAttribute("xlink:href").lastIndexOf("/") + 1));
        if (builtinSvgData) {
          // replace svg file path (official) to inline svg
          item.setAttribute("xlink:href", builtinSvgData);
        } else if (item.getAttribute("xlink:href").indexOf("/static/") === 0) {
          // replace link path for third party website
          item.setAttribute("xlink:href", scratchURL + item.getAttribute("xlink:href").slice(0));
        } else if (item.getAttribute("xlink:href").indexOf("./static/") === 0) {
          item.setAttribute("xlink:href", scratchURL + item.getAttribute("xlink:href").slice(1));
        } else if (item.getAttribute("xlink:href").indexOf("static/") === 0) {
          item.setAttribute("xlink:href", scratchURL + "/" + item.getAttribute("xlink:href"));
        }
      });
      if (!isExportPNG) {
        exportData(new XMLSerializer().serializeToString(svg));
      } else {
        exportPNG(svg);
      }
    }
    function selectedBlocks(isExportPNG, block) {
      var svg = exSVG.cloneNode();
      var svgchild = block.svgGroup_;
      svgchild = svgchild.cloneNode(true);
      var dataShapes = svgchild.getAttribute("data-shapes");
      svgchild.setAttribute("transform", "translate(0,".concat(dataShapes === "hat" ? "18" : "0", ") ").concat(isExportPNG ? "scale(2)" : ""));
      setCSSVars(svg);
      svg.append(makeStyle());
      svg.append(svgchild);
      return svg;
    }
    function allBlocks(isExportPNG) {
      var svg = exSVG.cloneNode();
      var svgchild = document.querySelector("svg.blocklySvg g.blocklyBlockCanvas");
      svgchild = svgchild.cloneNode(true);
      var xArr = [];
      var yArr = [];
      svgchild.childNodes.forEach(function (g) {
        var x = g.getAttribute("transform").match(/translate\((.*?),(.*?)\)/)[1] || 0;
        var y = g.getAttribute("transform").match(/translate\((.*?),(.*?)\)/)[2] || 0;
        xArr.push(x * (isExportPNG ? 2 : 1));
        yArr.push(y * (isExportPNG ? 2 : 1));
      });
      svgchild.setAttribute("transform", "translate(".concat(-Math.min.apply(Math, xArr), ",").concat(-Math.min.apply(Math, yArr) + 18 * (isExportPNG ? 2 : 1), ") ").concat(isExportPNG ? "scale(2)" : ""));
      setCSSVars(svg);
      svg.append(makeStyle());
      svg.append(svgchild);
      return svg;
    }
    function exportData(text) {
      var saveLink = document.createElement("a");
      document.body.appendChild(saveLink);
      var data = new Blob([text], {
        type: "text"
      });
      var url = window.URL.createObjectURL(data);
      saveLink.href = url;
      var date = new Date();
      var timestamp = "".concat(date.toLocaleDateString(), "-").concat(date.toLocaleTimeString());
      saveLink.download = "block_".concat(timestamp, ".svg");
      saveLink.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(saveLink);
    }
    function exportPNG(svg) {
      var serializer = new XMLSerializer();
      var iframe = document.createElement("iframe");
      document.body.append(iframe);
      iframe.contentDocument.write(serializer.serializeToString(svg));
      var _iframe$contentDocume = iframe.contentDocument.body.querySelector("svg g").getBoundingClientRect(),
        width = _iframe$contentDocume.width,
        height = _iframe$contentDocume.height;
      height = height + 20 * 2;
      svg.setAttribute("width", width + "px");
      svg.setAttribute("height", height + "px");
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");
      var img = document.createElement("img");
      img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(serializer.serializeToString(svg)))));
      img.onload = function () {
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var dataURL = canvas.toDataURL("image/png");
        var link = document.createElement("a");
        var date = new Date();
        var timestamp = "".concat(date.toLocaleDateString(), "-").concat(date.toLocaleTimeString());
        link.download = "block_".concat(timestamp, ".png");
        link.href = dataURL;
        link.click();
        iframe.remove();
      };
    }
  }
};

/***/ }),

/***/ "./src/playground/userscripts/catblocks.js":
/*!*************************************************!*\
  !*** ./src/playground/userscripts/catblocks.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  func: function func() {
    if (localStorage.getItem("catblocks") === "true") {
      var shouldWatchMouseCursor = !1;
      ScratchBlocks.BlockSvg.START_HAT_HEIGHT = 31, ScratchBlocks.BlockSvg.START_HAT_PATH = "c2.6,-2.3 5.5,-4.3 8.5,-6.2c-1,-12.5 5.3,-23.3 8.4,-24.8c3.7,-1.8 16.5,13.1 18.4,15.4c8.4,-1.3 17,-1.3 25.4,0c1.9,-2.3 14.7,-17.2 18.4,-15.4c3.1,1.5 9.4,12.3 8.4,24.8c3,1.8 5.9,3.9 8.5,6.1", ScratchBlocks.BlockSvg.prototype.renderCatFace_ = function () {
        this.catPath_.svgFace.setAttribute("fill", "#000000");
        var t = ScratchBlocks.utils.createSvgElement("path", {}, this.svgFace_);
        t.setAttribute("d", "M25.2-1.1c0.1,0,0.2,0,0.2,0l8.3-2.1l-7-4.8c-0.5-0.3-1.1-0.2-1.4,0.3s-0.2,1.1,0.3,1.4L29-4.1l-4,1c-0.5,0.1-0.9,0.7-0.7,1.2C24.3-1.4,24.7-1.1,25.2-1.1z"), t.setAttribute("fill-opacity", "0"), this.catPath_.svgFace.closedEye = t;
        var e = ScratchBlocks.utils.createSvgElement("path", {}, this.svgFace_);
        e.setAttribute("d", "M62.4-1.1c-0.1,0-0.2,0-0.2,0l-8.3-2.1l7-4.8c0.5-0.3,1.1-0.2,1.4,0.3s0.2,1.1-0.3,1.4l-3.4,2.3l4,1c0.5,0.1,0.9,0.7,0.7,1.2C63.2-1.4,62.8-1.1,62.4-1.1z"), e.setAttribute("fill-opacity", "0"), this.catPath_.svgFace.closedEye2 = e;
        var c = ScratchBlocks.utils.createSvgElement("circle", {}, this.svgFace_);
        c.setAttribute("cx", "59.2"), c.setAttribute("cy", "-3.3"), c.setAttribute("r", "3.4"), c.setAttribute("fill-opacity", "0.6"), this.catPath_.svgFace.eye = c;
        var a = ScratchBlocks.utils.createSvgElement("circle", {}, this.svgFace_);
        a.setAttribute("cx", "29.1"), a.setAttribute("cy", "-3.3"), a.setAttribute("r", "3.4"), a.setAttribute("fill-opacity", "0.6"), this.catPath_.svgFace.eye2 = a;
        var s = ScratchBlocks.utils.createSvgElement("path", {}, this.svgFace_);
        s.setAttribute("d", "M45.6,0.1c-0.9,0-1.7-0.3-2.3-0.9c-0.6,0.6-1.3,0.9-2.2,0.9c-0.9,0-1.8-0.3-2.3-0.9c-1-1.1-1.1-2.6-1.1-2.8c0-0.5,0.5-1,1-1l0,0c0.6,0,1,0.5,1,1c0,0.4,0.1,1.7,1.4,1.7c0.5,0,0.7-0.2,0.8-0.3c0.3-0.3,0.4-1,0.4-1.3c0-0.1,0-0.1,0-0.2c0-0.5,0.5-1,1-1l0,0c0.5,0,1,0.4,1,1c0,0,0,0.1,0,0.2c0,0.3,0.1,0.9,0.4,1.2C44.8-2.2,45-2,45.5-2s0.7-0.2,0.8-0.3c0.3-0.4,0.4-1.1,0.3-1.3c0-0.5,0.4-1,0.9-1.1c0.5,0,1,0.4,1.1,0.9c0,0.2,0.1,1.8-0.8,2.8C47.5-0.4,46.8,0.1,45.6,0.1z"), s.setAttribute("fill-opacity", "0.6"), this.catPath_.ear.setAttribute("d", "M73.1-15.6c1.7-4.2,4.5-9.1,5.8-8.5c1.6,0.8,5.4,7.9,5,15.4c0,0.6-0.7,0.7-1.1,0.5c-3-1.6-6.4-2.8-8.6-3.6C72.8-12.3,72.4-13.7,73.1-15.6z"), this.catPath_.ear.setAttribute("fill", "#FFD5E6"), this.catPath_.ear2.setAttribute("d", "M22.4-15.6c-1.7-4.2-4.5-9.1-5.8-8.5c-1.6,0.8-5.4,7.9-5,15.4c0,0.6,0.7,0.7,1.1,0.5c3-1.6,6.4-2.8,8.6-3.6C22.8-12.3,23.2-13.7,22.4-15.6z"), this.catPath_.ear2.setAttribute("fill", "#FFD5E6");
      }, ScratchBlocks.BlockSvg.prototype.initCatStuff = function () {
        if (!this.hasInitCatStuff) {
          this.hasInitCatStuff = !0;
          var t = "c-1,-12.5 5.3,-23.3 8.4,-24.8c3.7,-1.8 16.5,13.1 18.4,15.4",
            e = "c-5.8,-4.8 -8,-18 -4.9,-19.5c3.7,-1.8 24.5,11.1 31.7,10.1",
            c = "c1.9,-2.3 14.7,-17.2 18.4,-15.4c3.1,1.5 9.4,12.3 8.4,24.8",
            a = "c7.2,1 28,-11.9 31.7,-10.1c3.1,1.5 0.9,14.7 -4.9,19.5",
            s = "c0,-7.1 3.7,-13.3 9.3,-16.9c1.7,-7.5 5.4,-13.2 7.6,-14.2c2.6,-1.3 10,6 14.6,11.1",
            i = "h33c4.6,-5.1 11.9,-12.4 14.6,-11.1c1.9,0.9 4.9,5.2 6.8,11.1c2.6,0,5.2,0,7.8,0",
            r = "c0,-4.6 1.6,-8.9 4.3,-12.3c-2.4,-5.6 -2.9,-12.4 -0.7,-13.4c2.1,-1 9.6,2.6 17,5.8c2.6,0 6.2,0 10.9,0",
            o = "c0,0 25.6,0 44,0c7.4,-3.2 14.8,-6.8 16.9,-5.8c1.2,0.6 1.6,2.9 1.3,5.8",
            l = this;
          this.catPath_.ear = ScratchBlocks.utils.createSvgElement("path", {}, this.catPath_), this.catPath_.ear2 = ScratchBlocks.utils.createSvgElement("path", {}, this.catPath_), this.RTL && (this.catPath_.ear.setAttribute("transform", "scale(-1 1)"), this.catPath_.ear2.setAttribute("transform", "scale(-1 1)")), this.catPath_.addEventListener("mouseenter", function (t) {
            clearTimeout(l.blinkFn), t.target.svgFace.eye && (t.target.svgFace.eye.setAttribute("fill-opacity", "0"), t.target.svgFace.eye2.setAttribute("fill-opacity", "0"), t.target.svgFace.closedEye.setAttribute("fill-opacity", "0.6"), t.target.svgFace.closedEye2.setAttribute("fill-opacity", "0.6")), l.blinkFn = setTimeout(function () {
              t.target.svgFace.eye && (t.target.svgFace.eye.setAttribute("fill-opacity", "0.6"), t.target.svgFace.eye2.setAttribute("fill-opacity", "0.6"), t.target.svgFace.closedEye.setAttribute("fill-opacity", "0"), t.target.svgFace.closedEye2.setAttribute("fill-opacity", "0"));
            }, 100);
          }), this.catPath_.ear.addEventListener("mouseenter", function () {
            clearTimeout(l.earFn), clearTimeout(l.ear2Fn), l.catPath_.ear.setAttribute("fill-opacity", "0"), l.catPath_.ear2.setAttribute("fill-opacity", "");
            var h = l.catPath_.svgBody.getAttribute("d");
            h = (h = (h = (h = h.replace(c, a)).replace(i, o)).replace(e, t)).replace(r, s), l.catPath_.svgBody.setAttribute("d", h), l.earFn = setTimeout(function () {
              l.catPath_.ear.setAttribute("fill-opacity", "");
              var t = l.catPath_.svgBody.getAttribute("d");
              t = (t = t.replace(a, c)).replace(o, i), l.catPath_.svgBody.setAttribute("d", t);
            }, 50);
          }), this.catPath_.ear2.addEventListener("mouseenter", function () {
            clearTimeout(l.earFn), clearTimeout(l.ear2Fn), l.catPath_.ear2.setAttribute("fill-opacity", "0"), l.catPath_.ear.setAttribute("fill-opacity", "");
            var h = l.catPath_.svgBody.getAttribute("d");
            h = (h = (h = (h = h.replace(t, e)).replace(s, r)).replace(a, c)).replace(o, i), l.catPath_.svgBody.setAttribute("d", h), l.ear2Fn = setTimeout(function () {
              l.catPath_.ear2.setAttribute("fill-opacity", "");
              var c = l.catPath_.svgBody.getAttribute("d");
              c = (c = c.replace(e, t)).replace(r, s), l.catPath_.svgBody.setAttribute("d", c);
            }, 50);
          }), this.RTL && (this.svgFace_.style.transform = "translate(-87px, 0px)"), this.shouldWatchMouse() && (this.windowListener = function (t) {
            var e = Date.now();
            if (!(e < l.lastCallTime + l.CALL_FREQUENCY_MS) && (l.lastCallTime = e, l.shouldWatchMouse() && l.workspace)) {
              var c = l.getCatFacePosition(),
                a = {
                  x: t.x / l.workspace.scale,
                  y: t.y / l.workspace.scale
                },
                s = a.x - c.x,
                i = a.y - c.y,
                r = Math.atan2(s, i),
                o = Math.sqrt(s * s + i * i),
                h = o / (o + 1),
                n = 10 / Math.sqrt(Math.pow(5 * Math.cos(r), 2) + Math.pow(2 * Math.sin(r), 2));
              s = n * h * Math.sin(r), i = n * h * Math.cos(r), l.RTL && (s -= 87), l.svgFace_.style.transform = "translate(" + s + "px, " + i + "px)";
            }
          }, document.addEventListener("mousemove", this.windowListener));
        }
      };
      var workspacePositionRect = null;
      ScratchBlocks.BlockSvg.prototype.getCatFacePosition = function () {
        workspacePositionRect || (workspacePositionRect = this.workspace.getParentSvg().getBoundingClientRect());
        var t = {
          x: workspacePositionRect.x,
          y: workspacePositionRect.y
        };
        !this.isInFlyout && this.workspace.getFlyout() && (t.x += this.workspace.getFlyout().getWidth()), t.x += this.workspace.scrollX, t.y += this.workspace.scrollY;
        var e = this.getRelativeToSurfaceXY(this.svgGroup_);
        return this.RTL && (e.x = this.workspace.getWidth() - e.x - this.width), e.x += t.x / this.workspace.scale, e.y += t.y / this.workspace.scale, e.x -= 43.5, e.y -= 4, e.x += 60, this.RTL && (e.x = screen.width - e.x), e;
      }, ScratchBlocks.BlockSvg.prototype.shouldWatchMouse = function () {
        return !1;
      };
      var originalRenderDraw = ScratchBlocks.BlockSvg.prototype.renderDraw_;
      ScratchBlocks.BlockSvg.prototype.renderDraw_ = function () {
        this.svgFace_ || this.sa_catBlockConstructor();
        for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
          t[_key] = arguments[_key];
        }
        var e = originalRenderDraw.call.apply(originalRenderDraw, [this].concat(t));
        return this.outputConnection || this.previousConnection || this.initCatStuff(), this.startHat_ && !this.svgFace_.firstChild && this.renderCatFace_(), e;
      };
      var originalDispose = ScratchBlocks.BlockSvg.prototype.dispose;
      ScratchBlocks.BlockSvg.prototype.dispose = function () {
        for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          t[_key2] = arguments[_key2];
        }
        return clearTimeout(this.blinkFn), clearTimeout(this.earFn), clearTimeout(this.ear2Fn), this.windowListener && document.removeEventListener("mousemove", this.windowListener), originalDispose.call.apply(originalDispose, [this].concat(t));
      };
      var originalSetGlowStack = ScratchBlocks.BlockSvg.prototype.setGlowStack;
      ScratchBlocks.BlockSvg.prototype.setGlowStack = function (t) {
        return this.windowListener && (t ? (document.removeEventListener("mousemove", this.windowListener), this.workspace && this.svgFace_.style && (this.RTL ? this.svgFace_.style.transform = "translate(-87px, 0px)" : this.svgFace_.style.transform = "")) : document.addEventListener("mousemove", this.windowListener)), originalSetGlowStack.call(this, t);
      }, ScratchBlocks.BlockSvg.prototype.sa_catBlockConstructor = function () {
        this.catPath_ = ScratchBlocks.utils.createSvgElement("g", {}, this.svgGroup_), this.svgFace_ = ScratchBlocks.utils.createSvgElement("g", {}, this.catPath_), this.catPath_.svgFace = this.svgFace_, this.catPath_.svgBody = this.svgPath_, this.lastCallTime = 0, this.CALL_FREQUENCY_MS = 60;
      };
      var workspace = ScratchBlocks.getMainWorkspace();
      if (workspace) {
        var t = workspace.getFlyout();
        if (t) {
          var e = t.getWorkspace();
          ScratchBlocks.Xml.clearWorkspaceAndLoadFromXml(ScratchBlocks.Xml.workspaceToDom(e), e), workspace.getToolbox().refreshSelection(), workspace.toolboxRefreshEnabled_ = !0;
        }
      }
    }
  }
};

/***/ }),

/***/ "./src/playground/userscripts/cherrypicking.js":
/*!*****************************************************!*\
  !*** ./src/playground/userscripts/cherrypicking.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  func: function func() {
    var enableCherryPicking = localStorage.getItem("cherrypicking") === "true";
    var invertCherryPicking = false;
    var enableDuplication = false;

    // mostRecentEvent_ is sometimes a fake event, so we can't rely on reading its properties.
    var ctrlOrMetaPressed = false;
    var altPressed = false;
    document.addEventListener("mousedown", function (e) {
      ctrlOrMetaPressed = e.ctrlKey || e.metaKey;
      altPressed = e.altKey;
    }, {
      capture: true
    });
    var loaded = false;
    function load() {
      if (loaded) {
        return;
      }
      loaded = true;

      // https://github.com/scratchfoundation/scratch-blocks/blob/912b8cc728bea8fd91af85078c64fcdbfe21c87a/core/gesture.js#L454
      var originalStartDraggingBlock = ScratchBlocks.Gesture.prototype.startDraggingBlock_;
      ScratchBlocks.Gesture.prototype.startDraggingBlock_ = function () {
        var block = this.targetBlock_;

        // Scratch uses fake mouse events to implement right click > duplicate
        var isRightClickDuplicate = !(this.mostRecentEvent_ instanceof MouseEvent);
        var isDuplicating = enableDuplication && altPressed && !isRightClickDuplicate && !this.flyout_ && !this.shouldDuplicateOnDrag_ && this.targetBlock_.type !== "procedures_definition";
        var isCherryPickingInverted = invertCherryPicking && !isRightClickDuplicate && block.getParent();
        var canCherryPick = enableCherryPicking || isDuplicating;
        var isCherryPicking = canCherryPick && ctrlOrMetaPressed === !isCherryPickingInverted && !block.isShadow();
        if (isDuplicating || isCherryPicking) {
          if (!ScratchBlocks.Events.getGroup()) {
            // Scratch will disable grouping on its own later.
            ScratchBlocks.Events.setGroup(true);
          }
        }
        if (isDuplicating) {
          // Based on https://github.com/scratchfoundation/scratch-blocks/blob/feda366947432b9d82a4f212f43ff6d4ab6f252f/core/scratch_blocks_utils.js#L171
          // Setting this.shouldDuplicateOnDrag_ = true does NOT work because it doesn't call changeObscuredShadowIds
          this.startWorkspace_.setResizesEnabled(false);
          ScratchBlocks.Events.disable();
          var newBlock;
          try {
            var xmlBlock = ScratchBlocks.Xml.blockToDom(block);
            newBlock = ScratchBlocks.Xml.domToBlock(xmlBlock, this.startWorkspace_);
            ScratchBlocks.scratchBlocksUtils.changeObscuredShadowIds(newBlock);
            var xy = block.getRelativeToSurfaceXY();
            newBlock.moveBy(xy.x, xy.y);
          } catch (e) {
            console.error(e);
          }
          ScratchBlocks.Events.enable();
          if (newBlock) {
            block = newBlock;
            this.targetBlock_ = newBlock;
            if (ScratchBlocks.Events.isEnabled()) {
              ScratchBlocks.Events.fire(new ScratchBlocks.Events.BlockCreate(newBlock));
            }
          }
        }
        if (isCherryPicking) {
          if (isRightClickDuplicate || isDuplicating) {
            var nextBlock = block.getNextBlock();
            if (nextBlock) {
              nextBlock.dispose();
            }
          }
          block.unplug(true);
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return originalStartDraggingBlock.call.apply(originalStartDraggingBlock, [this].concat(args));
      };
    }
    load();
  }
};

/***/ }),

/***/ "./src/playground/userscripts/index.js":
/*!*********************************************!*\
  !*** ./src/playground/userscripts/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var contextMenuCallbacks = [];
var CONTEXT_MENU_ORDER = ["editor-devtools", "block-switching", "blocks2image", "swap-local-global"];
var createdAnyBlockContextMenus = false;
function createBlockContextMenu(callback) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$workspace = _ref.workspace,
    workspace = _ref$workspace === void 0 ? false : _ref$workspace,
    _ref$blocks = _ref.blocks,
    blocks = _ref$blocks === void 0 ? false : _ref$blocks,
    _ref$flyout = _ref.flyout,
    flyout = _ref$flyout === void 0 ? false : _ref$flyout,
    _ref$comments = _ref.comments,
    comments = _ref$comments === void 0 ? false : _ref$comments;
  contextMenuCallbacks.push({
    addonId: this._addonId,
    callback: callback,
    workspace: workspace,
    blocks: blocks,
    flyout: flyout,
    comments: comments
  });
  contextMenuCallbacks.sort(function (b, a) {
    return CONTEXT_MENU_ORDER.indexOf(b.addonId) - CONTEXT_MENU_ORDER.indexOf(a.addonId);
  });
  if (createdAnyBlockContextMenus) return;
  createdAnyBlockContextMenus = true;
  var oldShow = ScratchBlocks.ContextMenu.show;
  ScratchBlocks.ContextMenu.show = function (event, items, rtl) {
    var gesture = ScratchBlocks.mainWorkspace.currentGesture_;
    var block = gesture.targetBlock_;
    var _iterator = _createForOfIteratorHelper(contextMenuCallbacks),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _step.value,
          _callback = _step$value.callback,
          _workspace = _step$value.workspace,
          _blocks = _step$value.blocks,
          _flyout = _step$value.flyout,
          _comments = _step$value.comments;
        var injectMenu =
        // Workspace
        _workspace && !block && !gesture.flyout_ && !gesture.startBubble_ ||
        // Block in workspace
        _blocks && block && !gesture.flyout_ ||
        // Block in flyout
        _flyout && gesture.flyout_ ||
        // Comments
        _comments && gesture.startBubble_;
        if (injectMenu) {
          try {
            items = _callback(items, block);
          } catch (e) {
            console.error("Error while calling context menu callback: ", e);
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    oldShow.call(this, event, items, rtl);
    var blocklyContextMenu = ScratchBlocks.WidgetDiv.DIV.firstChild;
    items.forEach(function (item, i) {
      if (i !== 0 && item.separator) {
        var itemElt = blocklyContextMenu.children[i];
        itemElt.style.paddingTop = "2px";
        itemElt.style.borderTop = "1px solid hsla(0, 0%, 0%, 0.15)";
      }
    });
  };
}
__webpack_require__(/*! ./catblocks */ "./src/playground/userscripts/catblocks.js").func();
__webpack_require__(/*! ./numberpad */ "./src/playground/userscripts/numberpad.js").func();
__webpack_require__(/*! ./blocks2image */ "./src/playground/userscripts/blocks2image.js").func(createBlockContextMenu);
__webpack_require__(/*! ./cherrypicking */ "./src/playground/userscripts/cherrypicking.js").func();

/***/ }),

/***/ "./src/playground/userscripts/numberpad.js":
/*!*************************************************!*\
  !*** ./src/playground/userscripts/numberpad.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  func: function func() {
    if (localStorage.getItem("numberpad") === "true") {
      var originalShowEditor_ = ScratchBlocks.FieldNumber.prototype.showEditor_;
      ScratchBlocks.FieldNumber.prototype.showEditor_ = function () {
        this.useTouchInteraction_ = true;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return originalShowEditor_.apply(this, args);
      };
    }
  }
};

/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** ./locale-data/complete.js (ignored) ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[["./src/playground/index.jsx","lib.min"]]]);
//# sourceMappingURL=gui.js.map