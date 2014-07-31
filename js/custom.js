    /*
     *Domino HTML5 Template v1.0
     *Copyright 2014 8Guild.com
     *All scripts for Domino HTML5 One Page Template
     */

jQuery(document).ready(function($) {
   'use strict';
			
    var toValign = $('.toValign');
    $(window).on('load', function() {
        toValign.css('height', $(window).height() - 135);

        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({
            'overflow': 'visible'
        });

        $(".header").waypoint('sticky');
    });


    $(window).on('resize', function() {
        toValign.css('height', $(window).height() - 135);
    });

        $('.loginOverBtn').click(function(event) {
            event.preventDefault();
            $('#loginOverlay').addClass('overlayOpened');
            $('body').css('overflow', 'hidden');
        });

        $('.signOverlayBtn').click(function(event) {
            event.preventDefault();
            $('#signOverlay').addClass('overlayOpened');
            $('body').css('overflow', 'hidden');
        });

        $('.messageOverlayBtn').click(function(event) {
            event.preventDefault();
            $('#messageOverlay').addClass('overlayOpened');
            $('body').css('overflow', 'hidden');
        });

        $('.menuOverlayBtn').click(function(event) {
            event.preventDefault();
            $('#menuOverlay').addClass('overlayOpened');
            $('body').css('overflow', 'hidden');
        });

        $('.expandOverlayBtn').click(function(event) {
            event.preventDefault();
            $('#epandOverlay').addClass('overlayOpened');
            $('body').css('overflow', 'hidden');
        });

        $(document).on('click','.overlayClose', function() {
            $('.overlayDiv').removeClass('overlayOpened');
            $('body').css('overflow', 'visible');
        });

        $(document).keyup(function(e) {

            if (e.keyCode == 27) { 
            $('.overlayDiv').removeClass('overlayOpened');
            $('body').css('overflow', 'visible');
            $('.thumbsOverlayInner').hide();
            $('.ovrlayThumbsGrid .container').append($('.thumbsOverlayInner .gridContentPanes'));
            $('.ovrlayThumbsGrid .container').append($('.thumbsOverlayInner .thumbsGrid'));
            $('.ovrlayThumbsGrid .thumbsGrid li').show();
            $('.gridContentPanes .gridContent').removeClass('active');
            } // esc
        });


        //Thumbnails Grid Actions -----------------------------------
        /*Filtering Thumbnails*/
        $('.thumbsGridSorting .nav li').click(function() {
            $('.thumbsGridSorting .nav li').removeClass('active');
            $(this).addClass('active');
            var $filter = $(this).attr("data-filter");
            $('.thumbsGrid li').removeClass('active');
            $('.thumbsGrid li.' + $filter).addClass('active');
            if ($filter === "all") {
                $('.thumbsGrid li').addClass('active');
            }
        });

        /*Open Overlay / Append Content*/
        $(document).on('click', '.overlayOpen.active', function(e) {
            $('#thumbsOverlay').addClass('overlayOpened');
            $('body').css('overflow', 'hidden');
            var $target = $(this).attr('data-target');
            $('.gridContentPanes .gridContent').removeClass('active');
            $('#' + $target).addClass('active');
            $('.thumbsOverlayInner').append($('.ovrlayThumbsGrid .gridContentPanes'));
            $('.thumbsOverlayInner').append($('.ovrlayThumbsGrid .thumbsGrid'));
            $('.thumbsOverlayInner .thumbsGrid li').hide();
            $('.thumbsOverlayInner .thumbsGrid li.active').show();
            $('.thumbsOverlayInner').show();
        });

        $('.overlayClose').click(function() {
            $('.overlayDiv').removeClass('overlayOpened');
            $('body').css('overflow', 'visible');
            $('.thumbsOverlayInner').hide();
            $('.ovrlayThumbsGrid .container').append($('.thumbsOverlayInner .gridContentPanes'));
            $('.ovrlayThumbsGrid .container').append($('.thumbsOverlayInner .thumbsGrid'));
            $('.ovrlayThumbsGrid .thumbsGrid li').show();
            $('.gridContentPanes .gridContent').removeClass('active');
        });

        // Menu mobile view button
        $('div.menu').click(function() {
            $(this).toggleClass('close');
        });

        $(window).on('load', function() {
            /*Checking if it's touch device we disable parallax feature due to inconsistency*/
            if (Modernizr.touch) {
                $('body').removeClass('parallax');
            }
            $('.parallax').stellar({
                horizontalScrolling: false,
                responsive: true
            });
        });

        // Slider activation & settings
        var owl = $("#tabbedSLider_01");

        owl.owlCarousel({
            responsiveClass: true,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            margin: 0,
            loop: true,
            nav: false,
            navText: false,
            dotsContainer: ".customBullet",
            responsive: {
                320: {
                    center: true,
                    items: 1
                },
                750: {
                    center: true,
                    items: 1
                },
                1200: {
                    center: true,
                    items: 1
                }
            }
        });

        // Custom navigation for slider
        $(".customNext").click(function() {
            owl.trigger('next.owl.carousel');
        });
        $(".customPrev").click(function() {
            owl.trigger('prev.owl.carousel');
        });


        //Post Image Slider
        $('#postSlider').owlCarousel({
            responsiveClass: true,
            margin: 30,
            loop: true,
            nav: false,
            center: true,
            responsive: {
                320: {
                    center: true,
                    items: 1
                },
                768: {
                    center: true,
                    items: 2
                },
                960: {
                    center: true,
                    items: 3
                },
                1200: {
                    center: true,
                    items: 3
                }
            }
        });

        $('.carousel').carousel({
            interval: 9000
        });

        //Enable Touch / swipe events for carousel 
        $(".carousel-inner").swipe({
            //Generic swipe handler for all directions
            swipeRight: function(event, direction, distance, duration, fingerCount) {
                $(this).parent().carousel('prev');
            },
            swipeLeft: function() {
                $(this).parent().carousel('next');
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold: 0
        });

        ////////////////////////////////////////////////////////////
        //INTERNAL ANCHOR LINKS SCROLLING (NAVIGATION)
        $(".scroll").click(function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 40
            }, 1000, 'easeInOutQuart');
        });

        /*Scroll Up*/
        $('.scroll-up').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 1000, 'easeInOutQuart');
            return false;
        });

        //SCROLL-SPY
        // Cache selectors
        var lastId,
            topMenu = $(".navbar-collapse"),
            topMenuHeight = topMenu.outerHeight(),
            // All list items
            menuItems = topMenu.find("a"),
            // Anchors corresponding to menu items
            scrollItems = menuItems.map(function() {
                var item = $($(this).attr("href"));
                if (item.length) {
                    return item;
                }
            });

        // Bind to scroll
        $(window).scroll(function() {
            // Get container scroll position
            var fromTop = $(this).scrollTop() + topMenuHeight + 200;

            // Get id of current scroll item
            var cur = scrollItems.map(function() {
                if ($(this).offset().top < fromTop)
                    return this;
            });
            // Get the id of the current element
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";

            if (lastId !== id) {
                lastId = id;
                // Set/remove active class
                menuItems
                    .parent().removeClass("active")
                    .end().filter("[href=#" + id + "]").parent().addClass("active");
            }
        });
        ////////////////////////////////////////////////////////////////////


        /*Initializing Gallery Plugin
         *******************************************/
        gallery.init();

        Grid.init();

        $('.gallery-grid').lightGallery({
            speed: 400
        });

    });
    //Document Ready Close ---------------------------------------

    // Main menu transparency out ant stick to top
    $('.userCounterBlock').waypoint(function(direction) {
        counting.init() + 'down';
    }, {
        offset: '75%',
        triggerOnce: true
    });


    var socialHeight = $('.sotialIconsMain').height ();
    $('.sotialIconsMain').css('margin-top', -socialHeight/2);

    $(window).scroll( function() {
        if ($('body').scrollTop() > $(window).height()) {
            $('.sotialIconsMain').addClass('socialFixed');
        } else {
            $('.sotialIconsMain').removeClass('socialFixed');
        }
    });

    var counting = (function() {
        var that = {};
        that.init = function() {


            $(".qty").each(function() {
                var dataNumbers = $(this).attr('data-qty');

                $(this).numerator({
                    easing: 'swing', // easing options.
                    duration: 2000, // the length of the animation.
                    delimiter: '.',
                    rounding: 0, // decimal places.
                    toValue: dataNumbers // animate to this value.
                });
            });
        };

        return that;

    })();

    /*Gallery Filtering and Responsiveness Function
     *******************************************/
    var gallery = (function($) {
        'use strict';

        var $grid = $('.gallery-grid'),
            $filterOptions = $('.filters'),
            $sizer = $grid.find('.shuffle__sizer'),

            init = function() {

                // None of these need to be executed synchronously
                setTimeout(function() {
                    listen();
                    setupFilters();
                }, 100);

                $grid.on('loading.shuffle done.shuffle shrink.shuffle shrunk.shuffle filter.shuffle filtered.shuffle sorted.shuffle layout.shuffle', function(evt, shuffle) {
                    // Make sure the browser has a console
                    if (window.console && window.console.log && typeof window.console.log === 'function') {
                        console.log('Shuffle:', evt.type);
                    }
                });

                // instantiate the plugin
                $grid.shuffle({
                    itemSelector: '.gallery-item',
                    sizer: $sizer
                });
            },

            // Set up button clicks
            setupFilters = function() {
                var $btns = $filterOptions.children();
                $btns.on('click', function(e) {
                    var $this = $(this),
                        isActive = $this.hasClass('active'),
                        group = $this.data('group');
                    $('.filters .active').removeClass('active');
                    $this.addClass('active');

                    // Filter elements
                    $grid.shuffle('shuffle', group);
                    e.preventDefault();
                });

                $btns = null;
            },

            listen = function() {
                var debouncedLayout = $.throttle(300, function() {
                    $grid.shuffle('update');
                });

                // Get all images inside shuffle
                $grid.find('img').each(function() {
                    var proxyImage;

                    // Image already loaded
                    if (this.complete && this.naturalWidth !== undefined) {
                        return;
                    }

                    // If none of the checks above matched, simulate loading on detached element.
                    proxyImage = new Image();
                    $(proxyImage).on('load', function() {
                        $(this).off('load');
                        debouncedLayout();
                    });

                    proxyImage.src = this.src;
                });

                // Because this method doesn't seem to be perfect.
                setTimeout(function() {
                    debouncedLayout();
                }, 500);
            };

        return {
            init: init
        };
    }(jQuery));








