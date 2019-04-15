const blogViewOverlay = $('.blogview-overlay');

const open = (destination) => {
    renderImages(destination.images);
    renderDescription(destination.description);
    blogViewOverlay.style.display = 'flex';
};

const close = () => {
    blogViewOverlay.style.display = 'none';
};

const renderImages = (images) => {
    if (images) {
        for (let i = 0; i < images.length; i++) {
            let imageItem = images[i];
            imageItem = createElement('img')
            imageItem.className = 'infowindow-image'
            imageItem.src = images[i];
            blogViewOverlay.appendChild(imageItem);
        };
    };
    //create image view bla
};

const renderDescription = (description) => {
    //create description view bla
};

app.blogView = {
    open,
    close
};