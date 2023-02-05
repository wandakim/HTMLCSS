const toggleBtn = document.querySelector('.navbar__toggleBtn');
const icons = document.querySelector('.navbar__icons');
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener('click', () => {
    icons.classList.toggle('active')
    menu.classList.toggle('active')
});
