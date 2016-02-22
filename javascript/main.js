$(document).ready(function() {
  var _min = 1,
      _max = 75;

  card_init(_min, _max);
  $('#lottery').click(function(){
    randomFlip(_min, _max);
    show();
  });

  $(document).keyup(function(event){
    if (event.keyCode == 32) {
      randomFlip(_min, _max);
      show();
      return false;
    }
  });
});

function randomFlip(min, max) {
  $('div.flip-it').addClass('fliped').removeClass('flip-it');
  $('#lot_' + get_random($('div.lottery_card'))).addClass('flip-it');
}

function get_random(doms) {
  var random_pool = [];

  doms.each(function(i){
    if (!$(this).hasClass('fliped') && !$(this).hasClass('flip-it')) {
      random_pool.push($(this).text());
    }
  });

  return random_pool[Math.floor(Math.random() * random_pool.length)];
}

function card_init(min, max) {
  for (i = max; i >= min; i--) {
    $('h2').last().after($('<div></div>').text(i).attr('id', 'lot_' + i).addClass('lottery_card'));
  }
}

function show() {
  var current_number = $('div.flip-it').first().text();
  if (current_number) {
    $('#show').append($('<div></div>').text(current_number).addClass('show_card'));
    $('.show_card').last().fadeIn();
  }
}