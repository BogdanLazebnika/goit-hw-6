const menu = document.getElementById('menu');
const toggleBtn = document.querySelector('.burger-button');
const closeBtn = document.getElementById('closeBtn');

toggleBtn.addEventListener('click', () => {
  menu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
});