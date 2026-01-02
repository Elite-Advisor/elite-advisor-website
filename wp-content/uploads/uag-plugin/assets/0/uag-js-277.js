document.addEventListener("DOMContentLoaded", function(){ window.addEventListener("DOMContentLoaded", function(){
	var swiper = new Swiper( ".uagb-block-1e5ce600 .uagb-swiper",
		{"autoplay":{"delay":6000,"disableOnInteraction":false,"pauseOnMouseEnter":false,"stopOnLastSlide":false},"loop":true,"speed":800,"effect":"slide","direction":"horizontal","flipEffect":{"slideShadows":false},"fadeEffect":{"crossFade":true},"pagination":false,"navigation":false}	);
});

window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-33afe6ff' );
});
window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-d45e5594', {"layout":"number","heading":"<strong>Relevamientos Wifi en los \u00faltimos 5 a\u00f1os<\/strong>","numberPrefix":"","numberSuffix":"+","startNumber":0,"endNumber":50,"totalNumber":150,"decimalPlaces":0,"animationDuration":1500,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-9a8eecca', {"layout":"number","heading":"<strong>Proyectos de IT implementados en los \u00faltimos 4 a\u00f1os<\/strong>","numberPrefix":"","numberSuffix":"+","startNumber":0,"endNumber":100,"totalNumber":150,"decimalPlaces":0,"animationDuration":1500,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
window.addEventListener( 'load', function() {
	UAGBCounter.init( '.uagb-block-754c54c5', {"layout":"number","heading":"<strong>Partners y Resellers activos trabajan con nosotros<\/strong>","numberPrefix":"","numberSuffix":"+","startNumber":0,"endNumber":30,"totalNumber":450,"decimalPlaces":0,"animationDuration":1500,"thousandSeparator":",","circleSize":230,"circleStokeSize":8,"isFrontend":true} );
});
window.addEventListener("DOMContentLoaded", function(){
	var swiper = new Swiper( ".uagb-block-730f13e1 .uagb-swiper",
		{"autoplay":{"delay":3000,"disableOnInteraction":false,"pauseOnMouseEnter":false,"stopOnLastSlide":false},"loop":true,"speed":800,"effect":"fade","direction":"horizontal","flipEffect":{"slideShadows":false},"fadeEffect":{"crossFade":true},"pagination":false,"navigation":false}	);
});

window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-3ba22442' );
});
var ssLinksParent = document.querySelector( '.uagb-block-c0108d94' );
ssLinksParent?.addEventListener( 'keyup', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link && e.keyCode === 13 ) {
	handleSocialLinkClick( link );
}
});

ssLinksParent?.addEventListener( 'click', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link ) {
	handleSocialLinkClick( link );
}
});

function handleSocialLinkClick( link ) {
var social_url = link.dataset.href;
var target = "";
if ( social_url == "mailto:?body=" ) {
	target = "_self";
}
var request_url = "";
if ( social_url.indexOf("/pin/create/link/?url=") !== -1 ) {
	request_url = social_url + encodeURIComponent( window.location.href ) + "&media=" + '';
} else {
	request_url = social_url + encodeURIComponent( window.location.href );
}
window.open( request_url, target );
}
var ssLinksParent = document.querySelector( '.uagb-block-10e0dbac' );
ssLinksParent?.addEventListener( 'keyup', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link && e.keyCode === 13 ) {
	handleSocialLinkClick( link );
}
});

ssLinksParent?.addEventListener( 'click', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link ) {
	handleSocialLinkClick( link );
}
});

function handleSocialLinkClick( link ) {
var social_url = link.dataset.href;
var target = "";
if ( social_url == "mailto:?body=" ) {
	target = "_self";
}
var request_url = "";
if ( social_url.indexOf("/pin/create/link/?url=") !== -1 ) {
	request_url = social_url + encodeURIComponent( window.location.href ) + "&media=" + '';
} else {
	request_url = social_url + encodeURIComponent( window.location.href );
}
window.open( request_url, target );
}
 });