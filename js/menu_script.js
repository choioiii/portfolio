
$('#main_nav > ul > li:nth-of-type(1)').click(function(){
    $('html, body').animate({
      scrollTop: 0
    }, 400);
});

$('#main_nav > ul > li:nth-of-type(2)').click(function(){

  $('html, body').animate({
    scrollTop: $('#about_me_top').offset().top
  }, 400);
});

$('#main_nav > ul > li:nth-of-type(3)').click(function(){

  $('html, body').animate({
    scrollTop: $('#works').offset().top
  }, 400);
});

$('#main_nav > ul > li:nth-of-type(4)').click(function(){

  $('html, body').animate({
    scrollTop: $('#contact_main').offset().top
  }, 400);
});