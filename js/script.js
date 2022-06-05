
let currentSlideIndex;

$(document).ready(() => {

    currentSlideIndex = 0;
    $("#menu-item-bio").on("click", scrollUp);
    $("#menu-item-portfolio, #text-link-portfolio").on("click", scrollDown);

    $('.test-popup-link').magnificPopup({
      type: 'image'
    });
});


/* Scroll up to bio */
function scrollUp() {
  if($("body").hasClass("portfolio-active")) {
      $("body").removeClass("portfolio-active")
        .addClass("bio-active");
      currentSlideIndex--;
      
      const $currentSlide = $(".background").eq(currentSlideIndex);
      $currentSlide.removeClass("down-scroll").addClass("up-scroll");
  }
}

/* Scroll down to portfolio */
function scrollDown() {

  if($("body").hasClass("bio-active")) {
      $("body").removeClass("bio-active")
        .addClass("portfolio-active");
      currentSlideIndex++;

      const $previousSlide = $(".background").eq(currentSlideIndex - 1);
      $previousSlide.removeClass("up-scroll").addClass("down-scroll");

  }
}
