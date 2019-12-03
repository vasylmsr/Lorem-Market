const menu = document.querySelector('.menu');
const menuOpenButton = document.querySelector('.button-open');

menuOpenButton.onclick = () => {
  menu.classList.toggle('menu_opened');
};

new Carousel(document.querySelector('.header'));
