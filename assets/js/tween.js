// app.directive('texto', function() {
//
//     var scrollMagicController = new ScrollMagic.Controller();
//
//     $('.texto').each(function(){
//
//         console.log(this);
//
//         var elemento = this.children[0];
//
//         tl = new TimelineLite();
//
//         tl
//             .from(elemento, .05 , {autoAlpha: 0, ease:Power4.easeIn})
//             .set({}, {}, .2)
//             .to(elemento, .1 , {autoAlpha: 0, ease:Power4.easeOut});
//
//         var scene = new ScrollMagic.Scene({
//             triggerElement: elemento,
//             triggerHook: .5,
//             duration: '300px'/* How many pixels to scroll / animate */
//         })
//         .setTween(tl)
//         .setPin(elemento)
//         .addTo(scrollMagicController)
//         .addIndicators();
//
//     })
//
// });

app.directive('main', function() {

        // $.scrollify({
        //     section : "section",
        // });

    	// 	init scrollmagic
    	var controller = new ScrollMagic.Controller();

    	// 	loop through slides
    	$(".parallax").each( function () {

    		var bg = $(this).find(".background");

    		// Add tweenmax for backgroundParallax
    		var parallax = TweenMax.from( bg, 1, {
    			y: '-50%',
    			ease: Power0.easeNone
    		} );

    		// Create scrollmagic scene
    		var parallaxScene = new ScrollMagic.Scene({
    			triggerElement: this, // <-- Use this to select current element
    			triggerHook: 1,
    			duration: '200%',
    		})
    		.setTween( parallax )
    		.addTo(controller);
            // .addIndicators();
    	});

});
