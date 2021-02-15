let menuBtn = $('.menu__btn');
let headerMenuBtn = $('.header__menu-btn');
let menu = $('.menu');
let cards = document.querySelectorAll('.block-image__card');
let center = document.querySelectorAll('.block-image__center');

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

let cardTopLeft = LeaderLine.pointAnchor(cards[0], {x: 360, y: 52.5});
let cardBottomLeft = LeaderLine.pointAnchor(cards[1], {x: 410, y: 52.5});

new LeaderLine(LeaderLine.pointAnchor(center[0], {x: -5, y: center[0].clientHeight / 3}), cardTopLeft, {
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
}).hide('none').show('draw', {
    duration: 800,
  });


new LeaderLine(LeaderLine.pointAnchor(center[0], {x: -5, y: (center[0].clientHeight / 3) * 2}), cardBottomLeft, {
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
}).hide('none').show('draw', {
  duration: 800,
});


let cardTopRight = LeaderLine.pointAnchor(cards[2], {x: -5, y: 52.5});
let cardBottomRight = LeaderLine.pointAnchor(cards[3], {x: -5, y: 52.5});



new LeaderLine(LeaderLine.pointAnchor(center[0], {x: 165, y: center[0].clientHeight / 3}), cardTopRight, {
  color: '#3EC695',
  size: 2,
  path: 'grid',
  endSocket: 'left',
  startPlug: 'disc',
  endPlug: 'disc',
  startPlugSize: 1,
  endPlugSize: 1,
  startPlugColor: '#4EBD88',
  endPlugColor: '#4EBD88',
}).hide('none').show('draw', {
  duration: 800,
});
new LeaderLine(LeaderLine.pointAnchor(center[0], {x: 165, y: (center[0].clientHeight / 3 * 2)}), cardBottomRight, {
  color: '#3EC695',
  size: 2,
  path: 'grid',
  endSocket: 'left',
  startPlug: 'disc',
  endPlug: 'disc',
  startPlugSize: 1,
  endPlugSize: 1,
  startPlugColor: '#4EBD88',
  endPlugColor: '#4EBD88',
}).hide('none').show('draw', {
  duration: 800,
});




let cardTopLeftSkill = LeaderLine.pointAnchor(cards[4], {x: 290, y: 50});
let cardBottomLeftSkill = LeaderLine.pointAnchor(cards[5], {x: 290, y: 50});

new LeaderLine(LeaderLine.pointAnchor(center[1], {x: -5, y: center[1].clientHeight / 3}), cardTopLeftSkill, {
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
}).hide('none').show('draw', {
    duration: 800,
  });


new LeaderLine(LeaderLine.pointAnchor(center[1], {x: -5, y: (center[1].clientHeight / 3) * 2}), cardBottomLeftSkill, {
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
}).hide('none').show('draw', {
  duration: 800,
});


let cardTopRightSkill = LeaderLine.pointAnchor(cards[6], {x: -5, y: 50});
let cardBottomRightSkill = LeaderLine.pointAnchor(cards[7], {x: -5, y: 50});



new LeaderLine(LeaderLine.pointAnchor(center[1], {x: 205, y: center[1].clientHeight / 3}), cardTopRightSkill, {
  color: '#3EC695',
  size: 2,
  path: 'grid',
  endSocket: 'left',
  startPlug: 'disc',
  endPlug: 'disc',
  startPlugSize: 1,
  endPlugSize: 1,
  startPlugColor: '#4EBD88',
  endPlugColor: '#4EBD88',
}).hide('none').show('draw', {
  duration: 800,
});
new LeaderLine(LeaderLine.pointAnchor(center[1], {x: 205, y: (center[1].clientHeight / 3 * 2)}), cardBottomRightSkill, {
  color: '#3EC695',
  size: 2,
  path: 'grid',
  endSocket: 'left',
  startPlug: 'disc',
  endPlug: 'disc',
  startPlugSize: 1,
  endPlugSize: 1,
  startPlugColor: '#4EBD88',
  endPlugColor: '#4EBD88',
}).hide('none').show('draw', {
  duration: 800,
});

