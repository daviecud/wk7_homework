const Characters = require('./models/star_wars.js');
const SelectView = require('./views/select_view.js');
const CharacterListView = require('./views/star_wars_list_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');

  const selectElement = document.querySelector('select#character-select');
    const selectView = new SelectView(selectElement);
    selectView.bindEvents();

    const listContainer = document.querySelector('#character-list');
    const characterListView = new CharacterListView(listContainer);
    characterListView.bindEvents();

    const characters = new Characters;
    characters.bindEvents();
    characters.getData();
  });
