$(document).ready(function(){

  //menu toggle
	$('.menu').on('click', function(ev) {
	    $('.menu').toggleClass('active');
	 });

   //smooth scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

	//pagination functionality
	function onScroll(e){
		var scrollPos = $(document).scrollTop();
			$('#pagination div').each(function () {
				var currLink = $(this);
			  var refElement = $(currLink.attr("data-type"));
			  if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			  	$('#pagination div').removeClass("active");
			    	currLink.addClass("active");
			    }
			    else{
			      currLink.removeClass("active");
			    }
			  });
	}
	$(document).on("scroll", onScroll);

  //portfolio gallery
  $(".item").click(function (e) {
      e.stopPropagation();
      $(".item").removeClass("clicked");
      $(this).toggleClass("clicked");
      $("body").addClass("showingItem");

    });

    $('html').click(function() {
       $(".item").removeClass("clicked");
       $("body").removeClass("showingItem");
    });

});
