const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Characters = function () {
  this.characterData = [];
  this.name = [];
};

Characters.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (evt)  => {
    const nameIndex = evt.detail;
    this.publishCharactersByName(nameIndex);
  })
};


Characters.prototype.getData = function(){
  const request = new Request('https://swapi.co/api/people/?format=json');
  request.get().then((data) => {
    this.characterData = data;
    PubSub.publish('Characters:characters-ready', this.characterData);
    this.publishNames(data);
  });
}

Characters.prototype.publishNames = function (data) {
  this.characterData = data;
  this.name = this.uniqueNameList();
  console.log(data);
  PubSub.publish('Characters:name-ready', this.name);
}

Characters.prototype.characterList = function () {
  const fullList = this.name.map(character => character.name);
  console.log(fullList);
  return fullList;
}

Characters.prototype.uniqueNameList = function () {
  return this.characterList().filter((character, index, array) => {
    return array.indexOf(character) === index;
  });
}

Characters.prototype.charactersByName = function (nameIndex) {
  const selectedName = this.name[nameIndex];
  return this.characterData.filter((character) => {
    return character.name === selectedName;
  });
};

Characters.prototype.publishCharacterssByName = function (nameIndex) {
  const foundCharacters = this.charactersByName(nameIndex);
  PubSub.publish('Characters:characters-ready', foundCharacters);
};

module.exports = Characters;





// const PubSub = require('../helpers/pub_sub.js');
//
// const StarWars = function(){
//   this.starWars = [];
// }
//
// StarWars.prototype.getData = function(){
//   const xhr = new XMLHttpRequest();
//
//   xhr.addEventListener('load', () => {
//     if (xhr.status != 200){
//       return;
//   }
//   const jsonString = xhr.responseText;
//   const data = JSON.parse(jsonString);
//   this.countries = data;
//   PubSub.publish('StarWars:all-data', this.starWars);
//   console.log('working?', data);
//   });
//
//  xhr.open('GET', 'https://swapi.co/api/');
//  xhr.setRequestHeader('Accept', 'application/json')
//  xhr.send();
//
// }
//
// StarWars.prototype.bindEvents = function() {
//   PubSub.publish('StarWars:data-ready', this.starWars);
//
//   PubSub.subscribe('SelectView:selected', (event) => {
//     const selectedIndex = event.detail;
//     const star = this.findStar(selectedIndex);
//     PubSub.publish('StarWars:chosen-selected', star);
//
//   });
// }
//
// StarWars.prototype.findStar = function (index) {
//   return this.starWars[index];
// }
//
//
// module.exports = StarWars;
//
//
//
//
// // const RequestHelper = require('../helpers/request.js');
// // const PubSub = require('../helpers/pub_sub.js');
// //
// // const StarWars = function () {
// //   this.starWarsData = [];
// //
// // };
// //
// // StarWars.prototype.getData = function(){
// //   const xhr = new XMLHttpRequest();
// //
// //   xhr.addEventListener('load', () => {
// //     if (xhr.status != 200){
// //       return;
// //   }
// //
// //   const jsonString = xhr.responseText;
// //   const data = JSON.parse(jsonString);
// //   this.starWarsData = data;
// //   PubSub.publish('StarWars:loaded', this.starWarsData);
// //   console.log('working ?', data);
// // });
// //
// // xhr.open('GET', 'https://swapi.co/api/');
// // xhr.setRequestHeader('Accept', 'application/json')
// // xhr.send();
// // };
// // // StarWars.prototype.bindEvents = function () {
// // //   PubSub.subscribe('SelectView:change', (event) => {
// // //     const characterIndex = event.detail;
// // //     this.publishStarWarsByCharacters()
// // //   })
// // // };
// //
// // // StarWars.prototype.getData = function () {
// // //   const request = new RequestHelper('https://swapi.co/api/')
// // //   console.log('working ?', request);
// // //   request.get((data) => {
// // //     PubSub.publish('StarWars:choice-chosen', data)
// // //   })
// // // }
