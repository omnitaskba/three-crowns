$(document).ready(() => {
    
    new $.fn.J_video_background({
        $el: $('.hero-video'),
        src:'./assets/videos/Lines1.mov',
        styleId:'c-j-video-back',
        zIndex: -1,
        mask: false
    });

    function calcLineHieght() {
        $('.line').css({height: '0px'});
        const mainContentHeight = $(document).height();
        $('.line-container .line').css({
            height: mainContentHeight - 250 + 'px',
        });
    }

    $(window).on('resize', () => {
        calcLineHieght();
    });

    calcLineHieght();

    console.log($(window).width());

    let portfolioOwl = $('.owl-carousel.portfolio-items-wrapper').owlCarousel({
        items: 1,
        loop: true
    });

    $('.portfolio-next').on('click', function() {
        portfolioOwl.trigger('next.owl.carousel');
    });

    $('.portfolio-prev').on('click', function() {
        portfolioOwl.trigger('prev.owl.carousel');
    });

    let newsOwl = $('.owl-carousel.news-items-wrapper').owlCarousel({
        items: 1,
        loop: true
    });

    $('.news-next').on('click', function() {
        newsOwl.trigger('next.owl.carousel');
    });

    $('.news-prev').on('click', function() {
        newsOwl.trigger('prev.owl.carousel');
    });

    let desktopPortfolioOwl = $('.owl-carousel.desktop-portfolio-owl').owlCarousel({
        items: 3,
        dotsEach: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    })
    
    $('.desktop-portfolio-next').on('click', function() {
        desktopPortfolioOwl.trigger('next.owl.carousel');
    });

    $('.desktop-portfolio-prev').on('click', function() {
        desktopPortfolioOwl.trigger('prev.owl.carousel');
    });

    // if ($(window).width() > 767) {
    //     setTimeout(() => {
    //         const scroll = new LocomotiveScroll({
    //           el: document.querySelector('[data-scroll-container]'),
    //           lerp: 0.1,
    //           smooth: true,
    //         });
    //     }, 250);
    // }

});