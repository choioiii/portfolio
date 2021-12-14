const mainNavLis = document.querySelectorAll('#main_nav > li > span');

mainNavLis.forEach(mainNavLi => {

  mainNavLi.onclick = (e) => {
    for( var i=0; i<mainNavLis.length; i++){
      if(mainNavLi == mainNavLis[i]){
        mainNavLi.parentNode.classList.toggle('active');
      }else{
        mainNavLis[i].parentNode.classList.remove('active');
      }
    }
  }
});
