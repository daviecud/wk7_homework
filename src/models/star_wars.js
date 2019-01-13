const Request = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Character = function () {
  this.characterData = [];
  this.names = [];
};

Character.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (evt)  => {
    const namesIndex = evt.detail;
    this.publishCharacterByName(namesIndex);
  })
};


Character.prototype.getData = function(){
  const request = new Request('https://swapi.co/api/people/?format=json');
  request.get().then((data) => {
    this.characterData = data;
    PubSub.publish('Character:characters-ready', this.characterData);
    this.publishNames(data);
  });
}

Character.prototype.publishNames = function (data) {
  this.characterData = data;
  this.names = this.uniqueNameList();
  PubSub.publish('Character:names-ready', this.names);
}

Character.prototype.characterList = function () {
  const fullList = this.characterData.map(character => character.names);
  return fullList;
}

Character.prototype.uniqueNameList = function () {
  return this.characterList().filter((character, index, array) => {
    return array.indexOf(character) === index;
  });
}

Character.prototype.charactersByName = function (namesIndex) {
  const selectedName = this.names[namesIndex];
  return this.characterData.filter((character) => {
    return character.names === selectedName;
  });
};

Character.prototype.publishCharactersByName = function (namesIndex) {
  const foundCharacters = this.charactersByName(namesIndex);
  PubSub.publish('Character:characters-ready', foundCharacters);
};

module.exports = Character;





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
// // //     this.publishStarWarsByCharacter()
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
