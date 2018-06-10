// Debounce do Lodash
debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

(function() {
var $target = $('.animar'),
animationClass = 'animar-start',
offset = $(window).height() * 3/4;

function animarScroll(){
  var documentTop = $(document).scrollTop();
  $target.each(function () {
  var itemTop = $(this).offset().top;
  if(documentTop > itemTop - offset){
    $(this).addClass(animationClass);
  }else{
    $(this).removeClass(animationClass);
  }
  })
}
animarScroll();

$(document).scroll(debounce(function(){
    animarScroll();
  }, 1000));
})();