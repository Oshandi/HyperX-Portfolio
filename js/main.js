$(document).ready(function(){

	//parallax scrolling
	if($(window).width() > 768){
		var $window = $(window);

		$('section[data-type="background"]').each(function(){
			var $bgobj = $(this);
			$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			var bgpos = '50% '+ yPos + 'px';
			// Move the background
			$bgobj.css({ backgroundPosition: bgpos });
			});
		});
	}

	if (!Modernizr.video) {
			$('#homebg').css('display','none');
	}

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
		//var scrollPos = $(document).scrollTop();
		var scrollPos = $(window).scrollTop() + $(window).height() ;
		var scrollPosTop = $(window).scrollTop();
			$('#pagination div').each(function () {
				var currLink = $(this);
			  var refElement = $(currLink.attr("data-type"));
			  if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPosTop) {
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
