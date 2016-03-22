if ( $(window).width() > 500) {

$(window).on('beforeunload', function() {
   $(window).scrollTop(0);
});

$(document).ready(function() {
	
	$(window).bind('scroll', function(e) {
		parallax();
	});

});

$(function() {
  $( "#button" ).click(function() {
    $( "#button" ).addClass( "onclic", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $( "#button" ).removeClass( "onclic" );
      $( "#button" ).addClass( "validate", 450, callback );
    }, 2250 );
  }
    function callback() {
      setTimeout(function() {
        $( "#button" ).removeClass( "validate" );
      }, 1250 );
    }
  });

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

function parallax() {
	var scrollPosition = $(window).scrollTop();
	$('#moon').css('top', (100 - (scrollPosition * .2)) + 'px');
	$('.layer-two').css('bottom', (0 - (scrollPosition * .3)) + 'px');
	$('.bats-layer-one').css('top', (4600 - (scrollPosition * .2)) + 'px');
}

var $window = $(window);
var scrollFade = function ($element, friction, offset) {
  friction  = (friction  === undefined)? 0.5 : friction;

  var parentHeight = $element.parent().outerHeight() * 0.5;
  var previousOpacity = Infinity;

  $window.scroll(function() {
    var scrollTop = Math.max(0, $window.scrollTop())
      , yOffset   = ($element.outerHeight() * -0.5) + scrollTop * friction
      , opacity   = 1 - (scrollTop / parentHeight - (parentHeight * offset))

    if (opacity < 0 && previousOpacity < 0) return;

    $element.css({
      opacity: opacity
    });

    previousOpacity = opacity;
  });
}

scrollFade($('.text-block')
  , 0.5  // Friction (0 ~ 1): lower = none
  , 0    // Fade duration (0 ~ 1): lower = longer
);

}