const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = socument.querySelector('.info .metadata . title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
}); 