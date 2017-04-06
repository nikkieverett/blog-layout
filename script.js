var headerImage = document.querySelector('.header-image');
var logo = document.querySelector('.logo');
var bodyContainer = document.querySelector('.container');



window.addEventListener('scroll', function(){

  if(document.body.scrollTop > 100){
    headerImage.classList.add('resize-image');
    logo.classList.add('resize-logo-to-nav');
    bodyContainer.classList.add('increase-body-margin');

  }
  else if(document.body.scrollTop < 200){
    headerImage.classList.remove('resize-image');
    logo.classList.remove('resize-logo-to-nav');
    bodyContainer.classList.remove('increase-body-margin');

  }
});
