let menuBtn = $('.menu__btn');
let headerMenuBtn = $('.header__menu-btn');
let menu = $('.menu');
let popup = $('.portfolio__popup');
let asideBtn = $('.portfolio__aside-btn');
let cards = document.querySelectorAll('.block-image__card');
let center = document.querySelectorAll('.block-image__center');

asideBtn.each(function(i){
  $(this).on('click', function(){
    if ($(this).attr('data-toggle') == 'hide'){
      popup.eq(i).animate({
        'width': '560px',
        'opacity': 1,
      }, 300);
      $(this).animate({'left':'520px',}, 400);
      popup.eq(i).children().animate({
        'width': '540px',
      },600);
      $(this).attr('data-toggle', 'show');
      $(this).addClass('portfolio__aside-btn--rotate');
    }else{
      if ($(this).attr('data-toggle') == 'show') {
        popup.eq(i).animate({
          'width': '0px',
          'opacity': 0,
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

let cardTopLeft = LeaderLine.pointAnchor(cards[0], { x: cards[0].clientWidth + 5, y: 52.5 });
let cardBottomLeft = LeaderLine.pointAnchor(cards[1], { x: cards[1].clientWidth + 5, y: 52.5 });

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

let propertyLineLeft = {
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
}

new LeaderLine(LeaderLine.pointAnchor(center[0], { x: -5, y: center[0].clientHeight / 3 }), cardTopLeft, propertyLineRight).hide('none').show('draw', {
  duration: 800,
});

new LeaderLine(LeaderLine.pointAnchor(center[0], { x: -5, y: (center[0].clientHeight / 3) * 2 }), cardBottomLeft, propertyLineRight).hide('none').show('draw', {
  duration: 800,
});


let cardTopRight = LeaderLine.pointAnchor(cards[2], { x: -5, y: 52.5 });
let cardBottomRight = LeaderLine.pointAnchor(cards[3], { x: -5, y: 52.5 });

new LeaderLine(LeaderLine.pointAnchor(center[0], { x: 165, y: center[0].clientHeight / 3 }), cardTopRight, propertyLineLeft).hide('none').show('draw', {
  duration: 800,
});
new LeaderLine(LeaderLine.pointAnchor(center[0], { x: 165, y: (center[0].clientHeight / 3 * 2) }), cardBottomRight, propertyLineLeft).hide('none').show('draw', {
  duration: 800,
});


let cardTopLeftSkill = LeaderLine.pointAnchor(cards[4], { x: cards[4].clientWidth + 5, y: 50 });
let cardBottomLeftSkill = LeaderLine.pointAnchor(cards[5], { x: cards[5].clientWidth + 5, y: 50 });

new LeaderLine(LeaderLine.pointAnchor(center[1], { x: -5, y: center[1].clientHeight / 3 }), cardTopLeftSkill, propertyLineRight).hide('none').show('draw', {
  duration: 800,
});


new LeaderLine(LeaderLine.pointAnchor(center[1], { x: -5, y: (center[1].clientHeight / 3) * 2 }), cardBottomLeftSkill, propertyLineRight).hide('none').show('draw', {
  duration: 800,
});


let cardTopRightSkill = LeaderLine.pointAnchor(cards[6], { x: -5, y: 50 });
let cardBottomRightSkill = LeaderLine.pointAnchor(cards[7], { x: -5, y: 50 });

new LeaderLine(LeaderLine.pointAnchor(center[1], { x: 205, y: center[1].clientHeight / 3 }), cardTopRightSkill, propertyLineLeft).hide('none').show('draw', {
  duration: 800,
});
new LeaderLine(LeaderLine.pointAnchor(center[1], { x: 205, y: (center[1].clientHeight / 3 * 2) }), cardBottomRightSkill, propertyLineLeft).hide('none').show('draw', {
  duration: 800,
});

