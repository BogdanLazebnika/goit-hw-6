const menu = document.getElementById('menu-burger');
const toggleBtn = document.querySelector('.burger-button');
const closeBtn = document.getElementById('closeBtn-burger');

toggleBtn.addEventListener('click', () => {
  menu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});





const openModalBtn = document.querySelector('.hero-button');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modalBackdrop = document.querySelector('[data-modal]');

openModalBtn.addEventListener('click', () => {
  modalBackdrop.classList.add('is-open');
});

closeModalBtn.addEventListener('click', () => {
  modalBackdrop.classList.remove('is-open');
});
