module.exports =
__NEXT_REGISTER_PAGE('/', function() {
          var comp =
      webpackJsonp([5],{

/***/ "./components/Header/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
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
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[4])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map