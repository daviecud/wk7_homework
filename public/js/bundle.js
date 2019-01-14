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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Characters = __webpack_require__(/*! ./models/star_wars.js */ \"./src/models/star_wars.js\");\nconst SelectView = __webpack_require__(/*! ./views/select_view.js */ \"./src/views/select_view.js\");\nconst CharacterListView = __webpack_require__(/*! ./views/star_wars_list_view.js */ \"./src/views/star_wars_list_view.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('Javascript Loaded');\n\n  const selectElement = document.querySelector('select#character-select');\n    const selectView = new SelectView(selectElement);\n    selectView.bindEvents();\n\n    const listContainer = document.querySelector('#character-list');\n    const characterListView = new CharacterListView(listContainer);\n    characterListView.bindEvents();\n\n    const characters = new Characters;\n    characters.bindEvents();\n    characters.getData();\n  });\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url\n};\n\nRequestHelper.prototype.get = function (onComplete) {\n  return fetch(this.url)\n    .then(response => response.json());\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/star_wars.js":
/*!*********************************!*\
  !*** ./src/models/star_wars.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Request = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst Characters = function () {\n  this.characterData = [];\n  this.name = [];\n};\n\nCharacters.prototype.bindEvents = function () {\n  PubSub.subscribe('SelectView:change', (evt)  => {\n    const nameIndex = evt.detail;\n    this.publishCharactersByName(nameIndex);\n  })\n};\n\n\nCharacters.prototype.getData = function(){\n  const request = new Request('https://swapi.co/api/people/?format=json');\n  request.get().then((data) => {\n    this.characterData = data;\n    PubSub.publish('Characters:characters-ready', this.characterData);\n    this.publishNames(data);\n  });\n}\n\nCharacters.prototype.publishNames = function (data) {\n  this.characterData = data;\n  this.name = this.uniqueNameList();\n  console.log(data);\n  PubSub.publish('Characters:name-ready', this.name);\n}\n\nCharacters.prototype.characterList = function () {\n  const fullList = this.name.map(character => character.name);\n  console.log(fullList);\n  return fullList;\n}\n\nCharacters.prototype.uniqueNameList = function () {\n  return this.characterList().filter((character, index, array) => {\n    return array.indexOf(character) === index;\n  });\n}\n\nCharacters.prototype.charactersByName = function (nameIndex) {\n  const selectedName = this.name[nameIndex];\n  return this.characterData.filter((character) => {\n    return character.name === selectedName;\n  });\n};\n\nCharacters.prototype.publishCharacterssByName = function (nameIndex) {\n  const foundCharacters = this.charactersByName(nameIndex);\n  PubSub.publish('Characters:characters-ready', foundCharacters);\n};\n\nmodule.exports = Characters;\n\n\n\n\n\n// const PubSub = require('../helpers/pub_sub.js');\n//\n// const StarWars = function(){\n//   this.starWars = [];\n// }\n//\n// StarWars.prototype.getData = function(){\n//   const xhr = new XMLHttpRequest();\n//\n//   xhr.addEventListener('load', () => {\n//     if (xhr.status != 200){\n//       return;\n//   }\n//   const jsonString = xhr.responseText;\n//   const data = JSON.parse(jsonString);\n//   this.countries = data;\n//   PubSub.publish('StarWars:all-data', this.starWars);\n//   console.log('working?', data);\n//   });\n//\n//  xhr.open('GET', 'https://swapi.co/api/');\n//  xhr.setRequestHeader('Accept', 'application/json')\n//  xhr.send();\n//\n// }\n//\n// StarWars.prototype.bindEvents = function() {\n//   PubSub.publish('StarWars:data-ready', this.starWars);\n//\n//   PubSub.subscribe('SelectView:selected', (event) => {\n//     const selectedIndex = event.detail;\n//     const star = this.findStar(selectedIndex);\n//     PubSub.publish('StarWars:chosen-selected', star);\n//\n//   });\n// }\n//\n// StarWars.prototype.findStar = function (index) {\n//   return this.starWars[index];\n// }\n//\n//\n// module.exports = StarWars;\n//\n//\n//\n//\n// // const RequestHelper = require('../helpers/request.js');\n// // const PubSub = require('../helpers/pub_sub.js');\n// //\n// // const StarWars = function () {\n// //   this.starWarsData = [];\n// //\n// // };\n// //\n// // StarWars.prototype.getData = function(){\n// //   const xhr = new XMLHttpRequest();\n// //\n// //   xhr.addEventListener('load', () => {\n// //     if (xhr.status != 200){\n// //       return;\n// //   }\n// //\n// //   const jsonString = xhr.responseText;\n// //   const data = JSON.parse(jsonString);\n// //   this.starWarsData = data;\n// //   PubSub.publish('StarWars:loaded', this.starWarsData);\n// //   console.log('working ?', data);\n// // });\n// //\n// // xhr.open('GET', 'https://swapi.co/api/');\n// // xhr.setRequestHeader('Accept', 'application/json')\n// // xhr.send();\n// // };\n// // // StarWars.prototype.bindEvents = function () {\n// // //   PubSub.subscribe('SelectView:change', (event) => {\n// // //     const characterIndex = event.detail;\n// // //     this.publishStarWarsByCharacters()\n// // //   })\n// // // };\n// //\n// // // StarWars.prototype.getData = function () {\n// // //   const request = new RequestHelper('https://swapi.co/api/')\n// // //   console.log('working ?', request);\n// // //   request.get((data) => {\n// // //     PubSub.publish('StarWars:choice-chosen', data)\n// // //   })\n// // // }\n\n\n//# sourceURL=webpack:///./src/models/star_wars.js?");

/***/ }),

