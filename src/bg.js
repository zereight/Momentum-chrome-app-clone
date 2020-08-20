const body = document.querySelector("body");

const IMG_NUMBER = 3;

const applyImage = (imgNumber) => {
  const image = new Image();
  image.src = `../images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
};

function init() {
  const randomNumber = Math.floor(Math.random() * IMG_NUMBER);
  console.log(randomNumber);
  applyImage(randomNumber);
}

init();
