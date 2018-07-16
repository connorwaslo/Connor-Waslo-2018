(() => {
  'use strict';

  console.log('Running');
  // Page is loaded
  const objects = document.getElementsByClassName('async-img');
  Array.from(objects).map((item) => {
    // Start loading image
    const img = new Image();
    img.src = item.dataset.src;
    console.log('Running2');
    // Once image is loaded replace the src of the HTML element
    img.onload = () => {
      item.classList.remove('async-img');
      return item.nodeName === 'IMG' ?
        item.src = item.dataset.src :
        item.style.backgroundImage = `url(${item.dataset.src})`;
    };
  });
})();
