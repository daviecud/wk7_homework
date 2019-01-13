const PubSub = require('../helpers/pub_sub.js');
const CharacterDetailView = require('./star_wars_detail_view.js');

const CharacterListView = function (container) {
  this.container = container;
};

CharacterListView.prototype.bindEvents = function () {
  PubSub.subscribe('Character:characters-ready', (evt) => {
    this.clearList();
    this.renderCharacterDetailViews(evt.detail);
  });
};

CharacterListView.prototype.clearList = function () {
  this.container.innerHTML = '';
};

CharacterListView.prototype.renderCharacterDetailViews = function (characters) {
  characters.forEach((character) => {
    const characterItem = this.createCharacterListItem(character);
    this.container.appendChild(characterItem);
  });
};

CharacterListView.prototype.createCharacterListItem = function (character) {
  const characterDetailView = new CharacterDetailView();
  const characterDetail = characterDetailView.createCharacterDetail(character);
  return characterDetail;
};

module.exports = CharacterListView;
