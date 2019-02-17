var galleryThumbs = new Swiper('.slider-nav', {
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
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
        $('.swiper-button-next').css({'right': '37%'});
        $('.swiper-button-prev').css({'left': '37%'});
        galleryThumbs.update();
    } else {
        $('.swiper-button-next').css({'right': '0'});
        $('.swiper-button-prev').css({'left': '0'});
        if (galleryThumbs.params.slidesPerView !== '5') {
            galleryThumbs.params.slidesPerView = '5';
            galleryThumbs.update();
        }
    }
}

$(document).ready(function() {
    if ($('.slider-nav .swiper-slide').length > 5) {
        $('.swiper-button-next, .swiper-button-prev').css({'display': 'block'});
    } 
});

function changeContainerAligning() {
    if ($('.slider-nav .swiper-slide').length > 5) {
        $('.slider-nav .swiper-wrapper').css({'justify-content': 'initial'});
        $('.swiper-button-next, .swiper-button-prev').css({'display': 'block'});
    } else if ($('.content__top').hasClass('active') && $('.slider-nav .swiper-slide').length <= 5) {
        $('.slider-nav .swiper-wrapper').css({'justify-content': 'initial'});
    } else if ($('.content__top').hasClass('active') && $('.slider-nav .swiper-slide').length > 5) {
        $('.slider-nav .swiper-wrapper').css({'justify-content': 'center'});
    } else {
        $('.slider-nav .swiper-wrapper').css({'justify-content': 'center'});
    }
}

$(document).ready(function() {
    checkStatus();
    changeContainerAligning();
});

$('html').mouseover(function(){
    checkStatus();
    changeContainerAligning();
});
