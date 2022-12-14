var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    loop: true,
    speed: 800,
    // simulateTouch: false,
    // autoplay: {
    //     delay: 6000,
    //
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },

});
var swiper2 = new Swiper(".mySwiper2", {
    speed: 550,
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    breakpoints: {
        0: {
            slidesPerView: 2.3,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        576: {
            slidesPerView: 4.1,
            spaceBetween: 20,
            slidesPerGroup: 4,
        },
        768: {
            slidesPerView: 5.1,
            spaceBetween: 15,
            slidesPerGroup: 5,
        },
        992: {
            slidesPerView: 6.1,
            spaceBetween: 15,
            slidesPerGroup: 6,
        },
        1200: {
            slidesPerView: 7.1,
            spaceBetween: 15,
            slidesPerGroup: 7,
        },
        1400: {
            slidesPerView: 8.1,
            spaceBetween: 15,
            slidesPerGroup: 8,
        },
        1920: {
            slidesPerView: 9.1,
            spaceBetween: 15,
            slidesPerGroup: 9,
        }
    },
});
var swiper3 = new Swiper(".mySwiper3", {
    speed: 500,
    navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.3,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 1.9,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.1,
            slidesPerGroup: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 2.8,
            slidesPerGroup: 2,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 3.1,
            slidesPerGroup: 3,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 4.1,
            slidesPerGroup: 4,
            spaceBetween: 20,
        },
        1920: {
            slidesPerView: 5.1,
            slidesPerGroup: 5,
            spaceBetween: 20,
        }
    },
});
var swiper4 = new Swiper(".mySwiper4", {
    speed: 500,
    navigation: {
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 1.9,
            slidesPerGroup: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.1,
            slidesPerGroup: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 2.8,
            slidesPerGroup: 2,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
        },
        1920: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 20,
        }
    },
});
var swiper5 = new Swiper(".mySwiper5", {
    speed: 400,
    navigation: {
        nextEl: ".swiper-button-next5",
        prevEl: ".swiper-button-prev5",
    },
    breakpoints: {
        0: {
            slidesPerView: 3.1,
            slidesPerGroup: 3,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 4.1,
            slidesPerGroup: 4,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 5.1,
            slidesPerGroup: 5,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 6.1,
            slidesPerGroup: 6,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 7.1,
            slidesPerGroup: 7,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 8.1,
            slidesPerGroup: 8,
            spaceBetween: 15,
        },
        1920: {
            slidesPerView: 9.1,
            slidesPerGroup: 9,
            spaceBetween: 15,
        }
    },
});


/* GET ALL VIDEOS */
var sliderVideos = $(".swiper-slide video");

/* SWIPER API - Event will be fired after animation to other slide (next or previous) */
swiper.on('slideChange', function () {
    $('.swiper-slide video.muted').prop('muted', true);
    var mute = 'assets/imgs/volume-off.svg'
    $('.mute-btn').find('img').attr('src', mute);
    // console.log('slide changed');
    /* stop all videos (currentTime buggy without this loop idea) */
    sliderVideos.each(function (index) {

        this.currentTime = 0;
        this.pause();
        // setTimeout(function () {
        //     $(this).currentTime = 0;
        //
        //     // do here..
        // },)
        // setTimeout((function(){
        //     this.paused ? this.play() : this.pause();
        //     $(this).get(0).currentTime = 0;
        // }).bind(this), 10000);
    });

    /* SWIPER GET CURRENT AND PREV SLIDE (AND VIDEO INSIDE) */
    var prevVideo = $("[data-swiper-slide-index=" + this.previousIndex + "]").find("video");
    var currentVideo = $("[data-swiper-slide-index=" + this.realIndex + "]").find("video");
    prevVideo.trigger('stop');
    currentVideo.trigger('play');

});


//mute video
$('.mute-btn').click(function (e) {
    var video = $(this).closest('.swiper-slide').find("video.muted");
    e.preventDefault();
    if (video.prop('muted')) {
        video.prop('muted', false);
        // $(this).attr('href', '#nav');
        var unmute = 'assets/imgs/volume.svg'
        $(this).find('img').attr('src', unmute);
    } else {
        var mute = 'assets/imgs/volume-off.svg'
        video.prop('muted', true);
        $(this).find('img').attr('src', mute);
    }
});

//video duration => coming soon
var video = $('.coming-soon .video-holder video');
for (let i = 0; i < video.length; i++) {
    video[i].onloadedmetadata = function (e) {
        $(this).closest('.video-holder').find('.video-time').html(this.duration)
    }
}


//fix header
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var header = document.querySelector("header");
var navbarHeight = header.offsetTop;
// console.log(navbarHeight)

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 0);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up');
        }
    }

    lastScrollTop = st;
}


// change background header=>scroll
window.onscroll = function () {
    myFunction()
};

var sticky = header.offsetHeight;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky-header");
        header.classList.add('position-fixed');

    } else {
        header.classList.remove("sticky-header");
        +
            header.classList.remove('position-fixed');

    }
}


//show/hide filter
$(document).ready(function () {
    $('.filter-button').on('click', function (event) {
        $('.filters').toggleClass('d-none');
        $(this).children('.icon-chevron-down, .icon-chevron-up').toggleClass("icon-chevron-down, icon-chevron-up");
    });
});

//show/hide search holder
$(document).ready(function () {
    $('.search-btn').on('click', function (event) {
        $('.search-holder').removeClass('d-none');
        $('.main-content').addClass('d-none');
    });
    $('.close-btn-search-holder').on('click', function (event) {
        $('.search-holder').addClass('d-none');
        $('.main-content').removeClass('d-none');
    });
});
