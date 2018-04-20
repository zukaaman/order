window.onscroll = function() {
  var nav = document.querySelector('.header');

  if ( window.pageYOffset > 10 ) {
      nav.classList.add("fixed");
  } else {
      nav.classList.remove("fixed");
  }
}
