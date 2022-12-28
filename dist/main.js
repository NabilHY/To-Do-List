/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --light-gray: #d0d0d0;\r\n  --gray-background: rgb(110, 109, 109);\r\n  --popping-font: 'Poppins', sans-serif;\r\n  --blue-background: rgb(5, 3, 87);\r\n  --red: rgb(255, 0, 0);\r\n  --white: rgb(255, 255, 255);\r\n  --green: rgb(27, 212, 42);\r\n  --orange: rgb(255, 136, 0);\r\n}\r\n\r\nhtml,\r\nbody {\r\n  background-color: var(--light-gray);\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbutton {\r\n  padding: 0;\r\n  border: 0;\r\n}\r\n\r\n#add-btn {\r\n  width: 40px;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  background-color: var(--gray-background);\r\n  color: var(--white);\r\n  cursor: pointer;\r\n}\r\n\r\n.centered {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: var(--white);\r\n  padding: 5px 25px;\r\n  width: 80%;\r\n  border-radius: 10px;\r\n  border-style: ridge;\r\n  border: 0;\r\n}\r\n\r\n.row {\r\n  font-family: var(--popping-font);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.row input {\r\n  border-style: none;\r\n  outline: none;\r\n  width: 100%;\r\n}\r\n\r\n.task-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px 0;\r\n}\r\n\r\n.clear {\r\n  font-family: var(--popping-font);\r\n  text-align: center;\r\n  font-size: medium;\r\n  color: grey;\r\n  background-color: var(--white);\r\n  padding: 5%;\r\n  cursor: pointer;\r\n}\r\n\r\n.buttons {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.edit-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40px;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  background-color: var(--blue-background);\r\n  color: var(--white);\r\n  cursor: pointer;\r\n}\r\n\r\n.remove-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40px;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  background-color: var(--red);\r\n  color: var(--white);\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  width: 20px;\r\n  height: 20px;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"] :checked::after {\r\n  background-color: black;\r\n  color: azure;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked::after {\r\n  width: 40px;\r\n  height: 40px;\r\n  background-color: var(--green);\r\n  color: var(--green);\r\n  cursor: pointer;\r\n}\r\n\r\ninput:focus {\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  font-family: var(--popping-font);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border: 0;\r\n}\r\n\r\n.check {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40px;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  background-color: var(--green);\r\n  color: rgb(0, 0, 0);\r\n  cursor: pointer;\r\n}\r\n\r\n.none {\r\n  display: none;\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.reset-btn {\r\n  cursor: pointer;\r\n}\r\n\r\n.reset-btn:hover {\r\n  transform: translateX(10px);\r\n}\r\n\r\n.alert-message {\r\n  position: absolute;\r\n  left: 39%;\r\n  align-items: center;\r\n  font-family: var(--popping-font);\r\n  background-color: var(--red);\r\n  border-radius: 20px;\r\n  padding: 0 1%;\r\n  margin: 1%;\r\n}\r\n\r\n.edit-message {\r\n  position: absolute;\r\n  left: 39%;\r\n  align-items: center;\r\n  font-family: var(--popping-font);\r\n  background-color: var(--blue-background);\r\n  border-radius: 20px;\r\n  padding: 0 1%;\r\n  margin: 1%;\r\n  color: var(--white);\r\n}\r\n\r\n.success-message {\r\n  position: absolute;\r\n  left: 39%;\r\n  align-items: center;\r\n  font-family: var(--popping-font);\r\n  background-color: var(--green);\r\n  border-radius: 20px;\r\n  padding: 0 1%;\r\n  margin: 1%;\r\n  color: var(--white);\r\n}\r\n\r\n.reset {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40px;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  background-color: var(--orange);\r\n  color: rgb(0, 0, 0);\r\n  cursor: pointer;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ (() => {

throw new Error("Module parse failed: Export 'loadLocalStorage' is not defined (52:9)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n| };\n| \n> export { loadLocalStorage, addTask, tasksSection };");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tasksSection = document.querySelector('.task-section');

