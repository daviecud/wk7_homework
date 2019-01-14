const PubSub = require('../helpers/pub_sub.js');
const CharacterDetailView = require('./star_wars_detail_view.js');
const StarWarsData = require('../models/star_wars.js')

const CharacterListView = function (container) {
  this.container = container;
};
console.log(CharacterListView);
CharacterListView.prototype.bindEvents = function () {
  PubSub.subscribe('Characters:name-ready', (evt) => {
    const characters = evt.detail;
    

    this.render(characters);
  });
};
//log is telling me that the data is subscribed,
// and I have an array to work wth


// having problem
CharacterListView.prototype.render = function (characters) {
  this.clearList();

  characters.forEach((character) => {
    console.log(character);
    const characterItem = this.createCharacterListItem(character);
    this.container.appendChild(characterItem);
  });
};

CharacterListView.prototype.clearList = function () {
  this.container.innerHTML = '';
};

CharacterListView.prototype.createCharacterListItem = function (character) {
  const characterDetailView = new CharacterDetailView();
  const characterDetail = characterDetailView.createCharacterDetail(character);
  return characterDetail;
};

module.exports = CharacterListView;