/***/ "./src/views/select_view.js":
/*!**********************************!*\
  !*** ./src/views/select_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub */ \"./src/helpers/pub_sub.js\");\n\nconst SelectView = function (selectElement) {\n  this.selectElement = selectElement;\n};\n\nSelectView.prototype.bindEvents = function () {\n  PubSub.subscribe('Characters:names-ready', (event) => {\n    this.populateSelect(event.detail);\n  });\n\n  this.selectElement.addEventListener('change', (evt) => {\n    evt.preventDefault(\n      \n    )\n    const selectedIndex = evt.target.value;\n    PubSub.publish('SelectView:change', selectedIndex);\n  });\n};\n\nSelectView.prototype.populateSelect = function (names) {\n  names.forEach((name, index) => {\n    const option = this.createNameOption(name, index);\n    this.selectElement.appendChild(option);\n  })\n};\n\nSelectView.prototype.createNameOption = function (name, index) {\n  const option = document.createElement('option');\n  option.textContent = name;\n  option.value = index;\n  return option;\n};\n\nmodule.exports = SelectView;\n\n\n//# sourceURL=webpack:///./src/views/select_view.js?");

/***/ }),

/***/ "./src/views/star_wars_detail_view.js":
/*!********************************************!*\
  !*** ./src/views/star_wars_detail_view.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const CharacterDetailView = function () {};\n\nCharacterDetailView.prototype.createCharacterDetail = function (character) {\n  const characterDetail = document.createElement('div');\n  characterDetail.classList.add('character-detail');\n\n  const name = document.createElement('h3');\n  name.textContent = character.name;\n  characterDetail.appendChild(name);\n\n  const detailsList = document.createElement('ul');\n  const skin_color = this.createDetailListItem('Skin Color:', character.skin_color);\n  detailsList.appendChild(skin_color);\n\n  const gender = this.createDetailListItem('Gender', character.gender)\n  detailsList.appendChild(gender);\n\n  const home = this.createDetailListItem('Homeworld - ', character.homeworld)\n\n  characterDetail.appendChild(detailsList);\n  return characterDetail;\n};\n\nCharacterDetailView.prototype.createDetailListItem = function (label, property) {\n  const element = document.createElement('li');\n  element.textContent = `${label}: ${property}`;\n  return element;\n};\n\nmodule.exports = CharacterDetailView;\n\n\n//# sourceURL=webpack:///./src/views/star_wars_detail_view.js?");

/***/ }),

/***/ "./src/views/star_wars_list_view.js":
/*!******************************************!*\
  !*** ./src/views/star_wars_list_view.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst CharacterDetailView = __webpack_require__(/*! ./star_wars_detail_view.js */ \"./src/views/star_wars_detail_view.js\");\nconst StarWarsData = __webpack_require__(/*! ../models/star_wars.js */ \"./src/models/star_wars.js\")\n\nconst CharacterListView = function (container) {\n  this.container = container;\n};\nconsole.log(CharacterListView);\nCharacterListView.prototype.bindEvents = function () {\n  PubSub.subscribe('Characters:name-ready', (evt) => {\n    const characters = evt.detail;\n    \n\n    this.render(characters);\n  });\n};\n//log is telling me that the data is subscribed,\n// and I have an array to work wth\n\n\n// having problem\nCharacterListView.prototype.render = function (characters) {\n  this.clearList();\n\n  characters.forEach((character) => {\n    console.log(character);\n    const characterItem = this.createCharacterListItem(character);\n    this.container.appendChild(characterItem);\n  });\n};\n\nCharacterListView.prototype.clearList = function () {\n  this.container.innerHTML = '';\n};\n\nCharacterListView.prototype.createCharacterListItem = function (character) {\n  const characterDetailView = new CharacterDetailView();\n  const characterDetail = characterDetailView.createCharacterDetail(character);\n  return characterDetail;\n};\n\nmodule.exports = CharacterListView;\n\n\n//# sourceURL=webpack:///./src/views/star_wars_list_view.js?");

/***/ })

/******/ });