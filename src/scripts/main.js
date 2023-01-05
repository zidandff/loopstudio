const menuBtn = document.querySelector('.hamburger-menu');
const menu = document.getElementById('menu-mobile');


menuBtn.addEventListener('click', ()=> {
  menuBtn.classList.toggle('expand');
  menu.classList.toggle('-translate-x-full')
})