const loadLocalStorage = () => {
  if (localStorage.length > 0) {
    const loadedTasks = JSON.parse(localStorage.getItem('tasks'));
    loadedTasks.forEach((task) => {
      if (task.completed === true) {
        tasksSection.innerHTML += `
        <div class="task-row">
          <input data-id=${task.id} type="checkbox" class="status" checked>
          <input type="text" readonly="readonly" value=${task.description} class="completed">
          <div class="buttons none">
              <button>
                  <i class="edit-btn fa-regular fa-pen-to-square" data-id=${task.id}></i>
              </button>
              <button>
                  <i class="remove-btn fa-solid fa-delete-left" data-id=${task.id}></i>
              </button>
          </div>
        </div>
          `;
      } else {
        tasksSection.innerHTML += `
          <div class="task-row">
        <input data-id="${task.id}" type="checkbox" class="status">
        <input type='text' readonly='readonly' value='${task.description}'>
        <div class="buttons">
            <button>
                <i class="edit-btn fa-regular fa-pen-to-square" data-id="${task.id}"></i>
            </button>
            <button>
                <i class="remove-btn fa-solid fa-delete-left" data-id="${task.id}"></i>
            </button>
        </div>
      </div> 
        `;
      }
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadLocalStorage);

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeFunction": () => (/* binding */ removeFunction),
/* harmony export */   "updateList": () => (/* binding */ updateList)
/* harmony export */ });
const removeFunction = (el) => {
  el.parentElement.parentElement.parentElement.remove();
};

const updateList = (taskIndex) => {
  const list = JSON.parse(localStorage.getItem('tasks'));
  list.forEach((task, index) => {
    if (task.id == taskIndex) {
      list.splice(index, 1);
    }
  });

  let i = 0;

  while (i < list.length) {
    list[i].id = i + 1;
    i += 1;
  }
  localStorage.setItem('tasks', JSON.stringify(list));
};



/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const editTask = (e) => {
  const element = (e.target.parentElement.parentElement.parentElement.children[1]);
  const message = document.createElement('div');
  message.classList.add('edit-message');
  const p = document.createElement('p');
  p.innerText = 'Press Enter after editing your Task';
  message.appendChild(p);
  document.body.appendChild(message);
  setTimeout(() => {
    const element = document.querySelector('.edit-message');
    element.classList.add('none');
  }, 3000);
  element.setAttribute('value', '');
  element.removeAttribute('readonly');
  element.focus();
  e.target.setAttribute('class', 'fa-solid fa-check check');
  element.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') {
      element.setAttribute('readonly', 'readonly');
      e.target.setAttribute('class', 'edit-btn fa-regular fa-pen-to-square');
      const index = parseInt(e.target.getAttribute('data-id'), 10);
      const arr = JSON.parse(localStorage.getItem('tasks'));
      arr.forEach((task) => {
        if (task.id === index) {
          task.description = element.value;
        }
      });
      localStorage.setItem('tasks', JSON.stringify(arr));
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "check": () => (/* binding */ check),
/* harmony export */   "editValue": () => (/* binding */ editValue),
/* harmony export */   "restoreValue": () => (/* binding */ restoreValue),
/* harmony export */   "unchecked": () => (/* binding */ unchecked)
/* harmony export */ });
const check = (boxEle) => {
  // change the ui to mark the task as complete
  const buttons = boxEle.parentNode.lastElementChild;
  const task = (boxEle.nextElementSibling);
  buttons.classList.add('none');
  task.classList.add('completed');
};

const unchecked = (boxEle) => {
  const buttons = boxEle.parentNode.lastElementChild;
  const task = (boxEle.nextElementSibling);
  buttons.classList.remove('none');
  task.classList.remove('completed');
};

const editValue = (index) => {
  const arr = JSON.parse(localStorage.getItem('tasks'));
  arr.forEach((task) => {
    if (task.id === index) {
      task.completed = true;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(arr));
};

const restoreValue = (index) => {
  const arr = JSON.parse(localStorage.getItem('tasks'));
  arr.forEach((task) => {
    if (task.id === index) {
      task.completed = false;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(arr));
};



/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _new_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _new_task_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_new_task_js__WEBPACK_IMPORTED_MODULE_0__);


const clearCompletedTasks = () => {
  const arr = JSON.parse(localStorage.getItem('tasks'));
  const filtered = arr.filter((task) => task.completed === false);
  localStorage.setItem('tasks', JSON.stringify(filtered));
  _new_task_js__WEBPACK_IMPORTED_MODULE_0__.tasksSection.innerHTML = '';
  (0,_new_task_js__WEBPACK_IMPORTED_MODULE_0__.loadLocalStorage)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompletedTasks);

/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_new_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _modules_new_task_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_new_task_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _modules_remove_task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _modules_edit_task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _modules_check_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _modules_clear_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);








const addBtn = document.getElementById('add-btn');
const clearBtn = document.querySelector('.clear');
const reset = document.querySelector('.reset');

_modules_new_task_js__WEBPACK_IMPORTED_MODULE_1__.tasksSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    (0,_modules_remove_task_js__WEBPACK_IMPORTED_MODULE_3__.removeFunction)(e.target);
    (0,_modules_remove_task_js__WEBPACK_IMPORTED_MODULE_3__.updateList)(Number(e.target.getAttribute('data-id')));
  }
});

_modules_new_task_js__WEBPACK_IMPORTED_MODULE_1__.tasksSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit-btn')) {
    (0,_modules_edit_task_js__WEBPACK_IMPORTED_MODULE_4__["default"])(e);
  }
});

_modules_new_task_js__WEBPACK_IMPORTED_MODULE_1__.tasksSection.addEventListener('change', (e) => {
  if ((e.target.tagName === 'INPUT') && (e.target.type === 'checkbox')) {
    if (e.target.checked === false) {
      (0,_modules_check_js__WEBPACK_IMPORTED_MODULE_5__.unchecked)(e.target);
      (0,_modules_check_js__WEBPACK_IMPORTED_MODULE_5__.restoreValue)(Number(e.target.getAttribute('data-id')));
    } else {
      (0,_modules_check_js__WEBPACK_IMPORTED_MODULE_5__.check)(e.target);
      (0,_modules_check_js__WEBPACK_IMPORTED_MODULE_5__.editValue)(Number(e.target.getAttribute('data-id')));
    }
  }
});

reset.addEventListener('click', () => {
  window.localStorage.clear();
  _modules_new_task_js__WEBPACK_IMPORTED_MODULE_1__.tasksSection.innerHTML = '';
});
clearBtn.addEventListener('click', _modules_clear_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
addBtn.addEventListener('click', _modules_new_task_js__WEBPACK_IMPORTED_MODULE_1__.addTask);
document.addEventListener('DOMContentLoaded', _modules_local_storage_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

})();

/******/ })()
;