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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menu_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-json.js */ \"./src/menu-json.js\");\n\n\n\nwindow.onload = function () {\n  new _menu_js__WEBPACK_IMPORTED_MODULE_0___default.a(_menu_json_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).init();\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu-json.js":
/*!**************************!*\
  !*** ./src/menu-json.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  left: {\n    groups: [{\n      subTitle: '식사류',\n      menus: [{\n        name: '두부네 정식',\n        price: '00,000원',\n        desc: 'a'\n      }, {\n        name: '전복 순두부',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '얼큰 순두부',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '순두부',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '곤드레밥',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '된장찌개',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '돌솥 고등어구이',\n        price: '00,000원',\n        desc: ''\n      }]\n    }, {\n      subTitle: '추가메뉴',\n      menus: [{\n        name: '고기 추가',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '돌솥밥 추가',\n        price: '00,000원',\n        desc: ''\n      }]\n    }]\n  },\n  center: {\n    groups: [{\n      subTitle: '식사류22',\n      menus: [{\n        name: '두부네 정식',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '전복 순두부',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '얼큰 순두부',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '순두부',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '곤드레밥',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '된장찌개',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '돌솥 고등어구이',\n        price: '00,000원',\n        desc: ''\n      }]\n    }, {\n      subTitle: '추가메뉴222',\n      menus: [{\n        name: '고기 추가',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '돌솥밥 추가',\n        price: '00,000원',\n        desc: ''\n      }]\n    }]\n  },\n  right: {\n    groups: [{\n      subTitle: '식사류33',\n      menus: [{\n        name: '두부네 정식',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '전복 순두부',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '얼큰 순두부',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '순두부',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '곤드레밥',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '된장찌개',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '돌솥 고등어구이',\n        price: '00,000원',\n        desc: ''\n      }]\n    }, {\n      subTitle: '추가메뉴222',\n      menus: [{\n        name: '고기 추가',\n        price: '00,000원',\n        desc: ''\n      }, {\n        name: '돌솥밥 추가',\n        price: '00,000원',\n        desc: ''\n      }]\n    }]\n  }\n});\n\n//# sourceURL=webpack:///./src/menu-json.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nmodule.exports =\n/*#__PURE__*/\nfunction () {\n  function Menu(menuJson) {\n    _classCallCheck(this, Menu);\n\n    this.menuJson = menuJson;\n    this.container = document.querySelector('#rm-container');\n    this.cover = this.container.querySelector('div.rm-cover');\n    this.middle = this.container.querySelector('div.rm-middle');\n    this.right = this.container.querySelector('div.rm-right'); // this.details = this.container.querySelector('a.rm-viewdetails');\n\n    this.open = this.cover.querySelector('a.rm-button-open');\n    this.close = this.right.querySelector('span.rm-close');\n  }\n\n  _createClass(Menu, [{\n    key: \"_updateMenus\",\n    value: function _updateMenus() {\n      this._updateMenu(this.cover, 'left', 'rm-back');\n\n      this._updateMenu(this.middle, 'center', 'rm-inner');\n\n      this._updateMenu(this.right, 'right', 'rm-back');\n    }\n  }, {\n    key: \"_updateMenu\",\n    value: function _updateMenu(targetCover, pos, coverClass) {\n      var cover = targetCover.querySelector(\"div.\".concat(coverClass));\n      var content = cover.querySelector('div.rm-content');\n      content.remove();\n\n      if (this.menuJson[pos]) {\n        this._renderMenu(cover, this.menuJson[pos].groups);\n      }\n    }\n  }, {\n    key: \"_renderMenu\",\n    value: function _renderMenu(targetNode, menuJson) {\n      var _this = this;\n\n      var els = menuJson.map(function (m) {\n        return \"\\n\\t\\t\\t<h4>\".concat(m.subTitle, \"</h4>\\n\\t\\t\\t<dl>\\n\\t\\t\\t\").concat(_this._renderSubmenu(m.menus).join(''), \"\\n\\t\\t\\t</dl>\\n\\t\\t\\t\");\n      });\n      var contentWapp = document.createElement('div');\n      contentWapp.classList.add('rm-content');\n      contentWapp.innerHTML = els;\n      targetNode.appendChild(contentWapp);\n    }\n  }, {\n    key: \"_renderSubmenu\",\n    value: function _renderSubmenu(submenuJson) {\n      return submenuJson.map(function (s) {\n        return \"\\n\\t\\t\\t\\t<dt>\".concat(s.name, \"<span>\").concat(s.price, \"</span></dt>\\n\\t\\t\\t\\t<dd>\").concat(s.desc, \"</dd>\\n\\t\\t\\t\");\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      console.info('Menu: init');\n\n      this._initEvents();\n\n      this._updateMenus();\n    }\n  }, {\n    key: \"_initEvents\",\n    value: function _initEvents() {\n      var _this2 = this;\n\n      console.info('Menu: _initEvent');\n      this.cover.addEventListener('click', function (e) {\n        _this2._openMenu();\n\n        e.stopPropagation();\n      });\n      this.close.addEventListener('click', function (e) {\n        _this2._closeMenu();\n\n        e.stopPropagation();\n      }); // this.details.addEventListener('click', (e) => {\n      // \tthis.container.classList.remove('rm-in');\n      // \t// $container.removeClass('rm-in').children('div.rm-modal').remove();\n      // \tthis._viewDetails(e.target);\n      // \te.stopPropagation();\n      // });\n    }\n  }, {\n    key: \"_openMenu\",\n    value: function _openMenu() {\n      this.container.classList.add('rm-open');\n    }\n  }, {\n    key: \"_closeMenu\",\n    value: function _closeMenu() {\n      var _this$container$class;\n\n      var clzz = ['rm-open', 'rm-nodelay', 'rm-in'];\n\n      (_this$container$class = this.container.classList).remove.apply(_this$container$class, clzz);\n    }\n  }, {\n    key: \"_viewDetails\",\n    value: function _viewDetails(recipe) {\n      // TODO: viewDetail\n      console.info('_viewDetail', recipe); // var title = recipe.text(),\n      // \timg = recipe.data('thumb'),\n      // \tdescription = recipe.parent().next().text(),\n      // \turl = recipe.attr('href');\n      // var $modal = $('<div class=\"rm-modal\"><div class=\"rm-thumb\" style=\"background-image: url(' + img + ')\"></div><h5>' + title + '</h5><p>' + description + '</p><a href=\"' + url + '\">See the recipe</a><span class=\"rm-close-modal\">x</span></div>');\n      // $modal.appendTo($container);\n      // var h = $modal.outerHeight(true);\n      // $modal.css('margin-top', -h / 2);\n      // setTimeout(function () {\n      // \t$container.addClass('rm-in rm-nodelay');\n      // \t$modal.find('span.rm-close-modal').on('click', function () {\n      // \t\t$container.removeClass('rm-in');\n      // \t});\n      // }, 0);\n    }\n  }]);\n\n  return Menu;\n}();\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });