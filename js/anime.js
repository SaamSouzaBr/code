$(".scroll").click(function(e){        
	  e.preventDefault();
	  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
	});


$(".a").click(function(event){ 
  event.preventDefault();       
	  $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	});