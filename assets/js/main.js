$(document).ready(() => {
    
    new $.fn.J_video_background({
        $el: $('.hero-video'),
        src:'./assets/videos/Lines1.mov',
        styleId:'c-j-video-back',
        zIndex: -1,
        mask: false
    });

    function calcLineHieght() {
        const mainContentHeight = $('.main').height();
        $('.line-container .line').css({
            // height: mainContentHeight - 5000 + 'px',
        });
    }

    $(window).on('resize', () => {
        calcLineHieght();
    });

    calcLineHieght();

    console.log($(window).width());

    if ($(window).width() > 767) {
        setTimeout(() => {
            const scroll = new LocomotiveScroll({
              el: document.querySelector('[data-scroll-container]'),
              lerp: 0.1,
              smooth: true,
            });
        }, 50);
    }

});