const CharacterDetailView = function () {};

CharacterDetailView.prototype.createCharacterDetail = function (character) {
  const characterDetail = document.createElement('div');
  characterDetail.classList.add('character-detail');

  const name = document.createElement('h3');
  name.textContent = character.name;
  characterDetail.appendChild(name);

  const detailsList = document.createElement('ul');
  const skin_color = this.createDetailListItem('Skin Color:', character.skin_color);
  detailsList.appendChild(skin_color);

  const gender = this.createDetailListItem('Gender', character.gender)
  detailsList.appendChild(gender);

  const home = this.createDetailListItem('Homeworld - ', character.homeworld)

  characterDetail.appendChild(detailsList);
  return characterDetail;
};

CharacterDetailView.prototype.createDetailListItem = function (label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};

module.exports = CharacterDetailView;






// const PubSub = require('../helpers/pub_sub.js');
// const Data = require('../models/star_wars.js');
//
// const StarWarsInfoView = function() {
//
// };
//
// StarWarsInfoView.prototype.bindEvents = function() {
//   PubSub.subscribe('StarWars:chosen-selected', (event) => {
//     const starWars = event.detail;
//     this.render(starWars);
//   });
// }
//
// StarWarsInfoView.prototype.render = function (star) {
//   const container = document.querySelector('#details');
//   container.innerHTML = '';
//   // console.log('working', container);
//   const header = this.addElement('h2', star.name);
//   console.log('working', header);
//   const region = this.addElement('p', star.region);
//
//   const languageHeader = this.addElement('h3', 'Languages Spoken:');
//   const language = this.addElement('p', star.languages[0].name);
//
//   const flag = this.addElement('img', star.flag);
//
//   container.appendChild(header);
//   console.log('work', (header));
//   container.appendChild(region);
//   container.appendChild(languageHeader);
//   container.appendChild(language);
//   container.appendChild(flag);
//
//
// };
//
// StarWarsInfoView.prototype.addElement = function(type, text) {
//   const element = document.createElement(type);
//   element.textContent = text;
//   return element;
//
// }
//
//
// module.exports = StarWarsInfoView;
