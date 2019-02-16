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
    navigation: {
        nextEl: '.content__slider-next',
        prevEl: '.content__slider-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});

$(function() {
    $('.decrease-button button').click(function() {
        $('.content__top').toggleClass('active');
        $('.slider-nav').toggleClass('active');
        
    });
});

$(function() {
    $('.content__inner').click(function() {
        if ( $('.content__top').hasClass('active') ) {
            $('.content__top').removeClass('active');
        }
    });
});

$(document).ready(function() {

});

$('html').mouseover(function(){
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
});

