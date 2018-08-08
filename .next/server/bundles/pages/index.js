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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_scss__ = __webpack_require__("./components/Header/header.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__header_scss__);
var _jsxFileName = "/Users/rik/Desktop/humanoids/team-awesome-react/team-awesome-rik/components/Header/Header.jsx";



var Header = function Header() {
  var handleClick = function handleClick() {
    return 'tijdelijk';
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "title-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "team awesome"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "menu-toggle menu-toggle--open",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "menu-toggle__item menu-toggle__item--close",
    src: "/static/icons/hamburger.svg",
    alt: "burger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "menu-toggle__icon menu-toggle__item--open",
    src: "/static/icons/close.svg",
    alt: "cross",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className: "main-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "main-nav__nav-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "main-nav__item main-nav__item--active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, "Timesheets"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "main-nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, "Team members"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "main-nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Projects"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "main-nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "Clients"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "main-nav__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "Documents"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "profile",
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "logo",
    src: "/static/logo.jpg",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "picture",
    src: "/static/rik.jpg",
    alt: "pic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    className: "arrow-down",
    src: "/static/icons/arrow-down.svg",
    alt: "arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Header/header.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header_Header__ = __webpack_require__("./components/Header/Header.jsx");
var _jsxFileName = "/Users/rik/Desktop/humanoids/team-awesome-react/team-awesome-rik/pages/index.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Header_Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }));
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map