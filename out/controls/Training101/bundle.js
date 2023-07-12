/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Training101/HelloWorld.tsx":
/*!************************************!*\
  !*** ./Training101/HelloWorld.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n    };\n    return _extendStatics(d, b);\n  };\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n    _extendStatics(d, b);\n    function __() {\n      this.constructor = d;\n    }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.HelloWorld = void 0;\nvar React = __webpack_require__(/*! react */ \"react\");\nvar react_1 = __webpack_require__(/*! @fluentui/react */ \"@fluentui/react\");\n// This function will be triggered when a radio button is selecte\nvar HelloWorld = /** @class */function (_super) {\n  __extends(HelloWorld, _super);\n  function HelloWorld() {\n    var _this = _super !== null && _super.apply(this, arguments) || this;\n    _this.containerStyles = (0, react_1.mergeStyles)({\n      width: '100%',\n      margin: '10px 0',\n      selectors: {\n        '& .ms-ChoiceField': {\n          display: 'flex',\n          flexDirection: 'column',\n          alignItems: 'flex-start',\n          margin: '5px 0'\n        }\n      }\n    });\n    return _this;\n  }\n  HelloWorld.prototype.render = function () {\n    return React.createElement(React.Fragment, null, React.createElement(react_1.Stack, null, React.createElement(react_1.StackItem, null, React.createElement(react_1.Label, null, this.props.name)), React.createElement(react_1.StackItem, null, React.createElement(react_1.ChoiceGroup, {\n      options: this.props.options,\n      onChange: this.props.onChange,\n      selectedKey: this.props.selectedKey,\n      style: {\n        flexDirection: \"row\",\n        boxShadow: \"10px 10px 5px 5px #00000\"\n      }\n    }))));\n  };\n  return HelloWorld;\n}(React.Component);\nexports.HelloWorld = HelloWorld;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./Training101/HelloWorld.tsx?");

/***/ }),

/***/ "./Training101/index.ts":
/*!******************************!*\
  !*** ./Training101/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Training101 = void 0;\nvar HelloWorld_1 = __webpack_require__(/*! ./HelloWorld */ \"./Training101/HelloWorld.tsx\");\nvar React = __webpack_require__(/*! react */ \"react\");\nvar Training101 = /** @class */function () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function Training101() {\n    var _this = this;\n    this._options = [];\n    // chnages are done here after getting the data\n    this.onRadioButtonChange = function (newValue) {\n      _this._selectedKey = newValue;\n      _this.notifyOutputChanged();\n    };\n  }\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   */\n  Training101.prototype.init = function (context, notifyOutputChanged, state) {\n    var _a;\n    this.notifyOutputChanged = notifyOutputChanged;\n    // const choices= context.parameters.sampleProperty.attributes?.Options;\n    // if (choices) {\n    //     this._options = choices.map(option => {\n    //         return {\n    //             key: option.Value,\n    //             text: option.Label\n    //         };\n    //     });\n    // }\n    // this code is for checking prep poublation of the data \n    // this._selectedKey = context.parameters.sampleProperty.raw\n    // ?Number( context.parameters.sampleProperty.raw.toString())\n    // : \"\";\n    //   this._selectedKey= context.parameters.sampleProperty.raw ? context.parameters.sampleProperty.raw.toString() : ''\n    if (context.parameters.sampleProperty !== undefined) {\n      var choices = (_a = context.parameters.sampleProperty.attributes) === null || _a === void 0 ? void 0 : _a.Options;\n      if (choices) {\n        this._options = choices.map(function (option) {\n          return {\n            key: option.Value,\n            text: option.Label\n          };\n        });\n      }\n      // Set the selected key based on the raw value of the sampleProperty parameter\n      this._selectedKey = context.parameters.sampleProperty.raw ? Number(context.parameters.sampleProperty.raw.toString()) : 0;\n    }\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   * @returns ReactElement root react element for the control\r\n   */\n  Training101.prototype.updateView = function (context) {\n    var _this = this;\n    var _a, _b;\n    var choices = (_a = context.parameters.sampleProperty.attributes) === null || _a === void 0 ? void 0 : _a.Options;\n    if (choices) {\n      this._options = choices.map(function (option) {\n        return {\n          key: option.Value,\n          text: option.Label\n        };\n      });\n    }\n    var props = {\n      name: (_b = context.parameters.sampleProperty.attributes) === null || _b === void 0 ? void 0 : _b.DisplayName,\n      options: this._options,\n      selectedKey: this._selectedKey,\n      onChange: function onChange(ev, option) {\n        if (option) {\n          _this._selectedKey = option.key;\n          _this.notifyOutputChanged();\n        }\n      }\n    };\n    return React.createElement(HelloWorld_1.HelloWorld, props);\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n  Training101.prototype.getOutputs = function () {\n    return {\n      sampleProperty: Number(this._selectedKey)\n    };\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n  Training101.prototype.destroy = function () {\n    // Add code to cleanup control if necessary\n  };\n  return Training101;\n}();\nexports.Training101 = Training101;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./Training101/index.ts?");

/***/ }),

/***/ "@fluentui/react":
/*!*************************************!*\
  !*** external "FluentUIReactv8290" ***!
  \*************************************/
/***/ ((module) => {

module.exports = FluentUIReactv8290;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./Training101/index.ts");
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('SampleNamespace.Training101', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Training101);
} else {
	var SampleNamespace = SampleNamespace || {};
	SampleNamespace.Training101 = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Training101;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}