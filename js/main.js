let menuBtn = $('.menu__btn');
let headerMenuBtn = $('.header__menu-btn');
let menu = $('.menu');
let popup = $('.portfolio__popup');
let asideBtn = $('.portfolio__aside-btn');
let cards = document.querySelectorAll('.block-image__card');
let center = document.querySelectorAll('.block-image__center');

let popupWidth = 560;
if (window.innerWidth <= 768){
  popupWidth = 540;
}
if (window.innerWidth <= 576){
  popupWidth = 400;
}
if (window.innerWidth <= 430){
  popupWidth = 290;
}
asideBtn.each(function(i){
  $(this).on('click', function(){
    if ($(this).attr('data-toggle') == 'hide'){
      popup.eq(i).animate({
        'width': popupWidth + 'px',
        'opacity': 1,
        'font-size': '20px',
      }, 300);
      $(this).animate({'left':(popupWidth-40) + 'px',}, 400);
      popup.eq(i).children().animate({
        'width': (popupWidth-20) + 'px',
      },600);
      $(this).attr('data-toggle', 'show');
      $(this).addClass('portfolio__aside-btn--rotate');
    }else{
      if ($(this).attr('data-toggle') == 'show') {
        popup.eq(i).animate({
          'width': '0px',
          'opacity': 0,
          'font-size': '0px',
        }, 300);
        $(this).animate({'left':'10px'}, 400);
        popup.eq(i).children().animate({
          'width': '0px',
        },600);
        $(this).attr('data-toggle', 'hide');
        $(this).removeClass('portfolio__aside-btn--rotate');
    }}
      
  });
});


headerMenuBtn.on('click', function () {
  menu.animate({
    'top': '-4px',
  }, 300 )
});

menuBtn.on('click', function () {
  menu.animate({
    'top': '-100px',
  }, 300)
});

let propertyLineRight = {
  color: '#3EC695',
  size: 2,
  path: 'grid',
  endSocket: 'right',
  startPlug: 'disc',
  endPlug: 'disc',
  startPlugSize: 1,
  endPlugSize: 1,
  startPlugColor: '#4EBD88',
  endPlugColor: '#4EBD88',
}
let propertyLineLeft = {};
Object.assign(propertyLineLeft,  propertyLineRight);
propertyLineLeft.endSocket = 'left';
let leftTopHandSide = {
  x:0,
  y: '33%',
}
let rightTopHandSide = {
  x: '100%',
  y: '33%',
}
let leftBottomHandSide = {
  x:0,
  y: '66%',
}
let rightBottomHandSide = {
  x: '100%',
  y: '66%',
}
let anim = {
  duration: 800,
}

if (window.innerWidth < 1200){
  propertyLineRight.endSocket = 'bottom';
  propertyLineLeft.endSocket = 'top';
}

const centerTopLeft = LeaderLine.pointAnchor(center[0], leftTopHandSide);
const centerTopRight = LeaderLine.pointAnchor(center[0], rightTopHandSide);
const centerBottomLeft = LeaderLine.pointAnchor(center[0], leftBottomHandSide);
const centerBottomRight = LeaderLine.pointAnchor(center[0], rightBottomHandSide);

let cardTopLeft = new LeaderLine (centerTopLeft, cards[0]);
let cardTopRight;
let cardBottomRight = new LeaderLine (centerBottomRight, cards[3]);
let cardBottomLeft;

if (window.innerWidth < 1200){
  cardTopRight = new LeaderLine (centerTopRight, cards[1]);
  cardBottomLeft = new LeaderLine (centerBottomLeft, cards[2]);
}else{
  cardTopRight = new LeaderLine (centerBottomLeft, cards[1]);
  cardBottomLeft = new LeaderLine (centerTopRight, cards[2]);
}

const centerSkillTopLeft = LeaderLine.pointAnchor(center[1], leftTopHandSide);
const centerSkillTopRight = LeaderLine.pointAnchor(center[1], rightTopHandSide);
const centerSkillBottomLeft = LeaderLine.pointAnchor(center[1], leftBottomHandSide);
const centerSkillBottomRight = LeaderLine.pointAnchor(center[1], rightBottomHandSide);

const cardSkillTopLeft = new LeaderLine (centerSkillTopLeft, cards[4]);
let cardSkillTopRight;
let cardSkillBottomLeft;
const cardSkillBottomRight = new LeaderLine (centerSkillBottomRight, cards[7]);
if (window.innerWidth < 1200){
  cardSkillTopRight = new LeaderLine (centerSkillTopRight, LeaderLine.pointAnchor(cards[5], {x:'85%', y:'100%'}));
  cardSkillBottomLeft = new LeaderLine (centerSkillBottomLeft, cards[6]);
}else{
  cardSkillTopRight = new LeaderLine (centerSkillBottomLeft, cards[5]);
  cardSkillBottomLeft = new LeaderLine (centerSkillTopRight, cards[6]);
}

for (const prop in propertyLineRight) {
  cardTopLeft[prop] = propertyLineRight[prop];
  cardTopRight[prop] = propertyLineRight[prop];
  cardSkillTopLeft[prop] = propertyLineRight[prop];
  cardSkillTopRight[prop] = propertyLineRight[prop];
}

for (const prop in propertyLineLeft) {
  cardBottomLeft[prop] = propertyLineLeft[prop];
  cardBottomRight[prop] = propertyLineLeft[prop];
  cardSkillBottomLeft[prop] = propertyLineLeft[prop];
  cardSkillBottomRight[prop] = propertyLineLeft[prop];
}

cardTopLeft.hide('none').show('draw', anim);
cardTopRight.hide('none').show('draw', anim);
cardBottomLeft.hide('none').show('draw', anim);
cardBottomRight.hide('none').show('draw', anim);

cardSkillTopLeft.hide('none').show('draw', anim);
cardSkillTopRight.hide('none').show('draw', anim);
cardSkillBottomLeft.hide('none').show('draw', anim);
cardSkillBottomRight.hide('none').show('draw', anim);


