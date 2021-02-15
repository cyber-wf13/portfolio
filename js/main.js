let menuBtn = $('.menu__btn');
let headerMenuBtn = $('.header__menu-btn');
let menu = $('.menu');

headerMenuBtn.on('click', function(){
  menu.animate({
    'top': '-4px',
  },500,'linear')
});

menuBtn.on('click', function(){
  menu.animate({
    'top': '-100px',
  },500,'linear')
});
