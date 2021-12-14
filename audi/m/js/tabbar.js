$('.label > ul > li').click(function(){
  var index=$(this).index();
  var ttl=$(this).parent().parent().parent().children('.label').children('ul').children('li');
  var cont=$(this).parent().parent().parent().children('.description').children('div');

  ttl.removeClass('active');
  cont.removeClass('active');

  ttl.eq(index).addClass('active');
  cont.eq(index).addClass('active');
});