const closeModal = () => {
    app.overlay.$modal.style.display = "none";
    emptyForm();
};

const prefilledForm = destination => {
    const { position, name, description, continent } = destination;
    if (name) $(".name").value = name;
    if (description) $(".description").value = description;
    if (continent) $(".continent").value = continent;
    if (position) {
        $(".latitude").value = position.lat;
        $(".longitude").value = position.lng;
    }
};

const emptyForm = () => {
    $(".name").value = "";
    $(".description").value = "";
    $(".continent").value = "";
    $(".latitude").value = "";
    $(".longitude").value = "";
    $(".post-button").remove();
    $(".close-button").remove();
};

const openAddDestinationForm = (onSave, options, destination = {}) => {
    app.overlay.$modal.style.display = "flex";
    prefilledForm(destination);

    const closeButton = createElement("button");
    closeButton.textContent = "Close";
    closeButton.className = "close-button";
    closeButton.addEventListener("click", app.overlay.closeModal);

    const saveButton = createElement("button");
    saveButton.textContent = "Save";
    saveButton.className = "post-button";

    saveButton.addEventListener("click", () => {
        const modalBox = $(".modal-content");
        const name = $("#name-input", modalBox).value;
        const continent = $("#continent-input", modalBox).value;
        const description = $("#description-input", modalBox).value;
        const latitude = parseFloat($("#latitude-input", modalBox).value);
        const longitude = parseFloat($("#longitude-input", modalBox).value);
        const position = { latitude, longitude };

        const imageInput = $('#image-input');
        const imageFile = imageInput.files[0];
        app.uploadImage(imageFile).then((downloadUrl) => {
            console.log('downloadUrl>', downloadUrl);
            const dataToSave = {
                name,
                continent,
                description,
                position,
                userName: app.userName,
                image: downloadUrl
            };
            onSave(dataToSave, destination.id);
        });
    });
    const buttonContainer = $(".button-container");
    buttonContainer.appendChild(saveButton);
    buttonContainer.appendChild(closeButton);
};

app.overlay = {
    $modal: $(".modal"),
    openAddDestinationForm,
    closeModal,
    prefilledForm
};