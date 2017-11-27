app.directive('slider', function($timeout) {
    return {
        restrict: 'AE',
        replace: true,
        scope: {
            images: '='
        },
        link: function(scope, elem, attrs) {

            // elem.click(function(e) {
            // 	 e.preventDefault();
            // 	 scope.imageneslista = true; // Change state
            // });

            elem.ready(function() {
                scope.imageneslista = true; // Change state
            })

            scope.currentIndex = 0;

            scope.next = function() {
                scope.currentIndex < scope.images.length - 1
                    ? scope.currentIndex++
                    : scope.currentIndex = 0;
            };

            scope.prev = function() {
                scope.currentIndex > 0
                    ? scope.currentIndex--
                    : scope.currentIndex = scope.images.length - 1;
            };

            scope.$watch('currentIndex', function() {
                scope.images.forEach(function(image) {
                    image.visible = false;
                });
                scope.images[scope.currentIndex].visible = true;
            });

            /* Start: For Automatic slideshow*/

            var timer;

            var sliderFunc = function() {
                timer = $timeout(function() {
                    scope.next();
                    timer = $timeout(sliderFunc, 1500);
                }, 1500);
            };

            sliderFunc();

            scope.$on('$destroy', function() {
                $timeout.cancel(timer);
            });

        },
        templateUrl: 'partials/slider'
    }
});

app.directive('youtube', function($window) {
    return {
        restrict: "E",
        scope: {
            videoid: "@"
        },
        template: '<div></div>',
        link: function(scope, element) {

            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            var player;

            $window.onYouTubeIframeAPIReady = function() {
                player = new YT.Player(element.children()[0], {
                    videoId: scope.videoid,
                    playerVars: {
                        loop: 1,
                        rel: 0
                    }
                });
            };

            scope.$watch('videoid', function(newValue, oldValue) {

                  if (newValue == oldValue) {
                    return;
                  }

                  player.cueVideoById(scope.videoid);

            });

        }
    }
});

app.service('anchorSmoothScroll', function(){

    this.scrollTo = function(eID) {

        // This scrolling function
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript

        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };

});
