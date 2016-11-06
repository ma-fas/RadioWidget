var radioStations = [
  {
    'name': 'Putin FM',
    'frequency': '66,6',
    'posterImg': '../img/posterimg.png'
  },
  {
    'name': 'Dribble FM',
    'frequency': '101,2',
    'posterImg': '../img/posterimg.png'
  },
  {
    'name': 'Doge FM',
    'frequency': '99,4',
    'posterImg': '../img/posterimg.png'
  },
  {
    'name': 'Ballads FM',
    'frequency': '87,1',
    'posterImg': '../img/posterimg.png'
  },
  {
    'name': 'Maximum FM',
    'frequency': '142,2',
    'posterImg': '../img/posterimg.png'
  },
];

$('.widget-footer').before('<div class="listing-container"></div>');
$('.listing-container').append('<div class="widget-listing"><ul></ul></div>');

$('.widget-listing ul').append(radioStations.map(
  (radioStation) => `<li>`
                      + `<div class="radio-station-info" style="display: none">`
                        + `<button class="btn-minus"><img src="https://raw.githubusercontent.com/netguru/junior-frontend-recruitment-task/master/imgs/minus.png"/></button>`
                        + `<div class="poster-img">`
                            + `<img src="${radioStation.posterImg}"/>`
                        + `</div>`
                        + `<button class="btn-plus"><img src="https://raw.githubusercontent.com/netguru/junior-frontend-recruitment-task/master/imgs/plus.png"/></button>`
                      + `</div>`
                      + `<div class="radio-station">`
                        + `<div class="radio-station-name">${radioStation.name}</div>`
                        + `<div class="radio-station-frequency">${radioStation.frequency}</div>`
                      + `</div>`
                    + `</li>`
).join(''));

$('.radio-station').click(function(){
  $(this).parent().siblings().find('.radio-station').removeClass('on');
  $(this).toggleClass('on')
		.parent().find('.radio-station-info').slideToggle()
		.parent().siblings().find('.radio-station-info').slideUp();
  
    if ($(this).hasClass('on')) {
      $('.widget-footer').children().addClass('show');
    } else {
      $('.widget-footer').children().removeClass('show');
    }
      
    $('.station-current').html($(this).find('.radio-station-name').html());
});

