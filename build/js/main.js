var flag = false;

var galleryThumbs = new Swiper('.slider-nav', {
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var galleryTop = new Swiper('.content__slider', {
    spaceBetween: 0,
    thumbs: {
        swiper: galleryThumbs
    }
});

$(function() {
    $('.decrease-button button').click(function() {
        $('.content__top').toggleClass('active');
        Cookies.set('flag', 'active', { expires: 182 });
        $('.slider-nav').toggleClass('active');
    });
});

$(function() {
    $('.content__inner').click(function() {
        if ( $('.content__top').hasClass('active') ) {
            $('.content__top').removeClass('active');
            Cookies.set('flag', 'notActive', { expires: 182 });
        }
    });
});

$(document).ready(function() {
    if (Cookies.get('flag') === 'active') {
        $('.content__top').addClass('active');
    } else {
        $('.content__top').removeClass('active');
    }
});

function checkStatus() {
    if ( $('.content__top').hasClass('active') ) {
        galleryThumbs.params.slidesPerView = '1';
        var galleryTop = new Swiper('.content__slider', {
            spaceBetween: 0,
            navigation: {
                nextEl: '.content__slider-next',
                prevEl: '.content__slider-prev',
            },
        });
        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;
        galleryThumbs.update();
        $('.slider-nav .swiper-wrapper').css({'justify-content': 'initial'});
    } else {
        galleryThumbs.params.slidesPerView = '5';
        galleryThumbs.update();
        $('.slider-nav .swiper-wrapper').css({'justify-content': 'center'});
    }
}

$(document).ready(function() {
    checkStatus();
});

$('html').mouseover(function(){
    checkStatus();
});
