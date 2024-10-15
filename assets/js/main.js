// Loader fade out-----------------------

$(document).ready(function () {
  $('.loader-wrapper').fadeOut("slow");
})

// before After Gallery-----------------------

var divisor = document.getElementById("divisor"),
  handle = document.getElementById("handle"),
  slider = document.getElementById("slider");

function moveDivisor() {
  handle.style.left = slider.value + "%";
  divisor.style.width = slider.value + "%";
}

window.onload = function () {
  moveDivisor();
};

var divisor2 = document.getElementById("divisor2"),
  handle2 = document.getElementById("handle2"),
  slider2 = document.getElementById("slider2");

function moveDivisor2() {
  handle2.style.left = slider2.value + "%";
  divisor2.style.width = slider2.value + "%";
}

window.onload = function () {
  moveDivisor2();
};

var divisor3 = document.getElementById("divisor3"),
  handle3 = document.getElementById("handle3"),
  slider3 = document.getElementById("slider3");

function moveDivisor3() {
  handle3.style.left = slider3.value + "%";
  divisor3.style.width = slider3.value + "%";
}

window.onload = function () {
  moveDivisor3();
};

// TestimonialSwiper---------------------------

var swiper = new Swiper(".TestimonialSwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});


// TeamSwiper---------------------------

var swiper = new Swiper(".TeamSwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

// Header Sticky---------------------------

$(function () {
  var pageScroll = 200;
  $(window).scroll(function () {
    var scroll = getCurrentScroll();
    if (scroll >= pageScroll) {
      $('.topbar').addClass('top_fix');
    }
    else {
      $('.topbar').removeClass('top_fix');
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});