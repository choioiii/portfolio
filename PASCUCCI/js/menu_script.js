const mainNavLis = document.querySelectorAll('#main_nav > ul > li > h3');

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


const subLnbLis = document.querySelectorAll('#lnb > ul > li > a');

subLnbLis.forEach(subLnbLi => {

  subLnbLi.onclick = (e) => {
    for( var i=0; i<subLnbLis.length; i++){
      if(subLnbLi == subLnbLis[i]){
        subLnbLi.parentNode.classList.add('active');
      }else{
        subLnbLis[i].parentNode.classList.remove('active');
      }
    }
  }
});