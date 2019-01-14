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
