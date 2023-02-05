const moreBtn = document.querySelector('.videoinfo .metadata .moreBtn');
const title = document.querySelector('.videoinfo .metadata .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});
