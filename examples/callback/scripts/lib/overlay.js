const closeModal = () => {
  app.overlay.$modal.style.display = 'none';
};

const createInputFields = (inputTypes, modalBox, options) => {
  inputTypes
    .map(type => {
      const input = createElement('input');
      const span = createElement('span');
      input.id = `${type}-input`;
      if (type === 'latitude') {
        input.value = options.position.lat;
      }
      if (type === 'longitude') {
        input.value = options.position.lng;
      }
      span.textContent = `Enter destination ${type}:`;
      return [span, input];
    })
    .forEach(pair => {
      modalBox.appendChild(pair[0]);
      modalBox.appendChild(pair[1]);
    });
};

const openAddDestinationForm = (onSave, options) => {
  // if (!app.auth.user) {
  //   return;
  // }

  app.overlay.$modal.style.display = 'flex';
  const modalBox = createElement('div');
  modalBox.className = 'modal-content';

  const inputTypes = [
    'name',
    'continent',
    'description',
    'latitude',
    'longitude'
  ];

  createInputFields(inputTypes, modalBox, options);

  const closeButton = createElement('button');
  closeButton.textContent = 'Close';
  closeButton.className = 'close-button';
  closeButton.addEventListener('click', app.overlay.closeModal);

  const saveButton = createElement('button');
  saveButton.textContent = 'Post new destination';
  saveButton.className = 'post-button';
  saveButton.addEventListener('click', () => {
    const parent = event.target.parentNode;
    const name = $('#name-input', parent).value;
    const continent = $('#continent-input').value;
    const description = $('#description-input').value;
    const latitude = parseFloat($('#latitude-input').value);
    const longitude = parseFloat($('#longitude-input').value);

    onSave({name, continent, description, latitude, longitude});
  });

  modalBox.appendChild(saveButton);
  modalBox.appendChild(closeButton);

  app.overlay.$modal.appendChild(modalBox);
};

app.overlay = {
  $modal: $('.modal'),
  openAddDestinationForm,
  closeModal,
  createInputFields
};
