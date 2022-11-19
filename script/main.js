const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileFadeBlock = document.querySelector('.mobile-fade-block');

mobileMenu.addEventListener('click', () => {
  mobileFadeBlock.classList.remove('hidden');
  menu.classList.remove('hidden');
});

mobileMenuClose.addEventListener('click', () => {
  menu.classList.add('hidden');
  mobileFadeBlock.classList.add('hidden');
});
