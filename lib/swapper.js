(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Swapper", [], factory);
	else if(typeof exports === 'object')
		exports["Swapper"] = factory();
	else
		root["Swapper"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Swapper = function () {
    function Swapper(config) {
        var _this = this;

        _classCallCheck(this, Swapper);

        this._name = 'Swapper';

        this.config = config || {};

        this.isEnabled = config.isEnabled !== undefined ? config.isEnabled : true;
        this.dragSrcEl = null;
        this.boxes = document.querySelectorAll('.' + this.config.elementClass);

        [].forEach.call(this.boxes, function (box) {
            if (_this.isEnabled) {
                box.setAttribute('draggable', _this.isEnabled);
            }
            box.addEventListener('dragstart', function (e) {
                return _this.handleDragStart(e);
            }, false);
            box.addEventListener('dragenter', function (e) {
                return _this.handleDragEnter(e);
            }, false);
            box.addEventListener('dragover', function (e) {
                return _this.handleDragOver(e);
            }, false);
            box.addEventListener('dragleave', function (e) {
                return _this.handleDragLeave(e);
            }, false);
            box.addEventListener('drop', function (e) {
                return _this.handleDrop(e);
            }, false);
            box.addEventListener('dragend', function (e) {
                return _this.handleDragEnd(e);
            }, false);
        });
    }

    _createClass(Swapper, [{
        key: 'handleDragStart',
        value: function handleDragStart(e) {
            e.target.classList.add('swapper-moving');

            this.dragSrcEl = e.target;

            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', e.target.innerHTML);
        }
    }, {
        key: 'handleDragOver',
        value: function handleDragOver(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }

            e.dataTransfer.dropEffect = 'move';

            return false;
        }
    }, {
        key: 'handleDragEnter',
        value: function handleDragEnter(e) {
            // current hover target
            e.target.classList.add('swapper--over');
        }
    }, {
        key: 'handleDragLeave',
        value: function handleDragLeave(e) {
            // previous target element
            e.target.classList.remove('swapper--over');
        }
    }, {
        key: 'handleDrop',
        value: function handleDrop(e) {
            var _this2 = this;

            if (e.stopPropagation) {
                e.stopPropagation(); // stops the browser from redirecting.
            }

            // Don't do anything if dropping the same column we're dragging.
            if (this.dragSrcEl !== e.target) {
                // Set the source column's HTML to the HTML of the column we dropped on.
                this.dragSrcEl.innerHTML = e.target.innerHTML;
                e.target.innerHTML = e.dataTransfer.getData('text/html');

                // Swap classes
                var oldClasses = e.target.classList.toString().split(' ');

                e.target.classList = this.dragSrcEl.classList;

                this.dragSrcEl.classList = '';
                oldClasses.forEach(function (o) {
                    _this2.dragSrcEl.classList.add(o);
                });

                // Swap IDs
                var oldId = e.target.id;

                e.target.id = this.dragSrcEl.id;
                this.dragSrcEl.id = oldId;

                // Callback when it's done
                if (this.config.onChange) {
                    this.config.onChange(this.boxes);
                }
            }

            return false;
        }
    }, {
        key: 'handleDragEnd',
        value: function handleDragEnd(e) {
            [].forEach.call(this.boxes, function (col) {
                col.classList.remove('swapper--over');
                col.classList.remove('swapper--moving');
            });
        }
    }, {
        key: 'enable',
        value: function enable() {
            this.isEnabled = true;
            [].forEach.call(this.boxes, function (box) {
                box.setAttribute('draggable', true);
            });
        }
    }, {
        key: 'disable',
        value: function disable() {
            this.isEnabled = false;
            [].forEach.call(this.boxes, function (box) {
                box.removeAttribute('draggable');
            });
        }
    }, {
        key: '_returnFalse',
        value: function _returnFalse() {
            return false;
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        }
    }]);

    return Swapper;
}();

exports.default = Swapper;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=Swapper.js.map