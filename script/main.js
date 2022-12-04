const nav = document.querySelector('#nav');
const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const mobileMenuBtnImg = document.querySelector('#mobile-menu-btn img');
const overlay = document.querySelector('#overlay');

mobileMenuBtn.addEventListener('click', () => {
  if (nav.classList.toggle('open')) {
    mobileMenuBtnImg.src = '../img/icons/icon-close-menu.svg';
  } else {
    mobileMenuBtnImg.src = '../img/icons/icon-menu.svg';
  }
  overlay.classList.toggle('open');
});
