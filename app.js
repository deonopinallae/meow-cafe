
const menuBtn = document.querySelector('.header__btn-menu')
const menu = document.querySelector('.header__btn-menu--event')
const x = document.querySelector('.header__btn-menu--x')

menuBtn.addEventListener('click', function(){
    menu.classList.add('open')

})

x.addEventListener('click', function(){
    menu.classList.remove('open')    

})