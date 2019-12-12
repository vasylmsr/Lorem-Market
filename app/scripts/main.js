// Visibility of mobile menu

const menu = document.querySelector('.menu');
const menuOpenButton = document.querySelector('.menu__button');

menuOpenButton.onclick = () => {
  menu.classList.toggle('menu_opened');
};



// Create carousel instance

new Carousel(document.querySelector('.header'));



// Change active link of menu

const menuLinks = document.querySelectorAll('.menu__link');
const menuActiveLinkClass = "menu__item_active";
// First method  [].forEach.call method uses in order to call forEach method in pseudo array
[].forEach.call(menuLinks, link => {
  link.onclick = function(e) {
    // Second method - The Array.from() method returns an Array object from any object
    Array.from(menuLinks);
    menuLinks.forEach(el => el.parentElement.classList.remove(menuActiveLinkClass));
    e.target.parentElement.classList.add(menuActiveLinkClass);
  }
});