const createListItem = destination => {
  console.log(destination);

  const itemContainerElement = createElement('li');
  const titleElement = createElement('div');
  const positionElement = createElement('div');

  itemContainerElement.className = 'destination-list-item';
  titleElement.className = 'destination-list-item-title';
  titleElement.textContent = destination.name;
  positionElement.textContent = `${destination.position.lat}, ${
    destination.position.lng
  }`;
  positionElement.className = 'position-list-item';

  itemContainerElement.appendChild(titleElement);
  itemContainerElement.appendChild(positionElement);

  return itemContainerElement;
};

app.list = {
  $destinationsList: $('.destinations-list'),
  createListItem
};
