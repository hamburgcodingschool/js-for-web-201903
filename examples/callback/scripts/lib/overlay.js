const closeModal = () => {
    app.overlay.$modal.style.display = 'none';
};

const createInputFields = (inputTypes, modalBox, options, destination) => {
    inputTypes
        .map(type => {
            const input = createElement('input');
            const span = createElement('span');
            input.id = `${type}-input`;
            if (destination.position) {
                input.value = destination[type];
            }
            if (type === 'latitude') {
                input.className = 'latitude'
                if (destination.position) {
                    input.value = destination.position.lat;
                }
            }
            if (type === 'longitude') {
                input.className = 'longitude'
                if (destination.position) {
                    input.value = destination.position.lng;
                }
            }
            span.textContent = `Enter ${type}:`;
            return [span, input];
        })
        .forEach(pair => {
            modalBox.appendChild(pair[0]);
            modalBox.appendChild(pair[1]);
        });
};

const openAddDestinationForm = (onSave, options, destination = {}) => {
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


    createInputFields(inputTypes, modalBox, options, destination);

    const closeButton = createElement('button');
    closeButton.textContent = 'Close';
    closeButton.className = 'close-button';
    closeButton.addEventListener('click', app.overlay.closeModal);

    const saveButton = createElement('button');
    saveButton.textContent = 'Save';
    saveButton.className = 'post-button';
    saveButton.addEventListener('click', () => {

        const name = $('#name-input', modalBox).value;
        const continent = $('#continent-input', modalBox).value;
        const description = $('#description-input', modalBox).value;
        const latitude = parseFloat($('#latitude-input', modalBox).value);
        const longitude = parseFloat($('#longitude-input', modalBox).value);
        const position = { latitude, longitude }
        const dataToSave = { name, continent, description, position, userName: app.userName };

        onSave(dataToSave, destination.id);
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
}